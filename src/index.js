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
   * @return {Object}                 - The mock storage object, used for testing in headless environment
   */
  constructor(storageType, namespace = 'default', injectedStorage = null) {
    var storage = null;

    switch (storageType.toLowerCase()) {
      case 'local':
        if (injectedStorage) {
          storage = new Local(namespace, injectedStorage);
        } else {
          storage = new Local(namespace);
        }
        break;
      case 'session':
        if (injectedStorage) {
          storage = new Session(namespace, injectedStorage);
        } else {
          storage = new Session(namespace);
        }
        break;
      case 'global':
        storage = new Global(namespace);
        break;
    }
    return storage;
  }
}

module.exports = WebStorageES6;
