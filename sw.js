if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,t,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(t.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"a56d4365.js",revision:"ed8f3e484db3d5aa3f5e28bd21ab3339"},{url:"index.html",revision:"ac123d84690b14778397de1ef9deceab"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
