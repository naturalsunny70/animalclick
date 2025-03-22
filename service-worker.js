self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('animal-game-v1').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './title.mp3',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
