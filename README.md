# 前言

## 系统特点

- **基于 Astro 的静态站点生成**，提供极致的性能  
- **使用 Starlight 主题**，提供优雅的默认设计  
- **完整的博客功能**，包括文章管理、分类、标签等  
- **良好的开发体验**，支持 TypeScript 和热更新  
- 注重安全性和性能优化  
- 支持主题定制和响应式设计  

## 框架架构及主题

本系统是基于 **Astro 框架** 构建的。Astro 是一款现代、高性能的网站构建框架，专注于为内容驱动的项目（如文档系统、知识库、博客等）提供极快的加载速度和优秀的开发体验。它通过智能的前端优化，让系统具有轻量、快速、易扩展的特性。

在 Astro 之上，本系统采用了 **Starlight** 作为文档系统的核心架构。Starlight 是专为文档类项目打造的解决方案，内置侧边栏导航、全文搜索、多语言支持、版本管理等功能，可以帮助我们快速搭建起完整的文档体系。这不仅节省了开发时间，也为系统的扩展和维护提供了极大的便利。

为了进一步提升系统的视觉表现和用户体验，我们选择了 **starlight-theme-flexoki** 主题。它基于 Flexoki 设计体系，提供了温和、简洁、优雅的配色方案和排版风格，使系统在保持专业性的同时，也具备了友好的阅读体验。

**总结来说，本系统的技术栈构成如下：**

1. [Astro](https://astro.build/) → 核心框架，负责系统构建和性能优化  
2. [Starlight](https://starlight.astro.build/) → 文档架构，提供系统的主要功能模块  
3. [starlight-theme-flexoki](https://delucis.github.io/starlight-theme-flexoki/) → 主题插件，赋予系统独特而美观的外观设计  

选择这套组合，是希望打造一个性能卓越、功能完备、界面友好的系统，为用户带来高效流畅的使用体验。

## 插件

为了让本系统更强大、更易用、更具表现力，系统集成了以下四个精选插件，每一个都在不同层面为系统赋能：  

1. **Starlight Blog**  
官网：[Starlight Blog](https://starlight-blog-docs.vercel.app/getting-started/)  
为 Starlight 系统引入博客功能，扩展为内容创作和分享平台。  

2. **Starlight Image Zoom**  
官网：[Starlight Image Zoom](https://starlight-image-zoom.vercel.app/getting-started/)  
为文档和博客页面提供优雅的 **图片缩放** 功能。  

3. **Expressive Code**  
官网：[Expressive Code](https://expressive-code.com/installation)  
专注于 **代码高亮和代码展示优化** 的插件。  

4. **Starlight Giscus**  
官网：[Starlight Giscus](https://github.com/dragomano/starlight-giscus)  
为系统引入 **评论和讨论功能**，基于 GitHub Discussions 构建的 Giscus。  

## 修复的 BUG 及增加的功能

1. 修复 Tags 如果有大写（英文），点击 tags 链接返回 404 的问题  
2. 修复 Starlight Blog 和 Starlight Image Zoom 插件同时导入时的冲突问题  
3. 新增外链中转功能  
4. 修改主题切换由官方的下拉框选择变更为直接点击  
5. 新增 404 页面  
6. 代码块新增行号  
7. 新增归档页面  
8. 新增分类页面  
9. 新增返回页顶按钮  

## PSI

**Mobile**  
![Mobile PSI](https://cdn.canjie.org/PageSpeed-Insights-2025-05-08_04_43_PM.jpg)  

**Desktop**  
![Desktop PSI](https://cdn.canjie.org/PageSpeed-Insights-2025-05-08_04_44_PM.jpg)  

### 项目结构

```bash
astro.config.mjs
package.json
src/
components/
  BlogArchive.astro
  CategoryList.astro
  ExternalLinkRedirect.astro
  Footer.astro
  Head.astro
  HomePage.astro
  MarkdownContent.astro
  Page.astro
  PageTitle.astro
  ThemeSelect.astro
content/
docs/
blog/
categories/
index.mdx
404.mdx
archives.mdx
index.mdx
link.mdx
page/
  index.mdx
pages/
api/
  redirect.js
scripts/
  generate-pagination.js
content.config.ts

## 功能特性

### 内容展示

- 响应式设计  
- 文章分类、归档、标签、置顶、推荐  

### 阅读体验

- 代码高亮  
- 图片优化与缩放  
- 主题切换、平滑滚动、返回顶部  

### 交互功能

- 评论系统（Giscus）  
- 外链跳转、分页、搜索  

### 性能优化

- 静态生成、按需加载、图片优化、缓存策略  

### SEO 优化

- Sitemap、Meta、规范链接、结构化数据  

### 安全特性

- 外链保护、XSS 防护、CSP 支持  

### 开发体验

- 组件化、热更新、TypeScript 支持、构建优化  

### 特色功能

- 运行时间、文章统计、自定义 404、主题定制、响应式布局  

### 技术栈

- Astro + Starlight / Vite / CSS Modules / MDX  

## 平台部署

### Cloudflare

1. Fork 本项目：[canjie](https://github.com/canjieorg/canjie)  
2. 登录 [Cloudflare Pages](https://dash.cloudflare.com/)，点击 **Import an existing Git repository**  
3. Connect GitHub，选择刚刚 Fork 的项目  
4. 设置构建参数：
   - Build command：\`npm run build\`  
   - Output directory：\`dist\`  
5. 点击 **Save and Deploy** 完成部署  
6. 示例链接：[Cloudflare 演示](https://cloudflare.canjie.org/)  

---

### Netlify 部署

1. [Fork 本项目](https://github.com/canjieorg/canjie)
2. GitHub 授权
3. Netlify Build Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

[Netlify 演示](https://netlify.canjie.org/)

---

### Vercel 部署

1. [Fork 本项目](https://github.com/canjieorg/canjie)
2. GitHub 授权
3. Vercel Build Settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`

[Vercel 演示](https://vercel.canjie.org/)


### 自部署

#### 使用 npm

拉取镜像进入目录安装依赖：

```bash
npm create astro@latest -- --template tgimgcdn/blog blog && cd blog && npm install
```

启动本地开发服务器：

```bash
npm run dev
```

构建静态文件：

```bash
npm run build
```

#### 使用 pnpm

拉取镜像进入目录安装依赖：

```bash
pnpm create astro@latest -- --template tgimgcdn/blog blog && cd blog && pnpm install
```

启动本地开发服务器：

```bash
pnpm dev
```

构建静态文件：

```bash
pnpm build
```

#### 使用 yarn

拉取镜像进入目录安装依赖：

```bash
yarn create astro --template tgimgcdn/blog blog && cd blog && yarn install
```

启动本地开发服务器：

```bash
yarn dev
```

构建静态文件：

```bash
yarn build
```
