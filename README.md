项目简介
本仓库是静态博客站点的发布目录（由 Hugo 生成）。

目录说明（核心）
- index.html：站点首页。
- 404.html：404 错误页。
- css/：站点样式文件（如 style.min.css）。
- js/：站点脚本（theme.min.js 为主题主脚本）。
- images/：文章中引用的图片资源（例如 image_*.png）。
- svg/：SVG 文件（例如 loading.min.svg 占位图）。
- posts/：按文章生成的页面目录，每篇文章一个子目录。
- tags/、categories/：标签/分类页的静态页面。
- lib/：第三方或主题用到的资源（如 lib/images、字体等）。

为什么本地直接打开 HTML 可能看不到图片
- 站点中大量静态资源使用了以 / 开头的绝对路径（例如 /images/..., /js/theme.min.js）。
- 当你在本地用浏览器直接以 file:// 打开 index.html 时，浏览器会把 /images/... 解析为磁盘根路径（或无法加载），导致图片、样式、脚本无法正确加载。

修复建议（已知、可选）
1. 推荐（简单可靠）——在本地用一个轻量 HTTP 服务器预览站点：
   进入仓库根目录后运行（Python 3）：
   python -m http.server 8000
   然后在浏览器访问 http://localhost:8000

2. 自动本地修复（已准备文件）——如果你确实需要直接用 file:// 打开：
   我在 js/local-path-fix.js 中添加了一个小脚本，用于在 file:// 环境下把以 / 开头的 src/data-src/data-srcset/href 属性转换为相对路径，便于本地预览。

我已做的改善
- 新增 js/local-path-fix.js：用于 file:// 本地预览（文件已提交）。
- 新增本文件 README.md：包含目录说明、问题原因与本地预览建议。

下一步可选操作
- A: 我把所有 HTML 中的 / 开头资源改为相对路径（批量修改），支持直接 file:// 打开。
- B: 我把 js/local-path-fix.js 注入到所有 HTML 页脚（在 theme.min.js 之前），使本地预览生效而不改动其它引用。
- C: 帮你还原或接入 Hugo 源码用于长期维护。

请回复你想要的选项（A / B / C），我将继续执行。
