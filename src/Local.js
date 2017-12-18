import {
  Storage
} from './Storage';

export class Local extends Storage {
  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace    - The namespace of storage
   * @param {Object} storage      - The storage, allows injection
   */
  constructor(namespace = 'default', storage = localStorage) {
    super(namespace, storage);
    this._type = 'Local';
  }
}
