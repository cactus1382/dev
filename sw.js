const CACHE = "ali-dev-v5-3";
const SCOPE_PATH = new URL("./", self.location).pathname;

const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./favicon.svg",
  "./og.png",
  "./icon-192.png",
  "./icon-512.png",
  "./img/homefood-home.png",
  "./img/homefood-track.png",
  "./img/ghablamoore.png",
  "./img/clue.png",
  "./fonts/vazirmatn-latin-400-normal.woff2",
  "./fonts/vazirmatn-latin-700-normal.woff2",
  "./fonts/vazirmatn-latin-800-normal.woff2",
  "./fonts/vazirmatn-arabic-400-normal.woff2",
  "./fonts/vazirmatn-arabic-700-normal.woff2",
  "./fonts/vazirmatn-arabic-800-normal.woff2",
  "./fonts/space-grotesk-latin-500-normal.woff2",
  "./fonts/space-grotesk-latin-700-normal.woff2"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(PRECACHE.map(url =>
      cache.add(new Request(url, { cache: "reload" })).catch(() => {})
    ));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(SCOPE_PATH)) return;

  // HTML, CSS and JS must always come from the same deploy: network-first for all
  // same-origin GETs, cache only as an offline fallback. Mixing a cached styles.css
  // with a fresh index.html is what broke the layout on reload.
  event.respondWith(networkFirst(req));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (err) {
    return (await cache.match(req)) || (await cache.match("./index.html")) || Response.error();
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (err) {
    return Response.error();
  }
}
