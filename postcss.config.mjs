/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Esta es la forma correcta ahora
    'autoprefixer': {},
  },
};

export default config;
