module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
