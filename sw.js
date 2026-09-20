/* دفتر — service worker
   يخزن ملفات التطبيق حتى يفتح بلا إنترنت.
   لمن تعدّل index.html، غيّر رقم النسخة تحت حتى يوصل التحديث للأجهزة. */
const VERSION = "daftar-v1";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", ev => {
  ev.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(CORE))
      .then(() => self.skipWaiting())
      .catch(err => console.warn("[sw] precache failed", err))
  );
});

self.addEventListener("activate", ev => {
  ev.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isFont(url) {
  return url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
}

self.addEventListener("fetch", ev => {
  const req = ev.request;
  if (req.method !== "GET") return;                 // المزامنة POST — تعدي مباشرة للشبكة
  const url = new URL(req.url);
  if (url.hostname.indexOf("script.google") > -1) return;

  // الخطوط: من الكاش أولاً، وتتحدث بالخلفية
  if (isFont(url)) {
    ev.respondWith(
      caches.open(VERSION + "-fonts").then(async cache => {
        const hit = await cache.match(req);
        const net = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; })
                              .catch(() => null);
        return hit || net || new Response("", { status: 504 });
      })
    );
    return;
  }

  if (url.origin !== location.origin) return;

  // ملفات التطبيق: من الكاش فوراً، ونجيب نسخة جديدة بالخلفية للمرة الجاية
  ev.respondWith(
    caches.open(VERSION).then(async cache => {
      const hit = await cache.match(req, { ignoreSearch: true });
      const net = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; })
                            .catch(() => null);
      if (hit) { ev.waitUntil(net); return hit; }
      const res = await net;
      if (res) return res;
      const fallback = await cache.match("./index.html");
      return fallback || new Response("أوفلاين", {
        status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    })
  );
});
