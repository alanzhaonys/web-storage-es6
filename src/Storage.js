export class Storage {
  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace    - The namespace of storage
   * @param {Object} storage      - The storage type
   */
  constructor(namespace, storage) {
    this._namespace = namespace;
    this._storage = storage;
  }

  /**
   * Save data to storage
   *
   * @access protected
   */
  _setData() {
    this._storage.setItem(this._namespace, JSON.stringify(this._data));
  }

  /**
   * Get data from storage
   *
   * @access protected
   */
  _getData() {
    this._data = JSON.parse(this._storage.getItem(this._namespace));
    if (!this._data) {
      this._data = {};
    }
  }

  /**
   * Merge two objects
   *
   * @access protected
   * @param {Object} obj      - Destination object
   * @param {Object} src      - Source object
   * @rturn {Object}          - Merged object
   */
  _extend(obj, src) {
    for (let key in src) {
      obj[key] = src[key];
    }
    return obj;
  }

  /**
   * Retrieve an item or return a default value
   *
   * @access public
   * @param {string} key      - The data key
   * @param {string} value    - The default value
   * @param {string|null}     - The data value
   */
  get(key, defaultValue = null) {
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
  put(key, value) {
    this._getData();
    this._data[key] = value;
    this._setData();
  }

  /**
   * Retrieve an item and forget it
   *
   * @access public
   * @param {string} key      - The data key
   * @param {string} value    - The default value
   * @return {string}         - The data value
   */
  pull(key, defaultValue) {
    var value = this.get(key, defaultValue);

    delete this._data[key];
    this._setData();
    return value;
  }

  /**
   * Whether or not an item exists
   *
   * @access public
   * @param {string} key      - The data key
   * @return {boolean}        - Whether or not item exists
   */
  has(key) {
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
   * @param {Object} data      - Data object
   */
  populate(data) {
    this._data = data;
    this._setData();
  }

  /**
   * Retrieve all items
   *
   * @access public
   * @return {Object}         - All data
   */
  all() {
    this._getData();
    return this._data;
  }

  /**
   * Append to current items
   *
   * @acess public
   * @param {Object} data     - Data to append
   */
  append(data) {
    this._getData();
    this._data = this._extend(this._data, data);
    this._setData();
  }

  /**
   * Remove an item
   *
   * @access public
   * @param {string} key      - The data key
   */
  forget(key) {
    this._getData();
    delete this._data[key];
    this._setData();
  }

  /**
   * Remove all items
   *
   * @access public
   */
  flush() {
    this._data = {};
    this._setData();
  }

  /**
   * Get namespace
   *
   * @access public
   * @return {string}        - The namespace
   */
  get namespace() {
    return this._namespace;
  }

  /**
   * Get storage type
   *
   * @access public
   * @return {string}         - The storage type
   */
  get type() {
    return this._type;
  }
}
