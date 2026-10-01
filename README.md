<div align="center">

# 📒 دفتر · Daftar

**دفتر حسابات للورشة — يشتغل بدون إنترنت، ويتزامن مع كوكل شيت**
**A workshop ledger that works offline and syncs to Google Sheets**

[![PWA](https://img.shields.io/badge/PWA-offline--first-1f5c8b)](#)
[![Single file](https://img.shields.io/badge/app-single%20HTML%20file-2e7d6b)](#)
[![Tests](https://img.shields.io/badge/tests-31%20passing-2e7d6b)](#tests--الاختبارات)
[![Languages](https://img.shields.io/badge/UI-Arabic-b5412f)](#)

🔗 **https://zaideam90.github.io/dafter/**

[العربية](#العربية) · [English](#english)

</div>

---

<div dir="rtl">

<a name="العربية"></a>

# العربية

## ما هو دفتر؟

برنامج حسابات بسيط لورشة أو محل صغير. تسجّل بيه الشغل والفلوس اللي تدخل وتطلع، ويكلك بأي لحظة: **شكد إلك عند الزبائن، شكد عليك، وشكد بالخزنة فعلاً.**

- يفتح على التلفون مثل أي تطبيق، **وبدون إنترنت**.
- كل حركة تنحفظ بجهازك أول، وبعدين تنرفع لكوكل شيت لحالها.
- **ما ينمسح أي شي أبداً.** الإلغاء والتصحيح يبقون ظاهرين، حتى تكدر تراجع أي رقم.
- ملف واحد (`index.html`)، بلا سيرفر ولا اشتراك.

---

## الشاشات الأربع

| التبويب | شنو بيه |
|---|---|
| **اليومية** | الشاشة الأولى: ثلاث أرقام عامة، الأزرار الستة، حركات اليوم، وتقليب بين الأيام |
| **الحسابات** | زبائن · موردين · موظفين، وكل حساب بصفحته وكشفه |
| **الخزنة** | الخزنة العامة وخزنة التوفير: دينار ودولار، تصريف، جرد، تحويل |
| **المصاريف** | مصاريف الشغل والبيت، كل شهر يبدي من صفر |

### الأرقام الثلاثة بأعلى اليومية

| اللون | المعنى |
|---|---|
| 🟢 **أخضر** | اللي إلك عند الزبائن |
| 🔴 **أحمر** | اللي عليك للزبائن **والموردين** سوية |
| 🔵 **أزرق** | الخزنة: الكاش الموجود فعلاً |

---

## الأزرار الستة — شنو يسوي كل واحد

هذا أهم جدول بالبرنامج. إذا فهمته ما راح تغلط.

| الزر | متى تستعمله | رصيد الزبون/الطرف | الخزنة |
|---|---|---|---|
| **عمل نقدي** | سويت شغل والزبون **دفع بنفس اللحظة** | ما يتغير | ➕ تزيد |
| **عمل آجل** | سويت شغل والزبون **ما دفع بعد** | يصير مدين إلك | ما تتحرك |
| **استلام** | زبون عليه دين وجابلك فلوس | الدين ينقص | ➕ تزيد |
| **تسديد** | إنت تدفع لمورّد أو تنطي موظف راتب/سلفة | الدين ينقص | ➖ تنقص |
| **شراء** | اشتريت من مورّد **بالدين** | تصير مدين له | ما تتحرك |
| **مصروف** | صرفت من جيبك (شغل أو بيت) | — | ➖ تنقص |

> ⚠️ **غلطة شائعة:** اشتريت مواد من **جيبك** لأجل شغل زبون؟ هذا **مصروف** (فلوس طلعت)، مو «عمل نقدي» (فلوس دخلت). إذا راح تحسبها عليه، اضمها لقيمة الشغل لمن تسجّل «عمل آجل».

### حالات تحتاج انتباه

- **الزبون دفع مقدماً والشغل ما خلص:** سجّل **استلام**. الحساب يبقى «له عليك» لين تخلص وتسجل **عمل آجل** بقيمة الشغل. هذا صحيح وليس خطأ.
- **زبون عابر يدفع بمكانه:** استعمل حساب **«زبائن (يومي)»** مع «عمل نقدي». رصيده دائماً صفر، وما ينفع معاه عمل آجل.
- **دفع بالدولار وحسابه بالدينار (أو العكس):** بنفس ورقة الحركة اختار العملة وسعر الصرف. البرنامج يحوّل لعملة الحساب، والخزنة تسجل العملة الفعلية اللي استلمتها.

---

## الحسابات

- **زبون:** عمل آجل · عمل نقدي · استلام. له كشف حساب قابل للطباعة ورابط خاص (انظر «رابط الزبون»).
- **مورّد:** شراء · تسديد.
- **موظف:** له سعر ساعة. تسجّل **ساعات العمل** (تنحسب تلقائي) و**دفعة / سلفة**. بصفحته جدول **«الأجور شهرياً»**: كم استحق (ساعات) وكم انطيته بكل شهر. وبتبويب الموظفين سطر يلخص أجور الشهر الحالي لكل الموظفين.
- **عدة الشغل:** حساب ثابت مثبّت بتبويب **موردين** لشراء الأدوات والمعدات الدائمة (دريل، براغي، مكينة…) بزر **«شراء معدات»**. رصيده دائماً صفر، الخزنة تنقص، وله **مجموع تراكمي من البداية بلا تصفير شهري**.
- **عملة الحساب** (دينار أو دولار) تتحدد وقت الإنشاء ولا تتغير بعد وجود حركات، حتى ما تخرب الأرصدة.

### تصحيح وإلغاء

| الإجراء | شنو يصير |
|---|---|
| **إلغاء** | يتضاف قيد عكسي، والسطر الأصلي يبقى مشطوب. الرصيد يرجع مثل ما كان |
| **تصحيح** | يلغي القديم بقيد عكسي ويضيف الجديد بدله. متوفر لحركات الحسابات وللمصروف |

---

## الخزنة

- **دينار ودولار منفصلين.** تنحسب من الحركات، مو تسجيل مزدوج.
- **تشغيل الخزنة (مرة وحدة):** عدّ الكاش الموجود فعلاً واكتبه كرصيد افتتاحي بتاريخ. من هذا اليوم وطالع كل استلام وتسديد ومصروف وعمل نقدي يحرك الخزنة لحاله.
  - ⚠️ حركة تسجّلها **بتاريخ أقدم من يوم التشغيل** ما تدخل الخزنة. هذا مقصود حتى ما تخرب الرقم.
- **تصريف:** دولار ← دينار (أو العكس) بسعر.
- **جرد:** اكتب المبلغ المعدود فعلاً، والفرق ينسجل كسطر «فرق جرد» ظاهر.
- **خزنة التوفير:** منفصلة تماماً بجردها. **التحويل** بينها وبين العامة ما ينحسب دخل ولا مصروف.

## المصاريف

- قسمين: **الشغل** و**البيت**، وكلاهما ينزل من الخزنة العامة.
- القسم **ما يكون مختار مسبقاً**: لازم تدوس وحدة بإيدك، وزر «حفظ» يبقى معطّل لين تختار.
- يعرض **مجموع الشهر الحالي لكل قسم، ويبدي من صفر كل شهر**. الأشهر السابقة تبقى بجدول، كل شهر بمجموعه. ما في مجموع متراكم لأكثر من شهر. (البيانات ما تنمسح، العرض شهري.)

---

## رابط الزبون

من صفحة أي زبون ← **«رابط للزبون»**. يتولّد رابط خاص بيه، وأول ما ينزامن يشتغل.

- يشوف كشف حسابه بالعربي، محدّث تلقائي، بدون تسجيل دخول.
- يعرض حسابه هو بس، ويخفي الحركات الملغاة وإلغاءها.
- «إلغاء الرابط وإصدار واحد جديد» يوقف القديم نهائياً.
- ⚠️ أي واحد يوصله الرابط يشوف الكشف، فأرسله للزبون نفسه بس.

## الإيصالات

«إيصال عمل» برقم مرجعي، بنود، والمبلغ كتابةً، مع طباعة أو PDF. **محفوظة على الجهاز فقط ولا تنزامن**، وتدخل بالتصدير.

---

## المزامنة مع كوكل شيت

- كل حركة تنحفظ بالجهاز أول وفوراً، بلا انتظار إنترنت.
- بعد ثانيتين ونص من آخر حركة يحاول يرفعها.
- **إذا فشلت:** يعيد المحاولة لحاله بعد 30 ثانية، 2 دقيقة، 5، 10، 15… لين تنجح.
- **لمن ترجع للتطبيق** (تفتحه من الخلفية) يزامن تلقائي.
- **إذا مرّ يوم بلا مزامنة ناجحة:** الشارة تصير حمراء ويطلع شريط تنبيه باليومية.
- **رفع بالخلفية (كروم/أندرويد):** لو سجلت حركة وإنت أوفلاين وسكّرت التطبيق نهائياً، أول ما يرجع النت يرفعها النظام لحاله. يحتاج ملف `sw.js` المحدّث.
- جهازين: الجهاز اللي يزامن أول يرفع بياناته، والثاني يستلمها. لو سجّلت على جهازين قبل الربط، الاثنين ينضمون بدون ما يمسح واحد الثاني.

---

## التركيب

### 1) رفع التطبيق على GitHub Pages

1. سوّي repository باسم `dafter`، ويكون **public**.
2. ارفع هذي الملفات بجذر الـ repo (مو داخل مجلد):
   `index.html` · `sw.js` · `manifest.webmanifest` · `icon-192.png` · `icon-512.png` · `icon-maskable-512.png` · `README.md`
3. **Settings ← Pages ← Source:** `Deploy from a branch` ← `main` / `(root)` ← Save.
4. بعد دقيقة يشتغل الرابط: `https://<اسمك>.github.io/dafter/`

> الرابط ما يكشف بياناتك. البيانات بجهازك وبالشيت الخاص بيك، مو بالكود.

### 2) التثبيت على الجهاز

- **أندرويد (Chrome):** افتح الرابط ← ⋮ ← «تثبيت التطبيق».
- **الحاسبة (Chrome / Edge):** أيقونة التثبيت بشريط العنوان.

### 3) ربط كوكل شيت

1. سوّي Google Sheet جديد ← **Extensions ← Apps Script**.
2. امسح الموجود والصق كامل `apps-script/Code.gs` ← Save.
3. **Deploy ← New deployment ← ⚙ Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy، وافق على الصلاحيات، وانسخ الرابط اللي ينتهي بـ `/exec`.
4. حدّث صفحة الشيت. من قائمة **الدفتر**:
   - **إعداد الدفتر** ← اكتب رمز الحماية واسم الورشة.
   - **حماية الصفحات الخام من التعديل اليدوي** (مرة وحدة).
5. بالتطبيق: ⚙ الإعدادات ← الصق الرابط واكتب نفس الرمز ← **زامن الآن**.

### 4) أول استعمال

1. **الخزنة ← تشغيل الخزنة:** عدّ الكاش واكتب الدينار والدولار.
2. سوّي حسابات الزبائن والموردين والموظفين.
3. سجّل حركات اليوم من أزرار اليومية.

---

## التحديث

| شنو تحدّث | الخطوات |
|---|---|
| **التطبيق** (الأكثر تكراراً) | ارفع `index.html` الجديد على GitHub فوق القديم. بس. التطبيق يجيبه تلقائي عند الفتح |
| **sw.js** (نادر) | ارفعه فوق القديم. مطلوب مرة وحدة لتفعيل الرفع بالخلفية |
| **السكربت** (نادر) | الصق `Code.gs` الجديد ← **Deploy ← Manage deployments ← ✏ ← Version: New version ← Deploy** |

> **لا تسوي New deployment** عند تحديث السكربت. هذا يطلع رابط جديد وتضطر تغيّره بكل الأجهزة.
> الرمز واسم الورشة محفوظين بإعدادات السكربت المخفية، فما ينمسحون لمن تلصق نسخة جديدة.

---

## أسئلة شائعة

**ليش أشوف رقم بسطر الدولار وما عندي حساب بالدولار؟**
سطر الدولار يظهر إذا في **حساب واحد على الأقل عملته دولار**. السنتات (مثل `.43`) علامة إن مبلغاً بالدينار انسجل على حساب دولاري وانقسم على سعر الصرف. افتح الحسابات ودوّر على «حساب بالدولار».

**رقم الخزنة ما يطابق الكاش اللي بجيبي.**
غالباً حركة مسجلة بالنوع الغلط (مثل مصروف مسجل «عمل نقدي»)، أو بتاريخ أقدم من يوم التشغيل. صحّحها، وإذا بقى فرق صغير سوّي **جرد** من تبويب الخزنة.

**سجلت زبون وهو مورّد (أو العكس). أغيّر النوع؟**
حالياً ما في زر لهذا، لأن الزبون والمورّد إشارتهم معكوسة فتبديل النوع لحاله يقلب الأرقام. الحل: سوّي حساب جديد بالنوع الصحيح، ألغِ حركات القديم، وسجّلها من جديد (شراء بدل عمل آجل). زر «تحويل» مخطط له.

**الحركة ظهرت بيوم ثاني.**
اليومية تعرض كل حركة بيوم **تاريخها** مو يوم تسجيلها. تقلّب بين الأيام بالأسهم.

**«سيرفر مو مربوط» أو «ما زامن».**
افتح ⚙ الإعدادات وتأكد الرابط (ينتهي بـ `/exec`) والرمز. زر «زامن الآن» يعرض آخر خطأ.

---

## حدود لازم تعرفها

- `parties` و`entries` بالشيت هي مصدر البيانات. **لا تعدّلها بإيدك.** صفحة «كشف» للقراءة وتنبني من جديد كل مرة.
- الرمز يمنع الطلبات العشوائية، بس أي واحد يوصله **الرابط + الرمز** يكدر يقرا ويكتب. لا تنشرهم.
- Apps Script مريح لحدود 20 إلى 50 ألف سطر. بعدها تصير المزامنة بطيئة.
- رصيد الخزنة يحسب من يوم التشغيل. تغيير يوم التشغيل لاحقاً يحتاج إلغاء الرصيد الافتتاحي وإعادة التشغيل.

## خطة قادمة

- 🔐 قفل البرنامج وقفل الخزنة (بصمة + PIN) وتذكير بالنسخة الاحتياطية.
- 🌐 زر تبديل اللغة (عربي / إنكليزي) للواجهة، وخيار «لغة الكشف» لكل زبون.
- 🗓️ نهاية السنة: أرشفة الحسابات وتدوير الأرصدة يدوياً.

<a name="tests--الاختبارات"></a>

## الاختبارات

31 اختبار آلي (Playwright) تغطي كل البرنامج بكل تحديث: الحسابات والخزنة والمصاريف والمزامنة بين جهازين وإعادة المحاولة. تشتغل بـ:

```bash
pip install playwright && python -m playwright install chromium
python tests/test_daftar.py
```

> الاختبارات والسكربت **مو** بالـ repo. يبقون عندك بالحاسبة.

</div>

---

<a name="english"></a>

# English

## What is Daftar?

A simple ledger for a workshop or small shop. Record work and cash in and out, and always know: **what customers owe you, what you owe, and what is actually in the cash box.**

- Installs on a phone like a normal app and **works fully offline**.
- Every entry is saved on the device first, then pushed to Google Sheets automatically.
- **Nothing is ever deleted.** Voids and corrections stay visible, so every number can be traced.
- One file (`index.html`). No server, no subscription.

---

## The four screens

| Tab | What's in it |
|---|---|
| **Journal** (home) | Three global totals, six quick buttons, the day's entries, and day-by-day browsing |
| **Accounts** | Customers · Suppliers · Workers, each with its own page and statement |
| **Cash box** | General box and savings box: IQD and USD, exchange, cash count, transfers |
| **Expenses** | Work and home expenses, restarting from zero every month |

### The three totals on the Journal

| Colour | Meaning |
|---|---|
| 🟢 **Green** | Owed to you by customers |
| 🔴 **Red** | You owe customers **and** suppliers combined |
| 🔵 **Blue** | The cash box: real cash on hand |

---

## The six buttons — what each one does

This is the most important table in the app.

| Button | Use it when | Account balance | Cash box |
|---|---|---|---|
| **Cash job** | You did a job and the customer **paid on the spot** | Unchanged | ➕ up |
| **Credit job** | You did a job and the customer **hasn't paid yet** | Customer owes you | unchanged |
| **Receive** | A customer with a debt pays you | Debt goes down | ➕ up |
| **Pay** | You pay a supplier, or pay a worker (salary/advance) | Debt goes down | ➖ down |
| **Purchase** | You buy from a supplier **on credit** | You owe them | unchanged |
| **Expense** | You spend your own money (work or home) | — | ➖ down |

> ⚠️ **Common mistake:** Bought materials with **your own money** for a customer's job? That is an **Expense** (money left), not a **Cash job** (money came in). To bill the customer for it, add it to the job price when you log the **Credit job**.

### Cases that need care

- **Customer paid in advance, job not done:** log a **Receive**. The account shows "you owe them" until you finish and log a **Credit job** for the value. This is correct, not an error.
- **Walk-in customer paying on the spot:** use the **"Walk-in (daily)"** account with **Cash job**. Its balance is always zero, and credit jobs are blocked on it.
- **Paid in USD to an IQD account (or the reverse):** pick the currency and exchange rate in the entry sheet. The app converts to the account's currency, and the cash box records the actual currency received.

---

## Accounts

- **Customer:** credit job · cash job · receive. Has a printable statement and a private link (see *Customer link*).
- **Supplier:** purchase · pay.
- **Worker:** has an hourly rate. Log **hours** (amount is computed) and **payment / advance**. The worker page has a **"Wages by month"** table: how much was earned (hours) and how much you paid, per month. The Workers tab shows a summary line for the current month across all workers.
- **Workshop tools ("عدة الشغل"):** a fixed account pinned on the **Suppliers** tab for durable tools and equipment (drill, screws, a machine…), using the **"Buy equipment"** button. Its balance is always zero, the cash box goes down, and it keeps a **running total since day one with no monthly reset**.
- **Account currency** (IQD or USD) is fixed at creation and cannot change once entries exist, so balances never get corrupted.

### Correct and void

| Action | What happens |
|---|---|
| **Void** | A reversing entry is added; the original stays struck through. The balance returns to what it was |
| **Correct** | Voids the old entry with a reversing one and adds the new one in its place. Available for account entries and for expenses |

---

## Cash box

- **IQD and USD kept separately.** Calculated from entries, not double-entry bookkeeping.
- **Start the box (once):** count the real cash and enter it as an opening balance with a date. From that day on, every receive, pay, expense and cash job moves the box automatically.
  - ⚠️ Entries dated **before the start day** do not count towards the box. This is intentional, so old payments cannot break the number.
- **Exchange:** USD → IQD (or reverse) at a rate.
- **Count:** type the amount you actually counted; the difference is saved as a visible "count difference" line.
- **Savings box:** fully separate, with its own count. **Transfers** between it and the general box are not income or expense.

## Expenses

- Two categories: **Work** and **Home**, both deducted from the general cash box.
- **No category is pre-selected**: you must tap one, and **Save** stays disabled until you do.
- Shows **the current month's total per category, restarting from zero each month**. Previous months stay in a table, each with its own total. There is never a running total across months. (Data is never deleted; only the display is monthly.)

---

## Customer link

On any customer page → **"Customer link"**. A private link is generated and starts working after the next sync.

- The customer sees their own statement in Arabic, automatically up to date, no login.
- It shows only their account, and hides voided entries and their reversals.
- "Revoke and issue a new link" permanently disables the old one.
- ⚠️ Anyone holding the link can see the statement, so send it only to the customer.

## Receipts

"Work receipt" with a reference number, line items and the amount in words, with print or PDF. **Stored on the device only and not synced**; included in the export.

---

## Google Sheets sync

- Every entry is saved on the device first, instantly, with no waiting for the internet.
- About 2.5 s after the last change, it tries to upload.
- **If it fails:** it retries automatically after 30 s, 2 min, 5, 10, 15… until it succeeds.
- **When you return to the app** (bring it back from the background) it syncs automatically.
- **If a day passes without a successful sync:** the badge turns red and a warning banner appears on the Journal.
- **Background upload (Chrome/Android):** if you log an entry offline and fully close the app, the system uploads it as soon as connectivity returns. Requires the updated `sw.js`.
- Two devices: the first one to sync uploads its data and the other receives it. If you recorded on both before linking, both are merged without overwriting each other.

---

## Installation

### 1) Deploy the app on GitHub Pages

1. Create a **public** repository named `dafter`.
2. Upload these files to the repo root (not inside a folder):
   `index.html` · `sw.js` · `manifest.webmanifest` · `icon-192.png` · `icon-512.png` · `icon-maskable-512.png` · `README.md`
3. **Settings → Pages → Source:** `Deploy from a branch` → `main` / `(root)` → Save.
4. After about a minute the app is live at `https://<your-name>.github.io/dafter/`.

> The URL does not expose your data. Data lives on your device and in your own Google Sheet, not in the code.

### 2) Install on a device

- **Android (Chrome):** open the link → ⋮ → *Install app*.
- **Desktop (Chrome / Edge):** the install icon in the address bar.

### 3) Connect Google Sheets

1. Create a new Google Sheet → **Extensions → Apps Script**.
2. Delete the existing code and paste all of `apps-script/Code.gs` → Save.
3. **Deploy → New deployment → ⚙ Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy, approve the permissions, and copy the link ending in `/exec`.
4. Refresh the sheet. From the **الدفتر** menu:
   - **Setup** → set the token and the workshop name.
   - **Protect raw sheets from manual edits** (once).
5. In the app: ⚙ Settings → paste the link and the same token → **Sync now**.

### 4) First use

1. **Cash box → Start the box:** count the cash and enter IQD and USD.
2. Create your customers, suppliers and workers.
3. Log today's activity from the Journal buttons.

---

## Updating

| What changed | Steps |
|---|---|
| **The app** (most common) | Upload the new `index.html` over the old one on GitHub. That's it. The app fetches it on next launch |
| **sw.js** (rare) | Upload it over the old one. Needed once to enable background upload |
| **The script** (rare) | Paste the new `Code.gs` → **Deploy → Manage deployments → ✏ → Version: New version → Deploy** |

> **Never use "New deployment"** when updating the script: it creates a new URL you would have to re-enter on every device.
> The token and workshop name are stored in hidden script properties, so pasting a new version does not erase them.

---

## FAQ

**Why is there a USD row when I have no dollar account?**
The USD row appears when **at least one account is in USD**. Cents (like `.43`) mean an IQD amount was recorded on a USD account and divided by the exchange rate. Open Accounts and look for "USD account".

**The cash box doesn't match the cash in my pocket.**
Usually an entry recorded with the wrong type (e.g. an expense logged as *Cash job*), or dated before the start day. Fix it, and if a small gap remains, do a **count** from the Cash box tab.

**I created a customer but it's really a supplier (or vice versa). Can I change the type?**
Not yet. Customer and supplier signs are mirrored, so swapping the type alone would flip the numbers. Workaround: create a new account of the right type, void the old entries, and re-enter them (Purchase instead of Credit job). A "convert" button is planned.

**An entry shows on a different day.**
The Journal shows each entry on the day of its **date**, not the day you typed it. Use the arrows to browse days.

**"Not linked" or "Not synced".**
Open ⚙ Settings and check the URL (ends in `/exec`) and the token. "Sync now" shows the last error.

---

## Limits to know

- The `parties` and `entries` sheets are the source data. **Do not edit them by hand.** The "كشف" sheet is a read-only report rebuilt on demand.
- The token blocks random requests, but anyone with **the link + token** can read and write. Do not publish them.
- Apps Script is comfortable up to roughly 20–50k rows; beyond that sync gets slow.
- The cash box is computed from the start day. Changing it later means voiding the opening balance and starting again.

## Roadmap

- 🔐 App lock and cash-box lock (fingerprint + PIN), and a backup reminder.
- 🌐 Language switch (Arabic / English) for the interface, plus a per-customer "statement language".
- 🗓️ Year end: manual archiving and balance roll-over.

## Tests

31 automated tests (Playwright) cover the whole app on every change: accounts, cash box, expenses, two-device sync and retry. Run them with:

```bash
pip install playwright && python -m playwright install chromium
python tests/test_daftar.py
```

> Tests and the script are **not** stored in this repo. Keep them on your computer.
