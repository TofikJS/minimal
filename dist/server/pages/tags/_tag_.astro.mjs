import { _ as __vite_glob_0_0 } from '../../chunks/post-1_BjbROgDm.mjs';
import { _ as __vite_glob_0_1 } from '../../chunks/post-2_U5Hyu3jz.mjs';
import { _ as __vite_glob_0_2 } from '../../chunks/post-3_A6GlRKfs.mjs';
import { _ as __vite_glob_0_3 } from '../../chunks/post-4_BIqT9nX2.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../../chunks/BlogPost_ZoI7bkIU.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CJ6YzeK1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-tofik.netlify.app/");
async function getStaticPaths() {
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]
  );
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Posts tagged with ${tag}</p> <ul> ${posts?.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/tags/[tag].astro", undefined);

const $$file = "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
