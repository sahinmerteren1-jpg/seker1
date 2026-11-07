// Yalnızca uygulama kabuğunu önbelleğe alır. /api/* ve GET dışındaki istekler hiç önbelleğe girmez.
const CACHE = 'ss-shell-v1';
const SHELL = ['./', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin || u.pathname.indexOf('/api/') === 0) return;
  if (r.mode === 'navigate') {
    // Önce ağ (güncel sürüm), ağ yoksa son kaydedilen sayfa.
    e.respondWith(
      fetch(r).then(res => {
        if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put('./', cp)); }
        return res;
      }).catch(() => caches.match('./'))
    );
    return;
  }
  e.respondWith(
    caches.match(r).then(hit => hit || fetch(r).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); }
      return res;
    }))
  );
});
