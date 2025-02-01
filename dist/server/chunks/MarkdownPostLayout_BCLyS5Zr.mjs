import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute, af as renderSlot } from './astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_CJ6YzeK1.mjs';
/* empty css                          */

const $$Astro = createAstro("https://astro-tofik.netlify.app/");
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-5grsw2hi>Written by: ${frontmatter.author}</p> <p data-astro-cid-5grsw2hi>Published on: ${frontmatter.pubDate.toString().slice(0, 10)}</p> <img${addAttribute(frontmatter.image.url, "src")}${addAttribute(frontmatter.image.alt, "alt")} width="100%" data-astro-cid-5grsw2hi> <div class="tags" data-astro-cid-5grsw2hi> ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-5grsw2hi> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-5grsw2hi>${tag}</a> </p>`)} </div> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/layouts/MarkdownPostLayout.astro", undefined);

export { $$MarkdownPostLayout as $ };
