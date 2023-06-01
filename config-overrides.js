const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

/* config-overrides.js */
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    '@components': resolve('components'),
    '@page': resolve('src/page')
  };
  config.resolve.extensions = ['.js','.jsx','.json', '.tsx', '.ts']
  return config;
}