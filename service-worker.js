"use strict";var precacheConfig=[["/2020/07/23/hello-world/index.html","ce1c6649dd1b420c1a83ba507281dc15"],["/404.html","f28f0cbac4b7b17d69a6ff1631d68340"],["/archives/2020/07/index.html","9287baba4b354c2505c7ef5861c8e19b"],["/archives/2020/index.html","5324d6ca55f997955f6d77cf08ff31e2"],["/archives/index.html","bf1377c7d83be9fcb57874b24d9f21c0"],["/categories/index.html","59ce9a3bf6f7b5d4566bd8bc1a598b88"],["/css/index.css","828269a2a59ec53d2d4c96518922a3fc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","dfe0ba4833f0c97d6b14b4617c2a5663"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","a31619ba3b3997986b250845ac03c6b7"],["/picture/archive1.jpg","ca7656dd1d53639a7f4a807e49329e87"],["/picture/archive2.jpg","d6349699c545267875d5c8ad9b99777e"],["/picture/avatar.jpg","1b35f572300b998ca71c4a3b8d439308"],["/picture/background1.jpg","3899519f1be8a39f0d35f714e690b513"],["/picture/background2.jpg","26bbecde689640d2efd7815562839170"],["/picture/background3.jpg","e7c15043f27a52759cbf1edce0a1c4b6"],["/picture/category1.jpg","743c8cb48a895234f81ac32b43795662"],["/picture/category2.jpg","dc5eda37f0dc2990c81107be154c4b29"],["/picture/index1.jpg","3cbac32c37e5f3524b20eea2ddbbf396"],["/picture/index2.png","f20936df8aed33d3dfa6a8d3374f9c21"],["/picture/picture1.jpg","ad3e5c9568107090c589c7fa18654bbb"],["/picture/picture10.jpg","b959598b0403e1bc7bd94c7462f42403"],["/picture/picture11.jpg","c9aebd9526add4f4dc05e8574b179b3c"],["/picture/picture2.jpg","f8804138a255971bc538a8b76363ba85"],["/picture/picture3.jpg","4b06adb0b80f73332f04658b200a3214"],["/picture/picture5.jpg","acb1e6e61eb5f84205f9a8a915665dca"],["/picture/picture7.jpg","4ce551be2a462887ba648aadba03650c"],["/picture/picture8.jpg","26c512af03115f91ab59d9c47089204f"],["/picture/picture9.jpg","f70d71a62bf7620b3618f61d2c92fa05"],["/picture/tag1.jpg","d6349699c545267875d5c8ad9b99777e"],["/picture/tag2.jpg","4ca8df23869ad1b0e9432e10fbfeff14"],["/picture/valorant1.jpg","fe38f88d72678b8858f944b1232aae10"],["/picture/valorant2.jpg","8b6960c17e1e8d3bf21deaf7acf01763"],["/tags/index.html","03e8b03ae79f23375701ce0b71e32419"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,n,!1);return[r.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}})),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}((function(){return function e(t,n,r){function c(o,i){if(!n[o]){if(!t[o]){var s="function"==typeof require&&require;if(!i&&s)return s(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[o]={exports:{}};t[o][0].call(f.exports,(function(e){var n=t[o][1][e];return c(n||e)}),f,f.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)c(r[o]);return c}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function a(e,t,n){var c=e.url,a=n.maxAgeSeconds,o=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+c+". Max entries is "+o+", max age is "+a),u.getDb(i).then((function(e){return u.setTimestampForUrl(e,c,s)})).then((function(e){return u.expireEntries(e,o,a,s)})).then((function(e){r("Successfully updated IDB.");var n=e.map((function(e){return t.delete(e)}));return Promise.all(n).then((function(){r("Done with cache cleanup.")}))})).catch((function(e){r(e)}))}function o(e){var t=Array.isArray(e);if(t&&e.forEach((function(e){"string"==typeof e||e instanceof Request||(t=!1)})),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,s=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then((function(r){return"GET"===e.method&&n.test(r.status)&&c(t).then((function(n){n.put(e,r).then((function(){var r=t.cache||s.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=a.bind(null,e,t,n);i=i?i.then(r):r()}(e,n,r)}))})),r.clone()}))},openCache:c,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then((function(){return Promise.all([caches.open(e),caches.open(t)]).then((function(t){var n=t[0],r=t[1];return n.keys().then((function(e){return Promise.all(e.map((function(e){return n.match(e).then((function(t){return r.put(e,t)}))})))})).then((function(){return caches.delete(e)}))}))}))},cache:function(e,t){return c(t).then((function(t){return t.add(e)}))},uncache:function(e,t){return c(t).then((function(t){return t.delete(e)}))},precache:function(e){e instanceof Promise||o(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:o,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",c=1,a="store",o="url",i="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=function(e){return new Promise((function(t,n){var s=indexedDB.open(r+e,c);s.onupgradeneeded=function(){s.result.createObjectStore(a,{keyPath:o}).createIndex(i,i,{unique:!1})},s.onsuccess=function(){t(s.result)},s.onerror=function(){n(s.error)}}))}(e)),s[e]},setTimestampForUrl:function(e,t,n){return new Promise((function(r,c){var o=e.transaction(a,"readwrite");o.objectStore(a).put({url:t,timestamp:n}),o.oncomplete=function(){r(e)},o.onabort=function(){c(o.error)}}))},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise((function(r,c){var s=1e3*t,u=[],f=e.transaction(a,"readwrite"),h=f.objectStore(a);h.index(i).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-s>t.value[i]){var r=t.value[o];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=c})):Promise.resolve([])}(e,n,r).then((function(n){return function(e,t){return t?new Promise((function(n,r){var c=[],s=e.transaction(a,"readwrite"),u=s.objectStore(a),f=u.index(i),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[o];c.push(a),u.delete(a),e-c.length>t&&r.continue()}})},s.oncomplete=function(){n(c)},s.onabort=r})):Promise.resolve([])}(e,t).then((function(e){return n.concat(e)}))}))}}},{}],3:[function(e,t,n){function r(e){return e.reduce((function(e,t){return e.concat(t)}),[])}e("serviceworker-cache-polyfill");var c=e("./helpers"),a=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){c.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+t+"]"),e.waitUntil(c.openCache({cache:{name:t}}).then((function(e){return Promise.all(o.preCacheItems).then(r).then(c.validatePrecacheInput).then((function(t){return c.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)}))})))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,c=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach((function(e,r){t[e.name]=n[r+1]}))}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),c=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),c=[];!r.done;){new RegExp(r.value[0]).test(t)&&c.push(r.value[1]),r=n.next()}return c},o=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach((function(e){o.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}})),o.prototype.add=function(e,t,n,a){var o;a=a||{},t instanceof RegExp?o=RegExp:o=(o=a.origin||self.location.origin)instanceof RegExp?o.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(o),e=e.toLowerCase();var i=new r(e,t,n,a);this.routes.has(o)||this.routes.set(o,new Map);var s=this.routes.get(o);s.has(e)||s.set(e,new Map);var u=s.get(e),f=i.regexp||i.fullUrlRegExp;u.has(f.source)&&c.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,i)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,c=n.pathname;return this._match(e,a(this.routes,r),c)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var c=t[r],o=c&&c.get(e.toLowerCase());if(o){var i=a(o,n);if(i.length>0)return i[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache first ["+e.url+"]",n),c.openCache(n).then((function(t){return t.match(e).then((function(t){var a=n.cache||r.cache,o=Date.now();return c.isResponseFresh(t,a.maxAgeSeconds,o)?t:c.fetchAndCache(e,n)}))}))}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache only ["+e.url+"]",n),c.openCache(n).then((function(t){return t.match(e).then((function(e){var t=n.cache||r.cache,a=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,a))return e}))}))}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),c=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise((function(a,o){var i=!1,s=[],u=function(e){s.push(e.toString()),i?o(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),c(e,t,n).then(f,u)}))}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,o=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return c.debug("Strategy: network first ["+e.url+"]",n),c.openCache(n).then((function(t){var i,s,u=[];if(o){var f=new Promise((function(a){i=setTimeout((function(){t.match(e).then((function(e){var t=n.cache||r.cache,o=Date.now(),i=t.maxAgeSeconds;c.isResponseFresh(e,i,o)&&a(e)}))}),1e3*o)}));u.push(f)}var h=c.fetchAndCache(e,n).then((function(e){if(i&&clearTimeout(i),a.test(e.status))return e;throw c.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")})).catch((function(r){return c.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then((function(e){if(e)return e;if(s)return s;throw r}))}));return u.push(h),Promise.race(u)}))}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),c=e("./router"),a=e("./helpers"),o=e("./strategies"),i=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:c,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],c=0,a=0,o="",u=t&&t.delimiter||"/";null!=(n=d.exec(e));){var f=n[0],h=n[1],p=n.index;if(o+=e.slice(a,p),a=p+f.length,h)o+=h[1];else{var l=e[a],g=n[2],m=n[3],b=n[4],v=n[5],x=n[6],w=n[7];o&&(r.push(o),o="");var y=null!=g&&null!=l&&l!==g,j="+"===x||"*"===x,E="?"===x||"*"===x,R=n[2]||u,k=b||v;r.push({name:m||c++,prefix:g||"",delimiter:R,optional:E,repeat:j,partial:y,asterisk:!!w,pattern:k?s(k):w?".*":"[^"+i(R)+"]+?"})}}return a<e.length&&(o+=e.substr(a)),o&&r.push(o),r}function c(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function a(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=(r||{}).pretty?c:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,p=i[f.name];if(null==p){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(l(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(h=s(p[d]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");o+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?a(p):s(p),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');o+=f.prefix+h}}else o+=f}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t,n){l(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,c=!1!==n.end,a="",o=0;o<e.length;o++){var s=e[o];if("string"==typeof s)a+=i(s);else{var h=i(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+h+p+")*"),a+=p=s.optional?s.partial?h+"("+p+")?":"(?:"+h+"("+p+"))?":h+"("+p+")"}}var d=i(n.delimiter||"/"),g=a.slice(-d.length)===d;return r||(a=(g?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=c?"$":r&&g?"":"(?="+d+"|$)",u(new RegExp("^"+a,f(n)),t)}function p(e,t,n){return l(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):l(e)?function(e,t,n){for(var r=[],c=0;c<e.length;c++)r.push(p(e[c],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return h(r(e,n),t,n)}(e,t,n)}var l=e("isarray");t.exports=p,t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=h;var d=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then((function(){if(arguments.length<1)throw new TypeError;return e=e.map((function(e){return e instanceof Request?e:String(e)})),Promise.all(e.map((function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())})))})).then((function(r){if(r.some((function(e){return!e.ok})))throw new t("Incorrect response status");return Promise.all(r.map((function(t,r){return n.put(e[r],t)})))})).then((function(){}))},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)})),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://zesiar0.github.io/"});