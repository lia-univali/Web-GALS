(function(){"use strict";var Ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}function fn(E){if(Object.prototype.hasOwnProperty.call(E,"__esModule"))return E;var e=E.default;if(typeof e=="function"){var t=function n(){var s=!1;try{s=this instanceof n}catch{}return s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(E).forEach(function(n){var s=Object.getOwnPropertyDescriptor(E,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return E[n]}})}),t}var it={},ot=function(E,e){return ot=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},ot(E,e)};function St(E,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ot(E,e);function t(){this.constructor=E}E.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var qe=function(){return qe=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qe.apply(this,arguments)};function kt(E,e){var t={};for(var n in E)Object.prototype.hasOwnProperty.call(E,n)&&e.indexOf(n)<0&&(t[n]=E[n]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(E);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(E,n[s])&&(t[n[s]]=E[n[s]]);return t}function Et(E,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(E,e,t,n);else for(var o=E.length-1;o>=0;o--)(i=E[o])&&(r=(s<3?i(r):s>3?i(e,t,r):i(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}function bt(E,e){return function(t,n){e(t,n,E)}}function dn(E,e,t,n,s,r){function i(g){if(g!==void 0&&typeof g!="function")throw new TypeError("Function expected");return g}for(var o=n.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!e&&E?n.static?E:E.prototype:null,_=e||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),u,p=!1,c=t.length-1;c>=0;c--){var m={};for(var f in n)m[f]=f==="access"?{}:n[f];for(var f in n.access)m.access[f]=n.access[f];m.addInitializer=function(g){if(p)throw new TypeError("Cannot add initializers after decoration has completed");r.push(i(g||null))};var T=(0,t[c])(o==="accessor"?{get:_.get,set:_.set}:_[a],m);if(o==="accessor"){if(T===void 0)continue;if(T===null||typeof T!="object")throw new TypeError("Object expected");(u=i(T.get))&&(_.get=u),(u=i(T.set))&&(_.set=u),(u=i(T.init))&&s.unshift(u)}else(u=i(T))&&(o==="field"?s.unshift(u):_[a]=u)}l&&Object.defineProperty(l,n.name,_),p=!0}function pn(E,e,t){for(var n=arguments.length>2,s=0;s<e.length;s++)t=n?e[s].call(E,t):e[s].call(E);return n?t:void 0}function _n(E){return typeof E=="symbol"?E:"".concat(E)}function mn(E,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(E,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function At(E,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(E,e)}function wt(E,e,t,n){function s(r){return r instanceof t?r:new t(function(i){i(r)})}return new(t||(t=Promise))(function(r,i){function o(_){try{l(n.next(_))}catch(u){i(u)}}function a(_){try{l(n.throw(_))}catch(u){i(u)}}function l(_){_.done?r(_.value):s(_.value).then(o,a)}l((n=n.apply(E,e||[])).next())})}function yt(E,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(l){return function(_){return a([l,_])}}function a(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(t=0)),t;)try{if(n=1,s&&(r=l[0]&2?s.return:l[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,l[1])).done)return r;switch(s=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,s=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){t.label=l[1];break}if(l[0]===6&&t.label<r[1]){t.label=r[1],r=l;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(l);break}r[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(E,t)}catch(_){l=[6,_],s=0}finally{n=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Ve=Object.create?(function(E,e,t,n){n===void 0&&(n=t);var s=Object.getOwnPropertyDescriptor(e,t);(!s||("get"in s?!e.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(E,n,s)}):(function(E,e,t,n){n===void 0&&(n=t),E[n]=e[t]});function Nt(E,e){for(var t in E)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Ve(e,E,t)}function Xe(E){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&E[e],n=0;if(t)return t.call(E);if(E&&typeof E.length=="number")return{next:function(){return E&&n>=E.length&&(E=void 0),{value:E&&E[n++],done:!E}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function at(E,e){var t=typeof Symbol=="function"&&E[Symbol.iterator];if(!t)return E;var n=t.call(E),s,r=[],i;try{for(;(e===void 0||e-- >0)&&!(s=n.next()).done;)r.push(s.value)}catch(o){i={error:o}}finally{try{s&&!s.done&&(t=n.return)&&t.call(n)}finally{if(i)throw i.error}}return r}function Rt(){for(var E=[],e=0;e<arguments.length;e++)E=E.concat(at(arguments[e]));return E}function Ct(){for(var E=0,e=0,t=arguments.length;e<t;e++)E+=arguments[e].length;for(var n=Array(E),s=0,e=0;e<t;e++)for(var r=arguments[e],i=0,o=r.length;i<o;i++,s++)n[s]=r[i];return n}function vt(E,e,t){if(t||arguments.length===2)for(var n=0,s=e.length,r;n<s;n++)(r||!(n in e))&&(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return E.concat(r||Array.prototype.slice.call(e))}function Ue(E){return this instanceof Ue?(this.v=E,this):new Ue(E)}function It(E,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(E,e||[]),s,r=[];return s={},o("next"),o("throw"),o("return",i),s[Symbol.asyncIterator]=function(){return this},s;function i(c){return function(m){return Promise.resolve(m).then(c,u)}}function o(c,m){n[c]&&(s[c]=function(f){return new Promise(function(T,g){r.push([c,f,T,g])>1||a(c,f)})},m&&(s[c]=m(s[c])))}function a(c,m){try{l(n[c](m))}catch(f){p(r[0][3],f)}}function l(c){c.value instanceof Ue?Promise.resolve(c.value.v).then(_,u):p(r[0][2],c)}function _(c){a("next",c)}function u(c){a("throw",c)}function p(c,m){c(m),r.shift(),r.length&&a(r[0][0],r[0][1])}}function xt(E){var e,t;return e={},n("next"),n("throw",function(s){throw s}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(s,r){e[s]=E[s]?function(i){return(t=!t)?{value:Ue(E[s](i)),done:!1}:r?r(i):i}:r}}function Lt(E){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=E[Symbol.asyncIterator],t;return e?e.call(E):(E=typeof Xe=="function"?Xe(E):E[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=E[r]&&function(i){return new Promise(function(o,a){i=E[r](i),s(o,a,i.done,i.value)})}}function s(r,i,o,a){Promise.resolve(a).then(function(l){r({value:l,done:o})},i)}}function Ot(E,e){return Object.defineProperty?Object.defineProperty(E,"raw",{value:e}):E.raw=e,E}var gn=Object.create?(function(E,e){Object.defineProperty(E,"default",{enumerable:!0,value:e})}):function(E,e){E.default=e};function Pt(E){if(E&&E.__esModule)return E;var e={};if(E!=null)for(var t in E)t!=="default"&&Object.prototype.hasOwnProperty.call(E,t)&&Ve(e,E,t);return gn(e,E),e}function Ft(E){return E&&E.__esModule?E:{default:E}}function Dt(E,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?E!==e||!n:!e.has(E))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(E):n?n.value:e.get(E)}function Mt(E,e,t,n,s){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?E!==e||!s:!e.has(E))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?s.call(E,t):s?s.value=t:e.set(E,t),t}function zt(E,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof E=="function"?e===E:E.has(e)}function Bt(E,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var n,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=e[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=e[Symbol.dispose],t&&(s=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");s&&(n=function(){try{s.call(this)}catch(r){return Promise.reject(r)}}),E.stack.push({value:e,dispose:n,async:t})}else t&&E.stack.push({async:!0});return e}var Tn=typeof SuppressedError=="function"?SuppressedError:function(E,e,t){var n=new Error(t);return n.name="SuppressedError",n.error=E,n.suppressed=e,n};function Ut(E){function e(n){E.error=E.hasError?new Tn(n,E.error,"An error was suppressed during disposal."):n,E.hasError=!0}function t(){for(;E.stack.length;){var n=E.stack.pop();try{var s=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(s).then(t,function(r){return e(r),t()})}catch(r){e(r)}}if(E.hasError)throw E.error}return t()}var Sn={__extends:St,__assign:qe,__rest:kt,__decorate:Et,__param:bt,__metadata:At,__awaiter:wt,__generator:yt,__createBinding:Ve,__exportStar:Nt,__values:Xe,__read:at,__spread:Rt,__spreadArrays:Ct,__spreadArray:vt,__await:Ue,__asyncGenerator:It,__asyncDelegator:xt,__asyncValues:Lt,__makeTemplateObject:Ot,__importStar:Pt,__importDefault:Ft,__classPrivateFieldGet:Dt,__classPrivateFieldSet:Mt,__classPrivateFieldIn:zt,__addDisposableResource:Bt,__disposeResources:Ut},kn=Object.freeze({__proto__:null,__addDisposableResource:Bt,get __assign(){return qe},__asyncDelegator:xt,__asyncGenerator:It,__asyncValues:Lt,__await:Ue,__awaiter:wt,__classPrivateFieldGet:Dt,__classPrivateFieldIn:zt,__classPrivateFieldSet:Mt,__createBinding:Ve,__decorate:Et,__disposeResources:Ut,__esDecorate:dn,__exportStar:Nt,__extends:St,__generator:yt,__importDefault:Ft,__importStar:Pt,__makeTemplateObject:Ot,__metadata:At,__param:bt,__propKey:_n,__read:at,__rest:kt,__runInitializers:pn,__setFunctionName:mn,__spread:Rt,__spreadArray:vt,__spreadArrays:Ct,__values:Xe,default:Sn}),En=fn(kn),Fe={},jt;function bn(){return jt||(jt=1,Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.isDate=Fe.isComparable=Fe.isIterable=void 0,Fe.isIterable=E=>!(E==null||E[Symbol.iterator]==null),Fe.isComparable=E=>{const e=Object.prototype.toString,t=E;return t.compare!=null&&e.call(t.compare).endsWith("Function]")},Fe.isDate=E=>Object.prototype.toString.call(E).endsWith("Date]")),Fe}var lt={},$t;function An(){return $t||($t=1,Object.defineProperty(lt,"__esModule",{value:!0})),lt}var Ht;function wn(){return Ht||(Ht=1,(function(E){Object.defineProperty(E,"__esModule",{value:!0});const e=En,t=bn(),o={number:(_,u)=>_-u,string:(_,u)=>_.localeCompare(u),Date:(_,u)=>_.getTime()-u.getTime(),bigInt:(_,u)=>Number(_-u),none:()=>0},a=_=>{if(typeof _=="number")return o.number;if(typeof _=="string")return o.string;if(typeof _=="bigint")return o.bigInt;if(t.isDate(_))return o.Date;if(t.isComparable(_))return(u,p)=>u.compare(p);throw new Error("Cannot sort keys in this map. You have to specify compareFn if the type of key in this map is not number, string, or Date.")};class l extends Map{constructor(u,p){super(),this.specifiedCompareFn=!1,this.isCompareFn=c=>typeof c=="function",this.compareFn=o.none,this.sortedKeys=[],t.isIterable(u)&&this._constructor(u,p),this.isCompareFn(u)&&this._constructor(null,u),u==null&&this._constructor(null,p)}get comparator(){return this.compareFn}compare(u,p){return Math.sign(this.compareFn(u,p))}_constructor(u,p){if(this.compareFn=p??o.none,this.specifiedCompareFn=p!=null,u!=null)for(const c of u)this.set(...c)}static fromMap(u,p){const c=new l(p);return c.setAll(u),c}duplicate(){return l.fromMap(this,this.compareFn)}toMap(){const u=new Map,p=Array.from(super.entries());return p.sort((c,m)=>this.compareFn(c[0],m[0])),p.forEach(([c,m])=>{u.set(c,m)}),u}reverseKeys(){return[...this.sortedKeys].reverse().values()}get(u){const p=this.sortedKeys.find(c=>this.comparator(c,u)===0);if(p!=null)return super.get(p)}set(u,p){this.sortedKeys.length===0&&!this.specifiedCompareFn&&(this.compareFn=a(u),this.specifiedCompareFn=!0);const c=this.sortedKeys.find(m=>this.compareFn(m,u)===0);return c==null?(this.sortedKeys.push(u),super.set(u,p)):super.set(c,p),this.sortedKeys.sort(this.compareFn),this}setAll(u){return u.forEach((p,c)=>{this.set(c,p)}),this}delete(u){return super.delete(u)?(this.sortedKeys=this.sortedKeys.filter(p=>this.compare(p,u)!==0),!0):!1}clear(){super.clear(),this.sortedKeys=[]}keys(){return this.sortedKeys.values()}values(){return this.sortedKeys.map(u=>super.get(u)).values()}entries(){return this.toMap().entries()}firstEntry(){const u=this.firstKey();if(u==null)return;const p=this.get(u);return p===void 0?void 0:[u,p]}firstKey(){return this.sortedKeys[0]}lastEntry(){const u=this.lastKey();if(u==null)return;const p=this.get(u);return p===void 0?void 0:[u,p]}lastKey(){return[...this.sortedKeys].reverse()[0]}shiftEntry(){const u=this.firstEntry();if(u!=null)return this.delete(u[0]),u}popEntry(){const u=this.lastEntry();if(u!=null)return this.delete(u[0]),u}floorEntry(u){const p=this.floorKey(u);if(p!=null){const c=this.get(p);return c===void 0?void 0:[p,c]}}floorKey(u){return this.sortedKeys.filter(c=>this.compare(c,u)<=0).reverse()[0]}ceilingEntry(u){const p=this.ceilingKey(u);if(p!=null){const c=this.get(p);return c===void 0?void 0:[p,c]}}ceilingKey(u){return this.sortedKeys.filter(c=>this.compare(c,u)>=0)[0]}lowerEntry(u){const p=this.lowerKey(u);if(p!=null){const c=this.get(p);return c===void 0?void 0:[p,c]}}lowerKey(u){return this.sortedKeys.filter(c=>this.compare(c,u)<0).reverse()[0]}higherEntry(u){const p=this.higherKey(u);if(p!=null){const c=this.get(p);return c===void 0?void 0:[p,c]}}higherKey(u){return this.sortedKeys.filter(c=>this.compare(c,u)>0)[0]}splitLower(u,p=!0){const c=Array.from(this.entries()).filter(m=>{const f=this.compare(m[0],u)<0;return p?f||this.compare(m[0],u)===0:f});return new l(c,this.compareFn)}splitHigher(u,p=!0){const c=Array.from(this.entries()).filter(m=>{const f=this.compare(m[0],u)>0;return p?f||this.compare(m[0],u)===0:f});return new l(c,this.compareFn)}forEach(u,p){Array.from(this.entries()).forEach(([c,m])=>{u(m,c,this)},p)}}E.default=l,e.__exportStar(An(),E)})(it)),it}var yn=wn(),De=rt(yn);class Be{constructor(e=1/0){this.capacity=e}capacity;storage=[];push(e){if(this.size()===this.capacity)throw Error("Stack has reached max capacity, you cannot add more items");this.storage.push(e)}pop(){return this.storage.pop()}get(e){return this.storage[e]}peek(){return this.storage[this.size()-1]}size(){return this.storage.length}empty(){return this.storage.length==0}clear(){this.storage=[]}}class ce{items;constructor(e){e!=null?this.items=new Array(e):this.items=new Array}size(){return this.items.length}set(e,t){this.items[e]=t}setItems(e){e.forEach(t=>{this.items.push(t)})}add(e){this.items.push(e)}addAll(e){this.items.concat(e.items)}get(e){return this.items[e]}remove(e){const t=this.items.indexOf(e);return t==-1?!1:(this.items.splice(t,1),!0)}removeByIndex(e){const t=this.items[e];return this.items.splice(e,1),t}contains(e){return this.items.includes(e)}indexOf(e){return this.items.indexOf(e)}toArray(){return this.items}clear(){this.items.splice(0,this.items.length)}toString(){return`[${this.items.toString()}]`}toJSON(){return{values:this.items}}[Symbol.iterator](){return this.items.values()}}class le{_elements;[Symbol.toStringTag]="OrderedIntegerSet";constructor(e){e===void 0?this._elements=[]:e instanceof le?this._elements=[...e._elements]:this._elements=[e]}static fromArray(e){const t=new le;return t.addAllArray(e),t}clone(){return new le(this)}get size(){return this._elements.length}isEmpty(){return this._elements.length===0}add(e){for(let t=0;t<this._elements.length;t++){if(this._elements[t]==e)return!1;if(this._elements[t]>e)return this._elements.splice(t,0,e),!0}return this._elements.push(e),!0}first(){return this._elements.length==0?-1:this._elements[0]}contains(e){return this._elements.includes(e)}has(e){return this._elements.includes(e)}delete(e){for(let t=0;t<this._elements.length;t++)if(this._elements[t]===e)return this._elements.splice(t,1),!0;return!1}clear(){this._elements.length=0}addAll(e){const t=this._elements.length;if(this._elements[this._elements.length-1]<e._elements[0])return this._elements.push(...e._elements),t!=this._elements.length;let n=0,s=0;const r=[];for(;n<this._elements.length||s<e._elements.length;){if(n==this._elements.length){for(;s<e._elements.length;)r.push(e._elements[s++]);break}if(s==e._elements.length){for(;n<this._elements.length;)r.push(this._elements[n++]);break}this._elements[n]==e._elements[s]?(r.push(this._elements[n]),n++,s++):this._elements[n]<e._elements[s]?r.push(this._elements[n++]):r.push(e._elements[s++])}return this._elements=r,t!=this._elements.length}addAllArray(e){const t=this._elements.length;return e.forEach(n=>this.add(n)),t!=this._elements.length}intersection(e,t=!0){const n=this._elements.length,s=[];for(const r of e._elements)this.contains(r)&&s.push(r);return t?(this._elements=s,n!=this._elements.length):le.fromArray(s)}list(){return this._elements}length(){return this._elements.length}entries(){return this._elements.entries()}keys(){return this._elements.keys()}values(){return this._elements.values()}equals(e){const t=e._elements,n=this._elements;return n.length!==t.length?!1:n.every((s,r)=>s===t[r])}[Symbol.iterator](){return this._elements.values()}toJSON(){return{values:this._elements}}toString(){return`(${this._elements.toString()})`}}class ye{_value;_parent;_children;constructor(e,t){this._value=e===void 0?null:e,this._parent=t===void 0?null:t,this._children=[]}add(e){return e.parent=this,this._children.push(e),e}get value(){return this._value}get parent(){return this._parent}get children(){return this._children}set value(e){this._value=e}set parent(e){this._parent=e}set children(e){this._children=e}toJSON(){return{value:this.value,children:this.children}}}class se extends Error{_position;constructor(e,t){super(e),t==null?this._position=-1:this._position=t,Object.setPrototypeOf(this,se.prototype)}get position(){return this._position}set position(e){this._position=e}toString(){return this.message+", em "+this._position}}class fe extends se{constructor(e,t){t==null?super(e):super(e,t)}}class Te extends se{constructor(e,t){t==null?super(e):super(e,t)}}class Z extends se{constructor(e,t){t==null?super(e):super(e,t)}}class xe extends Error{constructor(e){super(e)}}class de{_id;_lexeme;_position;constructor(e,t,n){this._id=e,this._lexeme=t,this._position=n}get id(){return this._id}get lexeme(){return this._lexeme}get position(){return this._position}toString(){return this._id+"("+this._lexeme+")"}}class Le{static translateString(e){let t="";for(let n=0;n<e.length;n++){const s=e.charAt(n);switch(s){case'"':t+="&quot;";break;case"&":t+="&amp;";break;case"<":t+="&lt;";break;case">":t+="&gt;";break;default:t+=s}}return t}}class He{_fa;_input="";_position=0;_sensitive=!0;constructor(e,t){this._fa=e,this._sensitive=t}analyse(e){let t=0;for(let n=0;n<e.length;n++)if(t=this._fa.nextState(e.charAt(n),t),t<=0)return-1;return this._fa.tokenForState(t)}setInput(e){this._input=e,this._position=0}nextToken(){if(!this.hasInput())return null;const e=this._position;let t=0,n=0,s=-1,r=-1,i=-1,o=-1;for(;this.hasInput()&&(n=t,t=this._fa.nextState(this.nextChar(),t),!(t<0));)this._fa.tokenForState(t)>=0&&(s=t,r=this._position),this._fa.isContext(t)&&(i=t,o=this._position);if(s<0||s!=t&&this._fa.tokenForState(n)==-2)throw new fe(this._fa.getError(n),e);i!=-1&&this._fa.getOrigin(s)==i&&(r=o),this._position=r;let a=this._fa.tokenForState(s);if(a==0)return this.nextToken();{const l=this._input.substring(e,r);return a=this.lookupToken(a,l),new de(a,l,e)}}lookupToken(e,t){let n=this._fa.getSpecialCasesIndexes()[e][0],s=this._fa.getSpecialCasesIndexes()[e][1]-1;for(this._sensitive||(t=t.toUpperCase());n<=s;){const r=Math.floor((n+s)/2),i=this.compareValues(this._fa.specialCases[r].key,t);if(i==0)return this._fa.specialCases[r].value;i<0?n=r+1:s=r-1}return e}hasInput(){return this._position<this._input.length}nextChar(){return this.hasInput()?this._input.charAt(this._position++):"￿"}compareValues(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const r=e.charCodeAt(s),i=t.charCodeAt(s);if(r!=i)return r-i}return e.length-t.length}}class Gt{key;value;constructor(e,t){this.key=e,this.value=t}toString(){return"["+this.key+"->"+this.value+"]"}}class Nn{_transitions;_finals;_context;_alphabet;_tokenNames;_errors=[];_hasContext=!1;_specialCasesIndexes;_specialCases;constructor(e,t,n,s,r,i,o,a){this._alphabet=e,this._transitions=t,this._finals=n,this._context=i,this._specialCasesIndexes=s,this._specialCases=r,this._tokenNames=o;for(const l of i)if(l[0]==1){this._hasContext=!0;break}this.buildErrors(),this.checkSpecialCases(a)}checkSpecialCases(e){const t=new He(this,e);for(let n=0;n<this._specialCasesIndexes.length;n++){const s=this._specialCasesIndexes[n];for(let r=s[0];r<s[1];r++)if(t.analyse(this._specialCases[r].key)!=n)throw new Te('O valor "'+this._specialCases[r].key+`" não é válido como caso especial de '`+this._tokenNames.get(n-2)+"', na definição de '"+this._tokenNames.get(this._specialCases[r].value-2)+"'")}}nextState(e,t){const n=this._transitions.get(t).get(e);return n??-1}tokenForState(e){return e<0||e>=this._finals.length?-1:this._finals[e]}finalStatesFromState(e){const t=new Set;t.add(e);let n=!0;for(;n;){n=!1;for(const r of t){for(const i of this._alphabet.list()){const o=String.fromCodePoint(i),a=this.nextState(o,r);if(a!=-1&&!t.has(a)){t.add(a),n=!0;break}}if(n)break}}const s=new Set;for(const r of t)this.tokenForState(r)>=0&&s.add(r);return s}tokensFromState(e){const t=this.finalStatesFromState(e),n=new Set;for(const s of t){const r=this.tokenForState(s);r>=0&&n.add(r)}return n}buildErrors(){this._errors=[],this._errors[0]="Caractere não esperado";for(let e=1;e<this._transitions.size();e++)if(this.tokenForState(e)>=0)this._errors[e]="";else{const t=this.tokensFromState(e);let n="Erro identificando ";for(const s of t)s>0?n+=this._tokenNames.get(s-2):n+="<ignorar>",n+=" ou ";n=n.substring(0,n.length-4),this._errors[e]=n.toString()}}get transitions(){return this._transitions}get tokens(){return this._tokenNames}get specialCases(){return this._specialCases}get errors(){return this._errors}getError(e){const t=this._errors[e];if(t!=null)return t;throw Error("Sem erros")}getSpecialCasesIndexes(){return this._specialCasesIndexes}isContext(e){return this._context[e][0]==1}getOrigin(e){return this._context[e][1]}hasContext(){return this._hasContext}translateString(e){let t="";for(let n=0;n<e.length;n++){const s=e.charAt(n);switch(s){case'"':t+="&quot;";break;case"&":t+="&amp;";break;case"<":t+="&lt;";break;case">":t+="&gt;";break;default:t+=s}}return t}asHTML(){let e="";e+='<HTML><HEAD><TITLE> Tabela de Transições </TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',e+='<TR align=center><TD rowspan="2" bgcolor=black><FONT color=white><B>ESTADO</B></FONT></TD><TD rowspan="2" bgcolor=black><FONT color=white><B>TOKEN<BR>RETORNADO</B></FONT></TD><TD colspan="'+this._alphabet.size+'" bgcolor=black><FONT color=white><B>ENTRADA</B></FONT></TD></TR><TR align=center>';for(const t of this._alphabet.list()){const n=this.escapeSpecialCharacters(String.fromCodePoint(t));e+="<TD bgcolor=#99FF66 nowrap><B>"+this.translateChar(n)+"</B></TD>"}e+="</TR>";for(let t=0;t<this._transitions.size();t++){e+="<TR align=center><TD bgcolor=#99FF66><B>"+t+"</B></TD>";const n=this._finals[t];let s=null;if(n>0){s==null&&(s="#FFFFCC");let i=Le.translateString(this._tokenNames.get(n-2));this.getOrigin(t)>=0&&(i+=" / "+this.getOrigin(t)),e+="<TD bgcolor="+s+" nowrap>"+i+"</TD>"}else n==0?(s==null&&(s="#99CCFF"),e+="<TD bgcolor="+s+"><B>:</B></TD>"):n==-2?e+="<TD bgcolor=#FF0000>?</TD>":(s==null&&(s="#FFCC99"),e+="<TD bgcolor="+s+">?</TD>");const r=this._transitions.get(t);for(const i of this._alphabet.list()){e+="<TD width=40 bgcolor=#F5F5F5>";const o=r.get(String.fromCodePoint(i));o!=null&&o>=0?e+=o:e+="-",e+="</TD>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e}escapeSpecialCharacters(e){return e.replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\s/g,"' '")}translateChar(e){switch(e){case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case" ":return"' '";case'"':return"&quot;";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:{const t=e.charCodeAt(0);return t>=32&&t<=126||t>=161&&t<=255?e:t.toString()}}}}class L{scannerName="Lexico";parserName="Sintatico";semanticName="Semantico";pkgName="";generateScanner=!0;generateParser=!0;static LANG_JAVA=0;static LANG_CPP=1;static LANG_DELPHI=2;static LANG_PYTHON=3;static LANG_RUST=4;language=L.LANG_JAVA;static PARSER_LR=0;static PARSER_LALR=1;static PARSER_SLR=2;static PARSER_LL=3;static PARSER_REC_DESC=4;parser=L.PARSER_SLR;scannerCaseSensitive=!0;static SCANNER_TABLE_FULL=0;static SCANNER_TABLE_COMPACT=1;static SCANNER_TABLE_HARDCODE=2;scannerTable=L.SCANNER_TABLE_FULL;static INPUT_STREAM=0;static INPUT_STRING=1;input=L.INPUT_STRING;toString(){let e="";switch(e+="GenerateScanner = "+this.generateScanner,e+=`
GenerateParser = `+this.generateParser,e+=`
Language = `,this.language){case L.LANG_CPP:e+="C++";break;case L.LANG_JAVA:e+="Java";break;case L.LANG_DELPHI:e+="Delphi";break;case L.LANG_PYTHON:e+="Python";break;case L.LANG_RUST:e+="Rust";break}if(e+=`
ScannerName = `+this.scannerName,this.generateParser&&(e+=`
ParserName = `+this.parserName,e+=`
SemanticName = `+this.semanticName),this.pkgName.length>0&&(e+=`
Package = `+this.pkgName),this.generateScanner){switch(e+=`
ScannerCaseSensitive = `+this.scannerCaseSensitive,e+=`
ScannerTable = `,this.scannerTable){case L.SCANNER_TABLE_FULL:e+="Full";break;case L.SCANNER_TABLE_COMPACT:e+="Compact";break;case L.SCANNER_TABLE_HARDCODE:e+="Hardcode";break}switch(e+=`
Input = `,this.input){case L.INPUT_STREAM:e+="Stream";break;case L.INPUT_STRING:e+="String";break}}if(this.generateParser)switch(e+=`
Parser = `,this.parser){case L.PARSER_LR:e+="LR";break;case L.PARSER_LALR:e+="LALR";break;case L.PARSER_SLR:e+="SLR";break;case L.PARSER_LL:e+="LL";break;case L.PARSER_REC_DESC:e+="RD";break}return e}constructorFromString(e){let t=new L;if(e===void 0)return t;const n=e.split(`
`);for(const s of n){const[r,i]=s.split("=");t.setOption(r.trim(),i.trim())}return t}setOption(e,t){if(e.toUpperCase()==="GenerateScanner".toUpperCase())this.generateScanner=/true/i.test(t);else if(e.toUpperCase()==="GenerateParser".toUpperCase())this.generateParser=/true/i.test(t);else if(e.toUpperCase()==="Language".toUpperCase())if(t.toUpperCase()==="C++".toUpperCase())this.language=L.LANG_CPP;else if(t.toUpperCase()==="Java".toUpperCase())this.language=L.LANG_JAVA;else if(t.toUpperCase()==="Delphi".toUpperCase())this.language=L.LANG_DELPHI;else if(t.toUpperCase()==="Python".toUpperCase())this.language=L.LANG_PYTHON;else if(t.toUpperCase()==="Rust".toUpperCase())this.language=L.LANG_RUST;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="ScannerName".toUpperCase())this.scannerName=t;else if(e.toUpperCase()==="ParserName".toUpperCase())this.parserName=t;else if(e.toUpperCase()==="SemanticName".toUpperCase())this.semanticName=t;else if(e.toUpperCase()==="Package".toUpperCase())this.pkgName=t;else if(e.toUpperCase()==="ScannerCaseSensitive".toUpperCase())this.scannerCaseSensitive=/true/i.test(t);else if(e.toUpperCase()=="ScannerTable".toUpperCase())if(t.toUpperCase()==="Full".toUpperCase())this.scannerTable=L.SCANNER_TABLE_FULL;else if(t.toUpperCase()==="Compact".toUpperCase())this.scannerTable=L.SCANNER_TABLE_COMPACT;else if(t.toUpperCase()==="Hardcode".toUpperCase())this.scannerTable=L.SCANNER_TABLE_HARDCODE;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="Input".toUpperCase())if(t.toUpperCase()==="Stream".toUpperCase())this.input=L.INPUT_STREAM;else if(t.toUpperCase()==="String".toUpperCase())this.input=L.INPUT_STRING;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="Parser".toUpperCase())if(t.toUpperCase()==="LR".toUpperCase())this.parser=L.PARSER_LR;else if(t.toUpperCase()==="LALR".toUpperCase())this.parser=L.PARSER_LALR;else if(t.toUpperCase()==="SLR".toUpperCase())this.parser=L.PARSER_SLR;else if(t.toUpperCase()==="LL".toUpperCase())this.parser=L.PARSER_LL;else if(t.toUpperCase()==="RD".toUpperCase())this.parser=L.PARSER_REC_DESC;else throw new Error("Erro processando arquivo");else throw new Error("Erro processando arquivo")}}class Ce{lhs;rhs;grammar;constructor(e,t,n){this.grammar=e,this.lhs=t,this.rhs=n===void 0?[]:n}clone(){return new Ce(null,this.lhs,[...this.rhs])}get_lhs(){return this.lhs}clear_rhs(){this.rhs=[]}set_lhs(e){this.lhs=e}get_rhs(){return this.rhs}set_rhs(e,t){const n=this.rhs[e];return this.rhs[e]=t,n}add_rhs(e){return this.rhs.push(e),e}firstSymbol(){if(this.grammar==null)return-1;for(let e=0;e<this.rhs.length;e++)if(!this.grammar.isSemanticAction(this.rhs[e]))return this.rhs[e];return 0}setGrammar(e){this.grammar=e}getGrammar(){return this.grammar}toString(){if(this.grammar==null)return"error";const e=[];if(e.push(this.grammar.symbols[this.lhs]+" ::="),this.rhs.length===0)e.push(" "+ie.EPSILON_STR);else for(let t=0;t<this.rhs.length;t++)this.grammar.isSemanticAction(this.rhs[t])?e.push(" #"+(this.rhs[t]-this.grammar.FIRST_SEMANTIC_ACTION())):e.push(" "+this.grammar.symbols[this.rhs[t]]);return e.join("")}equals(e){if(this.lhs!==e.lhs)return!1;if(this.rhs.length!==e.rhs.length)return!1;for(let t=0;t<this.rhs.length;t++)if(this.rhs[t]!==e.rhs[t])return!1;return!0}static compareTo(e,t){if(e===null)return-1;if(e.lhs!==t.lhs)return e.lhs-t.lhs;{if(e.grammar===null)return-1;const n=e.grammar.isEpsilon(e.rhs),s=e.grammar.isEpsilon(t.rhs);if(n&&s)return 0;if(n)return 1;if(s)return-1;for(let r=0;r<e.rhs.length&&r<t.rhs.length;r++)if(e.rhs[r]!==t.rhs[r])return e.rhs[r]-t.rhs[r];return t.rhs.length-e.rhs.length}}}class ie{static EPSILON=0;static DOLLAR=1;static FIRST_TERMINAL=this.EPSILON+2;static EPSILON_STR="î";_symbols=[];FIRST_NON_TERMINAL=0;FIRST_SEMANTIC_ACTION(){return this._symbols.length}LAST_SEMANTIC_ACTION(){return this.FIRST_SEMANTIC_ACTION()+this.SEMANTIC_ACTION_COUNT}SEMANTIC_ACTION_COUNT=0;_startSymbol=0;firstSet=[];followSet=[];normalLR=!1;_productions=new ce;constructor(e,t,n,s){const r=[...e],i=[...t],o=new ce;n.toArray().forEach(l=>o.add(l.clone()));const a=s;this.setSymbols(r,i,a),this.setProductions(o),this.fillFirstSet(),this.fillFollowSet()}setSymbols(e,t,n){this._symbols=[],this.FIRST_NON_TERMINAL=e.length+2,this._symbols[ie.EPSILON]=ie.EPSILON_STR,this._symbols[ie.DOLLAR]="$";for(let s=0,r=ie.FIRST_TERMINAL;s<e.length;s++,r++)this._symbols[r]=e[s];for(let s=0,r=this.FIRST_NON_TERMINAL;s<t.length;s++,r++)this._symbols[r]=t[s];this._startSymbol=n}setProductions(e){e.toArray().forEach(n=>this._productions.add(n));let t=0;for(let n=0;n<this._productions.size();n++){this._productions.get(n).setGrammar(this);for(let s=0;s<this._productions.get(n).get_rhs().length;s++)this._productions.get(n).get_rhs()[s]>t&&(t=this._productions.get(n).get_rhs()[s])}this.SEMANTIC_ACTION_COUNT=t-this.FIRST_SEMANTIC_ACTION(),this.SEMANTIC_ACTION_COUNT<0&&(this.SEMANTIC_ACTION_COUNT=-1)}isTerminal(e){return e<this.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=this.FIRST_NON_TERMINAL&&e<this.FIRST_SEMANTIC_ACTION()}isSemanticAction(e){return e>=this.FIRST_SEMANTIC_ACTION()}get productions(){return this._productions}get symbols(){return this._symbols}get terminals(){return this.symbols.slice(2,this.FIRST_NON_TERMINAL)}get nonTerminals(){return this.symbols.slice(this.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION())}get startSymbol(){return this._startSymbol}asNormalLR(){if(this.normalLR)return this;const e=this.terminals,t=2+this.SEMANTIC_ACTION_COUNT,n=this.nonTerminals,s=[...n,...new Array(t)],r=new ce(0);r.setItems(this._productions.toArray());for(let a=0;a<this.SEMANTIC_ACTION_COUNT+1;a++)s[n.length+a]="<#"+a+">",r.add(new Ce(null,this.FIRST_SEMANTIC_ACTION()+a,[]));s[s.length-1]="<-START->";const i=new Ce(null,this.FIRST_SEMANTIC_ACTION()+t-1,[this.startSymbol]);r.add(i);const o=new ie(e,s,r,this.FIRST_SEMANTIC_ACTION()+t-1);return o.normalLR=!0,o}createProduction(e,t){if(t===void 0)return new Ce(this,e,[]);const n=new Ce(this,e,t);for(let s=0;s<this._productions.size();s++)if(this._productions.get(s).equals(n))return null;return n}isEpsilon(e,t){t===void 0&&(t=0);for(let n=t;n<e.length;n++)if(!this.isSemanticAction(e[n]))return!1;return!0}markEpsilon(){const e=new le;for(let n=0;n<this._productions.size();n++){const s=this._productions.get(n);this.isEpsilon(s.get_rhs())&&e.add(s.get_lhs())}for(let n=this.FIRST_SEMANTIC_ACTION();n<=this.LAST_SEMANTIC_ACTION();n++)e.add(n);let t=!0;for(;t;){t=!1;let n;for(let s=0;s<this._productions.size();s++){const r=this._productions.get(s);n=!0;for(let i=0;i<r.get_rhs().length;i++)n=n&&e.has(r.get_rhs()[i]);n&&!e.has(r.get_lhs())&&(t=!0,e.add(r.get_lhs()))}}return e}static EMPTY_SET=new le(ie.EPSILON);first(e,t){if(!Array.isArray(e))return this.isSemanticAction(e)?ie.EMPTY_SET:this.firstSet[e];t===void 0&&(t=0);const n=new le;if(e.length-t==1&&e[t]==ie.DOLLAR&&n.add(ie.DOLLAR),this.isEpsilon(e,t))n.add(ie.EPSILON);else{const s=e.length;for(;this.isSemanticAction(e[t]);)t++;let r=this.first(e[t]).clone();r.delete(ie.EPSILON),n.addAll(r);let i=t;for(;i<s-1&&this.first(e[i]).has(ie.EPSILON);)i++,r=this.first(e[i]).clone(),r.delete(ie.EPSILON),n.addAll(r);i==s-1&&this.first(e[i]).has(ie.EPSILON)&&n.add(ie.EPSILON)}return n}fillFirstSet(){const e=this.markEpsilon();this.firstSet=new Array;for(let n=0;n<this._symbols.length;n++)this.firstSet[n]=new le;for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)e.has(n)&&this.firstSet[n].add(ie.EPSILON);for(let n=ie.FIRST_TERMINAL;n<this.FIRST_NON_TERMINAL;n++){this.firstSet[n].add(n);for(let s=this.FIRST_NON_TERMINAL;s<this.FIRST_SEMANTIC_ACTION();s++){let r=!1;for(let i=0;i<this._productions.size();i++){const o=this._productions.get(i);if(o.get_lhs()==s&&!this.isEpsilon(o.get_rhs())&&o.firstSymbol()==n){r=!0;break}}r&&this.firstSet[s].add(n)}}let t;do{t=!1;for(let n=0;n<this._productions.size();n++){const s=this._productions.get(n),r=this.firstSet[s.get_lhs()].clone(),i=this.first(s.get_rhs());this.firstSet[s.get_lhs()].addAll(i),t||r.equals(this.first(s.get_lhs()))||(t=!0)}}while(t)}fillFollowSet(){this.followSet=new Array;for(let t=0;t<this._symbols.length;t++)this.followSet[t]=new le;this.followSet[this._startSymbol].add(ie.DOLLAR);let e;do{e=!1;for(let t=0;t<this._productions.size();t++){const n=this._productions.get(t);for(let s=0;s<n.get_rhs().length;s++)if(this.isNonTerminal(n.get_rhs()[s])){const r=this.first(n.get_rhs(),s+1),i=r.has(ie.EPSILON);if(n.get_rhs().length>s+1){r.delete(ie.EPSILON);const o=this.followSet[n.get_rhs()[s]].clone();this.followSet[n.get_rhs()[s]].addAll(r),!e&&!this.followSet[n.get_rhs()[s]].equals(o)&&(e=!0)}if(i){const o=this.followSet[n.get_rhs()[s]].clone();this.followSet[n.get_rhs()[s]].addAll(this.followSet[n.get_lhs()]),!e&&!this.followSet[n.get_rhs()[s]].equals(o)&&(e=!0)}}}}while(e)}stringFirstFollow(){let e="";for(let t=this.FIRST_NON_TERMINAL;t<this.firstSet.length;t++){let n="";n+=`FIRST( ${this.symbols[t]} ) = { `;for(let s=0;s<this.firstSet[t].size;s++)this.firstSet[t].list()[s]&&(n+=`${this.symbols[s]} `);n+="}",e=+n+`
`}for(let t=this.FIRST_NON_TERMINAL;t<this.followSet.length;t++){let n="";n+=`FOLLOW(${this.symbols[t]}) = { `;for(let s=0;s<this.followSet[t].size;s++)this.followSet[t].list()[s]&&(n+=this.symbols[s]+" ");n+="}",e+=n+`
`}return e}ffAsHTML(){let e="";e+='<HTML><HEAD><TITLE>First &amp; Follow</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',e+="<TR align=center><TD bgcolor=black><FONT color=white><B>SÍMBOLO</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FIRST</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FOLLOW</B></FONT></TD></TR>";for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++){e+="<TR align=center>",e+=`<TD nowrap bgcolor=#F5F5F5><B> ${Le.translateString(this.symbols[t])} </B></TD>`;let n="  ";this.firstSet[t].list().forEach(s=>n+=this.symbols[s]+", "),n=n.slice(0,-2),e+=`<TD nowrap bgcolor=#F5F5F5>${Le.translateString(n)}</TD>`,n="  ",this.followSet[t].list().forEach(s=>n+=this.symbols[s]+", "),n=n.slice(0,-2),e+=`<TD nowrap bgcolor=#F5F5F5>${Le.translateString(n)}</TD>`,e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e}removeImproductiveSymbols(){const e=this.getProductiveSymbols();this.updateSymbols(e)}removeUselessSymbols(){this.removeImproductiveSymbols(),this.removeUnreachableSymbols()}removeRepeatedProductions(){}productionsFor(e){const t=new le;for(let n=0;n<this.productions.size();n++)this.productions.get(n).get_lhs()==e&&t.add(n);return t}transformToFindRecursion(e){const t=new ce;e.toArray().forEach(n=>t.add(n));for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)for(let s=this.FIRST_NON_TERMINAL;s<n;s++)for(let r=0;r<t.size();r++){const i=t.get(r);if(i.get_lhs()==n&&i.firstSymbol()==s){t.toArray().splice(r,1),r--;const o=[];for(let a=0;a<i.get_rhs().length&&this.isSemanticAction(i.get_rhs()[a]);a++)o.push(i.get_rhs()[a]);for(let a=0;a<t.size();a++){const l=t.get(a);if(l.get_lhs()==s){const _=new Array(l.get_rhs().length+i.get_rhs().length-1);let u=0;for(;u<o.length;u++)_[u]=o[u];let p=u;for(u=0;u<l.get_rhs().length;u++)_[u+p]=l.get_rhs()[u];for(p=p+u-(o.length+1),u=o.length+1;u<i.get_rhs().length;u++)_[u+p]=i.get_rhs()[u];const c=this.createProduction(i.get_lhs(),_);c!=null&&t.add(c)}}}}return t}removeRecursion(){this._productions=this.transformToFindRecursion(this._productions),this.removeDirectRecursion()}removeDirectRecursion(){for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++){let t=this.productionsFor(e);const n=this.productionsFor(e);let s=-1;const r=t.list();for(let i=0;i<r.length;i++){const o=r[i];this._productions.get(o).get_lhs()!=this._productions.get(o).firstSymbol()&&r.splice(i,1)}if(t=new le,t.addAllArray(r),t.size>0){s=this.createSymbol(this.addTail(this._symbols[e]));for(const i of n){const o=this._productions.get(i);t.list()[i]?(o.get_rhs().splice(0,1),o.get_rhs().push(s),o.set_lhs(s)):o.get_rhs().push(s)}}if(s!=-1){const i=this.createProduction(s);i!=null&&this.productions.add(i)}}this.fillFirstSet(),this.fillFollowSet(),this.sort()}createSymbol(e){for(const n of this._productions){const s=n.get_rhs();for(let r=0;r<s.length;r++)this.isSemanticAction(s[r])&&s.push(r,s[r]+1)}let t=new Array(this._symbols.length+1);return t=[...this._symbols],this._symbols=t,this._symbols[this._symbols.length-1]=e,this._symbols.length-1}derives(e,t){if(e==t)return!0;const n=new le;n.add(t);for(let s=this.FIRST_NON_TERMINAL;s<this.FIRST_SEMANTIC_ACTION();s++)for(const r of n)if(this.derivesDirectly(s,r)&&!n.list()[s]){n.add(s),s=-1;continue}return n.list()[e]!=0}derivesDirectly(e,t){const n=this.markEpsilon();for(let s=0;s<this._productions.size();s++){const r=this._productions.get(s);if(r.get_lhs()==e)if(r.get_rhs().length==1){if(r.get_rhs()[0]==t)return!0}else{const i=r.get_rhs();for(let o=0;o<i.length;o++)if(i[o]==t){let a=!0;for(let l=0;l<o;l++)n.list()[i[l]]||(a=!1);for(let l=o+1;l<i.length;l++)n.list()[i[l]]||(a=!1);if(a)return!0}}}return!1}removeUnitaryProductions(){const e=new ce;for(let n=0;n<this._productions.size();n++){const s=this._productions.get(n);(s.get_rhs().length!=1||s.get_rhs()[0]!=s.get_lhs())&&e.add(s)}const t=[];for(let n=this.FIRST_NON_TERMINAL;n<t.length;n++){t[n]=new le;for(let s=this.FIRST_NON_TERMINAL;s<this.FIRST_SEMANTIC_ACTION();s++)this.derives(n,s)&&t[n].add(s)}this._productions=new ce;for(let n=0;n<e.size();n++){const s=e.get(n);if(s.get_rhs().length!=1||!this.isNonTerminal(s.get_rhs()[0])){for(let r=this.FIRST_NON_TERMINAL;r<t.length;r++)if(t[r].list()[s.get_lhs()]){const i=this.createProduction(r,s.get_rhs());i!=null&&this._productions.add(i)}}}this.sort()}removeEpsilon(){const e=this.markEpsilon(),t=new ce;for(let n=0;n<this._productions.size();n++){const s=this._productions.get(n);if(!this.isEpsilon(s.get_rhs())){let r=!0;for(let i=0;i<s.get_rhs().length;i++)r=r&&e.list()[s.get_rhs()[i]]!=0;r||t.add(s)}}for(let n=0;n<t.size();n++){const s=t.get(n);if(!this.isEpsilon(s.get_rhs())){let r=0;for(;r<s.get_rhs().length;){for(;r<s.get_rhs().length&&!(!this.isSemanticAction(s.get_rhs()[r])&&e.list()[s.get_rhs()[r]]);r++);if(r<s.get_rhs().length){const i=this.derivationAt(s,r);i!=null&&!t.contains(i)&&t.add(i),r++}}}}if(e.list()[this._startSymbol]){const n=this.createSymbol(this.addTail(this._symbols[this._startSymbol]));let s=this.createProduction(n,new Array(this._startSymbol));s!=null&&t.add(s),s=this.createProduction(n),s!=null&&t.add(s),this._startSymbol=n,this.fillFirstSet(),this.fillFollowSet()}this._productions=t,this.sort()}derivationAt(e,t){let n=new Array;for(let r=0;r<this._productions.size();r++)if(this._productions.get(r).get_lhs()==e.get_rhs()[t]&&this.isEpsilon(this._productions.get(r).get_rhs())){n=this._productions.get(r).get_rhs();break}const s=new Array;for(let r=0;r<t;r++)s.push(e.get_rhs()[r]);for(let r=0;r<n.length;r++)s.push(n[r]);for(let r=t+1;r<e.get_rhs().length;r++)s.push(e.get_rhs()[r]);return this.createProduction(e.get_lhs(),s)}addTail(e){e=e.substring(0,e.length-1)+"_T>";for(let t=0;t<this._symbols.length;t++)this._symbols[t]!=null&&this._symbols[t]==e&&(e=e.substring(0,e.length-1)+"_T>",t=0);return e}sort(){for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++){const n=this._symbols[t].substring(0,this._symbols[t].length-1)+"_T>";let s=t+1;for(;s<this.FIRST_SEMANTIC_ACTION()&&this._symbols[s]!=n;s++);if(s<this.FIRST_SEMANTIC_ACTION()){const r=t+1,i=s;r!=i&&this.moveSymbol(i,r)}}this.moveSymbol(this._startSymbol,this.FIRST_NON_TERMINAL);const e=this._productions.toArray().sort(Ce.compareTo);this._productions.clear(),e.forEach(t=>this._productions.add(t))}moveSymbol(e,t){const n=this._symbols[e];for(let s=e;s>t;s--)this._symbols[s]=this._symbols[s-1];this._symbols[t]=n,this._startSymbol==e?this._startSymbol=t:this._startSymbol>=t&&this._startSymbol<e&&this._startSymbol++;for(const s of this._productions){s.get_lhs()==e?s.set_lhs(t):s.get_lhs()>=t&&s.get_lhs()<e&&s.set_lhs(s.get_lhs()+1);const r=s.get_rhs();for(let i=0;i<r.length;i++)r[i]==e?r.push(i,t):r[i]>=t&&r[i]<e&&r.push(i,r[i]+1)}}isLL(){return this.isFactored()&&!this.hasLeftRecursion()&&this.passThirdCondition()}hasLeftRecursion(){const e=this.transformToFindRecursion(this._productions);for(let t=0;t<e.size();t++)if(e.get(t).get_lhs()==e.get(t).firstSymbol())return!0;return!1}getLeftRecursiveSimbol(){const e=this.transformToFindRecursion(this._productions);for(let t=0;t<e.size();t++)if(e.get(t).get_lhs()==e.get(t).firstSymbol())return e.get(t).get_lhs();return-1}getNonFactoratedProductions(){const e=new le;for(let t=0;t<this._productions.size();t++){const n=this._productions.get(t);for(let s=t+1;s<this.productions.size();s++){const r=this._productions.get(s);if(n.get_lhs()==r.get_lhs()){const i=this.first(n.get_rhs());i.intersection(this.first(r.get_rhs())),i.isEmpty()||(e.add(t),e.add(s))}}if(e.size>0)break}return e}isFactored(){for(let e=0;e<this._productions.size();e++){const t=this._productions.get(e);for(let n=e+1;n<this._productions.size();n++){const s=this.productions.get(n);if(t.get_lhs()==s.get_lhs()){const r=this.first(t.get_rhs());if(r.intersection(this.first(s.get_rhs())),!r.isEmpty())return!1}}}return!0}passThirdCondition(){const e=this.markEpsilon();for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++)if(e.has(t)){const n=new le(this.firstSet[t]);if(n.intersection(this.followSet[t]),!n.isEmpty())return!1}return!0}getProductiveSymbols(){const e=new le;for(let n=ie.FIRST_TERMINAL;n<this.FIRST_NON_TERMINAL;n++)e.add(n);for(let n=this.FIRST_SEMANTIC_ACTION();n<=this.LAST_SEMANTIC_ACTION();n++)e.add(n);e.add(ie.EPSILON);let t;do{t=!1;const n=new le;for(let s=this.FIRST_NON_TERMINAL;s<this.FIRST_SEMANTIC_ACTION();s++)if(!e.has(s))for(let r=0;r<this._productions.size();r++){const i=this._productions.get(r);if(i.get_lhs()==s){let o=!0;for(let a=0;a<i.get_rhs().length;a++)o=o&&e.has(i.get_rhs()[a]);o&&(n.add(s),t=!0)}}e.addAll(n)}while(t);return e}removeUnreachableSymbols(){const e=this.getReachableSymbols();this.updateSymbols(e)}getReachableSymbols(){const e=new le;e.add(this._startSymbol);let t;do{t=!1;const n=new le;for(let s=0;s<this._symbols.length;s++)if(!e.has(s))for(let r=0;r<this.productions.size();r++){const i=this._productions.get(r);if(e.has(i.get_lhs())){for(let o=0;o<i.get_rhs().length;o++)if(i.get_rhs()[o]==s){n.add(s),t=!0;break}}}e.addAll(n)}while(t);return e}uselessSymbolsHTML(){const e=this.clone();try{e.removeUselessSymbols()}catch(i){console.warn(i)}const t=e.symbols,n=new le;for(let i=2;i<this._symbols.length;i++)for(let o=0;o<t.length;o++)if(t[o]==this._symbols[i]){n.add(i);break}let s="";s+='<HTML><HEAD><TITLE>Símbolos inúteis</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif">';let r=0;for(let i=2;i<this._symbols.length;i++)n.has(i)||(s+=this._symbols[i]+"<br>",r++);return r==0&&(s+="Não há símbolos inúteis"),s+="</TABLE></FONT></BODY></HTML>",s}setToStr(e){let t="{ ";for(let n=0;n<e.size;n++)e.list()[n]&&(t+='"'+this._symbols[n]+'" ');return t+="}",t}factorate(){if(this.hasLeftRecursion())throw Error("new LeftRecursionException();");let e=!0;for(;e;){e=!1;for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++)e=e||this.factorateLeft(t)}}factorateLeft(e){let t=!1;const n=this.productionsFor(e);let s=new le;const r=this.conflict(n,s);if(!s.isEmpty()){t=!0;for(let _=0;_<this._productions.size();_++){const u=this._productions.get(_);if(u.get_lhs()==e&&this.first(u.get_rhs()).list()[r]&&u.firstSymbol()!=r){const p=this.leftMostDerive(u);this._productions.toArray().splice(_,1),p.toArray().forEach(c=>this._productions.add(c)),_--,this.fillFirstSet(),this.fillFollowSet()}}s=new le;for(let _=0;_<this._productions.size();_++){const u=this._productions.get(_);u.get_lhs()==e&&u.firstSymbol()==r&&s.add(_)}const i=this.createSymbol(this.addTail(this._symbols[e])),o=this.extractPrefix(s);for(const _ of s.list()){const u=this._productions.get(_);u.set_lhs(i),u.get_rhs().length>o.length?u.get_rhs().splice(0,o.length):u.clear_rhs()}const a=new Array;a.push(...o),a.push(i);const l=this.createProduction(e,a);l!=null&&this._productions.add(l),this.fillFirstSet(),this.fillFollowSet(),this.sort()}return t}leftMostDerive(e){if(this.isTerminal(e.firstSymbol()))return new ce;{const t=new ce,n=e.firstSymbol(),s=new Array;for(let r=0;r<e.get_rhs().length&&this.isSemanticAction(e.get_rhs()[r]);r++)s.push(e.get_rhs()[r]);for(const r of this.productionsFor(n).list()){const i=this.productions.get(r),o=new Array;for(let l=0;l<s.length;l++)o.push(s[l]);for(let l=0;l<i.get_rhs().length;l++)o.push(i.get_rhs()[l]);for(let l=s.length+1;l<e.get_rhs().length;l++)o.push(e.get_rhs()[l]);const a=this.createProduction(e.get_lhs(),o);a!=null&&!t.contains(a)&&t.add(a)}return t}}extractPrefix(e){const t=new Array;let n,s=0;do{n=!0;let r=0;const i=this._productions.get(r);if(i.get_rhs().length>s){const o=i.get_rhs()[s];for(;r>e.size;r++){const a=this.productions.get(r);(a.get_rhs().length<=s||a.get_rhs()[s]!=o)&&(n=!1)}n&&(t.push(i.get_rhs()[s]),s++)}else n=!1}while(n);return t}conflict(e,t){const n=new Array(this._symbols.length);for(let i=0;i<n.length;i++)n[i]=0;for(const i of e){const o=this._productions.get(i);for(const a of this.first(o.get_rhs()))n[a]++}n[ie.EPSILON]=0,n[ie.DOLLAR]=0;let s=0,r=0;for(let i=0;i<n.length;i++)n[i]>s&&(s=n[i],r=i);if(s>1)for(const i of e)this.first(this._productions.get(i).get_rhs()).list()[r]&&t.add(i);return r}toString(){let e="",t="",n=!0;for(let s=0;s<this.productions.size();s++){const r=this._productions.get(s);if(this._symbols[r.get_lhs()]!=t)n||(e+=`;

`),n=!1,t=this._symbols[r.get_lhs()],e+=t+" ::=";else{e+=`
`;for(let i=0;i<t.length;i++)e+=" ";e+="   |"}if(r.get_rhs().length==0)e+=" "+ie.EPSILON_STR;else for(let i=0;i<r.get_rhs().length;i++)if(e+=" ",this.isSemanticAction(r.get_rhs()[i])){const o=r.get_rhs()[i]-this.FIRST_SEMANTIC_ACTION();e+="#"+o}else{const o=this._symbols[r.get_rhs()[i]];e+=o}}return e+=`;
`,e}clone(){try{const e=structuredClone(this),t=new Array(this.FIRST_NON_TERMINAL-2),n=new Array(this.FIRST_SEMANTIC_ACTION()-this.FIRST_NON_TERMINAL);for(let r=0;r<t.length;r++)t[r]=this._symbols[r+2].toString();for(let r=0;r<n.length;r++)n[r]=this._symbols[r+this.FIRST_NON_TERMINAL].toString();const s=new ce;for(let r=0;r<this._productions.size();r++){const i=new Array(this._productions.get(r).get_rhs().length);for(let o=0;o<i.length;o++)i[o]=this._productions.get(r).get_rhs()[o];s.add(new Ce(null,this._productions.get(r).get_lhs(),i))}return e.setSymbols(t,n,this._startSymbol),e.setProductions(s),e.fillFirstSet(),e.fillFollowSet(),e}catch(e){throw console.warn(e),new Error("Internal Error")}}removeSymbol(e){this._symbols.splice(e,1),this._startSymbol>e&&this._startSymbol--,this.FIRST_NON_TERMINAL>e&&this.FIRST_NON_TERMINAL--;for(let t=0;t<this._productions.size();t++){const n=this.productions.get(t);if(n.get_lhs()==e){this.productions.toArray().splice(t,1);continue}else n.get_lhs()>e&&n.set_lhs(n.get_lhs()-1);for(let s=0;s<n.get_rhs().length;s++){if(n.get_rhs()[s]==e){this.productions.toArray().splice(t,1);break}n.get_rhs()[s]>e&&n.set_rhs(s,n.get_rhs()[s]-1)}}}updateSymbols(e){e.add(ie.EPSILON),e.add(ie.DOLLAR);let t=0;for(let n=0;n<this._symbols.length;n++)e.list()[n]||(this.removeSymbol(n-t),t++);this.fillFirstSet(),this.fillFollowSet()}id_for_production(e){return this._productions.contains(e)?this._productions.indexOf(e):null}production_for_id(e){return this._productions.get(e)}}class te{parameter;type;constructor(e,t){this.type=e,this.parameter=t}static SHIFT=0;static REDUCE=1;static ACTION=2;static ACCEPT=3;static GOTO=4;static ERROR=5;static CONSTANTS=["SHIFT ","REDUCE","ACTION","ACCEPT","GO_TO ","ERROR "];getType(){return this.type}getParameter(){return this.parameter}static createShift(e){return new te(te.SHIFT,e)}static createReduce(e){return new te(te.REDUCE,e)}static createAction(e){return new te(te.ACTION,e)}static createAccept(){return new te(te.ACCEPT,0)}static createGoTo(e){return new te(te.GOTO,e)}static createError(){return new te(te.ERROR,0)}toString(){switch(this.type){case te.SHIFT:return"SHIFT("+this.parameter+")";case te.REDUCE:return"REDUCE("+this.parameter+")";case te.ACTION:return"SEM.ACT("+this.parameter+")";case te.ACCEPT:return"ACCEPT";case te.GOTO:return""+this.parameter;case te.ERROR:return"-";default:return"???"}}equals(e){try{const t=e,n=this.type==t.type&&this.parameter==t.parameter;return n===void 0?!1:n}catch(t){return console.warn(t),!1}}hashCode(){let e=43;return e=e*this.parameter+17,e=e*this.type+17,e}}class Kt{conflictList=new ce;constructor(){}}let Rn=0;const ct=new Map;function Cn(E,e){return new Promise(t=>{const n=Rn++;ct.set(n,t),self.postMessage({type:"rpc_request",id:n,method:E,payload:e})})}function Zt(){self.addEventListener("message",E=>{const e=E.data;if(e.type==="rpc_response"){const t=ct.get(e.id);t&&(ct.delete(e.id),t(e.result))}})}function vn(E,e){return window.prompt(E,e)}async function Wt(E,e){return typeof window<"u"&&typeof window.document<"u"?Promise.resolve(vn(E,e)):Cn("prompt",{text:E,defaultValue:e})}Zt();class In extends Kt{_conflict;_state;_conflictListModel;constructor(e,t){super(),this._conflict=e===void 0?[]:e,this._state=t===void 0?-1:t,this._conflictListModel=new Array}async resolve(e,t){let n;t==0?n="$":n=e.terminals[t-1];let s="";s+="- O estado no topo da pilha é: "+this._state+`
`,s+="- O símbolo da entrada é: "+n+`
`,s+=`
Qual ação a ser executada:`,this._conflictListModel=[];for(let o=0;o<this._conflict.length;o++){let a;switch(this._conflict[o].getType()){case te.REDUCE:a="Reduzir, pela produção "+this._conflict[o].getParameter();break;case te.ACTION:a="Executar ação semântica "+this._conflict[o].getParameter();break;case te.SHIFT:a='Empilhar "'+n+'"';break;default:a=this._conflict[o].toString();break}s+=`
Opção `+(o+1)+": "+a,this._conflictListModel.push({label:a,command:o})}s+=`

OBS: Se cancelar ou digitar opção inválida,
a opção 1 será escolhida como padrão.`;let r=null;try{r=await Wt(s,"1")}catch(o){console.log(o,"Prompt não encontrado")}r==null&&(r="1");let i=Number(r);return isNaN(i)||i<0||i>this._conflict.length?i=0:i--,this._conflictListModel[i].command}showModal(e,t,n,s,r){const i=document.getElementById("myModal"),o=document.getElementById("confirmBtn"),a=document.getElementById("cancelBtn");i.style.display="block",o.textContent=t,a.textContent=n,o.onclick=function(){i.style.display="none",s&&s()},a.onclick=function(){i.style.display="none",r&&r()}}showDialog(e,t){const n=document.createElement("dialog");n.style.padding="20px",n.innerHTML=`<p>${e}<p>`,t.forEach(s=>{const r=document.createElement("button");r.textContent=s.label,r.onclick=()=>{n.close(),document.body.removeChild(n)},n.appendChild(r),n.appendChild(document.createElement("br"))}),n.addEventListener("close",()=>{document.body.removeChild(n)}),document.body.appendChild(n),n.showModal()}setup(e,t){this._conflict=e,this._state=t}}class Me{_production;_position;_lookahead;_g;constructor(e,t,n){this._production=e,this._position=t,this._lookahead=n===void 0?0:n,this._g=e.getGrammar()}get position(){return this._position}get lookahead(){return this._lookahead}get production(){return this._production}equals(e){try{return e.production.equals(this._production)&&e.position==this._position&&this._lookahead==e.lookahead}catch(t){return console.warn(t),!1}}toString(){let e="";if(this._g==null)throw new Z("Grammar to string is null");e+=this._g.symbols[this._production.get_lhs()]+" ::= ";for(let t=0;t<this._production.get_rhs().length&&t<this._position;t++){const n=this._production.get_rhs()[t];this._g.isSemanticAction(n)?e+="#"+(n-this._g.FIRST_SEMANTIC_ACTION())+" ":e+=this._g.symbols[n]+" "}e+="o ";for(let t=this._position;t<this._production.get_rhs().length;t++){const n=this._production.get_rhs()[t];this._g.isSemanticAction(n)?e+="#"+(n-this._g.FIRST_SEMANTIC_ACTION())+" ":e+=this._g?.symbols[n]+" "}return this._lookahead!=0&&(e+=", ",e+=this._g?.symbols[this._lookahead]),e.toString()}clone(){return new Me(this._production,this._position,this._lookahead)}compareTo(e){let t=Ce.compareTo(this._production,e.production);return t!=0?t:(t=this._position-e.position,t!=0?t:this._lookahead-e.lookahead)}}class Yt{g;itemList;semanticStart;firstSementicAction;lalrgotocache=new Map;itemListCollisionHashes;constructor(e){this.itemListCollisionHashes={},this.semanticStart=e.FIRST_SEMANTIC_ACTION(),this.firstSementicAction=e.FIRST_SEMANTIC_ACTION(),this.g=e.asNormalLR(),this.initCaches(),this.itemList=this.computeItems()}itemStringHash(e){let t="";for(const n of e)t+=n.toString()+":";return t}itemListAdd(e){let t=this.itemStringHash(e);this.itemListCollisionHashes[t]=!0,this.itemList.add(e)}itemListAddIfNotExists(e){let t=this.itemStringHash(e);this.itemListCollisionHashes[t]==!0&&(this.itemListCollisionHashes[t]=!0,this.itemList.add(e))}getLalrGotoCache(){return this.lalrgotocache}getErrors(e){const t=new ce;for(let n=0;n<e.length;n++){const s=new le;for(let a=1;a<this.g.FIRST_NON_TERMINAL;a++)e[n][a-1].getType()!=te.ERROR&&s.add(a);let r="";const i=s.size;let o=0;for(const a of s.list())a==1?r+="fim de sentença":r+=this.g.symbols[a],i-o==2?r+=" ou ":i-o>2&&(r+=", "),o++;t.add(r.toString())}return t}get grammar(){return this.g}get firstSemanticAction(){return this.firstSementicAction}async buildIntTable(){const e=await this.buildTable(),t=[];for(let n=0;n<e.length;n++){t[n]=[];for(let s=0;s<e[n].length;s++)t[n][s]=[],t[n][s][0]=e[n][s].getType(),t[n][s][1]=e[n][s].getParameter()}return t}async resolveConflicts(e){const t=[],n=te.createError();for(let s=0;s<e.length;s++){t[s]=[];for(let r=0;r<e[0].length;r++)switch(e[s][r].size){case 0:t[s][r]=n;break;case 1:t[s][r]=e[s][r].values().next().value;break;default:t[s][r]=await this.solve(e[s][r],s,r);break}}return t}async solve(e,t,n){const s=[];let r=0;for(const o of e)s[r]=o,r++;let i=!0;for(let o=1;o<s.length&&(i=i&&s[o-1].equals(s[o]),!!i);o++);if(i)return s[0];{const o=new In;return o.setup(s,t),s[await o.resolve(this.g,n)]}}async tableAsHTML(){let e="";e+='<HTML><HEAD><TITLE>Tabela SLR(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const t=await this.buildTable();e+="<TR>",e+="<TD  align=center rowspan=2 bgcolor=black nowrap><FONT color=white><B>ESTADO</B></FONT></TD>",e+="<TD  align=center colspan="+(this.g.FIRST_NON_TERMINAL-1)+" bgcolor=black nowrap><FONT color=white><B>AÇÃO</B></FONT></TD>",e+="<TD  align=center colspan="+(this.g.FIRST_SEMANTIC_ACTION()-this.g.FIRST_NON_TERMINAL)+" bgcolor=black nowrap><FONT color=white><B>DESVIO</B></FONT></TD>",e+="</TR>",e+="<TR>";for(let n=0;n<t[0].length-1;n++)e+="<TD  align=center bgcolor=black nowrap><FONT color=white><B>"+Le.translateString(this.g.symbols[n+1])+"</B></FONT></TD>";e+="</TR>";for(let n=0;n<t.length;n++){const s=t[n];e+="<TR>",e+="<TD bgcolor=black align=right nowrap><FONT color=white><B>"+n+"</B></FONT></TD>";for(let r=0;r<s.length-1;r++){const i=s[r];let o="";i!=null&&(o=i.toString());const a=r+1<this.g.FIRST_NON_TERMINAL?"#F5F5F5":"#E6E6E6";e+="<TD bgcolor="+a+" align=center nowrap>"+o+"</TD>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e.toString()}itemsAsHTML(){let e="";e+='<HTML><HEAD><TITLE>Itens LR</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const t=this.itemList;e+="<TR>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Estado</B></FONT></TD>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Itens</B></FONT></TD>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Desvio</B></FONT></TD>",e+="</TR>";for(let n=0;n<t.size();n++){const s=n%2==0?"#F5F5F5":"#E6E6E6",r=t.get(n);e+="<TR>",e+="<TD bgcolor="+s+" align=right rowspan="+r.size()+">"+n+"</TD>",e+="<TD bgcolor="+s+" nowrap>"+Le.translateString(r.get(0).toString())+"</TD>";let i=r.get(0),o=i.production;if(o.get_rhs().length>i.position){const a=o.get_rhs()[i.position],l=this.goTo(r,a),_=this.getIndexFromList(t,l);e+="<TD bgcolor="+s+" align=right>"+_+"</TD>"}else e+="<TD bgcolor="+s+" align=right>&nbsp</TD>";e+="</TR>";for(let a=1;a<r.size();a++){if(e+="<TR>",e+="<TD bgcolor="+s+" nowrap>"+Le.translateString(r.get(a).toString())+"</TD>",i=r.get(a),o=i.production,o.get_rhs().length>i.position){const l=o.get_rhs()[i.position],_=this.goTo(r,l),u=this.getIndexFromList(t,_);e+="<TD bgcolor="+s+" align=right>"+u+"</TD>"}else e+="<TD bgcolor="+s+" align=right>&nbsp</TD>";e+="</TR>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e.toString()}getIndexFromList(e,t){const n=e.toArray(),s=t.toArray();for(let r=0;r<n.length;r++){const i=n[r];if(i.size()!==t.size())continue;const o=i.toArray();let a=!0;for(let l=0;l<o.length;l++){const _=o[l],u=s[l];if(!_.equals(u)){a=!1;break}}if(a)return r}return-1}canonize(e){let t=[];for(let s of e)t.push(`${this.g.id_for_production(s.production)}:${s.position}:${s.lookahead}`);return t=[...new Set(t)].sort(),t.join("|")}}class xn extends Yt{constructor(e){super(e)}initCaches(){}closure(e){const t=new ce;t.setItems(e.toArray());for(let n=0;n<t.size();n++){const s=t.get(n),r=s.production;if(s.position<r.get_rhs().length){const i=r.get_rhs()[s.position];if(this.g.isNonTerminal(i)){const o=this.g.productionsFor(i);for(const a of o.list()){const l=new Me(this.g.productions.get(a),0);this.contains(t,l)||t.add(l)}}}}return t}contains(e,t){for(const n of e)if(t.equals(n))return!0;return!1}goTo(e,t){const n=new ce;for(const s of e.toArray()){const r=s.production;s.position<r.get_rhs().length&&r.get_rhs()[s.position]==t&&n.add(new Me(s.production,s.position+1))}return this.closure(n)}computeItems(){const e=new ce,n=this.g.productionsFor(this.g.startSymbol).first();e.add(new Me(this.g.productions.get(n),0));const s=new ce;s.add(this.closure(e));let r=!0;for(;r;)e:{r=!1;for(const i of s.toArray())for(let o=0;o<i.size();o++){const a=i.get(o),l=a.production;if(l.get_rhs().length>a.position){const _=this.goTo(i,l.get_rhs()[a.position]);if(_.size()!=0&&!this.containsList(s,_)){s.add(_),r=!0;break e}}}}return s}containsList(e,t){const n=t.toArray();for(const s of e){const r=s.toArray();if(r.length!==n.length)continue;let i=!0;for(let o=0;o<r.length;o++){const a=r[o],l=n[o];if(!a.equals(l)){i=!1;break}}if(i)return!0}return!1}async buildTable(){const e=[];for(let n=0;n<this.itemList.size();n++){e[n]=[];for(let s=0;s<this.g.symbols.length-1;s++)e[n][s]=new Map}for(let n=0;n<e.length;n++){const s=this.itemList.get(n);for(let r=0;r<s.size();r++){const i=s.get(r),o=i.production,a=o.get_rhs();if(a.length>i.position){const l=a[i.position],_=this.goTo(s,l);if(this.g.isTerminal(l)){const u=te.createShift(this.indexOfListLRItem(this.itemList,_));e[n][l-1].set(u.hashCode(),u)}else{const u=te.createGoTo(this.indexOfListLRItem(this.itemList,_));e[n][l-1].set(u.hashCode(),u)}}else{const l=o.get_lhs();if(l==this.g.startSymbol){const _=te.createAccept();e[n][0].set(_.hashCode(),_)}else{const _=this.g.followSet[l];for(const u of _.list()){let p;l<this.semanticStart?p=te.createReduce(this.g.productions.indexOf(o)):p=te.createAction(l-this.semanticStart),e[n][u-1].set(p.hashCode(),p)}}}}}const t=e.map(n=>n.map(s=>new Set(s.values())));return await this.resolveConflicts(t)}indexOfListLRItem(e,t){const n=t.toArray();for(let s=0;s<e.size();s++){const r=e.get(s).toArray();if(r.length!==n.length)continue;let i=!0;for(let o=0;o<r.length;o++){const a=r[o],l=n[o];if(!a.equals(l)){i=!1;break}}if(i)return s}return-1}}class qt extends Yt{closurecache;constructor(e){super(e),this.initCaches()}initCaches(){this.closurecache==null&&(this.closurecache=new Map)}closure(e){this.initCaches();let t=this.canonize(e);if(this.closurecache.has(t))return this.closurecache.get(t);let n=e.toArray(),s=[...e];for(;s.length!=0;){let r=s.pop();const i=r.production;if(r.position<i.get_rhs().length){const o=i.get_rhs()[r.position];if(this.g.isNonTerminal(o)){const a=this.g.productionsFor(o);for(const l of a.list()){const _=this.g.productions.get(l),u=[];for(let c=r.position+1;c<i.get_rhs().length;c++)u.push(i.get_rhs()[c]);u.push(r.lookahead);const p=this.g.first(u);for(const c of p.list()){const m=new Me(_,0,c);this.contains(n,m)||(n.push(m),s.unshift(m))}}}}}return this.itemList==null&&(this.itemList=new ce),this.itemListAddIfNotExists(e),t=this.canonize(e),this.closurecache.set(t,e),e}goTo(e,t){const n=[];for(const i of e.toArray()){const o=i.production;i.position<o.get_rhs().length&&o.get_rhs()[i.position]==t&&n.push(new Me(i.production,i.position+1,i.lookahead))}const s=new ce;return s.setItems(n),this.closure(s)}computeItems(){const e=new ce,n=this.g.productionsFor(this.g.startSymbol).list()[0];e.add(new Me(this.g.productions.get(n),0,ie.DOLLAR));let s=this.closure(e);const r=new ce;r.add(s);let i=[s];for(;i.length!=0;){let o=i.pop();for(let a=0;a<o.size();a++){const l=o.get(a),_=l.production;if(_.get_rhs().length>l.position){const u=this.goTo(o,_.get_rhs()[l.position]);let p=this.containsList(r,u);u.size()!=0&&!p&&(r.add(u),i.unshift(u))}}}return r}contains(e,t){for(const n of e)if(t.equals(n))return!0;return!1}containsList(e,t){const n=t.toArray();for(const s of e){const r=s.toArray();if(r.length!==n.length)continue;let i=!0;for(let o=0;o<r.length;o++){const a=r[o],l=n[o];if(a.equals(l)==!1){i=!1;break}}if(i)return!0}return!1}async buildTable(){const e=[];for(let s=0;s<this.itemList.size();s++){e[s]=[];for(let r=0;r<this.g.symbols.length-1;r++)e[s][r]=new Map}for(let s=0;s<e.length;s++){const r=this.itemList.get(s);for(let i=0;i<r.size();i++){const o=r.get(i),a=o.production,l=a.get_rhs();if(l.length>o.position){const _=l[o.position],u=this.goTo(r,_);if(this.g.isTerminal(_)){const p=te.createShift(this.getIndexFromList(this.itemList,u));e[s][_-1].set(p.hashCode(),p)}else{const p=te.createGoTo(this.getIndexFromList(this.itemList,u));e[s][_-1].set(p.hashCode(),p)}}else{const _=a.get_lhs();if(_==this.g.startSymbol){const u=te.createAccept();e[s][0].set(u.hashCode(),u)}else{const u=o.lookahead;let p;_<this.semanticStart?p=te.createReduce(this.g.productions.indexOf(a)):p=te.createAction(_-this.semanticStart),e[s][u-1].set(p.hashCode(),p)}}}}const t=e.map(s=>s.map(r=>new Set(r.values())));return await this.resolveConflicts(t)}}class Ln extends qt{compress=!0;constructor(e){super(e)}initCaches(){super.initCaches()}core(e){const t=new Array;for(let n=0;n<e.length;n++){const s=e[n],r=new Me(s.production,s.position);this.contains(t,r)||t.push(r)}return t.sort((n,s)=>{let r=Ce.compareTo(n.production,s.production);return r!=0?r:(r=n.position-s.position,r!=0?r:n.lookahead-s.lookahead)}),new Set(t)}computeItems(){const e=super.computeItems();for(let t=0;t<e.size();t++){const n=e.get(t),s=this.core(n.toArray());for(let r=t+1;r<e.size();r++){const i=e.get(r),o=this.core(i.toArray());if(this.equals(s,o)){for(let a=0;a<i.size();a++){const l=i.get(a);n.contains(l)||n.add(l)}e.removeByIndex(r),r--}}}return this.compress=!0,e}goTo(e,t){const n=super.goTo(e,t);if(this.compress){const s=this.core(n.toArray());for(let r=0;r<this.itemList.size();r++){const i=this.itemList.get(r);if(this.equals(s,this.core(i.toArray())))return i}}return n}equals(e,t){if(e.size!==t.size)return!1;for(const n of e){let s=!1;for(const r of t)if(n.equals(r)){s=!0;break}if(!s)return!1}return!0}}class je{LRGeneratorFactory(){}static createGenerator(e,t){switch(t){case L.PARSER_SLR:return new xn(e);case L.PARSER_LR:return new qt(e);case L.PARSER_LALR:return new Ln(e);default:return null}}}const Je=1,ht=2,Qe=3,et=4,ut=5,On=6,Pn=7,Fn=8,Dn=9,Mn=10,zn=11,Bn=12,Un=13,ve=14;let jn=class{_in="";_pos=0;_quote=!1;constructor(e){e==null?this.setInput(""):this.setInput(e)}setInput(e){this._in=e,this._pos=0}get position(){return this._pos}nextToken(){let e=this._pos;for(;this.hasMoreChars();){e=this._pos;let t=this.nextChar();if(this._quote)if(t=='"'){if(this.hasMoreChars()){if(t=this.nextChar(),t=='"')return new de(ve,'"',this._pos-2);this._pos--}this._quote=!1;continue}else return this.createToken(ve,""+t);switch(t){case" ":case`
`:case"\r":case"	":continue;case'"':this._quote=!0;continue;case"|":return this.createToken(ht,"|");case"*":return this.createToken(Qe,"*");case"+":return this.createToken(et,"+");case"?":return this.createToken(ut,"?");case"(":return this.createToken(On,"(");case")":return this.createToken(Pn,")");case"[":return this.createToken(Fn,"[");case"]":return this.createToken(Dn,"]");case"^":return this.createToken(zn,"^");case".":return this.createToken(Mn,".");case"-":return this.createToken(Bn,"-");case"\\":return this.processesAdvChar();case"{":return this.processesDefinition();default:return this.createToken(ve,""+t)}}if(this._quote)throw new fe(`Era esperado '"'`,e);return null}processesAdvChar(){return new de(ve,""+this.getSpecialChar(),this._pos-1)}createToken(e,t){return new de(e,t,this._pos-1)}getSpecialChar(){const e=this._pos;if(!this.hasMoreChars)throw new fe("Era esperado um Caracter Especial",e);const t=this.nextChar();switch(t){case"b":return"\b";case"n":return`
`;case"f":return"\f";case"r":return"\r";case"e":return"\x1B";case"t":return"	";case"	":return"	";case"s":return" ";case" ":return" ";case'"':return'"';case"\\":return"\\";case"|":return"|";case"*":return"*";case"+":return"+";case"?":return"?";case"(":return"(";case")":return")";case"{":return"{";case"}":return"}";case"[":return"[";case"]":return"]";case".":return".";case"^":return"^";case"-":return"-";default:if(this.isNumber(t))return this.getCharByCode(t);throw new fe("Caracter especial inválido: '"+t+"'",this._pos)}}getCharByCode(e){const t=this._pos-1;this.hasMoreChars()&&this.isNumber(this.nextChar())&&this.hasMoreChars()&&!this.isNumber(this.nextChar())&&this._pos--;const n=this._in.substring(t,this._pos),s=parseInt(n,10);if(s>255)throw new fe("Valor decimal inválido (>255)",t);return String.fromCharCode(s)}processesDefinition(){let e="";const t=this._pos;let n="{";for(;this.hasMoreChars();){if(n=this.nextChar(),n==null)return null;if(n=="}")break;if(n!="_"&&!this.isLetterOrDigit(n))throw new fe("Caracter inválido em uma definição: '"+n+"'",this._pos-1);e+=n}if(n!="}"&&!this.hasMoreChars())throw new fe("Fim de expressão inesperado",this._pos);return new de(Un,e.toString(),t)}hasMoreChars(){return this._pos<this._in.length}nextChar(){return this.hasMoreChars()?this._in.charAt(this._pos++):"￿"}isLetterOrDigit(e){return e.toLowerCase()!=e.toUpperCase()||e.charCodeAt(0)==170||e.charCodeAt(0)==186||this.isNumber(e)}isNumber(e){return typeof e!="string"||e.trim()===""?!1:!Number.isNaN(Number(e))}};class Vt{position=-1;nullable=!1;first=new le;last=new le}class he{_left;_right;_id=0;_value="";_backtrack=!0;_context=-1;_end=-1;_alphabet=new le;_metaData=new Vt;constructor(e,t,n){this._id=e,this._left=t,this._right=n,t!=null&&this.alphabet.addAll(t.alphabet),n!=null&&this.alphabet.addAll(n.alphabet)}deepestLeft(){let e=this;for(;;){let t=e.left;if(t==null&&(t=e.right),t==null)break;e=t}return e}static createUnionNode(e,t){const n=new he(ht,e,t);return n.value="|",n}static createConcatNode(e,t){const n=new he(-1,e,t);return n.value="&",n}static createContextNode(e,t){const n=t.deepestLeft();if(n==null)return null;n.context=0;const s=new he(-1,e,t);return s.value="&",s}static createClosureNode(e){const t=new he(Qe,e,null);return t.value="*",t}static createClosureObNode(e){const t=new he(et,e,null);return t.value="+",t}static createOptionalNode(e){const t=new he(ut,e,null);return t.value="?",t}static createIntervalNode(e,t){const n=new he(ve,null,null);for(let r=e.charCodeAt(0);r<=t.charCodeAt(0);r++)n.alphabet.add(r);let s="[";for(const r of n.alphabet)s+=String.fromCharCode(r);return s+="]",n.value=s,n}static createComplementNode(e){const t=new he(ve,null,null);e.alphabet.has(9)||t.alphabet.add(9),e.alphabet.has(10)||t.alphabet.add(10),e.alphabet.has(13)||t.alphabet.add(13),e.alphabet.has(32)||t.alphabet.add(32);for(let s=32;s<=126;s++)e.alphabet.has(s)||t.alphabet.add(s);for(let s=161;s<=255;s++)e.alphabet.has(s)||t.alphabet.add(s);let n="[";for(const s of t.alphabet)n+=String.fromCharCode(s);return n+="]",t.value=n,t}static createCharNode(e){const t=new he(ve,null,null);return t.value=e,t.alphabet.add(e.charCodeAt(0)),t}static createAllNode(){const e=new he(ve,null,null);e.alphabet.add(9);for(let n=32;n<=126;n++)e.alphabet.add(n);for(let n=161;n<=255;n++)e.alphabet.add(n);let t="[";return e.alphabet.list().forEach(n=>{t+=String.fromCharCode(n)}),t+="]",e.value=t,e}static createEndNode(e,t){const n=new he(ve,null,null);return n.end=e,n.backtrack=t,n.value="#"+n.end,n}clone(){const e=structuredClone(this);return e.alphabet=new le(this._alphabet),e.metaData=new Vt,e.backtrack=!0,e.context=-1,e.end=-1,this._left!=null&&(e.left=this._left.clone()),this._right!=null&&(e.right=this._right.clone()),e}get left(){return this._left}set left(e){this._left=e}get right(){return this._right}set right(e){this._right=e}get id(){return this._id}set id(e){this._id=e}get value(){return this._value}set value(e){this._value=e}doBacktrack(){return this._backtrack}set backtrack(e){this._backtrack=e}get backtrack(){return this._backtrack}get context(){return this._context}set context(e){this._context=e}get end(){return this._end}set end(e){this._end=e}get alphabet(){return this._alphabet}set alphabet(e){this._alphabet=e}get metaData(){return this._metaData}set metaData(e){this._metaData=e}toString(){return String(0)}toStringLevel(e){let t="";for(let n=0;n<e-2;n++)t+=" ";return e>2&&(t+="\\-"),t+=`value
`,this._left!=null&&(t+=String(this._left?.toStringLevel(e+2))),this._right!=null&&(t+=String(this._right?.toStringLevel(e+2))),t}}var ft={exports:{}},Xt;function $n(){return Xt||(Xt=1,(function(E){(function(e){{var t=E.exports=e();t.HashMap=t}})(function(){function e(r){switch(this.clear(),arguments.length){case 0:break;case 1:{"length"in r?n(this,Array.prototype.concat.apply([],r)):this.copy(r);break}default:n(this,arguments);break}}var t=e.prototype={constructor:e,get:function(r){var i=this._data[this.hash(r)];return i&&i[1]},set:function(r,i){var o=this.hash(r);o in this._data||this.size++,this._data[o]=[r,i]},multi:function(){n(this,arguments)},copy:function(r){for(var i in r._data)i in this._data||this.size++,this._data[i]=r._data[i]},has:function(r){return this.hash(r)in this._data},search:function(r){for(var i in this._data)if(this._data[i][1]===r)return this._data[i][0];return null},delete:function(r){var i=this.hash(r);i in this._data&&(this.size--,delete this._data[i])},type:function(r){var i=Object.prototype.toString.call(r),o=i.slice(8,-1).toLowerCase();return!r&&(o==="domwindow"||o==="window")?r+"":o},keys:function(){var r=[];return this.forEach(function(i,o){r.push(o)}),r},values:function(){var r=[];return this.forEach(function(i){r.push(i)}),r},entries:function(){var r=[];return this.forEach(function(i,o){r.push([o,i])}),r},count:function(){return this.size},clear:function(){this._data={},this.size=0},clone:function(){return new e(this)},hash:function(r){switch(this.type(r)){case"undefined":case"null":case"boolean":case"number":case"regexp":return r+"";case"date":return"♣"+r.getTime();case"string":return"♠"+r;case"array":for(var i=[],o=0;o<r.length;o++)i[o]=this.hash(r[o]);return"♥"+i.join("⁞");default:return r.hasOwnProperty("_hmuid_")||(r._hmuid_=++e.uid,s(r,"_hmuid_")),"♦"+r._hmuid_}},forEach:function(r,i){for(var o in this._data){var a=this._data[o];r.call(i||this,a[1],a[0])}}};e.uid=0,typeof Symbol<"u"&&typeof Symbol.iterator<"u"&&(t[Symbol.iterator]=function(){var r=this.entries(),i=0;return{next:function(){if(i===r.length)return{done:!0};var o=r[i++];return{value:{key:o[0],value:o[1]},done:!1}}}}),["set","multi","copy","delete","clear","forEach"].forEach(function(r){var i=t[r];t[r]=function(){return i.apply(this,arguments),this}}),e.prototype.remove=e.prototype.delete;function n(r,i){for(var o=0;o<i.length;o+=2)r.set(i[o],i[o+1])}function s(r,i){Object.defineProperty&&Object.defineProperty(r,i,{enumerable:!1})}return e})})(ft)),ft.exports}var Hn=$n(),dt=rt(Hn);class Jt{_definitions=new dt;_expressions=new dt;_specialCases=new dt;_root=null;_alphabet=new le;_lastPosition=-1;_tokenList=new ce;_sensitive=!0;_contextCount=0;_next=[new le];_nodes=[];constructor(e){this._sensitive=e}addDefinition(e,t){if(this._definitions.has(e))throw new Te("Definição repetida: "+e);this._definitions.set(e,t),this._alphabet.addAll(t.alphabet)}getDefinitionById(e){return this._definitions.get(e)}addExpression(e,t,n){this._alphabet.addAll(t.alphabet),this._tokenList.contains(e)||this._tokenList.add(e);const s=this._tokenList.indexOf(e),r=he.createEndNode(s+2,n);t=he.createConcatNode(t,r);let i=t.left?.right;i!=null&&(i=i.deepestLeft(),i!=null&&i.context>=0&&(this._contextCount++,i.context=this._contextCount,r.context=this._contextCount)),this._expressions.set(e,t),this._root==null?this._root=t:this._root=he.createUnionNode(this._root,t)}addIgnore(e,t){this._alphabet.addAll(e.alphabet);const n=he.createEndNode(0,t);e=he.createConcatNode(e,n),this._root==null?this._root=e:this._root=he.createUnionNode(this._root,e)}addSpecialCase(e,t,n){if(this._sensitive||(n=n.toLocaleUpperCase()),!this._expressions.has(t))throw new Te("Token '"+t+"' não definido");const s=this._tokenList.indexOf(t)+2;if(this._tokenList.contains(e))throw new Te("Token '"+e+"' já definido");const r=this._tokenList.size()+2;let i=this._specialCases.get(s);if(i==null)i=new De,this._specialCases.set(s,i);else if(i.get(n)!=null)throw new Te("Já houve a definição de um caso especial de '"+t+`' com o valor"`+n+'"');i.set(n,r),this._tokenList.add(e)}generateAutomata(){const e=new ce,t=new De,n=new De,s=new De,r=new De,i=new De;if(this._root==null)throw new Te("A Especificação Léxica deve conter a definição de pelo menos um Token");this.computeNext(),e.add(this._root.metaData.first);for(let o=0;o<e.size();o++){const a=e.get(o);for(const l of this._alphabet){const _=String.fromCharCode(l),u=new le;for(const c of a){const m=this._nodes[c];if(m.end>=0){const f=o;if(!r.has(f)&&(r.set(f,m.end),i.set(f,m.backtrack),m.context>0&&!t.has(f))){const T=n.get(m.context);T!=null?t.set(f,T):t.set(f,0)}}m.context>=0&&(n.has(m.context)||n.set(m.context,o)),m.alphabet.has(_.charCodeAt(0))&&u.addAll(this._next[c])}let p=-1;if(u.isEmpty()||(p=this.getPositionStates(e,u),p==-1&&(e.add(u),p=e.size()-1)),s.has(o)||s.set(o,new Map),p!=-1){const c=s.get(o);if(c==null)return null;c.set(_,p)}}}return this.makeAtomata(e,s,r,i,t)}makeAtomata(e,t,n,s,r){const i=new ce;for(const c of t)i.add(c[1]);const o=[];o.length=e.size();for(let c=0;c<o.length;c++){const m=n.get(c);m!=null?o[c]=m:o[c]=-1}for(let c=0;c<o.length;c++){const m=s.get(c);m!=null&&m==!1&&this.computPrecedersOf(c,i).forEach(T=>{o[T]<0&&(o[T]=-2)})}const a=[],l=Array(this._tokenList.size()+2).fill(void 0);for(let c=0;c<l.length;c++){const m=this._specialCases.get(c),f=a.length;if(m!=null){const g=new Map([...m.entries()].sort());for(const[S,A]of g.entries())a.push(new Gt(S,A))}const T=a.length;l[c]=[f,T]}const _=Object.assign([],a);let u=Object.setPrototypeOf(_,Gt.prototype);const p=Array.from({length:e.size()},()=>Array.from({length:2}));for(let c=0;c<p.length;c++)p[c][0]=0,p[c][1]=-1;for(const[c,m]of r.entries())p[m][0]=1,p[c][1]=m;return new Nn(this._alphabet,i,o,l,u,p,this._tokenList,this._sensitive)}getPositionStates(e,t){let n=0;for(const s of e){const r=s.list(),i=t.list();if(r.length===i.length&&r.every((a,l)=>a===i[l]))return n;n++}return-1}computPrecedersOf(e,t){const n=new Set;n.add(e);let s;do{s=!1;for(const r of n)e:for(let i=0;i<t.size();i++)for(const o of t.get(i).values())if(n.has(o)&&o==r&&!n.has(i)){n.add(i),s=!0;break e}}while(s);return n}computeNext(){this.computeMetaData(this._root),this._next=new Array(this._lastPosition+1),this._nodes=new Array(this._lastPosition+1);for(let e=0;e<this._lastPosition+1;e++)this._next[e]=new le;this.computeNextNode(this._root)}computeNextNode(e){if(e===null)throw Error("error");let t;switch(e.id){case-1:if(t=e.left,t!=null)for(const n of t.metaData.last){if(e.right==null)throw new Error("Node direita vazio");this._next[n].addAll(e.right.metaData.first)}break;case Qe:case et:if(e.left==null)throw new Error("Node direita vazio");for(const n of e.left.metaData.last)this._next[n].addAll(e.left.metaData.first);break;case ve:this._nodes[e.metaData.position]=e;break}e.left!=null&&this.computeNextNode(e.left),e.right!=null&&this.computeNextNode(e.right)}computeMetaData(e){if(e==null)return;e.left!=null&&this.computeMetaData(e.left),e.right!=null&&this.computeMetaData(e.right);const t=e.metaData,n=e.left,s=e.right;switch(e.id){case ve:this._lastPosition++,t.position=this._lastPosition,t.nullable=!1,t.first.add(this._lastPosition),t.last.add(this._lastPosition);break;case ut:case Qe:t.nullable=!0,n!=null&&(n.metaData.first.list().forEach(r=>t.first.add(r)),n.metaData.last.list().forEach(r=>t.last.add(r)));break;case et:t.nullable=!1,n!=null&&(n.metaData.first.list().forEach(r=>t.first.add(r)),n.metaData.last.list().forEach(r=>t.last.add(r)));break;case ht:if(n==null||s==null)return;t.nullable=n.metaData.nullable||s.metaData.nullable,n.metaData.first.list().forEach(r=>t.first.add(r)),s.metaData.first.list().forEach(r=>t.first.add(r)),n.metaData.last.list().forEach(r=>t.last.add(r)),s.metaData.last.list().forEach(r=>t.last.add(r));break;case-1:if(n==null||s==null)return;t.nullable=n.metaData.nullable&&s.metaData.nullable,n.metaData.first.list().forEach(r=>t.first.add(r)),n.metaData.nullable&&s.metaData.first.list().forEach(r=>t.first.add(r)),s.metaData.last.list().forEach(r=>t.last.add(r)),s.metaData.nullable&&n.metaData.last.list().forEach(r=>t.last.add(r));break}}}let Gn=class{_exp_simp1=new Be;_termo1=new Be;_fator=new Be;_gen;_token=null;constructor(e){this._gen=e}executeAction(e,t){this._token=t;try{switch(e){case 0:break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break;case 6:this.action6();break;case 7:this.action7();break;case 8:this.action8();break;case 9:this.action9();break;case 10:this.action10();break;case 11:this.action11();break;case 12:this.action12();break;case 13:this.action13();break;case 14:this.action14();break;case 15:this.action15();break}}catch(n){if(n instanceof Te)throw new Te(n.message)}}get root(){return this._exp_simp1.pop()}action1(){const e=this._termo1.pop();e!=null&&this._exp_simp1.push(e)}action2(){const e=this._exp_simp1.pop(),t=this._termo1.pop();if(e==null||t==null)return;const n=he.createUnionNode(e,t);n!=null&&this._exp_simp1.push(n)}action3(){const e=this._exp_simp1.pop(),t=this._exp_simp1.pop();if(t==null||e==null)return;const n=he.createContextNode(t,e);n!=null&&this._exp_simp1.push(n)}action4(){if(this._fator==null)return;const e=this._fator.pop();e!=null&&this._termo1.push(e)}action5(){const e=this._termo1.pop(),t=this._fator.pop();e==null||t==null||this._termo1.push(he.createConcatNode(e,t))}action6(){const e=this._fator.pop();e!=null&&this._fator.push(he.createClosureNode(e))}action7(){const e=this._fator.pop();e!=null&&this._fator.push(he.createClosureObNode(e))}action8(){const e=this._fator.pop();e!=null&&this._fator.push(he.createOptionalNode(e))}action9(){const e=this._exp_simp1.pop();e!=null&&this._fator.push(e)}action10(){this._fator.push(he.createAllNode())}action11(){if(this._token==null)return;const e=this._gen.getDefinitionById(this._token.lexeme);if(e==null)throw new Te("Definição não declarada: "+this._token.lexeme,this._token.position);const t=Object.assign({},e);this._fator.push(Object.setPrototypeOf(t,he.prototype))}action12(){this._token!=null&&this._fator.push(he.createCharNode(this._token.lexeme.charAt(0)))}action13(){const e=this._fator.pop();e!=null&&this._fator.push(he.createComplementNode(e))}action14(){const e=this._fator.pop(),t=this._fator.pop();if(t==null||e==null)return;const n=he.createUnionNode(t,e);n!=null&&this._fator.push(n)}action15(){if(this._token==null)return;const e=this._fator.pop(),t=he.createCharNode(this._token.lexeme.charAt(0));if(e==null||t==null)return;const n=String.fromCharCode(e.alphabet.list()[0]),s=String.fromCharCode(t.alphabet.list()[0]);if(n>=s)throw new Te("Intervalo inválido",this._token.position);this._fator.push(he.createIntervalNode(n,s))}};const we=["","Era esperado fim de linha",'Era esperado "|"','Era esperado "*"','Era esperado "+"','Era esperado "?"','Era esperado "("','Era esperado ")"','Era esperado "["','Era esperado "]"','Era esperado "."','Era esperado "^"','Era esperado "-"',"Era esperada uma definição","Era esperado um caractere","Era esperada uma expressão regular","Era esperada uma expressão regular","Era esperado ), |, ^ ou o fim da expressão","Era esperada uma expressão","Era esperada uma expressão","Contexto inválido","Termo inválido","Operador inválido","Fator inválido","Era esperado ^ ou um caractere","Classe de caracteres inválida","Item inválido: era esperado um caractere","Era esperado -, ], ou um caractere"];class Qt{_currentToken=null;_previousToken=null;_scanner=null;_semanticAnalyser=null;parse(e,t){if(this._scanner=new jn(e),this._semanticAnalyser=new Gn(t),this._currentToken=this._scanner.nextToken(),this._currentToken==null&&(this._currentToken=new de(Je,"$",0)),this.reg_exp_ctxt(),this._currentToken.id!=Je)throw new Z(we[Je],this._currentToken.position);return this._semanticAnalyser.root}match(e){if(this._currentToken==null)throw new se("Atributo durante comparação do REParser.");if(this._scanner==null)throw new se("Scanner é nulo.");if(this._currentToken.id==e){if(this._previousToken=this._currentToken,this._currentToken=this._scanner.nextToken(),this._currentToken==null){let t=0;this._previousToken!=null&&(t=this._previousToken.position+this._previousToken.lexeme.length),this._currentToken=new de(Je,"$",t)}}else throw new Z(we[e],this._currentToken.position)}reg_exp_ctxt(){if(this._currentToken==null)throw new se("Atributo Nulo durante reg_exp_ctxt do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.reg_exp(),this.context();break;default:throw new Z(we[15],this._currentToken.position)}}reg_exp(){if(this._currentToken==null)throw new se("Atributo Nulo durante reg_exp do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.exp(),this._semanticAnalyser.executeAction(1,this._previousToken),this.reg_exp_c();break;default:throw new Z(we[16],this._currentToken.position)}}reg_exp_c(){if(this._currentToken==null)throw new se("Atributo Nulo durante reg_exp_c do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 7:case 11:break;case 2:this.match(2),this.exp(),this._semanticAnalyser.executeAction(2,this._previousToken),this.reg_exp_c();break;default:throw new Z(we[17],this._currentToken.position)}}exp(){if(this._currentToken==null)throw new se("Atributo Nulo durante exp do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(4,this._previousToken),this.exp_c();break;default:throw new Z(we[18],this._currentToken.position)}}exp_c(){if(this._currentToken==null)throw new se("Atributo Nulo durante exp_c do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 7:case 11:break;case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(5,this._previousToken),this.exp_c();break;default:throw new Z(we[19],this._currentToken.position)}}context(){if(this._currentToken==null)throw new se("Atributo Nulo durante context do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:break;case 11:this.match(11),this.reg_exp(),this._semanticAnalyser.executeAction(3,this._previousToken);break;default:throw new Z(we[20],this._currentToken.position)}}term(){if(this._currentToken==null)throw new se("Atributo Nulo durante term do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.factor(),this.op();break;default:throw new Z(we[21],this._currentToken.position)}}op(){if(this._currentToken==null)throw new se("Atributo Nulo durante op do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 6:case 7:case 8:case 10:case 11:case 13:case 14:break;case 3:this.match(3),this._semanticAnalyser.executeAction(6,this._previousToken);break;case 4:this.match(4),this._semanticAnalyser.executeAction(7,this._previousToken);break;case 5:this.match(5),this._semanticAnalyser.executeAction(8,this._previousToken);break;default:throw new Z(we[22],this._currentToken.position)}}factor(){if(this._currentToken==null)throw new se("Atributo Nulo durante factor do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:this.match(6),this.reg_exp(),this.match(7),this._semanticAnalyser.executeAction(9,this._previousToken);break;case 8:this.match(8),this.end_class();break;case 10:this.match(10),this._semanticAnalyser.executeAction(10,this._previousToken);break;case 13:this.match(13),this._semanticAnalyser.executeAction(11,this._previousToken);break;case 14:this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken);break;default:throw new Z(we[23],this._currentToken.position)}}end_class(){if(this._currentToken==null)throw new se("Atributo Nulo durante end_class do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 11:this.match(11),this.item(),this.class_c(),this.match(9),this._semanticAnalyser.executeAction(13,this._previousToken);break;case 14:this.item(),this.class_c(),this.match(9);break;default:throw new Z(we[24],this._currentToken.position)}}class_c(){if(this._currentToken==null)throw new se("Atributo Nulo durante class_c do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:break;case 14:this.item(),this.class_c(),this._semanticAnalyser.executeAction(14,this._previousToken);break;default:throw new Z(we[25],this._currentToken.position)}}item(){if(this._currentToken==null)throw new se("Atributo Nulo durante item do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");if(this._currentToken.id===14)this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken),this.end_interval();else throw new Z(we[26],this._currentToken.position)}end_interval(){if(this._currentToken==null)throw new se("Atributo Nulo durante end_interval do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:case 14:break;case 12:this.match(12),this.match(14),this._semanticAnalyser.executeAction(15,this._previousToken);break;default:throw new Z(we[27],this._currentToken.position)}}}var en=(E=>(E[E.DEFINITION=0]="DEFINITION",E[E.TOKEN=1]="TOKEN",E[E.NON_TERMINAL=2]="NON_TERMINAL",E[E.GRAMMAR=3]="GRAMMAR",E))(en||{});class ge extends Error{static Mode=en;_mode;_index;_cause;constructor(e,t,n){super(n.message),this._cause=n,this._index=t,this._mode=e,Object.setPrototypeOf(this,ge.prototype)}}class Kn{_lexeme;_base;constructor(e,t){this._lexeme=e,this._base=t}get lexeme(){return this._lexeme}get base(){return this._base}}class Zn{_expressionFor=new Map;_specialCasesValues=new Map;_definitions=new ce;_tokens=new ce;_specialCases=new ce;_ignore="";addDefinition(e,t){this._definitions.add(e),this._expressionFor.set(e,t)}addToken(e,t){this._tokens.add(e),this._expressionFor.set(e,t)}clear(){this._definitions.clear(),this._tokens.clear(),this._specialCases.clear(),this._expressionFor.clear(),this._specialCasesValues.clear()}expressionFor(e){return this._expressionFor.get(e)}get tokens(){return this._tokens}get definitions(){return this._definitions}get specialCases(){return this._specialCases}get ignore(){return this._ignore}addIgnore(e){this._ignore.length>0?this._ignore=this.ignore+"|"+e:this._ignore=e}addSpecialCase(e,t,n){this._specialCases.add(e),this._specialCasesValues.set(e,new Kn(t,n))}getSpecialCaseValue(e){return this._specialCasesValues.get(e)}getFA(e){const t=new Qt,n=new Jt(e);let s=-1;try{for(s=0;s<this._definitions.size();s++){const r=this.expressionFor(this._definitions.get(s));if(r==null)throw new se("Expressão de Definições vazia.");const i=t.parse(r,n);if(i==null)throw new se("Erro no Parse do Automata Finito.");n.addDefinition(this._definitions.get(s),i)}}catch(r){throw new ge(ge.Mode.DEFINITION,s,r)}try{for(s=0;s<this._tokens.size();s++){const r=this.expressionFor(this._tokens.get(s));if(r==null)throw new se("Expressão de Token vazia.");const i=t.parse(r,n);if(i==null)throw new se("Erro no Parse do Automata Finito.");n.addExpression(this._tokens.get(s),i,!0)}}catch(r){throw new ge(ge.Mode.TOKEN,s,r)}try{for(s=0;s<this._specialCases.size();s++){const r=this._specialCases.get(s),i=this._specialCasesValues.get(r);if(i==null)throw new se("Valor do Caso Especial vazio.");n.addSpecialCase(r,i.base,i.lexeme)}}catch(r){throw new ge(ge.Mode.TOKEN,s,r)}try{if(this._ignore.length>0){const r=t.parse(this._ignore,n);if(r==null)throw new se("Nó ignorado vazio.");n.addIgnore(r,!0)}}catch(r){throw new ge(ge.Mode.TOKEN,this._tokens.size(),r)}try{const r=n.generateAutomata();if(r==null)throw new se("Erro ao criar Autômato Finito.");return r}catch(r){throw new ge(ge.Mode.TOKEN,this._tokens.size(),r)}}}class me{static EPSILON=0;static DOLLAR=1;static DERIVES=2;static PIPE=3;static SEMICOLON=4;static TERM=5;static NON_TERM=6;static ACTION=7;static START_SYMBOL=8;static FIRST_NON_TERMINAL=8;static FIRST_SEMANTIC_ACTION=17;static LAST_SEMANTIC_ACTION=22;static TABLE=[[-1,-1,-1,-1,-1,0,-1],[2,-2,-2,-2,-2,1,-2],[-3,-3,-3,-3,-3,3,-3],[-4,-4,4,5,-4,-4,-4],[-5,-5,-5,-1,6,7,8],[-6,-6,10,10,9,9,9],[-7,-7,-7,-7,11,0,-7],[-8,-8,-8,-8,-8,12,-8],[-9,-9,-9,-9,-9,-9,13]];static PRODUCTIONS=[[10,9],[8],[0],[15,17,2,12,18,11,4],[3,12,18,11],[0],[14,19,13],[15,19,13],[16,20,13],[12],[0],[5,21],[6,21],[7,22]];static EXPECTED_MESSAGE=["î","$","::=","|",";","um símbolo terminal","um símbolo não-terminal","uma ação semântica"];static PARSER_ERROR=["Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal","Era esperado '|' ou ';'","Era esperado um Terminal, um Não-Terminal, ou uma Ação Semântica","Construção inválida","Era esperado um Terminal","Era esperado um Não-Terminal","Era esperado uma Ação Semântica"]}class tn{symbols;actionCount=0;lhs;rhs;productions;token;constructor(e){this.symbols=e,this.lhs=0,this.rhs=[],this.productions=new ce,this.token=new de(-1,"ERROR",-1)}getPoductions(){return this.productions}executeAction(e,t){switch(this.token=t,e){case 0:this.action0();break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break}}action0(){const e=this.symbols.get(this.token.lexeme);if(e===void 0)throw new Te("Lexema não pode ser nulo");this.lhs=e}action1(){const e=new Ce(null,this.lhs);for(let t=0;t<this.rhs.length;t++)e.add_rhs(this.rhs[t]);this.productions.add(e),this.rhs=[]}action2(){const e=this.symbols.get(this.token.lexeme);if(e===void 0)throw new Te("Lexema não pode ser nulo");const t=e;t!=me.EPSILON&&this.rhs.push(t)}action3(){const e=Number(this.token.lexeme);this.rhs.push(this.symbols.size+e+1)}action4(){if(!this.symbols.has(this.token.lexeme))throw new Te("Símbolo "+this.token.lexeme+" não declarado",this.token.position)}action5(){const e=Number(this.token.lexeme);this.actionCount<e&&(this.actionCount=e)}}class pt{input;pos;returnComents=!1;endPosition;constructor(e){e==null?(this.input="",this.pos=0,this.endPosition=0):(this.input=e,this.pos=0,this.endPosition=e.length)}setReturnComents(e){this.returnComents=e}setInput(e){this.input=e,this.pos=0,this.endPosition=e.length}nextToken(){for(;this.hasMoreChars();){const e=this.pos,t=this.nextChar();switch(t){case" ":case`
`:case"\r":case"	":continue;case":":return this.analyseDerives();case"|":return new de(me.PIPE,"|",e);case";":return new de(me.SEMICOLON,";",e);case"#":return this.analyseAction();case"<":return this.analyseNonTerminal();case"_":case'"':return this.analyseTerminal(t);case"/":{const n=this.analyseComent();if(this.returnComents)return n;continue}default:if(this.isLetter(t))return this.analyseTerminal(t);throw new fe("Caracter Inválido: '"+t+"'",e)}}return null}isLetter(e){return e.toLowerCase()!=e.toUpperCase()||e.charCodeAt(0)==170||e.charCodeAt(0)==186}analyseComent(){const e=this.pos-1;if(!this.hasMoreChars())throw new fe("Caracter Inválido: '/'",e);let t=this.nextChar();if(t!="/")throw this.pushChar(),new fe("Caracter Inválido: '/'",e);let n="//";for(;this.hasMoreChars();){if(t=this.nextChar(),t==`
`){this.pushChar();break}n+=t}return new de(-1,n.toString(),e)}analyseDerives(){const e=this.pos-1;if(this.input.length-e>=3){let t=this.nextChar();if(t==":"&&(t=this.nextChar(),t=="="))return new de(me.DERIVES,"::=",e)}throw new fe("Símbolo Inválido",e)}getPosition(){return this.pos}setPosition(e){this.pos=e}setEnd(e){this.endPosition=e}setRange(e,t){this.setPosition(e),this.setEnd(t)}analyseTerminal(e){const t=this.pos-1;let n="";if(n+=e,e=='"'){let s=!1;for(;this.hasMoreChars();)if(e=this.nextChar(),n+=e,e=='"')if(this.hasMoreChars())if(e=this.nextChar(),e=='"')n+=e;else{this.pushChar(),s=!0;break}else s=!0;else if(e==`
`)throw new fe("Terminal inválido",t);if(n.length==0||!s)throw new fe("Terminal inválido",t)}else for(;this.hasMoreChars();){if(e=this.nextChar(),e!="_"&&!this.isLetterOrDigit(e)){this.pushChar();break}n+=e}return new de(me.TERM,n.toString(),t)}isLetterOrDigit(e){return this.isLetter(e)||/^[0-9]$/.test(e)}analyseNonTerminal(){const e=this.pos-1;let t="",n="<";for(;this.hasMoreChars()&&(n=this.nextChar(),n!=">");){if(!this.isLetterOrDigit(n)&&n!="_")throw new fe("Não-Terminal inválido",e);t+=n}if(t.length==0||n!=">")throw new fe("Não-Terminal inválido",e);return new de(me.NON_TERM,"<"+t+">",e)}analyseAction(){const e=this.pos-1;let t="";for(;this.hasMoreChars();){const n=this.nextChar();if(!this.isDigit(n)){this.pushChar();break}t+=n}if(t.length==0)throw new fe("Ação Semântica inválida",e);return new de(me.ACTION,t.toString(),e)}isDigit(e){return!isNaN(Number(e))&&!isNaN(parseInt(e))}hasMoreChars(){return this.pos<this.endPosition}nextChar(){return this.hasMoreChars()?this.input.charAt(this.pos++):"￿"}pushChar(){this.pos--}}class nn{stack=[];currentToken=null;previousToken=new de(-1,"ERROR",-1);scanner=new pt;semanticAnalyser=new tn(new Map);parse(e,t,n){const s=new De;s.set(ie.EPSILON_STR,0);let r=2;const i=new pt;let o=0,a=new Set;try{for(let u=0;u<e.size();u++){const p=e.get(u);if(p==`
`){o++,e.removeByIndex(u),u--;continue}i.setInput(p);let c=i.nextToken();if(c==null)e.removeByIndex(u),u--;else{if(c.id!=me.TERM)throw new Te("Era esperada a declaração de um terminal",c.position);const m=c.lexeme;if(a.has(m))throw new Te("Terminal repetido : "+m,c.position);if(a.add(m),e.set(u,m),s.set(m,r),r++,(c=i.nextToken())!=null)throw new Te("Cada linha deve conter a declaração de apenas um símbolo terminal",c.position)}}if(e.size()==0)throw new Te("Conjunto de Terminais não pode ser vazio",0)}catch(u){throw new ge(ge.Mode.TOKEN,o,u)}o=0,a=new Set;try{for(let u=0;u<t.size();u++){const p=t.get(u);if(p==`
`){o++,t.removeByIndex(u),u--;continue}i.setInput(p);let c=i.nextToken();if(c==null)t.removeByIndex(u),u--;else{if(c.id!=me.NON_TERM)throw new Te("Era esperada a declaração de um não-terminal",c.position);const m=c.lexeme;if(a.has(m))throw new Te("Não-terminal repetido : "+m,c.position);if(a.add(m),t.set(u,m),s.set(m,r),r++,(c=i.nextToken())!=null)throw new Te("Cada linha deve conter a declaração de apenas um símbolo não-terminal",c.position)}}if(t.size()==0)throw new Te("Conjunto de Não-Terminais não pode ser vazio",0)}catch(u){throw new ge(ge.Mode.NON_TERMINAL,o,u)}try{this.parseByMap(n,s)}catch(u){throw new ge(ge.Mode.GRAMMAR,-1,u)}const l=this.semanticAnalyser.getPoductions(),_=2+e.size();return new ie(e.toArray(),t.toArray(),l,_)}parseByMap(e,t){for(this.scanner=new pt(e),this.semanticAnalyser=new tn(t),this.stack.push(me.DOLLAR),this.stack.push(me.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););}step(){const e=this.stack.pop();if(e===void 0)return!1;let t;if(this.currentToken==null?t=me.DOLLAR:t=this.currentToken.id,e==me.EPSILON)return!1;if(this.isTerminal(e)){if(e==t)return this.stack.length==0?!0:(this.previousToken=this.currentToken,this.currentToken=this.scanner.nextToken(),!1);throw new Z("Era esperado "+me.EXPECTED_MESSAGE[e],this.scanner.getPosition())}else if(this.isNonTerminal(e)){const n=me.TABLE[e-me.FIRST_NON_TERMINAL][t-1];if(n>=0){const s=me.PRODUCTIONS[n];if(s===void 0)throw new Z("Produção não definida");for(let r=s.length-1;r>=0;r--)this.stack.push(s[r]);return!1}else throw new Z(me.PARSER_ERROR[e-me.FIRST_NON_TERMINAL],this.scanner.getPosition())}else if(this.isSemanticAction(e)){if(this.previousToken===null)throw new fe("Token anterior é Nulo");return this.semanticAnalyser.executeAction(e-me.FIRST_SEMANTIC_ACTION,this.previousToken),!1}else return!1}isTerminal(e){return e>=0&&e<me.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=me.FIRST_NON_TERMINAL&&e<me.FIRST_SEMANTIC_ACTION}isSemanticAction(e){return e>=me.FIRST_SEMANTIC_ACTION&&e<=me.LAST_SEMANTIC_ACTION}}class pe{static ID=0;static STR=1;static RE=2;static COLON=3;static EQUALS=4;static COMMENT=5;static ERROR=6;_text="";_pos=0;_endPos=0;_regularMode=!1;_specialCaseMode=!1;set text(e){this._text=e,this.setRange(0,this._text.length),this._regularMode=!1,this._specialCaseMode=!1}setRange(e,t){this._pos=e,this._endPos=t}nextToken(){if(!this.hasMoreChars())return null;if(this._regularMode)return this._specialCaseMode?(this._regularMode=!1,this._specialCaseMode=!1,this.nextToken()):this.parseRE();for(;this.hasMoreChars();){const e=this._pos,t=this.nextChar();switch(t){case`
`:case"\r":this._specialCaseMode=!1,this._regularMode=!1;case" ":case"	":continue;case":":return this._regularMode=!0,new de(pe.COLON,":",e);case"=":return this._specialCaseMode=!0,new de(pe.EQUALS,"=",e);case'"':return this.getString();case"/":return this.getComment();default:return this.isLetter(t)?this.getId():this.getError()}}return null}parseRE(){const e=this._pos;for(this._regularMode=!1;this.hasMoreChars();){const n=this.nextChar();if(n==`
`){this._pos--;break}else if(n=="/"&&this.hasMoreChars()){if(this.nextChar()=="/")return this._pos-=2,this._regularMode=!1,new de(pe.RE,this._text.substring(e,this._pos),e);this._pos--}}const t=this._text.substring(e,this._pos);return new de(pe.RE,t,e)}getString(){const e=this._pos-1;for(;this.hasMoreChars();){const t=this.nextChar();if(t==`
`)break;if(t=='"')if(this.hasMoreChars()){if(this.nextChar()!='"')return this._pos--,new de(pe.STR,this._text.substring(e,this._pos),e)}else return new de(pe.STR,this._text.substring(e,this._pos),e)}return new de(pe.ERROR,this.text.substring(e,this._pos),e)}getId(){const e=this._pos-1;for(;this.hasMoreChars();){const t=this.nextChar();if(!this.isLetterOrDigit(t)&&t!="_"){this._pos--;break}}return new de(pe.ID,this._text.substring(e,this._pos),e)}getError(){const e=this._pos-1;for(;this.hasMoreChars();)if(` 	
\r`.indexOf(this.nextChar())==-1){this._pos--;break}return new de(pe.ERROR,this._text.substring(e,this._pos),e)}getComment(){const e=this._pos-1;if(this.hasMoreChars()){if(this.nextChar()=="/"){for(;this.hasMoreChars();)if(this.nextChar()==`
`){this._pos--;break}return new de(pe.COMMENT,this._text.substring(e,this._pos),e)}this._pos--}return new de(pe.ERROR,this._text.substring(e,this._pos),e)}isLetter(e){return e.toLowerCase()!=e.toUpperCase()||e.charCodeAt(0)==170||e.charCodeAt(0)==186}isLetterOrDigit(e){return this.isLetter(e)||this.isNumber(e)}isNumber(e){return typeof e!="string"||e.trim()===""?!1:!Number.isNaN(Number(e))}hasMoreChars(){return this._pos<this._endPos}nextChar(){return this.hasMoreChars()?this._text.charAt(this._pos++):"￿"}}class Wn{static _instance;errorList;constructor(){this.errorList=new ce}static get Instance(){return this._instance||(this._instance=new this)}static get errorList(){return this.errorList}add(e){this.errorList.add(e)}}class sn{scanner=new pe;pos=0;gen=null;parseFA(e,t,n){this.gen=new Jt(n);try{this.parseDefs(e)}catch(s){Wn.Instance.add(s)}this.parseTokens(t);try{const s=this.gen.generateAutomata();if(s==null)throw new se("Automato gerado é nulo");return s}catch(s){throw console.log(s),new ge(ge.Mode.TOKEN,0,s)}}parseDefs(e){if(this.gen==null)return;const t=e.split(/(\n)/g);for(const n of t)if(n!=`
`){this.scanner.text=n;try{let s=this.nextToken();if(this.pos=0,s!=null&&s.id==pe.ID){const r=s.lexeme;if(this.pos=s.position+r.length,s=this.nextToken(),s!=null&&s.id==pe.COLON)if(this.pos=s.position+1,s=this.nextToken(),s!=null&&s.id==pe.RE){const i=s.lexeme;try{const o=this.parseRE(i);if(o==null)return;this.gen.addDefinition(r,o)}catch(o){const a=o;throw a.position=a.position+this.pos,a}}else throw new Z("Era esperado uma Expressão Regular",this.pos);else throw new Z("Era esperado ':'",this.pos)}else{if(s==null)continue;throw new Z("Era esperado um identificador",this.pos)}}catch(s){throw new ge(ge.Mode.DEFINITION,0,s)}}}parseTokens(e){let t=0;const n=e.split(/(\n)/g);for(const s of n){if(s===`
`){t++;continue}this.scanner.text=s;try{const r=this.nextToken();if(this.pos=0,r!=null)switch(this.pos=r.position+r.lexeme.length,r.id){case pe.COLON:this.parseIgnore();break;case pe.ID:case pe.STR:this.parseId(r);break;default:throw new fe("Era esperado um identificador",0)}}catch(r){throw console.warn("No parseTokens",r),new ge(ge.Mode.TOKEN,t,r)}}}parseIgnore(){const e=this.nextToken();if(e!=null&&e.id==pe.RE){const t=e.lexeme;try{if(this.gen==null)throw new se("Gerador de Autômatos Finitos não inicializado!");if(t.charAt(0)=="!"){const n=this.parseRE(t.substring(1));n!=null&&this.gen.addIgnore(n,!1)}else{const n=this.parseRE(t);n!=null&&this.gen.addIgnore(n,!0)}}catch(n){const s=n;throw s.position=s.position+e.position,s}}else throw new fe("Era esperado uma Expressão Regular",this.pos)}parseId(e){if(e==null)return;const t=e.lexeme;if(e=this.nextToken(),e==null)try{if(this.gen==null)return;const n=this.parseRE(t);if(n==null)return;this.gen.addExpression(t,n,!0)}catch(n){throw n}else switch(this.pos=e.position+e.lexeme.length,e.id){case pe.COLON:this.parseIdEnd(t);break;case pe.EQUALS:this.parseSpecialCase(t);break;default:throw this.pos=e.position,new fe("Era esperado ':' ou '='",this.pos)}}parseIdEnd(e){const t=this.nextToken();if(t==null||t.id!=pe.RE)throw new fe("Era esperado uma Expressão Regular",this.pos);const n=t.lexeme;try{if(this.gen==null)return;if(n.charAt(0)=="!"){const s=this.parseRE(n.substring(1));s!=null&&this.gen.addExpression(e,s,!1)}else{const s=this.parseRE(n);if(s!=null)this.gen.addExpression(e,s,!0);else throw new fe(`Definição Regular "${n}" indefinida no Token '${e}'`,this.pos)}}catch(s){const r=s;throw r.position=r.position+t.position,r}}parseSpecialCase(e){let t=this.nextToken();if(t!=null&&t.id==pe.ID){const n=t.lexeme;if(this.pos=t.position+e.length,t=this.nextToken(),t!=null&&t.id==pe.COLON)if(this.pos=t.position+1,t=this.nextToken(),t!=null&&t.id==pe.STR){let s=t.lexeme;s=s.substring(1,s.length-1);try{if(this.gen==null)return;this.gen.addSpecialCase(e,n,s)}catch(r){const i=r;throw i.position=i.position+t.position,i}if(t=this.nextToken(),t!=null)throw new Z("Só é permitido uma definição por linha",t.position)}else throw new Z("Era esperado uma Expressão Regular",this.pos);else throw new Z("Era esperado ':'",this.pos)}else throw new Z("Era esperado um Identificador",this.pos)}nextToken(){let e=this.scanner.nextToken();if(e!=null){if(e.id==pe.COMMENT)e=this.nextToken();else if(e.id==pe.ERROR)throw new fe("Token inválido",e.position)}return e}parseRE(e){const t=new Qt;if(this.gen!=null)return t.parse(e,this.gen)}}class _t{stack=new Be;scanner=null;currentToken=null;previousToken=null;table;productions;semanticStart;symbols;nodeStack=new Be;errors;static DOLLAR=1;constructor(e,t){this.table=e,this.semanticStart=t.firstSemanticAction;const n=t.grammar.productions;this.productions=[],this.symbols=t.grammar.symbols;for(let s=0;s<n.size();s++)this.productions[s]=[],this.productions[s][0]=n.get(s).get_lhs(),this.productions[s][1]=n.get(s).get_rhs().length;this.errors=t.getErrors(this.table)}parse(e,t){this.scanner=e,this.nodeStack.clear(),this.stack.clear(),this.stack.push(0),this.currentToken=e.nextToken();try{for(;!this.step(););const n=this.nodeStack.pop();if(n===void 0)throw new Z("Node is Null");t.add(n)}catch(n){for(let s=0;s<this.nodeStack.size();s++){const r=this.nodeStack.get(s);if(r===void 0)throw new Z("Node is Null");t.add(r)}t.add(new ye(n.message)),console.log(n)}return t}step(){const e=this.stack.peek();if(this.currentToken==null){let s=0;this.previousToken!=null&&(s=this.previousToken.position+this.previousToken.lexeme.length),this.currentToken=new de(_t.DOLLAR,"$",s)}const t=this.currentToken.id;if(e===void 0)throw new Z("State is undefined");const n=this.table[e][t-1];switch(n.getType()){case te.SHIFT:if(this.stack.push(n.getParameter()),this.nodeStack.push(new ye(this.symbols[this.currentToken.id])),this.previousToken=this.currentToken,this.scanner===null)throw new Z("Scanner is Null");return this.currentToken=this.scanner.nextToken(),!1;case te.REDUCE:const s=this.productions[n.getParameter()],r=new Be;for(let l=0;l<s[1];l++){this.stack.pop();const _=this.nodeStack.pop();if(_===void 0)throw new Z("Node is Null");r.push(_)}const i=this.stack.peek();if(i===void 0)throw new Z("Old State is Null");this.stack.push(this.table[i][s[0]-1].getParameter());const o=new ye(this.symbols[s[0]]);for(;r.size()>0;){const l=r.pop();if(l===void 0)throw new Z("Pivot is Null");o.add(l)}return this.nodeStack.push(o),!1;case te.ACTION:const a=this.semanticStart+n.getParameter()-1;return this.stack.push(this.table[e][a].getParameter()),this.nodeStack.push(new ye("#"+n.getParameter())),!1;case te.ACCEPT:return!0;case te.ERROR:throw new Z("Era esperado: "+this.errors.get(e),this.currentToken.position)}return!1}}Zt();class Yn extends Kt{conflict=null;stackTop=null;async resolve(e,t){let n;if(this.stackTop==null)throw SyntaxError("Stack de Não terminais é nulo");if(this.conflict==null)throw SyntaxError("Conflict é nulo");t==0?n="$":n=e.terminals[t-1];let s="";s+="- O símbolo no topo da pilha é: "+e.nonTerminals[this.stackTop]+`
`,s+="- O símbolo da entrada é: "+n+`
`,s+=`
Qual produção deve ser utilizada?`;const r=e.productions,i=new Map;let o=1;for(const _ of this.conflict.list())s+=`
Opção ${o} : ${r.toArray()[_]}
`,i.set(o,_),o++;let a=null;try{a=await Wt(s,"1")}catch{console.log("Prompt não encontrado")}a==null&&(a="1");let l=Number(a);return(isNaN(l)||l<1||l>i.size)&&(l=1),i.get(l)??(()=>{throw new Error(`Opção não encontrada de conflito: ${l}`)})()}setup(e,t){this.conflict=e,this.stackTop=t}}class Ne{g;constructor(e){if(!e.isFactored())throw new xe("Gramática não Fatorada");if(e.hasLeftRecursion())throw new xe("Gramática possui Recursão à Esquerda");this.g=e}getGrammar(){return this.g}lookahead(e){if(this.g==null)throw new Z("Gramatica é nula");const t=this.g.first(e.get_rhs());return t.contains(0)&&(t.delete(0),t.addAll(this.g.followSet[e.get_lhs()])),t}async generateTable(){if(this.g==null)throw new Z("Gramatica é nula");const e=this.g.symbols,t=[];for(let s=0;s<e.length-this.g.FIRST_NON_TERMINAL;s++){t[s]=[];for(let r=0;r<this.g.FIRST_NON_TERMINAL-1;r++)t[s][r]=new le}for(let s=0;s<this.g.productions.size();s++){const r=this.g.productions.get(s),i=this.lookahead(r);for(let o=1;o<this.g.FIRST_NON_TERMINAL;o++)i.contains(o)&&t[r.get_lhs()-this.g.FIRST_NON_TERMINAL][o-1].add(s)}const n=new Yn;return await this.resolveConflicts(t,n)}async resolveConflicts(e,t){if(this.g==null)throw new Z("Gramatica é nula");const n=[];for(let s=0;s<e.length;s++){n[s]=[];for(let r=0;r<e[s].length;r++)switch(e[s][r].size){case 0:n[s][r]=-1;break;case 1:n[s][r]=e[s][r].first();break;default:t.setup(e[s][r],s),n[s][r]=await t.resolve(this.g,r);break}}return n}async tableAsHTML(){if(this.g==null)throw new Z("Gramatica é nula");const e=await this.generateTable();let t="";t+='<HTML><HEAD><TITLE>Tabela de Análise LL(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',t+="<TR align=center><TD bgcolor=black><FONT color=white><B>&nbsp;</B></FONT></TD><TD bgcolor=black><FONT color=white><B>$</B></FONT></TD>";for(let n=ie.FIRST_TERMINAL;n<this.g.FIRST_NON_TERMINAL;n++)t+="<TD nowrap bgcolor=black><FONT color=white><B>"+Le.translateString(this.g.symbols[n])+"</B></FONT></TD>";t+="</TR>";for(let n=0;n<e.length;n++){t+="<TR align=center><TD nowrap bgcolor=black><FONT color=white><B>"+Le.translateString(this.g.symbols[n+this.g.FIRST_NON_TERMINAL])+"</B></FONT></TD>";for(let s=0;s<e[n].length;s++){const r=e[n][s];r>=0?t+="<TD width=40 bgcolor=#F5F5F5>"+r+"</TD>":t+="<TD width=40 bgcolor=#F5F5F5>-</TD>"}t+="</TR>"}t+="</TABLE>",t+="<BR></FONT><CODE><TABLE border=0>";for(let n=0;n<this.g.productions.size();n++)t+="<TR>",t+="<TD align=right nowrap>"+n+"&nbsp;-&nbsp;</TD>",t+="<TD>"+Le.translateString(this.g.productions.get(n).toString())+"</TD>",t+="</TR>";return t+="</TABLE></CODE></BODY></HTML>",t.toString()}}class qn{lrTable=null;async generate(e,t,n){const s=new Map;return s.set("Token.java",this.generateToken(n)),s.set("Constants.java",this.generateConstants(e,t,n)),e!==null&&s.set("ScannerConstants.java",this.generateScannerConstants(e,n)),t!==null&&s.set("ParserConstants.java",await this.generateParserConstants(t,n)),s.set("AnalysisError.java",this.generateAnalysisError(n)),s.set("LexicalError.java",this.generateLexicalError(n)),s.set("SyntacticError.java",this.generateSyntacticError(n)),s.set("SemanticError.java",this.generateSemanticError(n)),s}generateToken(e){const t=[],n=e.pkgName;return n&&n!==""&&t.push(`package ${n};

`),t.push(`public class Token
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
`),t.join(`
`)}generateAnalysisError(e){const t=[],n=e.pkgName;return n&&n!==""&&t.push(`package ${n};
`),t.push(`public class AnalysisError extends Exception
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
`),t.join(`
`)}generateLexicalError(e){const t=[],n=e.pkgName;return n&&n!==""&&t.push(`package ${n};
`),t.push(`public class LexicalError extends AnalysisError
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
`),t.join(`
`)}generateSyntacticError(e){const t=[],n=e.pkgName;return n&&n!==""&&t.push(`package ${n};

`),t.push(`public class SyntacticError extends AnalysisError
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
`),t.join(`
`)}generateSemanticError(e){const t=[],n=e.pkgName;return n&&n!==""&&t.push(`package ${n};

`),t.push(`public class SemanticError extends AnalysisError
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
`),t.join(`
`)}generateConstants(e,t,n){const s=[],r=n.pkgName;r&&r!==""&&s.push(`package ${r};
`);let i=null;if(e===null?i="ParserConstants":t===null?i="ScannerConstants":i="ScannerConstants, ParserConstants",e===null)throw new fe("Automato Finito é nulo");if(t===null)throw new Z("Gramatica é nulo");return s.push("public interface Constants extends "+i+`
{
    int EPSILON  = 0;
    int DOLLAR   = 1;

`+this.constList(e,t)+`
}
`),s.join(`
`)}generateScannerConstants(e,t){const n=[],s=t.pkgName;if(s&&s!==""&&n.push(`package ${s};

`),n.push(`public interface ScannerConstants
{
`),e==null)throw new fe("Automato Finito é nulo.");return n.push(this.genLexTables(e,t)),n.push(`}
`),n.join("")}async generateParserConstants(e,t){const n=[],s=t.pkgName;if(s&&s!==""&&n.push(`package ${s};
`),n.push(`public interface ParserConstants
{`),e===null)throw new Z("Gramatica é nulo");const r=await this.genSyntTables(e,t);if(r===null)throw new Z("Tabela Sintatica é nula");return n.push(r),n.push("}"),n.join(`
`)}genLexTables(e,t){let n;switch(t.scannerTable){case L.SCANNER_TABLE_FULL:n=this.lex_table(e);break;case L.SCANNER_TABLE_COMPACT:n=this.lex_table_compress(e);break;case L.SCANNER_TABLE_HARDCODE:n="";break;default:n="";break}return n+`
`+this.token_state(e)+(e.hasContext()?`
`+this.context(e):"")+`
`+(e.specialCases.length>0?this.special_cases(e)+`
`:"")+this.scanner_error(e)+`
`}context(e){const t=[];t.push(`    int[][] SCANNER_CONTEXT =
    {
`);for(let n=0;n<e.transitions.size();n++)t.push("        {"),t.push(e.isContext(n)?"1":"0"),t.push(", "),t.push(e.getOrigin(n).toString()),t.push(`},
`);return t.pop(),t.push(`
    };
`),t.join("")}scanner_error(e){const t=[];t.push(`    String[] SCANNER_ERROR =
    {
`);const n=e.transitions.size();for(let s=0;s<n;s++){t.push('        "');const r=e.getError(s);for(let i=0;i<r.length;i++)r.charAt(i)=='"'?t.push('\\"'):t.push(r.charAt(i));t.push(`",
`)}return t.pop(),t.push('"'),t.push(`
    };
`),t.join("")}async genSyntTables(e,t){switch(t.parser){case L.PARSER_REC_DESC:case L.PARSER_LL:return await this.genLLSyntTables(e,t.parser);case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:return await this.genLRSyntTables(e,t.parser);default:return null}}async genLRSyntTables(e,t){const n=je.createGenerator(e,t);if(n==null)throw new Z("Gerador de Tabela é nulo.");this.lrTable=await n.buildIntTable();const s=[];return s.push("    int FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

    int SHIFT  = 0;
    int REDUCE = 1;
    int ACTION = 2;
    int ACCEPT = 3;
    int GO_TO  = 4;
    int ERROR  = 5;
`),s.push(`
`),s.push(this.emitModifiedLRTable(e)),s.push(`
`),s.push(this.emitProductionsForLR(e)),s.push(`
`),s.push(this.emitErrorTableLR()),s.join("")}emitProductionsForLR(e){const t=[],n=e.productions;t.push(`    int[][] PRODUCTIONS =
`),t.push(`    {
`);for(let s=0;s<n.size();s++)t.push("        { "),t.push(n.get(s).get_lhs().toString()),t.push(", "),t.push(n.get(s).get_rhs().length.toString()),t.push(` },
`);return t.pop(),t.push(" }"),t.push(`
    };
`),t.join("")}emitLRTable(e){const t=[];if(this.lrTable===null)throw new Z("Tabela LR está nula.");const n=this.lrTable;t.push(`    int[][][] PARSER_TABLE =
`),t.push(`    {
`);let s=n.length;e.productions.size()>s&&(s=e.productions.size()),s=(""+s).length;for(let r=0;r<n.length;r++){t.push("        {");for(let i=0;i<n[r].length;i++){t.push(" {"),t.push(te.CONSTANTS[n[r][i][0]]),t.push(", ");const o=""+n[r][i][1];for(let a=o.length;a<s;a++)t.push(" ");t.push(o),t.push("},")}t.pop(),t.push("}"),t.push(` },
`)}return t.pop(),t.push(" }"),t.push(`
    };
`),t.join("")}emitModifiedLRTable(e){const t=[];if(this.lrTable===null)throw new Z("Tabela LR está nula.");const n=this.lrTable;t.push(`    int[][][] PARSER_TABLE = new LRTableAdapter().table;
`);let s=n.length;e.productions.size()>s&&(s=e.productions.size()),s=(""+s).length;let r="";t.push(`
`),t.push(`    public class LRTableAdapter // Code too large sem adapter (>64kb)
`),t.push(`    {
`),t.push("        int table[][][] = new int["+n.length+"]["+n[0].length+`][2];
`),t.push(`
`);for(let i=0;i<n.length;i++){t.push("        public class state"+i+"{ int q"+i+"[][] = {");for(let o=0;o<n[i].length;o++){t.push(" {"),t.push(te.CONSTANTS[n[i][o][0]]),t.push(", ");const a=""+n[i][o][1];for(let l=a.length;l<s;l++)t.push(" ");t.push(a),t.push("},")}t.pop(),t.push(`} }; }
`),r=r.concat("            table["+i+"] = new state"+i+"().q"+i+`;
`)}return t.push(`
        public LRTableAdapter(){
`+r+"        }"),t.push(`
    }`),t.push(`
`),t.join("")}async genLLSyntTables(e,t){const n=[];if(t==L.PARSER_LL){const s=e.startSymbol,r=e.FIRST_NON_TERMINAL,i=e.symbols.length,o="    int START_SYMBOL = "+s+`;

    int FIRST_NON_TERMINAL    = `+r+`;
    int FIRST_SEMANTIC_ACTION = `+i+`;
`;return n.push(o),n.push(`
`),n.push(await this.emitLLTable(new Ne(e))),n.push(`
`),n.push(this.emitProductionsForLL(e)),n.push(`
`),n.push(this.emitErrorTableLL(e)),n.join("")}else return t==L.PARSER_REC_DESC?this.emitErrorTableLL(e):null}constList(e,t){const n=[];let s=[];if(e!=null)s=e.tokens.toArray();else if(t!=null)s=t.terminals;else throw new Error("Erro Interno");for(let r=0;r<s.length;r++){const i=s[r];i.charAt(0)=='"'?n.push("    int t_TOKEN_"+(r+2)+" = "+(r+2)+"; //"+i+`
`):n.push("    int t_"+i+" = "+(r+2)+`;
`)}return n.join("")}lex_table_compress(e){const t=[],n=e.transitions,s=new Array(n.size()+1).fill(-1);let r=0;for(let o=0;o<n.size();o++)s[o]=r,r+=n.get(o).size;s[s.length-1]=r;const i=new Array(r).fill(0).map(()=>new Array(2).fill(0));r=0;for(let o=0;o<n.size();o++)for(const[a,l]of n.get(o).entries())i[r][0]=a.charCodeAt(0),i[r][1]=l,r++;t.push(`    int[] SCANNER_TABLE_INDEXES = 
`),t.push(`    {
`);for(let o=0;o<s.length;o++)t.push("        "),t.push(s[o].toString()),t.push(`,
`);t.pop(),t.push(`
    };

`),t.push(`    int[][] SCANNER_TABLE = 
`),t.push(`    {
`);for(let o=0;o<i.length;o++)t.push("        {"),t.push(i[o][0].toString()),t.push(", "),t.push(i[o][1].toString()),t.push(`},
`);return t.pop(),t.push("}"),t.push(`
    };
`),t.join("")}lex_table(e){const t=[];t.push(`    int[][] SCANNER_TABLE = 
`),t.push(`    {
`);const n=e.transitions.size();let s=n.toString().length;s==1&&(s=2);for(let r=0;r<n;r++){t.push("        { ");for(let i=0;i<256;i++){const o=e.nextState(String.fromCharCode(i),r).toString();for(let a=o.length;a<s;a++)t.push(" ");t.push(o),t.push(", ")}t.pop(),t.push(` },
`)}return t.pop(),t.push(" }"),t.push(`
    };
`),t.join("")}token_state(e){const t=[];t.push("    int[] TOKEN_STATE = {");const n=e.transitions.size();let s=n.toString().length;s==1&&(s=2);for(let r=0;r<n;r++){const o=e.tokenForState(r).toString();for(let a=o.length;a<s;a++)t.push(" ");t.push(o),t.push(", ")}return t.pop(),t.push(` };
`),t.join("")}special_cases(e){const t=e.getSpecialCasesIndexes(),n=e.specialCases,s=[];let r=n.length;s.push(`    int[] SPECIAL_CASES_INDEXES =
        { `),r=t.length;for(let i=0;i<r;i++)s.push(t[i][0].toString()),s.push(", ");s.push(t[r-1][1].toString()),s.push(` };

`),s.push(`    String[] SPECIAL_CASES_KEYS =
        {  `),r=n.length;for(let i=0;i<r;i++)s.push('"'),s.push(n[i].key),s.push('", ');s.pop(),s.push('"'),s.push(` };

`),s.push(`    int[] SPECIAL_CASES_VALUES =
        {  `),r=n.length;for(let i=0;i<r;i++)s.push(n[i].value.toString()),s.push(", ");return s.pop(),s.push(` };
`),s.join("")}emitProductionsForLL(e){const t=e.productions,n=new Array(t.size()).fill([]);let s=0;for(let i=0;i<t.size();i++){const o=t.get(i).get_rhs();if(o.length>0){n[i]=[];for(let a=0;a<o.length;a++)n[i][a]=o[a].toString(),n[i][a].length>s&&(s=n[i][a].length)}else n[i]=new Array(1),n[i][0]="0"}const r=[];r.push(`    int[][] PRODUCTIONS = 
`),r.push(`    {
`);for(let i=0;i<n.length;i++){r.push("        {");for(let o=0;o<n[i].length;o++){r.push(" ");for(let a=n[i][o].length;a<s;a++)r.push(" ");r.push(n[i][o]),r.push(",")}r.pop(),r.push(` },
`)}return r.pop(),r.push(` }
`),r.push(`
    };
`),r.join("")}async emitLLTable(e){let t=await e.generateTable(),n=new Array(t.length).fill([]).map(()=>new Array(t[0].length)),s=0;for(let i=0;i<n.length;i++)for(let o=0;o<n[i].length;o++){let a=t[i][o].toString();n[i][o]=a,a.length>s&&(s=a.length)}const r=[];r.push(`    int[][] PARSER_TABLE =
`),r.push(`    {
`);for(let i=0;i<n.length;i++){r.push("        {");for(let o=0;o<n[i].length;o++){r.push(" ");for(let a=n[i][o].length;a<s;a++)r.push(" ");r.push(n[i][o]),r.push(",")}r.pop(),r.push(` },
`)}return r.pop(),r.push(" },"),r.push(`
    };
`),r.join("")}emitErrorTableLR(){if(this.lrTable==null)throw new Z("Tabela LR está nula.");const e=this.lrTable.length,t=[];t.push(`    String[] PARSER_ERROR =
    {
`);for(let n=0;n<e;n++)t.push('        "Erro estado '+n),t.push(`",
`);return t.pop(),t.push('"'),t.push(`
    };
`),t.join("")}emitErrorTableLL(e){const t=e.symbols,n=[];n.push(`    String[] PARSER_ERROR =
    {
        "",
        "Era esperado fim de programa",
`);for(let s=2;s<e.FIRST_NON_TERMINAL;s++){n.push('        "Era esperado ');for(let r=0;r<t[s].length;r++)switch(t[s].charAt(r)){case'"':n.push('\\"');break;case"\\":n.push("\\\\");break;default:n.push(t[s].charAt(r))}n.push(`",
`)}for(let s=e.FIRST_NON_TERMINAL;s<t.length;s++)n.push('        "'+t[s]+" inválido"),n.push(`",
`);return n.pop(),n.push('"'),n.push(`
    };
`),n.join("")}}class Vn{sensitive=!0;lookup=!0;generate(e,t){const n=new Map,s=t.scannerName;let r;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,r=this.buildScanner(e,t)):r=this.buildEmptyScanner(t),n.set(s+".java",r),n}buildEmptyScanner(e){const t=[],n=e.pkgName;t.push(this.emitPackage(n));const s="public class "+e.scannerName+` implements Constants
{
    public Token nextToken() throws LexicalError
    {
        return null;
    }
}
`;return t.push(s),t.toString()}buildScanner(e,t){let n,s,r;t.input==L.INPUT_STREAM?(n="java.io.Reader",s=`StringBuffer bfr = new StringBuffer();
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
`,r='this(new java.io.StringReader(""));'):t.input==L.INPUT_STRING?(n="String",s="this.input = input;",r='this("");'):(n="",s="",r="");const i=t.pkgName;return this.emitPackage(i)+"public class "+t.scannerName+` implements Constants
{
    private int position;
    private String input;

    public `+t.scannerName+`()
    {
        `+r+`
    }

    public `+t.scannerName+"("+n+` input)
    {
        setInput(input);
    }

    public void setInput(`+n+` input)
    {
        `+s+`
        setPosition(0);
    }

    public void setPosition(int pos)
    {
        position = pos;
    }

`+this.mainDriver(e)+`
`+this.auxFuncions(e,t)+`}
`}emitPackage(e){return e!=null&&e!==""?"package "+e+`;

`:""}mainDriver(e){return`    public Token nextToken() throws LexicalError
    {
        if ( ! hasInput() )
            return null;

        int start = position;

        int state = 0;
        int lastState = 0;
        int endState = -1;
        int end = -1;
`+(e.hasContext()?`        int ctxtState = -1;
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
`+(e.hasContext()?`                if (SCANNER_CONTEXT[state][0] == 1)
                {
                    ctxtState = state;
                    ctxtEnd = position;
                }
`:"")+`            }
        }
        if (endState < 0 || (endState != state && tokenForState(lastState) == -2))
            throw new LexicalError(SCANNER_ERROR[lastState], start);

`+(e.hasContext()?`        if (ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState)
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
`}auxFuncions(e,t){let n;switch(t.scannerTable){case L.SCANNER_TABLE_FULL:n=`    private int nextState(char c, int state)
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
`;break;case L.SCANNER_TABLE_HARDCODE:{const s=e.transitions,r=[];for(let i=0;i<s.size();i++){const o=s.get(i);if(o.size!=0){r.push("            case "+i+`:
                switch (c)
                {
`);for(const[a,l]of o.entries()){const _=a,u=l;r.push("                    case "+_.charCodeAt(0)+": return "+u+`;
`)}r.push(`                    default: return -1;
                }
`)}}n=`    private int nextState(char c, int state)
    {
        switch (state)
        {
`+r.join("")+`            default: return -1;
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
`}}class Xn{input=new De;lhs;constructor(e){this.lhs=e}}class $e{_grammar;_llTable;_symbols;_functions=new Map;constructor(e,t){this._grammar=t,this._llTable=e,this._symbols=t.symbols;for(let n=0;n<this._symbols.length;n++)this._symbols[n].charAt(0)=="<"&&(this._symbols[n]=this._symbols[n].substring(1,this._symbols[n].length-1));this.build()}getSymbols(e){return this._symbols[e]}getStart(){return this._symbols[this._grammar.startSymbol]}build(){const e=this._grammar.productions.toArray();for(let t=0;t<this._llTable.length;t++){const n=t+this._grammar.FIRST_NON_TERMINAL,s=new Xn(n);this._functions.set(this._symbols[n],s);for(let r=0;r<this._llTable[0].length;r++){const i=this._llTable[t][r];if(i>=0){const o=r+1,l=e[i].get_rhs();s.input.set(o,l)}}}return this._functions}}class Jn{async generate(e,t){const n=new Map;if(e!=null){const s=t.parserName;let r;switch(t.parser){case L.PARSER_REC_DESC:r=await this.buildRecursiveDecendantParser(e,t);break;case L.PARSER_LL:r=this.buildLLParser(e,t);break;case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:r=this.buildLRParser(e,t);break;default:r=null}if(r===null)throw new Z("String do Parser é nulo.");n.set(s+".java",r),n.set(t.semanticName+".java",this.generateSemanticAnalyser(t))}return n}async buildRecursiveDecendantParser(e,t){const n=[],s=t.pkgName;return n.push(this.emitPackage(s)),n.push(await this.emitRecursiveDecendantClass(e,t)),n.join("")}buildLLParser(e,t){const n=[],s=t.pkgName;return n.push(this.emitPackage(s)),n.push(this.emitImports()),n.push(this.emitLLClass(e,t)),n.join("")}buildLRParser(e,t){const n=[],s=t.pkgName;return n.push(this.emitPackage(s)),n.push(this.emitImports()),n.push(this.emitLRClass(e,t)),n.join("")}emitPackage(e){return e!=null&&e!==""?"package "+e+`;
`:""}emitImports(){return`import java.util.Stack;

`}emitLRClass(e,t){const n=[],s=t.parserName;n.push("public class "),n.push(s),n.push(` implements Constants
{
`);const r=t.scannerName,i=t.semanticName,o=`    private final Stack<Integer> stack = new Stack<Integer>();
    private Token currentToken;
    private Token previousToken;
    private `+r+` scanner;
    private `+i+` semanticAnalyser;

`;return n.push(o),n.push("    public void parse("+r+" scanner, "+i+` semanticAnalyser) throws LexicalError, SyntacticError, SemanticError
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
`),n.join("")}emitLLClass(e,t){const n=[],s=t.parserName;n.push("public class "),n.push(s),n.push(` implements Constants
{
`);const r=t.scannerName,i=t.semanticName,o=`    private final Stack<Integer> stack = new Stack<Integer>();
    private Token currentToken;
    private Token previousToken;
    private `+r+` scanner;
    private `+i+` semanticAnalyser;

`;return n.push(o),n.push(this.emitLLFunctions(t)),n.push(`}
`),n.join("")}emitLLFunctions(e){const t=[];return t.push(this.emitTesters()),t.push(`
`),t.push(this.emitStep()),t.push(`
`),t.push(this.emitDriver(e)),t.join("")}emitTesters(){return`    private static final boolean isTerminal(int x)
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
`}emitDriver(e){const t=e.scannerName,n=e.semanticName;return"    public void parse("+t+" scanner, "+n+` semanticAnalyser) throws LexicalError, SyntacticError, SemanticError
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
`}async emitRecursiveDecendantClass(e,t){const n=await new Ne(e).generateTable(),s=new $e(n,e),r=[],i=t.parserName;r.push("public class "),r.push(i),r.push(` implements Constants
{
`);const o=t.scannerName,a=t.semanticName,l=`    private Token currentToken;
    private Token previousToken;
    private `+o+` scanner;
    private `+a+` semanticAnalyser;

`;r.push(l),r.push("    public void parse("+o+" scanner, "+a+` semanticAnalyser) throws AnalysisError
    {
        this.scanner = scanner;
        this.semanticAnalyser = semanticAnalyser;

        currentToken = scanner.nextToken();
        if (currentToken == null)
            currentToken = new Token(DOLLAR, "$", 0);

        `+s.getStart()+`();

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

`);const _=s.build();for(let u=e.FIRST_NON_TERMINAL;u<e.FIRST_SEMANTIC_ACTION();u++){const p=s.getSymbols(u),c=_.get(p);if(r.push("    private void "+p+`() throws AnalysisError
    {
        switch (currentToken.getId())
        {
`),c==null)throw new xe("Gramática não é LL.");const m=Array.from(c.input.keys());let f=new Set;for(let T=0;T<m.length;T++){const g=c.input.get(m[T]);let S=m[T];if(!f.has(S)){r.push("            case "+S+": // "+s.getSymbols(S)+`
`),f.add(S);for(let A=T+1;A<m.length;A++)if(c.input.get(m[A])===g){if(S=m[A],f.has(S))continue;r.push("            case "+S+": // "+s.getSymbols(S)+`
`),f.add(S)}if(g===void 0)throw new xe("Gramática não é LL.");g.length==0&&r.push(`                // EPSILON
`);for(let A=0;A<g.length;A++){const y=g[A];e.isTerminal(y)?r.push("                match("+y+"); // "+s.getSymbols(y)+`
`):e.isNonTerminal(y)?r.push("                "+s.getSymbols(y)+`();
`):r.push("                semanticAnalyser.executeAction("+(y-e.FIRST_SEMANTIC_ACTION())+`, previousToken);
`)}r.push(`                break;
`)}}r.push(`            default:
                throw new SyntacticError(PARSER_ERROR[`+c.lhs+`], currentToken.getPosition());
        }
    }

`)}return r.push(`}
`),r.join("")}generateSemanticAnalyser(e){const t=[],n=e.pkgName;n!=null&&n!==""&&t.push("package "+n+`;
`);const s="public class "+e.semanticName+` implements Constants
{
    public void executeAction(int action, Token token)	throws SemanticError
    {
        System.out.println("Ação #"+action+", Token: "+token);
    }	
}
`;return t.push(s),t.join("")}}class Qn{lrTable=null;async generate(e,t,n){const s=new Map;if(e===null||t===null)throw new Error("FiniteAutomata and Grammar must not be null");return s.set("Token.h",this.generateToken(n)),s.set("Constants.h",await this.generateConstantsH(e,t,n)),s.set("Constants.cpp",await this.generateConstantsCpp(e,t,n)),s.set("AnalysisError.h",this.generateAnalysisError(n)),s.set("LexicalError.h",this.generateLexicalError(n)),s.set("SyntacticError.h",this.generateSyntacticError(n)),s.set("SemanticError.h",this.generateSemanticError(n)),s}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

`:""}closeNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"} //namespace "+t+`

`:""}generateToken(e){return`#ifndef TOKEN_H
#define TOKEN_H

#include "Constants.h"

#include <string>

`+this.openNamespace(e)+`class Token
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

`+this.closeNamespace(e)+`#endif
`}generateAnalysisError(e){return`#ifndef ANALYSIS_ERROR_H
#define ANALYSIS_ERROR_H

#include <string>

`+this.openNamespace(e)+`class AnalysisError
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

`+this.closeNamespace(e)+`#endif
`}generateLexicalError(e){return`#ifndef LEXICAL_ERROR_H
#define LEXICAL_ERROR_H

#include "AnalysisError.h"

#include <string>

`+this.openNamespace(e)+`class LexicalError : public AnalysisError
{
public:

    LexicalError(const std::string &msg, int position = -1)
      : AnalysisError(msg, position) { }
};

`+this.closeNamespace(e)+`#endif
`}generateSyntacticError(e){return`#ifndef SYNTATIC_ERROR_H
#define SYNTATIC_ERROR_H

#include "AnalysisError.h"

#include <string>

`+this.openNamespace(e)+`class SyntacticError : public AnalysisError
{
public:

    SyntacticError(const std::string &msg, int position = -1)
      : AnalysisError(msg, position) { }
};

`+this.closeNamespace(e)+`#endif
`}generateSemanticError(e){return`#ifndef SEMANTIC_ERROR_H
#define SEMANTIC_ERROR_H

#include "AnalysisError.h"

#include <string>

`+this.openNamespace(e)+`class SemanticError : public AnalysisError
{
public:

    SemanticError(const std::string &msg, int position = -1)
      : AnalysisError(msg, position) { }
};

`+this.closeNamespace(e)+`#endif
`}async generateConstantsH(e,t,n){return`#ifndef CONSTANTS_H
#define CONSTANTS_H

`+this.openNamespace(n)+`enum TokenId 
{
    EPSILON  = 0,
    DOLLAR   = 1,
`+this.constList(e,t)+`};

`+this.lexDecls(e,n)+await this.syntDecls(t,n)+this.closeNamespace(n)+`#endif
`}constList(e,t){let n="",s=null;if(e!=null)s=e.tokens.toArray();else if(t!=null)s=t.terminals;else throw new Error("Erro Interno");for(let r=0;r<s.length;r++){const i=s[r];i.charAt(0)=='"'?n+="    t_TOKEN_"+(r+2)+" = "+(r+2)+", //"+i+`
`:n+="    t_"+i+" = "+(r+2)+`,
`}return n=n.slice(0,-2),n+=`
`,n.toString()}lexDecls(e,t){return e==null?"":"const int STATES_COUNT = "+e.transitions.size()+`;
`+(t.scannerTable==L.SCANNER_TABLE_HARDCODE?"":`
extern int SCANNER_TABLE[STATES_COUNT][256];
`)+`
extern int TOKEN_STATE[STATES_COUNT];

`+(e.hasContext()?`extern int SCANNER_CONTEXT[STATES_COUNT][2];

`:"")+(e.specialCases.length>0?"extern int SPECIAL_CASES_INDEXES["+(e.getSpecialCasesIndexes().length+1)+`];

extern const char *SPECIAL_CASES_KEYS[`+e.specialCases.length+`];

extern int SPECIAL_CASES_VALUES[`+e.specialCases.length+`];

`:"")+`extern const char *SCANNER_ERROR[STATES_COUNT];

`}async syntDecls(e,t){if(e==null)return"";switch(t.parser){case L.PARSER_REC_DESC:{const n=e.FIRST_SEMANTIC_ACTION()-e.FIRST_NON_TERMINAL;return"extern const char *PARSER_ERROR["+(e.FIRST_NON_TERMINAL+n)+`];

`}case L.PARSER_LL:{let n=0;for(let r=0;r<e.productions.size();r++){const i=e.productions.get(r).get_rhs().length;i>n&&(n=i)}const s=e.FIRST_SEMANTIC_ACTION()-e.FIRST_NON_TERMINAL;return"const int START_SYMBOL = "+e.startSymbol+`;

const int FIRST_NON_TERMINAL    = `+e.FIRST_NON_TERMINAL+`;
const int FIRST_SEMANTIC_ACTION = `+e.FIRST_SEMANTIC_ACTION()+`;

extern int PARSER_TABLE[`+s+"]["+(e.FIRST_NON_TERMINAL-1)+`];

extern int PRODUCTIONS[`+e.productions.size()+"]["+(n+1)+`];

extern const char *PARSER_ERROR[`+(e.FIRST_NON_TERMINAL+s)+`];

`}default:{const n=je.createGenerator(e,t.parser);if(n==null)throw new Z("Gerador de Tabela é nulo.");return this.lrTable=await n.buildIntTable(),"const int FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

const int SHIFT  = 0;
const int REDUCE = 1;
const int ACTION = 2;
const int ACCEPT = 3;
const int GO_TO  = 4;
const int ERROR  = 5;

extern const int PARSER_TABLE[`+this.lrTable.length+"]["+this.lrTable[0].length+`][2];

extern const int PRODUCTIONS[`+e.productions.size()+`][2];

extern const char *PARSER_ERROR[`+this.lrTable.length+`];

`}}}async generateConstantsCpp(e,t,n){return`#include "Constants.h"

`+this.openNamespace(n)+this.lexTables(e,n)+await this.syntTables(t,n)+this.closeNamespace(n)}lexTables(e,t){if(e==null)return"";let n,s,r="";r+=this.scannerTable(e,t)+`
`,r+="int TOKEN_STATE[STATES_COUNT] = {",n=e.transitions.size(),s=n.toString().length,s==1&&(s=2);for(let i=0;i<n;i++){const a=e.tokenForState(i).toString();for(let l=a.length;l<s;l++)r+=" ";r+=a+", "}r=r.slice(0,-2),r+=` };

`,r+=this.context(e),r+=this.specialCases(e),r+=`const char *SCANNER_ERROR[STATES_COUNT] =
{
`,n=e.transitions.size();for(let i=0;i<n;i++){r+='        "';const o=e.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?r+='\\"':r+=o.charAt(a);r+=`",
`}return r=r.slice(0,-2),r+=`
};

`,r.toString()}context(e){if(!e.hasContext())return"";let t="";t+=`int SCANNER_CONTEXT[STATES_COUNT][2] =
{
`;for(let n=0;n<e.transitions.size();n++)t+="    {",t+=e.isContext(n)?"1":"0",t+=", ",t+=e.getOrigin(n),t+=`},
`;return t=t.slice(0,-2),t+=`
};

`,t.toString()}scannerTable(e,t){if(t.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`int SCANNER_TABLE[STATES_COUNT][256] = 
`,n+=`{
`;const s=e.transitions.size();let r=s.toString().length;r==1&&(r=2);for(let i=0;i<s;i++){n+="    { ";for(let o=0;o<256;o++){const a=e.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)n+=" ";n+=a+", ",o==200&&(n+=`
      `)}n=n.slice(0,-2),n+=` },
`}return n=n.slice(0,-2),n+=`
};
`,n.toString()}specialCases(e){if(e.specialCases.length>0){const t=e.getSpecialCasesIndexes(),n=e.specialCases;let s="",r=n.length;s+="int SPECIAL_CASES_INDEXES["+(t.length+1)+`] =
    { `,r=t.length;for(let i=0;i<r;i++)s+=t[i][0]+", ";s+=t[r-1][1],s=s.slice(0,-2),s+=` };

`,r=n.length,s+="const char *SPECIAL_CASES_KEYS["+r+`] =
    { `,r=n.length;for(let i=0;i<r;i++)s+='"'+n[i].key+'", ';s=s.slice(0,-2),s+=` };

`,s+="int SPECIAL_CASES_VALUES["+r+`] =
    { `;for(let i=0;i<r;i++)s+=n[i].value+", ";return s=s.slice(0,-2),s+=` };

`,s.toString()}else return""}async syntTables(e,t){if(e==null)return"";switch(t.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(e);case L.PARSER_LL:return await this.syntTransTable(new Ne(e))+this.productionsLL(e)+this.syntErrorsLL(e);default:return await this.syntTransTable(e)+this.productionsLR(e)+this.syntErrorsLR()}}productionsLR(e){let t="";const n=e.productions.toArray();t+="const int PRODUCTIONS["+n.length+`][2] =
`,t+=`{
`;for(let s=0;s<n.length;s++)t+="    { ",t+=n[s].get_lhs(),t+=", ",t+=n[s].get_rhs().length,t+=` },
`;return t=t.slice(0,-2),t+=`
};
`,t.toString()}async syntTransTable(e){return e instanceof ie?this.syntTransTableGrammar(e):await this.syntTransTableLL(e)}syntTransTableGrammar(e){if(this.lrTable===null)throw new Z("Tabela LR está nula.");let t="";t+="const int PARSER_TABLE["+this.lrTable.length+"]["+this.lrTable[0].length+`][2] =
`,t+=`{
`;let n=this.lrTable.length;e.productions.size()>n&&(n=e.productions.size()),n=(""+n).length;for(let s=0;s<this.lrTable.length;s++){t+="    {";for(let r=0;r<this.lrTable[s].length;r++){t+=" {",t+=te.CONSTANTS[this.lrTable[s][r][0]],t+=", ";const i=""+this.lrTable[s][r][1];for(let o=i.length;o<n;o++)t+=" ";t+=i+"},"}t=t.slice(0,-1),t+=` },
`}return t=t.slice(0,-2),t+=`
};
`,t.toString()}async syntTransTableLL(e){const t=await e.generateTable(),n=[];let s=0;for(let i=0;i<t.length;i++){n[i]=[];for(let o=0;o<t[i].length;o++){const a=t[i][o].toString();n[i][o]=a,a.length>s&&(s=a.length)}}let r="";r+="int PARSER_TABLE["+n.length+"]["+n[0].length+`] =
`,r+=`{
`;for(let i=0;i<n.length;i++){r+="    {";for(let o=0;o<n[i].length;o++){r+=" ";for(let a=n[i][o].length;a<s;a++)r+=" ";r+=n[i][o]+","}r=r.slice(0,-1),r+=` },
`}return r=r.slice(0,-2),r+=`
};

`,r.toString()}productionsLL(e){const t=e.productions.toArray(),n=[];let s=0,r=0;for(let o=0;o<t.length;o++){const a=t[o].get_rhs();if(a.length>r&&(r=a.length),a.length>0){n[o]=[],n[o][0]=a.length.toString();for(let l=0;l<a.length;l++)n[o][l+1]=a[l].toString(),n[o][l+1].length>s&&(s=n[o][l+1].length)}else n[o]=[],n[o][0]="1",n[o][1]="0"}let i="";i+="int PRODUCTIONS["+t.length+"]["+(r+1)+`] = 
`,i+=`{
`;for(let o=0;o<n.length;o++){i+="    {";for(let a=0;a<n[o].length;a++){i+=" ";for(let l=n[o][a].length;l<s;l++)i+=" ";i+=n[o][a]+","}for(let a=n[o].length;a<=r;a++){i+=" ";for(let l=1;l<s;l++)i+=" ";i+="0,"}i=i.slice(0,-1),i+=` },
`}return i=i.slice(0,-2),i+=`
};

`,i.toString()}syntErrorsLL(e){const t=e.symbols;let n="";n+="const char *PARSER_ERROR["+e.FIRST_SEMANTIC_ACTION()+`] =
{
    "",
    "Era esperado fim de programa",
`;for(let s=2;s<e.FIRST_NON_TERMINAL;s++){n+='    "Era esperado ';for(let r=0;r<t[s].length;r++)switch(t[s].charAt(r)){case'"':n+='\\"';break;case"\\":n+="\\\\";break;default:n+=t[s].charAt(r)}n+=`",
`}for(let s=e.FIRST_NON_TERMINAL;s<t.length;s++)n+='    "'+t[s]+` inválido",
`;return n=n.slice(0,-2),n+=`
};

`,n.toString()}syntErrorsLR(){if(this.lrTable===null)throw new Z("Tabela LR está nula.");let e="";e+="const char *PARSER_ERROR["+this.lrTable.length+`] =
{
`;for(let t=0;t<this.lrTable.length;t++)e+='    "Erro estado '+t+`",
`;return e=e.slice(0,-2),e+=`
};

`,e.toString()}}class es{sensitive=!0;lookup=!0;generate(e,t){const n=new Map,s=t.scannerName;let r,i;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,r=this.buildScannerH(e,t),i=this.buildScannerCpp(e,t)):(r=this.buildEmptyScannerH(t),i=this.buildEmptyScannerCpp(t)),n.set(s+".h",r),n.set(s+".cpp",i),n}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

`:""}closeNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"} //namespace "+t+`

`:""}buildScannerH(e,t){let n="";const s=t.scannerName;let r,i,o;t.input==L.INPUT_STREAM?(r="std::istream &",i=`#include <iostream>
`,o="    "+s+"("+r+`input) { setInput(input); }
    `+s+`() : input(""), position(0) { }
`):t.input==L.INPUT_STRING?(r="const char *",i="",o="    "+s+"("+r+`input = "") { setInput(input); }
`):(r=null,i=null,o=null),n+="#ifndef "+s.toUpperCase()+`_H
`,n+="#define "+s.toUpperCase()+`_H
`,n+=`
#include "Token.h"
#include "LexicalError.h"

#include <string>
`+i+`
`,n+=this.openNamespace(t);const a="class "+s+`
{
public:
`+o+`
    void setInput(`+r+`input);
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

`;return n+=a,n+=this.closeNamespace(t),n+=`#endif
`,n.toString()}buildScannerCpp(e,t){let n="";const s=t.scannerName;n+='#include "'+s+`.h"

`,this.sensitive||(n+=`#include <cctype>

`),n+=this.openNamespace(t);let r,i;t.input==L.INPUT_STREAM?(r="std::istream &",i=`    std::istreambuf_iterator<char> in(input);
    std::istreambuf_iterator<char> eof;

    this->input.assign(in, eof);

`):t.input==L.INPUT_STRING?(r="const char *",i=`    this->input = input;
`):(r=null,i=null);const o="void "+s+"::setInput("+r+`input)
{
`+i+`    setPosition(0);
}

Token *`+s+`::nextToken()
{
    if ( ! hasInput() )
        return 0;

    unsigned start = position;

    int state = 0;
    int oldState = 0;
    int endState = -1;
    int end = -1;
`+(e.hasContext()?`    int ctxtState = -1;
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
`+(e.hasContext()?`            if (SCANNER_CONTEXT[state][0] == 1)
            {
                ctxtState = state;
                ctxtEnd = position;
            }
`:"")+`        }
    }
    if (endState < 0 || (endState != state && tokenForState(oldState) == -2))
        throw LexicalError(SCANNER_ERROR[oldState], start);

`+(e.hasContext()?`    if (ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState)
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

int `+s+`::nextState(unsigned char c, int state) const
{
`+this.nextStateImpl(e,t)+`}

TokenId `+s+`::tokenForState(int state) const
{
    int token = -1;

    if (state >= 0 && state < STATES_COUNT)
        token = TOKEN_STATE[state];

    return static_cast<TokenId>(token);
}

`+(this.lookup?"TokenId "+s+`::lookupToken(TokenId base, const std::string &key)
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

`:"");return n+=o,n+=this.closeNamespace(t),n.toString()}nextStateImpl(e,t){switch(t.scannerTable){case L.SCANNER_TABLE_FULL:case L.SCANNER_TABLE_COMPACT:return`    int next = SCANNER_TABLE[state][c];
    return next;
`;case L.SCANNER_TABLE_HARDCODE:{const n=e.transitions;let s="";for(let r=0;r<n.size();r++){const i=n.get(r);if(i.size!=0){s+="        case "+r+`:
            switch (c)
            {
`;for(const[o,a]of i.entries()){const l=o,_=a;s+=`                case ${l.charCodeAt(0)}: return ${_};
`}s+=`                default: return -1;
            }
`}}return`    switch (state)
    {
`+s.toString()+`        default: return -1;
    }
`}default:return""}}buildEmptyScannerH(e){let t="";const n=e.scannerName;t+="#ifndef "+n.toUpperCase()+`_H
`,t+="#define "+n.toUpperCase()+`_H
`,t+=`
#include "Token.h"
#include "LexicalError.h"

`,t+=this.openNamespace(e);const s="class "+n+`
{
public:

    Token *nextToken();

};

`;return t+=s,t+=this.closeNamespace(e),t+=`#endif
`,t.toString()}buildEmptyScannerCpp(e){let t="";const n=e.scannerName;t+='#include "'+n+`.h"

`,t+=this.openNamespace(e);const s="Token *"+n+`::nextToken()
{
    return 0;
}

`;return t+=s,t+=this.closeNamespace(e),t.toString()}}class ts{rd;async generate(e,t){const n=new Map;if(e!=null){const s=t.parserName;n.set(s+".h",await this.parserH(e,t)),n.set(s+".cpp",await this.parserCpp(e,t)),n.set(t.semanticName+".cpp",this.semanticAnalyserCpp(t)),n.set(t.semanticName+".h",this.semanticAnalyserH(t))}return n}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

`:""}closeNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"} //namespace "+t+`

`:""}semanticAnalyserH(e){const t=e.semanticName;return"#ifndef "+t.toUpperCase()+`_H
#define `+t.toUpperCase()+`_H

#include "Token.h"
#include "SemanticError.h"

`+this.openNamespace(e)+"class "+t+`
{
public:
    void executeAction(int action, const Token *token);
};

`+this.closeNamespace(e)+`#endif
`}semanticAnalyserCpp(e){const t=e.semanticName;return'#include "'+t+`.h"
#include "Constants.h"

#include <iostream>

`+this.openNamespace(e)+"void "+t+`::executeAction(int action, const Token *token)
{
    std::cout << "Ação: " << action << ", Token: "  << token->getId() 
              << ", Lexema: " << token->getLexeme() << std::endl;
}

`+this.closeNamespace(e)}async parserH(e,t){const n=t.scannerName,s=t.parserName,r=t.semanticName,i=t.parser,o=i==L.PARSER_REC_DESC;let a="";if(o){const _=await new Ne(e).generateTable();this.rd=new $e(_,e);let u="";u+="    void match(int token);";for(let p=e.FIRST_NON_TERMINAL;p<e.FIRST_SEMANTIC_ACTION();p++)u+="    void "+this.rd.getSymbols(p)+`();
`;a=u.toString()}return"#ifndef "+s+`_H
#define `+s+`_H

#include "Constants.h"
#include "Token.h"
#include "`+n+`.h"
#include "`+r+`.h"
#include "SyntacticError.h"

`+(o?"":`#include <stack>

`)+this.openNamespace(t)+"class "+s+`
{
public:
    `+s+`() : previousToken(0), currentToken(0) { }

    ~`+s+`()
    {
        if (previousToken != 0 && previousToken != currentToken) delete previousToken;
        if (currentToken != 0)  delete currentToken;
    }

    void parse(`+n+" *scanner, "+r+` *semanticAnalyser);

private:
`+(o?"":`    std::stack<int> stack;
`)+`    Token *previousToken;
    Token *currentToken;
    `+n+` *scanner;
    `+r+` *semanticAnalyser;

`+(o?a:`    bool step();
`+(i==L.PARSER_LL?`    bool pushProduction(int topStack, int tokenInput);

    static bool isTerminal(int x) { return x < FIRST_NON_TERMINAL; }
    static bool isNonTerminal(int x) { return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION; }
    static bool isSemanticAction(int x) { return x >= FIRST_SEMANTIC_ACTION; }
`:""))+`};

`+this.closeNamespace(t)+`#endif
`}async parserCpp(e,t){switch(t.parser){case L.PARSER_REC_DESC:return await this.parserCppRecursiveDescendant(e,t);case L.PARSER_LL:return this.parserCppLL(e,t);default:return this.parserCppLR(e,t)}}async parserCppRecursiveDescendant(e,t){const n=await new Ne(e).generateTable(),s=new $e(n,e);if(s==null)throw new Z("RecursiveDescendent é nulo.");const r=t.scannerName,i=t.parserName,o=t.semanticName,a='#include "'+i+`.h"

`+this.openNamespace(t)+"void "+i+"::parse("+r+" *scanner, "+o+` *semanticAnalyser)
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

    `+s.getStart()+`();

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
`;let l="";const _=s.build();for(let p=e.FIRST_NON_TERMINAL;p<e.FIRST_SEMANTIC_ACTION();p++){const c=s.getSymbols(p),m=_.get(c);if(m==null)throw new Z("FunctionCustom é nulo");l+=`
void `+i+"::"+c+`()
{
    switch (currentToken->getId())
    {
`;const f=Array.from(m.input.keys());let T=new Set;for(let g=0;g<f.length;g++){const S=m.input.get(f[g]);let A=f[g];if(!T.has(A)){l+="        case "+A+": // "+s.getSymbols(A)+`
`;for(let y=g+1;y<f.length;y++){const N=m.input.get(f[y]);if(S==null||N==null)throw new Z("rhs é nulo");if(N===S){if(A=f[y],T.has(A))continue;l+="        case "+A+": // "+s.getSymbols(A)+`
`,f.splice(y,1),T.add(A)}}if(S?.length==0&&(l+=`            // EPSILON
`),S==null)throw new Z("rhs é nulo");for(let y=0;y<S.length;y++){const N=S[y];e.isTerminal(N)?l+="            match("+N+"); // "+s.getSymbols(N)+`
`:e.isNonTerminal(N)?l+="            "+s.getSymbols(N)+`();
`:l+="            semanticAnalyser->executeAction("+(N-e.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}l+=`            break;
`}}l+=`        default:
            throw SyntacticError(PARSER_ERROR[`+m.lhs+`], currentToken->getPosition());
    }
}
`}const u=`
`+this.closeNamespace(t);return a+l.toString()+u}parserCppLL(e,t){const n=t.scannerName,s=t.parserName,r=t.semanticName;return'#include "'+s+`.h"

`+this.openNamespace(t)+"void "+s+"::parse("+n+" *scanner, "+r+` *semanticAnalyser);
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

bool `+s+`::step()
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

bool `+s+`::pushProduction(int topStack, int tokenInput)
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

`+this.closeNamespace(t)}parserCppLR(e,t){const n=t.scannerName,s=t.parserName,r=t.semanticName;return'#include "'+s+`.h"

`+this.openNamespace(t)+"void "+s+"::parse("+n+" *scanner, "+r+` *semanticAnalyser)
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

bool `+s+`::step()
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

`+this.closeNamespace(t)}}class ns{lrTable=null;async generate(e,t,n){if(e===null||t===null)throw new Error("FiniteAutomata and Grammar must not be null");const s=new Map;return s.set("UToken.pas",this.generateToken()),s.set("UConstants.pas",await this.generateConstants(e,t,n)),s.set("UAnalysisError.pas",this.generateAnalysisError()),s.set("ULexicalError.pas",this.generateLexicalError()),s.set("USyntacticError.pas",this.generateSyntacticError()),s.set("USemanticError.pas",this.generateSemanticError()),s}generateToken(){return`unit UToken;

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
`}async generateConstants(e,t,n){return`unit UConstants;

interface

const

`+this.constants(e,t)+this.lexTables(e,n)+await this.syntTables(t,n)+`implementation

end.
`}constants(e,t){let n="",s=null;if(e!=null)s=e.tokens.toArray();else if(t!=null)s=t.terminals;else throw new Error("Erro Interno");n+=`    EPSILON = 0;
    DOLLAR  = 1;

`;for(let r=0;r<s.length;r++){const i=s[r];i.charAt(0)=='"'?n+="    t_TOKEN_"+(r+2)+" = "+(r+2)+"; //"+i+`
`:n+="    t_"+i+" = "+(r+2)+`;
`}return n+=`
`,n.toString()}lexTables(e,t){return e==null?"":"    STATES_COUNT = "+e.transitions.size()+`;

`+this.mainLex(e,t)+this.context(e)+(e.specialCases.length>0?this.lookup(e):"")+this.scanner_error(e)}context(e){if(!e.hasContext())return"";let t="";t+=`    SCANNER_CONTEXT : array[0..STATES_COUNT-1][0..1] of integer =
    (
`;for(let n=0;n<e.transitions.size();n++)t+="        (",t+=e.isContext(n)?"1":"0",t+=", ",t+=e.getOrigin(n),t+=`),
`;return t=t.slice(0,-2),t+=`
    );
`,t.toString()}scanner_error(e){let t="";t+=`    SCANNER_ERROR : array[0..STATES_COUNT-1] of string =
    (
`;const n=e.transitions.size();for(let s=0;s<n;s++){t+="        '";const r=e.getError(s);for(let i=0;i<r.length;i++)r.charAt(i)=="'"?t+="''":t+=r.charAt(i);t+=`',
`}return t=t.slice(0,-2),t+=`
    );
`,t.toString()}mainLex(e,t){let n="",s;n+=this.scannerTable(e,t),n+=`    TOKEN_STATE : array[0..STATES_COUNT-1] of integer =
        ( `;const r=e.transitions.size();s=r.toString().length,s==1&&(s=2);for(let i=0;i<r;i++){const a=e.tokenForState(i).toString();for(let l=a.length;l<s;l++)n+=" ";n+=a+", "}return n=n.slice(0,-2),n+=` );

`,n.toString()}scannerTable(e,t){if(t.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`    SCANNER_TABLE : array[0..STATES_COUNT-1, char] of integer =
    ( 
`;const s=e.transitions.size();let r=s.toString().length;r==1&&(r=2);for(let i=0;i<s;i++){n+="        ( ";for(let o=0;o<256;o++){const a=e.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)n+=" ";n+=a+", ",o==200&&(n+=`
          `)}n=n.slice(0,-2),n+=` ),
`}return n=n.slice(0,-2),n+=`
    );

`,n.toString()}lookup(e){let t="";const n=e.getSpecialCasesIndexes();t+="    SPECIAL_CASES_INDEXES : array[0.."+n.length+`] of integer =
        ( `;let s=n.length;for(let i=0;i<n.length;i++)t+=n[i][0],t+=", ";t+=n[s-1][1],t+=` );

`;const r=e.specialCases;s=r.length,t+="    SPECIAL_CASES_KEYS : array[0.."+(s-1)+`] of string =
        (  `;for(let i=0;i<s;i++)t+="'",t+=r[i].key,t+="', ";t=t.slice(0,-2),t+=` );

`,t+="    SPECIAL_CASES_VALUES : array[0.."+(s-1)+`] of integer =
        (  `;for(let i=0;i<s;i++)t+=r[i].value,t+=", ";return t=t.slice(0,-2),t+=` );

`,t.toString()}async syntTables(e,t){if(e==null)return"";switch(t.parser){case L.PARSER_REC_DESC:return this.errorLL(e);case L.PARSER_LL:return"    START_SYMBOL = "+e.startSymbol+`;

    FIRST_NON_TERMINAL    = `+e.FIRST_NON_TERMINAL+`;
    FIRST_SEMANTIC_ACTION = `+e.FIRST_SEMANTIC_ACTION()+`;

`+await this.transTablesLL(new Ne(e))+this.prodsLL(e)+this.errorLL(e);case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:return"    FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

    SHIFT  = 0;
    REDUCE = 1;
    ACTION = 2;
    ACCEPT = 3;
    GO_TO  = 4;
    ERROR  = 5;

`+await this.transTablesLR(e)+`
`+this.prodsLR(e)+`
`+this.errorLR();default:return""}}async transTablesLR(e){const t=je.createGenerator(e,L.PARSER_SLR);if(t==null)throw new Z("Gerador de Tabela é nulo.");this.lrTable=await t.buildIntTable();let n="";n+="    PARSER_TABLE : array[0.."+(this.lrTable.length-1)+", 0.."+(this.lrTable[0].length-1)+`, 0..1] of integer =
`,n+=`    (
`;let s=this.lrTable.length;e.productions.size()>s&&(s=e.productions.size()),s=(""+s).length;for(let r=0;r<this.lrTable.length;r++){n+="        (";for(let i=0;i<this.lrTable[r].length;i++){n+=" (",n+=te.CONSTANTS[this.lrTable[r][i][0]],n+=", ";const o=""+this.lrTable[r][i][1];for(let a=o.length;a<s;a++)n+=" ";n+=o+"),"}n=n.slice(0,-1),n+=` ),
`}return n=n.slice(0,-2),n+=`
    );
`,n.toString()}prodsLR(e){let t="";const n=e.productions.toArray();t+="    PRODUCTIONS : array[0.."+(n.length-1)+`, 0..1] of Integer =
`,t+=`    (
`;for(let s=0;s<n.length;s++)t+="        ( ",t+=n[s].get_lhs(),t+=", ",t+=n[s].get_rhs().length,t+=` ),
`;return t=t.slice(0,-2),t+=`
    );
`,t.toString()}async transTablesLL(e){const t=await e.generateTable(),n=[];let s=0;for(let i=0;i<t.length;i++){n[i]=[];for(let o=0;o<t[i].length;o++){const a=t[i][o].toString();n[i][o]=a,a.length>s&&(s=a.length)}}let r="";r+="    PARSER_TABLE : array[0.."+(n.length-1)+", 0.."+(n[0].length-1)+`] of integer =
`,r+=`    (
`;for(let i=0;i<n.length;i++){r+="        (";for(let o=0;o<n[i].length;o++){r+=" ";for(let a=n[i][o].length;a<s;a++)r+=" ";r+=n[i][o]+","}r=r.slice(0,-1),r+=` ),
`}return r=r.slice(0,-2),r+=`
    );

`,r.toString()}prodsLL(e){const t=e.productions.toArray(),n=[];let s=0,r=0;for(let o=0;o<t.length;o++){const a=t[o].get_rhs();if(a.length>r&&(r=a.length),a.length>0){n[o]=[],n[o][0]=a.length.toString();for(let l=0;l<a.length;l++)n[o][l+1]=a[l].toString(),n[o][l+1].length>s&&(s=n[o][l+1].length)}else n[o]=[],n[o][0]="1",n[o][1]="0"}let i="";i+="    PRODUCTIONS : array[0.."+(t.length-1)+", 0.."+r+`] of integer =
`,i+=`    (
`;for(let o=0;o<n.length;o++){i+="        (";for(let a=0;a<n[o].length;a++){i+=" ";for(let l=n[o][a].length;l<s;l++)i+=" ";i+=n[o][a]+","}for(let a=n[o].length;a<=r;a++){i+=" ";for(let l=1;l<s;l++)i+=" ";i+="0,"}i=i.slice(0,-1),i+=` ),
`}return i=i.slice(0,-2),i+=`
    );

`,i.toString()}errorLL(e){const t=e.symbols;let n="";n+="    PARSER_ERROR : array [0.."+(e.symbols.length-1)+`] of string =
    (
        '',
        'Era esperado fim de programa',
`;for(let s=2;s<e.FIRST_NON_TERMINAL;s++){n+="        'Era esperado ";for(let r=0;r<t[s].length;r++)t[s].charAt(r)==="'"?n+="''":n+=t[s].charAt(r);n+=`',
`}for(let s=e.FIRST_NON_TERMINAL;s<t.length;s++)n+="        '"+t[s]+` inválido',
`;return n=n.slice(0,-2),n+=`
    );

`,n.toString()}errorLR(){if(this.lrTable===null)throw new Z("Tabela LR está nula.");let e="";e+="    PARSER_ERROR : array [0.."+(this.lrTable.length-1)+`] of string =
    (
`;for(let t=0;t<this.lrTable.length;t++)e+="        'Erro estado "+t+`',
`;return e=e.slice(0,-2),e+=`
    );

`,e.toString()}}class ss{sensitive=!0;lookup=!0;generate(e,t){const n=new Map,s=t.scannerName;let r;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,r=this.buildScanner(e,t)):r=this.buildEmptyScanner(t),n.set("U"+s+".pas",r),n}buildScanner(e,t){const n=t.scannerName;let s,r,i,o;return t.input==L.INPUT_STREAM?(s="TStream",r=`var
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
`,i="setInput(nil);",o=", classes"):t.input==L.INPUT_STRING?(s="string",r=`begin
    self.input := input;
    setPosition(1);
    setEnd(Length(input));
end;
`,i="setInput('');",o=""):(s="",r="",i="",o=""),"unit U"+n+`;

interface

uses UToken, ULexicalError, UConstants`+o+`, SysUtils;

type
    T`+n+` = class
    public
        constructor create; overload;
        constructor create(input : `+s+`); overload;

        procedure setInput(input : `+s+`);
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

constructor T`+n+".create(input : "+s+`);
begin
    setInput(input);
end;

procedure T`+n+".setInput(input : "+s+`);
`+r+`
function T`+n+`.nextToken : TToken;
var
    start,
    oldState,
    state,
    endState,
    endPos,
`+(e.hasContext()?`    ctxtState;
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
`+(e.hasContext()?`        ctxtState := -1;
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
`+(e.hasContext()?`                if SCANNER_CONTEXT[state][0] = 1 then
                begin
                    ctxtState := state;
                    ctxtEnd := position;
                end
`:"")+`            end;
        end;
        if (endState < 0) or ( (endState <> state) and (tokenForState(oldState) = -2) ) then
            raise ELexicalError.create(SCANNER_ERROR[oldState], start);

`+(e.hasContext()?`        if (ctxtState <> -1) and (SCANNER_CONTEXT[endState][1] = ctxtState) then
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
`+this.nextStateImpl(e,t)+`end;

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
`}nextStateImpl(e,t){switch(t.scannerTable){case L.SCANNER_TABLE_FULL:case L.SCANNER_TABLE_COMPACT:return`    result := SCANNER_TABLE[state][c];
`;case L.SCANNER_TABLE_HARDCODE:{const n=e.transitions,s=[];for(let r=0;r<n.size();r++){const i=n.get(r);if(i.size!=0){s.push("        "+r+`: case integer(c) of
`);for(const[o,a]of i.entries()){const l=o,_=a;s.push("            "+l.charCodeAt(0)+": result := "+_+`;
`)}s.push(`            else result := -1;
        end;
`)}}return`    case state of
`+s.toString()+`        else result := -1;
    end;
`}default:return null}}buildEmptyScanner(e){const t=e.scannerName;return"unit U"+t+`;

interface

uses UToken, ULexicalError;

type
    T`+t+` = class
    public
        function nextToken : TToken; //raises ELexicalError
    end;

implementation

function T`+t+`.nextToken : TToken;
begin
    result := nil;
end;

end.
`}}class rs{async generate(e,t){const n=new Map;if(e!=null){const s=t.parserName;let r;switch(t.parser){case L.PARSER_REC_DESC:r=await this.buildRecursiveDescendantParser(e,t);break;case L.PARSER_LL:r=this.buildLLParser(e,t);break;case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:r=this.buildLRParser(e,t);break;default:r=null}if(r===null)throw new Z("String do Parser é nulo.");n.set("U"+s+".pas",r),n.set("U"+t.semanticName+".pas",this.generateSemanticAnalyser(t))}return n}async buildRecursiveDescendantParser(e,t){const n=t.parserName,s=t.scannerName,r=t.semanticName,i=await new Ne(e).generateTable(),o=new $e(i,e),a=o.build();let l="";for(let p=e.FIRST_NON_TERMINAL;p<e.FIRST_SEMANTIC_ACTION();p++)l+="        procedure "+o.getSymbols(p)+`;
`;const _=l;l="";for(let p=e.FIRST_NON_TERMINAL;p<e.FIRST_SEMANTIC_ACTION();p++){const c=o.getSymbols(p),m=a.get(c);if(l+=`
procedure T`+n+"."+c+`;
begin
    case currentToken.getId of
`,m==null)throw new xe("Gramática não é LL.");const f=Array.from(m.input.keys());for(let T=0;T<f.length;T++){const g=m.input.get(f[T]);let S=f[T];l+="        "+S+" (* "+o.getSymbols(S)+" *)";for(let A=T+1;A<f.length;A++)m.input.get(f[A])===g&&(S=f[A],l+=`,
        `+S+" (* "+o.getSymbols(S)+" *)",f.slice(A,A),A--);if(g===void 0)throw new xe("Gramática não é LL.");l+=` : 
        begin
`,g.length==0&&(l+=`            // EPSILON
`);for(let A=0;A<g.length;A++){const y=g[A];e.isTerminal(y)?l+="            match("+y+"); // "+o.getSymbols(y)+`
`:e.isNonTerminal(y)?l+="            "+o.getSymbols(y)+`;
`:l+="            semanticAnalyser.executeAction("+(y-e.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}l+=`        end;
`}l+=`        else
            raise ESyntacticError.create(PARSER_ERROR[`+m.lhs+`], currentToken.getPosition());
    end;
end;
`}const u=l;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+s+", U"+r+`, USyntacticError, UAnalysisError;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+s+"; semanticAnalyser : T"+r+`); //raises EAnaliserError

    private
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+s+`;
        semanticAnalyser : T`+r+`;

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

procedure T`+n+".parse(scanner : T"+s+"; semanticAnalyser : T"+r+`);
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
`+u+`
end.
`}buildLLParser(e,t){const n=t.parserName,s=t.scannerName,r=t.semanticName;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+s+", U"+r+`, USyntacticError, UAnalysisError, classes;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+s+"; semanticAnalyser : T"+r+`); //raises EAnaliserError

    private
        stack : TList;
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+s+`;
        semanticAnalyser : T`+r+`;

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

procedure T`+n+".parse(scanner : T"+s+"; semanticAnalyser : T"+r+`);
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
`}buildLRParser(e,t){const n=t.parserName,s=t.scannerName,r=t.semanticName;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+s+", U"+r+`, USyntacticError, UAnalysisError, classes;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+s+"; semanticAnalyser : T"+r+`); //raises EAnaliserError

    private
        stack : TList;
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+s+`;
        semanticAnalyser : T`+r+`;

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

procedure T`+n+".parse(scanner : T"+s+"; semanticAnalyser : T"+r+`);
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
`}generateSemanticAnalyser(e){const t=e.semanticName;return"unit U"+t+`;

interface

uses UToken, USemanticError;

type
    T`+t+` = class
    public
        procedure executeAction(action : integer; const token : TToken); //raises ESemanticError
    end;

implementation

procedure T`+t+`.executeAction(action : integer; const token : TToken);
begin

end;

end.
`}}class is{lrTable=null;async generate(e,t,n){const s=new Map;if(e===null||t===null)throw new Error("FiniteAutomata and Grammar must not be null");return s.set("Token.py",this.generateToken(n)),s.set("Constants.py",await this.generateConstants(e,t,n)),s.set("Errors.py",this.generateErrors(n)),s}mainfunc(e){const t=e.pkgName!==""?e.pkgName+".":"";return(e.generateScanner?`from ${t}${e.scannerName} import ${e.scannerName}
`:"")+(e.generateParser?`from ${t}${e.parserName} import ${e.parserName}
`:"")+(e.generateParser?`from ${t}${e.semanticName} import ${e.semanticName}
`:"")+`from ${t}Errors import AnalysisError

`+(e.input==L.INPUT_STREAM?`from io import StringIO
`:"")+this.mainfunc_lex(e)+(e.generateParser?`syn = ${e.parserName}()
`:"")+(e.generateParser?`sem = ${e.semanticName}()
`:"")+`
try:
`+(e.generateParser&&e.generateScanner?`	syn.parse(lex, sem)
`:`	# syn.parse(lex, sem)
`)+`except AnalysisError as e:
	print(e)
`}mainfunc_lex(e){switch(e.input){case L.INPUT_STREAM:return e.generateScanner?`stream = StringIO("")

lex = ${e.scannerName}(stream)
`:"";case L.INPUT_STRING:return e.generateScanner?`lex = ${e.scannerName}("")
`:""}return""}generateToken(e){return`
from dataclasses import dataclass
from ${e.pkgName!==""?e.pkgName+".":""}Constants import TokenId

@dataclass(frozen=True)
class Token:
	tkid:     TokenID = TokenId.EPSILON
	lexeme:   str     = ""
	position: int     = -1
`}generateErrors(e){return`from dataclasses import dataclass

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
`}async generateConstants(e,t,n){return`
from enum import Enum

TOKEN_DEPENDENCY   = `+(e.specialCases.length>0?`True
`:`False
`)+"CASE_INSENSITIVITY = "+(n.scannerCaseSensitive==!0?`False

`:`True

`)+`class TokenId(Enum):
	EPSILON = 0
	DOLLAR  = 1
`+this.constList(e,t)+(n.generateScanner?this.lexDecls(e,n):"")+(n.generateParser?await this.syntDecls(t,n):"")}constList(e,t){let n="",s=null;if(e!=null)s=e.tokens.toArray();else if(t!=null)s=t.terminals;else throw new Error("Erro Interno");for(let r=0;r<s.length;r++){const i=s[r];i.charAt(0)=='"'?n+="	t_TOKEN_"+(r+2)+" = "+(r+2)+" #"+i+`
`:n+="	t_"+i+" = "+(r+2)+`
`}return n+=`
`,n.toString()}lexDecls(e,t){if(e==null)return"";let n,s,r=`
STATES_COUNT: int = `+e.transitions.size()+`

`;r+=this.scannerTable(e,t)+`
`,r+="TOKEN_STATE = [",n=e.transitions.size(),s=n.toString().length,s==1&&(s=2);for(let i=0;i<n;i++){const a=e.tokenForState(i).toString();for(let l=a.length;l<s;l++)r+=" ";r+=a+", "}r=r.slice(0,-2),r+=`]

`,r+=this.context(e),r+=this.specialCases(e),r+=`SCANNER_ERRORS = [
`,n=e.transitions.size();for(let i=0;i<n;i++){r+='	"';const o=e.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?r+='\\"':r+=o.charAt(a);r+=`",
`}return r=r.slice(0,-2),r+=`
]

`,r.toString()}async syntDecls(e,t){if(e==null)return"";switch(t.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(e);case L.PARSER_LL:return await this.syntTables(e,t)+this.syntErrorsLL(e);default:{const n=je.createGenerator(e,t.parser);if(n==null)throw new Z("Gerador de Tabela é nulo.");return this.lrTable=await n.buildIntTable(),"FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`

class SLRAction:
	SHIFT  = 0
	REDUCE = 1
	ACTION = 2
	ACCEPT = 3
	GO_TO  = 4
	ERROR  = 5

`+await this.syntTables(e,t)}}}context(e){if(!e.hasContext())return"";let t="";t+=`SCANNER_CONTEXT = [
`;for(let n=0;n<e.transitions.size();n++)t+=`
[`,t+=e.isContext(n)?"1":"0",t+=", ",t+=e.getOrigin(n),t+=`],
`;return t=t.slice(0,-2),t+=`
];

`,t.toString()}scannerTable(e,t){if(t.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`SCANNER_TABLE = [
`;const s=e.transitions.size();let r=s.toString().length;r==1&&(r=2);for(let i=0;i<s;i++){n+="	[ ";for(let o=0;o<256;o++){const a=e.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)n+=" ";n+=a+", "}n=n.slice(0,-2),n+=` ],
`}return n=n.slice(0,-2),n+=`]
`,n.toString()}specialCases(e){if(e.specialCases.length>0){const t=e.getSpecialCasesIndexes(),n=e.specialCases;let s="";s+=`SPECIAL_CASES_INDEXES = [0 for i in range(0, ${t.length+1})]
`;let r=t.length;for(let i=0;i<r;i++)s+=`SPECIAL_CASES_INDEXES[${i}] = ${t[i][0]}
`;s+=`SPECIAL_CASES_INDEXES[${r}] = ${t[r-1][1]}
`,r=n.length,s+="SPECIAL_CASES_KEYS = [ ",r=n.length;for(let i=0;i<r;i++)s+='"'+n[i].key+'", ';s=s.slice(0,-2),s+=` ]

`,s+="SPECIAL_CASES_VALUES = [ ";for(let i=0;i<r;i++)s+=n[i].value+", ";return s=s.slice(0,-2),s+=` ]

`,s.toString()}else return""}async syntTables(e,t){if(e==null)return"";switch(t.parser){case L.PARSER_REC_DESC:throw new Z("REC_DESC DOES NOT USE SYNTTABLES");case L.PARSER_LL:return await this.genLLSyntTables(e);default:return this.syntTransTable(e)+this.productionsLR(e)+this.syntErrorsLR()}}async genLLSyntTables(e){const t=[],n=e.startSymbol,s=e.FIRST_NON_TERMINAL,r=e.symbols.length,i=`START_SYMBOL = ${n};

FIRST_NON_TERMINAL    = ${s};
FIRST_SEMANTIC_ACTION = ${r};
`;return t.push(i),t.push(`
`),t.push(await this.emitLLTable(new Ne(e))),t.push(`
`),t.push(this.productionsLL(e)),t.push(`
`),t.join("")}async emitLLTable(e){let t=await e.generateTable(),n=new Array(t.length).fill([]).map(()=>new Array(t[0].length)),s=0;for(let i=0;i<n.length;i++)for(let o=0;o<n[i].length;o++){let a=t[i][o].toString();n[i][o]=a,a.length>s&&(s=a.length)}const r=[];r.push(`PARSER_TABLE = [
`);for(let i=0;i<n.length;i++){r.push("	[");for(let o=0;o<n[i].length;o++){r.push(" ");for(let a=n[i][o].length;a<s;a++)r.push(" ");r.push(n[i][o]),r.push(",")}r.pop(),r.push(` ],
`)}return r.pop(),r.push(" ],"),r.push(`
]
`),r.join("")}productionsLL(e){const t=e.productions,n=new Array(t.size()).fill([]);let s=0;for(let i=0;i<t.size();i++){const o=t.get(i).get_rhs();if(o.length>0){n[i]=[];for(let a=0;a<o.length;a++)n[i][a]=o[a].toString(),n[i][a].length>s&&(s=n[i][a].length)}else n[i]=new Array(1),n[i][0]="0"}const r=[];r.push(`PRODUCTIONS = [
`);for(let i=0;i<n.length;i++){r.push("	[");for(let o=0;o<n[i].length;o++){r.push(" ");for(let a=n[i][o].length;a<s;a++)r.push(" ");r.push(n[i][o]),r.push(",")}r.pop(),r.push(` ],
`)}return r.pop(),r.push(` ]
`),r.push(`
]
`),r.join("")}productionsLR(e){let t="";const n=e.productions.toArray();t+=`PRODUCTIONS = [
`;for(let s=0;s<n.length;s++)t+="	[ ",t+=n[s].get_lhs(),t+=", ",t+=n[s].get_rhs().length,t+=` ],
`;return t=t.slice(0,-2),t+=`
]
`,t.toString()}syntTransTable(e){if(e instanceof ie)return this.syntTransTableGrammar(e);throw new Z("LL(1) NOT SUPPORTED (transtable)")}syntTransTableGrammar(e){if(this.lrTable===null)throw new Z("Tabela LR está nula.");let t="";t+=`PARSER_TABLE = [
`;let n=this.lrTable.length;e.productions.size()>n&&(n=e.productions.size()),n=(""+n).length;for(let s=0;s<this.lrTable.length;s++){t+="	[";for(let r=0;r<this.lrTable[s].length;r++){t+=" [",t+="SLRAction."+te.CONSTANTS[this.lrTable[s][r][0]],t+=", ";const i=""+this.lrTable[s][r][1];for(let o=i.length;o<n;o++)t+=" ";t+=i+"],"}t=t.slice(0,-1),t+=` ],
`}return t=t.slice(0,-2),t+=`
];
`,t.toString()}syntErrorsLL(e){const t=e.symbols;let n=`
PARSER_ERROR = [
	"",
	"Era esperado fim de programa",
`;for(let s=2;s<e.FIRST_NON_TERMINAL;s++){n+='	"Era esperado ';for(let r=0;r<t[s].length;r++)switch(t[s].charAt(r)){case'"':n+='\\"';break;case"\\":n+="\\\\";break;default:n+=t[s].charAt(r)}n+=`",
`}for(let s=e.FIRST_NON_TERMINAL;s<t.length;s++)n+=`	"${t[s]} inválido",
`;return n+="]",n}syntErrorsLR(){if(this.lrTable===null)throw new Z("Tabela LR está nula.");let e="";e+=`PARSER_ERROR = [
`;for(let t=0;t<this.lrTable.length;t++)e+='	"Erro estado '+t+`",
`;return e=e.slice(0,-2),e+=`
]

`,e.toString()}}class os{generate(e,t){const n=new Map;let s="";const r=t.scannerName;return t.generateScanner==!0&&(e!=null?s=this.buildScanner(e,t):s="",n.set(r+".py",s)),n}bidistream(e){return e.input==L.INPUT_STREAM?`from io                 import StringIO

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

`:""}buildScanner(e,t){const n=t.scannerName,s=t.pkgName!==""?t.pkgName+".":"",r=t.input==L.INPUT_STREAM;return`from ${s}Constants import *
from ${s}Errors    import LexicalError
from ${s}Token     import Token

`+this.bidistream(t)+"class "+n+`:

	def __init__(self, input: ${r?"StringIO":"str"} = None):
		self.set_input(input)

`+(r?`	def set_input(self, input: StringIO):
		self.input = BidirectionalStream(input)

`:`	def set_input(self, input: str):
		self.input    = input
		self.position = 0

`)+`	def next_token(self):

`+(r?`		start    = self.input.shadowpos
		newchar  = 0
		iters    = 0
`:`		if self.has_input() == False:
			return None

		start    = self.position
`)+`		state    = 0
		oldState = 0
		endState = -1
		end      = -1

`+(e.hasContext()?`		ctxtState = -1
		ctxtEnd   = -1
`:"")+`		while ${r?"True":"self.has_input()"}:

`+(r?`			newchar = self.input.next_char()
			if newchar == -1:
				break

			iters += 1

`:"")+`			oldState = state
			state    = self.next_state(${r?"newchar":"self.next_char()"}, state)

			if state < 0:
				break

			else:
				if self.token_for_state(state) != None:
					endState = state
					end      = ${r?"self.input.shadowpos":"self.position"}

`+(e.hasContext()?`			if SCANNER_CONTEXT[state][0] == 1:
				ctxtStatet = state
				ctxtEnd    = ${r?"self.input.shadowpos":"self.position"}
`:"")+(r?`		if newchar == -1 and iters == 0:
			self.input.rewind(start)
			return None

`:"")+`		if endState < 0 or (endState != state and self.token_for_state(oldState) == -2):
			raise LexicalError(SCANNER_ERROR[oldState], start)

`+(e.hasContext()?`		if ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState:
			end = ctxtEnd`:"")+(r?`		self.input.rewind(end)

`:`		self.position = end

`)+`		token = self.token_for_state(endState)

		if token == 0:
			return self.next_token()
		else:
			lexeme = self.input${r?".shadow":""}[start:end]
			if TOKEN_DEPENDENCY or CASE_INSENSITIVITY:
				token = self.lookup_token(token, lexeme)
			return Token(TokenId(token), lexeme, start)

	def next_state(self, c: int, state: int):
`+this.nextStateImpl(e,t)+`
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

`+(r?"":`	def has_input(self):
		return self.position < len(self.input)

	def next_char(self):
		if self.has_input():
			res = self.input[self.position]
			self.position += 1
			return ord(res)
		else:
			return -1

`)}nextStateImpl(e,t){switch(t.scannerTable){case L.SCANNER_TABLE_FULL:case L.SCANNER_TABLE_COMPACT:return`		return SCANNER_TABLE[state][c]
`;case L.SCANNER_TABLE_HARDCODE:{const n=e.transitions;let s="";for(let r=0;r<n.size();r++){const i=n.get(r);if(i.size!=0){s+="			case "+r+`:
				match c:
`;for(const[o,a]of i.entries()){const l=o,_=a;s+=`					case ${l.charCodeAt(0)}:
						return ${_};
`}s+=`					case _:
						return -1
`}}return`		match state:
`+s.toString()+`			case _:
				return -1
`}default:return""}}}class as{async generate(e,t){const n=new Map;if(t.generateParser==!0&&e!=null){const s=t.parserName;n.set(s+".py",await this.parser(e,t)),n.set(t.semanticName+".py",this.semantic(t))}return n}semantic(e){const t=e.semanticName;return`from ${e.pkgName!==""?e.pkgName+".":""}Token import Token

class ${t}:

	def execute_action(self, action: int, token: Token):
		print("Ação: ", action, "Token: ", token)`}async redDecParser(e,t){const n=await new Ne(e).generateTable(),s=new $e(n,e),r=t.pkgName!==""?t.pkgName+".":"",i=t.parserName;let o=`from ${r}Token     import Token
from ${r}Constants import *
from ${r}Errors    import SyntacticError

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

		self._${s.getStart()}()
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

`;const a=s.build();for(let l=e.FIRST_NON_TERMINAL;l<e.FIRST_SEMANTIC_ACTION();l++){const _=s.getSymbols(l),u=a.get(_);if(o+=`	def _${_}(self):
		match self.current_token.tkid:
`,u==null)throw new xe("Gramática não é LL.");const p=Array.from(u.input.keys());let c=new Set;for(let m=0;m<p.length;m++){const f=u.input.get(p[m]);let T=p[m];if(c.has(T))continue;let g=s.getSymbols(T);o+=`			case TokenId.${g==="$"?"DOLLAR":"t_"+g}`,c.add(T);for(let S=m+1;S<p.length;S++)if(u.input.get(p[S])===f){if(T=p[S],c.has(T))continue;let y=s.getSymbols(T);o+=` | TokenId.${y==="$"?"DOLLAR":"t_"+y}`,c.add(T)}if(o+=`:
`,f==null)throw new xe("Gramática não é LL.");f.length==0&&(o+=`				pass # EPSILON
`);for(let S=0;S<f.length;S++){const A=f[S];e.isTerminal(A)?o+=`				self.matchr(${A}) # ${s.getSymbols(A)}
`:e.isNonTerminal(A)?o+=`				self._${s.getSymbols(A)}()
`:o+=`				self.semantic.execute_action(${A-e.FIRST_SEMANTIC_ACTION()}, self.previous_token)
`}}o+=`			case _:
				raise SyntacticError(PARSER_ERROR[${u.lhs}], self.current_token.position)
`}return o}llParser(e,t){const n=t.pkgName!==""?t.pkgName+".":"",s=t.parserName;return`from ${n}Token     import Token
from ${n}Constants import *
from ${n}Errors    import SyntacticError

class ${s}:

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
`}async parser(e,t){const n=t.pkgName!==""?t.pkgName+".":"";switch(t.parser){case L.PARSER_REC_DESC:return await this.redDecParser(e,t);case L.PARSER_LL:return this.llParser(e,t);default:{const s=t.parserName;return`from ${n}Token import Token
from ${n}Constants import *
from ${n}Errors import SyntacticError

class `+s+`:

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
`}}}}class ls{lrTable=null;async generate(e,t,n){const s=new Map;if(e===null||t===null)throw new Error("FiniteAutomata and Grammar must not be null");let r=n.pkgName!==""?n.pkgName+"/":"";return s.set("Cargo.toml",this.generateCargotoml()),s.set("src/main.rs",this.mainfunc(n)),s.set(`src/${r}token.rs`,this.generateToken(n)),s.set(`src/${r}errors.rs`,this.generateErrors(n)),s.set(`src/${r}constants.rs`,await this.generateConstants(e,t,n)),r!==""&&s.set(`src/${r}mod.rs`,this.generateMod(n)),s}generateMod(e){return`
pub mod token;
pub mod errors;
pub mod constants;
${e.generateScanner?"pub mod scanner;":""}
${e.generateParser?"pub mod parser;":""}
${e.generateParser?"pub mod codegen;":""}
`}mainfunc(e){let t=e.scannerName,n=e.parserName,s=e.semanticName;const r=e.pkgName!==""?e.pkgName+"::":"",i=e.input==L.INPUT_STRING;return`
#![allow(nonstandard_style)]

${i?"":"use std::{fs::File, io::BufReader};"}

use crate::${r}{
    ${e.generateScanner?`scanner::${t},`:""}
    ${e.generateParser?`parser::${n},`:""}
    ${e.generateParser?`codegen::${s}`:""}
};
${e.pkgName===""?`
mod constants;
mod errors;
mod token;
${e.generateScanner?"mod scanner;":""}
${e.generateParser?"mod parser;":""}
${e.generateParser?"mod codegen;":""}
`:`
mod ${e.pkgName};
`}
fn main() {
${e.generateScanner?`${i?`    let lex = ${t}::new("".into());`:`    let file = File::open("program.txt").expect("erro ao abrir arquivo");
    let lex = ${t}::new(BufReader::new(file));`}`:""}
    ${e.generateParser?`let sem = ${s}::new();`:""}
    ${e.generateParser?`let syn = ${n}::new(lex, sem);`:""}

    ${e.generateParser?`if let Err(e) = syn.parse() {
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

`}generateToken(e){return`
use crate::${e.pkgName!==""?e.pkgName+"::":""}constants::TokenId;

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

`}generateErrors(e){return`
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

`}async generateConstants(e,t,n){return`
use num_derive::FromPrimitive;

pub const CASE_INSENSITIVITY: bool  = `+(n.scannerCaseSensitive==!0?`false;

`:`true;

`)+"pub const TOKEN_DEPENDENCY  : bool  = "+(e.specialCases.length>0?`true;
`:`false;
`)+`#[allow(nonstandard_style)]
#[derive(Default, Debug, Clone, Copy, PartialEq, Eq, FromPrimitive)]
pub enum TokenId {
	#[default]
	EPSILON = 0,
	DOLLAR  = 1,
`+this.constList(e,t)+(n.generateScanner?this.lexDecls(e,n):"")+(n.generateParser?await this.syntDecls(t,n):"")}constList(e,t){let n="",s=null;if(e!=null)s=e.tokens.toArray();else if(t!=null)s=t.terminals;else throw new Error("Erro Interno");for(let r=0;r<s.length;r++){const i=s[r];i.charAt(0)=='"'?n+="	t_TOKEN_"+(r+2)+" = "+(r+2)+",//"+i+`
`:n+="	t_"+i+" = "+(r+2)+`,
`}return n+=`
}
`,n.toString()}lexDecls(e,t){if(e==null)return"";let n=e.transitions.size(),s,r=`
pub const STATES_COUNT: usize = ${n};

`;r+=this.scannerTable(e,t)+`
`,r+="pub const TOKEN_STATE: [i32; STATES_COUNT] = [",s=n.toString().length,s==1&&(s=2);for(let i=0;i<n;i++){const a=e.tokenForState(i).toString();for(let l=a.length;l<s;l++)r+=" ";r+=a+", "}r+=`];

`,r+=this.context(e),r+=this.specialCases(e),r+=`pub const SCANNER_ERRORS: [&str; STATES_COUNT] = [
`,n=e.transitions.size();for(let i=0;i<n;i++){r+='	"';const o=e.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?r+='\\"':r+=o.charAt(a);r+=`",
`}return r+=`];

`,r.toString()}async syntDecls(e,t){if(e==null)return"";switch(t.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(e);case L.PARSER_LL:return await this.syntTables(e,t)+this.syntErrorsLL(e);default:{const n=je.createGenerator(e,t.parser);if(n==null)throw new Z("Gerador de Tabela é nulo.");return this.lrTable=await n.buildIntTable(),`pub const FIRST_SEMANTIC_ACTION: i32 = ${e.FIRST_SEMANTIC_ACTION()};

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

`+await this.syntTables(e,t)}}}context(e){if(!e.hasContext())return"";let t="";t+=`pub const SCANNER_CONTEXT: [(i32; i32); ${e.transitions.size()}] = [
`;for(let n=0;n<e.transitions.size();n++)t+=`
(`,t+=e.isContext(n)?"1":"0",t+=", ",t+=e.getOrigin(n),t+=`),
`;return t=t.slice(0,-2),t+=`
];

`,t.toString()}scannerTable(e,t){if(t.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`#[rustfmt::skip]
`,n+=`pub const SCANNER_TABLE: [[i32; 256]; STATES_COUNT] = [
`;const s=e.transitions.size();let r=s.toString().length;r==1&&(r=2);for(let i=0;i<s;i++){n+="	[ ";for(let o=0;o<256;o++){const a=e.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)n+=" ";n+=a+", "}n=n.slice(0,-2),n+=` ],
`}return n=n.slice(0,-2),n+=`
];
`,n.toString()}specialCases(e){if(e.specialCases.length>0){const t=e.getSpecialCasesIndexes(),n=e.specialCases;let s="";s+=`pub const SPECIAL_CASES_INDEXES: [i32; ${e.getSpecialCasesIndexes().length+1}] = [`;let r=t.length;for(let i=0;i<r;i++)s+=`${t[i][0]}, `;s+=`${t[r-1][1]} ];
`,r=n.length,s+=`pub const SPECIAL_CASES_KEYS: [&str; ${r}] = [ `,r=n.length;for(let i=0;i<r;i++)s+='"'+n[i].key+'", ';s+=` ];

`,s+=`pub const SPECIAL_CASES_VALUES: [i32; ${r}] = [ `;for(let i=0;i<r;i++)s+=n[i].value+", ";return s+=` ];

`,s.toString()}else return""}async syntTables(e,t){if(e==null)return"";switch(t.parser){case L.PARSER_REC_DESC:throw new Z("REC_DESC DOES NOT USE SYNTTABLES");case L.PARSER_LL:return await this.genLLSyntTables(e);default:return this.syntTransTable(e)+this.productionsLR(e)+this.syntErrorsLR()}}async genLLSyntTables(e){const t=[],n=e.startSymbol,s=e.FIRST_NON_TERMINAL,r=e.symbols.length,i=`pub const START_SYMBOL: i32 = ${n};

pub const FIRST_NON_TERMINAL: i32 = ${s};
pub const FIRST_SEMANTIC_ACTION: i32 = ${r};
`;return t.push(i),t.push(`
`),t.push(await this.emitLLTable(e)),t.push(`
`),t.push(this.productionsLL(e)),t.push(`
`),t.join("")}async emitLLTable(e){let n=await new Ne(e).generateTable(),s=new Array(n.length).fill([]).map(()=>new Array(n[0].length)),r=0;for(let o=0;o<s.length;o++)for(let a=0;a<s[o].length;a++){let l=n[o][a].toString();s[o][a]=l,l.length>r&&(r=l.length)}const i=[];i.push(`pub const PARSER_TABLE: [[i32; ${e.FIRST_NON_TERMINAL-1}]; ${e.FIRST_SEMANTIC_ACTION()-e.FIRST_NON_TERMINAL}] = [
`);for(let o=0;o<s.length;o++){i.push("    [");for(let a=0;a<s[o].length;a++){i.push(" ");for(let l=s[o][a].length;l<r;l++)i.push(" ");i.push(s[o][a]),i.push(",")}i.pop(),i.push(` ],
`)}return i.pop(),i.push(" ],"),i.push(`
];
`),i.join("")}productionsLL(e){const t=e.productions,n=new Array(t.size()).fill([]);let s=0;for(let i=0;i<t.size();i++){const o=t.get(i).get_rhs();if(o.length>0){n[i]=[];for(let a=0;a<o.length;a++)n[i][a]=o[a].toString(),n[i][a].length>s&&(s=n[i][a].length)}else n[i]=new Array(1),n[i][0]="0"}const r=[];r.push(`pub const PRODUCTIONS: [&[i32]; ${e.productions.size()}] = [
`);for(let i=0;i<n.length;i++){r.push("    &[");for(let o=0;o<n[i].length;o++){r.push(" ");for(let a=n[i][o].length;a<s;a++)r.push(" ");r.push(n[i][o]),r.push(",")}r.pop(),r.push(` ],
`)}return r.pop(),r.push(` ]
`),r.push(`
];
`),r.join("")}productionsLR(e){let t="";const n=e.productions.toArray();t+=`pub const PRODUCTIONS: [(i32, i32); ${n.length}] = [
`;for(let s=0;s<n.length;s++)t+=`    (${n[s].get_lhs()}, ${n[s].get_rhs().length}),
`;return t+=`];

`,t.toString()}syntTransTable(e){if(e instanceof ie)return this.syntTransTableGrammar(e);throw new Z("LL(1) NOT SUPPORTED (transtable)")}syntTransTableGrammar(e){if(this.lrTable===null)throw new Z("Tabela LR está nula.");let t="";t+=`pub const PARSER_TABLE: [[(SLRAction, i32); ${this.lrTable[0].length}]; ${this.lrTable.length}] = [
`;let n=this.lrTable.length;e.productions.size()>n&&(n=e.productions.size()),n=(""+n).length;for(let s=0;s<this.lrTable.length;s++){t+="    [";for(let r=0;r<this.lrTable[s].length;r++){t+=" (",t+="SLRAction::"+te.CONSTANTS[this.lrTable[s][r][0]],t+=", ";const i=""+this.lrTable[s][r][1];for(let o=i.length;o<n;o++)t+=" ";t+=i+"),"}t=t.slice(0,-1),t+=`    ],
`}return t=t.slice(0,-2),t+=`
];

`,t.toString()}syntErrorsLL(e){const t=e.symbols;let n=2,s=`
pub const PARSER_ERROR: [&str; PARSER_ERROR_CT] = [
	"",
	"Era esperado fim de programa",
`;for(let r=2;r<e.FIRST_NON_TERMINAL;r++){s+='	"Era esperado ';for(let i=0;i<t[r].length;i++)switch(t[r].charAt(i)){case'"':s+='\\"';break;case"\\":s+="\\\\";break;default:s+=t[r].charAt(i)}s+=`",
`,n++}for(let r=e.FIRST_NON_TERMINAL;r<t.length;r++)s+=`	"${t[r]} inválido",
`,n++;return s+=`];

`,s+=`const PARSER_ERROR_CT: usize = ${n};`,s}syntErrorsLR(){if(this.lrTable===null)throw new Z("Tabela LR está nula.");let e="";e+=`pub const PARSER_ERROR: [&str; ${this.lrTable.length}] = [
`;for(let t=0;t<this.lrTable.length;t++)e+='    "Erro estado '+t+`",
`;return e+=`];

`,e.toString()}}class cs{generate(e,t){const n=new Map;let s="";const r=t.pkgName!==""?t.pkgName+"/":"";return t.generateScanner==!0&&(e!=null?s=this.buildScanner(e,t):s="",n.set(`src/${r}scanner.rs`,s)),n}buildScanner(e,t){const n=t.scannerName,s=t.pkgName!==""?t.pkgName+"::":"",r=t.input==L.INPUT_STRING;return`
#![allow(unused)]

use std::io::{BufReader, Read, Seek, SeekFrom};

use num_traits::FromPrimitive;

use crate::${s}constants::*;
use crate::${s}constants::*;
use crate::${s}errors::AnalysisError;
use crate::${s}token::*;

pub struct ${n}${r?"":"<T: Read + Seek>"} {
${r?`    input: String,
`:`    input: BufReader<T>,
     shadow: String,
`}    pos: usize,
}

impl${r?"":"<T: Read + Seek>"} ${n}${r?"":"<T>"} {
    pub fn new(input: ${r?"String":"BufReader<T>"}) -> Self {
        ${n} {
            input,
${r?"":"		shadow: String::new(),"}            pos: 0,
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
${e.hasContext()?`        let mut ctxt_state: i32 = -1;
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
${e.hasContext()?`            if SCANNER_CONTEXT[state].0 == 1 {
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

${e.hasContext()?`        if ctxt_state != -1 && SCANNER_CONTEXT[end_state].1 == ctxt_end {
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
${t.scannerTable==L.SCANNER_TABLE_HARDCODE?`${this.nextStateImpl(e,t)}`:`        SCANNER_TABLE[state as usize][c as usize]
`}    }
    fn token_for_state(&self, state: i32) -> Option<i32> {
        if (state >= 0) && ((state as usize) < STATES_COUNT) {
            Some(TOKEN_STATE[state as usize])
        } else {
            None
        }
    }
    fn lookup_token(&self, base: i32, mut key: String) -> i32 {
${t.scannerCaseSensitive==!1||e.specialCases.length>0?`        let mut start = SPECIAL_CASES_INDEXES[base as usize];
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
${r?"":`        self.input.seek(SeekFrom::Start(pos as u64));
        self.shadow.truncate(pos);
`}    }
    fn substr_input(&self, start: usize, end: usize) -> &str {
${r?`        self.input.split_at(start).1.split_at(end - start).0
`:`        self.shadow.split_at(start).1.split_at(end - start).0
`}    }
    fn next_char(&mut self) -> Option<u8> {
${r?`        if self.pos < self.input.len() {
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

`}nextStateImpl(e,t){const n=e.transitions;let s="";for(let r=0;r<n.size();r++){const i=n.get(r);if(i.size!=0){s+="			"+r+` => match c {
`;for(const[o,a]of i.entries()){const l=o,_=a;s+=`				${l.charCodeAt(0)} => ${_},
`}s+=`				 _ => -1,
			},
`}}return`		match state {
`+s.toString()+`			_ => -1,
		}
`}}class hs{async generate(e,t){const n=new Map,s=t.pkgName!==""?t.pkgName+"/":"";return t.generateParser==!0&&e!=null&&(n.set(`src/${s}parser.rs`,await this.parser(e,t)),n.set(`src/${s}codegen.rs`,this.semantic(t))),n}semantic(e){const t=e.semanticName;return`
use crate::${e.pkgName!==""?e.pkgName+"::":""}{errors::AnalysisError, token::Token};

pub struct ${t} {}

impl ${t} {
    pub fn new() -> Self {
        ${t} {}
    }
    pub fn execute_action(&mut self, action: u32, token: &Token) -> Result<(), AnalysisError> {
        println!("Ação: {action}, Token: {token:?}");
        Ok(())
    }
}
`}async parser(e,t){switch(t.parser){case L.PARSER_REC_DESC:return await this.redDecParser(e,t);case L.PARSER_LL:return this.llParser(e,t);default:return this.lrParser(e,t)}}lrParser(e,t){const n=t.parserName,s=t.pkgName!==""?t.pkgName+"::":"",r=t.input==L.INPUT_STRING;return`${r?"":"use std::io::{Read, Seek};"}
use crate::${s}{
    codegen::${t.semanticName}, constants::*, errors::AnalysisError, scanner::${t.scannerName}, token::Token,
};

pub struct ${n}${r?"":"<T: Read + Seek>"} {
    previous_token: Option<Token>,
    current_token: Option<Token>,
    stack: Vec<u32>,
    scanner: ${t.scannerName}${r?"":"<T>"},
    semantic: ${t.semanticName},
}

enum SyntaxParsingState {
    Continue,
    Accept,
    Reject(AnalysisError),
}

impl${r?"":"<T: Read + Seek>"} ${n}${r?"":"<T>"} {
    pub fn new(scanner: ${t.scannerName}${r?"":"<T>"}, semantic: ${t.semanticName}) -> Self {
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

`}async redDecParser(e,t){const n=await new Ne(e).generateTable(),s=new $e(n,e);let r=t.scannerName,i=t.parserName,o=t.semanticName;const a=t.pkgName!==""?t.pkgName+"::":"",l=t.input==L.INPUT_STRING;let _=`
${l?"":"use std::io::{Read, Seek};"}

use crate::${a}{
    codegen::${o}, constants::*, errors::AnalysisError, scanner::${r}, token::Token,
};

pub struct ${i}${l?"":"<T: Read + Seek>"} {
    current_token: Option<Token>,
    previous_token: Option<Token>,
    scanner: ${r}${l?"":"<T>"},
    semantic: ${o},
}

impl${l?"":"<T: Read + Seek>"} ${i}${l?"":"<T>"} {
    pub fn new(lex: ${r}${l?"":"<T>"}, sem: ${o}) -> Self {
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

        self._${s.getStart()}()?;

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

`;const u=s.build();for(let p=e.FIRST_NON_TERMINAL;p<e.FIRST_SEMANTIC_ACTION();p++){const c=s.getSymbols(p),m=u.get(c);if(_+=`    fn _${c}(&mut self) -> Result<(), AnalysisError> {
        match self.current_token.as_ref().unwrap().get_id() {
`,m==null)throw new xe("Gramática não é LL.");const f=Array.from(m.input.keys());let T=new Set;for(let g=0;g<f.length;g++){const S=m.input.get(f[g]);let A=f[g];if(T.has(A))continue;let y=s.getSymbols(A);_+=`            TokenId::${y==="$"?"DOLLAR":"t_"+y}`,T.add(A);for(let N=g+1;N<f.length;N++)if(m.input.get(f[N])===S){if(A=f[N],T.has(A))continue;let O=s.getSymbols(A);_+=` | TokenId::${O==="$"?"DOLLAR":"t_"+O}`,T.add(A)}if(_+=` => {
`,S==null)throw new xe("Gramática não é LL.");for(let N=0;N<S.length;N++){const F=S[N];e.isTerminal(F)?_+=`                self.matchr(${F})?; // ${s.getSymbols(F)}
`:e.isNonTerminal(F)?_+=`                self._${s.getSymbols(F)}()?;
`:_+=`                self.semantic.execute_action(${F-e.FIRST_SEMANTIC_ACTION()}, self.previous_token.as_ref().unwrap())?;
`}_+=`            },
`}_+=`            _ => return Err(AnalysisError::syntatic(PARSER_ERROR[${m.lhs}].into(), self.current_token.as_ref().unwrap().get_position()))
`,_+=`        };
`,_+=`        Ok(())
`,_+=`    }
`}return _+=`}
`,_}llParser(e,t){const n=t.scannerName,s=t.parserName,r=t.semanticName,i=t.pkgName!==""?t.pkgName+"::":"",o=t.input==L.INPUT_STRING;return`
use std::io::{Read, Seek};

use crate::${i}{
    codegen::${r}, constants::*, errors::AnalysisError, scanner::${n}, token::Token,
};

pub struct ${s}${o?"":"<T: Read + Seek>"} {
    stack: Vec<i32>,
    current_token: Option<Token>,
    previous_token: Option<Token>,
    scanner: ${n}${o?"":"<T>"},
    semantic: ${r},
}

impl${o?"":"<T: Read + Seek>"} ${s}${o?"":"<T>"} {
    pub fn new(lex: ${n}${o?"":"<T>"}, sem: ${r}) -> Self {
        ${s} {
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
        } else if ${s}${o?"":"::<T>"}::is_terminal(x) {
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
        } else if ${s}${o?"":"::<T>"}::is_non_terminal(x) {
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

`}}class Ge{static EPSILON=0;static DOLLAR=1;static FIRST_TERMINAL=2;FIRST_NON_TERMINAL;FIRST_SEMANTIC_ACTION;LAST_SEMANTIC_ACTION;START_SYMBOL=0;grammar;scanner=null;table;productions;stack=new Be;currentToken=null;symb;node=new ye;nodeCount=new Be;constructor(e,t){this.grammar=t.getGrammar()||(()=>{throw new Error("Grammar is undefined")})(),this.table=e,this.FIRST_NON_TERMINAL=this.grammar.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION=this.grammar.FIRST_SEMANTIC_ACTION(),this.LAST_SEMANTIC_ACTION=this.grammar.LAST_SEMANTIC_ACTION(),this.START_SYMBOL=this.grammar.startSymbol;const n=this.grammar.productions;this.productions=[];for(let s=0;s<n.size();s++){const r=n.get(s).get_rhs();if(r.length>0){this.productions[s]=[];for(let i=0;i<r.length;i++)this.productions[s][i]=r[i]}else this.productions[s]=[0]}this.symb=this.grammar.symbols}step(){this.currentToken==null&&(this.currentToken=new de(Ge.DOLLAR,"$",0));const e=this.stack.pop(),t=this.currentToken.id;if(e==null)throw new Z("Stack is not initialized");if(e==Ge.EPSILON){this.node.add(new ye("EPSILON"));let n=this.nodeCount.pop();for(;n==1;){const s=this.node.parent;if(s===null)throw new Z("Null parent");if(this.node=s,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}return this.nodeCount.push(n-1),!1}else if(this.isTerminal(e)){this.node.add(new ye(this.symb[t]));let n=this.nodeCount.pop();for(;n==1;){const s=this.node.parent;if(s===null)throw new Z("Null parent");if(this.node=s,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}if(this.nodeCount.push(n-1),e==t){if(this.stack.empty())return!0;if(this.scanner==null)throw new Z("Scanner is NULL");return this.currentToken=this.scanner.nextToken(),!1}else throw this.node.add(new ye("ERRO SINTÁTICO: Era esperado "+this.symb[e])),new Z("Era esperado "+this.symb[e],this.currentToken.position)}else if(this.isNonTerminal(e)){const n=this.table[e-this.FIRST_NON_TERMINAL][t-1];if(n!=-1){const s=this.productions[n];for(let i=s.length-1;i>=0;i--)this.stack.push(s[i]);const r=new ye(this.symb[e]);return this.node.add(r),this.node=r,this.nodeCount.push(s.length),!1}else throw this.node.add(new ye("ERRO SINTÁTICO: "+this.symb[t]+" inesperado")),new Z(this.symb[t]+" inesperado",this.currentToken.position)}else if(this.isSemanticAction(e)){this.node.add(new ye("#"+(e-this.FIRST_SEMANTIC_ACTION)));let n=this.nodeCount.pop();for(;n==1;){const s=this.node.parent;if(s===null)throw new Z("Null parent");if(this.node=s,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}return this.nodeCount.push(n-1),!1}else return!1}parse(e,t){for(this.scanner=e,this.node=t,this.nodeCount.clear(),this.stack.clear(),this.stack.push(Ge.DOLLAR),this.stack.push(this.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););return t}isTerminal(e){return e>=0&&e<this.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=this.FIRST_NON_TERMINAL&&e<this.FIRST_SEMANTIC_ACTION}isSemanticAction(e){return e>=this.FIRST_SEMANTIC_ACTION&&e<=this.LAST_SEMANTIC_ACTION}}function rn(E,e){const t=E.split(`
`).filter(Boolean),n=new Map;for(let s of t){s=s.trim();const r=s.indexOf(":"),i=s.slice(0,r);let o=s.slice(r+1),a=!1;if(o.trim()==="/"&&(o='"/" ',a=!0),o.trim()==="//")throw new fe(`A definição regular '${o.trim()}' será confundida como comentário no próprio editor, abortando.`);const l=[i,o].filter(Boolean);let _=l[1].trim();a&&(_+=" ");const u=_.match(/{[a-zA-Z_][a-zA-Z0-9_]*}/g);if(u!==null)for(const p of u)if(n.has(p))_=_.replace(p,n.get(p));else throw new fe(`Definições Regulares: A definição ${p} usada em '${s}' não existe.`);n.set("{"+l[0].trim()+"}",_)}for(const[s,r]of n.entries()){const i=new RegExp(s,"g");e=e.replace(i,r)}return e}async function us(E,e,t,n,s,r,i,o,a,l,_,u){try{t=rn(e,t),e=""}catch(O){throw console.warn(O),new fe(O.message)}const p=s.split(`
`),c=new Set;p.forEach(O=>{const j=O.match(/^[^:]+(?=\s*::=)/);j&&c.add(j[0].trim())});const m=Array.from(c),f=m.indexOf(n.trim());if(f==-1)throw new Z("Símbolo inicial da Gramática não encontrado.");const T=m.splice(f,1)[0];m.splice(0,0,T);const g=!0,S=new sn;if(a==null&&(a=S.parseFA(e,t,g)),i&&(_=void 0,u=void 0),i||l==null){i=!1;const O=new ce;{const H=a.tokens;for(let X=0;X<H.size();X++)O.add(H.get(X)),O.add(`
`)}const j=m,P=new ce;j.forEach(H=>P.add(H)),l=new nn().parse(O,P,s)}const A=a.tokens.toArray();if(l===void 0)throw new Z("Grammar is Undefined");let y=null,N=null;switch(r){case L.PARSER_REC_DESC:case L.PARSER_LL:[u,o,N]=await ds(a,l,A,o,g,u);break;case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:[_,o,y]=await ps(a,l,A,o,g,r,_);break}if(y===null&&N===null)throw new Z("Erro na criação do Parser Sintático");let F=new ye("Derivação");if(o===void 0)throw new Z("Finite Automata Simulator is Null");return o.setInput(E),u!=null?F=u.parse(o,F):_!=null&&(F=_.parse(o,F)),[F,l,_,u]}async function fs(E,e,t,n,s,r,i,o){try{e=rn(E,e),E=""}catch(S){throw console.warn(S),new fe(S.message)}const a=n.split(`
`),l=new Set;a.forEach(S=>{const A=S.match(/^[^:]+(?=\s*::=)/);A&&l.add(A[0].trim())});const _=Array.from(l),u=_.indexOf(t.trim());if(u==-1)throw new Z("Símbolo inicial da Gramática não encontrado.");const p=_.splice(u,1)[0];_.splice(0,0,p);const c=!0,m=new sn;if(i==null&&(i=m.parseFA(E,e,c)),r||o==null){r=!1;const S=new ce;{const N=i.tokens;for(let F=0;F<N.size();F++)S.add(N.get(F)),S.add(`
`)}const A=_,y=new ce;A.forEach(N=>y.add(N)),o=new nn().parse(S,y,n)}if(i.tokens.toArray(),o===void 0)throw new Z("Grammar is Undefined");const f=new De;let T=!1,g=null;switch(s.language){case L.LANG_JAVA:f.setAll(await new qn().generate(i,o,s)),f.setAll(new Vn().generate(i,s)),f.setAll(await new Jn().generate(o,s));break;case L.LANG_CPP:f.setAll(await new Qn().generate(i,o,s)),f.setAll(new es().generate(i,s)),f.setAll(await new ts().generate(o,s));break;case L.LANG_DELPHI:f.setAll(await new ns().generate(i,o,s)),f.setAll(new ss().generate(i,s)),f.setAll(await new rs().generate(o,s));break;case L.LANG_PYTHON:let S=new is;f.setAll(await S.generate(i,o,s)),f.setAll(new os().generate(i,s)),f.setAll(await new as().generate(o,s)),T=s.pkgName!=="",g=S.mainfunc(s);break;case L.LANG_RUST:f.setAll(await new ls().generate(i,o,s)),f.setAll(new cs().generate(i,s)),f.setAll(await new hs().generate(o,s));break}return[f,o,T,g]}async function ds(E,e,t,n,s,r){E!=null?n=new He(E,s):n=new He(on(t,s),s);let i;if(e!=null){if(i=new Ne(e),i===null)throw new Z("Parser is Null");if(r===void 0){const o=await i.generateTable();r=new Ge(o,i)}}else throw new Z("Grammar is Null");return[r,n,i]}async function ps(E,e,t,n,s,r,i){E!=null?n=new He(E,s):n=new He(on(t,s),s);let o;if(e!=null){if(o=je.createGenerator(e,r),o===null)throw new Z("Parser is Null");if(i===void 0){const a=await o.buildTable();i=new _t(a,o)}}else throw new Z("Grammar is Null");return[i,n,o]}function on(E,e){try{const t=new Zn;for(let n=0;n<E.length;n++){const s=E[n];t.addToken(s,s)}return t.addIgnore("[\\ \\n\\r\\t]"),t.getFA(e)}catch(t){throw t}}function tt(E){throw new Error('Could not dynamically require "'+E+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var mt={exports:{}};var an;function _s(){return an||(an=1,(function(E,e){(function(t){E.exports=t()})(function(){return(function t(n,s,r){function i(l,_){if(!s[l]){if(!n[l]){var u=typeof tt=="function"&&tt;if(!_&&u)return u(l,!0);if(o)return o(l,!0);var p=new Error("Cannot find module '"+l+"'");throw p.code="MODULE_NOT_FOUND",p}var c=s[l]={exports:{}};n[l][0].call(c.exports,function(m){var f=n[l][1][m];return i(f||m)},c,c.exports,t,n,s,r)}return s[l].exports}for(var o=typeof tt=="function"&&tt,a=0;a<r.length;a++)i(r[a]);return i})({1:[function(t,n,s){var r=t("./utils"),i=t("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(a){for(var l,_,u,p,c,m,f,T=[],g=0,S=a.length,A=S,y=r.getTypeOf(a)!=="string";g<a.length;)A=S-g,u=y?(l=a[g++],_=g<S?a[g++]:0,g<S?a[g++]:0):(l=a.charCodeAt(g++),_=g<S?a.charCodeAt(g++):0,g<S?a.charCodeAt(g++):0),p=l>>2,c=(3&l)<<4|_>>4,m=1<A?(15&_)<<2|u>>6:64,f=2<A?63&u:64,T.push(o.charAt(p)+o.charAt(c)+o.charAt(m)+o.charAt(f));return T.join("")},s.decode=function(a){var l,_,u,p,c,m,f=0,T=0,g="data:";if(a.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var S,A=3*(a=a.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(a.charAt(a.length-1)===o.charAt(64)&&A--,a.charAt(a.length-2)===o.charAt(64)&&A--,A%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=i.uint8array?new Uint8Array(0|A):new Array(0|A);f<a.length;)l=o.indexOf(a.charAt(f++))<<2|(p=o.indexOf(a.charAt(f++)))>>4,_=(15&p)<<4|(c=o.indexOf(a.charAt(f++)))>>2,u=(3&c)<<6|(m=o.indexOf(a.charAt(f++))),S[T++]=l,c!==64&&(S[T++]=_),m!==64&&(S[T++]=u);return S}},{"./support":30,"./utils":32}],2:[function(t,n,s){var r=t("./external"),i=t("./stream/DataWorker"),o=t("./stream/Crc32Probe"),a=t("./stream/DataLengthProbe");function l(_,u,p,c,m){this.compressedSize=_,this.uncompressedSize=u,this.crc32=p,this.compression=c,this.compressedContent=m}l.prototype={getContentWorker:function(){var _=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),u=this;return _.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),_},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(_,u,p){return _.pipe(new o).pipe(new a("uncompressedSize")).pipe(u.compressWorker(p)).pipe(new a("compressedSize")).withStreamInfo("compression",u)},n.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,s){var r=t("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},s.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,s){var r=t("./utils"),i=(function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var _=0;_<8;_++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a})();n.exports=function(o,a){return o!==void 0&&o.length?r.getTypeOf(o)!=="string"?(function(l,_,u,p){var c=i,m=p+u;l^=-1;for(var f=p;f<m;f++)l=l>>>8^c[255&(l^_[f])];return-1^l})(0|a,o,o.length,0):(function(l,_,u,p){var c=i,m=p+u;l^=-1;for(var f=p;f<m;f++)l=l>>>8^c[255&(l^_.charCodeAt(f))];return-1^l})(0|a,o,o.length,0):0}},{"./utils":32}],5:[function(t,n,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(t,n,s){var r=null;r=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:r}},{lie:37}],7:[function(t,n,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",i=t("pako"),o=t("./utils"),a=t("./stream/GenericWorker"),l=r?"uint8array":"array";function _(u,p){a.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=p,this.meta={}}s.magic="\b\0",o.inherits(_,a),_.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(l,u.data),!1)},_.prototype.flush=function(){a.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},_.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},_.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(p){u.push({data:p,meta:u.meta})}},s.compressWorker=function(u){return new _("Deflate",u)},s.uncompressWorker=function(){return new _("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,s){function r(c,m){var f,T="";for(f=0;f<m;f++)T+=String.fromCharCode(255&c),c>>>=8;return T}function i(c,m,f,T,g,S){var A,y,N=c.file,F=c.compression,O=S!==l.utf8encode,j=o.transformTo("string",S(N.name)),P=o.transformTo("string",l.utf8encode(N.name)),H=N.comment,X=o.transformTo("string",S(H)),w=o.transformTo("string",l.utf8encode(H)),D=P.length!==N.name.length,d=w.length!==H.length,z="",ne="",$="",re=N.dir,G=N.date,ee={crc32:0,compressedSize:0,uncompressedSize:0};m&&!f||(ee.crc32=c.crc32,ee.compressedSize=c.compressedSize,ee.uncompressedSize=c.uncompressedSize);var I=0;m&&(I|=8),O||!D&&!d||(I|=2048);var v=0,Q=0;re&&(v|=16),g==="UNIX"?(Q=798,v|=(function(Y,Se){var Ae=Y;return Y||(Ae=Se?16893:33204),(65535&Ae)<<16})(N.unixPermissions,re)):(Q=20,v|=(function(Y){return 63&(Y||0)})(N.dosPermissions)),A=G.getUTCHours(),A<<=6,A|=G.getUTCMinutes(),A<<=5,A|=G.getUTCSeconds()/2,y=G.getUTCFullYear()-1980,y<<=4,y|=G.getUTCMonth()+1,y<<=5,y|=G.getUTCDate(),D&&(ne=r(1,1)+r(_(j),4)+P,z+="up"+r(ne.length,2)+ne),d&&($=r(1,1)+r(_(X),4)+w,z+="uc"+r($.length,2)+$);var q="";return q+=`
\0`,q+=r(I,2),q+=F.magic,q+=r(A,2),q+=r(y,2),q+=r(ee.crc32,4),q+=r(ee.compressedSize,4),q+=r(ee.uncompressedSize,4),q+=r(j.length,2),q+=r(z.length,2),{fileRecord:u.LOCAL_FILE_HEADER+q+j+z,dirRecord:u.CENTRAL_FILE_HEADER+r(Q,2)+q+r(X.length,2)+"\0\0\0\0"+r(v,4)+r(T,4)+j+z+X}}var o=t("../utils"),a=t("../stream/GenericWorker"),l=t("../utf8"),_=t("../crc32"),u=t("../signature");function p(c,m,f,T){a.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=f,this.encodeFileName=T,this.streamFiles=c,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(p,a),p.prototype.push=function(c){var m=c.meta.percent||0,f=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(c):(this.bytesWritten+=c.data.length,a.prototype.push.call(this,{data:c.data,meta:{currentFile:this.currentFile,percent:f?(m+100*(f-T-1))/f:100}}))},p.prototype.openedSource=function(c){this.currentSourceOffset=this.bytesWritten,this.currentFile=c.file.name;var m=this.streamFiles&&!c.file.dir;if(m){var f=i(c,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(c){this.accumulate=!1;var m=this.streamFiles&&!c.file.dir,f=i(c,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),m)this.push({data:(function(T){return u.DATA_DESCRIPTOR+r(T.crc32,4)+r(T.compressedSize,4)+r(T.uncompressedSize,4)})(c),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var c=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var f=this.bytesWritten-c,T=(function(g,S,A,y,N){var F=o.transformTo("string",N(y));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(g,2)+r(g,2)+r(S,4)+r(A,4)+r(F.length,2)+F})(this.dirRecords.length,f,c,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(c){this._sources.push(c);var m=this;return c.on("data",function(f){m.processChunk(f)}),c.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),c.on("error",function(f){m.error(f)}),this},p.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(c){var m=this._sources;if(!a.prototype.error.call(this,c))return!1;for(var f=0;f<m.length;f++)try{m[f].error(c)}catch{}return!0},p.prototype.lock=function(){a.prototype.lock.call(this);for(var c=this._sources,m=0;m<c.length;m++)c[m].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,s){var r=t("../compressions"),i=t("./ZipFileWorker");s.generateWorker=function(o,a,l){var _=new i(a.streamFiles,l,a.platform,a.encodeFileName),u=0;try{o.forEach(function(p,c){u++;var m=(function(S,A){var y=S||A,N=r[y];if(!N)throw new Error(y+" is not a valid compression method !");return N})(c.options.compression,a.compression),f=c.options.compressionOptions||a.compressionOptions||{},T=c.dir,g=c.date;c._compressWorker(m,f).withStreamInfo("file",{name:p,dir:T,date:g,comment:c.comment||"",unixPermissions:c.unixPermissions,dosPermissions:c.dosPermissions}).pipe(_)}),_.entriesCount=u}catch(p){_.error(p)}return _}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,s){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var i=new r;for(var o in this)typeof this[o]!="function"&&(i[o]=this[o]);return i}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(i,o){return new r().loadAsync(i,o)},r.external=t("./external"),n.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,s){var r=t("./utils"),i=t("./external"),o=t("./utf8"),a=t("./zipEntries"),l=t("./stream/Crc32Probe"),_=t("./nodejsUtils");function u(p){return new i.Promise(function(c,m){var f=p.decompressed.getContentWorker().pipe(new l);f.on("error",function(T){m(T)}).on("end",function(){f.streamInfo.crc32!==p.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):c()}).resume()})}n.exports=function(p,c){var m=this;return c=r.extend(c||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),_.isNode&&_.isStream(p)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",p,!0,c.optimizedBinaryString,c.base64).then(function(f){var T=new a(c);return T.load(f),T}).then(function(f){var T=[i.Promise.resolve(f)],g=f.files;if(c.checkCRC32)for(var S=0;S<g.length;S++)T.push(u(g[S]));return i.Promise.all(T)}).then(function(f){for(var T=f.shift(),g=T.files,S=0;S<g.length;S++){var A=g[S],y=A.fileNameStr,N=r.resolve(A.fileNameStr);m.file(N,A.decompressed,{binary:!0,optimizedBinaryString:!0,date:A.date,dir:A.dir,comment:A.fileCommentStr.length?A.fileCommentStr:null,unixPermissions:A.unixPermissions,dosPermissions:A.dosPermissions,createFolders:c.createFolders}),A.dir||(m.file(N).unsafeOriginalName=y)}return T.zipComment.length&&(m.comment=T.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,s){var r=t("../utils"),i=t("../stream/GenericWorker");function o(a,l){i.call(this,"Nodejs stream input adapter for "+a),this._upstreamEnded=!1,this._bindStream(l)}r.inherits(o,i),o.prototype._bindStream=function(a){var l=this;(this._stream=a).pause(),a.on("data",function(_){l.push({data:_,meta:{percent:0}})}).on("error",function(_){l.isPaused?this.generatedError=_:l.error(_)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},o.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,s){var r=t("readable-stream").Readable;function i(o,a,l){r.call(this,a),this._helper=o;var _=this;o.on("data",function(u,p){_.push(u)||_._helper.pause(),l&&l(p)}).on("error",function(u){_.emit("error",u)}).on("end",function(){_.push(null)})}t("../utils").inherits(i,r),i.prototype._read=function(){this._helper.resume()},n.exports=i},{"../utils":32,"readable-stream":16}],14:[function(t,n,s){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,i){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,i);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,i)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var i=new Buffer(r);return i.fill(0),i},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,n,s){function r(N,F,O){var j,P=o.getTypeOf(F),H=o.extend(O||{},_);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(N=g(N)),H.createFolders&&(j=T(N))&&S.call(this,j,!0);var X=P==="string"&&H.binary===!1&&H.base64===!1;O&&O.binary!==void 0||(H.binary=!X),(F instanceof u&&F.uncompressedSize===0||H.dir||!F||F.length===0)&&(H.base64=!1,H.binary=!0,F="",H.compression="STORE",P="string");var w=null;w=F instanceof u||F instanceof a?F:m.isNode&&m.isStream(F)?new f(N,F):o.prepareContent(N,F,H.binary,H.optimizedBinaryString,H.base64);var D=new p(N,w,H);this.files[N]=D}var i=t("./utf8"),o=t("./utils"),a=t("./stream/GenericWorker"),l=t("./stream/StreamHelper"),_=t("./defaults"),u=t("./compressedObject"),p=t("./zipObject"),c=t("./generate"),m=t("./nodejsUtils"),f=t("./nodejs/NodejsStreamInputAdapter"),T=function(N){N.slice(-1)==="/"&&(N=N.substring(0,N.length-1));var F=N.lastIndexOf("/");return 0<F?N.substring(0,F):""},g=function(N){return N.slice(-1)!=="/"&&(N+="/"),N},S=function(N,F){return F=F!==void 0?F:_.createFolders,N=g(N),this.files[N]||r.call(this,N,null,{dir:!0,createFolders:F}),this.files[N]};function A(N){return Object.prototype.toString.call(N)==="[object RegExp]"}var y={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(N){var F,O,j;for(F in this.files)j=this.files[F],(O=F.slice(this.root.length,F.length))&&F.slice(0,this.root.length)===this.root&&N(O,j)},filter:function(N){var F=[];return this.forEach(function(O,j){N(O,j)&&F.push(j)}),F},file:function(N,F,O){if(arguments.length!==1)return N=this.root+N,r.call(this,N,F,O),this;if(A(N)){var j=N;return this.filter(function(H,X){return!X.dir&&j.test(H)})}var P=this.files[this.root+N];return P&&!P.dir?P:null},folder:function(N){if(!N)return this;if(A(N))return this.filter(function(P,H){return H.dir&&N.test(P)});var F=this.root+N,O=S.call(this,F),j=this.clone();return j.root=O.name,j},remove:function(N){N=this.root+N;var F=this.files[N];if(F||(N.slice(-1)!=="/"&&(N+="/"),F=this.files[N]),F&&!F.dir)delete this.files[N];else for(var O=this.filter(function(P,H){return H.name.slice(0,N.length)===N}),j=0;j<O.length;j++)delete this.files[O[j].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(N){var F,O={};try{if((O=o.extend(N||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");o.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var j=O.comment||this.comment||"";F=c.generateWorker(this,O,j)}catch(P){(F=new a("error")).error(P)}return new l(F,O.type||"string",O.mimeType)},generateAsync:function(N,F){return this.generateInternalStream(N).accumulate(F)},generateNodeStream:function(N,F){return(N=N||{}).type||(N.type="nodebuffer"),this.generateInternalStream(N).toNodejsStream(F)}};n.exports=y},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,s){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,s){var r=t("./DataReader");function i(o){r.call(this,o);for(var a=0;a<this.data.length;a++)o[a]=255&o[a]}t("../utils").inherits(i,r),i.prototype.byteAt=function(o){return this.data[this.zero+o]},i.prototype.lastIndexOfSignature=function(o){for(var a=o.charCodeAt(0),l=o.charCodeAt(1),_=o.charCodeAt(2),u=o.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===a&&this.data[p+1]===l&&this.data[p+2]===_&&this.data[p+3]===u)return p-this.zero;return-1},i.prototype.readAndCheckSignature=function(o){var a=o.charCodeAt(0),l=o.charCodeAt(1),_=o.charCodeAt(2),u=o.charCodeAt(3),p=this.readData(4);return a===p[0]&&l===p[1]&&_===p[2]&&u===p[3]},i.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},n.exports=i},{"../utils":32,"./DataReader":18}],18:[function(t,n,s){var r=t("../utils");function i(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var a,l=0;for(this.checkOffset(o),a=this.index+o-1;a>=this.index;a--)l=(l<<8)+this.byteAt(a);return this.index+=o,l},readString:function(o){return r.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=i},{"../utils":32}],19:[function(t,n,s){var r=t("./Uint8ArrayReader");function i(o){r.call(this,o)}t("../utils").inherits(i,r),i.prototype.readData=function(o){this.checkOffset(o);var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},n.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,s){var r=t("./DataReader");function i(o){r.call(this,o)}t("../utils").inherits(i,r),i.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},i.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},i.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},i.prototype.readData=function(o){this.checkOffset(o);var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},n.exports=i},{"../utils":32,"./DataReader":18}],21:[function(t,n,s){var r=t("./ArrayReader");function i(o){r.call(this,o)}t("../utils").inherits(i,r),i.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var a=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},n.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,s){var r=t("../utils"),i=t("../support"),o=t("./ArrayReader"),a=t("./StringReader"),l=t("./NodeBufferReader"),_=t("./Uint8ArrayReader");n.exports=function(u){var p=r.getTypeOf(u);return r.checkSupport(p),p!=="string"||i.uint8array?p==="nodebuffer"?new l(u):i.uint8array?new _(r.transformTo("uint8array",u)):new o(r.transformTo("array",u)):new a(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,s){var r=t("./GenericWorker"),i=t("../utils");function o(a){r.call(this,"ConvertWorker to "+a),this.destType=a}i.inherits(o,r),o.prototype.processChunk=function(a){this.push({data:i.transformTo(this.destType,a.data),meta:a.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,s){var r=t("./GenericWorker"),i=t("../crc32");function o(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(o,r),o.prototype.processChunk=function(a){this.streamInfo.crc32=i(a.data,this.streamInfo.crc32||0),this.push(a)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,s){var r=t("../utils"),i=t("./GenericWorker");function o(a){i.call(this,"DataLengthProbe for "+a),this.propName=a,this.withStreamInfo(a,0)}r.inherits(o,i),o.prototype.processChunk=function(a){if(a){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+a.data.length}i.prototype.processChunk.call(this,a)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,s){var r=t("../utils"),i=t("./GenericWorker");function o(a){i.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,a.then(function(_){l.dataIsReady=!0,l.data=_,l.max=_&&_.length||0,l.type=r.getTypeOf(_),l.isPaused||l._tickAndRepeat()},function(_){l.error(_)})}r.inherits(o,i),o.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var a=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":a=this.data.substring(this.index,l);break;case"uint8array":a=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":a=this.data.slice(this.index,l)}return this.index=l,this.push({data:a,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,s){function r(i){this.name=i||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(i){this.emit("data",i)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(i){this.emit("error",i)}return!0},error:function(i){return!this.isFinished&&(this.isPaused?this.generatedError=i:(this.isFinished=!0,this.emit("error",i),this.previous&&this.previous.error(i),this.cleanUp()),!0)},on:function(i,o){return this._listeners[i].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(i,o){if(this._listeners[i])for(var a=0;a<this._listeners[i].length;a++)this._listeners[i][a].call(this,o)},pipe:function(i){return i.registerPrevious(this)},registerPrevious:function(i){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=i.streamInfo,this.mergeStreamInfo(),this.previous=i;var o=this;return i.on("data",function(a){o.processChunk(a)}),i.on("end",function(){o.end()}),i.on("error",function(a){o.error(a)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var i=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),i=!0),this.previous&&this.previous.resume(),!i},flush:function(){},processChunk:function(i){this.push(i)},withStreamInfo:function(i,o){return this.extraStreamInfo[i]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var i in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,i)&&(this.streamInfo[i]=this.extraStreamInfo[i])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var i="Worker "+this.name;return this.previous?this.previous+" -> "+i:i}},n.exports=r},{}],29:[function(t,n,s){var r=t("../utils"),i=t("./ConvertWorker"),o=t("./GenericWorker"),a=t("../base64"),l=t("../support"),_=t("../external"),u=null;if(l.nodestream)try{u=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(m,f){return new _.Promise(function(T,g){var S=[],A=m._internalType,y=m._outputType,N=m._mimeType;m.on("data",function(F,O){S.push(F),f&&f(O)}).on("error",function(F){S=[],g(F)}).on("end",function(){try{var F=(function(O,j,P){switch(O){case"blob":return r.newBlob(r.transformTo("arraybuffer",j),P);case"base64":return a.encode(j);default:return r.transformTo(O,j)}})(y,(function(O,j){var P,H=0,X=null,w=0;for(P=0;P<j.length;P++)w+=j[P].length;switch(O){case"string":return j.join("");case"array":return Array.prototype.concat.apply([],j);case"uint8array":for(X=new Uint8Array(w),P=0;P<j.length;P++)X.set(j[P],H),H+=j[P].length;return X;case"nodebuffer":return Buffer.concat(j);default:throw new Error("concat : unsupported type '"+O+"'")}})(A,S),N);T(F)}catch(O){g(O)}S=[]}).resume()})}function c(m,f,T){var g=f;switch(f){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=f,this._mimeType=T,r.checkSupport(g),this._worker=m.pipe(new i(g)),m.lock()}catch(S){this._worker=new o("error"),this._worker.error(S)}}c.prototype={accumulate:function(m){return p(this,m)},on:function(m,f){var T=this;return m==="data"?this._worker.on(m,function(g){f.call(T,g.data,g.meta)}):this._worker.on(m,function(){r.delay(f,arguments,T)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},m)}},n.exports=c},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var r=new ArrayBuffer(0);try{s.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),s.blob=i.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!t("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,s){for(var r=t("./utils"),i=t("./support"),o=t("./nodejsUtils"),a=t("./stream/GenericWorker"),l=new Array(256),_=0;_<256;_++)l[_]=252<=_?6:248<=_?5:240<=_?4:224<=_?3:192<=_?2:1;l[254]=l[254]=1;function u(){a.call(this,"utf-8 decode"),this.leftOver=null}function p(){a.call(this,"utf-8 encode")}s.utf8encode=function(c){return i.nodebuffer?o.newBufferFrom(c,"utf-8"):(function(m){var f,T,g,S,A,y=m.length,N=0;for(S=0;S<y;S++)(64512&(T=m.charCodeAt(S)))==55296&&S+1<y&&(64512&(g=m.charCodeAt(S+1)))==56320&&(T=65536+(T-55296<<10)+(g-56320),S++),N+=T<128?1:T<2048?2:T<65536?3:4;for(f=i.uint8array?new Uint8Array(N):new Array(N),S=A=0;A<N;S++)(64512&(T=m.charCodeAt(S)))==55296&&S+1<y&&(64512&(g=m.charCodeAt(S+1)))==56320&&(T=65536+(T-55296<<10)+(g-56320),S++),T<128?f[A++]=T:(T<2048?f[A++]=192|T>>>6:(T<65536?f[A++]=224|T>>>12:(f[A++]=240|T>>>18,f[A++]=128|T>>>12&63),f[A++]=128|T>>>6&63),f[A++]=128|63&T);return f})(c)},s.utf8decode=function(c){return i.nodebuffer?r.transformTo("nodebuffer",c).toString("utf-8"):(function(m){var f,T,g,S,A=m.length,y=new Array(2*A);for(f=T=0;f<A;)if((g=m[f++])<128)y[T++]=g;else if(4<(S=l[g]))y[T++]=65533,f+=S-1;else{for(g&=S===2?31:S===3?15:7;1<S&&f<A;)g=g<<6|63&m[f++],S--;1<S?y[T++]=65533:g<65536?y[T++]=g:(g-=65536,y[T++]=55296|g>>10&1023,y[T++]=56320|1023&g)}return y.length!==T&&(y.subarray?y=y.subarray(0,T):y.length=T),r.applyFromCharCode(y)})(c=r.transformTo(i.uint8array?"uint8array":"array",c))},r.inherits(u,a),u.prototype.processChunk=function(c){var m=r.transformTo(i.uint8array?"uint8array":"array",c.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var f=m;(m=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),m.set(f,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var T=(function(S,A){var y;for((A=A||S.length)>S.length&&(A=S.length),y=A-1;0<=y&&(192&S[y])==128;)y--;return y<0||y===0?A:y+l[S[y]]>A?y:A})(m),g=m;T!==m.length&&(i.uint8array?(g=m.subarray(0,T),this.leftOver=m.subarray(T,m.length)):(g=m.slice(0,T),this.leftOver=m.slice(T,m.length))),this.push({data:s.utf8decode(g),meta:c.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=u,r.inherits(p,a),p.prototype.processChunk=function(c){this.push({data:s.utf8encode(c.data),meta:c.meta})},s.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,s){var r=t("./support"),i=t("./base64"),o=t("./nodejsUtils"),a=t("./external");function l(f){return f}function _(f,T){for(var g=0;g<f.length;++g)T[g]=255&f.charCodeAt(g);return T}t("setimmediate"),s.newBlob=function(f,T){s.checkSupport("blob");try{return new Blob([f],{type:T})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(f),g.getBlob(T)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(f,T,g){var S=[],A=0,y=f.length;if(y<=g)return String.fromCharCode.apply(null,f);for(;A<y;)T==="array"||T==="nodebuffer"?S.push(String.fromCharCode.apply(null,f.slice(A,Math.min(A+g,y)))):S.push(String.fromCharCode.apply(null,f.subarray(A,Math.min(A+g,y)))),A+=g;return S.join("")},stringifyByChar:function(f){for(var T="",g=0;g<f.length;g++)T+=String.fromCharCode(f[g]);return T},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function p(f){var T=65536,g=s.getTypeOf(f),S=!0;if(g==="uint8array"?S=u.applyCanBeUsed.uint8array:g==="nodebuffer"&&(S=u.applyCanBeUsed.nodebuffer),S)for(;1<T;)try{return u.stringifyByChunk(f,g,T)}catch{T=Math.floor(T/2)}return u.stringifyByChar(f)}function c(f,T){for(var g=0;g<f.length;g++)T[g]=f[g];return T}s.applyFromCharCode=p;var m={};m.string={string:l,array:function(f){return _(f,new Array(f.length))},arraybuffer:function(f){return m.string.uint8array(f).buffer},uint8array:function(f){return _(f,new Uint8Array(f.length))},nodebuffer:function(f){return _(f,o.allocBuffer(f.length))}},m.array={string:p,array:l,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return o.newBufferFrom(f)}},m.arraybuffer={string:function(f){return p(new Uint8Array(f))},array:function(f){return c(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:l,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return o.newBufferFrom(new Uint8Array(f))}},m.uint8array={string:p,array:function(f){return c(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:l,nodebuffer:function(f){return o.newBufferFrom(f)}},m.nodebuffer={string:p,array:function(f){return c(f,new Array(f.length))},arraybuffer:function(f){return m.nodebuffer.uint8array(f).buffer},uint8array:function(f){return c(f,new Uint8Array(f.length))},nodebuffer:l},s.transformTo=function(f,T){if(T=T||"",!f)return T;s.checkSupport(f);var g=s.getTypeOf(T);return m[g][f](T)},s.resolve=function(f){for(var T=f.split("/"),g=[],S=0;S<T.length;S++){var A=T[S];A==="."||A===""&&S!==0&&S!==T.length-1||(A===".."?g.pop():g.push(A))}return g.join("/")},s.getTypeOf=function(f){return typeof f=="string"?"string":Object.prototype.toString.call(f)==="[object Array]"?"array":r.nodebuffer&&o.isBuffer(f)?"nodebuffer":r.uint8array&&f instanceof Uint8Array?"uint8array":r.arraybuffer&&f instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(f){if(!r[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(f){var T,g,S="";for(g=0;g<(f||"").length;g++)S+="\\x"+((T=f.charCodeAt(g))<16?"0":"")+T.toString(16).toUpperCase();return S},s.delay=function(f,T,g){setImmediate(function(){f.apply(g||null,T||[])})},s.inherits=function(f,T){function g(){}g.prototype=T.prototype,f.prototype=new g},s.extend=function(){var f,T,g={};for(f=0;f<arguments.length;f++)for(T in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],T)&&g[T]===void 0&&(g[T]=arguments[f][T]);return g},s.prepareContent=function(f,T,g,S,A){return a.Promise.resolve(T).then(function(y){return r.blob&&(y instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(y))!==-1)&&typeof FileReader<"u"?new a.Promise(function(N,F){var O=new FileReader;O.onload=function(j){N(j.target.result)},O.onerror=function(j){F(j.target.error)},O.readAsArrayBuffer(y)}):y}).then(function(y){var N=s.getTypeOf(y);return N?(N==="arraybuffer"?y=s.transformTo("uint8array",y):N==="string"&&(A?y=i.decode(y):g&&S!==!0&&(y=(function(F){return _(F,r.uint8array?new Uint8Array(F.length):new Array(F.length))})(y))),y):a.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,s){var r=t("./reader/readerFor"),i=t("./utils"),o=t("./signature"),a=t("./zipEntry"),l=t("./support");function _(u){this.files=[],this.loadOptions=u}_.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(p)+", expected "+i.pretty(u)+")")}},isSignature:function(u,p){var c=this.reader.index;this.reader.setIndex(u);var m=this.reader.readString(4)===p;return this.reader.setIndex(c),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),p=l.uint8array?"uint8array":"array",c=i.transformTo(p,u);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,p,c,m=this.zip64EndOfCentralSize-44;0<m;)u=this.reader.readInt(2),p=this.reader.readInt(4),c=this.reader.readData(p),this.zip64ExtensibleData[u]={id:u,length:p,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,p;for(u=0;u<this.files.length;u++)p=this.files[u],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(u=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var p=u;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var c=this.centralDirOffset+this.centralDirSize;this.zip64&&(c+=20,c+=12+this.zip64EndOfCentralSize);var m=p-c;if(0<m)this.isSignature(p,o.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(u){this.reader=r(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=_},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,s){var r=t("./reader/readerFor"),i=t("./utils"),o=t("./compressedObject"),a=t("./crc32"),l=t("./utf8"),_=t("./compressions"),u=t("./support");function p(c,m){this.options=c,this.loadOptions=m}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(c){var m,f;if(c.skip(22),this.fileNameLength=c.readInt(2),f=c.readInt(2),this.fileName=c.readData(this.fileNameLength),c.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(T){for(var g in _)if(Object.prototype.hasOwnProperty.call(_,g)&&_[g].magic===T)return _[g];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,m,c.readData(this.compressedSize))},readCentralPart:function(c){this.versionMadeBy=c.readInt(2),c.skip(2),this.bitFlag=c.readInt(2),this.compressionMethod=c.readString(2),this.date=c.readDate(),this.crc32=c.readInt(4),this.compressedSize=c.readInt(4),this.uncompressedSize=c.readInt(4);var m=c.readInt(2);if(this.extraFieldsLength=c.readInt(2),this.fileCommentLength=c.readInt(2),this.diskNumberStart=c.readInt(2),this.internalFileAttributes=c.readInt(2),this.externalFileAttributes=c.readInt(4),this.localHeaderOffset=c.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");c.skip(m),this.readExtraFields(c),this.parseZIP64ExtraField(c),this.fileComment=c.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var c=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),c==0&&(this.dosPermissions=63&this.externalFileAttributes),c==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var c=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=c.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=c.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=c.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=c.readInt(4))}},readExtraFields:function(c){var m,f,T,g=c.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});c.index+4<g;)m=c.readInt(2),f=c.readInt(2),T=c.readData(f),this.extraFields[m]={id:m,length:f,value:T};c.setIndex(g)},handleUTF8:function(){var c=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var f=i.transformTo(c,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var T=this.findExtraFieldUnicodeComment();if(T!==null)this.fileCommentStr=T;else{var g=i.transformTo(c,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var c=this.extraFields[28789];if(c){var m=r(c.value);return m.readInt(1)!==1||a(this.fileName)!==m.readInt(4)?null:l.utf8decode(m.readData(c.length-5))}return null},findExtraFieldUnicodeComment:function(){var c=this.extraFields[25461];if(c){var m=r(c.value);return m.readInt(1)!==1||a(this.fileComment)!==m.readInt(4)?null:l.utf8decode(m.readData(c.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,s){function r(m,f,T){this.name=m,this.dir=T.dir,this.date=T.date,this.comment=T.comment,this.unixPermissions=T.unixPermissions,this.dosPermissions=T.dosPermissions,this._data=f,this._dataBinary=T.binary,this.options={compression:T.compression,compressionOptions:T.compressionOptions}}var i=t("./stream/StreamHelper"),o=t("./stream/DataWorker"),a=t("./utf8"),l=t("./compressedObject"),_=t("./stream/GenericWorker");r.prototype={internalStream:function(m){var f=null,T="string";try{if(!m)throw new Error("No output type specified.");var g=(T=m.toLowerCase())==="string"||T==="text";T!=="binarystring"&&T!=="text"||(T="string"),f=this._decompressWorker();var S=!this._dataBinary;S&&!g&&(f=f.pipe(new a.Utf8EncodeWorker)),!S&&g&&(f=f.pipe(new a.Utf8DecodeWorker))}catch(A){(f=new _("error")).error(A)}return new i(f,T,"")},async:function(m,f){return this.internalStream(m).accumulate(f)},nodeStream:function(m,f){return this.internalStream(m||"nodebuffer").toNodejsStream(f)},_compressWorker:function(m,f){if(this._data instanceof l&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var T=this._decompressWorker();return this._dataBinary||(T=T.pipe(new a.Utf8EncodeWorker)),l.createWorkerFrom(T,m,f)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof _?this._data:new o(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},c=0;c<u.length;c++)r.prototype[u[c]]=p;n.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,s){(function(r){var i,o,a=r.MutationObserver||r.WebKitMutationObserver;if(a){var l=0,_=new a(m),u=r.document.createTextNode("");_.observe(u,{characterData:!0}),i=function(){u.data=l=++l%2}}else if(r.setImmediate||r.MessageChannel===void 0)i="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var f=r.document.createElement("script");f.onreadystatechange=function(){m(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},r.document.documentElement.appendChild(f)}:function(){setTimeout(m,0)};else{var p=new r.MessageChannel;p.port1.onmessage=m,i=function(){p.port2.postMessage(0)}}var c=[];function m(){var f,T;o=!0;for(var g=c.length;g;){for(T=c,c=[],f=-1;++f<g;)T[f]();g=c.length}o=!1}n.exports=function(f){c.push(f)!==1||o||i()}}).call(this,typeof Ye<"u"?Ye:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,s){var r=t("immediate");function i(){}var o={},a=["REJECTED"],l=["FULFILLED"],_=["PENDING"];function u(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=_,this.queue=[],this.outcome=void 0,g!==i&&f(this,g)}function p(g,S,A){this.promise=g,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof A=="function"&&(this.onRejected=A,this.callRejected=this.otherCallRejected)}function c(g,S,A){r(function(){var y;try{y=S(A)}catch(N){return o.reject(g,N)}y===g?o.reject(g,new TypeError("Cannot resolve promise with itself")):o.resolve(g,y)})}function m(g){var S=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof S=="function")return function(){S.apply(g,arguments)}}function f(g,S){var A=!1;function y(O){A||(A=!0,o.reject(g,O))}function N(O){A||(A=!0,o.resolve(g,O))}var F=T(function(){S(N,y)});F.status==="error"&&y(F.value)}function T(g,S){var A={};try{A.value=g(S),A.status="success"}catch(y){A.status="error",A.value=y}return A}(n.exports=u).prototype.finally=function(g){if(typeof g!="function")return this;var S=this.constructor;return this.then(function(A){return S.resolve(g()).then(function(){return A})},function(A){return S.resolve(g()).then(function(){throw A})})},u.prototype.catch=function(g){return this.then(null,g)},u.prototype.then=function(g,S){if(typeof g!="function"&&this.state===l||typeof S!="function"&&this.state===a)return this;var A=new this.constructor(i);return this.state!==_?c(A,this.state===l?g:S,this.outcome):this.queue.push(new p(A,g,S)),A},p.prototype.callFulfilled=function(g){o.resolve(this.promise,g)},p.prototype.otherCallFulfilled=function(g){c(this.promise,this.onFulfilled,g)},p.prototype.callRejected=function(g){o.reject(this.promise,g)},p.prototype.otherCallRejected=function(g){c(this.promise,this.onRejected,g)},o.resolve=function(g,S){var A=T(m,S);if(A.status==="error")return o.reject(g,A.value);var y=A.value;if(y)f(g,y);else{g.state=l,g.outcome=S;for(var N=-1,F=g.queue.length;++N<F;)g.queue[N].callFulfilled(S)}return g},o.reject=function(g,S){g.state=a,g.outcome=S;for(var A=-1,y=g.queue.length;++A<y;)g.queue[A].callRejected(S);return g},u.resolve=function(g){return g instanceof this?g:o.resolve(new this(i),g)},u.reject=function(g){var S=new this(i);return o.reject(S,g)},u.all=function(g){var S=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var A=g.length,y=!1;if(!A)return this.resolve([]);for(var N=new Array(A),F=0,O=-1,j=new this(i);++O<A;)P(g[O],O);return j;function P(H,X){S.resolve(H).then(function(w){N[X]=w,++F!==A||y||(y=!0,o.resolve(j,N))},function(w){y||(y=!0,o.reject(j,w))})}},u.race=function(g){var S=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var A=g.length,y=!1;if(!A)return this.resolve([]);for(var N=-1,F=new this(i);++N<A;)O=g[N],S.resolve(O).then(function(j){y||(y=!0,o.resolve(F,j))},function(j){y||(y=!0,o.reject(F,j))});var O;return F}},{immediate:36}],38:[function(t,n,s){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,s){var r=t("./zlib/deflate"),i=t("./utils/common"),o=t("./utils/strings"),a=t("./zlib/messages"),l=t("./zlib/zstream"),_=Object.prototype.toString,u=0,p=-1,c=0,m=8;function f(g){if(!(this instanceof f))return new f(g);this.options=i.assign({level:p,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},g||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var A=r.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(A!==u)throw new Error(a[A]);if(S.header&&r.deflateSetHeader(this.strm,S.header),S.dictionary){var y;if(y=typeof S.dictionary=="string"?o.string2buf(S.dictionary):_.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(A=r.deflateSetDictionary(this.strm,y))!==u)throw new Error(a[A]);this._dict_set=!0}}function T(g,S){var A=new f(S);if(A.push(g,!0),A.err)throw A.msg||a[A.err];return A.result}f.prototype.push=function(g,S){var A,y,N=this.strm,F=this.options.chunkSize;if(this.ended)return!1;y=S===~~S?S:S===!0?4:0,typeof g=="string"?N.input=o.string2buf(g):_.call(g)==="[object ArrayBuffer]"?N.input=new Uint8Array(g):N.input=g,N.next_in=0,N.avail_in=N.input.length;do{if(N.avail_out===0&&(N.output=new i.Buf8(F),N.next_out=0,N.avail_out=F),(A=r.deflate(N,y))!==1&&A!==u)return this.onEnd(A),!(this.ended=!0);N.avail_out!==0&&(N.avail_in!==0||y!==4&&y!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(i.shrinkBuf(N.output,N.next_out))):this.onData(i.shrinkBuf(N.output,N.next_out)))}while((0<N.avail_in||N.avail_out===0)&&A!==1);return y===4?(A=r.deflateEnd(this.strm),this.onEnd(A),this.ended=!0,A===u):y!==2||(this.onEnd(u),!(N.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},s.Deflate=f,s.deflate=T,s.deflateRaw=function(g,S){return(S=S||{}).raw=!0,T(g,S)},s.gzip=function(g,S){return(S=S||{}).gzip=!0,T(g,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,s){var r=t("./zlib/inflate"),i=t("./utils/common"),o=t("./utils/strings"),a=t("./zlib/constants"),l=t("./zlib/messages"),_=t("./zlib/zstream"),u=t("./zlib/gzheader"),p=Object.prototype.toString;function c(f){if(!(this instanceof c))return new c(f);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},f||{});var T=this.options;T.raw&&0<=T.windowBits&&T.windowBits<16&&(T.windowBits=-T.windowBits,T.windowBits===0&&(T.windowBits=-15)),!(0<=T.windowBits&&T.windowBits<16)||f&&f.windowBits||(T.windowBits+=32),15<T.windowBits&&T.windowBits<48&&(15&T.windowBits)==0&&(T.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _,this.strm.avail_out=0;var g=r.inflateInit2(this.strm,T.windowBits);if(g!==a.Z_OK)throw new Error(l[g]);this.header=new u,r.inflateGetHeader(this.strm,this.header)}function m(f,T){var g=new c(T);if(g.push(f,!0),g.err)throw g.msg||l[g.err];return g.result}c.prototype.push=function(f,T){var g,S,A,y,N,F,O=this.strm,j=this.options.chunkSize,P=this.options.dictionary,H=!1;if(this.ended)return!1;S=T===~~T?T:T===!0?a.Z_FINISH:a.Z_NO_FLUSH,typeof f=="string"?O.input=o.binstring2buf(f):p.call(f)==="[object ArrayBuffer]"?O.input=new Uint8Array(f):O.input=f,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new i.Buf8(j),O.next_out=0,O.avail_out=j),(g=r.inflate(O,a.Z_NO_FLUSH))===a.Z_NEED_DICT&&P&&(F=typeof P=="string"?o.string2buf(P):p.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,g=r.inflateSetDictionary(this.strm,F)),g===a.Z_BUF_ERROR&&H===!0&&(g=a.Z_OK,H=!1),g!==a.Z_STREAM_END&&g!==a.Z_OK)return this.onEnd(g),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&g!==a.Z_STREAM_END&&(O.avail_in!==0||S!==a.Z_FINISH&&S!==a.Z_SYNC_FLUSH)||(this.options.to==="string"?(A=o.utf8border(O.output,O.next_out),y=O.next_out-A,N=o.buf2string(O.output,A),O.next_out=y,O.avail_out=j-y,y&&i.arraySet(O.output,O.output,A,y,0),this.onData(N)):this.onData(i.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(H=!0)}while((0<O.avail_in||O.avail_out===0)&&g!==a.Z_STREAM_END);return g===a.Z_STREAM_END&&(S=a.Z_FINISH),S===a.Z_FINISH?(g=r.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===a.Z_OK):S!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),!(O.avail_out=0))},c.prototype.onData=function(f){this.chunks.push(f)},c.prototype.onEnd=function(f){f===a.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},s.Inflate=c,s.inflate=m,s.inflateRaw=function(f,T){return(T=T||{}).raw=!0,m(f,T)},s.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(a){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var _=l.shift();if(_){if(typeof _!="object")throw new TypeError(_+"must be non-object");for(var u in _)_.hasOwnProperty(u)&&(a[u]=_[u])}}return a},s.shrinkBuf=function(a,l){return a.length===l?a:a.subarray?a.subarray(0,l):(a.length=l,a)};var i={arraySet:function(a,l,_,u,p){if(l.subarray&&a.subarray)a.set(l.subarray(_,_+u),p);else for(var c=0;c<u;c++)a[p+c]=l[_+c]},flattenChunks:function(a){var l,_,u,p,c,m;for(l=u=0,_=a.length;l<_;l++)u+=a[l].length;for(m=new Uint8Array(u),l=p=0,_=a.length;l<_;l++)c=a[l],m.set(c,p),p+=c.length;return m}},o={arraySet:function(a,l,_,u,p){for(var c=0;c<u;c++)a[p+c]=l[_+c]},flattenChunks:function(a){return[].concat.apply([],a)}};s.setTyped=function(a){a?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,i)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,o))},s.setTyped(r)},{}],42:[function(t,n,s){var r=t("./common"),i=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var a=new r.Buf8(256),l=0;l<256;l++)a[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function _(u,p){if(p<65537&&(u.subarray&&o||!u.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(u,p));for(var c="",m=0;m<p;m++)c+=String.fromCharCode(u[m]);return c}a[254]=a[254]=1,s.string2buf=function(u){var p,c,m,f,T,g=u.length,S=0;for(f=0;f<g;f++)(64512&(c=u.charCodeAt(f)))==55296&&f+1<g&&(64512&(m=u.charCodeAt(f+1)))==56320&&(c=65536+(c-55296<<10)+(m-56320),f++),S+=c<128?1:c<2048?2:c<65536?3:4;for(p=new r.Buf8(S),f=T=0;T<S;f++)(64512&(c=u.charCodeAt(f)))==55296&&f+1<g&&(64512&(m=u.charCodeAt(f+1)))==56320&&(c=65536+(c-55296<<10)+(m-56320),f++),c<128?p[T++]=c:(c<2048?p[T++]=192|c>>>6:(c<65536?p[T++]=224|c>>>12:(p[T++]=240|c>>>18,p[T++]=128|c>>>12&63),p[T++]=128|c>>>6&63),p[T++]=128|63&c);return p},s.buf2binstring=function(u){return _(u,u.length)},s.binstring2buf=function(u){for(var p=new r.Buf8(u.length),c=0,m=p.length;c<m;c++)p[c]=u.charCodeAt(c);return p},s.buf2string=function(u,p){var c,m,f,T,g=p||u.length,S=new Array(2*g);for(c=m=0;c<g;)if((f=u[c++])<128)S[m++]=f;else if(4<(T=a[f]))S[m++]=65533,c+=T-1;else{for(f&=T===2?31:T===3?15:7;1<T&&c<g;)f=f<<6|63&u[c++],T--;1<T?S[m++]=65533:f<65536?S[m++]=f:(f-=65536,S[m++]=55296|f>>10&1023,S[m++]=56320|1023&f)}return _(S,m)},s.utf8border=function(u,p){var c;for((p=p||u.length)>u.length&&(p=u.length),c=p-1;0<=c&&(192&u[c])==128;)c--;return c<0||c===0?p:c+a[u[c]]>p?c:p}},{"./common":41}],43:[function(t,n,s){n.exports=function(r,i,o,a){for(var l=65535&r|0,_=r>>>16&65535|0,u=0;o!==0;){for(o-=u=2e3<o?2e3:o;_=_+(l=l+i[a++]|0)|0,--u;);l%=65521,_%=65521}return l|_<<16|0}},{}],44:[function(t,n,s){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,s){var r=(function(){for(var i,o=[],a=0;a<256;a++){i=a;for(var l=0;l<8;l++)i=1&i?3988292384^i>>>1:i>>>1;o[a]=i}return o})();n.exports=function(i,o,a,l){var _=r,u=l+a;i^=-1;for(var p=l;p<u;p++)i=i>>>8^_[255&(i^o[p])];return-1^i}},{}],46:[function(t,n,s){var r,i=t("../utils/common"),o=t("./trees"),a=t("./adler32"),l=t("./crc32"),_=t("./messages"),u=0,p=4,c=0,m=-2,f=-1,T=4,g=2,S=8,A=9,y=286,N=30,F=19,O=2*y+1,j=15,P=3,H=258,X=H+P+1,w=42,D=113,d=1,z=2,ne=3,$=4;function re(h,M){return h.msg=_[M],M}function G(h){return(h<<1)-(4<h?9:0)}function ee(h){for(var M=h.length;0<=--M;)h[M]=0}function I(h){var M=h.state,x=M.pending;x>h.avail_out&&(x=h.avail_out),x!==0&&(i.arraySet(h.output,M.pending_buf,M.pending_out,x,h.next_out),h.next_out+=x,M.pending_out+=x,h.total_out+=x,h.avail_out-=x,M.pending-=x,M.pending===0&&(M.pending_out=0))}function v(h,M){o._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,M),h.block_start=h.strstart,I(h.strm)}function Q(h,M){h.pending_buf[h.pending++]=M}function q(h,M){h.pending_buf[h.pending++]=M>>>8&255,h.pending_buf[h.pending++]=255&M}function Y(h,M){var x,b,k=h.max_chain_length,R=h.strstart,B=h.prev_length,U=h.nice_match,C=h.strstart>h.w_size-X?h.strstart-(h.w_size-X):0,K=h.window,V=h.w_mask,W=h.prev,J=h.strstart+H,_e=K[R+B-1],ae=K[R+B];h.prev_length>=h.good_match&&(k>>=2),U>h.lookahead&&(U=h.lookahead);do if(K[(x=M)+B]===ae&&K[x+B-1]===_e&&K[x]===K[R]&&K[++x]===K[R+1]){R+=2,x++;do;while(K[++R]===K[++x]&&K[++R]===K[++x]&&K[++R]===K[++x]&&K[++R]===K[++x]&&K[++R]===K[++x]&&K[++R]===K[++x]&&K[++R]===K[++x]&&K[++R]===K[++x]&&R<J);if(b=H-(J-R),R=J-H,B<b){if(h.match_start=M,U<=(B=b))break;_e=K[R+B-1],ae=K[R+B]}}while((M=W[M&V])>C&&--k!=0);return B<=h.lookahead?B:h.lookahead}function Se(h){var M,x,b,k,R,B,U,C,K,V,W=h.w_size;do{if(k=h.window_size-h.lookahead-h.strstart,h.strstart>=W+(W-X)){for(i.arraySet(h.window,h.window,W,W,0),h.match_start-=W,h.strstart-=W,h.block_start-=W,M=x=h.hash_size;b=h.head[--M],h.head[M]=W<=b?b-W:0,--x;);for(M=x=W;b=h.prev[--M],h.prev[M]=W<=b?b-W:0,--x;);k+=W}if(h.strm.avail_in===0)break;if(B=h.strm,U=h.window,C=h.strstart+h.lookahead,K=k,V=void 0,V=B.avail_in,K<V&&(V=K),x=V===0?0:(B.avail_in-=V,i.arraySet(U,B.input,B.next_in,V,C),B.state.wrap===1?B.adler=a(B.adler,U,V,C):B.state.wrap===2&&(B.adler=l(B.adler,U,V,C)),B.next_in+=V,B.total_in+=V,V),h.lookahead+=x,h.lookahead+h.insert>=P)for(R=h.strstart-h.insert,h.ins_h=h.window[R],h.ins_h=(h.ins_h<<h.hash_shift^h.window[R+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[R+P-1])&h.hash_mask,h.prev[R&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=R,R++,h.insert--,!(h.lookahead+h.insert<P)););}while(h.lookahead<X&&h.strm.avail_in!==0)}function Ae(h,M){for(var x,b;;){if(h.lookahead<X){if(Se(h),h.lookahead<X&&M===u)return d;if(h.lookahead===0)break}if(x=0,h.lookahead>=P&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,x=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),x!==0&&h.strstart-x<=h.w_size-X&&(h.match_length=Y(h,x)),h.match_length>=P)if(b=o._tr_tally(h,h.strstart-h.match_start,h.match_length-P),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=P){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,x=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else b=o._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(b&&(v(h,!1),h.strm.avail_out===0))return d}return h.insert=h.strstart<P-1?h.strstart:P-1,M===p?(v(h,!0),h.strm.avail_out===0?ne:$):h.last_lit&&(v(h,!1),h.strm.avail_out===0)?d:z}function oe(h,M){for(var x,b,k;;){if(h.lookahead<X){if(Se(h),h.lookahead<X&&M===u)return d;if(h.lookahead===0)break}if(x=0,h.lookahead>=P&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,x=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=P-1,x!==0&&h.prev_length<h.max_lazy_match&&h.strstart-x<=h.w_size-X&&(h.match_length=Y(h,x),h.match_length<=5&&(h.strategy===1||h.match_length===P&&4096<h.strstart-h.match_start)&&(h.match_length=P-1)),h.prev_length>=P&&h.match_length<=h.prev_length){for(k=h.strstart+h.lookahead-P,b=o._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-P),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=k&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,x=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=P-1,h.strstart++,b&&(v(h,!1),h.strm.avail_out===0))return d}else if(h.match_available){if((b=o._tr_tally(h,0,h.window[h.strstart-1]))&&v(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return d}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(b=o._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<P-1?h.strstart:P-1,M===p?(v(h,!0),h.strm.avail_out===0?ne:$):h.last_lit&&(v(h,!1),h.strm.avail_out===0)?d:z}function ue(h,M,x,b,k){this.good_length=h,this.max_lazy=M,this.nice_length=x,this.max_chain=b,this.func=k}function be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*O),this.dyn_dtree=new i.Buf16(2*(2*N+1)),this.bl_tree=new i.Buf16(2*(2*F+1)),ee(this.dyn_ltree),ee(this.dyn_dtree),ee(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(j+1),this.heap=new i.Buf16(2*y+1),ee(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*y+1),ee(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ke(h){var M;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=g,(M=h.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?w:D,h.adler=M.wrap===2?0:1,M.last_flush=u,o._tr_init(M),c):re(h,m)}function Oe(h){var M=ke(h);return M===c&&(function(x){x.window_size=2*x.w_size,ee(x.head),x.max_lazy_match=r[x.level].max_lazy,x.good_match=r[x.level].good_length,x.nice_match=r[x.level].nice_length,x.max_chain_length=r[x.level].max_chain,x.strstart=0,x.block_start=0,x.lookahead=0,x.insert=0,x.match_length=x.prev_length=P-1,x.match_available=0,x.ins_h=0})(h.state),M}function Ie(h,M,x,b,k,R){if(!h)return m;var B=1;if(M===f&&(M=6),b<0?(B=0,b=-b):15<b&&(B=2,b-=16),k<1||A<k||x!==S||b<8||15<b||M<0||9<M||R<0||T<R)return re(h,m);b===8&&(b=9);var U=new be;return(h.state=U).strm=h,U.wrap=B,U.gzhead=null,U.w_bits=b,U.w_size=1<<U.w_bits,U.w_mask=U.w_size-1,U.hash_bits=k+7,U.hash_size=1<<U.hash_bits,U.hash_mask=U.hash_size-1,U.hash_shift=~~((U.hash_bits+P-1)/P),U.window=new i.Buf8(2*U.w_size),U.head=new i.Buf16(U.hash_size),U.prev=new i.Buf16(U.w_size),U.lit_bufsize=1<<k+6,U.pending_buf_size=4*U.lit_bufsize,U.pending_buf=new i.Buf8(U.pending_buf_size),U.d_buf=1*U.lit_bufsize,U.l_buf=3*U.lit_bufsize,U.level=M,U.strategy=R,U.method=x,Oe(h)}r=[new ue(0,0,0,0,function(h,M){var x=65535;for(x>h.pending_buf_size-5&&(x=h.pending_buf_size-5);;){if(h.lookahead<=1){if(Se(h),h.lookahead===0&&M===u)return d;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var b=h.block_start+x;if((h.strstart===0||h.strstart>=b)&&(h.lookahead=h.strstart-b,h.strstart=b,v(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-X&&(v(h,!1),h.strm.avail_out===0))return d}return h.insert=0,M===p?(v(h,!0),h.strm.avail_out===0?ne:$):(h.strstart>h.block_start&&(v(h,!1),h.strm.avail_out),d)}),new ue(4,4,8,4,Ae),new ue(4,5,16,8,Ae),new ue(4,6,32,32,Ae),new ue(4,4,16,16,oe),new ue(8,16,32,32,oe),new ue(8,16,128,128,oe),new ue(8,32,128,256,oe),new ue(32,128,258,1024,oe),new ue(32,258,258,4096,oe)],s.deflateInit=function(h,M){return Ie(h,M,S,15,8,0)},s.deflateInit2=Ie,s.deflateReset=Oe,s.deflateResetKeep=ke,s.deflateSetHeader=function(h,M){return h&&h.state?h.state.wrap!==2?m:(h.state.gzhead=M,c):m},s.deflate=function(h,M){var x,b,k,R;if(!h||!h.state||5<M||M<0)return h?re(h,m):m;if(b=h.state,!h.output||!h.input&&h.avail_in!==0||b.status===666&&M!==p)return re(h,h.avail_out===0?-5:m);if(b.strm=h,x=b.last_flush,b.last_flush=M,b.status===w)if(b.wrap===2)h.adler=0,Q(b,31),Q(b,139),Q(b,8),b.gzhead?(Q(b,(b.gzhead.text?1:0)+(b.gzhead.hcrc?2:0)+(b.gzhead.extra?4:0)+(b.gzhead.name?8:0)+(b.gzhead.comment?16:0)),Q(b,255&b.gzhead.time),Q(b,b.gzhead.time>>8&255),Q(b,b.gzhead.time>>16&255),Q(b,b.gzhead.time>>24&255),Q(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),Q(b,255&b.gzhead.os),b.gzhead.extra&&b.gzhead.extra.length&&(Q(b,255&b.gzhead.extra.length),Q(b,b.gzhead.extra.length>>8&255)),b.gzhead.hcrc&&(h.adler=l(h.adler,b.pending_buf,b.pending,0)),b.gzindex=0,b.status=69):(Q(b,0),Q(b,0),Q(b,0),Q(b,0),Q(b,0),Q(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),Q(b,3),b.status=D);else{var B=S+(b.w_bits-8<<4)<<8;B|=(2<=b.strategy||b.level<2?0:b.level<6?1:b.level===6?2:3)<<6,b.strstart!==0&&(B|=32),B+=31-B%31,b.status=D,q(b,B),b.strstart!==0&&(q(b,h.adler>>>16),q(b,65535&h.adler)),h.adler=1}if(b.status===69)if(b.gzhead.extra){for(k=b.pending;b.gzindex<(65535&b.gzhead.extra.length)&&(b.pending!==b.pending_buf_size||(b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),I(h),k=b.pending,b.pending!==b.pending_buf_size));)Q(b,255&b.gzhead.extra[b.gzindex]),b.gzindex++;b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),b.gzindex===b.gzhead.extra.length&&(b.gzindex=0,b.status=73)}else b.status=73;if(b.status===73)if(b.gzhead.name){k=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),I(h),k=b.pending,b.pending===b.pending_buf_size)){R=1;break}R=b.gzindex<b.gzhead.name.length?255&b.gzhead.name.charCodeAt(b.gzindex++):0,Q(b,R)}while(R!==0);b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),R===0&&(b.gzindex=0,b.status=91)}else b.status=91;if(b.status===91)if(b.gzhead.comment){k=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),I(h),k=b.pending,b.pending===b.pending_buf_size)){R=1;break}R=b.gzindex<b.gzhead.comment.length?255&b.gzhead.comment.charCodeAt(b.gzindex++):0,Q(b,R)}while(R!==0);b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),R===0&&(b.status=103)}else b.status=103;if(b.status===103&&(b.gzhead.hcrc?(b.pending+2>b.pending_buf_size&&I(h),b.pending+2<=b.pending_buf_size&&(Q(b,255&h.adler),Q(b,h.adler>>8&255),h.adler=0,b.status=D)):b.status=D),b.pending!==0){if(I(h),h.avail_out===0)return b.last_flush=-1,c}else if(h.avail_in===0&&G(M)<=G(x)&&M!==p)return re(h,-5);if(b.status===666&&h.avail_in!==0)return re(h,-5);if(h.avail_in!==0||b.lookahead!==0||M!==u&&b.status!==666){var U=b.strategy===2?(function(C,K){for(var V;;){if(C.lookahead===0&&(Se(C),C.lookahead===0)){if(K===u)return d;break}if(C.match_length=0,V=o._tr_tally(C,0,C.window[C.strstart]),C.lookahead--,C.strstart++,V&&(v(C,!1),C.strm.avail_out===0))return d}return C.insert=0,K===p?(v(C,!0),C.strm.avail_out===0?ne:$):C.last_lit&&(v(C,!1),C.strm.avail_out===0)?d:z})(b,M):b.strategy===3?(function(C,K){for(var V,W,J,_e,ae=C.window;;){if(C.lookahead<=H){if(Se(C),C.lookahead<=H&&K===u)return d;if(C.lookahead===0)break}if(C.match_length=0,C.lookahead>=P&&0<C.strstart&&(W=ae[J=C.strstart-1])===ae[++J]&&W===ae[++J]&&W===ae[++J]){_e=C.strstart+H;do;while(W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&J<_e);C.match_length=H-(_e-J),C.match_length>C.lookahead&&(C.match_length=C.lookahead)}if(C.match_length>=P?(V=o._tr_tally(C,1,C.match_length-P),C.lookahead-=C.match_length,C.strstart+=C.match_length,C.match_length=0):(V=o._tr_tally(C,0,C.window[C.strstart]),C.lookahead--,C.strstart++),V&&(v(C,!1),C.strm.avail_out===0))return d}return C.insert=0,K===p?(v(C,!0),C.strm.avail_out===0?ne:$):C.last_lit&&(v(C,!1),C.strm.avail_out===0)?d:z})(b,M):r[b.level].func(b,M);if(U!==ne&&U!==$||(b.status=666),U===d||U===ne)return h.avail_out===0&&(b.last_flush=-1),c;if(U===z&&(M===1?o._tr_align(b):M!==5&&(o._tr_stored_block(b,0,0,!1),M===3&&(ee(b.head),b.lookahead===0&&(b.strstart=0,b.block_start=0,b.insert=0))),I(h),h.avail_out===0))return b.last_flush=-1,c}return M!==p?c:b.wrap<=0?1:(b.wrap===2?(Q(b,255&h.adler),Q(b,h.adler>>8&255),Q(b,h.adler>>16&255),Q(b,h.adler>>24&255),Q(b,255&h.total_in),Q(b,h.total_in>>8&255),Q(b,h.total_in>>16&255),Q(b,h.total_in>>24&255)):(q(b,h.adler>>>16),q(b,65535&h.adler)),I(h),0<b.wrap&&(b.wrap=-b.wrap),b.pending!==0?c:1)},s.deflateEnd=function(h){var M;return h&&h.state?(M=h.state.status)!==w&&M!==69&&M!==73&&M!==91&&M!==103&&M!==D&&M!==666?re(h,m):(h.state=null,M===D?re(h,-3):c):m},s.deflateSetDictionary=function(h,M){var x,b,k,R,B,U,C,K,V=M.length;if(!h||!h.state||(R=(x=h.state).wrap)===2||R===1&&x.status!==w||x.lookahead)return m;for(R===1&&(h.adler=a(h.adler,M,V,0)),x.wrap=0,V>=x.w_size&&(R===0&&(ee(x.head),x.strstart=0,x.block_start=0,x.insert=0),K=new i.Buf8(x.w_size),i.arraySet(K,M,V-x.w_size,x.w_size,0),M=K,V=x.w_size),B=h.avail_in,U=h.next_in,C=h.input,h.avail_in=V,h.next_in=0,h.input=M,Se(x);x.lookahead>=P;){for(b=x.strstart,k=x.lookahead-(P-1);x.ins_h=(x.ins_h<<x.hash_shift^x.window[b+P-1])&x.hash_mask,x.prev[b&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=b,b++,--k;);x.strstart=b,x.lookahead=P-1,Se(x)}return x.strstart+=x.lookahead,x.block_start=x.strstart,x.insert=x.lookahead,x.lookahead=0,x.match_length=x.prev_length=P-1,x.match_available=0,h.next_in=U,h.input=C,h.avail_in=B,x.wrap=R,c},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,s){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,s){n.exports=function(r,i){var o,a,l,_,u,p,c,m,f,T,g,S,A,y,N,F,O,j,P,H,X,w,D,d,z;o=r.state,a=r.next_in,d=r.input,l=a+(r.avail_in-5),_=r.next_out,z=r.output,u=_-(i-r.avail_out),p=_+(r.avail_out-257),c=o.dmax,m=o.wsize,f=o.whave,T=o.wnext,g=o.window,S=o.hold,A=o.bits,y=o.lencode,N=o.distcode,F=(1<<o.lenbits)-1,O=(1<<o.distbits)-1;e:do{A<15&&(S+=d[a++]<<A,A+=8,S+=d[a++]<<A,A+=8),j=y[S&F];t:for(;;){if(S>>>=P=j>>>24,A-=P,(P=j>>>16&255)===0)z[_++]=65535&j;else{if(!(16&P)){if((64&P)==0){j=y[(65535&j)+(S&(1<<P)-1)];continue t}if(32&P){o.mode=12;break e}r.msg="invalid literal/length code",o.mode=30;break e}H=65535&j,(P&=15)&&(A<P&&(S+=d[a++]<<A,A+=8),H+=S&(1<<P)-1,S>>>=P,A-=P),A<15&&(S+=d[a++]<<A,A+=8,S+=d[a++]<<A,A+=8),j=N[S&O];n:for(;;){if(S>>>=P=j>>>24,A-=P,!(16&(P=j>>>16&255))){if((64&P)==0){j=N[(65535&j)+(S&(1<<P)-1)];continue n}r.msg="invalid distance code",o.mode=30;break e}if(X=65535&j,A<(P&=15)&&(S+=d[a++]<<A,(A+=8)<P&&(S+=d[a++]<<A,A+=8)),c<(X+=S&(1<<P)-1)){r.msg="invalid distance too far back",o.mode=30;break e}if(S>>>=P,A-=P,(P=_-u)<X){if(f<(P=X-P)&&o.sane){r.msg="invalid distance too far back",o.mode=30;break e}if(D=g,(w=0)===T){if(w+=m-P,P<H){for(H-=P;z[_++]=g[w++],--P;);w=_-X,D=z}}else if(T<P){if(w+=m+T-P,(P-=T)<H){for(H-=P;z[_++]=g[w++],--P;);if(w=0,T<H){for(H-=P=T;z[_++]=g[w++],--P;);w=_-X,D=z}}}else if(w+=T-P,P<H){for(H-=P;z[_++]=g[w++],--P;);w=_-X,D=z}for(;2<H;)z[_++]=D[w++],z[_++]=D[w++],z[_++]=D[w++],H-=3;H&&(z[_++]=D[w++],1<H&&(z[_++]=D[w++]))}else{for(w=_-X;z[_++]=z[w++],z[_++]=z[w++],z[_++]=z[w++],2<(H-=3););H&&(z[_++]=z[w++],1<H&&(z[_++]=z[w++]))}break}}break}}while(a<l&&_<p);a-=H=A>>3,S&=(1<<(A-=H<<3))-1,r.next_in=a,r.next_out=_,r.avail_in=a<l?l-a+5:5-(a-l),r.avail_out=_<p?p-_+257:257-(_-p),o.hold=S,o.bits=A}},{}],49:[function(t,n,s){var r=t("../utils/common"),i=t("./adler32"),o=t("./crc32"),a=t("./inffast"),l=t("./inftrees"),_=1,u=2,p=0,c=-2,m=1,f=852,T=592;function g(w){return(w>>>24&255)+(w>>>8&65280)+((65280&w)<<8)+((255&w)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function A(w){var D;return w&&w.state?(D=w.state,w.total_in=w.total_out=D.total=0,w.msg="",D.wrap&&(w.adler=1&D.wrap),D.mode=m,D.last=0,D.havedict=0,D.dmax=32768,D.head=null,D.hold=0,D.bits=0,D.lencode=D.lendyn=new r.Buf32(f),D.distcode=D.distdyn=new r.Buf32(T),D.sane=1,D.back=-1,p):c}function y(w){var D;return w&&w.state?((D=w.state).wsize=0,D.whave=0,D.wnext=0,A(w)):c}function N(w,D){var d,z;return w&&w.state?(z=w.state,D<0?(d=0,D=-D):(d=1+(D>>4),D<48&&(D&=15)),D&&(D<8||15<D)?c:(z.window!==null&&z.wbits!==D&&(z.window=null),z.wrap=d,z.wbits=D,y(w))):c}function F(w,D){var d,z;return w?(z=new S,(w.state=z).window=null,(d=N(w,D))!==p&&(w.state=null),d):c}var O,j,P=!0;function H(w){if(P){var D;for(O=new r.Buf32(512),j=new r.Buf32(32),D=0;D<144;)w.lens[D++]=8;for(;D<256;)w.lens[D++]=9;for(;D<280;)w.lens[D++]=7;for(;D<288;)w.lens[D++]=8;for(l(_,w.lens,0,288,O,0,w.work,{bits:9}),D=0;D<32;)w.lens[D++]=5;l(u,w.lens,0,32,j,0,w.work,{bits:5}),P=!1}w.lencode=O,w.lenbits=9,w.distcode=j,w.distbits=5}function X(w,D,d,z){var ne,$=w.state;return $.window===null&&($.wsize=1<<$.wbits,$.wnext=0,$.whave=0,$.window=new r.Buf8($.wsize)),z>=$.wsize?(r.arraySet($.window,D,d-$.wsize,$.wsize,0),$.wnext=0,$.whave=$.wsize):(z<(ne=$.wsize-$.wnext)&&(ne=z),r.arraySet($.window,D,d-z,ne,$.wnext),(z-=ne)?(r.arraySet($.window,D,d-z,z,0),$.wnext=z,$.whave=$.wsize):($.wnext+=ne,$.wnext===$.wsize&&($.wnext=0),$.whave<$.wsize&&($.whave+=ne))),0}s.inflateReset=y,s.inflateReset2=N,s.inflateResetKeep=A,s.inflateInit=function(w){return F(w,15)},s.inflateInit2=F,s.inflate=function(w,D){var d,z,ne,$,re,G,ee,I,v,Q,q,Y,Se,Ae,oe,ue,be,ke,Oe,Ie,h,M,x,b,k=0,R=new r.Buf8(4),B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!w||!w.state||!w.output||!w.input&&w.avail_in!==0)return c;(d=w.state).mode===12&&(d.mode=13),re=w.next_out,ne=w.output,ee=w.avail_out,$=w.next_in,z=w.input,G=w.avail_in,I=d.hold,v=d.bits,Q=G,q=ee,M=p;e:for(;;)switch(d.mode){case m:if(d.wrap===0){d.mode=13;break}for(;v<16;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if(2&d.wrap&&I===35615){R[d.check=0]=255&I,R[1]=I>>>8&255,d.check=o(d.check,R,2,0),v=I=0,d.mode=2;break}if(d.flags=0,d.head&&(d.head.done=!1),!(1&d.wrap)||(((255&I)<<8)+(I>>8))%31){w.msg="incorrect header check",d.mode=30;break}if((15&I)!=8){w.msg="unknown compression method",d.mode=30;break}if(v-=4,h=8+(15&(I>>>=4)),d.wbits===0)d.wbits=h;else if(h>d.wbits){w.msg="invalid window size",d.mode=30;break}d.dmax=1<<h,w.adler=d.check=1,d.mode=512&I?10:12,v=I=0;break;case 2:for(;v<16;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if(d.flags=I,(255&d.flags)!=8){w.msg="unknown compression method",d.mode=30;break}if(57344&d.flags){w.msg="unknown header flags set",d.mode=30;break}d.head&&(d.head.text=I>>8&1),512&d.flags&&(R[0]=255&I,R[1]=I>>>8&255,d.check=o(d.check,R,2,0)),v=I=0,d.mode=3;case 3:for(;v<32;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}d.head&&(d.head.time=I),512&d.flags&&(R[0]=255&I,R[1]=I>>>8&255,R[2]=I>>>16&255,R[3]=I>>>24&255,d.check=o(d.check,R,4,0)),v=I=0,d.mode=4;case 4:for(;v<16;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}d.head&&(d.head.xflags=255&I,d.head.os=I>>8),512&d.flags&&(R[0]=255&I,R[1]=I>>>8&255,d.check=o(d.check,R,2,0)),v=I=0,d.mode=5;case 5:if(1024&d.flags){for(;v<16;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}d.length=I,d.head&&(d.head.extra_len=I),512&d.flags&&(R[0]=255&I,R[1]=I>>>8&255,d.check=o(d.check,R,2,0)),v=I=0}else d.head&&(d.head.extra=null);d.mode=6;case 6:if(1024&d.flags&&(G<(Y=d.length)&&(Y=G),Y&&(d.head&&(h=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),r.arraySet(d.head.extra,z,$,Y,h)),512&d.flags&&(d.check=o(d.check,z,Y,$)),G-=Y,$+=Y,d.length-=Y),d.length))break e;d.length=0,d.mode=7;case 7:if(2048&d.flags){if(G===0)break e;for(Y=0;h=z[$+Y++],d.head&&h&&d.length<65536&&(d.head.name+=String.fromCharCode(h)),h&&Y<G;);if(512&d.flags&&(d.check=o(d.check,z,Y,$)),G-=Y,$+=Y,h)break e}else d.head&&(d.head.name=null);d.length=0,d.mode=8;case 8:if(4096&d.flags){if(G===0)break e;for(Y=0;h=z[$+Y++],d.head&&h&&d.length<65536&&(d.head.comment+=String.fromCharCode(h)),h&&Y<G;);if(512&d.flags&&(d.check=o(d.check,z,Y,$)),G-=Y,$+=Y,h)break e}else d.head&&(d.head.comment=null);d.mode=9;case 9:if(512&d.flags){for(;v<16;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if(I!==(65535&d.check)){w.msg="header crc mismatch",d.mode=30;break}v=I=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),w.adler=d.check=0,d.mode=12;break;case 10:for(;v<32;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}w.adler=d.check=g(I),v=I=0,d.mode=11;case 11:if(d.havedict===0)return w.next_out=re,w.avail_out=ee,w.next_in=$,w.avail_in=G,d.hold=I,d.bits=v,2;w.adler=d.check=1,d.mode=12;case 12:if(D===5||D===6)break e;case 13:if(d.last){I>>>=7&v,v-=7&v,d.mode=27;break}for(;v<3;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}switch(d.last=1&I,v-=1,3&(I>>>=1)){case 0:d.mode=14;break;case 1:if(H(d),d.mode=20,D!==6)break;I>>>=2,v-=2;break e;case 2:d.mode=17;break;case 3:w.msg="invalid block type",d.mode=30}I>>>=2,v-=2;break;case 14:for(I>>>=7&v,v-=7&v;v<32;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if((65535&I)!=(I>>>16^65535)){w.msg="invalid stored block lengths",d.mode=30;break}if(d.length=65535&I,v=I=0,d.mode=15,D===6)break e;case 15:d.mode=16;case 16:if(Y=d.length){if(G<Y&&(Y=G),ee<Y&&(Y=ee),Y===0)break e;r.arraySet(ne,z,$,Y,re),G-=Y,$+=Y,ee-=Y,re+=Y,d.length-=Y;break}d.mode=12;break;case 17:for(;v<14;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if(d.nlen=257+(31&I),I>>>=5,v-=5,d.ndist=1+(31&I),I>>>=5,v-=5,d.ncode=4+(15&I),I>>>=4,v-=4,286<d.nlen||30<d.ndist){w.msg="too many length or distance symbols",d.mode=30;break}d.have=0,d.mode=18;case 18:for(;d.have<d.ncode;){for(;v<3;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}d.lens[B[d.have++]]=7&I,I>>>=3,v-=3}for(;d.have<19;)d.lens[B[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,x={bits:d.lenbits},M=l(0,d.lens,0,19,d.lencode,0,d.work,x),d.lenbits=x.bits,M){w.msg="invalid code lengths set",d.mode=30;break}d.have=0,d.mode=19;case 19:for(;d.have<d.nlen+d.ndist;){for(;ue=(k=d.lencode[I&(1<<d.lenbits)-1])>>>16&255,be=65535&k,!((oe=k>>>24)<=v);){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if(be<16)I>>>=oe,v-=oe,d.lens[d.have++]=be;else{if(be===16){for(b=oe+2;v<b;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if(I>>>=oe,v-=oe,d.have===0){w.msg="invalid bit length repeat",d.mode=30;break}h=d.lens[d.have-1],Y=3+(3&I),I>>>=2,v-=2}else if(be===17){for(b=oe+3;v<b;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}v-=oe,h=0,Y=3+(7&(I>>>=oe)),I>>>=3,v-=3}else{for(b=oe+7;v<b;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}v-=oe,h=0,Y=11+(127&(I>>>=oe)),I>>>=7,v-=7}if(d.have+Y>d.nlen+d.ndist){w.msg="invalid bit length repeat",d.mode=30;break}for(;Y--;)d.lens[d.have++]=h}}if(d.mode===30)break;if(d.lens[256]===0){w.msg="invalid code -- missing end-of-block",d.mode=30;break}if(d.lenbits=9,x={bits:d.lenbits},M=l(_,d.lens,0,d.nlen,d.lencode,0,d.work,x),d.lenbits=x.bits,M){w.msg="invalid literal/lengths set",d.mode=30;break}if(d.distbits=6,d.distcode=d.distdyn,x={bits:d.distbits},M=l(u,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,x),d.distbits=x.bits,M){w.msg="invalid distances set",d.mode=30;break}if(d.mode=20,D===6)break e;case 20:d.mode=21;case 21:if(6<=G&&258<=ee){w.next_out=re,w.avail_out=ee,w.next_in=$,w.avail_in=G,d.hold=I,d.bits=v,a(w,q),re=w.next_out,ne=w.output,ee=w.avail_out,$=w.next_in,z=w.input,G=w.avail_in,I=d.hold,v=d.bits,d.mode===12&&(d.back=-1);break}for(d.back=0;ue=(k=d.lencode[I&(1<<d.lenbits)-1])>>>16&255,be=65535&k,!((oe=k>>>24)<=v);){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if(ue&&(240&ue)==0){for(ke=oe,Oe=ue,Ie=be;ue=(k=d.lencode[Ie+((I&(1<<ke+Oe)-1)>>ke)])>>>16&255,be=65535&k,!(ke+(oe=k>>>24)<=v);){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}I>>>=ke,v-=ke,d.back+=ke}if(I>>>=oe,v-=oe,d.back+=oe,d.length=be,ue===0){d.mode=26;break}if(32&ue){d.back=-1,d.mode=12;break}if(64&ue){w.msg="invalid literal/length code",d.mode=30;break}d.extra=15&ue,d.mode=22;case 22:if(d.extra){for(b=d.extra;v<b;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}d.length+=I&(1<<d.extra)-1,I>>>=d.extra,v-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=23;case 23:for(;ue=(k=d.distcode[I&(1<<d.distbits)-1])>>>16&255,be=65535&k,!((oe=k>>>24)<=v);){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if((240&ue)==0){for(ke=oe,Oe=ue,Ie=be;ue=(k=d.distcode[Ie+((I&(1<<ke+Oe)-1)>>ke)])>>>16&255,be=65535&k,!(ke+(oe=k>>>24)<=v);){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}I>>>=ke,v-=ke,d.back+=ke}if(I>>>=oe,v-=oe,d.back+=oe,64&ue){w.msg="invalid distance code",d.mode=30;break}d.offset=be,d.extra=15&ue,d.mode=24;case 24:if(d.extra){for(b=d.extra;v<b;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}d.offset+=I&(1<<d.extra)-1,I>>>=d.extra,v-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){w.msg="invalid distance too far back",d.mode=30;break}d.mode=25;case 25:if(ee===0)break e;if(Y=q-ee,d.offset>Y){if((Y=d.offset-Y)>d.whave&&d.sane){w.msg="invalid distance too far back",d.mode=30;break}Se=Y>d.wnext?(Y-=d.wnext,d.wsize-Y):d.wnext-Y,Y>d.length&&(Y=d.length),Ae=d.window}else Ae=ne,Se=re-d.offset,Y=d.length;for(ee<Y&&(Y=ee),ee-=Y,d.length-=Y;ne[re++]=Ae[Se++],--Y;);d.length===0&&(d.mode=21);break;case 26:if(ee===0)break e;ne[re++]=d.length,ee--,d.mode=21;break;case 27:if(d.wrap){for(;v<32;){if(G===0)break e;G--,I|=z[$++]<<v,v+=8}if(q-=ee,w.total_out+=q,d.total+=q,q&&(w.adler=d.check=d.flags?o(d.check,ne,q,re-q):i(d.check,ne,q,re-q)),q=ee,(d.flags?I:g(I))!==d.check){w.msg="incorrect data check",d.mode=30;break}v=I=0}d.mode=28;case 28:if(d.wrap&&d.flags){for(;v<32;){if(G===0)break e;G--,I+=z[$++]<<v,v+=8}if(I!==(4294967295&d.total)){w.msg="incorrect length check",d.mode=30;break}v=I=0}d.mode=29;case 29:M=1;break e;case 30:M=-3;break e;case 31:return-4;default:return c}return w.next_out=re,w.avail_out=ee,w.next_in=$,w.avail_in=G,d.hold=I,d.bits=v,(d.wsize||q!==w.avail_out&&d.mode<30&&(d.mode<27||D!==4))&&X(w,w.output,w.next_out,q-w.avail_out)?(d.mode=31,-4):(Q-=w.avail_in,q-=w.avail_out,w.total_in+=Q,w.total_out+=q,d.total+=q,d.wrap&&q&&(w.adler=d.check=d.flags?o(d.check,ne,q,w.next_out-q):i(d.check,ne,q,w.next_out-q)),w.data_type=d.bits+(d.last?64:0)+(d.mode===12?128:0)+(d.mode===20||d.mode===15?256:0),(Q==0&&q===0||D===4)&&M===p&&(M=-5),M)},s.inflateEnd=function(w){if(!w||!w.state)return c;var D=w.state;return D.window&&(D.window=null),w.state=null,p},s.inflateGetHeader=function(w,D){var d;return w&&w.state?(2&(d=w.state).wrap)==0?c:((d.head=D).done=!1,p):c},s.inflateSetDictionary=function(w,D){var d,z=D.length;return w&&w.state?(d=w.state).wrap!==0&&d.mode!==11?c:d.mode===11&&i(1,D,z,0)!==d.check?-3:X(w,D,z,z)?(d.mode=31,-4):(d.havedict=1,p):c},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,s){var r=t("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(_,u,p,c,m,f,T,g){var S,A,y,N,F,O,j,P,H,X=g.bits,w=0,D=0,d=0,z=0,ne=0,$=0,re=0,G=0,ee=0,I=0,v=null,Q=0,q=new r.Buf16(16),Y=new r.Buf16(16),Se=null,Ae=0;for(w=0;w<=15;w++)q[w]=0;for(D=0;D<c;D++)q[u[p+D]]++;for(ne=X,z=15;1<=z&&q[z]===0;z--);if(z<ne&&(ne=z),z===0)return m[f++]=20971520,m[f++]=20971520,g.bits=1,0;for(d=1;d<z&&q[d]===0;d++);for(ne<d&&(ne=d),w=G=1;w<=15;w++)if(G<<=1,(G-=q[w])<0)return-1;if(0<G&&(_===0||z!==1))return-1;for(Y[1]=0,w=1;w<15;w++)Y[w+1]=Y[w]+q[w];for(D=0;D<c;D++)u[p+D]!==0&&(T[Y[u[p+D]]++]=D);if(O=_===0?(v=Se=T,19):_===1?(v=i,Q-=257,Se=o,Ae-=257,256):(v=a,Se=l,-1),w=d,F=f,re=D=I=0,y=-1,N=(ee=1<<($=ne))-1,_===1&&852<ee||_===2&&592<ee)return 1;for(;;){for(j=w-re,H=T[D]<O?(P=0,T[D]):T[D]>O?(P=Se[Ae+T[D]],v[Q+T[D]]):(P=96,0),S=1<<w-re,d=A=1<<$;m[F+(I>>re)+(A-=S)]=j<<24|P<<16|H|0,A!==0;);for(S=1<<w-1;I&S;)S>>=1;if(S!==0?(I&=S-1,I+=S):I=0,D++,--q[w]==0){if(w===z)break;w=u[p+T[D]]}if(ne<w&&(I&N)!==y){for(re===0&&(re=ne),F+=d,G=1<<($=w-re);$+re<z&&!((G-=q[$+re])<=0);)$++,G<<=1;if(ee+=1<<$,_===1&&852<ee||_===2&&592<ee)return 1;m[y=I&N]=ne<<24|$<<16|F-f|0}}return I!==0&&(m[F+I]=w-re<<24|64<<16|0),g.bits=ne,0}},{"../utils/common":41}],51:[function(t,n,s){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,s){var r=t("../utils/common"),i=0,o=1;function a(k){for(var R=k.length;0<=--R;)k[R]=0}var l=0,_=29,u=256,p=u+1+_,c=30,m=19,f=2*p+1,T=15,g=16,S=7,A=256,y=16,N=17,F=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],j=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(p+2));a(X);var w=new Array(2*c);a(w);var D=new Array(512);a(D);var d=new Array(256);a(d);var z=new Array(_);a(z);var ne,$,re,G=new Array(c);function ee(k,R,B,U,C){this.static_tree=k,this.extra_bits=R,this.extra_base=B,this.elems=U,this.max_length=C,this.has_stree=k&&k.length}function I(k,R){this.dyn_tree=k,this.max_code=0,this.stat_desc=R}function v(k){return k<256?D[k]:D[256+(k>>>7)]}function Q(k,R){k.pending_buf[k.pending++]=255&R,k.pending_buf[k.pending++]=R>>>8&255}function q(k,R,B){k.bi_valid>g-B?(k.bi_buf|=R<<k.bi_valid&65535,Q(k,k.bi_buf),k.bi_buf=R>>g-k.bi_valid,k.bi_valid+=B-g):(k.bi_buf|=R<<k.bi_valid&65535,k.bi_valid+=B)}function Y(k,R,B){q(k,B[2*R],B[2*R+1])}function Se(k,R){for(var B=0;B|=1&k,k>>>=1,B<<=1,0<--R;);return B>>>1}function Ae(k,R,B){var U,C,K=new Array(T+1),V=0;for(U=1;U<=T;U++)K[U]=V=V+B[U-1]<<1;for(C=0;C<=R;C++){var W=k[2*C+1];W!==0&&(k[2*C]=Se(K[W]++,W))}}function oe(k){var R;for(R=0;R<p;R++)k.dyn_ltree[2*R]=0;for(R=0;R<c;R++)k.dyn_dtree[2*R]=0;for(R=0;R<m;R++)k.bl_tree[2*R]=0;k.dyn_ltree[2*A]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function ue(k){8<k.bi_valid?Q(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function be(k,R,B,U){var C=2*R,K=2*B;return k[C]<k[K]||k[C]===k[K]&&U[R]<=U[B]}function ke(k,R,B){for(var U=k.heap[B],C=B<<1;C<=k.heap_len&&(C<k.heap_len&&be(R,k.heap[C+1],k.heap[C],k.depth)&&C++,!be(R,U,k.heap[C],k.depth));)k.heap[B]=k.heap[C],B=C,C<<=1;k.heap[B]=U}function Oe(k,R,B){var U,C,K,V,W=0;if(k.last_lit!==0)for(;U=k.pending_buf[k.d_buf+2*W]<<8|k.pending_buf[k.d_buf+2*W+1],C=k.pending_buf[k.l_buf+W],W++,U===0?Y(k,C,R):(Y(k,(K=d[C])+u+1,R),(V=O[K])!==0&&q(k,C-=z[K],V),Y(k,K=v(--U),B),(V=j[K])!==0&&q(k,U-=G[K],V)),W<k.last_lit;);Y(k,A,R)}function Ie(k,R){var B,U,C,K=R.dyn_tree,V=R.stat_desc.static_tree,W=R.stat_desc.has_stree,J=R.stat_desc.elems,_e=-1;for(k.heap_len=0,k.heap_max=f,B=0;B<J;B++)K[2*B]!==0?(k.heap[++k.heap_len]=_e=B,k.depth[B]=0):K[2*B+1]=0;for(;k.heap_len<2;)K[2*(C=k.heap[++k.heap_len]=_e<2?++_e:0)]=1,k.depth[C]=0,k.opt_len--,W&&(k.static_len-=V[2*C+1]);for(R.max_code=_e,B=k.heap_len>>1;1<=B;B--)ke(k,K,B);for(C=J;B=k.heap[1],k.heap[1]=k.heap[k.heap_len--],ke(k,K,1),U=k.heap[1],k.heap[--k.heap_max]=B,k.heap[--k.heap_max]=U,K[2*C]=K[2*B]+K[2*U],k.depth[C]=(k.depth[B]>=k.depth[U]?k.depth[B]:k.depth[U])+1,K[2*B+1]=K[2*U+1]=C,k.heap[1]=C++,ke(k,K,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(ae,Re){var Ke,Pe,Ze,Ee,nt,Tt,ze=Re.dyn_tree,hn=Re.max_code,Ts=Re.stat_desc.static_tree,Ss=Re.stat_desc.has_stree,ks=Re.stat_desc.extra_bits,un=Re.stat_desc.extra_base,We=Re.stat_desc.max_length,st=0;for(Ee=0;Ee<=T;Ee++)ae.bl_count[Ee]=0;for(ze[2*ae.heap[ae.heap_max]+1]=0,Ke=ae.heap_max+1;Ke<f;Ke++)We<(Ee=ze[2*ze[2*(Pe=ae.heap[Ke])+1]+1]+1)&&(Ee=We,st++),ze[2*Pe+1]=Ee,hn<Pe||(ae.bl_count[Ee]++,nt=0,un<=Pe&&(nt=ks[Pe-un]),Tt=ze[2*Pe],ae.opt_len+=Tt*(Ee+nt),Ss&&(ae.static_len+=Tt*(Ts[2*Pe+1]+nt)));if(st!==0){do{for(Ee=We-1;ae.bl_count[Ee]===0;)Ee--;ae.bl_count[Ee]--,ae.bl_count[Ee+1]+=2,ae.bl_count[We]--,st-=2}while(0<st);for(Ee=We;Ee!==0;Ee--)for(Pe=ae.bl_count[Ee];Pe!==0;)hn<(Ze=ae.heap[--Ke])||(ze[2*Ze+1]!==Ee&&(ae.opt_len+=(Ee-ze[2*Ze+1])*ze[2*Ze],ze[2*Ze+1]=Ee),Pe--)}})(k,R),Ae(K,_e,k.bl_count)}function h(k,R,B){var U,C,K=-1,V=R[1],W=0,J=7,_e=4;for(V===0&&(J=138,_e=3),R[2*(B+1)+1]=65535,U=0;U<=B;U++)C=V,V=R[2*(U+1)+1],++W<J&&C===V||(W<_e?k.bl_tree[2*C]+=W:C!==0?(C!==K&&k.bl_tree[2*C]++,k.bl_tree[2*y]++):W<=10?k.bl_tree[2*N]++:k.bl_tree[2*F]++,K=C,_e=(W=0)===V?(J=138,3):C===V?(J=6,3):(J=7,4))}function M(k,R,B){var U,C,K=-1,V=R[1],W=0,J=7,_e=4;for(V===0&&(J=138,_e=3),U=0;U<=B;U++)if(C=V,V=R[2*(U+1)+1],!(++W<J&&C===V)){if(W<_e)for(;Y(k,C,k.bl_tree),--W!=0;);else C!==0?(C!==K&&(Y(k,C,k.bl_tree),W--),Y(k,y,k.bl_tree),q(k,W-3,2)):W<=10?(Y(k,N,k.bl_tree),q(k,W-3,3)):(Y(k,F,k.bl_tree),q(k,W-11,7));K=C,_e=(W=0)===V?(J=138,3):C===V?(J=6,3):(J=7,4)}}a(G);var x=!1;function b(k,R,B,U){q(k,(l<<1)+(U?1:0),3),(function(C,K,V,W){ue(C),Q(C,V),Q(C,~V),r.arraySet(C.pending_buf,C.window,K,V,C.pending),C.pending+=V})(k,R,B)}s._tr_init=function(k){x||((function(){var R,B,U,C,K,V=new Array(T+1);for(C=U=0;C<_-1;C++)for(z[C]=U,R=0;R<1<<O[C];R++)d[U++]=C;for(d[U-1]=C,C=K=0;C<16;C++)for(G[C]=K,R=0;R<1<<j[C];R++)D[K++]=C;for(K>>=7;C<c;C++)for(G[C]=K<<7,R=0;R<1<<j[C]-7;R++)D[256+K++]=C;for(B=0;B<=T;B++)V[B]=0;for(R=0;R<=143;)X[2*R+1]=8,R++,V[8]++;for(;R<=255;)X[2*R+1]=9,R++,V[9]++;for(;R<=279;)X[2*R+1]=7,R++,V[7]++;for(;R<=287;)X[2*R+1]=8,R++,V[8]++;for(Ae(X,p+1,V),R=0;R<c;R++)w[2*R+1]=5,w[2*R]=Se(R,5);ne=new ee(X,O,u+1,p,T),$=new ee(w,j,0,c,T),re=new ee(new Array(0),P,0,m,S)})(),x=!0),k.l_desc=new I(k.dyn_ltree,ne),k.d_desc=new I(k.dyn_dtree,$),k.bl_desc=new I(k.bl_tree,re),k.bi_buf=0,k.bi_valid=0,oe(k)},s._tr_stored_block=b,s._tr_flush_block=function(k,R,B,U){var C,K,V=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(W){var J,_e=4093624447;for(J=0;J<=31;J++,_e>>>=1)if(1&_e&&W.dyn_ltree[2*J]!==0)return i;if(W.dyn_ltree[18]!==0||W.dyn_ltree[20]!==0||W.dyn_ltree[26]!==0)return o;for(J=32;J<u;J++)if(W.dyn_ltree[2*J]!==0)return o;return i})(k)),Ie(k,k.l_desc),Ie(k,k.d_desc),V=(function(W){var J;for(h(W,W.dyn_ltree,W.l_desc.max_code),h(W,W.dyn_dtree,W.d_desc.max_code),Ie(W,W.bl_desc),J=m-1;3<=J&&W.bl_tree[2*H[J]+1]===0;J--);return W.opt_len+=3*(J+1)+5+5+4,J})(k),C=k.opt_len+3+7>>>3,(K=k.static_len+3+7>>>3)<=C&&(C=K)):C=K=B+5,B+4<=C&&R!==-1?b(k,R,B,U):k.strategy===4||K===C?(q(k,2+(U?1:0),3),Oe(k,X,w)):(q(k,4+(U?1:0),3),(function(W,J,_e,ae){var Re;for(q(W,J-257,5),q(W,_e-1,5),q(W,ae-4,4),Re=0;Re<ae;Re++)q(W,W.bl_tree[2*H[Re]+1],3);M(W,W.dyn_ltree,J-1),M(W,W.dyn_dtree,_e-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,V+1),Oe(k,k.dyn_ltree,k.dyn_dtree)),oe(k),U&&ue(k)},s._tr_tally=function(k,R,B){return k.pending_buf[k.d_buf+2*k.last_lit]=R>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&R,k.pending_buf[k.l_buf+k.last_lit]=255&B,k.last_lit++,R===0?k.dyn_ltree[2*B]++:(k.matches++,R--,k.dyn_ltree[2*(d[B]+u+1)]++,k.dyn_dtree[2*v(R)]++),k.last_lit===k.lit_bufsize-1},s._tr_align=function(k){q(k,2,3),Y(k,A,X),(function(R){R.bi_valid===16?(Q(R,R.bi_buf),R.bi_buf=0,R.bi_valid=0):8<=R.bi_valid&&(R.pending_buf[R.pending++]=255&R.bi_buf,R.bi_buf>>=8,R.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(t,n,s){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,s){(function(r){(function(i,o){if(!i.setImmediate){var a,l,_,u,p=1,c={},m=!1,f=i.document,T=Object.getPrototypeOf&&Object.getPrototypeOf(i);T=T&&T.setTimeout?T:i,a={}.toString.call(i.process)==="[object process]"?function(y){process.nextTick(function(){S(y)})}:(function(){if(i.postMessage&&!i.importScripts){var y=!0,N=i.onmessage;return i.onmessage=function(){y=!1},i.postMessage("","*"),i.onmessage=N,y}})()?(u="setImmediate$"+Math.random()+"$",i.addEventListener?i.addEventListener("message",A,!1):i.attachEvent("onmessage",A),function(y){i.postMessage(u+y,"*")}):i.MessageChannel?((_=new MessageChannel).port1.onmessage=function(y){S(y.data)},function(y){_.port2.postMessage(y)}):f&&"onreadystatechange"in f.createElement("script")?(l=f.documentElement,function(y){var N=f.createElement("script");N.onreadystatechange=function(){S(y),N.onreadystatechange=null,l.removeChild(N),N=null},l.appendChild(N)}):function(y){setTimeout(S,0,y)},T.setImmediate=function(y){typeof y!="function"&&(y=new Function(""+y));for(var N=new Array(arguments.length-1),F=0;F<N.length;F++)N[F]=arguments[F+1];var O={callback:y,args:N};return c[p]=O,a(p),p++},T.clearImmediate=g}function g(y){delete c[y]}function S(y){if(m)setTimeout(S,0,y);else{var N=c[y];if(N){m=!0;try{(function(F){var O=F.callback,j=F.args;switch(j.length){case 0:O();break;case 1:O(j[0]);break;case 2:O(j[0],j[1]);break;case 3:O(j[0],j[1],j[2]);break;default:O.apply(o,j)}})(N)}finally{g(y),m=!1}}}}function A(y){y.source===i&&typeof y.data=="string"&&y.data.indexOf(u)===0&&S(+y.data.slice(u.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Ye<"u"?Ye:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(mt)),mt.exports}var ms=_s(),gs=rt(ms);let gt,ln,cn;self.onmessage=E=>{if(E.data.type!=="rpc_response")switch(E.data.type){case"emitcode":try{const e=E.data,t=JSON.parse(e.options);fs(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,t,e.necessarioRecriar,void 0,gt).then(([n,,s,r])=>{if(n!=null)try{const i=new gs;let o=null;if(s&&(o=i.folder(t.pkgName),o==null))throw Error("FLD é nulo");for(const[a,l]of n.entries())s&&o!=null?o.file(a,l):i.file(a,l);r!=null&&i.file("main.py",r),i.generateAsync({type:"blob"}).then(a=>{const l=URL.createObjectURL(a);self.postMessage({type:"emitcode",success:!0,result:l})})}catch(i){self.postMessage({type:"emitcode",success:!1,error:i.message})}}).catch(n=>self.postMessage({type:"emitcode",success:!1,error:n.message}))}catch(e){self.postMessage({type:"emitcode",success:!1,error:e})}break;case"syntactic":try{const e=E.data;us(e.textSimulator,e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,e.parser,e.necessarioRecriar,void 0,void 0,gt,ln,cn).then(([t,n,s,r])=>{gt=n,ln=s,cn=r;let i=JSON.stringify(t);self.postMessage({type:"syntactic",success:!0,result:i})}).catch(t=>{self.postMessage({type:"syntactic",success:!1,error:t.message})})}catch(e){self.postMessage({type:"syntactic",success:!1,error:e.message})}break}}})();
