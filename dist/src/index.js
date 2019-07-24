'use strict';

var _Local = require('./Local');

var _Session = require('./Session');

var _Global = require('./Global');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebStorageES6 =
/**
 * Constructor
 *
 * @constructor
 * @access public
 * @param {string} storageType      - The storage type
 * @param {string} namespace        - The storage namespace
 * @param {object} storageOverride  - Provide a custom storage object, useful for testing
 * @returns {object}                - The storage object
 */
function WebStorageES6(storageType) {
  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var storageOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, WebStorageES6);

  var storage = null;

  switch (storageType.toLowerCase()) {
    case 'local':
      storage = new _Local.Local(namespace, storageOverride);
      break;
    case 'session':
      storage = new _Session.Session(namespace, storageOverride);
      break;
    case 'global':
      storage = new _Global.Global(namespace);
      break;
  }
  return storage;
};

module.exports = WebStorageES6;