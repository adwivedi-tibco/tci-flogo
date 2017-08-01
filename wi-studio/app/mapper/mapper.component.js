"use strict";var __decorate=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core");require("rxjs/add/operator/auditTime"),require("rxjs/add/operator/catch"),require("rxjs/add/operator/debounceTime"),require("rxjs/add/operator/distinctUntilChanged"),require("rxjs/add/operator/do"),require("rxjs/add/operator/map"),require("rxjs/add/operator/share"),require("rxjs/add/operator/takeUntil"),require("rxjs/add/operator/withLatestFrom");var single_emission_subject_1=require("./shared/single-emission-subject"),mapper_service_1=require("./mapper.service"),editor_service_1=require("./editor/editor.service"),dragging_service_1=require("./tree/dragging.service"),MapperComponent=function(){function e(e,t,r){this.mapperService=e,this.editorService=t,this.draggingService=r,this.mappingsChange=new core_1.EventEmitter,this.currentInput=null,this.isDraggingOver=!1,this.dragOverEditor=new core_1.EventEmitter,this.ngDestroy=single_emission_subject_1.SingleEmissionSubject.create()}return e.prototype.ngOnInit=function(){var e=this,t=this.mapperService.state.catch(function(e){throw e}).share();t.map(function(e){return e.currentSelection}).distinctUntilChanged().takeUntil(this.ngDestroy).subscribe(function(t){e.currentInput=t,e.currentInput&&e.editorService.changeContext(e.currentInput.expression)}),t.map(function(e){return e.currentSelection?e.currentSelection.errors:null}).distinctUntilChanged().takeUntil(this.ngDestroy).subscribe(function(t){e.currentInput&&e.editorService.validated(t)}),t.scan(function(e,t){var r=!1,i=e.prevNode,n=t.currentSelection||{};return n.node&&n.node!==e.prevNode&&(r=!0,i=n.node),{state:t,prevNode:i,nodeChanged:r}},{state:null,prevNode:null,nodeChanged:!1}).skipWhile(function(e){var t=e.state;return e.nodeChanged||!t||!t.currentSelection||!t.currentSelection.node}).map(function(e){return e.state.currentSelection.expression}).distinctUntilChanged().withLatestFrom(t,function(e,t){return t}).map(function(e){return{mappings:e.mappings,getMappings:function(){return this.mappings}}}).takeUntil(this.ngDestroy).do(function(e){}).subscribe(this.mappingsChange),this.editorService.outputExpression$.takeUntil(this.ngDestroy).subscribe(function(t){return e.mapperService.expressionChange(t)}),this.dragOverEditor.debounceTime(300).map(function(e){return{x:e.clientX,y:e.clientY}}).distinctUntilChanged(function(e,t){return e.x===t.x&&e.y===t.y}).subscribe(function(t){return e.editorService.dragOver(t)}),this.mapperService.setContext(this.context)},e.prototype.ngOnDestroy=function(){this.ngDestroy.emitAndComplete()},e.prototype.onDrop=function(e){if(this.isDragAcceptable()){e.dataTransfer.getData("data");var t=this.draggingService.getData(),r=this.draggingService.getType(),i="",n={x:e.clientX,y:e.clientY};r===dragging_service_1.TYPE_PARAM_OUTPUT?i=t.snippet:r===dragging_service_1.TYPE_PARAM_FUNCTION&&t.data&&(i=t.data.snippet),this.editorService.insertText(i,n),this.onDragLeave(),e.preventDefault(),e.stopPropagation()}},e.prototype.onDragOver=function(e){this.isDragAcceptable()&&(this.dragOverEditor.emit(e),e.dataTransfer.dropEffect="copy",e.preventDefault())},e.prototype.onOutputSelected=function(e){this.editorService.insertText(e.path)},e.prototype.onDragEnter=function(e){this.isDraggingOver=!0},e.prototype.onDragLeave=function(e){this.isDraggingOver=!1},e.prototype.onClickOutside=function(){this.currentInput&&this.mapperService.selectInput(null)},e.prototype.isDragAcceptable=function(){return this.draggingService.accepts(dragging_service_1.TYPE_PARAM_OUTPUT)||this.draggingService.accepts(dragging_service_1.TYPE_PARAM_FUNCTION)},e}();__decorate([core_1.Input(),__metadata("design:type",Object)],MapperComponent.prototype,"context",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],MapperComponent.prototype,"mappingsChange",void 0),MapperComponent=__decorate([core_1.Component({selector:"tibco-mapper",moduleId:module.id,templateUrl:"mapper.component.html",styleUrls:["mapper.component.css"],providers:[mapper_service_1.MapperService,editor_service_1.EditorService,dragging_service_1.DraggingService]}),__metadata("design:paramtypes",[mapper_service_1.MapperService,editor_service_1.EditorService,dragging_service_1.DraggingService])],MapperComponent),exports.MapperComponent=MapperComponent;