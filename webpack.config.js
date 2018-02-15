const path = require('path');
let webpack = require('webpack');
var glob = require("glob");

class StatsPlugin {
  apply(compiler) {
    compiler.plugin('emit', (curCompiler, callback) => {
      let stats = curCompiler.getStats().toJson().assetsByChunkName;
      let data = {};

      for (let _key in stats) {
        let key = _key.replace(/^\//, '');
        let paths = Array.isArray(stats[_key]) ? stats[_key] : [stats[_key]];
        
        for (let _path of paths) {
          let path = _path.replace(/^\//, '');
          let type = path.split('.').pop();

          if (type == 'css') {
            if (data.css === undefined) {
              data.css = [];
            }

            data.css.push(path);
          } else {
            if (data[type] === undefined) {
              data[type] = {};
            }

            if (data[type][key] === undefined) {
              data[type][key] = [];
            }

            data[type][key].push(path);
          }
        }
      }

      require("fs").writeFile(
        path.join(__dirname, './public/webpack-stats.json'),
        JSON.stringify(data, null, '  '),
        callback
      );
    });
  }
}

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    'js/app': './src/ts/app.tsx',
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        "test": /\.tsx?$/,
        "loader": "ts-loader",
      }
    ]
  },
  plugins: [
    new StatsPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx" ],
  }
};
