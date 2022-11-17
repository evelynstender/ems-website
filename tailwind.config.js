/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Mouse Memoirs', 'Dosis', 'Carrois Gothic', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      black: '#010101',
      purple: '#0F0324',
      green: '#057402',
      red: '#300003',
      yellow: '#231E00',
      blue: '#00070C',
      white: '#FFFFFF',
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    extend: {
      colors: {
        black: {
          100: '#818181',
          500: '#0B0B0B',
          1000: '#010101',
        },
        purple: {
          100: '#E9DFFC',
          500: '#925FF0',
          1000: '#0F0324',
        },
        // green: {},
        // red: {},
        // yellow: {},
        // blue: {},
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
