const webpack = require("webpack");

module.exports = ({ config }) => {
  const customPlugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new (require("rewiremock/webpack/plugin"))()
  ];

  return {
    ...config,
    plugins: [...config.plugins, ...customPlugins]
  };
};
