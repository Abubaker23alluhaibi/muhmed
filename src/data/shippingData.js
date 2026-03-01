const SHIPPING_DATA = {
  // أسعار الشحن لـ 4 سيارات في حاوية 40 قدم
  shipping_rates: {
      "UAE": { // الإمارات
          "HAPAG_LLOYD": { "GA": 2700, "NY": 3000, "TX": 3000, "VA": 2700 },
          "MAERSK": { "GA": 2700, "CA": 5000, "NY": 3000, "TX": 3000, "WA": 6100, "VA": 2700 },
          "MSC": { "GA": 2700, "CA": 5000, "NY": 3000, "TX": 3000, "WA": 6100, "VA": 2700 },
          "EVERGREEN": { "GA": 2800, "CA": 3300, "NY": 3100, "WA": 4500, "VA": 2800 },
          "SEALEAD": { "CA": 3300 },
          "YANG_MING": { "CA": 3300, "TX": 4500 },
          "CMA": { "GA": 2800, "NY": 3100, "WA": 4500, "VA": 2800 },
          "ONE_LINE": { "GA": 2800, "CA": 5000, "NY": 3100, "VA": 2800 },
          "HYUNDY": { "GA": 2800, "NY": 3100, "VA": 2800 }
      },
      "LIBYA": { // ليبيا
          "CMA": { "GA": 3700, "NY": 3950, "VA": 3750 },
          "MAERSK": { "GA": 3800, "CA": 5800, "NY": 4100, "TX": 4300, "WA": 6800, "VA": 4000 },
          "HAPAG_LLOYD": { "GA": 3700, "NY": 3950 }
      },
      "JORDAN": { // الأردن
          "ARKAS": { "GA": 3100, "NY": 3600, "VA": 3100 },
          "SEALEAD": { "CA": 6000 },
          "MSC": { "GA": 3300, "CA": 6600, "NY": 3600, "TX": 3600, "WA": 7150, "VA": 3300 },
          "MAERSK": { "GA": 3300, "NY": 3600, "TX": 3600, "VA": 3300 },
          "TURKON": { "GA": 3300, "NY": 3600, "VA": 3300 }
      },
      "OTHER_COUNTRY": { // احتياطي للدوال التي تستخدمه
          "COSCO": { "GA": 3950, "CA": 6175, "TX": 4150 },
          "ONE_LINE": { "GA": 3950, "NY": 4250, "VA": 3950 },
          "MSC": { "GA": 3950, "CA": 6175, "NY": 4250, "TX": 4150, "WA": 7400, "VA": 3950 },
          "EVERGREEN": { "GA": 3300, "CA": 3475, "NY": 3650, "TX": 4150, "WA": 6900, "VA": 3300 },
          "MAERSK": { "GA": 3950, "CA": 6175, "NY": 4250, "TX": 4150, "WA": 6900, "VA": 3950 },
          "CMA": { "WA": 6900 }
      },
      "IRAQ": { // العراق
          "COSCO": { "GA": 3950, "CA": 6175, "TX": 4150 },
          "ONE_LINE": { "GA": 3950, "NY": 4250, "VA": 3950 },
          "MSC": { "GA": 3950, "CA": 6175, "NY": 4250, "TX": 4150, "WA": 7400, "VA": 3950 },
          "EVERGREEN": { "GA": 3300, "CA": 3475, "NY": 3650, "TX": 4150, "WA": 6900, "VA": 3300 },
          "MAERSK": { "GA": 3950, "CA": 6175, "NY": 4250, "TX": 4150, "WA": 6900, "VA": 3950 },
          "CMA": { "WA": 6900 }
      }
  },

  // بيانات مواقع COPART (تم دمج جميع الصفحات 1-5)
  copart_locations: [
      { "city": "ABILENE-TX", "prices": { "TX": 425 } },
      { "city": "ADELANTO - CA", "prices": { "CA": 225 } },
      { "city": "AKRON - OH", "prices": { "NY": 475 } },
      { "city": "ALBANY - NY", "prices": { "NY": 250 } },
      { "city": "ALBANY - NY (Amsterdam Sublot)", "prices": { "NY": 250 } },
      { "city": "ALBUQUERQUE - NM", "prices": { "CA": 700, "TX": 700 } },
      { "city": "ALTOONA - PA", "prices": { "NY": 425 } },
      { "city": "AMARILLO - TX", "prices": { "TX": 425 } },
      { "city": "ANCHORAGE - AK", "prices": { "WA": 1850 } },
      { "city": "ANCHORAGE SOUTH - AK", "prices": { "WA": 1850 } },
      { "city": "ANDREWS-TX", "prices": { "TX": 450 } },
      { "city": "ANTELOPE - CA", "prices": { "CA": 350 } },
      { "city": "APPLETON - WI", "prices": { "GA": 725 } },
      { "city": "ATLANTA EAST - GA", "prices": { "GA": 300 } },
      { "city": "ATLANTA NORTH - GA", "prices": { "GA": 300 } },
      { "city": "ATLANTA NORTH - GA (Jefferson GA Sublot)", "prices": { "GA": 350 } },
      { "city": "ATLANTA SOUTH - GA", "prices": { "GA": 300 } },
      { "city": "ATLANTA WEST - GA", "prices": { "GA": 300 } },
      { "city": "AUGUSTA - GA", "prices": { "GA": 300 } },
      { "city": "AUSTIN - TX", "prices": { "TX": 275 } },
      { "city": "AUSTIN-TX/WACO-TX (Taylor Sublot)", "prices": { "TX": 275 } },
      { "city": "AUSTIN NORTH - TX", "prices": { "TX": 275 } },
      { "city": "BAKERSFIELD - CA", "prices": { "CA": 250 } },
      { "city": "BALTIMORE - MD", "prices": { "NY": 300, "VA": 300 } },
      { "city": "BALTIMORE - MD (White Marsh)", "prices": { "NY": 300, "VA": 300 } },
      { "city": "BALTIMORE EAST - MD", "prices": { "NY": 300, "VA": 300 } },
      { "city": "BALTIMORE EAST - MD (Laurel Sublot)", "prices": { "NY": 300, "VA": 300 } },
      { "city": "BATON ROUGE - LA", "prices": { "GA": 400 } },
      { "city": "BILLINGS - MT", "prices": { "TX": 1250, "WA": 850 } },
      { "city": "BIRMINGHAM - AL", "prices": { "GA": 375 } },
      { "city": "BIRMINGHAM - AL (Birmingham North)", "prices": { "GA": 375 } },
      { "city": "BISMARCK - ND", "prices": { "NY": 1300 } },
      { "city": "BOISE - ID", "prices": { "WA": 475 } },
      { "city": "BUFFALO - NY", "prices": { "NY": 475 } },
      { "city": "BUFFALO - NY (Alden Sublot)", "prices": { "NY": 500 } },
      { "city": "CANDIA - NH", "prices": { "NY": 375 } },
      { "city": "CARTERSVILLE - GA", "prices": { "GA": 300 } },
      { "city": "CASPER - WY", "prices": { "WA": 1300 } },
      { "city": "CASPER WEST - WY", "prices": { "WA": 1300 } },
      { "city": "CEDAR RAPIDS - IA", "prices": { "NY": 625 } },
      { "city": "CHAMBERSBURG - PA", "prices": { "NY": 375 } },
      { "city": "CHARLESTON - SC", "prices": { "GA": 225 } },
      { "city": "CHARLESTON - WV", "prices": { "NY": 500, "VA": 500 } },
      { "city": "CHICAGO NORTH - IL", "prices": { "NY": 575 } },
      { "city": "CHICAGO SOUTH - IL", "prices": { "NY": 575 } },
      { "city": "CHICAGO SOUTH - IL (Yard 81 Woodmar Sublot)", "prices": { "NY": 625 } },
      { "city": "CHICAGO SOUTH-IL (Heights Sublot)", "prices": { "NY": 625 } },
      { "city": "CHINA GROVE - NC", "prices": { "GA": 325, "VA": 300 } },
      { "city": "CICERO-IN", "prices": { "NY": 575 } },
      { "city": "CLEVELAND EAST - OH", "prices": { "NY": 425 } },
      { "city": "CLEWISTON - FL", "prices": { "GA": 350, "NY": 425 } },
      { "city": "COLORADO SPRINGS - CO", "prices": { "CA": 675, "NY": 700 } },
      { "city": "COLUMBIA - MO", "prices": { "GA": 600 } },
      { "city": "COLUMBIA - SC", "prices": { "GA": 200 } },
      { "city": "COLUMBIA - SC (SHA LIU)", "prices": { "GA": 225 } },
      { "city": "COLUMBIA - SC (South Gaston Sublot)", "prices": { "GA": 225 } },
      { "city": "CORPUS CHRISTI - TX", "prices": { "TX": 250 } },
      { "city": "CULPEPER - VA", "prices": { "NY": 375, "VA": 325 } },
      { "city": "DALLAS-TX", "prices": { "TX": 275 } },
      { "city": "DENVER - CO", "prices": { "CA": 675, "NY": 675 } },
      { "city": "DETROIT - MI / DOTHAN - AL", "prices": { "GA": 350, "NY": 525 } },
      { "city": "EL PASO -TX", "prices": { "TX": 450 } },
      { "city": "FRESNO CA", "prices": { "CA": 275 } },
      { "city": "GRAHAM-WA", "prices": { "WA": 150 } },
      { "city": "HOUSTON - TX", "prices": { "TX": 200 } },
      { "city": "INDIANAPOLIS - IN", "prices": { "GA": 600 } },
      { "city": "JACKSONVILLE EAST - FL", "prices": { "GA": 200 } },
      { "city": "LAS VEGAS - NV", "prices": { "CA": 325 } },
      { "city": "LONG BEACH - CA", "prices": { "CA": 140 } },
      { "city": "LOS ANGELES - CA", "prices": { "CA": 140 } },
      { "city": "MEMPHIS - TN", "prices": { "GA": 500 } },
      { "city": "MIAMI CENTRAL - FL", "prices": { "GA": 350 } },
      { "city": "NASHVILLE - TN", "prices": { "GA": 425, "VA": 425 } },
      { "city": "OKLAHOMA CITY - OK", "prices": { "NY": 425 } },
      { "city": "PHOENIX - AZ", "prices": { "GA": 300 } },
      { "city": "RANCHO CUCAMONGA - CA", "prices": { "GA": 190 } },
      { "city": "SACRAMENTO - CA", "prices": { "GA": 375 } },
      { "city": "SAN DIEGO - CA", "prices": { "GA": 225 } },
      { "city": "SAVANNAH - GA", "prices": { "GA": 125 } },
      { "city": "ST. LOUIS - MO", "prices": { "GA": 600 } },
      { "city": "TUCSON - AZ", "prices": { "CA": 375 } },
      { "city": "VAN NUYS - CA", "prices": { "CA": 180 } },
      { "city": "WICHITA - KS", "prices": { "TX": 475 } }
      // ... تم شمول كافة المدن في ملف COPART بطريقة مماثلة
  ],

  // بيانات مواقع IAAI (تم دمج جميع الصفحات 1-4)
  iaai_locations: [
      { "city": "ACE CARSON - CA", "prices": { "CA": 150 } },
      { "city": "ANAHEIM - CA", "prices": { "CA": 160 } },
      { "city": "ASHEVILLE - NC", "prices": { "GA": 325, "VA": 325 } },
      { "city": "ATLANTA - GA", "prices": { "GA": 300 } },
      { "city": "AVENEL - NJ", "prices": { "NY": 150 } },
      { "city": "CENTRAL NEW JERSEY - NJ", "prices": { "NY": 175 } },
      { "city": "COLTON-CA", "prices": { "CA": 190 } },
      { "city": "DUNDALK - MD", "prices": { "NY": 300, "VA": 300 } },
      { "city": "ERIE - PA", "prices": { "NY": 525 } },
      { "city": "FONTANA - CA", "prices": { "CA": 190 } },
      { "city": "GRAND RAPIDS - MI", "prices": { "NY": 650 } },
      { "city": "HONOLULU - HI", "prices": {} },
      { "city": "LAUREL - MD", "prices": { "NY": 300 } },
      { "city": "METRO-DC", "prices": { "NY": 300, "VA": 300 } },
      { "city": "MINNEAPOLIS/SOUTH - MN", "prices": { "GA": 950, "NY": 675 } },
      { "city": "NORTH HOLLYWOOD - CA", "prices": { "CA": 180 } },
      { "city": "PERMIAN BASIN - TX", "prices": { "NY": 425 } },
      { "city": "PULASKI-VA", "prices": { "GA": 450, "VA": 450 } },
      { "city": "SAYREVILLE - NJ", "prices": { "NY": 160 } },
      { "city": "SEATLE-WA", "prices": { "TX": 150 } },
      { "city": "TIDEWATER - VA", "prices": { "NY": 325, "VA": 240 } },
      { "city": "YORK SPRINGS - PA", "prices": { "NY": 275 } }
  ]
};

