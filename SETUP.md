# تجهيز الواتساب والـ Backend

## 1. ملف البيئة (.env)

انسخ ملف المثال ثم عدّل القيم:

```bash
cp .env.example .env
```

في `.env`:

- **VITE_WHATSAPP_NUMBER**: رقم واتساب الأعمال (بدون + أو 0 في البداية)، مثال: `9647811304800`
- **VITE_API_URL**: عنوان الـ Backend (في التطوير: `http://localhost:3001`، عند النشر ضع رابط السيرفر)
- **PORT**: منفذ خادم الـ Backend (افتراضي: `3001`)

## 2. تشغيل المشروع

**طريقة واحدة (الواجهة + الـ Backend معاً):**

```bash
npm install
npm run start
```

- الواجهة: http://localhost:5173  
- الـ Backend: http://localhost:3001  

**أو تشغيل كل جزء في طرفية:**

- طرفية 1: `npm run dev` (الواجهة)
- طرفية 2: `npm run server` (الـ Backend)

## 3. واتساب

- ضع رقمك في `.env` في `VITE_WHATSAPP_NUMBER` (أو في `src/data/shippingData.js` في `WHATSAPP_NUMBER`).
- عند الضغط على «تواصل معنا من أجل تأكيد حجزك» يتم حفظ الحجز في الـ Backend ثم فتح واتساب مع رسالة جاهزة.

## 4. قاعدة البيانات (MongoDB) — اختياري

يمكنك استخدام **MongoDB** لحفظ الحجوزات ورسائل التواصل بدل ملفات JSON.

1. أنشئ قاعدة مجانية على [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): سجّل دخول → Create Cluster → اختر المنطقة → Create.
2. أنشئ مستخدماً للقاعدة: Database Access → Add New User (اسم وكلمة مرور).
3. اسمح بالاتصال من أي عنوان IP: Network Access → Add IP Address → Allow Access from Anywhere (أو ضع عنوان سيرفرك).
4. احصل على رابط الاتصال: Database → Connect → Connect your application → انسخ الرابط (مثل `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/`).
5. في `.env` أضف سطراً (واستبدل الرابط برابطك):
   ```
   MONGODB_URI=mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/lawdb?retryWrites=true&w=majority
   ```
6. أعد تشغيل الخادم. إن ظهر في الطرفية `MongoDB: متصل` فالقاعدة تعمل. الحجوزات والـ contacts تُحفظ في مجموعات `bookings` و `contacts`.

**بدون MongoDB:** لا تضف `MONGODB_URI`؛ الخادم سيستخدم تلقائياً ملفات `server/data/bookings.json` و `contacts.json`.

---

## 5. الـ Backend (واجهات الـ API)

الخادم يعمل على المنفذ `PORT` (افتراضي 3001). البيانات تُحفظ في MongoDB (إن وُجدت) أو في `server/data/`.

### التحقق من العمل
- `GET /api/health` — يرجع `{ ok: true }` مع الوقت.

### الحجوزات (Bookings)
- **قائمة الحجوزات:** `GET /api/bookings?limit=50&offset=0` — يرجع الحجوزات من الأحدث مع ترقيم الصفحات.
- **حجز واحد:** `GET /api/booking/:id` — يرجع حجزاً بالمعرّف.
- **إنشاء حجز:** `POST /api/booking` — Body (JSON):
  - `userName`, `userPhone`, `userCountry` (نص)
  - `auction`, `city`, `port`, `country`, `company` (نص)
  - `finalPrice` (رقم أو null)

الاستجابة الناجحة: `201` مع `{ success: true, id, data }`. عند خطأ في البيانات: `400` مع `{ success: false, errors: [] }`.

### رسائل التواصل (Contact)
- **قائمة الرسائل:** `GET /api/contacts?limit=50&offset=0` — لمراجعة رسائل "اتصل بنا".
- **إرسال رسالة:** `POST /api/contact` — Body (JSON):
  - `name` (مطلوب)، `phone` (مطلوب)، `email` (اختياري)، `message` (اختياري)

الاستجابة الناجحة: `201` مع `{ success: true, id }`.

### الملفات
- الحجوزات: `server/data/bookings.json`
- رسائل التواصل: `server/data/contacts.json`

## 6. النشر (Production) — خطوات رفع الفرونت اند والباك اند

يمكنك رفع المشروع بطريقتين: **خادم واحد** (أسهل) أو **فرونت اند وباك اند منفصلان** (مثلاً Vercel + Render).

---

