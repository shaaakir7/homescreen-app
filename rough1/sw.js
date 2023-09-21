self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('shirts-store').then((cache) => cache.addAll([
        '/21/rough1/',
        '/21/rough1/index.html',
        '/21/rough1/index.js',
        '/21/rough1/style.css',
        '/21/rough1/images/hm1.webp',
        '/21/rough1/images/hm2.webp',
        '/21/rough1/images/hm4.webp',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
