import './chunks/astro_nfb5K45J.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.8.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.UKwHdjqx.css"}],"routeData":{"route":"/comprar-un-auto/detalle","isIndex":true,"type":"page","pattern":"^\\/comprar-un-auto\\/detalle\\/?$","segments":[[{"content":"comprar-un-auto","dynamic":false,"spread":false}],[{"content":"detalle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/comprar-un-auto/detalle/index.astro","pathname":"/comprar-un-auto/detalle","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.UKwHdjqx.css"},{"type":"inline","content":".accordion{border:1px solid rgba(0,0,0,.1);border-radius:2px}.accordion__item+.accordion__item{border-top:1px solid rgba(0,0,0,.1)}.accordion__button{background-color:#f4f4f4;color:#444;cursor:pointer;padding:18px;width:100%;text-align:left;border:none}.accordion__button:hover{background-color:#ddd}.accordion__button:before{display:inline-block;content:\"\";height:10px;width:10px;margin-right:12px;border-bottom:2px solid currentColor;border-right:2px solid currentColor;transform:rotate(-45deg)}.accordion__button[aria-expanded=true]:before,.accordion__button[aria-selected=true]:before{transform:rotate(45deg)}[hidden]{display:none}.accordion__panel{padding:20px;animation:fadein .35s ease-in}@keyframes fadein{0%{opacity:0}to{opacity:1}}.filter-scroll::-webkit-scrollbar{display:none}.btn-gradient:focus{background:linear-gradient(#a49c4c -15%,#caa962 35.78%,#bf953f 92.17%,#988001 118.43%)}\n"}],"routeData":{"route":"/comprar-un-auto","isIndex":true,"type":"page","pattern":"^\\/comprar-un-auto\\/?$","segments":[[{"content":"comprar-un-auto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/comprar-un-auto/index.astro","pathname":"/comprar-un-auto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.UKwHdjqx.css"}],"routeData":{"route":"/comunidad/[id]","isIndex":false,"type":"page","pattern":"^\\/comunidad\\/([^/]+?)\\/?$","segments":[[{"content":"comunidad","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/comunidad/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.UKwHdjqx.css"}],"routeData":{"route":"/contacto","isIndex":true,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto/index.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.UKwHdjqx.css"}],"routeData":{"route":"/cotizar-mi-auto","isIndex":true,"type":"page","pattern":"^\\/cotizar-mi-auto\\/?$","segments":[[{"content":"cotizar-mi-auto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cotizar-mi-auto/index.astro","pathname":"/cotizar-mi-auto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.UKwHdjqx.css"}],"routeData":{"route":"/for-life","isIndex":true,"type":"page","pattern":"^\\/for-life\\/?$","segments":[[{"content":"for-life","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/for-life/index.astro","pathname":"/for-life","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.UKwHdjqx.css"}],"routeData":{"route":"/somos-brothers","isIndex":true,"type":"page","pattern":"^\\/somos-brothers\\/?$","segments":[[{"content":"somos-brothers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/somos-brothers/index.astro","pathname":"/somos-brothers","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.UKwHdjqx.css"},{"type":"inline","content":".brand-container[data-astro-cid-ikk3j4hj]:hover{background:linear-gradient(#a49c4c -15%,#caa962 35.78%,#bf953f 92.17%,#988001 118.43%)}\n"},{"type":"external","src":"/_astro/CarouselMobile.rbnCMZQI.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/comprar-un-auto/detalle/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/comprar-un-auto/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/comunidad/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/contacto/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/cotizar-mi-auto/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/for-life/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/somos-brothers/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.8.3/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_WFAxtktd.mjs","\u0000@astrojs-manifest":"manifest_uiZm6IeL.mjs","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/node_modules/.pnpm/@astrojs+react@3.3.4_@types+react-dom@18.3.0_@types+react@18.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1_vite@5.2.11/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.8.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BCB3GgBe.mjs","\u0000@astro-page:src/pages/comprar-un-auto/detalle/index@_@astro":"chunks/index_BVLGo7qz.mjs","\u0000@astro-page:src/pages/comprar-un-auto/index@_@astro":"chunks/index_CMzelQw2.mjs","\u0000@astro-page:src/pages/comunidad/[id]@_@astro":"chunks/_id__uWSydCO4.mjs","\u0000@astro-page:src/pages/contacto/index@_@astro":"chunks/index_DDfvHkQM.mjs","\u0000@astro-page:src/pages/cotizar-mi-auto/index@_@astro":"chunks/index_Rc9rfVaY.mjs","\u0000@astro-page:src/pages/for-life/index@_@astro":"chunks/index_BljPH6HX.mjs","\u0000@astro-page:src/pages/somos-brothers/index@_@astro":"chunks/index_CVRChxp0.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_C4tGZan9.mjs","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Contact/Contact.jsx":"_astro/Contact.CMuRNmOF.js","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/InfoDropdown":"_astro/InfoDropdown.BtjH1z5C.js","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Navbar":"_astro/Navbar.C7Vl83m8.js","@astrojs/react/client.js":"_astro/client.O8Xmn3Ty.js","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/CarGallery.jsx":"_astro/CarGallery.TexFyg0b.js","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Buy/DetailCard.jsx":"_astro/DetailCard.BOenCQFs.js","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Filters/Filters":"_astro/Filters.Bj7cM7Yb.js","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/QuoteCar/QuoteCar.jsx":"_astro/QuoteCar.BljgKiQg.js","C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Carousel/CarouselMobile":"_astro/CarouselMobile.C507Hl-q.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ubuntu-cyrillic-400-normal.D-o4fIzO.woff2","/_astro/ubuntu-greek-ext-400-normal.CMWpe1v5.woff2","/_astro/ubuntu-cyrillic-ext-400-normal.CVGbIIzP.woff2","/_astro/ubuntu-latin-ext-400-normal.BmiHIjmy.woff2","/_astro/ubuntu-greek-400-normal.DR4BMUC4.woff2","/_astro/ubuntu-latin-400-normal.5Llmrjj6.woff2","/_astro/ubuntu-cyrillic-400-normal.BfpxJ5Mw.woff","/_astro/ubuntu-greek-ext-400-normal.Cksm0_CD.woff","/_astro/ubuntu-cyrillic-ext-400-normal.C-34Juxs.woff","/_astro/ubuntu-latin-ext-400-normal.VrasUMOh.woff","/_astro/ubuntu-greek-400-normal.B86YUbWL.woff","/_astro/ubuntu-latin-400-normal.CB0YmOUt.woff","/_astro/index.UKwHdjqx.css","/favicon.svg","/logo.png","/logo.svg","/icons/chevron_down.svg","/icons/chevron_left.svg","/icons/chevron_right.svg","/icons/close.svg","/icons/menu.svg","/icons/profile.png","/icons/search.svg","/icons/send.svg","/icons/shiny_buda.svg","/icons/whatsapp_logo.png","/_astro/ajax-loader.BcnMEykj.gif","/_astro/brands_data.TmVgW-vZ.js","/_astro/CarGallery.TexFyg0b.js","/_astro/CarouselMobile.C507Hl-q.js","/_astro/CarouselMobile.rbnCMZQI.css","/_astro/client.O8Xmn3Ty.js","/_astro/Contact.CMuRNmOF.js","/_astro/DetailCard.BOenCQFs.js","/_astro/Filters.Bj7cM7Yb.js","/_astro/formik.esm.w0mI7FLA.js","/_astro/index.BCFPvGiK.css","/_astro/index.C-mIPs84.js","/_astro/index.C0Fn7Wtz.js","/_astro/index.CP8ULfKD.js","/_astro/InfoDropdown.BtjH1z5C.js","/_astro/jsx-runtime.BetPrhnk.js","/_astro/Navbar.C7Vl83m8.js","/_astro/QuoteCar.BljgKiQg.js","/_astro/slick.BlzDm7g2.svg","/icons/backgrounds/cubes.svg","/icons/backgrounds/dark_background.png","/icons/backgrounds/forlife_background.svg","/icons/backgrounds/home.svg","/icons/backgrounds/light_gray_background.svg","/icons/backgrounds/mobile.light_gray_background.svg","/icons/backgrounds/mobile_cubes.svg","/icons/backgrounds/mobile_dark_background.png","/icons/backgrounds/mobile_forlife_background.svg","/icons/backgrounds/mobile_home.svg","/icons/backgrounds/mobile_somos_brothers_background.svg","/icons/backgrounds/somos_brothers_background.svg","/icons/benefits/buda.svg","/icons/benefits/calendar.svg","/icons/benefits/check.svg","/icons/benefits/keys.svg","/icons/benefits/shaking_hands.svg","/icons/brands/alfa_romeo.svg","/icons/brands/audi.svg","/icons/brands/BMW.svg","/icons/brands/chevrolet.svg","/icons/brands/citroen.svg","/icons/brands/dodge.svg","/icons/brands/fiat.svg","/icons/brands/ford.svg","/icons/brands/hyundai.svg","/icons/brands/jeep.svg","/icons/brands/mercedes.svg","/icons/brands/mini.svg","/icons/brands/nissan.svg","/icons/brands/peugeot.svg","/icons/brands/porsche.svg","/icons/brands/renault.svg","/icons/brands/toyota.svg","/icons/brands/volkswagen.svg","/icons/cards/car.svg","/icons/cards/car_management.svg","/icons/cards/car_service.svg","/icons/cards/clean_car.svg","/icons/cards/coins.svg","/icons/cards/custom_service.svg","/icons/cards/gallery.svg","/icons/cards/guarantee.svg","/icons/cards/hands.svg","/icons/cards/help_desk.svg","/icons/cards/screen.svg","/icons/cards/user.svg","/icons/buy-car/brand.svg","/icons/buy-car/calendar.svg","/icons/buy-car/calendar_white.svg","/icons/buy-car/car_transmission.svg","/icons/buy-car/change_circle.svg","/icons/buy-car/divider.svg","/icons/buy-car/filter_list.svg","/icons/buy-car/front_car.svg","/icons/buy-car/fuel_station.svg","/icons/buy-car/kilometers.svg","/icons/buy-car/price.svg","/icons/buy-car/price_tag.svg","/icons/buy-car/route.svg","/icons/buy-car/search.svg","/icons/buy-car/side_car.svg","/icons/buy-car/transmission.svg","/icons/home/car.svg","/icons/home/icosahedron.svg","/icons/home/pyramid.svg","/images/brothers-for-life/image_1.png","/images/brothers-for-life/image_2.png","/images/buy-car/image_1.png","/images/buy-car/image_2.png","/images/buy-car/image_3.png","/images/we-are-brothers/image_1.png","/images/we-are-brothers/image_2.png","/images/we-are-brothers/image_3.png","/images/we-are-brothers/image_4.png","/images/we-are-brothers/image_5.png","/images/for-life/image_1.jpg","/images/for-life/image_2.jpg","/images/for-life/image_3.jpg","/images/for-life/image_4.jpg","/images/for-life/image_5.jpg","/images/for-life/image_6.jpg","/images/for-life/image_7.jpg","/images/buy-car/detail/image_1.png","/images/buy-car/detail/image_2.png","/images/buy-car/detail/image_3.png","/images/buy-car/detail/image_4.png","/images/buy-car/detail/image_5.png","/images/buy-car/detail/image_6.png","/images/buy-car/detail/image_7.png","/images/buy-car/detail/image_8.png"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
