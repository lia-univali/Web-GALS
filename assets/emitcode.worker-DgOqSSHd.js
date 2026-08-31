(function(){"use strict";var Ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}function Jt(b){if(Object.prototype.hasOwnProperty.call(b,"__esModule"))return b;var t=b.default;if(typeof t=="function"){var e=function n(){var r=!1;try{r=this instanceof n}catch{}return r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(b).forEach(function(n){var r=Object.getOwnPropertyDescriptor(b,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return b[n]}})}),e}var tt={},nt=function(b,t){return nt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])},nt(b,t)};function pt(b,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");nt(b,t);function e(){this.constructor=b}b.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Ke=function(){return Ke=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Ke.apply(this,arguments)};function _t(b,t){var e={};for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&t.indexOf(n)<0&&(e[n]=b[n]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(b);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(b,n[r])&&(e[n[r]]=b[n[r]]);return e}function mt(b,t,e,n){var r=arguments.length,s=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(b,t,e,n);else for(var o=b.length-1;o>=0;o--)(i=b[o])&&(s=(r<3?i(s):r>3?i(t,e,s):i(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s}function gt(b,t){return function(e,n){t(e,n,b)}}function Qt(b,t,e,n,r,s){function i(g){if(g!==void 0&&typeof g!="function")throw new TypeError("Function expected");return g}for(var o=n.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&b?n.static?b:b.prototype:null,_=t||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),h,p=!1,u=e.length-1;u>=0;u--){var m={};for(var f in n)m[f]=f==="access"?{}:n[f];for(var f in n.access)m.access[f]=n.access[f];m.addInitializer=function(g){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(i(g||null))};var T=(0,e[u])(o==="accessor"?{get:_.get,set:_.set}:_[a],m);if(o==="accessor"){if(T===void 0)continue;if(T===null||typeof T!="object")throw new TypeError("Object expected");(h=i(T.get))&&(_.get=h),(h=i(T.set))&&(_.set=h),(h=i(T.init))&&r.unshift(h)}else(h=i(T))&&(o==="field"?r.unshift(h):_[a]=h)}l&&Object.defineProperty(l,n.name,_),p=!0}function en(b,t,e){for(var n=arguments.length>2,r=0;r<t.length;r++)e=n?t[r].call(b,e):t[r].call(b);return n?e:void 0}function tn(b){return typeof b=="symbol"?b:"".concat(b)}function nn(b,t,e){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(b,"name",{configurable:!0,value:e?"".concat(e," ",t):t})}function Tt(b,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(b,t)}function St(b,t,e,n){function r(s){return s instanceof e?s:new e(function(i){i(s)})}return new(e||(e=Promise))(function(s,i){function o(_){try{l(n.next(_))}catch(h){i(h)}}function a(_){try{l(n.throw(_))}catch(h){i(h)}}function l(_){_.done?s(_.value):r(_.value).then(o,a)}l((n=n.apply(b,t||[])).next())})}function kt(b,t){var e={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(l){return function(_){return a([l,_])}}function a(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(e=0)),e;)try{if(n=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,r=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(s=e.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){e.label=l[1];break}if(l[0]===6&&e.label<s[1]){e.label=s[1],s=l;break}if(s&&e.label<s[2]){e.label=s[2],e.ops.push(l);break}s[2]&&e.ops.pop(),e.trys.pop();continue}l=t.call(b,e)}catch(_){l=[6,_],r=0}finally{n=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Ze=Object.create?(function(b,t,e,n){n===void 0&&(n=e);var r=Object.getOwnPropertyDescriptor(t,e);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(b,n,r)}):(function(b,t,e,n){n===void 0&&(n=e),b[n]=t[e]});function Et(b,t){for(var e in b)e!=="default"&&!Object.prototype.hasOwnProperty.call(t,e)&&Ze(t,b,e)}function We(b){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&b[t],n=0;if(e)return e.call(b);if(b&&typeof b.length=="number")return{next:function(){return b&&n>=b.length&&(b=void 0),{value:b&&b[n++],done:!b}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function rt(b,t){var e=typeof Symbol=="function"&&b[Symbol.iterator];if(!e)return b;var n=e.call(b),r,s=[],i;try{for(;(t===void 0||t-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(o){i={error:o}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(i)throw i.error}}return s}function bt(){for(var b=[],t=0;t<arguments.length;t++)b=b.concat(rt(arguments[t]));return b}function At(){for(var b=0,t=0,e=arguments.length;t<e;t++)b+=arguments[t].length;for(var n=Array(b),r=0,t=0;t<e;t++)for(var s=arguments[t],i=0,o=s.length;i<o;i++,r++)n[r]=s[i];return n}function yt(b,t,e){if(e||arguments.length===2)for(var n=0,r=t.length,s;n<r;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return b.concat(s||Array.prototype.slice.call(t))}function Me(b){return this instanceof Me?(this.v=b,this):new Me(b)}function wt(b,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(b,t||[]),r,s=[];return r={},o("next"),o("throw"),o("return",i),r[Symbol.asyncIterator]=function(){return this},r;function i(u){return function(m){return Promise.resolve(m).then(u,h)}}function o(u,m){n[u]&&(r[u]=function(f){return new Promise(function(T,g){s.push([u,f,T,g])>1||a(u,f)})},m&&(r[u]=m(r[u])))}function a(u,m){try{l(n[u](m))}catch(f){p(s[0][3],f)}}function l(u){u.value instanceof Me?Promise.resolve(u.value.v).then(_,h):p(s[0][2],u)}function _(u){a("next",u)}function h(u){a("throw",u)}function p(u,m){u(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function Rt(b){var t,e;return t={},n("next"),n("throw",function(r){throw r}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(r,s){t[r]=b[r]?function(i){return(e=!e)?{value:Me(b[r](i)),done:!1}:s?s(i):i}:s}}function Nt(b){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=b[Symbol.asyncIterator],e;return t?t.call(b):(b=typeof We=="function"?We(b):b[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(s){e[s]=b[s]&&function(i){return new Promise(function(o,a){i=b[s](i),r(o,a,i.done,i.value)})}}function r(s,i,o,a){Promise.resolve(a).then(function(l){s({value:l,done:o})},i)}}function Ct(b,t){return Object.defineProperty?Object.defineProperty(b,"raw",{value:t}):b.raw=t,b}var rn=Object.create?(function(b,t){Object.defineProperty(b,"default",{enumerable:!0,value:t})}):function(b,t){b.default=t};function vt(b){if(b&&b.__esModule)return b;var t={};if(b!=null)for(var e in b)e!=="default"&&Object.prototype.hasOwnProperty.call(b,e)&&Ze(t,b,e);return rn(t,b),t}function It(b){return b&&b.__esModule?b:{default:b}}function xt(b,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?b!==t||!n:!t.has(b))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(b):n?n.value:t.get(b)}function Lt(b,t,e,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?b!==t||!r:!t.has(b))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(b,e):r?r.value=e:t.set(b,e),e}function Ot(b,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof b=="function"?t===b:b.has(t)}function Pt(b,t,e){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var n,r;if(e){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose],e&&(r=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");r&&(n=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),b.stack.push({value:t,dispose:n,async:e})}else e&&b.stack.push({async:!0});return t}var sn=typeof SuppressedError=="function"?SuppressedError:function(b,t,e){var n=new Error(e);return n.name="SuppressedError",n.error=b,n.suppressed=t,n};function Dt(b){function t(n){b.error=b.hasError?new sn(n,b.error,"An error was suppressed during disposal."):n,b.hasError=!0}function e(){for(;b.stack.length;){var n=b.stack.pop();try{var r=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(r).then(e,function(s){return t(s),e()})}catch(s){t(s)}}if(b.hasError)throw b.error}return e()}var on={__extends:pt,__assign:Ke,__rest:_t,__decorate:mt,__param:gt,__metadata:Tt,__awaiter:St,__generator:kt,__createBinding:Ze,__exportStar:Et,__values:We,__read:rt,__spread:bt,__spreadArrays:At,__spreadArray:yt,__await:Me,__asyncGenerator:wt,__asyncDelegator:Rt,__asyncValues:Nt,__makeTemplateObject:Ct,__importStar:vt,__importDefault:It,__classPrivateFieldGet:xt,__classPrivateFieldSet:Lt,__classPrivateFieldIn:Ot,__addDisposableResource:Pt,__disposeResources:Dt},an=Object.freeze({__proto__:null,__addDisposableResource:Pt,get __assign(){return Ke},__asyncDelegator:Rt,__asyncGenerator:wt,__asyncValues:Nt,__await:Me,__awaiter:St,__classPrivateFieldGet:xt,__classPrivateFieldIn:Ot,__classPrivateFieldSet:Lt,__createBinding:Ze,__decorate:mt,__disposeResources:Dt,__esDecorate:Qt,__exportStar:Et,__extends:pt,__generator:kt,__importDefault:It,__importStar:vt,__makeTemplateObject:Ct,__metadata:Tt,__param:gt,__propKey:tn,__read:rt,__rest:_t,__runInitializers:en,__setFunctionName:nn,__spread:bt,__spreadArray:yt,__spreadArrays:At,__values:We,default:on}),ln=Jt(an),Pe={},Ft;function cn(){return Ft||(Ft=1,Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.isDate=Pe.isComparable=Pe.isIterable=void 0,Pe.isIterable=b=>!(b==null||b[Symbol.iterator]==null),Pe.isComparable=b=>{const t=Object.prototype.toString,e=b;return e.compare!=null&&t.call(e.compare).endsWith("Function]")},Pe.isDate=b=>Object.prototype.toString.call(b).endsWith("Date]")),Pe}var st={},zt;function un(){return zt||(zt=1,Object.defineProperty(st,"__esModule",{value:!0})),st}var Mt;function hn(){return Mt||(Mt=1,(function(b){Object.defineProperty(b,"__esModule",{value:!0});const t=ln,e=cn(),o={number:(_,h)=>_-h,string:(_,h)=>_.localeCompare(h),Date:(_,h)=>_.getTime()-h.getTime(),bigInt:(_,h)=>Number(_-h),none:()=>0},a=_=>{if(typeof _=="number")return o.number;if(typeof _=="string")return o.string;if(typeof _=="bigint")return o.bigInt;if(e.isDate(_))return o.Date;if(e.isComparable(_))return(h,p)=>h.compare(p);throw new Error("Cannot sort keys in this map. You have to specify compareFn if the type of key in this map is not number, string, or Date.")};class l extends Map{constructor(h,p){super(),this.specifiedCompareFn=!1,this.isCompareFn=u=>typeof u=="function",this.compareFn=o.none,this.sortedKeys=[],e.isIterable(h)&&this._constructor(h,p),this.isCompareFn(h)&&this._constructor(null,h),h==null&&this._constructor(null,p)}get comparator(){return this.compareFn}compare(h,p){return Math.sign(this.compareFn(h,p))}_constructor(h,p){if(this.compareFn=p??o.none,this.specifiedCompareFn=p!=null,h!=null)for(const u of h)this.set(...u)}static fromMap(h,p){const u=new l(p);return u.setAll(h),u}duplicate(){return l.fromMap(this,this.compareFn)}toMap(){const h=new Map,p=Array.from(super.entries());return p.sort((u,m)=>this.compareFn(u[0],m[0])),p.forEach(([u,m])=>{h.set(u,m)}),h}reverseKeys(){return[...this.sortedKeys].reverse().values()}get(h){const p=this.sortedKeys.find(u=>this.comparator(u,h)===0);if(p!=null)return super.get(p)}set(h,p){this.sortedKeys.length===0&&!this.specifiedCompareFn&&(this.compareFn=a(h),this.specifiedCompareFn=!0);const u=this.sortedKeys.find(m=>this.compareFn(m,h)===0);return u==null?(this.sortedKeys.push(h),super.set(h,p)):super.set(u,p),this.sortedKeys.sort(this.compareFn),this}setAll(h){return h.forEach((p,u)=>{this.set(u,p)}),this}delete(h){return super.delete(h)?(this.sortedKeys=this.sortedKeys.filter(p=>this.compare(p,h)!==0),!0):!1}clear(){super.clear(),this.sortedKeys=[]}keys(){return this.sortedKeys.values()}values(){return this.sortedKeys.map(h=>super.get(h)).values()}entries(){return this.toMap().entries()}firstEntry(){const h=this.firstKey();if(h==null)return;const p=this.get(h);return p===void 0?void 0:[h,p]}firstKey(){return this.sortedKeys[0]}lastEntry(){const h=this.lastKey();if(h==null)return;const p=this.get(h);return p===void 0?void 0:[h,p]}lastKey(){return[...this.sortedKeys].reverse()[0]}shiftEntry(){const h=this.firstEntry();if(h!=null)return this.delete(h[0]),h}popEntry(){const h=this.lastEntry();if(h!=null)return this.delete(h[0]),h}floorEntry(h){const p=this.floorKey(h);if(p!=null){const u=this.get(p);return u===void 0?void 0:[p,u]}}floorKey(h){return this.sortedKeys.filter(u=>this.compare(u,h)<=0).reverse()[0]}ceilingEntry(h){const p=this.ceilingKey(h);if(p!=null){const u=this.get(p);return u===void 0?void 0:[p,u]}}ceilingKey(h){return this.sortedKeys.filter(u=>this.compare(u,h)>=0)[0]}lowerEntry(h){const p=this.lowerKey(h);if(p!=null){const u=this.get(p);return u===void 0?void 0:[p,u]}}lowerKey(h){return this.sortedKeys.filter(u=>this.compare(u,h)<0).reverse()[0]}higherEntry(h){const p=this.higherKey(h);if(p!=null){const u=this.get(p);return u===void 0?void 0:[p,u]}}higherKey(h){return this.sortedKeys.filter(u=>this.compare(u,h)>0)[0]}splitLower(h,p=!0){const u=Array.from(this.entries()).filter(m=>{const f=this.compare(m[0],h)<0;return p?f||this.compare(m[0],h)===0:f});return new l(u,this.compareFn)}splitHigher(h,p=!0){const u=Array.from(this.entries()).filter(m=>{const f=this.compare(m[0],h)>0;return p?f||this.compare(m[0],h)===0:f});return new l(u,this.compareFn)}forEach(h,p){Array.from(this.entries()).forEach(([u,m])=>{h(m,u,this)},p)}}b.default=l,t.__exportStar(un(),b)})(tt)),tt}var fn=hn(),De=et(fn);class it{constructor(t=1/0){this.capacity=t}capacity;storage=[];push(t){if(this.size()===this.capacity)throw Error("Stack has reached max capacity, you cannot add more items");this.storage.push(t)}pop(){return this.storage.pop()}get(t){return this.storage[t]}peek(){return this.storage[this.size()-1]}size(){return this.storage.length}empty(){return this.storage.length==0}clear(){this.storage=[]}}class de{items;constructor(t){t!=null?this.items=new Array(t):this.items=new Array}size(){return this.items.length}set(t,e){this.items[t]=e}setItems(t){t.forEach(e=>{this.items.push(e)})}add(t){this.items.push(t)}addAll(t){this.items.concat(t.items)}get(t){return this.items[t]}remove(t){const e=this.items.indexOf(t);return e==-1?!1:(this.items.splice(e,1),!0)}removeByIndex(t){const e=this.items[t];return this.items.splice(t,1),e}contains(t){return this.items.includes(t)}indexOf(t){return this.items.indexOf(t)}toArray(){return this.items}clear(){this.items.splice(0,this.items.length)}toString(){return`[${this.items.toString()}]`}toJSON(){return{values:this.items}}[Symbol.iterator](){return this.items.values()}}class ae{_elements;[Symbol.toStringTag]="OrderedIntegerSet";constructor(t){t===void 0?this._elements=[]:t instanceof ae?this._elements=[...t._elements]:this._elements=[t]}static fromArray(t){const e=new ae;return e.addAllArray(t),e}clone(){return new ae(this)}get size(){return this._elements.length}isEmpty(){return this._elements.length===0}add(t){for(let e=0;e<this._elements.length;e++){if(this._elements[e]==t)return!1;if(this._elements[e]>t)return this._elements.splice(e,0,t),!0}return this._elements.push(t),!0}first(){return this._elements.length==0?-1:this._elements[0]}contains(t){return this._elements.includes(t)}has(t){return this._elements.includes(t)}delete(t){for(let e=0;e<this._elements.length;e++)if(this._elements[e]===t)return this._elements.splice(e,1),!0;return!1}clear(){this._elements.length=0}addAll(t){const e=this._elements.length;if(this._elements[this._elements.length-1]<t._elements[0])return this._elements.push(...t._elements),e!=this._elements.length;let n=0,r=0;const s=[];for(;n<this._elements.length||r<t._elements.length;){if(n==this._elements.length){for(;r<t._elements.length;)s.push(t._elements[r++]);break}if(r==t._elements.length){for(;n<this._elements.length;)s.push(this._elements[n++]);break}this._elements[n]==t._elements[r]?(s.push(this._elements[n]),n++,r++):this._elements[n]<t._elements[r]?s.push(this._elements[n++]):s.push(t._elements[r++])}return this._elements=s,e!=this._elements.length}addAllArray(t){const e=this._elements.length;return t.forEach(n=>this.add(n)),e!=this._elements.length}intersection(t,e=!0){const n=this._elements.length,r=[];for(const s of t._elements)this.contains(s)&&r.push(s);return e?(this._elements=r,n!=this._elements.length):ae.fromArray(r)}list(){return this._elements}length(){return this._elements.length}entries(){return this._elements.entries()}keys(){return this._elements.keys()}values(){return this._elements.values()}equals(t){const e=t._elements,n=this._elements;return n.length!==e.length?!1:n.every((r,s)=>r===e[s])}[Symbol.iterator](){return this._elements.values()}toJSON(){return{values:this._elements}}toString(){return`(${this._elements.toString()})`}}class le extends Error{_position;constructor(t,e){super(t),e==null?this._position=-1:this._position=e,Object.setPrototypeOf(this,le.prototype)}get position(){return this._position}set position(t){this._position=t}toString(){return this.message+", em "+this._position}}class he extends le{constructor(t,e){e==null?super(t):super(t,e)}}class ge extends le{constructor(t,e){e==null?super(t):super(t,e)}}class V extends le{constructor(t,e){e==null?super(t):super(t,e)}}class Ie extends Error{constructor(t){super(t)}}class pe{_id;_lexeme;_position;constructor(t,e,n){this._id=t,this._lexeme=e,this._position=n}get id(){return this._id}get lexeme(){return this._lexeme}get position(){return this._position}toString(){return this._id+"("+this._lexeme+")"}}class xe{static translateString(t){let e="";for(let n=0;n<t.length;n++){const r=t.charAt(n);switch(r){case'"':e+="&quot;";break;case"&":e+="&amp;";break;case"<":e+="&lt;";break;case">":e+="&gt;";break;default:e+=r}}return e}}class dn{_fa;_input="";_position=0;_sensitive=!0;constructor(t,e){this._fa=t,this._sensitive=e}analyse(t){let e=0;for(let n=0;n<t.length;n++)if(e=this._fa.nextState(t.charAt(n),e),e<=0)return-1;return this._fa.tokenForState(e)}setInput(t){this._input=t,this._position=0}nextToken(){if(!this.hasInput())return null;const t=this._position;let e=0,n=0,r=-1,s=-1,i=-1,o=-1;for(;this.hasInput()&&(n=e,e=this._fa.nextState(this.nextChar(),e),!(e<0));)this._fa.tokenForState(e)>=0&&(r=e,s=this._position),this._fa.isContext(e)&&(i=e,o=this._position);if(r<0||r!=e&&this._fa.tokenForState(n)==-2)throw new he(this._fa.getError(n),t);i!=-1&&this._fa.getOrigin(r)==i&&(s=o),this._position=s;let a=this._fa.tokenForState(r);if(a==0)return this.nextToken();{const l=this._input.substring(t,s);return a=this.lookupToken(a,l),new pe(a,l,t)}}lookupToken(t,e){let n=this._fa.getSpecialCasesIndexes()[t][0],r=this._fa.getSpecialCasesIndexes()[t][1]-1;for(this._sensitive||(e=e.toUpperCase());n<=r;){const s=Math.floor((n+r)/2),i=this.compareValues(this._fa.specialCases[s].key,e);if(i==0)return this._fa.specialCases[s].value;i<0?n=s+1:r=s-1}return t}hasInput(){return this._position<this._input.length}nextChar(){return this.hasInput()?this._input.charAt(this._position++):"￿"}compareValues(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charCodeAt(r),i=e.charCodeAt(r);if(s!=i)return s-i}return t.length-e.length}}class Bt{key;value;constructor(t,e){this.key=t,this.value=e}toString(){return"["+this.key+"->"+this.value+"]"}}class pn{_transitions;_finals;_context;_alphabet;_tokenNames;_errors=[];_hasContext=!1;_specialCasesIndexes;_specialCases;constructor(t,e,n,r,s,i,o,a){this._alphabet=t,this._transitions=e,this._finals=n,this._context=i,this._specialCasesIndexes=r,this._specialCases=s,this._tokenNames=o;for(const l of i)if(l[0]==1){this._hasContext=!0;break}this.buildErrors(),this.checkSpecialCases(a)}checkSpecialCases(t){const e=new dn(this,t);for(let n=0;n<this._specialCasesIndexes.length;n++){const r=this._specialCasesIndexes[n];for(let s=r[0];s<r[1];s++)if(e.analyse(this._specialCases[s].key)!=n)throw new ge('O valor "'+this._specialCases[s].key+`" não é válido como caso especial de '`+this._tokenNames.get(n-2)+"', na definição de '"+this._tokenNames.get(this._specialCases[s].value-2)+"'")}}nextState(t,e){const n=this._transitions.get(e).get(t);return n??-1}tokenForState(t){return t<0||t>=this._finals.length?-1:this._finals[t]}finalStatesFromState(t){const e=new Set;e.add(t);let n=!0;for(;n;){n=!1;for(const s of e){for(const i of this._alphabet.list()){const o=String.fromCodePoint(i),a=this.nextState(o,s);if(a!=-1&&!e.has(a)){e.add(a),n=!0;break}}if(n)break}}const r=new Set;for(const s of e)this.tokenForState(s)>=0&&r.add(s);return r}tokensFromState(t){const e=this.finalStatesFromState(t),n=new Set;for(const r of e){const s=this.tokenForState(r);s>=0&&n.add(s)}return n}buildErrors(){this._errors=[],this._errors[0]="Caractere não esperado";for(let t=1;t<this._transitions.size();t++)if(this.tokenForState(t)>=0)this._errors[t]="";else{const e=this.tokensFromState(t);let n="Erro identificando ";for(const r of e)r>0?n+=this._tokenNames.get(r-2):n+="<ignorar>",n+=" ou ";n=n.substring(0,n.length-4),this._errors[t]=n.toString()}}get transitions(){return this._transitions}get tokens(){return this._tokenNames}get specialCases(){return this._specialCases}get errors(){return this._errors}getError(t){const e=this._errors[t];if(e!=null)return e;throw Error("Sem erros")}getSpecialCasesIndexes(){return this._specialCasesIndexes}isContext(t){return this._context[t][0]==1}getOrigin(t){return this._context[t][1]}hasContext(){return this._hasContext}translateString(t){let e="";for(let n=0;n<t.length;n++){const r=t.charAt(n);switch(r){case'"':e+="&quot;";break;case"&":e+="&amp;";break;case"<":e+="&lt;";break;case">":e+="&gt;";break;default:e+=r}}return e}asHTML(){let t="";t+='<HTML><HEAD><TITLE> Tabela de Transições </TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',t+='<TR align=center><TD rowspan="2" bgcolor=black><FONT color=white><B>ESTADO</B></FONT></TD><TD rowspan="2" bgcolor=black><FONT color=white><B>TOKEN<BR>RETORNADO</B></FONT></TD><TD colspan="'+this._alphabet.size+'" bgcolor=black><FONT color=white><B>ENTRADA</B></FONT></TD></TR><TR align=center>';for(const e of this._alphabet.list()){const n=this.escapeSpecialCharacters(String.fromCodePoint(e));t+="<TD bgcolor=#99FF66 nowrap><B>"+this.translateChar(n)+"</B></TD>"}t+="</TR>";for(let e=0;e<this._transitions.size();e++){t+="<TR align=center><TD bgcolor=#99FF66><B>"+e+"</B></TD>";const n=this._finals[e];let r=null;if(n>0){r==null&&(r="#FFFFCC");let i=xe.translateString(this._tokenNames.get(n-2));this.getOrigin(e)>=0&&(i+=" / "+this.getOrigin(e)),t+="<TD bgcolor="+r+" nowrap>"+i+"</TD>"}else n==0?(r==null&&(r="#99CCFF"),t+="<TD bgcolor="+r+"><B>:</B></TD>"):n==-2?t+="<TD bgcolor=#FF0000>?</TD>":(r==null&&(r="#FFCC99"),t+="<TD bgcolor="+r+">?</TD>");const s=this._transitions.get(e);for(const i of this._alphabet.list()){t+="<TD width=40 bgcolor=#F5F5F5>";const o=s.get(String.fromCodePoint(i));o!=null&&o>=0?t+=o:t+="-",t+="</TD>"}t+="</TR>"}return t+="</TABLE></FONT></BODY></HTML>",t}escapeSpecialCharacters(t){return t.replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\s/g,"' '")}translateChar(t){switch(t){case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case" ":return"' '";case'"':return"&quot;";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:{const e=t.charCodeAt(0);return e>=32&&e<=126||e>=161&&e<=255?t:e.toString()}}}}class L{scannerName="Lexico";parserName="Sintatico";semanticName="Semantico";pkgName="";generateScanner=!0;generateParser=!0;static LANG_JAVA=0;static LANG_CPP=1;static LANG_DELPHI=2;static LANG_PYTHON=3;static LANG_RUST=4;language=L.LANG_JAVA;static PARSER_LR=0;static PARSER_LALR=1;static PARSER_SLR=2;static PARSER_LL=3;static PARSER_REC_DESC=4;parser=L.PARSER_SLR;scannerCaseSensitive=!0;static SCANNER_TABLE_FULL=0;static SCANNER_TABLE_COMPACT=1;static SCANNER_TABLE_HARDCODE=2;scannerTable=L.SCANNER_TABLE_FULL;static INPUT_STREAM=0;static INPUT_STRING=1;input=L.INPUT_STRING;toString(){let t="";switch(t+="GenerateScanner = "+this.generateScanner,t+=`
GenerateParser = `+this.generateParser,t+=`
Language = `,this.language){case L.LANG_CPP:t+="C++";break;case L.LANG_JAVA:t+="Java";break;case L.LANG_DELPHI:t+="Delphi";break;case L.LANG_PYTHON:t+="Python";break;case L.LANG_RUST:t+="Rust";break}if(t+=`
ScannerName = `+this.scannerName,this.generateParser&&(t+=`
ParserName = `+this.parserName,t+=`
SemanticName = `+this.semanticName),this.pkgName.length>0&&(t+=`
Package = `+this.pkgName),this.generateScanner){switch(t+=`
ScannerCaseSensitive = `+this.scannerCaseSensitive,t+=`
ScannerTable = `,this.scannerTable){case L.SCANNER_TABLE_FULL:t+="Full";break;case L.SCANNER_TABLE_COMPACT:t+="Compact";break;case L.SCANNER_TABLE_HARDCODE:t+="Hardcode";break}switch(t+=`
Input = `,this.input){case L.INPUT_STREAM:t+="Stream";break;case L.INPUT_STRING:t+="String";break}}if(this.generateParser)switch(t+=`
Parser = `,this.parser){case L.PARSER_LR:t+="LR";break;case L.PARSER_LALR:t+="LALR";break;case L.PARSER_SLR:t+="SLR";break;case L.PARSER_LL:t+="LL";break;case L.PARSER_REC_DESC:t+="RD";break}return t}constructorFromString(t){let e=new L;if(t===void 0)return e;const n=t.split(`
`);for(const r of n){const[s,i]=r.split("=");e.setOption(s.trim(),i.trim())}return e}setOption(t,e){if(t.toUpperCase()==="GenerateScanner".toUpperCase())this.generateScanner=/true/i.test(e);else if(t.toUpperCase()==="GenerateParser".toUpperCase())this.generateParser=/true/i.test(e);else if(t.toUpperCase()==="Language".toUpperCase())if(e.toUpperCase()==="C++".toUpperCase())this.language=L.LANG_CPP;else if(e.toUpperCase()==="Java".toUpperCase())this.language=L.LANG_JAVA;else if(e.toUpperCase()==="Delphi".toUpperCase())this.language=L.LANG_DELPHI;else if(e.toUpperCase()==="Python".toUpperCase())this.language=L.LANG_PYTHON;else if(e.toUpperCase()==="Rust".toUpperCase())this.language=L.LANG_RUST;else throw new Error("Erro processando arquivo");else if(t.toUpperCase()==="ScannerName".toUpperCase())this.scannerName=e;else if(t.toUpperCase()==="ParserName".toUpperCase())this.parserName=e;else if(t.toUpperCase()==="SemanticName".toUpperCase())this.semanticName=e;else if(t.toUpperCase()==="Package".toUpperCase())this.pkgName=e;else if(t.toUpperCase()==="ScannerCaseSensitive".toUpperCase())this.scannerCaseSensitive=/true/i.test(e);else if(t.toUpperCase()=="ScannerTable".toUpperCase())if(e.toUpperCase()==="Full".toUpperCase())this.scannerTable=L.SCANNER_TABLE_FULL;else if(e.toUpperCase()==="Compact".toUpperCase())this.scannerTable=L.SCANNER_TABLE_COMPACT;else if(e.toUpperCase()==="Hardcode".toUpperCase())this.scannerTable=L.SCANNER_TABLE_HARDCODE;else throw new Error("Erro processando arquivo");else if(t.toUpperCase()==="Input".toUpperCase())if(e.toUpperCase()==="Stream".toUpperCase())this.input=L.INPUT_STREAM;else if(e.toUpperCase()==="String".toUpperCase())this.input=L.INPUT_STRING;else throw new Error("Erro processando arquivo");else if(t.toUpperCase()==="Parser".toUpperCase())if(e.toUpperCase()==="LR".toUpperCase())this.parser=L.PARSER_LR;else if(e.toUpperCase()==="LALR".toUpperCase())this.parser=L.PARSER_LALR;else if(e.toUpperCase()==="SLR".toUpperCase())this.parser=L.PARSER_SLR;else if(e.toUpperCase()==="LL".toUpperCase())this.parser=L.PARSER_LL;else if(e.toUpperCase()==="RD".toUpperCase())this.parser=L.PARSER_REC_DESC;else throw new Error("Erro processando arquivo");else throw new Error("Erro processando arquivo")}}class Re{lhs;rhs;grammar;constructor(t,e,n){this.grammar=t,this.lhs=e,this.rhs=n===void 0?[]:n}clone(){return new Re(null,this.lhs,[...this.rhs])}get_lhs(){return this.lhs}clear_rhs(){this.rhs=[]}set_lhs(t){this.lhs=t}get_rhs(){return this.rhs}set_rhs(t,e){const n=this.rhs[t];return this.rhs[t]=e,n}add_rhs(t){return this.rhs.push(t),t}firstSymbol(){if(this.grammar==null)return-1;for(let t=0;t<this.rhs.length;t++)if(!this.grammar.isSemanticAction(this.rhs[t]))return this.rhs[t];return 0}setGrammar(t){this.grammar=t}getGrammar(){return this.grammar}toString(){if(this.grammar==null)return"error";const t=[];if(t.push(this.grammar.symbols[this.lhs]+" ::="),this.rhs.length===0)t.push(" "+se.EPSILON_STR);else for(let e=0;e<this.rhs.length;e++)this.grammar.isSemanticAction(this.rhs[e])?t.push(" #"+(this.rhs[e]-this.grammar.FIRST_SEMANTIC_ACTION())):t.push(" "+this.grammar.symbols[this.rhs[e]]);return t.join("")}equals(t){if(this.lhs!==t.lhs)return!1;if(this.rhs.length!==t.rhs.length)return!1;for(let e=0;e<this.rhs.length;e++)if(this.rhs[e]!==t.rhs[e])return!1;return!0}static compareTo(t,e){if(t===null)return-1;if(t.lhs!==e.lhs)return t.lhs-e.lhs;{if(t.grammar===null)return-1;const n=t.grammar.isEpsilon(t.rhs),r=t.grammar.isEpsilon(e.rhs);if(n&&r)return 0;if(n)return 1;if(r)return-1;for(let s=0;s<t.rhs.length&&s<e.rhs.length;s++)if(t.rhs[s]!==e.rhs[s])return t.rhs[s]-e.rhs[s];return e.rhs.length-t.rhs.length}}}class se{static EPSILON=0;static DOLLAR=1;static FIRST_TERMINAL=this.EPSILON+2;static EPSILON_STR="î";_symbols=[];FIRST_NON_TERMINAL=0;FIRST_SEMANTIC_ACTION(){return this._symbols.length}LAST_SEMANTIC_ACTION(){return this.FIRST_SEMANTIC_ACTION()+this.SEMANTIC_ACTION_COUNT}SEMANTIC_ACTION_COUNT=0;_startSymbol=0;firstSet=[];followSet=[];normalLR=!1;_productions=new de;constructor(t,e,n,r){const s=[...t],i=[...e],o=new de;n.toArray().forEach(l=>o.add(l.clone()));const a=r;this.setSymbols(s,i,a),this.setProductions(o),this.fillFirstSet(),this.fillFollowSet()}setSymbols(t,e,n){this._symbols=[],this.FIRST_NON_TERMINAL=t.length+2,this._symbols[se.EPSILON]=se.EPSILON_STR,this._symbols[se.DOLLAR]="$";for(let r=0,s=se.FIRST_TERMINAL;r<t.length;r++,s++)this._symbols[s]=t[r];for(let r=0,s=this.FIRST_NON_TERMINAL;r<e.length;r++,s++)this._symbols[s]=e[r];this._startSymbol=n}setProductions(t){t.toArray().forEach(n=>this._productions.add(n));let e=0;for(let n=0;n<this._productions.size();n++){this._productions.get(n).setGrammar(this);for(let r=0;r<this._productions.get(n).get_rhs().length;r++)this._productions.get(n).get_rhs()[r]>e&&(e=this._productions.get(n).get_rhs()[r])}this.SEMANTIC_ACTION_COUNT=e-this.FIRST_SEMANTIC_ACTION(),this.SEMANTIC_ACTION_COUNT<0&&(this.SEMANTIC_ACTION_COUNT=-1)}isTerminal(t){return t<this.FIRST_NON_TERMINAL}isNonTerminal(t){return t>=this.FIRST_NON_TERMINAL&&t<this.FIRST_SEMANTIC_ACTION()}isSemanticAction(t){return t>=this.FIRST_SEMANTIC_ACTION()}get productions(){return this._productions}get symbols(){return this._symbols}get terminals(){return this.symbols.slice(2,this.FIRST_NON_TERMINAL)}get nonTerminals(){return this.symbols.slice(this.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION())}get startSymbol(){return this._startSymbol}asNormalLR(){if(this.normalLR)return this;const t=this.terminals,e=2+this.SEMANTIC_ACTION_COUNT,n=this.nonTerminals,r=[...n,...new Array(e)],s=new de(0);s.setItems(this._productions.toArray());for(let a=0;a<this.SEMANTIC_ACTION_COUNT+1;a++)r[n.length+a]="<#"+a+">",s.add(new Re(null,this.FIRST_SEMANTIC_ACTION()+a,[]));r[r.length-1]="<-START->";const i=new Re(null,this.FIRST_SEMANTIC_ACTION()+e-1,[this.startSymbol]);s.add(i);const o=new se(t,r,s,this.FIRST_SEMANTIC_ACTION()+e-1);return o.normalLR=!0,o}createProduction(t,e){if(e===void 0)return new Re(this,t,[]);const n=new Re(this,t,e);for(let r=0;r<this._productions.size();r++)if(this._productions.get(r).equals(n))return null;return n}isEpsilon(t,e){e===void 0&&(e=0);for(let n=e;n<t.length;n++)if(!this.isSemanticAction(t[n]))return!1;return!0}markEpsilon(){const t=new ae;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);this.isEpsilon(r.get_rhs())&&t.add(r.get_lhs())}for(let n=this.FIRST_SEMANTIC_ACTION();n<=this.LAST_SEMANTIC_ACTION();n++)t.add(n);let e=!0;for(;e;){e=!1;let n;for(let r=0;r<this._productions.size();r++){const s=this._productions.get(r);n=!0;for(let i=0;i<s.get_rhs().length;i++)n=n&&t.has(s.get_rhs()[i]);n&&!t.has(s.get_lhs())&&(e=!0,t.add(s.get_lhs()))}}return t}static EMPTY_SET=new ae(se.EPSILON);first(t,e){if(!Array.isArray(t))return this.isSemanticAction(t)?se.EMPTY_SET:this.firstSet[t];e===void 0&&(e=0);const n=new ae;if(t.length-e==1&&t[e]==se.DOLLAR&&n.add(se.DOLLAR),this.isEpsilon(t,e))n.add(se.EPSILON);else{const r=t.length;for(;this.isSemanticAction(t[e]);)e++;let s=this.first(t[e]).clone();s.delete(se.EPSILON),n.addAll(s);let i=e;for(;i<r-1&&this.first(t[i]).has(se.EPSILON);)i++,s=this.first(t[i]).clone(),s.delete(se.EPSILON),n.addAll(s);i==r-1&&this.first(t[i]).has(se.EPSILON)&&n.add(se.EPSILON)}return n}fillFirstSet(){const t=this.markEpsilon();this.firstSet=new Array;for(let n=0;n<this._symbols.length;n++)this.firstSet[n]=new ae;for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)t.has(n)&&this.firstSet[n].add(se.EPSILON);for(let n=se.FIRST_TERMINAL;n<this.FIRST_NON_TERMINAL;n++){this.firstSet[n].add(n);for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++){let s=!1;for(let i=0;i<this._productions.size();i++){const o=this._productions.get(i);if(o.get_lhs()==r&&!this.isEpsilon(o.get_rhs())&&o.firstSymbol()==n){s=!0;break}}s&&this.firstSet[r].add(n)}}let e;do{e=!1;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n),s=this.firstSet[r.get_lhs()].clone(),i=this.first(r.get_rhs());this.firstSet[r.get_lhs()].addAll(i),e||s.equals(this.first(r.get_lhs()))||(e=!0)}}while(e)}fillFollowSet(){this.followSet=new Array;for(let e=0;e<this._symbols.length;e++)this.followSet[e]=new ae;this.followSet[this._startSymbol].add(se.DOLLAR);let t;do{t=!1;for(let e=0;e<this._productions.size();e++){const n=this._productions.get(e);for(let r=0;r<n.get_rhs().length;r++)if(this.isNonTerminal(n.get_rhs()[r])){const s=this.first(n.get_rhs(),r+1),i=s.has(se.EPSILON);if(n.get_rhs().length>r+1){s.delete(se.EPSILON);const o=this.followSet[n.get_rhs()[r]].clone();this.followSet[n.get_rhs()[r]].addAll(s),!t&&!this.followSet[n.get_rhs()[r]].equals(o)&&(t=!0)}if(i){const o=this.followSet[n.get_rhs()[r]].clone();this.followSet[n.get_rhs()[r]].addAll(this.followSet[n.get_lhs()]),!t&&!this.followSet[n.get_rhs()[r]].equals(o)&&(t=!0)}}}}while(t)}stringFirstFollow(){let t="";for(let e=this.FIRST_NON_TERMINAL;e<this.firstSet.length;e++){let n="";n+=`FIRST( ${this.symbols[e]} ) = { `;for(let r=0;r<this.firstSet[e].size;r++)this.firstSet[e].list()[r]&&(n+=`${this.symbols[r]} `);n+="}",t=+n+`
`}for(let e=this.FIRST_NON_TERMINAL;e<this.followSet.length;e++){let n="";n+=`FOLLOW(${this.symbols[e]}) = { `;for(let r=0;r<this.followSet[e].size;r++)this.followSet[e].list()[r]&&(n+=this.symbols[r]+" ");n+="}",t+=n+`
`}return t}ffAsHTML(){let t="";t+='<HTML><HEAD><TITLE>First &amp; Follow</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',t+="<TR align=center><TD bgcolor=black><FONT color=white><B>SÍMBOLO</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FIRST</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FOLLOW</B></FONT></TD></TR>";for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++){t+="<TR align=center>",t+=`<TD nowrap bgcolor=#F5F5F5><B> ${xe.translateString(this.symbols[e])} </B></TD>`;let n="  ";this.firstSet[e].list().forEach(r=>n+=this.symbols[r]+", "),n=n.slice(0,-2),t+=`<TD nowrap bgcolor=#F5F5F5>${xe.translateString(n)}</TD>`,n="  ",this.followSet[e].list().forEach(r=>n+=this.symbols[r]+", "),n=n.slice(0,-2),t+=`<TD nowrap bgcolor=#F5F5F5>${xe.translateString(n)}</TD>`,t+="</TR>"}return t+="</TABLE></FONT></BODY></HTML>",t}removeImproductiveSymbols(){const t=this.getProductiveSymbols();this.updateSymbols(t)}removeUselessSymbols(){this.removeImproductiveSymbols(),this.removeUnreachableSymbols()}removeRepeatedProductions(){}productionsFor(t){const e=new ae;for(let n=0;n<this.productions.size();n++)this.productions.get(n).get_lhs()==t&&e.add(n);return e}transformToFindRecursion(t){const e=new de;t.toArray().forEach(n=>e.add(n));for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)for(let r=this.FIRST_NON_TERMINAL;r<n;r++)for(let s=0;s<e.size();s++){const i=e.get(s);if(i.get_lhs()==n&&i.firstSymbol()==r){e.toArray().splice(s,1),s--;const o=[];for(let a=0;a<i.get_rhs().length&&this.isSemanticAction(i.get_rhs()[a]);a++)o.push(i.get_rhs()[a]);for(let a=0;a<e.size();a++){const l=e.get(a);if(l.get_lhs()==r){const _=new Array(l.get_rhs().length+i.get_rhs().length-1);let h=0;for(;h<o.length;h++)_[h]=o[h];let p=h;for(h=0;h<l.get_rhs().length;h++)_[h+p]=l.get_rhs()[h];for(p=p+h-(o.length+1),h=o.length+1;h<i.get_rhs().length;h++)_[h+p]=i.get_rhs()[h];const u=this.createProduction(i.get_lhs(),_);u!=null&&e.add(u)}}}}return e}removeRecursion(){this._productions=this.transformToFindRecursion(this._productions),this.removeDirectRecursion()}removeDirectRecursion(){for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++){let e=this.productionsFor(t);const n=this.productionsFor(t);let r=-1;const s=e.list();for(let i=0;i<s.length;i++){const o=s[i];this._productions.get(o).get_lhs()!=this._productions.get(o).firstSymbol()&&s.splice(i,1)}if(e=new ae,e.addAllArray(s),e.size>0){r=this.createSymbol(this.addTail(this._symbols[t]));for(const i of n){const o=this._productions.get(i);e.list()[i]?(o.get_rhs().splice(0,1),o.get_rhs().push(r),o.set_lhs(r)):o.get_rhs().push(r)}}if(r!=-1){const i=this.createProduction(r);i!=null&&this.productions.add(i)}}this.fillFirstSet(),this.fillFollowSet(),this.sort()}createSymbol(t){for(const n of this._productions){const r=n.get_rhs();for(let s=0;s<r.length;s++)this.isSemanticAction(r[s])&&r.push(s,r[s]+1)}let e=new Array(this._symbols.length+1);return e=[...this._symbols],this._symbols=e,this._symbols[this._symbols.length-1]=t,this._symbols.length-1}derives(t,e){if(t==e)return!0;const n=new ae;n.add(e);for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)for(const s of n)if(this.derivesDirectly(r,s)&&!n.list()[r]){n.add(r),r=-1;continue}return n.list()[t]!=0}derivesDirectly(t,e){const n=this.markEpsilon();for(let r=0;r<this._productions.size();r++){const s=this._productions.get(r);if(s.get_lhs()==t)if(s.get_rhs().length==1){if(s.get_rhs()[0]==e)return!0}else{const i=s.get_rhs();for(let o=0;o<i.length;o++)if(i[o]==e){let a=!0;for(let l=0;l<o;l++)n.list()[i[l]]||(a=!1);for(let l=o+1;l<i.length;l++)n.list()[i[l]]||(a=!1);if(a)return!0}}}return!1}removeUnitaryProductions(){const t=new de;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);(r.get_rhs().length!=1||r.get_rhs()[0]!=r.get_lhs())&&t.add(r)}const e=[];for(let n=this.FIRST_NON_TERMINAL;n<e.length;n++){e[n]=new ae;for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)this.derives(n,r)&&e[n].add(r)}this._productions=new de;for(let n=0;n<t.size();n++){const r=t.get(n);if(r.get_rhs().length!=1||!this.isNonTerminal(r.get_rhs()[0])){for(let s=this.FIRST_NON_TERMINAL;s<e.length;s++)if(e[s].list()[r.get_lhs()]){const i=this.createProduction(s,r.get_rhs());i!=null&&this._productions.add(i)}}}this.sort()}removeEpsilon(){const t=this.markEpsilon(),e=new de;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);if(!this.isEpsilon(r.get_rhs())){let s=!0;for(let i=0;i<r.get_rhs().length;i++)s=s&&t.list()[r.get_rhs()[i]]!=0;s||e.add(r)}}for(let n=0;n<e.size();n++){const r=e.get(n);if(!this.isEpsilon(r.get_rhs())){let s=0;for(;s<r.get_rhs().length;){for(;s<r.get_rhs().length&&!(!this.isSemanticAction(r.get_rhs()[s])&&t.list()[r.get_rhs()[s]]);s++);if(s<r.get_rhs().length){const i=this.derivationAt(r,s);i!=null&&!e.contains(i)&&e.add(i),s++}}}}if(t.list()[this._startSymbol]){const n=this.createSymbol(this.addTail(this._symbols[this._startSymbol]));let r=this.createProduction(n,new Array(this._startSymbol));r!=null&&e.add(r),r=this.createProduction(n),r!=null&&e.add(r),this._startSymbol=n,this.fillFirstSet(),this.fillFollowSet()}this._productions=e,this.sort()}derivationAt(t,e){let n=new Array;for(let s=0;s<this._productions.size();s++)if(this._productions.get(s).get_lhs()==t.get_rhs()[e]&&this.isEpsilon(this._productions.get(s).get_rhs())){n=this._productions.get(s).get_rhs();break}const r=new Array;for(let s=0;s<e;s++)r.push(t.get_rhs()[s]);for(let s=0;s<n.length;s++)r.push(n[s]);for(let s=e+1;s<t.get_rhs().length;s++)r.push(t.get_rhs()[s]);return this.createProduction(t.get_lhs(),r)}addTail(t){t=t.substring(0,t.length-1)+"_T>";for(let e=0;e<this._symbols.length;e++)this._symbols[e]!=null&&this._symbols[e]==t&&(t=t.substring(0,t.length-1)+"_T>",e=0);return t}sort(){for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++){const n=this._symbols[e].substring(0,this._symbols[e].length-1)+"_T>";let r=e+1;for(;r<this.FIRST_SEMANTIC_ACTION()&&this._symbols[r]!=n;r++);if(r<this.FIRST_SEMANTIC_ACTION()){const s=e+1,i=r;s!=i&&this.moveSymbol(i,s)}}this.moveSymbol(this._startSymbol,this.FIRST_NON_TERMINAL);const t=this._productions.toArray().sort(Re.compareTo);this._productions.clear(),t.forEach(e=>this._productions.add(e))}moveSymbol(t,e){const n=this._symbols[t];for(let r=t;r>e;r--)this._symbols[r]=this._symbols[r-1];this._symbols[e]=n,this._startSymbol==t?this._startSymbol=e:this._startSymbol>=e&&this._startSymbol<t&&this._startSymbol++;for(const r of this._productions){r.get_lhs()==t?r.set_lhs(e):r.get_lhs()>=e&&r.get_lhs()<t&&r.set_lhs(r.get_lhs()+1);const s=r.get_rhs();for(let i=0;i<s.length;i++)s[i]==t?s.push(i,e):s[i]>=e&&s[i]<t&&s.push(i,s[i]+1)}}isLL(){return this.isFactored()&&!this.hasLeftRecursion()&&this.passThirdCondition()}hasLeftRecursion(){const t=this.transformToFindRecursion(this._productions);for(let e=0;e<t.size();e++)if(t.get(e).get_lhs()==t.get(e).firstSymbol())return!0;return!1}getLeftRecursiveSimbol(){const t=this.transformToFindRecursion(this._productions);for(let e=0;e<t.size();e++)if(t.get(e).get_lhs()==t.get(e).firstSymbol())return t.get(e).get_lhs();return-1}getNonFactoratedProductions(){const t=new ae;for(let e=0;e<this._productions.size();e++){const n=this._productions.get(e);for(let r=e+1;r<this.productions.size();r++){const s=this._productions.get(r);if(n.get_lhs()==s.get_lhs()){const i=this.first(n.get_rhs());i.intersection(this.first(s.get_rhs())),i.isEmpty()||(t.add(e),t.add(r))}}if(t.size>0)break}return t}isFactored(){for(let t=0;t<this._productions.size();t++){const e=this._productions.get(t);for(let n=t+1;n<this._productions.size();n++){const r=this.productions.get(n);if(e.get_lhs()==r.get_lhs()){const s=this.first(e.get_rhs());if(s.intersection(this.first(r.get_rhs())),!s.isEmpty())return!1}}}return!0}passThirdCondition(){const t=this.markEpsilon();for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++)if(t.has(e)){const n=new ae(this.firstSet[e]);if(n.intersection(this.followSet[e]),!n.isEmpty())return!1}return!0}getProductiveSymbols(){const t=new ae;for(let n=se.FIRST_TERMINAL;n<this.FIRST_NON_TERMINAL;n++)t.add(n);for(let n=this.FIRST_SEMANTIC_ACTION();n<=this.LAST_SEMANTIC_ACTION();n++)t.add(n);t.add(se.EPSILON);let e;do{e=!1;const n=new ae;for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)if(!t.has(r))for(let s=0;s<this._productions.size();s++){const i=this._productions.get(s);if(i.get_lhs()==r){let o=!0;for(let a=0;a<i.get_rhs().length;a++)o=o&&t.has(i.get_rhs()[a]);o&&(n.add(r),e=!0)}}t.addAll(n)}while(e);return t}removeUnreachableSymbols(){const t=this.getReachableSymbols();this.updateSymbols(t)}getReachableSymbols(){const t=new ae;t.add(this._startSymbol);let e;do{e=!1;const n=new ae;for(let r=0;r<this._symbols.length;r++)if(!t.has(r))for(let s=0;s<this.productions.size();s++){const i=this._productions.get(s);if(t.has(i.get_lhs())){for(let o=0;o<i.get_rhs().length;o++)if(i.get_rhs()[o]==r){n.add(r),e=!0;break}}}t.addAll(n)}while(e);return t}uselessSymbolsHTML(){const t=this.clone();try{t.removeUselessSymbols()}catch(i){console.warn(i)}const e=t.symbols,n=new ae;for(let i=2;i<this._symbols.length;i++)for(let o=0;o<e.length;o++)if(e[o]==this._symbols[i]){n.add(i);break}let r="";r+='<HTML><HEAD><TITLE>Símbolos inúteis</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif">';let s=0;for(let i=2;i<this._symbols.length;i++)n.has(i)||(r+=this._symbols[i]+"<br>",s++);return s==0&&(r+="Não há símbolos inúteis"),r+="</TABLE></FONT></BODY></HTML>",r}setToStr(t){let e="{ ";for(let n=0;n<t.size;n++)t.list()[n]&&(e+='"'+this._symbols[n]+'" ');return e+="}",e}factorate(){if(this.hasLeftRecursion())throw Error("new LeftRecursionException();");let t=!0;for(;t;){t=!1;for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++)t=t||this.factorateLeft(e)}}factorateLeft(t){let e=!1;const n=this.productionsFor(t);let r=new ae;const s=this.conflict(n,r);if(!r.isEmpty()){e=!0;for(let _=0;_<this._productions.size();_++){const h=this._productions.get(_);if(h.get_lhs()==t&&this.first(h.get_rhs()).list()[s]&&h.firstSymbol()!=s){const p=this.leftMostDerive(h);this._productions.toArray().splice(_,1),p.toArray().forEach(u=>this._productions.add(u)),_--,this.fillFirstSet(),this.fillFollowSet()}}r=new ae;for(let _=0;_<this._productions.size();_++){const h=this._productions.get(_);h.get_lhs()==t&&h.firstSymbol()==s&&r.add(_)}const i=this.createSymbol(this.addTail(this._symbols[t])),o=this.extractPrefix(r);for(const _ of r.list()){const h=this._productions.get(_);h.set_lhs(i),h.get_rhs().length>o.length?h.get_rhs().splice(0,o.length):h.clear_rhs()}const a=new Array;a.push(...o),a.push(i);const l=this.createProduction(t,a);l!=null&&this._productions.add(l),this.fillFirstSet(),this.fillFollowSet(),this.sort()}return e}leftMostDerive(t){if(this.isTerminal(t.firstSymbol()))return new de;{const e=new de,n=t.firstSymbol(),r=new Array;for(let s=0;s<t.get_rhs().length&&this.isSemanticAction(t.get_rhs()[s]);s++)r.push(t.get_rhs()[s]);for(const s of this.productionsFor(n).list()){const i=this.productions.get(s),o=new Array;for(let l=0;l<r.length;l++)o.push(r[l]);for(let l=0;l<i.get_rhs().length;l++)o.push(i.get_rhs()[l]);for(let l=r.length+1;l<t.get_rhs().length;l++)o.push(t.get_rhs()[l]);const a=this.createProduction(t.get_lhs(),o);a!=null&&!e.contains(a)&&e.add(a)}return e}}extractPrefix(t){const e=new Array;let n,r=0;do{n=!0;let s=0;const i=this._productions.get(s);if(i.get_rhs().length>r){const o=i.get_rhs()[r];for(;s>t.size;s++){const a=this.productions.get(s);(a.get_rhs().length<=r||a.get_rhs()[r]!=o)&&(n=!1)}n&&(e.push(i.get_rhs()[r]),r++)}else n=!1}while(n);return e}conflict(t,e){const n=new Array(this._symbols.length);for(let i=0;i<n.length;i++)n[i]=0;for(const i of t){const o=this._productions.get(i);for(const a of this.first(o.get_rhs()))n[a]++}n[se.EPSILON]=0,n[se.DOLLAR]=0;let r=0,s=0;for(let i=0;i<n.length;i++)n[i]>r&&(r=n[i],s=i);if(r>1)for(const i of t)this.first(this._productions.get(i).get_rhs()).list()[s]&&e.add(i);return s}toString(){let t="",e="",n=!0;for(let r=0;r<this.productions.size();r++){const s=this._productions.get(r);if(this._symbols[s.get_lhs()]!=e)n||(t+=`;

`),n=!1,e=this._symbols[s.get_lhs()],t+=e+" ::=";else{t+=`
`;for(let i=0;i<e.length;i++)t+=" ";t+="   |"}if(s.get_rhs().length==0)t+=" "+se.EPSILON_STR;else for(let i=0;i<s.get_rhs().length;i++)if(t+=" ",this.isSemanticAction(s.get_rhs()[i])){const o=s.get_rhs()[i]-this.FIRST_SEMANTIC_ACTION();t+="#"+o}else{const o=this._symbols[s.get_rhs()[i]];t+=o}}return t+=`;
`,t}clone(){try{const t=structuredClone(this),e=new Array(this.FIRST_NON_TERMINAL-2),n=new Array(this.FIRST_SEMANTIC_ACTION()-this.FIRST_NON_TERMINAL);for(let s=0;s<e.length;s++)e[s]=this._symbols[s+2].toString();for(let s=0;s<n.length;s++)n[s]=this._symbols[s+this.FIRST_NON_TERMINAL].toString();const r=new de;for(let s=0;s<this._productions.size();s++){const i=new Array(this._productions.get(s).get_rhs().length);for(let o=0;o<i.length;o++)i[o]=this._productions.get(s).get_rhs()[o];r.add(new Re(null,this._productions.get(s).get_lhs(),i))}return t.setSymbols(e,n,this._startSymbol),t.setProductions(r),t.fillFirstSet(),t.fillFollowSet(),t}catch(t){throw console.warn(t),new Error("Internal Error")}}removeSymbol(t){this._symbols.splice(t,1),this._startSymbol>t&&this._startSymbol--,this.FIRST_NON_TERMINAL>t&&this.FIRST_NON_TERMINAL--;for(let e=0;e<this._productions.size();e++){const n=this.productions.get(e);if(n.get_lhs()==t){this.productions.toArray().splice(e,1);continue}else n.get_lhs()>t&&n.set_lhs(n.get_lhs()-1);for(let r=0;r<n.get_rhs().length;r++){if(n.get_rhs()[r]==t){this.productions.toArray().splice(e,1);break}n.get_rhs()[r]>t&&n.set_rhs(r,n.get_rhs()[r]-1)}}}updateSymbols(t){t.add(se.EPSILON),t.add(se.DOLLAR);let e=0;for(let n=0;n<this._symbols.length;n++)t.list()[n]||(this.removeSymbol(n-e),e++);this.fillFirstSet(),this.fillFollowSet()}id_for_production(t){return this._productions.contains(t)?this._productions.indexOf(t):null}production_for_id(t){return this._productions.get(t)}}class ne{parameter;type;constructor(t,e){this.type=t,this.parameter=e}static SHIFT=0;static REDUCE=1;static ACTION=2;static ACCEPT=3;static GOTO=4;static ERROR=5;static CONSTANTS=["SHIFT ","REDUCE","ACTION","ACCEPT","GO_TO ","ERROR "];getType(){return this.type}getParameter(){return this.parameter}static createShift(t){return new ne(ne.SHIFT,t)}static createReduce(t){return new ne(ne.REDUCE,t)}static createAction(t){return new ne(ne.ACTION,t)}static createAccept(){return new ne(ne.ACCEPT,0)}static createGoTo(t){return new ne(ne.GOTO,t)}static createError(){return new ne(ne.ERROR,0)}toString(){switch(this.type){case ne.SHIFT:return"SHIFT("+this.parameter+")";case ne.REDUCE:return"REDUCE("+this.parameter+")";case ne.ACTION:return"SEM.ACT("+this.parameter+")";case ne.ACCEPT:return"ACCEPT";case ne.GOTO:return""+this.parameter;case ne.ERROR:return"-";default:return"???"}}equals(t){try{const e=t,n=this.type==e.type&&this.parameter==e.parameter;return n===void 0?!1:n}catch(e){return console.warn(e),!1}}hashCode(){let t=43;return t=t*this.parameter+17,t=t*this.type+17,t}}class Ut{conflictList=new de;constructor(){}}let _n=0;const ot=new Map;function mn(b,t){return new Promise(e=>{const n=_n++;ot.set(n,e),self.postMessage({type:"rpc_request",id:n,method:b,payload:t})})}function jt(){self.addEventListener("message",b=>{const t=b.data;if(t.type==="rpc_response"){const e=ot.get(t.id);e&&(ot.delete(t.id),e(t.result))}})}function gn(b,t){return window.prompt(b,t)}async function $t(b,t){return typeof window<"u"&&typeof window.document<"u"?Promise.resolve(gn(b,t)):mn("prompt",{text:b,defaultValue:t})}jt();class Tn extends Ut{_conflict;_state;_conflictListModel;constructor(t,e){super(),this._conflict=t===void 0?[]:t,this._state=e===void 0?-1:e,this._conflictListModel=new Array}async resolve(t,e){let n;e==0?n="$":n=t.terminals[e-1];let r="";r+="- O estado no topo da pilha é: "+this._state+`
`,r+="- O símbolo da entrada é: "+n+`
`,r+=`
Qual ação a ser executada:`,this._conflictListModel=[];for(let o=0;o<this._conflict.length;o++){let a;switch(this._conflict[o].getType()){case ne.REDUCE:a="Reduzir, pela produção "+this._conflict[o].getParameter();break;case ne.ACTION:a="Executar ação semântica "+this._conflict[o].getParameter();break;case ne.SHIFT:a='Empilhar "'+n+'"';break;default:a=this._conflict[o].toString();break}r+=`
Opção `+(o+1)+": "+a,this._conflictListModel.push({label:a,command:o})}r+=`

OBS: Se cancelar ou digitar opção inválida,
a opção 1 será escolhida como padrão.`;let s=null;try{s=await $t(r,"1")}catch(o){console.log(o,"Prompt não encontrado")}s==null&&(s="1");let i=Number(s);return isNaN(i)||i<0||i>this._conflict.length?i=0:i--,this._conflictListModel[i].command}showModal(t,e,n,r,s){const i=document.getElementById("myModal"),o=document.getElementById("confirmBtn"),a=document.getElementById("cancelBtn");i.style.display="block",o.textContent=e,a.textContent=n,o.onclick=function(){i.style.display="none",r&&r()},a.onclick=function(){i.style.display="none",s&&s()}}showDialog(t,e){const n=document.createElement("dialog");n.style.padding="20px",n.innerHTML=`<p>${t}<p>`,e.forEach(r=>{const s=document.createElement("button");s.textContent=r.label,s.onclick=()=>{n.close(),document.body.removeChild(n)},n.appendChild(s),n.appendChild(document.createElement("br"))}),n.addEventListener("close",()=>{document.body.removeChild(n)}),document.body.appendChild(n),n.showModal()}setup(t,e){this._conflict=t,this._state=e}}class Fe{_production;_position;_lookahead;_g;constructor(t,e,n){this._production=t,this._position=e,this._lookahead=n===void 0?0:n,this._g=t.getGrammar()}get position(){return this._position}get lookahead(){return this._lookahead}get production(){return this._production}equals(t){try{return t.production.equals(this._production)&&t.position==this._position&&this._lookahead==t.lookahead}catch(e){return console.warn(e),!1}}toString(){let t="";if(this._g==null)throw new V("Grammar to string is null");t+=this._g.symbols[this._production.get_lhs()]+" ::= ";for(let e=0;e<this._production.get_rhs().length&&e<this._position;e++){const n=this._production.get_rhs()[e];this._g.isSemanticAction(n)?t+="#"+(n-this._g.FIRST_SEMANTIC_ACTION())+" ":t+=this._g.symbols[n]+" "}t+="o ";for(let e=this._position;e<this._production.get_rhs().length;e++){const n=this._production.get_rhs()[e];this._g.isSemanticAction(n)?t+="#"+(n-this._g.FIRST_SEMANTIC_ACTION())+" ":t+=this._g?.symbols[n]+" "}return this._lookahead!=0&&(t+=", ",t+=this._g?.symbols[this._lookahead]),t.toString()}clone(){return new Fe(this._production,this._position,this._lookahead)}compareTo(t){let e=Re.compareTo(this._production,t.production);return e!=0?e:(e=this._position-t.position,e!=0?e:this._lookahead-t.lookahead)}}class Ht{g;itemList;semanticStart;firstSementicAction;lalrgotocache=new Map;itemListCollisionHashes;constructor(t){this.itemListCollisionHashes={},this.semanticStart=t.FIRST_SEMANTIC_ACTION(),this.firstSementicAction=t.FIRST_SEMANTIC_ACTION(),this.g=t.asNormalLR(),this.initCaches(),this.itemList=this.computeItems()}itemStringHash(t){let e="";for(const n of t)e+=n.toString()+":";return e}itemListAdd(t){let e=this.itemStringHash(t);this.itemListCollisionHashes[e]=!0,this.itemList.add(t)}itemListAddIfNotExists(t){let e=this.itemStringHash(t);this.itemListCollisionHashes[e]==!0&&(this.itemListCollisionHashes[e]=!0,this.itemList.add(t))}getLalrGotoCache(){return this.lalrgotocache}getErrors(t){const e=new de;for(let n=0;n<t.length;n++){const r=new ae;for(let a=1;a<this.g.FIRST_NON_TERMINAL;a++)t[n][a-1].getType()!=ne.ERROR&&r.add(a);let s="";const i=r.size;let o=0;for(const a of r.list())a==1?s+="fim de sentença":s+=this.g.symbols[a],i-o==2?s+=" ou ":i-o>2&&(s+=", "),o++;e.add(s.toString())}return e}get grammar(){return this.g}get firstSemanticAction(){return this.firstSementicAction}async buildIntTable(){const t=await this.buildTable(),e=[];for(let n=0;n<t.length;n++){e[n]=[];for(let r=0;r<t[n].length;r++)e[n][r]=[],e[n][r][0]=t[n][r].getType(),e[n][r][1]=t[n][r].getParameter()}return e}async resolveConflicts(t){const e=[],n=ne.createError();for(let r=0;r<t.length;r++){e[r]=[];for(let s=0;s<t[0].length;s++)switch(t[r][s].size){case 0:e[r][s]=n;break;case 1:e[r][s]=t[r][s].values().next().value;break;default:e[r][s]=await this.solve(t[r][s],r,s);break}}return e}async solve(t,e,n){const r=[];let s=0;for(const o of t)r[s]=o,s++;let i=!0;for(let o=1;o<r.length&&(i=i&&r[o-1].equals(r[o]),!!i);o++);if(i)return r[0];{const o=new Tn;return o.setup(r,e),r[await o.resolve(this.g,n)]}}async tableAsHTML(){let t="";t+='<HTML><HEAD><TITLE>Tabela SLR(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const e=await this.buildTable();t+="<TR>",t+="<TD  align=center rowspan=2 bgcolor=black nowrap><FONT color=white><B>ESTADO</B></FONT></TD>",t+="<TD  align=center colspan="+(this.g.FIRST_NON_TERMINAL-1)+" bgcolor=black nowrap><FONT color=white><B>AÇÃO</B></FONT></TD>",t+="<TD  align=center colspan="+(this.g.FIRST_SEMANTIC_ACTION()-this.g.FIRST_NON_TERMINAL)+" bgcolor=black nowrap><FONT color=white><B>DESVIO</B></FONT></TD>",t+="</TR>",t+="<TR>";for(let n=0;n<e[0].length-1;n++)t+="<TD  align=center bgcolor=black nowrap><FONT color=white><B>"+xe.translateString(this.g.symbols[n+1])+"</B></FONT></TD>";t+="</TR>";for(let n=0;n<e.length;n++){const r=e[n];t+="<TR>",t+="<TD bgcolor=black align=right nowrap><FONT color=white><B>"+n+"</B></FONT></TD>";for(let s=0;s<r.length-1;s++){const i=r[s];let o="";i!=null&&(o=i.toString());const a=s+1<this.g.FIRST_NON_TERMINAL?"#F5F5F5":"#E6E6E6";t+="<TD bgcolor="+a+" align=center nowrap>"+o+"</TD>"}t+="</TR>"}return t+="</TABLE></FONT></BODY></HTML>",t.toString()}itemsAsHTML(){let t="";t+='<HTML><HEAD><TITLE>Itens LR</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const e=this.itemList;t+="<TR>",t+="<TD  align=center bgcolor=black><FONT color=white><B>Estado</B></FONT></TD>",t+="<TD  align=center bgcolor=black><FONT color=white><B>Itens</B></FONT></TD>",t+="<TD  align=center bgcolor=black><FONT color=white><B>Desvio</B></FONT></TD>",t+="</TR>";for(let n=0;n<e.size();n++){const r=n%2==0?"#F5F5F5":"#E6E6E6",s=e.get(n);t+="<TR>",t+="<TD bgcolor="+r+" align=right rowspan="+s.size()+">"+n+"</TD>",t+="<TD bgcolor="+r+" nowrap>"+xe.translateString(s.get(0).toString())+"</TD>";let i=s.get(0),o=i.production;if(o.get_rhs().length>i.position){const a=o.get_rhs()[i.position],l=this.goTo(s,a),_=this.getIndexFromList(e,l);t+="<TD bgcolor="+r+" align=right>"+_+"</TD>"}else t+="<TD bgcolor="+r+" align=right>&nbsp</TD>";t+="</TR>";for(let a=1;a<s.size();a++){if(t+="<TR>",t+="<TD bgcolor="+r+" nowrap>"+xe.translateString(s.get(a).toString())+"</TD>",i=s.get(a),o=i.production,o.get_rhs().length>i.position){const l=o.get_rhs()[i.position],_=this.goTo(s,l),h=this.getIndexFromList(e,_);t+="<TD bgcolor="+r+" align=right>"+h+"</TD>"}else t+="<TD bgcolor="+r+" align=right>&nbsp</TD>";t+="</TR>"}t+="</TR>"}return t+="</TABLE></FONT></BODY></HTML>",t.toString()}getIndexFromList(t,e){const n=t.toArray(),r=e.toArray();for(let s=0;s<n.length;s++){const i=n[s];if(i.size()!==e.size())continue;const o=i.toArray();let a=!0;for(let l=0;l<o.length;l++){const _=o[l],h=r[l];if(!_.equals(h)){a=!1;break}}if(a)return s}return-1}canonize(t){let e=[];for(let r of t)e.push(`${this.g.id_for_production(r.production)}:${r.position}:${r.lookahead}`);return e=[...new Set(e)].sort(),e.join("|")}}class Sn extends Ht{constructor(t){super(t)}initCaches(){}closure(t){const e=new de;e.setItems(t.toArray());for(let n=0;n<e.size();n++){const r=e.get(n),s=r.production;if(r.position<s.get_rhs().length){const i=s.get_rhs()[r.position];if(this.g.isNonTerminal(i)){const o=this.g.productionsFor(i);for(const a of o.list()){const l=new Fe(this.g.productions.get(a),0);this.contains(e,l)||e.add(l)}}}}return e}contains(t,e){for(const n of t)if(e.equals(n))return!0;return!1}goTo(t,e){const n=new de;for(const r of t.toArray()){const s=r.production;r.position<s.get_rhs().length&&s.get_rhs()[r.position]==e&&n.add(new Fe(r.production,r.position+1))}return this.closure(n)}computeItems(){const t=new de,n=this.g.productionsFor(this.g.startSymbol).first();t.add(new Fe(this.g.productions.get(n),0));const r=new de;r.add(this.closure(t));let s=!0;for(;s;)e:{s=!1;for(const i of r.toArray())for(let o=0;o<i.size();o++){const a=i.get(o),l=a.production;if(l.get_rhs().length>a.position){const _=this.goTo(i,l.get_rhs()[a.position]);if(_.size()!=0&&!this.containsList(r,_)){r.add(_),s=!0;break e}}}}return r}containsList(t,e){const n=e.toArray();for(const r of t){const s=r.toArray();if(s.length!==n.length)continue;let i=!0;for(let o=0;o<s.length;o++){const a=s[o],l=n[o];if(!a.equals(l)){i=!1;break}}if(i)return!0}return!1}async buildTable(){const t=[];for(let n=0;n<this.itemList.size();n++){t[n]=[];for(let r=0;r<this.g.symbols.length-1;r++)t[n][r]=new Map}for(let n=0;n<t.length;n++){const r=this.itemList.get(n);for(let s=0;s<r.size();s++){const i=r.get(s),o=i.production,a=o.get_rhs();if(a.length>i.position){const l=a[i.position],_=this.goTo(r,l);if(this.g.isTerminal(l)){const h=ne.createShift(this.indexOfListLRItem(this.itemList,_));t[n][l-1].set(h.hashCode(),h)}else{const h=ne.createGoTo(this.indexOfListLRItem(this.itemList,_));t[n][l-1].set(h.hashCode(),h)}}else{const l=o.get_lhs();if(l==this.g.startSymbol){const _=ne.createAccept();t[n][0].set(_.hashCode(),_)}else{const _=this.g.followSet[l];for(const h of _.list()){let p;l<this.semanticStart?p=ne.createReduce(this.g.productions.indexOf(o)):p=ne.createAction(l-this.semanticStart),t[n][h-1].set(p.hashCode(),p)}}}}}const e=t.map(n=>n.map(r=>new Set(r.values())));return await this.resolveConflicts(e)}indexOfListLRItem(t,e){const n=e.toArray();for(let r=0;r<t.size();r++){const s=t.get(r).toArray();if(s.length!==n.length)continue;let i=!0;for(let o=0;o<s.length;o++){const a=s[o],l=n[o];if(!a.equals(l)){i=!1;break}}if(i)return r}return-1}}class Gt extends Ht{closurecache;constructor(t){super(t),this.initCaches()}initCaches(){this.closurecache==null&&(this.closurecache=new Map)}closure(t){this.initCaches();let e=this.canonize(t);if(this.closurecache.has(e))return this.closurecache.get(e);let n=t.toArray(),r=[...t];for(;r.length!=0;){let s=r.pop();const i=s.production;if(s.position<i.get_rhs().length){const o=i.get_rhs()[s.position];if(this.g.isNonTerminal(o)){const a=this.g.productionsFor(o);for(const l of a.list()){const _=this.g.productions.get(l),h=[];for(let u=s.position+1;u<i.get_rhs().length;u++)h.push(i.get_rhs()[u]);h.push(s.lookahead);const p=this.g.first(h);for(const u of p.list()){const m=new Fe(_,0,u);this.contains(n,m)||(n.push(m),r.unshift(m))}}}}}return this.itemList==null&&(this.itemList=new de),this.itemListAddIfNotExists(t),e=this.canonize(t),this.closurecache.set(e,t),t}goTo(t,e){const n=[];for(const i of t.toArray()){const o=i.production;i.position<o.get_rhs().length&&o.get_rhs()[i.position]==e&&n.push(new Fe(i.production,i.position+1,i.lookahead))}const r=new de;return r.setItems(n),this.closure(r)}computeItems(){const t=new de,n=this.g.productionsFor(this.g.startSymbol).list()[0];t.add(new Fe(this.g.productions.get(n),0,se.DOLLAR));let r=this.closure(t);const s=new de;s.add(r);let i=[r];for(;i.length!=0;){let o=i.pop();for(let a=0;a<o.size();a++){const l=o.get(a),_=l.production;if(_.get_rhs().length>l.position){const h=this.goTo(o,_.get_rhs()[l.position]);let p=this.containsList(s,h);h.size()!=0&&!p&&(s.add(h),i.unshift(h))}}}return s}contains(t,e){for(const n of t)if(e.equals(n))return!0;return!1}containsList(t,e){const n=e.toArray();for(const r of t){const s=r.toArray();if(s.length!==n.length)continue;let i=!0;for(let o=0;o<s.length;o++){const a=s[o],l=n[o];if(a.equals(l)==!1){i=!1;break}}if(i)return!0}return!1}async buildTable(){const t=[];for(let r=0;r<this.itemList.size();r++){t[r]=[];for(let s=0;s<this.g.symbols.length-1;s++)t[r][s]=new Map}for(let r=0;r<t.length;r++){const s=this.itemList.get(r);for(let i=0;i<s.size();i++){const o=s.get(i),a=o.production,l=a.get_rhs();if(l.length>o.position){const _=l[o.position],h=this.goTo(s,_);if(this.g.isTerminal(_)){const p=ne.createShift(this.getIndexFromList(this.itemList,h));t[r][_-1].set(p.hashCode(),p)}else{const p=ne.createGoTo(this.getIndexFromList(this.itemList,h));t[r][_-1].set(p.hashCode(),p)}}else{const _=a.get_lhs();if(_==this.g.startSymbol){const h=ne.createAccept();t[r][0].set(h.hashCode(),h)}else{const h=o.lookahead;let p;_<this.semanticStart?p=ne.createReduce(this.g.productions.indexOf(a)):p=ne.createAction(_-this.semanticStart),t[r][h-1].set(p.hashCode(),p)}}}}const e=t.map(r=>r.map(s=>new Set(s.values())));return await this.resolveConflicts(e)}}class kn extends Gt{compress=!0;constructor(t){super(t)}initCaches(){super.initCaches()}core(t){const e=new Array;for(let n=0;n<t.length;n++){const r=t[n],s=new Fe(r.production,r.position);this.contains(e,s)||e.push(s)}return e.sort((n,r)=>{let s=Re.compareTo(n.production,r.production);return s!=0?s:(s=n.position-r.position,s!=0?s:n.lookahead-r.lookahead)}),new Set(e)}computeItems(){const t=super.computeItems();for(let e=0;e<t.size();e++){const n=t.get(e),r=this.core(n.toArray());for(let s=e+1;s<t.size();s++){const i=t.get(s),o=this.core(i.toArray());if(this.equals(r,o)){for(let a=0;a<i.size();a++){const l=i.get(a);n.contains(l)||n.add(l)}t.removeByIndex(s),s--}}}return this.compress=!0,t}goTo(t,e){const n=super.goTo(t,e);if(this.compress){const r=this.core(n.toArray());for(let s=0;s<this.itemList.size();s++){const i=this.itemList.get(s);if(this.equals(r,this.core(i.toArray())))return i}}return n}equals(t,e){if(t.size!==e.size)return!1;for(const n of t){let r=!1;for(const s of e)if(n.equals(s)){r=!0;break}if(!r)return!1}return!0}}class Ue{LRGeneratorFactory(){}static createGenerator(t,e){switch(e){case L.PARSER_SLR:return new Sn(t);case L.PARSER_LR:return new Gt(t);case L.PARSER_LALR:return new kn(t);default:return null}}}const Ye=1,at=2,qe=3,Ve=4,lt=5,En=6,bn=7,An=8,yn=9,wn=10,Rn=11,Nn=12,Cn=13,Ne=14;let vn=class{_in="";_pos=0;_quote=!1;constructor(t){t==null?this.setInput(""):this.setInput(t)}setInput(t){this._in=t,this._pos=0}get position(){return this._pos}nextToken(){let t=this._pos;for(;this.hasMoreChars();){t=this._pos;let e=this.nextChar();if(this._quote)if(e=='"'){if(this.hasMoreChars()){if(e=this.nextChar(),e=='"')return new pe(Ne,'"',this._pos-2);this._pos--}this._quote=!1;continue}else return this.createToken(Ne,""+e);switch(e){case" ":case`
`:case"\r":case"	":continue;case'"':this._quote=!0;continue;case"|":return this.createToken(at,"|");case"*":return this.createToken(qe,"*");case"+":return this.createToken(Ve,"+");case"?":return this.createToken(lt,"?");case"(":return this.createToken(En,"(");case")":return this.createToken(bn,")");case"[":return this.createToken(An,"[");case"]":return this.createToken(yn,"]");case"^":return this.createToken(Rn,"^");case".":return this.createToken(wn,".");case"-":return this.createToken(Nn,"-");case"\\":return this.processesAdvChar();case"{":return this.processesDefinition();default:return this.createToken(Ne,""+e)}}if(this._quote)throw new he(`Era esperado '"'`,t);return null}processesAdvChar(){return new pe(Ne,""+this.getSpecialChar(),this._pos-1)}createToken(t,e){return new pe(t,e,this._pos-1)}getSpecialChar(){const t=this._pos;if(!this.hasMoreChars)throw new he("Era esperado um Caracter Especial",t);const e=this.nextChar();switch(e){case"b":return"\b";case"n":return`
`;case"f":return"\f";case"r":return"\r";case"e":return"\x1B";case"t":return"	";case"	":return"	";case"s":return" ";case" ":return" ";case'"':return'"';case"\\":return"\\";case"|":return"|";case"*":return"*";case"+":return"+";case"?":return"?";case"(":return"(";case")":return")";case"{":return"{";case"}":return"}";case"[":return"[";case"]":return"]";case".":return".";case"^":return"^";case"-":return"-";default:if(this.isNumber(e))return this.getCharByCode(e);throw new he("Caracter especial inválido: '"+e+"'",this._pos)}}getCharByCode(t){const e=this._pos-1;this.hasMoreChars()&&this.isNumber(this.nextChar())&&this.hasMoreChars()&&!this.isNumber(this.nextChar())&&this._pos--;const n=this._in.substring(e,this._pos),r=parseInt(n,10);if(r>255)throw new he("Valor decimal inválido (>255)",e);return String.fromCharCode(r)}processesDefinition(){let t="";const e=this._pos;let n="{";for(;this.hasMoreChars();){if(n=this.nextChar(),n==null)return null;if(n=="}")break;if(n!="_"&&!this.isLetterOrDigit(n))throw new he("Caracter inválido em uma definição: '"+n+"'",this._pos-1);t+=n}if(n!="}"&&!this.hasMoreChars())throw new he("Fim de expressão inesperado",this._pos);return new pe(Cn,t.toString(),e)}hasMoreChars(){return this._pos<this._in.length}nextChar(){return this.hasMoreChars()?this._in.charAt(this._pos++):"￿"}isLetterOrDigit(t){return t.toLowerCase()!=t.toUpperCase()||t.charCodeAt(0)==170||t.charCodeAt(0)==186||this.isNumber(t)}isNumber(t){return typeof t!="string"||t.trim()===""?!1:!Number.isNaN(Number(t))}};class Kt{position=-1;nullable=!1;first=new ae;last=new ae}class ce{_left;_right;_id=0;_value="";_backtrack=!0;_context=-1;_end=-1;_alphabet=new ae;_metaData=new Kt;constructor(t,e,n){this._id=t,this._left=e,this._right=n,e!=null&&this.alphabet.addAll(e.alphabet),n!=null&&this.alphabet.addAll(n.alphabet)}deepestLeft(){let t=this;for(;;){let e=t.left;if(e==null&&(e=t.right),e==null)break;t=e}return t}static createUnionNode(t,e){const n=new ce(at,t,e);return n.value="|",n}static createConcatNode(t,e){const n=new ce(-1,t,e);return n.value="&",n}static createContextNode(t,e){const n=e.deepestLeft();if(n==null)return null;n.context=0;const r=new ce(-1,t,e);return r.value="&",r}static createClosureNode(t){const e=new ce(qe,t,null);return e.value="*",e}static createClosureObNode(t){const e=new ce(Ve,t,null);return e.value="+",e}static createOptionalNode(t){const e=new ce(lt,t,null);return e.value="?",e}static createIntervalNode(t,e){const n=new ce(Ne,null,null);for(let s=t.charCodeAt(0);s<=e.charCodeAt(0);s++)n.alphabet.add(s);let r="[";for(const s of n.alphabet)r+=String.fromCharCode(s);return r+="]",n.value=r,n}static createComplementNode(t){const e=new ce(Ne,null,null);t.alphabet.has(9)||e.alphabet.add(9),t.alphabet.has(10)||e.alphabet.add(10),t.alphabet.has(13)||e.alphabet.add(13),t.alphabet.has(32)||e.alphabet.add(32);for(let r=32;r<=126;r++)t.alphabet.has(r)||e.alphabet.add(r);for(let r=161;r<=255;r++)t.alphabet.has(r)||e.alphabet.add(r);let n="[";for(const r of e.alphabet)n+=String.fromCharCode(r);return n+="]",e.value=n,e}static createCharNode(t){const e=new ce(Ne,null,null);return e.value=t,e.alphabet.add(t.charCodeAt(0)),e}static createAllNode(){const t=new ce(Ne,null,null);t.alphabet.add(9);for(let n=32;n<=126;n++)t.alphabet.add(n);for(let n=161;n<=255;n++)t.alphabet.add(n);let e="[";return t.alphabet.list().forEach(n=>{e+=String.fromCharCode(n)}),e+="]",t.value=e,t}static createEndNode(t,e){const n=new ce(Ne,null,null);return n.end=t,n.backtrack=e,n.value="#"+n.end,n}clone(){const t=structuredClone(this);return t.alphabet=new ae(this._alphabet),t.metaData=new Kt,t.backtrack=!0,t.context=-1,t.end=-1,this._left!=null&&(t.left=this._left.clone()),this._right!=null&&(t.right=this._right.clone()),t}get left(){return this._left}set left(t){this._left=t}get right(){return this._right}set right(t){this._right=t}get id(){return this._id}set id(t){this._id=t}get value(){return this._value}set value(t){this._value=t}doBacktrack(){return this._backtrack}set backtrack(t){this._backtrack=t}get backtrack(){return this._backtrack}get context(){return this._context}set context(t){this._context=t}get end(){return this._end}set end(t){this._end=t}get alphabet(){return this._alphabet}set alphabet(t){this._alphabet=t}get metaData(){return this._metaData}set metaData(t){this._metaData=t}toString(){return String(0)}toStringLevel(t){let e="";for(let n=0;n<t-2;n++)e+=" ";return t>2&&(e+="\\-"),e+=`value
`,this._left!=null&&(e+=String(this._left?.toStringLevel(t+2))),this._right!=null&&(e+=String(this._right?.toStringLevel(t+2))),e}}var ct={exports:{}},Zt;function In(){return Zt||(Zt=1,(function(b){(function(t){{var e=b.exports=t();e.HashMap=e}})(function(){function t(s){switch(this.clear(),arguments.length){case 0:break;case 1:{"length"in s?n(this,Array.prototype.concat.apply([],s)):this.copy(s);break}default:n(this,arguments);break}}var e=t.prototype={constructor:t,get:function(s){var i=this._data[this.hash(s)];return i&&i[1]},set:function(s,i){var o=this.hash(s);o in this._data||this.size++,this._data[o]=[s,i]},multi:function(){n(this,arguments)},copy:function(s){for(var i in s._data)i in this._data||this.size++,this._data[i]=s._data[i]},has:function(s){return this.hash(s)in this._data},search:function(s){for(var i in this._data)if(this._data[i][1]===s)return this._data[i][0];return null},delete:function(s){var i=this.hash(s);i in this._data&&(this.size--,delete this._data[i])},type:function(s){var i=Object.prototype.toString.call(s),o=i.slice(8,-1).toLowerCase();return!s&&(o==="domwindow"||o==="window")?s+"":o},keys:function(){var s=[];return this.forEach(function(i,o){s.push(o)}),s},values:function(){var s=[];return this.forEach(function(i){s.push(i)}),s},entries:function(){var s=[];return this.forEach(function(i,o){s.push([o,i])}),s},count:function(){return this.size},clear:function(){this._data={},this.size=0},clone:function(){return new t(this)},hash:function(s){switch(this.type(s)){case"undefined":case"null":case"boolean":case"number":case"regexp":return s+"";case"date":return"♣"+s.getTime();case"string":return"♠"+s;case"array":for(var i=[],o=0;o<s.length;o++)i[o]=this.hash(s[o]);return"♥"+i.join("⁞");default:return s.hasOwnProperty("_hmuid_")||(s._hmuid_=++t.uid,r(s,"_hmuid_")),"♦"+s._hmuid_}},forEach:function(s,i){for(var o in this._data){var a=this._data[o];s.call(i||this,a[1],a[0])}}};t.uid=0,typeof Symbol<"u"&&typeof Symbol.iterator<"u"&&(e[Symbol.iterator]=function(){var s=this.entries(),i=0;return{next:function(){if(i===s.length)return{done:!0};var o=s[i++];return{value:{key:o[0],value:o[1]},done:!1}}}}),["set","multi","copy","delete","clear","forEach"].forEach(function(s){var i=e[s];e[s]=function(){return i.apply(this,arguments),this}}),t.prototype.remove=t.prototype.delete;function n(s,i){for(var o=0;o<i.length;o+=2)s.set(i[o],i[o+1])}function r(s,i){Object.defineProperty&&Object.defineProperty(s,i,{enumerable:!1})}return t})})(ct)),ct.exports}var xn=In(),ut=et(xn);class Ln{_definitions=new ut;_expressions=new ut;_specialCases=new ut;_root=null;_alphabet=new ae;_lastPosition=-1;_tokenList=new de;_sensitive=!0;_contextCount=0;_next=[new ae];_nodes=[];constructor(t){this._sensitive=t}addDefinition(t,e){if(this._definitions.has(t))throw new ge("Definição repetida: "+t);this._definitions.set(t,e),this._alphabet.addAll(e.alphabet)}getDefinitionById(t){return this._definitions.get(t)}addExpression(t,e,n){this._alphabet.addAll(e.alphabet),this._tokenList.contains(t)||this._tokenList.add(t);const r=this._tokenList.indexOf(t),s=ce.createEndNode(r+2,n);e=ce.createConcatNode(e,s);let i=e.left?.right;i!=null&&(i=i.deepestLeft(),i!=null&&i.context>=0&&(this._contextCount++,i.context=this._contextCount,s.context=this._contextCount)),this._expressions.set(t,e),this._root==null?this._root=e:this._root=ce.createUnionNode(this._root,e)}addIgnore(t,e){this._alphabet.addAll(t.alphabet);const n=ce.createEndNode(0,e);t=ce.createConcatNode(t,n),this._root==null?this._root=t:this._root=ce.createUnionNode(this._root,t)}addSpecialCase(t,e,n){if(this._sensitive||(n=n.toLocaleUpperCase()),!this._expressions.has(e))throw new ge("Token '"+e+"' não definido");const r=this._tokenList.indexOf(e)+2;if(this._tokenList.contains(t))throw new ge("Token '"+t+"' já definido");const s=this._tokenList.size()+2;let i=this._specialCases.get(r);if(i==null)i=new De,this._specialCases.set(r,i);else if(i.get(n)!=null)throw new ge("Já houve a definição de um caso especial de '"+e+`' com o valor"`+n+'"');i.set(n,s),this._tokenList.add(t)}generateAutomata(){const t=new de,e=new De,n=new De,r=new De,s=new De,i=new De;if(this._root==null)throw new ge("A Especificação Léxica deve conter a definição de pelo menos um Token");this.computeNext(),t.add(this._root.metaData.first);for(let o=0;o<t.size();o++){const a=t.get(o);for(const l of this._alphabet){const _=String.fromCharCode(l),h=new ae;for(const u of a){const m=this._nodes[u];if(m.end>=0){const f=o;if(!s.has(f)&&(s.set(f,m.end),i.set(f,m.backtrack),m.context>0&&!e.has(f))){const T=n.get(m.context);T!=null?e.set(f,T):e.set(f,0)}}m.context>=0&&(n.has(m.context)||n.set(m.context,o)),m.alphabet.has(_.charCodeAt(0))&&h.addAll(this._next[u])}let p=-1;if(h.isEmpty()||(p=this.getPositionStates(t,h),p==-1&&(t.add(h),p=t.size()-1)),r.has(o)||r.set(o,new Map),p!=-1){const u=r.get(o);if(u==null)return null;u.set(_,p)}}}return this.makeAtomata(t,r,s,i,e)}makeAtomata(t,e,n,r,s){const i=new de;for(const u of e)i.add(u[1]);const o=[];o.length=t.size();for(let u=0;u<o.length;u++){const m=n.get(u);m!=null?o[u]=m:o[u]=-1}for(let u=0;u<o.length;u++){const m=r.get(u);m!=null&&m==!1&&this.computPrecedersOf(u,i).forEach(T=>{o[T]<0&&(o[T]=-2)})}const a=[],l=Array(this._tokenList.size()+2).fill(void 0);for(let u=0;u<l.length;u++){const m=this._specialCases.get(u),f=a.length;if(m!=null){const g=new Map([...m.entries()].sort());for(const[S,A]of g.entries())a.push(new Bt(S,A))}const T=a.length;l[u]=[f,T]}const _=Object.assign([],a);let h=Object.setPrototypeOf(_,Bt.prototype);const p=Array.from({length:t.size()},()=>Array.from({length:2}));for(let u=0;u<p.length;u++)p[u][0]=0,p[u][1]=-1;for(const[u,m]of s.entries())p[m][0]=1,p[u][1]=m;return new pn(this._alphabet,i,o,l,h,p,this._tokenList,this._sensitive)}getPositionStates(t,e){let n=0;for(const r of t){const s=r.list(),i=e.list();if(s.length===i.length&&s.every((a,l)=>a===i[l]))return n;n++}return-1}computPrecedersOf(t,e){const n=new Set;n.add(t);let r;do{r=!1;for(const s of n)e:for(let i=0;i<e.size();i++)for(const o of e.get(i).values())if(n.has(o)&&o==s&&!n.has(i)){n.add(i),r=!0;break e}}while(r);return n}computeNext(){this.computeMetaData(this._root),this._next=new Array(this._lastPosition+1),this._nodes=new Array(this._lastPosition+1);for(let t=0;t<this._lastPosition+1;t++)this._next[t]=new ae;this.computeNextNode(this._root)}computeNextNode(t){if(t===null)throw Error("error");let e;switch(t.id){case-1:if(e=t.left,e!=null)for(const n of e.metaData.last){if(t.right==null)throw new Error("Node direita vazio");this._next[n].addAll(t.right.metaData.first)}break;case qe:case Ve:if(t.left==null)throw new Error("Node direita vazio");for(const n of t.left.metaData.last)this._next[n].addAll(t.left.metaData.first);break;case Ne:this._nodes[t.metaData.position]=t;break}t.left!=null&&this.computeNextNode(t.left),t.right!=null&&this.computeNextNode(t.right)}computeMetaData(t){if(t==null)return;t.left!=null&&this.computeMetaData(t.left),t.right!=null&&this.computeMetaData(t.right);const e=t.metaData,n=t.left,r=t.right;switch(t.id){case Ne:this._lastPosition++,e.position=this._lastPosition,e.nullable=!1,e.first.add(this._lastPosition),e.last.add(this._lastPosition);break;case lt:case qe:e.nullable=!0,n!=null&&(n.metaData.first.list().forEach(s=>e.first.add(s)),n.metaData.last.list().forEach(s=>e.last.add(s)));break;case Ve:e.nullable=!1,n!=null&&(n.metaData.first.list().forEach(s=>e.first.add(s)),n.metaData.last.list().forEach(s=>e.last.add(s)));break;case at:if(n==null||r==null)return;e.nullable=n.metaData.nullable||r.metaData.nullable,n.metaData.first.list().forEach(s=>e.first.add(s)),r.metaData.first.list().forEach(s=>e.first.add(s)),n.metaData.last.list().forEach(s=>e.last.add(s)),r.metaData.last.list().forEach(s=>e.last.add(s));break;case-1:if(n==null||r==null)return;e.nullable=n.metaData.nullable&&r.metaData.nullable,n.metaData.first.list().forEach(s=>e.first.add(s)),n.metaData.nullable&&r.metaData.first.list().forEach(s=>e.first.add(s)),r.metaData.last.list().forEach(s=>e.last.add(s)),r.metaData.nullable&&n.metaData.last.list().forEach(s=>e.last.add(s));break}}}let On=class{_exp_simp1=new it;_termo1=new it;_fator=new it;_gen;_token=null;constructor(t){this._gen=t}executeAction(t,e){this._token=e;try{switch(t){case 0:break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break;case 6:this.action6();break;case 7:this.action7();break;case 8:this.action8();break;case 9:this.action9();break;case 10:this.action10();break;case 11:this.action11();break;case 12:this.action12();break;case 13:this.action13();break;case 14:this.action14();break;case 15:this.action15();break}}catch(n){if(n instanceof ge)throw new ge(n.message)}}get root(){return this._exp_simp1.pop()}action1(){const t=this._termo1.pop();t!=null&&this._exp_simp1.push(t)}action2(){const t=this._exp_simp1.pop(),e=this._termo1.pop();if(t==null||e==null)return;const n=ce.createUnionNode(t,e);n!=null&&this._exp_simp1.push(n)}action3(){const t=this._exp_simp1.pop(),e=this._exp_simp1.pop();if(e==null||t==null)return;const n=ce.createContextNode(e,t);n!=null&&this._exp_simp1.push(n)}action4(){if(this._fator==null)return;const t=this._fator.pop();t!=null&&this._termo1.push(t)}action5(){const t=this._termo1.pop(),e=this._fator.pop();t==null||e==null||this._termo1.push(ce.createConcatNode(t,e))}action6(){const t=this._fator.pop();t!=null&&this._fator.push(ce.createClosureNode(t))}action7(){const t=this._fator.pop();t!=null&&this._fator.push(ce.createClosureObNode(t))}action8(){const t=this._fator.pop();t!=null&&this._fator.push(ce.createOptionalNode(t))}action9(){const t=this._exp_simp1.pop();t!=null&&this._fator.push(t)}action10(){this._fator.push(ce.createAllNode())}action11(){if(this._token==null)return;const t=this._gen.getDefinitionById(this._token.lexeme);if(t==null)throw new ge("Definição não declarada: "+this._token.lexeme,this._token.position);const e=Object.assign({},t);this._fator.push(Object.setPrototypeOf(e,ce.prototype))}action12(){this._token!=null&&this._fator.push(ce.createCharNode(this._token.lexeme.charAt(0)))}action13(){const t=this._fator.pop();t!=null&&this._fator.push(ce.createComplementNode(t))}action14(){const t=this._fator.pop(),e=this._fator.pop();if(e==null||t==null)return;const n=ce.createUnionNode(e,t);n!=null&&this._fator.push(n)}action15(){if(this._token==null)return;const t=this._fator.pop(),e=ce.createCharNode(this._token.lexeme.charAt(0));if(t==null||e==null)return;const n=String.fromCharCode(t.alphabet.list()[0]),r=String.fromCharCode(e.alphabet.list()[0]);if(n>=r)throw new ge("Intervalo inválido",this._token.position);this._fator.push(ce.createIntervalNode(n,r))}};const Ae=["","Era esperado fim de linha",'Era esperado "|"','Era esperado "*"','Era esperado "+"','Era esperado "?"','Era esperado "("','Era esperado ")"','Era esperado "["','Era esperado "]"','Era esperado "."','Era esperado "^"','Era esperado "-"',"Era esperada uma definição","Era esperado um caractere","Era esperada uma expressão regular","Era esperada uma expressão regular","Era esperado ), |, ^ ou o fim da expressão","Era esperada uma expressão","Era esperada uma expressão","Contexto inválido","Termo inválido","Operador inválido","Fator inválido","Era esperado ^ ou um caractere","Classe de caracteres inválida","Item inválido: era esperado um caractere","Era esperado -, ], ou um caractere"];class Pn{_currentToken=null;_previousToken=null;_scanner=null;_semanticAnalyser=null;parse(t,e){if(this._scanner=new vn(t),this._semanticAnalyser=new On(e),this._currentToken=this._scanner.nextToken(),this._currentToken==null&&(this._currentToken=new pe(Ye,"$",0)),this.reg_exp_ctxt(),this._currentToken.id!=Ye)throw new V(Ae[Ye],this._currentToken.position);return this._semanticAnalyser.root}match(t){if(this._currentToken==null)throw new le("Atributo durante comparação do REParser.");if(this._scanner==null)throw new le("Scanner é nulo.");if(this._currentToken.id==t){if(this._previousToken=this._currentToken,this._currentToken=this._scanner.nextToken(),this._currentToken==null){let e=0;this._previousToken!=null&&(e=this._previousToken.position+this._previousToken.lexeme.length),this._currentToken=new pe(Ye,"$",e)}}else throw new V(Ae[t],this._currentToken.position)}reg_exp_ctxt(){if(this._currentToken==null)throw new le("Atributo Nulo durante reg_exp_ctxt do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.reg_exp(),this.context();break;default:throw new V(Ae[15],this._currentToken.position)}}reg_exp(){if(this._currentToken==null)throw new le("Atributo Nulo durante reg_exp do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.exp(),this._semanticAnalyser.executeAction(1,this._previousToken),this.reg_exp_c();break;default:throw new V(Ae[16],this._currentToken.position)}}reg_exp_c(){if(this._currentToken==null)throw new le("Atributo Nulo durante reg_exp_c do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 7:case 11:break;case 2:this.match(2),this.exp(),this._semanticAnalyser.executeAction(2,this._previousToken),this.reg_exp_c();break;default:throw new V(Ae[17],this._currentToken.position)}}exp(){if(this._currentToken==null)throw new le("Atributo Nulo durante exp do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(4,this._previousToken),this.exp_c();break;default:throw new V(Ae[18],this._currentToken.position)}}exp_c(){if(this._currentToken==null)throw new le("Atributo Nulo durante exp_c do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 7:case 11:break;case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(5,this._previousToken),this.exp_c();break;default:throw new V(Ae[19],this._currentToken.position)}}context(){if(this._currentToken==null)throw new le("Atributo Nulo durante context do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:break;case 11:this.match(11),this.reg_exp(),this._semanticAnalyser.executeAction(3,this._previousToken);break;default:throw new V(Ae[20],this._currentToken.position)}}term(){if(this._currentToken==null)throw new le("Atributo Nulo durante term do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.factor(),this.op();break;default:throw new V(Ae[21],this._currentToken.position)}}op(){if(this._currentToken==null)throw new le("Atributo Nulo durante op do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 6:case 7:case 8:case 10:case 11:case 13:case 14:break;case 3:this.match(3),this._semanticAnalyser.executeAction(6,this._previousToken);break;case 4:this.match(4),this._semanticAnalyser.executeAction(7,this._previousToken);break;case 5:this.match(5),this._semanticAnalyser.executeAction(8,this._previousToken);break;default:throw new V(Ae[22],this._currentToken.position)}}factor(){if(this._currentToken==null)throw new le("Atributo Nulo durante factor do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:this.match(6),this.reg_exp(),this.match(7),this._semanticAnalyser.executeAction(9,this._previousToken);break;case 8:this.match(8),this.end_class();break;case 10:this.match(10),this._semanticAnalyser.executeAction(10,this._previousToken);break;case 13:this.match(13),this._semanticAnalyser.executeAction(11,this._previousToken);break;case 14:this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken);break;default:throw new V(Ae[23],this._currentToken.position)}}end_class(){if(this._currentToken==null)throw new le("Atributo Nulo durante end_class do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 11:this.match(11),this.item(),this.class_c(),this.match(9),this._semanticAnalyser.executeAction(13,this._previousToken);break;case 14:this.item(),this.class_c(),this.match(9);break;default:throw new V(Ae[24],this._currentToken.position)}}class_c(){if(this._currentToken==null)throw new le("Atributo Nulo durante class_c do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:break;case 14:this.item(),this.class_c(),this._semanticAnalyser.executeAction(14,this._previousToken);break;default:throw new V(Ae[25],this._currentToken.position)}}item(){if(this._currentToken==null)throw new le("Atributo Nulo durante item do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");if(this._currentToken.id===14)this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken),this.end_interval();else throw new V(Ae[26],this._currentToken.position)}end_interval(){if(this._currentToken==null)throw new le("Atributo Nulo durante end_interval do REParser.");if(this._semanticAnalyser==null)throw new le("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:case 14:break;case 12:this.match(12),this.match(14),this._semanticAnalyser.executeAction(15,this._previousToken);break;default:throw new V(Ae[27],this._currentToken.position)}}}var Wt=(b=>(b[b.DEFINITION=0]="DEFINITION",b[b.TOKEN=1]="TOKEN",b[b.NON_TERMINAL=2]="NON_TERMINAL",b[b.GRAMMAR=3]="GRAMMAR",b))(Wt||{});class ye extends Error{static Mode=Wt;_mode;_index;_cause;constructor(t,e,n){super(n.message),this._cause=n,this._index=e,this._mode=t,Object.setPrototypeOf(this,ye.prototype)}}class me{static EPSILON=0;static DOLLAR=1;static DERIVES=2;static PIPE=3;static SEMICOLON=4;static TERM=5;static NON_TERM=6;static ACTION=7;static START_SYMBOL=8;static FIRST_NON_TERMINAL=8;static FIRST_SEMANTIC_ACTION=17;static LAST_SEMANTIC_ACTION=22;static TABLE=[[-1,-1,-1,-1,-1,0,-1],[2,-2,-2,-2,-2,1,-2],[-3,-3,-3,-3,-3,3,-3],[-4,-4,4,5,-4,-4,-4],[-5,-5,-5,-1,6,7,8],[-6,-6,10,10,9,9,9],[-7,-7,-7,-7,11,0,-7],[-8,-8,-8,-8,-8,12,-8],[-9,-9,-9,-9,-9,-9,13]];static PRODUCTIONS=[[10,9],[8],[0],[15,17,2,12,18,11,4],[3,12,18,11],[0],[14,19,13],[15,19,13],[16,20,13],[12],[0],[5,21],[6,21],[7,22]];static EXPECTED_MESSAGE=["î","$","::=","|",";","um símbolo terminal","um símbolo não-terminal","uma ação semântica"];static PARSER_ERROR=["Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal","Era esperado '|' ou ';'","Era esperado um Terminal, um Não-Terminal, ou uma Ação Semântica","Construção inválida","Era esperado um Terminal","Era esperado um Não-Terminal","Era esperado uma Ação Semântica"]}class Yt{symbols;actionCount=0;lhs;rhs;productions;token;constructor(t){this.symbols=t,this.lhs=0,this.rhs=[],this.productions=new de,this.token=new pe(-1,"ERROR",-1)}getPoductions(){return this.productions}executeAction(t,e){switch(this.token=e,t){case 0:this.action0();break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break}}action0(){const t=this.symbols.get(this.token.lexeme);if(t===void 0)throw new ge("Lexema não pode ser nulo");this.lhs=t}action1(){const t=new Re(null,this.lhs);for(let e=0;e<this.rhs.length;e++)t.add_rhs(this.rhs[e]);this.productions.add(t),this.rhs=[]}action2(){const t=this.symbols.get(this.token.lexeme);if(t===void 0)throw new ge("Lexema não pode ser nulo");const e=t;e!=me.EPSILON&&this.rhs.push(e)}action3(){const t=Number(this.token.lexeme);this.rhs.push(this.symbols.size+t+1)}action4(){if(!this.symbols.has(this.token.lexeme))throw new ge("Símbolo "+this.token.lexeme+" não declarado",this.token.position)}action5(){const t=Number(this.token.lexeme);this.actionCount<t&&(this.actionCount=t)}}class ht{input;pos;returnComents=!1;endPosition;constructor(t){t==null?(this.input="",this.pos=0,this.endPosition=0):(this.input=t,this.pos=0,this.endPosition=t.length)}setReturnComents(t){this.returnComents=t}setInput(t){this.input=t,this.pos=0,this.endPosition=t.length}nextToken(){for(;this.hasMoreChars();){const t=this.pos,e=this.nextChar();switch(e){case" ":case`
`:case"\r":case"	":continue;case":":return this.analyseDerives();case"|":return new pe(me.PIPE,"|",t);case";":return new pe(me.SEMICOLON,";",t);case"#":return this.analyseAction();case"<":return this.analyseNonTerminal();case"_":case'"':return this.analyseTerminal(e);case"/":{const n=this.analyseComent();if(this.returnComents)return n;continue}default:if(this.isLetter(e))return this.analyseTerminal(e);throw new he("Caracter Inválido: '"+e+"'",t)}}return null}isLetter(t){return t.toLowerCase()!=t.toUpperCase()||t.charCodeAt(0)==170||t.charCodeAt(0)==186}analyseComent(){const t=this.pos-1;if(!this.hasMoreChars())throw new he("Caracter Inválido: '/'",t);let e=this.nextChar();if(e!="/")throw this.pushChar(),new he("Caracter Inválido: '/'",t);let n="//";for(;this.hasMoreChars();){if(e=this.nextChar(),e==`
`){this.pushChar();break}n+=e}return new pe(-1,n.toString(),t)}analyseDerives(){const t=this.pos-1;if(this.input.length-t>=3){let e=this.nextChar();if(e==":"&&(e=this.nextChar(),e=="="))return new pe(me.DERIVES,"::=",t)}throw new he("Símbolo Inválido",t)}getPosition(){return this.pos}setPosition(t){this.pos=t}setEnd(t){this.endPosition=t}setRange(t,e){this.setPosition(t),this.setEnd(e)}analyseTerminal(t){const e=this.pos-1;let n="";if(n+=t,t=='"'){let r=!1;for(;this.hasMoreChars();)if(t=this.nextChar(),n+=t,t=='"')if(this.hasMoreChars())if(t=this.nextChar(),t=='"')n+=t;else{this.pushChar(),r=!0;break}else r=!0;else if(t==`
`)throw new he("Terminal inválido",e);if(n.length==0||!r)throw new he("Terminal inválido",e)}else for(;this.hasMoreChars();){if(t=this.nextChar(),t!="_"&&!this.isLetterOrDigit(t)){this.pushChar();break}n+=t}return new pe(me.TERM,n.toString(),e)}isLetterOrDigit(t){return this.isLetter(t)||/^[0-9]$/.test(t)}analyseNonTerminal(){const t=this.pos-1;let e="",n="<";for(;this.hasMoreChars()&&(n=this.nextChar(),n!=">");){if(!this.isLetterOrDigit(n)&&n!="_")throw new he("Não-Terminal inválido",t);e+=n}if(e.length==0||n!=">")throw new he("Não-Terminal inválido",t);return new pe(me.NON_TERM,"<"+e+">",t)}analyseAction(){const t=this.pos-1;let e="";for(;this.hasMoreChars();){const n=this.nextChar();if(!this.isDigit(n)){this.pushChar();break}e+=n}if(e.length==0)throw new he("Ação Semântica inválida",t);return new pe(me.ACTION,e.toString(),t)}isDigit(t){return!isNaN(Number(t))&&!isNaN(parseInt(t))}hasMoreChars(){return this.pos<this.endPosition}nextChar(){return this.hasMoreChars()?this.input.charAt(this.pos++):"￿"}pushChar(){this.pos--}}class Dn{stack=[];currentToken=null;previousToken=new pe(-1,"ERROR",-1);scanner=new ht;semanticAnalyser=new Yt(new Map);parse(t,e,n){const r=new De;r.set(se.EPSILON_STR,0);let s=2;const i=new ht;let o=0,a=new Set;try{for(let h=0;h<t.size();h++){const p=t.get(h);if(p==`
`){o++,t.removeByIndex(h),h--;continue}i.setInput(p);let u=i.nextToken();if(u==null)t.removeByIndex(h),h--;else{if(u.id!=me.TERM)throw new ge("Era esperada a declaração de um terminal",u.position);const m=u.lexeme;if(a.has(m))throw new ge("Terminal repetido : "+m,u.position);if(a.add(m),t.set(h,m),r.set(m,s),s++,(u=i.nextToken())!=null)throw new ge("Cada linha deve conter a declaração de apenas um símbolo terminal",u.position)}}if(t.size()==0)throw new ge("Conjunto de Terminais não pode ser vazio",0)}catch(h){throw new ye(ye.Mode.TOKEN,o,h)}o=0,a=new Set;try{for(let h=0;h<e.size();h++){const p=e.get(h);if(p==`
`){o++,e.removeByIndex(h),h--;continue}i.setInput(p);let u=i.nextToken();if(u==null)e.removeByIndex(h),h--;else{if(u.id!=me.NON_TERM)throw new ge("Era esperada a declaração de um não-terminal",u.position);const m=u.lexeme;if(a.has(m))throw new ge("Não-terminal repetido : "+m,u.position);if(a.add(m),e.set(h,m),r.set(m,s),s++,(u=i.nextToken())!=null)throw new ge("Cada linha deve conter a declaração de apenas um símbolo não-terminal",u.position)}}if(e.size()==0)throw new ge("Conjunto de Não-Terminais não pode ser vazio",0)}catch(h){throw new ye(ye.Mode.NON_TERMINAL,o,h)}try{this.parseByMap(n,r)}catch(h){throw new ye(ye.Mode.GRAMMAR,-1,h)}const l=this.semanticAnalyser.getPoductions(),_=2+t.size();return new se(t.toArray(),e.toArray(),l,_)}parseByMap(t,e){for(this.scanner=new ht(t),this.semanticAnalyser=new Yt(e),this.stack.push(me.DOLLAR),this.stack.push(me.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););}step(){const t=this.stack.pop();if(t===void 0)return!1;let e;if(this.currentToken==null?e=me.DOLLAR:e=this.currentToken.id,t==me.EPSILON)return!1;if(this.isTerminal(t)){if(t==e)return this.stack.length==0?!0:(this.previousToken=this.currentToken,this.currentToken=this.scanner.nextToken(),!1);throw new V("Era esperado "+me.EXPECTED_MESSAGE[t],this.scanner.getPosition())}else if(this.isNonTerminal(t)){const n=me.TABLE[t-me.FIRST_NON_TERMINAL][e-1];if(n>=0){const r=me.PRODUCTIONS[n];if(r===void 0)throw new V("Produção não definida");for(let s=r.length-1;s>=0;s--)this.stack.push(r[s]);return!1}else throw new V(me.PARSER_ERROR[t-me.FIRST_NON_TERMINAL],this.scanner.getPosition())}else if(this.isSemanticAction(t)){if(this.previousToken===null)throw new he("Token anterior é Nulo");return this.semanticAnalyser.executeAction(t-me.FIRST_SEMANTIC_ACTION,this.previousToken),!1}else return!1}isTerminal(t){return t>=0&&t<me.FIRST_NON_TERMINAL}isNonTerminal(t){return t>=me.FIRST_NON_TERMINAL&&t<me.FIRST_SEMANTIC_ACTION}isSemanticAction(t){return t>=me.FIRST_SEMANTIC_ACTION&&t<=me.LAST_SEMANTIC_ACTION}}class fe{static ID=0;static STR=1;static RE=2;static COLON=3;static EQUALS=4;static COMMENT=5;static ERROR=6;_text="";_pos=0;_endPos=0;_regularMode=!1;_specialCaseMode=!1;set text(t){this._text=t,this.setRange(0,this._text.length),this._regularMode=!1,this._specialCaseMode=!1}setRange(t,e){this._pos=t,this._endPos=e}nextToken(){if(!this.hasMoreChars())return null;if(this._regularMode)return this._specialCaseMode?(this._regularMode=!1,this._specialCaseMode=!1,this.nextToken()):this.parseRE();for(;this.hasMoreChars();){const t=this._pos,e=this.nextChar();switch(e){case`
`:case"\r":this._specialCaseMode=!1,this._regularMode=!1;case" ":case"	":continue;case":":return this._regularMode=!0,new pe(fe.COLON,":",t);case"=":return this._specialCaseMode=!0,new pe(fe.EQUALS,"=",t);case'"':return this.getString();case"/":return this.getComment();default:return this.isLetter(e)?this.getId():this.getError()}}return null}parseRE(){const t=this._pos;for(this._regularMode=!1;this.hasMoreChars();){const n=this.nextChar();if(n==`
`){this._pos--;break}else if(n=="/"&&this.hasMoreChars()){if(this.nextChar()=="/")return this._pos-=2,this._regularMode=!1,new pe(fe.RE,this._text.substring(t,this._pos),t);this._pos--}}const e=this._text.substring(t,this._pos);return new pe(fe.RE,e,t)}getString(){const t=this._pos-1;for(;this.hasMoreChars();){const e=this.nextChar();if(e==`
`)break;if(e=='"')if(this.hasMoreChars()){if(this.nextChar()!='"')return this._pos--,new pe(fe.STR,this._text.substring(t,this._pos),t)}else return new pe(fe.STR,this._text.substring(t,this._pos),t)}return new pe(fe.ERROR,this.text.substring(t,this._pos),t)}getId(){const t=this._pos-1;for(;this.hasMoreChars();){const e=this.nextChar();if(!this.isLetterOrDigit(e)&&e!="_"){this._pos--;break}}return new pe(fe.ID,this._text.substring(t,this._pos),t)}getError(){const t=this._pos-1;for(;this.hasMoreChars();)if(` 	
\r`.indexOf(this.nextChar())==-1){this._pos--;break}return new pe(fe.ERROR,this._text.substring(t,this._pos),t)}getComment(){const t=this._pos-1;if(this.hasMoreChars()){if(this.nextChar()=="/"){for(;this.hasMoreChars();)if(this.nextChar()==`
`){this._pos--;break}return new pe(fe.COMMENT,this._text.substring(t,this._pos),t)}this._pos--}return new pe(fe.ERROR,this._text.substring(t,this._pos),t)}isLetter(t){return t.toLowerCase()!=t.toUpperCase()||t.charCodeAt(0)==170||t.charCodeAt(0)==186}isLetterOrDigit(t){return this.isLetter(t)||this.isNumber(t)}isNumber(t){return typeof t!="string"||t.trim()===""?!1:!Number.isNaN(Number(t))}hasMoreChars(){return this._pos<this._endPos}nextChar(){return this.hasMoreChars()?this._text.charAt(this._pos++):"￿"}}class Fn{static _instance;errorList;constructor(){this.errorList=new de}static get Instance(){return this._instance||(this._instance=new this)}static get errorList(){return this.errorList}add(t){this.errorList.add(t)}}class zn{scanner=new fe;pos=0;gen=null;parseFA(t,e,n){this.gen=new Ln(n);try{this.parseDefs(t)}catch(r){Fn.Instance.add(r)}this.parseTokens(e);try{const r=this.gen.generateAutomata();if(r==null)throw new le("Automato gerado é nulo");return r}catch(r){throw console.log(r),new ye(ye.Mode.TOKEN,0,r)}}parseDefs(t){if(this.gen==null)return;const e=t.split(/(\n)/g);for(const n of e)if(n!=`
`){this.scanner.text=n;try{let r=this.nextToken();if(this.pos=0,r!=null&&r.id==fe.ID){const s=r.lexeme;if(this.pos=r.position+s.length,r=this.nextToken(),r!=null&&r.id==fe.COLON)if(this.pos=r.position+1,r=this.nextToken(),r!=null&&r.id==fe.RE){const i=r.lexeme;try{const o=this.parseRE(i);if(o==null)return;this.gen.addDefinition(s,o)}catch(o){const a=o;throw a.position=a.position+this.pos,a}}else throw new V("Era esperado uma Expressão Regular",this.pos);else throw new V("Era esperado ':'",this.pos)}else{if(r==null)continue;throw new V("Era esperado um identificador",this.pos)}}catch(r){throw new ye(ye.Mode.DEFINITION,0,r)}}}parseTokens(t){let e=0;const n=t.split(/(\n)/g);for(const r of n){if(r===`
`){e++;continue}this.scanner.text=r;try{const s=this.nextToken();if(this.pos=0,s!=null)switch(this.pos=s.position+s.lexeme.length,s.id){case fe.COLON:this.parseIgnore();break;case fe.ID:case fe.STR:this.parseId(s);break;default:throw new he("Era esperado um identificador",0)}}catch(s){throw console.warn("No parseTokens",s),new ye(ye.Mode.TOKEN,e,s)}}}parseIgnore(){const t=this.nextToken();if(t!=null&&t.id==fe.RE){const e=t.lexeme;try{if(this.gen==null)throw new le("Gerador de Autômatos Finitos não inicializado!");if(e.charAt(0)=="!"){const n=this.parseRE(e.substring(1));n!=null&&this.gen.addIgnore(n,!1)}else{const n=this.parseRE(e);n!=null&&this.gen.addIgnore(n,!0)}}catch(n){const r=n;throw r.position=r.position+t.position,r}}else throw new he("Era esperado uma Expressão Regular",this.pos)}parseId(t){if(t==null)return;const e=t.lexeme;if(t=this.nextToken(),t==null)try{if(this.gen==null)return;const n=this.parseRE(e);if(n==null)return;this.gen.addExpression(e,n,!0)}catch(n){throw n}else switch(this.pos=t.position+t.lexeme.length,t.id){case fe.COLON:this.parseIdEnd(e);break;case fe.EQUALS:this.parseSpecialCase(e);break;default:throw this.pos=t.position,new he("Era esperado ':' ou '='",this.pos)}}parseIdEnd(t){const e=this.nextToken();if(e==null||e.id!=fe.RE)throw new he("Era esperado uma Expressão Regular",this.pos);const n=e.lexeme;try{if(this.gen==null)return;if(n.charAt(0)=="!"){const r=this.parseRE(n.substring(1));r!=null&&this.gen.addExpression(t,r,!1)}else{const r=this.parseRE(n);if(r!=null)this.gen.addExpression(t,r,!0);else throw new he(`Definição Regular "${n}" indefinida no Token '${t}'`,this.pos)}}catch(r){const s=r;throw s.position=s.position+e.position,s}}parseSpecialCase(t){let e=this.nextToken();if(e!=null&&e.id==fe.ID){const n=e.lexeme;if(this.pos=e.position+t.length,e=this.nextToken(),e!=null&&e.id==fe.COLON)if(this.pos=e.position+1,e=this.nextToken(),e!=null&&e.id==fe.STR){let r=e.lexeme;r=r.substring(1,r.length-1);try{if(this.gen==null)return;this.gen.addSpecialCase(t,n,r)}catch(s){const i=s;throw i.position=i.position+e.position,i}if(e=this.nextToken(),e!=null)throw new V("Só é permitido uma definição por linha",e.position)}else throw new V("Era esperado uma Expressão Regular",this.pos);else throw new V("Era esperado ':'",this.pos)}else throw new V("Era esperado um Identificador",this.pos)}nextToken(){let t=this.scanner.nextToken();if(t!=null){if(t.id==fe.COMMENT)t=this.nextToken();else if(t.id==fe.ERROR)throw new he("Token inválido",t.position)}return t}parseRE(t){const e=new Pn;if(this.gen!=null)return e.parse(t,this.gen)}}jt();class Mn extends Ut{conflict=null;stackTop=null;async resolve(t,e){let n;if(this.stackTop==null)throw SyntaxError("Stack de Não terminais é nulo");if(this.conflict==null)throw SyntaxError("Conflict é nulo");e==0?n="$":n=t.terminals[e-1];let r="";r+="- O símbolo no topo da pilha é: "+t.nonTerminals[this.stackTop]+`
`,r+="- O símbolo da entrada é: "+n+`
`,r+=`
Qual produção deve ser utilizada?`;const s=t.productions,i=new Map;let o=1;for(const _ of this.conflict.list())r+=`
Opção ${o} : ${s.toArray()[_]}
`,i.set(o,_),o++;let a=null;try{a=await $t(r,"1")}catch{console.log("Prompt não encontrado")}a==null&&(a="1");let l=Number(a);return(isNaN(l)||l<1||l>i.size)&&(l=1),i.get(l)??(()=>{throw new Error(`Opção não encontrada de conflito: ${l}`)})()}setup(t,e){this.conflict=t,this.stackTop=e}}class Ce{g;constructor(t){if(!t.isFactored())throw new Ie("Gramática não Fatorada");if(t.hasLeftRecursion())throw new Ie("Gramática possui Recursão à Esquerda");this.g=t}getGrammar(){return this.g}lookahead(t){if(this.g==null)throw new V("Gramatica é nula");const e=this.g.first(t.get_rhs());return e.contains(0)&&(e.delete(0),e.addAll(this.g.followSet[t.get_lhs()])),e}async generateTable(){if(this.g==null)throw new V("Gramatica é nula");const t=this.g.symbols,e=[];for(let r=0;r<t.length-this.g.FIRST_NON_TERMINAL;r++){e[r]=[];for(let s=0;s<this.g.FIRST_NON_TERMINAL-1;s++)e[r][s]=new ae}for(let r=0;r<this.g.productions.size();r++){const s=this.g.productions.get(r),i=this.lookahead(s);for(let o=1;o<this.g.FIRST_NON_TERMINAL;o++)i.contains(o)&&e[s.get_lhs()-this.g.FIRST_NON_TERMINAL][o-1].add(r)}const n=new Mn;return await this.resolveConflicts(e,n)}async resolveConflicts(t,e){if(this.g==null)throw new V("Gramatica é nula");const n=[];for(let r=0;r<t.length;r++){n[r]=[];for(let s=0;s<t[r].length;s++)switch(t[r][s].size){case 0:n[r][s]=-1;break;case 1:n[r][s]=t[r][s].first();break;default:e.setup(t[r][s],r),n[r][s]=await e.resolve(this.g,s);break}}return n}async tableAsHTML(){if(this.g==null)throw new V("Gramatica é nula");const t=await this.generateTable();let e="";e+='<HTML><HEAD><TITLE>Tabela de Análise LL(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',e+="<TR align=center><TD bgcolor=black><FONT color=white><B>&nbsp;</B></FONT></TD><TD bgcolor=black><FONT color=white><B>$</B></FONT></TD>";for(let n=se.FIRST_TERMINAL;n<this.g.FIRST_NON_TERMINAL;n++)e+="<TD nowrap bgcolor=black><FONT color=white><B>"+xe.translateString(this.g.symbols[n])+"</B></FONT></TD>";e+="</TR>";for(let n=0;n<t.length;n++){e+="<TR align=center><TD nowrap bgcolor=black><FONT color=white><B>"+xe.translateString(this.g.symbols[n+this.g.FIRST_NON_TERMINAL])+"</B></FONT></TD>";for(let r=0;r<t[n].length;r++){const s=t[n][r];s>=0?e+="<TD width=40 bgcolor=#F5F5F5>"+s+"</TD>":e+="<TD width=40 bgcolor=#F5F5F5>-</TD>"}e+="</TR>"}e+="</TABLE>",e+="<BR></FONT><CODE><TABLE border=0>";for(let n=0;n<this.g.productions.size();n++)e+="<TR>",e+="<TD align=right nowrap>"+n+"&nbsp;-&nbsp;</TD>",e+="<TD>"+xe.translateString(this.g.productions.get(n).toString())+"</TD>",e+="</TR>";return e+="</TABLE></CODE></BODY></HTML>",e.toString()}}class Bn{lrTable=null;async generate(t,e,n){const r=new Map;return r.set("Token.java",this.generateToken(n)),r.set("Constants.java",this.generateConstants(t,e,n)),t!==null&&r.set("ScannerConstants.java",this.generateScannerConstants(t,n)),e!==null&&r.set("ParserConstants.java",await this.generateParserConstants(e,n)),r.set("AnalysisError.java",this.generateAnalysisError(n)),r.set("LexicalError.java",this.generateLexicalError(n)),r.set("SyntacticError.java",this.generateSyntacticError(n)),r.set("SemanticError.java",this.generateSemanticError(n)),r}generateToken(t){const e=[],n=t.pkgName;return n&&n!==""&&e.push(`package ${n};

`),e.push(`public class Token
{
    private int id;
    private String lexeme;
    private int position;

    public Token(int id, String lexeme, int position)
    {
        this.id = id;
        this.lexeme = lexeme;
        this.position = position;
    }

    public final int getId()
    {
        return id;
    }

    public final String getLexeme()
    {
        return lexeme;
    }

    public final int getPosition()
    {
        return position;
    }

    public String toString()
    {
        return id+" ( "+lexeme+" ) @ "+position;
    };
}
`),e.join(`
`)}generateAnalysisError(t){const e=[],n=t.pkgName;return n&&n!==""&&e.push(`package ${n};
`),e.push(`public class AnalysisError extends Exception
{
    private int position;

    public AnalysisError(String msg, int position)
    {
        super(msg);
        this.position = position;
    }

    public AnalysisError(String msg)
    {
        super(msg);
        this.position = -1;
    }

    public int getPosition()
    {
        return position;
    }

    public String toString()
    {
        return super.toString() + ", @ "+position;
    }
}
`),e.join(`
`)}generateLexicalError(t){const e=[],n=t.pkgName;return n&&n!==""&&e.push(`package ${n};
`),e.push(`public class LexicalError extends AnalysisError
{
    public LexicalError(String msg, int position)
	 {
        super(msg, position);
    }

    public LexicalError(String msg)
    {
        super(msg);
    }
}
`),e.join(`
`)}generateSyntacticError(t){const e=[],n=t.pkgName;return n&&n!==""&&e.push(`package ${n};

`),e.push(`public class SyntacticError extends AnalysisError
{
    public SyntacticError(String msg, int position)
	 {
        super(msg, position);
    }

    public SyntacticError(String msg)
    {
        super(msg);
    }
}
`),e.join(`
`)}generateSemanticError(t){const e=[],n=t.pkgName;return n&&n!==""&&e.push(`package ${n};

`),e.push(`public class SemanticError extends AnalysisError
{
    public SemanticError(String msg, int position)
	 {
        super(msg, position);
    }

    public SemanticError(String msg)
    {
        super(msg);
    }
}
`),e.join(`
`)}generateConstants(t,e,n){const r=[],s=n.pkgName;s&&s!==""&&r.push(`package ${s};
`);let i=null;if(t===null?i="ParserConstants":e===null?i="ScannerConstants":i="ScannerConstants, ParserConstants",t===null)throw new he("Automato Finito é nulo");if(e===null)throw new V("Gramatica é nulo");return r.push("public interface Constants extends "+i+`
{
    int EPSILON  = 0;
    int DOLLAR   = 1;

`+this.constList(t,e)+`
}
`),r.join(`
`)}generateScannerConstants(t,e){const n=[],r=e.pkgName;if(r&&r!==""&&n.push(`package ${r};

`),n.push(`public interface ScannerConstants
{
`),t==null)throw new he("Automato Finito é nulo.");return n.push(this.genLexTables(t,e)),n.push(`}
`),n.join("")}async generateParserConstants(t,e){const n=[],r=e.pkgName;if(r&&r!==""&&n.push(`package ${r};
`),n.push(`public interface ParserConstants
{`),t===null)throw new V("Gramatica é nulo");const s=await this.genSyntTables(t,e);if(s===null)throw new V("Tabela Sintatica é nula");return n.push(s),n.push("}"),n.join(`
`)}genLexTables(t,e){let n;switch(e.scannerTable){case L.SCANNER_TABLE_FULL:n=this.lex_table(t);break;case L.SCANNER_TABLE_COMPACT:n=this.lex_table_compress(t);break;case L.SCANNER_TABLE_HARDCODE:n="";break;default:n="";break}return n+`
`+this.token_state(t)+(t.hasContext()?`
`+this.context(t):"")+`
`+(t.specialCases.length>0?this.special_cases(t)+`
`:"")+this.scanner_error(t)+`
`}context(t){const e=[];e.push(`    int[][] SCANNER_CONTEXT =
    {
`);for(let n=0;n<t.transitions.size();n++)e.push("        {"),e.push(t.isContext(n)?"1":"0"),e.push(", "),e.push(t.getOrigin(n).toString()),e.push(`},
`);return e.pop(),e.push(`
    };
`),e.join("")}scanner_error(t){const e=[];e.push(`    String[] SCANNER_ERROR =
    {
`);const n=t.transitions.size();for(let r=0;r<n;r++){e.push('        "');const s=t.getError(r);for(let i=0;i<s.length;i++)s.charAt(i)=='"'?e.push('\\"'):e.push(s.charAt(i));e.push(`",
`)}return e.pop(),e.push('"'),e.push(`
    };
`),e.join("")}async genSyntTables(t,e){switch(e.parser){case L.PARSER_REC_DESC:case L.PARSER_LL:return await this.genLLSyntTables(t,e.parser);case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:return await this.genLRSyntTables(t,e.parser);default:return null}}async genLRSyntTables(t,e){const n=Ue.createGenerator(t,e);if(n==null)throw new V("Gerador de Tabela é nulo.");this.lrTable=await n.buildIntTable();const r=[];return r.push("    int FIRST_SEMANTIC_ACTION = "+t.FIRST_SEMANTIC_ACTION()+`;

    int SHIFT  = 0;
    int REDUCE = 1;
    int ACTION = 2;
    int ACCEPT = 3;
    int GO_TO  = 4;
    int ERROR  = 5;
`),r.push(`
`),r.push(this.emitModifiedLRTable(t)),r.push(`
`),r.push(this.emitProductionsForLR(t)),r.push(`
`),r.push(this.emitErrorTableLR()),r.join("")}emitProductionsForLR(t){const e=[],n=t.productions;e.push(`    int[][] PRODUCTIONS =
`),e.push(`    {
`);for(let r=0;r<n.size();r++)e.push("        { "),e.push(n.get(r).get_lhs().toString()),e.push(", "),e.push(n.get(r).get_rhs().length.toString()),e.push(` },
`);return e.pop(),e.push(" }"),e.push(`
    };
`),e.join("")}emitLRTable(t){const e=[];if(this.lrTable===null)throw new V("Tabela LR está nula.");const n=this.lrTable;e.push(`    int[][][] PARSER_TABLE =
`),e.push(`    {
`);let r=n.length;t.productions.size()>r&&(r=t.productions.size()),r=(""+r).length;for(let s=0;s<n.length;s++){e.push("        {");for(let i=0;i<n[s].length;i++){e.push(" {"),e.push(ne.CONSTANTS[n[s][i][0]]),e.push(", ");const o=""+n[s][i][1];for(let a=o.length;a<r;a++)e.push(" ");e.push(o),e.push("},")}e.pop(),e.push("}"),e.push(` },
`)}return e.pop(),e.push(" }"),e.push(`
    };
`),e.join("")}emitModifiedLRTable(t){const e=[];if(this.lrTable===null)throw new V("Tabela LR está nula.");const n=this.lrTable;e.push(`    int[][][] PARSER_TABLE = new LRTableAdapter().table;
`);let r=n.length;t.productions.size()>r&&(r=t.productions.size()),r=(""+r).length;let s="";e.push(`
`),e.push(`    public class LRTableAdapter // Code too large sem adapter (>64kb)
`),e.push(`    {
`),e.push("        int table[][][] = new int["+n.length+"]["+n[0].length+`][2];
`),e.push(`
`);for(let i=0;i<n.length;i++){e.push("        public class state"+i+"{ int q"+i+"[][] = {");for(let o=0;o<n[i].length;o++){e.push(" {"),e.push(ne.CONSTANTS[n[i][o][0]]),e.push(", ");const a=""+n[i][o][1];for(let l=a.length;l<r;l++)e.push(" ");e.push(a),e.push("},")}e.pop(),e.push(`} }; }
`),s=s.concat("            table["+i+"] = new state"+i+"().q"+i+`;
`)}return e.push(`
        public LRTableAdapter(){
`+s+"        }"),e.push(`
    }`),e.push(`
`),e.join("")}async genLLSyntTables(t,e){const n=[];if(e==L.PARSER_LL){const r=t.startSymbol,s=t.FIRST_NON_TERMINAL,i=t.symbols.length,o="    int START_SYMBOL = "+r+`;

    int FIRST_NON_TERMINAL    = `+s+`;
    int FIRST_SEMANTIC_ACTION = `+i+`;
`;return n.push(o),n.push(`
`),n.push(await this.emitLLTable(new Ce(t))),n.push(`
`),n.push(this.emitProductionsForLL(t)),n.push(`
`),n.push(this.emitErrorTableLL(t)),n.join("")}else return e==L.PARSER_REC_DESC?this.emitErrorTableLL(t):null}constList(t,e){const n=[];let r=[];if(t!=null)r=t.tokens.toArray();else if(e!=null)r=e.terminals;else throw new Error("Erro Interno");for(let s=0;s<r.length;s++){const i=r[s];i.charAt(0)=='"'?n.push("    int t_TOKEN_"+(s+2)+" = "+(s+2)+"; //"+i+`
`):n.push("    int t_"+i+" = "+(s+2)+`;
`)}return n.join("")}lex_table_compress(t){const e=[],n=t.transitions,r=new Array(n.size()+1).fill(-1);let s=0;for(let o=0;o<n.size();o++)r[o]=s,s+=n.get(o).size;r[r.length-1]=s;const i=new Array(s).fill(0).map(()=>new Array(2).fill(0));s=0;for(let o=0;o<n.size();o++)for(const[a,l]of n.get(o).entries())i[s][0]=a.charCodeAt(0),i[s][1]=l,s++;e.push(`    int[] SCANNER_TABLE_INDEXES = 
`),e.push(`    {
`);for(let o=0;o<r.length;o++)e.push("        "),e.push(r[o].toString()),e.push(`,
`);e.pop(),e.push(`
    };

`),e.push(`    int[][] SCANNER_TABLE = 
`),e.push(`    {
`);for(let o=0;o<i.length;o++)e.push("        {"),e.push(i[o][0].toString()),e.push(", "),e.push(i[o][1].toString()),e.push(`},
`);return e.pop(),e.push("}"),e.push(`
    };
`),e.join("")}lex_table(t){const e=[];e.push(`    int[][] SCANNER_TABLE = 
`),e.push(`    {
`);const n=t.transitions.size();let r=n.toString().length;r==1&&(r=2);for(let s=0;s<n;s++){e.push("        { ");for(let i=0;i<256;i++){const o=t.nextState(String.fromCharCode(i),s).toString();for(let a=o.length;a<r;a++)e.push(" ");e.push(o),e.push(", ")}e.pop(),e.push(` },
`)}return e.pop(),e.push(" }"),e.push(`
    };
`),e.join("")}token_state(t){const e=[];e.push("    int[] TOKEN_STATE = {");const n=t.transitions.size();let r=n.toString().length;r==1&&(r=2);for(let s=0;s<n;s++){const o=t.tokenForState(s).toString();for(let a=o.length;a<r;a++)e.push(" ");e.push(o),e.push(", ")}return e.pop(),e.push(` };
`),e.join("")}special_cases(t){const e=t.getSpecialCasesIndexes(),n=t.specialCases,r=[];let s=n.length;r.push(`    int[] SPECIAL_CASES_INDEXES =
        { `),s=e.length;for(let i=0;i<s;i++)r.push(e[i][0].toString()),r.push(", ");r.push(e[s-1][1].toString()),r.push(` };

`),r.push(`    String[] SPECIAL_CASES_KEYS =
        {  `),s=n.length;for(let i=0;i<s;i++)r.push('"'),r.push(n[i].key),r.push('", ');r.pop(),r.push('"'),r.push(` };

`),r.push(`    int[] SPECIAL_CASES_VALUES =
        {  `),s=n.length;for(let i=0;i<s;i++)r.push(n[i].value.toString()),r.push(", ");return r.pop(),r.push(` };
`),r.join("")}emitProductionsForLL(t){const e=t.productions,n=new Array(e.size()).fill([]);let r=0;for(let i=0;i<e.size();i++){const o=e.get(i).get_rhs();if(o.length>0){n[i]=[];for(let a=0;a<o.length;a++)n[i][a]=o[a].toString(),n[i][a].length>r&&(r=n[i][a].length)}else n[i]=new Array(1),n[i][0]="0"}const s=[];s.push(`    int[][] PRODUCTIONS = 
`),s.push(`    {
`);for(let i=0;i<n.length;i++){s.push("        {");for(let o=0;o<n[i].length;o++){s.push(" ");for(let a=n[i][o].length;a<r;a++)s.push(" ");s.push(n[i][o]),s.push(",")}s.pop(),s.push(` },
`)}return s.pop(),s.push(` }
`),s.push(`
    };
`),s.join("")}async emitLLTable(t){let e=await t.generateTable(),n=new Array(e.length).fill([]).map(()=>new Array(e[0].length)),r=0;for(let i=0;i<n.length;i++)for(let o=0;o<n[i].length;o++){let a=e[i][o].toString();n[i][o]=a,a.length>r&&(r=a.length)}const s=[];s.push(`    int[][] PARSER_TABLE =
`),s.push(`    {
`);for(let i=0;i<n.length;i++){s.push("        {");for(let o=0;o<n[i].length;o++){s.push(" ");for(let a=n[i][o].length;a<r;a++)s.push(" ");s.push(n[i][o]),s.push(",")}s.pop(),s.push(` },
`)}return s.pop(),s.push(" },"),s.push(`
    };
`),s.join("")}emitErrorTableLR(){if(this.lrTable==null)throw new V("Tabela LR está nula.");const t=this.lrTable.length,e=[];e.push(`    String[] PARSER_ERROR =
    {
`);for(let n=0;n<t;n++)e.push('        "Erro estado '+n),e.push(`",
`);return e.pop(),e.push('"'),e.push(`
    };
`),e.join("")}emitErrorTableLL(t){const e=t.symbols,n=[];n.push(`    String[] PARSER_ERROR =
    {
        "",
        "Era esperado fim de programa",
`);for(let r=2;r<t.FIRST_NON_TERMINAL;r++){n.push('        "Era esperado ');for(let s=0;s<e[r].length;s++)switch(e[r].charAt(s)){case'"':n.push('\\"');break;case"\\":n.push("\\\\");break;default:n.push(e[r].charAt(s))}n.push(`",
`)}for(let r=t.FIRST_NON_TERMINAL;r<e.length;r++)n.push('        "'+e[r]+" inválido"),n.push(`",
`);return n.pop(),n.push('"'),n.push(`
    };
`),n.join("")}}class Un{sensitive=!0;lookup=!0;generate(t,e){const n=new Map,r=e.scannerName;let s;return t!=null?(this.sensitive=e.scannerCaseSensitive,this.lookup=t.specialCases.length>0,s=this.buildScanner(t,e)):s=this.buildEmptyScanner(e),n.set(r+".java",s),n}buildEmptyScanner(t){const e=[],n=t.pkgName;e.push(this.emitPackage(n));const r="public class "+t.scannerName+` implements Constants
{
    public Token nextToken() throws LexicalError
    {
        return null;
    }
}
`;return e.push(r),e.toString()}buildScanner(t,e){let n,r,s;e.input==L.INPUT_STREAM?(n="java.io.Reader",r=`StringBuffer bfr = new StringBuffer();
        try
        {
            int c = input.read();
            while (c != -1)
            {
                bfr.append((char)c);
                c = input.read();
            }
            this.input = bfr.toString();
        }
        catch (java.io.IOException e)
        {
            e.printStackTrace();
        }
`,s='this(new java.io.StringReader(""));'):e.input==L.INPUT_STRING?(n="String",r="this.input = input;",s='this("");'):(n="",r="",s="");const i=e.pkgName;return this.emitPackage(i)+"public class "+e.scannerName+` implements Constants
{
    private int position;
    private String input;

    public `+e.scannerName+`()
    {
        `+s+`
    }

    public `+e.scannerName+"("+n+` input)
    {
        setInput(input);
    }

    public void setInput(`+n+` input)
    {
        `+r+`
        setPosition(0);
    }

    public void setPosition(int pos)
    {
        position = pos;
    }

`+this.mainDriver(t)+`
`+this.auxFuncions(t,e)+`}
`}emitPackage(t){return t!=null&&t!==""?"package "+t+`;

`:""}mainDriver(t){return`    public Token nextToken() throws LexicalError
    {
        if ( ! hasInput() )
            return null;

        int start = position;

        int state = 0;
        int lastState = 0;
        int endState = -1;
        int end = -1;
`+(t.hasContext()?`        int ctxtState = -1;
        int ctxtEnd = -1;
`:"")+`
        while (hasInput())
        {
            lastState = state;
            state = nextState(nextChar(), state);

            if (state < 0)
                break;

            else
            {
                if (tokenForState(state) >= 0)
                {
                    endState = state;
                    end = position;
                }
`+(t.hasContext()?`                if (SCANNER_CONTEXT[state][0] == 1)
                {
                    ctxtState = state;
                    ctxtEnd = position;
                }
`:"")+`            }
        }
        if (endState < 0 || (endState != state && tokenForState(lastState) == -2))
            throw new LexicalError(SCANNER_ERROR[lastState], start);

`+(t.hasContext()?`        if (ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState)
            end = ctxtEnd;

`:"")+`        position = end;

        int token = tokenForState(endState);

        if (token == 0)
            return nextToken();
        else
        {
            String lexeme = input.substring(start, end);
`+(this.lookup?`            token = lookupToken(token, lexeme);
`:"")+`            return new Token(token, lexeme, start);
        }
    }
`}auxFuncions(t,e){let n;switch(e.scannerTable){case L.SCANNER_TABLE_FULL:n=`    private int nextState(char c, int state)
    {
        int next = SCANNER_TABLE[state][c];
        return next;
    }
`;break;case L.SCANNER_TABLE_COMPACT:n=`    private int nextState(char c, int state)
    {
        int start = SCANNER_TABLE_INDEXES[state];
        int end   = SCANNER_TABLE_INDEXES[state+1]-1;

        while (start <= end)
        {
            int half = (start+end)/2;

            if (SCANNER_TABLE[half][0] == c)
                return SCANNER_TABLE[half][1];
            else if (SCANNER_TABLE[half][0] < c)
                start = half+1;
            else  //(SCANNER_TABLE[half][0] > c)
                end = half-1;
        }

        return -1;
    }
`;break;case L.SCANNER_TABLE_HARDCODE:{const r=t.transitions,s=[];for(let i=0;i<r.size();i++){const o=r.get(i);if(o.size!=0){s.push("            case "+i+`:
                switch (c)
                {
`);for(const[a,l]of o.entries()){const _=a,h=l;s.push("                    case "+_.charCodeAt(0)+": return "+h+`;
`)}s.push(`                    default: return -1;
                }
`)}}n=`    private int nextState(char c, int state)
    {
        switch (state)
        {
`+s.join("")+`            default: return -1;
        }
    }
`}break;default:n=null}return n+`
    private int tokenForState(int state)
    {
        if (state < 0 || state >= TOKEN_STATE.length)
            return -1;

        return TOKEN_STATE[state];
    }

`+(this.lookup?`    public int lookupToken(int base, String key)
    {
        int start = SPECIAL_CASES_INDEXES[base];
        int end   = SPECIAL_CASES_INDEXES[base+1]-1;

`+(this.sensitive?"":`        key = key.toUpperCase();

`)+`        while (start <= end)
        {
            int half = (start+end)/2;
            int comp = SPECIAL_CASES_KEYS[half].compareTo(key);

            if (comp == 0)
                return SPECIAL_CASES_VALUES[half];
            else if (comp < 0)
                start = half+1;
            else  //(comp > 0)
                end = half-1;
        }

        return base;
    }

`:"")+`    private boolean hasInput()
    {
        return position < input.length();
    }

    private char nextChar()
    {
        if (hasInput())
            return input.charAt(position++);
        else
            return (char) -1;
    }
`}}class jn{input=new De;lhs;constructor(t){this.lhs=t}}class Be{_grammar;_llTable;_symbols;_functions=new Map;constructor(t,e){this._grammar=e,this._llTable=t,this._symbols=e.symbols;for(let n=0;n<this._symbols.length;n++)this._symbols[n].charAt(0)=="<"&&(this._symbols[n]=this._symbols[n].substring(1,this._symbols[n].length-1));this.build()}getSymbols(t){return this._symbols[t]}getStart(){return this._symbols[this._grammar.startSymbol]}build(){const t=this._grammar.productions.toArray();for(let e=0;e<this._llTable.length;e++){const n=e+this._grammar.FIRST_NON_TERMINAL,r=new jn(n);this._functions.set(this._symbols[n],r);for(let s=0;s<this._llTable[0].length;s++){const i=this._llTable[e][s];if(i>=0){const o=s+1,l=t[i].get_rhs();r.input.set(o,l)}}}return this._functions}}class $n{async generate(t,e){const n=new Map;if(t!=null){const r=e.parserName;let s;switch(e.parser){case L.PARSER_REC_DESC:s=await this.buildRecursiveDecendantParser(t,e);break;case L.PARSER_LL:s=this.buildLLParser(t,e);break;case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:s=this.buildLRParser(t,e);break;default:s=null}if(s===null)throw new V("String do Parser é nulo.");n.set(r+".java",s),n.set(e.semanticName+".java",this.generateSemanticAnalyser(e))}return n}async buildRecursiveDecendantParser(t,e){const n=[],r=e.pkgName;return n.push(this.emitPackage(r)),n.push(await this.emitRecursiveDecendantClass(t,e)),n.join("")}buildLLParser(t,e){const n=[],r=e.pkgName;return n.push(this.emitPackage(r)),n.push(this.emitImports()),n.push(this.emitLLClass(t,e)),n.join("")}buildLRParser(t,e){const n=[],r=e.pkgName;return n.push(this.emitPackage(r)),n.push(this.emitImports()),n.push(this.emitLRClass(t,e)),n.join("")}emitPackage(t){return t!=null&&t!==""?"package "+t+`;
`:""}emitImports(){return`import java.util.Stack;

`}emitLRClass(t,e){const n=[],r=e.parserName;n.push("public class "),n.push(r),n.push(` implements Constants
{
`);const s=e.scannerName,i=e.semanticName,o=`    private final Stack<Integer> stack = new Stack<Integer>();
    private Token currentToken;
    private Token previousToken;
    private `+s+` scanner;
    private `+i+` semanticAnalyser;

`;return n.push(o),n.push("    public void parse("+s+" scanner, "+i+` semanticAnalyser) throws LexicalError, SyntacticError, SemanticError
    {
        this.scanner = scanner;
        this.semanticAnalyser = semanticAnalyser;

        stack.clear();
        stack.push(0);

        currentToken = scanner.nextToken();

        while ( ! step() )
            ;
    }

    private boolean step() throws LexicalError, SyntacticError, SemanticError
    {
        if (currentToken == null)
        {
            int pos = 0;
            if (previousToken != null)
                pos = previousToken.getPosition()+previousToken.getLexeme().length();

            currentToken = new Token(DOLLAR, "$", pos);
        }

        int token = currentToken.getId();
        int state = stack.peek();

        int[] cmd = PARSER_TABLE[state][token-1];

        switch (cmd[0])
        {
            case SHIFT:
                stack.push(cmd[1]);
                previousToken = currentToken;
                currentToken = scanner.nextToken();
                return false;

            case REDUCE:
                int[] prod = PRODUCTIONS[cmd[1]];

                for (int i=0; i<prod[1]; i++)
                    stack.pop();

                int oldState = stack.peek();
                stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);
                return false;

            case ACTION:
                int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;
                stack.push(PARSER_TABLE[state][action][1]);
                semanticAnalyser.executeAction(cmd[1], previousToken);
                return false;

            case ACCEPT:
                return true;

            case ERROR:
                throw new SyntacticError(PARSER_ERROR[state], currentToken.getPosition());
        }
        return false;
    }

`),n.push(`}
`),n.join("")}emitLLClass(t,e){const n=[],r=e.parserName;n.push("public class "),n.push(r),n.push(` implements Constants
{
`);const s=e.scannerName,i=e.semanticName,o=`    private final Stack<Integer> stack = new Stack<Integer>();
    private Token currentToken;
    private Token previousToken;
    private `+s+` scanner;
    private `+i+` semanticAnalyser;

`;return n.push(o),n.push(this.emitLLFunctions(e)),n.push(`}
`),n.join("")}emitLLFunctions(t){const e=[];return e.push(this.emitTesters()),e.push(`
`),e.push(this.emitStep()),e.push(`
`),e.push(this.emitDriver(t)),e.join("")}emitTesters(){return`    private static final boolean isTerminal(int x)
    {
        return x < FIRST_NON_TERMINAL;
    }

    private static final boolean isNonTerminal(int x)
    {
        return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION;
    }

    private static final boolean isSemanticAction(int x)
    {
        return x >= FIRST_SEMANTIC_ACTION;
    }
`}emitDriver(t){const e=t.scannerName,n=t.semanticName;return"    public void parse("+e+" scanner, "+n+` semanticAnalyser) throws LexicalError, SyntacticError, SemanticError
    {
        this.scanner = scanner;
        this.semanticAnalyser = semanticAnalyser;

        stack.clear();
        stack.push(DOLLAR);
        stack.push(START_SYMBOL);

        currentToken = scanner.nextToken();

        while ( ! step() )
            ;
    }
`}emitStep(){return`    private boolean step() throws LexicalError, SyntacticError, SemanticError
    {
        if (currentToken == null)
        {
            int pos = 0;
            if (previousToken != null)
                pos = previousToken.getPosition()+previousToken.getLexeme().length();

            currentToken = new Token(DOLLAR, "$", pos);
        }

        int x = stack.pop();
        int a = currentToken.getId();

        if (x == EPSILON)
        {
            return false;
        }
        else if (isTerminal(x))
        {
            if (x == a)
            {
                if (stack.empty())
                    return true;
                else
                {
                    previousToken = currentToken;
                    currentToken = scanner.nextToken();
                    return false;
                }
            }
            else
            {
                throw new SyntacticError(PARSER_ERROR[x], currentToken.getPosition());
            }
        }
        else if (isNonTerminal(x))
        {
            if (pushProduction(x, a))
                return false;
            else
                throw new SyntacticError(PARSER_ERROR[x], currentToken.getPosition());
        }
        else // isSemanticAction(x)
        {
            semanticAnalyser.executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);
            return false;
        }
    }

    private boolean pushProduction(int topStack, int tokenInput)
    {
        int p = PARSER_TABLE[topStack-FIRST_NON_TERMINAL][tokenInput-1];
        if (p >= 0)
        {
            int[] production = PRODUCTIONS[p];
            //empilha a produção em ordem reversa
            for (int i=production.length-1; i>=0; i--)
            {
                stack.push(production[i]);
            }
            return true;
        }
        else
            return false;
    }
`}async emitRecursiveDecendantClass(t,e){const n=await new Ce(t).generateTable(),r=new Be(n,t),s=[],i=e.parserName;s.push("public class "),s.push(i),s.push(` implements Constants
{
`);const o=e.scannerName,a=e.semanticName,l=`    private Token currentToken;
    private Token previousToken;
    private `+o+` scanner;
    private `+a+` semanticAnalyser;

`;s.push(l),s.push("    public void parse("+o+" scanner, "+a+` semanticAnalyser) throws AnalysisError
    {
        this.scanner = scanner;
        this.semanticAnalyser = semanticAnalyser;

        currentToken = scanner.nextToken();
        if (currentToken == null)
            currentToken = new Token(DOLLAR, "$", 0);

        `+r.getStart()+`();

        if (currentToken.getId() != DOLLAR)
            throw new SyntacticError(PARSER_ERROR[DOLLAR], currentToken.getPosition());
    }

    private void match(int token) throws AnalysisError
    {
        if (currentToken.getId() == token)
        {
            previousToken = currentToken;
            currentToken = scanner.nextToken();
            if (currentToken == null)
            {
                int pos = 0;
                if (previousToken != null)
                    pos = previousToken.getPosition()+previousToken.getLexeme().length();

                currentToken = new Token(DOLLAR, "$", pos);
            }
        }
        else
            throw new SyntacticError(PARSER_ERROR[token], currentToken.getPosition());
    }

`);const _=r.build();for(let h=t.FIRST_NON_TERMINAL;h<t.FIRST_SEMANTIC_ACTION();h++){const p=r.getSymbols(h),u=_.get(p);if(s.push("    private void "+p+`() throws AnalysisError
    {
        switch (currentToken.getId())
        {
`),u==null)throw new Ie("Gramática não é LL.");const m=Array.from(u.input.keys());let f=new Set;for(let T=0;T<m.length;T++){const g=u.input.get(m[T]);let S=m[T];if(!f.has(S)){s.push("            case "+S+": // "+r.getSymbols(S)+`
`),f.add(S);for(let A=T+1;A<m.length;A++)if(u.input.get(m[A])===g){if(S=m[A],f.has(S))continue;s.push("            case "+S+": // "+r.getSymbols(S)+`
`),f.add(S)}if(g===void 0)throw new Ie("Gramática não é LL.");g.length==0&&s.push(`                // EPSILON
`);for(let A=0;A<g.length;A++){const w=g[A];t.isTerminal(w)?s.push("                match("+w+"); // "+r.getSymbols(w)+`
`):t.isNonTerminal(w)?s.push("                "+r.getSymbols(w)+`();
`):s.push("                semanticAnalyser.executeAction("+(w-t.FIRST_SEMANTIC_ACTION())+`, previousToken);
`)}s.push(`                break;
`)}}s.push(`            default:
                throw new SyntacticError(PARSER_ERROR[`+u.lhs+`], currentToken.getPosition());
        }
    }

`)}return s.push(`}
`),s.join("")}generateSemanticAnalyser(t){const e=[],n=t.pkgName;n!=null&&n!==""&&e.push("package "+n+`;
`);const r="public class "+t.semanticName+` implements Constants
{
    public void executeAction(int action, Token token)	throws SemanticError
    {
        System.out.println("Ação #"+action+", Token: "+token);
    }	
}
`;return e.push(r),e.join("")}}class Hn{lrTable=null;async generate(t,e,n){const r=new Map;if(t===null||e===null)throw new Error("FiniteAutomata and Grammar must not be null");return r.set("Token.h",this.generateToken(n)),r.set("Constants.h",await this.generateConstantsH(t,e,n)),r.set("Constants.cpp",await this.generateConstantsCpp(t,e,n)),r.set("AnalysisError.h",this.generateAnalysisError(n)),r.set("LexicalError.h",this.generateLexicalError(n)),r.set("SyntacticError.h",this.generateSyntacticError(n)),r.set("SemanticError.h",this.generateSemanticError(n)),r}openNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"namespace "+e+` {

`:""}closeNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"} //namespace "+e+`

`:""}generateToken(t){return`#ifndef TOKEN_H
#define TOKEN_H

#include "Constants.h"

#include <string>

`+this.openNamespace(t)+`class Token
{
public:
    Token(TokenId id, const std::string &lexeme, int position)
      : id(id), lexeme(lexeme), position(position) { }

    TokenId getId() const { return id; }
    const std::string &getLexeme() const { return lexeme; }
    int getPosition() const { return position; }

private:
    TokenId id;
    std::string lexeme;
    int position;
};

`+this.closeNamespace(t)+`#endif
`}generateAnalysisError(t){return`#ifndef ANALYSIS_ERROR_H
#define ANALYSIS_ERROR_H

#include <string>

`+this.openNamespace(t)+`class AnalysisError
{
public:

    AnalysisError(const std::string &msg, int position = -1)
      : message(msg), position(position) { }

    const char *getMessage() const { return message.c_str(); }
    int getPosition() const { return position; }

private:
    std::string message;
    int position;
};

`+this.closeNamespace(t)+`#endif
`}generateLexicalError(t){return`#ifndef LEXICAL_ERROR_H
#define LEXICAL_ERROR_H

#include "AnalysisError.h"

#include <string>

`+this.openNamespace(t)+`class LexicalError : public AnalysisError
{
public:

    LexicalError(const std::string &msg, int position = -1)
      : AnalysisError(msg, position) { }
};

`+this.closeNamespace(t)+`#endif
`}generateSyntacticError(t){return`#ifndef SYNTATIC_ERROR_H
#define SYNTATIC_ERROR_H

#include "AnalysisError.h"

#include <string>

`+this.openNamespace(t)+`class SyntacticError : public AnalysisError
{
public:

    SyntacticError(const std::string &msg, int position = -1)
      : AnalysisError(msg, position) { }
};

`+this.closeNamespace(t)+`#endif
`}generateSemanticError(t){return`#ifndef SEMANTIC_ERROR_H
#define SEMANTIC_ERROR_H

#include "AnalysisError.h"

#include <string>

`+this.openNamespace(t)+`class SemanticError : public AnalysisError
{
public:

    SemanticError(const std::string &msg, int position = -1)
      : AnalysisError(msg, position) { }
};

`+this.closeNamespace(t)+`#endif
`}async generateConstantsH(t,e,n){return`#ifndef CONSTANTS_H
#define CONSTANTS_H

`+this.openNamespace(n)+`enum TokenId 
{
    EPSILON  = 0,
    DOLLAR   = 1,
`+this.constList(t,e)+`};

`+this.lexDecls(t,n)+await this.syntDecls(e,n)+this.closeNamespace(n)+`#endif
`}constList(t,e){let n="",r=null;if(t!=null)r=t.tokens.toArray();else if(e!=null)r=e.terminals;else throw new Error("Erro Interno");for(let s=0;s<r.length;s++){const i=r[s];i.charAt(0)=='"'?n+="    t_TOKEN_"+(s+2)+" = "+(s+2)+", //"+i+`
`:n+="    t_"+i+" = "+(s+2)+`,
`}return n=n.slice(0,-2),n+=`
`,n.toString()}lexDecls(t,e){return t==null?"":"const int STATES_COUNT = "+t.transitions.size()+`;
`+(e.scannerTable==L.SCANNER_TABLE_HARDCODE?"":`
extern int SCANNER_TABLE[STATES_COUNT][256];
`)+`
extern int TOKEN_STATE[STATES_COUNT];

`+(t.hasContext()?`extern int SCANNER_CONTEXT[STATES_COUNT][2];

`:"")+(t.specialCases.length>0?"extern int SPECIAL_CASES_INDEXES["+(t.getSpecialCasesIndexes().length+1)+`];

extern const char *SPECIAL_CASES_KEYS[`+t.specialCases.length+`];

extern int SPECIAL_CASES_VALUES[`+t.specialCases.length+`];

`:"")+`extern const char *SCANNER_ERROR[STATES_COUNT];

`}async syntDecls(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:{const n=t.FIRST_SEMANTIC_ACTION()-t.FIRST_NON_TERMINAL;return"extern const char *PARSER_ERROR["+(t.FIRST_NON_TERMINAL+n)+`];

`}case L.PARSER_LL:{let n=0;for(let s=0;s<t.productions.size();s++){const i=t.productions.get(s).get_rhs().length;i>n&&(n=i)}const r=t.FIRST_SEMANTIC_ACTION()-t.FIRST_NON_TERMINAL;return"const int START_SYMBOL = "+t.startSymbol+`;

const int FIRST_NON_TERMINAL    = `+t.FIRST_NON_TERMINAL+`;
const int FIRST_SEMANTIC_ACTION = `+t.FIRST_SEMANTIC_ACTION()+`;

extern int PARSER_TABLE[`+r+"]["+(t.FIRST_NON_TERMINAL-1)+`];

extern int PRODUCTIONS[`+t.productions.size()+"]["+(n+1)+`];

extern const char *PARSER_ERROR[`+(t.FIRST_NON_TERMINAL+r)+`];

`}default:{const n=Ue.createGenerator(t,e.parser);if(n==null)throw new V("Gerador de Tabela é nulo.");return this.lrTable=await n.buildIntTable(),"const int FIRST_SEMANTIC_ACTION = "+t.FIRST_SEMANTIC_ACTION()+`;

const int SHIFT  = 0;
const int REDUCE = 1;
const int ACTION = 2;
const int ACCEPT = 3;
const int GO_TO  = 4;
const int ERROR  = 5;

extern const int PARSER_TABLE[`+this.lrTable.length+"]["+this.lrTable[0].length+`][2];

extern const int PRODUCTIONS[`+t.productions.size()+`][2];

extern const char *PARSER_ERROR[`+this.lrTable.length+`];

`}}}async generateConstantsCpp(t,e,n){return`#include "Constants.h"

`+this.openNamespace(n)+this.lexTables(t,n)+await this.syntTables(e,n)+this.closeNamespace(n)}lexTables(t,e){if(t==null)return"";let n,r,s="";s+=this.scannerTable(t,e)+`
`,s+="int TOKEN_STATE[STATES_COUNT] = {",n=t.transitions.size(),r=n.toString().length,r==1&&(r=2);for(let i=0;i<n;i++){const a=t.tokenForState(i).toString();for(let l=a.length;l<r;l++)s+=" ";s+=a+", "}s=s.slice(0,-2),s+=` };

`,s+=this.context(t),s+=this.specialCases(t),s+=`const char *SCANNER_ERROR[STATES_COUNT] =
{
`,n=t.transitions.size();for(let i=0;i<n;i++){s+='        "';const o=t.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?s+='\\"':s+=o.charAt(a);s+=`",
`}return s=s.slice(0,-2),s+=`
};

`,s.toString()}context(t){if(!t.hasContext())return"";let e="";e+=`int SCANNER_CONTEXT[STATES_COUNT][2] =
{
`;for(let n=0;n<t.transitions.size();n++)e+="    {",e+=t.isContext(n)?"1":"0",e+=", ",e+=t.getOrigin(n),e+=`},
`;return e=e.slice(0,-2),e+=`
};

`,e.toString()}scannerTable(t,e){if(e.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`int SCANNER_TABLE[STATES_COUNT][256] = 
`,n+=`{
`;const r=t.transitions.size();let s=r.toString().length;s==1&&(s=2);for(let i=0;i<r;i++){n+="    { ";for(let o=0;o<256;o++){const a=t.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<s;l++)n+=" ";n+=a+", ",o==200&&(n+=`
      `)}n=n.slice(0,-2),n+=` },
`}return n=n.slice(0,-2),n+=`
};
`,n.toString()}specialCases(t){if(t.specialCases.length>0){const e=t.getSpecialCasesIndexes(),n=t.specialCases;let r="",s=n.length;r+="int SPECIAL_CASES_INDEXES["+(e.length+1)+`] =
    { `,s=e.length;for(let i=0;i<s;i++)r+=e[i][0]+", ";r+=e[s-1][1],r=r.slice(0,-2),r+=` };

`,s=n.length,r+="const char *SPECIAL_CASES_KEYS["+s+`] =
    { `,s=n.length;for(let i=0;i<s;i++)r+='"'+n[i].key+'", ';r=r.slice(0,-2),r+=` };

`,r+="int SPECIAL_CASES_VALUES["+s+`] =
    { `;for(let i=0;i<s;i++)r+=n[i].value+", ";return r=r.slice(0,-2),r+=` };

`,r.toString()}else return""}async syntTables(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(t);case L.PARSER_LL:return await this.syntTransTable(new Ce(t))+this.productionsLL(t)+this.syntErrorsLL(t);default:return await this.syntTransTable(t)+this.productionsLR(t)+this.syntErrorsLR()}}productionsLR(t){let e="";const n=t.productions.toArray();e+="const int PRODUCTIONS["+n.length+`][2] =
`,e+=`{
`;for(let r=0;r<n.length;r++)e+="    { ",e+=n[r].get_lhs(),e+=", ",e+=n[r].get_rhs().length,e+=` },
`;return e=e.slice(0,-2),e+=`
};
`,e.toString()}async syntTransTable(t){return t instanceof se?this.syntTransTableGrammar(t):await this.syntTransTableLL(t)}syntTransTableGrammar(t){if(this.lrTable===null)throw new V("Tabela LR está nula.");let e="";e+="const int PARSER_TABLE["+this.lrTable.length+"]["+this.lrTable[0].length+`][2] =
`,e+=`{
`;let n=this.lrTable.length;t.productions.size()>n&&(n=t.productions.size()),n=(""+n).length;for(let r=0;r<this.lrTable.length;r++){e+="    {";for(let s=0;s<this.lrTable[r].length;s++){e+=" {",e+=ne.CONSTANTS[this.lrTable[r][s][0]],e+=", ";const i=""+this.lrTable[r][s][1];for(let o=i.length;o<n;o++)e+=" ";e+=i+"},"}e=e.slice(0,-1),e+=` },
`}return e=e.slice(0,-2),e+=`
};
`,e.toString()}async syntTransTableLL(t){const e=await t.generateTable(),n=[];let r=0;for(let i=0;i<e.length;i++){n[i]=[];for(let o=0;o<e[i].length;o++){const a=e[i][o].toString();n[i][o]=a,a.length>r&&(r=a.length)}}let s="";s+="int PARSER_TABLE["+n.length+"]["+n[0].length+`] =
`,s+=`{
`;for(let i=0;i<n.length;i++){s+="    {";for(let o=0;o<n[i].length;o++){s+=" ";for(let a=n[i][o].length;a<r;a++)s+=" ";s+=n[i][o]+","}s=s.slice(0,-1),s+=` },
`}return s=s.slice(0,-2),s+=`
};

`,s.toString()}productionsLL(t){const e=t.productions.toArray(),n=[];let r=0,s=0;for(let o=0;o<e.length;o++){const a=e[o].get_rhs();if(a.length>s&&(s=a.length),a.length>0){n[o]=[],n[o][0]=a.length.toString();for(let l=0;l<a.length;l++)n[o][l+1]=a[l].toString(),n[o][l+1].length>r&&(r=n[o][l+1].length)}else n[o]=[],n[o][0]="1",n[o][1]="0"}let i="";i+="int PRODUCTIONS["+e.length+"]["+(s+1)+`] = 
`,i+=`{
`;for(let o=0;o<n.length;o++){i+="    {";for(let a=0;a<n[o].length;a++){i+=" ";for(let l=n[o][a].length;l<r;l++)i+=" ";i+=n[o][a]+","}for(let a=n[o].length;a<=s;a++){i+=" ";for(let l=1;l<r;l++)i+=" ";i+="0,"}i=i.slice(0,-1),i+=` },
`}return i=i.slice(0,-2),i+=`
};

`,i.toString()}syntErrorsLL(t){const e=t.symbols;let n="";n+="const char *PARSER_ERROR["+t.FIRST_SEMANTIC_ACTION()+`] =
{
    "",
    "Era esperado fim de programa",
`;for(let r=2;r<t.FIRST_NON_TERMINAL;r++){n+='    "Era esperado ';for(let s=0;s<e[r].length;s++)switch(e[r].charAt(s)){case'"':n+='\\"';break;case"\\":n+="\\\\";break;default:n+=e[r].charAt(s)}n+=`",
`}for(let r=t.FIRST_NON_TERMINAL;r<e.length;r++)n+='    "'+e[r]+` inválido",
`;return n=n.slice(0,-2),n+=`
};

`,n.toString()}syntErrorsLR(){if(this.lrTable===null)throw new V("Tabela LR está nula.");let t="";t+="const char *PARSER_ERROR["+this.lrTable.length+`] =
{
`;for(let e=0;e<this.lrTable.length;e++)t+='    "Erro estado '+e+`",
`;return t=t.slice(0,-2),t+=`
};

`,t.toString()}}class Gn{sensitive=!0;lookup=!0;generate(t,e){const n=new Map,r=e.scannerName;let s,i;return t!=null?(this.sensitive=e.scannerCaseSensitive,this.lookup=t.specialCases.length>0,s=this.buildScannerH(t,e),i=this.buildScannerCpp(t,e)):(s=this.buildEmptyScannerH(e),i=this.buildEmptyScannerCpp(e)),n.set(r+".h",s),n.set(r+".cpp",i),n}openNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"namespace "+e+` {

`:""}closeNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"} //namespace "+e+`

`:""}buildScannerH(t,e){let n="";const r=e.scannerName;let s,i,o;e.input==L.INPUT_STREAM?(s="std::istream &",i=`#include <iostream>
`,o="    "+r+"("+s+`input) { setInput(input); }
    `+r+`() : input(""), position(0) { }
`):e.input==L.INPUT_STRING?(s="const char *",i="",o="    "+r+"("+s+`input = "") { setInput(input); }
`):(s=null,i=null,o=null),n+="#ifndef "+r.toUpperCase()+`_H
`,n+="#define "+r.toUpperCase()+`_H
`,n+=`
#include "Token.h"
#include "LexicalError.h"

#include <string>
`+i+`
`,n+=this.openNamespace(e);const a="class "+r+`
{
public:
`+o+`
    void setInput(`+s+`input);
    void setPosition(unsigned pos) { position = pos; }
    Token *nextToken();

private:
    unsigned position;
    std::string input;

    int nextState(unsigned char c, int state) const;
    TokenId tokenForState(int state) const;
`+(this.lookup?`    TokenId lookupToken(TokenId base, const std::string &key);
`:"")+`
    bool hasInput() const { return position < input.size(); }
    char nextChar() { return hasInput() ? input[position++] : (char) -1; }
};

`;return n+=a,n+=this.closeNamespace(e),n+=`#endif
`,n.toString()}buildScannerCpp(t,e){let n="";const r=e.scannerName;n+='#include "'+r+`.h"

`,this.sensitive||(n+=`#include <cctype>

`),n+=this.openNamespace(e);let s,i;e.input==L.INPUT_STREAM?(s="std::istream &",i=`    std::istreambuf_iterator<char> in(input);
    std::istreambuf_iterator<char> eof;

    this->input.assign(in, eof);

`):e.input==L.INPUT_STRING?(s="const char *",i=`    this->input = input;
`):(s=null,i=null);const o="void "+r+"::setInput("+s+`input)
{
`+i+`    setPosition(0);
}

Token *`+r+`::nextToken()
{
    if ( ! hasInput() )
        return 0;

    unsigned start = position;

    int state = 0;
    int oldState = 0;
    int endState = -1;
    int end = -1;
`+(t.hasContext()?`    int ctxtState = -1;
    int ctxtEnd = -1;
`:"")+`
    while (hasInput())
    {
        oldState = state;
        state = nextState(nextChar(), state);

        if (state < 0)
            break;

        else
        {
            if (tokenForState(state) >= 0)
            {
                endState = state;
                end = position;
            }
`+(t.hasContext()?`            if (SCANNER_CONTEXT[state][0] == 1)
            {
                ctxtState = state;
                ctxtEnd = position;
            }
`:"")+`        }
    }
    if (endState < 0 || (endState != state && tokenForState(oldState) == -2))
        throw LexicalError(SCANNER_ERROR[oldState], start);

`+(t.hasContext()?`    if (ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState)
        end = ctxtEnd;

`:"")+`    position = end;

    TokenId token = tokenForState(endState);

    if (token == 0)
        return nextToken();
    else
    {
            std::string lexeme = input.substr(start, end-start);
`+(this.lookup?`            token = lookupToken(token, lexeme);
`:"")+`            return new Token(token, lexeme, start);
    }
}

int `+r+`::nextState(unsigned char c, int state) const
{
`+this.nextStateImpl(t,e)+`}

TokenId `+r+`::tokenForState(int state) const
{
    int token = -1;

    if (state >= 0 && state < STATES_COUNT)
        token = TOKEN_STATE[state];

    return static_cast<TokenId>(token);
}

`+(this.lookup?"TokenId "+r+`::lookupToken(TokenId base, const std::string &key)
{
    int start = SPECIAL_CASES_INDEXES[base];
    int end   = SPECIAL_CASES_INDEXES[base+1]-1;

`+(this.sensitive?"":`    std::string key_u = key;
    for (int i=0; i<key.size(); i++)
        key_u[i] = std::toupper(key_u[i]);

`)+`    while (start <= end)
    {
        int half = (start+end)/2;
        const std::string current = SPECIAL_CASES_KEYS[half];

`+(this.sensitive?`        if (current == key)
`:`        if (current == key_u)
`)+`            return static_cast<TokenId>(SPECIAL_CASES_VALUES[half]);
`+(this.sensitive?`        else if (current < key)
`:`        else if (current < key_u)
`)+`            start = half+1;
        else  //(current > key)
            end = half-1;
    }

    return base;
}

`:"");return n+=o,n+=this.closeNamespace(e),n.toString()}nextStateImpl(t,e){switch(e.scannerTable){case L.SCANNER_TABLE_FULL:case L.SCANNER_TABLE_COMPACT:return`    int next = SCANNER_TABLE[state][c];
    return next;
`;case L.SCANNER_TABLE_HARDCODE:{const n=t.transitions;let r="";for(let s=0;s<n.size();s++){const i=n.get(s);if(i.size!=0){r+="        case "+s+`:
            switch (c)
            {
`;for(const[o,a]of i.entries()){const l=o,_=a;r+=`                case ${l.charCodeAt(0)}: return ${_};
`}r+=`                default: return -1;
            }
`}}return`    switch (state)
    {
`+r.toString()+`        default: return -1;
    }
`}default:return""}}buildEmptyScannerH(t){let e="";const n=t.scannerName;e+="#ifndef "+n.toUpperCase()+`_H
`,e+="#define "+n.toUpperCase()+`_H
`,e+=`
#include "Token.h"
#include "LexicalError.h"

`,e+=this.openNamespace(t);const r="class "+n+`
{
public:

    Token *nextToken();

};

`;return e+=r,e+=this.closeNamespace(t),e+=`#endif
`,e.toString()}buildEmptyScannerCpp(t){let e="";const n=t.scannerName;e+='#include "'+n+`.h"

`,e+=this.openNamespace(t);const r="Token *"+n+`::nextToken()
{
    return 0;
}

`;return e+=r,e+=this.closeNamespace(t),e.toString()}}class Kn{rd;async generate(t,e){const n=new Map;if(t!=null){const r=e.parserName;n.set(r+".h",await this.parserH(t,e)),n.set(r+".cpp",await this.parserCpp(t,e)),n.set(e.semanticName+".cpp",this.semanticAnalyserCpp(e)),n.set(e.semanticName+".h",this.semanticAnalyserH(e))}return n}openNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"namespace "+e+` {

`:""}closeNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"} //namespace "+e+`

`:""}semanticAnalyserH(t){const e=t.semanticName;return"#ifndef "+e.toUpperCase()+`_H
#define `+e.toUpperCase()+`_H

#include "Token.h"
#include "SemanticError.h"

`+this.openNamespace(t)+"class "+e+`
{
public:
    void executeAction(int action, const Token *token);
};

`+this.closeNamespace(t)+`#endif
`}semanticAnalyserCpp(t){const e=t.semanticName;return'#include "'+e+`.h"
#include "Constants.h"

#include <iostream>

`+this.openNamespace(t)+"void "+e+`::executeAction(int action, const Token *token)
{
    std::cout << "Ação: " << action << ", Token: "  << token->getId() 
              << ", Lexema: " << token->getLexeme() << std::endl;
}

`+this.closeNamespace(t)}async parserH(t,e){const n=e.scannerName,r=e.parserName,s=e.semanticName,i=e.parser,o=i==L.PARSER_REC_DESC;let a="";if(o){const _=await new Ce(t).generateTable();this.rd=new Be(_,t);let h="";h+="    void match(int token);";for(let p=t.FIRST_NON_TERMINAL;p<t.FIRST_SEMANTIC_ACTION();p++)h+="    void "+this.rd.getSymbols(p)+`();
`;a=h.toString()}return"#ifndef "+r+`_H
#define `+r+`_H

#include "Constants.h"
#include "Token.h"
#include "`+n+`.h"
#include "`+s+`.h"
#include "SyntacticError.h"

`+(o?"":`#include <stack>

`)+this.openNamespace(e)+"class "+r+`
{
public:
    `+r+`() : previousToken(0), currentToken(0) { }

    ~`+r+`()
    {
        if (previousToken != 0 && previousToken != currentToken) delete previousToken;
        if (currentToken != 0)  delete currentToken;
    }

    void parse(`+n+" *scanner, "+s+` *semanticAnalyser);

private:
`+(o?"":`    std::stack<int> stack;
`)+`    Token *previousToken;
    Token *currentToken;
    `+n+` *scanner;
    `+s+` *semanticAnalyser;

`+(o?a:`    bool step();
`+(i==L.PARSER_LL?`    bool pushProduction(int topStack, int tokenInput);

    static bool isTerminal(int x) { return x < FIRST_NON_TERMINAL; }
    static bool isNonTerminal(int x) { return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION; }
    static bool isSemanticAction(int x) { return x >= FIRST_SEMANTIC_ACTION; }
`:""))+`};

`+this.closeNamespace(e)+`#endif
`}async parserCpp(t,e){switch(e.parser){case L.PARSER_REC_DESC:return await this.parserCppRecursiveDescendant(t,e);case L.PARSER_LL:return this.parserCppLL(t,e);default:return this.parserCppLR(t,e)}}async parserCppRecursiveDescendant(t,e){const n=await new Ce(t).generateTable(),r=new Be(n,t);if(r==null)throw new V("RecursiveDescendent é nulo.");const s=e.scannerName,i=e.parserName,o=e.semanticName,a='#include "'+i+`.h"

`+this.openNamespace(e)+"void "+i+"::parse("+s+" *scanner, "+o+` *semanticAnalyser)
{
    this->scanner = scanner;
    this->semanticAnalyser = semanticAnalyser;

    if (previousToken != 0 && previousToken != currentToken)
        delete previousToken;
    previousToken = 0;

    if (currentToken != 0)
        delete currentToken;
    currentToken = scanner->nextToken();
    if (currentToken == 0)
        currentToken = new Token(DOLLAR, "$", 0);

    `+r.getStart()+`();

    if (currentToken->getId() != DOLLAR)
        throw SyntacticError(PARSER_ERROR[DOLLAR], currentToken->getPosition());
}

void `+i+`::match(int token)
{
    if (currentToken->getId() == token)
    {
        if (previousToken != 0)
            delete previousToken;
        previousToken = currentToken;
        currentToken = scanner->nextToken();
        if (currentToken == 0)
        {
            int pos = 0;
            if (previousToken != 0)
                pos = previousToken->getPosition()+previousToken->getLexeme().size();

            currentToken = new Token(DOLLAR, "$", pos);
        }
    }
    else
        throw SyntacticError(PARSER_ERROR[token], currentToken->getPosition());
}
`;let l="";const _=r.build();for(let p=t.FIRST_NON_TERMINAL;p<t.FIRST_SEMANTIC_ACTION();p++){const u=r.getSymbols(p),m=_.get(u);if(m==null)throw new V("FunctionCustom é nulo");l+=`
void `+i+"::"+u+`()
{
    switch (currentToken->getId())
    {
`;const f=Array.from(m.input.keys());let T=new Set;for(let g=0;g<f.length;g++){const S=m.input.get(f[g]);let A=f[g];if(!T.has(A)){l+="        case "+A+": // "+r.getSymbols(A)+`
`;for(let w=g+1;w<f.length;w++){const R=m.input.get(f[w]);if(S==null||R==null)throw new V("rhs é nulo");if(R===S){if(A=f[w],T.has(A))continue;l+="        case "+A+": // "+r.getSymbols(A)+`
`,f.splice(w,1),T.add(A)}}if(S?.length==0&&(l+=`            // EPSILON
`),S==null)throw new V("rhs é nulo");for(let w=0;w<S.length;w++){const R=S[w];t.isTerminal(R)?l+="            match("+R+"); // "+r.getSymbols(R)+`
`:t.isNonTerminal(R)?l+="            "+r.getSymbols(R)+`();
`:l+="            semanticAnalyser->executeAction("+(R-t.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}l+=`            break;
`}}l+=`        default:
            throw SyntacticError(PARSER_ERROR[`+m.lhs+`], currentToken->getPosition());
    }
}
`}const h=`
`+this.closeNamespace(e);return a+l.toString()+h}parserCppLL(t,e){const n=e.scannerName,r=e.parserName,s=e.semanticName;return'#include "'+r+`.h"

`+this.openNamespace(e)+"void "+r+"::parse("+n+" *scanner, "+s+` *semanticAnalyser);
{
    this->scanner = scanner;
    this->semanticAnalyser = semanticAnalyser;

    //Limpa a pilha
    while (! stack.empty())
        stack.pop();

    stack.push(DOLLAR);
    stack.push(START_SYMBOL);

    if (previousToken != 0 && previousToken != currentToken)
        delete previousToken;
    previousToken = 0;

    if (currentToken != 0)
        delete currentToken;
    currentToken = scanner->nextToken();

    while ( ! step() )
        ;
}

bool `+r+`::step()
{
    if (currentToken == 0) //Fim de Sentenca
    {
        int pos = 0;
        if (previousToken != 0)
            pos = previousToken->getPosition() + previousToken->getLexeme().size();

        currentToken = new Token(DOLLAR, "$", pos);
    }

    int a = currentToken->getId();
    int x = stack.top();

    stack.pop();

    if (x == EPSILON)
    {
        return false;
    }
    else if (isTerminal(x))
    {
        if (x == a)
        {
            if (stack.empty())
                return true;
            else
            {
                if (previousToken != 0)
                    delete previousToken;
                previousToken = currentToken;
                currentToken = scanner->nextToken();
                return false;
            }
        }
        else
        {
            throw SyntacticError(PARSER_ERROR[x], currentToken->getPosition());
        }
    }
    else if (isNonTerminal(x))
    {
        if (pushProduction(x, a))
            return false;
        else
            throw SyntacticError(PARSER_ERROR[x], currentToken->getPosition());
    }
    else // isSemanticAction(x)
    {
        semanticAnalyser->executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);
        return false;
    }
}

bool `+r+`::pushProduction(int topStack, int tokenInput)
{
    int p = PARSER_TABLE[topStack-FIRST_NON_TERMINAL][tokenInput-1];
    if (p >= 0)
    {
        int *production = PRODUCTIONS[p];
        //empilha a produção em ordem reversa
        int length = production[0];
        for (int i=length; i>=1; i--)
        {
            stack.push( production[i] );
        }
        return true;
    }
    else
        return false;
}

`+this.closeNamespace(e)}parserCppLR(t,e){const n=e.scannerName,r=e.parserName,s=e.semanticName;return'#include "'+r+`.h"

`+this.openNamespace(e)+"void "+r+"::parse("+n+" *scanner, "+s+` *semanticAnalyser)
{
    this->scanner = scanner;
    this->semanticAnalyser = semanticAnalyser;

    //Limpa a pilha
    while (! stack.empty())
        stack.pop();

    stack.push(0);

    if (previousToken != 0 && previousToken != currentToken)
        delete previousToken;
    previousToken = 0;

    if (currentToken != 0)
        delete currentToken;
    currentToken = scanner->nextToken();

    while ( ! step() )
        ;
}

bool `+r+`::step()
{
    if (currentToken == 0) //Fim de Sentença
    {
        int pos = 0;
        if (previousToken != 0)
            pos = previousToken->getPosition() + previousToken->getLexeme().size();

        currentToken = new Token(DOLLAR, "$", pos);
    }

    int token = currentToken->getId();
    int state = stack.top();

    const int* cmd = PARSER_TABLE[state][token-1];

    switch (cmd[0])
    {
        case SHIFT:
        {
            stack.push(cmd[1]);
            if (previousToken != 0)
                delete previousToken;
            previousToken = currentToken;
            currentToken = scanner->nextToken();
            return false;
        }
        case REDUCE:
        {
            const int* prod = PRODUCTIONS[cmd[1]];

            for (int i=0; i<prod[1]; i++)
                stack.pop();

            int oldState = stack.top();
            stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);
            return false;
        }
        case ACTION:
        {
            int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;
            stack.push(PARSER_TABLE[state][action][1]);
            semanticAnalyser->executeAction(cmd[1], previousToken);
            return false;
        }
        case ACCEPT:
            return true;

        case ERROR:
            throw SyntacticError(PARSER_ERROR[state], currentToken->getPosition());
    }
    return false;
}

`+this.closeNamespace(e)}}class Zn{lrTable=null;async generate(t,e,n){if(t===null||e===null)throw new Error("FiniteAutomata and Grammar must not be null");const r=new Map;return r.set("UToken.pas",this.generateToken()),r.set("UConstants.pas",await this.generateConstants(t,e,n)),r.set("UAnalysisError.pas",this.generateAnalysisError()),r.set("ULexicalError.pas",this.generateLexicalError()),r.set("USyntacticError.pas",this.generateSyntacticError()),r.set("USemanticError.pas",this.generateSemanticError()),r}generateToken(){return`unit UToken;

interface

uses UConstants;

type
    TToken = class
    public
        constructor create(id:integer; lexeme:string; position:integer);

        function getId : integer;
        function getLexeme : string;
        function getPosition : integer;

    private
        id : integer;
        lexeme : string;
        position : integer
    end;

implementation

constructor TToken.create(id:integer; lexeme:string; position:integer);
begin
    self.id := id;
    self.lexeme := lexeme;
    self.position := position;
end;

function TToken.getId : integer;
begin
    result := id;
end;

function TToken.getLexeme : string;
begin
    result := lexeme;
end;

function TToken.getPosition : integer;
begin
    result := position;
end;

end.
`}generateAnalysisError(){return`unit UAnalysisError;

interface

uses sysutils;

type
    EAnalysisError = class(Exception)
    public
        constructor create(message:string; position:integer); overload;
        constructor create(message:string); overload;

        function getMessage : string;
        function getPosition : integer;

    private
        position : integer
    end;

implementation

constructor EAnalysisError.create(message:string; position:integer);
begin
    inherited create(message);
    self.position := position;
end;

constructor EAnalysisError.create(message:string);
begin
    inherited create(message);
    self.position := -1;
end;

function EAnalysisError.getMessage : string;
begin
    result := inherited Message;
end;

function EAnalysisError.getPosition : integer;
begin
   result := position;
end;

end.
`}generateLexicalError(){return`unit ULexicalError;

interface

uses UAnalysisError;

type
    ELexicalError = class(EAnalysisError)
    public
        constructor create(message:string; position:integer); overload;
        constructor create(message:string); overload;
    end;

implementation

constructor ELexicalError.create(message:string; position:integer);
begin
    inherited create(message, position);
end;

constructor ELexicalError.create(message:string);
begin
    inherited create(message);
end;

end.
`}generateSyntacticError(){return`unit USyntacticError;

interface

uses UAnalysisError;

type
    ESyntacticError = class(EAnalysisError)
    public
        constructor create(message:string; position:integer); overload;
        constructor create(message:string); overload;
    end;

implementation

constructor ESyntacticError.create(message:string; position:integer);
begin
    inherited create(message, position);
end;

constructor ESyntacticError.Create(message:string);
begin
    inherited create(message);
end;

end.
`}generateSemanticError(){return`unit USemanticError;

interface

uses UAnalysisError;

type
    ESemanticError = class(EAnalysisError)
    public
        constructor create(message:string; position:integer); overload;
        constructor create(message:string); overload;
    end;

implementation

constructor ESemanticError.Create(message:string; position:integer);
begin
    inherited create(message, position);
end;

constructor ESemanticError.Create(message:string);
begin
    inherited create(message);
end;

end.
`}async generateConstants(t,e,n){return`unit UConstants;

interface

const

`+this.constants(t,e)+this.lexTables(t,n)+await this.syntTables(e,n)+`implementation

end.
`}constants(t,e){let n="",r=null;if(t!=null)r=t.tokens.toArray();else if(e!=null)r=e.terminals;else throw new Error("Erro Interno");n+=`    EPSILON = 0;
    DOLLAR  = 1;

`;for(let s=0;s<r.length;s++){const i=r[s];i.charAt(0)=='"'?n+="    t_TOKEN_"+(s+2)+" = "+(s+2)+"; //"+i+`
`:n+="    t_"+i+" = "+(s+2)+`;
`}return n+=`
`,n.toString()}lexTables(t,e){return t==null?"":"    STATES_COUNT = "+t.transitions.size()+`;

`+this.mainLex(t,e)+this.context(t)+(t.specialCases.length>0?this.lookup(t):"")+this.scanner_error(t)}context(t){if(!t.hasContext())return"";let e="";e+=`    SCANNER_CONTEXT : array[0..STATES_COUNT-1][0..1] of integer =
    (
`;for(let n=0;n<t.transitions.size();n++)e+="        (",e+=t.isContext(n)?"1":"0",e+=", ",e+=t.getOrigin(n),e+=`),
`;return e=e.slice(0,-2),e+=`
    );
`,e.toString()}scanner_error(t){let e="";e+=`    SCANNER_ERROR : array[0..STATES_COUNT-1] of string =
    (
`;const n=t.transitions.size();for(let r=0;r<n;r++){e+="        '";const s=t.getError(r);for(let i=0;i<s.length;i++)s.charAt(i)=="'"?e+="''":e+=s.charAt(i);e+=`',
`}return e=e.slice(0,-2),e+=`
    );
`,e.toString()}mainLex(t,e){let n="",r;n+=this.scannerTable(t,e),n+=`    TOKEN_STATE : array[0..STATES_COUNT-1] of integer =
        ( `;const s=t.transitions.size();r=s.toString().length,r==1&&(r=2);for(let i=0;i<s;i++){const a=t.tokenForState(i).toString();for(let l=a.length;l<r;l++)n+=" ";n+=a+", "}return n=n.slice(0,-2),n+=` );

`,n.toString()}scannerTable(t,e){if(e.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`    SCANNER_TABLE : array[0..STATES_COUNT-1, char] of integer =
    ( 
`;const r=t.transitions.size();let s=r.toString().length;s==1&&(s=2);for(let i=0;i<r;i++){n+="        ( ";for(let o=0;o<256;o++){const a=t.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<s;l++)n+=" ";n+=a+", ",o==200&&(n+=`
          `)}n=n.slice(0,-2),n+=` ),
`}return n=n.slice(0,-2),n+=`
    );

`,n.toString()}lookup(t){let e="";const n=t.getSpecialCasesIndexes();e+="    SPECIAL_CASES_INDEXES : array[0.."+n.length+`] of integer =
        ( `;let r=n.length;for(let i=0;i<n.length;i++)e+=n[i][0],e+=", ";e+=n[r-1][1],e+=` );

`;const s=t.specialCases;r=s.length,e+="    SPECIAL_CASES_KEYS : array[0.."+(r-1)+`] of string =
        (  `;for(let i=0;i<r;i++)e+="'",e+=s[i].key,e+="', ";e=e.slice(0,-2),e+=` );

`,e+="    SPECIAL_CASES_VALUES : array[0.."+(r-1)+`] of integer =
        (  `;for(let i=0;i<r;i++)e+=s[i].value,e+=", ";return e=e.slice(0,-2),e+=` );

`,e.toString()}async syntTables(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:return this.errorLL(t);case L.PARSER_LL:return"    START_SYMBOL = "+t.startSymbol+`;

    FIRST_NON_TERMINAL    = `+t.FIRST_NON_TERMINAL+`;
    FIRST_SEMANTIC_ACTION = `+t.FIRST_SEMANTIC_ACTION()+`;

`+await this.transTablesLL(new Ce(t))+this.prodsLL(t)+this.errorLL(t);case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:return"    FIRST_SEMANTIC_ACTION = "+t.FIRST_SEMANTIC_ACTION()+`;

    SHIFT  = 0;
    REDUCE = 1;
    ACTION = 2;
    ACCEPT = 3;
    GO_TO  = 4;
    ERROR  = 5;

`+await this.transTablesLR(t)+`
`+this.prodsLR(t)+`
`+this.errorLR();default:return""}}async transTablesLR(t){const e=Ue.createGenerator(t,L.PARSER_SLR);if(e==null)throw new V("Gerador de Tabela é nulo.");this.lrTable=await e.buildIntTable();let n="";n+="    PARSER_TABLE : array[0.."+(this.lrTable.length-1)+", 0.."+(this.lrTable[0].length-1)+`, 0..1] of integer =
`,n+=`    (
`;let r=this.lrTable.length;t.productions.size()>r&&(r=t.productions.size()),r=(""+r).length;for(let s=0;s<this.lrTable.length;s++){n+="        (";for(let i=0;i<this.lrTable[s].length;i++){n+=" (",n+=ne.CONSTANTS[this.lrTable[s][i][0]],n+=", ";const o=""+this.lrTable[s][i][1];for(let a=o.length;a<r;a++)n+=" ";n+=o+"),"}n=n.slice(0,-1),n+=` ),
`}return n=n.slice(0,-2),n+=`
    );
`,n.toString()}prodsLR(t){let e="";const n=t.productions.toArray();e+="    PRODUCTIONS : array[0.."+(n.length-1)+`, 0..1] of Integer =
`,e+=`    (
`;for(let r=0;r<n.length;r++)e+="        ( ",e+=n[r].get_lhs(),e+=", ",e+=n[r].get_rhs().length,e+=` ),
`;return e=e.slice(0,-2),e+=`
    );
`,e.toString()}async transTablesLL(t){const e=await t.generateTable(),n=[];let r=0;for(let i=0;i<e.length;i++){n[i]=[];for(let o=0;o<e[i].length;o++){const a=e[i][o].toString();n[i][o]=a,a.length>r&&(r=a.length)}}let s="";s+="    PARSER_TABLE : array[0.."+(n.length-1)+", 0.."+(n[0].length-1)+`] of integer =
`,s+=`    (
`;for(let i=0;i<n.length;i++){s+="        (";for(let o=0;o<n[i].length;o++){s+=" ";for(let a=n[i][o].length;a<r;a++)s+=" ";s+=n[i][o]+","}s=s.slice(0,-1),s+=` ),
`}return s=s.slice(0,-2),s+=`
    );

`,s.toString()}prodsLL(t){const e=t.productions.toArray(),n=[];let r=0,s=0;for(let o=0;o<e.length;o++){const a=e[o].get_rhs();if(a.length>s&&(s=a.length),a.length>0){n[o]=[],n[o][0]=a.length.toString();for(let l=0;l<a.length;l++)n[o][l+1]=a[l].toString(),n[o][l+1].length>r&&(r=n[o][l+1].length)}else n[o]=[],n[o][0]="1",n[o][1]="0"}let i="";i+="    PRODUCTIONS : array[0.."+(e.length-1)+", 0.."+s+`] of integer =
`,i+=`    (
`;for(let o=0;o<n.length;o++){i+="        (";for(let a=0;a<n[o].length;a++){i+=" ";for(let l=n[o][a].length;l<r;l++)i+=" ";i+=n[o][a]+","}for(let a=n[o].length;a<=s;a++){i+=" ";for(let l=1;l<r;l++)i+=" ";i+="0,"}i=i.slice(0,-1),i+=` ),
`}return i=i.slice(0,-2),i+=`
    );

`,i.toString()}errorLL(t){const e=t.symbols;let n="";n+="    PARSER_ERROR : array [0.."+(t.symbols.length-1)+`] of string =
    (
        '',
        'Era esperado fim de programa',
`;for(let r=2;r<t.FIRST_NON_TERMINAL;r++){n+="        'Era esperado ";for(let s=0;s<e[r].length;s++)e[r].charAt(s)==="'"?n+="''":n+=e[r].charAt(s);n+=`',
`}for(let r=t.FIRST_NON_TERMINAL;r<e.length;r++)n+="        '"+e[r]+` inválido',
`;return n=n.slice(0,-2),n+=`
    );

`,n.toString()}errorLR(){if(this.lrTable===null)throw new V("Tabela LR está nula.");let t="";t+="    PARSER_ERROR : array [0.."+(this.lrTable.length-1)+`] of string =
    (
`;for(let e=0;e<this.lrTable.length;e++)t+="        'Erro estado "+e+`',
`;return t=t.slice(0,-2),t+=`
    );

`,t.toString()}}class Wn{sensitive=!0;lookup=!0;generate(t,e){const n=new Map,r=e.scannerName;let s;return t!=null?(this.sensitive=e.scannerCaseSensitive,this.lookup=t.specialCases.length>0,s=this.buildScanner(t,e)):s=this.buildEmptyScanner(e),n.set("U"+r+".pas",s),n}buildScanner(t,e){const n=e.scannerName;let r,s,i,o;return e.input==L.INPUT_STREAM?(r="TStream",s=`var
    strStream: TStringStream;
begin
    strStream := TStringStream.Create('');

    if input <>  nil then
        strStream.CopyFrom(input, input.Size);

    self.input := strStream.DataString;
    setPosition(1);
    setEnd(Length(self.input));

    strStream.Destroy;
end;
`,i="setInput(nil);",o=", classes"):e.input==L.INPUT_STRING?(r="string",s=`begin
    self.input := input;
    setPosition(1);
    setEnd(Length(input));
end;
`,i="setInput('');",o=""):(r="",s="",i="",o=""),"unit U"+n+`;

interface

uses UToken, ULexicalError, UConstants`+o+`, SysUtils;

type
    T`+n+` = class
    public
        constructor create; overload;
        constructor create(input : `+r+`); overload;

        procedure setInput(input : `+r+`);
        procedure setPosition(pos : integer);
        procedure setEnd(endPos : integer);
        function nextToken : TToken; //raises ELexicalError

    private
        input : string;
        position : integer;
        endPos : integer;

        function nextState(c : char; state : integer) : integer;
        function tokenForState(state : integer) : integer;
`+(this.lookup?`        function lookupToken(base : integer; key : string) : integer;
`:"")+`
        function hasInput : boolean;
        function nextChar : char;
    end;

implementation

constructor T`+n+`.create;
begin
    `+i+`
end;

constructor T`+n+".create(input : "+r+`);
begin
    setInput(input);
end;

procedure T`+n+".setInput(input : "+r+`);
`+s+`
function T`+n+`.nextToken : TToken;
var
    start,
    oldState,
    state,
    endState,
    endPos,
`+(t.hasContext()?`    ctxtState;
    ctxtEnd;
`:"")+`    token : integer;
    lexeme : string;
begin
    if not hasInput then
        result := nil
    else
    begin
        start := position;

        state := 0;
        oldState := 0;
        endState := -1;
        endPos := -1;
`+(t.hasContext()?`        ctxtState := -1;
        ctxtEnd := -1;
`:"")+`
        while hasInput do
        begin
            oldState := state;
            state := nextState(nextChar, state);

            if state < 0 then
                break

            else
            begin
                if tokenForState(state) >= 0 then
                begin
                    endState := state;
                    endPos := position;
                end;
`+(t.hasContext()?`                if SCANNER_CONTEXT[state][0] = 1 then
                begin
                    ctxtState := state;
                    ctxtEnd := position;
                end
`:"")+`            end;
        end;
        if (endState < 0) or ( (endState <> state) and (tokenForState(oldState) = -2) ) then
            raise ELexicalError.create(SCANNER_ERROR[oldState], start);

`+(t.hasContext()?`        if (ctxtState <> -1) and (SCANNER_CONTEXT[endState][1] = ctxtState) then
            endPos := ctxtEnd;

`:"")+`        position := endPos;

        token := tokenForState(endState);

        if token = 0 then
            result := nextToken
        else
        begin
            lexeme := Copy(input, start, endPos-start);
`+(this.lookup?`            token  := lookupToken(token, lexeme);
`:"")+`            result := TToken.create(token, lexeme, start);
        end;
    end;
end;

procedure T`+n+`.setPosition(pos : integer);
begin
    position := pos;
end;

procedure T`+n+`.setEnd(endPos : integer);
begin
    self.endPos := endPos;
end;

function T`+n+`.nextState(c : char; state : integer) : integer;
begin
`+this.nextStateImpl(t,e)+`end;

function T`+n+`.tokenForState(state : integer) : integer;
begin
    if (state >= 0) and (state < STATES_COUNT) then
        result := TOKEN_STATE[state]
    else
        result := -1;
end;

`+(this.lookup?"function T"+n+`.lookupToken(base : integer; key : string) : integer;
var
    start, end_, half : integer;
    str : string;
begin
    result := base;

    start := SPECIAL_CASES_INDEXES[base];
    end_  := SPECIAL_CASES_INDEXES[base+1]-1;

`+(this.sensitive?"":`    key := UpperCase(key);

`)+`    while start <= end_ do
    begin
        half := (start+end_) div 2;
        str := SPECIAL_CASES_KEYS[half];

        if str = key then
        begin
            result := SPECIAL_CASES_VALUES[half];
            break;
        end
        else if str < key then
            start := half+1
        else  //str > key
            end_ := half-1;
    end;
end;

`:"")+"function T"+n+`.hasInput : boolean;
begin
    result := position <= endPos;
end;

function T`+n+`.nextChar : char;
begin
    if hasInput then
    begin
        result := input[position];
        position := position + 1;
    end
    else
        result := char(0);
end;

end.
`}nextStateImpl(t,e){switch(e.scannerTable){case L.SCANNER_TABLE_FULL:case L.SCANNER_TABLE_COMPACT:return`    result := SCANNER_TABLE[state][c];
`;case L.SCANNER_TABLE_HARDCODE:{const n=t.transitions,r=[];for(let s=0;s<n.size();s++){const i=n.get(s);if(i.size!=0){r.push("        "+s+`: case integer(c) of
`);for(const[o,a]of i.entries()){const l=o,_=a;r.push("            "+l.charCodeAt(0)+": result := "+_+`;
`)}r.push(`            else result := -1;
        end;
`)}}return`    case state of
`+r.toString()+`        else result := -1;
    end;
`}default:return null}}buildEmptyScanner(t){const e=t.scannerName;return"unit U"+e+`;

interface

uses UToken, ULexicalError;

type
    T`+e+` = class
    public
        function nextToken : TToken; //raises ELexicalError
    end;

implementation

function T`+e+`.nextToken : TToken;
begin
    result := nil;
end;

end.
`}}class Yn{async generate(t,e){const n=new Map;if(t!=null){const r=e.parserName;let s;switch(e.parser){case L.PARSER_REC_DESC:s=await this.buildRecursiveDescendantParser(t,e);break;case L.PARSER_LL:s=this.buildLLParser(t,e);break;case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:s=this.buildLRParser(t,e);break;default:s=null}if(s===null)throw new V("String do Parser é nulo.");n.set("U"+r+".pas",s),n.set("U"+e.semanticName+".pas",this.generateSemanticAnalyser(e))}return n}async buildRecursiveDescendantParser(t,e){const n=e.parserName,r=e.scannerName,s=e.semanticName,i=await new Ce(t).generateTable(),o=new Be(i,t),a=o.build();let l="";for(let p=t.FIRST_NON_TERMINAL;p<t.FIRST_SEMANTIC_ACTION();p++)l+="        procedure "+o.getSymbols(p)+`;
`;const _=l;l="";for(let p=t.FIRST_NON_TERMINAL;p<t.FIRST_SEMANTIC_ACTION();p++){const u=o.getSymbols(p),m=a.get(u);if(l+=`
procedure T`+n+"."+u+`;
begin
    case currentToken.getId of
`,m==null)throw new Ie("Gramática não é LL.");const f=Array.from(m.input.keys());for(let T=0;T<f.length;T++){const g=m.input.get(f[T]);let S=f[T];l+="        "+S+" (* "+o.getSymbols(S)+" *)";for(let A=T+1;A<f.length;A++)m.input.get(f[A])===g&&(S=f[A],l+=`,
        `+S+" (* "+o.getSymbols(S)+" *)",f.slice(A,A),A--);if(g===void 0)throw new Ie("Gramática não é LL.");l+=` : 
        begin
`,g.length==0&&(l+=`            // EPSILON
`);for(let A=0;A<g.length;A++){const w=g[A];t.isTerminal(w)?l+="            match("+w+"); // "+o.getSymbols(w)+`
`:t.isNonTerminal(w)?l+="            "+o.getSymbols(w)+`;
`:l+="            semanticAnalyser.executeAction("+(w-t.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}l+=`        end;
`}l+=`        else
            raise ESyntacticError.create(PARSER_ERROR[`+m.lhs+`], currentToken.getPosition());
    end;
end;
`}const h=l;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+r+", U"+s+`, USyntacticError, UAnalysisError;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+r+"; semanticAnalyser : T"+s+`); //raises EAnaliserError

    private
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+r+`;
        semanticAnalyser : T`+s+`;

        procedure match(token : integer);

`+_+`    end;

implementation

constructor T`+n+`.create;
begin
    currentToken := nil;
    previousToken := nil;
end;

destructor T`+n+`.destroy;
begin
    if (currentToken <> nil) and (currentToken <> previousToken) then
        currentToken.destroy;
    if previousToken <> nil then
        previousToken.destroy;
end;

procedure T`+n+".parse(scanner : T"+r+"; semanticAnalyser : T"+s+`);
begin
    self.scanner := scanner;
    self.semanticAnalyser := semanticAnalyser;

    if (previousToken <> nil) and (previousToken <> currentToken) then
        previousToken.destroy;
    previousToken := nil;

    if currentToken <> nil then
        currentToken.destroy;
    currentToken := scanner.nextToken;
    if currentToken = nil then
        currentToken := TToken.create(DOLLAR, '$', 0);

    `+o.getStart()+`;

    if currentToken.getId <> DOLLAR then
        raise ESyntacticError.create(PARSER_ERROR[DOLLAR], currentToken.getPosition);
end;

procedure T`+n+`.match(token : integer);
var pos : integer;
begin
    if currentToken.getId() = token then
    begin
        if previousToken <> nil then
            previousToken.destroy;
        previousToken := currentToken;
        currentToken := scanner.nextToken;
        if currentToken = nil then
        begin
            pos := 0;
            if previousToken <> nil then
                pos := previousToken.getPosition+Length(previousToken.getLexeme);

            currentToken := TToken.create(DOLLAR, '$', pos);
        end;
    end
    else
        raise ESyntacticError.create(PARSER_ERROR[token], currentToken.getPosition);
end;
`+h+`
end.
`}buildLLParser(t,e){const n=e.parserName,r=e.scannerName,s=e.semanticName;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+r+", U"+s+`, USyntacticError, UAnalysisError, classes;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+r+"; semanticAnalyser : T"+s+`); //raises EAnaliserError

    private
        stack : TList;
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+r+`;
        semanticAnalyser : T`+s+`;

        function step : boolean;
        function pushProduction(topStack, tokenInput : integer) : boolean;

        function isTerminal(x : integer) : boolean;
        function isNonTerminal(x : integer) : boolean;
        function isSemanticAction(x : integer) : boolean;
    end;

implementation

constructor T`+n+`.create;
begin
    currentToken := nil;
    previousToken := nil;
    stack := TList.create;
end;

destructor T`+n+`.destroy;
begin
    if (currentToken <> nil) and (currentToken <> previousToken) then
        currentToken.destroy;
    if previousToken <> nil then
        previousToken.destroy;
    stack.destroy;
end;

procedure T`+n+".parse(scanner : T"+r+"; semanticAnalyser : T"+s+`);
begin
    self.scanner := scanner;
    self.semanticAnalyser := semanticAnalyser;

    stack.clear;
    stack.add(Pointer(DOLLAR));
    stack.add(Pointer(START_SYMBOL));

    if (previousToken <> nil) and (previousToken <> currentToken) then
        previousToken.destroy;
    previousToken := nil;

    if currentToken <> nil then
        currentToken.destroy;
    currentToken := scanner.nextToken;

    while not step do
        ;
end;

function T`+n+`.step : boolean;
var
    a, x, pos : integer;
begin
    if currentToken = nil then //Fim de Sentenca
    begin
        pos := 0;
        if previousToken <> nil then
            pos := previousToken.getPosition + Length(previousToken.getLexeme);

        currentToken := TToken.create(DOLLAR, '$', pos);
    end;

    a := currentToken.getId;
    x := Integer(stack.Last);
    stack.Delete(stack.Count-1);

    if x = EPSILON then
    begin
        result := false;
    end
    else if isTerminal(x) then
    begin
        if x = a then
        begin
            if stack.Count = 0 then
                result := true
            else
            begin
                if previousToken <> nil then
                    previousToken.destroy;
                previousToken := currentToken;
                currentToken := scanner.nextToken;
                result := false;
            end;
        end
        else
            raise ESyntacticError.create(PARSER_ERROR[x], currentToken.getPosition);
    end
    else if isNonTerminal(x) then
    begin
        if pushProduction(x, a) then
            result := false
        else
            raise ESyntacticError.create(PARSER_ERROR[x], currentToken.getPosition);
    end
    else // isSemanticAction(x)
    begin
        semanticAnalyser.executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);
        result := false;
    end;
end;

function T`+n+`.pushProduction(topStack, tokenInput : integer) : boolean;
var
    i, p, length : integer;
begin
    p := PARSER_TABLE[topStack-FIRST_NON_TERMINAL, tokenInput-1];
    if p >= 0 then
    begin
        //empilha a produção em ordem reversa
        length := PRODUCTIONS[p, 0];
        for i := length downto 1 do
            stack.add( Pointer( PRODUCTIONS[p, i] ) );

        result := true;
    end
    else
        result := false;
end;

function T`+n+`.isTerminal(x : integer) : boolean;
begin
    result := x < FIRST_NON_TERMINAL;
end;

function T`+n+`.isNonTerminal(x : integer) : boolean;
begin
    result := (x >= FIRST_NON_TERMINAL) and (x < FIRST_SEMANTIC_ACTION);
end;

function T`+n+`.isSemanticAction(x : integer) : boolean;
begin
    result := x >= FIRST_SEMANTIC_ACTION;
end;

end.
`}buildLRParser(t,e){const n=e.parserName,r=e.scannerName,s=e.semanticName;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+r+", U"+s+`, USyntacticError, UAnalysisError, classes;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+r+"; semanticAnalyser : T"+s+`); //raises EAnaliserError

    private
        stack : TList;
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+r+`;
        semanticAnalyser : T`+s+`;

        function step : boolean;
    end;

implementation

constructor T`+n+`.create;
begin
    currentToken := nil;
    previousToken := nil;
    stack := TList.create;
end;

destructor T`+n+`.destroy;
begin
    if (currentToken <> nil) and (currentToken <> previousToken) then
        currentToken.destroy;
    if previousToken <> nil then
        previousToken.destroy;
    stack.destroy;
end;

procedure T`+n+".parse(scanner : T"+r+"; semanticAnalyser : T"+s+`);
begin
    self.scanner := scanner;
    self.semanticAnalyser := semanticAnalyser;

    stack.clear;
    stack.add(Pointer(0));

    if (previousToken <> nil) and (previousToken <> currentToken) then
        previousToken.destroy;
    previousToken := nil;

    if currentToken <> nil then
        previousToken.destroy;
    currentToken := scanner.nextToken;

    while not step do
        ;
end;

function T`+n+`.step : boolean;
var
    state, oldState, pos, token, act, i : integer;
    cmd, prod : array[0..1] of integer;
begin
    if currentToken = nil then //Fim de Sentensa
    begin
        pos := 0;
        if previousToken <> nil then
            pos := previousToken.getPosition + Length(previousToken.getLexeme);

        currentToken := TToken.create(DOLLAR, '$', pos);
    end;

    token := currentToken.getId;
    state := Integer(stack.Last);

    cmd[0] := PARSER_TABLE[state, token-1, 0];
    cmd[1] := PARSER_TABLE[state, token-1, 1];

    case cmd[0] of
        SHIFT:
            begin
                stack.Add(Pointer(cmd[1]));
                if previousToken <> nil then
                    previousToken.destroy;
                previousToken := currentToken;
                currentToken := scanner.nextToken;
                result := false;
            end;

        REDUCE:
            begin
                prod[0] := PRODUCTIONS[cmd[1], 0];
                prod[1] := PRODUCTIONS[cmd[1], 1];

                for i :=0 to prod[1]-1 do
                    stack.Delete(stack.Count-1);

                oldState := Integer(stack.Last);
                stack.Add(Pointer(PARSER_TABLE[oldState, prod[0]-1, 1]));
                result := false;
            end;

        ACTION:
            begin
                act := FIRST_SEMANTIC_ACTION + cmd[1] - 1;
                stack.Add(Pointer(PARSER_TABLE[state, act, 1]));
                semanticAnalyser.executeAction(cmd[1], previousToken);
                result := false;
            end;

        ACCEPT:
            result := true;

        ERROR:
            raise ESyntacticError.create(PARSER_ERROR[state], currentToken.getPosition);
    end;
end;

end.
`}generateSemanticAnalyser(t){const e=t.semanticName;return"unit U"+e+`;

interface

uses UToken, USemanticError;

type
    T`+e+` = class
    public
        procedure executeAction(action : integer; const token : TToken); //raises ESemanticError
    end;

implementation

procedure T`+e+`.executeAction(action : integer; const token : TToken);
begin

end;

end.
`}}class qn{lrTable=null;async generate(t,e,n){const r=new Map;if(t===null||e===null)throw new Error("FiniteAutomata and Grammar must not be null");return r.set("Token.py",this.generateToken(n)),r.set("Constants.py",await this.generateConstants(t,e,n)),r.set("Errors.py",this.generateErrors(n)),r}mainfunc(t){const e=t.pkgName!==""?t.pkgName+".":"";return(t.generateScanner?`from ${e}${t.scannerName} import ${t.scannerName}
`:"")+(t.generateParser?`from ${e}${t.parserName} import ${t.parserName}
`:"")+(t.generateParser?`from ${e}${t.semanticName} import ${t.semanticName}
`:"")+`from ${e}Errors import AnalysisError

`+(t.input==L.INPUT_STREAM?`from io import StringIO
`:"")+this.mainfunc_lex(t)+(t.generateParser?`syn = ${t.parserName}()
`:"")+(t.generateParser?`sem = ${t.semanticName}()
`:"")+`
try:
`+(t.generateParser&&t.generateScanner?`	syn.parse(lex, sem)
`:`	# syn.parse(lex, sem)
`)+`except AnalysisError as e:
	print(e)
`}mainfunc_lex(t){switch(t.input){case L.INPUT_STREAM:return t.generateScanner?`stream = StringIO("")

lex = ${t.scannerName}(stream)
`:"";case L.INPUT_STRING:return t.generateScanner?`lex = ${t.scannerName}("")
`:""}return""}generateToken(t){return`
from dataclasses import dataclass
from ${t.pkgName!==""?t.pkgName+".":""}Constants import TokenId

@dataclass(frozen=True)
class Token:
	tkid:     TokenID = TokenId.EPSILON
	lexeme:   str     = ""
	position: int     = -1
`}generateErrors(t){return`from dataclasses import dataclass

@dataclass
class AnalysisError(Exception):
	message:  str
	position: int = -1

# São funcionalmente idênticos ao AnalysisError
class SemanticError(AnalysisError):
	pass

class SyntacticError(AnalysisError):
	pass

class LexicalError(AnalysisError):
	pass
`}async generateConstants(t,e,n){return`
from enum import Enum

TOKEN_DEPENDENCY   = `+(t.specialCases.length>0?`True
`:`False
`)+"CASE_INSENSITIVITY = "+(n.scannerCaseSensitive==!0?`False

`:`True

`)+`class TokenId(Enum):
	EPSILON = 0
	DOLLAR  = 1
`+this.constList(t,e)+(n.generateScanner?this.lexDecls(t,n):"")+(n.generateParser?await this.syntDecls(e,n):"")}constList(t,e){let n="",r=null;if(t!=null)r=t.tokens.toArray();else if(e!=null)r=e.terminals;else throw new Error("Erro Interno");for(let s=0;s<r.length;s++){const i=r[s];i.charAt(0)=='"'?n+="	t_TOKEN_"+(s+2)+" = "+(s+2)+" #"+i+`
`:n+="	t_"+i+" = "+(s+2)+`
`}return n+=`
`,n.toString()}lexDecls(t,e){if(t==null)return"";let n,r,s=`
STATES_COUNT: int = `+t.transitions.size()+`

`;s+=this.scannerTable(t,e)+`
`,s+="TOKEN_STATE = [",n=t.transitions.size(),r=n.toString().length,r==1&&(r=2);for(let i=0;i<n;i++){const a=t.tokenForState(i).toString();for(let l=a.length;l<r;l++)s+=" ";s+=a+", "}s=s.slice(0,-2),s+=`]

`,s+=this.context(t),s+=this.specialCases(t),s+=`SCANNER_ERRORS = [
`,n=t.transitions.size();for(let i=0;i<n;i++){s+='	"';const o=t.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?s+='\\"':s+=o.charAt(a);s+=`",
`}return s=s.slice(0,-2),s+=`
]

`,s.toString()}async syntDecls(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(t);case L.PARSER_LL:return await this.syntTables(t,e)+this.syntErrorsLL(t);default:{const n=Ue.createGenerator(t,e.parser);if(n==null)throw new V("Gerador de Tabela é nulo.");return this.lrTable=await n.buildIntTable(),"FIRST_SEMANTIC_ACTION = "+t.FIRST_SEMANTIC_ACTION()+`

class SLRAction:
	SHIFT  = 0
	REDUCE = 1
	ACTION = 2
	ACCEPT = 3
	GO_TO  = 4
	ERROR  = 5

`+await this.syntTables(t,e)}}}context(t){if(!t.hasContext())return"";let e="";e+=`SCANNER_CONTEXT = [
`;for(let n=0;n<t.transitions.size();n++)e+=`
[`,e+=t.isContext(n)?"1":"0",e+=", ",e+=t.getOrigin(n),e+=`],
`;return e=e.slice(0,-2),e+=`
];

`,e.toString()}scannerTable(t,e){if(e.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`SCANNER_TABLE = [
`;const r=t.transitions.size();let s=r.toString().length;s==1&&(s=2);for(let i=0;i<r;i++){n+="	[ ";for(let o=0;o<256;o++){const a=t.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<s;l++)n+=" ";n+=a+", "}n=n.slice(0,-2),n+=` ],
`}return n=n.slice(0,-2),n+=`]
`,n.toString()}specialCases(t){if(t.specialCases.length>0){const e=t.getSpecialCasesIndexes(),n=t.specialCases;let r="";r+=`SPECIAL_CASES_INDEXES = [0 for i in range(0, ${e.length+1})]
`;let s=e.length;for(let i=0;i<s;i++)r+=`SPECIAL_CASES_INDEXES[${i}] = ${e[i][0]}
`;r+=`SPECIAL_CASES_INDEXES[${s}] = ${e[s-1][1]}
`,s=n.length,r+="SPECIAL_CASES_KEYS = [ ",s=n.length;for(let i=0;i<s;i++)r+='"'+n[i].key+'", ';r=r.slice(0,-2),r+=` ]

`,r+="SPECIAL_CASES_VALUES = [ ";for(let i=0;i<s;i++)r+=n[i].value+", ";return r=r.slice(0,-2),r+=` ]

`,r.toString()}else return""}async syntTables(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:throw new V("REC_DESC DOES NOT USE SYNTTABLES");case L.PARSER_LL:return await this.genLLSyntTables(t);default:return this.syntTransTable(t)+this.productionsLR(t)+this.syntErrorsLR()}}async genLLSyntTables(t){const e=[],n=t.startSymbol,r=t.FIRST_NON_TERMINAL,s=t.symbols.length,i=`START_SYMBOL = ${n};

FIRST_NON_TERMINAL    = ${r};
FIRST_SEMANTIC_ACTION = ${s};
`;return e.push(i),e.push(`
`),e.push(await this.emitLLTable(new Ce(t))),e.push(`
`),e.push(this.productionsLL(t)),e.push(`
`),e.join("")}async emitLLTable(t){let e=await t.generateTable(),n=new Array(e.length).fill([]).map(()=>new Array(e[0].length)),r=0;for(let i=0;i<n.length;i++)for(let o=0;o<n[i].length;o++){let a=e[i][o].toString();n[i][o]=a,a.length>r&&(r=a.length)}const s=[];s.push(`PARSER_TABLE = [
`);for(let i=0;i<n.length;i++){s.push("	[");for(let o=0;o<n[i].length;o++){s.push(" ");for(let a=n[i][o].length;a<r;a++)s.push(" ");s.push(n[i][o]),s.push(",")}s.pop(),s.push(` ],
`)}return s.pop(),s.push(" ],"),s.push(`
]
`),s.join("")}productionsLL(t){const e=t.productions,n=new Array(e.size()).fill([]);let r=0;for(let i=0;i<e.size();i++){const o=e.get(i).get_rhs();if(o.length>0){n[i]=[];for(let a=0;a<o.length;a++)n[i][a]=o[a].toString(),n[i][a].length>r&&(r=n[i][a].length)}else n[i]=new Array(1),n[i][0]="0"}const s=[];s.push(`PRODUCTIONS = [
`);for(let i=0;i<n.length;i++){s.push("	[");for(let o=0;o<n[i].length;o++){s.push(" ");for(let a=n[i][o].length;a<r;a++)s.push(" ");s.push(n[i][o]),s.push(",")}s.pop(),s.push(` ],
`)}return s.pop(),s.push(` ]
`),s.push(`
]
`),s.join("")}productionsLR(t){let e="";const n=t.productions.toArray();e+=`PRODUCTIONS = [
`;for(let r=0;r<n.length;r++)e+="	[ ",e+=n[r].get_lhs(),e+=", ",e+=n[r].get_rhs().length,e+=` ],
`;return e=e.slice(0,-2),e+=`
]
`,e.toString()}syntTransTable(t){if(t instanceof se)return this.syntTransTableGrammar(t);throw new V("LL(1) NOT SUPPORTED (transtable)")}syntTransTableGrammar(t){if(this.lrTable===null)throw new V("Tabela LR está nula.");let e="";e+=`PARSER_TABLE = [
`;let n=this.lrTable.length;t.productions.size()>n&&(n=t.productions.size()),n=(""+n).length;for(let r=0;r<this.lrTable.length;r++){e+="	[";for(let s=0;s<this.lrTable[r].length;s++){e+=" [",e+="SLRAction."+ne.CONSTANTS[this.lrTable[r][s][0]],e+=", ";const i=""+this.lrTable[r][s][1];for(let o=i.length;o<n;o++)e+=" ";e+=i+"],"}e=e.slice(0,-1),e+=` ],
`}return e=e.slice(0,-2),e+=`
];
`,e.toString()}syntErrorsLL(t){const e=t.symbols;let n=`
PARSER_ERROR = [
	"",
	"Era esperado fim de programa",
`;for(let r=2;r<t.FIRST_NON_TERMINAL;r++){n+='	"Era esperado ';for(let s=0;s<e[r].length;s++)switch(e[r].charAt(s)){case'"':n+='\\"';break;case"\\":n+="\\\\";break;default:n+=e[r].charAt(s)}n+=`",
`}for(let r=t.FIRST_NON_TERMINAL;r<e.length;r++)n+=`	"${e[r]} inválido",
`;return n+="]",n}syntErrorsLR(){if(this.lrTable===null)throw new V("Tabela LR está nula.");let t="";t+=`PARSER_ERROR = [
`;for(let e=0;e<this.lrTable.length;e++)t+='	"Erro estado '+e+`",
`;return t=t.slice(0,-2),t+=`
]

`,t.toString()}}class Vn{generate(t,e){const n=new Map;let r="";const s=e.scannerName;return e.generateScanner==!0&&(t!=null?r=this.buildScanner(t,e):r="",n.set(s+".py",r)),n}bidistream(t){return t.input==L.INPUT_STREAM?`from io                 import StringIO

class BidirectionalStream:
	def __init__(self, src: StringIO):
		self.src       = src
		self.shadow    = ""
		self.shadowpos = 0
		self.read      = 0

	def rewind(self, pos):
		self.shadowpos = pos

	def next_char(self):
		if self.shadowpos == self.read:
			res = self.src.read(1)
			if res == '':
				return -1
			else:
				self.shadow    += res
				self.shadowpos += 1
				self.read      += 1
				return ord(res)
		else:
			res = self.shadow[self.shadowpos]
			self.shadowpos += 1
			return ord(res)

`:""}buildScanner(t,e){const n=e.scannerName,r=e.pkgName!==""?e.pkgName+".":"",s=e.input==L.INPUT_STREAM;return`from ${r}Constants import *
from ${r}Errors    import LexicalError
from ${r}Token     import Token

`+this.bidistream(e)+"class "+n+`:

	def __init__(self, input: ${s?"StringIO":"str"} = None):
		self.set_input(input)

`+(s?`	def set_input(self, input: StringIO):
		self.input = BidirectionalStream(input)

`:`	def set_input(self, input: str):
		self.input    = input
		self.position = 0

`)+`	def next_token(self):

`+(s?`		start    = self.input.shadowpos
		newchar  = 0
		iters    = 0
`:`		if self.has_input() == False:
			return None

		start    = self.position
`)+`		state    = 0
		oldState = 0
		endState = -1
		end      = -1

`+(t.hasContext()?`		ctxtState = -1
		ctxtEnd   = -1
`:"")+`		while ${s?"True":"self.has_input()"}:

`+(s?`			newchar = self.input.next_char()
			if newchar == -1:
				break

			iters += 1

`:"")+`			oldState = state
			state    = self.next_state(${s?"newchar":"self.next_char()"}, state)

			if state < 0:
				break

			else:
				if self.token_for_state(state) != None:
					endState = state
					end      = ${s?"self.input.shadowpos":"self.position"}

`+(t.hasContext()?`			if SCANNER_CONTEXT[state][0] == 1:
				ctxtStatet = state
				ctxtEnd    = ${s?"self.input.shadowpos":"self.position"}
`:"")+(s?`		if newchar == -1 and iters == 0:
			self.input.rewind(start)
			return None

`:"")+`		if endState < 0 or (endState != state and self.token_for_state(oldState) == -2):
			raise LexicalError(SCANNER_ERROR[oldState], start)

`+(t.hasContext()?`		if ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState:
			end = ctxtEnd`:"")+(s?`		self.input.rewind(end)

`:`		self.position = end

`)+`		token = self.token_for_state(endState)

		if token == 0:
			return self.next_token()
		else:
			lexeme = self.input${s?".shadow":""}[start:end]
			if TOKEN_DEPENDENCY or CASE_INSENSITIVITY:
				token = self.lookup_token(token, lexeme)
			return Token(TokenId(token), lexeme, start)

	def next_state(self, c: int, state: int):
`+this.nextStateImpl(t,e)+`
	def token_for_state(self, state: int):
		token = -1

		if state >= 0 and state < STATES_COUNT:
			token = TOKEN_STATE[state]

		return token

	def lookup_token(self, base: int, key: str):
		start =  SPECIAL_CASES_INDEXES[base]
		end   =  SPECIAL_CASES_INDEXES[base+1]-1

		key_u = key
		if CASE_INSENSITIVITY:
			key_u = key.upper()

		while start <= end:
			half    = (start + end) // 2
			current = SPECIAL_CASES_KEYS[half]

			if current == key_u:
				return TokenId(SPECIAL_CASES_VALUES[half])
			elif current < key_u:
				start = half + 1
			else:
				end   = half - 1

		return base

`+(s?"":`	def has_input(self):
		return self.position < len(self.input)

	def next_char(self):
		if self.has_input():
			res = self.input[self.position]
			self.position += 1
			return ord(res)
		else:
			return -1

`)}nextStateImpl(t,e){switch(e.scannerTable){case L.SCANNER_TABLE_FULL:case L.SCANNER_TABLE_COMPACT:return`		return SCANNER_TABLE[state][c]
`;case L.SCANNER_TABLE_HARDCODE:{const n=t.transitions;let r="";for(let s=0;s<n.size();s++){const i=n.get(s);if(i.size!=0){r+="			case "+s+`:
				match c:
`;for(const[o,a]of i.entries()){const l=o,_=a;r+=`					case ${l.charCodeAt(0)}:
						return ${_};
`}r+=`					case _:
						return -1
`}}return`		match state:
`+r.toString()+`			case _:
				return -1
`}default:return""}}}class Xn{async generate(t,e){const n=new Map;if(e.generateParser==!0&&t!=null){const r=e.parserName;n.set(r+".py",await this.parser(t,e)),n.set(e.semanticName+".py",this.semantic(e))}return n}semantic(t){const e=t.semanticName;return`from ${t.pkgName!==""?t.pkgName+".":""}Token import Token

class ${e}:

	def execute_action(self, action: int, token: Token):
		print("Ação: ", action, "Token: ", token)`}async redDecParser(t,e){const n=await new Ce(t).generateTable(),r=new Be(n,t),s=e.pkgName!==""?e.pkgName+".":"",i=e.parserName;let o=`from ${s}Token     import Token
from ${s}Constants import *
from ${s}Errors    import SyntacticError

class ${i}:

	def __init__(self):
		self.previous_token = None
		self.current_token  = None

	def parse(self, scanner, semantic):
		self.scanner  = scanner
		self.semantic = semantic

		self.current_token = self.scanner.next_token()
		if self.current_token == None:
			self.current_token = Token(TokenId.DOLLAR, "$", 0)

		self._${r.getStart()}()
		if self.current_token.tkid != TokenId.DOLLAR:
			raise SyntacticError(PARSER_ERROR[TokenId.DOLLAR.value], self.current_token.position)

	def matchr(self, tknum):

		if self.current_token.tkid.value == tknum:
			self.previous_token = self.current_token
			self.current_token  = self.scanner.next_token()

			if self.current_token == None:
				pos = 0
				if self.previous_token == None:
					pos = self.previous_token.position + len(self.previous_token.lexeme)
				self.current_token = Token(TokenId.DOLLAR, "$")
		else:
			raise SyntacticError(PARSER_ERROR[tknum], self.current_token.position)

`;const a=r.build();for(let l=t.FIRST_NON_TERMINAL;l<t.FIRST_SEMANTIC_ACTION();l++){const _=r.getSymbols(l),h=a.get(_);if(o+=`	def _${_}(self):
		match self.current_token.tkid:
`,h==null)throw new Ie("Gramática não é LL.");const p=Array.from(h.input.keys());let u=new Set;for(let m=0;m<p.length;m++){const f=h.input.get(p[m]);let T=p[m];if(u.has(T))continue;let g=r.getSymbols(T);o+=`			case TokenId.${g==="$"?"DOLLAR":"t_"+g}`,u.add(T);for(let S=m+1;S<p.length;S++)if(h.input.get(p[S])===f){if(T=p[S],u.has(T))continue;let w=r.getSymbols(T);o+=` | TokenId.${w==="$"?"DOLLAR":"t_"+w}`,u.add(T)}if(o+=`:
`,f==null)throw new Ie("Gramática não é LL.");f.length==0&&(o+=`				pass # EPSILON
`);for(let S=0;S<f.length;S++){const A=f[S];t.isTerminal(A)?o+=`				self.matchr(${A}) # ${r.getSymbols(A)}
`:t.isNonTerminal(A)?o+=`				self._${r.getSymbols(A)}()
`:o+=`				self.semantic.execute_action(${A-t.FIRST_SEMANTIC_ACTION()}, self.previous_token)
`}}o+=`			case _:
				raise SyntacticError(PARSER_ERROR[${h.lhs}], self.current_token.position)
`}return o}llParser(t,e){const n=e.pkgName!==""?e.pkgName+".":"",r=e.parserName;return`from ${n}Token     import Token
from ${n}Constants import *
from ${n}Errors    import SyntacticError

class ${r}:

	def __init__(self):
		self.previous_token = None
		self.current_token  = None
		self.stack          = []

	def is_terminal(self, x):
		return x < FIRST_NON_TERMINAL

	def is_non_terminal(self, x):
		return x >= FIRST_NON_TERMINAL and x < FIRST_SEMANTIC_ACTION

	def is_semantic_action(self, x):
		return x >= FIRST_SEMANTIC_ACTION

	def step(self):

		if self.current_token == None:
			pos = 0
			if self.previous_token != None:
				pos = self.previous_token.position + len(self.previous_token.lexeme)

			self.current_token = Token(TokenId.DOLLAR, "$", pos)

		x = self.stack.pop()
		a = self.current_token.tkid.value

		if x == TokenId.EPSILON.value:
			return False
		elif self.is_terminal(x):
			if x == a:
				if len(self.stack) == 0:
					return True
				else:
					self.previous_token = self.current_token
					self.current_token  = self.scanner.next_token()
					return False
			else:
				raise SyntacticError(PARSER_ERROR[x], self.current_token.position)
		elif self.is_non_terminal(x):
			if self.push_production(x, a):
				return False
			else:
				raise SyntacticError(PARSER_ERROR[x], self.current_token.position)
		else:
			self.semantic.execute_action(x-FIRST_SEMANTIC_ACTION, self.previous_token)
			return False

	def push_production(self, topstack, token):
		p = PARSER_TABLE[topstack-FIRST_NON_TERMINAL][token-1]
		if p >= 0:
			production = PRODUCTIONS[p]

			for i in range(len(production) - 1, -1, -1):
				self.stack.append(production[i])

			return True
		else:
			return False

	def parse(self, scanner, semantic):
		self.scanner  = scanner
		self.semantic = semantic

		self.stack.clear()
		self.stack.append(TokenId.DOLLAR.value)
		self.stack.append(START_SYMBOL)

		self.current_token = self.scanner.next_token()

		while self.step() == False:
			pass
`}async parser(t,e){const n=e.pkgName!==""?e.pkgName+".":"";switch(e.parser){case L.PARSER_REC_DESC:return await this.redDecParser(t,e);case L.PARSER_LL:return this.llParser(t,e);default:{const r=e.parserName;return`from ${n}Token import Token
from ${n}Constants import *
from ${n}Errors import SyntacticError

class `+r+`:

	def __init__(self):
		self.previous_token = None
		self.current_token  = None
		self.stack          = []

	def parse(self, scanner, semantic):
		self.scanner  = scanner
		self.semantic = semantic

		self.stack.clear()

		self.stack.append(0)
		self.previous_token = None

		self.current_token = self.scanner.next_token()

		while True:
			if self.step() != False:
				break

	def step(self):

		if self.current_token == None:
			pos = 0
			if self.previous_token != None:
				pos = self.previous_token.position + len(self.previous_token.lexeme)
			self.current_token = Token(TokenId.DOLLAR, "$", pos)

		token = self.current_token.tkid.value
		state = self.stack[-1]

		cmd = PARSER_TABLE[state][token-1]

		match cmd[0]:
			case SLRAction.SHIFT:
				self.stack.append(cmd[1])
				self.previous_token = self.current_token
				self.current_token = self.scanner.next_token()
				return False
			case SLRAction.REDUCE:
				prod = PRODUCTIONS[cmd[1]]

				for i in range(0, prod[1]):
					self.stack.pop()

				oldstate = self.stack[-1]

				self.stack.append(PARSER_TABLE[oldstate][prod[0]-1][1])

				return False
			case SLRAction.ACTION:
				action = FIRST_SEMANTIC_ACTION + cmd[1] - 1
				self.stack.append(PARSER_TABLE[state][action][1])
				self.semantic.execute_action(cmd[1], self.previous_token)
				return False
			case SLRAction.ACCEPT:
				return True
			case SLRAction.ERROR:
				raise SyntacticError(PARSER_ERROR[state], self.current_token.position)
			case _:
				raise RuntimeError('Invalid Command')

		return False
`}}}}class Jn{lrTable=null;async generate(t,e,n){const r=new Map;if(t===null||e===null)throw new Error("FiniteAutomata and Grammar must not be null");let s=n.pkgName!==""?n.pkgName+"/":"";return r.set("Cargo.toml",this.generateCargotoml()),r.set("src/main.rs",this.mainfunc(n)),r.set(`src/${s}token.rs`,this.generateToken(n)),r.set(`src/${s}errors.rs`,this.generateErrors(n)),r.set(`src/${s}constants.rs`,await this.generateConstants(t,e,n)),s!==""&&r.set(`src/${s}mod.rs`,this.generateMod(n)),r}generateMod(t){return`
pub mod token;
pub mod errors;
pub mod constants;
${t.generateScanner?"pub mod scanner;":""}
${t.generateParser?"pub mod parser;":""}
${t.generateParser?"pub mod codegen;":""}
`}mainfunc(t){let e=t.scannerName,n=t.parserName,r=t.semanticName;const s=t.pkgName!==""?t.pkgName+"::":"",i=t.input==L.INPUT_STRING;return`
#![allow(nonstandard_style)]

${i?"":"use std::{fs::File, io::BufReader};"}

use crate::${s}{
    ${t.generateScanner?`scanner::${e},`:""}
    ${t.generateParser?`parser::${n},`:""}
    ${t.generateParser?`codegen::${r}`:""}
};
${t.pkgName===""?`
mod constants;
mod errors;
mod token;
${t.generateScanner?"mod scanner;":""}
${t.generateParser?"mod parser;":""}
${t.generateParser?"mod codegen;":""}
`:`
mod ${t.pkgName};
`}
fn main() {
${t.generateScanner?`${i?`    let lex = ${e}::new("".into());`:`    let file = File::open("program.txt").expect("erro ao abrir arquivo");
    let lex = ${e}::new(BufReader::new(file));`}`:""}
    ${t.generateParser?`let sem = ${r}::new();`:""}
    ${t.generateParser?`let syn = ${n}::new(lex, sem);`:""}

    ${t.generateParser?`if let Err(e) = syn.parse() {
        eprintln!("{e}");
    }`:""}
}

`}generateCargotoml(){return`
[package]
name = "gals-compiler-output"
version = "0.1.0"
edition = "2024"

[dependencies]
num-derive = "0.4.2"
num-traits = "0.2.19"

`}generateToken(t){return`
use crate::${t.pkgName!==""?t.pkgName+"::":""}constants::TokenId;

#[derive(Default, Debug)]
pub struct Token {
    id: TokenId,
    lexeme: String,
    position: usize,
}

impl Token {
    pub fn new(id: TokenId, lexeme: String, position: usize) -> Self {
        Token {
            id,
            lexeme,
            position,
        }
    }
    pub fn get_id(&self) -> TokenId {
        self.id
    }
    pub fn get_lexeme(&self) -> &String {
        &self.lexeme
    }
    pub fn get_position(&self) -> usize {
        self.position
    }
}

`}generateErrors(t){return`
use std::{error::Error, fmt::Display};

#[allow(unused)]
#[derive(Debug, Clone, Copy)]
pub enum AnalysisErrorKind {
    Lexical,
    Syntatic,
    Semantic,
}

#[derive(Debug)]
pub struct AnalysisError {
    kind: AnalysisErrorKind,
    message: String,
    position: usize,
}

#[allow(unused)]
impl AnalysisError {
    pub fn new(message: String, position: usize, kind: AnalysisErrorKind) -> Self {
        AnalysisError {
            kind,
            message,
            position,
        }
    }
    pub fn lexical(message: String, position: usize) -> Self {
        AnalysisError::new(message, position, AnalysisErrorKind::Lexical)
    }
    pub fn syntatic(message: String, position: usize) -> Self {
        AnalysisError::new(message, position, AnalysisErrorKind::Syntatic)
    }
    pub fn semantic(message: String, position: usize) -> Self {
        AnalysisError::new(message, position, AnalysisErrorKind::Semantic)
    }
    pub fn get_message(&self) -> String {
        self.message.clone()
    }
    pub fn get_position(&self) -> usize {
        self.position
    }
    pub fn get_kind(&self) -> AnalysisErrorKind {
        self.kind
    }
}

impl Display for AnalysisError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        use AnalysisErrorKind::*;
        let which = match self.kind {
            Lexical => "léxica",
            Syntatic => "sintática",
            Semantic => "semântica",
        };
        write!(
            f,
            "Erro de analise {which} na posição {}: {} ",
            self.position, self.message
        )
    }
}

impl Error for AnalysisError {}

`}async generateConstants(t,e,n){return`
use num_derive::FromPrimitive;

pub const CASE_INSENSITIVITY: bool  = `+(n.scannerCaseSensitive==!0?`false;

`:`true;

`)+"pub const TOKEN_DEPENDENCY  : bool  = "+(t.specialCases.length>0?`true;
`:`false;
`)+`#[allow(nonstandard_style)]
#[derive(Default, Debug, Clone, Copy, PartialEq, Eq, FromPrimitive)]
pub enum TokenId {
	#[default]
	EPSILON = 0,
	DOLLAR  = 1,
`+this.constList(t,e)+(n.generateScanner?this.lexDecls(t,n):"")+(n.generateParser?await this.syntDecls(e,n):"")}constList(t,e){let n="",r=null;if(t!=null)r=t.tokens.toArray();else if(e!=null)r=e.terminals;else throw new Error("Erro Interno");for(let s=0;s<r.length;s++){const i=r[s];i.charAt(0)=='"'?n+="	t_TOKEN_"+(s+2)+" = "+(s+2)+",//"+i+`
`:n+="	t_"+i+" = "+(s+2)+`,
`}return n+=`
}
`,n.toString()}lexDecls(t,e){if(t==null)return"";let n=t.transitions.size(),r,s=`
pub const STATES_COUNT: usize = ${n};

`;s+=this.scannerTable(t,e)+`
`,s+="pub const TOKEN_STATE: [i32; STATES_COUNT] = [",r=n.toString().length,r==1&&(r=2);for(let i=0;i<n;i++){const a=t.tokenForState(i).toString();for(let l=a.length;l<r;l++)s+=" ";s+=a+", "}s+=`];

`,s+=this.context(t),s+=this.specialCases(t),s+=`pub const SCANNER_ERRORS: [&str; STATES_COUNT] = [
`,n=t.transitions.size();for(let i=0;i<n;i++){s+='	"';const o=t.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?s+='\\"':s+=o.charAt(a);s+=`",
`}return s+=`];

`,s.toString()}async syntDecls(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(t);case L.PARSER_LL:return await this.syntTables(t,e)+this.syntErrorsLL(t);default:{const n=Ue.createGenerator(t,e.parser);if(n==null)throw new V("Gerador de Tabela é nulo.");return this.lrTable=await n.buildIntTable(),`pub const FIRST_SEMANTIC_ACTION: i32 = ${t.FIRST_SEMANTIC_ACTION()};

#[allow(nonstandard_style)]
#[derive(Debug, Clone, Copy, FromPrimitive)]
pub enum SLRAction {
    SHIFT,
    REDUCE,
    ACTION,
    ACCEPT,
    GO_TO,
    ERROR,
}

`+await this.syntTables(t,e)}}}context(t){if(!t.hasContext())return"";let e="";e+=`pub const SCANNER_CONTEXT: [(i32; i32); ${t.transitions.size()}] = [
`;for(let n=0;n<t.transitions.size();n++)e+=`
(`,e+=t.isContext(n)?"1":"0",e+=", ",e+=t.getOrigin(n),e+=`),
`;return e=e.slice(0,-2),e+=`
];

`,e.toString()}scannerTable(t,e){if(e.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`#[rustfmt::skip]
`,n+=`pub const SCANNER_TABLE: [[i32; 256]; STATES_COUNT] = [
`;const r=t.transitions.size();let s=r.toString().length;s==1&&(s=2);for(let i=0;i<r;i++){n+="	[ ";for(let o=0;o<256;o++){const a=t.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<s;l++)n+=" ";n+=a+", "}n=n.slice(0,-2),n+=` ],
`}return n=n.slice(0,-2),n+=`
];
`,n.toString()}specialCases(t){if(t.specialCases.length>0){const e=t.getSpecialCasesIndexes(),n=t.specialCases;let r="";r+=`pub const SPECIAL_CASES_INDEXES: [i32; ${t.getSpecialCasesIndexes().length+1}] = [`;let s=e.length;for(let i=0;i<s;i++)r+=`${e[i][0]}, `;r+=`${e[s-1][1]} ];
`,s=n.length,r+=`pub const SPECIAL_CASES_KEYS: [&str; ${s}] = [ `,s=n.length;for(let i=0;i<s;i++)r+='"'+n[i].key+'", ';r+=` ];

`,r+=`pub const SPECIAL_CASES_VALUES: [i32; ${s}] = [ `;for(let i=0;i<s;i++)r+=n[i].value+", ";return r+=` ];

`,r.toString()}else return""}async syntTables(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:throw new V("REC_DESC DOES NOT USE SYNTTABLES");case L.PARSER_LL:return await this.genLLSyntTables(t);default:return this.syntTransTable(t)+this.productionsLR(t)+this.syntErrorsLR()}}async genLLSyntTables(t){const e=[],n=t.startSymbol,r=t.FIRST_NON_TERMINAL,s=t.symbols.length,i=`pub const START_SYMBOL: i32 = ${n};

pub const FIRST_NON_TERMINAL: i32 = ${r};
pub const FIRST_SEMANTIC_ACTION: i32 = ${s};
`;return e.push(i),e.push(`
`),e.push(await this.emitLLTable(t)),e.push(`
`),e.push(this.productionsLL(t)),e.push(`
`),e.join("")}async emitLLTable(t){let n=await new Ce(t).generateTable(),r=new Array(n.length).fill([]).map(()=>new Array(n[0].length)),s=0;for(let o=0;o<r.length;o++)for(let a=0;a<r[o].length;a++){let l=n[o][a].toString();r[o][a]=l,l.length>s&&(s=l.length)}const i=[];i.push(`pub const PARSER_TABLE: [[i32; ${t.FIRST_NON_TERMINAL-1}]; ${t.FIRST_SEMANTIC_ACTION()-t.FIRST_NON_TERMINAL}] = [
`);for(let o=0;o<r.length;o++){i.push("    [");for(let a=0;a<r[o].length;a++){i.push(" ");for(let l=r[o][a].length;l<s;l++)i.push(" ");i.push(r[o][a]),i.push(",")}i.pop(),i.push(` ],
`)}return i.pop(),i.push(" ],"),i.push(`
];
`),i.join("")}productionsLL(t){const e=t.productions,n=new Array(e.size()).fill([]);let r=0;for(let i=0;i<e.size();i++){const o=e.get(i).get_rhs();if(o.length>0){n[i]=[];for(let a=0;a<o.length;a++)n[i][a]=o[a].toString(),n[i][a].length>r&&(r=n[i][a].length)}else n[i]=new Array(1),n[i][0]="0"}const s=[];s.push(`pub const PRODUCTIONS: [&[i32]; ${t.productions.size()}] = [
`);for(let i=0;i<n.length;i++){s.push("    &[");for(let o=0;o<n[i].length;o++){s.push(" ");for(let a=n[i][o].length;a<r;a++)s.push(" ");s.push(n[i][o]),s.push(",")}s.pop(),s.push(` ],
`)}return s.pop(),s.push(` ]
`),s.push(`
];
`),s.join("")}productionsLR(t){let e="";const n=t.productions.toArray();e+=`pub const PRODUCTIONS: [(i32, i32); ${n.length}] = [
`;for(let r=0;r<n.length;r++)e+=`    (${n[r].get_lhs()}, ${n[r].get_rhs().length}),
`;return e+=`];

`,e.toString()}syntTransTable(t){if(t instanceof se)return this.syntTransTableGrammar(t);throw new V("LL(1) NOT SUPPORTED (transtable)")}syntTransTableGrammar(t){if(this.lrTable===null)throw new V("Tabela LR está nula.");let e="";e+=`pub const PARSER_TABLE: [[(SLRAction, i32); ${this.lrTable[0].length}]; ${this.lrTable.length}] = [
`;let n=this.lrTable.length;t.productions.size()>n&&(n=t.productions.size()),n=(""+n).length;for(let r=0;r<this.lrTable.length;r++){e+="    [";for(let s=0;s<this.lrTable[r].length;s++){e+=" (",e+="SLRAction::"+ne.CONSTANTS[this.lrTable[r][s][0]],e+=", ";const i=""+this.lrTable[r][s][1];for(let o=i.length;o<n;o++)e+=" ";e+=i+"),"}e=e.slice(0,-1),e+=`    ],
`}return e=e.slice(0,-2),e+=`
];

`,e.toString()}syntErrorsLL(t){const e=t.symbols;let n=2,r=`
pub const PARSER_ERROR: [&str; PARSER_ERROR_CT] = [
	"",
	"Era esperado fim de programa",
`;for(let s=2;s<t.FIRST_NON_TERMINAL;s++){r+='	"Era esperado ';for(let i=0;i<e[s].length;i++)switch(e[s].charAt(i)){case'"':r+='\\"';break;case"\\":r+="\\\\";break;default:r+=e[s].charAt(i)}r+=`",
`,n++}for(let s=t.FIRST_NON_TERMINAL;s<e.length;s++)r+=`	"${e[s]} inválido",
`,n++;return r+=`];

`,r+=`const PARSER_ERROR_CT: usize = ${n};`,r}syntErrorsLR(){if(this.lrTable===null)throw new V("Tabela LR está nula.");let t="";t+=`pub const PARSER_ERROR: [&str; ${this.lrTable.length}] = [
`;for(let e=0;e<this.lrTable.length;e++)t+='    "Erro estado '+e+`",
`;return t+=`];

`,t.toString()}}class Qn{generate(t,e){const n=new Map;let r="";const s=e.pkgName!==""?e.pkgName+"/":"";return e.generateScanner==!0&&(t!=null?r=this.buildScanner(t,e):r="",n.set(`src/${s}scanner.rs`,r)),n}buildScanner(t,e){const n=e.scannerName,r=e.pkgName!==""?e.pkgName+"::":"",s=e.input==L.INPUT_STRING;return`
#![allow(unused)]

use std::io::{BufReader, Read, Seek, SeekFrom};

use num_traits::FromPrimitive;

use crate::${r}constants::*;
use crate::${r}constants::*;
use crate::${r}errors::AnalysisError;
use crate::${r}token::*;

pub struct ${n}${s?"":"<T: Read + Seek>"} {
${s?`    input: String,
`:`    input: BufReader<T>,
     shadow: String,
`}    pos: usize,
}

impl${s?"":"<T: Read + Seek>"} ${n}${s?"":"<T>"} {
    pub fn new(input: ${s?"String":"BufReader<T>"}) -> Self {
        ${n} {
            input,
${s?"":"		shadow: String::new(),"}            pos: 0,
        }
    }
    pub fn next_token(&mut self) -> Option<Result<Token, AnalysisError>> {
        let mut start = self.pos;
        let mut newchar: Option<u8> = None;
        let mut iters = 0;
        let mut state = 0;
        let mut old_state: i32 = 0i32;
        let mut end_state: i32 = -1;
        let mut end = 0;
${t.hasContext()?`        let mut ctxt_state: i32 = -1;
		let mut ctxt_end: i32 = -1;
`:""}
        while state >= 0 {
            let Some(c) = self.next_char() else { break };

            iters += 1;

            old_state = state;
            state = self.next_state(c, state);

            if state >= 0 && self.token_for_state(state).is_some() {
                end_state = state;
                end = self.pos;
            }
${t.hasContext()?`            if SCANNER_CONTEXT[state].0 == 1 {
			    ctxt_state = state;
				ctxt_end   = self.pos;
			}
`:""}
        }

        if newchar.is_none() && iters == 0 {
            self.rewind(start);
            return None;
        }

        if end_state < 0 || end_state != state && self.token_for_state(old_state) == Some(-2) {
            return Some(Err(AnalysisError::lexical(
                SCANNER_ERRORS[old_state as usize].into(),
                start,
            )));
        }

${t.hasContext()?`        if ctxt_state != -1 && SCANNER_CONTEXT[end_state].1 == ctxt_end {
	        end = ctxt_end;
		}
`:""}
        self.rewind(end);

        let mut token = self.token_for_state(end_state).expect("valid token");

        if token == 0 {
            return self.next_token();
        } else {
            let lexeme = self.substr_input(start, end);
            if TOKEN_DEPENDENCY || CASE_INSENSITIVITY {
                token = self.lookup_token(token, lexeme.into());
            }
            return Some(Ok(Token::new(
                FromPrimitive::from_i32(token).expect("valid token"),
                lexeme.into(),
                start,
            )));
        };
    }

    fn next_state(&self, c: u8, state: i32) -> i32 {
${e.scannerTable==L.SCANNER_TABLE_HARDCODE?`${this.nextStateImpl(t,e)}`:`        SCANNER_TABLE[state as usize][c as usize]
`}    }
    fn token_for_state(&self, state: i32) -> Option<i32> {
        if (state >= 0) && ((state as usize) < STATES_COUNT) {
            Some(TOKEN_STATE[state as usize])
        } else {
            None
        }
    }
    fn lookup_token(&self, base: i32, mut key: String) -> i32 {
${e.scannerCaseSensitive==!1||t.specialCases.length>0?`        let mut start = SPECIAL_CASES_INDEXES[base as usize];
        let mut end = SPECIAL_CASES_INDEXES[base as usize + 1] - 1;

        if CASE_INSENSITIVITY {
            key.make_ascii_uppercase();
        };

        let mut half;
        let mut current;
        while start <= end {
            half = (start + end) / 2;
            current = SPECIAL_CASES_KEYS[half as usize];
            let o = current.cmp(key.as_str());

            if o.is_eq() {
                return FromPrimitive::from_i32(SPECIAL_CASES_VALUES[half as usize])
                    .expect("valid token");
            } else if o.is_lt() {
                start = half + 1;
            } else {
                end = half - 1;
            }
        }
        return base;
`:`        unimplemented!()
`}    }

    fn rewind(&mut self, pos: usize) {
        self.pos = pos;
${s?"":`        self.input.seek(SeekFrom::Start(pos as u64));
        self.shadow.truncate(pos);
`}    }
    fn substr_input(&self, start: usize, end: usize) -> &str {
${s?`        self.input.split_at(start).1.split_at(end - start).0
`:`        self.shadow.split_at(start).1.split_at(end - start).0
`}    }
    fn next_char(&mut self) -> Option<u8> {
${s?`        if self.pos < self.input.len() {
            let c = *self.input.as_bytes().get(self.pos).expect("ascii string");
            self.pos += 1;
            Some(c)
        } else {
            None
        }
`:`        let mut buf: [u8; 1] = [0u8];
        if let Err(_) = self.input.read_exact(&mut buf) {
            return None;
        } else {
            self.shadow.push(buf[0] as char);
            self.pos += 1;
            Some(buf[0])
        }
`}    }
}

`}nextStateImpl(t,e){const n=t.transitions;let r="";for(let s=0;s<n.size();s++){const i=n.get(s);if(i.size!=0){r+="			"+s+` => match c {
`;for(const[o,a]of i.entries()){const l=o,_=a;r+=`				${l.charCodeAt(0)} => ${_},
`}r+=`				 _ => -1,
			},
`}}return`		match state {
`+r.toString()+`			_ => -1,
		}
`}}class er{async generate(t,e){const n=new Map,r=e.pkgName!==""?e.pkgName+"/":"";return e.generateParser==!0&&t!=null&&(n.set(`src/${r}parser.rs`,await this.parser(t,e)),n.set(`src/${r}codegen.rs`,this.semantic(e))),n}semantic(t){const e=t.semanticName;return`
use crate::${t.pkgName!==""?t.pkgName+"::":""}{errors::AnalysisError, token::Token};

pub struct ${e} {}

impl ${e} {
    pub fn new() -> Self {
        ${e} {}
    }
    pub fn execute_action(&mut self, action: u32, token: &Token) -> Result<(), AnalysisError> {
        println!("Ação: {action}, Token: {token:?}");
        Ok(())
    }
}
`}async parser(t,e){switch(e.parser){case L.PARSER_REC_DESC:return await this.redDecParser(t,e);case L.PARSER_LL:return this.llParser(t,e);default:return this.lrParser(t,e)}}lrParser(t,e){const n=e.parserName,r=e.pkgName!==""?e.pkgName+"::":"",s=e.input==L.INPUT_STRING;return`${s?"":"use std::io::{Read, Seek};"}
use crate::${r}{
    codegen::${e.semanticName}, constants::*, errors::AnalysisError, scanner::${e.scannerName}, token::Token,
};

pub struct ${n}${s?"":"<T: Read + Seek>"} {
    previous_token: Option<Token>,
    current_token: Option<Token>,
    stack: Vec<u32>,
    scanner: ${e.scannerName}${s?"":"<T>"},
    semantic: ${e.semanticName},
}

enum SyntaxParsingState {
    Continue,
    Accept,
    Reject(AnalysisError),
}

impl${s?"":"<T: Read + Seek>"} ${n}${s?"":"<T>"} {
    pub fn new(scanner: ${e.scannerName}${s?"":"<T>"}, semantic: ${e.semanticName}) -> Self {
        ${n} {
            previous_token: None,
            current_token: None,
            stack: Vec::new(),
            scanner,
            semantic,
        }
    }

    pub fn parse(mut self) -> Result<(), AnalysisError> {
        self.stack.push(0);
        self.previous_token = None;

        match self.scanner.next_token() {
            Some(tk) => self.current_token = Some(tk?),
            None => self.current_token = None,
        }

        loop {
            match self.step() {
                SyntaxParsingState::Accept => return Ok(()),
                SyntaxParsingState::Reject(err) => return Err(err),
                SyntaxParsingState::Continue => {}
            }
        }
    }
    fn step(&mut self) -> SyntaxParsingState {
        if self.current_token.is_none() {
            let mut pos = 0;
            if let Some(tk) = &self.previous_token {
                pos = tk.get_position() + tk.get_lexeme().len();
            }
            self.current_token = Some(Token::new(TokenId::DOLLAR, "$".into(), pos));
        }

        let token = self.current_token.as_ref().expect("token").get_id() as usize;
        let state = *self.stack.last().expect("stack") as usize;

        let cmd = PARSER_TABLE[state][token - 1];

        use SyntaxParsingState::*;

        match cmd.0 {
            SLRAction::SHIFT => {
                self.stack.push(cmd.1 as u32);
                self.previous_token = self.current_token.take();

                match self.scanner.next_token() {
                    Some(r) => match r {
                        Ok(tk) => self.current_token = Some(tk),
                        Err(e) => return Reject(e),
                    },
                    None => self.current_token = None,
                }

                Continue
            }
            SLRAction::REDUCE => {
                let prod = PRODUCTIONS[cmd.1 as usize];
                for _ in 0..prod.1 {
                    self.stack.pop();
                }

                let oldstate = *self.stack.last().expect("oldstate") as usize;

                self.stack
                    .push(PARSER_TABLE[oldstate][(prod.0 - 1) as usize].1 as u32);

                Continue
            }
            SLRAction::ACTION => {
                let action = FIRST_SEMANTIC_ACTION + cmd.1 - 1;
                self.stack
                    .push(PARSER_TABLE[state][action as usize].1 as u32);
                let res = self
                    .semantic
                    .execute_action(cmd.1 as u32, self.previous_token.as_ref().expect("token"));
                if let Err(e) = res {
                    Reject(e)
                } else {
                    Continue
                }
            }
            SLRAction::ACCEPT => Accept,
            SLRAction::GO_TO => unimplemented!(),
            SLRAction::ERROR => Reject(AnalysisError::syntatic(
                PARSER_ERROR[state].into(),
                self.current_token.as_ref().expect("token").get_position(),
            )),
        }
    }
}

`}async redDecParser(t,e){const n=await new Ce(t).generateTable(),r=new Be(n,t);let s=e.scannerName,i=e.parserName,o=e.semanticName;const a=e.pkgName!==""?e.pkgName+"::":"",l=e.input==L.INPUT_STRING;let _=`
${l?"":"use std::io::{Read, Seek};"}

use crate::${a}{
    codegen::${o}, constants::*, errors::AnalysisError, scanner::${s}, token::Token,
};

pub struct ${i}${l?"":"<T: Read + Seek>"} {
    current_token: Option<Token>,
    previous_token: Option<Token>,
    scanner: ${s}${l?"":"<T>"},
    semantic: ${o},
}

impl${l?"":"<T: Read + Seek>"} ${i}${l?"":"<T>"} {
    pub fn new(lex: ${s}${l?"":"<T>"}, sem: ${o}) -> Self {
        Parser {
            current_token: None,
            previous_token: None,
            scanner: lex,
            semantic: sem,
        }
    }

    pub fn parse(mut self) -> Result<(), AnalysisError> {
        self.current_token = self.scanner.next_token().transpose()?;
        if self.current_token.is_none() {
            self.current_token = Token::new(TokenId::DOLLAR, "$".into(), 0).into();
        }

        self._${r.getStart()}()?;

        if self.current_token.as_ref().unwrap().get_id() != TokenId::DOLLAR {
            Err(AnalysisError::syntatic(
                PARSER_ERROR[TokenId::DOLLAR as usize].into(),
                self.current_token.as_ref().unwrap().get_position(),
            ))
        } else {
            Ok(())
        }
    }

    fn matchr(&mut self, tknum: i32) -> Result<(), AnalysisError> {
        if self.current_token.as_ref().unwrap().get_id() as i32 == tknum {
            self.previous_token = self.current_token.take();
            self.current_token = self.scanner.next_token().transpose()?;
            if self.current_token.is_none() {
                let mut pos = 0;
                if let Some(tk) = self.previous_token.as_ref() {
                    pos = tk.get_position() + tk.get_lexeme().len();
                }
                self.current_token = Token::new(TokenId::DOLLAR, "$".into(), pos).into();
            }
            return Ok(());
        } else {
            return Err(AnalysisError::syntatic(
                PARSER_ERROR[tknum as usize].into(),
                self.current_token.as_ref().unwrap().get_position(),
            ));
        }
    }

`;const h=r.build();for(let p=t.FIRST_NON_TERMINAL;p<t.FIRST_SEMANTIC_ACTION();p++){const u=r.getSymbols(p),m=h.get(u);if(_+=`    fn _${u}(&mut self) -> Result<(), AnalysisError> {
        match self.current_token.as_ref().unwrap().get_id() {
`,m==null)throw new Ie("Gramática não é LL.");const f=Array.from(m.input.keys());let T=new Set;for(let g=0;g<f.length;g++){const S=m.input.get(f[g]);let A=f[g];if(T.has(A))continue;let w=r.getSymbols(A);_+=`            TokenId::${w==="$"?"DOLLAR":"t_"+w}`,T.add(A);for(let R=g+1;R<f.length;R++)if(m.input.get(f[R])===S){if(A=f[R],T.has(A))continue;let P=r.getSymbols(A);_+=` | TokenId::${P==="$"?"DOLLAR":"t_"+P}`,T.add(A)}if(_+=` => {
`,S==null)throw new Ie("Gramática não é LL.");for(let R=0;R<S.length;R++){const D=S[R];t.isTerminal(D)?_+=`                self.matchr(${D})?; // ${r.getSymbols(D)}
`:t.isNonTerminal(D)?_+=`                self._${r.getSymbols(D)}()?;
`:_+=`                self.semantic.execute_action(${D-t.FIRST_SEMANTIC_ACTION()}, self.previous_token.as_ref().unwrap())?;
`}_+=`            },
`}_+=`            _ => return Err(AnalysisError::syntatic(PARSER_ERROR[${m.lhs}].into(), self.current_token.as_ref().unwrap().get_position()))
`,_+=`        };
`,_+=`        Ok(())
`,_+=`    }
`}return _+=`}
`,_}llParser(t,e){const n=e.scannerName,r=e.parserName,s=e.semanticName,i=e.pkgName!==""?e.pkgName+"::":"",o=e.input==L.INPUT_STRING;return`
use std::io::{Read, Seek};

use crate::${i}{
    codegen::${s}, constants::*, errors::AnalysisError, scanner::${n}, token::Token,
};

pub struct ${r}${o?"":"<T: Read + Seek>"} {
    stack: Vec<i32>,
    current_token: Option<Token>,
    previous_token: Option<Token>,
    scanner: ${n}${o?"":"<T>"},
    semantic: ${s},
}

impl${o?"":"<T: Read + Seek>"} ${r}${o?"":"<T>"} {
    pub fn new(lex: ${n}${o?"":"<T>"}, sem: ${s}) -> Self {
        ${r} {
            stack: Vec::new(),
            current_token: None,
            previous_token: None,
            scanner: lex,
            semantic: sem,
        }
    }

    fn is_terminal(x: i32) -> bool {
        x < FIRST_NON_TERMINAL
    }

    fn is_non_terminal(x: i32) -> bool {
        x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION
    }

    fn push_production(&mut self, top_stack: i32, token_input: i32) -> bool {
        let p = PARSER_TABLE[(top_stack - FIRST_NON_TERMINAL) as usize][(token_input - 1) as usize];

        if p >= 0 {
            let production = PRODUCTIONS[p as usize];
            for i in (0..=(production.len() - 1)).rev() {
                self.stack.push(production[i]);
            }
            true
        } else {
            false
        }
    }

    fn step(&mut self) -> Result<Option<()>, AnalysisError> {
        if self.current_token.is_none() {
            let mut pos = 0;
            if let Some(tk) = self.previous_token.as_ref() {
                pos = tk.get_position() + tk.get_lexeme().len();
            }
            self.current_token = Token::new(TokenId::DOLLAR, "$".into(), pos).into();
        }

        let x = self.stack.pop().unwrap();
        let a = self.current_token.as_ref().unwrap().get_id() as i32;

        if x == TokenId::EPSILON as i32 {
            return Ok(Some(()));
        } else if ${r}${o?"":"::<T>"}::is_terminal(x) {
            if x == a {
                if self.stack.is_empty() {
                    return Ok(None);
                } else {
                    self.previous_token = self.current_token.take();
                    self.current_token = self.scanner.next_token().transpose()?;
                    return Ok(Some(()));
                }
            } else {
                return Err(AnalysisError::syntatic(
                    PARSER_ERROR[x as usize].into(),
                    self.current_token.as_ref().unwrap().get_position(),
                ));
            }
        } else if ${r}${o?"":"::<T>"}::is_non_terminal(x) {
            if self.push_production(x, a) {
                return Ok(Some(()));
            } else {
                return Err(AnalysisError::syntatic(
                    PARSER_ERROR[x as usize].into(),
                    self.current_token.as_ref().unwrap().get_position(),
                ));
            }
        } else {
            self.semantic.execute_action(
                (x - FIRST_SEMANTIC_ACTION) as u32,
                self.previous_token.as_ref().unwrap(),
            )?;
            return Ok(Some(()));
        }
    }

    pub fn parse(mut self) -> Result<(), AnalysisError> {
        self.stack.push(TokenId::DOLLAR as i32);
        self.stack.push(START_SYMBOL);

        self.current_token = self.scanner.next_token().transpose()?;

        while let Some(_) = self.step()? {}

        Ok(())
    }
}

`}}function tr(b,t){const e=b.split(`
`).filter(Boolean),n=new Map;for(let r of e){r=r.trim();const s=r.indexOf(":"),i=r.slice(0,s);let o=r.slice(s+1),a=!1;if(o.trim()==="/"&&(o='"/" ',a=!0),o.trim()==="//")throw new he(`A definição regular '${o.trim()}' será confundida como comentário no próprio editor, abortando.`);const l=[i,o].filter(Boolean);let _=l[1].trim();a&&(_+=" ");const h=_.match(/{[a-zA-Z_][a-zA-Z0-9_]*}/g);if(h!==null)for(const p of h)if(n.has(p))_=_.replace(p,n.get(p));else throw new he(`Definições Regulares: A definição ${p} usada em '${r}' não existe.`);n.set("{"+l[0].trim()+"}",_)}for(const[r,s]of n.entries()){const i=new RegExp(r,"g");t=t.replace(i,s)}return t}async function nr(b,t,e,n,r,s,i,o){try{t=tr(b,t),b=""}catch(S){throw console.warn(S),new he(S.message)}const a=n.split(`
`),l=new Set;a.forEach(S=>{const A=S.match(/^[^:]+(?=\s*::=)/);A&&l.add(A[0].trim())});const _=Array.from(l),h=_.indexOf(e.trim());if(h==-1)throw new V("Símbolo inicial da Gramática não encontrado.");const p=_.splice(h,1)[0];_.splice(0,0,p);const u=!0,m=new zn;if(i==null&&(i=m.parseFA(b,t,u)),s||o==null){s=!1;const S=new de;{const R=i.tokens;for(let D=0;D<R.size();D++)S.add(R.get(D)),S.add(`
`)}const A=_,w=new de;A.forEach(R=>w.add(R)),o=new Dn().parse(S,w,n)}if(i.tokens.toArray(),o===void 0)throw new V("Grammar is Undefined");const f=new De;let T=!1,g=null;switch(r.language){case L.LANG_JAVA:f.setAll(await new Bn().generate(i,o,r)),f.setAll(new Un().generate(i,r)),f.setAll(await new $n().generate(o,r));break;case L.LANG_CPP:f.setAll(await new Hn().generate(i,o,r)),f.setAll(new Gn().generate(i,r)),f.setAll(await new Kn().generate(o,r));break;case L.LANG_DELPHI:f.setAll(await new Zn().generate(i,o,r)),f.setAll(new Wn().generate(i,r)),f.setAll(await new Yn().generate(o,r));break;case L.LANG_PYTHON:let S=new qn;f.setAll(await S.generate(i,o,r)),f.setAll(new Vn().generate(i,r)),f.setAll(await new Xn().generate(o,r)),T=r.pkgName!=="",g=S.mainfunc(r);break;case L.LANG_RUST:f.setAll(await new Jn().generate(i,o,r)),f.setAll(new Qn().generate(i,r)),f.setAll(await new er().generate(o,r));break}return[f,o,T,g]}function Xe(b){throw new Error('Could not dynamically require "'+b+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ft={exports:{}};var qt;function rr(){return qt||(qt=1,(function(b,t){(function(e){b.exports=e()})(function(){return(function e(n,r,s){function i(l,_){if(!r[l]){if(!n[l]){var h=typeof Xe=="function"&&Xe;if(!_&&h)return h(l,!0);if(o)return o(l,!0);var p=new Error("Cannot find module '"+l+"'");throw p.code="MODULE_NOT_FOUND",p}var u=r[l]={exports:{}};n[l][0].call(u.exports,function(m){var f=n[l][1][m];return i(f||m)},u,u.exports,e,n,r,s)}return r[l].exports}for(var o=typeof Xe=="function"&&Xe,a=0;a<s.length;a++)i(s[a]);return i})({1:[function(e,n,r){var s=e("./utils"),i=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(a){for(var l,_,h,p,u,m,f,T=[],g=0,S=a.length,A=S,w=s.getTypeOf(a)!=="string";g<a.length;)A=S-g,h=w?(l=a[g++],_=g<S?a[g++]:0,g<S?a[g++]:0):(l=a.charCodeAt(g++),_=g<S?a.charCodeAt(g++):0,g<S?a.charCodeAt(g++):0),p=l>>2,u=(3&l)<<4|_>>4,m=1<A?(15&_)<<2|h>>6:64,f=2<A?63&h:64,T.push(o.charAt(p)+o.charAt(u)+o.charAt(m)+o.charAt(f));return T.join("")},r.decode=function(a){var l,_,h,p,u,m,f=0,T=0,g="data:";if(a.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var S,A=3*(a=a.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(a.charAt(a.length-1)===o.charAt(64)&&A--,a.charAt(a.length-2)===o.charAt(64)&&A--,A%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=i.uint8array?new Uint8Array(0|A):new Array(0|A);f<a.length;)l=o.indexOf(a.charAt(f++))<<2|(p=o.indexOf(a.charAt(f++)))>>4,_=(15&p)<<4|(u=o.indexOf(a.charAt(f++)))>>2,h=(3&u)<<6|(m=o.indexOf(a.charAt(f++))),S[T++]=l,u!==64&&(S[T++]=_),m!==64&&(S[T++]=h);return S}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),i=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function l(_,h,p,u,m){this.compressedSize=_,this.uncompressedSize=h,this.crc32=p,this.compression=u,this.compressedContent=m}l.prototype={getContentWorker:function(){var _=new i(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),h=this;return _.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),_},getCompressedWorker:function(){return new i(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(_,h,p){return _.pipe(new o).pipe(new a("uncompressedSize")).pipe(h.compressWorker(p)).pipe(new a("compressedSize")).withStreamInfo("compression",h)},n.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),i=(function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var _=0;_<8;_++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a})();n.exports=function(o,a){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(l,_,h,p){var u=i,m=p+h;l^=-1;for(var f=p;f<m;f++)l=l>>>8^u[255&(l^_[f])];return-1^l})(0|a,o,o.length,0):(function(l,_,h,p){var u=i,m=p+h;l^=-1;for(var f=p;f<m;f++)l=l>>>8^u[255&(l^_.charCodeAt(f))];return-1^l})(0|a,o,o.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",i=e("pako"),o=e("./utils"),a=e("./stream/GenericWorker"),l=s?"uint8array":"array";function _(h,p){a.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=p,this.meta={}}r.magic="\b\0",o.inherits(_,a),_.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(l,h.data),!1)},_.prototype.flush=function(){a.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},_.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},_.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(p){h.push({data:p,meta:h.meta})}},r.compressWorker=function(h){return new _("Deflate",h)},r.uncompressWorker=function(){return new _("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(u,m){var f,T="";for(f=0;f<m;f++)T+=String.fromCharCode(255&u),u>>>=8;return T}function i(u,m,f,T,g,S){var A,w,R=u.file,D=u.compression,P=S!==l.utf8encode,$=o.transformTo("string",S(R.name)),O=o.transformTo("string",l.utf8encode(R.name)),K=R.comment,Q=o.transformTo("string",S(K)),y=o.transformTo("string",l.utf8encode(K)),F=O.length!==R.name.length,d=y.length!==K.length,M="",te="",j="",re=R.dir,H=R.date,ee={crc32:0,compressedSize:0,uncompressedSize:0};m&&!f||(ee.crc32=u.crc32,ee.compressedSize=u.compressedSize,ee.uncompressedSize=u.uncompressedSize);var I=0;m&&(I|=8),P||!F&&!d||(I|=2048);var v=0,J=0;re&&(v|=16),g==="UNIX"?(J=798,v|=(function(W,Te){var be=W;return W||(be=Te?16893:33204),(65535&be)<<16})(R.unixPermissions,re)):(J=20,v|=(function(W){return 63&(W||0)})(R.dosPermissions)),A=H.getUTCHours(),A<<=6,A|=H.getUTCMinutes(),A<<=5,A|=H.getUTCSeconds()/2,w=H.getUTCFullYear()-1980,w<<=4,w|=H.getUTCMonth()+1,w<<=5,w|=H.getUTCDate(),F&&(te=s(1,1)+s(_($),4)+O,M+="up"+s(te.length,2)+te),d&&(j=s(1,1)+s(_(Q),4)+y,M+="uc"+s(j.length,2)+j);var Y="";return Y+=`
\0`,Y+=s(I,2),Y+=D.magic,Y+=s(A,2),Y+=s(w,2),Y+=s(ee.crc32,4),Y+=s(ee.compressedSize,4),Y+=s(ee.uncompressedSize,4),Y+=s($.length,2),Y+=s(M.length,2),{fileRecord:h.LOCAL_FILE_HEADER+Y+$+M,dirRecord:h.CENTRAL_FILE_HEADER+s(J,2)+Y+s(Q.length,2)+"\0\0\0\0"+s(v,4)+s(T,4)+$+M+Q}}var o=e("../utils"),a=e("../stream/GenericWorker"),l=e("../utf8"),_=e("../crc32"),h=e("../signature");function p(u,m,f,T){a.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=f,this.encodeFileName=T,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(p,a),p.prototype.push=function(u){var m=u.meta.percent||0,f=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,a.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:f?(m+100*(f-T-1))/f:100}}))},p.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var m=this.streamFiles&&!u.file.dir;if(m){var f=i(u,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(u){this.accumulate=!1;var m=this.streamFiles&&!u.file.dir,f=i(u,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),m)this.push({data:(function(T){return h.DATA_DESCRIPTOR+s(T.crc32,4)+s(T.compressedSize,4)+s(T.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var u=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var f=this.bytesWritten-u,T=(function(g,S,A,w,R){var D=o.transformTo("string",R(w));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(g,2)+s(g,2)+s(S,4)+s(A,4)+s(D.length,2)+D})(this.dirRecords.length,f,u,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(u){this._sources.push(u);var m=this;return u.on("data",function(f){m.processChunk(f)}),u.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),u.on("error",function(f){m.error(f)}),this},p.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(u){var m=this._sources;if(!a.prototype.error.call(this,u))return!1;for(var f=0;f<m.length;f++)try{m[f].error(u)}catch{}return!0},p.prototype.lock=function(){a.prototype.lock.call(this);for(var u=this._sources,m=0;m<u.length;m++)u[m].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),i=e("./ZipFileWorker");r.generateWorker=function(o,a,l){var _=new i(a.streamFiles,l,a.platform,a.encodeFileName),h=0;try{o.forEach(function(p,u){h++;var m=(function(S,A){var w=S||A,R=s[w];if(!R)throw new Error(w+" is not a valid compression method !");return R})(u.options.compression,a.compression),f=u.options.compressionOptions||a.compressionOptions||{},T=u.dir,g=u.date;u._compressWorker(m,f).withStreamInfo("file",{name:p,dir:T,date:g,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(_)}),_.entriesCount=h}catch(p){_.error(p)}return _}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var i=new s;for(var o in this)typeof this[o]!="function"&&(i[o]=this[o]);return i}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(i,o){return new s().loadAsync(i,o)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),i=e("./external"),o=e("./utf8"),a=e("./zipEntries"),l=e("./stream/Crc32Probe"),_=e("./nodejsUtils");function h(p){return new i.Promise(function(u,m){var f=p.decompressed.getContentWorker().pipe(new l);f.on("error",function(T){m(T)}).on("end",function(){f.streamInfo.crc32!==p.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(p,u){var m=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),_.isNode&&_.isStream(p)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,u.optimizedBinaryString,u.base64).then(function(f){var T=new a(u);return T.load(f),T}).then(function(f){var T=[i.Promise.resolve(f)],g=f.files;if(u.checkCRC32)for(var S=0;S<g.length;S++)T.push(h(g[S]));return i.Promise.all(T)}).then(function(f){for(var T=f.shift(),g=T.files,S=0;S<g.length;S++){var A=g[S],w=A.fileNameStr,R=s.resolve(A.fileNameStr);m.file(R,A.decompressed,{binary:!0,optimizedBinaryString:!0,date:A.date,dir:A.dir,comment:A.fileCommentStr.length?A.fileCommentStr:null,unixPermissions:A.unixPermissions,dosPermissions:A.dosPermissions,createFolders:u.createFolders}),A.dir||(m.file(R).unsafeOriginalName=w)}return T.zipComment.length&&(m.comment=T.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),i=e("../stream/GenericWorker");function o(a,l){i.call(this,"Nodejs stream input adapter for "+a),this._upstreamEnded=!1,this._bindStream(l)}s.inherits(o,i),o.prototype._bindStream=function(a){var l=this;(this._stream=a).pause(),a.on("data",function(_){l.push({data:_,meta:{percent:0}})}).on("error",function(_){l.isPaused?this.generatedError=_:l.error(_)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},o.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function i(o,a,l){s.call(this,a),this._helper=o;var _=this;o.on("data",function(h,p){_.push(h)||_._helper.pause(),l&&l(p)}).on("error",function(h){_.emit("error",h)}).on("end",function(){_.push(null)})}e("../utils").inherits(i,s),i.prototype._read=function(){this._helper.resume()},n.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,i){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,i);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,i)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var i=new Buffer(s);return i.fill(0),i},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(R,D,P){var $,O=o.getTypeOf(D),K=o.extend(P||{},_);K.date=K.date||new Date,K.compression!==null&&(K.compression=K.compression.toUpperCase()),typeof K.unixPermissions=="string"&&(K.unixPermissions=parseInt(K.unixPermissions,8)),K.unixPermissions&&16384&K.unixPermissions&&(K.dir=!0),K.dosPermissions&&16&K.dosPermissions&&(K.dir=!0),K.dir&&(R=g(R)),K.createFolders&&($=T(R))&&S.call(this,$,!0);var Q=O==="string"&&K.binary===!1&&K.base64===!1;P&&P.binary!==void 0||(K.binary=!Q),(D instanceof h&&D.uncompressedSize===0||K.dir||!D||D.length===0)&&(K.base64=!1,K.binary=!0,D="",K.compression="STORE",O="string");var y=null;y=D instanceof h||D instanceof a?D:m.isNode&&m.isStream(D)?new f(R,D):o.prepareContent(R,D,K.binary,K.optimizedBinaryString,K.base64);var F=new p(R,y,K);this.files[R]=F}var i=e("./utf8"),o=e("./utils"),a=e("./stream/GenericWorker"),l=e("./stream/StreamHelper"),_=e("./defaults"),h=e("./compressedObject"),p=e("./zipObject"),u=e("./generate"),m=e("./nodejsUtils"),f=e("./nodejs/NodejsStreamInputAdapter"),T=function(R){R.slice(-1)==="/"&&(R=R.substring(0,R.length-1));var D=R.lastIndexOf("/");return 0<D?R.substring(0,D):""},g=function(R){return R.slice(-1)!=="/"&&(R+="/"),R},S=function(R,D){return D=D!==void 0?D:_.createFolders,R=g(R),this.files[R]||s.call(this,R,null,{dir:!0,createFolders:D}),this.files[R]};function A(R){return Object.prototype.toString.call(R)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(R){var D,P,$;for(D in this.files)$=this.files[D],(P=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&R(P,$)},filter:function(R){var D=[];return this.forEach(function(P,$){R(P,$)&&D.push($)}),D},file:function(R,D,P){if(arguments.length!==1)return R=this.root+R,s.call(this,R,D,P),this;if(A(R)){var $=R;return this.filter(function(K,Q){return!Q.dir&&$.test(K)})}var O=this.files[this.root+R];return O&&!O.dir?O:null},folder:function(R){if(!R)return this;if(A(R))return this.filter(function(O,K){return K.dir&&R.test(O)});var D=this.root+R,P=S.call(this,D),$=this.clone();return $.root=P.name,$},remove:function(R){R=this.root+R;var D=this.files[R];if(D||(R.slice(-1)!=="/"&&(R+="/"),D=this.files[R]),D&&!D.dir)delete this.files[R];else for(var P=this.filter(function(O,K){return K.name.slice(0,R.length)===R}),$=0;$<P.length;$++)delete this.files[P[$].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(R){var D,P={};try{if((P=o.extend(R||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");o.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var $=P.comment||this.comment||"";D=u.generateWorker(this,P,$)}catch(O){(D=new a("error")).error(O)}return new l(D,P.type||"string",P.mimeType)},generateAsync:function(R,D){return this.generateInternalStream(R).accumulate(D)},generateNodeStream:function(R,D){return(R=R||{}).type||(R.type="nodebuffer"),this.generateInternalStream(R).toNodejsStream(D)}};n.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function i(o){s.call(this,o);for(var a=0;a<this.data.length;a++)o[a]=255&o[a]}e("../utils").inherits(i,s),i.prototype.byteAt=function(o){return this.data[this.zero+o]},i.prototype.lastIndexOfSignature=function(o){for(var a=o.charCodeAt(0),l=o.charCodeAt(1),_=o.charCodeAt(2),h=o.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===a&&this.data[p+1]===l&&this.data[p+2]===_&&this.data[p+3]===h)return p-this.zero;return-1},i.prototype.readAndCheckSignature=function(o){var a=o.charCodeAt(0),l=o.charCodeAt(1),_=o.charCodeAt(2),h=o.charCodeAt(3),p=this.readData(4);return a===p[0]&&l===p[1]&&_===p[2]&&h===p[3]},i.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},n.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function i(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var a,l=0;for(this.checkOffset(o),a=this.index+o-1;a>=this.index;a--)l=(l<<8)+this.byteAt(a);return this.index+=o,l},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=i},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function i(o){s.call(this,o)}e("../utils").inherits(i,s),i.prototype.readData=function(o){this.checkOffset(o);var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},n.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function i(o){s.call(this,o)}e("../utils").inherits(i,s),i.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},i.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},i.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},i.prototype.readData=function(o){this.checkOffset(o);var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},n.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function i(o){s.call(this,o)}e("../utils").inherits(i,s),i.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var a=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},n.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),i=e("../support"),o=e("./ArrayReader"),a=e("./StringReader"),l=e("./NodeBufferReader"),_=e("./Uint8ArrayReader");n.exports=function(h){var p=s.getTypeOf(h);return s.checkSupport(p),p!=="string"||i.uint8array?p==="nodebuffer"?new l(h):i.uint8array?new _(s.transformTo("uint8array",h)):new o(s.transformTo("array",h)):new a(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),i=e("../utils");function o(a){s.call(this,"ConvertWorker to "+a),this.destType=a}i.inherits(o,s),o.prototype.processChunk=function(a){this.push({data:i.transformTo(this.destType,a.data),meta:a.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),i=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(a){this.streamInfo.crc32=i(a.data,this.streamInfo.crc32||0),this.push(a)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),i=e("./GenericWorker");function o(a){i.call(this,"DataLengthProbe for "+a),this.propName=a,this.withStreamInfo(a,0)}s.inherits(o,i),o.prototype.processChunk=function(a){if(a){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+a.data.length}i.prototype.processChunk.call(this,a)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),i=e("./GenericWorker");function o(a){i.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,a.then(function(_){l.dataIsReady=!0,l.data=_,l.max=_&&_.length||0,l.type=s.getTypeOf(_),l.isPaused||l._tickAndRepeat()},function(_){l.error(_)})}s.inherits(o,i),o.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var a=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":a=this.data.substring(this.index,l);break;case"uint8array":a=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":a=this.data.slice(this.index,l)}return this.index=l,this.push({data:a,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(i){this.name=i||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(i){this.emit("data",i)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(i){this.emit("error",i)}return!0},error:function(i){return!this.isFinished&&(this.isPaused?this.generatedError=i:(this.isFinished=!0,this.emit("error",i),this.previous&&this.previous.error(i),this.cleanUp()),!0)},on:function(i,o){return this._listeners[i].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(i,o){if(this._listeners[i])for(var a=0;a<this._listeners[i].length;a++)this._listeners[i][a].call(this,o)},pipe:function(i){return i.registerPrevious(this)},registerPrevious:function(i){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=i.streamInfo,this.mergeStreamInfo(),this.previous=i;var o=this;return i.on("data",function(a){o.processChunk(a)}),i.on("end",function(){o.end()}),i.on("error",function(a){o.error(a)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var i=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),i=!0),this.previous&&this.previous.resume(),!i},flush:function(){},processChunk:function(i){this.push(i)},withStreamInfo:function(i,o){return this.extraStreamInfo[i]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var i in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,i)&&(this.streamInfo[i]=this.extraStreamInfo[i])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var i="Worker "+this.name;return this.previous?this.previous+" -> "+i:i}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),i=e("./ConvertWorker"),o=e("./GenericWorker"),a=e("../base64"),l=e("../support"),_=e("../external"),h=null;if(l.nodestream)try{h=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(m,f){return new _.Promise(function(T,g){var S=[],A=m._internalType,w=m._outputType,R=m._mimeType;m.on("data",function(D,P){S.push(D),f&&f(P)}).on("error",function(D){S=[],g(D)}).on("end",function(){try{var D=(function(P,$,O){switch(P){case"blob":return s.newBlob(s.transformTo("arraybuffer",$),O);case"base64":return a.encode($);default:return s.transformTo(P,$)}})(w,(function(P,$){var O,K=0,Q=null,y=0;for(O=0;O<$.length;O++)y+=$[O].length;switch(P){case"string":return $.join("");case"array":return Array.prototype.concat.apply([],$);case"uint8array":for(Q=new Uint8Array(y),O=0;O<$.length;O++)Q.set($[O],K),K+=$[O].length;return Q;case"nodebuffer":return Buffer.concat($);default:throw new Error("concat : unsupported type '"+P+"'")}})(A,S),R);T(D)}catch(P){g(P)}S=[]}).resume()})}function u(m,f,T){var g=f;switch(f){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=f,this._mimeType=T,s.checkSupport(g),this._worker=m.pipe(new i(g)),m.lock()}catch(S){this._worker=new o("error"),this._worker.error(S)}}u.prototype={accumulate:function(m){return p(this,m)},on:function(m,f){var T=this;return m==="data"?this._worker.on(m,function(g){f.call(T,g.data,g.meta)}):this._worker.on(m,function(){s.delay(f,arguments,T)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},m)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(s),r.blob=i.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),i=e("./support"),o=e("./nodejsUtils"),a=e("./stream/GenericWorker"),l=new Array(256),_=0;_<256;_++)l[_]=252<=_?6:248<=_?5:240<=_?4:224<=_?3:192<=_?2:1;l[254]=l[254]=1;function h(){a.call(this,"utf-8 decode"),this.leftOver=null}function p(){a.call(this,"utf-8 encode")}r.utf8encode=function(u){return i.nodebuffer?o.newBufferFrom(u,"utf-8"):(function(m){var f,T,g,S,A,w=m.length,R=0;for(S=0;S<w;S++)(64512&(T=m.charCodeAt(S)))==55296&&S+1<w&&(64512&(g=m.charCodeAt(S+1)))==56320&&(T=65536+(T-55296<<10)+(g-56320),S++),R+=T<128?1:T<2048?2:T<65536?3:4;for(f=i.uint8array?new Uint8Array(R):new Array(R),S=A=0;A<R;S++)(64512&(T=m.charCodeAt(S)))==55296&&S+1<w&&(64512&(g=m.charCodeAt(S+1)))==56320&&(T=65536+(T-55296<<10)+(g-56320),S++),T<128?f[A++]=T:(T<2048?f[A++]=192|T>>>6:(T<65536?f[A++]=224|T>>>12:(f[A++]=240|T>>>18,f[A++]=128|T>>>12&63),f[A++]=128|T>>>6&63),f[A++]=128|63&T);return f})(u)},r.utf8decode=function(u){return i.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):(function(m){var f,T,g,S,A=m.length,w=new Array(2*A);for(f=T=0;f<A;)if((g=m[f++])<128)w[T++]=g;else if(4<(S=l[g]))w[T++]=65533,f+=S-1;else{for(g&=S===2?31:S===3?15:7;1<S&&f<A;)g=g<<6|63&m[f++],S--;1<S?w[T++]=65533:g<65536?w[T++]=g:(g-=65536,w[T++]=55296|g>>10&1023,w[T++]=56320|1023&g)}return w.length!==T&&(w.subarray?w=w.subarray(0,T):w.length=T),s.applyFromCharCode(w)})(u=s.transformTo(i.uint8array?"uint8array":"array",u))},s.inherits(h,a),h.prototype.processChunk=function(u){var m=s.transformTo(i.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var f=m;(m=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),m.set(f,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var T=(function(S,A){var w;for((A=A||S.length)>S.length&&(A=S.length),w=A-1;0<=w&&(192&S[w])==128;)w--;return w<0||w===0?A:w+l[S[w]]>A?w:A})(m),g=m;T!==m.length&&(i.uint8array?(g=m.subarray(0,T),this.leftOver=m.subarray(T,m.length)):(g=m.slice(0,T),this.leftOver=m.slice(T,m.length))),this.push({data:r.utf8decode(g),meta:u.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=h,s.inherits(p,a),p.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),i=e("./base64"),o=e("./nodejsUtils"),a=e("./external");function l(f){return f}function _(f,T){for(var g=0;g<f.length;++g)T[g]=255&f.charCodeAt(g);return T}e("setimmediate"),r.newBlob=function(f,T){r.checkSupport("blob");try{return new Blob([f],{type:T})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(f),g.getBlob(T)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(f,T,g){var S=[],A=0,w=f.length;if(w<=g)return String.fromCharCode.apply(null,f);for(;A<w;)T==="array"||T==="nodebuffer"?S.push(String.fromCharCode.apply(null,f.slice(A,Math.min(A+g,w)))):S.push(String.fromCharCode.apply(null,f.subarray(A,Math.min(A+g,w)))),A+=g;return S.join("")},stringifyByChar:function(f){for(var T="",g=0;g<f.length;g++)T+=String.fromCharCode(f[g]);return T},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function p(f){var T=65536,g=r.getTypeOf(f),S=!0;if(g==="uint8array"?S=h.applyCanBeUsed.uint8array:g==="nodebuffer"&&(S=h.applyCanBeUsed.nodebuffer),S)for(;1<T;)try{return h.stringifyByChunk(f,g,T)}catch{T=Math.floor(T/2)}return h.stringifyByChar(f)}function u(f,T){for(var g=0;g<f.length;g++)T[g]=f[g];return T}r.applyFromCharCode=p;var m={};m.string={string:l,array:function(f){return _(f,new Array(f.length))},arraybuffer:function(f){return m.string.uint8array(f).buffer},uint8array:function(f){return _(f,new Uint8Array(f.length))},nodebuffer:function(f){return _(f,o.allocBuffer(f.length))}},m.array={string:p,array:l,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return o.newBufferFrom(f)}},m.arraybuffer={string:function(f){return p(new Uint8Array(f))},array:function(f){return u(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:l,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return o.newBufferFrom(new Uint8Array(f))}},m.uint8array={string:p,array:function(f){return u(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:l,nodebuffer:function(f){return o.newBufferFrom(f)}},m.nodebuffer={string:p,array:function(f){return u(f,new Array(f.length))},arraybuffer:function(f){return m.nodebuffer.uint8array(f).buffer},uint8array:function(f){return u(f,new Uint8Array(f.length))},nodebuffer:l},r.transformTo=function(f,T){if(T=T||"",!f)return T;r.checkSupport(f);var g=r.getTypeOf(T);return m[g][f](T)},r.resolve=function(f){for(var T=f.split("/"),g=[],S=0;S<T.length;S++){var A=T[S];A==="."||A===""&&S!==0&&S!==T.length-1||(A===".."?g.pop():g.push(A))}return g.join("/")},r.getTypeOf=function(f){return typeof f=="string"?"string":Object.prototype.toString.call(f)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(f)?"nodebuffer":s.uint8array&&f instanceof Uint8Array?"uint8array":s.arraybuffer&&f instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(f){if(!s[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(f){var T,g,S="";for(g=0;g<(f||"").length;g++)S+="\\x"+((T=f.charCodeAt(g))<16?"0":"")+T.toString(16).toUpperCase();return S},r.delay=function(f,T,g){setImmediate(function(){f.apply(g||null,T||[])})},r.inherits=function(f,T){function g(){}g.prototype=T.prototype,f.prototype=new g},r.extend=function(){var f,T,g={};for(f=0;f<arguments.length;f++)for(T in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],T)&&g[T]===void 0&&(g[T]=arguments[f][T]);return g},r.prepareContent=function(f,T,g,S,A){return a.Promise.resolve(T).then(function(w){return s.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new a.Promise(function(R,D){var P=new FileReader;P.onload=function($){R($.target.result)},P.onerror=function($){D($.target.error)},P.readAsArrayBuffer(w)}):w}).then(function(w){var R=r.getTypeOf(w);return R?(R==="arraybuffer"?w=r.transformTo("uint8array",w):R==="string"&&(A?w=i.decode(w):g&&S!==!0&&(w=(function(D){return _(D,s.uint8array?new Uint8Array(D.length):new Array(D.length))})(w))),w):a.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),i=e("./utils"),o=e("./signature"),a=e("./zipEntry"),l=e("./support");function _(h){this.files=[],this.loadOptions=h}_.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(p)+", expected "+i.pretty(h)+")")}},isSignature:function(h,p){var u=this.reader.index;this.reader.setIndex(h);var m=this.reader.readString(4)===p;return this.reader.setIndex(u),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),p=l.uint8array?"uint8array":"array",u=i.transformTo(p,h);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,p,u,m=this.zip64EndOfCentralSize-44;0<m;)h=this.reader.readInt(2),p=this.reader.readInt(4),u=this.reader.readData(p),this.zip64ExtensibleData[h]={id:h,length:p,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,p;for(h=0;h<this.files.length;h++)p=this.files[h],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var p=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var m=p-u;if(0<m)this.isSignature(p,o.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(h){this.reader=s(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=_},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),i=e("./utils"),o=e("./compressedObject"),a=e("./crc32"),l=e("./utf8"),_=e("./compressions"),h=e("./support");function p(u,m){this.options=u,this.loadOptions=m}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var m,f;if(u.skip(22),this.fileNameLength=u.readInt(2),f=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(T){for(var g in _)if(Object.prototype.hasOwnProperty.call(_,g)&&_[g].magic===T)return _[g];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,m,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var m=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(m),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var m,f,T,g=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<g;)m=u.readInt(2),f=u.readInt(2),T=u.readData(f),this.extraFields[m]={id:m,length:f,value:T};u.setIndex(g)},handleUTF8:function(){var u=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var f=i.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var T=this.findExtraFieldUnicodeComment();if(T!==null)this.fileCommentStr=T;else{var g=i.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var m=s(u.value);return m.readInt(1)!==1||a(this.fileName)!==m.readInt(4)?null:l.utf8decode(m.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var m=s(u.value);return m.readInt(1)!==1||a(this.fileComment)!==m.readInt(4)?null:l.utf8decode(m.readData(u.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(m,f,T){this.name=m,this.dir=T.dir,this.date=T.date,this.comment=T.comment,this.unixPermissions=T.unixPermissions,this.dosPermissions=T.dosPermissions,this._data=f,this._dataBinary=T.binary,this.options={compression:T.compression,compressionOptions:T.compressionOptions}}var i=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),a=e("./utf8"),l=e("./compressedObject"),_=e("./stream/GenericWorker");s.prototype={internalStream:function(m){var f=null,T="string";try{if(!m)throw new Error("No output type specified.");var g=(T=m.toLowerCase())==="string"||T==="text";T!=="binarystring"&&T!=="text"||(T="string"),f=this._decompressWorker();var S=!this._dataBinary;S&&!g&&(f=f.pipe(new a.Utf8EncodeWorker)),!S&&g&&(f=f.pipe(new a.Utf8DecodeWorker))}catch(A){(f=new _("error")).error(A)}return new i(f,T,"")},async:function(m,f){return this.internalStream(m).accumulate(f)},nodeStream:function(m,f){return this.internalStream(m||"nodebuffer").toNodejsStream(f)},_compressWorker:function(m,f){if(this._data instanceof l&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var T=this._decompressWorker();return this._dataBinary||(T=T.pipe(new a.Utf8EncodeWorker)),l.createWorkerFrom(T,m,f)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof _?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<h.length;u++)s.prototype[h[u]]=p;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var i,o,a=s.MutationObserver||s.WebKitMutationObserver;if(a){var l=0,_=new a(m),h=s.document.createTextNode("");_.observe(h,{characterData:!0}),i=function(){h.data=l=++l%2}}else if(s.setImmediate||s.MessageChannel===void 0)i="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var f=s.document.createElement("script");f.onreadystatechange=function(){m(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},s.document.documentElement.appendChild(f)}:function(){setTimeout(m,0)};else{var p=new s.MessageChannel;p.port1.onmessage=m,i=function(){p.port2.postMessage(0)}}var u=[];function m(){var f,T;o=!0;for(var g=u.length;g;){for(T=u,u=[],f=-1;++f<g;)T[f]();g=u.length}o=!1}n.exports=function(f){u.push(f)!==1||o||i()}}).call(this,typeof Ge<"u"?Ge:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function i(){}var o={},a=["REJECTED"],l=["FULFILLED"],_=["PENDING"];function h(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=_,this.queue=[],this.outcome=void 0,g!==i&&f(this,g)}function p(g,S,A){this.promise=g,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof A=="function"&&(this.onRejected=A,this.callRejected=this.otherCallRejected)}function u(g,S,A){s(function(){var w;try{w=S(A)}catch(R){return o.reject(g,R)}w===g?o.reject(g,new TypeError("Cannot resolve promise with itself")):o.resolve(g,w)})}function m(g){var S=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof S=="function")return function(){S.apply(g,arguments)}}function f(g,S){var A=!1;function w(P){A||(A=!0,o.reject(g,P))}function R(P){A||(A=!0,o.resolve(g,P))}var D=T(function(){S(R,w)});D.status==="error"&&w(D.value)}function T(g,S){var A={};try{A.value=g(S),A.status="success"}catch(w){A.status="error",A.value=w}return A}(n.exports=h).prototype.finally=function(g){if(typeof g!="function")return this;var S=this.constructor;return this.then(function(A){return S.resolve(g()).then(function(){return A})},function(A){return S.resolve(g()).then(function(){throw A})})},h.prototype.catch=function(g){return this.then(null,g)},h.prototype.then=function(g,S){if(typeof g!="function"&&this.state===l||typeof S!="function"&&this.state===a)return this;var A=new this.constructor(i);return this.state!==_?u(A,this.state===l?g:S,this.outcome):this.queue.push(new p(A,g,S)),A},p.prototype.callFulfilled=function(g){o.resolve(this.promise,g)},p.prototype.otherCallFulfilled=function(g){u(this.promise,this.onFulfilled,g)},p.prototype.callRejected=function(g){o.reject(this.promise,g)},p.prototype.otherCallRejected=function(g){u(this.promise,this.onRejected,g)},o.resolve=function(g,S){var A=T(m,S);if(A.status==="error")return o.reject(g,A.value);var w=A.value;if(w)f(g,w);else{g.state=l,g.outcome=S;for(var R=-1,D=g.queue.length;++R<D;)g.queue[R].callFulfilled(S)}return g},o.reject=function(g,S){g.state=a,g.outcome=S;for(var A=-1,w=g.queue.length;++A<w;)g.queue[A].callRejected(S);return g},h.resolve=function(g){return g instanceof this?g:o.resolve(new this(i),g)},h.reject=function(g){var S=new this(i);return o.reject(S,g)},h.all=function(g){var S=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var A=g.length,w=!1;if(!A)return this.resolve([]);for(var R=new Array(A),D=0,P=-1,$=new this(i);++P<A;)O(g[P],P);return $;function O(K,Q){S.resolve(K).then(function(y){R[Q]=y,++D!==A||w||(w=!0,o.resolve($,R))},function(y){w||(w=!0,o.reject($,y))})}},h.race=function(g){var S=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var A=g.length,w=!1;if(!A)return this.resolve([]);for(var R=-1,D=new this(i);++R<A;)P=g[R],S.resolve(P).then(function($){w||(w=!0,o.resolve(D,$))},function($){w||(w=!0,o.reject(D,$))});var P;return D}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),i=e("./utils/common"),o=e("./utils/strings"),a=e("./zlib/messages"),l=e("./zlib/zstream"),_=Object.prototype.toString,h=0,p=-1,u=0,m=8;function f(g){if(!(this instanceof f))return new f(g);this.options=i.assign({level:p,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},g||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var A=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(A!==h)throw new Error(a[A]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var w;if(w=typeof S.dictionary=="string"?o.string2buf(S.dictionary):_.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(A=s.deflateSetDictionary(this.strm,w))!==h)throw new Error(a[A]);this._dict_set=!0}}function T(g,S){var A=new f(S);if(A.push(g,!0),A.err)throw A.msg||a[A.err];return A.result}f.prototype.push=function(g,S){var A,w,R=this.strm,D=this.options.chunkSize;if(this.ended)return!1;w=S===~~S?S:S===!0?4:0,typeof g=="string"?R.input=o.string2buf(g):_.call(g)==="[object ArrayBuffer]"?R.input=new Uint8Array(g):R.input=g,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new i.Buf8(D),R.next_out=0,R.avail_out=D),(A=s.deflate(R,w))!==1&&A!==h)return this.onEnd(A),!(this.ended=!0);R.avail_out!==0&&(R.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(i.shrinkBuf(R.output,R.next_out))):this.onData(i.shrinkBuf(R.output,R.next_out)))}while((0<R.avail_in||R.avail_out===0)&&A!==1);return w===4?(A=s.deflateEnd(this.strm),this.onEnd(A),this.ended=!0,A===h):w!==2||(this.onEnd(h),!(R.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Deflate=f,r.deflate=T,r.deflateRaw=function(g,S){return(S=S||{}).raw=!0,T(g,S)},r.gzip=function(g,S){return(S=S||{}).gzip=!0,T(g,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),i=e("./utils/common"),o=e("./utils/strings"),a=e("./zlib/constants"),l=e("./zlib/messages"),_=e("./zlib/zstream"),h=e("./zlib/gzheader"),p=Object.prototype.toString;function u(f){if(!(this instanceof u))return new u(f);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},f||{});var T=this.options;T.raw&&0<=T.windowBits&&T.windowBits<16&&(T.windowBits=-T.windowBits,T.windowBits===0&&(T.windowBits=-15)),!(0<=T.windowBits&&T.windowBits<16)||f&&f.windowBits||(T.windowBits+=32),15<T.windowBits&&T.windowBits<48&&(15&T.windowBits)==0&&(T.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _,this.strm.avail_out=0;var g=s.inflateInit2(this.strm,T.windowBits);if(g!==a.Z_OK)throw new Error(l[g]);this.header=new h,s.inflateGetHeader(this.strm,this.header)}function m(f,T){var g=new u(T);if(g.push(f,!0),g.err)throw g.msg||l[g.err];return g.result}u.prototype.push=function(f,T){var g,S,A,w,R,D,P=this.strm,$=this.options.chunkSize,O=this.options.dictionary,K=!1;if(this.ended)return!1;S=T===~~T?T:T===!0?a.Z_FINISH:a.Z_NO_FLUSH,typeof f=="string"?P.input=o.binstring2buf(f):p.call(f)==="[object ArrayBuffer]"?P.input=new Uint8Array(f):P.input=f,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new i.Buf8($),P.next_out=0,P.avail_out=$),(g=s.inflate(P,a.Z_NO_FLUSH))===a.Z_NEED_DICT&&O&&(D=typeof O=="string"?o.string2buf(O):p.call(O)==="[object ArrayBuffer]"?new Uint8Array(O):O,g=s.inflateSetDictionary(this.strm,D)),g===a.Z_BUF_ERROR&&K===!0&&(g=a.Z_OK,K=!1),g!==a.Z_STREAM_END&&g!==a.Z_OK)return this.onEnd(g),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&g!==a.Z_STREAM_END&&(P.avail_in!==0||S!==a.Z_FINISH&&S!==a.Z_SYNC_FLUSH)||(this.options.to==="string"?(A=o.utf8border(P.output,P.next_out),w=P.next_out-A,R=o.buf2string(P.output,A),P.next_out=w,P.avail_out=$-w,w&&i.arraySet(P.output,P.output,A,w,0),this.onData(R)):this.onData(i.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(K=!0)}while((0<P.avail_in||P.avail_out===0)&&g!==a.Z_STREAM_END);return g===a.Z_STREAM_END&&(S=a.Z_FINISH),S===a.Z_FINISH?(g=s.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===a.Z_OK):S!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),!(P.avail_out=0))},u.prototype.onData=function(f){this.chunks.push(f)},u.prototype.onEnd=function(f){f===a.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},r.Inflate=u,r.inflate=m,r.inflateRaw=function(f,T){return(T=T||{}).raw=!0,m(f,T)},r.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(a){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var _=l.shift();if(_){if(typeof _!="object")throw new TypeError(_+"must be non-object");for(var h in _)_.hasOwnProperty(h)&&(a[h]=_[h])}}return a},r.shrinkBuf=function(a,l){return a.length===l?a:a.subarray?a.subarray(0,l):(a.length=l,a)};var i={arraySet:function(a,l,_,h,p){if(l.subarray&&a.subarray)a.set(l.subarray(_,_+h),p);else for(var u=0;u<h;u++)a[p+u]=l[_+u]},flattenChunks:function(a){var l,_,h,p,u,m;for(l=h=0,_=a.length;l<_;l++)h+=a[l].length;for(m=new Uint8Array(h),l=p=0,_=a.length;l<_;l++)u=a[l],m.set(u,p),p+=u.length;return m}},o={arraySet:function(a,l,_,h,p){for(var u=0;u<h;u++)a[p+u]=l[_+u]},flattenChunks:function(a){return[].concat.apply([],a)}};r.setTyped=function(a){a?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),i=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var a=new s.Buf8(256),l=0;l<256;l++)a[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function _(h,p){if(p<65537&&(h.subarray&&o||!h.subarray&&i))return String.fromCharCode.apply(null,s.shrinkBuf(h,p));for(var u="",m=0;m<p;m++)u+=String.fromCharCode(h[m]);return u}a[254]=a[254]=1,r.string2buf=function(h){var p,u,m,f,T,g=h.length,S=0;for(f=0;f<g;f++)(64512&(u=h.charCodeAt(f)))==55296&&f+1<g&&(64512&(m=h.charCodeAt(f+1)))==56320&&(u=65536+(u-55296<<10)+(m-56320),f++),S+=u<128?1:u<2048?2:u<65536?3:4;for(p=new s.Buf8(S),f=T=0;T<S;f++)(64512&(u=h.charCodeAt(f)))==55296&&f+1<g&&(64512&(m=h.charCodeAt(f+1)))==56320&&(u=65536+(u-55296<<10)+(m-56320),f++),u<128?p[T++]=u:(u<2048?p[T++]=192|u>>>6:(u<65536?p[T++]=224|u>>>12:(p[T++]=240|u>>>18,p[T++]=128|u>>>12&63),p[T++]=128|u>>>6&63),p[T++]=128|63&u);return p},r.buf2binstring=function(h){return _(h,h.length)},r.binstring2buf=function(h){for(var p=new s.Buf8(h.length),u=0,m=p.length;u<m;u++)p[u]=h.charCodeAt(u);return p},r.buf2string=function(h,p){var u,m,f,T,g=p||h.length,S=new Array(2*g);for(u=m=0;u<g;)if((f=h[u++])<128)S[m++]=f;else if(4<(T=a[f]))S[m++]=65533,u+=T-1;else{for(f&=T===2?31:T===3?15:7;1<T&&u<g;)f=f<<6|63&h[u++],T--;1<T?S[m++]=65533:f<65536?S[m++]=f:(f-=65536,S[m++]=55296|f>>10&1023,S[m++]=56320|1023&f)}return _(S,m)},r.utf8border=function(h,p){var u;for((p=p||h.length)>h.length&&(p=h.length),u=p-1;0<=u&&(192&h[u])==128;)u--;return u<0||u===0?p:u+a[h[u]]>p?u:p}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,i,o,a){for(var l=65535&s|0,_=s>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;_=_+(l=l+i[a++]|0)|0,--h;);l%=65521,_%=65521}return l|_<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=(function(){for(var i,o=[],a=0;a<256;a++){i=a;for(var l=0;l<8;l++)i=1&i?3988292384^i>>>1:i>>>1;o[a]=i}return o})();n.exports=function(i,o,a,l){var _=s,h=l+a;i^=-1;for(var p=l;p<h;p++)i=i>>>8^_[255&(i^o[p])];return-1^i}},{}],46:[function(e,n,r){var s,i=e("../utils/common"),o=e("./trees"),a=e("./adler32"),l=e("./crc32"),_=e("./messages"),h=0,p=4,u=0,m=-2,f=-1,T=4,g=2,S=8,A=9,w=286,R=30,D=19,P=2*w+1,$=15,O=3,K=258,Q=K+O+1,y=42,F=113,d=1,M=2,te=3,j=4;function re(c,z){return c.msg=_[z],z}function H(c){return(c<<1)-(4<c?9:0)}function ee(c){for(var z=c.length;0<=--z;)c[z]=0}function I(c){var z=c.state,x=z.pending;x>c.avail_out&&(x=c.avail_out),x!==0&&(i.arraySet(c.output,z.pending_buf,z.pending_out,x,c.next_out),c.next_out+=x,z.pending_out+=x,c.total_out+=x,c.avail_out-=x,z.pending-=x,z.pending===0&&(z.pending_out=0))}function v(c,z){o._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,z),c.block_start=c.strstart,I(c.strm)}function J(c,z){c.pending_buf[c.pending++]=z}function Y(c,z){c.pending_buf[c.pending++]=z>>>8&255,c.pending_buf[c.pending++]=255&z}function W(c,z){var x,E,k=c.max_chain_length,N=c.strstart,B=c.prev_length,U=c.nice_match,C=c.strstart>c.w_size-Q?c.strstart-(c.w_size-Q):0,G=c.window,q=c.w_mask,Z=c.prev,X=c.strstart+K,_e=G[N+B-1],oe=G[N+B];c.prev_length>=c.good_match&&(k>>=2),U>c.lookahead&&(U=c.lookahead);do if(G[(x=z)+B]===oe&&G[x+B-1]===_e&&G[x]===G[N]&&G[++x]===G[N+1]){N+=2,x++;do;while(G[++N]===G[++x]&&G[++N]===G[++x]&&G[++N]===G[++x]&&G[++N]===G[++x]&&G[++N]===G[++x]&&G[++N]===G[++x]&&G[++N]===G[++x]&&G[++N]===G[++x]&&N<X);if(E=K-(X-N),N=X-K,B<E){if(c.match_start=z,U<=(B=E))break;_e=G[N+B-1],oe=G[N+B]}}while((z=Z[z&q])>C&&--k!=0);return B<=c.lookahead?B:c.lookahead}function Te(c){var z,x,E,k,N,B,U,C,G,q,Z=c.w_size;do{if(k=c.window_size-c.lookahead-c.strstart,c.strstart>=Z+(Z-Q)){for(i.arraySet(c.window,c.window,Z,Z,0),c.match_start-=Z,c.strstart-=Z,c.block_start-=Z,z=x=c.hash_size;E=c.head[--z],c.head[z]=Z<=E?E-Z:0,--x;);for(z=x=Z;E=c.prev[--z],c.prev[z]=Z<=E?E-Z:0,--x;);k+=Z}if(c.strm.avail_in===0)break;if(B=c.strm,U=c.window,C=c.strstart+c.lookahead,G=k,q=void 0,q=B.avail_in,G<q&&(q=G),x=q===0?0:(B.avail_in-=q,i.arraySet(U,B.input,B.next_in,q,C),B.state.wrap===1?B.adler=a(B.adler,U,q,C):B.state.wrap===2&&(B.adler=l(B.adler,U,q,C)),B.next_in+=q,B.total_in+=q,q),c.lookahead+=x,c.lookahead+c.insert>=O)for(N=c.strstart-c.insert,c.ins_h=c.window[N],c.ins_h=(c.ins_h<<c.hash_shift^c.window[N+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[N+O-1])&c.hash_mask,c.prev[N&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=N,N++,c.insert--,!(c.lookahead+c.insert<O)););}while(c.lookahead<Q&&c.strm.avail_in!==0)}function be(c,z){for(var x,E;;){if(c.lookahead<Q){if(Te(c),c.lookahead<Q&&z===h)return d;if(c.lookahead===0)break}if(x=0,c.lookahead>=O&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+O-1])&c.hash_mask,x=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),x!==0&&c.strstart-x<=c.w_size-Q&&(c.match_length=W(c,x)),c.match_length>=O)if(E=o._tr_tally(c,c.strstart-c.match_start,c.match_length-O),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=O){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+O-1])&c.hash_mask,x=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else E=o._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(E&&(v(c,!1),c.strm.avail_out===0))return d}return c.insert=c.strstart<O-1?c.strstart:O-1,z===p?(v(c,!0),c.strm.avail_out===0?te:j):c.last_lit&&(v(c,!1),c.strm.avail_out===0)?d:M}function ie(c,z){for(var x,E,k;;){if(c.lookahead<Q){if(Te(c),c.lookahead<Q&&z===h)return d;if(c.lookahead===0)break}if(x=0,c.lookahead>=O&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+O-1])&c.hash_mask,x=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=O-1,x!==0&&c.prev_length<c.max_lazy_match&&c.strstart-x<=c.w_size-Q&&(c.match_length=W(c,x),c.match_length<=5&&(c.strategy===1||c.match_length===O&&4096<c.strstart-c.match_start)&&(c.match_length=O-1)),c.prev_length>=O&&c.match_length<=c.prev_length){for(k=c.strstart+c.lookahead-O,E=o._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-O),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=k&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+O-1])&c.hash_mask,x=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=O-1,c.strstart++,E&&(v(c,!1),c.strm.avail_out===0))return d}else if(c.match_available){if((E=o._tr_tally(c,0,c.window[c.strstart-1]))&&v(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return d}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(E=o._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<O-1?c.strstart:O-1,z===p?(v(c,!0),c.strm.avail_out===0?te:j):c.last_lit&&(v(c,!1),c.strm.avail_out===0)?d:M}function ue(c,z,x,E,k){this.good_length=c,this.max_lazy=z,this.nice_length=x,this.max_chain=E,this.func=k}function Ee(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*P),this.dyn_dtree=new i.Buf16(2*(2*R+1)),this.bl_tree=new i.Buf16(2*(2*D+1)),ee(this.dyn_ltree),ee(this.dyn_dtree),ee(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16($+1),this.heap=new i.Buf16(2*w+1),ee(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*w+1),ee(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Se(c){var z;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=g,(z=c.state).pending=0,z.pending_out=0,z.wrap<0&&(z.wrap=-z.wrap),z.status=z.wrap?y:F,c.adler=z.wrap===2?0:1,z.last_flush=h,o._tr_init(z),u):re(c,m)}function Le(c){var z=Se(c);return z===u&&(function(x){x.window_size=2*x.w_size,ee(x.head),x.max_lazy_match=s[x.level].max_lazy,x.good_match=s[x.level].good_length,x.nice_match=s[x.level].nice_length,x.max_chain_length=s[x.level].max_chain,x.strstart=0,x.block_start=0,x.lookahead=0,x.insert=0,x.match_length=x.prev_length=O-1,x.match_available=0,x.ins_h=0})(c.state),z}function ve(c,z,x,E,k,N){if(!c)return m;var B=1;if(z===f&&(z=6),E<0?(B=0,E=-E):15<E&&(B=2,E-=16),k<1||A<k||x!==S||E<8||15<E||z<0||9<z||N<0||T<N)return re(c,m);E===8&&(E=9);var U=new Ee;return(c.state=U).strm=c,U.wrap=B,U.gzhead=null,U.w_bits=E,U.w_size=1<<U.w_bits,U.w_mask=U.w_size-1,U.hash_bits=k+7,U.hash_size=1<<U.hash_bits,U.hash_mask=U.hash_size-1,U.hash_shift=~~((U.hash_bits+O-1)/O),U.window=new i.Buf8(2*U.w_size),U.head=new i.Buf16(U.hash_size),U.prev=new i.Buf16(U.w_size),U.lit_bufsize=1<<k+6,U.pending_buf_size=4*U.lit_bufsize,U.pending_buf=new i.Buf8(U.pending_buf_size),U.d_buf=1*U.lit_bufsize,U.l_buf=3*U.lit_bufsize,U.level=z,U.strategy=N,U.method=x,Le(c)}s=[new ue(0,0,0,0,function(c,z){var x=65535;for(x>c.pending_buf_size-5&&(x=c.pending_buf_size-5);;){if(c.lookahead<=1){if(Te(c),c.lookahead===0&&z===h)return d;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var E=c.block_start+x;if((c.strstart===0||c.strstart>=E)&&(c.lookahead=c.strstart-E,c.strstart=E,v(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-Q&&(v(c,!1),c.strm.avail_out===0))return d}return c.insert=0,z===p?(v(c,!0),c.strm.avail_out===0?te:j):(c.strstart>c.block_start&&(v(c,!1),c.strm.avail_out),d)}),new ue(4,4,8,4,be),new ue(4,5,16,8,be),new ue(4,6,32,32,be),new ue(4,4,16,16,ie),new ue(8,16,32,32,ie),new ue(8,16,128,128,ie),new ue(8,32,128,256,ie),new ue(32,128,258,1024,ie),new ue(32,258,258,4096,ie)],r.deflateInit=function(c,z){return ve(c,z,S,15,8,0)},r.deflateInit2=ve,r.deflateReset=Le,r.deflateResetKeep=Se,r.deflateSetHeader=function(c,z){return c&&c.state?c.state.wrap!==2?m:(c.state.gzhead=z,u):m},r.deflate=function(c,z){var x,E,k,N;if(!c||!c.state||5<z||z<0)return c?re(c,m):m;if(E=c.state,!c.output||!c.input&&c.avail_in!==0||E.status===666&&z!==p)return re(c,c.avail_out===0?-5:m);if(E.strm=c,x=E.last_flush,E.last_flush=z,E.status===y)if(E.wrap===2)c.adler=0,J(E,31),J(E,139),J(E,8),E.gzhead?(J(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),J(E,255&E.gzhead.time),J(E,E.gzhead.time>>8&255),J(E,E.gzhead.time>>16&255),J(E,E.gzhead.time>>24&255),J(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),J(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(J(E,255&E.gzhead.extra.length),J(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(c.adler=l(c.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(J(E,0),J(E,0),J(E,0),J(E,0),J(E,0),J(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),J(E,3),E.status=F);else{var B=S+(E.w_bits-8<<4)<<8;B|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(B|=32),B+=31-B%31,E.status=F,Y(E,B),E.strstart!==0&&(Y(E,c.adler>>>16),Y(E,65535&c.adler)),c.adler=1}if(E.status===69)if(E.gzhead.extra){for(k=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>k&&(c.adler=l(c.adler,E.pending_buf,E.pending-k,k)),I(c),k=E.pending,E.pending!==E.pending_buf_size));)J(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>k&&(c.adler=l(c.adler,E.pending_buf,E.pending-k,k)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){k=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>k&&(c.adler=l(c.adler,E.pending_buf,E.pending-k,k)),I(c),k=E.pending,E.pending===E.pending_buf_size)){N=1;break}N=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,J(E,N)}while(N!==0);E.gzhead.hcrc&&E.pending>k&&(c.adler=l(c.adler,E.pending_buf,E.pending-k,k)),N===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){k=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>k&&(c.adler=l(c.adler,E.pending_buf,E.pending-k,k)),I(c),k=E.pending,E.pending===E.pending_buf_size)){N=1;break}N=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,J(E,N)}while(N!==0);E.gzhead.hcrc&&E.pending>k&&(c.adler=l(c.adler,E.pending_buf,E.pending-k,k)),N===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&I(c),E.pending+2<=E.pending_buf_size&&(J(E,255&c.adler),J(E,c.adler>>8&255),c.adler=0,E.status=F)):E.status=F),E.pending!==0){if(I(c),c.avail_out===0)return E.last_flush=-1,u}else if(c.avail_in===0&&H(z)<=H(x)&&z!==p)return re(c,-5);if(E.status===666&&c.avail_in!==0)return re(c,-5);if(c.avail_in!==0||E.lookahead!==0||z!==h&&E.status!==666){var U=E.strategy===2?(function(C,G){for(var q;;){if(C.lookahead===0&&(Te(C),C.lookahead===0)){if(G===h)return d;break}if(C.match_length=0,q=o._tr_tally(C,0,C.window[C.strstart]),C.lookahead--,C.strstart++,q&&(v(C,!1),C.strm.avail_out===0))return d}return C.insert=0,G===p?(v(C,!0),C.strm.avail_out===0?te:j):C.last_lit&&(v(C,!1),C.strm.avail_out===0)?d:M})(E,z):E.strategy===3?(function(C,G){for(var q,Z,X,_e,oe=C.window;;){if(C.lookahead<=K){if(Te(C),C.lookahead<=K&&G===h)return d;if(C.lookahead===0)break}if(C.match_length=0,C.lookahead>=O&&0<C.strstart&&(Z=oe[X=C.strstart-1])===oe[++X]&&Z===oe[++X]&&Z===oe[++X]){_e=C.strstart+K;do;while(Z===oe[++X]&&Z===oe[++X]&&Z===oe[++X]&&Z===oe[++X]&&Z===oe[++X]&&Z===oe[++X]&&Z===oe[++X]&&Z===oe[++X]&&X<_e);C.match_length=K-(_e-X),C.match_length>C.lookahead&&(C.match_length=C.lookahead)}if(C.match_length>=O?(q=o._tr_tally(C,1,C.match_length-O),C.lookahead-=C.match_length,C.strstart+=C.match_length,C.match_length=0):(q=o._tr_tally(C,0,C.window[C.strstart]),C.lookahead--,C.strstart++),q&&(v(C,!1),C.strm.avail_out===0))return d}return C.insert=0,G===p?(v(C,!0),C.strm.avail_out===0?te:j):C.last_lit&&(v(C,!1),C.strm.avail_out===0)?d:M})(E,z):s[E.level].func(E,z);if(U!==te&&U!==j||(E.status=666),U===d||U===te)return c.avail_out===0&&(E.last_flush=-1),u;if(U===M&&(z===1?o._tr_align(E):z!==5&&(o._tr_stored_block(E,0,0,!1),z===3&&(ee(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),I(c),c.avail_out===0))return E.last_flush=-1,u}return z!==p?u:E.wrap<=0?1:(E.wrap===2?(J(E,255&c.adler),J(E,c.adler>>8&255),J(E,c.adler>>16&255),J(E,c.adler>>24&255),J(E,255&c.total_in),J(E,c.total_in>>8&255),J(E,c.total_in>>16&255),J(E,c.total_in>>24&255)):(Y(E,c.adler>>>16),Y(E,65535&c.adler)),I(c),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?u:1)},r.deflateEnd=function(c){var z;return c&&c.state?(z=c.state.status)!==y&&z!==69&&z!==73&&z!==91&&z!==103&&z!==F&&z!==666?re(c,m):(c.state=null,z===F?re(c,-3):u):m},r.deflateSetDictionary=function(c,z){var x,E,k,N,B,U,C,G,q=z.length;if(!c||!c.state||(N=(x=c.state).wrap)===2||N===1&&x.status!==y||x.lookahead)return m;for(N===1&&(c.adler=a(c.adler,z,q,0)),x.wrap=0,q>=x.w_size&&(N===0&&(ee(x.head),x.strstart=0,x.block_start=0,x.insert=0),G=new i.Buf8(x.w_size),i.arraySet(G,z,q-x.w_size,x.w_size,0),z=G,q=x.w_size),B=c.avail_in,U=c.next_in,C=c.input,c.avail_in=q,c.next_in=0,c.input=z,Te(x);x.lookahead>=O;){for(E=x.strstart,k=x.lookahead-(O-1);x.ins_h=(x.ins_h<<x.hash_shift^x.window[E+O-1])&x.hash_mask,x.prev[E&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=E,E++,--k;);x.strstart=E,x.lookahead=O-1,Te(x)}return x.strstart+=x.lookahead,x.block_start=x.strstart,x.insert=x.lookahead,x.lookahead=0,x.match_length=x.prev_length=O-1,x.match_available=0,c.next_in=U,c.input=C,c.avail_in=B,x.wrap=N,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,i){var o,a,l,_,h,p,u,m,f,T,g,S,A,w,R,D,P,$,O,K,Q,y,F,d,M;o=s.state,a=s.next_in,d=s.input,l=a+(s.avail_in-5),_=s.next_out,M=s.output,h=_-(i-s.avail_out),p=_+(s.avail_out-257),u=o.dmax,m=o.wsize,f=o.whave,T=o.wnext,g=o.window,S=o.hold,A=o.bits,w=o.lencode,R=o.distcode,D=(1<<o.lenbits)-1,P=(1<<o.distbits)-1;e:do{A<15&&(S+=d[a++]<<A,A+=8,S+=d[a++]<<A,A+=8),$=w[S&D];t:for(;;){if(S>>>=O=$>>>24,A-=O,(O=$>>>16&255)===0)M[_++]=65535&$;else{if(!(16&O)){if((64&O)==0){$=w[(65535&$)+(S&(1<<O)-1)];continue t}if(32&O){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}K=65535&$,(O&=15)&&(A<O&&(S+=d[a++]<<A,A+=8),K+=S&(1<<O)-1,S>>>=O,A-=O),A<15&&(S+=d[a++]<<A,A+=8,S+=d[a++]<<A,A+=8),$=R[S&P];n:for(;;){if(S>>>=O=$>>>24,A-=O,!(16&(O=$>>>16&255))){if((64&O)==0){$=R[(65535&$)+(S&(1<<O)-1)];continue n}s.msg="invalid distance code",o.mode=30;break e}if(Q=65535&$,A<(O&=15)&&(S+=d[a++]<<A,(A+=8)<O&&(S+=d[a++]<<A,A+=8)),u<(Q+=S&(1<<O)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(S>>>=O,A-=O,(O=_-h)<Q){if(f<(O=Q-O)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(F=g,(y=0)===T){if(y+=m-O,O<K){for(K-=O;M[_++]=g[y++],--O;);y=_-Q,F=M}}else if(T<O){if(y+=m+T-O,(O-=T)<K){for(K-=O;M[_++]=g[y++],--O;);if(y=0,T<K){for(K-=O=T;M[_++]=g[y++],--O;);y=_-Q,F=M}}}else if(y+=T-O,O<K){for(K-=O;M[_++]=g[y++],--O;);y=_-Q,F=M}for(;2<K;)M[_++]=F[y++],M[_++]=F[y++],M[_++]=F[y++],K-=3;K&&(M[_++]=F[y++],1<K&&(M[_++]=F[y++]))}else{for(y=_-Q;M[_++]=M[y++],M[_++]=M[y++],M[_++]=M[y++],2<(K-=3););K&&(M[_++]=M[y++],1<K&&(M[_++]=M[y++]))}break}}break}}while(a<l&&_<p);a-=K=A>>3,S&=(1<<(A-=K<<3))-1,s.next_in=a,s.next_out=_,s.avail_in=a<l?l-a+5:5-(a-l),s.avail_out=_<p?p-_+257:257-(_-p),o.hold=S,o.bits=A}},{}],49:[function(e,n,r){var s=e("../utils/common"),i=e("./adler32"),o=e("./crc32"),a=e("./inffast"),l=e("./inftrees"),_=1,h=2,p=0,u=-2,m=1,f=852,T=592;function g(y){return(y>>>24&255)+(y>>>8&65280)+((65280&y)<<8)+((255&y)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function A(y){var F;return y&&y.state?(F=y.state,y.total_in=y.total_out=F.total=0,y.msg="",F.wrap&&(y.adler=1&F.wrap),F.mode=m,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new s.Buf32(f),F.distcode=F.distdyn=new s.Buf32(T),F.sane=1,F.back=-1,p):u}function w(y){var F;return y&&y.state?((F=y.state).wsize=0,F.whave=0,F.wnext=0,A(y)):u}function R(y,F){var d,M;return y&&y.state?(M=y.state,F<0?(d=0,F=-F):(d=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?u:(M.window!==null&&M.wbits!==F&&(M.window=null),M.wrap=d,M.wbits=F,w(y))):u}function D(y,F){var d,M;return y?(M=new S,(y.state=M).window=null,(d=R(y,F))!==p&&(y.state=null),d):u}var P,$,O=!0;function K(y){if(O){var F;for(P=new s.Buf32(512),$=new s.Buf32(32),F=0;F<144;)y.lens[F++]=8;for(;F<256;)y.lens[F++]=9;for(;F<280;)y.lens[F++]=7;for(;F<288;)y.lens[F++]=8;for(l(_,y.lens,0,288,P,0,y.work,{bits:9}),F=0;F<32;)y.lens[F++]=5;l(h,y.lens,0,32,$,0,y.work,{bits:5}),O=!1}y.lencode=P,y.lenbits=9,y.distcode=$,y.distbits=5}function Q(y,F,d,M){var te,j=y.state;return j.window===null&&(j.wsize=1<<j.wbits,j.wnext=0,j.whave=0,j.window=new s.Buf8(j.wsize)),M>=j.wsize?(s.arraySet(j.window,F,d-j.wsize,j.wsize,0),j.wnext=0,j.whave=j.wsize):(M<(te=j.wsize-j.wnext)&&(te=M),s.arraySet(j.window,F,d-M,te,j.wnext),(M-=te)?(s.arraySet(j.window,F,d-M,M,0),j.wnext=M,j.whave=j.wsize):(j.wnext+=te,j.wnext===j.wsize&&(j.wnext=0),j.whave<j.wsize&&(j.whave+=te))),0}r.inflateReset=w,r.inflateReset2=R,r.inflateResetKeep=A,r.inflateInit=function(y){return D(y,15)},r.inflateInit2=D,r.inflate=function(y,F){var d,M,te,j,re,H,ee,I,v,J,Y,W,Te,be,ie,ue,Ee,Se,Le,ve,c,z,x,E,k=0,N=new s.Buf8(4),B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!y||!y.state||!y.output||!y.input&&y.avail_in!==0)return u;(d=y.state).mode===12&&(d.mode=13),re=y.next_out,te=y.output,ee=y.avail_out,j=y.next_in,M=y.input,H=y.avail_in,I=d.hold,v=d.bits,J=H,Y=ee,z=p;e:for(;;)switch(d.mode){case m:if(d.wrap===0){d.mode=13;break}for(;v<16;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if(2&d.wrap&&I===35615){N[d.check=0]=255&I,N[1]=I>>>8&255,d.check=o(d.check,N,2,0),v=I=0,d.mode=2;break}if(d.flags=0,d.head&&(d.head.done=!1),!(1&d.wrap)||(((255&I)<<8)+(I>>8))%31){y.msg="incorrect header check",d.mode=30;break}if((15&I)!=8){y.msg="unknown compression method",d.mode=30;break}if(v-=4,c=8+(15&(I>>>=4)),d.wbits===0)d.wbits=c;else if(c>d.wbits){y.msg="invalid window size",d.mode=30;break}d.dmax=1<<c,y.adler=d.check=1,d.mode=512&I?10:12,v=I=0;break;case 2:for(;v<16;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if(d.flags=I,(255&d.flags)!=8){y.msg="unknown compression method",d.mode=30;break}if(57344&d.flags){y.msg="unknown header flags set",d.mode=30;break}d.head&&(d.head.text=I>>8&1),512&d.flags&&(N[0]=255&I,N[1]=I>>>8&255,d.check=o(d.check,N,2,0)),v=I=0,d.mode=3;case 3:for(;v<32;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}d.head&&(d.head.time=I),512&d.flags&&(N[0]=255&I,N[1]=I>>>8&255,N[2]=I>>>16&255,N[3]=I>>>24&255,d.check=o(d.check,N,4,0)),v=I=0,d.mode=4;case 4:for(;v<16;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}d.head&&(d.head.xflags=255&I,d.head.os=I>>8),512&d.flags&&(N[0]=255&I,N[1]=I>>>8&255,d.check=o(d.check,N,2,0)),v=I=0,d.mode=5;case 5:if(1024&d.flags){for(;v<16;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}d.length=I,d.head&&(d.head.extra_len=I),512&d.flags&&(N[0]=255&I,N[1]=I>>>8&255,d.check=o(d.check,N,2,0)),v=I=0}else d.head&&(d.head.extra=null);d.mode=6;case 6:if(1024&d.flags&&(H<(W=d.length)&&(W=H),W&&(d.head&&(c=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),s.arraySet(d.head.extra,M,j,W,c)),512&d.flags&&(d.check=o(d.check,M,W,j)),H-=W,j+=W,d.length-=W),d.length))break e;d.length=0,d.mode=7;case 7:if(2048&d.flags){if(H===0)break e;for(W=0;c=M[j+W++],d.head&&c&&d.length<65536&&(d.head.name+=String.fromCharCode(c)),c&&W<H;);if(512&d.flags&&(d.check=o(d.check,M,W,j)),H-=W,j+=W,c)break e}else d.head&&(d.head.name=null);d.length=0,d.mode=8;case 8:if(4096&d.flags){if(H===0)break e;for(W=0;c=M[j+W++],d.head&&c&&d.length<65536&&(d.head.comment+=String.fromCharCode(c)),c&&W<H;);if(512&d.flags&&(d.check=o(d.check,M,W,j)),H-=W,j+=W,c)break e}else d.head&&(d.head.comment=null);d.mode=9;case 9:if(512&d.flags){for(;v<16;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if(I!==(65535&d.check)){y.msg="header crc mismatch",d.mode=30;break}v=I=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),y.adler=d.check=0,d.mode=12;break;case 10:for(;v<32;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}y.adler=d.check=g(I),v=I=0,d.mode=11;case 11:if(d.havedict===0)return y.next_out=re,y.avail_out=ee,y.next_in=j,y.avail_in=H,d.hold=I,d.bits=v,2;y.adler=d.check=1,d.mode=12;case 12:if(F===5||F===6)break e;case 13:if(d.last){I>>>=7&v,v-=7&v,d.mode=27;break}for(;v<3;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}switch(d.last=1&I,v-=1,3&(I>>>=1)){case 0:d.mode=14;break;case 1:if(K(d),d.mode=20,F!==6)break;I>>>=2,v-=2;break e;case 2:d.mode=17;break;case 3:y.msg="invalid block type",d.mode=30}I>>>=2,v-=2;break;case 14:for(I>>>=7&v,v-=7&v;v<32;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if((65535&I)!=(I>>>16^65535)){y.msg="invalid stored block lengths",d.mode=30;break}if(d.length=65535&I,v=I=0,d.mode=15,F===6)break e;case 15:d.mode=16;case 16:if(W=d.length){if(H<W&&(W=H),ee<W&&(W=ee),W===0)break e;s.arraySet(te,M,j,W,re),H-=W,j+=W,ee-=W,re+=W,d.length-=W;break}d.mode=12;break;case 17:for(;v<14;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if(d.nlen=257+(31&I),I>>>=5,v-=5,d.ndist=1+(31&I),I>>>=5,v-=5,d.ncode=4+(15&I),I>>>=4,v-=4,286<d.nlen||30<d.ndist){y.msg="too many length or distance symbols",d.mode=30;break}d.have=0,d.mode=18;case 18:for(;d.have<d.ncode;){for(;v<3;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}d.lens[B[d.have++]]=7&I,I>>>=3,v-=3}for(;d.have<19;)d.lens[B[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,x={bits:d.lenbits},z=l(0,d.lens,0,19,d.lencode,0,d.work,x),d.lenbits=x.bits,z){y.msg="invalid code lengths set",d.mode=30;break}d.have=0,d.mode=19;case 19:for(;d.have<d.nlen+d.ndist;){for(;ue=(k=d.lencode[I&(1<<d.lenbits)-1])>>>16&255,Ee=65535&k,!((ie=k>>>24)<=v);){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if(Ee<16)I>>>=ie,v-=ie,d.lens[d.have++]=Ee;else{if(Ee===16){for(E=ie+2;v<E;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if(I>>>=ie,v-=ie,d.have===0){y.msg="invalid bit length repeat",d.mode=30;break}c=d.lens[d.have-1],W=3+(3&I),I>>>=2,v-=2}else if(Ee===17){for(E=ie+3;v<E;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}v-=ie,c=0,W=3+(7&(I>>>=ie)),I>>>=3,v-=3}else{for(E=ie+7;v<E;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}v-=ie,c=0,W=11+(127&(I>>>=ie)),I>>>=7,v-=7}if(d.have+W>d.nlen+d.ndist){y.msg="invalid bit length repeat",d.mode=30;break}for(;W--;)d.lens[d.have++]=c}}if(d.mode===30)break;if(d.lens[256]===0){y.msg="invalid code -- missing end-of-block",d.mode=30;break}if(d.lenbits=9,x={bits:d.lenbits},z=l(_,d.lens,0,d.nlen,d.lencode,0,d.work,x),d.lenbits=x.bits,z){y.msg="invalid literal/lengths set",d.mode=30;break}if(d.distbits=6,d.distcode=d.distdyn,x={bits:d.distbits},z=l(h,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,x),d.distbits=x.bits,z){y.msg="invalid distances set",d.mode=30;break}if(d.mode=20,F===6)break e;case 20:d.mode=21;case 21:if(6<=H&&258<=ee){y.next_out=re,y.avail_out=ee,y.next_in=j,y.avail_in=H,d.hold=I,d.bits=v,a(y,Y),re=y.next_out,te=y.output,ee=y.avail_out,j=y.next_in,M=y.input,H=y.avail_in,I=d.hold,v=d.bits,d.mode===12&&(d.back=-1);break}for(d.back=0;ue=(k=d.lencode[I&(1<<d.lenbits)-1])>>>16&255,Ee=65535&k,!((ie=k>>>24)<=v);){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if(ue&&(240&ue)==0){for(Se=ie,Le=ue,ve=Ee;ue=(k=d.lencode[ve+((I&(1<<Se+Le)-1)>>Se)])>>>16&255,Ee=65535&k,!(Se+(ie=k>>>24)<=v);){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}I>>>=Se,v-=Se,d.back+=Se}if(I>>>=ie,v-=ie,d.back+=ie,d.length=Ee,ue===0){d.mode=26;break}if(32&ue){d.back=-1,d.mode=12;break}if(64&ue){y.msg="invalid literal/length code",d.mode=30;break}d.extra=15&ue,d.mode=22;case 22:if(d.extra){for(E=d.extra;v<E;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}d.length+=I&(1<<d.extra)-1,I>>>=d.extra,v-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=23;case 23:for(;ue=(k=d.distcode[I&(1<<d.distbits)-1])>>>16&255,Ee=65535&k,!((ie=k>>>24)<=v);){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if((240&ue)==0){for(Se=ie,Le=ue,ve=Ee;ue=(k=d.distcode[ve+((I&(1<<Se+Le)-1)>>Se)])>>>16&255,Ee=65535&k,!(Se+(ie=k>>>24)<=v);){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}I>>>=Se,v-=Se,d.back+=Se}if(I>>>=ie,v-=ie,d.back+=ie,64&ue){y.msg="invalid distance code",d.mode=30;break}d.offset=Ee,d.extra=15&ue,d.mode=24;case 24:if(d.extra){for(E=d.extra;v<E;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}d.offset+=I&(1<<d.extra)-1,I>>>=d.extra,v-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){y.msg="invalid distance too far back",d.mode=30;break}d.mode=25;case 25:if(ee===0)break e;if(W=Y-ee,d.offset>W){if((W=d.offset-W)>d.whave&&d.sane){y.msg="invalid distance too far back",d.mode=30;break}Te=W>d.wnext?(W-=d.wnext,d.wsize-W):d.wnext-W,W>d.length&&(W=d.length),be=d.window}else be=te,Te=re-d.offset,W=d.length;for(ee<W&&(W=ee),ee-=W,d.length-=W;te[re++]=be[Te++],--W;);d.length===0&&(d.mode=21);break;case 26:if(ee===0)break e;te[re++]=d.length,ee--,d.mode=21;break;case 27:if(d.wrap){for(;v<32;){if(H===0)break e;H--,I|=M[j++]<<v,v+=8}if(Y-=ee,y.total_out+=Y,d.total+=Y,Y&&(y.adler=d.check=d.flags?o(d.check,te,Y,re-Y):i(d.check,te,Y,re-Y)),Y=ee,(d.flags?I:g(I))!==d.check){y.msg="incorrect data check",d.mode=30;break}v=I=0}d.mode=28;case 28:if(d.wrap&&d.flags){for(;v<32;){if(H===0)break e;H--,I+=M[j++]<<v,v+=8}if(I!==(4294967295&d.total)){y.msg="incorrect length check",d.mode=30;break}v=I=0}d.mode=29;case 29:z=1;break e;case 30:z=-3;break e;case 31:return-4;default:return u}return y.next_out=re,y.avail_out=ee,y.next_in=j,y.avail_in=H,d.hold=I,d.bits=v,(d.wsize||Y!==y.avail_out&&d.mode<30&&(d.mode<27||F!==4))&&Q(y,y.output,y.next_out,Y-y.avail_out)?(d.mode=31,-4):(J-=y.avail_in,Y-=y.avail_out,y.total_in+=J,y.total_out+=Y,d.total+=Y,d.wrap&&Y&&(y.adler=d.check=d.flags?o(d.check,te,Y,y.next_out-Y):i(d.check,te,Y,y.next_out-Y)),y.data_type=d.bits+(d.last?64:0)+(d.mode===12?128:0)+(d.mode===20||d.mode===15?256:0),(J==0&&Y===0||F===4)&&z===p&&(z=-5),z)},r.inflateEnd=function(y){if(!y||!y.state)return u;var F=y.state;return F.window&&(F.window=null),y.state=null,p},r.inflateGetHeader=function(y,F){var d;return y&&y.state?(2&(d=y.state).wrap)==0?u:((d.head=F).done=!1,p):u},r.inflateSetDictionary=function(y,F){var d,M=F.length;return y&&y.state?(d=y.state).wrap!==0&&d.mode!==11?u:d.mode===11&&i(1,F,M,0)!==d.check?-3:Q(y,F,M,M)?(d.mode=31,-4):(d.havedict=1,p):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(_,h,p,u,m,f,T,g){var S,A,w,R,D,P,$,O,K,Q=g.bits,y=0,F=0,d=0,M=0,te=0,j=0,re=0,H=0,ee=0,I=0,v=null,J=0,Y=new s.Buf16(16),W=new s.Buf16(16),Te=null,be=0;for(y=0;y<=15;y++)Y[y]=0;for(F=0;F<u;F++)Y[h[p+F]]++;for(te=Q,M=15;1<=M&&Y[M]===0;M--);if(M<te&&(te=M),M===0)return m[f++]=20971520,m[f++]=20971520,g.bits=1,0;for(d=1;d<M&&Y[d]===0;d++);for(te<d&&(te=d),y=H=1;y<=15;y++)if(H<<=1,(H-=Y[y])<0)return-1;if(0<H&&(_===0||M!==1))return-1;for(W[1]=0,y=1;y<15;y++)W[y+1]=W[y]+Y[y];for(F=0;F<u;F++)h[p+F]!==0&&(T[W[h[p+F]]++]=F);if(P=_===0?(v=Te=T,19):_===1?(v=i,J-=257,Te=o,be-=257,256):(v=a,Te=l,-1),y=d,D=f,re=F=I=0,w=-1,R=(ee=1<<(j=te))-1,_===1&&852<ee||_===2&&592<ee)return 1;for(;;){for($=y-re,K=T[F]<P?(O=0,T[F]):T[F]>P?(O=Te[be+T[F]],v[J+T[F]]):(O=96,0),S=1<<y-re,d=A=1<<j;m[D+(I>>re)+(A-=S)]=$<<24|O<<16|K|0,A!==0;);for(S=1<<y-1;I&S;)S>>=1;if(S!==0?(I&=S-1,I+=S):I=0,F++,--Y[y]==0){if(y===M)break;y=h[p+T[F]]}if(te<y&&(I&R)!==w){for(re===0&&(re=te),D+=d,H=1<<(j=y-re);j+re<M&&!((H-=Y[j+re])<=0);)j++,H<<=1;if(ee+=1<<j,_===1&&852<ee||_===2&&592<ee)return 1;m[w=I&R]=te<<24|j<<16|D-f|0}}return I!==0&&(m[D+I]=y-re<<24|64<<16|0),g.bits=te,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),i=0,o=1;function a(k){for(var N=k.length;0<=--N;)k[N]=0}var l=0,_=29,h=256,p=h+1+_,u=30,m=19,f=2*p+1,T=15,g=16,S=7,A=256,w=16,R=17,D=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],$=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],O=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],K=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(p+2));a(Q);var y=new Array(2*u);a(y);var F=new Array(512);a(F);var d=new Array(256);a(d);var M=new Array(_);a(M);var te,j,re,H=new Array(u);function ee(k,N,B,U,C){this.static_tree=k,this.extra_bits=N,this.extra_base=B,this.elems=U,this.max_length=C,this.has_stree=k&&k.length}function I(k,N){this.dyn_tree=k,this.max_code=0,this.stat_desc=N}function v(k){return k<256?F[k]:F[256+(k>>>7)]}function J(k,N){k.pending_buf[k.pending++]=255&N,k.pending_buf[k.pending++]=N>>>8&255}function Y(k,N,B){k.bi_valid>g-B?(k.bi_buf|=N<<k.bi_valid&65535,J(k,k.bi_buf),k.bi_buf=N>>g-k.bi_valid,k.bi_valid+=B-g):(k.bi_buf|=N<<k.bi_valid&65535,k.bi_valid+=B)}function W(k,N,B){Y(k,B[2*N],B[2*N+1])}function Te(k,N){for(var B=0;B|=1&k,k>>>=1,B<<=1,0<--N;);return B>>>1}function be(k,N,B){var U,C,G=new Array(T+1),q=0;for(U=1;U<=T;U++)G[U]=q=q+B[U-1]<<1;for(C=0;C<=N;C++){var Z=k[2*C+1];Z!==0&&(k[2*C]=Te(G[Z]++,Z))}}function ie(k){var N;for(N=0;N<p;N++)k.dyn_ltree[2*N]=0;for(N=0;N<u;N++)k.dyn_dtree[2*N]=0;for(N=0;N<m;N++)k.bl_tree[2*N]=0;k.dyn_ltree[2*A]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function ue(k){8<k.bi_valid?J(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function Ee(k,N,B,U){var C=2*N,G=2*B;return k[C]<k[G]||k[C]===k[G]&&U[N]<=U[B]}function Se(k,N,B){for(var U=k.heap[B],C=B<<1;C<=k.heap_len&&(C<k.heap_len&&Ee(N,k.heap[C+1],k.heap[C],k.depth)&&C++,!Ee(N,U,k.heap[C],k.depth));)k.heap[B]=k.heap[C],B=C,C<<=1;k.heap[B]=U}function Le(k,N,B){var U,C,G,q,Z=0;if(k.last_lit!==0)for(;U=k.pending_buf[k.d_buf+2*Z]<<8|k.pending_buf[k.d_buf+2*Z+1],C=k.pending_buf[k.l_buf+Z],Z++,U===0?W(k,C,N):(W(k,(G=d[C])+h+1,N),(q=P[G])!==0&&Y(k,C-=M[G],q),W(k,G=v(--U),B),(q=$[G])!==0&&Y(k,U-=H[G],q)),Z<k.last_lit;);W(k,A,N)}function ve(k,N){var B,U,C,G=N.dyn_tree,q=N.stat_desc.static_tree,Z=N.stat_desc.has_stree,X=N.stat_desc.elems,_e=-1;for(k.heap_len=0,k.heap_max=f,B=0;B<X;B++)G[2*B]!==0?(k.heap[++k.heap_len]=_e=B,k.depth[B]=0):G[2*B+1]=0;for(;k.heap_len<2;)G[2*(C=k.heap[++k.heap_len]=_e<2?++_e:0)]=1,k.depth[C]=0,k.opt_len--,Z&&(k.static_len-=q[2*C+1]);for(N.max_code=_e,B=k.heap_len>>1;1<=B;B--)Se(k,G,B);for(C=X;B=k.heap[1],k.heap[1]=k.heap[k.heap_len--],Se(k,G,1),U=k.heap[1],k.heap[--k.heap_max]=B,k.heap[--k.heap_max]=U,G[2*C]=G[2*B]+G[2*U],k.depth[C]=(k.depth[B]>=k.depth[U]?k.depth[B]:k.depth[U])+1,G[2*B+1]=G[2*U+1]=C,k.heap[1]=C++,Se(k,G,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(oe,we){var je,Oe,$e,ke,Je,dt,ze=we.dyn_tree,Vt=we.max_code,or=we.stat_desc.static_tree,ar=we.stat_desc.has_stree,lr=we.stat_desc.extra_bits,Xt=we.stat_desc.extra_base,He=we.stat_desc.max_length,Qe=0;for(ke=0;ke<=T;ke++)oe.bl_count[ke]=0;for(ze[2*oe.heap[oe.heap_max]+1]=0,je=oe.heap_max+1;je<f;je++)He<(ke=ze[2*ze[2*(Oe=oe.heap[je])+1]+1]+1)&&(ke=He,Qe++),ze[2*Oe+1]=ke,Vt<Oe||(oe.bl_count[ke]++,Je=0,Xt<=Oe&&(Je=lr[Oe-Xt]),dt=ze[2*Oe],oe.opt_len+=dt*(ke+Je),ar&&(oe.static_len+=dt*(or[2*Oe+1]+Je)));if(Qe!==0){do{for(ke=He-1;oe.bl_count[ke]===0;)ke--;oe.bl_count[ke]--,oe.bl_count[ke+1]+=2,oe.bl_count[He]--,Qe-=2}while(0<Qe);for(ke=He;ke!==0;ke--)for(Oe=oe.bl_count[ke];Oe!==0;)Vt<($e=oe.heap[--je])||(ze[2*$e+1]!==ke&&(oe.opt_len+=(ke-ze[2*$e+1])*ze[2*$e],ze[2*$e+1]=ke),Oe--)}})(k,N),be(G,_e,k.bl_count)}function c(k,N,B){var U,C,G=-1,q=N[1],Z=0,X=7,_e=4;for(q===0&&(X=138,_e=3),N[2*(B+1)+1]=65535,U=0;U<=B;U++)C=q,q=N[2*(U+1)+1],++Z<X&&C===q||(Z<_e?k.bl_tree[2*C]+=Z:C!==0?(C!==G&&k.bl_tree[2*C]++,k.bl_tree[2*w]++):Z<=10?k.bl_tree[2*R]++:k.bl_tree[2*D]++,G=C,_e=(Z=0)===q?(X=138,3):C===q?(X=6,3):(X=7,4))}function z(k,N,B){var U,C,G=-1,q=N[1],Z=0,X=7,_e=4;for(q===0&&(X=138,_e=3),U=0;U<=B;U++)if(C=q,q=N[2*(U+1)+1],!(++Z<X&&C===q)){if(Z<_e)for(;W(k,C,k.bl_tree),--Z!=0;);else C!==0?(C!==G&&(W(k,C,k.bl_tree),Z--),W(k,w,k.bl_tree),Y(k,Z-3,2)):Z<=10?(W(k,R,k.bl_tree),Y(k,Z-3,3)):(W(k,D,k.bl_tree),Y(k,Z-11,7));G=C,_e=(Z=0)===q?(X=138,3):C===q?(X=6,3):(X=7,4)}}a(H);var x=!1;function E(k,N,B,U){Y(k,(l<<1)+(U?1:0),3),(function(C,G,q,Z){ue(C),J(C,q),J(C,~q),s.arraySet(C.pending_buf,C.window,G,q,C.pending),C.pending+=q})(k,N,B)}r._tr_init=function(k){x||((function(){var N,B,U,C,G,q=new Array(T+1);for(C=U=0;C<_-1;C++)for(M[C]=U,N=0;N<1<<P[C];N++)d[U++]=C;for(d[U-1]=C,C=G=0;C<16;C++)for(H[C]=G,N=0;N<1<<$[C];N++)F[G++]=C;for(G>>=7;C<u;C++)for(H[C]=G<<7,N=0;N<1<<$[C]-7;N++)F[256+G++]=C;for(B=0;B<=T;B++)q[B]=0;for(N=0;N<=143;)Q[2*N+1]=8,N++,q[8]++;for(;N<=255;)Q[2*N+1]=9,N++,q[9]++;for(;N<=279;)Q[2*N+1]=7,N++,q[7]++;for(;N<=287;)Q[2*N+1]=8,N++,q[8]++;for(be(Q,p+1,q),N=0;N<u;N++)y[2*N+1]=5,y[2*N]=Te(N,5);te=new ee(Q,P,h+1,p,T),j=new ee(y,$,0,u,T),re=new ee(new Array(0),O,0,m,S)})(),x=!0),k.l_desc=new I(k.dyn_ltree,te),k.d_desc=new I(k.dyn_dtree,j),k.bl_desc=new I(k.bl_tree,re),k.bi_buf=0,k.bi_valid=0,ie(k)},r._tr_stored_block=E,r._tr_flush_block=function(k,N,B,U){var C,G,q=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(Z){var X,_e=4093624447;for(X=0;X<=31;X++,_e>>>=1)if(1&_e&&Z.dyn_ltree[2*X]!==0)return i;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return o;for(X=32;X<h;X++)if(Z.dyn_ltree[2*X]!==0)return o;return i})(k)),ve(k,k.l_desc),ve(k,k.d_desc),q=(function(Z){var X;for(c(Z,Z.dyn_ltree,Z.l_desc.max_code),c(Z,Z.dyn_dtree,Z.d_desc.max_code),ve(Z,Z.bl_desc),X=m-1;3<=X&&Z.bl_tree[2*K[X]+1]===0;X--);return Z.opt_len+=3*(X+1)+5+5+4,X})(k),C=k.opt_len+3+7>>>3,(G=k.static_len+3+7>>>3)<=C&&(C=G)):C=G=B+5,B+4<=C&&N!==-1?E(k,N,B,U):k.strategy===4||G===C?(Y(k,2+(U?1:0),3),Le(k,Q,y)):(Y(k,4+(U?1:0),3),(function(Z,X,_e,oe){var we;for(Y(Z,X-257,5),Y(Z,_e-1,5),Y(Z,oe-4,4),we=0;we<oe;we++)Y(Z,Z.bl_tree[2*K[we]+1],3);z(Z,Z.dyn_ltree,X-1),z(Z,Z.dyn_dtree,_e-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,q+1),Le(k,k.dyn_ltree,k.dyn_dtree)),ie(k),U&&ue(k)},r._tr_tally=function(k,N,B){return k.pending_buf[k.d_buf+2*k.last_lit]=N>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&N,k.pending_buf[k.l_buf+k.last_lit]=255&B,k.last_lit++,N===0?k.dyn_ltree[2*B]++:(k.matches++,N--,k.dyn_ltree[2*(d[B]+h+1)]++,k.dyn_dtree[2*v(N)]++),k.last_lit===k.lit_bufsize-1},r._tr_align=function(k){Y(k,2,3),W(k,A,Q),(function(N){N.bi_valid===16?(J(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(i,o){if(!i.setImmediate){var a,l,_,h,p=1,u={},m=!1,f=i.document,T=Object.getPrototypeOf&&Object.getPrototypeOf(i);T=T&&T.setTimeout?T:i,a={}.toString.call(i.process)==="[object process]"?function(w){process.nextTick(function(){S(w)})}:(function(){if(i.postMessage&&!i.importScripts){var w=!0,R=i.onmessage;return i.onmessage=function(){w=!1},i.postMessage("","*"),i.onmessage=R,w}})()?(h="setImmediate$"+Math.random()+"$",i.addEventListener?i.addEventListener("message",A,!1):i.attachEvent("onmessage",A),function(w){i.postMessage(h+w,"*")}):i.MessageChannel?((_=new MessageChannel).port1.onmessage=function(w){S(w.data)},function(w){_.port2.postMessage(w)}):f&&"onreadystatechange"in f.createElement("script")?(l=f.documentElement,function(w){var R=f.createElement("script");R.onreadystatechange=function(){S(w),R.onreadystatechange=null,l.removeChild(R),R=null},l.appendChild(R)}):function(w){setTimeout(S,0,w)},T.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var R=new Array(arguments.length-1),D=0;D<R.length;D++)R[D]=arguments[D+1];var P={callback:w,args:R};return u[p]=P,a(p),p++},T.clearImmediate=g}function g(w){delete u[w]}function S(w){if(m)setTimeout(S,0,w);else{var R=u[w];if(R){m=!0;try{(function(D){var P=D.callback,$=D.args;switch($.length){case 0:P();break;case 1:P($[0]);break;case 2:P($[0],$[1]);break;case 3:P($[0],$[1],$[2]);break;default:P.apply(o,$)}})(R)}finally{g(w),m=!1}}}}function A(w){w.source===i&&typeof w.data=="string"&&w.data.indexOf(h)===0&&S(+w.data.slice(h.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Ge<"u"?Ge:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(ft)),ft.exports}var sr=rr(),ir=et(sr);self.onmessage=b=>{if(b.data.type!=="rpc_response")try{const t=b.data,e=JSON.parse(t.options);nr(t.regularDefinitions,t.tokens,t.nonTerminals,t.grammar,e,t.necessarioRecriar,t.fa,t.g).then(([n,,r,s])=>{if(n!=null)try{const i=new ir;let o=null;if(r&&(o=i.folder(e.pkgName),o==null))throw Error("FLD é nulo");for(const[a,l]of n.entries())r&&o!=null?o.file(a,l):i.file(a,l);s!=null&&i.file("main.py",s),i.generateAsync({type:"blob"}).then(a=>{const l=URL.createObjectURL(a);self.postMessage({success:!0,result:l})})}catch(i){self.postMessage({success:!1,error:i.message})}}).catch(n=>self.postMessage({success:!1,error:n.message}))}catch(t){self.postMessage({success:!1,error:t})}}})();
