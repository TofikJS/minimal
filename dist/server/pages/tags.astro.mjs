import { _ as __vite_glob_0_0 } from '../chunks/post-1_BjbROgDm.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_U5Hyu3jz.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-3_A6GlRKfs.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-4_BIqT9nX2.mjs';
import { f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CJ6YzeK1.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]
  );
  const tags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitel": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-os4i7owy>this is index.astro in tags forlder</p> <div class="tags" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a> </p>`)} </div> ` })} `;
}, "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/tags/index.astro", undefined);

const $$file = "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
