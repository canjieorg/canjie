// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'
import starlightImageZoom from 'starlight-image-zoom'
import starlightThemeFlexoki from 'starlight-theme-flexoki'
import { visit } from 'unist-util-visit'
import starlightGiscus from 'starlight-giscus'

// 自定义 Markdown 处理器
function processMarkdownLinks() {
	return {
		name: 'process-markdown-links',
		hooks: {
			'astro:config:setup': ({ updateConfig, config }) => {
				updateConfig({
					markdown: {
						remarkPlugins: [
							function() {
								return function(tree) {
									// 获取站点域名
									const siteUrl = new URL(config.site);
									const siteHostname = siteUrl.hostname;
									
									// 遍历所有节点
									visit(tree, ['link', 'mdxJsxFlowElement'], (node) => {
										try {
											let url;
											if (node.type === 'link') {
												url = node.url;
											} else if (node.type === 'mdxJsxFlowElement' && node.name === 'LinkButton') {
												// 查找 href 属性
												const hrefAttr = node.attributes.find(attr => attr.name === 'href');
												if (hrefAttr) {
													url = hrefAttr.value;
												}
											}
											
											if (url) {
												const urlObj = new URL(url);
												// 检查是否是本域名或子域名
												const isSameDomain = urlObj.hostname === siteHostname || 
																urlObj.hostname.endsWith('.' + siteHostname) ||
																siteHostname.endsWith('.' + urlObj.hostname);
												
												// 如果不是本域名或子域名，且是http链接，则进行中转
												if (!isSameDomain && urlObj.protocol.startsWith('http')) {
													// 将链接替换为重定向链接，使用base64编码
													const encodedUrl = btoa(url);
													if (node.type === 'link') {
														node.url = `/link?url=${encodedUrl}`;
													} else if (node.type === 'mdxJsxFlowElement') {
														// 更新 LinkButton 的 href 属性
														const hrefAttr = node.attributes.find(attr => attr.name === 'href');
														if (hrefAttr) {
															hrefAttr.value = `/link?url=${encodedUrl}`;
														}
													}
												}
											}
										} catch (e) {
											// 如果URL解析失败，保持原样
										}
									});
								};
							}
						]
					}
				});
			}
		}
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://canjie.org',
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom(),
				starlightGiscus({
					repo: 'tgimgcdn/blog',
					repoId: 'R_kgDOOjxhOw',
					category: 'General',
					categoryId: 'DIC_kwDOOjxhO84Cp6EN',
					mapping: 'pathname',
					strict: '0',
					reactionsEnabled: '1',
					emitMetadata: '0',
					inputPosition: 'bottom',
					theme: 'preferred_color_scheme',
					lang: 'zh-CN',
					loading: 'lazy',
					crossorigin: 'anonymous'
				}),
				starlightBlog({
					authors: {
						cmssky: {
							name: 'cmssky',
							picture: 'https://img20.360buyimg.com/openfeedback/jfs/t1/297564/4/2943/9987/6816f2f6Ff7a97a86/37decef475f8f719.jpg',
							url: 'https://canjie.org',
						},
					},
					prevNextLinksOrder: 'reverse-chronological',
					prefix: 'blog'
				}),
				starlightThemeFlexoki()
			],
			title: '参界说',
			components: {
				Footer: './src/components/Footer.astro',
				Page: './src/components/Page.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
				PageTitle: './src/components/PageTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			sidebar: [
				{
					label: '博客',
					items: [
						{ label: '文章归档', link: '/archives/' },
					],
				},
			],
			// 添加需要隐藏在侧边栏和搜索结果中的页面
			pagefind: {
				excludeSelectors: ['[data-pagefind-ignore]'],
			},
		}),
		processMarkdownLinks(),
	],
});
