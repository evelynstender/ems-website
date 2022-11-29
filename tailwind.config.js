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
      extend: {
        fontFamily: {
          sans: ['var(--font-nunito)'],
        },
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#06080D',
        gray: {
          dark: '#373A3B',
          medium: '#585D62',
        },
        green: {
          light: '#B5D7CD',
          medium: '#6D8377',
          dark: '#185355',
          bright: '#5CC4C4',
        },
        orange: '#C36655',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
