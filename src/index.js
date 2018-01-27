import {
  Local
} from './Local';
import {
  Session
} from './Session';
import {
  Global
} from './Global';

class WebStorageES6 {
  /**
   * Constructor
   *
   * @constructor
   * @access public
   * @param {string} storageType      - The storage type
   * @param {string} namespace        - The storage namespace
   * @param {Object} storageOverride  - Provide a custom storage object, useful for testing
   * @return {Object}                 - The storage object
   */
  constructor(storageType, namespace = 'default', storageOverride = null) {
    var storage = null;

    switch (storageType.toLowerCase()) {
      case 'local':
        storage = new Local(namespace, storageOverride);
        break;
      case 'session':
        storage = new Session(namespace, storageOverride);
        break;
      case 'global':
        storage = new Global(namespace);
        break;
    }
    return storage;
  }
}

module.exports = WebStorageES6;
