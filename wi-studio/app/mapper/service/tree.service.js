"use strict";var __decorate=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),addClass=function(e,t){-1===e.indexOf(t)&&e.unshift(t)},removeClass=function(e,t){var r=e.indexOf(t);r>-1&&e.splice(r,1)},CLASSES={selected:"node--is-selected",hasMapping:"node--has-expression",visible:"node--visible",isFilterMatch:"node--is-filter-match"},TreeService=function(){function e(){}return e.prototype.selectNode=function(e,t){var r=this,i=new function(){this.visitNode=function(e){var r=(e.styleClass||"").trim().split(" "),i=CLASSES.selected;e.path===t?addClass(r,i):removeClass(r,i),e.styleClass=r.join(" ")}};return e.forEach(function(e){return r.visitChildren(e,i)}),e},e.prototype.traverseChildren=function(e,t){var r=this;e.children&&e.children.length&&e.children.forEach(function(e){t(e),r.traverseChildren(e,t)})},e.prototype.applyFilter=function(e,t,r){var i=this;void 0===t&&(t=null),void 0===r&&(r=null);var n=t?t.toLowerCase():t,a=function(e){var r=e&&e.label?e.label.toLowerCase():e.label;return n&&-1!==r.indexOf(t)};return e.forEach(function(e){return i.applyFilterToNode(e,a,r)}),e},e.prototype.extractArrayParents=function(e){var t=[];return this.traverseParents(e,function(e){"array"===e.dataType&&t.unshift(e)}),t},e.prototype.updateTreeMappingStatus=function(e){var t=this,r=this.isMappedNode(e),i=!1;e.children&&(i=e.children.reduce(function(e,r){return t.updateTreeMappingStatus(r)||e},!1));var n=r||i;return this.updateStyleClass(e,(a={},a[CLASSES.hasMapping]=n,a)),n;var a},e.prototype.propagateMappingStatusToParents=function(e,t){var r=this;void 0===t&&(t=!1);var i=this.isMappedNode(e)||t;!i&&e.children&&(i=e.children.some(function(e){return r.isMappedNode(e)})),this.updateStyleClass(e,(n={},n[CLASSES.hasMapping]=i,n)),e.parent&&this.propagateMappingStatusToParents(e.parent,i);var n},e.prototype.applyFilterToNode=function(e,t,r){var i=this;void 0===r&&(r=null);var n=t(e),a=!1;e.children&&(a=e.children.reduce(function(e,n){return i.applyFilterToNode(n,t,r)||e},!1));var o=n||a||e.path===r;return e.expanded=o,e.isVisible=o,this.updateStyleClass(e,(s={},s[CLASSES.visible]=o,s[CLASSES.isFilterMatch]=n,s)),o;var s},e.prototype.isMappedNode=function(e){if(!e||!e.data)return!1;var t=e.data.expression;return t&&t.trim()},e.prototype.updateStyleClass=function(e,t){var r=(e.styleClass||"").trim().split(" ");Object.keys(t).forEach(function(e){t[e]?addClass(r,e):removeClass(r,e)}),e.styleClass=r.join(" ")},e.prototype.visitChildren=function(e,t){var r=this;return t&&t.visitNode&&t.visitNode(e),e.children&&e.children.length&&e.children.forEach(function(i){var n=r.visitChildren(i,t);t&&t.visitNodeStack&&t.visitNodeStack({stackNode:e,childrenResult:n})}),e},e.prototype.traverseParents=function(e,t){for(var r=e?e.parent:null;r;)t(r),r=r.parent},e}();TreeService=__decorate([core_1.Injectable()],TreeService),exports.TreeService=TreeService;