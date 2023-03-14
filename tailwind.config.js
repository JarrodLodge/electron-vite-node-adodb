const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/App.vue"
  ],
  theme: {
    extend: {
      colors: {
        "red-500": "#E74C3C"
      },
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}