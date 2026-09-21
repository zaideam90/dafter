/* دفتر — service worker
   ملفات التطبيق: يجيب أحدث نسخة من الإنترنت أولاً، وإذا ماكو نت أو تأخر
   يفتح النسخة المخزونة. لهذا ما تحتاج تغيّر أي رقم لمن ترفع index.html جديد.
   ما تحتاج تعدّل هذا الملف أبداً إلا إذا تغيرت طريقة التخزين نفسها. */
const CACHE = "daftar-app";
const FONTS = "daftar-fonts";
const WAIT_MS = 3500;          // بعدها نعتبر النت بطيء ونفتح المخزون
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", ev => {
  ev.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
      .catch(err => console.warn("[sw] precache failed", err))
  );
});

self.addEventListener("activate", ev => {
  ev.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function withTimeout(p, ms) {
  return new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error("timeout")), ms);
    p.then(v => { clearTimeout(t); res(v); }, e => { clearTimeout(t); rej(e); });
  });
}

self.addEventListener("fetch", ev => {
  const req = ev.request;
  if (req.method !== "GET") return;                       // المزامنة POST — تعدي مباشرة
  const url = new URL(req.url);
  if (url.hostname.indexOf("script.google") > -1) return; // كشف الزبون والمزامنة

  // الخطوط: من المخزون، وتتحدث بالخلفية
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    ev.respondWith(caches.open(FONTS).then(async cache => {
      const hit = await cache.match(req);
      const net = fetch(req).then(r => { if (r.ok) cache.put(req, r.clone()); return r; }).catch(() => null);
      return hit || (await net) || new Response("", { status: 504 });
    }));
    return;
  }

  if (url.origin !== location.origin) return;

  // ملفات التطبيق: الإنترنت أولاً، والمخزون احتياط
  ev.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const net = fetch(req, { cache: "no-cache" }).then(r => {
      if (r.ok) cache.put(req, r.clone());
      return r;
    });
    try {
      return await withTimeout(net, WAIT_MS);
    } catch (e) {
      ev.waitUntil(net.catch(() => {}));                  // خلّيه يكمل ويحدّث المخزون للمرة الجاية
      const hit = await cache.match(req, { ignoreSearch: true })
               || (req.mode === "navigate" ? await cache.match("./index.html") : null);
      return hit || new Response("أوفلاين", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }
  })());
});
