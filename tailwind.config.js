/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'legal-deep': '#0f172a',
        'legal-blue': '#1e3a5f',
        'legal-gold': '#c9a227',
        'legal-gold-light': '#e6c84a',
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        serif: ['Tajawal', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
