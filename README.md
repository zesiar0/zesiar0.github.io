# jiahua 的博客

中文技术博客，基于 [AstroPaper v5.5.1](https://github.com/satnaing/astro-paper/tree/v5.5.1) 定制，使用 Astro、Tailwind CSS 和 Pagefind。支持文章、标签、归档、全文搜索、深浅主题和 RSS。

## 本地运行

安装 Node.js 24，在项目目录执行：

```bash
npm install
npm run dev
```

打开终端显示的地址，默认是 `http://localhost:4321`。

发布前构建并预览：

```bash
npm run build
npm run preview
```

`build` 会检查类型、生成 `dist/` 并创建搜索索引。首次使用搜索或新增文章后，先运行一次构建；生产效果以 `preview` 为准。请提交 `package-lock.json`，GitHub Actions 使用 `npm ci` 安装依赖。

## 写文章

在 `src/data/blog/` 新建 Markdown 文件，例如 `my-first-note.md`。当前只保留了 `hello-world.md` 这一篇文章，写新文章时使用不同的文件名：

```markdown
---
title: "我的第一篇技术笔记"
description: "记录问题、分析过程和解决方法。"
pubDatetime: 2026-11-01T09:00:00+08:00
tags:
  - 技术
draft: false
featured: false
---

## 起因

从这里开始写正文。
```

必填字段是 `title`、`description` 和 `pubDatetime`。`author` 默认使用站点作者；`tags`、`featured`、`draft` 均可选。更新文章时可补充 `modDatetime`，格式与发布时间相同。文件名无需日期前缀，也不要以 `_` 开头。

设置 `draft: true` 可隐藏文章。开发模式会显示未到发布时间的非草稿文章；生产构建按 `pubDatetime` 和站点的 `scheduledPostMargin` 筛选。日期建议显式写 `+08:00`。未来文章到期后需要再次构建部署，或在 Actions 页面手动运行部署工作流。

图片可放在 `public/images/`，在正文使用 `![图片说明](/images/example.png)`。

## 修改站点信息

- `src/config.ts`：博客名、作者、简介、站点地址、时区和首页文章数量。
- `src/constants.ts`：社交链接。
- `src/pages/about.md`：关于页面。
- `src/styles/global.css`：颜色和全局样式。
- `src/data/blog/`：博客文章。

## 发布到 GitHub Pages

### 首次上线：只需配置一次

1. 在 GitHub 账号 `zesiar0` 下创建公开的空仓库 **`zesiar0.github.io`**。不要在 GitHub 初始化 README、许可证或 `.gitignore`，项目中已有这些文件。
2. 确认 `src/config.ts` 的 `website` 为 `https://zesiar0.github.io/`。使用这个仓库名时，无需额外设置 Astro `base`。
3. 在本地项目目录执行下面的命令，将完整源码推送到 `main`：

```bash
cd /Users/a3bz/Desktop/projects/jiahua-blog
git add .
git commit -m "Set up jiahua blog"
git remote add origin https://github.com/zesiar0/zesiar0.github.io.git
git push -u origin main
```

这个本地项目已有 `main` 分支与 Git 历史，无需再次 `git init`。如果之前已经配置过 `origin`，跳过 `git remote add origin`。上面的首次推送命令适用于新建的空仓库；已有文章或代码的远程仓库应先同步后再提交。

4. 打开仓库 **Settings → Pages → Build and deployment**，将 **Source** 设为 **GitHub Actions**。本项目是 Astro 站点，使用已提供的工作流构建。
5. 查看 **Actions → Deploy to GitHub Pages**。如果首次构建发生在启用 Pages 之前，可在启用后通过 **Run workflow** 再运行一次。工作流成功后，访问 `https://zesiar0.github.io/`。

应推送源码文件，包括隐藏目录 `.github/workflows/` 和 `package-lock.json`。`node_modules/`、`dist/` 与本地截图目录已被 Git 忽略。源码 ZIP 是便于传输的压缩包；上传源码时先解压，并让 `package.json` 与 `.github/` 直接位于仓库根目录。

### 日常发布：新增文章 → 提交 → 自动上线

推荐在本地写作：

1. 写作前执行 `git pull --ff-only origin main`，同步远程修改。
2. 在 `src/data/blog/` 添加 `.md` 文件，按上面的示例填写文章信息和正文；发布前确保 `draft: false` 且 `pubDatetime` 不晚于当前时间。
3. 执行 `npm run build` 检查内容和搜索索引，运行 `npm run preview` 查看效果。
4. 提交并推送文章及配图：

```bash
git add .
git commit -m "Publish a new post"
git push origin main
```

`git add .` 会一并提交文章、配图和站点配置；生成目录由 `.gitignore` 排除。

推送后，GitHub Actions 会自动构建网页、更新搜索索引并部署。到仓库 **Actions** 确认运行成功，再刷新博客。修改或删除文章也使用同样的提交与推送流程。

也可以直接在 GitHub 网页写作：打开仓库中的 `src/data/blog/` → **Add file → Create new file** → 输入 `.md` 文件名与文章内容 → **Commit changes** 到 `main`。若选择了新分支，则合并到 `main` 后触发部署。网页上传图片时，放入仓库的 `public/images/` 目录。

不需要每次重新上传整个网站，也不需要手工修改首页、文章列表、标签或搜索索引。

## 主题许可

主题来自 [Sat Naing / AstroPaper](https://github.com/satnaing/astro-paper)，采用 [MIT License](LICENSE)。使用或分发主题代码时请保留许可证与版权声明。

字体使用 [Google Sans Code](https://github.com/google/fonts/tree/main/ofl/googlesanscode)，随站点本地托管，许可见 `public/fonts/OFL.txt`。
