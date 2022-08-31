const CACHE_NAME = 'version-1' // to not reload the image each time
const urlsToChache = ['index.html', 'offline.html']
const self = this
//install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('open cache')
      return cache.addAll(urlsToCache)
    }),
  )
})
//listen fir request
self.addEventListener('fetch', (event) => {})
//Activate Service Worker
self.addEventListener('activate', (event) => {})
