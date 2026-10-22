import test from "node:test";
import assert from "node:assert/strict";
import {verifyChallenge,verifyOauthDiscovery,verifyAnonymousDocumentation}
  from "./oauth-review-contract.mjs";

const base="https://docsy.remcp.site";
const challenge='Bearer realm="Docsy", resource_metadata="'+base
  +'/.well-known/oauth-protected-resource/mcp", scope="docsy:read"';
function response(status=401,auth=challenge){
  return {status,headers:new Headers({"www-authenticate":auth,
    "cache-control":"no-store"})};
}
test("accepts exact protected-resource Bearer challenge",()=>{
  assert.doesNotThrow(()=>verifyChallenge(response(),base));
});
test("rejects 200 and missing OAuth metadata hints",()=>{
  assert.throws(()=>verifyChallenge(response(200),base),/401/);
  assert.throws(()=>verifyChallenge(response(401,'Bearer realm="Docsy"'),base),
    /Incomplete OAuth/);
});
test("requires protected resource, authorization code, refresh and PKCE",async()=>{
  const fetcher=async url=>{
    const path=new URL(url).pathname;
    const json=path.includes("protected-resource")?{
      resource:base+"/mcp",authorization_servers:[base],scopes_supported:["docsy:read"]
    }:{
      issuer:base,registration_endpoint:base+"/oauth/register",
      authorization_endpoint:base+"/oauth/authorize",
      token_endpoint:base+"/oauth/token",code_challenge_methods_supported:["S256"],
      grant_types_supported:["authorization_code","refresh_token"],
      scopes_supported:["docsy:read"]
    };
    return new Response(JSON.stringify(json),{status:200,
      headers:{"content-type":"application/json"}});
  };
  await verifyOauthDiscovery(base,fetcher);
});
test("anonymous source-linked documentation is real, not OAuth-only",async()=>{
  const fetcher=async url=>{
    const path=new URL(url).pathname;
    return path==="/v2/libs/search"
      ?new Response(JSON.stringify({results:[{libraryId:"/reactjs/react.dev"}]}),{status:200})
      :new Response("Source: https://react.dev/reference/react/useEffect\nVersion: main",{status:200});
  };
  await verifyAnonymousDocumentation(base,fetcher);
});
test("rejects uncited anonymous documentation",async()=>{
  const fetcher=async url=>{
    const path=new URL(url).pathname;
    return path==="/v2/libs/search"
      ?new Response(JSON.stringify({results:[{libraryId:"/reactjs/react.dev"}]}),{status:200})
      :new Response("Documentation without citations",{status:200});
  };
  await assert.rejects(()=>verifyAnonymousDocumentation(base,fetcher),
    /source attribution/);
});
