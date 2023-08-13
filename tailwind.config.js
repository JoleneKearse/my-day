/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#292929',
          200: '#1F1F1F',
          300: '#141414'
        },
        white: {
          100: '#F7F4F3',
        },
        green: {
          100: '#B0FF92',
        },
        blue: {
          100: '#3CB0CD',
          200: '#2E98B2',
          300: '#267C92'
        },
        purple: {
          100: '#4A008F',
          200: '#7E00F5',
          300: '#5F00BA',
          400: '#4A008F',
        }
      }
    },
  },
  plugins: [],
};
