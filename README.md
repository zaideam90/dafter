# دفتر — Daftar

**Offline-first ledger PWA for a small workshop** — customers, suppliers, workers, cash box and expenses, synced to Google Sheets.

**دفتر حسابات يعمل بدون إنترنت لورشة صغيرة** — زبائن، موردين، موظفين، خزنة ومصاريف، مع مزامنة إلى كوكل شيت.

Live: https://zaideam90.github.io/dafter/

[English](#english) · [العربية](#العربية)

---

## English

### Features
- **Daily journal (home screen):** three totals — owed to you by customers (green), what you owe customers and suppliers (red), and the cash box (blue). Six quick actions: cash job, credit job, receive, pay, purchase, expense. Browse any day; an entry appears on the day of its date.
- **Accounts:** customers, suppliers, workers. One currency per account (IQD or USD), payments in the other currency with an exchange rate. Hourly rate for workers.
- **Cash box:** IQD and USD kept separately, calculated from entries starting on an opening-balance date. Currency exchange, cash count (the difference is recorded as a visible line), and transfers to a separate savings box.
- **Walk-in customers:** one shared account for customers who pay on the spot. Its balance is always zero, and it shows a monthly total.
- **Expenses:** work and home, shown per month. Each month starts from zero; there is no running total across months.
- **Receipts:** work receipts with a reference number, line items, amount in words, print / PDF. Stored on the device only.
- **Customer link:** a private read-only statement page for each customer.
- **Append-only:** nothing is ever deleted. A cancellation is a reversing entry, and the original line stays marked as void.

### Files
```
index.html              the whole app (single file)
sw.js                   offline cache
manifest.webmanifest    install on home screen
icon-192.png            icons
icon-512.png
icon-maskable-512.png
```
The Google Apps Script (`Code.gs`) and the test suite are **not** stored in this repo. The script lives inside the Google Sheet.

### Install
1. **GitHub Pages:** Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)` → Save.
2. **Android (Chrome):** open the link → ⋮ → *Install app*.
3. **Desktop (Chrome / Edge):** install icon in the address bar.

### Google Sheets sync
1. Create a Google Sheet → Extensions → Apps Script → paste `Code.gs` → Save.
2. Deploy → New deployment → ⚙ **Web app** → Execute as: **Me** → Who has access: **Anyone** → Deploy → copy the `/exec` link.
3. Refresh the sheet → menu **الدفتر** → setup: set the token and the workshop name. Then run the raw-sheet protection item from the same menu.
4. In the app: ⚙ Settings → paste the link and the same token → *Sync now*.

### Updating
- **App:** upload the new `index.html` over the old one. The app fetches it automatically on the next launch.
- **Script:** paste the new `Code.gs` → Deploy → **Manage deployments** → ✏ → Version: **New version** → Deploy. Never use *New deployment*, because it creates a new link.

### How sync works
- Every entry is saved on the device first, instantly.
- Uploads start about 2.5 s after the last change. When offline, entries wait and upload once the connection returns.
- The `parties` and `entries` sheets are the source data: **do not edit them by hand**. The `كشف` sheet is a readable report that is rebuilt on demand.
- Comfortable up to roughly 20–50k rows.

### Privacy
Data lives on your device and in your own Google Sheet, not in this repo. The token blocks random requests, so keep the link and the token private.

---

<div dir="rtl">

## العربية

### المميزات
- **اليومية (الشاشة الأولى):** ثلاثة أرقام عامة:
  - الأخضر: ما لك عند الزبائن.
  - الأحمر: ما عليك للزبائن والموردين.
  - الأزرق: الخزنة.

  فيها ستة أزرار سريعة: عمل مباشر، عمل آجل، استلام، تسديد، شراء، مصروف. يمكن التنقل بين الأيام، وكل حركة تظهر في يوم تاريخها.
- **الحسابات:** زبائن، موردين، موظفين. لكل حساب عملة واحدة (دينار أو دولار)، ويمكن الدفع بالعملة الأخرى مع سعر الصرف. للموظف سعر ساعة.
- **الخزنة:** الدينار والدولار منفصلان، وتُحسب من الحركات ابتداءً من تاريخ الرصيد الافتتاحي. فيها:
  - تصريف.
  - جرد، ويُسجَّل الفرق كسطر ظاهر.
  - تحويل إلى خزنة توفير منفصلة.
- **زبائن يوميين:** حساب عام للزبائن الذين يدفعون في مكانهم. رصيده دائماً صفر، ويعرض مجموعاً شهرياً.
- **المصاريف:** قسمان، الشغل والبيت، والعرض شهري. كل شهر يبدأ من الصفر، ولا يوجد مجموع متراكم لأكثر من شهر.
- **الإيصالات:** إيصال عمل برقم مرجعي وبنود، مع المبلغ كتابةً، وطباعة أو PDF. محفوظة على الجهاز فقط.
- **رابط الزبون:** صفحة كشف خاصة بكل زبون، للقراءة فقط.
- **لا حذف أبداً:** الإلغاء قيد عكسي، والسطر الأصلي يبقى معلَّماً «ملغي».

### الملفات
```
index.html              التطبيق كله بملف واحد
sw.js                   التخزين للعمل بدون إنترنت
manifest.webmanifest    التثبيت على الشاشة الرئيسية
icon-192.png            الأيقونات
icon-512.png
icon-maskable-512.png
```
سكربت كوكل (`Code.gs`) والاختبارات **ليست** في هذا المستودع. السكربت يُلصق داخل كوكل شيت.

### التثبيت
1. **GitHub Pages:** اذهب إلى Settings ← Pages ← Source: `Deploy from a branch` ← `main` / `(root)` ← Save.
2. **أندرويد (Chrome):** افتح الرابط ← ⋮ ← «تثبيت التطبيق».
3. **الحاسبة (Chrome / Edge):** أيقونة التثبيت في شريط العنوان.

### الربط مع كوكل شيت
1. أنشئ Google Sheet جديد ← Extensions ← Apps Script ← الصق `Code.gs` ← Save.
2. Deploy ← New deployment ← ⚙ **Web app** ← Execute as: **Me** ← Who has access: **Anyone** ← Deploy ← انسخ الرابط الذي ينتهي بـ `/exec`.
3. حدّث الشيت ← قائمة **الدفتر** ← «إعداد الدفتر» واكتب الرمز واسم الورشة، ثم اختر «حماية الصفحات الخام» من نفس القائمة.
4. في التطبيق: ⚙ الإعدادات ← الصق الرابط ونفس الرمز ← «زامن الآن».

### التحديث
- **التطبيق:** ارفع `index.html` الجديد فوق القديم. التطبيق يجلبه تلقائياً عند الفتح التالي.
- **السكربت:** الصق `Code.gs` الجديد ← Deploy ← **Manage deployments** ← ✏ ← Version: **New version** ← Deploy. لا تستخدم New deployment، لأنه يولّد رابطاً جديداً.

### كيف تعمل المزامنة
- كل حركة تُحفظ على الجهاز أولاً وفوراً.
- الرفع يبدأ بعد ثانيتين ونصف تقريباً من آخر تعديل. إذا لم يوجد إنترنت، تنتظر الحركات وتُرفع تلقائياً عند عودة الاتصال.
- الصفحتان `parties` و `entries` هما مصدر البيانات: **لا تعدّلهما يدوياً**. صفحة «كشف» تقرير للقراءة يُعاد بناؤه عند الطلب.
- مريح حتى حدود 20–50 ألف سطر تقريباً.

### الخصوصية
البيانات على جهازك وفي كوكل شيت الخاص بك، وليست في هذا المستودع. الرمز يمنع الطلبات العشوائية، فلا تنشر الرابط والرمز.

</div>
