'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Global = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Storage2 = require('./Storage');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Global = exports.Global = function (_Storage) {
  _inherits(Global, _Storage);

  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace    - The namespace of storage
   */
  function Global() {
    var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    _classCallCheck(this, Global);

    var _this = _possibleConstructorReturn(this, (Global.__proto__ || Object.getPrototypeOf(Global)).call(this, namespace, null));

    _this._type = 'Global';

    if (typeof window === 'undefined') {
      // Fallback to a plain Object if window is not available
      _this._global = {};
    } else {
      _this._global = window;
    }
    return _this;
  }

  /**
   * Method override: save data to global variable
   *
   * @access protected
   */


  _createClass(Global, [{
    key: '_setData',
    value: function _setData() {
      this._global[this._namespace] = this._data;
    }

    /**
     * Method override: get data from global variable
     *
     * @access protected
     */

  }, {
    key: '_getData',
    value: function _getData() {
      this._data = this._global[this._namespace];
      if (!this._data) {
        this._data = {};
      }
    }
  }]);

  return Global;
}(_Storage2.Storage);