const { webpackMerge, htmlOverlay, webpackServeConfig } = require('just-scripts');
module.exports = webpackMerge(
  webpackServeConfig,
  htmlOverlay({
    template: 'public/index.html'
  }),
  {
    // Here you can custom webpack configurations
    output: {
      publicPath: '/'
    },
    module:{
      rules:[
        // {
        //   test: 'node_modules/editorjs/dist/editor.js',
        //   exclude:/node_modules/,
        //   loader:"babel-loader"
        // },
        {
          test: /\.ts?$/,
          exclude:/node_modules/,
          loader:"babel-loader"
        }
      ]
    }
  }
);
