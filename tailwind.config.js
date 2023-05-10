/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
      fontSize: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      colors: {
        "foreground": "var(--foreground-rgb)",
        "background": "var(--background-rgb)",
      },
      keyframes:{
        fade: {
          "0%":{opacity:0.2,transform:"scale(0.8)"},
          "50%":{opacity:1 ,transform:"scale(1)"},
          "100%":{opacity:0.2,transform:"scale(0.8)"}
        },
      },
      animation:{
        fadeout: 'fade 5s infinite ease-in-out',
      
      }
    },
  },
  plugins: [],
}
