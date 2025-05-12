[中文文档](https://github.com/canjieorg/canjie/blob/main/README-zh.md)
# Introduction

## System Features

* ​**Static Site Generation based on Astro**​, offering outstanding performance
* ​**Using the Starlight theme**​, providing an elegant default design
* ​**Complete blogging functionality**​, including post management, categories, tags, and more
* ​**Great development experience**​, supporting TypeScript and hot reloading
* Focused on security and performance optimization
* Supports theme customization and responsive design

## Framework Architecture and Theme

This system is built on the ​**Astro framework**​. Astro is a modern, high-performance website building framework that focuses on delivering lightning-fast load times and an excellent development experience for content-driven projects (such as documentation systems, knowledge bases, blogs, etc.). Through intelligent frontend optimization, it makes the system lightweight, fast, and easily extensible.

On top of Astro, this system uses **Starlight** as the core architecture for the documentation system. Starlight is a solution designed specifically for documentation projects, offering features such as sidebar navigation, full-text search, multi-language support, versioning, and more. This helps us quickly set up a complete documentation system, saving development time and providing great convenience for system expansion and maintenance.

To further improve the system’s visual performance and user experience, we chose the **starlight-theme-flexoki** theme. It is based on the Flexoki design system, providing a gentle, clean, and elegant color scheme and typography style, ensuring the system remains professional while also providing a friendly reading experience.

**In summary, the technology stack of this system is as follows:**

1. [Astro](https://astro.build/) → Core framework, responsible for system construction and performance optimization
2. [Starlight](https://starlight.astro.build/) → Documentation architecture, providing the main functional modules of the system
3. [starlight-theme-flexoki](https://delucis.github.io/starlight-theme-flexoki/) → Theme plugin, giving the system a unique and beautiful design

The goal of this combination is to create a high-performance, feature-complete, and user-friendly system that offers an efficient and smooth user experience.

## Plugins

To make the system more powerful, user-friendly, and expressive, it integrates the following four carefully selected plugins, each empowering the system in different ways:

1. **Starlight Blog**
   Official website: [Starlight Blog](https://starlight-blog-docs.vercel.app/getting-started/)
   Introduces blogging functionality to the Starlight system, expanding it into a content creation and sharing platform.
2. **Starlight Image Zoom**
   Official website: [Starlight Image Zoom](https://starlight-image-zoom.vercel.app/getting-started/)
   Provides elegant **image zoom** functionality for documentation and blog pages.
3. **Expressive Code**
   Official website: [Expressive Code](https://expressive-code.com/installation)
   A plugin focusing on ​**syntax highlighting and code presentation optimization**​.
4. **Starlight Giscus**
   Official website: [Starlight Giscus](https://github.com/dragomano/starlight-giscus)
   Adds **comment and discussion features** to the system, based on GitHub Discussions, via Giscus.

## Bug Fixes and New Features

1. Fixed issue where tags with uppercase letters (English) would return a 404 error when clicking the tags link.
2. Fixed conflict when both Starlight Blog and Starlight Image Zoom plugins are imported simultaneously.
3. Added external link forwarding functionality.
4. Changed the theme switcher from a dropdown menu to a direct-click interaction.
5. Added a custom 404 page.
6. Added line numbers to code blocks.
7. Added an archives page.
8. Added a categories page.
9. Added a "Back to Top" button.

## PSI

**Mobile**
![Mobile PSI](https://cdn.canjie.org/PageSpeed-Insights-2025-05-08_04_43_PM.jpg)

**Desktop**
![Desktop PSI](https://cdn.canjie.org/PageSpeed-Insights-2025-05-08_04_44_PM.jpg)

### Project Structure

```bash
- astro.config.mjs
- package.json
- src/
  - components/
    - BlogArchive.astro
    - CategoryList.astro
    - ExternalLinkRedirect.astro
    - Footer.astro
    - Head.astro
    - HomePage.astro
    - MarkdownContent.astro
    - Page.astro
    - PageTitle.astro
    - ThemeSelect.astro
- content/
  - docs/
    - blog/
      - categories/
        - index.mdx
        - 404.mdx
        - archives.mdx
        - index.mdx
        - link.mdx
      - page/
        - index.mdx
  - pages/
    - api/
      - redirect.js
    - scripts/
      - generate-pagination.js
- content.config.ts
```

## Features

### Content Display

* Responsive design
* Post categories, archives, tags, sticky posts, recommended posts

### Reading Experience

* Code highlighting
* Image optimization and zoom
* Theme switching, smooth scrolling, "Back to Top"

### Interactive Features

* Comment system (Giscus)
* External link forwarding, pagination, search

### Performance Optimization

* Static generation, on-demand loading, image optimization, caching strategies

### SEO Optimization

* Sitemap, Meta tags, canonical links, structured data

### Security Features

* External link protection, XSS protection, CSP support

### Development Experience

* Component-based, hot reloading, TypeScript support, build optimizations

### Special Features

* Runtime stats, article statistics, custom 404 page, theme customization, responsive layout

### Tech Stack

* Astro + Starlight / Vite / CSS Modules / MDX

## Platform Deployment

### Cloudflare

1. [Fork this project](https://github.com/canjieorg/canjie)
2. Log into [Cloudflare Pages](https://dash.cloudflare.com/), click **Import an existing Git repository**
3. Connect GitHub, select the forked project
4. Set build parameters:
   * Build command: `npm run build`
   * Output directory: `dist`
5. Click **Save and Deploy** to complete deployment
6. Demo link: [Cloudflare Demo](https://cloudflare.canjie.org/)

---

### Netlify Deployment

1. [Fork this project](https://github.com/canjieorg/canjie)
2. GitHub authorization
3. Netlify Build Settings:
   * Build command: `npm run build`
   * Publish directory: `dist`

[Netlify Demo](https://netlify.canjie.org/)

---

### Vercel Deployment

1. [Fork this project](https://github.com/canjieorg/canjie)
2. GitHub authorization
3. Vercel Build Settings:
   * Build Command: `npm run build`
   * Output Directory: `dist`

[Vercel Demo](https://vercel.canjie.org/)

---

### Self-Deployment

#### Using npm

Pull the image and install dependencies:

```bash
npm create astro@latest -- --template canjieorg/canjie blog && cd blog && npm install
```

Start the local development server:

```bash
npm run dev
```

Build static files:

```bash
npm run build
```

#### Using pnpm

Pull the image and install dependencies:

```bash
pnpm create astro@latest -- --template canjieorg/canjie blog && cd blog && pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Build static files:

```bash
pnpm build
```

#### Using yarn

Pull the image and install dependencies:

```bash
yarn create astro --template canjieorg/canjie blog && cd blog && yarn install
```

Start the local development server:

```bash
yarn dev
```

Build static files:

```bash
yarn build
```
