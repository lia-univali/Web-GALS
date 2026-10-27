(function(){"use strict";var Ze=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(N){return N&&N.__esModule&&Object.prototype.hasOwnProperty.call(N,"default")?N.default:N}function dn(N){if(Object.prototype.hasOwnProperty.call(N,"__esModule"))return N;var t=N.default;if(typeof t=="function"){var e=function s(){var n=!1;try{n=this instanceof s}catch{}return n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(N).forEach(function(s){var n=Object.getOwnPropertyDescriptor(N,s);Object.defineProperty(e,s,n.get?n:{enumerable:!0,get:function(){return N[s]}})}),e}var it={},ot=function(N,t){return ot=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])},ot(N,t)};function St(N,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ot(N,t);function e(){this.constructor=N}N.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Ye=function(){return Ye=Object.assign||function(t){for(var e,s=1,n=arguments.length;s<n;s++){e=arguments[s];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ye.apply(this,arguments)};function kt(N,t){var e={};for(var s in N)Object.prototype.hasOwnProperty.call(N,s)&&t.indexOf(s)<0&&(e[s]=N[s]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(N);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(N,s[n])&&(e[s[n]]=N[s[n]]);return e}function Nt(N,t,e,s){var n=arguments.length,r=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(N,t,e,s);else for(var o=N.length-1;o>=0;o--)(i=N[o])&&(r=(n<3?i(r):n>3?i(t,e,r):i(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r}function bt(N,t){return function(e,s){t(e,s,N)}}function pn(N,t,e,s,n,r){function i(g){if(g!==void 0&&typeof g!="function")throw new TypeError("Function expected");return g}for(var o=s.kind,a=o==="getter"?"get":o==="setter"?"set":"value",l=!t&&N?s.static?N:N.prototype:null,m=t||(l?Object.getOwnPropertyDescriptor(l,s.name):{}),c,f=!1,u=e.length-1;u>=0;u--){var _={};for(var d in s)_[d]=d==="access"?{}:s[d];for(var d in s.access)_.access[d]=s.access[d];_.addInitializer=function(g){if(f)throw new TypeError("Cannot add initializers after decoration has completed");r.push(i(g||null))};var T=(0,e[u])(o==="accessor"?{get:m.get,set:m.set}:m[a],_);if(o==="accessor"){if(T===void 0)continue;if(T===null||typeof T!="object")throw new TypeError("Object expected");(c=i(T.get))&&(m.get=c),(c=i(T.set))&&(m.set=c),(c=i(T.init))&&n.unshift(c)}else(c=i(T))&&(o==="field"?n.unshift(c):m[a]=c)}l&&Object.defineProperty(l,s.name,m),f=!0}function fn(N,t,e){for(var s=arguments.length>2,n=0;n<t.length;n++)e=s?t[n].call(N,e):t[n].call(N);return s?e:void 0}function mn(N){return typeof N=="symbol"?N:"".concat(N)}function _n(N,t,e){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(N,"name",{configurable:!0,value:e?"".concat(e," ",t):t})}function Et(N,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(N,t)}function At(N,t,e,s){function n(r){return r instanceof e?r:new e(function(i){i(r)})}return new(e||(e=Promise))(function(r,i){function o(m){try{l(s.next(m))}catch(c){i(c)}}function a(m){try{l(s.throw(m))}catch(c){i(c)}}function l(m){m.done?r(m.value):n(m.value).then(o,a)}l((s=s.apply(N,t||[])).next())})}function wt(N,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,n,r,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(l){return function(m){return a([l,m])}}function a(l){if(s)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(e=0)),e;)try{if(s=1,n&&(r=l[0]&2?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,n=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){e.label=l[1];break}if(l[0]===6&&e.label<r[1]){e.label=r[1],r=l;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(l);break}r[2]&&e.ops.pop(),e.trys.pop();continue}l=t.call(N,e)}catch(m){l=[6,m],n=0}finally{s=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Ve=Object.create?(function(N,t,e,s){s===void 0&&(s=e);var n=Object.getOwnPropertyDescriptor(t,e);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(N,s,n)}):(function(N,t,e,s){s===void 0&&(s=e),N[s]=t[e]});function yt(N,t){for(var e in N)e!=="default"&&!Object.prototype.hasOwnProperty.call(t,e)&&Ve(t,N,e)}function Xe(N){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&N[t],s=0;if(e)return e.call(N);if(N&&typeof N.length=="number")return{next:function(){return N&&s>=N.length&&(N=void 0),{value:N&&N[s++],done:!N}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function at(N,t){var e=typeof Symbol=="function"&&N[Symbol.iterator];if(!e)return N;var s=e.call(N),n,r=[],i;try{for(;(t===void 0||t-- >0)&&!(n=s.next()).done;)r.push(n.value)}catch(o){i={error:o}}finally{try{n&&!n.done&&(e=s.return)&&e.call(s)}finally{if(i)throw i.error}}return r}function Rt(){for(var N=[],t=0;t<arguments.length;t++)N=N.concat(at(arguments[t]));return N}function Ct(){for(var N=0,t=0,e=arguments.length;t<e;t++)N+=arguments[t].length;for(var s=Array(N),n=0,t=0;t<e;t++)for(var r=arguments[t],i=0,o=r.length;i<o;i++,n++)s[n]=r[i];return s}function vt(N,t,e){if(e||arguments.length===2)for(var s=0,n=t.length,r;s<n;s++)(r||!(s in t))&&(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return N.concat(r||Array.prototype.slice.call(t))}function Ue(N){return this instanceof Ue?(this.v=N,this):new Ue(N)}function It(N,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=e.apply(N,t||[]),n,r=[];return n={},o("next"),o("throw"),o("return",i),n[Symbol.asyncIterator]=function(){return this},n;function i(u){return function(_){return Promise.resolve(_).then(u,c)}}function o(u,_){s[u]&&(n[u]=function(d){return new Promise(function(T,g){r.push([u,d,T,g])>1||a(u,d)})},_&&(n[u]=_(n[u])))}function a(u,_){try{l(s[u](_))}catch(d){f(r[0][3],d)}}function l(u){u.value instanceof Ue?Promise.resolve(u.value.v).then(m,c):f(r[0][2],u)}function m(u){a("next",u)}function c(u){a("throw",u)}function f(u,_){u(_),r.shift(),r.length&&a(r[0][0],r[0][1])}}function Lt(N){var t,e;return t={},s("next"),s("throw",function(n){throw n}),s("return"),t[Symbol.iterator]=function(){return this},t;function s(n,r){t[n]=N[n]?function(i){return(e=!e)?{value:Ue(N[n](i)),done:!1}:r?r(i):i}:r}}function xt(N){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=N[Symbol.asyncIterator],e;return t?t.call(N):(N=typeof Xe=="function"?Xe(N):N[Symbol.iterator](),e={},s("next"),s("throw"),s("return"),e[Symbol.asyncIterator]=function(){return this},e);function s(r){e[r]=N[r]&&function(i){return new Promise(function(o,a){i=N[r](i),n(o,a,i.done,i.value)})}}function n(r,i,o,a){Promise.resolve(a).then(function(l){r({value:l,done:o})},i)}}function Ot(N,t){return Object.defineProperty?Object.defineProperty(N,"raw",{value:t}):N.raw=t,N}var gn=Object.create?(function(N,t){Object.defineProperty(N,"default",{enumerable:!0,value:t})}):function(N,t){N.default=t};function Pt(N){if(N&&N.__esModule)return N;var t={};if(N!=null)for(var e in N)e!=="default"&&Object.prototype.hasOwnProperty.call(N,e)&&Ve(t,N,e);return gn(t,N),t}function Dt(N){return N&&N.__esModule?N:{default:N}}function Ft(N,t,e,s){if(e==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?N!==t||!s:!t.has(N))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?s:e==="a"?s.call(N):s?s.value:t.get(N)}function Mt(N,t,e,s,n){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?N!==t||!n:!t.has(N))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?n.call(N,e):n?n.value=e:t.set(N,e),e}function zt(N,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof N=="function"?t===N:N.has(t)}function Bt(N,t,e){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var s,n;if(e){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");s=t[Symbol.asyncDispose]}if(s===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");s=t[Symbol.dispose],e&&(n=s)}if(typeof s!="function")throw new TypeError("Object not disposable.");n&&(s=function(){try{n.call(this)}catch(r){return Promise.reject(r)}}),N.stack.push({value:t,dispose:s,async:e})}else e&&N.stack.push({async:!0});return t}var Tn=typeof SuppressedError=="function"?SuppressedError:function(N,t,e){var s=new Error(e);return s.name="SuppressedError",s.error=N,s.suppressed=t,s};function Ut(N){function t(s){N.error=N.hasError?new Tn(s,N.error,"An error was suppressed during disposal."):s,N.hasError=!0}function e(){for(;N.stack.length;){var s=N.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(e,function(r){return t(r),e()})}catch(r){t(r)}}if(N.hasError)throw N.error}return e()}var Sn={__extends:St,__assign:Ye,__rest:kt,__decorate:Nt,__param:bt,__metadata:Et,__awaiter:At,__generator:wt,__createBinding:Ve,__exportStar:yt,__values:Xe,__read:at,__spread:Rt,__spreadArrays:Ct,__spreadArray:vt,__await:Ue,__asyncGenerator:It,__asyncDelegator:Lt,__asyncValues:xt,__makeTemplateObject:Ot,__importStar:Pt,__importDefault:Dt,__classPrivateFieldGet:Ft,__classPrivateFieldSet:Mt,__classPrivateFieldIn:zt,__addDisposableResource:Bt,__disposeResources:Ut},kn=Object.freeze({__proto__:null,__addDisposableResource:Bt,get __assign(){return Ye},__asyncDelegator:Lt,__asyncGenerator:It,__asyncValues:xt,__await:Ue,__awaiter:At,__classPrivateFieldGet:Ft,__classPrivateFieldIn:zt,__classPrivateFieldSet:Mt,__createBinding:Ve,__decorate:Nt,__disposeResources:Ut,__esDecorate:pn,__exportStar:yt,__extends:St,__generator:wt,__importDefault:Dt,__importStar:Pt,__makeTemplateObject:Ot,__metadata:Et,__param:bt,__propKey:mn,__read:at,__rest:kt,__runInitializers:fn,__setFunctionName:_n,__spread:Rt,__spreadArray:vt,__spreadArrays:Ct,__values:Xe,default:Sn}),Nn=dn(kn),De={},jt;function bn(){return jt||(jt=1,Object.defineProperty(De,"__esModule",{value:!0}),De.isDate=De.isComparable=De.isIterable=void 0,De.isIterable=N=>!(N==null||N[Symbol.iterator]==null),De.isComparable=N=>{const t=Object.prototype.toString,e=N;return e.compare!=null&&t.call(e.compare).endsWith("Function]")},De.isDate=N=>Object.prototype.toString.call(N).endsWith("Date]")),De}var lt={},$t;function En(){return $t||($t=1,Object.defineProperty(lt,"__esModule",{value:!0})),lt}var Kt;function An(){return Kt||(Kt=1,(function(N){Object.defineProperty(N,"__esModule",{value:!0});const t=Nn,e=bn(),o={number:(m,c)=>m-c,string:(m,c)=>m.localeCompare(c),Date:(m,c)=>m.getTime()-c.getTime(),bigInt:(m,c)=>Number(m-c),none:()=>0},a=m=>{if(typeof m=="number")return o.number;if(typeof m=="string")return o.string;if(typeof m=="bigint")return o.bigInt;if(e.isDate(m))return o.Date;if(e.isComparable(m))return(c,f)=>c.compare(f);throw new Error("Cannot sort keys in this map. You have to specify compareFn if the type of key in this map is not number, string, or Date.")};class l extends Map{constructor(c,f){super(),this.specifiedCompareFn=!1,this.isCompareFn=u=>typeof u=="function",this.compareFn=o.none,this.sortedKeys=[],e.isIterable(c)&&this._constructor(c,f),this.isCompareFn(c)&&this._constructor(null,c),c==null&&this._constructor(null,f)}get comparator(){return this.compareFn}compare(c,f){return Math.sign(this.compareFn(c,f))}_constructor(c,f){if(this.compareFn=f??o.none,this.specifiedCompareFn=f!=null,c!=null)for(const u of c)this.set(...u)}static fromMap(c,f){const u=new l(f);return u.setAll(c),u}duplicate(){return l.fromMap(this,this.compareFn)}toMap(){const c=new Map,f=Array.from(super.entries());return f.sort((u,_)=>this.compareFn(u[0],_[0])),f.forEach(([u,_])=>{c.set(u,_)}),c}reverseKeys(){return[...this.sortedKeys].reverse().values()}get(c){const f=this.sortedKeys.find(u=>this.comparator(u,c)===0);if(f!=null)return super.get(f)}set(c,f){this.sortedKeys.length===0&&!this.specifiedCompareFn&&(this.compareFn=a(c),this.specifiedCompareFn=!0);const u=this.sortedKeys.find(_=>this.compareFn(_,c)===0);return u==null?(this.sortedKeys.push(c),super.set(c,f)):super.set(u,f),this.sortedKeys.sort(this.compareFn),this}setAll(c){return c.forEach((f,u)=>{this.set(u,f)}),this}delete(c){return super.delete(c)?(this.sortedKeys=this.sortedKeys.filter(f=>this.compare(f,c)!==0),!0):!1}clear(){super.clear(),this.sortedKeys=[]}keys(){return this.sortedKeys.values()}values(){return this.sortedKeys.map(c=>super.get(c)).values()}entries(){return this.toMap().entries()}firstEntry(){const c=this.firstKey();if(c==null)return;const f=this.get(c);return f===void 0?void 0:[c,f]}firstKey(){return this.sortedKeys[0]}lastEntry(){const c=this.lastKey();if(c==null)return;const f=this.get(c);return f===void 0?void 0:[c,f]}lastKey(){return[...this.sortedKeys].reverse()[0]}shiftEntry(){const c=this.firstEntry();if(c!=null)return this.delete(c[0]),c}popEntry(){const c=this.lastEntry();if(c!=null)return this.delete(c[0]),c}floorEntry(c){const f=this.floorKey(c);if(f!=null){const u=this.get(f);return u===void 0?void 0:[f,u]}}floorKey(c){return this.sortedKeys.filter(u=>this.compare(u,c)<=0).reverse()[0]}ceilingEntry(c){const f=this.ceilingKey(c);if(f!=null){const u=this.get(f);return u===void 0?void 0:[f,u]}}ceilingKey(c){return this.sortedKeys.filter(u=>this.compare(u,c)>=0)[0]}lowerEntry(c){const f=this.lowerKey(c);if(f!=null){const u=this.get(f);return u===void 0?void 0:[f,u]}}lowerKey(c){return this.sortedKeys.filter(u=>this.compare(u,c)<0).reverse()[0]}higherEntry(c){const f=this.higherKey(c);if(f!=null){const u=this.get(f);return u===void 0?void 0:[f,u]}}higherKey(c){return this.sortedKeys.filter(u=>this.compare(u,c)>0)[0]}splitLower(c,f=!0){const u=Array.from(this.entries()).filter(_=>{const d=this.compare(_[0],c)<0;return f?d||this.compare(_[0],c)===0:d});return new l(u,this.compareFn)}splitHigher(c,f=!0){const u=Array.from(this.entries()).filter(_=>{const d=this.compare(_[0],c)>0;return f?d||this.compare(_[0],c)===0:d});return new l(u,this.compareFn)}forEach(c,f){Array.from(this.entries()).forEach(([u,_])=>{c(_,u,this)},f)}}N.default=l,t.__exportStar(En(),N)})(it)),it}var wn=An(),Fe=rt(wn);class Be{constructor(t=1/0){this.capacity=t}capacity;storage=[];push(t){if(this.size()===this.capacity)throw Error("Stack has reached max capacity, you cannot add more items");this.storage.push(t)}pop(){return this.storage.pop()}get(t){return this.storage[t]}peek(){return this.storage[this.size()-1]}size(){return this.storage.length}empty(){return this.storage.length==0}clear(){this.storage=[]}}class ue{items;constructor(t){t!=null?this.items=new Array(t):this.items=new Array}size(){return this.items.length}set(t,e){this.items[t]=e}setItems(t){t.forEach(e=>{this.items.push(e)})}add(t){this.items.push(t)}addAll(t){this.items.concat(t.items)}get(t){return this.items[t]}remove(t){const e=this.items.indexOf(t);return e==-1?!1:(this.items.splice(e,1),!0)}removeByIndex(t){const e=this.items[t];return this.items.splice(t,1),e}contains(t){return this.items.includes(t)}indexOf(t){return this.items.indexOf(t)}toArray(){return this.items}clear(){this.items.splice(0,this.items.length)}toString(){return`[${this.items.toString()}]`}toJSON(){return{values:this.items}}[Symbol.iterator](){return this.items.values()}}class le{_elements;[Symbol.toStringTag]="OrderedIntegerSet";constructor(t){t===void 0?this._elements=[]:t instanceof le?this._elements=[...t._elements]:this._elements=[t]}static fromArray(t){const e=new le;return e.addAllArray(t),e}clone(){return new le(this)}get size(){return this._elements.length}isEmpty(){return this._elements.length===0}add(t){for(let e=0;e<this._elements.length;e++){if(this._elements[e]==t)return!1;if(this._elements[e]>t)return this._elements.splice(e,0,t),!0}return this._elements.push(t),!0}first(){return this._elements.length==0?-1:this._elements[0]}contains(t){return this._elements.includes(t)}has(t){return this._elements.includes(t)}delete(t){for(let e=0;e<this._elements.length;e++)if(this._elements[e]===t)return this._elements.splice(e,1),!0;return!1}clear(){this._elements.length=0}addAll(t){const e=this._elements.length;if(this._elements[this._elements.length-1]<t._elements[0])return this._elements.push(...t._elements),e!=this._elements.length;let s=0,n=0;const r=[];for(;s<this._elements.length||n<t._elements.length;){if(s==this._elements.length){for(;n<t._elements.length;)r.push(t._elements[n++]);break}if(n==t._elements.length){for(;s<this._elements.length;)r.push(this._elements[s++]);break}this._elements[s]==t._elements[n]?(r.push(this._elements[s]),s++,n++):this._elements[s]<t._elements[n]?r.push(this._elements[s++]):r.push(t._elements[n++])}return this._elements=r,e!=this._elements.length}addAllArray(t){const e=this._elements.length;return t.forEach(s=>this.add(s)),e!=this._elements.length}intersection(t,e=!0){const s=this._elements.length,n=[];for(const r of t._elements)this.contains(r)&&n.push(r);return e?(this._elements=n,s!=this._elements.length):le.fromArray(n)}list(){return this._elements}length(){return this._elements.length}entries(){return this._elements.entries()}keys(){return this._elements.keys()}values(){return this._elements.values()}equals(t){const e=t._elements,s=this._elements;return s.length!==e.length?!1:s.every((n,r)=>n===e[r])}[Symbol.iterator](){return this._elements.values()}toJSON(){return{values:this._elements}}toString(){return`(${this._elements.toString()})`}}class we{_value;_parent;_children;constructor(t,e){this._value=t===void 0?null:t,this._parent=e===void 0?null:e,this._children=[]}add(t){return t.parent=this,this._children.push(t),t}get value(){return this._value}get parent(){return this._parent}get children(){return this._children}set value(t){this._value=t}set parent(t){this._parent=t}set children(t){this._children=t}toJSON(){return{value:this.value,children:this.children}}}class se extends Error{_position;constructor(t,e){super(t),e==null?this._position=-1:this._position=e,Object.setPrototypeOf(this,se.prototype)}get position(){return this._position}set position(t){this._position=t}toString(){return this.message+", em "+this._position}}class de extends se{constructor(t,e){e==null?super(t):super(t,e)}}class Te extends se{constructor(t,e){e==null?super(t):super(t,e)}}class G extends se{constructor(t,e){e==null?super(t):super(t,e)}}class Le extends Error{constructor(t){super(t)}}class pe{_id;_lexeme;_position;constructor(t,e,s){this._id=t,this._lexeme=e,this._position=s}get id(){return this._id}get lexeme(){return this._lexeme}get position(){return this._position}toString(){return this._id+"("+this._lexeme+")"}}class xe{static translateString(t){let e="";for(let s=0;s<t.length;s++){const n=t.charAt(s);switch(n){case'"':e+="&quot;";break;case"&":e+="&amp;";break;case"<":e+="&lt;";break;case">":e+="&gt;";break;default:e+=n}}return e}}class Ke{_fa;_input="";_position=0;_sensitive=!0;constructor(t,e){this._fa=t,this._sensitive=e}analyse(t){let e=0;for(let s=0;s<t.length;s++)if(e=this._fa.nextState(t.charAt(s),e),e<=0)return-1;return this._fa.tokenForState(e)}setInput(t){this._input=t,this._position=0}nextToken(){if(!this.hasInput())return null;const t=this._position;let e=0,s=0,n=-1,r=-1,i=-1,o=-1;for(;this.hasInput()&&(s=e,e=this._fa.nextState(this.nextChar(),e),!(e<0));)this._fa.tokenForState(e)>=0&&(n=e,r=this._position),this._fa.isContext(e)&&(i=e,o=this._position);if(n<0||n!=e&&this._fa.tokenForState(s)==-2)throw new de(this._fa.getError(s),t);i!=-1&&this._fa.getOrigin(n)==i&&(r=o),this._position=r;let a=this._fa.tokenForState(n);if(a==0)return this.nextToken();{const l=this._input.substring(t,r);return a=this.lookupToken(a,l),new pe(a,l,t)}}lookupToken(t,e){let s=this._fa.getSpecialCasesIndexes()[t][0],n=this._fa.getSpecialCasesIndexes()[t][1]-1;for(this._sensitive||(e=e.toUpperCase());s<=n;){const r=Math.floor((s+n)/2),i=this.compareValues(this._fa.specialCases[r].key,e);if(i==0)return this._fa.specialCases[r].value;i<0?s=r+1:n=r-1}return t}hasInput(){return this._position<this._input.length}nextChar(){return this.hasInput()?this._input.charAt(this._position++):"￿"}compareValues(t,e){const s=Math.min(t.length,e.length);for(let n=0;n<s;n++){const r=t.charCodeAt(n),i=e.charCodeAt(n);if(r!=i)return r-i}return t.length-e.length}}class Ht{key;value;constructor(t,e){this.key=t,this.value=e}toString(){return"["+this.key+"->"+this.value+"]"}}class yn{_transitions;_finals;_context;_alphabet;_tokenNames;_errors=[];_hasContext=!1;_specialCasesIndexes;_specialCases;constructor(t,e,s,n,r,i,o,a){this._alphabet=t,this._transitions=e,this._finals=s,this._context=i,this._specialCasesIndexes=n,this._specialCases=r,this._tokenNames=o;for(const l of i)if(l[0]==1){this._hasContext=!0;break}this.buildErrors(),this.checkSpecialCases(a)}checkSpecialCases(t){const e=new Ke(this,t);for(let s=0;s<this._specialCasesIndexes.length;s++){const n=this._specialCasesIndexes[s];for(let r=n[0];r<n[1];r++)if(e.analyse(this._specialCases[r].key)!=s)throw new Te('O valor "'+this._specialCases[r].key+`" não é válido como caso especial de '`+this._tokenNames.get(s-2)+"', na definição de '"+this._tokenNames.get(this._specialCases[r].value-2)+"'")}}nextState(t,e){const s=this._transitions.get(e).get(t);return s??-1}tokenForState(t){return t<0||t>=this._finals.length?-1:this._finals[t]}finalStatesFromState(t){const e=new Set;e.add(t);let s=!0;for(;s;){s=!1;for(const r of e){for(const i of this._alphabet.list()){const o=String.fromCodePoint(i),a=this.nextState(o,r);if(a!=-1&&!e.has(a)){e.add(a),s=!0;break}}if(s)break}}const n=new Set;for(const r of e)this.tokenForState(r)>=0&&n.add(r);return n}tokensFromState(t){const e=this.finalStatesFromState(t),s=new Set;for(const n of e){const r=this.tokenForState(n);r>=0&&s.add(r)}return s}buildErrors(){this._errors=[],this._errors[0]="Caractere não esperado";for(let t=1;t<this._transitions.size();t++)if(this.tokenForState(t)>=0)this._errors[t]="";else{const e=this.tokensFromState(t);let s="Erro identificando ";for(const n of e)n>0?s+=this._tokenNames.get(n-2):s+="<ignorar>",s+=" ou ";s=s.substring(0,s.length-4),this._errors[t]=s.toString()}}get transitions(){return this._transitions}get tokens(){return this._tokenNames}get specialCases(){return this._specialCases}get errors(){return this._errors}getError(t){const e=this._errors[t];if(e!=null)return e;throw Error("Sem erros")}getSpecialCasesIndexes(){return this._specialCasesIndexes}isContext(t){return this._context[t][0]==1}getOrigin(t){return this._context[t][1]}hasContext(){return this._hasContext}translateString(t){let e="";for(let s=0;s<t.length;s++){const n=t.charAt(s);switch(n){case'"':e+="&quot;";break;case"&":e+="&amp;";break;case"<":e+="&lt;";break;case">":e+="&gt;";break;default:e+=n}}return e}asHTML(){let t="";t+='<HTML><HEAD><TITLE> Tabela de Transições </TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',t+='<TR align=center><TD rowspan="2" bgcolor=black><FONT color=white><B>ESTADO</B></FONT></TD><TD rowspan="2" bgcolor=black><FONT color=white><B>TOKEN<BR>RETORNADO</B></FONT></TD><TD colspan="'+this._alphabet.size+'" bgcolor=black><FONT color=white><B>ENTRADA</B></FONT></TD></TR><TR align=center>';for(const e of this._alphabet.list()){const s=this.escapeSpecialCharacters(String.fromCodePoint(e));t+="<TD bgcolor=#99FF66 nowrap><B>"+this.translateChar(s)+"</B></TD>"}t+="</TR>";for(let e=0;e<this._transitions.size();e++){t+="<TR align=center><TD bgcolor=#99FF66><B>"+e+"</B></TD>";const s=this._finals[e];let n=null;if(s>0){n==null&&(n="#FFFFCC");let i=xe.translateString(this._tokenNames.get(s-2));this.getOrigin(e)>=0&&(i+=" / "+this.getOrigin(e)),t+="<TD bgcolor="+n+" nowrap>"+i+"</TD>"}else s==0?(n==null&&(n="#99CCFF"),t+="<TD bgcolor="+n+"><B>:</B></TD>"):s==-2?t+="<TD bgcolor=#FF0000>?</TD>":(n==null&&(n="#FFCC99"),t+="<TD bgcolor="+n+">?</TD>");const r=this._transitions.get(e);for(const i of this._alphabet.list()){t+="<TD width=40 bgcolor=#F5F5F5>";const o=r.get(String.fromCodePoint(i));o!=null&&o>=0?t+=o:t+="-",t+="</TD>"}t+="</TR>"}return t+="</TABLE></FONT></BODY></HTML>",t}escapeSpecialCharacters(t){return t.replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\s/g,"' '")}translateChar(t){switch(t){case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case" ":return"' '";case'"':return"&quot;";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:{const e=t.charCodeAt(0);return e>=32&&e<=126||e>=161&&e<=255?t:e.toString()}}}}class L{scannerName="Lexical";parserName="Syntactic";semanticName="Semantic";pkgName="";generateScanner=!0;generateParser=!0;static LANG_JAVA=0;static LANG_CPP=1;static LANG_DELPHI=2;static LANG_PYTHON=3;static LANG_RUST=4;language=L.LANG_JAVA;static PARSER_LR=0;static PARSER_LALR=1;static PARSER_SLR=2;static PARSER_LL=3;static PARSER_REC_DESC=4;parser=L.PARSER_SLR;scannerCaseSensitive=!0;static SCANNER_TABLE_FULL=0;static SCANNER_TABLE_COMPACT=1;static SCANNER_TABLE_HARDCODE=2;scannerTable=L.SCANNER_TABLE_FULL;static INPUT_STREAM=0;static INPUT_STRING=1;input=L.INPUT_STRING;static DONT_USE_ASTLIB=!1;static USE_ASTLIB=!0;useASTLib=L.DONT_USE_ASTLIB;toString(){let t="";switch(t+="GenerateScanner = "+this.generateScanner,t+=`
GenerateParser = `+this.generateParser,t+=`
Language = `,this.language){case L.LANG_CPP:t+="C++";break;case L.LANG_JAVA:t+="Java";break;case L.LANG_DELPHI:t+="Delphi";break;case L.LANG_PYTHON:t+="Python";break;case L.LANG_RUST:t+="Rust";break}if(t+=`
ScannerName = `+this.scannerName,this.generateParser&&(t+=`
ParserName = `+this.parserName,t+=`
SemanticName = `+this.semanticName),this.pkgName.length>0&&(t+=`
Package = `+this.pkgName),this.generateScanner){switch(t+=`
ScannerCaseSensitive = `+this.scannerCaseSensitive,t+=`
ScannerTable = `,this.scannerTable){case L.SCANNER_TABLE_FULL:t+="Full";break;case L.SCANNER_TABLE_COMPACT:t+="Compact";break;case L.SCANNER_TABLE_HARDCODE:t+="Hardcode";break}switch(t+=`
Input = `,this.input){case L.INPUT_STREAM:t+="Stream";break;case L.INPUT_STRING:t+="String";break}}if(this.generateParser)switch(t+=`
Parser = `,this.parser){case L.PARSER_LR:t+="LR";break;case L.PARSER_LALR:t+="LALR";break;case L.PARSER_SLR:t+="SLR";break;case L.PARSER_LL:t+="LL";break;case L.PARSER_REC_DESC:t+="RD";break}return t}extendedToString(){let t="";return t+="UseAstLib = "+(this.useASTLib?"true":"false"),t}constructorFromString(t){let e=new L;if(t===void 0)return e;const s=t.split(`
`);for(const n of s){const[r,i]=n.split("=");e.setOption(r.trim(),i.trim())}return e}expandFromString(t){const e=t.split(`
`);for(const s of e){if(s=="")continue;const[n,r]=s.split("=");this.setOption(n.trim(),r.trim())}}setOption(t,e){if(t.toUpperCase()==="GenerateScanner".toUpperCase())this.generateScanner=/true/i.test(e);else if(t.toUpperCase()==="GenerateParser".toUpperCase())this.generateParser=/true/i.test(e);else if(t.toUpperCase()==="Language".toUpperCase())if(e.toUpperCase()==="C++".toUpperCase())this.language=L.LANG_CPP;else if(e.toUpperCase()==="Java".toUpperCase())this.language=L.LANG_JAVA;else if(e.toUpperCase()==="Delphi".toUpperCase())this.language=L.LANG_DELPHI;else if(e.toUpperCase()==="Python".toUpperCase())this.language=L.LANG_PYTHON;else if(e.toUpperCase()==="Rust".toUpperCase())this.language=L.LANG_RUST;else throw new Error("Erro processando arquivo");else if(t.toUpperCase()==="ScannerName".toUpperCase())this.scannerName=e;else if(t.toUpperCase()==="ParserName".toUpperCase())this.parserName=e;else if(t.toUpperCase()==="SemanticName".toUpperCase())this.semanticName=e;else if(t.toUpperCase()==="Package".toUpperCase())this.pkgName=e;else if(t.toUpperCase()==="ScannerCaseSensitive".toUpperCase())this.scannerCaseSensitive=/true/i.test(e);else if(t.toUpperCase()=="ScannerTable".toUpperCase())if(e.toUpperCase()==="Full".toUpperCase())this.scannerTable=L.SCANNER_TABLE_FULL;else if(e.toUpperCase()==="Compact".toUpperCase())this.scannerTable=L.SCANNER_TABLE_COMPACT;else if(e.toUpperCase()==="Hardcode".toUpperCase())this.scannerTable=L.SCANNER_TABLE_HARDCODE;else throw new Error("Erro processando arquivo");else if(t.toUpperCase()==="Input".toUpperCase())if(e.toUpperCase()==="Stream".toUpperCase())this.input=L.INPUT_STREAM;else if(e.toUpperCase()==="String".toUpperCase())this.input=L.INPUT_STRING;else throw new Error("Erro processando arquivo");else if(t.toUpperCase()==="Parser".toUpperCase())if(e.toUpperCase()==="LR".toUpperCase())this.parser=L.PARSER_LR;else if(e.toUpperCase()==="LALR".toUpperCase())this.parser=L.PARSER_LALR;else if(e.toUpperCase()==="SLR".toUpperCase())this.parser=L.PARSER_SLR;else if(e.toUpperCase()==="LL".toUpperCase())this.parser=L.PARSER_LL;else if(e.toUpperCase()==="RD".toUpperCase())this.parser=L.PARSER_REC_DESC;else throw new Error("Erro processando arquivo");else if(t.toUpperCase()==="UseAstLib".toUpperCase())this.useASTLib=/true/i.test(e);else throw new Error("Erro processando arquivo")}}class Ce{lhs;rhs;grammar;constructor(t,e,s){this.grammar=t,this.lhs=e,this.rhs=s===void 0?[]:s}clone(){return new Ce(null,this.lhs,[...this.rhs])}get_lhs(){return this.lhs}clear_rhs(){this.rhs=[]}set_lhs(t){this.lhs=t}get_rhs(){return this.rhs}set_rhs(t,e){const s=this.rhs[t];return this.rhs[t]=e,s}add_rhs(t){return this.rhs.push(t),t}firstSymbol(){if(this.grammar==null)return-1;for(let t=0;t<this.rhs.length;t++)if(!this.grammar.isSemanticAction(this.rhs[t]))return this.rhs[t];return 0}setGrammar(t){this.grammar=t}getGrammar(){return this.grammar}toString(){if(this.grammar==null)return"error";const t=[];if(t.push(this.grammar.symbols[this.lhs]+" ::="),this.rhs.length===0)t.push(" "+ie.EPSILON_STR);else for(let e=0;e<this.rhs.length;e++)this.grammar.isSemanticAction(this.rhs[e])?t.push(" #"+(this.rhs[e]-this.grammar.FIRST_SEMANTIC_ACTION())):t.push(" "+this.grammar.symbols[this.rhs[e]]);return t.join("")}equals(t){if(this.lhs!==t.lhs)return!1;if(this.rhs.length!==t.rhs.length)return!1;for(let e=0;e<this.rhs.length;e++)if(this.rhs[e]!==t.rhs[e])return!1;return!0}static compareTo(t,e){if(t===null)return-1;if(t.lhs!==e.lhs)return t.lhs-e.lhs;{if(t.grammar===null)return-1;const s=t.grammar.isEpsilon(t.rhs),n=t.grammar.isEpsilon(e.rhs);if(s&&n)return 0;if(s)return 1;if(n)return-1;for(let r=0;r<t.rhs.length&&r<e.rhs.length;r++)if(t.rhs[r]!==e.rhs[r])return t.rhs[r]-e.rhs[r];return e.rhs.length-t.rhs.length}}}class ie{static EPSILON=0;static DOLLAR=1;static FIRST_TERMINAL=this.EPSILON+2;static EPSILON_STR="î";_symbols=[];FIRST_NON_TERMINAL=0;FIRST_SEMANTIC_ACTION(){return this._symbols.length}LAST_SEMANTIC_ACTION(){return this.FIRST_SEMANTIC_ACTION()+this.SEMANTIC_ACTION_COUNT}SEMANTIC_ACTION_COUNT=0;_startSymbol=0;firstSet=[];followSet=[];normalLR=!1;_productions=new ue;constructor(t,e,s,n){const r=[...t],i=[...e],o=new ue;s.toArray().forEach(l=>o.add(l.clone()));const a=n;this.setSymbols(r,i,a),this.setProductions(o),this.fillFirstSet(),this.fillFollowSet()}setSymbols(t,e,s){this._symbols=[],this.FIRST_NON_TERMINAL=t.length+2,this._symbols[ie.EPSILON]=ie.EPSILON_STR,this._symbols[ie.DOLLAR]="$";for(let n=0,r=ie.FIRST_TERMINAL;n<t.length;n++,r++)this._symbols[r]=t[n];for(let n=0,r=this.FIRST_NON_TERMINAL;n<e.length;n++,r++)this._symbols[r]=e[n];this._startSymbol=s}setProductions(t){t.toArray().forEach(s=>this._productions.add(s));let e=0;for(let s=0;s<this._productions.size();s++){this._productions.get(s).setGrammar(this);for(let n=0;n<this._productions.get(s).get_rhs().length;n++)this._productions.get(s).get_rhs()[n]>e&&(e=this._productions.get(s).get_rhs()[n])}this.SEMANTIC_ACTION_COUNT=e-this.FIRST_SEMANTIC_ACTION(),this.SEMANTIC_ACTION_COUNT<0&&(this.SEMANTIC_ACTION_COUNT=-1)}isTerminal(t){return t<this.FIRST_NON_TERMINAL}isNonTerminal(t){return t>=this.FIRST_NON_TERMINAL&&t<this.FIRST_SEMANTIC_ACTION()}isSemanticAction(t){return t>=this.FIRST_SEMANTIC_ACTION()}get productions(){return this._productions}get symbols(){return this._symbols}get terminals(){return this.symbols.slice(2,this.FIRST_NON_TERMINAL)}get nonTerminals(){return this.symbols.slice(this.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION())}get startSymbol(){return this._startSymbol}asNormalLR(){if(this.normalLR)return this;const t=this.terminals,e=2+this.SEMANTIC_ACTION_COUNT,s=this.nonTerminals,n=[...s,...new Array(e)],r=new ue(0);r.setItems(this._productions.toArray());for(let a=0;a<this.SEMANTIC_ACTION_COUNT+1;a++)n[s.length+a]="<#"+a+">",r.add(new Ce(null,this.FIRST_SEMANTIC_ACTION()+a,[]));n[n.length-1]="<-START->";const i=new Ce(null,this.FIRST_SEMANTIC_ACTION()+e-1,[this.startSymbol]);r.add(i);const o=new ie(t,n,r,this.FIRST_SEMANTIC_ACTION()+e-1);return o.normalLR=!0,o}createProduction(t,e){if(e===void 0)return new Ce(this,t,[]);const s=new Ce(this,t,e);for(let n=0;n<this._productions.size();n++)if(this._productions.get(n).equals(s))return null;return s}isEpsilon(t,e){e===void 0&&(e=0);for(let s=e;s<t.length;s++)if(!this.isSemanticAction(t[s]))return!1;return!0}markEpsilon(){const t=new le;for(let s=0;s<this._productions.size();s++){const n=this._productions.get(s);this.isEpsilon(n.get_rhs())&&t.add(n.get_lhs())}for(let s=this.FIRST_SEMANTIC_ACTION();s<=this.LAST_SEMANTIC_ACTION();s++)t.add(s);let e=!0;for(;e;){e=!1;let s;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);s=!0;for(let i=0;i<r.get_rhs().length;i++)s=s&&t.has(r.get_rhs()[i]);s&&!t.has(r.get_lhs())&&(e=!0,t.add(r.get_lhs()))}}return t}static EMPTY_SET=new le(ie.EPSILON);first(t,e){if(!Array.isArray(t))return this.isSemanticAction(t)?ie.EMPTY_SET:this.firstSet[t];e===void 0&&(e=0);const s=new le;if(t.length-e==1&&t[e]==ie.DOLLAR&&s.add(ie.DOLLAR),this.isEpsilon(t,e))s.add(ie.EPSILON);else{const n=t.length;for(;this.isSemanticAction(t[e]);)e++;let r=this.first(t[e]).clone();r.delete(ie.EPSILON),s.addAll(r);let i=e;for(;i<n-1&&this.first(t[i]).has(ie.EPSILON);)i++,r=this.first(t[i]).clone(),r.delete(ie.EPSILON),s.addAll(r);i==n-1&&this.first(t[i]).has(ie.EPSILON)&&s.add(ie.EPSILON)}return s}fillFirstSet(){const t=this.markEpsilon();this.firstSet=new Array;for(let s=0;s<this._symbols.length;s++)this.firstSet[s]=new le;for(let s=this.FIRST_NON_TERMINAL;s<this.FIRST_SEMANTIC_ACTION();s++)t.has(s)&&this.firstSet[s].add(ie.EPSILON);for(let s=ie.FIRST_TERMINAL;s<this.FIRST_NON_TERMINAL;s++){this.firstSet[s].add(s);for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++){let r=!1;for(let i=0;i<this._productions.size();i++){const o=this._productions.get(i);if(o.get_lhs()==n&&!this.isEpsilon(o.get_rhs())&&o.firstSymbol()==s){r=!0;break}}r&&this.firstSet[n].add(s)}}let e;do{e=!1;for(let s=0;s<this._productions.size();s++){const n=this._productions.get(s),r=this.firstSet[n.get_lhs()].clone(),i=this.first(n.get_rhs());this.firstSet[n.get_lhs()].addAll(i),e||r.equals(this.first(n.get_lhs()))||(e=!0)}}while(e)}fillFollowSet(){this.followSet=new Array;for(let e=0;e<this._symbols.length;e++)this.followSet[e]=new le;this.followSet[this._startSymbol].add(ie.DOLLAR);let t;do{t=!1;for(let e=0;e<this._productions.size();e++){const s=this._productions.get(e);for(let n=0;n<s.get_rhs().length;n++)if(this.isNonTerminal(s.get_rhs()[n])){const r=this.first(s.get_rhs(),n+1),i=r.has(ie.EPSILON);if(s.get_rhs().length>n+1){r.delete(ie.EPSILON);const o=this.followSet[s.get_rhs()[n]].clone();this.followSet[s.get_rhs()[n]].addAll(r),!t&&!this.followSet[s.get_rhs()[n]].equals(o)&&(t=!0)}if(i){const o=this.followSet[s.get_rhs()[n]].clone();this.followSet[s.get_rhs()[n]].addAll(this.followSet[s.get_lhs()]),!t&&!this.followSet[s.get_rhs()[n]].equals(o)&&(t=!0)}}}}while(t)}stringFirstFollow(){let t="";for(let e=this.FIRST_NON_TERMINAL;e<this.firstSet.length;e++){let s="";s+=`FIRST( ${this.symbols[e]} ) = { `;for(let n=0;n<this.firstSet[e].size;n++)this.firstSet[e].list()[n]&&(s+=`${this.symbols[n]} `);s+="}",t=+s+`
`}for(let e=this.FIRST_NON_TERMINAL;e<this.followSet.length;e++){let s="";s+=`FOLLOW(${this.symbols[e]}) = { `;for(let n=0;n<this.followSet[e].size;n++)this.followSet[e].list()[n]&&(s+=this.symbols[n]+" ");s+="}",t+=s+`
`}return t}ffAsHTML(){let t="";t+='<HTML><HEAD><TITLE>First &amp; Follow</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',t+="<TR align=center><TD bgcolor=black><FONT color=white><B>SÍMBOLO</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FIRST</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FOLLOW</B></FONT></TD></TR>";for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++){t+="<TR align=center>",t+=`<TD nowrap bgcolor=#F5F5F5><B> ${xe.translateString(this.symbols[e])} </B></TD>`;let s="  ";this.firstSet[e].list().forEach(n=>s+=this.symbols[n]+", "),s=s.slice(0,-2),t+=`<TD nowrap bgcolor=#F5F5F5>${xe.translateString(s)}</TD>`,s="  ",this.followSet[e].list().forEach(n=>s+=this.symbols[n]+", "),s=s.slice(0,-2),t+=`<TD nowrap bgcolor=#F5F5F5>${xe.translateString(s)}</TD>`,t+="</TR>"}return t+="</TABLE></FONT></BODY></HTML>",t}removeImproductiveSymbols(){const t=this.getProductiveSymbols();this.updateSymbols(t)}removeUselessSymbols(){this.removeImproductiveSymbols(),this.removeUnreachableSymbols()}removeRepeatedProductions(){}productionsFor(t){const e=new le;for(let s=0;s<this.productions.size();s++)this.productions.get(s).get_lhs()==t&&e.add(s);return e}transformToFindRecursion(t){const e=new ue;t.toArray().forEach(s=>e.add(s));for(let s=this.FIRST_NON_TERMINAL;s<this.FIRST_SEMANTIC_ACTION();s++)for(let n=this.FIRST_NON_TERMINAL;n<s;n++)for(let r=0;r<e.size();r++){const i=e.get(r);if(i.get_lhs()==s&&i.firstSymbol()==n){e.toArray().splice(r,1),r--;const o=[];for(let a=0;a<i.get_rhs().length&&this.isSemanticAction(i.get_rhs()[a]);a++)o.push(i.get_rhs()[a]);for(let a=0;a<e.size();a++){const l=e.get(a);if(l.get_lhs()==n){const m=new Array(l.get_rhs().length+i.get_rhs().length-1);let c=0;for(;c<o.length;c++)m[c]=o[c];let f=c;for(c=0;c<l.get_rhs().length;c++)m[c+f]=l.get_rhs()[c];for(f=f+c-(o.length+1),c=o.length+1;c<i.get_rhs().length;c++)m[c+f]=i.get_rhs()[c];const u=this.createProduction(i.get_lhs(),m);u!=null&&e.add(u)}}}}return e}removeRecursion(){this._productions=this.transformToFindRecursion(this._productions),this.removeDirectRecursion()}removeDirectRecursion(){for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++){let e=this.productionsFor(t);const s=this.productionsFor(t);let n=-1;const r=e.list();for(let i=0;i<r.length;i++){const o=r[i];this._productions.get(o).get_lhs()!=this._productions.get(o).firstSymbol()&&r.splice(i,1)}if(e=new le,e.addAllArray(r),e.size>0){n=this.createSymbol(this.addTail(this._symbols[t]));for(const i of s){const o=this._productions.get(i);e.list()[i]?(o.get_rhs().splice(0,1),o.get_rhs().push(n),o.set_lhs(n)):o.get_rhs().push(n)}}if(n!=-1){const i=this.createProduction(n);i!=null&&this.productions.add(i)}}this.fillFirstSet(),this.fillFollowSet(),this.sort()}createSymbol(t){for(const s of this._productions){const n=s.get_rhs();for(let r=0;r<n.length;r++)this.isSemanticAction(n[r])&&n.push(r,n[r]+1)}let e=new Array(this._symbols.length+1);return e=[...this._symbols],this._symbols=e,this._symbols[this._symbols.length-1]=t,this._symbols.length-1}derives(t,e){if(t==e)return!0;const s=new le;s.add(e);for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)for(const r of s)if(this.derivesDirectly(n,r)&&!s.list()[n]){s.add(n),n=-1;continue}return s.list()[t]!=0}derivesDirectly(t,e){const s=this.markEpsilon();for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);if(r.get_lhs()==t)if(r.get_rhs().length==1){if(r.get_rhs()[0]==e)return!0}else{const i=r.get_rhs();for(let o=0;o<i.length;o++)if(i[o]==e){let a=!0;for(let l=0;l<o;l++)s.list()[i[l]]||(a=!1);for(let l=o+1;l<i.length;l++)s.list()[i[l]]||(a=!1);if(a)return!0}}}return!1}removeUnitaryProductions(){const t=new ue;for(let s=0;s<this._productions.size();s++){const n=this._productions.get(s);(n.get_rhs().length!=1||n.get_rhs()[0]!=n.get_lhs())&&t.add(n)}const e=[];for(let s=this.FIRST_NON_TERMINAL;s<e.length;s++){e[s]=new le;for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)this.derives(s,n)&&e[s].add(n)}this._productions=new ue;for(let s=0;s<t.size();s++){const n=t.get(s);if(n.get_rhs().length!=1||!this.isNonTerminal(n.get_rhs()[0])){for(let r=this.FIRST_NON_TERMINAL;r<e.length;r++)if(e[r].list()[n.get_lhs()]){const i=this.createProduction(r,n.get_rhs());i!=null&&this._productions.add(i)}}}this.sort()}removeEpsilon(){const t=this.markEpsilon(),e=new ue;for(let s=0;s<this._productions.size();s++){const n=this._productions.get(s);if(!this.isEpsilon(n.get_rhs())){let r=!0;for(let i=0;i<n.get_rhs().length;i++)r=r&&t.list()[n.get_rhs()[i]]!=0;r||e.add(n)}}for(let s=0;s<e.size();s++){const n=e.get(s);if(!this.isEpsilon(n.get_rhs())){let r=0;for(;r<n.get_rhs().length;){for(;r<n.get_rhs().length&&!(!this.isSemanticAction(n.get_rhs()[r])&&t.list()[n.get_rhs()[r]]);r++);if(r<n.get_rhs().length){const i=this.derivationAt(n,r);i!=null&&!e.contains(i)&&e.add(i),r++}}}}if(t.list()[this._startSymbol]){const s=this.createSymbol(this.addTail(this._symbols[this._startSymbol]));let n=this.createProduction(s,new Array(this._startSymbol));n!=null&&e.add(n),n=this.createProduction(s),n!=null&&e.add(n),this._startSymbol=s,this.fillFirstSet(),this.fillFollowSet()}this._productions=e,this.sort()}derivationAt(t,e){let s=new Array;for(let r=0;r<this._productions.size();r++)if(this._productions.get(r).get_lhs()==t.get_rhs()[e]&&this.isEpsilon(this._productions.get(r).get_rhs())){s=this._productions.get(r).get_rhs();break}const n=new Array;for(let r=0;r<e;r++)n.push(t.get_rhs()[r]);for(let r=0;r<s.length;r++)n.push(s[r]);for(let r=e+1;r<t.get_rhs().length;r++)n.push(t.get_rhs()[r]);return this.createProduction(t.get_lhs(),n)}addTail(t){t=t.substring(0,t.length-1)+"_T>";for(let e=0;e<this._symbols.length;e++)this._symbols[e]!=null&&this._symbols[e]==t&&(t=t.substring(0,t.length-1)+"_T>",e=0);return t}sort(){for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++){const s=this._symbols[e].substring(0,this._symbols[e].length-1)+"_T>";let n=e+1;for(;n<this.FIRST_SEMANTIC_ACTION()&&this._symbols[n]!=s;n++);if(n<this.FIRST_SEMANTIC_ACTION()){const r=e+1,i=n;r!=i&&this.moveSymbol(i,r)}}this.moveSymbol(this._startSymbol,this.FIRST_NON_TERMINAL);const t=this._productions.toArray().sort(Ce.compareTo);this._productions.clear(),t.forEach(e=>this._productions.add(e))}moveSymbol(t,e){const s=this._symbols[t];for(let n=t;n>e;n--)this._symbols[n]=this._symbols[n-1];this._symbols[e]=s,this._startSymbol==t?this._startSymbol=e:this._startSymbol>=e&&this._startSymbol<t&&this._startSymbol++;for(const n of this._productions){n.get_lhs()==t?n.set_lhs(e):n.get_lhs()>=e&&n.get_lhs()<t&&n.set_lhs(n.get_lhs()+1);const r=n.get_rhs();for(let i=0;i<r.length;i++)r[i]==t?r.push(i,e):r[i]>=e&&r[i]<t&&r.push(i,r[i]+1)}}isLL(){return this.isFactored()&&!this.hasLeftRecursion()&&this.passThirdCondition()}hasLeftRecursion(){const t=this.transformToFindRecursion(this._productions);for(let e=0;e<t.size();e++)if(t.get(e).get_lhs()==t.get(e).firstSymbol())return!0;return!1}getLeftRecursiveSimbol(){const t=this.transformToFindRecursion(this._productions);for(let e=0;e<t.size();e++)if(t.get(e).get_lhs()==t.get(e).firstSymbol())return t.get(e).get_lhs();return-1}getNonFactoratedProductions(){const t=new le;for(let e=0;e<this._productions.size();e++){const s=this._productions.get(e);for(let n=e+1;n<this.productions.size();n++){const r=this._productions.get(n);if(s.get_lhs()==r.get_lhs()){const i=this.first(s.get_rhs());i.intersection(this.first(r.get_rhs())),i.isEmpty()||(t.add(e),t.add(n))}}if(t.size>0)break}return t}isFactored(){for(let t=0;t<this._productions.size();t++){const e=this._productions.get(t);for(let s=t+1;s<this._productions.size();s++){const n=this.productions.get(s);if(e.get_lhs()==n.get_lhs()){const r=this.first(e.get_rhs());if(r.intersection(this.first(n.get_rhs())),!r.isEmpty())return!1}}}return!0}passThirdCondition(){const t=this.markEpsilon();for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++)if(t.has(e)){const s=new le(this.firstSet[e]);if(s.intersection(this.followSet[e]),!s.isEmpty())return!1}return!0}getProductiveSymbols(){const t=new le;for(let s=ie.FIRST_TERMINAL;s<this.FIRST_NON_TERMINAL;s++)t.add(s);for(let s=this.FIRST_SEMANTIC_ACTION();s<=this.LAST_SEMANTIC_ACTION();s++)t.add(s);t.add(ie.EPSILON);let e;do{e=!1;const s=new le;for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)if(!t.has(n))for(let r=0;r<this._productions.size();r++){const i=this._productions.get(r);if(i.get_lhs()==n){let o=!0;for(let a=0;a<i.get_rhs().length;a++)o=o&&t.has(i.get_rhs()[a]);o&&(s.add(n),e=!0)}}t.addAll(s)}while(e);return t}removeUnreachableSymbols(){const t=this.getReachableSymbols();this.updateSymbols(t)}getReachableSymbols(){const t=new le;t.add(this._startSymbol);let e;do{e=!1;const s=new le;for(let n=0;n<this._symbols.length;n++)if(!t.has(n))for(let r=0;r<this.productions.size();r++){const i=this._productions.get(r);if(t.has(i.get_lhs())){for(let o=0;o<i.get_rhs().length;o++)if(i.get_rhs()[o]==n){s.add(n),e=!0;break}}}t.addAll(s)}while(e);return t}uselessSymbolsHTML(){const t=this.clone();try{t.removeUselessSymbols()}catch(i){console.warn(i)}const e=t.symbols,s=new le;for(let i=2;i<this._symbols.length;i++)for(let o=0;o<e.length;o++)if(e[o]==this._symbols[i]){s.add(i);break}let n="";n+='<HTML><HEAD><TITLE>Símbolos inúteis</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif">';let r=0;for(let i=2;i<this._symbols.length;i++)s.has(i)||(n+=this._symbols[i]+"<br>",r++);return r==0&&(n+="Não há símbolos inúteis"),n+="</TABLE></FONT></BODY></HTML>",n}setToStr(t){let e="{ ";for(let s=0;s<t.size;s++)t.list()[s]&&(e+='"'+this._symbols[s]+'" ');return e+="}",e}factorate(){if(this.hasLeftRecursion())throw Error("new LeftRecursionException();");let t=!0;for(;t;){t=!1;for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++)t=t||this.factorateLeft(e)}}factorateLeft(t){let e=!1;const s=this.productionsFor(t);let n=new le;const r=this.conflict(s,n);if(!n.isEmpty()){e=!0;for(let m=0;m<this._productions.size();m++){const c=this._productions.get(m);if(c.get_lhs()==t&&this.first(c.get_rhs()).list()[r]&&c.firstSymbol()!=r){const f=this.leftMostDerive(c);this._productions.toArray().splice(m,1),f.toArray().forEach(u=>this._productions.add(u)),m--,this.fillFirstSet(),this.fillFollowSet()}}n=new le;for(let m=0;m<this._productions.size();m++){const c=this._productions.get(m);c.get_lhs()==t&&c.firstSymbol()==r&&n.add(m)}const i=this.createSymbol(this.addTail(this._symbols[t])),o=this.extractPrefix(n);for(const m of n.list()){const c=this._productions.get(m);c.set_lhs(i),c.get_rhs().length>o.length?c.get_rhs().splice(0,o.length):c.clear_rhs()}const a=new Array;a.push(...o),a.push(i);const l=this.createProduction(t,a);l!=null&&this._productions.add(l),this.fillFirstSet(),this.fillFollowSet(),this.sort()}return e}leftMostDerive(t){if(this.isTerminal(t.firstSymbol()))return new ue;{const e=new ue,s=t.firstSymbol(),n=new Array;for(let r=0;r<t.get_rhs().length&&this.isSemanticAction(t.get_rhs()[r]);r++)n.push(t.get_rhs()[r]);for(const r of this.productionsFor(s).list()){const i=this.productions.get(r),o=new Array;for(let l=0;l<n.length;l++)o.push(n[l]);for(let l=0;l<i.get_rhs().length;l++)o.push(i.get_rhs()[l]);for(let l=n.length+1;l<t.get_rhs().length;l++)o.push(t.get_rhs()[l]);const a=this.createProduction(t.get_lhs(),o);a!=null&&!e.contains(a)&&e.add(a)}return e}}extractPrefix(t){const e=new Array;let s,n=0;do{s=!0;let r=0;const i=this._productions.get(r);if(i.get_rhs().length>n){const o=i.get_rhs()[n];for(;r>t.size;r++){const a=this.productions.get(r);(a.get_rhs().length<=n||a.get_rhs()[n]!=o)&&(s=!1)}s&&(e.push(i.get_rhs()[n]),n++)}else s=!1}while(s);return e}conflict(t,e){const s=new Array(this._symbols.length);for(let i=0;i<s.length;i++)s[i]=0;for(const i of t){const o=this._productions.get(i);for(const a of this.first(o.get_rhs()))s[a]++}s[ie.EPSILON]=0,s[ie.DOLLAR]=0;let n=0,r=0;for(let i=0;i<s.length;i++)s[i]>n&&(n=s[i],r=i);if(n>1)for(const i of t)this.first(this._productions.get(i).get_rhs()).list()[r]&&e.add(i);return r}toString(){let t="",e="",s=!0;for(let n=0;n<this.productions.size();n++){const r=this._productions.get(n);if(this._symbols[r.get_lhs()]!=e)s||(t+=`;

`),s=!1,e=this._symbols[r.get_lhs()],t+=e+" ::=";else{t+=`
`;for(let i=0;i<e.length;i++)t+=" ";t+="   |"}if(r.get_rhs().length==0)t+=" "+ie.EPSILON_STR;else for(let i=0;i<r.get_rhs().length;i++)if(t+=" ",this.isSemanticAction(r.get_rhs()[i])){const o=r.get_rhs()[i]-this.FIRST_SEMANTIC_ACTION();t+="#"+o}else{const o=this._symbols[r.get_rhs()[i]];t+=o}}return t+=`;
`,t}clone(){try{const t=structuredClone(this),e=new Array(this.FIRST_NON_TERMINAL-2),s=new Array(this.FIRST_SEMANTIC_ACTION()-this.FIRST_NON_TERMINAL);for(let r=0;r<e.length;r++)e[r]=this._symbols[r+2].toString();for(let r=0;r<s.length;r++)s[r]=this._symbols[r+this.FIRST_NON_TERMINAL].toString();const n=new ue;for(let r=0;r<this._productions.size();r++){const i=new Array(this._productions.get(r).get_rhs().length);for(let o=0;o<i.length;o++)i[o]=this._productions.get(r).get_rhs()[o];n.add(new Ce(null,this._productions.get(r).get_lhs(),i))}return t.setSymbols(e,s,this._startSymbol),t.setProductions(n),t.fillFirstSet(),t.fillFollowSet(),t}catch(t){throw console.warn(t),new Error("Internal Error")}}removeSymbol(t){this._symbols.splice(t,1),this._startSymbol>t&&this._startSymbol--,this.FIRST_NON_TERMINAL>t&&this.FIRST_NON_TERMINAL--;for(let e=0;e<this._productions.size();e++){const s=this.productions.get(e);if(s.get_lhs()==t){this.productions.toArray().splice(e,1);continue}else s.get_lhs()>t&&s.set_lhs(s.get_lhs()-1);for(let n=0;n<s.get_rhs().length;n++){if(s.get_rhs()[n]==t){this.productions.toArray().splice(e,1);break}s.get_rhs()[n]>t&&s.set_rhs(n,s.get_rhs()[n]-1)}}}updateSymbols(t){t.add(ie.EPSILON),t.add(ie.DOLLAR);let e=0;for(let s=0;s<this._symbols.length;s++)t.list()[s]||(this.removeSymbol(s-e),e++);this.fillFirstSet(),this.fillFollowSet()}id_for_production(t){return this._productions.contains(t)?this._productions.indexOf(t):null}production_for_id(t){return this._productions.get(t)}}class te{parameter;type;constructor(t,e){this.type=t,this.parameter=e}static SHIFT=0;static REDUCE=1;static ACTION=2;static ACCEPT=3;static GOTO=4;static ERROR=5;static CONSTANTS=["SHIFT ","REDUCE","ACTION","ACCEPT","GO_TO ","ERROR "];getType(){return this.type}getParameter(){return this.parameter}static createShift(t){return new te(te.SHIFT,t)}static createReduce(t){return new te(te.REDUCE,t)}static createAction(t){return new te(te.ACTION,t)}static createAccept(){return new te(te.ACCEPT,0)}static createGoTo(t){return new te(te.GOTO,t)}static createError(){return new te(te.ERROR,0)}toString(){switch(this.type){case te.SHIFT:return"SHIFT("+this.parameter+")";case te.REDUCE:return"REDUCE("+this.parameter+")";case te.ACTION:return"SEM.ACT("+this.parameter+")";case te.ACCEPT:return"ACCEPT";case te.GOTO:return""+this.parameter;case te.ERROR:return"-";default:return"???"}}equals(t){try{const e=t,s=this.type==e.type&&this.parameter==e.parameter;return s===void 0?!1:s}catch(e){return console.warn(e),!1}}hashCode(){let t=43;return t=t*this.parameter+17,t=t*this.type+17,t}}class qt{conflictList=new ue;constructor(){}}let Rn=0;const ut=new Map;function Cn(N,t){return new Promise(e=>{const s=Rn++;ut.set(s,e),self.postMessage({type:"rpc_request",id:s,method:N,payload:t})})}function Gt(){self.addEventListener("message",N=>{const t=N.data;if(t.type==="rpc_response"){const e=ut.get(t.id);e&&(ut.delete(t.id),e(t.result))}})}function vn(N,t){return window.prompt(N,t)}async function Wt(N,t){return typeof window<"u"&&typeof window.document<"u"?Promise.resolve(vn(N,t)):Cn("prompt",{text:N,defaultValue:t})}Gt();class In extends qt{_conflict;_state;_conflictListModel;constructor(t,e){super(),this._conflict=t===void 0?[]:t,this._state=e===void 0?-1:e,this._conflictListModel=new Array}async resolve(t,e){let s;e==0?s="$":s=t.terminals[e-1];let n="";n+="- O estado no topo da pilha é: "+this._state+`
`,n+="- O símbolo da entrada é: "+s+`
`,n+=`
Qual ação a ser executada:`,this._conflictListModel=[];for(let o=0;o<this._conflict.length;o++){let a;switch(this._conflict[o].getType()){case te.REDUCE:a="Reduzir, pela produção "+this._conflict[o].getParameter();break;case te.ACTION:a="Executar ação semântica "+this._conflict[o].getParameter();break;case te.SHIFT:a='Empilhar "'+s+'"';break;default:a=this._conflict[o].toString();break}n+=`
Opção `+(o+1)+": "+a,this._conflictListModel.push({label:a,command:o})}n+=`

OBS: Se cancelar ou digitar opção inválida,
a opção 1 será escolhida como padrão.`;let r=null;try{r=await Wt(n,"1")}catch(o){console.log(o,"Prompt não encontrado")}r==null&&(r="1");let i=Number(r);return isNaN(i)||i<0||i>this._conflict.length?i=0:i--,this._conflictListModel[i].command}showModal(t,e,s,n,r){const i=document.getElementById("myModal"),o=document.getElementById("confirmBtn"),a=document.getElementById("cancelBtn");i.style.display="block",o.textContent=e,a.textContent=s,o.onclick=function(){i.style.display="none",n&&n()},a.onclick=function(){i.style.display="none",r&&r()}}showDialog(t,e){const s=document.createElement("dialog");s.style.padding="20px",s.innerHTML=`<p>${t}<p>`,e.forEach(n=>{const r=document.createElement("button");r.textContent=n.label,r.onclick=()=>{s.close(),document.body.removeChild(s)},s.appendChild(r),s.appendChild(document.createElement("br"))}),s.addEventListener("close",()=>{document.body.removeChild(s)}),document.body.appendChild(s),s.showModal()}setup(t,e){this._conflict=t,this._state=e}}class Me{_production;_position;_lookahead;_g;constructor(t,e,s){this._production=t,this._position=e,this._lookahead=s===void 0?0:s,this._g=t.getGrammar()}get position(){return this._position}get lookahead(){return this._lookahead}get production(){return this._production}equals(t){try{return t.production.equals(this._production)&&t.position==this._position&&this._lookahead==t.lookahead}catch(e){return console.warn(e),!1}}toString(){let t="";if(this._g==null)throw new G("Grammar to string is null");t+=this._g.symbols[this._production.get_lhs()]+" ::= ";for(let e=0;e<this._production.get_rhs().length&&e<this._position;e++){const s=this._production.get_rhs()[e];this._g.isSemanticAction(s)?t+="#"+(s-this._g.FIRST_SEMANTIC_ACTION())+" ":t+=this._g.symbols[s]+" "}t+="o ";for(let e=this._position;e<this._production.get_rhs().length;e++){const s=this._production.get_rhs()[e];this._g.isSemanticAction(s)?t+="#"+(s-this._g.FIRST_SEMANTIC_ACTION())+" ":t+=this._g?.symbols[s]+" "}return this._lookahead!=0&&(t+=", ",t+=this._g?.symbols[this._lookahead]),t.toString()}clone(){return new Me(this._production,this._position,this._lookahead)}compareTo(t){let e=Ce.compareTo(this._production,t.production);return e!=0?e:(e=this._position-t.position,e!=0?e:this._lookahead-t.lookahead)}}class Zt{g;itemList;semanticStart;firstSementicAction;lalrgotocache=new Map;itemListCollisionHashes;constructor(t){this.itemListCollisionHashes={},this.semanticStart=t.FIRST_SEMANTIC_ACTION(),this.firstSementicAction=t.FIRST_SEMANTIC_ACTION(),this.g=t.asNormalLR(),this.initCaches(),this.itemList=this.computeItems()}itemStringHash(t){let e="";for(const s of t)e+=s.toString()+":";return e}itemListAdd(t){let e=this.itemStringHash(t);this.itemListCollisionHashes[e]=!0,this.itemList.add(t)}itemListAddIfNotExists(t){let e=this.itemStringHash(t);this.itemListCollisionHashes[e]==!0&&(this.itemListCollisionHashes[e]=!0,this.itemList.add(t))}getLalrGotoCache(){return this.lalrgotocache}getErrors(t){const e=new ue;for(let s=0;s<t.length;s++){const n=new le;for(let a=1;a<this.g.FIRST_NON_TERMINAL;a++)t[s][a-1].getType()!=te.ERROR&&n.add(a);let r="";const i=n.size;let o=0;for(const a of n.list())a==1?r+="fim de sentença":r+=this.g.symbols[a],i-o==2?r+=" ou ":i-o>2&&(r+=", "),o++;e.add(r.toString())}return e}get grammar(){return this.g}get firstSemanticAction(){return this.firstSementicAction}async buildIntTable(){const t=await this.buildTable(),e=[];for(let s=0;s<t.length;s++){e[s]=[];for(let n=0;n<t[s].length;n++)e[s][n]=[],e[s][n][0]=t[s][n].getType(),e[s][n][1]=t[s][n].getParameter()}return e}async resolveConflicts(t){const e=[],s=te.createError();for(let n=0;n<t.length;n++){e[n]=[];for(let r=0;r<t[0].length;r++)switch(t[n][r].size){case 0:e[n][r]=s;break;case 1:e[n][r]=t[n][r].values().next().value;break;default:e[n][r]=await this.solve(t[n][r],n,r);break}}return e}async solve(t,e,s){const n=[];let r=0;for(const o of t)n[r]=o,r++;let i=!0;for(let o=1;o<n.length&&(i=i&&n[o-1].equals(n[o]),!!i);o++);if(i)return n[0];{const o=new In;return o.setup(n,e),n[await o.resolve(this.g,s)]}}async tableAsHTML(){let t="";t+='<HTML><HEAD><TITLE>Tabela SLR(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const e=await this.buildTable();t+="<TR>",t+="<TD  align=center rowspan=2 bgcolor=black nowrap><FONT color=white><B>ESTADO</B></FONT></TD>",t+="<TD  align=center colspan="+(this.g.FIRST_NON_TERMINAL-1)+" bgcolor=black nowrap><FONT color=white><B>AÇÃO</B></FONT></TD>",t+="<TD  align=center colspan="+(this.g.FIRST_SEMANTIC_ACTION()-this.g.FIRST_NON_TERMINAL)+" bgcolor=black nowrap><FONT color=white><B>DESVIO</B></FONT></TD>",t+="</TR>",t+="<TR>";for(let s=0;s<e[0].length-1;s++)t+="<TD  align=center bgcolor=black nowrap><FONT color=white><B>"+xe.translateString(this.g.symbols[s+1])+"</B></FONT></TD>";t+="</TR>";for(let s=0;s<e.length;s++){const n=e[s];t+="<TR>",t+="<TD bgcolor=black align=right nowrap><FONT color=white><B>"+s+"</B></FONT></TD>";for(let r=0;r<n.length-1;r++){const i=n[r];let o="";i!=null&&(o=i.toString());const a=r+1<this.g.FIRST_NON_TERMINAL?"#F5F5F5":"#E6E6E6";t+="<TD bgcolor="+a+" align=center nowrap>"+o+"</TD>"}t+="</TR>"}return t+="</TABLE></FONT></BODY></HTML>",t.toString()}itemsAsHTML(){let t="";t+='<HTML><HEAD><TITLE>Itens LR</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const e=this.itemList;t+="<TR>",t+="<TD  align=center bgcolor=black><FONT color=white><B>Estado</B></FONT></TD>",t+="<TD  align=center bgcolor=black><FONT color=white><B>Itens</B></FONT></TD>",t+="<TD  align=center bgcolor=black><FONT color=white><B>Desvio</B></FONT></TD>",t+="</TR>";for(let s=0;s<e.size();s++){const n=s%2==0?"#F5F5F5":"#E6E6E6",r=e.get(s);t+="<TR>",t+="<TD bgcolor="+n+" align=right rowspan="+r.size()+">"+s+"</TD>",t+="<TD bgcolor="+n+" nowrap>"+xe.translateString(r.get(0).toString())+"</TD>";let i=r.get(0),o=i.production;if(o.get_rhs().length>i.position){const a=o.get_rhs()[i.position],l=this.goTo(r,a),m=this.getIndexFromList(e,l);t+="<TD bgcolor="+n+" align=right>"+m+"</TD>"}else t+="<TD bgcolor="+n+" align=right>&nbsp</TD>";t+="</TR>";for(let a=1;a<r.size();a++){if(t+="<TR>",t+="<TD bgcolor="+n+" nowrap>"+xe.translateString(r.get(a).toString())+"</TD>",i=r.get(a),o=i.production,o.get_rhs().length>i.position){const l=o.get_rhs()[i.position],m=this.goTo(r,l),c=this.getIndexFromList(e,m);t+="<TD bgcolor="+n+" align=right>"+c+"</TD>"}else t+="<TD bgcolor="+n+" align=right>&nbsp</TD>";t+="</TR>"}t+="</TR>"}return t+="</TABLE></FONT></BODY></HTML>",t.toString()}getIndexFromList(t,e){const s=t.toArray(),n=e.toArray();for(let r=0;r<s.length;r++){const i=s[r];if(i.size()!==e.size())continue;const o=i.toArray();let a=!0;for(let l=0;l<o.length;l++){const m=o[l],c=n[l];if(!m.equals(c)){a=!1;break}}if(a)return r}return-1}canonize(t){let e=[];for(let n of t)e.push(`${this.g.id_for_production(n.production)}:${n.position}:${n.lookahead}`);return e=[...new Set(e)].sort(),e.join("|")}}class Ln extends Zt{constructor(t){super(t)}initCaches(){}closure(t){const e=new ue;e.setItems(t.toArray());for(let s=0;s<e.size();s++){const n=e.get(s),r=n.production;if(n.position<r.get_rhs().length){const i=r.get_rhs()[n.position];if(this.g.isNonTerminal(i)){const o=this.g.productionsFor(i);for(const a of o.list()){const l=new Me(this.g.productions.get(a),0);this.contains(e,l)||e.add(l)}}}}return e}contains(t,e){for(const s of t)if(e.equals(s))return!0;return!1}goTo(t,e){const s=new ue;for(const n of t.toArray()){const r=n.production;n.position<r.get_rhs().length&&r.get_rhs()[n.position]==e&&s.add(new Me(n.production,n.position+1))}return this.closure(s)}computeItems(){const t=new ue,s=this.g.productionsFor(this.g.startSymbol).first();t.add(new Me(this.g.productions.get(s),0));const n=new ue;n.add(this.closure(t));let r=!0;for(;r;)e:{r=!1;for(const i of n.toArray())for(let o=0;o<i.size();o++){const a=i.get(o),l=a.production;if(l.get_rhs().length>a.position){const m=this.goTo(i,l.get_rhs()[a.position]);if(m.size()!=0&&!this.containsList(n,m)){n.add(m),r=!0;break e}}}}return n}containsList(t,e){const s=e.toArray();for(const n of t){const r=n.toArray();if(r.length!==s.length)continue;let i=!0;for(let o=0;o<r.length;o++){const a=r[o],l=s[o];if(!a.equals(l)){i=!1;break}}if(i)return!0}return!1}async buildTable(){const t=[];for(let s=0;s<this.itemList.size();s++){t[s]=[];for(let n=0;n<this.g.symbols.length-1;n++)t[s][n]=new Map}for(let s=0;s<t.length;s++){const n=this.itemList.get(s);for(let r=0;r<n.size();r++){const i=n.get(r),o=i.production,a=o.get_rhs();if(a.length>i.position){const l=a[i.position],m=this.goTo(n,l);if(this.g.isTerminal(l)){const c=te.createShift(this.indexOfListLRItem(this.itemList,m));t[s][l-1].set(c.hashCode(),c)}else{const c=te.createGoTo(this.indexOfListLRItem(this.itemList,m));t[s][l-1].set(c.hashCode(),c)}}else{const l=o.get_lhs();if(l==this.g.startSymbol){const m=te.createAccept();t[s][0].set(m.hashCode(),m)}else{const m=this.g.followSet[l];for(const c of m.list()){let f;l<this.semanticStart?f=te.createReduce(this.g.productions.indexOf(o)):f=te.createAction(l-this.semanticStart),t[s][c-1].set(f.hashCode(),f)}}}}}const e=t.map(s=>s.map(n=>new Set(n.values())));return await this.resolveConflicts(e)}indexOfListLRItem(t,e){const s=e.toArray();for(let n=0;n<t.size();n++){const r=t.get(n).toArray();if(r.length!==s.length)continue;let i=!0;for(let o=0;o<r.length;o++){const a=r[o],l=s[o];if(!a.equals(l)){i=!1;break}}if(i)return n}return-1}}class Yt extends Zt{closurecache;constructor(t){super(t),this.initCaches()}initCaches(){this.closurecache==null&&(this.closurecache=new Map)}closure(t){this.initCaches();let e=this.canonize(t);if(this.closurecache.has(e))return this.closurecache.get(e);let s=t.toArray(),n=[...t];for(;n.length!=0;){let r=n.pop();const i=r.production;if(r.position<i.get_rhs().length){const o=i.get_rhs()[r.position];if(this.g.isNonTerminal(o)){const a=this.g.productionsFor(o);for(const l of a.list()){const m=this.g.productions.get(l),c=[];for(let u=r.position+1;u<i.get_rhs().length;u++)c.push(i.get_rhs()[u]);c.push(r.lookahead);const f=this.g.first(c);for(const u of f.list()){const _=new Me(m,0,u);this.contains(s,_)||(s.push(_),n.unshift(_))}}}}}return this.itemList==null&&(this.itemList=new ue),this.itemListAddIfNotExists(t),e=this.canonize(t),this.closurecache.set(e,t),t}goTo(t,e){const s=[];for(const i of t.toArray()){const o=i.production;i.position<o.get_rhs().length&&o.get_rhs()[i.position]==e&&s.push(new Me(i.production,i.position+1,i.lookahead))}const n=new ue;return n.setItems(s),this.closure(n)}computeItems(){const t=new ue,s=this.g.productionsFor(this.g.startSymbol).list()[0];t.add(new Me(this.g.productions.get(s),0,ie.DOLLAR));let n=this.closure(t);const r=new ue;r.add(n);let i=[n];for(;i.length!=0;){let o=i.pop();for(let a=0;a<o.size();a++){const l=o.get(a),m=l.production;if(m.get_rhs().length>l.position){const c=this.goTo(o,m.get_rhs()[l.position]);let f=this.containsList(r,c);c.size()!=0&&!f&&(r.add(c),i.unshift(c))}}}return r}contains(t,e){for(const s of t)if(e.equals(s))return!0;return!1}containsList(t,e){const s=e.toArray();for(const n of t){const r=n.toArray();if(r.length!==s.length)continue;let i=!0;for(let o=0;o<r.length;o++){const a=r[o],l=s[o];if(a.equals(l)==!1){i=!1;break}}if(i)return!0}return!1}async buildTable(){const t=[];for(let n=0;n<this.itemList.size();n++){t[n]=[];for(let r=0;r<this.g.symbols.length-1;r++)t[n][r]=new Map}for(let n=0;n<t.length;n++){const r=this.itemList.get(n);for(let i=0;i<r.size();i++){const o=r.get(i),a=o.production,l=a.get_rhs();if(l.length>o.position){const m=l[o.position],c=this.goTo(r,m);if(this.g.isTerminal(m)){const f=te.createShift(this.getIndexFromList(this.itemList,c));t[n][m-1].set(f.hashCode(),f)}else{const f=te.createGoTo(this.getIndexFromList(this.itemList,c));t[n][m-1].set(f.hashCode(),f)}}else{const m=a.get_lhs();if(m==this.g.startSymbol){const c=te.createAccept();t[n][0].set(c.hashCode(),c)}else{const c=o.lookahead;let f;m<this.semanticStart?f=te.createReduce(this.g.productions.indexOf(a)):f=te.createAction(m-this.semanticStart),t[n][c-1].set(f.hashCode(),f)}}}}const e=t.map(n=>n.map(r=>new Set(r.values())));return await this.resolveConflicts(e)}}class xn extends Yt{compress=!0;constructor(t){super(t)}initCaches(){super.initCaches()}core(t){const e=new Array;for(let s=0;s<t.length;s++){const n=t[s],r=new Me(n.production,n.position);this.contains(e,r)||e.push(r)}return e.sort((s,n)=>{let r=Ce.compareTo(s.production,n.production);return r!=0?r:(r=s.position-n.position,r!=0?r:s.lookahead-n.lookahead)}),new Set(e)}computeItems(){const t=super.computeItems();for(let e=0;e<t.size();e++){const s=t.get(e),n=this.core(s.toArray());for(let r=e+1;r<t.size();r++){const i=t.get(r),o=this.core(i.toArray());if(this.equals(n,o)){for(let a=0;a<i.size();a++){const l=i.get(a);s.contains(l)||s.add(l)}t.removeByIndex(r),r--}}}return this.compress=!0,t}goTo(t,e){const s=super.goTo(t,e);if(this.compress){const n=this.core(s.toArray());for(let r=0;r<this.itemList.size();r++){const i=this.itemList.get(r);if(this.equals(n,this.core(i.toArray())))return i}}return s}equals(t,e){if(t.size!==e.size)return!1;for(const s of t){let n=!1;for(const r of e)if(s.equals(r)){n=!0;break}if(!n)return!1}return!0}}class je{LRGeneratorFactory(){}static createGenerator(t,e){switch(e){case L.PARSER_SLR:return new Ln(t);case L.PARSER_LR:return new Yt(t);case L.PARSER_LALR:return new xn(t);default:return null}}}const Je=1,ht=2,Qe=3,et=4,ct=5,On=6,Pn=7,Dn=8,Fn=9,Mn=10,zn=11,Bn=12,Un=13,ve=14;let jn=class{_in="";_pos=0;_quote=!1;constructor(t){t==null?this.setInput(""):this.setInput(t)}setInput(t){this._in=t,this._pos=0}get position(){return this._pos}nextToken(){let t=this._pos;for(;this.hasMoreChars();){t=this._pos;let e=this.nextChar();if(this._quote)if(e=='"'){if(this.hasMoreChars()){if(e=this.nextChar(),e=='"')return new pe(ve,'"',this._pos-2);this._pos--}this._quote=!1;continue}else return this.createToken(ve,""+e);switch(e){case" ":case`
`:case"\r":case"	":continue;case'"':this._quote=!0;continue;case"|":return this.createToken(ht,"|");case"*":return this.createToken(Qe,"*");case"+":return this.createToken(et,"+");case"?":return this.createToken(ct,"?");case"(":return this.createToken(On,"(");case")":return this.createToken(Pn,")");case"[":return this.createToken(Dn,"[");case"]":return this.createToken(Fn,"]");case"^":return this.createToken(zn,"^");case".":return this.createToken(Mn,".");case"-":return this.createToken(Bn,"-");case"\\":return this.processesAdvChar();case"{":return this.processesDefinition();default:return this.createToken(ve,""+e)}}if(this._quote)throw new de(`Era esperado '"'`,t);return null}processesAdvChar(){return new pe(ve,""+this.getSpecialChar(),this._pos-1)}createToken(t,e){return new pe(t,e,this._pos-1)}getSpecialChar(){const t=this._pos;if(!this.hasMoreChars)throw new de("Era esperado um Caracter Especial",t);const e=this.nextChar();switch(e){case"b":return"\b";case"n":return`
`;case"f":return"\f";case"r":return"\r";case"e":return"\x1B";case"t":return"	";case"	":return"	";case"s":return" ";case" ":return" ";case'"':return'"';case"\\":return"\\";case"|":return"|";case"*":return"*";case"+":return"+";case"?":return"?";case"(":return"(";case")":return")";case"{":return"{";case"}":return"}";case"[":return"[";case"]":return"]";case".":return".";case"^":return"^";case"-":return"-";default:if(this.isNumber(e))return this.getCharByCode(e);throw new de("Caracter especial inválido: '"+e+"'",this._pos)}}getCharByCode(t){const e=this._pos-1;this.hasMoreChars()&&this.isNumber(this.nextChar())&&this.hasMoreChars()&&!this.isNumber(this.nextChar())&&this._pos--;const s=this._in.substring(e,this._pos),n=parseInt(s,10);if(n>255)throw new de("Valor decimal inválido (>255)",e);return String.fromCharCode(n)}processesDefinition(){let t="";const e=this._pos;let s="{";for(;this.hasMoreChars();){if(s=this.nextChar(),s==null)return null;if(s=="}")break;if(s!="_"&&!this.isLetterOrDigit(s))throw new de("Caracter inválido em uma definição: '"+s+"'",this._pos-1);t+=s}if(s!="}"&&!this.hasMoreChars())throw new de("Fim de expressão inesperado",this._pos);return new pe(Un,t.toString(),e)}hasMoreChars(){return this._pos<this._in.length}nextChar(){return this.hasMoreChars()?this._in.charAt(this._pos++):"￿"}isLetterOrDigit(t){return t.toLowerCase()!=t.toUpperCase()||t.charCodeAt(0)==170||t.charCodeAt(0)==186||this.isNumber(t)}isNumber(t){return typeof t!="string"||t.trim()===""?!1:!Number.isNaN(Number(t))}};class Vt{position=-1;nullable=!1;first=new le;last=new le}class he{_left;_right;_id=0;_value="";_backtrack=!0;_context=-1;_end=-1;_alphabet=new le;_metaData=new Vt;constructor(t,e,s){this._id=t,this._left=e,this._right=s,e!=null&&this.alphabet.addAll(e.alphabet),s!=null&&this.alphabet.addAll(s.alphabet)}deepestLeft(){let t=this;for(;;){let e=t.left;if(e==null&&(e=t.right),e==null)break;t=e}return t}static createUnionNode(t,e){const s=new he(ht,t,e);return s.value="|",s}static createConcatNode(t,e){const s=new he(-1,t,e);return s.value="&",s}static createContextNode(t,e){const s=e.deepestLeft();if(s==null)return null;s.context=0;const n=new he(-1,t,e);return n.value="&",n}static createClosureNode(t){const e=new he(Qe,t,null);return e.value="*",e}static createClosureObNode(t){const e=new he(et,t,null);return e.value="+",e}static createOptionalNode(t){const e=new he(ct,t,null);return e.value="?",e}static createIntervalNode(t,e){const s=new he(ve,null,null);for(let r=t.charCodeAt(0);r<=e.charCodeAt(0);r++)s.alphabet.add(r);let n="[";for(const r of s.alphabet)n+=String.fromCharCode(r);return n+="]",s.value=n,s}static createComplementNode(t){const e=new he(ve,null,null);t.alphabet.has(9)||e.alphabet.add(9),t.alphabet.has(10)||e.alphabet.add(10),t.alphabet.has(13)||e.alphabet.add(13),t.alphabet.has(32)||e.alphabet.add(32);for(let n=32;n<=126;n++)t.alphabet.has(n)||e.alphabet.add(n);for(let n=161;n<=255;n++)t.alphabet.has(n)||e.alphabet.add(n);let s="[";for(const n of e.alphabet)s+=String.fromCharCode(n);return s+="]",e.value=s,e}static createCharNode(t){const e=new he(ve,null,null);return e.value=t,e.alphabet.add(t.charCodeAt(0)),e}static createAllNode(){const t=new he(ve,null,null);t.alphabet.add(9);for(let s=32;s<=126;s++)t.alphabet.add(s);for(let s=161;s<=255;s++)t.alphabet.add(s);let e="[";return t.alphabet.list().forEach(s=>{e+=String.fromCharCode(s)}),e+="]",t.value=e,t}static createEndNode(t,e){const s=new he(ve,null,null);return s.end=t,s.backtrack=e,s.value="#"+s.end,s}clone(){const t=structuredClone(this);return t.alphabet=new le(this._alphabet),t.metaData=new Vt,t.backtrack=!0,t.context=-1,t.end=-1,this._left!=null&&(t.left=this._left.clone()),this._right!=null&&(t.right=this._right.clone()),t}get left(){return this._left}set left(t){this._left=t}get right(){return this._right}set right(t){this._right=t}get id(){return this._id}set id(t){this._id=t}get value(){return this._value}set value(t){this._value=t}doBacktrack(){return this._backtrack}set backtrack(t){this._backtrack=t}get backtrack(){return this._backtrack}get context(){return this._context}set context(t){this._context=t}get end(){return this._end}set end(t){this._end=t}get alphabet(){return this._alphabet}set alphabet(t){this._alphabet=t}get metaData(){return this._metaData}set metaData(t){this._metaData=t}toString(){return String(0)}toStringLevel(t){let e="";for(let s=0;s<t-2;s++)e+=" ";return t>2&&(e+="\\-"),e+=`value
`,this._left!=null&&(e+=String(this._left?.toStringLevel(t+2))),this._right!=null&&(e+=String(this._right?.toStringLevel(t+2))),e}}var dt={exports:{}},Xt;function $n(){return Xt||(Xt=1,(function(N){(function(t){{var e=N.exports=t();e.HashMap=e}})(function(){function t(r){switch(this.clear(),arguments.length){case 0:break;case 1:{"length"in r?s(this,Array.prototype.concat.apply([],r)):this.copy(r);break}default:s(this,arguments);break}}var e=t.prototype={constructor:t,get:function(r){var i=this._data[this.hash(r)];return i&&i[1]},set:function(r,i){var o=this.hash(r);o in this._data||this.size++,this._data[o]=[r,i]},multi:function(){s(this,arguments)},copy:function(r){for(var i in r._data)i in this._data||this.size++,this._data[i]=r._data[i]},has:function(r){return this.hash(r)in this._data},search:function(r){for(var i in this._data)if(this._data[i][1]===r)return this._data[i][0];return null},delete:function(r){var i=this.hash(r);i in this._data&&(this.size--,delete this._data[i])},type:function(r){var i=Object.prototype.toString.call(r),o=i.slice(8,-1).toLowerCase();return!r&&(o==="domwindow"||o==="window")?r+"":o},keys:function(){var r=[];return this.forEach(function(i,o){r.push(o)}),r},values:function(){var r=[];return this.forEach(function(i){r.push(i)}),r},entries:function(){var r=[];return this.forEach(function(i,o){r.push([o,i])}),r},count:function(){return this.size},clear:function(){this._data={},this.size=0},clone:function(){return new t(this)},hash:function(r){switch(this.type(r)){case"undefined":case"null":case"boolean":case"number":case"regexp":return r+"";case"date":return"♣"+r.getTime();case"string":return"♠"+r;case"array":for(var i=[],o=0;o<r.length;o++)i[o]=this.hash(r[o]);return"♥"+i.join("⁞");default:return r.hasOwnProperty("_hmuid_")||(r._hmuid_=++t.uid,n(r,"_hmuid_")),"♦"+r._hmuid_}},forEach:function(r,i){for(var o in this._data){var a=this._data[o];r.call(i||this,a[1],a[0])}}};t.uid=0,typeof Symbol<"u"&&typeof Symbol.iterator<"u"&&(e[Symbol.iterator]=function(){var r=this.entries(),i=0;return{next:function(){if(i===r.length)return{done:!0};var o=r[i++];return{value:{key:o[0],value:o[1]},done:!1}}}}),["set","multi","copy","delete","clear","forEach"].forEach(function(r){var i=e[r];e[r]=function(){return i.apply(this,arguments),this}}),t.prototype.remove=t.prototype.delete;function s(r,i){for(var o=0;o<i.length;o+=2)r.set(i[o],i[o+1])}function n(r,i){Object.defineProperty&&Object.defineProperty(r,i,{enumerable:!1})}return t})})(dt)),dt.exports}var Kn=$n(),pt=rt(Kn);class Jt{_definitions=new pt;_expressions=new pt;_specialCases=new pt;_root=null;_alphabet=new le;_lastPosition=-1;_tokenList=new ue;_sensitive=!0;_contextCount=0;_next=[new le];_nodes=[];constructor(t){this._sensitive=t}addDefinition(t,e){if(this._definitions.has(t))throw new Te("Definição repetida: "+t);this._definitions.set(t,e),this._alphabet.addAll(e.alphabet)}getDefinitionById(t){return this._definitions.get(t)}addExpression(t,e,s){this._alphabet.addAll(e.alphabet),this._tokenList.contains(t)||this._tokenList.add(t);const n=this._tokenList.indexOf(t),r=he.createEndNode(n+2,s);e=he.createConcatNode(e,r);let i=e.left?.right;i!=null&&(i=i.deepestLeft(),i!=null&&i.context>=0&&(this._contextCount++,i.context=this._contextCount,r.context=this._contextCount)),this._expressions.set(t,e),this._root==null?this._root=e:this._root=he.createUnionNode(this._root,e)}addIgnore(t,e){this._alphabet.addAll(t.alphabet);const s=he.createEndNode(0,e);t=he.createConcatNode(t,s),this._root==null?this._root=t:this._root=he.createUnionNode(this._root,t)}addSpecialCase(t,e,s){if(this._sensitive||(s=s.toLocaleUpperCase()),!this._expressions.has(e))throw new Te("Token '"+e+"' não definido");const n=this._tokenList.indexOf(e)+2;if(this._tokenList.contains(t))throw new Te("Token '"+t+"' já definido");const r=this._tokenList.size()+2;let i=this._specialCases.get(n);if(i==null)i=new Fe,this._specialCases.set(n,i);else if(i.get(s)!=null)throw new Te("Já houve a definição de um caso especial de '"+e+`' com o valor"`+s+'"');i.set(s,r),this._tokenList.add(t)}generateAutomata(){const t=new ue,e=new Fe,s=new Fe,n=new Fe,r=new Fe,i=new Fe;if(this._root==null)throw new Te("A Especificação Léxica deve conter a definição de pelo menos um Token");this.computeNext(),t.add(this._root.metaData.first);for(let o=0;o<t.size();o++){const a=t.get(o);for(const l of this._alphabet){const m=String.fromCharCode(l),c=new le;for(const u of a){const _=this._nodes[u];if(_.end>=0){const d=o;if(!r.has(d)&&(r.set(d,_.end),i.set(d,_.backtrack),_.context>0&&!e.has(d))){const T=s.get(_.context);T!=null?e.set(d,T):e.set(d,0)}}_.context>=0&&(s.has(_.context)||s.set(_.context,o)),_.alphabet.has(m.charCodeAt(0))&&c.addAll(this._next[u])}let f=-1;if(c.isEmpty()||(f=this.getPositionStates(t,c),f==-1&&(t.add(c),f=t.size()-1)),n.has(o)||n.set(o,new Map),f!=-1){const u=n.get(o);if(u==null)return null;u.set(m,f)}}}return this.makeAtomata(t,n,r,i,e)}makeAtomata(t,e,s,n,r){const i=new ue;for(const u of e)i.add(u[1]);const o=[];o.length=t.size();for(let u=0;u<o.length;u++){const _=s.get(u);_!=null?o[u]=_:o[u]=-1}for(let u=0;u<o.length;u++){const _=n.get(u);_!=null&&_==!1&&this.computPrecedersOf(u,i).forEach(T=>{o[T]<0&&(o[T]=-2)})}const a=[],l=Array(this._tokenList.size()+2).fill(void 0);for(let u=0;u<l.length;u++){const _=this._specialCases.get(u),d=a.length;if(_!=null){const g=new Map([..._.entries()].sort());for(const[S,E]of g.entries())a.push(new Ht(S,E))}const T=a.length;l[u]=[d,T]}const m=Object.assign([],a);let c=Object.setPrototypeOf(m,Ht.prototype);const f=Array.from({length:t.size()},()=>Array.from({length:2}));for(let u=0;u<f.length;u++)f[u][0]=0,f[u][1]=-1;for(const[u,_]of r.entries())f[_][0]=1,f[u][1]=_;return new yn(this._alphabet,i,o,l,c,f,this._tokenList,this._sensitive)}getPositionStates(t,e){let s=0;for(const n of t){const r=n.list(),i=e.list();if(r.length===i.length&&r.every((a,l)=>a===i[l]))return s;s++}return-1}computPrecedersOf(t,e){const s=new Set;s.add(t);let n;do{n=!1;for(const r of s)e:for(let i=0;i<e.size();i++)for(const o of e.get(i).values())if(s.has(o)&&o==r&&!s.has(i)){s.add(i),n=!0;break e}}while(n);return s}computeNext(){this.computeMetaData(this._root),this._next=new Array(this._lastPosition+1),this._nodes=new Array(this._lastPosition+1);for(let t=0;t<this._lastPosition+1;t++)this._next[t]=new le;this.computeNextNode(this._root)}computeNextNode(t){if(t===null)throw Error("error");let e;switch(t.id){case-1:if(e=t.left,e!=null)for(const s of e.metaData.last){if(t.right==null)throw new Error("Node direita vazio");this._next[s].addAll(t.right.metaData.first)}break;case Qe:case et:if(t.left==null)throw new Error("Node direita vazio");for(const s of t.left.metaData.last)this._next[s].addAll(t.left.metaData.first);break;case ve:this._nodes[t.metaData.position]=t;break}t.left!=null&&this.computeNextNode(t.left),t.right!=null&&this.computeNextNode(t.right)}computeMetaData(t){if(t==null)return;t.left!=null&&this.computeMetaData(t.left),t.right!=null&&this.computeMetaData(t.right);const e=t.metaData,s=t.left,n=t.right;switch(t.id){case ve:this._lastPosition++,e.position=this._lastPosition,e.nullable=!1,e.first.add(this._lastPosition),e.last.add(this._lastPosition);break;case ct:case Qe:e.nullable=!0,s!=null&&(s.metaData.first.list().forEach(r=>e.first.add(r)),s.metaData.last.list().forEach(r=>e.last.add(r)));break;case et:e.nullable=!1,s!=null&&(s.metaData.first.list().forEach(r=>e.first.add(r)),s.metaData.last.list().forEach(r=>e.last.add(r)));break;case ht:if(s==null||n==null)return;e.nullable=s.metaData.nullable||n.metaData.nullable,s.metaData.first.list().forEach(r=>e.first.add(r)),n.metaData.first.list().forEach(r=>e.first.add(r)),s.metaData.last.list().forEach(r=>e.last.add(r)),n.metaData.last.list().forEach(r=>e.last.add(r));break;case-1:if(s==null||n==null)return;e.nullable=s.metaData.nullable&&n.metaData.nullable,s.metaData.first.list().forEach(r=>e.first.add(r)),s.metaData.nullable&&n.metaData.first.list().forEach(r=>e.first.add(r)),n.metaData.last.list().forEach(r=>e.last.add(r)),n.metaData.nullable&&s.metaData.last.list().forEach(r=>e.last.add(r));break}}}let Hn=class{_exp_simp1=new Be;_termo1=new Be;_fator=new Be;_gen;_token=null;constructor(t){this._gen=t}executeAction(t,e){this._token=e;try{switch(t){case 0:break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break;case 6:this.action6();break;case 7:this.action7();break;case 8:this.action8();break;case 9:this.action9();break;case 10:this.action10();break;case 11:this.action11();break;case 12:this.action12();break;case 13:this.action13();break;case 14:this.action14();break;case 15:this.action15();break}}catch(s){if(s instanceof Te)throw new Te(s.message)}}get root(){return this._exp_simp1.pop()}action1(){const t=this._termo1.pop();t!=null&&this._exp_simp1.push(t)}action2(){const t=this._exp_simp1.pop(),e=this._termo1.pop();if(t==null||e==null)return;const s=he.createUnionNode(t,e);s!=null&&this._exp_simp1.push(s)}action3(){const t=this._exp_simp1.pop(),e=this._exp_simp1.pop();if(e==null||t==null)return;const s=he.createContextNode(e,t);s!=null&&this._exp_simp1.push(s)}action4(){if(this._fator==null)return;const t=this._fator.pop();t!=null&&this._termo1.push(t)}action5(){const t=this._termo1.pop(),e=this._fator.pop();t==null||e==null||this._termo1.push(he.createConcatNode(t,e))}action6(){const t=this._fator.pop();t!=null&&this._fator.push(he.createClosureNode(t))}action7(){const t=this._fator.pop();t!=null&&this._fator.push(he.createClosureObNode(t))}action8(){const t=this._fator.pop();t!=null&&this._fator.push(he.createOptionalNode(t))}action9(){const t=this._exp_simp1.pop();t!=null&&this._fator.push(t)}action10(){this._fator.push(he.createAllNode())}action11(){if(this._token==null)return;const t=this._gen.getDefinitionById(this._token.lexeme);if(t==null)throw new Te("Definição não declarada: "+this._token.lexeme,this._token.position);const e=Object.assign({},t);this._fator.push(Object.setPrototypeOf(e,he.prototype))}action12(){this._token!=null&&this._fator.push(he.createCharNode(this._token.lexeme.charAt(0)))}action13(){const t=this._fator.pop();t!=null&&this._fator.push(he.createComplementNode(t))}action14(){const t=this._fator.pop(),e=this._fator.pop();if(e==null||t==null)return;const s=he.createUnionNode(e,t);s!=null&&this._fator.push(s)}action15(){if(this._token==null)return;const t=this._fator.pop(),e=he.createCharNode(this._token.lexeme.charAt(0));if(t==null||e==null)return;const s=String.fromCharCode(t.alphabet.list()[0]),n=String.fromCharCode(e.alphabet.list()[0]);if(s>=n)throw new Te("Intervalo inválido",this._token.position);this._fator.push(he.createIntervalNode(s,n))}};const Ae=["","Era esperado fim de linha",'Era esperado "|"','Era esperado "*"','Era esperado "+"','Era esperado "?"','Era esperado "("','Era esperado ")"','Era esperado "["','Era esperado "]"','Era esperado "."','Era esperado "^"','Era esperado "-"',"Era esperada uma definição","Era esperado um caractere","Era esperada uma expressão regular","Era esperada uma expressão regular","Era esperado ), |, ^ ou o fim da expressão","Era esperada uma expressão","Era esperada uma expressão","Contexto inválido","Termo inválido","Operador inválido","Fator inválido","Era esperado ^ ou um caractere","Classe de caracteres inválida","Item inválido: era esperado um caractere","Era esperado -, ], ou um caractere"];class Qt{_currentToken=null;_previousToken=null;_scanner=null;_semanticAnalyser=null;parse(t,e){if(this._scanner=new jn(t),this._semanticAnalyser=new Hn(e),this._currentToken=this._scanner.nextToken(),this._currentToken==null&&(this._currentToken=new pe(Je,"$",0)),this.reg_exp_ctxt(),this._currentToken.id!=Je)throw new G(Ae[Je],this._currentToken.position);return this._semanticAnalyser.root}match(t){if(this._currentToken==null)throw new se("Atributo durante comparação do REParser.");if(this._scanner==null)throw new se("Scanner é nulo.");if(this._currentToken.id==t){if(this._previousToken=this._currentToken,this._currentToken=this._scanner.nextToken(),this._currentToken==null){let e=0;this._previousToken!=null&&(e=this._previousToken.position+this._previousToken.lexeme.length),this._currentToken=new pe(Je,"$",e)}}else throw new G(Ae[t],this._currentToken.position)}reg_exp_ctxt(){if(this._currentToken==null)throw new se("Atributo Nulo durante reg_exp_ctxt do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.reg_exp(),this.context();break;default:throw new G(Ae[15],this._currentToken.position)}}reg_exp(){if(this._currentToken==null)throw new se("Atributo Nulo durante reg_exp do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.exp(),this._semanticAnalyser.executeAction(1,this._previousToken),this.reg_exp_c();break;default:throw new G(Ae[16],this._currentToken.position)}}reg_exp_c(){if(this._currentToken==null)throw new se("Atributo Nulo durante reg_exp_c do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 7:case 11:break;case 2:this.match(2),this.exp(),this._semanticAnalyser.executeAction(2,this._previousToken),this.reg_exp_c();break;default:throw new G(Ae[17],this._currentToken.position)}}exp(){if(this._currentToken==null)throw new se("Atributo Nulo durante exp do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(4,this._previousToken),this.exp_c();break;default:throw new G(Ae[18],this._currentToken.position)}}exp_c(){if(this._currentToken==null)throw new se("Atributo Nulo durante exp_c do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 7:case 11:break;case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(5,this._previousToken),this.exp_c();break;default:throw new G(Ae[19],this._currentToken.position)}}context(){if(this._currentToken==null)throw new se("Atributo Nulo durante context do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:break;case 11:this.match(11),this.reg_exp(),this._semanticAnalyser.executeAction(3,this._previousToken);break;default:throw new G(Ae[20],this._currentToken.position)}}term(){if(this._currentToken==null)throw new se("Atributo Nulo durante term do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.factor(),this.op();break;default:throw new G(Ae[21],this._currentToken.position)}}op(){if(this._currentToken==null)throw new se("Atributo Nulo durante op do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 6:case 7:case 8:case 10:case 11:case 13:case 14:break;case 3:this.match(3),this._semanticAnalyser.executeAction(6,this._previousToken);break;case 4:this.match(4),this._semanticAnalyser.executeAction(7,this._previousToken);break;case 5:this.match(5),this._semanticAnalyser.executeAction(8,this._previousToken);break;default:throw new G(Ae[22],this._currentToken.position)}}factor(){if(this._currentToken==null)throw new se("Atributo Nulo durante factor do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:this.match(6),this.reg_exp(),this.match(7),this._semanticAnalyser.executeAction(9,this._previousToken);break;case 8:this.match(8),this.end_class();break;case 10:this.match(10),this._semanticAnalyser.executeAction(10,this._previousToken);break;case 13:this.match(13),this._semanticAnalyser.executeAction(11,this._previousToken);break;case 14:this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken);break;default:throw new G(Ae[23],this._currentToken.position)}}end_class(){if(this._currentToken==null)throw new se("Atributo Nulo durante end_class do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 11:this.match(11),this.item(),this.class_c(),this.match(9),this._semanticAnalyser.executeAction(13,this._previousToken);break;case 14:this.item(),this.class_c(),this.match(9);break;default:throw new G(Ae[24],this._currentToken.position)}}class_c(){if(this._currentToken==null)throw new se("Atributo Nulo durante class_c do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:break;case 14:this.item(),this.class_c(),this._semanticAnalyser.executeAction(14,this._previousToken);break;default:throw new G(Ae[25],this._currentToken.position)}}item(){if(this._currentToken==null)throw new se("Atributo Nulo durante item do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");if(this._currentToken.id===14)this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken),this.end_interval();else throw new G(Ae[26],this._currentToken.position)}end_interval(){if(this._currentToken==null)throw new se("Atributo Nulo durante end_interval do REParser.");if(this._semanticAnalyser==null)throw new se("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:case 14:break;case 12:this.match(12),this.match(14),this._semanticAnalyser.executeAction(15,this._previousToken);break;default:throw new G(Ae[27],this._currentToken.position)}}}var en=(N=>(N[N.DEFINITION=0]="DEFINITION",N[N.TOKEN=1]="TOKEN",N[N.NON_TERMINAL=2]="NON_TERMINAL",N[N.GRAMMAR=3]="GRAMMAR",N))(en||{});class ge extends Error{static Mode=en;_mode;_index;_cause;constructor(t,e,s){super(s.message),this._cause=s,this._index=e,this._mode=t,Object.setPrototypeOf(this,ge.prototype)}}class qn{_lexeme;_base;constructor(t,e){this._lexeme=t,this._base=e}get lexeme(){return this._lexeme}get base(){return this._base}}class Gn{_expressionFor=new Map;_specialCasesValues=new Map;_definitions=new ue;_tokens=new ue;_specialCases=new ue;_ignore="";addDefinition(t,e){this._definitions.add(t),this._expressionFor.set(t,e)}addToken(t,e){this._tokens.add(t),this._expressionFor.set(t,e)}clear(){this._definitions.clear(),this._tokens.clear(),this._specialCases.clear(),this._expressionFor.clear(),this._specialCasesValues.clear()}expressionFor(t){return this._expressionFor.get(t)}get tokens(){return this._tokens}get definitions(){return this._definitions}get specialCases(){return this._specialCases}get ignore(){return this._ignore}addIgnore(t){this._ignore.length>0?this._ignore=this.ignore+"|"+t:this._ignore=t}addSpecialCase(t,e,s){this._specialCases.add(t),this._specialCasesValues.set(t,new qn(e,s))}getSpecialCaseValue(t){return this._specialCasesValues.get(t)}getFA(t){const e=new Qt,s=new Jt(t);let n=-1;try{for(n=0;n<this._definitions.size();n++){const r=this.expressionFor(this._definitions.get(n));if(r==null)throw new se("Expressão de Definições vazia.");const i=e.parse(r,s);if(i==null)throw new se("Erro no Parse do Automata Finito.");s.addDefinition(this._definitions.get(n),i)}}catch(r){throw new ge(ge.Mode.DEFINITION,n,r)}try{for(n=0;n<this._tokens.size();n++){const r=this.expressionFor(this._tokens.get(n));if(r==null)throw new se("Expressão de Token vazia.");const i=e.parse(r,s);if(i==null)throw new se("Erro no Parse do Automata Finito.");s.addExpression(this._tokens.get(n),i,!0)}}catch(r){throw new ge(ge.Mode.TOKEN,n,r)}try{for(n=0;n<this._specialCases.size();n++){const r=this._specialCases.get(n),i=this._specialCasesValues.get(r);if(i==null)throw new se("Valor do Caso Especial vazio.");s.addSpecialCase(r,i.base,i.lexeme)}}catch(r){throw new ge(ge.Mode.TOKEN,n,r)}try{if(this._ignore.length>0){const r=e.parse(this._ignore,s);if(r==null)throw new se("Nó ignorado vazio.");s.addIgnore(r,!0)}}catch(r){throw new ge(ge.Mode.TOKEN,this._tokens.size(),r)}try{const r=s.generateAutomata();if(r==null)throw new se("Erro ao criar Autômato Finito.");return r}catch(r){throw new ge(ge.Mode.TOKEN,this._tokens.size(),r)}}}class _e{static EPSILON=0;static DOLLAR=1;static DERIVES=2;static PIPE=3;static SEMICOLON=4;static TERM=5;static NON_TERM=6;static ACTION=7;static START_SYMBOL=8;static FIRST_NON_TERMINAL=8;static FIRST_SEMANTIC_ACTION=17;static LAST_SEMANTIC_ACTION=22;static TABLE=[[-1,-1,-1,-1,-1,0,-1],[2,-2,-2,-2,-2,1,-2],[-3,-3,-3,-3,-3,3,-3],[-4,-4,4,5,-4,-4,-4],[-5,-5,-5,-1,6,7,8],[-6,-6,10,10,9,9,9],[-7,-7,-7,-7,11,0,-7],[-8,-8,-8,-8,-8,12,-8],[-9,-9,-9,-9,-9,-9,13]];static PRODUCTIONS=[[10,9],[8],[0],[15,17,2,12,18,11,4],[3,12,18,11],[0],[14,19,13],[15,19,13],[16,20,13],[12],[0],[5,21],[6,21],[7,22]];static EXPECTED_MESSAGE=["î","$","::=","|",";","um símbolo terminal","um símbolo não-terminal","uma ação semântica"];static PARSER_ERROR=["Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal","Era esperado '|' ou ';'","Era esperado um Terminal, um Não-Terminal, ou uma Ação Semântica","Construção inválida","Era esperado um Terminal","Era esperado um Não-Terminal","Era esperado uma Ação Semântica"]}class tn{symbols;actionCount=0;lhs;rhs;productions;token;constructor(t){this.symbols=t,this.lhs=0,this.rhs=[],this.productions=new ue,this.token=new pe(-1,"ERROR",-1)}getPoductions(){return this.productions}executeAction(t,e){switch(this.token=e,t){case 0:this.action0();break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break}}action0(){const t=this.symbols.get(this.token.lexeme);if(t===void 0)throw new Te("Lexema não pode ser nulo");this.lhs=t}action1(){const t=new Ce(null,this.lhs);for(let e=0;e<this.rhs.length;e++)t.add_rhs(this.rhs[e]);this.productions.add(t),this.rhs=[]}action2(){const t=this.symbols.get(this.token.lexeme);if(t===void 0)throw new Te("Lexema não pode ser nulo");const e=t;e!=_e.EPSILON&&this.rhs.push(e)}action3(){const t=Number(this.token.lexeme);this.rhs.push(this.symbols.size+t+1)}action4(){if(!this.symbols.has(this.token.lexeme))throw new Te("Símbolo "+this.token.lexeme+" não declarado",this.token.position)}action5(){const t=Number(this.token.lexeme);this.actionCount<t&&(this.actionCount=t)}}class ft{input;pos;returnComents=!1;endPosition;constructor(t){t==null?(this.input="",this.pos=0,this.endPosition=0):(this.input=t,this.pos=0,this.endPosition=t.length)}setReturnComents(t){this.returnComents=t}setInput(t){this.input=t,this.pos=0,this.endPosition=t.length}nextToken(){for(;this.hasMoreChars();){const t=this.pos,e=this.nextChar();switch(e){case" ":case`
`:case"\r":case"	":continue;case":":return this.analyseDerives();case"|":return new pe(_e.PIPE,"|",t);case";":return new pe(_e.SEMICOLON,";",t);case"#":return this.analyseAction();case"<":return this.analyseNonTerminal();case"_":case'"':return this.analyseTerminal(e);case"/":{const s=this.analyseComent();if(this.returnComents)return s;continue}default:if(this.isLetter(e))return this.analyseTerminal(e);throw new de("Caracter Inválido: '"+e+"'",t)}}return null}isLetter(t){return t.toLowerCase()!=t.toUpperCase()||t.charCodeAt(0)==170||t.charCodeAt(0)==186}analyseComent(){const t=this.pos-1;if(!this.hasMoreChars())throw new de("Caracter Inválido: '/'",t);let e=this.nextChar();if(e!="/")throw this.pushChar(),new de("Caracter Inválido: '/'",t);let s="//";for(;this.hasMoreChars();){if(e=this.nextChar(),e==`
`){this.pushChar();break}s+=e}return new pe(-1,s.toString(),t)}analyseDerives(){const t=this.pos-1;if(this.input.length-t>=3){let e=this.nextChar();if(e==":"&&(e=this.nextChar(),e=="="))return new pe(_e.DERIVES,"::=",t)}throw new de("Símbolo Inválido",t)}getPosition(){return this.pos}setPosition(t){this.pos=t}setEnd(t){this.endPosition=t}setRange(t,e){this.setPosition(t),this.setEnd(e)}analyseTerminal(t){const e=this.pos-1;let s="";if(s+=t,t=='"'){let n=!1;for(;this.hasMoreChars();)if(t=this.nextChar(),s+=t,t=='"')if(this.hasMoreChars())if(t=this.nextChar(),t=='"')s+=t;else{this.pushChar(),n=!0;break}else n=!0;else if(t==`
`)throw new de("Terminal inválido",e);if(s.length==0||!n)throw new de("Terminal inválido",e)}else for(;this.hasMoreChars();){if(t=this.nextChar(),t!="_"&&!this.isLetterOrDigit(t)){this.pushChar();break}s+=t}return new pe(_e.TERM,s.toString(),e)}isLetterOrDigit(t){return this.isLetter(t)||/^[0-9]$/.test(t)}analyseNonTerminal(){const t=this.pos-1;let e="",s="<";for(;this.hasMoreChars()&&(s=this.nextChar(),s!=">");){if(!this.isLetterOrDigit(s)&&s!="_")throw new de("Não-Terminal inválido",t);e+=s}if(e.length==0||s!=">")throw new de("Não-Terminal inválido",t);return new pe(_e.NON_TERM,"<"+e+">",t)}analyseAction(){const t=this.pos-1;let e="";for(;this.hasMoreChars();){const s=this.nextChar();if(!this.isDigit(s)){this.pushChar();break}e+=s}if(e.length==0)throw new de("Ação Semântica inválida",t);return new pe(_e.ACTION,e.toString(),t)}isDigit(t){return!isNaN(Number(t))&&!isNaN(parseInt(t))}hasMoreChars(){return this.pos<this.endPosition}nextChar(){return this.hasMoreChars()?this.input.charAt(this.pos++):"￿"}pushChar(){this.pos--}}class nn{stack=[];currentToken=null;previousToken=new pe(-1,"ERROR",-1);scanner=new ft;semanticAnalyser=new tn(new Map);parse(t,e,s){const n=new Fe;n.set(ie.EPSILON_STR,0);let r=2;const i=new ft;let o=0,a=new Set;try{for(let c=0;c<t.size();c++){const f=t.get(c);if(f==`
`){o++,t.removeByIndex(c),c--;continue}i.setInput(f);let u=i.nextToken();if(u==null)t.removeByIndex(c),c--;else{if(u.id!=_e.TERM)throw new Te("Era esperada a declaração de um terminal",u.position);const _=u.lexeme;if(a.has(_))throw new Te("Terminal repetido : "+_,u.position);if(a.add(_),t.set(c,_),n.set(_,r),r++,(u=i.nextToken())!=null)throw new Te("Cada linha deve conter a declaração de apenas um símbolo terminal",u.position)}}if(t.size()==0)throw new Te("Conjunto de Terminais não pode ser vazio",0)}catch(c){throw new ge(ge.Mode.TOKEN,o,c)}o=0,a=new Set;try{for(let c=0;c<e.size();c++){const f=e.get(c);if(f==`
`){o++,e.removeByIndex(c),c--;continue}i.setInput(f);let u=i.nextToken();if(u==null)e.removeByIndex(c),c--;else{if(u.id!=_e.NON_TERM)throw new Te("Era esperada a declaração de um não-terminal",u.position);const _=u.lexeme;if(a.has(_))throw new Te("Não-terminal repetido : "+_,u.position);if(a.add(_),e.set(c,_),n.set(_,r),r++,(u=i.nextToken())!=null)throw new Te("Cada linha deve conter a declaração de apenas um símbolo não-terminal",u.position)}}if(e.size()==0)throw new Te("Conjunto de Não-Terminais não pode ser vazio",0)}catch(c){throw new ge(ge.Mode.NON_TERMINAL,o,c)}try{this.parseByMap(s,n)}catch(c){throw new ge(ge.Mode.GRAMMAR,-1,c)}const l=this.semanticAnalyser.getPoductions(),m=2+t.size();return new ie(t.toArray(),e.toArray(),l,m)}parseByMap(t,e){for(this.scanner=new ft(t),this.semanticAnalyser=new tn(e),this.stack.push(_e.DOLLAR),this.stack.push(_e.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););}step(){const t=this.stack.pop();if(t===void 0)return!1;let e;if(this.currentToken==null?e=_e.DOLLAR:e=this.currentToken.id,t==_e.EPSILON)return!1;if(this.isTerminal(t)){if(t==e)return this.stack.length==0?!0:(this.previousToken=this.currentToken,this.currentToken=this.scanner.nextToken(),!1);throw new G("Era esperado "+_e.EXPECTED_MESSAGE[t],this.scanner.getPosition())}else if(this.isNonTerminal(t)){const s=_e.TABLE[t-_e.FIRST_NON_TERMINAL][e-1];if(s>=0){const n=_e.PRODUCTIONS[s];if(n===void 0)throw new G("Produção não definida");for(let r=n.length-1;r>=0;r--)this.stack.push(n[r]);return!1}else throw new G(_e.PARSER_ERROR[t-_e.FIRST_NON_TERMINAL],this.scanner.getPosition())}else if(this.isSemanticAction(t)){if(this.previousToken===null)throw new de("Token anterior é Nulo");return this.semanticAnalyser.executeAction(t-_e.FIRST_SEMANTIC_ACTION,this.previousToken),!1}else return!1}isTerminal(t){return t>=0&&t<_e.FIRST_NON_TERMINAL}isNonTerminal(t){return t>=_e.FIRST_NON_TERMINAL&&t<_e.FIRST_SEMANTIC_ACTION}isSemanticAction(t){return t>=_e.FIRST_SEMANTIC_ACTION&&t<=_e.LAST_SEMANTIC_ACTION}}class fe{static ID=0;static STR=1;static RE=2;static COLON=3;static EQUALS=4;static COMMENT=5;static ERROR=6;_text="";_pos=0;_endPos=0;_regularMode=!1;_specialCaseMode=!1;set text(t){this._text=t,this.setRange(0,this._text.length),this._regularMode=!1,this._specialCaseMode=!1}setRange(t,e){this._pos=t,this._endPos=e}nextToken(){if(!this.hasMoreChars())return null;if(this._regularMode)return this._specialCaseMode?(this._regularMode=!1,this._specialCaseMode=!1,this.nextToken()):this.parseRE();for(;this.hasMoreChars();){const t=this._pos,e=this.nextChar();switch(e){case`
`:case"\r":this._specialCaseMode=!1,this._regularMode=!1;case" ":case"	":continue;case":":return this._regularMode=!0,new pe(fe.COLON,":",t);case"=":return this._specialCaseMode=!0,new pe(fe.EQUALS,"=",t);case'"':return this.getString();case"/":return this.getComment();default:return this.isLetter(e)?this.getId():this.getError()}}return null}parseRE(){const t=this._pos;for(this._regularMode=!1;this.hasMoreChars();){const s=this.nextChar();if(s==`
`){this._pos--;break}else if(s=="/"&&this.hasMoreChars()){if(this.nextChar()=="/")return this._pos-=2,this._regularMode=!1,new pe(fe.RE,this._text.substring(t,this._pos),t);this._pos--}}const e=this._text.substring(t,this._pos);return new pe(fe.RE,e,t)}getString(){const t=this._pos-1;for(;this.hasMoreChars();){const e=this.nextChar();if(e==`
`)break;if(e=='"')if(this.hasMoreChars()){if(this.nextChar()!='"')return this._pos--,new pe(fe.STR,this._text.substring(t,this._pos),t)}else return new pe(fe.STR,this._text.substring(t,this._pos),t)}return new pe(fe.ERROR,this.text.substring(t,this._pos),t)}getId(){const t=this._pos-1;for(;this.hasMoreChars();){const e=this.nextChar();if(!this.isLetterOrDigit(e)&&e!="_"){this._pos--;break}}return new pe(fe.ID,this._text.substring(t,this._pos),t)}getError(){const t=this._pos-1;for(;this.hasMoreChars();)if(` 	
\r`.indexOf(this.nextChar())==-1){this._pos--;break}return new pe(fe.ERROR,this._text.substring(t,this._pos),t)}getComment(){const t=this._pos-1;if(this.hasMoreChars()){if(this.nextChar()=="/"){for(;this.hasMoreChars();)if(this.nextChar()==`
`){this._pos--;break}return new pe(fe.COMMENT,this._text.substring(t,this._pos),t)}this._pos--}return new pe(fe.ERROR,this._text.substring(t,this._pos),t)}isLetter(t){return t.toLowerCase()!=t.toUpperCase()||t.charCodeAt(0)==170||t.charCodeAt(0)==186}isLetterOrDigit(t){return this.isLetter(t)||this.isNumber(t)}isNumber(t){return typeof t!="string"||t.trim()===""?!1:!Number.isNaN(Number(t))}hasMoreChars(){return this._pos<this._endPos}nextChar(){return this.hasMoreChars()?this._text.charAt(this._pos++):"￿"}}class Wn{static _instance;errorList;constructor(){this.errorList=new ue}static get Instance(){return this._instance||(this._instance=new this)}static get errorList(){return this.errorList}add(t){this.errorList.add(t)}}class sn{scanner=new fe;pos=0;gen=null;parseFA(t,e,s){this.gen=new Jt(s);try{this.parseDefs(t)}catch(n){Wn.Instance.add(n)}this.parseTokens(e);try{const n=this.gen.generateAutomata();if(n==null)throw new se("Automato gerado é nulo");return n}catch(n){throw console.log(n),new ge(ge.Mode.TOKEN,0,n)}}parseDefs(t){if(this.gen==null)return;const e=t.split(/(\n)/g);for(const s of e)if(s!=`
`){this.scanner.text=s;try{let n=this.nextToken();if(this.pos=0,n!=null&&n.id==fe.ID){const r=n.lexeme;if(this.pos=n.position+r.length,n=this.nextToken(),n!=null&&n.id==fe.COLON)if(this.pos=n.position+1,n=this.nextToken(),n!=null&&n.id==fe.RE){const i=n.lexeme;try{const o=this.parseRE(i);if(o==null)return;this.gen.addDefinition(r,o)}catch(o){const a=o;throw a.position=a.position+this.pos,a}}else throw new G("Era esperado uma Expressão Regular",this.pos);else throw new G("Era esperado ':'",this.pos)}else{if(n==null)continue;throw new G("Era esperado um identificador",this.pos)}}catch(n){throw new ge(ge.Mode.DEFINITION,0,n)}}}parseTokens(t){let e=0;const s=t.split(/(\n)/g);for(const n of s){if(n===`
`){e++;continue}this.scanner.text=n;try{const r=this.nextToken();if(this.pos=0,r!=null)switch(this.pos=r.position+r.lexeme.length,r.id){case fe.COLON:this.parseIgnore();break;case fe.ID:case fe.STR:this.parseId(r);break;default:throw new de("Era esperado um identificador",0)}}catch(r){throw console.warn("No parseTokens",r),new ge(ge.Mode.TOKEN,e,r)}}}parseIgnore(){const t=this.nextToken();if(t!=null&&t.id==fe.RE){const e=t.lexeme;try{if(this.gen==null)throw new se("Gerador de Autômatos Finitos não inicializado!");if(e.charAt(0)=="!"){const s=this.parseRE(e.substring(1));s!=null&&this.gen.addIgnore(s,!1)}else{const s=this.parseRE(e);s!=null&&this.gen.addIgnore(s,!0)}}catch(s){const n=s;throw n.position=n.position+t.position,n}}else throw new de("Era esperado uma Expressão Regular",this.pos)}parseId(t){if(t==null)return;const e=t.lexeme;if(t=this.nextToken(),t==null)try{if(this.gen==null)return;const s=this.parseRE(e);if(s==null)return;this.gen.addExpression(e,s,!0)}catch(s){throw s}else switch(this.pos=t.position+t.lexeme.length,t.id){case fe.COLON:this.parseIdEnd(e);break;case fe.EQUALS:this.parseSpecialCase(e);break;default:throw this.pos=t.position,new de("Era esperado ':' ou '='",this.pos)}}parseIdEnd(t){const e=this.nextToken();if(e==null||e.id!=fe.RE)throw new de("Era esperado uma Expressão Regular",this.pos);const s=e.lexeme;try{if(this.gen==null)return;if(s.charAt(0)=="!"){const n=this.parseRE(s.substring(1));n!=null&&this.gen.addExpression(t,n,!1)}else{const n=this.parseRE(s);if(n!=null)this.gen.addExpression(t,n,!0);else throw new de(`Definição Regular "${s}" indefinida no Token '${t}'`,this.pos)}}catch(n){const r=n;throw r.position=r.position+e.position,r}}parseSpecialCase(t){let e=this.nextToken();if(e!=null&&e.id==fe.ID){const s=e.lexeme;if(this.pos=e.position+t.length,e=this.nextToken(),e!=null&&e.id==fe.COLON)if(this.pos=e.position+1,e=this.nextToken(),e!=null&&e.id==fe.STR){let n=e.lexeme;n=n.substring(1,n.length-1);try{if(this.gen==null)return;this.gen.addSpecialCase(t,s,n)}catch(r){const i=r;throw i.position=i.position+e.position,i}if(e=this.nextToken(),e!=null)throw new G("Só é permitido uma definição por linha",e.position)}else throw new G("Era esperado uma Expressão Regular",this.pos);else throw new G("Era esperado ':'",this.pos)}else throw new G("Era esperado um Identificador",this.pos)}nextToken(){let t=this.scanner.nextToken();if(t!=null){if(t.id==fe.COMMENT)t=this.nextToken();else if(t.id==fe.ERROR)throw new de("Token inválido",t.position)}return t}parseRE(t){const e=new Qt;if(this.gen!=null)return e.parse(t,this.gen)}}class mt{stack=new Be;scanner=null;currentToken=null;previousToken=null;table;productions;semanticStart;symbols;nodeStack=new Be;errors;static DOLLAR=1;constructor(t,e){this.table=t,this.semanticStart=e.firstSemanticAction;const s=e.grammar.productions;this.productions=[],this.symbols=e.grammar.symbols;for(let n=0;n<s.size();n++)this.productions[n]=[],this.productions[n][0]=s.get(n).get_lhs(),this.productions[n][1]=s.get(n).get_rhs().length;this.errors=e.getErrors(this.table)}parse(t,e){this.scanner=t,this.nodeStack.clear(),this.stack.clear(),this.stack.push(0),this.currentToken=t.nextToken();try{for(;!this.step(););const s=this.nodeStack.pop();if(s===void 0)throw new G("Node is Null");e.add(s)}catch(s){for(let n=0;n<this.nodeStack.size();n++){const r=this.nodeStack.get(n);if(r===void 0)throw new G("Node is Null");e.add(r)}e.add(new we(s.message)),console.log(s)}return e}step(){const t=this.stack.peek();if(this.currentToken==null){let n=0;this.previousToken!=null&&(n=this.previousToken.position+this.previousToken.lexeme.length),this.currentToken=new pe(mt.DOLLAR,"$",n)}const e=this.currentToken.id;if(t===void 0)throw new G("State is undefined");const s=this.table[t][e-1];switch(s.getType()){case te.SHIFT:if(this.stack.push(s.getParameter()),this.nodeStack.push(new we(this.symbols[this.currentToken.id])),this.previousToken=this.currentToken,this.scanner===null)throw new G("Scanner is Null");return this.currentToken=this.scanner.nextToken(),!1;case te.REDUCE:const n=this.productions[s.getParameter()],r=new Be;for(let l=0;l<n[1];l++){this.stack.pop();const m=this.nodeStack.pop();if(m===void 0)throw new G("Node is Null");r.push(m)}const i=this.stack.peek();if(i===void 0)throw new G("Old State is Null");this.stack.push(this.table[i][n[0]-1].getParameter());const o=new we(this.symbols[n[0]]);for(;r.size()>0;){const l=r.pop();if(l===void 0)throw new G("Pivot is Null");o.add(l)}return this.nodeStack.push(o),!1;case te.ACTION:const a=this.semanticStart+s.getParameter()-1;return this.stack.push(this.table[t][a].getParameter()),this.nodeStack.push(new we("#"+s.getParameter())),!1;case te.ACCEPT:return!0;case te.ERROR:throw new G("Era esperado: "+this.errors.get(t),this.currentToken.position)}return!1}}Gt();class Zn extends qt{conflict=null;stackTop=null;async resolve(t,e){let s;if(this.stackTop==null)throw SyntaxError("Stack de Não terminais é nulo");if(this.conflict==null)throw SyntaxError("Conflict é nulo");e==0?s="$":s=t.terminals[e-1];let n="";n+="- O símbolo no topo da pilha é: "+t.nonTerminals[this.stackTop]+`
`,n+="- O símbolo da entrada é: "+s+`
`,n+=`
Qual produção deve ser utilizada?`;const r=t.productions,i=new Map;let o=1;for(const m of this.conflict.list())n+=`
Opção ${o} : ${r.toArray()[m]}
`,i.set(o,m),o++;let a=null;try{a=await Wt(n,"1")}catch{console.log("Prompt não encontrado")}a==null&&(a="1");let l=Number(a);return(isNaN(l)||l<1||l>i.size)&&(l=1),i.get(l)??(()=>{throw new Error(`Opção não encontrada de conflito: ${l}`)})()}setup(t,e){this.conflict=t,this.stackTop=e}}class ye{g;constructor(t){if(!t.isFactored())throw new Le("Gramática não Fatorada");if(t.hasLeftRecursion())throw new Le("Gramática possui Recursão à Esquerda");this.g=t}getGrammar(){return this.g}lookahead(t){if(this.g==null)throw new G("Gramatica é nula");const e=this.g.first(t.get_rhs());return e.contains(0)&&(e.delete(0),e.addAll(this.g.followSet[t.get_lhs()])),e}async generateTable(){if(this.g==null)throw new G("Gramatica é nula");const t=this.g.symbols,e=[];for(let n=0;n<t.length-this.g.FIRST_NON_TERMINAL;n++){e[n]=[];for(let r=0;r<this.g.FIRST_NON_TERMINAL-1;r++)e[n][r]=new le}for(let n=0;n<this.g.productions.size();n++){const r=this.g.productions.get(n),i=this.lookahead(r);for(let o=1;o<this.g.FIRST_NON_TERMINAL;o++)i.contains(o)&&e[r.get_lhs()-this.g.FIRST_NON_TERMINAL][o-1].add(n)}const s=new Zn;return await this.resolveConflicts(e,s)}async resolveConflicts(t,e){if(this.g==null)throw new G("Gramatica é nula");const s=[];for(let n=0;n<t.length;n++){s[n]=[];for(let r=0;r<t[n].length;r++)switch(t[n][r].size){case 0:s[n][r]=-1;break;case 1:s[n][r]=t[n][r].first();break;default:e.setup(t[n][r],n),s[n][r]=await e.resolve(this.g,r);break}}return s}async tableAsHTML(){if(this.g==null)throw new G("Gramatica é nula");const t=await this.generateTable();let e="";e+='<HTML><HEAD><TITLE>Tabela de Análise LL(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',e+="<TR align=center><TD bgcolor=black><FONT color=white><B>&nbsp;</B></FONT></TD><TD bgcolor=black><FONT color=white><B>$</B></FONT></TD>";for(let s=ie.FIRST_TERMINAL;s<this.g.FIRST_NON_TERMINAL;s++)e+="<TD nowrap bgcolor=black><FONT color=white><B>"+xe.translateString(this.g.symbols[s])+"</B></FONT></TD>";e+="</TR>";for(let s=0;s<t.length;s++){e+="<TR align=center><TD nowrap bgcolor=black><FONT color=white><B>"+xe.translateString(this.g.symbols[s+this.g.FIRST_NON_TERMINAL])+"</B></FONT></TD>";for(let n=0;n<t[s].length;n++){const r=t[s][n];r>=0?e+="<TD width=40 bgcolor=#F5F5F5>"+r+"</TD>":e+="<TD width=40 bgcolor=#F5F5F5>-</TD>"}e+="</TR>"}e+="</TABLE>",e+="<BR></FONT><CODE><TABLE border=0>";for(let s=0;s<this.g.productions.size();s++)e+="<TR>",e+="<TD align=right nowrap>"+s+"&nbsp;-&nbsp;</TD>",e+="<TD>"+xe.translateString(this.g.productions.get(s).toString())+"</TD>",e+="</TR>";return e+="</TABLE></CODE></BODY></HTML>",e.toString()}}class Yn{lrTable=null;async generate(t,e,s){const n=new Map;return n.set("Token.java",this.generateToken(s)),n.set("Constants.java",this.generateConstants(t,e,s)),t!==null&&n.set("ScannerConstants.java",this.generateScannerConstants(t,s)),e!==null&&(n.set("ParserConstants.java",await this.generateParserConstants(e,s)),s.useASTLib&&t!==null&&(n.set("Reflection.java",this.generateReflection(t,e,s)),n.set("NonTerm.java",this.generateNonTerm(e,s)))),n.set("AnalysisError.java",this.generateAnalysisError(s)),n.set("LexicalError.java",this.generateLexicalError(s)),n.set("SyntacticError.java",this.generateSyntacticError(s)),n.set("SemanticError.java",this.generateSemanticError(s)),n}generateNonTerm(t,e){let s=[];const n=e.pkgName;n&&n!==""&&s.push(`package ${n};

`),s.push(`public enum NonTerm {
`),s.push(`    EPSILON(0),
`);for(let r=0;r<t.nonTerminals.length;r++){const i=t.nonTerminals[r],o=r+t.FIRST_NON_TERMINAL;s.push(`    nt_${i.slice(1,-1)}(${o})`),s.push(`,
`)}s.pop(),s.push(`;
`),s.push(`
`),s.push(`    private final int index;
`),s.push(`
`),s.push(`    NonTerm(int index) {
`),s.push(`        this.index = index;
`),s.push(`    }
`),s.push(`
`),s.push(`    public int index() {
`),s.push(`        return index;
`),s.push(`    }
`),s.push(`    public static NonTerm getNonTermFromIndex(int index) {
`),s.push(`        switch (index) {
`),s.push(`            case 0:
`),s.push(`                return NonTerm.EPSILON;
`);for(let r=0;r<t.nonTerminals.length;r++){const i=t.nonTerminals[r],o=r+t.FIRST_NON_TERMINAL;s.push(`            case ${o}:
`),s.push(`                return NonTerm.nt_${i.slice(1,-1)};
`)}return s.push(`            default:
`),s.push(`                throw new RuntimeException("Unknown index:" + index);
`),s.push(`        }
`),s.push(`    }
`),s.push(`}
`),s.join("")}generateReflection(t,e,s){let n=[];const r=s.pkgName;r&&r!==""&&n.push(`package ${r};

`),n.push(`import java.util.Map;
`),n.push(`
`),n.push(`public final class Reflection {
`),n.push(`
`),n.push(`    public static final Map<Integer, String> TOKENS = Map.ofEntries(
`),n.push(`        Map.entry(0, "EPSILON"),
`),n.push(`        Map.entry(1, "DOLLAR"),
`);const i=t.tokens.toArray();for(let o=0;o<i.length;o++){const a=i[o];let l;a.charAt(0)=='"'?l="t_TOKEN_"+(o+2):l="t_"+a,n.push(`        Map.entry(${o+2}, "${l}")`),n.push(`,
`)}n.pop(),n.push(`
    );
`),n.push(""),n.push(`
`),n.push(`    public static final Map<Integer, String> NONTERMS = Map.ofEntries(
`),n.push(`        Map.entry(0, "EPSILON"),
`);for(let o=0;o<e.nonTerminals.length;o++){const a=e.nonTerminals[o],l=o+e.FIRST_NON_TERMINAL;n.push(`        Map.entry(${l}, "nt_${a.slice(1,-1)}")`),n.push(`,
`)}return n.pop(),n.push(`
    );
`),n.push(`}
`),n.join("")}generateToken(t){const e=[],s=t.pkgName;return s&&s!==""&&e.push(`package ${s};

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
`)}generateAnalysisError(t){const e=[],s=t.pkgName;return s&&s!==""&&e.push(`package ${s};
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
`)}generateLexicalError(t){const e=[],s=t.pkgName;return s&&s!==""&&e.push(`package ${s};
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
`)}generateSyntacticError(t){const e=[],s=t.pkgName;return s&&s!==""&&e.push(`package ${s};

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
`)}generateSemanticError(t){const e=[],s=t.pkgName;return s&&s!==""&&e.push(`package ${s};

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
`)}generateConstants(t,e,s){const n=[],r=s.pkgName;r&&r!==""&&n.push(`package ${r};
`);let i=null;if(t===null?i="ParserConstants":e===null?i="ScannerConstants":i="ScannerConstants, ParserConstants",t===null)throw new de("Automato Finito é nulo");if(e===null)throw new G("Gramatica é nulo");return n.push("public interface Constants extends "+i+`
{
    int EPSILON  = 0;
    int DOLLAR   = 1;

`+this.constList(t,e)+`
}
`),n.join(`
`)}generateScannerConstants(t,e){const s=[],n=e.pkgName;if(n&&n!==""&&s.push(`package ${n};

`),s.push(`public interface ScannerConstants
{
`),t==null)throw new de("Automato Finito é nulo.");return s.push(this.genLexTables(t,e)),s.push(`}
`),s.join("")}async generateParserConstants(t,e){const s=[],n=e.pkgName;if(n&&n!==""&&s.push(`package ${n};
`),s.push(`public interface ParserConstants
{`),t===null)throw new G("Gramatica é nulo");const r=await this.genSyntTables(t,e);if(r===null)throw new G("Tabela Sintatica é nula");return s.push(r),s.push("}"),s.join(`
`)}genLexTables(t,e){let s;switch(e.scannerTable){case L.SCANNER_TABLE_FULL:s=this.lex_table(t);break;case L.SCANNER_TABLE_COMPACT:s=this.lex_table_compress(t);break;case L.SCANNER_TABLE_HARDCODE:s="";break;default:s="";break}return s+`
`+this.token_state(t)+(t.hasContext()?`
`+this.context(t):"")+`
`+(t.specialCases.length>0?this.special_cases(t)+`
`:"")+this.scanner_error(t)+`
`}context(t){const e=[];e.push(`    int[][] SCANNER_CONTEXT =
    {
`);for(let s=0;s<t.transitions.size();s++)e.push("        {"),e.push(t.isContext(s)?"1":"0"),e.push(", "),e.push(t.getOrigin(s).toString()),e.push(`},
`);return e.pop(),e.push(`
    };
`),e.join("")}scanner_error(t){const e=[];e.push(`    String[] SCANNER_ERROR =
    {
`);const s=t.transitions.size();for(let n=0;n<s;n++){e.push('        "');const r=t.getError(n);for(let i=0;i<r.length;i++)r.charAt(i)=='"'?e.push('\\"'):e.push(r.charAt(i));e.push(`",
`)}return e.pop(),e.push('"'),e.push(`
    };
`),e.join("")}async genSyntTables(t,e){switch(e.parser){case L.PARSER_REC_DESC:case L.PARSER_LL:return await this.genLLSyntTables(t,e.parser);case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:return await this.genLRSyntTables(t,e.parser);default:return null}}async genLRSyntTables(t,e){const s=je.createGenerator(t,e);if(s==null)throw new G("Gerador de Tabela é nulo.");this.lrTable=await s.buildIntTable();const n=[];return n.push("    int FIRST_SEMANTIC_ACTION = "+t.FIRST_SEMANTIC_ACTION()+`;

    int SHIFT  = 0;
    int REDUCE = 1;
    int ACTION = 2;
    int ACCEPT = 3;
    int GO_TO  = 4;
    int ERROR  = 5;
`),n.push(`
`),n.push(this.emitModifiedLRTable(t)),n.push(`
`),n.push(this.emitProductionsForLR(t)),n.push(`
`),n.push(this.emitErrorTableLR()),n.join("")}emitProductionsForLR(t){const e=[],s=t.productions;e.push(`    int[][] PRODUCTIONS =
`),e.push(`    {
`);for(let n=0;n<s.size();n++)e.push("        { "),e.push(s.get(n).get_lhs().toString()),e.push(", "),e.push(s.get(n).get_rhs().length.toString()),e.push(` },
`);return e.pop(),e.push(" }"),e.push(`
    };
`),e.join("")}emitLRTable(t){const e=[];if(this.lrTable===null)throw new G("Tabela LR está nula.");const s=this.lrTable;e.push(`    int[][][] PARSER_TABLE =
`),e.push(`    {
`);let n=s.length;t.productions.size()>n&&(n=t.productions.size()),n=(""+n).length;for(let r=0;r<s.length;r++){e.push("        {");for(let i=0;i<s[r].length;i++){e.push(" {"),e.push(te.CONSTANTS[s[r][i][0]]),e.push(", ");const o=""+s[r][i][1];for(let a=o.length;a<n;a++)e.push(" ");e.push(o),e.push("},")}e.pop(),e.push("}"),e.push(` },
`)}return e.pop(),e.push(" }"),e.push(`
    };
`),e.join("")}emitModifiedLRTable(t){const e=[];if(this.lrTable===null)throw new G("Tabela LR está nula.");const s=this.lrTable;e.push(`    int[][][] PARSER_TABLE = new LRTableAdapter().table;
`);let n=s.length;t.productions.size()>n&&(n=t.productions.size()),n=(""+n).length;let r="";e.push(`
`),e.push(`    public class LRTableAdapter // Code too large sem adapter (>64kb)
`),e.push(`    {
`),e.push("        int table[][][] = new int["+s.length+"]["+s[0].length+`][2];
`),e.push(`
`);for(let i=0;i<s.length;i++){e.push("        public class state"+i+"{ int q"+i+"[][] = {");for(let o=0;o<s[i].length;o++){e.push(" {"),e.push(te.CONSTANTS[s[i][o][0]]),e.push(", ");const a=""+s[i][o][1];for(let l=a.length;l<n;l++)e.push(" ");e.push(a),e.push("},")}e.pop(),e.push(`} }; }
`),r=r.concat("            table["+i+"] = new state"+i+"().q"+i+`;
`)}return e.push(`
        public LRTableAdapter(){
`+r+"        }"),e.push(`
    }`),e.push(`
`),e.join("")}async genLLSyntTables(t,e){const s=[];if(e==L.PARSER_LL){const n=t.startSymbol,r=t.FIRST_NON_TERMINAL,i=t.symbols.length,o="    int START_SYMBOL = "+n+`;

    int FIRST_NON_TERMINAL    = `+r+`;
    int FIRST_SEMANTIC_ACTION = `+i+`;
`;return s.push(o),s.push(`
`),s.push(await this.emitLLTable(new ye(t))),s.push(`
`),s.push(this.emitProductionsForLL(t)),s.push(`
`),s.push(this.emitErrorTableLL(t)),s.join("")}else return e==L.PARSER_REC_DESC?this.emitErrorTableLL(t):null}constList(t,e){const s=[];let n=[];if(t!=null)n=t.tokens.toArray();else if(e!=null)n=e.terminals;else throw new Error("Erro Interno");for(let r=0;r<n.length;r++){const i=n[r];i.charAt(0)=='"'?s.push("    int t_TOKEN_"+(r+2)+" = "+(r+2)+"; //"+i+`
`):s.push("    int t_"+i+" = "+(r+2)+`;
`)}return s.join("")}lex_table_compress(t){const e=[],s=t.transitions,n=new Array(s.size()+1).fill(-1);let r=0;for(let o=0;o<s.size();o++)n[o]=r,r+=s.get(o).size;n[n.length-1]=r;const i=new Array(r).fill(0).map(()=>new Array(2).fill(0));r=0;for(let o=0;o<s.size();o++)for(const[a,l]of s.get(o).entries())i[r][0]=a.charCodeAt(0),i[r][1]=l,r++;e.push(`    int[] SCANNER_TABLE_INDEXES = 
`),e.push(`    {
`);for(let o=0;o<n.length;o++)e.push("        "),e.push(n[o].toString()),e.push(`,
`);e.pop(),e.push(`
    };

`),e.push(`    int[][] SCANNER_TABLE = 
`),e.push(`    {
`);for(let o=0;o<i.length;o++)e.push("        {"),e.push(i[o][0].toString()),e.push(", "),e.push(i[o][1].toString()),e.push(`},
`);return e.pop(),e.push("}"),e.push(`
    };
`),e.join("")}lex_table(t){const e=[];e.push(`    int[][] SCANNER_TABLE = 
`),e.push(`    {
`);const s=t.transitions.size();let n=s.toString().length;n==1&&(n=2);for(let r=0;r<s;r++){e.push("        { ");for(let i=0;i<256;i++){const o=t.nextState(String.fromCharCode(i),r).toString();for(let a=o.length;a<n;a++)e.push(" ");e.push(o),e.push(", ")}e.pop(),e.push(` },
`)}return e.pop(),e.push(" }"),e.push(`
    };
`),e.join("")}token_state(t){const e=[];e.push("    int[] TOKEN_STATE = {");const s=t.transitions.size();let n=s.toString().length;n==1&&(n=2);for(let r=0;r<s;r++){const o=t.tokenForState(r).toString();for(let a=o.length;a<n;a++)e.push(" ");e.push(o),e.push(", ")}return e.pop(),e.push(` };
`),e.join("")}special_cases(t){const e=t.getSpecialCasesIndexes(),s=t.specialCases,n=[];let r=s.length;n.push(`    int[] SPECIAL_CASES_INDEXES =
        { `),r=e.length;for(let i=0;i<r;i++)n.push(e[i][0].toString()),n.push(", ");n.push(e[r-1][1].toString()),n.push(` };

`),n.push(`    String[] SPECIAL_CASES_KEYS =
        {  `),r=s.length;for(let i=0;i<r;i++)n.push('"'),n.push(s[i].key),n.push('", ');n.pop(),n.push('"'),n.push(` };

`),n.push(`    int[] SPECIAL_CASES_VALUES =
        {  `),r=s.length;for(let i=0;i<r;i++)n.push(s[i].value.toString()),n.push(", ");return n.pop(),n.push(` };
`),n.join("")}emitProductionsForLL(t){const e=t.productions,s=new Array(e.size()).fill([]);let n=0;for(let i=0;i<e.size();i++){const o=e.get(i).get_rhs();if(o.length>0){s[i]=[];for(let a=0;a<o.length;a++)s[i][a]=o[a].toString(),s[i][a].length>n&&(n=s[i][a].length)}else s[i]=new Array(1),s[i][0]="0"}const r=[];r.push(`    int[][] PRODUCTIONS = 
`),r.push(`    {
`);for(let i=0;i<s.length;i++){r.push("        {");for(let o=0;o<s[i].length;o++){r.push(" ");for(let a=s[i][o].length;a<n;a++)r.push(" ");r.push(s[i][o]),r.push(",")}r.pop(),r.push(` },
`)}return r.pop(),r.push(` }
`),r.push(`
    };
`),r.join("")}async emitLLTable(t){let e=await t.generateTable(),s=new Array(e.length).fill([]).map(()=>new Array(e[0].length)),n=0;for(let i=0;i<s.length;i++)for(let o=0;o<s[i].length;o++){let a=e[i][o].toString();s[i][o]=a,a.length>n&&(n=a.length)}const r=[];r.push(`    int[][] PARSER_TABLE =
`),r.push(`    {
`);for(let i=0;i<s.length;i++){r.push("        {");for(let o=0;o<s[i].length;o++){r.push(" ");for(let a=s[i][o].length;a<n;a++)r.push(" ");r.push(s[i][o]),r.push(",")}r.pop(),r.push(` },
`)}return r.pop(),r.push(" },"),r.push(`
    };
`),r.join("")}emitErrorTableLR(){if(this.lrTable==null)throw new G("Tabela LR está nula.");const t=this.lrTable.length,e=[];e.push(`    String[] PARSER_ERROR =
    {
`);for(let s=0;s<t;s++)e.push('        "Erro estado '+s),e.push(`",
`);return e.pop(),e.push('"'),e.push(`
    };
`),e.join("")}emitErrorTableLL(t){const e=t.symbols,s=[];s.push(`    String[] PARSER_ERROR =
    {
        "",
        "Era esperado fim de programa",
`);for(let n=2;n<t.FIRST_NON_TERMINAL;n++){s.push('        "Era esperado ');for(let r=0;r<e[n].length;r++)switch(e[n].charAt(r)){case'"':s.push('\\"');break;case"\\":s.push("\\\\");break;default:s.push(e[n].charAt(r))}s.push(`",
`)}for(let n=t.FIRST_NON_TERMINAL;n<e.length;n++)s.push('        "'+e[n]+" inválido"),s.push(`",
`);return s.pop(),s.push('"'),s.push(`
    };
`),s.join("")}}class Vn{sensitive=!0;lookup=!0;generate(t,e){const s=new Map,n=e.scannerName;let r;return t!=null?(this.sensitive=e.scannerCaseSensitive,this.lookup=t.specialCases.length>0,r=this.buildScanner(t,e)):r=this.buildEmptyScanner(e),s.set(n+".java",r),s}buildEmptyScanner(t){const e=[],s=t.pkgName;e.push(this.emitPackage(s));const n="public class "+t.scannerName+` implements Constants
{
    public Token nextToken() throws LexicalError
    {
        return null;
    }
}
`;return e.push(n),e.toString()}buildScanner(t,e){let s,n,r;e.input==L.INPUT_STREAM?(s="java.io.Reader",n=`StringBuffer bfr = new StringBuffer();
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
`,r='this(new java.io.StringReader(""));'):e.input==L.INPUT_STRING?(s="String",n="this.input = input;",r='this("");'):(s="",n="",r="");const i=e.pkgName;return this.emitPackage(i)+"public class "+e.scannerName+` implements Constants
{
    private int position;
    private String input;

    public `+e.scannerName+`()
    {
        `+r+`
    }

    public `+e.scannerName+"("+s+` input)
    {
        setInput(input);
    }

    public void setInput(`+s+` input)
    {
        `+n+`
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
`}auxFuncions(t,e){let s;switch(e.scannerTable){case L.SCANNER_TABLE_FULL:s=`    private int nextState(char c, int state)
    {
        int next = SCANNER_TABLE[state][c];
        return next;
    }
`;break;case L.SCANNER_TABLE_COMPACT:s=`    private int nextState(char c, int state)
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
`;break;case L.SCANNER_TABLE_HARDCODE:{const n=t.transitions,r=[];for(let i=0;i<n.size();i++){const o=n.get(i);if(o.size!=0){r.push("            case "+i+`:
                switch (c)
                {
`);for(const[a,l]of o.entries()){const m=a,c=l;r.push("                    case "+m.charCodeAt(0)+": return "+c+`;
`)}r.push(`                    default: return -1;
                }
`)}}s=`    private int nextState(char c, int state)
    {
        switch (state)
        {
`+r.join("")+`            default: return -1;
        }
    }
`}break;default:s=null}return s+`
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
`}}class Xn{input=new Fe;lhs;constructor(t){this.lhs=t}}class $e{_grammar;_llTable;_symbols;_functions=new Map;constructor(t,e){this._grammar=e,this._llTable=t,this._symbols=e.symbols;for(let s=0;s<this._symbols.length;s++)this._symbols[s].charAt(0)=="<"&&(this._symbols[s]=this._symbols[s].substring(1,this._symbols[s].length-1));this.build()}getSymbols(t){return this._symbols[t]}getStart(){return this._symbols[this._grammar.startSymbol]}build(){const t=this._grammar.productions.toArray();for(let e=0;e<this._llTable.length;e++){const s=e+this._grammar.FIRST_NON_TERMINAL,n=new Xn(s);this._functions.set(this._symbols[s],n);for(let r=0;r<this._llTable[0].length;r++){const i=this._llTable[e][r];if(i>=0){const o=r+1,l=t[i].get_rhs();n.input.set(o,l)}}}return this._functions}}class Jn{async generate(t,e){const s=new Map;if(t!=null){const n=e.parserName;let r;switch(e.parser){case L.PARSER_REC_DESC:r=await this.buildRecursiveDecendantParser(t,e);break;case L.PARSER_LL:r=this.buildLLParser(t,e);break;case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:r=this.buildLRParser(t,e);break;default:r=null}if(r===null)throw new G("String do Parser é nulo.");s.set(n+".java",r),s.set(e.semanticName+".java",this.generateSemanticAnalyser(e)),e.useASTLib&&(s.set("Node.java",this.generateNode(e)),s.set("CstmNode.java",this.generateCstmNode(e)))}return s}generateCstmNode(t){let e=[];const s=t.pkgName;return s&&s!==""&&e.push(`package ${s};

`),e.push(`public class CstmNode {
`),e.push(`
`),e.push(`	  @Override
`),e.push(`	  public String toString() {
`),e.push(`		    return "#CUSTOM";
`),e.push(`	  }
`),e.push(`
`),e.push(`	  @Override
`),e.push(`	  public boolean equals(Object o) {
`),e.push(`		    return true;
`),e.push(`	  }
`),e.push(`
`),e.push(`	  @Override
`),e.push(`	  public int hashCode() {
`),e.push(`		    return 0;
`),e.push(`	  }
`),e.push(`}
`),e.join("")}generateNode(t){let e=[];const s=t.pkgName;return s&&s!==""&&e.push(`package ${s};

`),e.push(`import java.util.function.Consumer;
`),e.push(`import java.util.function.BiConsumer;
`),e.push(`import java.util.List;
`),e.push(`import java.util.ArrayList;
`),e.push(`import java.util.Collections;
`),e.push(`
`),e.push(`public class Node
`),e.push(`{
`),e.push(`
`),e.push(`    public sealed interface NodeKind
`),e.push(`    {
`),e.push(`        public record Terminal(Token lex) implements NodeKind {}
`),e.push(`        public record NonTerminal(NonTerm nt) implements NodeKind {}
`),e.push(`        public record SemanticAction(int action, Token lex) implements NodeKind {}
`),e.push(`        public record CustomNode(CstmNode cn) implements NodeKind {}
`),e.push(`    }
`),e.push(`
`),e.push(`	public static boolean isSimilar(NodeKind lhs, NodeKind rhs) {
`),e.push(`		if (lhs instanceof NodeKind.Terminal a &&
`),e.push(`			rhs instanceof NodeKind.Terminal b) {
`),e.push(`			return a.lex().getId() == b.lex().getId();
`),e.push(`		}
`),e.push(`
`),e.push(`		if (lhs instanceof NodeKind.NonTerminal a &&
`),e.push(`			rhs instanceof NodeKind.NonTerminal b) {
`),e.push(`			return a.nt() == b.nt();
`),e.push(`		}
`),e.push(`
`),e.push(`		if (lhs instanceof NodeKind.SemanticAction a &&
`),e.push(`			rhs instanceof NodeKind.SemanticAction b) {
`),e.push(`			return a.action() == b.action();
`),e.push(`		}
`),e.push(`
`),e.push(`		if (lhs instanceof NodeKind.CustomNode &&
`),e.push(`			rhs instanceof NodeKind.CustomNode) {
`),e.push(`			return lhs == rhs;
`),e.push(`		}
`),e.push(`
`),e.push(`		return false;
`),e.push(`	}
`),e.push(`
`),e.push(`	public boolean isSimilar(NodeKind rhs) {
`),e.push(`		return Node.isSimilar(this.kind, rhs);
`),e.push(`	}
`),e.push(`
`),e.push(`    private final ArrayList<Node> children = new ArrayList<Node>();
`),e.push(`    private NodeKind kind;
`),e.push(`
`),e.push(`    public Node(Token tk) {
`),e.push(`        this.kind = new NodeKind.Terminal(tk);
`),e.push(`    }
`),e.push(`
`),e.push(`    public Node(NonTerm nt) {
`),e.push(`        this.kind = new NodeKind.NonTerminal(nt);
`),e.push(`    }
`),e.push(`
`),e.push(`    public Node(int action, Token actionlex) {
`),e.push(`        this.kind = new NodeKind.SemanticAction(action, actionlex);
`),e.push(`    }
`),e.push(`
`),e.push(`    public Node(NodeKind kind) {
`),e.push(`        this.kind = kind;
`),e.push(`    }
`),e.push(`
`),e.push(`	public NodeKind getKind() {
`),e.push(`        return this.kind;
`),e.push(`    }
`),e.push(`
`),e.push(`    public void setKind(NodeKind kind) {
`),e.push(`        this.kind = kind;
`),e.push(`    }
`),e.push(`
`),e.push(`    public List<Node> getChildren() {
`),e.push(`        return this.children;
`),e.push(`    }
`),e.push(`
`),e.push(`    public int ccount() {
`),e.push(`        return this.children.size();
`),e.push(`    }
`),e.push(`
`),e.push(`    public Node follow(int where) {
`),e.push(`        return this.children.get(where);
`),e.push(`    }
`),e.push(`
`),e.push(`    public void cpush(Node newchild) {
`),e.push(`        this.children.add(newchild);
`),e.push(`    }
`),e.push(`    public void morph(NodeKind kd) {
`),e.push(`        this.kind = kd;
`),e.push(`    }
`),e.push(`    public void invert_children() {
`),e.push(`        Collections.reverse(this.children);
`),e.push(`    }
`),e.push(`    public Node kidnap(int which) {
`),e.push(`        return this.children.remove(which);
`),e.push(`    }
`),e.push(`
`),e.push(`    public void printTree(int level) {
`),e.push(`        for (int i = 0; i < level; i++)
`),e.push(`            System.out.print("  ");
`),e.push(`
`),e.push(`        if (kind instanceof NodeKind.Terminal t) {
`),e.push(`            Token l = t.lex();
`),e.push(`            System.out.println(Reflection.TOKENS.get(l.getId()) + " \\"" + l.getLexeme() + "\\"");
`),e.push(`
`),e.push(`        } else if (kind instanceof NodeKind.NonTerminal nt) {
`),e.push(`            NonTerm p = nt.nt();
`),e.push(`            System.out.println("<" + Reflection.NONTERMS.get(p.index()) + ">");
`),e.push(`
`),e.push(`        } else if (kind instanceof NodeKind.SemanticAction a) {
`),e.push(`            System.out.println("#" + a.action());
`),e.push(`
`),e.push(`        } else if (kind instanceof NodeKind.CustomNode cn) {
`),e.push(`            System.out.println(cn.toString());
`),e.push(`        }
`),e.push(`
`),e.push(`        for (Node c : children)
`),e.push(`            c.printTree(level + 1);
`),e.push(`    }
`),e.push(`
`),e.push(`    // ---
`),e.push(`
`),e.push(`	public void transform(Consumer<Node> t) {
`),e.push(`        for (Node child : children)
`),e.push(`            child.transform(t);
`),e.push(`        t.accept(this);
`),e.push(`    }
`),e.push(`
`),e.push(`    public void transformPreorder(Consumer<Node> t) {
`),e.push(`        t.accept(this);
`),e.push(`        for (Node child : children)
`),e.push(`            child.transformPreorder(t);
`),e.push(`    }
`),e.push(`
`),e.push(`    public void transformDual(BiConsumer<Node, Boolean> t) {
`),e.push(`        t.accept(this, false);
`),e.push(`        for (Node child : children)
`),e.push(`            child.transformDual(t);
`),e.push(`        t.accept(this, true);
`),e.push(`    }
`),e.push(`
`),e.push(`    @FunctionalInterface
`),e.push(`    public interface TransformWithError {
`),e.push(`        void apply(Node node) throws AnalysisError;
`),e.push(`    }
`),e.push(`
`),e.push(`    public void tryTransform(TransformWithError t)
`),e.push(`        throws AnalysisError
`),e.push(`    {
`),e.push(`        for (Node child : children)
`),e.push(`            child.tryTransform(t);
`),e.push(`
`),e.push(`        t.apply(this);
`),e.push(`    }
`),e.push(`
`),e.push(`	// --
`),e.push(`
`),e.push(`	public void assimilate(NodeKind newKind, List<NodeKind> similars) {
`),e.push(`        transform(n -> {
`),e.push(`            for (NodeKind similar : similars) {
`),e.push(`                if (n.isSimilar(similar)) {
`),e.push(`                    n.morph(newKind);
`),e.push(`                    break;
`),e.push(`                }
`),e.push(`            }
`),e.push(`        });
`),e.push(`    }
`),e.push(`
`),e.push(`	public void squash(NodeKind target) {
`),e.push(`        transform(n -> {
`),e.push(`            if (n.isSimilar(target) && n.ccount() == 1) {
`),e.push(`                Node child = n.follow(0);
`),e.push(`
`),e.push(`                if (child.isSimilar(n.getKind())) {
`),e.push(`                    n.kind = child.kind;
`),e.push(`                    n.children.clear();
`),e.push(`                    n.children.addAll(child.children);
`),e.push(`                }
`),e.push(`            }
`),e.push(`        });
`),e.push(`    }
`),e.push(`
`),e.push(`    public void filter(NodeKind target, List<NodeKind> removelist) {
`),e.push(`        transform(n -> {
`),e.push(`            if (n.isSimilar(target)) {
`),e.push(`                n.children.removeIf(node -> {
`),e.push(`                    for (NodeKind remove : removelist) {
`),e.push(`                        if (node.isSimilar(remove))
`),e.push(`                            return true;
`),e.push(`                    }
`),e.push(`
`),e.push(`                    return false;
`),e.push(`                });
`),e.push(`            }
`),e.push(`        });
`),e.push(`    }
`),e.push(`
`),e.push(`    public void flatten(NodeKind target) {
`),e.push(`        transform(n -> {
`),e.push(`            ArrayList<Node> newChildren = new ArrayList<>();
`),e.push(`
`),e.push(`            for (Node child : n.children) {
`),e.push(`                if (child.isSimilar(target)) {
`),e.push(`                    newChildren.addAll(child.children);
`),e.push(`                } else {
`),e.push(`                    newChildren.add(child);
`),e.push(`                }
`),e.push(`            }
`),e.push(`
`),e.push(`            n.children.clear();
`),e.push(`            n.children.addAll(newChildren);
`),e.push(`        });
`),e.push(`    }
`),e.push(`
`),e.push(`    public void enlistify(NodeKind target) {
`),e.push(`        transform(n -> {
`),e.push(`            if (n.isSimilar(target) && !n.children.isEmpty()) {
`),e.push(`                Node last = n.children.get(n.children.size() - 1);
`),e.push(`
`),e.push(`                if (last.isSimilar(target)) {
`),e.push(`                    ArrayList<Node> newChildren = new ArrayList<>();
`),e.push(`
`),e.push(`                    for (Node child : n.children) {
`),e.push(`                        if (child.isSimilar(target)) {
`),e.push(`                            newChildren.addAll(child.children);
`),e.push(`                        } else {
`),e.push(`                            newChildren.add(child);
`),e.push(`                        }
`),e.push(`                    }
`),e.push(`
`),e.push(`                    n.children.clear();
`),e.push(`                    n.children.addAll(newChildren);
`),e.push(`                }
`),e.push(`            }
`),e.push(`        });
`),e.push(`    }
`),e.push(`
`),e.push(`    public void raise(NodeKind targetDest, NodeKind targetSrc) {
`),e.push(`        transform(n -> {
`),e.push(`            ArrayList<Node> newChildren = new ArrayList<>();
`),e.push(`
`),e.push(`            for (Node child : n.children) {
`),e.push(`                if (child.isSimilar(targetDest)) {
`),e.push(`                    ArrayList<Node> risen = new ArrayList<>();
`),e.push(`                    ArrayList<Node> remaining = new ArrayList<>();
`),e.push(`
`),e.push(`                    for (Node k : child.children) {
`),e.push(`                        if (k.isSimilar(targetSrc))
`),e.push(`                            risen.add(k);
`),e.push(`                        else
`),e.push(`                            remaining.add(k);
`),e.push(`                    }
`),e.push(`
`),e.push(`                    child.children.clear();
`),e.push(`                    child.children.addAll(remaining);
`),e.push(`
`),e.push(`                    newChildren.add(child);
`),e.push(`                    newChildren.addAll(risen);
`),e.push(`                } else {
`),e.push(`                    newChildren.add(child);
`),e.push(`                }
`),e.push(`            }
`),e.push(`
`),e.push(`            n.children.clear();
`),e.push(`            n.children.addAll(newChildren);
`),e.push(`        });
`),e.push(`    }
`),e.push(`}
`),e.join("")}async buildRecursiveDecendantParser(t,e){const s=[],n=e.pkgName;return s.push(this.emitPackage(n)),s.push(await this.emitRecursiveDecendantClass(t,e)),s.join("")}buildLLParser(t,e){const s=[],n=e.pkgName;return s.push(this.emitPackage(n)),s.push(this.emitImports()),s.push(this.emitLLClass(t,e)),s.join("")}buildLRParser(t,e){const s=[],n=e.pkgName;return s.push(this.emitPackage(n)),s.push(this.emitImports()),s.push(this.emitLRClass(t,e)),s.join("")}emitPackage(t){return t!=null&&t!==""?"package "+t+`;
`:""}emitImports(){return`import java.util.Stack;

`}emitLRClass(t,e){const s=[],n=e.parserName;s.push("public class "),s.push(n),s.push(` implements Constants
{
`);const r=e.scannerName,i=e.semanticName,o=`    private final Stack<Integer> stack = new Stack<Integer>();
    private Token currentToken;
    private Token previousToken;
    private `+r+` scanner;
`+(e.useASTLib?"":"    private "+i+` semanticAnalyser;
`);return s.push(o),e.useASTLib&&s.push(`    private final Stack<Node> forest = new Stack<Node>();
`),s.push(`
`),s.push("    public "+(e.useASTLib?"Node":"void")+" parse("+r+" scanner"+(e.useASTLib?"":", "+i+" semanticAnalyser")+`) throws LexicalError, SyntacticError, SemanticError
    {
        this.scanner = scanner;
`+(e.useASTLib?"":`        this.semanticAnalyser = semanticAnalyser;
`)+`
        stack.clear();
        stack.push(0);

        currentToken = scanner.nextToken();

        while ( ! step() )
            ;
`+(e.useASTLib?`        return forest.pop();
`:"")+`    }

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
`+(e.useASTLib?`                forest.push(new Node(currentToken));
`:"")+`                previousToken = currentToken;
                currentToken = scanner.nextToken();
                return false;

            case REDUCE:
                int[] prod = PRODUCTIONS[cmd[1]];

`+(e.useASTLib?`                var node = new Node(NonTerm.EPSILON);
                for (int i=0; i<prod[1]; i++) { 
                    node.cpush(forest.pop());
                    stack.pop();
                }
                node.invert_children();
                int oldState = stack.peek();
                stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);
                node.morph(new Node.NodeKind.NonTerminal(NonTerm.getNonTermFromIndex(prod[0])));
                forest.push(node);
                return false;
`:`                for (int i=0; i<prod[1]; i++)
                    stack.pop();

                int oldState = stack.peek();
                stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);
                return false;
`)+`
            case ACTION:
                int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;
`+(e.useASTLib?`                forest.push(new Node(cmd[1], previousToken));
`:"")+`                stack.push(PARSER_TABLE[state][action][1]);
`+(e.useASTLib?"":`                semanticAnalyser.executeAction(cmd[1], previousToken);
`)+`                return false;

            case ACCEPT:
                return true;

            case ERROR:
                throw new SyntacticError(PARSER_ERROR[state], currentToken.getPosition());
        }
        return false;
    }

`),s.push(`}
`),s.join("")}emitLLClass(t,e){const s=[],n=e.parserName;s.push("public class "),s.push(n),s.push(` implements Constants
{
`);const r=e.scannerName,i=e.semanticName,o=`    private final Stack<Integer> stack = new Stack<Integer>();
    private Token currentToken;
    private Token previousToken;
    private `+r+` scanner;
`+(e.useASTLib?"":"    private "+i+` semanticAnalyser;
`)+(e.useASTLib?`    private final Stack<Node>    forest = new Stack<Node>();
    private final Stack<Integer> nodect = new Stack<Integer>();
`:"")+`
`;return s.push(o),s.push(this.emitLLFunctions(e)),s.push(`}
`),s.join("")}emitLLFunctions(t){const e=[];return e.push(this.emitTesters()),e.push(`
`),e.push(this.emitStep(t)),e.push(`
`),e.push(this.emitDriver(t)),e.push(`
`),t.useASTLib&&e.push(this.emitDepopulator()),e.join("")}emitDepopulator(){return`    private void depopulateForest(Node nn) {
        this.forest.peek().cpush(nn);
        int itg = this.nodect.pop();
        while (itg == 1) {
            Node node = this.forest.pop();
            this.forest.peek().cpush(node);
            if (this.nodect.size() > 0) {
                itg = this.nodect.pop();
            } else {
                break;
            }
        }
        this.nodect.push((itg - 1) > 0 ? (itg - 1) : 0);
    }
`}emitTesters(){return`    private static final boolean isTerminal(int x)
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
`}emitDriver(t){const e=t.scannerName,s=t.semanticName;return(t.useASTLib?"    public Node parse(":"    public void parse(")+e+" scanner"+(t.useASTLib?"":", "+s+" semanticAnalyser")+`) throws LexicalError, SyntacticError, SemanticError
    {
        this.scanner = scanner;
`+(t.useASTLib?"":`        this.semanticAnalyser = semanticAnalyser;
`)+`
        stack.clear();
        stack.push(DOLLAR);
        stack.push(START_SYMBOL);
`+(t.useASTLib?`        this.forest.push(new Node(new Token(EPSILON, "", 0)));
`:"")+`
        currentToken = scanner.nextToken();

        while ( ! step() )
            ;
`+(t.useASTLib?`
        return this.forest.pop().kidnap(0);
`:"")+`    }
`}emitStep(t){return`    private boolean step() throws LexicalError, SyntacticError, SemanticError
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
`+(t.useASTLib?`            this.depopulateForest(new Node(new Token(EPSILON, "", 0)));
`:"")+`            return false;
        }
        else if (isTerminal(x))
        {
`+(t.useASTLib?`            this.depopulateForest(new Node(currentToken));
`:"")+`            if (x == a)
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
`+(t.useASTLib?`            this.depopulateForest(new Node(x - FIRST_SEMANTIC_ACTION, previousToken));
`:`            semanticAnalyser.executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);
`)+`            return false;
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
`+(t.useASTLib?`            this.forest.push(new Node(NonTerm.getNonTermFromIndex(topStack)));
            this.nodect.push(production.length);
`:"")+`            return true;
        }
        else
            return false;
    }
`}async emitRecursiveDecendantClass(t,e){const s=await new ye(t).generateTable(),n=new $e(s,t),r=[],i=e.parserName;r.push("public class "),r.push(i),r.push(` implements Constants
{
`);const o=e.scannerName,a=e.semanticName,l=`    private Token currentToken;
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

        `+n.getStart()+`();

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

`);const m=n.build();for(let c=t.FIRST_NON_TERMINAL;c<t.FIRST_SEMANTIC_ACTION();c++){const f=n.getSymbols(c),u=m.get(f);if(r.push("    private void "+f+`() throws AnalysisError
    {
        switch (currentToken.getId())
        {
`),u==null)throw new Le("Gramática não é LL.");const _=Array.from(u.input.keys());let d=new Set;for(let T=0;T<_.length;T++){const g=u.input.get(_[T]);let S=_[T];if(!d.has(S)){r.push("            case "+S+": // "+n.getSymbols(S)+`
`),d.add(S);for(let E=T+1;E<_.length;E++)if(u.input.get(_[E])===g){if(S=_[E],d.has(S))continue;r.push("            case "+S+": // "+n.getSymbols(S)+`
`),d.add(S)}if(g===void 0)throw new Le("Gramática não é LL.");g.length==0&&r.push(`                // EPSILON
`);for(let E=0;E<g.length;E++){const w=g[E];t.isTerminal(w)?r.push("                match("+w+"); // "+n.getSymbols(w)+`
`):t.isNonTerminal(w)?r.push("                "+n.getSymbols(w)+`();
`):r.push("                semanticAnalyser.executeAction("+(w-t.FIRST_SEMANTIC_ACTION())+`, previousToken);
`)}r.push(`                break;
`)}}r.push(`            default:
                throw new SyntacticError(PARSER_ERROR[`+u.lhs+`], currentToken.getPosition());
        }
    }

`)}return r.push(`}
`),r.join("")}generateSemanticAnalyser(t){const e=[],s=t.pkgName;s!=null&&s!==""&&e.push("package "+s+`;
`);const n="public class "+t.semanticName+` implements Constants
{
    public void executeAction(int action, Token token)	throws SemanticError
    {
        System.out.println("Ação #"+action+", Token: "+token);
    }	
}
`;return e.push(n),e.join("")}}class Qn{lrTable=null;async generate(t,e,s){const n=new Map;if(t===null||e===null)throw new Error("FiniteAutomata and Grammar must not be null");return n.set("Token.h",this.generateToken(s)),n.set("Constants.h",await this.generateConstantsH(t,e,s)),n.set("Constants.cpp",await this.generateConstantsCpp(t,e,s)),n.set("AnalysisError.h",this.generateAnalysisError(s)),n.set("LexicalError.h",this.generateLexicalError(s)),n.set("SyntacticError.h",this.generateSyntacticError(s)),n.set("SemanticError.h",this.generateSemanticError(s)),n}openNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"namespace "+e+` {

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
`}async generateConstantsH(t,e,s){return`#ifndef CONSTANTS_H
#define CONSTANTS_H

`+this.openNamespace(s)+`enum TokenId 
{
    EPSILON  = 0,
    DOLLAR   = 1,
`+this.constList(t,e)+`};

`+this.lexDecls(t,s)+await this.syntDecls(e,s)+(s.useASTLib?this.astlibdeclsH(e,s):"")+this.closeNamespace(s)+`#endif
`}astlibdeclsH(t,e){let s=[];s.push(`
extern const char *TOKEN_REFLECTION[${t.terminals.length+2}];

`),s.push(`extern const char *PRODUCTION_REFLECTION[${t.nonTerminals.length+1}];

`),s.push(`enum class NonTerm {
`),s.push(`    EPSILON,
`);for(let n=0;n<t.nonTerminals.length;n++){const r=t.nonTerminals[n],i=n+t.FIRST_NON_TERMINAL;s.push(`    nt_${r.slice(1,-1)} = ${i},
`)}return s.push(`};

`),e.parser!=L.PARSER_LL&&s.push(`const int FIRST_NON_TERMINAL = ${t.FIRST_NON_TERMINAL};
`),s.push(`
`),s.join("")}astlibdeclsCpp(t,e,s){let n=[];n.push(`const char *TOKEN_REFLECTION[${e.terminals.length+2}] = {
`),n.push(`    "EPSILON",
`),n.push(`    "DOLLAR",
`);const r=t.tokens.toArray();for(let i=0;i<r.length;i++){const o=r[i];let a;o.charAt(0)=='"'?a="t_TOKEN_"+(i+2):a="t_"+o,n.push(`    "${a}"`),n.push(`,
`)}n.pop(),n.push(`
};

`),n.push(`const char *PRODUCTION_REFLECTION[${e.nonTerminals.length+1}] = {
`);for(let i=0;i<e.nonTerminals.length;i++){const o=e.nonTerminals[i];n.push(`    "${o.slice(1,-1)}"`),n.push(`,
`)}return n.push(`    "EPSILON",
`),n.pop(),n.push(`
};

`),n.join("")}constList(t,e){let s="",n=null;if(t!=null)n=t.tokens.toArray();else if(e!=null)n=e.terminals;else throw new Error("Erro Interno");for(let r=0;r<n.length;r++){const i=n[r];i.charAt(0)=='"'?s+="    t_TOKEN_"+(r+2)+" = "+(r+2)+", //"+i+`
`:s+="    t_"+i+" = "+(r+2)+`,
`}return s=s.slice(0,-2),s+=`
`,s.toString()}lexDecls(t,e){return t==null?"":"const int STATES_COUNT = "+t.transitions.size()+`;
`+(e.scannerTable==L.SCANNER_TABLE_HARDCODE?"":`
extern int SCANNER_TABLE[STATES_COUNT][256];
`)+`
extern int TOKEN_STATE[STATES_COUNT];

`+(t.hasContext()?`extern int SCANNER_CONTEXT[STATES_COUNT][2];

`:"")+(t.specialCases.length>0?"extern int SPECIAL_CASES_INDEXES["+(t.getSpecialCasesIndexes().length+1)+`];

extern const char *SPECIAL_CASES_KEYS[`+t.specialCases.length+`];

extern int SPECIAL_CASES_VALUES[`+t.specialCases.length+`];

`:"")+`extern const char *SCANNER_ERROR[STATES_COUNT];

`}async syntDecls(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:{const s=t.FIRST_SEMANTIC_ACTION()-t.FIRST_NON_TERMINAL;return"extern const char *PARSER_ERROR["+(t.FIRST_NON_TERMINAL+s)+`];

`}case L.PARSER_LL:{let s=0;for(let r=0;r<t.productions.size();r++){const i=t.productions.get(r).get_rhs().length;i>s&&(s=i)}const n=t.FIRST_SEMANTIC_ACTION()-t.FIRST_NON_TERMINAL;return"const int START_SYMBOL = "+t.startSymbol+`;

const int FIRST_NON_TERMINAL    = `+t.FIRST_NON_TERMINAL+`;
const int FIRST_SEMANTIC_ACTION = `+t.FIRST_SEMANTIC_ACTION()+`;

extern int PARSER_TABLE[`+n+"]["+(t.FIRST_NON_TERMINAL-1)+`];

extern int PRODUCTIONS[`+t.productions.size()+"]["+(s+1)+`];

extern const char *PARSER_ERROR[`+(t.FIRST_NON_TERMINAL+n)+`];

`}default:{const s=je.createGenerator(t,e.parser);if(s==null)throw new G("Gerador de Tabela é nulo.");return this.lrTable=await s.buildIntTable(),"const int FIRST_SEMANTIC_ACTION = "+t.FIRST_SEMANTIC_ACTION()+`;

const int SHIFT  = 0;
const int REDUCE = 1;
const int ACTION = 2;
const int ACCEPT = 3;
const int GO_TO  = 4;
const int ERROR  = 5;

extern const int PARSER_TABLE[`+this.lrTable.length+"]["+this.lrTable[0].length+`][2];

extern const int PRODUCTIONS[`+t.productions.size()+`][2];

extern const char *PARSER_ERROR[`+this.lrTable.length+`];

`}}}async generateConstantsCpp(t,e,s){return`#include "Constants.h"

`+this.openNamespace(s)+this.lexTables(t,s)+await this.syntTables(e,s)+(s.useASTLib?this.astlibdeclsCpp(t,e,s):"")+this.closeNamespace(s)}lexTables(t,e){if(t==null)return"";let s,n,r="";r+=this.scannerTable(t,e)+`
`,r+="int TOKEN_STATE[STATES_COUNT] = {",s=t.transitions.size(),n=s.toString().length,n==1&&(n=2);for(let i=0;i<s;i++){const a=t.tokenForState(i).toString();for(let l=a.length;l<n;l++)r+=" ";r+=a+", "}r=r.slice(0,-2),r+=` };

`,r+=this.context(t),r+=this.specialCases(t),r+=`const char *SCANNER_ERROR[STATES_COUNT] =
{
`,s=t.transitions.size();for(let i=0;i<s;i++){r+='        "';const o=t.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?r+='\\"':r+=o.charAt(a);r+=`",
`}return r=r.slice(0,-2),r+=`
};

`,r.toString()}context(t){if(!t.hasContext())return"";let e="";e+=`int SCANNER_CONTEXT[STATES_COUNT][2] =
{
`;for(let s=0;s<t.transitions.size();s++)e+="    {",e+=t.isContext(s)?"1":"0",e+=", ",e+=t.getOrigin(s),e+=`},
`;return e=e.slice(0,-2),e+=`
};

`,e.toString()}scannerTable(t,e){if(e.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let s="";s+=`int SCANNER_TABLE[STATES_COUNT][256] = 
`,s+=`{
`;const n=t.transitions.size();let r=n.toString().length;r==1&&(r=2);for(let i=0;i<n;i++){s+="    { ";for(let o=0;o<256;o++){const a=t.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)s+=" ";s+=a+", ",o==200&&(s+=`
      `)}s=s.slice(0,-2),s+=` },
`}return s=s.slice(0,-2),s+=`
};
`,s.toString()}specialCases(t){if(t.specialCases.length>0){const e=t.getSpecialCasesIndexes(),s=t.specialCases;let n="",r=s.length;n+="int SPECIAL_CASES_INDEXES["+(e.length+1)+`] =
    { `,r=e.length;for(let i=0;i<r;i++)n+=e[i][0]+", ";n+=e[r-1][1],n=n.slice(0,-2),n+=` };

`,r=s.length,n+="const char *SPECIAL_CASES_KEYS["+r+`] =
    { `,r=s.length;for(let i=0;i<r;i++)n+='"'+s[i].key+'", ';n=n.slice(0,-2),n+=` };

`,n+="int SPECIAL_CASES_VALUES["+r+`] =
    { `;for(let i=0;i<r;i++)n+=s[i].value+", ";return n=n.slice(0,-2),n+=` };

`,n.toString()}else return""}async syntTables(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(t);case L.PARSER_LL:return await this.syntTransTable(new ye(t))+this.productionsLL(t)+this.syntErrorsLL(t);default:return await this.syntTransTable(t)+this.productionsLR(t)+this.syntErrorsLR()}}productionsLR(t){let e="";const s=t.productions.toArray();e+="const int PRODUCTIONS["+s.length+`][2] =
`,e+=`{
`;for(let n=0;n<s.length;n++)e+="    { ",e+=s[n].get_lhs(),e+=", ",e+=s[n].get_rhs().length,e+=` },
`;return e=e.slice(0,-2),e+=`
};
`,e.toString()}async syntTransTable(t){return t instanceof ie?this.syntTransTableGrammar(t):await this.syntTransTableLL(t)}syntTransTableGrammar(t){if(this.lrTable===null)throw new G("Tabela LR está nula.");let e="";e+="const int PARSER_TABLE["+this.lrTable.length+"]["+this.lrTable[0].length+`][2] =
`,e+=`{
`;let s=this.lrTable.length;t.productions.size()>s&&(s=t.productions.size()),s=(""+s).length;for(let n=0;n<this.lrTable.length;n++){e+="    {";for(let r=0;r<this.lrTable[n].length;r++){e+=" {",e+=te.CONSTANTS[this.lrTable[n][r][0]],e+=", ";const i=""+this.lrTable[n][r][1];for(let o=i.length;o<s;o++)e+=" ";e+=i+"},"}e=e.slice(0,-1),e+=` },
`}return e=e.slice(0,-2),e+=`
};
`,e.toString()}async syntTransTableLL(t){const e=await t.generateTable(),s=[];let n=0;for(let i=0;i<e.length;i++){s[i]=[];for(let o=0;o<e[i].length;o++){const a=e[i][o].toString();s[i][o]=a,a.length>n&&(n=a.length)}}let r="";r+="int PARSER_TABLE["+s.length+"]["+s[0].length+`] =
`,r+=`{
`;for(let i=0;i<s.length;i++){r+="    {";for(let o=0;o<s[i].length;o++){r+=" ";for(let a=s[i][o].length;a<n;a++)r+=" ";r+=s[i][o]+","}r=r.slice(0,-1),r+=` },
`}return r=r.slice(0,-2),r+=`
};

`,r.toString()}productionsLL(t){const e=t.productions.toArray(),s=[];let n=0,r=0;for(let o=0;o<e.length;o++){const a=e[o].get_rhs();if(a.length>r&&(r=a.length),a.length>0){s[o]=[],s[o][0]=a.length.toString();for(let l=0;l<a.length;l++)s[o][l+1]=a[l].toString(),s[o][l+1].length>n&&(n=s[o][l+1].length)}else s[o]=[],s[o][0]="1",s[o][1]="0"}let i="";i+="int PRODUCTIONS["+e.length+"]["+(r+1)+`] = 
`,i+=`{
`;for(let o=0;o<s.length;o++){i+="    {";for(let a=0;a<s[o].length;a++){i+=" ";for(let l=s[o][a].length;l<n;l++)i+=" ";i+=s[o][a]+","}for(let a=s[o].length;a<=r;a++){i+=" ";for(let l=1;l<n;l++)i+=" ";i+="0,"}i=i.slice(0,-1),i+=` },
`}return i=i.slice(0,-2),i+=`
};

`,i.toString()}syntErrorsLL(t){const e=t.symbols;let s="";s+="const char *PARSER_ERROR["+t.FIRST_SEMANTIC_ACTION()+`] =
{
    "",
    "Era esperado fim de programa",
`;for(let n=2;n<t.FIRST_NON_TERMINAL;n++){s+='    "Era esperado ';for(let r=0;r<e[n].length;r++)switch(e[n].charAt(r)){case'"':s+='\\"';break;case"\\":s+="\\\\";break;default:s+=e[n].charAt(r)}s+=`",
`}for(let n=t.FIRST_NON_TERMINAL;n<e.length;n++)s+='    "'+e[n]+` inválido",
`;return s=s.slice(0,-2),s+=`
};

`,s.toString()}syntErrorsLR(){if(this.lrTable===null)throw new G("Tabela LR está nula.");let t="";t+="const char *PARSER_ERROR["+this.lrTable.length+`] =
{
`;for(let e=0;e<this.lrTable.length;e++)t+='    "Erro estado '+e+`",
`;return t=t.slice(0,-2),t+=`
};

`,t.toString()}}class es{sensitive=!0;lookup=!0;generate(t,e){const s=new Map,n=e.scannerName;let r,i;return t!=null?(this.sensitive=e.scannerCaseSensitive,this.lookup=t.specialCases.length>0,r=this.buildScannerH(t,e),i=this.buildScannerCpp(t,e)):(r=this.buildEmptyScannerH(e),i=this.buildEmptyScannerCpp(e)),s.set(n+".h",r),s.set(n+".cpp",i),s}openNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"namespace "+e+` {

`:""}closeNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"} //namespace "+e+`

`:""}buildScannerH(t,e){let s="";const n=e.scannerName;let r,i,o;e.input==L.INPUT_STREAM?(r="std::istream &",i=`#include <iostream>
`,o="    "+n+"("+r+`input) { setInput(input); }
    `+n+`() : input(""), position(0) { }
`):e.input==L.INPUT_STRING?(r="const char *",i="",o="    "+n+"("+r+`input = "") { setInput(input); }
`):(r=null,i=null,o=null),s+="#ifndef "+n.toUpperCase()+`_H
`,s+="#define "+n.toUpperCase()+`_H
`,s+=`
#include "Token.h"
#include "LexicalError.h"

#include <string>
`+i+`
`,s+=this.openNamespace(e);const a="class "+n+`
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

`;return s+=a,s+=this.closeNamespace(e),s+=`#endif
`,s.toString()}buildScannerCpp(t,e){let s="";const n=e.scannerName;s+='#include "'+n+`.h"

`,this.sensitive||(s+=`#include <cctype>

`),s+=this.openNamespace(e);let r,i;e.input==L.INPUT_STREAM?(r="std::istream &",i=`    std::istreambuf_iterator<char> in(input);
    std::istreambuf_iterator<char> eof;

    this->input.assign(in, eof);

`):e.input==L.INPUT_STRING?(r="const char *",i=`    this->input = input;
`):(r=null,i=null);const o="void "+n+"::setInput("+r+`input)
{
`+i+`    setPosition(0);
}

Token *`+n+`::nextToken()
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

int `+n+`::nextState(unsigned char c, int state) const
{
`+this.nextStateImpl(t,e)+`}

TokenId `+n+`::tokenForState(int state) const
{
    int token = -1;

    if (state >= 0 && state < STATES_COUNT)
        token = TOKEN_STATE[state];

    return static_cast<TokenId>(token);
}

`+(this.lookup?"TokenId "+n+`::lookupToken(TokenId base, const std::string &key)
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

`:"");return s+=o,s+=this.closeNamespace(e),s.toString()}nextStateImpl(t,e){switch(e.scannerTable){case L.SCANNER_TABLE_FULL:case L.SCANNER_TABLE_COMPACT:return`    int next = SCANNER_TABLE[state][c];
    return next;
`;case L.SCANNER_TABLE_HARDCODE:{const s=t.transitions;let n="";for(let r=0;r<s.size();r++){const i=s.get(r);if(i.size!=0){n+="        case "+r+`:
            switch (c)
            {
`;for(const[o,a]of i.entries()){const l=o,m=a;n+=`                case ${l.charCodeAt(0)}: return ${m};
`}n+=`                default: return -1;
            }
`}}return`    switch (state)
    {
`+n.toString()+`        default: return -1;
    }
`}default:return""}}buildEmptyScannerH(t){let e="";const s=t.scannerName;e+="#ifndef "+s.toUpperCase()+`_H
`,e+="#define "+s.toUpperCase()+`_H
`,e+=`
#include "Token.h"
#include "LexicalError.h"

`,e+=this.openNamespace(t);const n="class "+s+`
{
public:

    Token *nextToken();

};

`;return e+=n,e+=this.closeNamespace(t),e+=`#endif
`,e.toString()}buildEmptyScannerCpp(t){let e="";const s=t.scannerName;e+='#include "'+s+`.h"

`,e+=this.openNamespace(t);const n="Token *"+s+`::nextToken()
{
    return 0;
}

`;return e+=n,e+=this.closeNamespace(t),e.toString()}}class ts{rd;async generate(t,e){const s=new Map;if(t!=null){const n=e.parserName;s.set(n+".h",await this.parserH(t,e)),s.set(n+".cpp",await this.parserCpp(t,e)),s.set(e.semanticName+".cpp",this.semanticAnalyserCpp(e)),s.set(e.semanticName+".h",this.semanticAnalyserH(e)),e.useASTLib&&(s.set("Node.h",this.nodeH(e)),s.set("Node.cpp",this.nodeCpp(e)))}return s}openNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"namespace "+e+` {

`:""}closeNamespace(t){const e=t.pkgName;return e!=null&&e!==""?"} //namespace "+e+`

`:""}nodeH(t){let e=[];return e.push(`#ifndef NODE_H
`),e.push(`#define NODE_H

`),e.push(`#include <memory>
`),e.push(`#include <variant>
`),e.push(`#include <vector>
`),e.push(`#include <iostream>
`),e.push(`#include <algorithm>
`),e.push(`#include <functional>
`),e.push(`#include "Token.h"

`),e.push(`#include "${t.semanticName}.h"
`),t.pkgName&&e.push(`using namespace ${t.pkgName};

`),e.push(`/*
`),e.push(` * As funções make_unique da biblioteca padrão foram
`),e.push(` * declaradas de forma diferente entre versões do C++.
`),e.push(` */
`),e.push(`#if defined(__cpp_lib_constexpr_memory) && \\
`),e.push(`    __cpp_lib_constexpr_memory >= 202202L
`),e.push(`    #define NODE_MAKE_UNIQUE_CONSTEXPR constexpr
`),e.push(`#else
`),e.push(`    #define NODE_MAKE_UNIQUE_CONSTEXPR
`),e.push(`#endif

`),e.push(this.openNamespace(t)),e.push(`using NodeData = std::variant<Token*, NonTerm, int, CustomNode>;

`),e.push(`enum class NodeKind {
`),e.push(`        Terminal,
`),e.push(`        NonTerminal,
`),e.push(`        SemanticAction,
`),e.push(`        Custom
`),e.push(`};

`),e.push(`class Node {
`),e.push(`private:
`),e.push(`        std::vector<std::unique_ptr<Node>> m_children;
`),e.push(`        NodeKind m_kind;
`),e.push(`        NodeData m_data;
`),e.push(`        Token* m_actionlex;

`),e.push(`        Node() = delete;

`),e.push(`        Node(Token*& lex)
`),e.push(`        : m_children(), m_kind(NodeKind::Terminal), m_data(lex)
`),e.push(`        {}

`),e.push(`        Node(NonTerm& prod)
`),e.push(`        : m_children(), m_kind(NodeKind::NonTerminal), m_data(prod)
`),e.push(`        {}

`),e.push(`        Node(int& action, Token*& actlex)
`),e.push(`        : m_children(), m_kind(NodeKind::SemanticAction), m_data(action), m_actionlex(actlex)
`),e.push(`        {}

`),e.push(`        Node(CustomNode& cn)
`),e.push(`        : m_children(), m_kind(NodeKind::Custom), m_data(cn)
`),e.push(`        {}

`),e.push(`public:

`),e.push(`        ~Node() = default;

`),e.push(`        Node(Node&)             = delete;
`),e.push(`        Node& operator=(Node&)  = delete;
`),e.push(`        Node(Node&&)            = default;
`),e.push(`        Node& operator=(Node&&) = default;

`),e.push(`        NodeKind kind(void) const noexcept;
`),e.push(`        const NodeData& data(void) const noexcept;

`),e.push(`        friend NODE_MAKE_UNIQUE_CONSTEXPR std::unique_ptr<Node> std::make_unique<Node, Token*&>(Token*&);
`),e.push(`        friend NODE_MAKE_UNIQUE_CONSTEXPR std::unique_ptr<Node> std::make_unique<Node, NonTerm&>(NonTerm&);
`),e.push(`        friend NODE_MAKE_UNIQUE_CONSTEXPR std::unique_ptr<Node> std::make_unique<Node, int&, Token*&>(int&, Token*&);

`),e.push(`        friend NODE_MAKE_UNIQUE_CONSTEXPR std::unique_ptr<Node> std::make_unique<Node, CustomNode&>(CustomNode&);

`),e.push(`        static std::unique_ptr<Node> from_terminal(Token* lex);
`),e.push(`        static std::unique_ptr<Node> from_nonterminal(NonTerm prod);
`),e.push(`        static std::unique_ptr<Node> from_semanticaction(int action, Token* actlex);

`),e.push(`        static std::unique_ptr<Node> from_customnode(CustomNode cn);

`),e.push(`        Token* getActionLex(void);
`),e.push(`        std::vector<std::unique_ptr<Node>>& getChildren(void);
`),e.push(`        std::pair<NodeKind&, NodeData&> getKind(void);
`),e.push(`
`),e.push(`        static bool isSimilar(std::pair<NodeKind&, NodeData&> lhs, std::pair<NodeKind&, NodeData&> rhs);
`),e.push(`
`),e.push(`        size_t ccount(void) const noexcept;
`),e.push(`        void cpush(std::unique_ptr<Node>&& newchild);

`),e.push(`        void invert_children(void);

`),e.push(`        void morph(NodeKind kind, NodeData data);

`),e.push(`        std::unique_ptr<Node>& follow(size_t whre);
`),e.push(`        std::unique_ptr<Node> kidnap(size_t which);

`),e.push(`        void print_tree(int level = 0) const;

`),e.push(`        static void transform(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&)> t);
`),e.push(`        static void transformPreorder(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&)> t);
`),e.push(`        static void transformDual(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&, bool)> t);

`),e.push(`		// ---
`),e.push(`
`),e.push(`        static void assimilate(
`),e.push(`        	std::unique_ptr<Node>& self,
`),e.push(`        	std::pair<NodeKind, NodeData> newkd,
`),e.push(`        	std::vector<std::pair<NodeKind, NodeData>> similars);
`),e.push(`
`),e.push(`        static void squash(
`),e.push(`        	std::unique_ptr<Node>& self,
`),e.push(`        	std::pair<NodeKind, NodeData> tgtkd);
`),e.push(`
`),e.push(`        static void filter(
`),e.push(`        	std::unique_ptr<Node>& self,
`),e.push(`        	std::pair<NodeKind, NodeData> tgtkd,
`),e.push(`        	std::vector<std::pair<NodeKind, NodeData>> removelist);
`),e.push(`
`),e.push(`        static void flatten(
`),e.push(`        	std::unique_ptr<Node>& self,
`),e.push(`        	std::pair<NodeKind, NodeData> tgtkd);
`),e.push(`
`),e.push(`        static void enlistify(
`),e.push(`        	std::unique_ptr<Node>& self,
`),e.push(`        	std::pair<NodeKind, NodeData> tgtkd);
`),e.push(`
`),e.push(`        static void raise(
`),e.push(`        	std::unique_ptr<Node>& self,
`),e.push(`        	std::pair<NodeKind, NodeData> destkd,
`),e.push(`        	std::pair<NodeKind, NodeData> srckd);
`),e.push(`
`),e.push(`};
`),e.push(`
`),e.push(`#define KDCOMPARE(lkind, ldata, rkind, rdata) \\
`),e.push(`	(Node::isSimilar( \\
`),e.push(`		std::make_pair< \\
`),e.push(`			std::reference_wrapper<NodeKind>, \\
`),e.push(`			std::reference_wrapper<NodeData>> \\
`),e.push(`		((lkind), (ldata)), \\
`),e.push(`		std::make_pair< \\
`),e.push(`			std::reference_wrapper<NodeKind>, \\
`),e.push(`			std::reference_wrapper<NodeData>> \\
`),e.push(`		((rkind), (rdata)) \\
`),e.push(`	))
`),e.push(`
`),e.push(this.closeNamespace(t)),e.push(`#endif
`),e.join("")}nodeCpp(t){let e=[];return e.push(`#include "Node.h"
`),e.push(`
`),this.openNamespace(t),e.push(`NodeKind Node::kind(void) const noexcept {
`),e.push(`      return m_kind;
`),e.push(`}
`),e.push(`
`),e.push(`const NodeData& Node::data(void) const noexcept {
`),e.push(`      return m_data;
`),e.push(`}
`),e.push(`
`),e.push(`std::unique_ptr<Node> Node::from_terminal(Token* lex) {
`),e.push(`      return std::make_unique<Node>(lex);
`),e.push(`}
`),e.push(`
`),e.push(`std::unique_ptr<Node> Node::from_nonterminal(NonTerm prod) {
`),e.push(`      return std::make_unique<Node>(prod);
`),e.push(`}
`),e.push(`
`),e.push(`std::unique_ptr<Node> Node::from_semanticaction(int action, Token* actlex) {
`),e.push(`      return std::make_unique<Node>(action, actlex);
`),e.push(`}
`),e.push(`std::unique_ptr<Node> Node::from_customnode(CustomNode cn) {
`),e.push(`      return std::make_unique<Node>(cn);
`),e.push(`}
`),e.push(`
`),e.push(`Token* Node::getActionLex(void) {
`),e.push(`      return m_actionlex;
`),e.push(`}
`),e.push(`
`),e.push(`std::vector<std::unique_ptr<Node>>& Node::getChildren(void) {
`),e.push(`      return m_children;
`),e.push(`}
`),e.push(`
`),e.push(`std::pair<NodeKind&, NodeData&> Node::getKind(void) {
`),e.push(`      return {m_kind, m_data};
`),e.push(`}
`),e.push(`
`),e.push(`size_t Node::ccount(void) const noexcept {
`),e.push(`      return m_children.size();
`),e.push(`}
`),e.push(`
`),e.push(`void Node::cpush(std::unique_ptr<Node>&& newchild) {
`),e.push(`      m_children.push_back(std::move(newchild));
`),e.push(`}
`),e.push(`
`),e.push(`void Node::invert_children(void) {
`),e.push(`      std::reverse(m_children.begin(), m_children.end());
`),e.push(`}
`),e.push(`
`),e.push(`void Node::morph(NodeKind kind, NodeData data) {
`),e.push(`  m_kind = kind;
`),e.push(`  m_data = data;
`),e.push(`}
`),e.push(`
`),e.push(`std::unique_ptr<Node>& Node::follow(size_t whre) {
`),e.push(`      return m_children[whre];
`),e.push(`}
`),e.push(`std::unique_ptr<Node> Node::kidnap(size_t which) {
`),e.push(`      auto removed = std::move(m_children[which]);
`),e.push(`      m_children.erase(m_children.begin() + which);
`),e.push(`      return removed;
`),e.push(`}
`),e.push(`
`),e.push(`void Node::print_tree(int level) const {
`),e.push(`
`),e.push(`      for (int i = 0; i < level; i++)
`),e.push(`              std::cout << "  ";
`),e.push(`
`),e.push(`      if (m_kind == NodeKind::Terminal) {
`),e.push(`              auto l = std::get<Token*>(m_data);
`),e.push(`              std::cout << (TOKEN_REFLECTION[l->getId()]) << " \\"" << l->getLexeme() << "\\"" << std::endl;
`),e.push(`      } else if (m_kind == NodeKind::NonTerminal) {
`),e.push(`              auto& p = std::get<NonTerm>(m_data);
`),e.push(`              std::cout << "<" << (PRODUCTION_REFLECTION[((int)p) - FIRST_NON_TERMINAL]) << ">" << std::endl;
`),e.push(`      } else if (m_kind == NodeKind::SemanticAction) {
`),e.push(`              auto& a = std::get<int>(m_data);
`),e.push(`              std::cout << "#" << a << std::endl;
`),e.push(`      } else {
`),e.push(`              auto& c = std::get<CustomNode>(m_data);
`),e.push(`              std::cout << c.to_string() << std::endl;
`),e.push(`      }
`),e.push(`
`),e.push(`      for (const auto& c : m_children)
`),e.push(`              c->print_tree(level + 1);
`),e.push(`}
`),e.push(`
`),e.push(`bool Node::isSimilar(std::pair<NodeKind&, NodeData&> lhs, std::pair<NodeKind&, NodeData&> rhs)
`),e.push(`{
`),e.push(`	auto [lkind, ldata] = lhs;
`),e.push(`	auto [rkind, rdata] = rhs;
`),e.push(`
`),e.push(`	if (lkind != rkind)
`),e.push(`		return false;
`),e.push(`
`),e.push(`	switch (lkind) {
`),e.push(`		case NodeKind::Terminal: {
`),e.push(`			Token* a = std::get<Token*>(ldata);
`),e.push(`			Token* b = std::get<Token*>(rdata);
`),e.push(`
`),e.push(`			if (a == nullptr || b == nullptr)
`),e.push(`				return a == b;
`),e.push(`
`),e.push(`			return a->getId() == b->getId();
`),e.push(`		}
`),e.push(`		case NodeKind::NonTerminal: {
`),e.push(`			return std::get<NonTerm>(ldata) == std::get<NonTerm>(rdata);
`),e.push(`		}
`),e.push(`		case NodeKind::SemanticAction: {
`),e.push(`			return std::get<int>(ldata) == std::get<int>(rdata);
`),e.push(`		}
`),e.push(`		case NodeKind::Custom: {
`),e.push(`			return std::get<CustomNode>(ldata) == std::get<CustomNode>(rdata);
`),e.push(`		}
`),e.push(`	}
`),e.push(`	return false;
`),e.push(`}
`),e.push(`
`),e.push(`void Node::transform(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&)> t)
`),e.push(`{
`),e.push(`      for (auto& c : self->m_children) Node::transform(c,t);
`),e.push(`      t(self);
`),e.push(`}
`),e.push(`
`),e.push(`void Node::transformPreorder(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&)> t)
`),e.push(`{
`),e.push(`      t(self);
`),e.push(`      for (auto& c : self->m_children) Node::transformPreorder(c,t);
`),e.push(`}
`),e.push(`
`),e.push(`void Node::transformDual(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&, bool)> t)
`),e.push(`{
`),e.push(`      t(self, false);
`),e.push(`      for (auto& c : self->m_children) Node::transformDual(c,t);
`),e.push(`      t(self, true);
`),e.push(`}
`),e.push(`
`),e.push(`// ---
`),e.push(`
`),e.push(`static void try_delete_terminal(NodeData& data) {
`),e.push(`	if (Token** tptr = std::get_if<Token*>(&data))
`),e.push(`		delete (*tptr);
`),e.push(`}
`),e.push(`
`),e.push(`void Node::assimilate(
`),e.push(`	std::unique_ptr<Node>& self,
`),e.push(`	std::pair<NodeKind, NodeData> newkd,
`),e.push(`	std::vector<std::pair<NodeKind, NodeData>> similars)
`),e.push(`{
`),e.push(`	auto& [newkind, newdata]   = newkd;
`),e.push(`	Node::transform(self, [&](auto& n) {
`),e.push(`		auto  [nkind, ndata] = n->getKind();
`),e.push(`		for (auto& [skind, sdata] : similars) {
`),e.push(`			if (KDCOMPARE(nkind, ndata, skind, sdata))
`),e.push(`			{
`),e.push(`				n->morph(newkind, newdata);
`),e.push(`				break;
`),e.push(`			}
`),e.push(`		}
`),e.push(`	});
`),e.push(`
`),e.push(`	try_delete_terminal(newkd.second);
`),e.push(`	for (auto& r : similars)
`),e.push(`		try_delete_terminal(r.second);
`),e.push(`}
`),e.push(`
`),e.push(`void Node::squash(
`),e.push(`	std::unique_ptr<Node>& self,
`),e.push(`	std::pair<NodeKind, NodeData> tgtkd)
`),e.push(`{
`),e.push(`	auto& [tkind, tdata] = tgtkd;
`),e.push(`	Node::transform(self, [&](std::unique_ptr<Node>& n) {
`),e.push(`		auto  [nkind, ndata] = n->getKind();
`),e.push(`		if (KDCOMPARE(nkind, ndata, tkind, tdata) == false)
`),e.push(`		{
`),e.push(`			return;
`),e.push(`		}
`),e.push(`
`),e.push(`		if (n->ccount() != 1)
`),e.push(`			return;
`),e.push(`
`),e.push(`		auto& child = n->follow(0);
`),e.push(`		auto [ckind, cdata] = child->getKind();
`),e.push(`
`),e.push(`		if (KDCOMPARE(ckind, cdata, nkind, ndata)) {
`),e.push(`			n = std::move(n->kidnap(0));
`),e.push(`		}
`),e.push(`	});
`),e.push(`
`),e.push(`	try_delete_terminal(tgtkd.second);
`),e.push(`}
`),e.push(`
`),e.push(`void Node::filter(
`),e.push(`	std::unique_ptr<Node>& self,
`),e.push(`	std::pair<NodeKind, NodeData> tgtkd,
`),e.push(`	std::vector<std::pair<NodeKind, NodeData>> removelist)
`),e.push(`{
`),e.push(`	auto& [tkind, tdata] = tgtkd;
`),e.push(`	Node::transform(self, [&](std::unique_ptr<Node>& n) {
`),e.push(`		auto [nkind, ndata] = n->getKind();
`),e.push(`
`),e.push(`		if (KDCOMPARE(nkind, ndata, tkind, tdata) == false)
`),e.push(`			return;
`),e.push(`
`),e.push(`		n->m_children.erase(
`),e.push(`			std::remove_if(
`),e.push(`				n->m_children.begin(),
`),e.push(`				n->m_children.end(),
`),e.push(`				[&](auto& child) {
`),e.push(`					auto [ckind, cdata] = child->getKind();
`),e.push(`					for (auto& [rkind, rdata] : removelist) {
`),e.push(`						if (KDCOMPARE(ckind, cdata, rkind, rdata))
`),e.push(`							return true;
`),e.push(`					}
`),e.push(`					return false;
`),e.push(`				}),
`),e.push(`			n->m_children.end()
`),e.push(`		);
`),e.push(`	});
`),e.push(`
`),e.push(`	try_delete_terminal(tgtkd.second);
`),e.push(`	for (auto& r : removelist)
`),e.push(`		try_delete_terminal(r.second);
`),e.push(`}
`),e.push(`
`),e.push(`void Node::flatten(
`),e.push(`	std::unique_ptr<Node>& self,
`),e.push(`	std::pair<NodeKind, NodeData> tgtkd)
`),e.push(`{
`),e.push(`
`),e.push(`	auto& [tkind, tdata] = tgtkd;
`),e.push(`	Node::transform(self, [&](std::unique_ptr<Node>& n) {
`),e.push(`		auto [nkind, ndata] = n->getKind();
`),e.push(`
`),e.push(`		std::vector<std::unique_ptr<Node>> new_children;
`),e.push(`		for (auto& child : n->m_children) {
`),e.push(`
`),e.push(`			auto [ckind, cdata] = child->getKind();
`),e.push(`			if (KDCOMPARE(ckind, cdata, tkind, tdata)) {
`),e.push(`				for (auto& grandchild : child->m_children) {
`),e.push(`					new_children.push_back(std::move(grandchild));
`),e.push(`				}
`),e.push(`			} else {
`),e.push(`				new_children.push_back(std::move(child));
`),e.push(`			}
`),e.push(`
`),e.push(`		}
`),e.push(`
`),e.push(`		n->m_children = std::move(new_children);
`),e.push(`	});
`),e.push(`
`),e.push(`	try_delete_terminal(tgtkd.second);
`),e.push(`}
`),e.push(`
`),e.push(`void Node::enlistify(
`),e.push(`	std::unique_ptr<Node>& self,
`),e.push(`	std::pair<NodeKind, NodeData> tgtkd)
`),e.push(`{
`),e.push(`	auto& [tkind, tdata] = tgtkd;
`),e.push(`	Node::transform(self, [&](std::unique_ptr<Node>& n) {
`),e.push(`		auto [nkind, ndata] = n->getKind();
`),e.push(`
`),e.push(`		if (n->ccount() == 0)
`),e.push(`			return;
`),e.push(`
`),e.push(`		auto [ckind, cdata] = n->m_children.back()->getKind();
`),e.push(`
`),e.push(`		if (KDCOMPARE(ckind, cdata, tkind, tdata) == false)
`),e.push(`			return;
`),e.push(`
`),e.push(`		std::vector<std::unique_ptr<Node>> new_children;
`),e.push(`
`),e.push(`		for (auto& kinder : n->m_children) {
`),e.push(`			auto [kkind, kdata] = kinder->getKind();
`),e.push(`			if (KDCOMPARE(kkind, kdata, tkind, tdata)) {
`),e.push(`				for (auto& grand : kinder->m_children) {
`),e.push(`					new_children.push_back(std::move(grand));
`),e.push(`				}
`),e.push(`			} else {
`),e.push(`				new_children.push_back(std::move(kinder));
`),e.push(`			}
`),e.push(`		}
`),e.push(`
`),e.push(`		n->m_children = std::move(new_children);
`),e.push(`	});
`),e.push(`	try_delete_terminal(tgtkd.second);
`),e.push(`}
`),e.push(`
`),e.push(`void Node::raise(
`),e.push(`	std::unique_ptr<Node>& self,
`),e.push(`	std::pair<NodeKind, NodeData> destkd,
`),e.push(`	std::pair<NodeKind, NodeData> srckd)
`),e.push(`{
`),e.push(`	auto& [tkind, tdata] = srckd;
`),e.push(`	auto& [dkind, ddata] = destkd;
`),e.push(`	Node::transform(self, [&](std::unique_ptr<Node>& n) {
`),e.push(`		auto [nkind, ndata] = n->getKind();
`),e.push(`
`),e.push(`		std::vector<std::unique_ptr<Node>> new_children;
`),e.push(`
`),e.push(`        for (auto& child : n->m_children) {
`),e.push(`
`),e.push(`			auto [ckind, cdata] = child->getKind();
`),e.push(`
`),e.push(`			if (KDCOMPARE(ckind, cdata, dkind, ddata) == false) {
`),e.push(`				new_children.push_back(std::move(child));
`),e.push(`				continue;
`),e.push(`			}
`),e.push(`
`),e.push(`            std::vector<std::unique_ptr<Node>> risen;
`),e.push(`            auto& grandchildren = child->m_children;
`),e.push(`            auto it = grandchildren.begin();
`),e.push(`
`),e.push(`			while (it != grandchildren.end()) {
`),e.push(`				auto [ikind, idata] = (*it)->getKind();
`),e.push(`				if (KDCOMPARE(ikind, idata, tkind, tdata)) {
`),e.push(`                    risen.push_back(std::move(*it));
`),e.push(`                    it = grandchildren.erase(it);
`),e.push(`                } else {
`),e.push(`                    ++it;
`),e.push(`                }
`),e.push(`            }
`),e.push(`
`),e.push(`            new_children.push_back(std::move(child));
`),e.push(`
`),e.push(`            for (auto& r : risen) {
`),e.push(`                new_children.push_back(std::move(r));
`),e.push(`            }
`),e.push(`		}
`),e.push(`
`),e.push(`        n->m_children = std::move(new_children);
`),e.push(`	});
`),e.push(`
`),e.push(`	try_delete_terminal(destkd.second);
`),e.push(`	try_delete_terminal(srckd.second);
`),e.push(`}
`),this.closeNamespace(t),e.join("")}semanticAnalyserH(t){const e=t.semanticName;return"#ifndef "+e.toUpperCase()+`_H
#define `+e.toUpperCase()+`_H

#include "Token.h"
#include "SemanticError.h"

`+this.openNamespace(t)+"class "+e+`
{
public:
    void executeAction(int action, const Token *token);
};

`+(t.useASTLib?this.semanticHAST():"")+this.closeNamespace(t)+`#endif
`}semanticHAST(){let t=[];return t.push(`class CustomNode {
`),t.push(`public:
`),t.push(`    std::string to_string(void) const;
`),t.push(`    bool operator==(const CustomNode& rhs) const;
`),t.push(`};
`),t.join("")}semanticAnalyserCpp(t){const e=t.semanticName;return'#include "'+e+`.h"
#include "Constants.h"

#include <iostream>

`+this.openNamespace(t)+"void "+e+`::executeAction(int action, const Token *token)
{
    std::cout << "Ação: " << action << ", Token: "  << token->getId() 
              << ", Lexema: " << token->getLexeme() << std::endl;
}

`+(t.useASTLib?this.semanticCppAST():"")+this.closeNamespace(t)}semanticCppAST(){let t=[];return t.push("    std::string CustomNode::to_string(void) const {"),t.push('        return "CustomNode";'),t.push("    }"),t.push("    "),t.push("    bool CustomNode::operator==(const CustomNode& rhs) const {"),t.push("        (void) rhs;"),t.push("        return true;"),t.push("    }"),t.join("")}async parserH(t,e){const s=e.scannerName,n=e.parserName,r=e.semanticName,i=e.parser,o=i==L.PARSER_REC_DESC;let a="";if(o){const m=await new ye(t).generateTable();this.rd=new $e(m,t);let c="";c+="    void match(int token);";for(let f=t.FIRST_NON_TERMINAL;f<t.FIRST_SEMANTIC_ACTION();f++)c+="    void "+this.rd.getSymbols(f)+`();
`;a=c.toString()}return"#ifndef "+n+`_H
#define `+n+`_H

#include "Constants.h"
#include "Token.h"
#include "`+s+`.h"
#include "`+r+`.h"
#include "SyntacticError.h"

`+(e.useASTLib?`#include "Node.h"
`:"")+(o?"":`#include <stack>

`)+this.openNamespace(e)+"class "+n+`
{
public:
    `+n+`() : previousToken(0), currentToken(0) { }

    ~`+n+`()
    {
        if (previousToken != 0 && previousToken != currentToken) delete previousToken;
        if (currentToken != 0)  delete currentToken;
    }

    `+(e.useASTLib?"std::unique_ptr<Node>":"void")+" parse("+s+" *scanner"+(e.useASTLib==!1?", "+r+" *semanticAnalyser":"")+`);

private:
`+(o?"":`    std::stack<int> stack;
`)+`    Token *previousToken;
    Token *currentToken;
`+(e.useASTLib?`    std::vector<std::unique_ptr<Node>> forest = {};
`:"")+(e.useASTLib&&e.parser==L.PARSER_LL?`    std::vector<int> nodect = {};
`:"")+"    "+s+` *scanner;
    `+(e.useASTLib==!1?r+` *semanticAnalyser;

`:"")+(o?a:`    bool step();
`+(i==L.PARSER_LL?`    bool pushProduction(int topStack, int tokenInput);

    static bool isTerminal(int x) { return x < FIRST_NON_TERMINAL; }
    static bool isNonTerminal(int x) { return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION; }
    static bool isSemanticAction(int x) { return x >= FIRST_SEMANTIC_ACTION; }

`+(e.useASTLib?"    void depopulate_forest(std::unique_ptr<Node>&& nn);":""):""))+`};

`+this.closeNamespace(e)+`#endif
`}async parserCpp(t,e){switch(e.parser){case L.PARSER_REC_DESC:return await this.parserCppRecursiveDescendant(t,e);case L.PARSER_LL:return this.parserCppLL(t,e);default:return this.parserCppLR(t,e)}}async parserCppRecursiveDescendant(t,e){const s=await new ye(t).generateTable(),n=new $e(s,t);if(n==null)throw new G("RecursiveDescendent é nulo.");const r=e.scannerName,i=e.parserName,o=e.semanticName,a='#include "'+i+`.h"

`+this.openNamespace(e)+"void "+i+"::parse("+r+" *scanner, "+o+` *semanticAnalyser)
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

    `+n.getStart()+`();

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
`;let l="";const m=n.build();for(let f=t.FIRST_NON_TERMINAL;f<t.FIRST_SEMANTIC_ACTION();f++){const u=n.getSymbols(f),_=m.get(u);if(_==null)throw new G("FunctionCustom é nulo");l+=`
void `+i+"::"+u+`()
{
    switch (currentToken->getId())
    {
`;const d=Array.from(_.input.keys());let T=new Set;for(let g=0;g<d.length;g++){const S=_.input.get(d[g]);let E=d[g];if(!T.has(E)){l+="        case "+E+": // "+n.getSymbols(E)+`
`;for(let w=g+1;w<d.length;w++){const y=_.input.get(d[w]);if(S==null||y==null)throw new G("rhs é nulo");if(y===S){if(E=d[w],T.has(E))continue;l+="        case "+E+": // "+n.getSymbols(E)+`
`,d.splice(w,1),T.add(E)}}if(S?.length==0&&(l+=`            // EPSILON
`),S==null)throw new G("rhs é nulo");for(let w=0;w<S.length;w++){const y=S[w];t.isTerminal(y)?l+="            match("+y+"); // "+n.getSymbols(y)+`
`:t.isNonTerminal(y)?l+="            "+n.getSymbols(y)+`();
`:l+="            semanticAnalyser->executeAction("+(y-t.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}l+=`            break;
`}}l+=`        default:
            throw SyntacticError(PARSER_ERROR[`+_.lhs+`], currentToken->getPosition());
    }
}
`}const c=`
`+this.closeNamespace(e);return a+l.toString()+c}parserCppLL(t,e){const s=e.scannerName,n=e.parserName,r=e.semanticName;return'#include "'+n+`.h"

`+this.openNamespace(e)+(e.useASTLib?"std::unique_ptr<Node> ":"void ")+n+"::parse("+s+" *scanner"+(e.useASTLib==!1?", "+r+" *semanticAnalyser":"")+`)
{
    this->scanner = scanner;
`+(e.useASTLib==!1?`    this->semanticAnalyser = semanticAnalyser;
`:"")+`
    //Limpa a pilha
    while (! stack.empty())
        stack.pop();

    stack.push(DOLLAR);
    stack.push(START_SYMBOL);

`+(e.useASTLib?`    forest.push_back(Node::from_terminal(new Token(TokenId::EPSILON, "", 0)));

`:`    if (previousToken != 0 && previousToken != currentToken)
        delete previousToken;
`)+`    previousToken = 0;

`+(e.useASTLib?"":`    if (currentToken != 0)
        delete currentToken;
`)+`    currentToken = scanner->nextToken();

    while ( ! step() )
        ;
`+(e.useASTLib?"    return std::move(forest[0]);":"")+`}

bool `+n+`::step()
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
`+(e.useASTLib?`        this->depopulate_forest(Node::from_terminal(new Token(TokenId::EPSILON, "", 0)));
`:"")+`        return false;
    }
    else if (isTerminal(x))
    {
`+(e.useASTLib?`        this->depopulate_forest(Node::from_terminal(currentToken));
`:"")+`        if (x == a)
        {
            if (stack.empty())
                return true;
            else
            {
`+(e.useASTLib?"":`                if (previousToken != 0)
                    delete previousToken;
`)+`                previousToken = currentToken;
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
`+(e.useASTLib?`        this->depopulate_forest(Node::from_semanticaction(x - FIRST_SEMANTIC_ACTION, previousToken));
`:`        semanticAnalyser->executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);
`)+`        return false;
    }
}

bool `+n+`::pushProduction(int topStack, int tokenInput)
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
`+(e.useASTLib?`        forest.push_back(Node::from_nonterminal((NonTerm) topStack));
        nodect.push_back(length);
`:"")+`        return true;
    }
    else
        return false;
}

`+(e.useASTLib?"void "+n+`::depopulate_forest(std::unique_ptr<Node>&& nn)
{
    forest.back()->cpush(std::move(nn));
    int itg = nodect.back(); nodect.pop_back();
    while (itg == 1) {
       auto node = std::move(forest.back()); forest.pop_back();
       forest.back()->cpush(std::move(node));
       if (nodect.size() > 0) {
           itg = nodect.back(); nodect.pop_back();
       } else {
           break;
       }
    }
    nodect.push_back((itg - 1) > 0 ? (itg - 1) : 0);
}

`:"")+this.closeNamespace(e)}parserCppLR(t,e){const s=e.scannerName,n=e.parserName,r=e.semanticName;return'#include "'+n+`.h"

`+this.openNamespace(e)+(e.useASTLib?"std::unique_ptr<Node>":"void ")+n+"::parse("+s+" *scanner"+(e.useASTLib==!1?" ,"+r+" *semanticAnalyser":"")+`)
{
    this->scanner = scanner;
`+(e.useASTLib==!1?`    this->semanticAnalyser = semanticAnalyser;
`:"")+`
    //Limpa a pilha
    while (! stack.empty())
        stack.pop();

    stack.push(0);

`+(e.useASTLib?"":`    if (previousToken != 0 && previousToken != currentToken)
        delete previousToken;
`)+`    previousToken = 0;

`+(e.useASTLib?"":`    if (currentToken != 0)
        delete currentToken;
`)+`    currentToken = scanner->nextToken();

    while ( ! step() )
        ;
`+(e.useASTLib?`    return std::move(forest[0]);
`:"")+`}

bool `+n+`::step()
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
`+(e.useASTLib?`            forest.push_back(Node::from_terminal(currentToken));
`:`            if (previousToken != 0)
                delete previousToken;
`)+`            previousToken = currentToken;
            currentToken = scanner->nextToken();
            return false;
        }
        case REDUCE:
        {
            const int* prod = PRODUCTIONS[cmd[1]];

`+(e.useASTLib?`            auto node = Node::from_nonterminal(NonTerm::EPSILON);

            for (int i=0; i<prod[1]; i++) {
                node->cpush(std::move(forest.back()));
                forest.pop_back();
                stack.pop();
            }
            node->invert_children();
`:`            for (int i=0; i<prod[1]; i++)
                stack.pop();
`)+`
            int oldState = stack.top();
            stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);
`+(e.useASTLib?`
            node->morph(NodeKind::NonTerminal, (NonTerm) prod[0]);
            forest.push_back(std::move(node));
`:"")+`            return false;
        }
        case ACTION:
        {
            int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;
`+(e.useASTLib?`            forest.push_back(Node::from_semanticaction(cmd[1], previousToken));
`:"")+`            stack.push(PARSER_TABLE[state][action][1]);
`+(e.useASTLib==!1?`            semanticAnalyser->executeAction(cmd[1], previousToken);
`:"")+`            return false;
        }
        case ACCEPT:
            return true;

        case ERROR:
            throw SyntacticError(PARSER_ERROR[state], currentToken->getPosition());
    }
    return false;
}

`+this.closeNamespace(e)}}class ns{lrTable=null;async generate(t,e,s){if(t===null||e===null)throw new Error("FiniteAutomata and Grammar must not be null");const n=new Map;return n.set("UToken.pas",this.generateToken()),n.set("UConstants.pas",await this.generateConstants(t,e,s)),n.set("UAnalysisError.pas",this.generateAnalysisError()),n.set("ULexicalError.pas",this.generateLexicalError()),n.set("USyntacticError.pas",this.generateSyntacticError()),n.set("USemanticError.pas",this.generateSemanticError()),n}generateToken(){return`unit UToken;

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
`}async generateConstants(t,e,s){return`unit UConstants;

interface

const

`+this.constants(t,e)+this.lexTables(t,s)+await this.syntTables(e,s)+`implementation

end.
`}constants(t,e){let s="",n=null;if(t!=null)n=t.tokens.toArray();else if(e!=null)n=e.terminals;else throw new Error("Erro Interno");s+=`    EPSILON = 0;
    DOLLAR  = 1;

`;for(let r=0;r<n.length;r++){const i=n[r];i.charAt(0)=='"'?s+="    t_TOKEN_"+(r+2)+" = "+(r+2)+"; //"+i+`
`:s+="    t_"+i+" = "+(r+2)+`;
`}return s+=`
`,s.toString()}lexTables(t,e){return t==null?"":"    STATES_COUNT = "+t.transitions.size()+`;

`+this.mainLex(t,e)+this.context(t)+(t.specialCases.length>0?this.lookup(t):"")+this.scanner_error(t)}context(t){if(!t.hasContext())return"";let e="";e+=`    SCANNER_CONTEXT : array[0..STATES_COUNT-1][0..1] of integer =
    (
`;for(let s=0;s<t.transitions.size();s++)e+="        (",e+=t.isContext(s)?"1":"0",e+=", ",e+=t.getOrigin(s),e+=`),
`;return e=e.slice(0,-2),e+=`
    );
`,e.toString()}scanner_error(t){let e="";e+=`    SCANNER_ERROR : array[0..STATES_COUNT-1] of string =
    (
`;const s=t.transitions.size();for(let n=0;n<s;n++){e+="        '";const r=t.getError(n);for(let i=0;i<r.length;i++)r.charAt(i)=="'"?e+="''":e+=r.charAt(i);e+=`',
`}return e=e.slice(0,-2),e+=`
    );
`,e.toString()}mainLex(t,e){let s="",n;s+=this.scannerTable(t,e),s+=`    TOKEN_STATE : array[0..STATES_COUNT-1] of integer =
        ( `;const r=t.transitions.size();n=r.toString().length,n==1&&(n=2);for(let i=0;i<r;i++){const a=t.tokenForState(i).toString();for(let l=a.length;l<n;l++)s+=" ";s+=a+", "}return s=s.slice(0,-2),s+=` );

`,s.toString()}scannerTable(t,e){if(e.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let s="";s+=`    SCANNER_TABLE : array[0..STATES_COUNT-1, char] of integer =
    ( 
`;const n=t.transitions.size();let r=n.toString().length;r==1&&(r=2);for(let i=0;i<n;i++){s+="        ( ";for(let o=0;o<256;o++){const a=t.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)s+=" ";s+=a+", ",o==200&&(s+=`
          `)}s=s.slice(0,-2),s+=` ),
`}return s=s.slice(0,-2),s+=`
    );

`,s.toString()}lookup(t){let e="";const s=t.getSpecialCasesIndexes();e+="    SPECIAL_CASES_INDEXES : array[0.."+s.length+`] of integer =
        ( `;let n=s.length;for(let i=0;i<s.length;i++)e+=s[i][0],e+=", ";e+=s[n-1][1],e+=` );

`;const r=t.specialCases;n=r.length,e+="    SPECIAL_CASES_KEYS : array[0.."+(n-1)+`] of string =
        (  `;for(let i=0;i<n;i++)e+="'",e+=r[i].key,e+="', ";e=e.slice(0,-2),e+=` );

`,e+="    SPECIAL_CASES_VALUES : array[0.."+(n-1)+`] of integer =
        (  `;for(let i=0;i<n;i++)e+=r[i].value,e+=", ";return e=e.slice(0,-2),e+=` );

`,e.toString()}async syntTables(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:return this.errorLL(t);case L.PARSER_LL:return"    START_SYMBOL = "+t.startSymbol+`;

    FIRST_NON_TERMINAL    = `+t.FIRST_NON_TERMINAL+`;
    FIRST_SEMANTIC_ACTION = `+t.FIRST_SEMANTIC_ACTION()+`;

`+await this.transTablesLL(new ye(t))+this.prodsLL(t)+this.errorLL(t);case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:return"    FIRST_SEMANTIC_ACTION = "+t.FIRST_SEMANTIC_ACTION()+`;

    SHIFT  = 0;
    REDUCE = 1;
    ACTION = 2;
    ACCEPT = 3;
    GO_TO  = 4;
    ERROR  = 5;

`+await this.transTablesLR(t)+`
`+this.prodsLR(t)+`
`+this.errorLR();default:return""}}async transTablesLR(t){const e=je.createGenerator(t,L.PARSER_SLR);if(e==null)throw new G("Gerador de Tabela é nulo.");this.lrTable=await e.buildIntTable();let s="";s+="    PARSER_TABLE : array[0.."+(this.lrTable.length-1)+", 0.."+(this.lrTable[0].length-1)+`, 0..1] of integer =
`,s+=`    (
`;let n=this.lrTable.length;t.productions.size()>n&&(n=t.productions.size()),n=(""+n).length;for(let r=0;r<this.lrTable.length;r++){s+="        (";for(let i=0;i<this.lrTable[r].length;i++){s+=" (",s+=te.CONSTANTS[this.lrTable[r][i][0]],s+=", ";const o=""+this.lrTable[r][i][1];for(let a=o.length;a<n;a++)s+=" ";s+=o+"),"}s=s.slice(0,-1),s+=` ),
`}return s=s.slice(0,-2),s+=`
    );
`,s.toString()}prodsLR(t){let e="";const s=t.productions.toArray();e+="    PRODUCTIONS : array[0.."+(s.length-1)+`, 0..1] of Integer =
`,e+=`    (
`;for(let n=0;n<s.length;n++)e+="        ( ",e+=s[n].get_lhs(),e+=", ",e+=s[n].get_rhs().length,e+=` ),
`;return e=e.slice(0,-2),e+=`
    );
`,e.toString()}async transTablesLL(t){const e=await t.generateTable(),s=[];let n=0;for(let i=0;i<e.length;i++){s[i]=[];for(let o=0;o<e[i].length;o++){const a=e[i][o].toString();s[i][o]=a,a.length>n&&(n=a.length)}}let r="";r+="    PARSER_TABLE : array[0.."+(s.length-1)+", 0.."+(s[0].length-1)+`] of integer =
`,r+=`    (
`;for(let i=0;i<s.length;i++){r+="        (";for(let o=0;o<s[i].length;o++){r+=" ";for(let a=s[i][o].length;a<n;a++)r+=" ";r+=s[i][o]+","}r=r.slice(0,-1),r+=` ),
`}return r=r.slice(0,-2),r+=`
    );

`,r.toString()}prodsLL(t){const e=t.productions.toArray(),s=[];let n=0,r=0;for(let o=0;o<e.length;o++){const a=e[o].get_rhs();if(a.length>r&&(r=a.length),a.length>0){s[o]=[],s[o][0]=a.length.toString();for(let l=0;l<a.length;l++)s[o][l+1]=a[l].toString(),s[o][l+1].length>n&&(n=s[o][l+1].length)}else s[o]=[],s[o][0]="1",s[o][1]="0"}let i="";i+="    PRODUCTIONS : array[0.."+(e.length-1)+", 0.."+r+`] of integer =
`,i+=`    (
`;for(let o=0;o<s.length;o++){i+="        (";for(let a=0;a<s[o].length;a++){i+=" ";for(let l=s[o][a].length;l<n;l++)i+=" ";i+=s[o][a]+","}for(let a=s[o].length;a<=r;a++){i+=" ";for(let l=1;l<n;l++)i+=" ";i+="0,"}i=i.slice(0,-1),i+=` ),
`}return i=i.slice(0,-2),i+=`
    );

`,i.toString()}errorLL(t){const e=t.symbols;let s="";s+="    PARSER_ERROR : array [0.."+(t.symbols.length-1)+`] of string =
    (
        '',
        'Era esperado fim de programa',
`;for(let n=2;n<t.FIRST_NON_TERMINAL;n++){s+="        'Era esperado ";for(let r=0;r<e[n].length;r++)e[n].charAt(r)==="'"?s+="''":s+=e[n].charAt(r);s+=`',
`}for(let n=t.FIRST_NON_TERMINAL;n<e.length;n++)s+="        '"+e[n]+` inválido',
`;return s=s.slice(0,-2),s+=`
    );

`,s.toString()}errorLR(){if(this.lrTable===null)throw new G("Tabela LR está nula.");let t="";t+="    PARSER_ERROR : array [0.."+(this.lrTable.length-1)+`] of string =
    (
`;for(let e=0;e<this.lrTable.length;e++)t+="        'Erro estado "+e+`',
`;return t=t.slice(0,-2),t+=`
    );

`,t.toString()}}class ss{sensitive=!0;lookup=!0;generate(t,e){const s=new Map,n=e.scannerName;let r;return t!=null?(this.sensitive=e.scannerCaseSensitive,this.lookup=t.specialCases.length>0,r=this.buildScanner(t,e)):r=this.buildEmptyScanner(e),s.set("U"+n+".pas",r),s}buildScanner(t,e){const s=e.scannerName;let n,r,i,o;return e.input==L.INPUT_STREAM?(n="TStream",r=`var
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
`,i="setInput(nil);",o=", classes"):e.input==L.INPUT_STRING?(n="string",r=`begin
    self.input := input;
    setPosition(1);
    setEnd(Length(input));
end;
`,i="setInput('');",o=""):(n="",r="",i="",o=""),"unit U"+s+`;

interface

uses UToken, ULexicalError, UConstants`+o+`, SysUtils;

type
    T`+s+` = class
    public
        constructor create; overload;
        constructor create(input : `+n+`); overload;

        procedure setInput(input : `+n+`);
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

constructor T`+s+`.create;
begin
    `+i+`
end;

constructor T`+s+".create(input : "+n+`);
begin
    setInput(input);
end;

procedure T`+s+".setInput(input : "+n+`);
`+r+`
function T`+s+`.nextToken : TToken;
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

procedure T`+s+`.setPosition(pos : integer);
begin
    position := pos;
end;

procedure T`+s+`.setEnd(endPos : integer);
begin
    self.endPos := endPos;
end;

function T`+s+`.nextState(c : char; state : integer) : integer;
begin
`+this.nextStateImpl(t,e)+`end;

function T`+s+`.tokenForState(state : integer) : integer;
begin
    if (state >= 0) and (state < STATES_COUNT) then
        result := TOKEN_STATE[state]
    else
        result := -1;
end;

`+(this.lookup?"function T"+s+`.lookupToken(base : integer; key : string) : integer;
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

`:"")+"function T"+s+`.hasInput : boolean;
begin
    result := position <= endPos;
end;

function T`+s+`.nextChar : char;
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
`;case L.SCANNER_TABLE_HARDCODE:{const s=t.transitions,n=[];for(let r=0;r<s.size();r++){const i=s.get(r);if(i.size!=0){n.push("        "+r+`: case integer(c) of
`);for(const[o,a]of i.entries()){const l=o,m=a;n.push("            "+l.charCodeAt(0)+": result := "+m+`;
`)}n.push(`            else result := -1;
        end;
`)}}return`    case state of
`+n.toString()+`        else result := -1;
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
`}}class rs{async generate(t,e){const s=new Map;if(t!=null){const n=e.parserName;let r;switch(e.parser){case L.PARSER_REC_DESC:r=await this.buildRecursiveDescendantParser(t,e);break;case L.PARSER_LL:r=this.buildLLParser(t,e);break;case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:r=this.buildLRParser(t,e);break;default:r=null}if(r===null)throw new G("String do Parser é nulo.");s.set("U"+n+".pas",r),s.set("U"+e.semanticName+".pas",this.generateSemanticAnalyser(e))}return s}async buildRecursiveDescendantParser(t,e){const s=e.parserName,n=e.scannerName,r=e.semanticName,i=await new ye(t).generateTable(),o=new $e(i,t),a=o.build();let l="";for(let f=t.FIRST_NON_TERMINAL;f<t.FIRST_SEMANTIC_ACTION();f++)l+="        procedure "+o.getSymbols(f)+`;
`;const m=l;l="";for(let f=t.FIRST_NON_TERMINAL;f<t.FIRST_SEMANTIC_ACTION();f++){const u=o.getSymbols(f),_=a.get(u);if(l+=`
procedure T`+s+"."+u+`;
begin
    case currentToken.getId of
`,_==null)throw new Le("Gramática não é LL.");const d=Array.from(_.input.keys());for(let T=0;T<d.length;T++){const g=_.input.get(d[T]);let S=d[T];l+="        "+S+" (* "+o.getSymbols(S)+" *)";for(let E=T+1;E<d.length;E++)_.input.get(d[E])===g&&(S=d[E],l+=`,
        `+S+" (* "+o.getSymbols(S)+" *)",d.slice(E,E),E--);if(g===void 0)throw new Le("Gramática não é LL.");l+=` : 
        begin
`,g.length==0&&(l+=`            // EPSILON
`);for(let E=0;E<g.length;E++){const w=g[E];t.isTerminal(w)?l+="            match("+w+"); // "+o.getSymbols(w)+`
`:t.isNonTerminal(w)?l+="            "+o.getSymbols(w)+`;
`:l+="            semanticAnalyser.executeAction("+(w-t.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}l+=`        end;
`}l+=`        else
            raise ESyntacticError.create(PARSER_ERROR[`+_.lhs+`], currentToken.getPosition());
    end;
end;
`}const c=l;return"unit U"+s+`;

interface

uses UConstants, UToken, U`+n+", U"+r+`, USyntacticError, UAnalysisError;

type
    T`+s+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+n+"; semanticAnalyser : T"+r+`); //raises EAnaliserError

    private
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+n+`;
        semanticAnalyser : T`+r+`;

        procedure match(token : integer);

`+m+`    end;

implementation

constructor T`+s+`.create;
begin
    currentToken := nil;
    previousToken := nil;
end;

destructor T`+s+`.destroy;
begin
    if (currentToken <> nil) and (currentToken <> previousToken) then
        currentToken.destroy;
    if previousToken <> nil then
        previousToken.destroy;
end;

procedure T`+s+".parse(scanner : T"+n+"; semanticAnalyser : T"+r+`);
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

procedure T`+s+`.match(token : integer);
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
`+c+`
end.
`}buildLLParser(t,e){const s=e.parserName,n=e.scannerName,r=e.semanticName;return"unit U"+s+`;

interface

uses UConstants, UToken, U`+n+", U"+r+`, USyntacticError, UAnalysisError, classes;

type
    T`+s+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+n+"; semanticAnalyser : T"+r+`); //raises EAnaliserError

    private
        stack : TList;
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+n+`;
        semanticAnalyser : T`+r+`;

        function step : boolean;
        function pushProduction(topStack, tokenInput : integer) : boolean;

        function isTerminal(x : integer) : boolean;
        function isNonTerminal(x : integer) : boolean;
        function isSemanticAction(x : integer) : boolean;
    end;

implementation

constructor T`+s+`.create;
begin
    currentToken := nil;
    previousToken := nil;
    stack := TList.create;
end;

destructor T`+s+`.destroy;
begin
    if (currentToken <> nil) and (currentToken <> previousToken) then
        currentToken.destroy;
    if previousToken <> nil then
        previousToken.destroy;
    stack.destroy;
end;

procedure T`+s+".parse(scanner : T"+n+"; semanticAnalyser : T"+r+`);
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

function T`+s+`.step : boolean;
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

function T`+s+`.pushProduction(topStack, tokenInput : integer) : boolean;
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

function T`+s+`.isTerminal(x : integer) : boolean;
begin
    result := x < FIRST_NON_TERMINAL;
end;

function T`+s+`.isNonTerminal(x : integer) : boolean;
begin
    result := (x >= FIRST_NON_TERMINAL) and (x < FIRST_SEMANTIC_ACTION);
end;

function T`+s+`.isSemanticAction(x : integer) : boolean;
begin
    result := x >= FIRST_SEMANTIC_ACTION;
end;

end.
`}buildLRParser(t,e){const s=e.parserName,n=e.scannerName,r=e.semanticName;return"unit U"+s+`;

interface

uses UConstants, UToken, U`+n+", U"+r+`, USyntacticError, UAnalysisError, classes;

type
    T`+s+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+n+"; semanticAnalyser : T"+r+`); //raises EAnaliserError

    private
        stack : TList;
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+n+`;
        semanticAnalyser : T`+r+`;

        function step : boolean;
    end;

implementation

constructor T`+s+`.create;
begin
    currentToken := nil;
    previousToken := nil;
    stack := TList.create;
end;

destructor T`+s+`.destroy;
begin
    if (currentToken <> nil) and (currentToken <> previousToken) then
        currentToken.destroy;
    if previousToken <> nil then
        previousToken.destroy;
    stack.destroy;
end;

procedure T`+s+".parse(scanner : T"+n+"; semanticAnalyser : T"+r+`);
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

function T`+s+`.step : boolean;
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
`}}class is{lrTable=null;async generate(t,e,s){const n=new Map;if(t===null||e===null)throw new Error("FiniteAutomata and Grammar must not be null");return n.set("Token.py",this.generateToken(s)),n.set("Constants.py",await this.generateConstants(t,e,s)),n.set("Errors.py",this.generateErrors(s)),n}mainfunc(t){const e=t.pkgName!==""?t.pkgName+".":"";return(t.generateScanner?`from ${e}${t.scannerName} import ${t.scannerName}
`:"")+(t.generateParser?`from ${e}${t.parserName} import ${t.parserName}
`:"")+(t.generateParser?`from ${e}${t.semanticName} import ${t.semanticName}
`:"")+`from ${e}Errors import AnalysisError

`+(t.input==L.INPUT_STREAM?`from io import StringIO
`:"")+this.mainfunc_lex(t)+(t.generateParser?`syn = ${t.parserName}()
`:"")+(t.generateParser?`sem = ${t.semanticName}()
`:"")+`
try:
`+(t.generateParser&&t.generateScanner?t.useASTLib?`	tree = syn.parse(lex)
	tree.print_tree()
`:`	syn.parse(lex, sem)
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
	tkid:     TokenId = TokenId.EPSILON
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
`}async generateConstants(t,e,s){return`
from enum import Enum

TOKEN_DEPENDENCY   = `+(t.specialCases.length>0?`True
`:`False
`)+"CASE_INSENSITIVITY = "+(s.scannerCaseSensitive==!0?`False

`:`True

`)+`class TokenId(Enum):
	EPSILON = 0
	DOLLAR  = 1
`+this.constList(t,e)+(s.useASTLib?`	def __str__(self):
		return self.name
`:"")+(s.generateScanner?this.lexDecls(t,s):"")+(s.generateParser?await this.syntDecls(e,s):"")+(s.generateParser&&s.useASTLib?this.nonTermsEnum(e):"")}nonTermsEnum(t){let e=[];e.push(`
class NonTerm(Enum):
`),e.push(`	EPSILON = 0
`);for(let s=0;s<t.nonTerminals.length;s++){const n=t.nonTerminals[s],r=s+t.FIRST_NON_TERMINAL;e.push(`	nt_${n.slice(1,-1)} = ${r}
`)}return e.push(`	def __str__(self):
`),e.push(`		return self.name
`),e.join("")}constList(t,e){let s="",n=null;if(t!=null)n=t.tokens.toArray();else if(e!=null)n=e.terminals;else throw new Error("Erro Interno");for(let r=0;r<n.length;r++){const i=n[r];i.charAt(0)=='"'?s+="	t_TOKEN_"+(r+2)+" = "+(r+2)+" #"+i+`
`:s+="	t_"+i+" = "+(r+2)+`
`}return s+=`
`,s.toString()}lexDecls(t,e){if(t==null)return"";let s,n,r=`
STATES_COUNT: int = `+t.transitions.size()+`

`;r+=this.scannerTable(t,e)+`
`,r+="TOKEN_STATE = [",s=t.transitions.size(),n=s.toString().length,n==1&&(n=2);for(let i=0;i<s;i++){const a=t.tokenForState(i).toString();for(let l=a.length;l<n;l++)r+=" ";r+=a+", "}r=r.slice(0,-2),r+=`]

`,r+=this.context(t),r+=this.specialCases(t),r+=`SCANNER_ERRORS = [
`,s=t.transitions.size();for(let i=0;i<s;i++){r+='	"';const o=t.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?r+='\\"':r+=o.charAt(a);r+=`",
`}return r=r.slice(0,-2),r+=`
]

`,r.toString()}async syntDecls(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(t);case L.PARSER_LL:return await this.syntTables(t,e)+this.syntErrorsLL(t);default:{const s=je.createGenerator(t,e.parser);if(s==null)throw new G("Gerador de Tabela é nulo.");return this.lrTable=await s.buildIntTable(),"FIRST_SEMANTIC_ACTION = "+t.FIRST_SEMANTIC_ACTION()+`

class SLRAction:
	SHIFT  = 0
	REDUCE = 1
	ACTION = 2
	ACCEPT = 3
	GO_TO  = 4
	ERROR  = 5

`+await this.syntTables(t,e)}}}context(t){if(!t.hasContext())return"";let e="";e+=`SCANNER_CONTEXT = [
`;for(let s=0;s<t.transitions.size();s++)e+=`
[`,e+=t.isContext(s)?"1":"0",e+=", ",e+=t.getOrigin(s),e+=`],
`;return e=e.slice(0,-2),e+=`
];

`,e.toString()}scannerTable(t,e){if(e.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let s="";s+=`SCANNER_TABLE = [
`;const n=t.transitions.size();let r=n.toString().length;r==1&&(r=2);for(let i=0;i<n;i++){s+="	[ ";for(let o=0;o<256;o++){const a=t.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)s+=" ";s+=a+", "}s=s.slice(0,-2),s+=` ],
`}return s=s.slice(0,-2),s+=`]
`,s.toString()}specialCases(t){if(t.specialCases.length>0){const e=t.getSpecialCasesIndexes(),s=t.specialCases;let n="";n+=`SPECIAL_CASES_INDEXES = [0 for i in range(0, ${e.length+1})]
`;let r=e.length;for(let i=0;i<r;i++)n+=`SPECIAL_CASES_INDEXES[${i}] = ${e[i][0]}
`;n+=`SPECIAL_CASES_INDEXES[${r}] = ${e[r-1][1]}
`,r=s.length,n+="SPECIAL_CASES_KEYS = [ ",r=s.length;for(let i=0;i<r;i++)n+='"'+s[i].key+'", ';n=n.slice(0,-2),n+=` ]

`,n+="SPECIAL_CASES_VALUES = [ ";for(let i=0;i<r;i++)n+=s[i].value+", ";return n=n.slice(0,-2),n+=` ]

`,n.toString()}else return""}async syntTables(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:throw new G("REC_DESC DOES NOT USE SYNTTABLES");case L.PARSER_LL:return await this.genLLSyntTables(t);default:return this.syntTransTable(t)+this.productionsLR(t)+this.syntErrorsLR()}}async genLLSyntTables(t){const e=[],s=t.startSymbol,n=t.FIRST_NON_TERMINAL,r=t.symbols.length,i=`START_SYMBOL = ${s};

FIRST_NON_TERMINAL    = ${n};
FIRST_SEMANTIC_ACTION = ${r};
`;return e.push(i),e.push(`
`),e.push(await this.emitLLTable(new ye(t))),e.push(`
`),e.push(this.productionsLL(t)),e.push(`
`),e.join("")}async emitLLTable(t){let e=await t.generateTable(),s=new Array(e.length).fill([]).map(()=>new Array(e[0].length)),n=0;for(let i=0;i<s.length;i++)for(let o=0;o<s[i].length;o++){let a=e[i][o].toString();s[i][o]=a,a.length>n&&(n=a.length)}const r=[];r.push(`PARSER_TABLE = [
`);for(let i=0;i<s.length;i++){r.push("	[");for(let o=0;o<s[i].length;o++){r.push(" ");for(let a=s[i][o].length;a<n;a++)r.push(" ");r.push(s[i][o]),r.push(",")}r.pop(),r.push(` ],
`)}return r.pop(),r.push(" ],"),r.push(`
]
`),r.join("")}productionsLL(t){const e=t.productions,s=new Array(e.size()).fill([]);let n=0;for(let i=0;i<e.size();i++){const o=e.get(i).get_rhs();if(o.length>0){s[i]=[];for(let a=0;a<o.length;a++)s[i][a]=o[a].toString(),s[i][a].length>n&&(n=s[i][a].length)}else s[i]=new Array(1),s[i][0]="0"}const r=[];r.push(`PRODUCTIONS = [
`);for(let i=0;i<s.length;i++){r.push("	[");for(let o=0;o<s[i].length;o++){r.push(" ");for(let a=s[i][o].length;a<n;a++)r.push(" ");r.push(s[i][o]),r.push(",")}r.pop(),r.push(` ],
`)}return r.pop(),r.push(` ]
`),r.push(`
]
`),r.join("")}productionsLR(t){let e="";const s=t.productions.toArray();e+=`PRODUCTIONS = [
`;for(let n=0;n<s.length;n++)e+="	[ ",e+=s[n].get_lhs(),e+=", ",e+=s[n].get_rhs().length,e+=` ],
`;return e=e.slice(0,-2),e+=`
]
`,e.toString()}syntTransTable(t){if(t instanceof ie)return this.syntTransTableGrammar(t);throw new G("LL(1) NOT SUPPORTED (transtable)")}syntTransTableGrammar(t){if(this.lrTable===null)throw new G("Tabela LR está nula.");let e="";e+=`PARSER_TABLE = [
`;let s=this.lrTable.length;t.productions.size()>s&&(s=t.productions.size()),s=(""+s).length;for(let n=0;n<this.lrTable.length;n++){e+="	[";for(let r=0;r<this.lrTable[n].length;r++){e+=" [",e+="SLRAction."+te.CONSTANTS[this.lrTable[n][r][0]],e+=", ";const i=""+this.lrTable[n][r][1];for(let o=i.length;o<s;o++)e+=" ";e+=i+"],"}e=e.slice(0,-1),e+=` ],
`}return e=e.slice(0,-2),e+=`
];
`,e.toString()}syntErrorsLL(t){const e=t.symbols;let s=`
PARSER_ERROR = [
	"",
	"Era esperado fim de programa",
`;for(let n=2;n<t.FIRST_NON_TERMINAL;n++){s+='	"Era esperado ';for(let r=0;r<e[n].length;r++)switch(e[n].charAt(r)){case'"':s+='\\"';break;case"\\":s+="\\\\";break;default:s+=e[n].charAt(r)}s+=`",
`}for(let n=t.FIRST_NON_TERMINAL;n<e.length;n++)s+=`	"${e[n]} inválido",
`;return s+="]",s}syntErrorsLR(){if(this.lrTable===null)throw new G("Tabela LR está nula.");let t="";t+=`PARSER_ERROR = [
`;for(let e=0;e<this.lrTable.length;e++)t+='	"Erro estado '+e+`",
`;return t=t.slice(0,-2),t+=`
]

`,t.toString()}}class os{generate(t,e){const s=new Map;let n="";const r=e.scannerName;return e.generateScanner==!0&&(t!=null?n=this.buildScanner(t,e):n="",s.set(r+".py",n)),s}bidistream(t){return t.input==L.INPUT_STREAM?`from io                 import StringIO

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

`:""}buildScanner(t,e){const s=e.scannerName,n=e.pkgName!==""?e.pkgName+".":"",r=e.input==L.INPUT_STREAM;return`from ${n}Constants import *
from ${n}Errors    import LexicalError
from ${n}Token     import Token

`+this.bidistream(e)+"class "+s+`:

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

`+(t.hasContext()?`		ctxtState = -1
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

`+(t.hasContext()?`			if SCANNER_CONTEXT[state][0] == 1:
				ctxtStatet = state
				ctxtEnd    = ${r?"self.input.shadowpos":"self.position"}
`:"")+(r?`		if newchar == -1 and iters == 0:
			self.input.rewind(start)
			return None

`:"")+`		if endState < 0 or (endState != state and self.token_for_state(oldState) == -2):
			raise LexicalError(SCANNER_ERROR[oldState], start)

`+(t.hasContext()?`		if ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState:
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

`+(r?"":`	def has_input(self):
		return self.position < len(self.input)

	def next_char(self):
		if self.has_input():
			res = self.input[self.position]
			self.position += 1
			return ord(res)
		else:
			return -1

`)}nextStateImpl(t,e){switch(e.scannerTable){case L.SCANNER_TABLE_FULL:case L.SCANNER_TABLE_COMPACT:return`		return SCANNER_TABLE[state][c]
`;case L.SCANNER_TABLE_HARDCODE:{const s=t.transitions;let n="";for(let r=0;r<s.size();r++){const i=s.get(r);if(i.size!=0){n+="			case "+r+`:
				match c:
`;for(const[o,a]of i.entries()){const l=o,m=a;n+=`					case ${l.charCodeAt(0)}:
						return ${m};
`}n+=`					case _:
						return -1
`}}return`		match state:
`+n.toString()+`			case _:
				return -1
`}default:return""}}}class as{async generate(t,e){const s=new Map;if(e.generateParser==!0&&t!=null){const n=e.parserName;s.set(n+".py",await this.parser(t,e)),s.set(e.semanticName+".py",this.semantic(e)),e.useASTLib&&s.set("Node.py",this.node(e))}return s}node(t){let e=[];const s=t.pkgName!==""?t.pkgName+".":"";return e.push(`from enum import Enum
`),e.push(`from ${s}Constants import NonTerm
`),e.push(`from ${s}Token import Token
`),e.push(`from ${s}${t.semanticName} import CustomNode

`),e.push(`class NodeData:
`),e.push(`	lex: Token
`),e.push(`	nt: NonTerm
`),e.push(`	action: int
`),e.push(`	actionlex: Token
`),e.push(`	custom: CustomNode
`),e.push(`
`),e.push(`	@classmethod
`),e.push(`	def with_lex(self, l: Token):
`),e.push(`		nd = NodeData()
`),e.push(`		nd.lex = l
`),e.push(`		return nd
`),e.push(`
`),e.push(`	@classmethod
`),e.push(`	def with_nt(self, n: NonTerm):
`),e.push(`		nd = NodeData()
`),e.push(`		nd.nt = n
`),e.push(`		return nd
`),e.push(`
`),e.push(`	@classmethod
`),e.push(`	def with_action(self, a: int, lex: Token | None):
`),e.push(`		nd = NodeData()
`),e.push(`		nd.action = a
`),e.push(`		nd.actionlex = lex
`),e.push(`		return nd
`),e.push(`
`),e.push(`	@classmethod
`),e.push(`	def with_customnode(self, c: CustomNode):
`),e.push(`		nd = NodeData()
`),e.push(`		nd.custom = c
`),e.push(`		return nd
`),e.push(`
`),e.push(`class NodeKind(Enum):
`),e.push(`	Terminal = 1
`),e.push(`	NonTerminal = 2
`),e.push(`	SemanticAction = 3
`),e.push(`	CustomNode = 4
`),e.push(`
`),e.push(`class Node:
`),e.push(`	children: list["Node"]
`),e.push(`	kind: tuple[NodeKind, NodeData]
`),e.push(`
`),e.push(`	def __init__(self, nknd: (NodeKind, NodeData)):
`),e.push(`		self.kind = nknd
`),e.push(`		self.children = []
`),e.push(`
`),e.push(`	@classmethod
`),e.push(`	def from_terminal(self, tk: Token):
`),e.push(`		return Node( (NodeKind.Terminal, NodeData.with_lex(tk)) )
`),e.push(`
`),e.push(`	@classmethod
`),e.push(`	def from_nonterminal(self, nt: NonTerminal):
`),e.push(`		return Node( (NodeKind.NonTerminal, NodeData.with_nt(nt)) )
`),e.push(`
`),e.push(`	@classmethod
`),e.push(`	def from_semanticaction(self, a: int, lex: Token):
`),e.push(`		return Node( (NodeKind.SemanticAction, NodeData.with_action(a, lex)) )
`),e.push(`
`),e.push(`	@classmethod
`),e.push(`	def from_customnode(self, c: CustomNode):
`),e.push(`		return Node( (NodeKind.CustomNode, NodeData.with_customnode(c)) )
`),e.push(`
`),e.push(`	def ccount(self):
`),e.push(`		return len(self.children)
`),e.push(`
`),e.push(`	def cpush(self, nc: Node):
`),e.push(`		self.children.append(nc)
`),e.push(`
`),e.push(`	def kidnap(self, which: int):
`),e.push(`		o = self.children[which]
`),e.push(`		del self.children[which]
`),e.push(`		return o
`),e.push(`
`),e.push(`	def morph(self, nknd: (NodeKind, NodeData)):
`),e.push(`		self.kind = nknd
`),e.push(`
`),e.push(`	def invert_children(self):
`),e.push(`		self.children.reverse()
`),e.push(`
`),e.push(`	def follow(self, where: int):
`),e.push(`		return self.children[where]
`),e.push(`
`),e.push(`	def print_tree(self, level = 0):
`),e.push(`
`),e.push(`		for i in range(level):
`),e.push(`			print('  ', end='', sep='')
`),e.push(`
`),e.push(`		(nk, nd) = self.kind
`),e.push(`
`),e.push(`		if nk == NodeKind.Terminal:
`),e.push(`			l = nd.lex
`),e.push(`			print(str(l.tkid) + " \\"" + l.lexeme + "\\" ")
`),e.push(`		elif nk == NodeKind.NonTerminal:
`),e.push(`			p = nd.nt
`),e.push(`			print('<' + str(p) + '>')
`),e.push(`		elif nk == NodeKind.SemanticAction:
`),e.push(`			a = nd.action
`),e.push(`			print("#" + str(a))
`),e.push(`		else:
`),e.push(`			c = nd.custom
`),e.push(`			print(str(c))
`),e.push(`
`),e.push(`		for c in self.children:
`),e.push(`			c.print_tree(level + 1)
`),e.push(`
`),e.push(`	def is_similar(self, rhs: tuple[NodeKind, NodeData]):
`),e.push(`		lhs_kind, lhs_data = self.kind
`),e.push(`		rhs_kind, rhs_data = rhs
`),e.push(`
`),e.push(`		if lhs_kind != rhs_kind:
`),e.push(`			return False
`),e.push(`
`),e.push(`		if lhs_kind == NodeKind.Terminal:
`),e.push(`			return lhs_data.lex.tkid == rhs_data.lex.tkid
`),e.push(`
`),e.push(`		if lhs_kind == NodeKind.NonTerminal:
`),e.push(`			return lhs_data.nt == rhs_data.nt
`),e.push(`
`),e.push(`		if lhs_kind == NodeKind.SemanticAction:
`),e.push(`			return lhs_data.action == rhs_data.action
`),e.push(`
`),e.push(`		if lhs_kind == NodeKind.CustomNode:
`),e.push(`			return lhs_data.custom == rhs_data.custom
`),e.push(`
`),e.push(`		return False
`),e.push(`
`),e.push(`	# ---
`),e.push(`
`),e.push(`	def transform(self, t):
`),e.push(`		for child in self.children:
`),e.push(`			child.transform(t)
`),e.push(`		t(self)
`),e.push(`
`),e.push(`	def transform_preorder(self, t):
`),e.push(`		t(self)
`),e.push(`		for child in self.children:
`),e.push(`			child.transform_preorder(t)
`),e.push(`
`),e.push(`	def transform_dual(self, t):
`),e.push(`		t(self, False)
`),e.push(`		for child in self.children:
`),e.push(`			child.transform_dual(t)
`),e.push(`		t(self, True)
`),e.push(`
`),e.push(`	# ---
`),e.push(`
`),e.push(`	def assimilate(self, newkind, similars):
`),e.push(`		def transform(n):
`),e.push(`			for similar in similars:
`),e.push(`				if n.is_similar(similar):
`),e.push(`					n.morph(newkind)
`),e.push(`					break
`),e.push(`		self.transform(transform)
`),e.push(`
`),e.push(`	def squash(self, target):
`),e.push(`		def transform(n):
`),e.push(`			if not n.is_similar(target):
`),e.push(`				return
`),e.push(`
`),e.push(`			if n.ccount() != 1:
`),e.push(`				return
`),e.push(`
`),e.push(`			child = n.follow(0)
`),e.push(`
`),e.push(`			if child.is_similar(n.kind):
`),e.push(`				n.kind = child.kind
`),e.push(`				n.children = child.children
`),e.push(`
`),e.push(`		self.transform(transform)
`),e.push(`
`),e.push(`	def filter(self, target, removelist):
`),e.push(`		def transform(n):
`),e.push(`			if not n.is_similar(target):
`),e.push(`				return
`),e.push(`
`),e.push(`			n.children = [
`),e.push(`				child
`),e.push(`				for child in n.children
`),e.push(`				if not any(child.is_similar(ri) for ri in removelist)
`),e.push(`			]
`),e.push(`
`),e.push(`		self.transform(transform)
`),e.push(`
`),e.push(`	def flatten(self, target):
`),e.push(`		def transform(n):
`),e.push(`			new_children = []
`),e.push(`
`),e.push(`			for child in n.children:
`),e.push(`				if child.is_similar(target):
`),e.push(`					new_children.extend(child.children)
`),e.push(`				else:
`),e.push(`					new_children.append(child)
`),e.push(`
`),e.push(`			n.children = new_children
`),e.push(`
`),e.push(`		self.transform(transform)
`),e.push(`
`),e.push(`	def enlistify(self, target):
`),e.push(`		def transform(n):
`),e.push(`			if not n.is_similar(target):
`),e.push(`				return
`),e.push(`
`),e.push(`			if not n.children:
`),e.push(`				return
`),e.push(`
`),e.push(`			if not n.children[-1].is_similar(target):
`),e.push(`				return
`),e.push(`
`),e.push(`			new_children = []
`),e.push(`
`),e.push(`			for child in n.children:
`),e.push(`				if child.is_similar(target):
`),e.push(`					new_children.extend(child.children)
`),e.push(`				else:
`),e.push(`					new_children.append(child)
`),e.push(`
`),e.push(`				n.children = new_children
`),e.push(`
`),e.push(`		self.transform(transform)
`),e.push(`
`),e.push(`	def raise_nodes(self, targetdest, targetsrc):
`),e.push(`		def transform(n):
`),e.push(`			new_children = []
`),e.push(`
`),e.push(`			for child in n.children:
`),e.push(`				if child.is_similar(targetdest):
`),e.push(`					risen = []
`),e.push(`					remaining = []
`),e.push(`
`),e.push(`					for k in child.children:
`),e.push(`						if k.is_similar(targetsrc):
`),e.push(`							risen.append(k)
`),e.push(`						else:
`),e.push(`							remaining.append(k)
`),e.push(`
`),e.push(`					child.children = remaining
`),e.push(`
`),e.push(`					new_children.append(child)
`),e.push(`					new_children.extend(risen)
`),e.push(`				else:
`),e.push(`					new_children.append(child)
`),e.push(`
`),e.push(`			n.children = new_children
`),e.push(`
`),e.push(`		self.transform(transform)
`),e.join("")}semantic(t){const e=t.semanticName;return`from ${t.pkgName!==""?t.pkgName+".":""}Token import Token

class ${e}:

	def execute_action(self, action: int, token: Token):
		print("Ação: ", action, "Token: ", token)

`+(t.useASTLib?`class CustomNode:

	def __eq__(self, other):
		return True

	def __str__(self):
		return "#CUSTOM"
`:"")}async redDecParser(t,e){const s=await new ye(t).generateTable(),n=new $e(s,t),r=e.pkgName!==""?e.pkgName+".":"",i=e.parserName;let o=`from ${r}Token     import Token
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

		self._${n.getStart()}()
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

`;const a=n.build();for(let l=t.FIRST_NON_TERMINAL;l<t.FIRST_SEMANTIC_ACTION();l++){const m=n.getSymbols(l),c=a.get(m);if(o+=`	def _${m}(self):
		match self.current_token.tkid:
`,c==null)throw new Le("Gramática não é LL.");const f=Array.from(c.input.keys());let u=new Set;for(let _=0;_<f.length;_++){const d=c.input.get(f[_]);let T=f[_];if(u.has(T))continue;let g=n.getSymbols(T);o+=`			case TokenId.${g==="$"?"DOLLAR":"t_"+g}`,u.add(T);for(let S=_+1;S<f.length;S++)if(c.input.get(f[S])===d){if(T=f[S],u.has(T))continue;let w=n.getSymbols(T);o+=` | TokenId.${w==="$"?"DOLLAR":"t_"+w}`,u.add(T)}if(o+=`:
`,d==null)throw new Le("Gramática não é LL.");d.length==0&&(o+=`				pass # EPSILON
`);for(let S=0;S<d.length;S++){const E=d[S];t.isTerminal(E)?o+=`				self.matchr(${E}) # ${n.getSymbols(E)}
`:t.isNonTerminal(E)?o+=`				self._${n.getSymbols(E)}()
`:o+=`				self.semantic.execute_action(${E-t.FIRST_SEMANTIC_ACTION()}, self.previous_token)
`}}o+=`			case _:
				raise SyntacticError(PARSER_ERROR[${c.lhs}], self.current_token.position)
`}return o}llParser(t,e){const s=e.pkgName!==""?e.pkgName+".":"",n=e.parserName;return`from ${s}Token     import Token
from ${s}Constants import *
from ${s}Errors    import SyntacticError
`+(e.useASTLib?`from compiler.Node      import *

`:`
`)+`class ${n}:

	def __init__(self):
		self.previous_token = None
		self.current_token  = None
`+(e.useASTLib?`		self.forest         = []
		self.nodect         = []
`:"")+`		self.stack          = []

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
`+(e.useASTLib?`			self.depopulate_forest(Node.from_terminal(Token(TokenId.EPSILON, "", 0)))
`:"")+`			return False
		elif self.is_terminal(x):
`+(e.useASTLib?`			self.depopulate_forest(Node.from_terminal(self.current_token))
`:"")+`			if x == a:
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
`+(e.useASTLib?`			self.depopulate_forest(Node.from_semanticaction(x - FIRST_SEMANTIC_ACTION, self.previous_token))
`:`			self.semantic.execute_action(x-FIRST_SEMANTIC_ACTION, self.previous_token)
`)+`			return False

	def push_production(self, topstack, token):
		p = PARSER_TABLE[topstack-FIRST_NON_TERMINAL][token-1]
		if p >= 0:
			production = PRODUCTIONS[p]

			for i in range(len(production) - 1, -1, -1):
				self.stack.append(production[i])

`+(e.useASTLib?`			self.forest.append(Node.from_nonterminal(NonTerm(topstack)))
			self.nodect.append(len(production))
`:"")+`			return True
		else:
			return False

`+(e.useASTLib?`	def parse(self, scanner):
`:`	def parse(self, scanner, semantic):
`)+`		self.scanner  = scanner
`+(e.useASTLib?"":`		self.semantic = semantic

`)+`		self.stack.clear()
		self.stack.append(TokenId.DOLLAR.value)
		self.stack.append(START_SYMBOL)

`+(e.useASTLib?`		self.forest.append(Node.from_terminal(Token(TokenId.EPSILON, "", 0)))

`:"")+`		self.current_token = self.scanner.next_token()

		while self.step() == False:
			pass
`+(e.useASTLib?`		return self.forest.pop().kidnap(0)
`:"")+(e.useASTLib?`
	def depopulate_forest(self, nn: Node):
		self.forest[-1].cpush(nn)
		itg = self.nodect.pop()
		while itg == 1:
			node = self.forest.pop()
			self.forest[-1].cpush(node)
			if len(self.nodect) > 0:
				itg = self.nodect.pop()
			else:
				break
		self.nodect.append(itg - 1 if itg - 1 > 0 else 0)
`:"")}async parser(t,e){const s=e.pkgName!==""?e.pkgName+".":"";switch(e.parser){case L.PARSER_REC_DESC:return await this.redDecParser(t,e);case L.PARSER_LL:return this.llParser(t,e);default:{const n=e.parserName;return`from ${s}Token import Token
from ${s}Constants import *
from ${s}Errors import SyntacticError

`+(e.useASTLib?`from ${s}Node import *
`:"")+"class "+n+`:

	def __init__(self):
		self.previous_token = None
		self.current_token  = None
		self.stack          = []
`+(e.useASTLib?`		self.forest         = []

`:`
`)+(e.useASTLib?`	def parse(self, scanner):
`:`	def parse(self, scanner, semantic):
`)+`		self.scanner  = scanner
`+(e.useASTLib?`
`:`		self.semantic = semantic

`)+`		self.stack.clear()

		self.stack.append(0)
		self.previous_token = None

		self.current_token = self.scanner.next_token()

		while True:
			if self.step() != False:
				break

`+(e.useASTLib?`		return self.forest.pop()

`:"")+`	def step(self):

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
`+(e.useASTLib?`				self.forest.append(Node.from_terminal(self.current_token))
`:"")+`				self.previous_token = self.current_token
				self.current_token = self.scanner.next_token()
				return False
			case SLRAction.REDUCE:
				prod = PRODUCTIONS[cmd[1]]

`+(e.useASTLib?`				node = Node.from_nonterminal(NonTerm.EPSILON)
`:"")+`				for i in range(0, prod[1]):
`+(e.useASTLib?`					node.cpush(self.forest.pop())
`:"")+`					self.stack.pop()

`+(e.useASTLib?`				node.invert_children()
`:"")+`				oldstate = self.stack[-1]

				self.stack.append(PARSER_TABLE[oldstate][prod[0]-1][1])

`+(e.useASTLib?`				node.morph((NodeKind.NonTerminal, NodeData.with_nt(NonTerm(prod[0]))))
				self.forest.append(node)
`:"")+`				return False
			case SLRAction.ACTION:
				action = FIRST_SEMANTIC_ACTION + cmd[1] - 1
				self.stack.append(PARSER_TABLE[state][action][1])
`+(e.useASTLib?`				self.forest.append(Node.from_semanticaction(cmd[1], self.previous_token))
`:`				self.semantic.execute_action(cmd[1], self.previous_token)

`)+`				return False
			case SLRAction.ACCEPT:
				return True
			case SLRAction.ERROR:
				raise SyntacticError(PARSER_ERROR[state], self.current_token.position)
			case _:
				raise RuntimeError('Invalid Command')

		return False
`}}}}class ls{lrTable=null;async generate(t,e,s){const n=new Map;if(t===null||e===null)throw new Error("FiniteAutomata and Grammar must not be null");let r=s.pkgName!==""?s.pkgName+"/":"";return n.set("Cargo.toml",this.generateCargotoml()),n.set("src/main.rs",this.mainfunc(s)),n.set(`src/${r}token.rs`,this.generateToken(s)),n.set(`src/${r}errors.rs`,this.generateErrors(s)),n.set(`src/${r}constants.rs`,await this.generateConstants(t,e,s)),r!==""&&n.set(`src/${r}mod.rs`,this.generateMod(s)),n}generateMod(t){return`
pub mod token;
pub mod errors;
pub mod constants;
${t.generateScanner?"pub mod scanner;":""}
${t.generateParser?"pub mod parser;":""}
${t.generateParser?"pub mod codegen;":""}
${t.generateParser&&t.useASTLib?"pub mod node;":""}
`}mainfunc(t){let e=t.scannerName,s=t.parserName,n=t.semanticName;const r=t.pkgName!==""?t.pkgName+"::":"",i=t.input==L.INPUT_STRING,o=`
#![allow(nonstandard_style)]

${i?"":"use std::{fs::File, io::BufReader};"}

use crate::${r}{
    ${t.generateScanner?`scanner::${e},`:""}
    ${t.generateParser?`parser::${s},`:""}
    ${t.generateParser?`codegen::${n},`:""}
    ${t.useASTLib?"node::NodeKind,":""}
};
${t.pkgName===""?`
mod constants;
mod errors;
mod token;
${t.generateScanner?"mod scanner;":""}
${t.generateParser?"mod parser;":""}
${t.generateParser?"mod codegen;":""}
${t.generateParser&&t.useASTLib?"mod node;":""}
`:`
mod ${t.pkgName};
`}
`;let a=[];return a.push(`fn main() {

`),t.generateScanner&&(i?a.push(`    let lex = ${e}::new("".into());
`):(a.push(`    let file = File::open("program.txt").expect("erro ao abrir arquivo");
`),a.push(`    let lex  = ${e}::new(BufReader::new(file));
`))),t.generateParser&&(t.useASTLib==!1?(a.push(`    let sem = ${n}::new();
`),a.push(`    let syn = ${s}::new(lex, sem);

`),a.push(`    if let Err(e) = syn.parse() {
`),a.push(`        eprintln!("{e}");
`),a.push(`    }
`)):(a.push(`    let syn = ${s}::new(lex);

`),a.push(`    let mut tree = match syn.parse() {
`),a.push(`        Ok(tree) => tree,
`),a.push(`        Err(e) => { eprintln!("{e}"); return; }
`),a.push(`    };

`),a.push(`    let mut sem = ${n}::new();

`),a.push(`    let errs = tree.try_transform(&mut |n| {
`),a.push(`         if let NodeKind::SemanticAction(a) = n.get_kind() {
`),a.push(`             sem.execute_action((*a + 1) as u32, n.get_actionlex().expect("token"))?;
`),a.push(`         };
`),a.push(`         Ok(())
`),a.push(`    });

`),a.push(`    if let Err(e) = errs {
`),a.push(`        eprintln!("{e}");
`),a.push(`        return;
`),a.push(`    }
`))),a.push(`}
`),o+a.join("")}generateCargotoml(){return`
[package]
name = "gals-compiler-output"
version = "0.1.0"
edition = "2024"

[dependencies]
num-derive = "0.4.2"
num-traits = "0.2.19"

`}generateToken(t){return`
use crate::${t.pkgName!==""?t.pkgName+"::":""}constants::TokenId;

#[derive(Default, Debug, Clone)]
pub struct Token {
    id: TokenId,
    lexeme: String,
    position: usize,
}

#[allow(unused)]
impl Token {
    pub fn new(id: TokenId, lexeme: String, position: usize) -> Self {
        Token {
            id,
            lexeme,
            position,
        }
    }
    pub fn new_dummy(id: TokenId) -> Self {
        Token {
            id,
            lexeme: String::default(),
            position: 0,
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

`}async generateConstants(t,e,s){return`
use num_derive::FromPrimitive;

pub const CASE_INSENSITIVITY: bool  = `+(s.scannerCaseSensitive==!0?`false;

`:`true;

`)+"pub const TOKEN_DEPENDENCY  : bool  = "+(t.specialCases.length>0?`true;
`:`false;
`)+`
#[allow(nonstandard_style)]
#[derive(Default, Debug, Clone, Copy, PartialEq, Eq, FromPrimitive)]
pub enum TokenId {
	#[default]
	EPSILON = 0,
	DOLLAR  = 1,
`+this.constList(t,e)+(s.generateScanner?this.lexDecls(t,s):"")+(s.generateParser?await this.syntDecls(e,s):"")+(s.useASTLib?this.nontermsDecls(e):"")}nontermsDecls(t){let e=[];e.push(`#[allow(nonstandard_style)]
`),e.push(`#[derive(Debug, PartialEq, Eq, Clone, Copy)]
`),e.push(`pub enum NonTerm {
`),e.push("    EPSILON,");for(let s=0;s<t.nonTerminals.length;s++){const n=t.nonTerminals[s];e.push(`    nt_${n.slice(1,-1)},
`)}e.push(`}
`),e.push(`
impl From<i32> for NonTerm {
`),e.push(`    fn from(value: i32) -> Self {
`),e.push(`        match value {
`);for(let s=0;s<t.nonTerminals.length;s++){const n=t.nonTerminals[s],r=s+t.FIRST_NON_TERMINAL;e.push(`            ${r} => NonTerm::nt_${n.slice(1,-1)},
`)}return e.push(`            _ => panic!("invalid nonterminal")
`),e.push(`        }
    }
}
`),e.join("")}constList(t,e){let s="",n=null;if(t!=null)n=t.tokens.toArray();else if(e!=null)n=e.terminals;else throw new Error("Erro Interno");for(let r=0;r<n.length;r++){const i=n[r];i.charAt(0)=='"'?s+="	t_TOKEN_"+(r+2)+" = "+(r+2)+",//"+i+`
`:s+="	t_"+i+" = "+(r+2)+`,
`}s+=`
}

`,s+=`impl From<i32> for TokenId {
`,s+=`   fn from(value: i32) -> Self {
`,s+=`       match value {
`,s+=`           0 => TokenId::EPSILON,
`,s+=`           1 => TokenId::DOLLAR,
`;for(let r=0;r<n.length;r++){const i=n[r];i.charAt(0)=='"'?s+="               "+(r+2)+" => TokenId::t_TOKEN_"+(r+2)+",//"+i+`
`:s+="                "+(r+2)+" => TokenId::t_"+i+`,
`}return s+=`           _ => panic!(),
`,s+=`       }
`,s+=`   }
`,s+=`
}
`,s.toString()}lexDecls(t,e){if(t==null)return"";let s=t.transitions.size(),n,r=`
pub const STATES_COUNT: usize = ${s};

`;r+=this.scannerTable(t,e)+`
`,r+="pub const TOKEN_STATE: [i32; STATES_COUNT] = [",n=s.toString().length,n==1&&(n=2);for(let i=0;i<s;i++){const a=t.tokenForState(i).toString();for(let l=a.length;l<n;l++)r+=" ";r+=a+", "}r+=`];

`,r+=this.context(t),r+=this.specialCases(t),r+=`pub const SCANNER_ERRORS: [&str; STATES_COUNT] = [
`,s=t.transitions.size();for(let i=0;i<s;i++){r+='	"';const o=t.getError(i);for(let a=0;a<o.length;a++)o.charAt(a)=='"'?r+='\\"':r+=o.charAt(a);r+=`",
`}return r+=`];

`,r.toString()}async syntDecls(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:return this.syntErrorsLL(t);case L.PARSER_LL:return await this.syntTables(t,e)+this.syntErrorsLL(t);default:{const s=je.createGenerator(t,e.parser);if(s==null)throw new G("Gerador de Tabela é nulo.");return this.lrTable=await s.buildIntTable(),`pub const FIRST_SEMANTIC_ACTION: i32 = ${t.FIRST_SEMANTIC_ACTION()};

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
`;for(let s=0;s<t.transitions.size();s++)e+=`
(`,e+=t.isContext(s)?"1":"0",e+=", ",e+=t.getOrigin(s),e+=`),
`;return e=e.slice(0,-2),e+=`
];

`,e.toString()}scannerTable(t,e){if(e.scannerTable==L.SCANNER_TABLE_HARDCODE)return"";let s="";s+=`#[rustfmt::skip]
`,s+=`pub const SCANNER_TABLE: [[i32; 256]; STATES_COUNT] = [
`;const n=t.transitions.size();let r=n.toString().length;r==1&&(r=2);for(let i=0;i<n;i++){s+="	[ ";for(let o=0;o<256;o++){const a=t.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)s+=" ";s+=a+", "}s=s.slice(0,-2),s+=` ],
`}return s=s.slice(0,-2),s+=`
];
`,s.toString()}specialCases(t){if(t.specialCases.length>0){const e=t.getSpecialCasesIndexes(),s=t.specialCases;let n="";n+=`pub const SPECIAL_CASES_INDEXES: [i32; ${t.getSpecialCasesIndexes().length+1}] = [`;let r=e.length;for(let i=0;i<r;i++)n+=`${e[i][0]}, `;n+=`${e[r-1][1]} ];
`,r=s.length,n+=`pub const SPECIAL_CASES_KEYS: [&str; ${r}] = [ `,r=s.length;for(let i=0;i<r;i++)n+='"'+s[i].key+'", ';n+=` ];

`,n+=`pub const SPECIAL_CASES_VALUES: [i32; ${r}] = [ `;for(let i=0;i<r;i++)n+=s[i].value+", ";return n+=` ];

`,n.toString()}else return""}async syntTables(t,e){if(t==null)return"";switch(e.parser){case L.PARSER_REC_DESC:throw new G("REC_DESC DOES NOT USE SYNTTABLES");case L.PARSER_LL:return await this.genLLSyntTables(t);default:return this.syntTransTable(t)+this.productionsLR(t)+this.syntErrorsLR()}}async genLLSyntTables(t){const e=[],s=t.startSymbol,n=t.FIRST_NON_TERMINAL,r=t.symbols.length,i=`pub const START_SYMBOL: i32 = ${s};

pub const FIRST_NON_TERMINAL: i32 = ${n};
pub const FIRST_SEMANTIC_ACTION: i32 = ${r};
`;return e.push(i),e.push(`
`),e.push(await this.emitLLTable(t)),e.push(`
`),e.push(this.productionsLL(t)),e.push(`
`),e.join("")}async emitLLTable(t){let s=await new ye(t).generateTable(),n=new Array(s.length).fill([]).map(()=>new Array(s[0].length)),r=0;for(let o=0;o<n.length;o++)for(let a=0;a<n[o].length;a++){let l=s[o][a].toString();n[o][a]=l,l.length>r&&(r=l.length)}const i=[];i.push(`pub const PARSER_TABLE: [[i32; ${t.FIRST_NON_TERMINAL-1}]; ${t.FIRST_SEMANTIC_ACTION()-t.FIRST_NON_TERMINAL}] = [
`);for(let o=0;o<n.length;o++){i.push("    [");for(let a=0;a<n[o].length;a++){i.push(" ");for(let l=n[o][a].length;l<r;l++)i.push(" ");i.push(n[o][a]),i.push(",")}i.pop(),i.push(` ],
`)}return i.pop(),i.push(" ],"),i.push(`
];
`),i.join("")}productionsLL(t){const e=t.productions,s=new Array(e.size()).fill([]);let n=0;for(let i=0;i<e.size();i++){const o=e.get(i).get_rhs();if(o.length>0){s[i]=[];for(let a=0;a<o.length;a++)s[i][a]=o[a].toString(),s[i][a].length>n&&(n=s[i][a].length)}else s[i]=new Array(1),s[i][0]="0"}const r=[];r.push(`pub const PRODUCTIONS: [&[i32]; ${t.productions.size()}] = [
`);for(let i=0;i<s.length;i++){r.push("    &[");for(let o=0;o<s[i].length;o++){r.push(" ");for(let a=s[i][o].length;a<n;a++)r.push(" ");r.push(s[i][o]),r.push(",")}r.pop(),r.push(` ],
`)}return r.pop(),r.push(` ]
`),r.push(`
];
`),r.join("")}productionsLR(t){let e="";const s=t.productions.toArray();e+=`pub const PRODUCTIONS: [(i32, i32); ${s.length}] = [
`;for(let n=0;n<s.length;n++)e+=`    (${s[n].get_lhs()}, ${s[n].get_rhs().length}),
`;return e+=`];

`,e.toString()}syntTransTable(t){if(t instanceof ie)return this.syntTransTableGrammar(t);throw new G("LL(1) NOT SUPPORTED (transtable)")}syntTransTableGrammar(t){if(this.lrTable===null)throw new G("Tabela LR está nula.");let e="";e+=`#[rustfmt::skip]
`,e+=`pub const PARSER_TABLE: [[(SLRAction, i32); ${this.lrTable[0].length}]; ${this.lrTable.length}] = [
`;let s=this.lrTable.length;t.productions.size()>s&&(s=t.productions.size()),s=(""+s).length;for(let n=0;n<this.lrTable.length;n++){e+="    [";for(let r=0;r<this.lrTable[n].length;r++){e+=" (",e+="SLRAction::"+te.CONSTANTS[this.lrTable[n][r][0]],e+=", ";const i=""+this.lrTable[n][r][1];for(let o=i.length;o<s;o++)e+=" ";e+=i+"),"}e=e.slice(0,-1),e+=`    ],
`}return e=e.slice(0,-2),e+=`
];

`,e.toString()}syntErrorsLL(t){const e=t.symbols;let s=2,n=`
pub const PARSER_ERROR: [&str; PARSER_ERROR_CT] = [
	"",
	"Era esperado fim de programa",
`;for(let r=2;r<t.FIRST_NON_TERMINAL;r++){n+='	"Era esperado ';for(let i=0;i<e[r].length;i++)switch(e[r].charAt(i)){case'"':n+='\\"';break;case"\\":n+="\\\\";break;default:n+=e[r].charAt(i)}n+=`",
`,s++}for(let r=t.FIRST_NON_TERMINAL;r<e.length;r++)n+=`	"${e[r]} inválido",
`,s++;return n+=`];

`,n+=`const PARSER_ERROR_CT: usize = ${s};`,n}syntErrorsLR(){if(this.lrTable===null)throw new G("Tabela LR está nula.");let t="";t+=`pub const PARSER_ERROR: [&str; ${this.lrTable.length}] = [
`;for(let e=0;e<this.lrTable.length;e++)t+='    "Erro estado '+e+`",
`;return t+=`];

`,t.toString()}}class us{generate(t,e){const s=new Map;let n="";const r=e.pkgName!==""?e.pkgName+"/":"";return e.generateScanner==!0&&(t!=null?n=this.buildScanner(t,e):n="",s.set(`src/${r}scanner.rs`,n)),s}buildScanner(t,e){const s=e.scannerName,n=e.pkgName!==""?e.pkgName+"::":"",r=e.input==L.INPUT_STRING;return`
#![allow(unused)]

use std::io::{BufReader, Read, Seek, SeekFrom};

use num_traits::FromPrimitive;

use crate::${n}constants::*;
use crate::${n}constants::*;
use crate::${n}errors::AnalysisError;
use crate::${n}token::*;

pub struct ${s}${r?"":"<T: Read + Seek>"} {
${r?`    input: String,
`:`    input: BufReader<T>,
     shadow: String,
`}    pos: usize,
}

impl${r?"":"<T: Read + Seek>"} ${s}${r?"":"<T>"} {
    pub fn new(input: ${r?"String":"BufReader<T>"}) -> Self {
        ${s} {
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

`}nextStateImpl(t,e){const s=t.transitions;let n="";for(let r=0;r<s.size();r++){const i=s.get(r);if(i.size!=0){n+="			"+r+` => match c {
`;for(const[o,a]of i.entries()){const l=o,m=a;n+=`				${l.charCodeAt(0)} => ${m},
`}n+=`				 _ => -1,
			},
`}}return`		match state {
`+n.toString()+`			_ => -1,
		}
`}}class hs{async generate(t,e){const s=new Map,n=e.pkgName!==""?e.pkgName+"/":"";return e.generateParser==!0&&t!=null&&(s.set(`src/${n}parser.rs`,await this.parser(t,e)),s.set(`src/${n}codegen.rs`,this.semantic(e)),e.useASTLib==!0&&s.set(`src/${n}node.rs`,this.node(t,e))),s}node(t,e){let s=e.pkgName!==""?e.pkgName+"::":"",n=[];return n.push(`use std::fmt::Display;
`),n.push(`use crate::${s}{errors::AnalysisError, codegen::CustomNode, constants::NonTerm, token::Token};
`),n.push(`#[allow(unused)]
`),n.push(`#[derive(Debug, Clone)]
`),n.push(`pub enum NodeKind {
`),n.push(`    Terminal(Token),
`),n.push(`    NonTerminal(NonTerm),
`),n.push(`    SemanticAction(i32),
`),n.push(`    Custom(CustomNode),
`),n.push(`}

`),n.push(`#[allow(unused)]
`),n.push(`impl NodeKind {
`),n.push(`    pub fn as_terminal(&self) -> &Token {
`),n.push(`        match self {
`),n.push(`            NodeKind::Terminal(token) => token,
`),n.push(`            _ => panic!(),
`),n.push(`        }
`),n.push(`    }
`),n.push(`    pub fn as_nonterminal(&self) -> &NonTerm {
`),n.push(`        match self {
`),n.push(`            NodeKind::NonTerminal(non_term) => non_term,
`),n.push(`            _ => panic!(),
`),n.push(`        }
`),n.push(`    }
`),n.push(`    pub fn as_semanticaction(&self) -> &i32 {
`),n.push(`        match self {
`),n.push(`            NodeKind::SemanticAction(n) => n,
`),n.push(`            _ => panic!()
`),n.push(`        }
`),n.push(`    }
`),n.push(`    pub fn as_custom(&self) -> &CustomNode {
`),n.push(`        match self {
`),n.push(`            NodeKind::Custom(cn) => cn,
`),n.push(`            _ => panic!()
`),n.push(`        }
`),n.push(`    }
`),n.push(`    pub fn is_similar(&self, rhs: &NodeKind) -> bool {
`),n.push(`        match (self, rhs) {
`),n.push(`            (NodeKind::Terminal(a), NodeKind::Terminal(b)) => a.get_id() == b.get_id(),
`),n.push(`            (NodeKind::NonTerminal(a), NodeKind::NonTerminal(b)) => *a == *b,
`),n.push(`            (NodeKind::SemanticAction(a), NodeKind::SemanticAction(b)) => *a == *b,
`),n.push(`            (NodeKind::Custom(a), NodeKind::Custom(b)) => *a == *b,
`),n.push(`            _ => false,
`),n.push(`        }
`),n.push(`    }
`),n.push(`}

`),n.push(`impl Display for NodeKind {
`),n.push(`    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
`),n.push(`        match self {
`),n.push(`            NodeKind::Terminal(token) => {
`),n.push(`                write!(f, "{:?} : \\"{}\\" ", token.get_id(), token.get_lexeme())
`),n.push(`            }
`),n.push(`            NodeKind::NonTerminal(non_term) => write!(f, "<{:?}>", *non_term),
`),n.push(`            NodeKind::SemanticAction(n) => write!(f, "#{}", *n),
`),n.push('            NodeKind::Custom(c) => write!(f, "{}", *c),'),n.push(`        }
`),n.push(`    }
`),n.push(`}

`),n.push(`impl Default for NodeKind {
`),n.push(`    fn default() -> Self {
`),n.push(`        NodeKind::NonTerminal(NonTerm::EPSILON)
`),n.push(`    }
`),n.push(`}

`),n.push(`#[derive(Default, Clone, Debug)]
`),n.push(`pub struct Node {
`),n.push(`    kind: NodeKind,
`),n.push(`    children: Vec<Box<Node>>,
`),n.push(`    actionlex: Option<Token>,
`),n.push(`}

`),n.push(`#[allow(unused)]
`),n.push(`impl Node {
`),n.push(`    pub fn new(kind: NodeKind) -> Box<Self> {
`),n.push(`        Box::new(Self {
`),n.push(`            kind,
`),n.push(`            children: Vec::new(),
`),n.push(`            actionlex: None,
`),n.push(`        })
`),n.push(`    }
`),n.push(`    pub fn new_action(kind: NodeKind, actionlex: Token) -> Box<Self> {
`),n.push(`        Box::new(Self {
`),n.push(`            kind,
`),n.push(`            children: Vec::new(),
`),n.push(`            actionlex: Some(actionlex),
`),n.push(`        })
`),n.push(`    }
`),n.push(`    pub fn get_actionlex(&self) -> Option<&Token> {
`),n.push(`        (&self.actionlex).as_ref()
`),n.push(`    }
`),n.push(`    pub fn get_children(&self) -> &Vec<Box<Node>> {
`),n.push(`        &self.children
`),n.push(`    }
`),n.push(`    pub fn get_children_mut(&mut self) -> &mut Vec<Box<Node>> {
`),n.push(`        &mut self.children
`),n.push(`    }
`),n.push(`    pub fn get_kind_mut(&mut self) -> &mut NodeKind {
`),n.push(`        &mut self.kind
`),n.push(`    }
`),n.push(`    pub fn get_kind(&self) -> &NodeKind {
`),n.push(`        &self.kind
`),n.push(`    }
`),n.push(`    pub fn ccount(&self) -> usize {
`),n.push(`        self.children.len()
`),n.push(`    }
`),n.push(`    pub fn cpush(&mut self, c: Box<Node>) {
`),n.push(`        self.children.push(c);
`),n.push(`    }
`),n.push(`    pub fn morph(&mut self, nkind: NodeKind) {
`),n.push(`        self.kind = nkind;
`),n.push(`    }
`),n.push(`    pub fn follow(&self, whre: usize) -> Option<&Box<Node>> {
`),n.push(`        self.children.get(whre)
`),n.push(`    }
`),n.push(`    pub fn follow_mut(&mut self, whre: usize) -> Option<&mut Box<Node>> {
`),n.push(`        self.children.get_mut(whre)
`),n.push(`    }
`),n.push(`    pub fn kidnap(&mut self, which: usize) -> Box<Node> {
`),n.push(`        self.children.remove(which)
`),n.push(`    }
`),n.push(`    pub fn try_transform<F>(self: &mut Box<Self>, t: &mut F) -> Result<(), AnalysisError>
`),n.push(`    where
`),n.push(`        F: FnMut(&mut Box<Self>) -> Result<(), AnalysisError>,
`),n.push(`    {
`),n.push(`        self.children.iter_mut().try_for_each(|c| c.try_transform(t));
`),n.push(`        t(self)
`),n.push(`    }
`),n.push(`    pub fn transform<F>(self: &mut Box<Self>, t: &mut F)
`),n.push(`    where
`),n.push(`        F: FnMut(&mut Box<Self>),
`),n.push(`    {
`),n.push(`        self.children.iter_mut().for_each(|c| c.transform(t));
`),n.push(`        t(self);
`),n.push(`    }
`),n.push(`    pub fn transform_preorder<F>(self: &mut Box<Self>, t: &mut F)
`),n.push(`    where
`),n.push(`        F: FnMut(&mut Box<Self>),
`),n.push(`    {
`),n.push(`        t(self);
`),n.push(`        self.children.iter_mut().for_each(|c| c.transform_preorder(t));
`),n.push(`    }
`),n.push(`    pub fn transform_dual<F>(self: &mut Box<Self>, t: &mut F)
`),n.push(`    where
`),n.push(`        F: FnMut(&mut Box<Self>, bool),
`),n.push(`    {
`),n.push(`        t(self, false);
`),n.push(`        self.children.iter_mut().for_each(|c| c.transform_dual(t));
`),n.push(`        t(self, true);
`),n.push(`    }
`),n.push(`    pub fn invert_children(&mut self) {
`),n.push(`        self.children.reverse();
`),n.push(`    }
`),n.push(`    pub fn print_tree(&self, depth: usize) {
`),n.push(`        println!("{} {}", " ".repeat(depth * 4), self.kind);
`),n.push(`        self.children.iter().for_each(|n| n.print_tree(depth + 1));
`),n.push(`    }

`),n.push(`    //---

`),n.push(`    pub fn assimilate(self: &mut Box<Self>, newkind: NodeKind, similars: &[NodeKind]) {
`),n.push(`        self.transform(&mut |n| {
`),n.push(`            for similar in similars {
`),n.push(`                if n.get_kind().is_similar(similar) {
`),n.push(`                    n.morph(newkind.clone());
`),n.push(`                    break;
`),n.push(`                }
`),n.push(`            }
`),n.push(`        });
`),n.push(`    }
`),n.push(`    pub fn squash(self: &mut Box<Self>, target: NodeKind) {
`),n.push(`        self.transform(&mut |n| {
`),n.push(`            if n.get_kind().is_similar(&target) {
`),n.push(`                if n.ccount() == 1 {
`),n.push(`                    if n.follow(0).unwrap().get_kind().is_similar(n.get_kind()) {
`),n.push(`                        *n = n.kidnap(0);
`),n.push(`                    }
`),n.push(`                }
`),n.push(`            }
`),n.push(`        });
`),n.push(`    }
`),n.push(`    pub fn filter(self: &mut Box<Self>, target: NodeKind, removelist: &[NodeKind]) {
`),n.push(`        self.transform(&mut |n| {
`),n.push(`            if n.get_kind().is_similar(&target) {
`),n.push(`                n.children.retain(|node| {
`),n.push(`                    for ri in removelist {
`),n.push(`                        if node.get_kind().is_similar(ri) {
`),n.push(`                            return false;
`),n.push(`                        }
`),n.push(`                    }
`),n.push(`                    return true;
`),n.push(`                });
`),n.push(`            }
`),n.push(`        });
`),n.push(`    }
`),n.push(`    pub fn flatten(self: &mut Box<Self>, target: NodeKind) {
`),n.push(`        self.transform(&mut |n| {
`),n.push(`            n.children = n
`),n.push(`                .children
`),n.push(`                .iter_mut()
`),n.push(`                .flat_map(|child| {
`),n.push(`                    if child.get_kind().is_similar(&target) {
`),n.push(`                        let mut new = Vec::default();
`),n.push(`                        std::mem::swap(&mut child.children, &mut new);
`),n.push(`                        new
`),n.push(`                    } else {
`),n.push(`                        let mut new = Box::default();
`),n.push(`                        std::mem::swap(child, &mut new);
`),n.push(`                        vec![new]
`),n.push(`                    }
`),n.push(`                })
`),n.push(`                .collect();
`),n.push(`        });
`),n.push(`    }
`),n.push(`    pub fn enlistify(self: &mut Box<Self>, target: NodeKind) {
`),n.push(`        self.transform(&mut |n| {
`),n.push(`            if n.get_kind().is_similar(&target) {
`),n.push(`                if let Some(c) = n.children.last() {
`),n.push(`                    if c.get_kind().is_similar(&target) {
`),n.push(`                        n.children = n
`),n.push(`                            .children
`),n.push(`                            .iter_mut()
`),n.push(`                            .flat_map(|kinder| {
`),n.push(`                                if kinder.get_kind().is_similar(&target) {
`),n.push(`                                    let mut new = Vec::default();
`),n.push(`                                    std::mem::swap(&mut kinder.children, &mut new);
`),n.push(`                                    new
`),n.push(`                                } else {
`),n.push(`                                    let mut new = Box::default();
`),n.push(`                                    std::mem::swap(kinder, &mut new);
`),n.push(`                                    vec![new]
`),n.push(`                                }
`),n.push(`                            })
`),n.push(`                            .collect();
`),n.push(`                    }
`),n.push(`                }
`),n.push(`            }
`),n.push(`        });
`),n.push(`    }
`),n.push(`    pub fn raise(self: &mut Box<Self>, targetdest: NodeKind, targetsrc: NodeKind) {
`),n.push(`        self.transform(&mut |n| {
`),n.push(`            n.children = n
`),n.push(`                .children
`),n.push(`                .iter_mut()
`),n.push(`                .flat_map(|m| {
`),n.push(`                    if m.get_kind().is_similar(&targetdest) {
`),n.push(`                        let mut risen = vec![];
`),n.push(`                        m.children.retain_mut(|k| {
`),n.push(`                            if k.get_kind().is_similar(&targetsrc) {
`),n.push(`                                let mut new = Box::default();
`),n.push(`                                std::mem::swap(k, &mut new);
`),n.push(`                                risen.push(new);
`),n.push(`                                return false;
`),n.push(`                            } else {
`),n.push(`                                return true;
`),n.push(`                            }
`),n.push(`                        });
`),n.push(`                        let mut new = Box::default();
`),n.push(`                        std::mem::swap(m, &mut new);
`),n.push(`                        let mut res = vec![new];
`),n.push(`                        res.append(&mut risen);
`),n.push(`                        res
`),n.push(`                    } else {
`),n.push(`                        let mut new = Box::default();
`),n.push(`                        std::mem::swap(m, &mut new);
`),n.push(`                        vec![new]
`),n.push(`                    }
`),n.push(`                })
`),n.push(`                .collect();
`),n.push(`        });
`),n.push(`    }
`),n.push(`}
`),n.join("")}semantic(t){const e=t.semanticName,n=`
use crate::${t.pkgName!==""?t.pkgName+"::":""}{errors::AnalysisError, token::Token};
${t.useASTLib==!0?"use std::fmt::Display;":""}

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
`;let r=[];return t.useASTLib==!0&&(r.push(`
#[derive(Debug, Clone, PartialEq)]
`),r.push(`pub struct CustomNode {}

`),r.push(`#[allow(unused)]
`),r.push(`impl CustomNode {
`),r.push(`    pub fn new() -> Self {
`),r.push(`        CustomNode {}
`),r.push(`    }
`),r.push(`}

`),r.push(`impl Display for CustomNode {
`),r.push(`    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
`),r.push(`        write!(f, "(custom)")
`),r.push(`    }
`),r.push(`}
`)),n+r.join("")}async parser(t,e){switch(e.parser){case L.PARSER_REC_DESC:return await this.redDecParser(t,e);case L.PARSER_LL:return this.llParser(t,e);default:return this.lrParser(t,e)}}lrParser(t,e){const s=e.parserName,n=e.pkgName!==""?e.pkgName+"::":"",r=e.input==L.INPUT_STRING;return`${r?"":"use std::io::{Read, Seek};"}
use crate::${n}{
    ${e.useASTLib==!1?`codegen::${e.semanticName},`:""} constants::*, errors::AnalysisError, scanner::${e.scannerName}, token::Token,
};

${e.useASTLib?`use crate::${n}node::{Node, NodeKind};`:""}

pub struct ${s}${r?"":"<T: Read + Seek>"} {
    previous_token: Option<Token>,
    current_token: Option<Token>,
    stack: Vec<u32>,
    scanner: ${e.scannerName}${r?"":"<T>"},
    ${e.useASTLib==!1?`semantic: ${e.semanticName},`:""}
    ${e.useASTLib?"forest: Vec<Box<Node>>,":""}
}

enum SyntaxParsingState {
    Continue,
    Accept,
    Reject(AnalysisError),
}

impl${r?"":"<T: Read + Seek>"} ${s}${r?"":"<T>"} {
    pub fn new(scanner: ${e.scannerName}${r?"":"<T>"}${e.useASTLib==!1?`, semantic: ${e.semanticName}`:""}) -> Self {
        ${s} {
            previous_token: None,
            current_token: None,
            stack: Vec::new(),
            scanner,
            ${e.useASTLib==!1?"semantic,":""}
            ${e.useASTLib?"forest: Vec::new(),":""}
        }
    }

    ${e.useASTLib?"pub fn parse(mut self) -> Result<Box<Node>, AnalysisError>":"pub fn parse(mut self) -> Result<(), AnalysisError>"} {
        self.stack.push(0);
        self.previous_token = None;

        match self.scanner.next_token() {
            Some(tk) => self.current_token = Some(tk?),
            None => self.current_token = None,
        }

        loop {
            match self.step() {
${e.useASTLib?`                SyntaxParsingState::Accept => {
                    let mut res = Box::default();
                    std::mem::swap(&mut res, &mut self.forest[0]);
                    return Ok(res);
                }
`:"               SyntaxParsingState::Accept => return Ok(()),"}
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

${e.useASTLib?`                self.forest.push(Node::new(NodeKind::Terminal(
                    self.current_token.clone().unwrap()
                )));
`:""}

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

${e.useASTLib?`                let mut node = Node::new(NodeKind::NonTerminal(NonTerm::EPSILON));
`:""}

                for _ in 0..prod.1 {
${e.useASTLib?`                    node.cpush(self.forest.pop().expect("insufficient trees"));
`:""}
                    self.stack.pop();
                }

${e.useASTLib?`                node.invert_children();
`:""}

                let oldstate = *self.stack.last().expect("oldstate") as usize;

                self.stack
                    .push(PARSER_TABLE[oldstate][(prod.0 - 1) as usize].1 as u32);

${e.useASTLib?`                node.morph(NodeKind::NonTerminal(NonTerm::from(prod.0)));
                self.forest.push(node);
`:""}

                Continue
            }
            SLRAction::ACTION => {
                let action = FIRST_SEMANTIC_ACTION + cmd.1 - 1;
${e.useASTLib?`                self.forest.push(Node::new_action(
                    NodeKind::SemanticAction(cmd.1 - 1),
                    self.previous_token.as_ref().expect("token").clone(),
                ));
`:""}
                self.stack
                    .push(PARSER_TABLE[state][action as usize].1 as u32);
${e.useASTLib?`                Continue
                }
`:`                let res = self
                    .semantic
                    .execute_action(cmd.1 as u32, self.previous_token.as_ref().expect("token"));
                  if let Err(e) = res {
                      Reject(e)
                  } else {
                      Continue
                  }
              }`}
${e.useASTLib?`            SLRAction::ACCEPT => {
               assert_eq!(self.forest.len(), 1);
               Accept
            },`:"            SLRAction::ACCEPT => Accept,"}
            SLRAction::GO_TO => unimplemented!(),
            SLRAction::ERROR => Reject(AnalysisError::syntatic(
                PARSER_ERROR[state].into(),
                self.current_token.as_ref().expect("token").get_position(),
            )),
        }
    }
}

`}async redDecParser(t,e){const s=await new ye(t).generateTable(),n=new $e(s,t);let r=e.scannerName,i=e.parserName,o=e.semanticName;const a=e.pkgName!==""?e.pkgName+"::":"",l=e.input==L.INPUT_STRING;let m=`
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

        self._${n.getStart()}()?;

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

`;const c=n.build();for(let f=t.FIRST_NON_TERMINAL;f<t.FIRST_SEMANTIC_ACTION();f++){const u=n.getSymbols(f),_=c.get(u);if(m+=`    fn _${u}(&mut self) -> Result<(), AnalysisError> {
        match self.current_token.as_ref().unwrap().get_id() {
`,_==null)throw new Le("Gramática não é LL.");const d=Array.from(_.input.keys());let T=new Set;for(let g=0;g<d.length;g++){const S=_.input.get(d[g]);let E=d[g];if(T.has(E))continue;let w=n.getSymbols(E);m+=`            TokenId::${w==="$"?"DOLLAR":"t_"+w}`,T.add(E);for(let y=g+1;y<d.length;y++)if(_.input.get(d[y])===S){if(E=d[y],T.has(E))continue;let O=n.getSymbols(E);m+=` | TokenId::${O==="$"?"DOLLAR":"t_"+O}`,T.add(E)}if(m+=` => {
`,S==null)throw new Le("Gramática não é LL.");for(let y=0;y<S.length;y++){const D=S[y];t.isTerminal(D)?m+=`                self.matchr(${D})?; // ${n.getSymbols(D)}
`:t.isNonTerminal(D)?m+=`                self._${n.getSymbols(D)}()?;
`:m+=`                self.semantic.execute_action(${D-t.FIRST_SEMANTIC_ACTION()}, self.previous_token.as_ref().unwrap())?;
`}m+=`            },
`}m+=`            _ => return Err(AnalysisError::syntatic(PARSER_ERROR[${_.lhs}].into(), self.current_token.as_ref().unwrap().get_position()))
`,m+=`        };
`,m+=`        Ok(())
`,m+=`    }
`}return m+=`}
`,m}llParser(t,e){const s=e.scannerName,n=e.parserName,r=e.semanticName,i=e.pkgName!==""?e.pkgName+"::":"",o=e.input==L.INPUT_STRING;return`
use std::io::{Read, Seek};

use crate::${i}{
    ${e.useASTLib?"node::NodeKind, node::Node,":`codegen::${r},`} constants::*, errors::AnalysisError, scanner::${s}, token::Token,
};

pub struct ${n}${o?"":"<T: Read + Seek>"} {
    stack: Vec<i32>,
    current_token: Option<Token>,
    previous_token: Option<Token>,
    scanner: ${s}${o?"":"<T>"},
${e.useASTLib?`    forest: Vec<Box<Node>>,
    nodect: Vec<usize>,`:`    semantic: ${r},`}
}

impl${o?"":"<T: Read + Seek>"} ${n}${o?"":"<T>"} {
    pub fn new(lex: ${s}${o?"":"<T>"}${e.useASTLib?"":` , sem: ${r}`}) -> Self {
        ${n} {
            stack: Vec::new(),
            current_token: None,
            previous_token: None,
            scanner: lex,
${e.useASTLib?`            forest: Vec::new(),
            nodect: Vec::new(),`:"            semantic: sem,"}
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
${e.useASTLib?`            self.forest
                .push(Node::new(NodeKind::NonTerminal(NonTerm::from(top_stack))));
            self.nodect.push(production.len());`:""}
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

${e.useASTLib?`        macro_rules! depopulate_forest {
            ($self:ident, $nn:expr) => {
                $self.forest.last_mut().expect("a").cpush($nn);

                let mut itg = $self.nodect.pop().unwrap();
                while itg == 1 {
                    let node = $self.forest.pop().unwrap();
                    $self.forest.last_mut().unwrap().cpush(node);
                    if $self.nodect.len() > 0 {
                        itg = $self.nodect.pop().unwrap();
                    } else {
                        break;
                    }
                }

                $self.nodect.push(itg.saturating_sub(1));
            };
        }`:""}

        if x == TokenId::EPSILON as i32 {
${e.useASTLib?`            depopulate_forest!(
                self,
                Node::new(NodeKind::Terminal(Token::new_dummy(TokenId::EPSILON)))
            );`:""}
            return Ok(Some(()));
        } else if ${n}${o?"":"::<T>"}::is_terminal(x) {
${e.useASTLib?`            depopulate_forest!(
                self,
                Node::new(NodeKind::Terminal(self.current_token.clone().unwrap()))
            );`:""}
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
        } else if ${n}${o?"":"::<T>"}::is_non_terminal(x) {
            if self.push_production(x, a) {
                return Ok(Some(()));
            } else {
                return Err(AnalysisError::syntatic(
                    PARSER_ERROR[x as usize].into(),
                    self.current_token.as_ref().unwrap().get_position(),
                ));
            }
        } else {
${e.useASTLib?`            depopulate_forest!(
                self,
                Node::new_action(
                    NodeKind::SemanticAction(x - FIRST_SEMANTIC_ACTION - 1),
                    self.previous_token.clone().unwrap()
                )
            );
`:`            self.semantic.execute_action(
                (x - FIRST_SEMANTIC_ACTION) as u32,
                self.previous_token.as_ref().unwrap(),
            )?;`}
            return Ok(Some(()));
        }
    }

    pub fn parse(mut self) -> Result<${e.useASTLib?"Box<Node>":"()"}, AnalysisError> {
        self.stack.push(TokenId::DOLLAR as i32);
        self.stack.push(START_SYMBOL);

        self.current_token = self.scanner.next_token().transpose()?;

${e.useASTLib?`            self.forest
            .push(Node::new(NodeKind::Terminal(Token::new_dummy(
                TokenId::EPSILON,
            ))));`:""}

        while let Some(_) = self.step()? {}

${e.useASTLib?`        if self.forest.len() != 1 {
            return Err(AnalysisError::syntatic(
                "Erro desconhecido no motor sintático (teve sucesso mas contém mais de uma árvore sintática resultante.)".into(),
                0,
            ));
        }

        Ok(self.forest.pop().unwrap().kidnap(0))`:"        Ok(())"}
    }
}

`}}class He{static EPSILON=0;static DOLLAR=1;static FIRST_TERMINAL=2;FIRST_NON_TERMINAL;FIRST_SEMANTIC_ACTION;LAST_SEMANTIC_ACTION;START_SYMBOL=0;grammar;scanner=null;table;productions;stack=new Be;currentToken=null;symb;node=new we;nodeCount=new Be;constructor(t,e){this.grammar=e.getGrammar()||(()=>{throw new Error("Grammar is undefined")})(),this.table=t,this.FIRST_NON_TERMINAL=this.grammar.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION=this.grammar.FIRST_SEMANTIC_ACTION(),this.LAST_SEMANTIC_ACTION=this.grammar.LAST_SEMANTIC_ACTION(),this.START_SYMBOL=this.grammar.startSymbol;const s=this.grammar.productions;this.productions=[];for(let n=0;n<s.size();n++){const r=s.get(n).get_rhs();if(r.length>0){this.productions[n]=[];for(let i=0;i<r.length;i++)this.productions[n][i]=r[i]}else this.productions[n]=[0]}this.symb=this.grammar.symbols}step(){this.currentToken==null&&(this.currentToken=new pe(He.DOLLAR,"$",0));const t=this.stack.pop(),e=this.currentToken.id;if(t==null)throw new G("Stack is not initialized");if(t==He.EPSILON){this.node.add(new we("EPSILON"));let s=this.nodeCount.pop();for(;s==1;){const n=this.node.parent;if(n===null)throw new G("Null parent");if(this.node=n,this.nodeCount.size()>0)s=this.nodeCount.pop();else break}return this.nodeCount.push(s-1),!1}else if(this.isTerminal(t)){this.node.add(new we(this.symb[e]));let s=this.nodeCount.pop();for(;s==1;){const n=this.node.parent;if(n===null)throw new G("Null parent");if(this.node=n,this.nodeCount.size()>0)s=this.nodeCount.pop();else break}if(this.nodeCount.push(s-1),t==e){if(this.stack.empty())return!0;if(this.scanner==null)throw new G("Scanner is NULL");return this.currentToken=this.scanner.nextToken(),!1}else throw this.node.add(new we("ERRO SINTÁTICO: Era esperado "+this.symb[t])),new G("Era esperado "+this.symb[t],this.currentToken.position)}else if(this.isNonTerminal(t)){const s=this.table[t-this.FIRST_NON_TERMINAL][e-1];if(s!=-1){const n=this.productions[s];for(let i=n.length-1;i>=0;i--)this.stack.push(n[i]);const r=new we(this.symb[t]);return this.node.add(r),this.node=r,this.nodeCount.push(n.length),!1}else throw this.node.add(new we("ERRO SINTÁTICO: "+this.symb[e]+" inesperado")),new G(this.symb[e]+" inesperado",this.currentToken.position)}else if(this.isSemanticAction(t)){this.node.add(new we("#"+(t-this.FIRST_SEMANTIC_ACTION)));let s=this.nodeCount.pop();for(;s==1;){const n=this.node.parent;if(n===null)throw new G("Null parent");if(this.node=n,this.nodeCount.size()>0)s=this.nodeCount.pop();else break}return this.nodeCount.push(s-1),!1}else return!1}parse(t,e){for(this.scanner=t,this.node=e,this.nodeCount.clear(),this.stack.clear(),this.stack.push(He.DOLLAR),this.stack.push(this.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););return e}isTerminal(t){return t>=0&&t<this.FIRST_NON_TERMINAL}isNonTerminal(t){return t>=this.FIRST_NON_TERMINAL&&t<this.FIRST_SEMANTIC_ACTION}isSemanticAction(t){return t>=this.FIRST_SEMANTIC_ACTION&&t<=this.LAST_SEMANTIC_ACTION}}function rn(N,t){const e=N.split(`
`).filter(Boolean),s=new Map;for(let n of e){n=n.trim();const r=n.indexOf(":"),i=n.slice(0,r);let o=n.slice(r+1),a=!1;if(o.trim()==="/"&&(o='"/" ',a=!0),o.trim()==="//")throw new de(`A definição regular '${o.trim()}' será confundida como comentário no próprio editor, abortando.`);const l=[i,o].filter(Boolean);let m=l[1].trim();a&&(m+=" ");const c=m.match(/{[a-zA-Z_][a-zA-Z0-9_]*}/g);if(c!==null)for(const f of c)if(s.has(f))m=m.replace(f,s.get(f));else throw new de(`Definições Regulares: A definição ${f} usada em '${n}' não existe.`);s.set("{"+l[0].trim()+"}",m)}for(const[n,r]of s.entries()){const i=new RegExp(n,"g");t=t.replace(i,r)}return t}async function cs(N,t,e,s,n,r,i,o,a,l,m,c){try{e=rn(t,e),t=""}catch(O){throw console.warn(O),new de(O.message)}const f=n.split(`
`),u=new Set;f.forEach(O=>{const j=O.match(/^[^:]+(?=\s*::=)/);j&&u.add(j[0].trim())});const _=Array.from(u),d=_.indexOf(s.trim());if(d==-1)throw new G("Símbolo inicial da Gramática não encontrado.");const T=_.splice(d,1)[0];_.splice(0,0,T);const g=!0,S=new sn;if(a==null&&(a=S.parseFA(t,e,g)),i&&(m=void 0,c=void 0),i||l==null){i=!1;const O=new ue;{const K=a.tokens;for(let X=0;X<K.size();X++)O.add(K.get(X)),O.add(`
`)}const j=_,P=new ue;j.forEach(K=>P.add(K)),l=new nn().parse(O,P,n)}const E=a.tokens.toArray();if(l===void 0)throw new G("Grammar is Undefined");let w=null,y=null;switch(r){case L.PARSER_REC_DESC:case L.PARSER_LL:[c,o,y]=await ps(a,l,E,o,g,c);break;case L.PARSER_SLR:case L.PARSER_LALR:case L.PARSER_LR:[m,o,w]=await fs(a,l,E,o,g,r,m);break}if(w===null&&y===null)throw new G("Erro na criação do Parser Sintático");let D=new we("Derivação");if(o===void 0)throw new G("Finite Automata Simulator is Null");return o.setInput(N),c!=null?D=c.parse(o,D):m!=null&&(D=m.parse(o,D)),[D,l,m,c]}async function ds(N,t,e,s,n,r,i,o){try{t=rn(N,t),N=""}catch(S){throw console.warn(S),new de(S.message)}const a=s.split(`
`),l=new Set;a.forEach(S=>{const E=S.match(/^[^:]+(?=\s*::=)/);E&&l.add(E[0].trim())});const m=Array.from(l),c=m.indexOf(e.trim());if(c==-1)throw new G("Símbolo inicial da Gramática não encontrado.");const f=m.splice(c,1)[0];m.splice(0,0,f);const u=!0,_=new sn;if(i==null&&(i=_.parseFA(N,t,u)),r||o==null){r=!1;const S=new ue;{const y=i.tokens;for(let D=0;D<y.size();D++)S.add(y.get(D)),S.add(`
`)}const E=m,w=new ue;E.forEach(y=>w.add(y)),o=new nn().parse(S,w,s)}if(i.tokens.toArray(),o===void 0)throw new G("Grammar is Undefined");const d=new Fe;let T=!1,g=null;switch(n.language){case L.LANG_JAVA:d.setAll(await new Yn().generate(i,o,n)),d.setAll(new Vn().generate(i,n)),d.setAll(await new Jn().generate(o,n));break;case L.LANG_CPP:d.setAll(await new Qn().generate(i,o,n)),d.setAll(new es().generate(i,n)),d.setAll(await new ts().generate(o,n));break;case L.LANG_DELPHI:d.setAll(await new ns().generate(i,o,n)),d.setAll(new ss().generate(i,n)),d.setAll(await new rs().generate(o,n));break;case L.LANG_PYTHON:let S=new is;d.setAll(await S.generate(i,o,n)),d.setAll(new os().generate(i,n)),d.setAll(await new as().generate(o,n)),T=n.pkgName!=="",g=S.mainfunc(n);break;case L.LANG_RUST:d.setAll(await new ls().generate(i,o,n)),d.setAll(new us().generate(i,n)),d.setAll(await new hs().generate(o,n));break}return[d,o,T,g]}async function ps(N,t,e,s,n,r){N!=null?s=new Ke(N,n):s=new Ke(on(e,n),n);let i;if(t!=null){if(i=new ye(t),i===null)throw new G("Parser is Null");if(r===void 0){const o=await i.generateTable();r=new He(o,i)}}else throw new G("Grammar is Null");return[r,s,i]}async function fs(N,t,e,s,n,r,i){N!=null?s=new Ke(N,n):s=new Ke(on(e,n),n);let o;if(t!=null){if(o=je.createGenerator(t,r),o===null)throw new G("Parser is Null");if(i===void 0){const a=await o.buildTable();i=new mt(a,o)}}else throw new G("Grammar is Null");return[i,s,o]}function on(N,t){try{const e=new Gn;for(let s=0;s<N.length;s++){const n=N[s];e.addToken(n,n)}return e.addIgnore("[\\ \\n\\r\\t]"),e.getFA(t)}catch(e){throw e}}function tt(N){throw new Error('Could not dynamically require "'+N+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _t={exports:{}};var an;function ms(){return an||(an=1,(function(N,t){(function(e){N.exports=e()})(function(){return(function e(s,n,r){function i(l,m){if(!n[l]){if(!s[l]){var c=typeof tt=="function"&&tt;if(!m&&c)return c(l,!0);if(o)return o(l,!0);var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}var u=n[l]={exports:{}};s[l][0].call(u.exports,function(_){var d=s[l][1][_];return i(d||_)},u,u.exports,e,s,n,r)}return n[l].exports}for(var o=typeof tt=="function"&&tt,a=0;a<r.length;a++)i(r[a]);return i})({1:[function(e,s,n){var r=e("./utils"),i=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(a){for(var l,m,c,f,u,_,d,T=[],g=0,S=a.length,E=S,w=r.getTypeOf(a)!=="string";g<a.length;)E=S-g,c=w?(l=a[g++],m=g<S?a[g++]:0,g<S?a[g++]:0):(l=a.charCodeAt(g++),m=g<S?a.charCodeAt(g++):0,g<S?a.charCodeAt(g++):0),f=l>>2,u=(3&l)<<4|m>>4,_=1<E?(15&m)<<2|c>>6:64,d=2<E?63&c:64,T.push(o.charAt(f)+o.charAt(u)+o.charAt(_)+o.charAt(d));return T.join("")},n.decode=function(a){var l,m,c,f,u,_,d=0,T=0,g="data:";if(a.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var S,E=3*(a=a.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(a.charAt(a.length-1)===o.charAt(64)&&E--,a.charAt(a.length-2)===o.charAt(64)&&E--,E%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=i.uint8array?new Uint8Array(0|E):new Array(0|E);d<a.length;)l=o.indexOf(a.charAt(d++))<<2|(f=o.indexOf(a.charAt(d++)))>>4,m=(15&f)<<4|(u=o.indexOf(a.charAt(d++)))>>2,c=(3&u)<<6|(_=o.indexOf(a.charAt(d++))),S[T++]=l,u!==64&&(S[T++]=m),_!==64&&(S[T++]=c);return S}},{"./support":30,"./utils":32}],2:[function(e,s,n){var r=e("./external"),i=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function l(m,c,f,u,_){this.compressedSize=m,this.uncompressedSize=c,this.crc32=f,this.compression=u,this.compressedContent=_}l.prototype={getContentWorker:function(){var m=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),c=this;return m.on("end",function(){if(this.streamInfo.data_length!==c.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),m},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(m,c,f){return m.pipe(new o).pipe(new a("uncompressedSize")).pipe(c.compressWorker(f)).pipe(new a("compressedSize")).withStreamInfo("compression",c)},s.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,s,n){var r=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,s,n){var r=e("./utils"),i=(function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var m=0;m<8;m++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a})();s.exports=function(o,a){return o!==void 0&&o.length?r.getTypeOf(o)!=="string"?(function(l,m,c,f){var u=i,_=f+c;l^=-1;for(var d=f;d<_;d++)l=l>>>8^u[255&(l^m[d])];return-1^l})(0|a,o,o.length,0):(function(l,m,c,f){var u=i,_=f+c;l^=-1;for(var d=f;d<_;d++)l=l>>>8^u[255&(l^m.charCodeAt(d))];return-1^l})(0|a,o,o.length,0):0}},{"./utils":32}],5:[function(e,s,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,s,n){var r=null;r=typeof Promise<"u"?Promise:e("lie"),s.exports={Promise:r}},{lie:37}],7:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",i=e("pako"),o=e("./utils"),a=e("./stream/GenericWorker"),l=r?"uint8array":"array";function m(c,f){a.call(this,"FlateWorker/"+c),this._pako=null,this._pakoAction=c,this._pakoOptions=f,this.meta={}}n.magic="\b\0",o.inherits(m,a),m.prototype.processChunk=function(c){this.meta=c.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(l,c.data),!1)},m.prototype.flush=function(){a.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},m.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},m.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var c=this;this._pako.onData=function(f){c.push({data:f,meta:c.meta})}},n.compressWorker=function(c){return new m("Deflate",c)},n.uncompressWorker=function(){return new m("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,s,n){function r(u,_){var d,T="";for(d=0;d<_;d++)T+=String.fromCharCode(255&u),u>>>=8;return T}function i(u,_,d,T,g,S){var E,w,y=u.file,D=u.compression,O=S!==l.utf8encode,j=o.transformTo("string",S(y.name)),P=o.transformTo("string",l.utf8encode(y.name)),K=y.comment,X=o.transformTo("string",S(K)),A=o.transformTo("string",l.utf8encode(K)),F=P.length!==y.name.length,p=A.length!==K.length,z="",ne="",$="",re=y.dir,H=y.date,ee={crc32:0,compressedSize:0,uncompressedSize:0};_&&!d||(ee.crc32=u.crc32,ee.compressedSize=u.compressedSize,ee.uncompressedSize=u.uncompressedSize);var I=0;_&&(I|=8),O||!F&&!p||(I|=2048);var v=0,Q=0;re&&(v|=16),g==="UNIX"?(Q=798,v|=(function(Z,Se){var Ee=Z;return Z||(Ee=Se?16893:33204),(65535&Ee)<<16})(y.unixPermissions,re)):(Q=20,v|=(function(Z){return 63&(Z||0)})(y.dosPermissions)),E=H.getUTCHours(),E<<=6,E|=H.getUTCMinutes(),E<<=5,E|=H.getUTCSeconds()/2,w=H.getUTCFullYear()-1980,w<<=4,w|=H.getUTCMonth()+1,w<<=5,w|=H.getUTCDate(),F&&(ne=r(1,1)+r(m(j),4)+P,z+="up"+r(ne.length,2)+ne),p&&($=r(1,1)+r(m(X),4)+A,z+="uc"+r($.length,2)+$);var Y="";return Y+=`
\0`,Y+=r(I,2),Y+=D.magic,Y+=r(E,2),Y+=r(w,2),Y+=r(ee.crc32,4),Y+=r(ee.compressedSize,4),Y+=r(ee.uncompressedSize,4),Y+=r(j.length,2),Y+=r(z.length,2),{fileRecord:c.LOCAL_FILE_HEADER+Y+j+z,dirRecord:c.CENTRAL_FILE_HEADER+r(Q,2)+Y+r(X.length,2)+"\0\0\0\0"+r(v,4)+r(T,4)+j+z+X}}var o=e("../utils"),a=e("../stream/GenericWorker"),l=e("../utf8"),m=e("../crc32"),c=e("../signature");function f(u,_,d,T){a.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=d,this.encodeFileName=T,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(f,a),f.prototype.push=function(u){var _=u.meta.percent||0,d=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,a.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:d?(_+100*(d-T-1))/d:100}}))},f.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var _=this.streamFiles&&!u.file.dir;if(_){var d=i(u,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(u){this.accumulate=!1;var _=this.streamFiles&&!u.file.dir,d=i(u,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),_)this.push({data:(function(T){return c.DATA_DESCRIPTOR+r(T.crc32,4)+r(T.compressedSize,4)+r(T.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var u=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var d=this.bytesWritten-u,T=(function(g,S,E,w,y){var D=o.transformTo("string",y(w));return c.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(g,2)+r(g,2)+r(S,4)+r(E,4)+r(D.length,2)+D})(this.dirRecords.length,d,u,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(u){this._sources.push(u);var _=this;return u.on("data",function(d){_.processChunk(d)}),u.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),u.on("error",function(d){_.error(d)}),this},f.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(u){var _=this._sources;if(!a.prototype.error.call(this,u))return!1;for(var d=0;d<_.length;d++)try{_[d].error(u)}catch{}return!0},f.prototype.lock=function(){a.prototype.lock.call(this);for(var u=this._sources,_=0;_<u.length;_++)u[_].lock()},s.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,s,n){var r=e("../compressions"),i=e("./ZipFileWorker");n.generateWorker=function(o,a,l){var m=new i(a.streamFiles,l,a.platform,a.encodeFileName),c=0;try{o.forEach(function(f,u){c++;var _=(function(S,E){var w=S||E,y=r[w];if(!y)throw new Error(w+" is not a valid compression method !");return y})(u.options.compression,a.compression),d=u.options.compressionOptions||a.compressionOptions||{},T=u.dir,g=u.date;u._compressWorker(_,d).withStreamInfo("file",{name:f,dir:T,date:g,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(m)}),m.entriesCount=c}catch(f){m.error(f)}return m}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,s,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var i=new r;for(var o in this)typeof this[o]!="function"&&(i[o]=this[o]);return i}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(i,o){return new r().loadAsync(i,o)},r.external=e("./external"),s.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,s,n){var r=e("./utils"),i=e("./external"),o=e("./utf8"),a=e("./zipEntries"),l=e("./stream/Crc32Probe"),m=e("./nodejsUtils");function c(f){return new i.Promise(function(u,_){var d=f.decompressed.getContentWorker().pipe(new l);d.on("error",function(T){_(T)}).on("end",function(){d.streamInfo.crc32!==f.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}s.exports=function(f,u){var _=this;return u=r.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),m.isNode&&m.isStream(f)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",f,!0,u.optimizedBinaryString,u.base64).then(function(d){var T=new a(u);return T.load(d),T}).then(function(d){var T=[i.Promise.resolve(d)],g=d.files;if(u.checkCRC32)for(var S=0;S<g.length;S++)T.push(c(g[S]));return i.Promise.all(T)}).then(function(d){for(var T=d.shift(),g=T.files,S=0;S<g.length;S++){var E=g[S],w=E.fileNameStr,y=r.resolve(E.fileNameStr);_.file(y,E.decompressed,{binary:!0,optimizedBinaryString:!0,date:E.date,dir:E.dir,comment:E.fileCommentStr.length?E.fileCommentStr:null,unixPermissions:E.unixPermissions,dosPermissions:E.dosPermissions,createFolders:u.createFolders}),E.dir||(_.file(y).unsafeOriginalName=w)}return T.zipComment.length&&(_.comment=T.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,s,n){var r=e("../utils"),i=e("../stream/GenericWorker");function o(a,l){i.call(this,"Nodejs stream input adapter for "+a),this._upstreamEnded=!1,this._bindStream(l)}r.inherits(o,i),o.prototype._bindStream=function(a){var l=this;(this._stream=a).pause(),a.on("data",function(m){l.push({data:m,meta:{percent:0}})}).on("error",function(m){l.isPaused?this.generatedError=m:l.error(m)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},o.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,s,n){var r=e("readable-stream").Readable;function i(o,a,l){r.call(this,a),this._helper=o;var m=this;o.on("data",function(c,f){m.push(c)||m._helper.pause(),l&&l(f)}).on("error",function(c){m.emit("error",c)}).on("end",function(){m.push(null)})}e("../utils").inherits(i,r),i.prototype._read=function(){this._helper.resume()},s.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,s,n){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,i){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,i);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,i)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var i=new Buffer(r);return i.fill(0),i},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(e,s,n){function r(y,D,O){var j,P=o.getTypeOf(D),K=o.extend(O||{},m);K.date=K.date||new Date,K.compression!==null&&(K.compression=K.compression.toUpperCase()),typeof K.unixPermissions=="string"&&(K.unixPermissions=parseInt(K.unixPermissions,8)),K.unixPermissions&&16384&K.unixPermissions&&(K.dir=!0),K.dosPermissions&&16&K.dosPermissions&&(K.dir=!0),K.dir&&(y=g(y)),K.createFolders&&(j=T(y))&&S.call(this,j,!0);var X=P==="string"&&K.binary===!1&&K.base64===!1;O&&O.binary!==void 0||(K.binary=!X),(D instanceof c&&D.uncompressedSize===0||K.dir||!D||D.length===0)&&(K.base64=!1,K.binary=!0,D="",K.compression="STORE",P="string");var A=null;A=D instanceof c||D instanceof a?D:_.isNode&&_.isStream(D)?new d(y,D):o.prepareContent(y,D,K.binary,K.optimizedBinaryString,K.base64);var F=new f(y,A,K);this.files[y]=F}var i=e("./utf8"),o=e("./utils"),a=e("./stream/GenericWorker"),l=e("./stream/StreamHelper"),m=e("./defaults"),c=e("./compressedObject"),f=e("./zipObject"),u=e("./generate"),_=e("./nodejsUtils"),d=e("./nodejs/NodejsStreamInputAdapter"),T=function(y){y.slice(-1)==="/"&&(y=y.substring(0,y.length-1));var D=y.lastIndexOf("/");return 0<D?y.substring(0,D):""},g=function(y){return y.slice(-1)!=="/"&&(y+="/"),y},S=function(y,D){return D=D!==void 0?D:m.createFolders,y=g(y),this.files[y]||r.call(this,y,null,{dir:!0,createFolders:D}),this.files[y]};function E(y){return Object.prototype.toString.call(y)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(y){var D,O,j;for(D in this.files)j=this.files[D],(O=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&y(O,j)},filter:function(y){var D=[];return this.forEach(function(O,j){y(O,j)&&D.push(j)}),D},file:function(y,D,O){if(arguments.length!==1)return y=this.root+y,r.call(this,y,D,O),this;if(E(y)){var j=y;return this.filter(function(K,X){return!X.dir&&j.test(K)})}var P=this.files[this.root+y];return P&&!P.dir?P:null},folder:function(y){if(!y)return this;if(E(y))return this.filter(function(P,K){return K.dir&&y.test(P)});var D=this.root+y,O=S.call(this,D),j=this.clone();return j.root=O.name,j},remove:function(y){y=this.root+y;var D=this.files[y];if(D||(y.slice(-1)!=="/"&&(y+="/"),D=this.files[y]),D&&!D.dir)delete this.files[y];else for(var O=this.filter(function(P,K){return K.name.slice(0,y.length)===y}),j=0;j<O.length;j++)delete this.files[O[j].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(y){var D,O={};try{if((O=o.extend(y||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");o.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var j=O.comment||this.comment||"";D=u.generateWorker(this,O,j)}catch(P){(D=new a("error")).error(P)}return new l(D,O.type||"string",O.mimeType)},generateAsync:function(y,D){return this.generateInternalStream(y).accumulate(D)},generateNodeStream:function(y,D){return(y=y||{}).type||(y.type="nodebuffer"),this.generateInternalStream(y).toNodejsStream(D)}};s.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,s,n){s.exports=e("stream")},{stream:void 0}],17:[function(e,s,n){var r=e("./DataReader");function i(o){r.call(this,o);for(var a=0;a<this.data.length;a++)o[a]=255&o[a]}e("../utils").inherits(i,r),i.prototype.byteAt=function(o){return this.data[this.zero+o]},i.prototype.lastIndexOfSignature=function(o){for(var a=o.charCodeAt(0),l=o.charCodeAt(1),m=o.charCodeAt(2),c=o.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===a&&this.data[f+1]===l&&this.data[f+2]===m&&this.data[f+3]===c)return f-this.zero;return-1},i.prototype.readAndCheckSignature=function(o){var a=o.charCodeAt(0),l=o.charCodeAt(1),m=o.charCodeAt(2),c=o.charCodeAt(3),f=this.readData(4);return a===f[0]&&l===f[1]&&m===f[2]&&c===f[3]},i.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},s.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,s,n){var r=e("../utils");function i(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var a,l=0;for(this.checkOffset(o),a=this.index+o-1;a>=this.index;a--)l=(l<<8)+this.byteAt(a);return this.index+=o,l},readString:function(o){return r.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},s.exports=i},{"../utils":32}],19:[function(e,s,n){var r=e("./Uint8ArrayReader");function i(o){r.call(this,o)}e("../utils").inherits(i,r),i.prototype.readData=function(o){this.checkOffset(o);var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},s.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,s,n){var r=e("./DataReader");function i(o){r.call(this,o)}e("../utils").inherits(i,r),i.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},i.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},i.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},i.prototype.readData=function(o){this.checkOffset(o);var a=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},s.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,s,n){var r=e("./ArrayReader");function i(o){r.call(this,o)}e("../utils").inherits(i,r),i.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var a=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,a},s.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,s,n){var r=e("../utils"),i=e("../support"),o=e("./ArrayReader"),a=e("./StringReader"),l=e("./NodeBufferReader"),m=e("./Uint8ArrayReader");s.exports=function(c){var f=r.getTypeOf(c);return r.checkSupport(f),f!=="string"||i.uint8array?f==="nodebuffer"?new l(c):i.uint8array?new m(r.transformTo("uint8array",c)):new o(r.transformTo("array",c)):new a(c)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,s,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,s,n){var r=e("./GenericWorker"),i=e("../utils");function o(a){r.call(this,"ConvertWorker to "+a),this.destType=a}i.inherits(o,r),o.prototype.processChunk=function(a){this.push({data:i.transformTo(this.destType,a.data),meta:a.meta})},s.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,s,n){var r=e("./GenericWorker"),i=e("../crc32");function o(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,r),o.prototype.processChunk=function(a){this.streamInfo.crc32=i(a.data,this.streamInfo.crc32||0),this.push(a)},s.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,s,n){var r=e("../utils"),i=e("./GenericWorker");function o(a){i.call(this,"DataLengthProbe for "+a),this.propName=a,this.withStreamInfo(a,0)}r.inherits(o,i),o.prototype.processChunk=function(a){if(a){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+a.data.length}i.prototype.processChunk.call(this,a)},s.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,s,n){var r=e("../utils"),i=e("./GenericWorker");function o(a){i.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,a.then(function(m){l.dataIsReady=!0,l.data=m,l.max=m&&m.length||0,l.type=r.getTypeOf(m),l.isPaused||l._tickAndRepeat()},function(m){l.error(m)})}r.inherits(o,i),o.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var a=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":a=this.data.substring(this.index,l);break;case"uint8array":a=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":a=this.data.slice(this.index,l)}return this.index=l,this.push({data:a,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,s,n){function r(i){this.name=i||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(i){this.emit("data",i)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(i){this.emit("error",i)}return!0},error:function(i){return!this.isFinished&&(this.isPaused?this.generatedError=i:(this.isFinished=!0,this.emit("error",i),this.previous&&this.previous.error(i),this.cleanUp()),!0)},on:function(i,o){return this._listeners[i].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(i,o){if(this._listeners[i])for(var a=0;a<this._listeners[i].length;a++)this._listeners[i][a].call(this,o)},pipe:function(i){return i.registerPrevious(this)},registerPrevious:function(i){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=i.streamInfo,this.mergeStreamInfo(),this.previous=i;var o=this;return i.on("data",function(a){o.processChunk(a)}),i.on("end",function(){o.end()}),i.on("error",function(a){o.error(a)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var i=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),i=!0),this.previous&&this.previous.resume(),!i},flush:function(){},processChunk:function(i){this.push(i)},withStreamInfo:function(i,o){return this.extraStreamInfo[i]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var i in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,i)&&(this.streamInfo[i]=this.extraStreamInfo[i])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var i="Worker "+this.name;return this.previous?this.previous+" -> "+i:i}},s.exports=r},{}],29:[function(e,s,n){var r=e("../utils"),i=e("./ConvertWorker"),o=e("./GenericWorker"),a=e("../base64"),l=e("../support"),m=e("../external"),c=null;if(l.nodestream)try{c=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(_,d){return new m.Promise(function(T,g){var S=[],E=_._internalType,w=_._outputType,y=_._mimeType;_.on("data",function(D,O){S.push(D),d&&d(O)}).on("error",function(D){S=[],g(D)}).on("end",function(){try{var D=(function(O,j,P){switch(O){case"blob":return r.newBlob(r.transformTo("arraybuffer",j),P);case"base64":return a.encode(j);default:return r.transformTo(O,j)}})(w,(function(O,j){var P,K=0,X=null,A=0;for(P=0;P<j.length;P++)A+=j[P].length;switch(O){case"string":return j.join("");case"array":return Array.prototype.concat.apply([],j);case"uint8array":for(X=new Uint8Array(A),P=0;P<j.length;P++)X.set(j[P],K),K+=j[P].length;return X;case"nodebuffer":return Buffer.concat(j);default:throw new Error("concat : unsupported type '"+O+"'")}})(E,S),y);T(D)}catch(O){g(O)}S=[]}).resume()})}function u(_,d,T){var g=d;switch(d){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=d,this._mimeType=T,r.checkSupport(g),this._worker=_.pipe(new i(g)),_.lock()}catch(S){this._worker=new o("error"),this._worker.error(S)}}u.prototype={accumulate:function(_){return f(this,_)},on:function(_,d){var T=this;return _==="data"?this._worker.on(_,function(g){d.call(T,g.data,g.meta)}):this._worker.on(_,function(){r.delay(d,arguments,T)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:this._outputType!=="nodebuffer"},_)}},s.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,s,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,s,n){for(var r=e("./utils"),i=e("./support"),o=e("./nodejsUtils"),a=e("./stream/GenericWorker"),l=new Array(256),m=0;m<256;m++)l[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;l[254]=l[254]=1;function c(){a.call(this,"utf-8 decode"),this.leftOver=null}function f(){a.call(this,"utf-8 encode")}n.utf8encode=function(u){return i.nodebuffer?o.newBufferFrom(u,"utf-8"):(function(_){var d,T,g,S,E,w=_.length,y=0;for(S=0;S<w;S++)(64512&(T=_.charCodeAt(S)))==55296&&S+1<w&&(64512&(g=_.charCodeAt(S+1)))==56320&&(T=65536+(T-55296<<10)+(g-56320),S++),y+=T<128?1:T<2048?2:T<65536?3:4;for(d=i.uint8array?new Uint8Array(y):new Array(y),S=E=0;E<y;S++)(64512&(T=_.charCodeAt(S)))==55296&&S+1<w&&(64512&(g=_.charCodeAt(S+1)))==56320&&(T=65536+(T-55296<<10)+(g-56320),S++),T<128?d[E++]=T:(T<2048?d[E++]=192|T>>>6:(T<65536?d[E++]=224|T>>>12:(d[E++]=240|T>>>18,d[E++]=128|T>>>12&63),d[E++]=128|T>>>6&63),d[E++]=128|63&T);return d})(u)},n.utf8decode=function(u){return i.nodebuffer?r.transformTo("nodebuffer",u).toString("utf-8"):(function(_){var d,T,g,S,E=_.length,w=new Array(2*E);for(d=T=0;d<E;)if((g=_[d++])<128)w[T++]=g;else if(4<(S=l[g]))w[T++]=65533,d+=S-1;else{for(g&=S===2?31:S===3?15:7;1<S&&d<E;)g=g<<6|63&_[d++],S--;1<S?w[T++]=65533:g<65536?w[T++]=g:(g-=65536,w[T++]=55296|g>>10&1023,w[T++]=56320|1023&g)}return w.length!==T&&(w.subarray?w=w.subarray(0,T):w.length=T),r.applyFromCharCode(w)})(u=r.transformTo(i.uint8array?"uint8array":"array",u))},r.inherits(c,a),c.prototype.processChunk=function(u){var _=r.transformTo(i.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var d=_;(_=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),_.set(d,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var T=(function(S,E){var w;for((E=E||S.length)>S.length&&(E=S.length),w=E-1;0<=w&&(192&S[w])==128;)w--;return w<0||w===0?E:w+l[S[w]]>E?w:E})(_),g=_;T!==_.length&&(i.uint8array?(g=_.subarray(0,T),this.leftOver=_.subarray(T,_.length)):(g=_.slice(0,T),this.leftOver=_.slice(T,_.length))),this.push({data:n.utf8decode(g),meta:u.meta})},c.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=c,r.inherits(f,a),f.prototype.processChunk=function(u){this.push({data:n.utf8encode(u.data),meta:u.meta})},n.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,s,n){var r=e("./support"),i=e("./base64"),o=e("./nodejsUtils"),a=e("./external");function l(d){return d}function m(d,T){for(var g=0;g<d.length;++g)T[g]=255&d.charCodeAt(g);return T}e("setimmediate"),n.newBlob=function(d,T){n.checkSupport("blob");try{return new Blob([d],{type:T})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(d),g.getBlob(T)}catch{throw new Error("Bug : can't construct the Blob.")}}};var c={stringifyByChunk:function(d,T,g){var S=[],E=0,w=d.length;if(w<=g)return String.fromCharCode.apply(null,d);for(;E<w;)T==="array"||T==="nodebuffer"?S.push(String.fromCharCode.apply(null,d.slice(E,Math.min(E+g,w)))):S.push(String.fromCharCode.apply(null,d.subarray(E,Math.min(E+g,w)))),E+=g;return S.join("")},stringifyByChar:function(d){for(var T="",g=0;g<d.length;g++)T+=String.fromCharCode(d[g]);return T},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function f(d){var T=65536,g=n.getTypeOf(d),S=!0;if(g==="uint8array"?S=c.applyCanBeUsed.uint8array:g==="nodebuffer"&&(S=c.applyCanBeUsed.nodebuffer),S)for(;1<T;)try{return c.stringifyByChunk(d,g,T)}catch{T=Math.floor(T/2)}return c.stringifyByChar(d)}function u(d,T){for(var g=0;g<d.length;g++)T[g]=d[g];return T}n.applyFromCharCode=f;var _={};_.string={string:l,array:function(d){return m(d,new Array(d.length))},arraybuffer:function(d){return _.string.uint8array(d).buffer},uint8array:function(d){return m(d,new Uint8Array(d.length))},nodebuffer:function(d){return m(d,o.allocBuffer(d.length))}},_.array={string:f,array:l,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(d)}},_.arraybuffer={string:function(d){return f(new Uint8Array(d))},array:function(d){return u(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:l,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(new Uint8Array(d))}},_.uint8array={string:f,array:function(d){return u(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:l,nodebuffer:function(d){return o.newBufferFrom(d)}},_.nodebuffer={string:f,array:function(d){return u(d,new Array(d.length))},arraybuffer:function(d){return _.nodebuffer.uint8array(d).buffer},uint8array:function(d){return u(d,new Uint8Array(d.length))},nodebuffer:l},n.transformTo=function(d,T){if(T=T||"",!d)return T;n.checkSupport(d);var g=n.getTypeOf(T);return _[g][d](T)},n.resolve=function(d){for(var T=d.split("/"),g=[],S=0;S<T.length;S++){var E=T[S];E==="."||E===""&&S!==0&&S!==T.length-1||(E===".."?g.pop():g.push(E))}return g.join("/")},n.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":r.nodebuffer&&o.isBuffer(d)?"nodebuffer":r.uint8array&&d instanceof Uint8Array?"uint8array":r.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(d){if(!r[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(d){var T,g,S="";for(g=0;g<(d||"").length;g++)S+="\\x"+((T=d.charCodeAt(g))<16?"0":"")+T.toString(16).toUpperCase();return S},n.delay=function(d,T,g){setImmediate(function(){d.apply(g||null,T||[])})},n.inherits=function(d,T){function g(){}g.prototype=T.prototype,d.prototype=new g},n.extend=function(){var d,T,g={};for(d=0;d<arguments.length;d++)for(T in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],T)&&g[T]===void 0&&(g[T]=arguments[d][T]);return g},n.prepareContent=function(d,T,g,S,E){return a.Promise.resolve(T).then(function(w){return r.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new a.Promise(function(y,D){var O=new FileReader;O.onload=function(j){y(j.target.result)},O.onerror=function(j){D(j.target.error)},O.readAsArrayBuffer(w)}):w}).then(function(w){var y=n.getTypeOf(w);return y?(y==="arraybuffer"?w=n.transformTo("uint8array",w):y==="string"&&(E?w=i.decode(w):g&&S!==!0&&(w=(function(D){return m(D,r.uint8array?new Uint8Array(D.length):new Array(D.length))})(w))),w):a.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,s,n){var r=e("./reader/readerFor"),i=e("./utils"),o=e("./signature"),a=e("./zipEntry"),l=e("./support");function m(c){this.files=[],this.loadOptions=c}m.prototype={checkSignature:function(c){if(!this.reader.readAndCheckSignature(c)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(f)+", expected "+i.pretty(c)+")")}},isSignature:function(c,f){var u=this.reader.index;this.reader.setIndex(c);var _=this.reader.readString(4)===f;return this.reader.setIndex(u),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var c=this.reader.readData(this.zipCommentLength),f=l.uint8array?"uint8array":"array",u=i.transformTo(f,c);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var c,f,u,_=this.zip64EndOfCentralSize-44;0<_;)c=this.reader.readInt(2),f=this.reader.readInt(4),u=this.reader.readData(f),this.zip64ExtensibleData[c]={id:c,length:f,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var c,f;for(c=0;c<this.files.length;c++)f=this.files[c],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var c;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(c=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(c);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var c=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(c<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(c);var f=c;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(c=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(c),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var _=f-u;if(0<_)this.isSignature(f,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(c){this.reader=r(c)},load:function(c){this.prepareReader(c),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=m},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,s,n){var r=e("./reader/readerFor"),i=e("./utils"),o=e("./compressedObject"),a=e("./crc32"),l=e("./utf8"),m=e("./compressions"),c=e("./support");function f(u,_){this.options=u,this.loadOptions=_}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var _,d;if(u.skip(22),this.fileNameLength=u.readInt(2),d=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(T){for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)&&m[g].magic===T)return m[g];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var _=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(_),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var _,d,T,g=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<g;)_=u.readInt(2),d=u.readInt(2),T=u.readData(d),this.extraFields[_]={id:_,length:d,value:T};u.setIndex(g)},handleUTF8:function(){var u=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var d=i.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var T=this.findExtraFieldUnicodeComment();if(T!==null)this.fileCommentStr=T;else{var g=i.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var _=r(u.value);return _.readInt(1)!==1||a(this.fileName)!==_.readInt(4)?null:l.utf8decode(_.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var _=r(u.value);return _.readInt(1)!==1||a(this.fileComment)!==_.readInt(4)?null:l.utf8decode(_.readData(u.length-5))}return null}},s.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,s,n){function r(_,d,T){this.name=_,this.dir=T.dir,this.date=T.date,this.comment=T.comment,this.unixPermissions=T.unixPermissions,this.dosPermissions=T.dosPermissions,this._data=d,this._dataBinary=T.binary,this.options={compression:T.compression,compressionOptions:T.compressionOptions}}var i=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),a=e("./utf8"),l=e("./compressedObject"),m=e("./stream/GenericWorker");r.prototype={internalStream:function(_){var d=null,T="string";try{if(!_)throw new Error("No output type specified.");var g=(T=_.toLowerCase())==="string"||T==="text";T!=="binarystring"&&T!=="text"||(T="string"),d=this._decompressWorker();var S=!this._dataBinary;S&&!g&&(d=d.pipe(new a.Utf8EncodeWorker)),!S&&g&&(d=d.pipe(new a.Utf8DecodeWorker))}catch(E){(d=new m("error")).error(E)}return new i(d,T,"")},async:function(_,d){return this.internalStream(_).accumulate(d)},nodeStream:function(_,d){return this.internalStream(_||"nodebuffer").toNodejsStream(d)},_compressWorker:function(_,d){if(this._data instanceof l&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var T=this._decompressWorker();return this._dataBinary||(T=T.pipe(new a.Utf8EncodeWorker)),l.createWorkerFrom(T,_,d)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof m?this._data:new o(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<c.length;u++)r.prototype[c[u]]=f;s.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,s,n){(function(r){var i,o,a=r.MutationObserver||r.WebKitMutationObserver;if(a){var l=0,m=new a(_),c=r.document.createTextNode("");m.observe(c,{characterData:!0}),i=function(){c.data=l=++l%2}}else if(r.setImmediate||r.MessageChannel===void 0)i="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var d=r.document.createElement("script");d.onreadystatechange=function(){_(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},r.document.documentElement.appendChild(d)}:function(){setTimeout(_,0)};else{var f=new r.MessageChannel;f.port1.onmessage=_,i=function(){f.port2.postMessage(0)}}var u=[];function _(){var d,T;o=!0;for(var g=u.length;g;){for(T=u,u=[],d=-1;++d<g;)T[d]();g=u.length}o=!1}s.exports=function(d){u.push(d)!==1||o||i()}}).call(this,typeof Ze<"u"?Ze:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,s,n){var r=e("immediate");function i(){}var o={},a=["REJECTED"],l=["FULFILLED"],m=["PENDING"];function c(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,g!==i&&d(this,g)}function f(g,S,E){this.promise=g,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof E=="function"&&(this.onRejected=E,this.callRejected=this.otherCallRejected)}function u(g,S,E){r(function(){var w;try{w=S(E)}catch(y){return o.reject(g,y)}w===g?o.reject(g,new TypeError("Cannot resolve promise with itself")):o.resolve(g,w)})}function _(g){var S=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof S=="function")return function(){S.apply(g,arguments)}}function d(g,S){var E=!1;function w(O){E||(E=!0,o.reject(g,O))}function y(O){E||(E=!0,o.resolve(g,O))}var D=T(function(){S(y,w)});D.status==="error"&&w(D.value)}function T(g,S){var E={};try{E.value=g(S),E.status="success"}catch(w){E.status="error",E.value=w}return E}(s.exports=c).prototype.finally=function(g){if(typeof g!="function")return this;var S=this.constructor;return this.then(function(E){return S.resolve(g()).then(function(){return E})},function(E){return S.resolve(g()).then(function(){throw E})})},c.prototype.catch=function(g){return this.then(null,g)},c.prototype.then=function(g,S){if(typeof g!="function"&&this.state===l||typeof S!="function"&&this.state===a)return this;var E=new this.constructor(i);return this.state!==m?u(E,this.state===l?g:S,this.outcome):this.queue.push(new f(E,g,S)),E},f.prototype.callFulfilled=function(g){o.resolve(this.promise,g)},f.prototype.otherCallFulfilled=function(g){u(this.promise,this.onFulfilled,g)},f.prototype.callRejected=function(g){o.reject(this.promise,g)},f.prototype.otherCallRejected=function(g){u(this.promise,this.onRejected,g)},o.resolve=function(g,S){var E=T(_,S);if(E.status==="error")return o.reject(g,E.value);var w=E.value;if(w)d(g,w);else{g.state=l,g.outcome=S;for(var y=-1,D=g.queue.length;++y<D;)g.queue[y].callFulfilled(S)}return g},o.reject=function(g,S){g.state=a,g.outcome=S;for(var E=-1,w=g.queue.length;++E<w;)g.queue[E].callRejected(S);return g},c.resolve=function(g){return g instanceof this?g:o.resolve(new this(i),g)},c.reject=function(g){var S=new this(i);return o.reject(S,g)},c.all=function(g){var S=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=g.length,w=!1;if(!E)return this.resolve([]);for(var y=new Array(E),D=0,O=-1,j=new this(i);++O<E;)P(g[O],O);return j;function P(K,X){S.resolve(K).then(function(A){y[X]=A,++D!==E||w||(w=!0,o.resolve(j,y))},function(A){w||(w=!0,o.reject(j,A))})}},c.race=function(g){var S=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=g.length,w=!1;if(!E)return this.resolve([]);for(var y=-1,D=new this(i);++y<E;)O=g[y],S.resolve(O).then(function(j){w||(w=!0,o.resolve(D,j))},function(j){w||(w=!0,o.reject(D,j))});var O;return D}},{immediate:36}],38:[function(e,s,n){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),s.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,s,n){var r=e("./zlib/deflate"),i=e("./utils/common"),o=e("./utils/strings"),a=e("./zlib/messages"),l=e("./zlib/zstream"),m=Object.prototype.toString,c=0,f=-1,u=0,_=8;function d(g){if(!(this instanceof d))return new d(g);this.options=i.assign({level:f,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},g||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var E=r.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(E!==c)throw new Error(a[E]);if(S.header&&r.deflateSetHeader(this.strm,S.header),S.dictionary){var w;if(w=typeof S.dictionary=="string"?o.string2buf(S.dictionary):m.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(E=r.deflateSetDictionary(this.strm,w))!==c)throw new Error(a[E]);this._dict_set=!0}}function T(g,S){var E=new d(S);if(E.push(g,!0),E.err)throw E.msg||a[E.err];return E.result}d.prototype.push=function(g,S){var E,w,y=this.strm,D=this.options.chunkSize;if(this.ended)return!1;w=S===~~S?S:S===!0?4:0,typeof g=="string"?y.input=o.string2buf(g):m.call(g)==="[object ArrayBuffer]"?y.input=new Uint8Array(g):y.input=g,y.next_in=0,y.avail_in=y.input.length;do{if(y.avail_out===0&&(y.output=new i.Buf8(D),y.next_out=0,y.avail_out=D),(E=r.deflate(y,w))!==1&&E!==c)return this.onEnd(E),!(this.ended=!0);y.avail_out!==0&&(y.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(i.shrinkBuf(y.output,y.next_out))):this.onData(i.shrinkBuf(y.output,y.next_out)))}while((0<y.avail_in||y.avail_out===0)&&E!==1);return w===4?(E=r.deflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===c):w!==2||(this.onEnd(c),!(y.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===c&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},n.Deflate=d,n.deflate=T,n.deflateRaw=function(g,S){return(S=S||{}).raw=!0,T(g,S)},n.gzip=function(g,S){return(S=S||{}).gzip=!0,T(g,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,s,n){var r=e("./zlib/inflate"),i=e("./utils/common"),o=e("./utils/strings"),a=e("./zlib/constants"),l=e("./zlib/messages"),m=e("./zlib/zstream"),c=e("./zlib/gzheader"),f=Object.prototype.toString;function u(d){if(!(this instanceof u))return new u(d);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},d||{});var T=this.options;T.raw&&0<=T.windowBits&&T.windowBits<16&&(T.windowBits=-T.windowBits,T.windowBits===0&&(T.windowBits=-15)),!(0<=T.windowBits&&T.windowBits<16)||d&&d.windowBits||(T.windowBits+=32),15<T.windowBits&&T.windowBits<48&&(15&T.windowBits)==0&&(T.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var g=r.inflateInit2(this.strm,T.windowBits);if(g!==a.Z_OK)throw new Error(l[g]);this.header=new c,r.inflateGetHeader(this.strm,this.header)}function _(d,T){var g=new u(T);if(g.push(d,!0),g.err)throw g.msg||l[g.err];return g.result}u.prototype.push=function(d,T){var g,S,E,w,y,D,O=this.strm,j=this.options.chunkSize,P=this.options.dictionary,K=!1;if(this.ended)return!1;S=T===~~T?T:T===!0?a.Z_FINISH:a.Z_NO_FLUSH,typeof d=="string"?O.input=o.binstring2buf(d):f.call(d)==="[object ArrayBuffer]"?O.input=new Uint8Array(d):O.input=d,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new i.Buf8(j),O.next_out=0,O.avail_out=j),(g=r.inflate(O,a.Z_NO_FLUSH))===a.Z_NEED_DICT&&P&&(D=typeof P=="string"?o.string2buf(P):f.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,g=r.inflateSetDictionary(this.strm,D)),g===a.Z_BUF_ERROR&&K===!0&&(g=a.Z_OK,K=!1),g!==a.Z_STREAM_END&&g!==a.Z_OK)return this.onEnd(g),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&g!==a.Z_STREAM_END&&(O.avail_in!==0||S!==a.Z_FINISH&&S!==a.Z_SYNC_FLUSH)||(this.options.to==="string"?(E=o.utf8border(O.output,O.next_out),w=O.next_out-E,y=o.buf2string(O.output,E),O.next_out=w,O.avail_out=j-w,w&&i.arraySet(O.output,O.output,E,w,0),this.onData(y)):this.onData(i.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(K=!0)}while((0<O.avail_in||O.avail_out===0)&&g!==a.Z_STREAM_END);return g===a.Z_STREAM_END&&(S=a.Z_FINISH),S===a.Z_FINISH?(g=r.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===a.Z_OK):S!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),!(O.avail_out=0))},u.prototype.onData=function(d){this.chunks.push(d)},u.prototype.onEnd=function(d){d===a.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},n.Inflate=u,n.inflate=_,n.inflateRaw=function(d,T){return(T=T||{}).raw=!0,_(d,T)},n.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(a){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var m=l.shift();if(m){if(typeof m!="object")throw new TypeError(m+"must be non-object");for(var c in m)m.hasOwnProperty(c)&&(a[c]=m[c])}}return a},n.shrinkBuf=function(a,l){return a.length===l?a:a.subarray?a.subarray(0,l):(a.length=l,a)};var i={arraySet:function(a,l,m,c,f){if(l.subarray&&a.subarray)a.set(l.subarray(m,m+c),f);else for(var u=0;u<c;u++)a[f+u]=l[m+u]},flattenChunks:function(a){var l,m,c,f,u,_;for(l=c=0,m=a.length;l<m;l++)c+=a[l].length;for(_=new Uint8Array(c),l=f=0,m=a.length;l<m;l++)u=a[l],_.set(u,f),f+=u.length;return _}},o={arraySet:function(a,l,m,c,f){for(var u=0;u<c;u++)a[f+u]=l[m+u]},flattenChunks:function(a){return[].concat.apply([],a)}};n.setTyped=function(a){a?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o))},n.setTyped(r)},{}],42:[function(e,s,n){var r=e("./common"),i=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var a=new r.Buf8(256),l=0;l<256;l++)a[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function m(c,f){if(f<65537&&(c.subarray&&o||!c.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(c,f));for(var u="",_=0;_<f;_++)u+=String.fromCharCode(c[_]);return u}a[254]=a[254]=1,n.string2buf=function(c){var f,u,_,d,T,g=c.length,S=0;for(d=0;d<g;d++)(64512&(u=c.charCodeAt(d)))==55296&&d+1<g&&(64512&(_=c.charCodeAt(d+1)))==56320&&(u=65536+(u-55296<<10)+(_-56320),d++),S+=u<128?1:u<2048?2:u<65536?3:4;for(f=new r.Buf8(S),d=T=0;T<S;d++)(64512&(u=c.charCodeAt(d)))==55296&&d+1<g&&(64512&(_=c.charCodeAt(d+1)))==56320&&(u=65536+(u-55296<<10)+(_-56320),d++),u<128?f[T++]=u:(u<2048?f[T++]=192|u>>>6:(u<65536?f[T++]=224|u>>>12:(f[T++]=240|u>>>18,f[T++]=128|u>>>12&63),f[T++]=128|u>>>6&63),f[T++]=128|63&u);return f},n.buf2binstring=function(c){return m(c,c.length)},n.binstring2buf=function(c){for(var f=new r.Buf8(c.length),u=0,_=f.length;u<_;u++)f[u]=c.charCodeAt(u);return f},n.buf2string=function(c,f){var u,_,d,T,g=f||c.length,S=new Array(2*g);for(u=_=0;u<g;)if((d=c[u++])<128)S[_++]=d;else if(4<(T=a[d]))S[_++]=65533,u+=T-1;else{for(d&=T===2?31:T===3?15:7;1<T&&u<g;)d=d<<6|63&c[u++],T--;1<T?S[_++]=65533:d<65536?S[_++]=d:(d-=65536,S[_++]=55296|d>>10&1023,S[_++]=56320|1023&d)}return m(S,_)},n.utf8border=function(c,f){var u;for((f=f||c.length)>c.length&&(f=c.length),u=f-1;0<=u&&(192&c[u])==128;)u--;return u<0||u===0?f:u+a[c[u]]>f?u:f}},{"./common":41}],43:[function(e,s,n){s.exports=function(r,i,o,a){for(var l=65535&r|0,m=r>>>16&65535|0,c=0;o!==0;){for(o-=c=2e3<o?2e3:o;m=m+(l=l+i[a++]|0)|0,--c;);l%=65521,m%=65521}return l|m<<16|0}},{}],44:[function(e,s,n){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,s,n){var r=(function(){for(var i,o=[],a=0;a<256;a++){i=a;for(var l=0;l<8;l++)i=1&i?3988292384^i>>>1:i>>>1;o[a]=i}return o})();s.exports=function(i,o,a,l){var m=r,c=l+a;i^=-1;for(var f=l;f<c;f++)i=i>>>8^m[255&(i^o[f])];return-1^i}},{}],46:[function(e,s,n){var r,i=e("../utils/common"),o=e("./trees"),a=e("./adler32"),l=e("./crc32"),m=e("./messages"),c=0,f=4,u=0,_=-2,d=-1,T=4,g=2,S=8,E=9,w=286,y=30,D=19,O=2*w+1,j=15,P=3,K=258,X=K+P+1,A=42,F=113,p=1,z=2,ne=3,$=4;function re(h,M){return h.msg=m[M],M}function H(h){return(h<<1)-(4<h?9:0)}function ee(h){for(var M=h.length;0<=--M;)h[M]=0}function I(h){var M=h.state,x=M.pending;x>h.avail_out&&(x=h.avail_out),x!==0&&(i.arraySet(h.output,M.pending_buf,M.pending_out,x,h.next_out),h.next_out+=x,M.pending_out+=x,h.total_out+=x,h.avail_out-=x,M.pending-=x,M.pending===0&&(M.pending_out=0))}function v(h,M){o._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,M),h.block_start=h.strstart,I(h.strm)}function Q(h,M){h.pending_buf[h.pending++]=M}function Y(h,M){h.pending_buf[h.pending++]=M>>>8&255,h.pending_buf[h.pending++]=255&M}function Z(h,M){var x,b,k=h.max_chain_length,R=h.strstart,B=h.prev_length,U=h.nice_match,C=h.strstart>h.w_size-X?h.strstart-(h.w_size-X):0,q=h.window,V=h.w_mask,W=h.prev,J=h.strstart+K,me=q[R+B-1],ae=q[R+B];h.prev_length>=h.good_match&&(k>>=2),U>h.lookahead&&(U=h.lookahead);do if(q[(x=M)+B]===ae&&q[x+B-1]===me&&q[x]===q[R]&&q[++x]===q[R+1]){R+=2,x++;do;while(q[++R]===q[++x]&&q[++R]===q[++x]&&q[++R]===q[++x]&&q[++R]===q[++x]&&q[++R]===q[++x]&&q[++R]===q[++x]&&q[++R]===q[++x]&&q[++R]===q[++x]&&R<J);if(b=K-(J-R),R=J-K,B<b){if(h.match_start=M,U<=(B=b))break;me=q[R+B-1],ae=q[R+B]}}while((M=W[M&V])>C&&--k!=0);return B<=h.lookahead?B:h.lookahead}function Se(h){var M,x,b,k,R,B,U,C,q,V,W=h.w_size;do{if(k=h.window_size-h.lookahead-h.strstart,h.strstart>=W+(W-X)){for(i.arraySet(h.window,h.window,W,W,0),h.match_start-=W,h.strstart-=W,h.block_start-=W,M=x=h.hash_size;b=h.head[--M],h.head[M]=W<=b?b-W:0,--x;);for(M=x=W;b=h.prev[--M],h.prev[M]=W<=b?b-W:0,--x;);k+=W}if(h.strm.avail_in===0)break;if(B=h.strm,U=h.window,C=h.strstart+h.lookahead,q=k,V=void 0,V=B.avail_in,q<V&&(V=q),x=V===0?0:(B.avail_in-=V,i.arraySet(U,B.input,B.next_in,V,C),B.state.wrap===1?B.adler=a(B.adler,U,V,C):B.state.wrap===2&&(B.adler=l(B.adler,U,V,C)),B.next_in+=V,B.total_in+=V,V),h.lookahead+=x,h.lookahead+h.insert>=P)for(R=h.strstart-h.insert,h.ins_h=h.window[R],h.ins_h=(h.ins_h<<h.hash_shift^h.window[R+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[R+P-1])&h.hash_mask,h.prev[R&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=R,R++,h.insert--,!(h.lookahead+h.insert<P)););}while(h.lookahead<X&&h.strm.avail_in!==0)}function Ee(h,M){for(var x,b;;){if(h.lookahead<X){if(Se(h),h.lookahead<X&&M===c)return p;if(h.lookahead===0)break}if(x=0,h.lookahead>=P&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,x=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),x!==0&&h.strstart-x<=h.w_size-X&&(h.match_length=Z(h,x)),h.match_length>=P)if(b=o._tr_tally(h,h.strstart-h.match_start,h.match_length-P),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=P){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,x=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else b=o._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(b&&(v(h,!1),h.strm.avail_out===0))return p}return h.insert=h.strstart<P-1?h.strstart:P-1,M===f?(v(h,!0),h.strm.avail_out===0?ne:$):h.last_lit&&(v(h,!1),h.strm.avail_out===0)?p:z}function oe(h,M){for(var x,b,k;;){if(h.lookahead<X){if(Se(h),h.lookahead<X&&M===c)return p;if(h.lookahead===0)break}if(x=0,h.lookahead>=P&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,x=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=P-1,x!==0&&h.prev_length<h.max_lazy_match&&h.strstart-x<=h.w_size-X&&(h.match_length=Z(h,x),h.match_length<=5&&(h.strategy===1||h.match_length===P&&4096<h.strstart-h.match_start)&&(h.match_length=P-1)),h.prev_length>=P&&h.match_length<=h.prev_length){for(k=h.strstart+h.lookahead-P,b=o._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-P),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=k&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,x=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=P-1,h.strstart++,b&&(v(h,!1),h.strm.avail_out===0))return p}else if(h.match_available){if((b=o._tr_tally(h,0,h.window[h.strstart-1]))&&v(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return p}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(b=o._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<P-1?h.strstart:P-1,M===f?(v(h,!0),h.strm.avail_out===0?ne:$):h.last_lit&&(v(h,!1),h.strm.avail_out===0)?p:z}function ce(h,M,x,b,k){this.good_length=h,this.max_lazy=M,this.nice_length=x,this.max_chain=b,this.func=k}function be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*O),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*D+1)),ee(this.dyn_ltree),ee(this.dyn_dtree),ee(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(j+1),this.heap=new i.Buf16(2*w+1),ee(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*w+1),ee(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ke(h){var M;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=g,(M=h.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?A:F,h.adler=M.wrap===2?0:1,M.last_flush=c,o._tr_init(M),u):re(h,_)}function Oe(h){var M=ke(h);return M===u&&(function(x){x.window_size=2*x.w_size,ee(x.head),x.max_lazy_match=r[x.level].max_lazy,x.good_match=r[x.level].good_length,x.nice_match=r[x.level].nice_length,x.max_chain_length=r[x.level].max_chain,x.strstart=0,x.block_start=0,x.lookahead=0,x.insert=0,x.match_length=x.prev_length=P-1,x.match_available=0,x.ins_h=0})(h.state),M}function Ie(h,M,x,b,k,R){if(!h)return _;var B=1;if(M===d&&(M=6),b<0?(B=0,b=-b):15<b&&(B=2,b-=16),k<1||E<k||x!==S||b<8||15<b||M<0||9<M||R<0||T<R)return re(h,_);b===8&&(b=9);var U=new be;return(h.state=U).strm=h,U.wrap=B,U.gzhead=null,U.w_bits=b,U.w_size=1<<U.w_bits,U.w_mask=U.w_size-1,U.hash_bits=k+7,U.hash_size=1<<U.hash_bits,U.hash_mask=U.hash_size-1,U.hash_shift=~~((U.hash_bits+P-1)/P),U.window=new i.Buf8(2*U.w_size),U.head=new i.Buf16(U.hash_size),U.prev=new i.Buf16(U.w_size),U.lit_bufsize=1<<k+6,U.pending_buf_size=4*U.lit_bufsize,U.pending_buf=new i.Buf8(U.pending_buf_size),U.d_buf=1*U.lit_bufsize,U.l_buf=3*U.lit_bufsize,U.level=M,U.strategy=R,U.method=x,Oe(h)}r=[new ce(0,0,0,0,function(h,M){var x=65535;for(x>h.pending_buf_size-5&&(x=h.pending_buf_size-5);;){if(h.lookahead<=1){if(Se(h),h.lookahead===0&&M===c)return p;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var b=h.block_start+x;if((h.strstart===0||h.strstart>=b)&&(h.lookahead=h.strstart-b,h.strstart=b,v(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-X&&(v(h,!1),h.strm.avail_out===0))return p}return h.insert=0,M===f?(v(h,!0),h.strm.avail_out===0?ne:$):(h.strstart>h.block_start&&(v(h,!1),h.strm.avail_out),p)}),new ce(4,4,8,4,Ee),new ce(4,5,16,8,Ee),new ce(4,6,32,32,Ee),new ce(4,4,16,16,oe),new ce(8,16,32,32,oe),new ce(8,16,128,128,oe),new ce(8,32,128,256,oe),new ce(32,128,258,1024,oe),new ce(32,258,258,4096,oe)],n.deflateInit=function(h,M){return Ie(h,M,S,15,8,0)},n.deflateInit2=Ie,n.deflateReset=Oe,n.deflateResetKeep=ke,n.deflateSetHeader=function(h,M){return h&&h.state?h.state.wrap!==2?_:(h.state.gzhead=M,u):_},n.deflate=function(h,M){var x,b,k,R;if(!h||!h.state||5<M||M<0)return h?re(h,_):_;if(b=h.state,!h.output||!h.input&&h.avail_in!==0||b.status===666&&M!==f)return re(h,h.avail_out===0?-5:_);if(b.strm=h,x=b.last_flush,b.last_flush=M,b.status===A)if(b.wrap===2)h.adler=0,Q(b,31),Q(b,139),Q(b,8),b.gzhead?(Q(b,(b.gzhead.text?1:0)+(b.gzhead.hcrc?2:0)+(b.gzhead.extra?4:0)+(b.gzhead.name?8:0)+(b.gzhead.comment?16:0)),Q(b,255&b.gzhead.time),Q(b,b.gzhead.time>>8&255),Q(b,b.gzhead.time>>16&255),Q(b,b.gzhead.time>>24&255),Q(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),Q(b,255&b.gzhead.os),b.gzhead.extra&&b.gzhead.extra.length&&(Q(b,255&b.gzhead.extra.length),Q(b,b.gzhead.extra.length>>8&255)),b.gzhead.hcrc&&(h.adler=l(h.adler,b.pending_buf,b.pending,0)),b.gzindex=0,b.status=69):(Q(b,0),Q(b,0),Q(b,0),Q(b,0),Q(b,0),Q(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),Q(b,3),b.status=F);else{var B=S+(b.w_bits-8<<4)<<8;B|=(2<=b.strategy||b.level<2?0:b.level<6?1:b.level===6?2:3)<<6,b.strstart!==0&&(B|=32),B+=31-B%31,b.status=F,Y(b,B),b.strstart!==0&&(Y(b,h.adler>>>16),Y(b,65535&h.adler)),h.adler=1}if(b.status===69)if(b.gzhead.extra){for(k=b.pending;b.gzindex<(65535&b.gzhead.extra.length)&&(b.pending!==b.pending_buf_size||(b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),I(h),k=b.pending,b.pending!==b.pending_buf_size));)Q(b,255&b.gzhead.extra[b.gzindex]),b.gzindex++;b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),b.gzindex===b.gzhead.extra.length&&(b.gzindex=0,b.status=73)}else b.status=73;if(b.status===73)if(b.gzhead.name){k=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),I(h),k=b.pending,b.pending===b.pending_buf_size)){R=1;break}R=b.gzindex<b.gzhead.name.length?255&b.gzhead.name.charCodeAt(b.gzindex++):0,Q(b,R)}while(R!==0);b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),R===0&&(b.gzindex=0,b.status=91)}else b.status=91;if(b.status===91)if(b.gzhead.comment){k=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),I(h),k=b.pending,b.pending===b.pending_buf_size)){R=1;break}R=b.gzindex<b.gzhead.comment.length?255&b.gzhead.comment.charCodeAt(b.gzindex++):0,Q(b,R)}while(R!==0);b.gzhead.hcrc&&b.pending>k&&(h.adler=l(h.adler,b.pending_buf,b.pending-k,k)),R===0&&(b.status=103)}else b.status=103;if(b.status===103&&(b.gzhead.hcrc?(b.pending+2>b.pending_buf_size&&I(h),b.pending+2<=b.pending_buf_size&&(Q(b,255&h.adler),Q(b,h.adler>>8&255),h.adler=0,b.status=F)):b.status=F),b.pending!==0){if(I(h),h.avail_out===0)return b.last_flush=-1,u}else if(h.avail_in===0&&H(M)<=H(x)&&M!==f)return re(h,-5);if(b.status===666&&h.avail_in!==0)return re(h,-5);if(h.avail_in!==0||b.lookahead!==0||M!==c&&b.status!==666){var U=b.strategy===2?(function(C,q){for(var V;;){if(C.lookahead===0&&(Se(C),C.lookahead===0)){if(q===c)return p;break}if(C.match_length=0,V=o._tr_tally(C,0,C.window[C.strstart]),C.lookahead--,C.strstart++,V&&(v(C,!1),C.strm.avail_out===0))return p}return C.insert=0,q===f?(v(C,!0),C.strm.avail_out===0?ne:$):C.last_lit&&(v(C,!1),C.strm.avail_out===0)?p:z})(b,M):b.strategy===3?(function(C,q){for(var V,W,J,me,ae=C.window;;){if(C.lookahead<=K){if(Se(C),C.lookahead<=K&&q===c)return p;if(C.lookahead===0)break}if(C.match_length=0,C.lookahead>=P&&0<C.strstart&&(W=ae[J=C.strstart-1])===ae[++J]&&W===ae[++J]&&W===ae[++J]){me=C.strstart+K;do;while(W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&W===ae[++J]&&J<me);C.match_length=K-(me-J),C.match_length>C.lookahead&&(C.match_length=C.lookahead)}if(C.match_length>=P?(V=o._tr_tally(C,1,C.match_length-P),C.lookahead-=C.match_length,C.strstart+=C.match_length,C.match_length=0):(V=o._tr_tally(C,0,C.window[C.strstart]),C.lookahead--,C.strstart++),V&&(v(C,!1),C.strm.avail_out===0))return p}return C.insert=0,q===f?(v(C,!0),C.strm.avail_out===0?ne:$):C.last_lit&&(v(C,!1),C.strm.avail_out===0)?p:z})(b,M):r[b.level].func(b,M);if(U!==ne&&U!==$||(b.status=666),U===p||U===ne)return h.avail_out===0&&(b.last_flush=-1),u;if(U===z&&(M===1?o._tr_align(b):M!==5&&(o._tr_stored_block(b,0,0,!1),M===3&&(ee(b.head),b.lookahead===0&&(b.strstart=0,b.block_start=0,b.insert=0))),I(h),h.avail_out===0))return b.last_flush=-1,u}return M!==f?u:b.wrap<=0?1:(b.wrap===2?(Q(b,255&h.adler),Q(b,h.adler>>8&255),Q(b,h.adler>>16&255),Q(b,h.adler>>24&255),Q(b,255&h.total_in),Q(b,h.total_in>>8&255),Q(b,h.total_in>>16&255),Q(b,h.total_in>>24&255)):(Y(b,h.adler>>>16),Y(b,65535&h.adler)),I(h),0<b.wrap&&(b.wrap=-b.wrap),b.pending!==0?u:1)},n.deflateEnd=function(h){var M;return h&&h.state?(M=h.state.status)!==A&&M!==69&&M!==73&&M!==91&&M!==103&&M!==F&&M!==666?re(h,_):(h.state=null,M===F?re(h,-3):u):_},n.deflateSetDictionary=function(h,M){var x,b,k,R,B,U,C,q,V=M.length;if(!h||!h.state||(R=(x=h.state).wrap)===2||R===1&&x.status!==A||x.lookahead)return _;for(R===1&&(h.adler=a(h.adler,M,V,0)),x.wrap=0,V>=x.w_size&&(R===0&&(ee(x.head),x.strstart=0,x.block_start=0,x.insert=0),q=new i.Buf8(x.w_size),i.arraySet(q,M,V-x.w_size,x.w_size,0),M=q,V=x.w_size),B=h.avail_in,U=h.next_in,C=h.input,h.avail_in=V,h.next_in=0,h.input=M,Se(x);x.lookahead>=P;){for(b=x.strstart,k=x.lookahead-(P-1);x.ins_h=(x.ins_h<<x.hash_shift^x.window[b+P-1])&x.hash_mask,x.prev[b&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=b,b++,--k;);x.strstart=b,x.lookahead=P-1,Se(x)}return x.strstart+=x.lookahead,x.block_start=x.strstart,x.insert=x.lookahead,x.lookahead=0,x.match_length=x.prev_length=P-1,x.match_available=0,h.next_in=U,h.input=C,h.avail_in=B,x.wrap=R,u},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,s,n){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,s,n){s.exports=function(r,i){var o,a,l,m,c,f,u,_,d,T,g,S,E,w,y,D,O,j,P,K,X,A,F,p,z;o=r.state,a=r.next_in,p=r.input,l=a+(r.avail_in-5),m=r.next_out,z=r.output,c=m-(i-r.avail_out),f=m+(r.avail_out-257),u=o.dmax,_=o.wsize,d=o.whave,T=o.wnext,g=o.window,S=o.hold,E=o.bits,w=o.lencode,y=o.distcode,D=(1<<o.lenbits)-1,O=(1<<o.distbits)-1;e:do{E<15&&(S+=p[a++]<<E,E+=8,S+=p[a++]<<E,E+=8),j=w[S&D];t:for(;;){if(S>>>=P=j>>>24,E-=P,(P=j>>>16&255)===0)z[m++]=65535&j;else{if(!(16&P)){if((64&P)==0){j=w[(65535&j)+(S&(1<<P)-1)];continue t}if(32&P){o.mode=12;break e}r.msg="invalid literal/length code",o.mode=30;break e}K=65535&j,(P&=15)&&(E<P&&(S+=p[a++]<<E,E+=8),K+=S&(1<<P)-1,S>>>=P,E-=P),E<15&&(S+=p[a++]<<E,E+=8,S+=p[a++]<<E,E+=8),j=y[S&O];n:for(;;){if(S>>>=P=j>>>24,E-=P,!(16&(P=j>>>16&255))){if((64&P)==0){j=y[(65535&j)+(S&(1<<P)-1)];continue n}r.msg="invalid distance code",o.mode=30;break e}if(X=65535&j,E<(P&=15)&&(S+=p[a++]<<E,(E+=8)<P&&(S+=p[a++]<<E,E+=8)),u<(X+=S&(1<<P)-1)){r.msg="invalid distance too far back",o.mode=30;break e}if(S>>>=P,E-=P,(P=m-c)<X){if(d<(P=X-P)&&o.sane){r.msg="invalid distance too far back",o.mode=30;break e}if(F=g,(A=0)===T){if(A+=_-P,P<K){for(K-=P;z[m++]=g[A++],--P;);A=m-X,F=z}}else if(T<P){if(A+=_+T-P,(P-=T)<K){for(K-=P;z[m++]=g[A++],--P;);if(A=0,T<K){for(K-=P=T;z[m++]=g[A++],--P;);A=m-X,F=z}}}else if(A+=T-P,P<K){for(K-=P;z[m++]=g[A++],--P;);A=m-X,F=z}for(;2<K;)z[m++]=F[A++],z[m++]=F[A++],z[m++]=F[A++],K-=3;K&&(z[m++]=F[A++],1<K&&(z[m++]=F[A++]))}else{for(A=m-X;z[m++]=z[A++],z[m++]=z[A++],z[m++]=z[A++],2<(K-=3););K&&(z[m++]=z[A++],1<K&&(z[m++]=z[A++]))}break}}break}}while(a<l&&m<f);a-=K=E>>3,S&=(1<<(E-=K<<3))-1,r.next_in=a,r.next_out=m,r.avail_in=a<l?l-a+5:5-(a-l),r.avail_out=m<f?f-m+257:257-(m-f),o.hold=S,o.bits=E}},{}],49:[function(e,s,n){var r=e("../utils/common"),i=e("./adler32"),o=e("./crc32"),a=e("./inffast"),l=e("./inftrees"),m=1,c=2,f=0,u=-2,_=1,d=852,T=592;function g(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function E(A){var F;return A&&A.state?(F=A.state,A.total_in=A.total_out=F.total=0,A.msg="",F.wrap&&(A.adler=1&F.wrap),F.mode=_,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new r.Buf32(d),F.distcode=F.distdyn=new r.Buf32(T),F.sane=1,F.back=-1,f):u}function w(A){var F;return A&&A.state?((F=A.state).wsize=0,F.whave=0,F.wnext=0,E(A)):u}function y(A,F){var p,z;return A&&A.state?(z=A.state,F<0?(p=0,F=-F):(p=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?u:(z.window!==null&&z.wbits!==F&&(z.window=null),z.wrap=p,z.wbits=F,w(A))):u}function D(A,F){var p,z;return A?(z=new S,(A.state=z).window=null,(p=y(A,F))!==f&&(A.state=null),p):u}var O,j,P=!0;function K(A){if(P){var F;for(O=new r.Buf32(512),j=new r.Buf32(32),F=0;F<144;)A.lens[F++]=8;for(;F<256;)A.lens[F++]=9;for(;F<280;)A.lens[F++]=7;for(;F<288;)A.lens[F++]=8;for(l(m,A.lens,0,288,O,0,A.work,{bits:9}),F=0;F<32;)A.lens[F++]=5;l(c,A.lens,0,32,j,0,A.work,{bits:5}),P=!1}A.lencode=O,A.lenbits=9,A.distcode=j,A.distbits=5}function X(A,F,p,z){var ne,$=A.state;return $.window===null&&($.wsize=1<<$.wbits,$.wnext=0,$.whave=0,$.window=new r.Buf8($.wsize)),z>=$.wsize?(r.arraySet($.window,F,p-$.wsize,$.wsize,0),$.wnext=0,$.whave=$.wsize):(z<(ne=$.wsize-$.wnext)&&(ne=z),r.arraySet($.window,F,p-z,ne,$.wnext),(z-=ne)?(r.arraySet($.window,F,p-z,z,0),$.wnext=z,$.whave=$.wsize):($.wnext+=ne,$.wnext===$.wsize&&($.wnext=0),$.whave<$.wsize&&($.whave+=ne))),0}n.inflateReset=w,n.inflateReset2=y,n.inflateResetKeep=E,n.inflateInit=function(A){return D(A,15)},n.inflateInit2=D,n.inflate=function(A,F){var p,z,ne,$,re,H,ee,I,v,Q,Y,Z,Se,Ee,oe,ce,be,ke,Oe,Ie,h,M,x,b,k=0,R=new r.Buf8(4),B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&A.avail_in!==0)return u;(p=A.state).mode===12&&(p.mode=13),re=A.next_out,ne=A.output,ee=A.avail_out,$=A.next_in,z=A.input,H=A.avail_in,I=p.hold,v=p.bits,Q=H,Y=ee,M=f;e:for(;;)switch(p.mode){case _:if(p.wrap===0){p.mode=13;break}for(;v<16;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if(2&p.wrap&&I===35615){R[p.check=0]=255&I,R[1]=I>>>8&255,p.check=o(p.check,R,2,0),v=I=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&I)<<8)+(I>>8))%31){A.msg="incorrect header check",p.mode=30;break}if((15&I)!=8){A.msg="unknown compression method",p.mode=30;break}if(v-=4,h=8+(15&(I>>>=4)),p.wbits===0)p.wbits=h;else if(h>p.wbits){A.msg="invalid window size",p.mode=30;break}p.dmax=1<<h,A.adler=p.check=1,p.mode=512&I?10:12,v=I=0;break;case 2:for(;v<16;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if(p.flags=I,(255&p.flags)!=8){A.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){A.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=I>>8&1),512&p.flags&&(R[0]=255&I,R[1]=I>>>8&255,p.check=o(p.check,R,2,0)),v=I=0,p.mode=3;case 3:for(;v<32;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}p.head&&(p.head.time=I),512&p.flags&&(R[0]=255&I,R[1]=I>>>8&255,R[2]=I>>>16&255,R[3]=I>>>24&255,p.check=o(p.check,R,4,0)),v=I=0,p.mode=4;case 4:for(;v<16;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}p.head&&(p.head.xflags=255&I,p.head.os=I>>8),512&p.flags&&(R[0]=255&I,R[1]=I>>>8&255,p.check=o(p.check,R,2,0)),v=I=0,p.mode=5;case 5:if(1024&p.flags){for(;v<16;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}p.length=I,p.head&&(p.head.extra_len=I),512&p.flags&&(R[0]=255&I,R[1]=I>>>8&255,p.check=o(p.check,R,2,0)),v=I=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(H<(Z=p.length)&&(Z=H),Z&&(p.head&&(h=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),r.arraySet(p.head.extra,z,$,Z,h)),512&p.flags&&(p.check=o(p.check,z,Z,$)),H-=Z,$+=Z,p.length-=Z),p.length))break e;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(H===0)break e;for(Z=0;h=z[$+Z++],p.head&&h&&p.length<65536&&(p.head.name+=String.fromCharCode(h)),h&&Z<H;);if(512&p.flags&&(p.check=o(p.check,z,Z,$)),H-=Z,$+=Z,h)break e}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(H===0)break e;for(Z=0;h=z[$+Z++],p.head&&h&&p.length<65536&&(p.head.comment+=String.fromCharCode(h)),h&&Z<H;);if(512&p.flags&&(p.check=o(p.check,z,Z,$)),H-=Z,$+=Z,h)break e}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;v<16;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if(I!==(65535&p.check)){A.msg="header crc mismatch",p.mode=30;break}v=I=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),A.adler=p.check=0,p.mode=12;break;case 10:for(;v<32;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}A.adler=p.check=g(I),v=I=0,p.mode=11;case 11:if(p.havedict===0)return A.next_out=re,A.avail_out=ee,A.next_in=$,A.avail_in=H,p.hold=I,p.bits=v,2;A.adler=p.check=1,p.mode=12;case 12:if(F===5||F===6)break e;case 13:if(p.last){I>>>=7&v,v-=7&v,p.mode=27;break}for(;v<3;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}switch(p.last=1&I,v-=1,3&(I>>>=1)){case 0:p.mode=14;break;case 1:if(K(p),p.mode=20,F!==6)break;I>>>=2,v-=2;break e;case 2:p.mode=17;break;case 3:A.msg="invalid block type",p.mode=30}I>>>=2,v-=2;break;case 14:for(I>>>=7&v,v-=7&v;v<32;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if((65535&I)!=(I>>>16^65535)){A.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&I,v=I=0,p.mode=15,F===6)break e;case 15:p.mode=16;case 16:if(Z=p.length){if(H<Z&&(Z=H),ee<Z&&(Z=ee),Z===0)break e;r.arraySet(ne,z,$,Z,re),H-=Z,$+=Z,ee-=Z,re+=Z,p.length-=Z;break}p.mode=12;break;case 17:for(;v<14;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if(p.nlen=257+(31&I),I>>>=5,v-=5,p.ndist=1+(31&I),I>>>=5,v-=5,p.ncode=4+(15&I),I>>>=4,v-=4,286<p.nlen||30<p.ndist){A.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;v<3;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}p.lens[B[p.have++]]=7&I,I>>>=3,v-=3}for(;p.have<19;)p.lens[B[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,x={bits:p.lenbits},M=l(0,p.lens,0,19,p.lencode,0,p.work,x),p.lenbits=x.bits,M){A.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;ce=(k=p.lencode[I&(1<<p.lenbits)-1])>>>16&255,be=65535&k,!((oe=k>>>24)<=v);){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if(be<16)I>>>=oe,v-=oe,p.lens[p.have++]=be;else{if(be===16){for(b=oe+2;v<b;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if(I>>>=oe,v-=oe,p.have===0){A.msg="invalid bit length repeat",p.mode=30;break}h=p.lens[p.have-1],Z=3+(3&I),I>>>=2,v-=2}else if(be===17){for(b=oe+3;v<b;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}v-=oe,h=0,Z=3+(7&(I>>>=oe)),I>>>=3,v-=3}else{for(b=oe+7;v<b;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}v-=oe,h=0,Z=11+(127&(I>>>=oe)),I>>>=7,v-=7}if(p.have+Z>p.nlen+p.ndist){A.msg="invalid bit length repeat",p.mode=30;break}for(;Z--;)p.lens[p.have++]=h}}if(p.mode===30)break;if(p.lens[256]===0){A.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,x={bits:p.lenbits},M=l(m,p.lens,0,p.nlen,p.lencode,0,p.work,x),p.lenbits=x.bits,M){A.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,x={bits:p.distbits},M=l(c,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,x),p.distbits=x.bits,M){A.msg="invalid distances set",p.mode=30;break}if(p.mode=20,F===6)break e;case 20:p.mode=21;case 21:if(6<=H&&258<=ee){A.next_out=re,A.avail_out=ee,A.next_in=$,A.avail_in=H,p.hold=I,p.bits=v,a(A,Y),re=A.next_out,ne=A.output,ee=A.avail_out,$=A.next_in,z=A.input,H=A.avail_in,I=p.hold,v=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;ce=(k=p.lencode[I&(1<<p.lenbits)-1])>>>16&255,be=65535&k,!((oe=k>>>24)<=v);){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if(ce&&(240&ce)==0){for(ke=oe,Oe=ce,Ie=be;ce=(k=p.lencode[Ie+((I&(1<<ke+Oe)-1)>>ke)])>>>16&255,be=65535&k,!(ke+(oe=k>>>24)<=v);){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}I>>>=ke,v-=ke,p.back+=ke}if(I>>>=oe,v-=oe,p.back+=oe,p.length=be,ce===0){p.mode=26;break}if(32&ce){p.back=-1,p.mode=12;break}if(64&ce){A.msg="invalid literal/length code",p.mode=30;break}p.extra=15&ce,p.mode=22;case 22:if(p.extra){for(b=p.extra;v<b;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}p.length+=I&(1<<p.extra)-1,I>>>=p.extra,v-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;ce=(k=p.distcode[I&(1<<p.distbits)-1])>>>16&255,be=65535&k,!((oe=k>>>24)<=v);){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if((240&ce)==0){for(ke=oe,Oe=ce,Ie=be;ce=(k=p.distcode[Ie+((I&(1<<ke+Oe)-1)>>ke)])>>>16&255,be=65535&k,!(ke+(oe=k>>>24)<=v);){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}I>>>=ke,v-=ke,p.back+=ke}if(I>>>=oe,v-=oe,p.back+=oe,64&ce){A.msg="invalid distance code",p.mode=30;break}p.offset=be,p.extra=15&ce,p.mode=24;case 24:if(p.extra){for(b=p.extra;v<b;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}p.offset+=I&(1<<p.extra)-1,I>>>=p.extra,v-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){A.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(ee===0)break e;if(Z=Y-ee,p.offset>Z){if((Z=p.offset-Z)>p.whave&&p.sane){A.msg="invalid distance too far back",p.mode=30;break}Se=Z>p.wnext?(Z-=p.wnext,p.wsize-Z):p.wnext-Z,Z>p.length&&(Z=p.length),Ee=p.window}else Ee=ne,Se=re-p.offset,Z=p.length;for(ee<Z&&(Z=ee),ee-=Z,p.length-=Z;ne[re++]=Ee[Se++],--Z;);p.length===0&&(p.mode=21);break;case 26:if(ee===0)break e;ne[re++]=p.length,ee--,p.mode=21;break;case 27:if(p.wrap){for(;v<32;){if(H===0)break e;H--,I|=z[$++]<<v,v+=8}if(Y-=ee,A.total_out+=Y,p.total+=Y,Y&&(A.adler=p.check=p.flags?o(p.check,ne,Y,re-Y):i(p.check,ne,Y,re-Y)),Y=ee,(p.flags?I:g(I))!==p.check){A.msg="incorrect data check",p.mode=30;break}v=I=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;v<32;){if(H===0)break e;H--,I+=z[$++]<<v,v+=8}if(I!==(4294967295&p.total)){A.msg="incorrect length check",p.mode=30;break}v=I=0}p.mode=29;case 29:M=1;break e;case 30:M=-3;break e;case 31:return-4;default:return u}return A.next_out=re,A.avail_out=ee,A.next_in=$,A.avail_in=H,p.hold=I,p.bits=v,(p.wsize||Y!==A.avail_out&&p.mode<30&&(p.mode<27||F!==4))&&X(A,A.output,A.next_out,Y-A.avail_out)?(p.mode=31,-4):(Q-=A.avail_in,Y-=A.avail_out,A.total_in+=Q,A.total_out+=Y,p.total+=Y,p.wrap&&Y&&(A.adler=p.check=p.flags?o(p.check,ne,Y,A.next_out-Y):i(p.check,ne,Y,A.next_out-Y)),A.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(Q==0&&Y===0||F===4)&&M===f&&(M=-5),M)},n.inflateEnd=function(A){if(!A||!A.state)return u;var F=A.state;return F.window&&(F.window=null),A.state=null,f},n.inflateGetHeader=function(A,F){var p;return A&&A.state?(2&(p=A.state).wrap)==0?u:((p.head=F).done=!1,f):u},n.inflateSetDictionary=function(A,F){var p,z=F.length;return A&&A.state?(p=A.state).wrap!==0&&p.mode!==11?u:p.mode===11&&i(1,F,z,0)!==p.check?-3:X(A,F,z,z)?(p.mode=31,-4):(p.havedict=1,f):u},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,s,n){var r=e("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(m,c,f,u,_,d,T,g){var S,E,w,y,D,O,j,P,K,X=g.bits,A=0,F=0,p=0,z=0,ne=0,$=0,re=0,H=0,ee=0,I=0,v=null,Q=0,Y=new r.Buf16(16),Z=new r.Buf16(16),Se=null,Ee=0;for(A=0;A<=15;A++)Y[A]=0;for(F=0;F<u;F++)Y[c[f+F]]++;for(ne=X,z=15;1<=z&&Y[z]===0;z--);if(z<ne&&(ne=z),z===0)return _[d++]=20971520,_[d++]=20971520,g.bits=1,0;for(p=1;p<z&&Y[p]===0;p++);for(ne<p&&(ne=p),A=H=1;A<=15;A++)if(H<<=1,(H-=Y[A])<0)return-1;if(0<H&&(m===0||z!==1))return-1;for(Z[1]=0,A=1;A<15;A++)Z[A+1]=Z[A]+Y[A];for(F=0;F<u;F++)c[f+F]!==0&&(T[Z[c[f+F]]++]=F);if(O=m===0?(v=Se=T,19):m===1?(v=i,Q-=257,Se=o,Ee-=257,256):(v=a,Se=l,-1),A=p,D=d,re=F=I=0,w=-1,y=(ee=1<<($=ne))-1,m===1&&852<ee||m===2&&592<ee)return 1;for(;;){for(j=A-re,K=T[F]<O?(P=0,T[F]):T[F]>O?(P=Se[Ee+T[F]],v[Q+T[F]]):(P=96,0),S=1<<A-re,p=E=1<<$;_[D+(I>>re)+(E-=S)]=j<<24|P<<16|K|0,E!==0;);for(S=1<<A-1;I&S;)S>>=1;if(S!==0?(I&=S-1,I+=S):I=0,F++,--Y[A]==0){if(A===z)break;A=c[f+T[F]]}if(ne<A&&(I&y)!==w){for(re===0&&(re=ne),D+=p,H=1<<($=A-re);$+re<z&&!((H-=Y[$+re])<=0);)$++,H<<=1;if(ee+=1<<$,m===1&&852<ee||m===2&&592<ee)return 1;_[w=I&y]=ne<<24|$<<16|D-d|0}}return I!==0&&(_[D+I]=A-re<<24|64<<16|0),g.bits=ne,0}},{"../utils/common":41}],51:[function(e,s,n){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,s,n){var r=e("../utils/common"),i=0,o=1;function a(k){for(var R=k.length;0<=--R;)k[R]=0}var l=0,m=29,c=256,f=c+1+m,u=30,_=19,d=2*f+1,T=15,g=16,S=7,E=256,w=16,y=17,D=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],j=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],K=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(f+2));a(X);var A=new Array(2*u);a(A);var F=new Array(512);a(F);var p=new Array(256);a(p);var z=new Array(m);a(z);var ne,$,re,H=new Array(u);function ee(k,R,B,U,C){this.static_tree=k,this.extra_bits=R,this.extra_base=B,this.elems=U,this.max_length=C,this.has_stree=k&&k.length}function I(k,R){this.dyn_tree=k,this.max_code=0,this.stat_desc=R}function v(k){return k<256?F[k]:F[256+(k>>>7)]}function Q(k,R){k.pending_buf[k.pending++]=255&R,k.pending_buf[k.pending++]=R>>>8&255}function Y(k,R,B){k.bi_valid>g-B?(k.bi_buf|=R<<k.bi_valid&65535,Q(k,k.bi_buf),k.bi_buf=R>>g-k.bi_valid,k.bi_valid+=B-g):(k.bi_buf|=R<<k.bi_valid&65535,k.bi_valid+=B)}function Z(k,R,B){Y(k,B[2*R],B[2*R+1])}function Se(k,R){for(var B=0;B|=1&k,k>>>=1,B<<=1,0<--R;);return B>>>1}function Ee(k,R,B){var U,C,q=new Array(T+1),V=0;for(U=1;U<=T;U++)q[U]=V=V+B[U-1]<<1;for(C=0;C<=R;C++){var W=k[2*C+1];W!==0&&(k[2*C]=Se(q[W]++,W))}}function oe(k){var R;for(R=0;R<f;R++)k.dyn_ltree[2*R]=0;for(R=0;R<u;R++)k.dyn_dtree[2*R]=0;for(R=0;R<_;R++)k.bl_tree[2*R]=0;k.dyn_ltree[2*E]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function ce(k){8<k.bi_valid?Q(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function be(k,R,B,U){var C=2*R,q=2*B;return k[C]<k[q]||k[C]===k[q]&&U[R]<=U[B]}function ke(k,R,B){for(var U=k.heap[B],C=B<<1;C<=k.heap_len&&(C<k.heap_len&&be(R,k.heap[C+1],k.heap[C],k.depth)&&C++,!be(R,U,k.heap[C],k.depth));)k.heap[B]=k.heap[C],B=C,C<<=1;k.heap[B]=U}function Oe(k,R,B){var U,C,q,V,W=0;if(k.last_lit!==0)for(;U=k.pending_buf[k.d_buf+2*W]<<8|k.pending_buf[k.d_buf+2*W+1],C=k.pending_buf[k.l_buf+W],W++,U===0?Z(k,C,R):(Z(k,(q=p[C])+c+1,R),(V=O[q])!==0&&Y(k,C-=z[q],V),Z(k,q=v(--U),B),(V=j[q])!==0&&Y(k,U-=H[q],V)),W<k.last_lit;);Z(k,E,R)}function Ie(k,R){var B,U,C,q=R.dyn_tree,V=R.stat_desc.static_tree,W=R.stat_desc.has_stree,J=R.stat_desc.elems,me=-1;for(k.heap_len=0,k.heap_max=d,B=0;B<J;B++)q[2*B]!==0?(k.heap[++k.heap_len]=me=B,k.depth[B]=0):q[2*B+1]=0;for(;k.heap_len<2;)q[2*(C=k.heap[++k.heap_len]=me<2?++me:0)]=1,k.depth[C]=0,k.opt_len--,W&&(k.static_len-=V[2*C+1]);for(R.max_code=me,B=k.heap_len>>1;1<=B;B--)ke(k,q,B);for(C=J;B=k.heap[1],k.heap[1]=k.heap[k.heap_len--],ke(k,q,1),U=k.heap[1],k.heap[--k.heap_max]=B,k.heap[--k.heap_max]=U,q[2*C]=q[2*B]+q[2*U],k.depth[C]=(k.depth[B]>=k.depth[U]?k.depth[B]:k.depth[U])+1,q[2*B+1]=q[2*U+1]=C,k.heap[1]=C++,ke(k,q,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(ae,Re){var qe,Pe,Ge,Ne,nt,Tt,ze=Re.dyn_tree,hn=Re.max_code,Ts=Re.stat_desc.static_tree,Ss=Re.stat_desc.has_stree,ks=Re.stat_desc.extra_bits,cn=Re.stat_desc.extra_base,We=Re.stat_desc.max_length,st=0;for(Ne=0;Ne<=T;Ne++)ae.bl_count[Ne]=0;for(ze[2*ae.heap[ae.heap_max]+1]=0,qe=ae.heap_max+1;qe<d;qe++)We<(Ne=ze[2*ze[2*(Pe=ae.heap[qe])+1]+1]+1)&&(Ne=We,st++),ze[2*Pe+1]=Ne,hn<Pe||(ae.bl_count[Ne]++,nt=0,cn<=Pe&&(nt=ks[Pe-cn]),Tt=ze[2*Pe],ae.opt_len+=Tt*(Ne+nt),Ss&&(ae.static_len+=Tt*(Ts[2*Pe+1]+nt)));if(st!==0){do{for(Ne=We-1;ae.bl_count[Ne]===0;)Ne--;ae.bl_count[Ne]--,ae.bl_count[Ne+1]+=2,ae.bl_count[We]--,st-=2}while(0<st);for(Ne=We;Ne!==0;Ne--)for(Pe=ae.bl_count[Ne];Pe!==0;)hn<(Ge=ae.heap[--qe])||(ze[2*Ge+1]!==Ne&&(ae.opt_len+=(Ne-ze[2*Ge+1])*ze[2*Ge],ze[2*Ge+1]=Ne),Pe--)}})(k,R),Ee(q,me,k.bl_count)}function h(k,R,B){var U,C,q=-1,V=R[1],W=0,J=7,me=4;for(V===0&&(J=138,me=3),R[2*(B+1)+1]=65535,U=0;U<=B;U++)C=V,V=R[2*(U+1)+1],++W<J&&C===V||(W<me?k.bl_tree[2*C]+=W:C!==0?(C!==q&&k.bl_tree[2*C]++,k.bl_tree[2*w]++):W<=10?k.bl_tree[2*y]++:k.bl_tree[2*D]++,q=C,me=(W=0)===V?(J=138,3):C===V?(J=6,3):(J=7,4))}function M(k,R,B){var U,C,q=-1,V=R[1],W=0,J=7,me=4;for(V===0&&(J=138,me=3),U=0;U<=B;U++)if(C=V,V=R[2*(U+1)+1],!(++W<J&&C===V)){if(W<me)for(;Z(k,C,k.bl_tree),--W!=0;);else C!==0?(C!==q&&(Z(k,C,k.bl_tree),W--),Z(k,w,k.bl_tree),Y(k,W-3,2)):W<=10?(Z(k,y,k.bl_tree),Y(k,W-3,3)):(Z(k,D,k.bl_tree),Y(k,W-11,7));q=C,me=(W=0)===V?(J=138,3):C===V?(J=6,3):(J=7,4)}}a(H);var x=!1;function b(k,R,B,U){Y(k,(l<<1)+(U?1:0),3),(function(C,q,V,W){ce(C),Q(C,V),Q(C,~V),r.arraySet(C.pending_buf,C.window,q,V,C.pending),C.pending+=V})(k,R,B)}n._tr_init=function(k){x||((function(){var R,B,U,C,q,V=new Array(T+1);for(C=U=0;C<m-1;C++)for(z[C]=U,R=0;R<1<<O[C];R++)p[U++]=C;for(p[U-1]=C,C=q=0;C<16;C++)for(H[C]=q,R=0;R<1<<j[C];R++)F[q++]=C;for(q>>=7;C<u;C++)for(H[C]=q<<7,R=0;R<1<<j[C]-7;R++)F[256+q++]=C;for(B=0;B<=T;B++)V[B]=0;for(R=0;R<=143;)X[2*R+1]=8,R++,V[8]++;for(;R<=255;)X[2*R+1]=9,R++,V[9]++;for(;R<=279;)X[2*R+1]=7,R++,V[7]++;for(;R<=287;)X[2*R+1]=8,R++,V[8]++;for(Ee(X,f+1,V),R=0;R<u;R++)A[2*R+1]=5,A[2*R]=Se(R,5);ne=new ee(X,O,c+1,f,T),$=new ee(A,j,0,u,T),re=new ee(new Array(0),P,0,_,S)})(),x=!0),k.l_desc=new I(k.dyn_ltree,ne),k.d_desc=new I(k.dyn_dtree,$),k.bl_desc=new I(k.bl_tree,re),k.bi_buf=0,k.bi_valid=0,oe(k)},n._tr_stored_block=b,n._tr_flush_block=function(k,R,B,U){var C,q,V=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(W){var J,me=4093624447;for(J=0;J<=31;J++,me>>>=1)if(1&me&&W.dyn_ltree[2*J]!==0)return i;if(W.dyn_ltree[18]!==0||W.dyn_ltree[20]!==0||W.dyn_ltree[26]!==0)return o;for(J=32;J<c;J++)if(W.dyn_ltree[2*J]!==0)return o;return i})(k)),Ie(k,k.l_desc),Ie(k,k.d_desc),V=(function(W){var J;for(h(W,W.dyn_ltree,W.l_desc.max_code),h(W,W.dyn_dtree,W.d_desc.max_code),Ie(W,W.bl_desc),J=_-1;3<=J&&W.bl_tree[2*K[J]+1]===0;J--);return W.opt_len+=3*(J+1)+5+5+4,J})(k),C=k.opt_len+3+7>>>3,(q=k.static_len+3+7>>>3)<=C&&(C=q)):C=q=B+5,B+4<=C&&R!==-1?b(k,R,B,U):k.strategy===4||q===C?(Y(k,2+(U?1:0),3),Oe(k,X,A)):(Y(k,4+(U?1:0),3),(function(W,J,me,ae){var Re;for(Y(W,J-257,5),Y(W,me-1,5),Y(W,ae-4,4),Re=0;Re<ae;Re++)Y(W,W.bl_tree[2*K[Re]+1],3);M(W,W.dyn_ltree,J-1),M(W,W.dyn_dtree,me-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,V+1),Oe(k,k.dyn_ltree,k.dyn_dtree)),oe(k),U&&ce(k)},n._tr_tally=function(k,R,B){return k.pending_buf[k.d_buf+2*k.last_lit]=R>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&R,k.pending_buf[k.l_buf+k.last_lit]=255&B,k.last_lit++,R===0?k.dyn_ltree[2*B]++:(k.matches++,R--,k.dyn_ltree[2*(p[B]+c+1)]++,k.dyn_dtree[2*v(R)]++),k.last_lit===k.lit_bufsize-1},n._tr_align=function(k){Y(k,2,3),Z(k,E,X),(function(R){R.bi_valid===16?(Q(R,R.bi_buf),R.bi_buf=0,R.bi_valid=0):8<=R.bi_valid&&(R.pending_buf[R.pending++]=255&R.bi_buf,R.bi_buf>>=8,R.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(e,s,n){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,s,n){(function(r){(function(i,o){if(!i.setImmediate){var a,l,m,c,f=1,u={},_=!1,d=i.document,T=Object.getPrototypeOf&&Object.getPrototypeOf(i);T=T&&T.setTimeout?T:i,a={}.toString.call(i.process)==="[object process]"?function(w){process.nextTick(function(){S(w)})}:(function(){if(i.postMessage&&!i.importScripts){var w=!0,y=i.onmessage;return i.onmessage=function(){w=!1},i.postMessage("","*"),i.onmessage=y,w}})()?(c="setImmediate$"+Math.random()+"$",i.addEventListener?i.addEventListener("message",E,!1):i.attachEvent("onmessage",E),function(w){i.postMessage(c+w,"*")}):i.MessageChannel?((m=new MessageChannel).port1.onmessage=function(w){S(w.data)},function(w){m.port2.postMessage(w)}):d&&"onreadystatechange"in d.createElement("script")?(l=d.documentElement,function(w){var y=d.createElement("script");y.onreadystatechange=function(){S(w),y.onreadystatechange=null,l.removeChild(y),y=null},l.appendChild(y)}):function(w){setTimeout(S,0,w)},T.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var y=new Array(arguments.length-1),D=0;D<y.length;D++)y[D]=arguments[D+1];var O={callback:w,args:y};return u[f]=O,a(f),f++},T.clearImmediate=g}function g(w){delete u[w]}function S(w){if(_)setTimeout(S,0,w);else{var y=u[w];if(y){_=!0;try{(function(D){var O=D.callback,j=D.args;switch(j.length){case 0:O();break;case 1:O(j[0]);break;case 2:O(j[0],j[1]);break;case 3:O(j[0],j[1],j[2]);break;default:O.apply(o,j)}})(y)}finally{g(w),_=!1}}}}function E(w){w.source===i&&typeof w.data=="string"&&w.data.indexOf(c)===0&&S(+w.data.slice(c.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Ze<"u"?Ze:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(_t)),_t.exports}var _s=ms(),gs=rt(_s);let gt,ln,un;self.onmessage=N=>{if(N.data.type!=="rpc_response")switch(N.data.type){case"emitcode":try{const t=N.data,e=JSON.parse(t.options);ds(t.regularDefinitions,t.tokens,t.nonTerminals,t.grammar,e,t.necessarioRecriar,void 0,gt).then(([s,,n,r])=>{if(s!=null)try{const i=new gs;let o=null;if(n&&(o=i.folder(e.pkgName),o==null))throw Error("FLD é nulo");for(const[a,l]of s.entries())n&&o!=null?o.file(a,l):i.file(a,l);r!=null&&i.file("main.py",r),i.generateAsync({type:"blob"}).then(a=>{const l=URL.createObjectURL(a);self.postMessage({type:"emitcode",success:!0,result:[l,t.fileName,t.linguagemString]})})}catch(i){self.postMessage({type:"emitcode",success:!1,error:i.message})}}).catch(s=>self.postMessage({type:"emitcode",success:!1,error:s.message}))}catch(t){self.postMessage({type:"emitcode",success:!1,error:t})}break;case"syntactic":try{const t=N.data;cs(t.textSimulator,t.regularDefinitions,t.tokens,t.nonTerminals,t.grammar,t.parser,t.necessarioRecriar,void 0,void 0,gt,ln,un).then(([e,s,n,r])=>{gt=s,ln=n,un=r;let i=JSON.stringify(e);self.postMessage({type:"syntactic",success:!0,result:i})}).catch(e=>{self.postMessage({type:"syntactic",success:!1,error:e.message})})}catch(t){self.postMessage({type:"syntactic",success:!1,error:t.message})}break}}})();
