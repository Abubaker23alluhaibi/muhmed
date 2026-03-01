import { useState, useMemo, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  ChevronLeft, Navigation2, ArrowRight, CheckCircle2, DollarSign
} from 'lucide-react'
import {
  COUNTRIES,
  PORT_STATES,
  getCitiesByAuction,
  getShippingCompaniesByCountryAndPort,
  calculateTotalShipping,
  FINAL_ADDITION,
  WHATSAPP_NUMBER,
  SHIPPING_DATA
} from '../data/shippingData'

const AUCTIONS = [
  { value: 'COPART', label: 'Copart' },
  { value: 'IAAI', label: 'IAAI' }
]

// إن تركت فارغاً على Vercel يعمل الموقع بدون باك اند (يفتح واتساب فقط)
const API_URL = (import.meta.env.VITE_API_URL || '').trim() || ''

export default function CarShippingCalculator() {
  const location = useLocation()
  const userCountryFromRoute = location.state?.userCountry
  const defaultCountry = userCountryFromRoute?.value
    ? COUNTRIES.find((c) => c.value === userCountryFromRoute.value) || COUNTRIES[0]
    : COUNTRIES[0]

  const [auction, setAuction] = useState('')
  const [city, setCity] = useState('')
  const [port, setPort] = useState('')
  const [country, setCountry] = useState(defaultCountry?.value || COUNTRIES[0].value)
  const [company, setCompany] = useState('')
  const [saving, setSaving] = useState(false)

  const cities = useMemo(() => getCitiesByAuction(auction), [auction])
  const companies = useMemo(
    () => getShippingCompaniesByCountryAndPort(country, port),
    [country, port]
  )

  const locations = useMemo(() => {
    if (!auction) return []
    return auction === 'COPART'
      ? SHIPPING_DATA.copart_locations
      : SHIPPING_DATA.iaai_locations
  }, [auction])

  const selectedLocation = useMemo(
    () => locations.find((loc) => loc.city === city),
    [locations, city]
  )

  const availablePorts = useMemo(() => {
    if (!selectedLocation || !Object.keys(selectedLocation.prices).length) return PORT_STATES
    return PORT_STATES.filter((p) => selectedLocation.prices[p.value] !== undefined)
  }, [selectedLocation])

  // عند وجود ميناء واحد فقط للمدينة المختارة، تحديده تلقائياً حتى يظهر السعر في المربع الأسود
  useEffect(() => {
    if (availablePorts.length === 1 && !port) {
      setPort(availablePorts[0].value)
    }
  }, [availablePorts, port])

  // إلغاء اختيار الشركة إذا لم تعد متاحة للميناء الحالي (مثلاً Yang Ming لا تملك سعراً لـ NY)
  useEffect(() => {
    if (company && companies.length > 0 && !companies.some((c) => c.value === company)) {
      setCompany('')
    }
  }, [company, companies])

  const allSelected = Boolean(auction && city && port && country && company)

  const result = useMemo(() => {
    if (!allSelected) return null
    return calculateTotalShipping(city, auction, country, company, port)
  }, [allSelected, city, auction, country, company, port])

  const finalPrice = result?.success ? result.total + FINAL_ADDITION : null
  const countryLabel = COUNTRIES.find((c) => c.value === country)?.label || country

  const companyLabel = companies.find((c) => c.value === company)?.label || company
  const userName = location.state?.userName ?? ''
  const userPhone = location.state?.userPhone ?? ''
  const userCountryLabel = location.state?.userCountry?.label ?? countryLabel

  const whatsappMessage = [
    `الاسم: ${userName || '—'}`,
    `الرقم: ${userPhone || '—'}`,
    `الدولة: ${userCountryLabel}`,
    `المزاد: ${AUCTIONS.find((a) => a.value === auction)?.label || auction}`,
    `المدينة: ${city || '—'}`,
    `الميناء: ${PORT_STATES.find((p) => p.value === port)?.label || port}`,
    `شركة الشحن: ${companyLabel || '—'}`,
    `السعر النهائي: ${finalPrice != null ? `${finalPrice.toLocaleString('en-US')} دولار` : '—'}`
  ].join('\n')

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || WHATSAPP_NUMBER || '9647501001318'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const handleAuctionChange = (value) => {
    setAuction(value)
    setCity('')
    setPort('')
    setCompany('')
  }

  const handleCityChange = (value) => {
    setCity(value)
    setPort('')
  }

  const handleCountryChange = (value) => {
    setCountry(value)
    setCompany('')
  }

  const handleConfirmBooking = async () => {
    setSaving(true)
    try {
      if (API_URL) {
        await fetch(`${API_URL}/api/booking`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userName,
            userPhone,
            userCountry: userCountryLabel,
            auction,
            city,
            port,
            country,
            company,
            finalPrice: finalPrice != null ? finalPrice : null
          })
        })
      }
    } catch (_) {
      // الاستمرار بفتح واتساب حتى لو فشل الحفظ
    } finally {
      setSaving(false)
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#2C2C2C] flex flex-col font-sans" dir="rtl">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&family=Playfair+Display:wght@400;700&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          body { font-family: 'Noto Kufi Arabic', sans-serif; }
        `}
      </style>

      <header className="sticky top-0 z-50 w-full bg-[#A68966] border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-sm md:text-lg font-playfair font-bold tracking-tight text-white leading-tight">نرحب بكم في مكتب المستشار القانوني ياسر النعيمي</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/90 flex-shrink-0"></span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-white/95 bg-white/15 px-3 py-1.5 rounded-full uppercase tracking-wider">
              الوجهة: {countryLabel}
            </span>
          </div>
        </div>
      </header>

      <main className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12 text-right">
            <h2 className="text-[#A68966] font-bold tracking-widest uppercase text-xs mb-3">الخدمات اللوجستية الدولية</h2>
            <h1 className="text-4xl font-playfair font-bold text-[#2C2C2C] mb-4">حاسبة تكاليف الشحن</h1>
            <div className="flex items-center gap-4 mt-8 justify-start">
              <div className="flex items-center gap-2 opacity-50">
                <span className="w-8 h-8 rounded-full bg-[#A68966] text-white flex items-center justify-center text-sm font-bold">✓</span>
                <span className="text-sm font-medium">البيانات الشخصية</span>
              </div>
              <div className="w-12 h-px bg-[#A68966]/30"></div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#2C2C2C] text-white flex items-center justify-center text-sm font-bold">٢</span>
                <span className="text-sm font-bold">تفاصيل الشحن</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-[#A68966]/10 shadow-sm space-y-8">
                <h3 className="text-xl font-bold flex items-center gap-3 border-b border-gray-100 pb-4">
                  <Navigation2 className="w-6 h-6 text-[#A68966]" />
                  تحديد مسار الشحن والناقل
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-[#2C2C2C]/80">اختيار المزاد</label>
                    <select
                      value={auction}
                      onChange={(e) => handleAuctionChange(e.target.value)}
                      className="w-full bg-[#F9F9F9] border-0 ring-1 ring-gray-200 rounded-lg py-4 px-4 focus:ring-2 focus:ring-[#A68966] transition-all outline-none"
                    >
                      <option value="">اختر المزاد (Copart أو IAAI)</option>
                      {AUCTIONS.map((a) => (
                        <option key={a.value} value={a.value}>{a.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-[#2C2C2C]/80">مدينة موقع المزاد</label>
                    <select
                      value={city}
                      onChange={(e) => handleCityChange(e.target.value)}
                      disabled={!auction}
                      className="w-full bg-[#F9F9F9] border-0 ring-1 ring-gray-200 rounded-lg py-4 px-4 focus:ring-2 focus:ring-[#A68966] transition-all outline-none disabled:opacity-60"
                    >
                      <option value="">اختر المدينة</option>
                      {cities.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-[#2C2C2C]/80">الميناء (الولاية)</label>
                    <select
                      value={port}
                      onChange={(e) => setPort(e.target.value)}
                      disabled={!city}
                      className="w-full bg-[#F9F9F9] border-0 ring-1 ring-gray-200 rounded-lg py-4 px-4 focus:ring-2 focus:ring-[#A68966] transition-all outline-none disabled:opacity-60"
                    >
                      <option value="">اختر الميناء</option>
                      {availablePorts.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-[#2C2C2C]/80">الدولة المتوجه إليها</label>
                    <select
                      value={country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="w-full bg-[#F9F9F9] border-0 ring-1 ring-gray-200 rounded-lg py-4 px-4 focus:ring-2 focus:ring-[#A68966] transition-all outline-none"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <label className="block text-sm font-bold text-[#2C2C2C]/80">شركة الشحن البحري</label>
                    <select
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      disabled={!country}
                      className="w-full bg-[#F9F9F9] border-0 ring-1 ring-gray-200 rounded-lg py-4 px-4 focus:ring-2 focus:ring-[#A68966] transition-all outline-none disabled:opacity-60"
                    >
                      <option value="">اختر الخط الملاحي</option>
                      {companies.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6">
                <Link to="/register" className="flex items-center gap-2 text-[#2C2C2C]/60 font-bold hover:text-[#2C2C2C] transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  العودة للبيانات الشخصية
                </Link>
                <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={saving}
                className="bg-[#A68966] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#8e7456] transition-all shadow-lg flex items-center gap-3 inline-flex justify-center disabled:opacity-70"
              >
                {saving ? 'جاري الحفظ...' : 'تواصل معنا من أجل تأكيد حجزك'}
                <ChevronLeft className="w-5 h-5" />
              </button>
              </div>
            </div>

            <aside className="sticky top-28">
              <div className="bg-[#2C2C2C] text-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-white/10 bg-gradient-to-br from-[#2C2C2C] to-[#3a3a3a]">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#A68966] mb-4">ملخص التكلفة</h4>
                  {!allSelected ? (
                    <div className="py-6 text-center">
                      <p className="text-white/60 text-sm leading-relaxed">
                        حدّد المزاد، المدينة، الميناء، الدولة، وشركة الشحن لمعرفة السعر النهائي.
                      </p>
                      <p className="text-white/40 text-xs mt-3">لا نعرض أي أسعار أثناء الاختيار</p>
                    </div>
                  ) : result?.success && finalPrice != null ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#A68966] text-sm font-bold">
                        <CheckCircle2 className="w-5 h-5" />
                        جاهز — السعر النهائي
                      </div>
                      <div className="flex items-baseline gap-2">
                        <DollarSign className="w-8 h-8 text-[#A68966] opacity-90" />
                        <span className="text-5xl font-playfair font-bold text-white tabular-nums">
                          {finalPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/50">
                        يشمل التخليص الجمركي ورسوم إدارية (100 دولار).
                      </p>
                    </div>
                  ) : (
                    <div className="py-4">
                      <p className="text-amber-300/90 text-sm">{result?.error || 'تحقق من الخيارات المختارة'}</p>
                    </div>
                  )}
                </div>

                <div className="p-6 border-t border-white/10">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-[10px] leading-relaxed text-white/50">
                      هذا التقدير لسيارة واحدة. يشمل النقل من موقع المزاد إلى الميناء، الشحن البحري، والتخليص الجمركي.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-[10px] text-[#2C2C2C]/40 font-bold uppercase tracking-widest leading-relaxed">
                مكتب النعيمي يضمن لك <br /> سلامة أصولك من أمريكا إلى منزلك.
              </p>
            </aside>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-[#A68966]/10 text-center">
        <p className="text-[10px] text-[#2C2C2C]/40 font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} مكتب ياسر النعيمي للمحاماة. جميع الحقوق محفوظة.
        </p>
      </footer>
    </div>
  )
}
