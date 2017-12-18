# WORK IN PROGRESS - PLEASE COME BACK SOON
# Web Storage ES6 [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

## Quick Overview
* Local - A type of *localStorage*. Data persists until explicitly deleted by user. It has no expiration date
* Session - A type of *sessionStorage*. Data lasts for as long as the browser is open and survives over page reloads
* Global - Stores data in the global *window* variable. Data only lasts inside a single page session and will be destroyed upon page reload

### Installation
`npm install --save web-storage-es6`

### Code
```
const WebStorageES6 = require('web-storage-es6');

// 'default' namespace
var local = new WebStorageES6('Local');
local.set('var1', 'value1');

// 'custom' namespace
var customStorage = new WebStorageES6('Local', 'custom');
customStorage.set('var1', 'value1');
```

## License
MIT - See included LICENSE.md

[travis-url]: https://travis-ci.org/alanzhaonys/web-storage-es6
[travis-image]: https://travis-ci.org/alanzhaonys/web-storage-es6.svg?branch=master

[coveralls-url]: https://coveralls.io/github/alanzhaonys/web-storage-es6?branch=master
[coveralls-image]: https://coveralls.io/repos/github/alanzhaonys/web-storage-es6/badge.svg?branch=master
