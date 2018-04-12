const path = require('path');

export default {
  entry: 'src/renderer/src/index.js',
  outputPath: 'app/dist',
  extraBabelPlugins: [
    'transform-decorators-legacy',
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/renderer/src/components/'),
  },
    html: {
    template: 'src/renderer/src/index.ejs',
  },
  ignoreMomentLocale: true,
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
};

