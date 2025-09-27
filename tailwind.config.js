/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // شامل تمام فایل‌های js/jsx/ts/tsx در src
    "./pages/**/*.{js,jsx,ts,tsx}", // شامل فایل‌های pages پروژه اصلی
    "./components/**/*.{js,jsx,ts,tsx}", // شامل فایل‌های components پروژه اصلی
  ],
  theme: {
    extend: {
      // رنگ‌های سفارشی
      colors: {
        primary: '#FFA500', // رنگ اصلی (نارنجی)
        primaryLight: '#FFA50020', // نسخه روشن‌تر رنگ اصلی
        secondary: '#2E3192', // رنگ ثانویه (آبی تیره)
        thirdry: '#FFF7E3', // رنگ سوم (کرم روشن)
        dark: '#02142C', // رنگ تیره
        light: '#EEE', // رنگ روشن
        accent: 'var(--accent-color)', // متغیر CSS
        bg: 'var(--bg-color)', // متغیر CSS
        text: 'var(--text-color)', // متغیر CSS
        secondaryBg: 'var(--secondary-bg)', // متغیر CSS
        border: 'var(--border-color)', // متغیر CSS
        primaryGreen: '#2E3192', // رنگ سبز اولیه
      },
      // فونت‌های سفارشی
      fontFamily: {
        iranyekan: ['IRANYekan', 'Arial', 'sans-serif'],
        iranyekanBold: ['IRANYekanBold', 'Arial', 'sans-serif'],
        morabba: ['Morabba', 'Arial', 'sans-serif'],
      },
      // عرض‌های سفارشی
      width: {
        '90px': '90px',
        '80px': '80px',
        '70px': '70px',
        '60px': '60px',
      },
      // ارتفاع‌های سفارشی
      height: {
        '46px': '46px',
        '40px': '40px',
        '36px': '36px',
        '32px': '32px',
        '41px': '41px',
        '28px': '28px',
      },
      // فاصله‌های سفارشی
      spacing: {
        '85px': '85px',
        '75px': '75px',
        '70px': '70px',
        '60px': '60px',
        '32px': '32px',
        '28px': '28px',
        '24px': '24px',
        '20px': '20px',
      },
      // اندازه فونت‌های سفارشی
      fontSize: {
        '32px': ['32px', { lineHeight: '54px' }],
        '28px': ['28px', { lineHeight: '48px' }],
        '24px': ['24px', { lineHeight: '40px' }],
        '20px': ['20px', { lineHeight: '32px' }],
      },
      // انیمیشن‌های سفارشی
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      // Keyframes برای انیمیشن
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [], // افزونه‌ها (در صورت نیاز اضافه کنید)
}