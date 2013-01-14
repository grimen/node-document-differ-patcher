
var Differ = require('node-document-differ');

module.exports = Differ.Spec('Patcher', {
  module: require('..'),
  engine: require('patcher'),
  options: {}
});
