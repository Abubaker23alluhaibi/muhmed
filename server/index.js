import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { connectDB } from './db.js';
import Booking from './models/Booking.js';
import Contact from './models/Contact.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_DIR = path.join(__dirname, 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

/** true عند استخدام MongoDB بدل ملفات JSON */
let useMongo = false;

// ——— CORS: السماح للواجهة والاستضافة المستقبلية ———
const corsOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  process.env.FRONTEND_URL
].filter(Boolean);
app.use(cors({ origin: corsOrigins }));
app.use(express.json());

// ——— مساعدات الملفات ———
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readJsonFile(filePath, defaultValue = []) {
  ensureDataDir();
  if (!fs.existsSync(filePath)) return defaultValue;
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return defaultValue;
  }
}

function writeJsonFile(filePath, data) {
  ensureDataDir();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// ——— التحقق من بيانات الحجز ———
function validateBooking(body) {
  const errors = [];
  if (body.userName != null && typeof body.userName !== 'string') errors.push('userName يجب أن يكون نصاً');
  if (body.userPhone != null && typeof body.userPhone !== 'string') errors.push('userPhone يجب أن يكون نصاً');
  if (body.userCountry != null && typeof body.userCountry !== 'string') errors.push('userCountry يجب أن يكون نصاً');
  if (body.auction != null && typeof body.auction !== 'string') errors.push('auction يجب أن يكون نصاً');
  if (body.city != null && typeof body.city !== 'string') errors.push('city يجب أن يكون نصاً');
  if (body.port != null && typeof body.port !== 'string') errors.push('port يجب أن يكون نصاً');
  if (body.country != null && typeof body.country !== 'string') errors.push('country يجب أن يكون نصاً');
  if (body.company != null && typeof body.company !== 'string') errors.push('company يجب أن يكون نصاً');
  if (body.finalPrice != null && typeof body.finalPrice !== 'number') errors.push('finalPrice يجب أن يكون رقماً');
  return errors;
}

// ——— التحقق من بيانات التواصل ———
function validateContact(body) {
  const errors = [];
  if (!body.name || typeof body.name !== 'string' || !body.name.trim()) errors.push('الاسم مطلوب');
  if (!body.phone || typeof body.phone !== 'string' || !body.phone.trim()) errors.push('رقم الهاتف مطلوب');
  if (body.email != null && typeof body.email !== 'string') errors.push('البريد الإلكتروني يجب أن يكون نصاً');
  if (body.message != null && typeof body.message !== 'string') errors.push('الرسالة يجب أن تكون نصاً');
  return errors;
}

// ——— الصحة ———
app.get('/api/health', (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

// ——— قائمة الحجوزات (للمدير/الدعم) ———
app.get('/api/bookings', async (req, res, next) => {
  try {
    const limit = Math.min(parseInt(req.query.limit, 10) || 100, 500);
    const offset = parseInt(req.query.offset, 10) || 0;
    if (useMongo) {
      const [total, page] = await Promise.all([
        Booking.countDocuments(),
        Booking.find().sort({ createdAt: -1 }).skip(offset).limit(limit).then((docs) => docs.map((d) => d.toJSON()))
      ]);
      return res.json({ success: true, total, limit, offset, data: page });
    }
    const bookings = readJsonFile(BOOKINGS_FILE, []);
    const sorted = [...bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const page = sorted.slice(offset, offset + limit);
    res.json({ success: true, total: sorted.length, limit, offset, data: page });
  } catch (err) {
    next(err);
  }
});

// ——— حجز واحد ———
app.get('/api/booking/:id', async (req, res, next) => {
  try {
    if (useMongo) {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({ success: false, error: 'الحجز غير موجود' });
      }
      const doc = await Booking.findById(req.params.id);
      if (!doc) return res.status(404).json({ success: false, error: 'الحجز غير موجود' });
      return res.json({ success: true, data: doc.toJSON() });
    }
    const bookings = readJsonFile(BOOKINGS_FILE, []);
    const booking = bookings.find((b) => b.id === req.params.id);
    if (!booking) return res.status(404).json({ success: false, error: 'الحجز غير موجود' });
    res.json({ success: true, data: booking });
  } catch (err) {
    next(err);
  }
});

// ——— إنشاء حجز ———
app.post('/api/booking', async (req, res, next) => {
  try {
    const validationErrors = validateBooking(req.body);
    if (validationErrors.length) {
      return res.status(400).json({ success: false, errors: validationErrors });
    }

    const {
      userName,
      userPhone,
      userCountry,
      auction,
      city,
      port,
      country,
      company,
      finalPrice
    } = req.body;

    if (useMongo) {
      const doc = await Booking.create({
        userName: userName ?? '',
        userPhone: userPhone ?? '',
        userCountry: userCountry ?? '',
        auction: auction ?? '',
        city: city ?? '',
        port: port ?? '',
        country: country ?? '',
        company: company ?? '',
        finalPrice: finalPrice != null ? Number(finalPrice) : null
      });
      const data = doc.toJSON();
      return res.status(201).json({ success: true, id: data.id, data });
    }

    const booking = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      userName: userName ?? '',
      userPhone: userPhone ?? '',
      userCountry: userCountry ?? '',
      auction: auction ?? '',
      city: city ?? '',
      port: port ?? '',
      country: country ?? '',
      company: company ?? '',
      finalPrice: finalPrice != null ? Number(finalPrice) : null,
      createdAt: new Date().toISOString()
    };
    const bookings = readJsonFile(BOOKINGS_FILE, []);
    bookings.push(booking);
    writeJsonFile(BOOKINGS_FILE, bookings);
    res.status(201).json({ success: true, id: booking.id, data: booking });
  } catch (err) {
    next(err);
  }
});

// ——— قائمة رسائل التواصل ———
app.get('/api/contacts', async (req, res, next) => {
  try {
    const limit = Math.min(parseInt(req.query.limit, 10) || 100, 500);
    const offset = parseInt(req.query.offset, 10) || 0;
    if (useMongo) {
      const [total, page] = await Promise.all([
        Contact.countDocuments(),
        Contact.find().sort({ createdAt: -1 }).skip(offset).limit(limit).then((docs) => docs.map((d) => d.toJSON()))
      ]);
      return res.json({ success: true, total, limit, offset, data: page });
    }
    const contacts = readJsonFile(CONTACTS_FILE, []);
    const sorted = [...contacts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const page = sorted.slice(offset, offset + limit);
    res.json({ success: true, total: sorted.length, limit, offset, data: page });
  } catch (err) {
    next(err);
  }
});

// ——— إرسال رسالة تواصل ———
app.post('/api/contact', async (req, res, next) => {
  try {
    const validationErrors = validateContact(req.body);
    if (validationErrors.length) {
      return res.status(400).json({ success: false, errors: validationErrors });
    }

    const { name, phone, email, message } = req.body;
    if (useMongo) {
      const doc = await Contact.create({
        name: String(name).trim(),
        phone: String(phone).trim(),
        email: email != null ? String(email).trim() : '',
        message: message != null ? String(message).trim() : ''
      });
      const data = doc.toJSON();
      return res.status(201).json({ success: true, id: data.id });
    }

    const contact = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email != null ? String(email).trim() : '',
      message: message != null ? String(message).trim() : '',
      createdAt: new Date().toISOString()
    };
    const contacts = readJsonFile(CONTACTS_FILE, []);
    contacts.push(contact);
    writeJsonFile(CONTACTS_FILE, contacts);
    res.status(201).json({ success: true, id: contact.id });
  } catch (err) {
    next(err);
  }
});

// ——— في الإنتاج: تقديم الواجهة المُبناة (اختياري) ———
const DIST_DIR = path.join(__dirname, '..', 'dist');
if (process.env.NODE_ENV === 'production' && fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(DIST_DIR, 'index.html'));
    } else {
      res.status(404).json({ success: false, error: 'المسار غير موجود' });
    }
  });
} else {
  app.use((req, res) => {
    res.status(404).json({ success: false, error: 'المسار غير موجود' });
  });
}

// ——— معالج الأخطاء ———
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'خطأ في الخادم' : err.message
  });
});

async function start() {
  if (process.env.MONGODB_URI) {
    useMongo = await connectDB();
    if (!useMongo) console.warn('MongoDB غير متصل — استخدام ملفات JSON');
  }
  app.listen(PORT, () => {
    console.log(`Backend: http://localhost:${PORT}`);
    console.log(useMongo ? '  DB: MongoDB' : '  DB: JSON files');
    console.log(`  Health: GET /api/health`);
    console.log(`  Bookings: GET/POST /api/bookings, GET /api/booking/:id`);
    console.log(`  Contact: GET/POST /api/contacts, POST /api/contact`);
  });
}

start();
