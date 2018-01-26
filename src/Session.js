import {
  Storage
} from './Storage';

const storageMock = require('./StorageMock');

export class Session extends Storage {
  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} namespace    - The namespace of storage
   */
  constructor(namespace = 'default') {
    let storage = null;

    if (typeof sessionStorage === 'undefined') {
      storage = storageMock();
    } else {
      storage = sessionStorage;
    }

    super(namespace, storage);
    this._type = 'Session';
  }
}
