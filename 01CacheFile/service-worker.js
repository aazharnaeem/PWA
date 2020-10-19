var cacheName = 'CACHEFILE';
var files = [
    '/',
    '/App.js',
    '/style.css',
    '/index.html',
    '/contact.html',
    '/about.html',
];


self.addEventListener('activate', function (e) {
    console.log("'[ServiceWorker]' Activated");
});

self.addEventListener('install', function (e) {
    console.log("'[ServiceWorker]' install");
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log("'[ServiceWorker]' Caching up shell");
            return cache.addAll(files)
        })
    );
});

self.addEventListener('fetch',function(e){
    console.log('[serviceWorker] Fetch',e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request)
        })
    )
})