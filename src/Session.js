import {
  Storage
} from './Storage';

export class Session extends Storage {
  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace    - The namespace of storage
   * @param {Object} storage      - The storage, allows injection
   */
  constructor(namespace = 'default', storage = sessionStorage) {
    super(namespace, storage);
    this._type = 'Session';
  }
}
