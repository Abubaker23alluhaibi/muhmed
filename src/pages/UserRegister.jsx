import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Scale, ChevronLeft, User, Phone, Globe, ArrowRight } from 'lucide-react'
import { COUNTRIES } from '../data/shippingData'

export default function UserRegister() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !country) return
    navigate('/calculator', {
      state: {
        userName: name.trim(),
        userPhone: phone.trim(),
        userCountry: COUNTRIES.find((c) => c.value === country),
      },
    })
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#2C2C2C] flex flex-col font-sans" dir="rtl">
      {/* استيراد الخطوط الفاخرة */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&family=Playfair+Display:wght@400;700&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          body { font-family: 'Noto Kufi Arabic', sans-serif; }
          
          .floating-label-group { position: relative; }
          .floating-label-group input:focus ~ label,
          .floating-label-group input:not(:placeholder-shown) ~ label {
              transform: translateY(-1.5rem) scale(0.85);
              color: #A68966;
              background-color: #F9F9F9;
              padding: 0 0.5rem;
          }
          .floating-label-group label {
              position: absolute;
              top: 1rem;
              right: 1rem;
              transition: all 0.2s ease;
              pointer-events: none;
              color: #888;
          }
        `}
      </style>

      {/* Header */}
      <header className="w-full bg-[#A68966] border-b border-white/10 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-sm md:text-lg font-playfair font-bold tracking-tight text-white leading-tight">نرحب بكم في مكتب المستشار القانوني ياسر النعيمي</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/90 mb-1 flex-shrink-0"></span>
          </Link>
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/90 hidden md:block">
            القانون التجاري الدولي للسيارات
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 bg-gradient-to-b from-white to-[#F9F9F9]">
        <div className="max-w-xl w-full">
          
          {/* Progress Indicator */}
          <div className="flex justify-center mb-10 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#A68966] text-white flex items-center justify-center font-bold mb-2 shadow-lg shadow-[#A68966]/20">١</div>
              <span className="text-xs font-medium text-[#A68966]">البيانات الشخصية</span>
            </div>
            <div className="w-12 h-px bg-[#A68966]/20 mt-5"></div>
            <div className="flex flex-col items-center opacity-30">
              <div className="w-10 h-10 rounded-full border border-[#A68966]/20 text-[#2C2C2C] flex items-center justify-center font-bold mb-2">٢</div>
              <span className="text-xs font-medium">تفاصيل المركبة</span>
            </div>
            <div className="w-12 h-px bg-[#A68966]/20 mt-5"></div>
            <div className="flex flex-col items-center opacity-30">
              <div className="w-10 h-10 rounded-full border border-[#A68966]/20 text-[#2C2C2C] flex items-center justify-center font-bold mb-2">٣</div>
              <span className="text-xs font-medium">التأكيد</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#A68966]/5 p-10 lg:p-14 transition-all">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-playfair font-bold text-[#2C2C2C] mb-4">إدخال بيانات العميل</h1>
              <p className="text-[#2C2C2C]/50 font-light text-sm leading-relaxed">
                يرجى تزويدنا بالمعلومات الأساسية لبدء عملية التقييم القانوني واللوجستي لشحنتكم الدولية.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* حقل الاسم الكامل */}
              <div className="floating-label-group">
                <input
                  type="text"
                  id="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-4 bg-[#F9F9F9] border-0 border-b-2 border-[#A68966]/20 focus:border-[#A68966] focus:ring-0 transition-colors text-lg outline-none"
                  placeholder=" "
                  required
                />
                <label htmlFor="fullname" className="text-sm">الاسم الكامل</label>
              </div>

              {/* حقل رقم الهاتف */}
              <div className="floating-label-group">
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-4 bg-[#F9F9F9] border-0 border-b-2 border-[#A68966]/20 focus:border-[#A68966] focus:ring-0 transition-colors text-lg text-left outline-none"
                  dir="ltr"
                  placeholder=" "
                  required
                />
                <label htmlFor="phone" className="text-sm">رقم الهاتف</label>
              </div>

              {/* حقل الدولة */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#A68966] mb-1 text-right">دولة الشحن</label>
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-4 bg-[#F9F9F9] border-0 border-b-2 border-[#A68966]/20 focus:border-[#A68966] focus:ring-0 transition-colors text-lg cursor-pointer outline-none appearance-none text-right"
                    required
                  >
                    <option value="" disabled>اختر الدولة...</option>
                    {COUNTRIES.map((c) => (
                      <option key={c.value} value={c.value}>
                         {c.label} {c.flag}
                      </option>
                    ))}
                  </select>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A68966]">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={!name.trim() || !phone.trim() || !country}
                  className="w-full bg-[#A68966] text-white py-5 rounded-lg font-bold text-lg hover:bg-[#8e7456] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl shadow-[#A68966]/20 flex items-center justify-center gap-3 group"
                >
                  الخطوة التالية
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-10 space-y-4">
            <p className="text-xs text-[#2C2C2C]/40 font-medium uppercase tracking-widest">جميع البيانات مشفرة ومحمية بموجب قوانين الخصوصية الدولية</p>
            <div className="flex justify-center gap-6 opacity-30 grayscale text-sm font-bold">
              <span>ISO 27001</span>
              <span>GDPR COMPLIANT</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-[#A68966]/5 text-center">
        <p className="text-[10px] text-[#2C2C2C]/40 font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} مكاتب ياسر النعيمي للمحاماة. جميع الحقوق محفوظة.
        </p>
      </footer>
    </div>
  )
}