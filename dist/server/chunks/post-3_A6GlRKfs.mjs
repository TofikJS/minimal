import { f as createComponent, r as renderTemplate, k as renderComponent, ae as unescapeHTML } from './astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_BCLyS5Zr.mjs';

const html = () => "<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Third Blog Post","author":"Astro Learner","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"The Astro logo on a dark background with rainbow rays."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file = "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "   \r\n                                                \r\n                         \r\n                     \r\n                                                                                \r\n      \r\n                                                    \r\n                                                                 \r\n                   \r\n                                                              \r\n   \r\nIt wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_2 as _ };
