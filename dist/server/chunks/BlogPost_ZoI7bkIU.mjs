import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro("https://astro-tofik.netlify.app/");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-xj2uyz6m><a${addAttribute(url, "href")} data-astro-cid-xj2uyz6m>${title}</a></li> `;
}, "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/components/BlogPost.astro", undefined);

export { $$BlogPost as $ };