### الطريقة الأولى: خادم واحد (الواجهة + الباك اند معاً)

مثال: سيرفرك أو استضافة Node (مثل Render، Railway، أو VPS).

| الخطوة | ماذا تفعل |
|--------|-----------|
| 1 | انسخ المشروع إلى السيرفر (git clone أو رفع الملفات). |
| 2 | على السيرفر أنشئ ملف `.env` وضَع فيه:<br>• `PORT=3001` (أو المنفذ الذي توفره المنصة)<br>• `NODE_ENV=production`<br>• `VITE_API_URL=` (اتركه فارغاً لأن الواجهة والـ API نفس النطاق)<br>• `VITE_WHATSAPP_NUMBER=964xxxxxxxx` |
| 3 | على السيرفر نفّذ: `npm install` |
| 4 | ابنِ الواجهة: `npm run build` |
| 5 | شغّل الخادم: `npm run start:prod` أو `node server/index.js`<br>(على المنصات حدّد **Start Command**: `npm run start:prod` أو `node server/index.js`) |
| 6 | الخادم يقدّم الموقع من نفس الرابط ويخدم الـ API على `/api/*`. |

**ملاحظة:** في منصات مثل Render/Railway غالباً تُحدد `PORT` تلقائياً؛ إن طُلِب منك فضع في `.env`: `PORT=3001` أو استخدم المتغير الذي تعطيك إياه المنصة.

---

### الطريقة الثانية: فرونت اند وباك اند منفصلان

مثال: الفرونت اند على **Vercel** أو **Netlify**، والباك اند على **Render** أو **Railway**.

#### أ) رفع الباك اند أولاً

| الخطوة | ماذا تفعل |
|--------|-----------|
| 1 | أنشئ مشروعاً جديداً على Render أو Railway واربطه بمستودع المشروع (أو ارفع مجلد المشروع). |
| 2 | حدّد **Root Directory** إن لزم: مجلد المشروع نفسه (لا حاجة لتحديد `server` فقط). |
| 3 | متغيرات البيئة (Environment Variables) على المنصة:<br>• `NODE_ENV=production`<br>• `PORT` — غالباً تُعطى تلقائياً (مثلاً Render يستخدم `PORT` تلقائياً)<br>• `FRONTEND_URL=https://رابط-موقع-الواجهة لاحقاً` (يمكن تحديثه بعد رفع الفرونت اند) |
| 4 | أمر البناء (Build Command): `npm install` (أو اتركه افتراضي). |
| 5 | أمر التشغيل (Start Command): `npm run start:prod` أو `node server/index.js`. |
| 6 | انشر المشروع واحفظ **رابط الـ API** (مثل `https://your-app.onrender.com`). |

#### ب) رفع الفرونت اند بعد ذلك

| الخطوة | ماذا تفعل |
|--------|-----------|
| 1 | أنشئ مشروعاً جديداً على Vercel أو Netlify واربطه بنفس المستودع. |
| 2 | متغيرات البيئة (يجب أن تكون موجودة **قبل** البناء):<br>• `VITE_API_URL=https://رابط-الباك-اند-الذي-حفظته` (بدون / في النهاية)<br>• `VITE_WHATSAPP_NUMBER=964xxxxxxxx` |
| 3 | أمر البناء (Build Command): `npm run build`. |
| 4 | مجلد الناتج (Output/Publish directory): `dist`. |
| 5 | انشر المشروع واحصل على رابط الواجهة. |
| 6 | ارجع إلى إعدادات الباك اند وحدّث `FRONTEND_URL` برابط موقع الفرونت اند (مثل `https://your-site.vercel.app`) حتى يعمل CORS. |

---

### ملخص المتغيرات

| المتغير | أين يُستخدم | متى تحتاجه |
|--------|-------------|------------|
| `VITE_API_URL` | الفرونت اند (يُضمَّن عند البناء) | عند رفع الفرونت اند؛ ضعه برابط الباك اند. خادم واحد: اتركه فارغاً. |
| `VITE_WHATSAPP_NUMBER` | الفرونت اند | دائماً إن أردت زر واتساب يعمل برقمك. |
| `PORT` | الباك اند | غالباً توفره المنصة؛ إن طُلِب فضع 3001 أو القيمة المعطاة. |
| `FRONTEND_URL` | الباك اند (CORS) | عند رفع الباك اند منفصلاً؛ ضعه برابط موقع الفرونت اند. |
| `NODE_ENV` | الباك اند | ضعه `production` على السيرفر. |
