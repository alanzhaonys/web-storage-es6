import {
  Storage
} from './Storage';

export class Global extends Storage {
  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace    - The namespace of storage
   */
  constructor(namespace = 'default') {
    super(namespace, null);
    this._type = 'Global';
    if (typeof window === 'undefined') {
      // Good for unit testing only, not a true global variable
      this._global = {};
    } else {
      this._global = window;
    }
  }

  /**
   * Save data to global variable
   *
   * @access protected
   */
  _setData() {
    this._global[this._namespace] = this._data;
  }

  /**
   * Get data from global variable
   *
   * @access protected
   */
  _getData() {
    this._data = this._global[this._namespace];
    if (!this._data) {
      this._data = {};
    }
  }
}
