import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  // 启用插件
  plugins: [pluginLineNumbers()],

  // 配置代码高亮的主题
  themes: ['solarized-dark', 'solarized-light'], // 你可以选择其他主题，如 'github', 'dracula', 'monokai', 'solarized' 等
  
  // 配置代码块字体大小
  fontSize: '14px',  // 设置字体大小，可以根据你的需求调整
  
  // 配置是否显示代码块的边框
  codeBlockBorder: true,  // 启用代码块边框，提升可视效果
  
  // 启用代码块的复制按钮
  copyButton: true,  // 启用复制按钮，方便用户复制代码
  
  // 配置行号的显示样式
  lineNumbers: true,  // 启用行号显示
  
  // 可以设置其他自定义选项
  // 例如：设置代码块的行内高亮效果
  //highlightLines: [3, 5, 7],   高亮特定行号（如高亮第3、5、7行）
};
