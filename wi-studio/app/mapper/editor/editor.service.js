"use strict";var __decorate=this&&this.__decorate||function(e,t,r,i){var o,s=arguments.length,c=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),ReplaySubject_1=require("rxjs/ReplaySubject"),Subject_1=require("rxjs/Subject");require("rxjs/add/observable/of"),require("rxjs/add/observable/zip"),require("rxjs/add/operator/combineLatest"),require("rxjs/add/operator/distinctUntilChanged"),require("rxjs/add/operator/first"),require("rxjs/add/operator/map"),require("rxjs/add/operator/switchMap"),require("rxjs/add/operator/withLatestFrom");var EditorService=function(){function e(){this.contextSrc=new ReplaySubject_1.ReplaySubject(1),this.insertSrc=new Subject_1.Subject,this.expressionSrc=new Subject_1.Subject,this.validationSrc=new ReplaySubject_1.ReplaySubject(1),this.dragOverSrc=new Subject_1.Subject,this.context$=this.contextSrc.asObservable(),this.insert$=this.insertSrc.asObservable(),this.dragOver$=this.dragOverSrc.asObservable(),this.validate$=this.validationSrc.asObservable(),this.outputExpression$=this.expressionSrc.asObservable()}return e.prototype.changeContext=function(e){this.contextSrc.next({expression:e})},e.prototype.insertText=function(e,t){this.insertSrc.next({text:e,replaceTokenAtPosition:t})},e.prototype.dragOver=function(e){this.dragOverSrc.next(e)},e.prototype.outputExpression=function(e){this.expressionSrc.next(e)},e.prototype.validated=function(e){this.validationSrc.next(e)},e}();EditorService=__decorate([core_1.Injectable()],EditorService),exports.EditorService=EditorService;