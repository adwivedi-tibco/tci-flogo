"use strict";var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Subject_1=require("rxjs/Subject"),SingleEmissionSubject=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.create=function(){return new e},e.prototype.emitAndComplete=function(){this.next(),this.complete()},e}(Subject_1.Subject);exports.SingleEmissionSubject=SingleEmissionSubject;