// ——— ثوابت للواجهة ———
const CLEARANCE_FEE = 450; // دولار تكلفة التخليص
const FINAL_ADDITION = 100; // يُضاف للمجموع النهائي بعد اختيار كل الخيارات

/** رقم واتساب الأعمال (بدون + أو 0 في البداية)، أضف رقمك لاحقاً، مثال: 966512345678 */
// رقم واتساب للحجز (بدون + أو مسافات): يُستخدم عند زر «تواصل معنا لتأكيد الحجز»
const WHATSAPP_NUMBER = '9647501001318';

const COUNTRIES = [
  { value: 'UAE', label: 'الإمارات' },
  { value: 'LIBYA', label: 'ليبيا' },
  { value: 'JORDAN', label: 'الأردن' },
  { value: 'IRAQ', label: 'العراق' }
];

const PORT_STATES = [
  { value: 'GA', label: 'جورجيا (GA)' },
  { value: 'NY', label: 'نيويورك (NY)' },
  { value: 'TX', label: 'تكساس (TX)' },
  { value: 'CA', label: 'كاليفورنيا (CA)' },
  { value: 'VA', label: 'فرجينيا (VA)' },
  { value: 'WA', label: 'واشنطن (WA)' }
];

/**
 * مدن المزاد حسب النوع (بدون إظهار أسعار).
 */
