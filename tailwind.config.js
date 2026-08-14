/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionDelay: {
        ...Array.from({ length: 12 }, (_, i) => ({ [`d${i + 1}`]: `${(i + 1) * 80}ms` })),
      },
    },
  },
  plugins: [],
};
