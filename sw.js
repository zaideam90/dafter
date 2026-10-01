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

/* ================= رفع بالخلفية (Background Sync) =================
   طبقة أمان إضافية فوق مزامنة الصفحة العادية: كروم/أندرويد يستدعي هذا
   تلقائياً أول ما يرجع النت، حتى والتطبيق مسكّر تماماً من الذاكرة.
   يقرا نفس قاعدة البيانات (IndexedDB) اللي تستعملها index.html ويرفع
   الحركات والأطراف غير المتزامنة لحالها. DBNAME هنا لازم يطابق index.html. */
const DBNAME = "ledger_db";

self.addEventListener("sync", ev => {
  if (ev.tag === "daftar-sync") ev.waitUntil(backgroundUpload());
});

function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DBNAME, 2);
    r.onupgradeneeded = () => {
      const d = r.result;
      ["parties", "entries", "meta", "receipts"].forEach(n => {
        if (!d.objectStoreNames.contains(n)) {
          d.createObjectStore(n, { keyPath: n === "meta" ? "k" : "id" });
        }
      });
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
function getAll(db, store) {
  return new Promise((res, rej) => {
    const r = db.transaction(store, "readonly").objectStore(store).getAll();
    r.onsuccess = () => res(r.result || []);
    r.onerror = () => rej(r.error);
  });
}
function getMeta(db, key) {
  return new Promise((res, rej) => {
    const r = db.transaction("meta", "readonly").objectStore("meta").get(key);
    r.onsuccess = () => res(r.result ? r.result.val : null);
    r.onerror = () => rej(r.error);
  });
}
function putAll(db, store, arr) {
  return new Promise((res, rej) => {
    const t = db.transaction(store, "readwrite");
    arr.forEach(x => t.objectStore(store).put(x));
    t.oncomplete = res;
    t.onerror = () => rej(t.error);
  });
}
function putMeta(db, key, val) {
  return new Promise((res, rej) => {
    const t = db.transaction("meta", "readwrite");
    t.objectStore("meta").put({ k: key, val });
    t.oncomplete = res;
    t.onerror = () => rej(t.error);
  });
}

async function backgroundUpload() {
  const db = await openDB();
  const settings = await getMeta(db, "settings");
  if (!settings || !settings.syncUrl) return;              // ماكو مزامنة مربوطة أصلاً

  const parties = await getAll(db, "parties");
  const entries = await getAll(db, "entries");
  const pushP = parties.filter(p => !p.synced);
  const pushE = entries.filter(e => !e.synced);
  if (!pushP.length && !pushE.length) return;               // كل شي متزامن، ماكو داعي نزعج الشبكة

  const res = await fetch(settings.syncUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      token: settings.token || "", op: "sync",
      since: settings.lastPull || 0, parties: pushP, entries: pushE
    })
  });
  if (!res.ok) throw new Error("HTTP " + res.status);        // throw يخلي كروم يعيد الجدولة لحاله
  const out = await res.json();
  if (!out.ok) throw new Error(out.error || "رفض الخادم الطلب");

  const okP = new Set(out.savedParties || []), okE = new Set(out.savedEntries || []);
  const wrP = [], wrE = [];
  for (const p of pushP) if (okP.has(p.id)) { p.synced = true; wrP.push(p); }
  for (const e of pushE) if (okE.has(e.id)) { e.synced = true; wrE.push(e); }

  /* دمج أي شي واصل من جهاز ثاني بنفس الطلب — نفس منطق الصفحة */
  const pIdx = new Map(parties.map(p => [p.id, p]));
  for (const rp of (out.parties || [])) {
    const cur = pIdx.get(rp.id);
    if (!cur) { rp.synced = true; wrP.push(rp); }
    else if (cur.synced && (rp.updated || 0) > (cur.updated || 0)) { Object.assign(cur, rp); cur.synced = true; wrP.push(cur); }
  }
  const eIdx = new Map(entries.map(e => [e.id, e]));
  for (const re of (out.entries || [])) {
    const cur = eIdx.get(re.id);
    if (!cur) { re.synced = true; wrE.push(re); }
    else if (re.voided && !cur.voided) { cur.voided = true; cur.synced = true; wrE.push(cur); }
  }

  if (wrP.length) await putAll(db, "parties", wrP);
  if (wrE.length) await putAll(db, "entries", wrE);
  settings.lastPull = out.now;
  settings.lastSyncAt = Date.now();
  await putMeta(db, "settings", settings);
}
