define('modules/index.jsx', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _App = require('modules/App.jsx');
  
  var _App2 = _interopRequireDefault(_App);
  
  (0, _reactDom.render)(_react2['default'].createElement(_App2['default'], { name: 'yh' }), document.getElementById('root'));
  //# sourceMappingURL=/client/modules/index.js.map
  

});
