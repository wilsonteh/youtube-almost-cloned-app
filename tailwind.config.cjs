const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          main: "#ff0000",
        },
        blue: {
          light: "hsl(205,100%,94%)",
          main: "hsl(215,93%,44%)",
        },
        gray: {
          light: "hsl(0,0%,97%)",
          main: "hsl(0,0%,93%)",
          dark: "hsl(0,0%,82%)",
        },
        white: "#fff",
        black: "#000",
      }, 
      fontFamily: {
        roboto: "Roboto",
        robotoC: "Roboto Condensed",  
      },
      screens: {
        xs: "420px",
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      }

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

