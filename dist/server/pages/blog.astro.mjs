import { _ as __vite_glob_0_0 } from '../chunks/post-1_BjbROgDm.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_U5Hyu3jz.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-3_A6GlRKfs.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-4_BIqT9nX2.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, j as renderHead, k as renderComponent } from '../chunks/astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_ZoI7bkIU.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CJ6YzeK1.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-tofik.netlify.app/");
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]
  );
  const pageTitle = "Blog";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitel": pageTitle }, { "default": ($$result2) => renderTemplate` <h1>${pageTitle}</h1> <h2>My Astro Learning Blog</h2> <p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })} </body></html>`;
}, "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/blog.astro", undefined);

const $$file = "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
