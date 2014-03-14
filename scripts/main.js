define('main', function(require, exports, module) {
  var s = function(i) {
    i.call(this, require);
  };
  s.Famous = {}
  debugger
  s.Famous.App = require('app');
  module.exports = s;
});
