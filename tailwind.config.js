/*
 * FILE PATH: alx-listing-app/tailwind.config.js
 * This is the EXACT configuration required by the project instructions
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#4ECDC4', // Primary brand color from Figma
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
