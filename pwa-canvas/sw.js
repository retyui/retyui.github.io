//Cache polyfil to support cacheAPI in all browsers
importScripts('/pwa-canvas/cache-polyfill.js');

var cacheName = 'cache-v3';

//Files to save in cache
var files = [
    '/pwa-canvas/',
    '/pwa-canvas/index.html',
    'https://cdn.polyfill.io/v2/polyfill.min.js',
    '/pwa-canvas/images/icons/android-chrome-192x192.png',
    '/pwa-canvas/images/icons/favicon-16x16.png',
    '/pwa-canvas/images/icons/favicon-32x32.png',
    '/pwa-canvas/js/c-main.js',
    '/pwa-canvas/js/c-rect.js',
    '/pwa-canvas/js/utils.js',
    '/pwa-canvas/js/build.min.js',
    '/pwa-canvas/manifest.json'
];

//Adding `install` event listener
self.addEventListener('install', (event) => {
    console.info('Event: Install');

    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                //[] of files to cache & if any of the file not present `addAll` will fail
                return cache.addAll(files)
                    .then(() => {
                        console.info('All files are cached');
                        return self.skipWaiting(); //To forces the waiting service worker to become the active service worker
                    })
                    .catch((error) => {
                        console.error('Failed to cache', error);
                    })
            })
    );
});

/*
  FETCH EVENT: triggered for every request made by index page, after install.
*/

//Adding `fetch` event listener
self.addEventListener('fetch', (event) => {
    console.info('Event: Fetch');

    var request = event.request;

    //Tell the browser to wait for newtwork request and respond with below
    event.respondWith(
        //If request is already in cache, return it
        caches.match(request).then((response) => {
            if (response) {
                return response;
            }

            // // Checking for navigation preload response
            // if (event.preloadResponse) {
            //   console.info('Using navigation preload');
            //   return response;
            // }

            //if request is not cached or navigation preload response, add it to cache
            return fetch(request).then((response) => {
                var responseToCache = response.clone();
                caches.open(cacheName).then((cache) => {
                    cache.put(request, responseToCache).catch((err) => {
                        console.warn(request.url + ': ' + err.message);
                    });
                });

                return response;
            });
        })
    );
});

/*
  ACTIVATE EVENT: triggered once after registering, also used to clean up caches.
*/

//Adding `activate` event listener
self.addEventListener('activate', (event) => {
    console.info('Event: Activate');

    //Navigation preload is help us make parallel request while service worker is booting up.
    //Enable - chrome://flags/#enable-service-worker-navigation-preload
    //Support - Chrome 57 beta (behing the flag)
    //More info - https://developers.google.com/web/updates/2017/02/navigation-preload#the-problem

    // Check if navigationPreload is supported or not
    // if (self.registration.navigationPreload) {
    //   self.registration.navigationPreload.enable();
    // }
    // else if (!self.registration.navigationPreload) {
    //   console.info('Your browser does not support navigation preload.');
    // }

    //Remove old and unwanted caches
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        return caches.delete(cache); //Deleting the old cache (cache v1)
                    }
                })
            );
        })
            .then(function () {
                console.info("Old caches are cleared!");
                // To tell the service worker to activate current one
                // instead of waiting for the old one to finish.
                return self.clients.claim();
            })
    );
});
