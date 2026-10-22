// Public OAuth discovery and anonymous documentation contract for review scans.
// This performs read-only HTTP GETs; it never creates users or OAuth clients.
import assert from "node:assert/strict";

const jsonUrl=(base,path)=>base.replace(/\/+$/,"")+path;

export function verifyChallenge(response,base){
  assert.equal(response.status,401,"OAuth-required MCP must return 401");
  const challenge=response.headers.get("www-authenticate")??"";
  assert.match(challenge,/^Bearer\s/i,"Missing Bearer challenge");
  const required=[
    'realm="Docsy"',
    'scope="docsy:read"',
    'resource_metadata="'+jsonUrl(base,"/.well-known/oauth-protected-resource/mcp")+'"'
  ];
  for(const fragment of required){
    assert.ok(challenge.includes(fragment),"Incomplete OAuth challenge: "+fragment);
  }
  assert.match(response.headers.get("cache-control")??"",/no-store/i,
    "OAuth challenge must not be cached");
}

async function readJson(fetcher,url){
  const response=await fetcher(url,{headers:{accept:"application/json"},
    signal:AbortSignal.timeout(15_000)});
  assert.equal(response.status,200,"OAuth metadata unavailable: "+url+" ("+response.status+")");
  assert.match(response.headers.get("content-type")??"",/application\/json/,
    "OAuth metadata is not JSON: "+url);
  return response.json();
}

export async function verifyOauthDiscovery(base,fetcher=fetch){
  const resource=await readJson(fetcher,
    jsonUrl(base,"/.well-known/oauth-protected-resource/mcp"));
  assert.equal(resource.resource,jsonUrl(base,"/mcp"));
  assert.deepEqual(resource.authorization_servers,[base]);
  assert.ok(resource.scopes_supported?.includes("docsy:read"));

  const auth=await readJson(fetcher,jsonUrl(base,"/.well-known/oauth-authorization-server"));
  assert.equal(auth.issuer,base);
  assert.equal(auth.registration_endpoint,jsonUrl(base,"/oauth/register"));
  assert.equal(auth.authorization_endpoint,jsonUrl(base,"/oauth/authorize"));
  assert.equal(auth.token_endpoint,jsonUrl(base,"/oauth/token"));
  assert.ok(auth.code_challenge_methods_supported?.includes("S256"));
  assert.ok(auth.grant_types_supported?.includes("authorization_code"));
  assert.ok(auth.grant_types_supported?.includes("refresh_token"));
  assert.ok(auth.scopes_supported?.includes("docsy:read"));
}

export async function verifyAnonymousDocumentation(base,fetcher=fetch){
  const resolver=new URL(jsonUrl(base,"/v2/libs/search"));
  resolver.searchParams.set("libraryName","React");
  resolver.searchParams.set("query","useEffect cleanup");
  const search=await fetcher(resolver,{signal:AbortSignal.timeout(25_000)});
  assert.equal(search.status,200,"Public library resolver failed ("+search.status+")");
  const data=await search.json();
  assert.ok(Array.isArray(data.results)
    &&data.results.some(x=>x.libraryId==="/reactjs/react.dev"),
    "Public library resolver missing official React documentation");

  const context=new URL(jsonUrl(base,"/v2/context"));
  context.searchParams.set("libraryId","/reactjs/react.dev");
  context.searchParams.set("query","useEffect cleanup");
  const docs=await fetcher(context,{signal:AbortSignal.timeout(45_000)});
  assert.equal(docs.status,200,"Public versioned context failed ("+docs.status+")");
  const text=await docs.text();
  assert.ok(text.includes("Source: https://")&&text.includes("Version: "),
    "Public documentation API lost its source attribution or version");
}
