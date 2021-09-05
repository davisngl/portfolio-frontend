module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#248AD3',
        'brand-hover': '#237DBD',
      },
      backgroundColor: {
        alternate: '#F5F5FC',
        'brand-hover': '#237DBD',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
