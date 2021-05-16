const { resolve } = require('path');
const { config, environment, Environment } = require('@rails/webpacker');

const WebpackerPwa = require('webpacker-pwa');
new WebpackerPwa(config, environment);

/* Do not compile react-table https://github.com/tannerlinsley/react-table/discussions/2048#discussioncomment-3989 */
const nodeModulesLoader = environment.loaders.get('nodeModules');
if (!Array.isArray(nodeModulesLoader.exclude)) {
  nodeModulesLoader.exclude = nodeModulesLoader.exclude == null ? [] : [nodeModulesLoader.exclude];
}

nodeModulesLoader.exclude.push(/react-table/);

module.exports = environment;