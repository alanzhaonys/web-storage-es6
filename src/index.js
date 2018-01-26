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
   * @return {Object}                 - The storage object
   */
  constructor(storageType, namespace = 'default') {
    var storage = null;

    switch (storageType.toLowerCase()) {
      case 'local':
        storage = new Local(namespace);
        break;
      case 'session':
        storage = new Session(namespace);
        break;
      case 'global':
        storage = new Global(namespace);
        break;
    }
    return storage;
  }
}

module.exports = WebStorageES6;
