const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"zesiar0"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"609eaf4f032c044d2b4f4208bc6a20d4",url:"./2020/07/23/hello-world/index.html"},{revision:"6205912f608d8b3621a715f8e3579a98",url:"./404.html"},{revision:"ebb2c9662a3f3d03df7b6a55d7033b3b",url:"./archives/2020/07/index.html"},{revision:"15c175ed53532a59520a4b36c67c2dc3",url:"./archives/2020/index.html"},{revision:"c4e1ee0582e17b7c4eaa1c21e1d730a7",url:"./archives/index.html"},{revision:"4b01b639552c1bedfdf775aa40b60d32",url:"./categories/index.html"},{revision:"9e1c54d5c3ee47394ada1f6f727904d6",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"de4cf8d53fd4dfe59ab1f3bcc6bd5213",url:"./index.html"},{revision:"b382597891e958e71bb7c1099977ec66",url:"./js/main.js"},{revision:"24e286714f775d2a52053e530b2ac199",url:"./js/search/algolia.js"},{revision:"e3a22e76d8b457655f619551990316e8",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0dcf46510648b9ff1a8a65d270ba117a",url:"./js/tw_cn.js"},{revision:"9fadc7723c6bd679aa69c1c158f65af0",url:"./js/utils.js"},{revision:"9609636927072b33057e77fc58899f53",url:"./link/index.html"},{revision:"b9b2b455a3c4a36b4527e5d913a5fcdf",url:"./manifest.json"},{revision:"95877f2dd0dac8a3a466b04d204cf8d2",url:"./service-worker.js"},{revision:"a7a45b60aabbe876d18d36b851612d12",url:"./tags/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();