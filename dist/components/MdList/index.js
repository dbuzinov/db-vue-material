/*!
 * vue-material v1.0.0-beta-15
 * Made with <3 by marcosmoura 2022
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=537)})({0:function(e,t){e.exports=function(e,t,n,r,i,o){var u,s,a,l,c,d=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(u=e,d=e.default),s="function"==typeof d?d.options:d,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId=i),o?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},s._ssrRegister=a):r&&(a=r),a&&(l=s.functional,c=l?s.render:s.beforeCreate,l?(s._injectStyles=a,s.render=function(e,t){return a.call(t),c(e,t)}):s.beforeCreate=c?[].concat(c,a):[a]),{esModule:u,exports:d,options:s}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,u,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=o.default.enabled,t=o.default.getThemeName,n=o.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,s.default)(t,e)},i=n(4),o=r(i),u=n(6),s=r(u)},10:function(e,t,n){(function(t){var r,i,o,u,s,a=n(14),l="undefined"==typeof window?t:window,c=["moz","webkit"],d="AnimationFrame",f=l["request"+d],p=l["cancel"+d]||l["cancelRequest"+d];for(r=0;!f&&r<c.length;r++)f=l[c[r]+"Request"+d],p=l[c[r]+"Cancel"+d]||l[c[r]+"CancelRequest"+d];f&&p||(i=0,o=0,u=[],s=1e3/60,f=function(e){if(0===u.length){var t=a(),n=Math.max(0,s-(t-i));i=n+t,setTimeout((function(){var e,t=u.slice(0);for(u.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(i)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return u.push({handle:++o,callback:e,cancelled:!1}),o},p=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=!0)}),e.exports=function(e){return f.call(l,e)},e.exports.cancel=function(){p.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=f,e.cancelAnimationFrame=p}}).call(t,n(12))},100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["click","dblclick","mousedown","mouseup"]},109:function(e,t,n){"use strict";function r(e){n(178)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(75),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(0),a=null,l=!1,c=r,d=null,f=null,p=s(o.a,a,l,c,d,f),t.default=p.exports},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return Math.random().toString(36).slice(4)};t.default=r},12:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},13:function(e,t,n){"use strict";function r(e){n(33)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(20),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(37),a=n(0),l=!1,c=r,d=null,f=null,p=a(o.a,s.a,l,c,d,f),t.default=p.exports},14:function(e,t,n){(function(t){(function(){var n,r,i,o,u,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-u)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n(),s=1e9*t.uptime(),u=o-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(t,n(15))},15:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function i(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function o(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function u(){p&&m&&(p=!1,m.length?f=m.concat(f):h=-1,f.length&&s())}function s(){var e,t;if(!p){for(e=i(u),p=!0,t=f.length;t;){for(m=f,f=[];++h<t;)m&&m[h].run();h=-1,t=f.length}m=null,p=!1,o(e)}}function a(e,t){this.fun=e,this.array=t}function l(){}var c,d,f,p,m,h,v=e.exports={};!(function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}})(),f=[],p=!1,h=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new a(e,n)),1!==f.length||p||i(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=l,v.addListener=l,v.once=l,v.off=l,v.removeListener=l,v.removeAllListeners=l,v.emit=l,v.prependListener=l,v.prependOnceListener=l,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},16:function(e,t,n){"use strict";function r(e){n(23)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(18),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(26),a=n(0),l=!1,c=r,d=null,f=null,p=a(o.a,s.a,l,c,d,f),t.default=p.exports},178:function(e,t){},179:function(e,t,n){"use strict";var r,i,o,u,s,a,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(76),i=n.n(r);for(o in r)"default"!==o&&(function(e){n.d(t,e,(function(){return r[e]}))})(o);u=n(182),s=n(0),a=!1,l=null,c=null,d=null,f=s(i.a,u.a,a,l,c,d),t.default=f.exports},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,u,s,a,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),i=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(10),u=r(o),s=n(1),a=r(s),l=n(11),c=r(l),d=n(22),f=r(d),t.default=new a.default({name:"MdRipple",components:{MdWave:f.default},props:{mdActive:null,mdDisabled:Boolean,mdCentered:Boolean,mdEventTrigger:{type:Boolean,default:!0}},data:function(){return{ripples:[],touchTimeout:null,eventType:null}},computed:{isDisabled:function(){return!this.$material.ripple||this.mdDisabled},rippleClasses:function(){return{"md-disabled":this.isDisabled}},waveClasses:function(){return{"md-centered":this.mdCentered}}},watch:{mdActive:function(e){var t="boolean"==typeof e,n=e instanceof MouseEvent;t&&this.mdCentered&&e?this.startRipple({type:"mousedown"}):n&&this.startRipple(e),this.$emit("update:mdActive",!1)}},methods:{touchMoveCheck:function(){window.clearTimeout(this.touchTimeout)},touchStartCheck:function(e){var t=this;this.touchTimeout=window.setTimeout((function(){t.startRipple(e)}),100)},startRipple:function(e){var t=this;(0,u.default)((function(){var n,r,i=t.eventType,o=t.isDisabled,u=t.mdCentered;o||i&&i!==e.type||(n=t.getSize(),r=null,r=u?t.getCenteredPosition(n):t.getHitPosition(e,n),t.eventType=e.type,t.ripples.push({waveStyles:t.applyStyles(r,n),uuid:(0,c.default)()}))}))},applyStyles:function(e,t){return t+="px",i({},e,{width:t,height:t})},clearWave:function(e){this.ripples=e?this.ripples.filter((function(t){return t.uuid!==e})):[]},getSize:function(){var e=this.$el,t=e.offsetWidth,n=e.offsetHeight;return Math.round(Math.max(t,n))},getCenteredPosition:function(e){var t=-e/2+"px";return{"margin-top":t,"margin-left":t}},getHitPosition:function(e,t){var n=this.$el.getBoundingClientRect(),r=e.pageY,i=e.pageX;return"touchstart"===e.type&&(r=e.changedTouches[0].pageY,i=e.changedTouches[0].pageX),{top:r-n.top-t/2-document.documentElement.scrollTop+"px",left:i-n.left-t/2-document.documentElement.scrollLeft+"px"}}}})},180:function(e,t,n){"use strict";var r,i,o,u,s,a,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(77),i=n.n(r);for(o in r)"default"!==o&&(function(e){n.d(t,e,(function(){return r[e]}))})(o);u=n(181),s=n(0),a=!1,l=null,c=null,d=null,f=s(i.a,u.a,a,l,c,d),t.default=f.exports},181:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("md-ripple",{staticClass:"md-list-item-content",attrs:{"md-disabled":e.mdDisabled}},[e._t("default")],2)},i=[],o={render:r,staticRenderFns:i};t.a=o},182:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-list-item-default",on:{click:e.toggleControl}},[n("md-list-item-content",{attrs:{"md-disabled":""}},[e._t("default")],2)],1)},i=[],o={render:r,staticRenderFns:i};t.a=o},183:function(e,t,n){"use strict";var r,i,o,u,s,a,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(78),i=n.n(r);for(o in r)"default"!==o&&(function(e){n.d(t,e,(function(){return r[e]}))})(o);u=n(184),s=n(0),a=!1,l=null,c=null,d=null,f=s(i.a,u.a,a,l,c,d),t.default=f.exports},184:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-list-item-fake-button",attrs:{disabled:e.disabled}},[n("md-list-item-content",{attrs:{"md-disabled":e.isDisabled}},[e._t("default")],2)],1)},i=[],o={render:r,staticRenderFns:i};t.a=o},185:function(e,t,n){"use strict";var r,i,o,u,s,a,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(79),i=n.n(r);for(o in r)"default"!==o&&(function(e){n.d(t,e,(function(){return r[e]}))})(o);u=n(186),s=n(0),a=!1,l=null,c=null,d=null,f=s(i.a,u.a,a,l,c,d),t.default=f.exports},186:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"md-list-item-button",attrs:{type:"button",disabled:e.disabled}},[n("md-list-item-content",{attrs:{"md-disabled":e.isDisabled}},[e._t("default")],2)],1)},i=[],o={render:r,staticRenderFns:i};t.a=o},187:function(e,t,n){"use strict";var r,i,o,u,s,a,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(80),i=n.n(r);for(o in r)"default"!==o&&(function(e){n.d(t,e,(function(){return r[e]}))})(o);u=n(188),s=n(0),a=!1,l=null,c=null,d=null,f=s(i.a,u.a,a,l,c,d),t.default=f.exports},188:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",e._b({staticClass:"md-list-item-link"},"a",e.$props,!1),[n("md-list-item-content",{attrs:{"md-disabled":e.isDisabled}},[e._t("default")],2)],1)},i=[],o={render:r,staticRenderFns:i};t.a=o},189:function(e,t,n){"use strict";var r,i,o,u,s,a,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(81),i=n.n(r);for(o in r)"default"!==o&&(function(e){n.d(t,e,(function(){return r[e]}))})(o);u=n(190),s=n(0),a=!1,l=null,c=null,d=null,f=s(i.a,u.a,a,l,c,d),t.default=f.exports},19:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new i.default({name:"MdWave",data:function(){return{animating:!1}},props:{waveClasses:null,waveStyles:null},mounted:function(){this.animating=!0},methods:{end:function(){this.animating=!1,this.$emit("md-end")}}})},190:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",e._b({staticClass:"md-list-item-router"},"router-link",e.routerProps,!1),[n("md-list-item-content",{attrs:{"md-disabled":e.isDisabled}},[e._t("default")],2)],1)},i=[],o={render:r,staticRenderFns:i};t.a=o},191:function(e,t,n){"use strict";function r(e){n(192)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(82),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(195),a=n(0),l=!1,c=r,d=null,f=null,p=a(o.a,s.a,l,c,d,f),t.default=p.exports},192:function(e,t){},193:function(e,t,n){"use strict";var r,i,o,u,s,a,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(83),i=n.n(r);for(o in r)"default"!==o&&(function(e){n.d(t,e,(function(){return r[e]}))})(o);u=n(194),s=n(0),a=!1,l=null,c=null,d=null,f=s(i.a,u.a,a,l,c,d),t.default=f.exports},194:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-icon",{staticClass:"md-icon-image"},[n("svg",{attrs:{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}}),e._v(" "),n("path",{attrs:{d:"M0-.75h24v24H0z",fill:"none"}})])])}],o={render:r,staticRenderFns:i};t.a=o},195:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-list-item-expand",class:e.expandClasses},[n("md-list-item-content",{attrs:{"md-disabled":e.isDisabled},nativeOn:{click:function(t){return e.toggleExpand(t)}}},[e._t("default"),e._v(" "),n("md-arrow-down-icon",{staticClass:"md-list-expand-icon"})],2),e._v(" "),n("div",{ref:"listExpand",staticClass:"md-list-expand",style:e.expandStyles},[e._t("md-expand")],2)],1)},i=[],o={render:r,staticRenderFns:i};t.a=o},2:function(t,n){t.exports=e},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,u,s;Object.defineProperty(t,"__esModule",{value:!0}),i=n(1),o=r(i),u=n(34),s=r(u),t.default=new o.default({name:"MdIcon",components:{MdSvgLoader:s.default},props:{mdSrc:String}})},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};t.default={name:"MdSVGLoader",props:{mdSrc:{type:String,required:!0}},data:function(){return{html:null,error:null}},watch:{mdSrc:function(){this.html=null,this.loadSVG()}},methods:{isSVG:function(e){return"string"==typeof e&&e.indexOf("svg")>=0},setHtml:function(e){var t=this;r[this.mdSrc].then((function(e){return t.html=e,t.$nextTick()})).then((function(){return t.$emit("md-loaded")}))},unexpectedError:function(e){this.error="Something bad happened trying to fetch "+this.mdSrc+".",e(this.error)},loadSVG:function(){var e=this;r.hasOwnProperty(this.mdSrc)?this.setHtml():r[this.mdSrc]=new Promise(function(t,n){var r=new window.XMLHttpRequest;r.open("GET",e.mdSrc,!0),r.onload=function(){var i=r.getResponseHeader("content-type");200===r.status?e.isSVG(i)?(t(r.response),e.setHtml()):(e.error="The file "+e.mdSrc+" is not a valid SVG.",n(e.error)):r.status>=400&&r.status<500?(e.error="The file "+e.mdSrc+" do not exists.",n(e.error)):e.unexpectedError(n)},r.onerror=function(){return e.unexpectedError(n)},r.onabort=function(){return e.unexpectedError(n)},r.send()})}},mounted:function(){this.loadSVG()}}},22:function(e,t,n){"use strict";function r(e){n(24)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(19),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(25),a=n(0),l=!1,c=r,d=null,f=null,p=a(o.a,s.a,l,c,d,f),t.default=p.exports},23:function(e,t){},24:function(e,t){},25:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"md-ripple",appear:""},on:{"after-enter":e.end}},[e.animating?n("span"):e._e()])},i=[],o={render:r,staticRenderFns:i};t.a=o},26:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["md-ripple",e.rippleClasses],on:{"&touchstart":function(t){return (function(t){return e.mdEventTrigger&&e.touchStartCheck(t)})(t)},"&touchmove":function(t){return (function(t){return e.mdEventTrigger&&e.touchMoveCheck(t)})(t)},"&mousedown":function(t){return (function(t){return e.mdEventTrigger&&e.startRipple(t)})(t)}}},[e._t("default"),e._v(" "),e._l(e.ripples,(function(t){return e.isDisabled?e._e():n("md-wave",{key:t.uuid,class:["md-ripple-wave",e.waveClasses],style:t.waveStyles,on:{"md-end":function(n){return e.clearWave(t.uuid)}}})}))],2)},i=[],o={render:r,staticRenderFns:i};t.a=o},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{to:[String,Object],replace:Boolean,append:Boolean,activeClass:String,exact:Boolean,event:[String,Array],exactActiveClass:String}}},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){var n=e.$options.components.RouterLink||e.$options.components["router-link"];return r({},t,n.options.props)}},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,u,s,a;Object.defineProperty(t,"__esModule",{value:!0}),n(7),i=n(5),o=r(i),u=n(4),s=r(u),a=function(){var e=new o.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0,cancel:"Cancel",confirm:"Ok"},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return s.default.metaColors},set:function(e){s.default.metaColors=e}},theme:{get:function(){return s.default.theme},set:function(e){s.default.theme=e}},enabled:{get:function(){return s.default.enabled},set:function(e){s.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=a(),e.prototype.$material=e.material)}},30:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,u,s;Object.defineProperty(t,"__esModule",{value:!0}),i=n(38),o=r(i),u=n(180),s=r(u),t.default={mixins:[o.default],components:{MdListItemContent:s.default},props:{disabled:Boolean},computed:{isDisabled:function(){return!this.mdRipple||this.disabled}}}},31:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,u,s,a,l,c,d,f,p,m,h,v;Object.defineProperty(t,"__esModule",{value:!0}),i=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),u=r(o),s=n(41),a=r(s),l=n(38),c=r(l),d=n(28),f=r(d),p=n(29),m=r(p),h=n(45),v=r(h),t.default=new u.default({name:"MdButton",data:function(){return{rippleActive:!1}},components:{MdButtonContent:v.default},mixins:[c.default,a.default,f.default],props:{href:String,type:{type:String,default:"button"},disabled:Boolean},computed:{rippleWorks:function(){return this.mdRipple&&!this.disabled},isRouterLink:function(){return this.$router&&this.to}},render:function(e){var t,n,r=this,o=e("md-button-content",{attrs:{mdRipple:this.mdRipple,disabled:this.disabled},props:{mdRippleActive:this.rippleActive},on:{"update:mdRippleActive":function(e){return r.rippleActive=e}}},this.$slots.default),u={staticClass:"md-button",class:[this.$mdActiveTheme,{"md-ripple-off":!this.mdRipple,"md-focused":this.mdHasFocus}],attrs:i({},this.attrs,{href:this.href,disabled:this.disabled,type:!this.href&&(this.type||"button")}),on:i({},this.$listeners,{touchstart:function(e){r.rippleWorks&&(r.rippleActive=e),r.$listeners.touchstart&&r.$listeners.touchstart(e)},touchmove:function(e){r.rippleWorks&&(r.rippleActive=e),r.$listeners.touchmove&&r.$listeners.touchmove(e)},mousedown:function(e){r.rippleWorks&&(r.rippleActive=e),r.$listeners.mousedown&&r.$listeners.mousedown(e)}})},s="button";return this.href?s="a":this.isRouterLink&&(this.$options.props=(0,m.default)(this,this.$options.props),s="router-link",t=this.$props.exactActiveClass,n=(this.$props.activeClass||this.$material.router.linkActiveClass)+" md-active",u.props=i({},this.$props,{exactActiveClass:t,activeClass:n}),delete u.props.type,delete u.attrs.type,delete u.props.href,delete u.attrs.href),e(s,u,[o])}})},32:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(16),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdButtonContent",components:{MdRipple:i.default},props:{mdRipple:Boolean,mdRippleActive:null,disabled:Boolean}}},33:function(e,t){},34:function(e,t,n){"use strict";function r(e){n(35)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(21),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(36),a=n(0),l=!1,c=r,d=null,f=null,p=a(o.a,s.a,l,c,d,f),t.default=p.exports},35:function(e,t){},36:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{staticClass:"md-svg-loader",domProps:{innerHTML:e._s(e.html)}})},i=[],o={render:r,staticRenderFns:i};t.a=o},37:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.mdSrc?n("md-svg-loader",{staticClass:"md-icon md-icon-image",class:[e.$mdActiveTheme],attrs:{"md-src":e.mdSrc},on:{"md-loaded":function(t){return e.$emit("md-loaded")}}}):n("i",{staticClass:"md-icon md-icon-font",class:[e.$mdActiveTheme]},[e._t("default")],2)},i=[],o={render:r,staticRenderFns:i};t.a=o},38:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(16),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={components:{MdRipple:i.default},props:{mdRipple:{type:Boolean,default:!0}}}},39:function(e,t,n){"use strict";function r(e){n(44)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(31),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(0),a=null,l=!1,c=r,d=null,f=null,p=s(o.a,a,l,c,d,f),t.default=p.exports},4:function(e,t,n){"use strict";var r,i,o,u,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),o=null,u=null,s=null,t.default=new i.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var i=r.mdTheme,o=r.$parent;return i&&i!==t?i:e(o)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){o&&o.setAttribute("content",e)},setThemeColors:function(e){u&&u.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;o=document.querySelector('[name="msapplication-TileColor"]'),u=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},403:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,u,s,a,l;Object.defineProperty(t,"__esModule",{value:!0}),i=n(3),o=r(i),u=n(74),s=r(u),a=n(109),l=r(a),t.default=function(e){(0,o.default)(e),e.component(s.default.name,s.default),e.component(l.default.name,l.default)}},41:function(e,t,n){"use strict";function r(){try{var e=Object.defineProperty({},"passive",{get:function(){v={passive:!0}}});window.addEventListener("ghost",null,e)}catch(e){}}function i(e){var t=(e.keyCode,e.target);_.currentElement=t}function o(e){_.currentElement=null}function u(){h.addEventListener("keyup",i)}function s(){h.addEventListener("pointerup",o)}function a(){h.addEventListener("MSPointerUp",o)}function l(){h.addEventListener("mouseup",o),"ontouchend"in window&&h.addEventListener("touchend",o,v)}function c(){window.PointerEvent?s():window.MSPointerEvent?a():l(),u()}function d(){m||(h=document.body,r(),c(),m=!0)}var f,p,m,h,v,_;Object.defineProperty(t,"__esModule",{value:!0}),f=n(5),p=(function(e){return e&&e.__esModule?e:{default:e}})(f),m=!1,h=null,v=!1,_=new p.default({currentElement:null}),t.default={data:function(){return{mdHasFocus:!1}},computed:{focusedElement:function(){return _.currentElement}},watch:{focusedElement:function(e){this.mdHasFocus=e===this.$el}},mounted:function(){d()}}},44:function(e,t){},45:function(e,t,n){"use strict";function r(e){n(46)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(32),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(47),a=n(0),l=!1,c=r,d=null,f=null,p=a(o.a,s.a,l,c,d,f),t.default=p.exports},46:function(e,t){},47:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-ripple",{attrs:{"md-disabled":!e.mdRipple||e.disabled,"md-event-trigger":!1,"md-active":e.mdRippleActive},on:{"update:mdActive":function(t){return e.$emit("update:mdRippleActive",t)}}},[n("div",{staticClass:"md-button-content"},[e._t("default")],2)])},i=[],o={render:r,staticRenderFns:i};t.a=o},5:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return i.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(r)},537:function(e,t,n){e.exports=n(403)},57:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new i.default({name:"MdList",data:function(){return{MdList:{expandable:[],expandATab:this.expandATab,pushExpandable:this.pushExpandable,removeExpandable:this.removeExpandable}}},provide:function(){return{MdList:this.MdList}},props:{mdExpandSingle:{default:!1}},methods:{expandATab:function(e){if(this.mdExpandSingle&&e){this.MdList.expandable.filter((function(t){return t!==e})).forEach((function(e){return e.close()}))}},pushExpandable:function(e){var t=this.MdList.expandable;t.find((function(t){return t===e}))||(this.MdList.expandable=t.concat([e]))},removeExpandable:function(e){var t=this.MdList.expandable;t.find((function(t){return t===e}))&&(this.MdList.expandable=t.filter((function(t){return t!==e})))}}})},6:function(e,t,n){!(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===d}function r(e){return Array.isArray(e)?[]:{}}function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a(r(e),e,t):e}function o(e,t,n){return e.concat(t).map((function(e){return i(e,n)}))}function u(e,t){if(!t.customMerge)return a;var n=t.customMerge(e);return"function"==typeof n?n:a}function s(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=i(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=u(o,n)(e[o],t[o],n):r[o]=i(t[o],n)})),r}function a(e,t,n){var r,u,a;return n=n||{},n.arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||l,r=Array.isArray(t),u=Array.isArray(e),a=r===u,a?r?n.arrayMerge(e,t,n):s(e,t,n):i(t,n)}var l=function(n){return e(n)&&!t(n)},c="function"==typeof Symbol&&Symbol.for,d=c?Symbol.for("react.element"):60103;return a.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return a(e,n,t)}),{})},a}))},7:function(e,t){},74:function(e,t,n){"use strict";function r(e){n(98)}var i,o,u,s,a,l,c,d,f,p;Object.defineProperty(t,"__esModule",{value:!0}),i=n(57),o=n.n(i);for(u in i)"default"!==u&&(function(e){n.d(t,e,(function(){return i[e]}))})(u);s=n(99),a=n(0),l=!1,c=r,d=null,f=null,p=a(o.a,s.a,l,c,d,f),t.default=p.exports},75:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return e.hasOwnProperty("mdExpand")&&!1!==e.mdExpand}function o(e,t){if(i(e))return{"md-expand":function(){return t["md-expand"][0]}}}function u(e){return e.default.some((function(e){return e.componentOptions&&"md-button"===e.componentOptions.tag}))}function s(e){var t=Object.keys(e),n=!1;return t.forEach((function(e){p.default.includes(e)&&(n=!0)})),n}function a(e,t){return e&&e.$router&&t.to}function l(e,t,n,r){return i(e)?T.default:e.disabled?g.default:a(t,e)?(O.default.props=(0,h.default)(t,{target:String}),delete O.default.props.href,O.default):e.href?w.default:s(n)?c(r):_.default}function c(e){return u(e)?y.default:g.default}var d,f,p,m,h,v,_,b,y,M,g,x,w,C,O,S,T,E,j;Object.defineProperty(t,"__esModule",{value:!0}),d=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(100),p=r(f),m=n(29),h=r(m),v=n(179),_=r(v),b=n(183),y=r(b),M=n(185),g=r(M),x=n(187),w=r(x),C=n(189),O=r(C),S=n(191),T=r(S),E=n(39),j=r(E),t.default={name:"MdListItem",functional:!0,components:{MdButton:j.default},render:function(e,t){var n=t.parent,r=t.props,i=t.listeners,u=t.data,s=t.slots,a=s(),c=l(r,n,i,a),f="md-list-item";return u.staticClass&&(f+=" "+u.staticClass),e("li",d({},u,{staticClass:f,on:i}),[e(c,{props:r,scopedSlots:o(r,a),staticClass:"md-list-item-container md-button-clean",on:i},a.default)])}}},76:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(30),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdListItemDefault",mixins:[i.default],methods:{toggleControl:function(){var e=this.$el.querySelector(".md-checkbox-container, .md-switch-container, .md-radio-container");e&&e.click()}}}},77:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(16),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdListItemContent",components:{MdRipple:i.default},props:{mdDisabled:Boolean}}},78:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(30),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdListItemFakeButton",mixins:[i.default]}},79:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(30),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdListItemButton",mixins:[i.default]}},80:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(30),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdListItemLink",mixins:[i.default],props:{download:String,href:String,hreflang:String,ping:String,rel:String,target:String,type:String}}},81:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(30),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdListItemRouter",mixins:[i.default],computed:{routerProps:function(){return this.$props}}}},82:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,u,s,a,l;Object.defineProperty(t,"__esModule",{value:!0}),i=n(10),o=r(i),u=n(193),s=r(u),a=n(30),l=r(a),t.default={name:"MdListItemExpand",components:{MdArrowDownIcon:s.default},mixins:[l.default],inject:["MdList"],data:function(){return{expandStyles:{},showContent:!1}},props:{mdExpanded:Boolean},computed:{expandClasses:function(){return{"md-active":this.showContent}}},methods:{getChildrenSize:function(){var e=this.$refs.listExpand,t=0;return Array.from(e.children).forEach((function(e){t+=e.offsetHeight})),t},fetchStyle:function(){var e=this;return new Promise(function(t){(0,o.default)((function(){var n=0;e.showContent||(n="auto"),e.expandStyles={height:n},t()}))})},toggleExpand:function(){var e=this;this.fetchStyle().then((function(){e.showContent=!e.showContent}))},open:function(){var e=this;if(this.showContent)return!1;this.fetchStyle().then((function(){return[e.showContent=!0]}))},close:function(){var e=this;if(!this.showContent)return!1;this.fetchStyle().then((function(){e.showContent=!1}))}},watch:{mdExpanded:function(){this.mdExpanded?this.open():this.close()},showContent:function(){var e=this,t=this.showContent;this.$emit("update:mdExpanded",t),this.$nextTick((function(){return e.$emit(t?"md-expanded":"md-collapsed")})),t&&this.MdList.expandATab(this)}},created:function(){this.MdList.pushExpandable(this)},mounted:function(){this.mdExpanded&&this.open()},beforeDestroy:function(){this.MdList.removeExpandable(this)}}},83:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(13),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdArrowDownIcon",components:{MdIcon:i.default}}},98:function(e,t){},99:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("ul",e._g(e._b({staticClass:"md-list",class:[e.$mdActiveTheme]},"ul",e.$attrs,!1),e.$listeners),[e._t("default")],2)},i=[],o={render:r,staticRenderFns:i};t.a=o}})}));