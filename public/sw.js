if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/161-e895e5fdaa30de99.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/382-fd13741d52c82460.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/430-286e490311d71760.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/538-8fa1782655374577.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/572-e2942110ccd52696.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/9bb1fbd7-dcef8d942ab00921.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/app/%5Bsong%5D/page-7ec8e275075e2111.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/app/(legal pages)/cookies/page-05d85503085131e9.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/app/(legal pages)/terms-and-conditions/page-7d9159924e22db92.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/app/_not-found-db91d447e6dc9eb9.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/app/layout-3bf5cdd4ef650db7.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/app/page-922a98308a139bae.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/app/songs/page-e49e06a21787910e.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/main-app-bf40487484bfb6f1.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/main-b2f6d10066bdb90a.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/pages/_app-09895359f0e9e1a4.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/pages/_error-09d3cf05bb4e3326.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-66bfc5905a039917.js",revision:"jEaFPCE8Wps3pDKuDPIBD"},{url:"/_next/static/css/c49ea44ddcb26f2f.css",revision:"c49ea44ddcb26f2f"},{url:"/_next/static/css/f11f000d9e138ef8.css",revision:"f11f000d9e138ef8"},{url:"/_next/static/jEaFPCE8Wps3pDKuDPIBD/_buildManifest.js",revision:"46272ef237d3a77de7f8de6f6388cf47"},{url:"/_next/static/jEaFPCE8Wps3pDKuDPIBD/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
