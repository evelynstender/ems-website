// const colors = require('tailwindcss/colors');

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
      black85: '#030303',
      black40: '#292929',
      purple85: '#361F61',
      purple40: '#A87FF3',
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
