'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Session = undefined;

var _Storage2 = require('./Storage');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storageMock = require('./StorageMock');

var Session = exports.Session = function (_Storage) {
  _inherits(Session, _Storage);

  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace        - The namespace of storage
   * @param {object} storageOverride  - Provide a custom storage object, useful for testing
   */
  function Session() {
    var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    var storageOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Session);

    var storage = null;

    if (storageOverride) {
      storage = storageOverride;
    } else {
      if (typeof sessionStorage === 'undefined') {
        // Use a fallback storage if sessionStorage is not available
        storage = storageMock();
      } else {
        storage = sessionStorage;
      }
    }

    var _this = _possibleConstructorReturn(this, (Session.__proto__ || Object.getPrototypeOf(Session)).call(this, namespace, storage));

    _this._type = 'Session';
    return _this;
  }

  return Session;
}(_Storage2.Storage);