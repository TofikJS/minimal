import { f as createComponent, r as renderTemplate, k as renderComponent, ae as unescapeHTML } from './astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_BCLyS5Zr.mjs';

const html = () => "<p>This post should show up with my other blog posts, because <code>import.meta.glob()</code> is returning a list of all my posts in order to create my list.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Fourth Blog Post","author":"Astro Learner","description":"This post will show up on its own!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word astro against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["astro","successes"]};
				const file = "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "   \r\n                                              \r\n                          \r\n                     \r\n                                                 \r\n      \r\n                                                        \r\n                                                                       \r\n                   \r\n                            \r\n   \r\nThis post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.";
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

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_3 as _ };
