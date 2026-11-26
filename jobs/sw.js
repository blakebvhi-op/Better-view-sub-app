// Subbit Jobs service worker. It only exists so phones offer "Install app"; it does not cache anything.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
