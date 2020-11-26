importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
    console.log(`Workbox berhasil dimuat`);
else
    console.log(`Workbox gagal dimuat`);

// Precaching App Shell
workbox.precaching.precacheAndRoute([{
        url: '/index.html',
        revision: '1'
    },
    {
        url: '/nav.html',
        revision: '1'
    },
    {
        url: '/css/materialize.min.css',
        revision: '1'
    },
    {
        url: '/js/materialize.min.js',
        revision: '1'
    },
    {
        url: '/js/nav.js',
        revision: '1'
    },
]);

// Caching of page files that appear in the browser
workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        // Add cacheName
        cacheName: 'pages'
    })
);