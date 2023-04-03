/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'primary': '#2563eb',
      'secondary': {
        DEFAULT: '#fafafa',
        'dark': '#f5f5f5',
      },
      'tertiary': {
        DEFAULT: '#10101a',
        'dark': '#0b0b13',
      },
    },
    extend: {
      boxShadow: {
        'button': '4px 4px #0b0b13',
        'button-dark': '4px 4px #f5f5f5',
        'button-hover': '4px 4px #2563eb',
      },
    },
  },
  plugins: [],
}
