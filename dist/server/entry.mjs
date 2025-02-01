import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B_sfp4b6.mjs';
import { manifest } from './manifest_CXEEmzTB.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/about1.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/posts/post-1.astro.mjs');
const _page5 = () => import('./pages/posts/post-2.astro.mjs');
const _page6 = () => import('./pages/posts/post-3.astro.mjs');
const _page7 = () => import('./pages/posts/post-4.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/tags/_tag_.astro.mjs');
const _page10 = () => import('./pages/tags.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/about1/index.astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/posts/post-1.md", _page4],
    ["src/pages/posts/post-2.md", _page5],
    ["src/pages/posts/post-3.md", _page6],
    ["src/pages/posts/post-4.md", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/tags/[tag].astro", _page9],
    ["src/pages/tags/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///D:/TOFIK/code/astro/astro-doc-tutorial/minimal/dist/client/",
    "server": "file:///D:/TOFIK/code/astro/astro-doc-tutorial/minimal/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
