import { f as createComponent, r as renderTemplate, k as renderComponent, ae as unescapeHTML } from './astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_BCLyS5Zr.mjs';

const html = () => "<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accoumplished\">What I’ve accoumplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My First Blog Post","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"Tofik Bedru","image":{"url":"https://docs.astro.build/assets/rose.webp","alt":"The Astro logo on a dark background with a pink glow."},"tags":["astro","blogging","learning in public"]};
				const file = "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "   \r\n                                              \r\n                           \r\n                   \r\n                                                           \r\n                     \r\n       \r\n                                                    \r\n                                                                \r\n                                                 \r\n   \r\n\r\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\r\n\r\n## What I've accoumplished\r\n\r\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\r\n\r\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\r\n\r\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\r\n\r\n## What's next\r\n\r\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-ive-accoumplished","text":"What I’ve accoumplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
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

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_0 as _ };
