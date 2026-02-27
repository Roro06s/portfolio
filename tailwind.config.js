/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFBFC',
        surface: '#FFFFFF',
        accent: {
          violet: '#8B5CF6',
          blue: '#06B6D4',
        },
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
       zIndex: {
        '5': '5',
        '10': '10',
      }
    },
  },
  plugins: [],
}