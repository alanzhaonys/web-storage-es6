'use strict';

var StorageMock = function StorageMock() {
  var storage = {};

  return {
    setItem: function setItem(key, value) {
      storage[key] = value || '';
    },
    getItem: function getItem(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function key(i) {
      var keys = Object.keys(storage);

      return keys[i] || null;
    }
  };
};

module.exports = StorageMock;