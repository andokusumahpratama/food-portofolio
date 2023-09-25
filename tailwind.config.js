/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto mono, monospace',
    },

    extend: {
      colors: {
        pizza: '#123456',
      },
      fontSize: {
        huge: ['10rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
};
