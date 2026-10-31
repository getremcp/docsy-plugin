# Docsy 中文使用指南：按版本检索官方技术文档

[English README](../README.md) · [官网](https://docsy.remcp.site) · [产品技术介绍](ANNOUNCEMENT.zh-CN.md)

Docsy 是面向 AI 编码助手的 MCP 开发文档检索服务。它帮助 Claude Code、Codex、Cursor 等客户端找到公开的 SDK、框架、开发库文档，识别具体版本，并提供可核实的原始来源链接。

**授权与安全：**云端 MCP 需要 OAuth 2.1 账号登录。未经授权直接访问时出现 HTTP 401 是正常行为，并非服务故障。五个 MCP 工具均为只读，不会运行终端命令或读取私有仓库。

## 五个 MCP 工具

| 工具 | 作用 |
| --- | --- |
| **resolve-library-id** | 解析开发库、框架、SDK 的规范 Docsy ID |
| **list-library-versions** | 列出版本，区分已收录文档与仅存在于上游的版本标签 |
| **query-docs** | 查询带来源链接的版本化文档片段，也支持仅返回来源链接 |
| **search** | 搜索已索引的公开文档，提供稳定结果 ID |
| **fetch** | 按稳定 ID 获取结果，或读取经过验证的发布者文档页面 |

注意：发现一个上游版本标签，不等于该版本全部文档已被索引。

## Claude Code

在终端执行：

    claude mcp add --transport http docsy https://docsy.remcp.site/mcp/registry

随后按照 Claude Code 的 MCP 授权流程完成 Docsy 账号登录。

## Codex CLI

    codex mcp add docsy --url https://docsy.remcp.site/mcp/registry
    codex mcp login docsy
    codex mcp get docsy

按照提示在浏览器中登录；不要将令牌提交到公开仓库。

## Cursor

将以下内容**合并**到 Cursor 的 MCP 配置中，不要覆盖已有服务器：

    {
      "mcpServers": {
        "docsy": {
          "url": "https://docsy.remcp.site/mcp/registry"
        }
      }
    }

在客户端启用该 MCP 连接并完成账号授权。

## VS Code

打开 **MCP: Open User Configuration**，将以下条目合并到现有 servers 对象：

    {
      "servers": {
        "docsy": {
          "type": "http",
          "url": "https://docsy.remcp.site/mcp/registry"
        }
      }
    }

## 试着这样提问

- 查找 React useEffect 清理副作用的官方说明，并附上文档链接。
- 对照 Next.js 指定版本解释缓存机制；不要混用不同版本。
- 找到 pgvector HNSW 索引的官方 SQL 示例。
- 如果没有已收录的目标版本文档，请明确说明，不要猜测 API。

## 接入信息

- 规范远程 MCP 地址：https://docsy.remcp.site/mcp/registry
- 兼容旧客户端的 MCP 地址：https://docsy.remcp.site/mcp
- 传输协议：Streamable HTTP；账号授权：OAuth 2.1
- [英文快速入门](GETTING-STARTED.md)
- [其他客户端](CLIENT-INTEGRATIONS.md)
- [公开插件和集成仓库](https://github.com/getremcp/docsy-plugin)

此 GitHub 仓库提供公开的接入配置、插件清单和文档技能，**不是 Docsy 后端源代码**。不承诺匿名 MCP 访问，也不宣称所有客户端已将 Docsy 列入官方精选目录。
