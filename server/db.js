import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

/** الاتصال بقاعدة MongoDB (اختياري — إن وُجد MONGODB_URI) */
export async function connectDB() {
  if (!MONGODB_URI) return false;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB: متصل');
    return true;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    return false;
  }
}

export function useMongo() {
  return Boolean(MONGODB_URI);
}
