!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueVirtualScroller=factory():root.VueVirtualScroller=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=11)}([function(module,exports,__webpack_require__){(function(module){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};!function(root,factory){"object"==_typeof2(exports)&&"object"==_typeof2(module)?module.exports=factory():(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports,__webpack_require__){"use strict";function throwValueError(value){if("function"!=typeof value)throw new Error("observer-visible directive expects a function as the value")}exports.a={bind:function(el,_ref,vnode){var value=_ref.value;"undefined"==typeof IntersectionObserver?console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill"):!function(){throwValueError(value),el._vue_visibilityCallback=value;var observer=el._vue_intersectionObserver=new IntersectionObserver(function(entries){var entry=entries[0];el._vue_visibilityCallback(entry.intersectionRatio>0)});vnode.context.$nextTick(function(){observer.observe(el)})}()},update:function(el,_ref2){var value=_ref2.value;throwValueError(value),el._vue_visibilityCallback=value},unbind:function(el){el._vue_intersectionObserver&&(el._vue_intersectionObserver.disconnect(),delete el._vue_intersectionObserver,delete el._vue_visibilityCallback)}}},function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(obj){return"undefined"==typeof obj?"undefined":_typeof2(obj)}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":"undefined"==typeof obj?"undefined":_typeof2(obj)};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){"use strict";(function(global){function install(Vue){Vue.directive("observe-visibility",__WEBPACK_IMPORTED_MODULE_0__directives_observe_visibility__.a)}var __WEBPACK_IMPORTED_MODULE_0__directives_observe_visibility__=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__.d(exports,"ObserveVisibility",function(){return __WEBPACK_IMPORTED_MODULE_0__directives_observe_visibility__.a}),exports.install=install;var plugin={version:"0.1.1",install:install};exports.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}).call(exports,__webpack_require__(1))}])})}).call(exports,__webpack_require__(2)(module))},function(module,exports,__webpack_require__){(function(module){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};!function(root,factory){"object"==_typeof(exports)&&"object"==_typeof(module)?module.exports=factory():(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports,__webpack_require__){var __vue_exports__,__vue_options__;__webpack_require__(2),__vue_exports__=__webpack_require__(1);var __vue_template__=__webpack_require__(3);__vue_options__=__vue_exports__=__vue_exports__||{},"object"!=_typeof(__vue_exports__.default)&&"function"!=typeof __vue_exports__.default||(__vue_options__=__vue_exports__=__vue_exports__.default),"function"==typeof __vue_options__&&(__vue_options__=__vue_options__.options),__vue_options__.render=__vue_template__.render,__vue_options__.staticRenderFns=__vue_template__.staticRenderFns,__vue_options__._scopeId="data-v-c7b3205a",module.exports=__vue_exports__},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"resize-observer",methods:{notify:function(){this.$emit("notify")},addResizeHandlers:function(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.notify)},removeResizeHandlers:function(){this._resizeObject&&this._resizeObject.onload&&(this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.notify),delete this._resizeObject.onload)}},mounted:function(){var isIE="Trident"===navigator.userAgent.match(/Trident/),object=document.createElement("object");this._resizeObject=object,object.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),object.onload=this.addResizeHandlers,object.type="text/html",isIE&&this.$el.appendChild(object),object.data="about:blank",isIE||this.$el.appendChild(object)},beforeDestroy:function(){this.removeResizeHandlers(),this.$el}}},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_c=(_vm.$createElement,_vm._c);return _c("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[]}},function(module,exports,__webpack_require__){"use strict";function install(Vue){Vue.component("resize-observer",__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default.a)}var __WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue__);Object.defineProperty(exports,"__esModule",{value:!0}),exports.install=install,__webpack_require__.d(exports,"ResizeObserver",function(){return ResizeObserver});var ResizeObserver=__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default.a;exports.default={version:"0.1.0",install:install}}])})}).call(exports,__webpack_require__(2)(module))},function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,configurable:!1,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,configurable:!1,get:function(){return module.i}}),module.webpackPolyfill=1),module}},function(module,exports,__webpack_require__){var __vue_exports__,__vue_options__;__webpack_require__(7),__vue_exports__=__webpack_require__(4);var __vue_template__=__webpack_require__(10);__vue_options__=__vue_exports__=__vue_exports__||{},"object"!=typeof __vue_exports__.default&&"function"!=typeof __vue_exports__.default||(__vue_options__=__vue_exports__=__vue_exports__.default),"function"==typeof __vue_options__&&(__vue_options__=__vue_options__.options),__vue_options__.render=__vue_template__.render,__vue_options__.staticRenderFns=__vue_template__.staticRenderFns,__vue_options__._scopeId="data-v-5594e8c4",module.exports=__vue_exports__},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_vue_resize__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_1_vue_observe_visibility__=__webpack_require__(5);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"virtual-scroller",components:{ResizeObserver:__WEBPACK_IMPORTED_MODULE_0_vue_resize__.ResizeObserver},directives:{ObserveVisibility:__WEBPACK_IMPORTED_MODULE_1_vue_observe_visibility__.ObserveVisibility},props:{items:{type:Array,required:!0},renderers:{default:null},itemHeight:{type:[Number,String],required:!0},typeField:{type:String,default:"type"},keyField:{type:String,default:"id"},mainTag:{type:String,default:"div"},containerTag:{type:String,default:"div"},contentTag:{type:String,default:"div"}},data:function(){return{visibleItems:[],itemContainerStyle:null,itemsStyle:null}},watch:{items:function(){this.updateVisibleItems()}},methods:{updateVisibleItems:function(){var l=this.items.length,el=this.$el,scroll={top:el.scrollTop,bottom:el.scrollTop+el.clientHeight};this._startIndex=Math.floor(scroll.top/this.itemHeight),this._endIndex=Math.ceil(scroll.bottom/this.itemHeight);var startIndex=this._startIndex-1;startIndex<0&&(startIndex=0);var endIndex=this._endIndex+2;endIndex>l&&(endIndex=l),this.visibleItems=this.items.slice(startIndex,endIndex),this.itemContainerStyle={height:l*this.itemHeight+"px"},this.itemsStyle={marginTop:startIndex*this.itemHeight+"px"},this.$forceUpdate()},scrollToItem:function(index){this.$el.scrollTop=index*this.itemHeight},handleVisibilityChange:function(isVisible){isVisible&&this.updateVisibleItems()}},mounted:function(){this.updateVisibleItems()}}},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__dist_vue_observe_visibility__=__webpack_require__(0);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_vue_observe_visibility__);__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__dist_vue_observe_visibility__,"ObserveVisibility")&&__webpack_require__.d(exports,"ObserveVisibility",function(){return __WEBPACK_IMPORTED_MODULE_0__dist_vue_observe_visibility__.ObserveVisibility});var __WEBPACK_IMPORTED_MODULE_1__dist_vue_observe_visibility_css__=__webpack_require__(8);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_vue_observe_visibility_css__)},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__dist_vue_resize__=__webpack_require__(1);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_vue_resize__);__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__dist_vue_resize__,"ResizeObserver")&&__webpack_require__.d(exports,"ResizeObserver",function(){return __WEBPACK_IMPORTED_MODULE_0__dist_vue_resize__.ResizeObserver});var __WEBPACK_IMPORTED_MODULE_1__dist_vue_resize_css__=__webpack_require__(9);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_vue_resize_css__)},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_c=(_vm.$createElement,_vm._c);return _c(_vm.mainTag,{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:_vm.handleVisibilityChange,expression:"handleVisibilityChange"}],tag:"component",staticClass:"virtual-scroller",on:{scroll:_vm.updateVisibleItems}},[_c(_vm.containerTag,{tag:"component",staticClass:"item-container",style:_vm.itemContainerStyle},[_c(_vm.contentTag,{tag:"component",staticClass:"items",style:_vm.itemsStyle},[_vm.renderers?_vm._l(_vm.visibleItems,function(item){return _c(_vm.renderers[item[_vm.typeField]],{key:item[_vm.keyField],tag:"component",staticClass:"item",attrs:{item:item}})}):[_vm._l(_vm.visibleItems,function(item){return _vm._t("default",null,{item:item})})],_vm._v(" ")],!0)]),_vm._v(" "),_c("resize-observer",{on:{notify:_vm.updateVisibleItems}})])},staticRenderFns:[]}},function(module,exports,__webpack_require__){"use strict";function install(Vue){Vue.component("virtual-scroller",__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue___default.a)}var __WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue__);Object.defineProperty(exports,"__esModule",{value:!0}),exports.install=install,__webpack_require__.d(exports,"VirtualScroller",function(){return VirtualScroller});var VirtualScroller=__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue___default.a;exports.default={version:"0.4.0",install:install}}])});