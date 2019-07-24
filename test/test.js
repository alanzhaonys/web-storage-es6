'use strict';

const WebStorageES6 = require('../src/index');

var expect = require('chai').expect;

describe('WebStorageES6', function() {
  it('creates a session storage', function() {
    var type = 'session';
    var session = new WebStorageES6(type, 'default');
    expect(session.type.toLowerCase()).to.equal(type);
    session.flush();
  });

  it('creates a local storage', function() {
    var type = 'local';
    var local = new WebStorageES6(type, 'default');
    expect(local.type.toLowerCase()).to.equal(type);
    local.flush();
  });

  it('creates a global storage', function() {
    var type = 'global';
    var global = new WebStorageES6(type, 'default');
    expect(global.type.toLowerCase()).to.equal(type);
    global.flush();
  });

  it('sets/gets data', function() {
    var local = new WebStorageES6('local', 'default');
    local.put('test1', 'value1');
    local.put('test2', null);
    expect(local.get('test1')).to.equal('value1');
    expect(local.get('test2')).to.equal(null);
    expect(local.get('test2', 'value2-default')).to.equal('value2-default');
    local.flush();
  });

  it('pulls data', function() {
    var local = new WebStorageES6('local', 'default');
    local.put('test1', 'value1');
    local.put('test2', null);
    expect(local.pull('test1')).to.equal('value1');
    expect(local.pull('test2', 'value2-default')).to.equal('value2-default');
    expect(local.get('test1')).to.equal(null);
    expect(local.get('test2')).to.equal(null);
    local.flush();
  });

  it('checks data existence', function() {
    var local = new WebStorageES6('local', 'default');
    local.put('test1', 'value1');
    expect(local.has('test1')).to.equal(true);
    expect(local.has('test2')).to.equal(false);
    local.flush();
  });

  it('populates data', function() {
    var local = new WebStorageES6('local', 'default');
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
    var local = new WebStorageES6('local', 'custom');
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
    var local = new WebStorageES6('local', 'default');
    local.put('test1', 'value1');
    local.forget('test1');
    expect(local.get('test1')).to.equal(null);
    expect(local.has('test21')).to.equal(false);
    local.flush();
  });

  it('removes all data', function() {
    var local = new WebStorageES6('local', 'default');
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
    var local = new WebStorageES6('local', 'custom');
    expect(local.namespace).to.equal('custom');
    local.flush();
  });
});
