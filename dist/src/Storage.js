"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = exports.Storage = function () {
  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace    - The namespace of storage
   * @param {object} storage      - The storage type
   */
  function Storage(namespace, storage) {
    _classCallCheck(this, Storage);

    this._namespace = namespace;
    this._storage = storage;
  }

  /**
   * Save data to storage
   *
   * @access protected
   */


  _createClass(Storage, [{
    key: "_setData",
    value: function _setData() {
      this._storage.setItem(this._namespace, JSON.stringify(this._data));
    }

    /**
     * Get data from storage
     *
     * @access protected
     */

  }, {
    key: "_getData",
    value: function _getData() {
      this._data = JSON.parse(this._storage.getItem(this._namespace));
      if (!this._data) {
        this._data = {};
      }
    }

    /**
     * Merge two objects
     *
     * @access protected
     * @param {object} obj  - Destination object
     * @param {object} src  - Source object
     * @returns {object}    - Merged object
     */

  }, {
    key: "_extend",
    value: function _extend(obj, src) {
      for (var key in src) {
        obj[key] = src[key];
      }
      return obj;
    }

    /**
     * Retrieve an item or return a default value
     *
     * @access public
     * @param {string} key          - The data key
     * @param {string} defaultValue - The default value
     * @param {string|null}         - The data value
     */

  }, {
    key: "get",
    value: function get(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var value = null;

      this._getData();
      value = this._data[key];
      if (value) {
        return value;
      }
      if (defaultValue) {
        return defaultValue;
      }
      return null;
    }

    /**
     * Store an item
     *
     * @access public
     * @param {string} key      - The data key
     * @param {string} value    - The data value
     */

  }, {
    key: "put",
    value: function put(key, value) {
      this._getData();
      this._data[key] = value;
      this._setData();
    }

    /**
     * Retrieve an item and forget it
     *
     * @access public
     * @param {string} key          - The data key
     * @param {string} defaultValue - The default value
     * @returns {string}            - The data value
     */

  }, {
    key: "pull",
    value: function pull(key, defaultValue) {
      var value = this.get(key, defaultValue);

      delete this._data[key];
      this._setData();
      return value;
    }

    /**
     * Whether or not an item exists
     *
     * @access public
     * @param {string} key  - The data key
     * @returns {boolean}   - Whether or not item exists
     */

  }, {
    key: "has",
    value: function has(key) {
      this._getData();
      if (this._data[key] !== undefined) {
        return true;
      }
      return false;
    }

    /**
     * Set all items
     *
     * @access public
     * @param {object} data - Data object
     */

  }, {
    key: "populate",
    value: function populate(data) {
      this._data = data;
      this._setData();
    }

    /**
     * Retrieve all items
     *
     * @access public
     * @returns {object}  - All data
     */

  }, {
    key: "all",
    value: function all() {
      this._getData();
      return this._data;
    }

    /**
     * Append to current items
     *
     * @acess public
     * @param {object} data - Data to append
     */

  }, {
    key: "append",
    value: function append(data) {
      this._getData();
      this._data = this._extend(this._data, data);
      this._setData();
    }

    /**
     * Remove an item
     *
     * @access public
     * @param {string} key  - The data key
     */

  }, {
    key: "forget",
    value: function forget(key) {
      this._getData();
      delete this._data[key];
      this._setData();
    }

    /**
     * Remove all items
     *
     * @access public
     */

  }, {
    key: "flush",
    value: function flush() {
      this._data = {};
      this._setData();
    }

    /**
     * Get namespace
     *
     * @access public
     * @returns {string}  - The namespace
     */

  }, {
    key: "namespace",
    get: function get() {
      return this._namespace;
    }

    /**
     * Get storage type
     *
     * @access public
     * @returns {string}  - The storage type
     */

  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }]);

  return Storage;
}();