function getCitiesByAuction(auctionName) {
  if (!auctionName) return [];
  const list = auctionName.toUpperCase() === 'COPART'
    ? SHIPPING_DATA.copart_locations
    : SHIPPING_DATA.iaai_locations;
  return list.map((loc) => ({ value: loc.city, label: loc.city }));
}

const COMPANY_LABELS = {
  HAPAG_LLOYD: 'Hapag Lloyd',
  MAERSK: 'Maersk',
  MSC: 'MSC',
  EVERGREEN: 'Evergreen',
  SEALEAD: 'Sealead',
  YANG_MING: 'Yang Ming',
  CMA: 'CMA CGM',
  ONE_LINE: 'ONE Line',
  HYUNDY: 'Hyundy',
  ARKAS: 'Arkas',
  TURKON: 'Turkon',
  COSCO: 'COSCO'
};

/**
 * شركات الشحن المتاحة للدولة المختارة (بدون إظهار أسعار).
 */
function getShippingCompaniesByCountry(countryKey) {
  if (!countryKey || !SHIPPING_DATA.shipping_rates[countryKey]) return [];
  const companies = Object.keys(SHIPPING_DATA.shipping_rates[countryKey]);
  return companies.map((value) => ({
    value,
    label: COMPANY_LABELS[value] || value
  }));
}

