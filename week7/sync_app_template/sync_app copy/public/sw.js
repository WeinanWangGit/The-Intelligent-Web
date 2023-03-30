const filesToCache = [
    "partials/footer.ejs",
    "partials/header.ejs",
    "stylesheets/style.css",
    "stylesheets/menu.css",
    "/"
];
const staticCacheName = 'mySyncApp';


self.addEventListener('install', event => {
    console.log('Installing service worker');
    event.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log('Caching file');
        return cache.addAll(filesToCache);
    }));
});


// In your service worker
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('sync', function(event) {
    console.log('Event: Sync', event);
    self.registration.showNotification('Syncing now');
    // You can add your own sync logic here
});








