# Docsy MCP：帮助 AI 编码助手找到正确版本的文档与原始来源

AI 编码助手写代码时，一个常见问题是：它知道框架名称，却不确定所记得的 API 是否适用于项目当前使用的版本。另一个问题是，答案看起来正确，却缺少能直接核查的发布者文档。

我们在开发 **Docsy**，目标是让编码助手先检索、再作答：识别开发库 ID，列出版本，查找特定版本的公开技术文档，并返回原始来源链接。

## 和普通网页搜索有什么不同？

- **版本明确：**将上游发布标签与真正已索引的版本文档区分开来。
- **可以验证：**查到的片段提供发布者来源链接。
- **只读设计：**五个 MCP 工具不修改本地文件，也不执行 shell 命令。
- **灵活输出：**查询可仅返回来源链接，避免每次拉取文档正文。
- **跨客户端：**通过 Streamable HTTP，供支持 OAuth 2.1 的 MCP 客户端使用。

## 三行开始使用 Codex

    codex mcp add docsy --url https://docsy.remcp.site/mcp/registry
    codex mcp login docsy
    codex mcp get docsy

然后可询问：“请根据 React 的官方文档解释 useEffect cleanup，并附上来源链接。”

**注意：**未登录时，直接请求 MCP 服务返回 HTTP 401 是正常的 OAuth 授权挑战。它不是匿名开放的 MCP 端点。

## 欢迎反馈

我们特别希望听到开发者对版本识别准确率、来源可验证性，以及 AI 客户端如何展示“仅链接”结果的体验反馈。

- [网站](https://docsy.remcp.site)
- [公开集成及安装说明](https://github.com/getremcp/docsy-plugin)
- [中文入门教程](README.zh-CN.md)

*本文由 Docsy 项目维护方撰写，属于技术介绍，而不是独立第三方评测。*
