import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MapPin, Briefcase, ChevronLeft, Gavel, Phone, Mail, MapPinned } from 'lucide-react';

const PHONE_RAW = '07811304800';
const PHONE_INTL = '9647811304800';
const WA_LINK = `https://wa.me/${PHONE_INTL}`;
const VIBER_LINK = `viber://chat?number=%2B${PHONE_INTL}`;
const TG_LINK = `https://t.me/${PHONE_INTL}`;
const FB_LINK = 'https://www.facebook.com/';

function IconWhatsApp({ className = 'w-5 h-5' }) {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-opacity" aria-label="واتساب">
      <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}
function IconViber({ className = 'w-5 h-5' }) {
  return (
    <a href={VIBER_LINK} target="_blank" rel="noopener noreferrer" className="text-[#7360F2] hover:opacity-80 transition-opacity" aria-label="فايبر">
      <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 0C9.473.028 5.333.344 2.986 2.414 1.243 4.028.37 6.233.058 8.646c-.332 2.587.096 5.163 1.262 7.37L0 24l8.102-2.14c2.107 1.403 4.625 2.14 7.207 2.14.276 0 .55-.012.824-.034 2.578-.156 5.043-.984 7.207-2.414 2.5-1.64 4.277-4.077 5.043-6.786.828-2.86.553-5.94-.766-8.586C19.806 1.816 15.784.028 11.4 0zm.194 2.24c3.64-.076 7.002.553 9.63 2.72 2.24 1.79 3.5 4.14 3.763 6.787.224 2.24-.168 4.42-1.12 6.24-.84 1.64-2.24 3.08-3.96 4.04-.276.14-.414.11-.552-.276l-.69-1.79c-.07-.18-.14-.25-.332-.36-1.12-.55-2.02-1.27-2.7-2.08-.14-.18-.194-.32-.07-.58.41-.87 1.23-2.45 1.68-3.33.09-.18.045-.32-.14-.41-.18-.09-.45-.22-.67-.32-.18-.09-.27-.18-.18-.36.09-.18.45-1.1.61-1.51.14-.32.27-.27.45-.18.18.09 1.12.5 1.31.59.18.09.32.14.36.22.05.09.05.5-.09.77-.5 1.18-1.43 2.46-2.46 3.5-.18.18-.36.32-.55.46-.14.09-.27.18-.11.36.18.22.77.95 1.65 1.53 1.12.74 2.07 1.16 2.23 1.29.27.22.47.48.64.74.09.14.04.27-.07.4l-.81 1.02c-.09.11-.27.27-.5.2-1.68-.54-4.02-1.68-5.58-4.06-.47-.72-.82-1.5-1.06-2.32-.09-.27.05-.41.22-.55 2.28-1.87 3.58-4.32 3.8-6.92.14-1.68-.2-3.3-1-4.78-.86-1.58-2.1-2.88-3.6-3.8-1.68-1.02-3.6-1.58-5.66-1.64-.41-.01-.82-.01-1.22.01z"/></svg>
    </a>
  );
}
function IconTelegram({ className = 'w-5 h-5' }) {
  return (
    <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="text-[#0088CC] hover:opacity-80 transition-opacity" aria-label="تليجرام">
      <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
    </a>
  );
}
function IconFacebook({ className = 'w-5 h-5' }) {
  return (
    <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80 transition-opacity" aria-label="فيسبوك">
      <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </a>
  );
}

