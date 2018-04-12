const path = require('path');

export default {
  entry: 'src/renderer/src/index.js',
  outputPath: 'app/dist',
  extraBabelPlugins: [
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/renderer/components/'),
  },
    html: {
    template: 'src/renderer/src/index.ejs',
  },
  ignoreMomentLocale: true,
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
};

