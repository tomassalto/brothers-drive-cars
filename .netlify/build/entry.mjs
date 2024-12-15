import { renderers } from './renderers.mjs';
import { manifest } from './manifest_uiZm6IeL.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BCB3GgBe.mjs');
const _page1 = () => import('./chunks/index_BVLGo7qz.mjs');
const _page2 = () => import('./chunks/index_CMzelQw2.mjs');
const _page3 = () => import('./chunks/_id__uWSydCO4.mjs');
const _page4 = () => import('./chunks/index_DDfvHkQM.mjs');
const _page5 = () => import('./chunks/index_Rc9rfVaY.mjs');
const _page6 = () => import('./chunks/index_BljPH6HX.mjs');
const _page7 = () => import('./chunks/index_CVRChxp0.mjs');
const _page8 = () => import('./chunks/index_C4tGZan9.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/comprar-un-auto/detalle/index.astro", _page1],
    ["src/pages/comprar-un-auto/index.astro", _page2],
    ["src/pages/comunidad/[id].astro", _page3],
    ["src/pages/contacto/index.astro", _page4],
    ["src/pages/cotizar-mi-auto/index.astro", _page5],
    ["src/pages/for-life/index.astro", _page6],
    ["src/pages/somos-brothers/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "cbfcfce8-5ef7-431f-9d3f-8db1a210c117"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
