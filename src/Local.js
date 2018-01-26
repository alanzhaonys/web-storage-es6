import {
  Storage
} from './Storage';

const storageMock = require('./StorageMock');

export class Local extends Storage {
  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace    - The namespace of storage
   */
  constructor(namespace = 'default') {
    let storage = null;

    if (typeof localStorage === 'undefined') {
      storage = storageMock();
    } else {
      storage = localStorage;
    }

    super(namespace, storage);
    this._type = 'Local';
  }
}