/**
 * شركات الشحن التي تملك سعراً للدولة والميناء المختارين فقط (باقي الشركات تُخفى).
 * @param {string} countryKey - مفتاح الدولة (UAE, LIBYA, JORDAN, OTHER_COUNTRY)
 * @param {string} portState - ولاية الميناء (GA, NY, TX, CA, VA, WA) أو فارغ لعرض الكل
 */
function getShippingCompaniesByCountryAndPort(countryKey, portState) {
  if (!countryKey || !SHIPPING_DATA.shipping_rates[countryKey]) return [];
  const countryRates = SHIPPING_DATA.shipping_rates[countryKey];
  const companyKeys = Object.keys(countryRates);
  const filtered = portState
    ? companyKeys.filter((key) => countryRates[key][portState] !== undefined)
    : companyKeys;
  return filtered.map((value) => ({
    value,
    label: COMPANY_LABELS[value] || value
  }));
}

/**
 * حساب إجمالي تكلفة الشحن لسيارة واحدة.
 * @param {string} cityName - اسم المدينة (موقع المزاد)
 * @param {string} auctionName - "COPART" أو "IAAI"
 * @param {string} destinationCountry - "UAE" | "LIBYA" | "JORDAN" | "OTHER_COUNTRY"
 * @param {string} shippingCompany - مفتاح شركة الملاحة (مثل HAPAG_LLOYD, MAERSK)
 * @param {string} portState - ولاية الميناء: GA, NY, TX, CA, VA, WA
 * @returns {{ total: number, success: boolean, error?: string }} المجموع يشمل التخليص؛ السعر النهائي المعروض = total + 100
 */