export default function LawyerProfile() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#2C2C2C] font-sans transition-colors duration-300" dir="rtl">
      {/* استيراد الخطوط من جوجل */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&family=Noto+Serif+Arabic:wght@100..900&display=swap');
          .font-serif-ar { font-family: 'Noto Serif Arabic', serif; }
          body { font-family: 'Noto Kufi Arabic', sans-serif; }
        `}
      </style>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#A68966] border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base md:text-xl font-serif-ar font-bold tracking-tight text-white leading-tight">نرحب بكم في مكتب المستشار القانوني ياسر النعيمي</span>
            <span className="w-2 h-2 rounded-full bg-white/90 mt-1 flex-shrink-0"></span>
          </div>
          <nav className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide text-white/90">
            <a className="text-white hover:text-white hover:opacity-90 transition-opacity" href="#">عن المكتب</a>
            <a className="text-white hover:text-white hover:opacity-90 transition-opacity" href="#">مجالات التخصص</a>
            <a className="text-white hover:text-white hover:opacity-90 transition-opacity" href="#contact">اتصل بنا</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section - قسم المحامي الرئيسي */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-20">
            
            {/* صورة المحامي */}
            <div className="relative order-2 md:order-1">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#2C2C2C]/5">
                <img
                  src="/the%20p.png"
                  alt="المستشار القانوني ياسر النعيمي"
                  className="w-full h-full object-cover object-left-top scale-110 origin-top-left"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center bg-[#2C2C2C]/5">
                  <Scale className="w-32 h-32 text-[#A68966] opacity-20" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-l-2 border-b-2 border-[#A68966]/30 rounded-xl -z-0"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#A68966]/5 rounded-full blur-3xl -z-0"></div>
            </div>

            {/* تفاصيل المحامي */}
            <div className="space-y-10 order-1 md:order-2 text-right">
              <div className="space-y-6">
                <h2 className="text-[#A68966] font-bold tracking-[0.2em] text-sm uppercase">محامي قضايا دولة وقضايا تجارية</h2>
                <h1 className="text-5xl md:text-7xl font-serif-ar text-[#2C2C2C] leading-[1.2]">
                  ياسر النعيمي <br/>
                  <span className="text-3xl md:text-4xl opacity-80 font-normal tracking-normal">المستشار القانوني الرئيسي</span>
                </h1>
                <p className="max-w-lg text-xl text-[#2C2C2C]/70 font-light leading-relaxed">
                  تمثيل قانوني موثوق وسجل حافل بالتميز. متخصص في تمثيل الدولة في الدعاوى والمنازعات الحكومية، وفي القضايا التجارية والتحكيم، مع حماية مصالح موكليك بدقة واحترافية.
                </p>
              </div>

              {/* معلومات التواصل السريعة */}
              <div className="space-y-3 text-sm text-[#2C2C2C]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A68966] flex-shrink-0 mt-0.5" />
                  <span>بغداد - حي الخضراء - مجمع الخضراء بلازا</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Phone className="w-5 h-5 text-[#A68966] flex-shrink-0" />
                  <a href={`tel:+${PHONE_INTL}`} className="hover:text-[#A68966] transition-colors" dir="ltr">{PHONE_RAW}</a>
                  <span className="flex items-center gap-2 mr-2">
                    <IconWhatsApp />
                    <IconViber />
                    <IconTelegram />
                    <IconFacebook />
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#A68966] flex-shrink-0" />
                  <a href="mailto:yaser.alnuaimiy2020@gmail.com" className="hover:text-[#A68966] transition-colors">yaser.alnuaimiy2020@gmail.com</a>
                </div>
                <a href="https://maps.app.goo.gl/xzKqzZKBxgYBFX9F9?g_st=ick" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 text-[#A68966] font-bold hover:underline">
                  <MapPinned className="w-5 h-5" />
                  موقعنا على الخريطة
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link to="/register" className="bg-[#A68966] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#8e7456] transition-all shadow-lg flex items-center justify-center gap-3">
                  انقر هنا لتعرف تكلفة الشحن
                  <ChevronLeft className="w-6 h-6" />
                </Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="border border-[#2C2C2C]/20 px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#2C2C2C] hover:text-white transition-all text-center">
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* الاحصائيات - الشريط الغامق */}
        <section className="bg-[#2C2C2C] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-3">
              <p className="text-4xl md:text-5xl font-serif-ar font-bold text-[#A68966]">15+</p>
              <p className="text-xs font-bold tracking-widest opacity-60 uppercase">سنة خبرة</p>
            </div>
            <div className="space-y-3">
              <p className="text-4xl md:text-5xl font-serif-ar font-bold text-[#A68966]">2</p>
              <p className="text-xs font-bold tracking-widest opacity-60 uppercase">محورا تخصص رئيسيان</p>
            </div>
            <div className="space-y-3">
              <p className="text-4xl md:text-5xl font-serif-ar font-bold text-[#A68966]">100%</p>
              <p className="text-xs font-bold tracking-widest opacity-60 uppercase">شفافية في الرسوم</p>
            </div>
            <div className="space-y-3">
              <p className="text-4xl md:text-5xl font-serif-ar font-bold text-[#A68966]">98%</p>
              <p className="text-xs font-bold tracking-widest opacity-60 uppercase">نسبة النجاح</p>
            </div>
          </div>
        </section>

        {/* قسم التخصصات */}
        <section className="py-32 bg-white text-right">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-[#A68966] font-bold tracking-[0.2em] text-sm mb-4">مجالات التخصص</h2>
                <h3 className="text-4xl md:text-6xl font-serif-ar text-[#2C2C2C] leading-tight">الدقة والاحترافية في قضايا الدولة والتجارة</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* بطاقة 1 - قضايا الدولة */}
              <div className="group p-10 border border-[#A68966]/10 rounded-xl hover:border-[#A68966] transition-all duration-500 bg-[#F9F9F9]">
                <div className="w-14 h-14 bg-[#A68966]/10 rounded-lg flex items-center justify-center text-[#A68966] mb-8 group-hover:bg-[#A68966] group-hover:text-white transition-all">
                  <Scale className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif-ar font-bold mb-6">قضايا الدولة</h4>
                <p className="text-[#2C2C2C]/60 font-light leading-relaxed">تمثيل الدولة والجهات الحكومية في الدعاوى والمنازعات القضائية، والدفاع عن مصالحها أمام المحاكم والجهات ذات الاختصاص.</p>
              </div>

              {/* بطاقة 2 - قضايا تجارية */}
              <div className="group p-10 border border-[#A68966]/10 rounded-xl hover:border-[#A68966] transition-all duration-500 bg-[#F9F9F9]">
                <div className="w-14 h-14 bg-[#A68966]/10 rounded-lg flex items-center justify-center text-[#A68966] mb-8 group-hover:bg-[#A68966] group-hover:text-white transition-all">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif-ar font-bold mb-6">قضايا تجارية</h4>
                <p className="text-[#2C2C2C]/60 font-light leading-relaxed">الترافع في المنازعات التجارية والمدنية، والعقود والشركات، مع حماية حقوق الموكلين في القطاعين العام والخاص.</p>
              </div>

              {/* بطاقة 3 - تحكيم ونزاعات */}
              <div className="group p-10 border border-[#A68966]/10 rounded-xl hover:border-[#A68966] transition-all duration-500 bg-[#F9F9F9]">
                <div className="w-14 h-14 bg-[#A68966]/10 rounded-lg flex items-center justify-center text-[#A68966] mb-8 group-hover:bg-[#A68966] group-hover:text-white transition-all">
                  <Gavel className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif-ar font-bold mb-6">التحكيم والنزاعات</h4>
                <p className="text-[#2C2C2C]/60 font-light leading-relaxed">تمثيل خبير في التحكيم المحلي والدولي، وتسوية النزاعات التجارية والعقدية بسرية واحترافية.</p>
              </div>
            </div>
          </div>
        </section>

        {/* قسم اتصل بنا */}
        <section id="contact" className="py-20 bg-[#F9F9F9] text-right scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[#A68966] font-bold tracking-[0.2em] text-sm mb-4">تواصل معنا</h2>
            <h3 className="text-3xl md:text-4xl font-serif-ar text-[#2C2C2C] mb-10">اتصل بنا</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#A68966]/10">
                <MapPin className="w-6 h-6 text-[#A68966] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-[#2C2C2C] mb-1">العنوان</p>
                  <p className="text-[#2C2C2C]/80">بغداد - حي الخضراء - مجمع الخضراء بلازا</p>
                  <a href="https://maps.app.goo.gl/generic_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-[#A68966] font-bold hover:underline">
                    <MapPinned className="w-4 h-4" />
                    موقعنا على الخريطة
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#A68966]/10">
                <Phone className="w-6 h-6 text-[#A68966] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-[#2C2C2C] mb-1">رقم الهاتف</p>
                  <a href={`tel:+${PHONE_INTL}`} className="text-[#2C2C2C]/80 hover:text-[#A68966] transition-colors" dir="ltr">{PHONE_RAW}</a>
                  <span className="flex items-center gap-3 mt-2">
                    <IconWhatsApp className="w-5 h-5" />
                    <IconViber className="w-5 h-5" />
                    <IconTelegram className="w-5 h-5" />
                    <IconFacebook className="w-5 h-5" />
                  </span>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#25D366] font-bold hover:underline">التواصل عبر واتساب</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#A68966]/10">
                <Mail className="w-6 h-6 text-[#A68966] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-[#2C2C2C] mb-1">البريد الإلكتروني</p>
                  <a href="mailto:yaser.alnuaimiy2020@gmail.com" className="text-[#2C2C2C]/80 hover:text-[#A68966] transition-colors">yaser.alnuaimiy2020@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F9F9F9] border-t border-[#A68966]/10 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-3">
          <p className="text-xs text-[#2C2C2C]/60">بغداد - حي الخضراء - مجمع الخضراء بلازا</p>
          <p className="text-xs text-[#2C2C2C]/60">
            <a href={`tel:+${PHONE_INTL}`} className="hover:text-[#A68966]" dir="ltr">{PHONE_RAW}</a>
            <span className="mx-2">|</span>
            <a href="mailto:yaser.alnuaimiy2020@gmail.com" className="hover:text-[#A68966]">yaser.alnuaimiy2020@gmail.com</a>
          </p>
          <p className="text-xs text-[#2C2C2C]/40 font-bold tracking-widest uppercase pt-2">
            © {new Date().getFullYear()} مكتب ياسر النعيمي للمحاماة. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}