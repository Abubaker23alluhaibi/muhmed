import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    userName: { type: String, default: '' },
    userPhone: { type: String, default: '' },
    userCountry: { type: String, default: '' },
    auction: { type: String, default: '' },
    city: { type: String, default: '' },
    port: { type: String, default: '' },
    country: { type: String, default: '' },
    company: { type: String, default: '' },
    finalPrice: { type: Number, default: null },
  },
  { timestamps: true }
);

// لاستخدام id في الاستجابة بدل _id
bookingSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model('Booking', bookingSchema);
