//listen to install service worker event
self.addEventListener('install', evt => {
    console.log('service worker has been installed');
});

//listen to activate service worker event
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});

self.addEventListener("fetch", function (event) {
    console.log(event.request.url);
    event.respondWith(
    caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
    })
    );
    });