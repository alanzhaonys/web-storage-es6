# Web Storage ES6 [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

This is a library written in ES6. It provides an abstraction layer for using the HTML5 web storages, `localStorage` and `sessionStorage`. On top of utilizing these `Storage` types, a `Global` storage is introduced for temporary data storage.

## Installation
`npm install --save web-storage-es6`

## Usage Summary

### Overview
* *Local* - A type of `localStorage`. Data persists until explicitly deleted by user. It has no expiration date
* *Session* - A type of `sessionStorage`. Data lasts for as long as the browser is open and survives over page reloads
* *Global* - Stores data in the global `window` variable. Data only lasts inside a single page session and will be destroyed upon page reload

### Code

```
// Include library
const WebStorageES6 = require('web-storage-es6');

// Create a local storage with 'default' namespace
var localStorage = new WebStorageES6('Local');

// Create a session storage with 'default' namespace
var sessionStorage = new WebStorageES6('Session');

// Create a global storage with 'custom' namespace
var customGlobalStorage = new WebStorageES6('Global', 'custom');

// Sets 'var1' to 'value1'
localStorage.put('var1', 'value1');

// Gets 'var1'
localStorage.get('var1');

// Gets 'var1'. If 'var1' is not set, return 'default value'
localStorage.get('var1', 'default value');

// Checks if 'var1' exists
localStorage.has('var1');

// Removes 'var1' from storage
localStorage.forget('var1');
```

### Don'ts
```
// Writing to storage is slow if you need to save repetitive data in loops
for (let i = 0; i < 100; i++) {
  storage.put('var' + i, i);
}
```

### Dos
```
// Create data first
var data = {};

for (let i = 0; i < 100; i++) {
  data['var' + i] = i;
}

// Write at once
storage.populate(data);

// or append to existing data
storage.append(data);
```

## API

<a name="Storage"></a>

## Storage
**Kind**: global class  
**Access**: public  

* [Storage](#Storage)
    * [new Storage(namespace, storage)](#new_Storage_new)
    * [.namespace](#Storage+namespace) ⇒ <code>string</code>
    * [.type](#Storage+type) ⇒ <code>string</code>
    * [._setData()](#Storage+_setData)
    * [._getData()](#Storage+_getData)
    * [._extend(obj, src)](#Storage+_extend)
    * [.get(key, defaultValue)](#Storage+get)
    * [.put(key, value)](#Storage+put)
    * [.pull(key, defaultValue)](#Storage+pull) ⇒ <code>string</code>
    * [.has(key)](#Storage+has) ⇒ <code>boolean</code>
    * [.populate(data)](#Storage+populate)
    * [.all()](#Storage+all) ⇒ <code>Object</code>
    * [.append(data)](#Storage+append)
    * [.forget(key)](#Storage+forget)
    * [.flush()](#Storage+flush)

<a name="new_Storage_new"></a>

### new Storage(namespace, storage)
Constructor


| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | The namespace of storage |
| storage | <code>Object</code> | The storage type |

<a name="Storage+namespace"></a>

### storage.namespace ⇒ <code>string</code>
Get namespace

**Kind**: instance property of [<code>Storage</code>](#Storage)  
**Returns**: <code>string</code> - - The namespace  
**Access**: public  
<a name="Storage+type"></a>

### storage.type ⇒ <code>string</code>
Get storage type

**Kind**: instance property of [<code>Storage</code>](#Storage)  
**Returns**: <code>string</code> - - The storage type  
**Access**: public  
<a name="Storage+_setData"></a>

### storage._setData()
Save data to storage

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Access**: protected  
<a name="Storage+_getData"></a>

### storage._getData()
Get data from storage

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Access**: protected  
<a name="Storage+_extend"></a>

### storage._extend(obj, src)
Merge two objects

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Access**: protected  
**Returns**: <code>Object</code>          - Merged object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Destination object |
| src | <code>Object</code> | Source object |

<a name="Storage+get"></a>

### storage.get(key, defaultValue)
Retrieve an item or return a default value

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>string</code> |  | The data key |
| defaultValue | <code>string</code> | <code>null</code> | The default value |
|  | <code>string</code> \| <code>null</code> |  | The data value |

<a name="Storage+put"></a>

### storage.put(key, value)
Store an item

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The data key |
| value | <code>string</code> | The data value |

<a name="Storage+pull"></a>

### storage.pull(key, defaultValue) ⇒ <code>string</code>
Retrieve an item and forget it

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>string</code> - - The data value  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The data key |
| defaultValue | <code>string</code> | The default value |

<a name="Storage+has"></a>

### storage.has(key) ⇒ <code>boolean</code>
Whether or not an item exists

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>boolean</code> - - Whether or not item exists  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The data key |

<a name="Storage+populate"></a>

### storage.populate(data)
Set all items

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data object |

<a name="Storage+all"></a>

### storage.all() ⇒ <code>Object</code>
Retrieve all items

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>Object</code> - - All data  
**Access**: public  
<a name="Storage+append"></a>

### storage.append(data)
Append to current items

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Acess**: public  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data to append |

<a name="Storage+forget"></a>

### storage.forget(key)
Remove an item

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The data key |

<a name="Storage+flush"></a>

### storage.flush()
Remove all items

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Access**: public  


## License
MIT - See included LICENSE.md

[travis-url]: https://travis-ci.org/alanzhaonys/web-storage-es6
[travis-image]: https://travis-ci.org/alanzhaonys/web-storage-es6.svg?branch=master

[coveralls-url]: https://coveralls.io/github/alanzhaonys/web-storage-es6?branch=master
[coveralls-image]: https://coveralls.io/repos/github/alanzhaonys/web-storage-es6/badge.svg?branch=master
