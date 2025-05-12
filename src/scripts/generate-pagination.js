// 自动生成分页文件的脚本
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 指定分页文件目录
const PAGE_DIR = path.join(__dirname, '../content/docs/page');

// 每页显示的文章数量
const POSTS_PER_PAGE = 9;

// 确保分页目录存在
if (!fs.existsSync(PAGE_DIR)) {
  fs.mkdirSync(PAGE_DIR, { recursive: true });
}

// 计算博客文章总数
function countBlogPosts() {
  const blogDir = path.join(__dirname, '../content/docs/blog');
  if (!fs.existsSync(blogDir)) {
    console.log('博客目录不存在');
    return 0;
  }
  
  let totalPosts = 0;
  
  // 递归遍历目录
  function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // 如果是目录，递归遍历
        traverseDirectory(fullPath);
      } else if (stat.isFile() && (file.endsWith('.md') || file.endsWith('.mdx'))) {
        // 如果是 .md 或 .mdx 文件，计数加1
        totalPosts++;
      }
    }
  }
  
  try {
    traverseDirectory(blogDir);
    console.log(`找到 ${totalPosts} 篇博客文章`);
    return totalPosts;
  } catch (error) {
    console.error('读取博客目录时出错:', error);
    return 0;
  }
}

// 生成分页文件
function generatePaginationFiles() {
  // 获取文章总数
  const totalPosts = countBlogPosts();
  
  // 计算总页数
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  console.log(`根据 ${totalPosts} 篇文章，需要生成 ${totalPages} 个分页页面`);
  
  // 生成每个分页页面
  for (let i = 2; i <= totalPages; i++) {
    const pageContent = `---
title: 博客文章列表 - 第${i}页
description: 所有博客文章的第${i}页
template: splash
head:
  - tag: script
    attrs:
      type: text/javascript
    content: |
      document.addEventListener('DOMContentLoaded', function() {
        // 查找页面上的所有标题元素
        const titleElements = document.querySelectorAll('.content-title, .page-title, h1');
        // 遍历并应用居中样式
        titleElements.forEach(function(el) {
          el.style.textAlign = 'center';
          el.style.width = '100%';
          el.style.display = 'block';
          // 如果标题在容器中，也调整容器样式
          if (el.parentElement) {
            el.parentElement.style.textAlign = 'center';
            el.parentElement.style.width = '100%';
          }
        });
      });
---

import HomePage from '../../../components/HomePage.astro';

<HomePage pageNum={${i}} />
`;

    const pageFilePath = path.join(PAGE_DIR, `${i}.mdx`);
    
    try {
      fs.writeFileSync(pageFilePath, pageContent);
      console.log(`生成分页页面: ${pageFilePath}`);
    } catch (error) {
      console.error(`生成页面 ${i} 时出错:`, error);
    }
  }
  
  // 生成索引页面
  generateIndexPage();
  
  console.log('分页页面生成完成！');
}

// 生成索引页面
function generateIndexPage() {
  const indexContent = `---
title: 博客文章列表
description: 所有博客文章
template: splash
head:
  - tag: script
    attrs:
      type: text/javascript
    content: |
      document.addEventListener('DOMContentLoaded', function() {
        // 查找页面上的所有标题元素
        const titleElements = document.querySelectorAll('.content-title, .page-title, h1');
        // 遍历并应用居中样式
        titleElements.forEach(function(el) {
          el.style.textAlign = 'center';
          el.style.width = '100%';
          el.style.display = 'block';
          // 如果标题在容器中，也调整容器样式
          if (el.parentElement) {
            el.parentElement.style.textAlign = 'center';
            el.parentElement.style.width = '100%';
          }
        });
      });
---

import HomePage from '../../../components/HomePage.astro';

<HomePage pageNum={1} />
`;

  const indexFilePath = path.join(PAGE_DIR, 'index.mdx');
  
  try {
    fs.writeFileSync(indexFilePath, indexContent);
    console.log(`生成索引页面: ${indexFilePath}`);
  } catch (error) {
    console.error('生成索引页面时出错:', error);
  }
}

// 清理旧的分页文件
function cleanupOldPages() {
  try {
    const files = fs.readdirSync(PAGE_DIR);
    files.forEach(file => {
      if (file !== 'index.mdx' && file.endsWith('.mdx')) {
        const filePath = path.join(PAGE_DIR, file);
        fs.unlinkSync(filePath);
        console.log(`删除旧的分页文件: ${filePath}`);
      }
    });
  } catch (error) {
    console.error('清理旧的分页文件时出错:', error);
  }
}

// 执行生成
cleanupOldPages(); // 先清理旧文件
generatePaginationFiles(); // 然后生成新文件 
