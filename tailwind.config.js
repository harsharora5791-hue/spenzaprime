/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#001e40',
          container: '#003366',
          fixed: {
            dim: '#a7c8ff'
          }
        },
        secondary: {
          DEFAULT: '#ad2c00',
          container: '#d83900',
        },
        surface: {
          DEFAULT: '#f9f9f9',
          container: '#eeeeee',
        },
        on: {
          surface: {
            DEFAULT: '#1a1c1c',
            variant: '#43474f',
          }
        },
        outline: {
          DEFAULT: '#737780',
          variant: '#c3c6d1',
        }
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        'container-max': '1280px',
      }
    },
  },
  plugins: [],
}
