/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "logo": url('./assets/placeholder-icon.jpg'),
      }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        'plant': '#36771C',
        'white': '#ffffff', 
      }
    }
  },
  plugins: [],
}