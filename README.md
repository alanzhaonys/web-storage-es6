# WORK IN PROGRESS - PLEASE COME BACK SOON
# Web Storage ES6 [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

This is a library written in ES6. It provides an abstraction layer for using the HTML5 web storages, `localStorage` and `sessionStorage`. On top of the utilizing the standard `Storage` types, a `Global` storage is introduced for temporary data storage.

## Quick Overview
* *Local* - A type of `localStorage`. Data persists until explicitly deleted by user. It has no expiration date
* *Session* - A type of `sessionStorage`. Data lasts for as long as the browser is open and survives over page reloads
* *Global* - Stores data in the global `window` variable. Data only lasts inside a single page session and will be destroyed upon page reload

### Installation
`npm install --save web-storage-es6`

### Usage Summary
```
const WebStorageES6 = require('web-storage-es6');

// Create a local storage with 'default' namespace
var localStorage = new WebStorageES6('Local');

// Create a session storage with 'default' namespace
var sessionStorage = new WebStorageES6('Session');

// Create a global storage with 'custom' namespace
var customGlobalStorage = new WebStorageES6('Global', 'custom');

// Sets `var1` to `value1`
localStorage.set('var1', 'value1');

// Checks if `var1` exists
localStorage.has('var1');

// Removes `var1` from storage
localStorage.forget('var1');
```

## License
MIT - See included LICENSE.md

[travis-url]: https://travis-ci.org/alanzhaonys/web-storage-es6
[travis-image]: https://travis-ci.org/alanzhaonys/web-storage-es6.svg?branch=master

[coveralls-url]: https://coveralls.io/github/alanzhaonys/web-storage-es6?branch=master
[coveralls-image]: https://coveralls.io/repos/github/alanzhaonys/web-storage-es6/badge.svg?branch=master
