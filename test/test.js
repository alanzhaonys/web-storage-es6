'use strict';

const WebStorageES6 = require('../dist/index');

var expect = require('chai').expect;

// Mock storages
var localStorage = storageMock();
var sessionStorage = storageMock();
var globalStorage = storageMock();

describe('WebStorageES6', function() {
  it('creates a session storage', function() {
    var type = 'session';
    var session = new WebStorageES6(type, 'default', sessionStorage);
    expect(session.type.toLowerCase()).to.equal(type);
    session.flush();
  });

  it('creates a local storage', function() {
    var type = 'local';
    var local = new WebStorageES6(type, 'default', localStorage);
    expect(local.type.toLowerCase()).to.equal(type);
    local.flush();
  });

  it('creates a global storage', function() {
    var type = 'global';
    var global = new WebStorageES6(type, 'default', globalStorage);
    expect(global.type.toLowerCase()).to.equal(type);
    global.flush();
  });

  it('sets/gets data', function() {
    var local = new WebStorageES6('local', 'default', localStorage);
    local.put('test1', 'value1');
    local.put('test2', null);
    expect(local.get('test1')).to.equal('value1');
    expect(local.get('test2')).to.equal(null);
    expect(local.get('test2', 'value2-default')).to.equal('value2-default');
    local.flush();
  });

  it('pulls data', function() {
    var local = new WebStorageES6('local', 'default', localStorage);
    local.put('test1', 'value1');
    local.put('test2', null);
    expect(local.pull('test1')).to.equal('value1');
    expect(local.pull('test2', 'value2-default')).to.equal('value2-default');
    expect(local.get('test1')).to.equal(null);
    expect(local.get('test2')).to.equal(null);
    local.flush();
  });

  it('checks data existence', function() {
    var local = new WebStorageES6('local', 'default', localStorage);
    local.put('test1', 'value1');
    expect(local.has('test1')).to.equal(true);
    expect(local.has('test2')).to.equal(false);
    local.flush();
  });

  it('populates data', function() {
    var local = new WebStorageES6('local', 'default', localStorage);
    var data = {
      test1: 'value1',
      test2: 'value2',
      test3: 'value3'
    }
    var dataCopy = Object.assign({}, data);
    local.populate(data);
    expect(local.all()).to.deep.equal(dataCopy);
    local.flush();
  });

  it('appends data', function() {
    var local = new WebStorageES6('local', 'custom', localStorage);
    var data1 = {
      test1: 'value1',
      test2: 'value2',
      test3: 'value3'
    }
    var data2 = {
      test4: 'value4',
      test5: 'value5',
      test6: 'value6'
    }
    var merged = Object.assign({}, data1, data2);
    local.populate(data1);
    local.append(data2);
    expect(local.all()).to.deep.equal(merged);
    local.flush();
  });

  it('forgets data', function() {
    var local = new WebStorageES6('local', 'default', localStorage);
    local.put('test1', 'value1');
    local.forget('test1');
    expect(local.get('test1')).to.equal(null);
    expect(local.has('test21')).to.equal(false);
    local.flush();
  });

  it('removes all data', function() {
    var local = new WebStorageES6('local', 'default', localStorage);
    var data = {
      test1: 'value1',
      test2: 'value2',
      test3: 'value3'
    }
    local.populate(data);
    local.flush();
    expect(local.all()).to.deep.equal({});
  });

  it('creates a custom namespace', function() {
    var local = new WebStorageES6('local', 'custom', localStorage);
    expect(local.namespace).to.equal('custom');
    local.flush();
  });
});

// Storage Mock - https://stackoverflow.com/questions/11485420/how-to-mock-localstorage-in-javascript-unit-tests
function storageMock() {
  var storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}
