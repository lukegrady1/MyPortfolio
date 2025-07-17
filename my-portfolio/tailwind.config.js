// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // adjust to match where your components live
  ],
  theme: {
    extend: {
      backgroundSize: {
        // optional shorthand if you don't want to use the arbitrary bg-[background-size:...]
        '200': '200% 200%',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':      { 'background-position': '100% 50%' },
        },
      },
      animation: {
        // you can tweak duration (e.g. 8s), easing, etc.
        'gradient-x': 'gradient-x 8s ease infinite',
      },
    },
  },
  plugins: [],
}