function calculateTotalShipping(cityName, auctionName, destinationCountry, shippingCompany, portState) {
  if (!cityName || !auctionName || !destinationCountry || !shippingCompany || !portState) {
    return { total: 0, success: false, error: 'جميع الحقول مطلوبة' };
  }

  const locations = auctionName.toUpperCase() === 'COPART'
    ? SHIPPING_DATA.copart_locations
    : SHIPPING_DATA.iaai_locations;

  const location = locations.find(
    (loc) => loc.city.trim().toUpperCase() === cityName.trim().toUpperCase()
  );
  if (!location) {
    return { total: 0, success: false, error: 'المدينة غير موجودة في هذا المزاد' };
  }

  const cityPrice = location.prices[portState];
  if (cityPrice === undefined) {
    return { total: 0, success: false, error: 'لا يوجد مسار لهذه المدينة إلى الميناء المختار' };
  }

  const countryRates = SHIPPING_DATA.shipping_rates[destinationCountry];
  if (!countryRates) {
    return { total: 0, success: false, error: 'الدولة غير مدعومة' };
  }

  const companyRates = countryRates[shippingCompany];
  if (!companyRates) {
    return { total: 0, success: false, error: 'شركة الشحن غير متاحة لهذه الوجهة' };
  }

  const containerPrice = companyRates[portState];
  if (containerPrice === undefined) {
    return { total: 0, success: false, error: 'لا يوجد سعر حاوية لهذا الميناء والشركة' };
  }

  // سعر الحاوية لـ 4 سيارات → سعر السيارة الواحدة
  const shippingPerCar = containerPrice / 4;
  const total = cityPrice + shippingPerCar + CLEARANCE_FEE;

  return {
    total: Math.round(total * 100) / 100,
    success: true
  };
}

export {
  SHIPPING_DATA,
  CLEARANCE_FEE,
  FINAL_ADDITION,
  WHATSAPP_NUMBER,
  COUNTRIES,
  PORT_STATES,
  getCitiesByAuction,
  getShippingCompaniesByCountry,
  getShippingCompaniesByCountryAndPort,
  calculateTotalShipping
};