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
   * @param {string} namespace        - The namespace of storage
   * @param {Object} storageOverride  - Provide a custom storage object, useful for testing
   */
  constructor(namespace = 'default', storageOverride = null) {
    let storage = null;

    if (storageOverride) {
      storage = storageOverride;
    } else {
      if (typeof localStorage === 'undefined') {
        // Use a fallback storage if localStorage is not available
        storage = storageMock();
      } else {
        storage = localStorage;
      }
    }

    super(namespace, storage);
    this._type = 'Local';
  }
}
