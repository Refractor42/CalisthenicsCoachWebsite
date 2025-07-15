/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ff0000',
        'primary-dark': '#c00000',
        'secondary': '#1a1a1a',
        'accent': '#ff5e00',
        'light': '#f5f5f5',
        'dark': '#0a0a0a',
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/hero-bg.jpg')",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};