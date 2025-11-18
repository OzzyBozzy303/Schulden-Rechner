self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("schulden-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./manifest.json",
        "./sw.js"
        // hier kannst du weitere Dateien hinzufügen (CSS, JS, Icons)
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

