!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.Storage=function(){function t(e,n){o(this,t),this._namespace=e,this._storage=n}return r(t,[{key:"_setData",value:function(){this._storage.setItem(this._namespace,JSON.stringify(this._data))}},{key:"_getData",value:function(){this._data=JSON.parse(this._storage.getItem(this._namespace)),this._data||(this._data={})}},{key:"_extend",value:function(t,e){for(var n in e)t[n]=e[n];return t}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this._getData(),this._data[t]||(e||null)}},{key:"put",value:function(t,e){this._getData(),this._data[t]=e,this._setData()}},{key:"pull",value:function(t,e){var n=this.get(t,e);return delete this._data[t],this._setData(),n}},{key:"has",value:function(t){return this._getData(),void 0!==this._data[t]}},{key:"populate",value:function(t){this._data=t,this._setData()}},{key:"all",value:function(){return this._getData(),this._data}},{key:"append",value:function(t){this._getData(),this._data=this._extend(this._data,t),this._setData()}},{key:"forget",value:function(t){this._getData(),delete this._data[t],this._setData()}},{key:"flush",value:function(){this._data={},this._setData()}},{key:"namespace",get:function(){return this._namespace}},{key:"type",get:function(){return this._type}}]),t}()},function(t,e,n){"use strict";var o=function(){var t={};return{setItem:function(e,n){t[e]=n||""},getItem:function(e){return e in t?t[e]:null},removeItem:function(e){delete t[e]},get length(){return Object.keys(t).length},key:function(e){return Object.keys(t)[e]||null}}};t.exports=o},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(3),a=n(4),i=n(5),u=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";o(this,t);var u=null;switch(e.toLowerCase()){case"local":u=new r.Local(n);break;case"session":u=new a.Session(n);break;case"global":u=new i.Global(n)}return u};t.exports=u},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Local=void 0;var i=n(0),u=n(1);e.Local=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";o(this,e);var n=null;n="undefined"==typeof localStorage?u():localStorage;var a=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return a._type="Local",a}return a(e,t),e}(i.Storage)},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Session=void 0;var i=n(0),u=n(1);e.Session=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";o(this,e);var n=null;n="undefined"==typeof sessionStorage?u():sessionStorage;var a=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return a._type="Session",a}return a(e,t),e}(i.Storage)},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Global=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(0);e.Global=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,null));return n._type="Global","undefined"==typeof window?n._global={}:n._global=window,n}return a(e,t),i(e,[{key:"_setData",value:function(){this._global[this._namespace]=this._data}},{key:"_getData",value:function(){this._data=this._global[this._namespace],this._data||(this._data={})}}]),e}(u.Storage)}])});