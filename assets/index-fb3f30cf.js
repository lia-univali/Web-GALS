var xa=Object.defineProperty;var Na=(s,e,t)=>e in s?xa(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var L=(s,e,t)=>(Na(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ar(s,e){const t=new Set(s.split(","));return e?n=>t.has(n.toLowerCase()):n=>t.has(n)}const De={},hn=[],rt=()=>{},Ia=()=>!1,fs=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&(s.charCodeAt(2)>122||s.charCodeAt(2)<97),lr=s=>s.startsWith("onUpdate:"),Ye=Object.assign,cr=(s,e)=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)},La=Object.prototype.hasOwnProperty,ye=(s,e)=>La.call(s,e),le=Array.isArray,dn=s=>ps(s)==="[object Map]",Ri=s=>ps(s)==="[object Set]",he=s=>typeof s=="function",$e=s=>typeof s=="string",$t=s=>typeof s=="symbol",Me=s=>s!==null&&typeof s=="object",xi=s=>(Me(s)||he(s))&&he(s.then)&&he(s.catch),Ni=Object.prototype.toString,ps=s=>Ni.call(s),Oa=s=>ps(s).slice(8,-1),Ii=s=>ps(s)==="[object Object]",ur=s=>$e(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,En=ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ms=s=>{const e=Object.create(null);return t=>e[t]||(e[t]=s(t))},Pa=/-(\w)/g,ut=ms(s=>s.replace(Pa,(e,t)=>t?t.toUpperCase():"")),Fa=/\B([A-Z])/g,nn=ms(s=>s.replace(Fa,"-$1").toLowerCase()),gs=ms(s=>s.charAt(0).toUpperCase()+s.slice(1)),Is=ms(s=>s?`on${gs(s)}`:""),jt=(s,e)=>!Object.is(s,e),Zn=(s,...e)=>{for(let t=0;t<s.length;t++)s[t](...e)},Li=(s,e,t,n=!1)=>{Object.defineProperty(s,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Ks=s=>{const e=parseFloat(s);return isNaN(e)?s:e};let Dr;const Oi=()=>Dr||(Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bn(s){if(le(s)){const e={};for(let t=0;t<s.length;t++){const n=s[t],r=$e(n)?ja(n):bn(n);if(r)for(const i in r)e[i]=r[i]}return e}else if($e(s)||Me(s))return s}const Da=/;(?![^(]*\))/g,Ma=/:([^]+)/,za=/\/\*[^]*?\*\//g;function ja(s){const e={};return s.replace(za,"").split(Da).forEach(t=>{if(t){const n=t.split(Ma);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function yt(s){let e="";if($e(s))e=s;else if(le(s))for(let t=0;t<s.length;t++){const n=yt(s[t]);n&&(e+=n+" ")}else if(Me(s))for(const t in s)s[t]&&(e+=t+" ");return e.trim()}const Ba="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ua=ar(Ba);function Pi(s){return!!s||s===""}const Fi=s=>!!(s&&s.__v_isRef===!0),_t=s=>$e(s)?s:s==null?"":le(s)||Me(s)&&(s.toString===Ni||!he(s.toString))?Fi(s)?_t(s.value):JSON.stringify(s,Di,2):String(s),Di=(s,e)=>Fi(e)?Di(s,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],i)=>(t[Ls(n,i)+" =>"]=r,t),{})}:Ri(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ls(t))}:$t(e)?Ls(e):Me(e)&&!le(e)&&!Ii(e)?String(e):e,Ls=(s,e="")=>{var t;return $t(s)?`Symbol(${(t=s.description)!=null?t:e})`:s};/**
* @vue/reactivity v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class Mi{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=nt;try{return nt=this,e()}finally{nt=t}}}on(){nt=this}off(){nt=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function zi(s){return new Mi(s)}function $a(s,e=nt){e&&e.active&&e.effects.push(s)}function ji(){return nt}function Ha(s){nt&&nt.cleanups.push(s)}let Yt;class hr{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,$a(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ht();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Ga(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Gt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ft,t=Yt;try{return Ft=!0,Yt=this,this._runnings++,Mr(this),this.fn()}finally{zr(this),this._runnings--,Yt=t,Ft=e}}stop(){this.active&&(Mr(this),zr(this),this.onStop&&this.onStop(),this.active=!1)}}function Ga(s){return s.value}function Mr(s){s._trackId++,s._depsLength=0}function zr(s){if(s.deps.length>s._depsLength){for(let e=s._depsLength;e<s.deps.length;e++)Bi(s.deps[e],s);s.deps.length=s._depsLength}}function Bi(s,e){const t=s.get(e);t!==void 0&&e._trackId!==t&&(s.delete(e),s.size===0&&s.cleanup())}let Ft=!0,Ws=0;const Ui=[];function Ht(){Ui.push(Ft),Ft=!1}function Gt(){const s=Ui.pop();Ft=s===void 0?!0:s}function dr(){Ws++}function fr(){for(Ws--;!Ws&&Vs.length;)Vs.shift()()}function $i(s,e,t){if(e.get(s)!==s._trackId){e.set(s,s._trackId);const n=s.deps[s._depsLength];n!==e?(n&&Bi(n,s),s.deps[s._depsLength++]=e):s._depsLength++}}const Vs=[];function Hi(s,e,t){dr();for(const n of s.keys()){let r;n._dirtyLevel<e&&(r??(r=s.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(r??(r=s.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&Vs.push(n.scheduler)))}fr()}const Gi=(s,e)=>{const t=new Map;return t.cleanup=s,t.computed=e,t},ts=new WeakMap,Xt=Symbol(""),qs=Symbol("");function et(s,e,t){if(Ft&&Yt){let n=ts.get(s);n||ts.set(s,n=new Map);let r=n.get(t);r||n.set(t,r=Gi(()=>n.delete(t))),$i(Yt,r)}}function vt(s,e,t,n,r,i){const o=ts.get(s);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&le(s)){const l=Number(n);o.forEach((u,f)=>{(f==="length"||!$t(f)&&f>=l)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":le(s)?ur(t)&&a.push(o.get("length")):(a.push(o.get(Xt)),dn(s)&&a.push(o.get(qs)));break;case"delete":le(s)||(a.push(o.get(Xt)),dn(s)&&a.push(o.get(qs)));break;case"set":dn(s)&&a.push(o.get(Xt));break}dr();for(const l of a)l&&Hi(l,4);fr()}function Ka(s,e){const t=ts.get(s);return t&&t.get(e)}const Wa=ar("__proto__,__v_isRef,__isVue"),Ki=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter($t)),jr=Va();function Va(){const s={};return["includes","indexOf","lastIndexOf"].forEach(e=>{s[e]=function(...t){const n=we(this);for(let i=0,o=this.length;i<o;i++)et(n,"get",i+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(we)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{s[e]=function(...t){Ht(),dr();const n=we(this)[e].apply(this,t);return fr(),Gt(),n}}),s}function qa(s){$t(s)||(s=String(s));const e=we(this);return et(e,"has",s),e.hasOwnProperty(s)}class Wi{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return n===(r?i?al:Yi:i?Zi:qi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=le(e);if(!r){if(o&&ye(jr,t))return Reflect.get(jr,t,n);if(t==="hasOwnProperty")return qa}const a=Reflect.get(e,t,n);return($t(t)?Ki.has(t):Wa(t))||(r||et(e,"get",t),i)?a:He(a)?o&&ur(t)?a:a.value:Me(a)?r?Xi(a):bs(a):a}}class Vi extends Wi{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(!this._isShallow){const l=en(i);if(!pn(n)&&!en(n)&&(i=we(i),n=we(n)),!le(e)&&He(i)&&!He(n))return l?!1:(i.value=n,!0)}const o=le(e)&&ur(t)?Number(t)<e.length:ye(e,t),a=Reflect.set(e,t,n,r);return e===we(r)&&(o?jt(n,i)&&vt(e,"set",t,n):vt(e,"add",t,n)),a}deleteProperty(e,t){const n=ye(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&vt(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!$t(t)||!Ki.has(t))&&et(e,"has",t),n}ownKeys(e){return et(e,"iterate",le(e)?"length":Xt),Reflect.ownKeys(e)}}class Za extends Wi{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ya=new Vi,Xa=new Za,Ja=new Vi(!0);const pr=s=>s,_s=s=>Reflect.getPrototypeOf(s);function Bn(s,e,t=!1,n=!1){s=s.__v_raw;const r=we(s),i=we(e);t||(jt(e,i)&&et(r,"get",e),et(r,"get",i));const{has:o}=_s(r),a=n?pr:t?br:In;if(o.call(r,e))return a(s.get(e));if(o.call(r,i))return a(s.get(i));s!==r&&s.get(e)}function Un(s,e=!1){const t=this.__v_raw,n=we(t),r=we(s);return e||(jt(s,r)&&et(n,"has",s),et(n,"has",r)),s===r?t.has(s):t.has(s)||t.has(r)}function $n(s,e=!1){return s=s.__v_raw,!e&&et(we(s),"iterate",Xt),Reflect.get(s,"size",s)}function Br(s,e=!1){!e&&!pn(s)&&!en(s)&&(s=we(s));const t=we(this);return _s(t).has.call(t,s)||(t.add(s),vt(t,"add",s,s)),this}function Ur(s,e,t=!1){!t&&!pn(e)&&!en(e)&&(e=we(e));const n=we(this),{has:r,get:i}=_s(n);let o=r.call(n,s);o||(s=we(s),o=r.call(n,s));const a=i.call(n,s);return n.set(s,e),o?jt(e,a)&&vt(n,"set",s,e):vt(n,"add",s,e),this}function $r(s){const e=we(this),{has:t,get:n}=_s(e);let r=t.call(e,s);r||(s=we(s),r=t.call(e,s)),n&&n.call(e,s);const i=e.delete(s);return r&&vt(e,"delete",s,void 0),i}function Hr(){const s=we(this),e=s.size!==0,t=s.clear();return e&&vt(s,"clear",void 0,void 0),t}function Hn(s,e){return function(n,r){const i=this,o=i.__v_raw,a=we(o),l=e?pr:s?br:In;return!s&&et(a,"iterate",Xt),o.forEach((u,f)=>n.call(r,l(u),l(f),i))}}function Gn(s,e,t){return function(...n){const r=this.__v_raw,i=we(r),o=dn(i),a=s==="entries"||s===Symbol.iterator&&o,l=s==="keys"&&o,u=r[s](...n),f=t?pr:e?br:In;return!e&&et(i,"iterate",l?qs:Xt),{next(){const{value:h,done:m}=u.next();return m?{value:h,done:m}:{value:a?[f(h[0]),f(h[1])]:f(h),done:m}},[Symbol.iterator](){return this}}}}function At(s){return function(...e){return s==="delete"?!1:s==="clear"?void 0:this}}function Qa(){const s={get(i){return Bn(this,i)},get size(){return $n(this)},has:Un,add:Br,set:Ur,delete:$r,clear:Hr,forEach:Hn(!1,!1)},e={get(i){return Bn(this,i,!1,!0)},get size(){return $n(this)},has:Un,add(i){return Br.call(this,i,!0)},set(i,o){return Ur.call(this,i,o,!0)},delete:$r,clear:Hr,forEach:Hn(!1,!0)},t={get(i){return Bn(this,i,!0)},get size(){return $n(this,!0)},has(i){return Un.call(this,i,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Hn(!0,!1)},n={get(i){return Bn(this,i,!0,!0)},get size(){return $n(this,!0)},has(i){return Un.call(this,i,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=Gn(i,!1,!1),t[i]=Gn(i,!0,!1),e[i]=Gn(i,!1,!0),n[i]=Gn(i,!0,!0)}),[s,t,e,n]}const[el,tl,nl,sl]=Qa();function mr(s,e){const t=e?s?sl:nl:s?tl:el;return(n,r,i)=>r==="__v_isReactive"?!s:r==="__v_isReadonly"?s:r==="__v_raw"?n:Reflect.get(ye(t,r)&&r in n?t:n,r,i)}const rl={get:mr(!1,!1)},il={get:mr(!1,!0)},ol={get:mr(!0,!1)};const qi=new WeakMap,Zi=new WeakMap,Yi=new WeakMap,al=new WeakMap;function ll(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cl(s){return s.__v_skip||!Object.isExtensible(s)?0:ll(Oa(s))}function bs(s){return en(s)?s:gr(s,!1,Ya,rl,qi)}function ul(s){return gr(s,!1,Ja,il,Zi)}function Xi(s){return gr(s,!0,Xa,ol,Yi)}function gr(s,e,t,n,r){if(!Me(s)||s.__v_raw&&!(e&&s.__v_isReactive))return s;const i=r.get(s);if(i)return i;const o=cl(s);if(o===0)return s;const a=new Proxy(s,o===2?n:t);return r.set(s,a),a}function Jt(s){return en(s)?Jt(s.__v_raw):!!(s&&s.__v_isReactive)}function en(s){return!!(s&&s.__v_isReadonly)}function pn(s){return!!(s&&s.__v_isShallow)}function Ji(s){return s?!!s.__v_raw:!1}function we(s){const e=s&&s.__v_raw;return e?we(e):s}function _r(s){return Object.isExtensible(s)&&Li(s,"__v_skip",!0),s}const In=s=>Me(s)?bs(s):s,br=s=>Me(s)?Xi(s):s;class Qi{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new hr(()=>e(this._value),()=>Yn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=we(this);return(!e._cacheable||e.effect.dirty)&&jt(e._value,e._value=e.effect.run())&&Yn(e,4),eo(e),e.effect._dirtyLevel>=2&&Yn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function hl(s,e,t=!1){let n,r;const i=he(s);return i?(n=s,r=rt):(n=s.get,r=s.set),new Qi(n,r,i||!r,t)}function eo(s){var e;Ft&&Yt&&(s=we(s),$i(Yt,(e=s.dep)!=null?e:s.dep=Gi(()=>s.dep=void 0,s instanceof Qi?s:void 0)))}function Yn(s,e=4,t,n){s=we(s);const r=s.dep;r&&Hi(r,e)}function He(s){return!!(s&&s.__v_isRef===!0)}function to(s){return dl(s,!1)}function dl(s,e){return He(s)?s:new fl(s,e)}class fl{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:we(e),this._value=t?e:In(e)}get value(){return eo(this),this._value}set value(e){const t=this.__v_isShallow||pn(e)||en(e);e=t?e:we(e),jt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:In(e),Yn(this,4))}}function pl(s){return He(s)?s.value:s}const ml={get:(s,e,t)=>pl(Reflect.get(s,e,t)),set:(s,e,t,n)=>{const r=s[e];return He(r)&&!He(t)?(r.value=t,!0):Reflect.set(s,e,t,n)}};function no(s){return Jt(s)?s:new Proxy(s,ml)}function gl(s){const e=le(s)?new Array(s.length):{};for(const t in s)e[t]=bl(s,t);return e}class _l{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ka(we(this._object),this._key)}}function bl(s,e,t){const n=s[e];return He(n)?n:new _l(s,e,t)}/**
* @vue/runtime-core v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dt(s,e,t,n){try{return n?s(...n):s()}catch(r){Ss(r,e,t)}}function ct(s,e,t,n){if(he(s)){const r=Dt(s,e,t,n);return r&&xi(r)&&r.catch(i=>{Ss(i,e,t)}),r}if(le(s)){const r=[];for(let i=0;i<s.length;i++)r.push(ct(s[i],e,t,n));return r}}function Ss(s,e,t,n=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;i;){const u=i.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](s,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ht(),Dt(l,null,10,[s,o,a]),Gt();return}}Sl(s,t,r,n)}function Sl(s,e,t,n=!0){console.error(s)}let Ln=!1,Zs=!1;const Ze=[];let gt=0;const fn=[];let It=null,Zt=0;const so=Promise.resolve();let Sr=null;function ro(s){const e=Sr||so;return s?e.then(this?s.bind(this):s):e}function Tl(s){let e=gt+1,t=Ze.length;for(;e<t;){const n=e+t>>>1,r=Ze[n],i=On(r);i<s||i===s&&r.pre?e=n+1:t=n}return e}function Tr(s){(!Ze.length||!Ze.includes(s,Ln&&s.allowRecurse?gt+1:gt))&&(s.id==null?Ze.push(s):Ze.splice(Tl(s.id),0,s),io())}function io(){!Ln&&!Zs&&(Zs=!0,Sr=so.then(ao))}function yl(s){const e=Ze.indexOf(s);e>gt&&Ze.splice(e,1)}function vl(s){le(s)?fn.push(...s):(!It||!It.includes(s,s.allowRecurse?Zt+1:Zt))&&fn.push(s),io()}function Gr(s,e,t=Ln?gt+1:0){for(;t<Ze.length;t++){const n=Ze[t];if(n&&n.pre){if(s&&n.id!==s.uid)continue;Ze.splice(t,1),t--,n()}}}function oo(s){if(fn.length){const e=[...new Set(fn)].sort((t,n)=>On(t)-On(n));if(fn.length=0,It){It.push(...e);return}for(It=e,Zt=0;Zt<It.length;Zt++){const t=It[Zt];t.active!==!1&&t()}It=null,Zt=0}}const On=s=>s.id==null?1/0:s.id,El=(s,e)=>{const t=On(s)-On(e);if(t===0){if(s.pre&&!e.pre)return-1;if(e.pre&&!s.pre)return 1}return t};function ao(s){Zs=!1,Ln=!0,Ze.sort(El);const e=rt;try{for(gt=0;gt<Ze.length;gt++){const t=Ze[gt];t&&t.active!==!1&&Dt(t,t.i,t.i?15:14)}}finally{gt=0,Ze.length=0,oo(),Ln=!1,Sr=null,(Ze.length||fn.length)&&ao()}}let Ke=null,Ts=null;function ns(s){const e=Ke;return Ke=s,Ts=s&&s.type.__scopeId||null,e}function ys(s){Ts=s}function vs(){Ts=null}function Rt(s,e=Ke,t){if(!e||s._n)return s;const n=(...r)=>{n._d&&Qr(-1);const i=ns(e);let o;try{o=s(...r)}finally{ns(i),n._d&&Qr(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function wn(s,e){if(Ke===null)return s;const t=Cs(Ke),n=s.dirs||(s.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=De]=e[r];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Pt(o),n.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return s}function Vt(s,e,t,n){const r=s.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[n];l&&(Ht(),ct(l,t,8,[s.el,a,s,e]),Gt())}}function lo(s,e){s.shapeFlag&6&&s.component?lo(s.component.subTree,e):s.shapeFlag&128?(s.ssContent.transition=e.clone(s.ssContent),s.ssFallback.transition=e.clone(s.ssFallback)):s.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wt(s,e){return he(s)?(()=>Ye({name:s.name},e,{setup:s}))():s}const kn=s=>!!s.type.__asyncLoader,co=s=>s.type.__isKeepAlive;function wl(s,e){uo(s,"a",e)}function kl(s,e){uo(s,"da",e)}function uo(s,e,t=We){const n=s.__wdc||(s.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return s()});if(Es(e,n,t),t){let r=t.parent;for(;r&&r.parent;)co(r.parent.vnode)&&Al(n,e,t,r),r=r.parent}}function Al(s,e,t,n){const r=Es(e,s,n,!0);ho(()=>{cr(n[e],r)},t)}function Es(s,e,t=We,n=!1){if(t){const r=t[s]||(t[s]=[]),i=e.__weh||(e.__weh=(...o)=>{Ht();const a=Dn(t),l=ct(e,t,s,o);return a(),Gt(),l});return n?r.unshift(i):r.push(i),i}}const kt=s=>(e,t=We)=>{(!As||s==="sp")&&Es(s,(...n)=>e(...n),t)},Cl=kt("bm"),Rl=kt("m"),xl=kt("bu"),Nl=kt("u"),Il=kt("bum"),ho=kt("um"),Ll=kt("sp"),Ol=kt("rtg"),Pl=kt("rtc");function Fl(s,e=We){Es("ec",s,e)}const fo="components";function at(s,e){return Ml(fo,s,!0,e)||s}const Dl=Symbol.for("v-ndc");function Ml(s,e,t=!0,n=!1){const r=Ke||We;if(r){const i=r.type;if(s===fo){const a=xc(i,!1);if(a&&(a===e||a===ut(e)||a===gs(ut(e))))return i}const o=Kr(r[s]||i[s],e)||Kr(r.appContext[s],e);return!o&&n?i:o}}function Kr(s,e){return s&&(s[e]||s[ut(e)]||s[gs(ut(e))])}function yr(s,e,t,n){let r;const i=t&&t[n];if(le(s)||$e(s)){r=new Array(s.length);for(let o=0,a=s.length;o<a;o++)r[o]=e(s[o],o,void 0,i&&i[o])}else if(typeof s=="number"){r=new Array(s);for(let o=0;o<s;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Me(s))if(s[Symbol.iterator])r=Array.from(s,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(s);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];r[a]=e(s[u],u,a,i&&i[a])}}else r=[];return t&&(t[n]=r),r}function zl(s,e,t={},n,r){if(Ke.isCE||Ke.parent&&kn(Ke.parent)&&Ke.parent.isCE)return e!=="default"&&(t.name=e),me("slot",t,n&&n());let i=s[e];i&&i._c&&(i._d=!1),Se();const o=i&&po(i(t)),a=wr(qe,{key:(t.key||o&&o.key||`_${e}`)+(!o&&n?"_fb":"")},o||(n?n():[]),o&&s._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function po(s){return s.some(e=>rs(e)?!(e.type===Bt||e.type===qe&&!po(e.children)):!0)?s:null}const Ys=s=>s?Po(s)?Cs(s):Ys(s.parent):null,An=Ye(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Ys(s.parent),$root:s=>Ys(s.root),$emit:s=>s.emit,$options:s=>vr(s),$forceUpdate:s=>s.f||(s.f=()=>{s.effect.dirty=!0,Tr(s.update)}),$nextTick:s=>s.n||(s.n=ro.bind(s.proxy)),$watch:s=>cc.bind(s)}),Os=(s,e)=>s!==De&&!s.__isScriptSetup&&ye(s,e),jl={get({_:s},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:i,accessCache:o,type:a,appContext:l}=s;let u;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(Os(n,e))return o[e]=1,n[e];if(r!==De&&ye(r,e))return o[e]=2,r[e];if((u=s.propsOptions[0])&&ye(u,e))return o[e]=3,i[e];if(t!==De&&ye(t,e))return o[e]=4,t[e];Xs&&(o[e]=0)}}const f=An[e];let h,m;if(f)return e==="$attrs"&&et(s.attrs,"get",""),f(s);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==De&&ye(t,e))return o[e]=4,t[e];if(m=l.config.globalProperties,ye(m,e))return m[e]},set({_:s},e,t){const{data:n,setupState:r,ctx:i}=s;return Os(r,e)?(r[e]=t,!0):n!==De&&ye(n,e)?(n[e]=t,!0):ye(s.props,e)||e[0]==="$"&&e.slice(1)in s?!1:(i[e]=t,!0)},has({_:{data:s,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:i}},o){let a;return!!t[o]||s!==De&&ye(s,o)||Os(e,o)||(a=i[0])&&ye(a,o)||ye(n,o)||ye(An,o)||ye(r.config.globalProperties,o)},defineProperty(s,e,t){return t.get!=null?s._.accessCache[e]=0:ye(t,"value")&&this.set(s,e,t.value,null),Reflect.defineProperty(s,e,t)}};function Wr(s){return le(s)?s.reduce((e,t)=>(e[t]=null,e),{}):s}let Xs=!0;function Bl(s){const e=vr(s),t=s.proxy,n=s.ctx;Xs=!1,e.beforeCreate&&Vr(e.beforeCreate,s,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:f,beforeMount:h,mounted:m,beforeUpdate:d,updated:b,activated:p,deactivated:T,beforeDestroy:_,beforeUnmount:g,destroyed:y,unmounted:k,render:w,renderTracked:N,renderTriggered:F,errorCaptured:M,serverPrefetch:P,expose:H,inheritAttrs:X,components:I,directives:G,filters:S}=e;if(u&&Ul(u,n,null),o)for(const K in o){const ee=o[K];he(ee)&&(n[K]=ee.bind(t))}if(r){const K=r.call(t,t);Me(K)&&(s.data=bs(K))}if(Xs=!0,i)for(const K in i){const ee=i[K],q=he(ee)?ee.bind(t,t):he(ee.get)?ee.get.bind(t,t):rt,oe=!he(ee)&&he(ee.set)?ee.set.bind(t):rt,U=St({get:q,set:oe});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>U.value,set:j=>U.value=j})}if(a)for(const K in a)mo(a[K],n,t,K);if(l){const K=he(l)?l.call(t):l;Reflect.ownKeys(K).forEach(ee=>{Vl(ee,K[ee])})}f&&Vr(f,s,"c");function se(K,ee){le(ee)?ee.forEach(q=>K(q.bind(t))):ee&&K(ee.bind(t))}if(se(Cl,h),se(Rl,m),se(xl,d),se(Nl,b),se(wl,p),se(kl,T),se(Fl,M),se(Pl,N),se(Ol,F),se(Il,g),se(ho,k),se(Ll,P),le(H))if(H.length){const K=s.exposed||(s.exposed={});H.forEach(ee=>{Object.defineProperty(K,ee,{get:()=>t[ee],set:q=>t[ee]=q})})}else s.exposed||(s.exposed={});w&&s.render===rt&&(s.render=w),X!=null&&(s.inheritAttrs=X),I&&(s.components=I),G&&(s.directives=G)}function Ul(s,e,t=rt){le(s)&&(s=Js(s));for(const n in s){const r=s[n];let i;Me(r)?"default"in r?i=Cn(r.from||n,r.default,!0):i=Cn(r.from||n):i=Cn(r),He(i)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[n]=i}}function Vr(s,e,t){ct(le(s)?s.map(n=>n.bind(e.proxy)):s.bind(e.proxy),e,t)}function mo(s,e,t,n){const r=n.includes(".")?xo(t,n):()=>t[n];if($e(s)){const i=e[s];he(i)&&Xn(r,i)}else if(he(s))Xn(r,s.bind(t));else if(Me(s))if(le(s))s.forEach(i=>mo(i,e,t,n));else{const i=he(s.handler)?s.handler.bind(t):e[s.handler];he(i)&&Xn(r,i,s)}}function vr(s){const e=s.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=s.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(u=>ss(l,u,o,!0)),ss(l,e,o)),Me(e)&&i.set(e,l),l}function ss(s,e,t,n=!1){const{mixins:r,extends:i}=e;i&&ss(s,i,t,!0),r&&r.forEach(o=>ss(s,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=$l[o]||t&&t[o];s[o]=a?a(s[o],e[o]):e[o]}return s}const $l={data:qr,props:Zr,emits:Zr,methods:vn,computed:vn,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:vn,directives:vn,watch:Gl,provide:qr,inject:Hl};function qr(s,e){return e?s?function(){return Ye(he(s)?s.call(this,this):s,he(e)?e.call(this,this):e)}:e:s}function Hl(s,e){return vn(Js(s),Js(e))}function Js(s){if(le(s)){const e={};for(let t=0;t<s.length;t++)e[s[t]]=s[t];return e}return s}function Je(s,e){return s?[...new Set([].concat(s,e))]:e}function vn(s,e){return s?Ye(Object.create(null),s,e):e}function Zr(s,e){return s?le(s)&&le(e)?[...new Set([...s,...e])]:Ye(Object.create(null),Wr(s),Wr(e??{})):e}function Gl(s,e){if(!s)return e;if(!e)return s;const t=Ye(Object.create(null),s);for(const n in e)t[n]=Je(s[n],e[n]);return t}function go(){return{app:null,config:{isNativeTag:Ia,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kl=0;function Wl(s,e){return function(n,r=null){he(n)||(n=Ye({},n)),r!=null&&!Me(r)&&(r=null);const i=go(),o=new WeakSet;let a=!1;const l=i.app={_uid:Kl++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ic,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&he(u.install)?(o.add(u),u.install(l,...f)):he(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!a){const m=me(n,r);return m.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(m,u):s(m,u,h),a=!0,l._container=u,u.__vue_app__=l,Cs(m.component)}},unmount(){a&&(s(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Qt;Qt=l;try{return u()}finally{Qt=f}}};return l}}let Qt=null;function Vl(s,e){if(We){let t=We.provides;const n=We.parent&&We.parent.provides;n===t&&(t=We.provides=Object.create(n)),t[s]=e}}function Cn(s,e,t=!1){const n=We||Ke;if(n||Qt){const r=Qt?Qt._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&s in r)return r[s];if(arguments.length>1)return t&&he(e)?e.call(n&&n.proxy):e}}function ql(){return!!(We||Ke||Qt)}const _o={},bo=()=>Object.create(_o),So=s=>Object.getPrototypeOf(s)===_o;function Zl(s,e,t,n=!1){const r={},i=bo();s.propsDefaults=Object.create(null),To(s,e,r,i);for(const o in s.propsOptions[0])o in r||(r[o]=void 0);t?s.props=n?r:ul(r):s.type.props?s.props=r:s.props=i,s.attrs=i}function Yl(s,e,t,n){const{props:r,attrs:i,vnode:{patchFlag:o}}=s,a=we(r),[l]=s.propsOptions;let u=!1;if((n||o>0)&&!(o&16)){if(o&8){const f=s.vnode.dynamicProps;for(let h=0;h<f.length;h++){let m=f[h];if(ws(s.emitsOptions,m))continue;const d=e[m];if(l)if(ye(i,m))d!==i[m]&&(i[m]=d,u=!0);else{const b=ut(m);r[b]=Qs(l,a,b,d,s,!1)}else d!==i[m]&&(i[m]=d,u=!0)}}}else{To(s,e,r,i)&&(u=!0);let f;for(const h in a)(!e||!ye(e,h)&&((f=nn(h))===h||!ye(e,f)))&&(l?t&&(t[h]!==void 0||t[f]!==void 0)&&(r[h]=Qs(l,a,h,void 0,s,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ye(e,h))&&(delete i[h],u=!0)}u&&vt(s.attrs,"set","")}function To(s,e,t,n){const[r,i]=s.propsOptions;let o=!1,a;if(e)for(let l in e){if(En(l))continue;const u=e[l];let f;r&&ye(r,f=ut(l))?!i||!i.includes(f)?t[f]=u:(a||(a={}))[f]=u:ws(s.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,o=!0)}if(i){const l=we(t),u=a||De;for(let f=0;f<i.length;f++){const h=i[f];t[h]=Qs(r,l,h,u[h],s,!ye(u,h))}}return o}function Qs(s,e,t,n,r,i){const o=s[t];if(o!=null){const a=ye(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:u}=r;if(t in u)n=u[t];else{const f=Dn(r);n=u[t]=l.call(null,e),f()}}else n=l}o[0]&&(i&&!a?n=!1:o[1]&&(n===""||n===nn(t))&&(n=!0))}return n}const Xl=new WeakMap;function yo(s,e,t=!1){const n=t?Xl:e.propsCache,r=n.get(s);if(r)return r;const i=s.props,o={},a=[];let l=!1;if(!he(s)){const f=h=>{l=!0;const[m,d]=yo(h,e,!0);Ye(o,m),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(f),s.extends&&f(s.extends),s.mixins&&s.mixins.forEach(f)}if(!i&&!l)return Me(s)&&n.set(s,hn),hn;if(le(i))for(let f=0;f<i.length;f++){const h=ut(i[f]);Yr(h)&&(o[h]=De)}else if(i)for(const f in i){const h=ut(f);if(Yr(h)){const m=i[f],d=o[h]=le(m)||he(m)?{type:m}:Ye({},m),b=d.type;let p=!1,T=!0;if(le(b))for(let _=0;_<b.length;++_){const g=b[_],y=he(g)&&g.name;if(y==="Boolean"){p=!0;break}else y==="String"&&(T=!1)}else p=he(b)&&b.name==="Boolean";d[0]=p,d[1]=T,(p||ye(d,"default"))&&a.push(h)}}const u=[o,a];return Me(s)&&n.set(s,u),u}function Yr(s){return s[0]!=="$"&&!En(s)}const vo=s=>s[0]==="_"||s==="$stable",Er=s=>le(s)?s.map(pt):[pt(s)],Jl=(s,e,t)=>{if(e._n)return e;const n=Rt((...r)=>Er(e(...r)),t);return n._c=!1,n},Eo=(s,e,t)=>{const n=s._ctx;for(const r in s){if(vo(r))continue;const i=s[r];if(he(i))e[r]=Jl(r,i,n);else if(i!=null){const o=Er(i);e[r]=()=>o}}},wo=(s,e)=>{const t=Er(e);s.slots.default=()=>t},ko=(s,e,t)=>{for(const n in e)(t||n!=="_")&&(s[n]=e[n])},Ql=(s,e,t)=>{const n=s.slots=bo();if(s.vnode.shapeFlag&32){const r=e._;r?(ko(n,e,t),t&&Li(n,"_",r,!0)):Eo(e,n)}else e&&wo(s,e)},ec=(s,e,t)=>{const{vnode:n,slots:r}=s;let i=!0,o=De;if(n.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:ko(r,e,t):(i=!e.$stable,Eo(e,r)),o=e}else e&&(wo(s,e),o={default:1});if(i)for(const a in r)!vo(a)&&o[a]==null&&delete r[a]};function er(s,e,t,n,r=!1){if(le(s)){s.forEach((m,d)=>er(m,e&&(le(e)?e[d]:e),t,n,r));return}if(kn(n)&&!r)return;const i=n.shapeFlag&4?Cs(n.component):n.el,o=r?null:i,{i:a,r:l}=s,u=e&&e.r,f=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&($e(u)?(f[u]=null,ye(h,u)&&(h[u]=null)):He(u)&&(u.value=null)),he(l))Dt(l,a,12,[o,f]);else{const m=$e(l),d=He(l);if(m||d){const b=()=>{if(s.f){const p=m?ye(h,l)?h[l]:f[l]:l.value;r?le(p)&&cr(p,i):le(p)?p.includes(i)||p.push(i):m?(f[l]=[i],ye(h,l)&&(h[l]=f[l])):(l.value=[i],s.k&&(f[s.k]=l.value))}else m?(f[l]=o,ye(h,l)&&(h[l]=o)):d&&(l.value=o,s.k&&(f[s.k]=o))};o?(b.id=-1,Qe(b,t)):b()}}}const tc=Symbol("_vte"),nc=s=>s.__isTeleport,Qe=_c;function sc(s){return rc(s)}function rc(s,e){const t=Oi();t.__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:f,parentNode:h,nextSibling:m,setScopeId:d=rt,insertStaticContent:b}=s,p=(x,c,R,O=null,E=null,v=null,A=void 0,D=null,z=!!c.dynamicChildren)=>{if(x===c)return;x&&!Tn(x,c)&&(O=Ie(x),j(x,E,v,!0),x=null),c.patchFlag===-2&&(z=!1,c.dynamicChildren=null);const{type:C,ref:B,shapeFlag:W}=c;switch(C){case ks:T(x,c,R,O);break;case Bt:_(x,c,R,O);break;case Jn:x==null&&g(c,R,O,A);break;case qe:I(x,c,R,O,E,v,A,D,z);break;default:W&1?w(x,c,R,O,E,v,A,D,z):W&6?G(x,c,R,O,E,v,A,D,z):(W&64||W&128)&&C.process(x,c,R,O,E,v,A,D,z,Re)}B!=null&&E&&er(B,x&&x.ref,v,c||x,!c)},T=(x,c,R,O)=>{if(x==null)n(c.el=a(c.children),R,O);else{const E=c.el=x.el;c.children!==x.children&&u(E,c.children)}},_=(x,c,R,O)=>{x==null?n(c.el=l(c.children||""),R,O):c.el=x.el},g=(x,c,R,O)=>{[x.el,x.anchor]=b(x.children,c,R,O,x.el,x.anchor)},y=({el:x,anchor:c},R,O)=>{let E;for(;x&&x!==c;)E=m(x),n(x,R,O),x=E;n(c,R,O)},k=({el:x,anchor:c})=>{let R;for(;x&&x!==c;)R=m(x),r(x),x=R;r(c)},w=(x,c,R,O,E,v,A,D,z)=>{c.type==="svg"?A="svg":c.type==="math"&&(A="mathml"),x==null?N(c,R,O,E,v,A,D,z):P(x,c,E,v,A,D,z)},N=(x,c,R,O,E,v,A,D)=>{let z,C;const{props:B,shapeFlag:W,transition:$,dirs:Y}=x;if(z=x.el=o(x.type,v,B&&B.is,B),W&8?f(z,x.children):W&16&&M(x.children,z,null,O,E,Ps(x,v),A,D),Y&&Vt(x,null,O,"created"),F(z,x,x.scopeId,A,O),B){for(const ie in B)ie!=="value"&&!En(ie)&&i(z,ie,null,B[ie],v,O);"value"in B&&i(z,"value",null,B.value,v),(C=B.onVnodeBeforeMount)&&dt(C,O,x)}Y&&Vt(x,null,O,"beforeMount");const re=ic(E,$);re&&$.beforeEnter(z),n(z,c,R),((C=B&&B.onVnodeMounted)||re||Y)&&Qe(()=>{C&&dt(C,O,x),re&&$.enter(z),Y&&Vt(x,null,O,"mounted")},E)},F=(x,c,R,O,E)=>{if(R&&d(x,R),O)for(let v=0;v<O.length;v++)d(x,O[v]);if(E){let v=E.subTree;if(c===v){const A=E.vnode;F(x,A,A.scopeId,A.slotScopeIds,E.parent)}}},M=(x,c,R,O,E,v,A,D,z=0)=>{for(let C=z;C<x.length;C++){const B=x[C]=D?Lt(x[C]):pt(x[C]);p(null,B,c,R,O,E,v,A,D)}},P=(x,c,R,O,E,v,A)=>{const D=c.el=x.el;let{patchFlag:z,dynamicChildren:C,dirs:B}=c;z|=x.patchFlag&16;const W=x.props||De,$=c.props||De;let Y;if(R&&qt(R,!1),(Y=$.onVnodeBeforeUpdate)&&dt(Y,R,c,x),B&&Vt(c,x,R,"beforeUpdate"),R&&qt(R,!0),(W.innerHTML&&$.innerHTML==null||W.textContent&&$.textContent==null)&&f(D,""),C?H(x.dynamicChildren,C,D,R,O,Ps(c,E),v):A||ee(x,c,D,null,R,O,Ps(c,E),v,!1),z>0){if(z&16)X(D,W,$,R,E);else if(z&2&&W.class!==$.class&&i(D,"class",null,$.class,E),z&4&&i(D,"style",W.style,$.style,E),z&8){const re=c.dynamicProps;for(let ie=0;ie<re.length;ie++){const ue=re[ie],Oe=W[ue],je=$[ue];(je!==Oe||ue==="value")&&i(D,ue,Oe,je,E,R)}}z&1&&x.children!==c.children&&f(D,c.children)}else!A&&C==null&&X(D,W,$,R,E);((Y=$.onVnodeUpdated)||B)&&Qe(()=>{Y&&dt(Y,R,c,x),B&&Vt(c,x,R,"updated")},O)},H=(x,c,R,O,E,v,A)=>{for(let D=0;D<c.length;D++){const z=x[D],C=c[D],B=z.el&&(z.type===qe||!Tn(z,C)||z.shapeFlag&70)?h(z.el):R;p(z,C,B,null,O,E,v,A,!0)}},X=(x,c,R,O,E)=>{if(c!==R){if(c!==De)for(const v in c)!En(v)&&!(v in R)&&i(x,v,c[v],null,E,O);for(const v in R){if(En(v))continue;const A=R[v],D=c[v];A!==D&&v!=="value"&&i(x,v,D,A,E,O)}"value"in R&&i(x,"value",c.value,R.value,E)}},I=(x,c,R,O,E,v,A,D,z)=>{const C=c.el=x?x.el:a(""),B=c.anchor=x?x.anchor:a("");let{patchFlag:W,dynamicChildren:$,slotScopeIds:Y}=c;Y&&(D=D?D.concat(Y):Y),x==null?(n(C,R,O),n(B,R,O),M(c.children||[],R,B,E,v,A,D,z)):W>0&&W&64&&$&&x.dynamicChildren?(H(x.dynamicChildren,$,R,E,v,A,D),(c.key!=null||E&&c===E.subTree)&&Ao(x,c,!0)):ee(x,c,R,B,E,v,A,D,z)},G=(x,c,R,O,E,v,A,D,z)=>{c.slotScopeIds=D,x==null?c.shapeFlag&512?E.ctx.activate(c,R,O,A,z):S(c,R,O,E,v,A,z):V(x,c,z)},S=(x,c,R,O,E,v,A)=>{const D=x.component=wc(x,O,E);if(co(x)&&(D.ctx.renderer=Re),kc(D,!1,A),D.asyncDep){if(E&&E.registerDep(D,se,A),!x.el){const z=D.subTree=me(Bt);_(null,z,c,R)}}else se(D,x,c,R,E,v,A)},V=(x,c,R)=>{const O=c.component=x.component;if(pc(x,c,R))if(O.asyncDep&&!O.asyncResolved){K(O,c,R);return}else O.next=c,yl(O.update),O.effect.dirty=!0,O.update();else c.el=x.el,O.vnode=c},se=(x,c,R,O,E,v,A)=>{const D=()=>{if(x.isMounted){let{next:B,bu:W,u:$,parent:Y,vnode:re}=x;{const ot=Co(x);if(ot){B&&(B.el=re.el,K(x,B,A)),ot.asyncDep.then(()=>{x.isUnmounted||D()});return}}let ie=B,ue;qt(x,!1),B?(B.el=re.el,K(x,B,A)):B=re,W&&Zn(W),(ue=B.props&&B.props.onVnodeBeforeUpdate)&&dt(ue,Y,B,re),qt(x,!0);const Oe=Fs(x),je=x.subTree;x.subTree=Oe,p(je,Oe,h(je.el),Ie(je),x,E,v),B.el=Oe.el,ie===null&&mc(x,Oe.el),$&&Qe($,E),(ue=B.props&&B.props.onVnodeUpdated)&&Qe(()=>dt(ue,Y,B,re),E)}else{let B;const{el:W,props:$}=c,{bm:Y,m:re,parent:ie}=x,ue=kn(c);if(qt(x,!1),Y&&Zn(Y),!ue&&(B=$&&$.onVnodeBeforeMount)&&dt(B,ie,c),qt(x,!0),W&&Ve){const Oe=()=>{x.subTree=Fs(x),Ve(W,x.subTree,x,E,null)};ue?c.type.__asyncLoader().then(()=>!x.isUnmounted&&Oe()):Oe()}else{const Oe=x.subTree=Fs(x);p(null,Oe,R,O,x,E,v),c.el=Oe.el}if(re&&Qe(re,E),!ue&&(B=$&&$.onVnodeMounted)){const Oe=c;Qe(()=>dt(B,ie,Oe),E)}(c.shapeFlag&256||ie&&kn(ie.vnode)&&ie.vnode.shapeFlag&256)&&x.a&&Qe(x.a,E),x.isMounted=!0,c=R=O=null}},z=x.effect=new hr(D,rt,()=>Tr(C),x.scope),C=x.update=()=>{z.dirty&&z.run()};C.i=x,C.id=x.uid,qt(x,!0),C()},K=(x,c,R)=>{c.component=x;const O=x.vnode.props;x.vnode=c,x.next=null,Yl(x,c.props,O,R),ec(x,c.children,R),Ht(),Gr(x),Gt()},ee=(x,c,R,O,E,v,A,D,z=!1)=>{const C=x&&x.children,B=x?x.shapeFlag:0,W=c.children,{patchFlag:$,shapeFlag:Y}=c;if($>0){if($&128){oe(C,W,R,O,E,v,A,D,z);return}else if($&256){q(C,W,R,O,E,v,A,D,z);return}}Y&8?(B&16&&ve(C,E,v),W!==C&&f(R,W)):B&16?Y&16?oe(C,W,R,O,E,v,A,D,z):ve(C,E,v,!0):(B&8&&f(R,""),Y&16&&M(W,R,O,E,v,A,D,z))},q=(x,c,R,O,E,v,A,D,z)=>{x=x||hn,c=c||hn;const C=x.length,B=c.length,W=Math.min(C,B);let $;for($=0;$<W;$++){const Y=c[$]=z?Lt(c[$]):pt(c[$]);p(x[$],Y,R,null,E,v,A,D,z)}C>B?ve(x,E,v,!0,!1,W):M(c,R,O,E,v,A,D,z,W)},oe=(x,c,R,O,E,v,A,D,z)=>{let C=0;const B=c.length;let W=x.length-1,$=B-1;for(;C<=W&&C<=$;){const Y=x[C],re=c[C]=z?Lt(c[C]):pt(c[C]);if(Tn(Y,re))p(Y,re,R,null,E,v,A,D,z);else break;C++}for(;C<=W&&C<=$;){const Y=x[W],re=c[$]=z?Lt(c[$]):pt(c[$]);if(Tn(Y,re))p(Y,re,R,null,E,v,A,D,z);else break;W--,$--}if(C>W){if(C<=$){const Y=$+1,re=Y<B?c[Y].el:O;for(;C<=$;)p(null,c[C]=z?Lt(c[C]):pt(c[C]),R,re,E,v,A,D,z),C++}}else if(C>$)for(;C<=W;)j(x[C],E,v,!0),C++;else{const Y=C,re=C,ie=new Map;for(C=re;C<=$;C++){const ze=c[C]=z?Lt(c[C]):pt(c[C]);ze.key!=null&&ie.set(ze.key,C)}let ue,Oe=0;const je=$-re+1;let ot=!1,Pe=0;const ht=new Array(je);for(C=0;C<je;C++)ht[C]=0;for(C=Y;C<=W;C++){const ze=x[C];if(Oe>=je){j(ze,E,v,!0);continue}let tt;if(ze.key!=null)tt=ie.get(ze.key);else for(ue=re;ue<=$;ue++)if(ht[ue-re]===0&&Tn(ze,c[ue])){tt=ue;break}tt===void 0?j(ze,E,v,!0):(ht[tt-re]=C+1,tt>=Pe?Pe=tt:ot=!0,p(ze,c[tt],R,null,E,v,A,D,z),Oe++)}const an=ot?oc(ht):hn;for(ue=an.length-1,C=je-1;C>=0;C--){const ze=re+C,tt=c[ze],zn=ze+1<B?c[ze+1].el:O;ht[C]===0?p(null,tt,R,zn,E,v,A,D,z):ot&&(ue<0||C!==an[ue]?U(tt,R,zn,2):ue--)}}},U=(x,c,R,O,E=null)=>{const{el:v,type:A,transition:D,children:z,shapeFlag:C}=x;if(C&6){U(x.component.subTree,c,R,O);return}if(C&128){x.suspense.move(c,R,O);return}if(C&64){A.move(x,c,R,Re);return}if(A===qe){n(v,c,R);for(let W=0;W<z.length;W++)U(z[W],c,R,O);n(x.anchor,c,R);return}if(A===Jn){y(x,c,R);return}if(O!==2&&C&1&&D)if(O===0)D.beforeEnter(v),n(v,c,R),Qe(()=>D.enter(v),E);else{const{leave:W,delayLeave:$,afterLeave:Y}=D,re=()=>n(v,c,R),ie=()=>{W(v,()=>{re(),Y&&Y()})};$?$(v,re,ie):ie()}else n(v,c,R)},j=(x,c,R,O=!1,E=!1)=>{const{type:v,props:A,ref:D,children:z,dynamicChildren:C,shapeFlag:B,patchFlag:W,dirs:$,cacheIndex:Y}=x;if(W===-2&&(E=!1),D!=null&&er(D,null,R,x,!0),Y!=null&&(c.renderCache[Y]=void 0),B&256){c.ctx.deactivate(x);return}const re=B&1&&$,ie=!kn(x);let ue;if(ie&&(ue=A&&A.onVnodeBeforeUnmount)&&dt(ue,c,x),B&6)J(x.component,R,O);else{if(B&128){x.suspense.unmount(R,O);return}re&&Vt(x,null,c,"beforeUnmount"),B&64?x.type.remove(x,c,R,Re,O):C&&!C.hasOnce&&(v!==qe||W>0&&W&64)?ve(C,c,R,!1,!0):(v===qe&&W&384||!E&&B&16)&&ve(z,c,R),O&&ae(x)}(ie&&(ue=A&&A.onVnodeUnmounted)||re)&&Qe(()=>{ue&&dt(ue,c,x),re&&Vt(x,null,c,"unmounted")},R)},ae=x=>{const{type:c,el:R,anchor:O,transition:E}=x;if(c===qe){ne(R,O);return}if(c===Jn){k(x);return}const v=()=>{r(R),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(x.shapeFlag&1&&E&&!E.persisted){const{leave:A,delayLeave:D}=E,z=()=>A(R,v);D?D(x.el,v,z):z()}else v()},ne=(x,c)=>{let R;for(;x!==c;)R=m(x),r(x),x=R;r(c)},J=(x,c,R)=>{const{bum:O,scope:E,update:v,subTree:A,um:D,m:z,a:C}=x;Xr(z),Xr(C),O&&Zn(O),E.stop(),v&&(v.active=!1,j(A,x,c,R)),D&&Qe(D,c),Qe(()=>{x.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},ve=(x,c,R,O=!1,E=!1,v=0)=>{for(let A=v;A<x.length;A++)j(x[A],c,R,O,E)},Ie=x=>{if(x.shapeFlag&6)return Ie(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const c=m(x.anchor||x.el),R=c&&c[tc];return R?m(R):c};let de=!1;const _e=(x,c,R)=>{x==null?c._vnode&&j(c._vnode,null,null,!0):p(c._vnode||null,x,c,null,null,null,R),c._vnode=x,de||(de=!0,Gr(),oo(),de=!1)},Re={p,um:j,m:U,r:ae,mt:S,mc:M,pc:ee,pbc:H,n:Ie,o:s};let Ae,Ve;return e&&([Ae,Ve]=e(Re)),{render:_e,hydrate:Ae,createApp:Wl(_e,Ae)}}function Ps({type:s,props:e},t){return t==="svg"&&s==="foreignObject"||t==="mathml"&&s==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qt({effect:s,update:e},t){s.allowRecurse=e.allowRecurse=t}function ic(s,e){return(!s||s&&!s.pendingBranch)&&e&&!e.persisted}function Ao(s,e,t=!1){const n=s.children,r=e.children;if(le(n)&&le(r))for(let i=0;i<n.length;i++){const o=n[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Lt(r[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Ao(o,a)),a.type===ks&&(a.el=o.el)}}function oc(s){const e=s.slice(),t=[0];let n,r,i,o,a;const l=s.length;for(n=0;n<l;n++){const u=s[n];if(u!==0){if(r=t[t.length-1],s[r]<u){e[n]=r,t.push(n);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,s[t[a]]<u?i=a+1:o=a;u<s[t[i]]&&(i>0&&(e[n]=t[i-1]),t[i]=n)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function Co(s){const e=s.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Co(e)}function Xr(s){if(s)for(let e=0;e<s.length;e++)s[e].active=!1}const ac=Symbol.for("v-scx"),lc=()=>Cn(ac),Kn={};function Xn(s,e,t){return Ro(s,e,t)}function Ro(s,e,{immediate:t,deep:n,flush:r,once:i,onTrack:o,onTrigger:a}=De){if(e&&i){const N=e;e=(...F)=>{N(...F),w()}}const l=We,u=N=>n===!0?N:Pt(N,n===!1?1:void 0);let f,h=!1,m=!1;if(He(s)?(f=()=>s.value,h=pn(s)):Jt(s)?(f=()=>u(s),h=!0):le(s)?(m=!0,h=s.some(N=>Jt(N)||pn(N)),f=()=>s.map(N=>{if(He(N))return N.value;if(Jt(N))return u(N);if(he(N))return Dt(N,l,2)})):he(s)?e?f=()=>Dt(s,l,2):f=()=>(d&&d(),ct(s,l,3,[b])):f=rt,e&&n){const N=f;f=()=>Pt(N())}let d,b=N=>{d=y.onStop=()=>{Dt(N,l,4),d=y.onStop=void 0}},p;if(As)if(b=rt,e?t&&ct(e,l,3,[f(),m?[]:void 0,b]):f(),r==="sync"){const N=lc();p=N.__watcherHandles||(N.__watcherHandles=[])}else return rt;let T=m?new Array(s.length).fill(Kn):Kn;const _=()=>{if(!(!y.active||!y.dirty))if(e){const N=y.run();(n||h||(m?N.some((F,M)=>jt(F,T[M])):jt(N,T)))&&(d&&d(),ct(e,l,3,[N,T===Kn?void 0:m&&T[0]===Kn?[]:T,b]),T=N)}else y.run()};_.allowRecurse=!!e;let g;r==="sync"?g=_:r==="post"?g=()=>Qe(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),g=()=>Tr(_));const y=new hr(f,rt,g),k=ji(),w=()=>{y.stop(),k&&cr(k.effects,y)};return e?t?_():T=y.run():r==="post"?Qe(y.run.bind(y),l&&l.suspense):y.run(),p&&p.push(w),w}function cc(s,e,t){const n=this.proxy,r=$e(s)?s.includes(".")?xo(n,s):()=>n[s]:s.bind(n,n);let i;he(e)?i=e:(i=e.handler,t=e);const o=Dn(this),a=Ro(r,i.bind(n),t);return o(),a}function xo(s,e){const t=e.split(".");return()=>{let n=s;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Pt(s,e=1/0,t){if(e<=0||!Me(s)||s.__v_skip||(t=t||new Set,t.has(s)))return s;if(t.add(s),e--,He(s))Pt(s.value,e,t);else if(le(s))for(let n=0;n<s.length;n++)Pt(s[n],e,t);else if(Ri(s)||dn(s))s.forEach(n=>{Pt(n,e,t)});else if(Ii(s)){for(const n in s)Pt(s[n],e,t);for(const n of Object.getOwnPropertySymbols(s))Object.prototype.propertyIsEnumerable.call(s,n)&&Pt(s[n],e,t)}return s}const uc=(s,e)=>e==="modelValue"||e==="model-value"?s.modelModifiers:s[`${e}Modifiers`]||s[`${ut(e)}Modifiers`]||s[`${nn(e)}Modifiers`];function hc(s,e,...t){if(s.isUnmounted)return;const n=s.vnode.props||De;let r=t;const i=e.startsWith("update:"),o=i&&uc(n,e.slice(7));o&&(o.trim&&(r=t.map(f=>$e(f)?f.trim():f)),o.number&&(r=t.map(Ks)));let a,l=n[a=Is(e)]||n[a=Is(ut(e))];!l&&i&&(l=n[a=Is(nn(e))]),l&&ct(l,s,6,r);const u=n[a+"Once"];if(u){if(!s.emitted)s.emitted={};else if(s.emitted[a])return;s.emitted[a]=!0,ct(u,s,6,r)}}function No(s,e,t=!1){const n=e.emitsCache,r=n.get(s);if(r!==void 0)return r;const i=s.emits;let o={},a=!1;if(!he(s)){const l=u=>{const f=No(u,e,!0);f&&(a=!0,Ye(o,f))};!t&&e.mixins.length&&e.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!i&&!a?(Me(s)&&n.set(s,null),null):(le(i)?i.forEach(l=>o[l]=null):Ye(o,i),Me(s)&&n.set(s,o),o)}function ws(s,e){return!s||!fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(s,e[0].toLowerCase()+e.slice(1))||ye(s,nn(e))||ye(s,e))}function Fs(s){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:f,props:h,data:m,setupState:d,ctx:b,inheritAttrs:p}=s,T=ns(s);let _,g;try{if(t.shapeFlag&4){const k=r||n,w=k;_=pt(u.call(w,k,f,h,d,m,b)),g=a}else{const k=e;_=pt(k.length>1?k(h,{attrs:a,slots:o,emit:l}):k(h,null)),g=e.props?a:dc(a)}}catch(k){Rn.length=0,Ss(k,s,1),_=me(Bt)}let y=_;if(g&&p!==!1){const k=Object.keys(g),{shapeFlag:w}=y;k.length&&w&7&&(i&&k.some(lr)&&(g=fc(g,i)),y=mn(y,g,!1,!0))}return t.dirs&&(y=mn(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),_=y,ns(T),_}const dc=s=>{let e;for(const t in s)(t==="class"||t==="style"||fs(t))&&((e||(e={}))[t]=s[t]);return e},fc=(s,e)=>{const t={};for(const n in s)(!lr(n)||!(n.slice(9)in e))&&(t[n]=s[n]);return t};function pc(s,e,t){const{props:n,children:r,component:i}=s,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Jr(n,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const m=f[h];if(o[m]!==n[m]&&!ws(u,m))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Jr(n,o,u):!0:!!o;return!1}function Jr(s,e,t){const n=Object.keys(e);if(n.length!==Object.keys(s).length)return!0;for(let r=0;r<n.length;r++){const i=n[r];if(e[i]!==s[i]&&!ws(t,i))return!0}return!1}function mc({vnode:s,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===s&&(n.el=s.el),n===s)(s=e.vnode).el=t,e=e.parent;else break}}const gc=s=>s.__isSuspense;function _c(s,e){e&&e.pendingBranch?le(s)?e.effects.push(...s):e.effects.push(s):vl(s)}const qe=Symbol.for("v-fgt"),ks=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Jn=Symbol.for("v-stc"),Rn=[];let it=null;function Se(s=!1){Rn.push(it=s?null:[])}function bc(){Rn.pop(),it=Rn[Rn.length-1]||null}let Pn=1;function Qr(s){Pn+=s,s<0&&it&&(it.hasOnce=!0)}function Io(s){return s.dynamicChildren=Pn>0?it||hn:null,bc(),Pn>0&&it&&it.push(s),s}function Ee(s,e,t,n,r,i){return Io(te(s,e,t,n,r,i,!0))}function wr(s,e,t,n,r){return Io(me(s,e,t,n,r,!0))}function rs(s){return s?s.__v_isVNode===!0:!1}function Tn(s,e){return s.type===e.type&&s.key===e.key}const Lo=({key:s})=>s??null,Qn=({ref:s,ref_key:e,ref_for:t})=>(typeof s=="number"&&(s=""+s),s!=null?$e(s)||He(s)||he(s)?{i:Ke,r:s,k:e,f:!!t}:s:null);function te(s,e=null,t=null,n=0,r=null,i=s===qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:e,key:e&&Lo(e),ref:e&&Qn(e),scopeId:Ts,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ke};return a?(Ar(l,t),i&128&&s.normalize(l)):t&&(l.shapeFlag|=$e(t)?8:16),Pn>0&&!o&&it&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&it.push(l),l}const me=Sc;function Sc(s,e=null,t=null,n=0,r=null,i=!1){if((!s||s===Dl)&&(s=Bt),rs(s)){const a=mn(s,e,!0);return t&&Ar(a,t),Pn>0&&!i&&it&&(a.shapeFlag&6?it[it.indexOf(s)]=a:it.push(a)),a.patchFlag=-2,a}if(Nc(s)&&(s=s.__vccOpts),e){e=Tc(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=yt(a)),Me(l)&&(Ji(l)&&!le(l)&&(l=Ye({},l)),e.style=bn(l))}const o=$e(s)?1:gc(s)?128:nc(s)?64:Me(s)?4:he(s)?2:0;return te(s,e,t,n,r,o,i,!0)}function Tc(s){return s?Ji(s)||So(s)?Ye({},s):s:null}function mn(s,e,t=!1,n=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=s,u=e?yc(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:s.type,props:u,key:u&&Lo(u),ref:e&&e.ref?t&&i?le(i)?i.concat(Qn(e)):[i,Qn(e)]:Qn(e):i,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:a,target:s.target,targetStart:s.targetStart,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:e&&s.type!==qe?o===-1?16:o|16:o,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:l,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&mn(s.ssContent),ssFallback:s.ssFallback&&mn(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce};return l&&n&&lo(f,l.clone(f)),f}function Oo(s=" ",e=0){return me(ks,null,s,e)}function kr(s,e){const t=me(Jn,null,s);return t.staticCount=e,t}function Fn(s="",e=!1){return e?(Se(),wr(Bt,null,s)):me(Bt,null,s)}function pt(s){return s==null||typeof s=="boolean"?me(Bt):le(s)?me(qe,null,s.slice()):typeof s=="object"?Lt(s):me(ks,null,String(s))}function Lt(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:mn(s)}function Ar(s,e){let t=0;const{shapeFlag:n}=s;if(e==null)e=null;else if(le(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Ar(s,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!So(e)?e._ctx=Ke:r===3&&Ke&&(Ke.slots._===1?e._=1:(e._=2,s.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Ke},t=32):(e=String(e),n&64?(t=16,e=[Oo(e)]):t=8);s.children=e,s.shapeFlag|=t}function yc(...s){const e={};for(let t=0;t<s.length;t++){const n=s[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=yt([e.class,n.class]));else if(r==="style")e.style=bn([e.style,n.style]);else if(fs(r)){const i=e[r],o=n[r];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=n[r])}return e}function dt(s,e,t,n=null){ct(s,e,7,[t,n])}const vc=go();let Ec=0;function wc(s,e,t){const n=s.type,r=(e?e.appContext:s.appContext)||vc,i={uid:Ec++,vnode:s,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yo(n,r),emitsOptions:No(n,r),emit:null,emitted:null,propsDefaults:De,inheritAttrs:n.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hc.bind(null,i),s.ce&&s.ce(i),i}let We=null,is,tr;{const s=Oi(),e=(t,n)=>{let r;return(r=s[t])||(r=s[t]=[]),r.push(n),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};is=e("__VUE_INSTANCE_SETTERS__",t=>We=t),tr=e("__VUE_SSR_SETTERS__",t=>As=t)}const Dn=s=>{const e=We;return is(s),s.scope.on(),()=>{s.scope.off(),is(e)}},ei=()=>{We&&We.scope.off(),is(null)};function Po(s){return s.vnode.shapeFlag&4}let As=!1;function kc(s,e=!1,t=!1){e&&tr(e);const{props:n,children:r}=s.vnode,i=Po(s);Zl(s,n,i,e),Ql(s,r,t);const o=i?Ac(s,e):void 0;return e&&tr(!1),o}function Ac(s,e){const t=s.type;s.accessCache=Object.create(null),s.proxy=new Proxy(s.ctx,jl);const{setup:n}=t;if(n){const r=s.setupContext=n.length>1?Rc(s):null,i=Dn(s);Ht();const o=Dt(n,s,0,[s.props,r]);if(Gt(),i(),xi(o)){if(o.then(ei,ei),e)return o.then(a=>{ti(s,a,e)}).catch(a=>{Ss(a,s,0)});s.asyncDep=o}else ti(s,o,e)}else Fo(s,e)}function ti(s,e,t){he(e)?s.type.__ssrInlineRender?s.ssrRender=e:s.render=e:Me(e)&&(s.setupState=no(e)),Fo(s,t)}let ni;function Fo(s,e,t){const n=s.type;if(!s.render){if(!e&&ni&&!n.render){const r=n.template||vr(s).template;if(r){const{isCustomElement:i,compilerOptions:o}=s.appContext.config,{delimiters:a,compilerOptions:l}=n,u=Ye(Ye({isCustomElement:i,delimiters:a},o),l);n.render=ni(r,u)}}s.render=n.render||rt}{const r=Dn(s);Ht();try{Bl(s)}finally{Gt(),r()}}}const Cc={get(s,e){return et(s,"get",""),s[e]}};function Rc(s){const e=t=>{s.exposed=t||{}};return{attrs:new Proxy(s.attrs,Cc),slots:s.slots,emit:s.emit,expose:e}}function Cs(s){return s.exposed?s.exposeProxy||(s.exposeProxy=new Proxy(no(_r(s.exposed)),{get(e,t){if(t in e)return e[t];if(t in An)return An[t](s)},has(e,t){return t in e||t in An}})):s.proxy}function xc(s,e=!0){return he(s)?s.displayName||s.name:s.name||e&&s.__name}function Nc(s){return he(s)&&"__vccOpts"in s}const St=(s,e)=>hl(s,e,As);function xt(s,e,t){const n=arguments.length;return n===2?Me(e)&&!le(e)?rs(e)?me(s,null,[e]):me(s,e):me(s,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&rs(t)&&(t=[t]),me(s,e,t))}const Ic="3.4.37";/**
* @vue/runtime-dom v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Lc="http://www.w3.org/2000/svg",Oc="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,si=Tt&&Tt.createElement("template"),Pc={insert:(s,e,t)=>{e.insertBefore(s,t||null)},remove:s=>{const e=s.parentNode;e&&e.removeChild(s)},createElement:(s,e,t,n)=>{const r=e==="svg"?Tt.createElementNS(Lc,s):e==="mathml"?Tt.createElementNS(Oc,s):t?Tt.createElement(s,{is:t}):Tt.createElement(s);return s==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:s=>Tt.createTextNode(s),createComment:s=>Tt.createComment(s),setText:(s,e)=>{s.nodeValue=e},setElementText:(s,e)=>{s.textContent=e},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Tt.querySelector(s),setScopeId(s,e){s.setAttribute(e,"")},insertStaticContent(s,e,t,n,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{si.innerHTML=n==="svg"?`<svg>${s}</svg>`:n==="mathml"?`<math>${s}</math>`:s;const a=si.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Fc=Symbol("_vtc");function Dc(s,e,t){const n=s[Fc];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?s.removeAttribute("class"):t?s.setAttribute("class",e):s.className=e}const os=Symbol("_vod"),Do=Symbol("_vsh"),Ds={beforeMount(s,{value:e},{transition:t}){s[os]=s.style.display==="none"?"":s.style.display,t&&e?t.beforeEnter(s):yn(s,e)},mounted(s,{value:e},{transition:t}){t&&e&&t.enter(s)},updated(s,{value:e,oldValue:t},{transition:n}){!e!=!t&&(n?e?(n.beforeEnter(s),yn(s,!0),n.enter(s)):n.leave(s,()=>{yn(s,!1)}):yn(s,e))},beforeUnmount(s,{value:e}){yn(s,e)}};function yn(s,e){s.style.display=e?s[os]:"none",s[Do]=!e}const Mc=Symbol(""),zc=/(^|;)\s*display\s*:/;function jc(s,e,t){const n=s.style,r=$e(t);let i=!1;if(t&&!r){if(e)if($e(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&es(n,a,"")}else for(const o in e)t[o]==null&&es(n,o,"");for(const o in t)o==="display"&&(i=!0),es(n,o,t[o])}else if(r){if(e!==t){const o=n[Mc];o&&(t+=";"+o),n.cssText=t,i=zc.test(t)}}else e&&s.removeAttribute("style");os in s&&(s[os]=i?n.display:"",s[Do]&&(n.display="none"))}const ri=/\s*!important$/;function es(s,e,t){if(le(t))t.forEach(n=>es(s,e,n));else if(t==null&&(t=""),e.startsWith("--"))s.setProperty(e,t);else{const n=Bc(s,e);ri.test(t)?s.setProperty(nn(n),t.replace(ri,""),"important"):s[n]=t}}const ii=["Webkit","Moz","ms"],Ms={};function Bc(s,e){const t=Ms[e];if(t)return t;let n=ut(e);if(n!=="filter"&&n in s)return Ms[e]=n;n=gs(n);for(let r=0;r<ii.length;r++){const i=ii[r]+n;if(i in s)return Ms[e]=i}return e}const oi="http://www.w3.org/1999/xlink";function ai(s,e,t,n,r,i=Ua(e)){n&&e.startsWith("xlink:")?t==null?s.removeAttributeNS(oi,e.slice(6,e.length)):s.setAttributeNS(oi,e,t):t==null||i&&!Pi(t)?s.removeAttribute(e):s.setAttribute(e,i?"":$t(t)?String(t):t)}function Uc(s,e,t,n){if(e==="innerHTML"||e==="textContent"){if(t==null)return;s[e]=t;return}const r=s.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?s.getAttribute("value")||"":s.value,a=t==null?"":String(t);(o!==a||!("_value"in s))&&(s.value=a),t==null&&s.removeAttribute(e),s._value=t;return}let i=!1;if(t===""||t==null){const o=typeof s[e];o==="boolean"?t=Pi(t):t==null&&o==="string"?(t="",i=!0):o==="number"&&(t=0,i=!0)}try{s[e]=t}catch{}i&&s.removeAttribute(e)}function cn(s,e,t,n){s.addEventListener(e,t,n)}function $c(s,e,t,n){s.removeEventListener(e,t,n)}const li=Symbol("_vei");function Hc(s,e,t,n,r=null){const i=s[li]||(s[li]={}),o=i[e];if(n&&o)o.value=n;else{const[a,l]=Gc(e);if(n){const u=i[e]=Vc(n,r);cn(s,a,u,l)}else o&&($c(s,a,o,l),i[e]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function Gc(s){let e;if(ci.test(s)){e={};let n;for(;n=s.match(ci);)s=s.slice(0,s.length-n[0].length),e[n[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):nn(s.slice(2)),e]}let zs=0;const Kc=Promise.resolve(),Wc=()=>zs||(Kc.then(()=>zs=0),zs=Date.now());function Vc(s,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ct(qc(n,t.value),e,5,[n])};return t.value=s,t.attached=Wc(),t}function qc(s,e){if(le(e)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const ui=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)>96&&s.charCodeAt(2)<123,Zc=(s,e,t,n,r,i)=>{const o=r==="svg";e==="class"?Dc(s,n,o):e==="style"?jc(s,t,n):fs(e)?lr(e)||Hc(s,e,t,n,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yc(s,e,n,o))?(Uc(s,e,n),!s.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ai(s,e,n,o,i,e!=="value")):(e==="true-value"?s._trueValue=n:e==="false-value"&&(s._falseValue=n),ai(s,e,n,o))};function Yc(s,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in s&&ui(e)&&he(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&s.tagName==="INPUT"||e==="type"&&s.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=s.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ui(e)&&$e(t)?!1:e in s}const hi=s=>{const e=s.props["onUpdate:modelValue"]||!1;return le(e)?t=>Zn(e,t):e};function Xc(s){s.target.composing=!0}function di(s){const e=s.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const js=Symbol("_assign"),fi={created(s,{modifiers:{lazy:e,trim:t,number:n}},r){s[js]=hi(r);const i=n||r.props&&r.props.type==="number";cn(s,e?"change":"input",o=>{if(o.target.composing)return;let a=s.value;t&&(a=a.trim()),i&&(a=Ks(a)),s[js](a)}),t&&cn(s,"change",()=>{s.value=s.value.trim()}),e||(cn(s,"compositionstart",Xc),cn(s,"compositionend",di),cn(s,"change",di))},mounted(s,{value:e}){s.value=e??""},beforeUpdate(s,{value:e,oldValue:t,modifiers:{lazy:n,trim:r,number:i}},o){if(s[js]=hi(o),s.composing)return;const a=(i||s.type==="number")&&!/^0\d/.test(s.value)?Ks(s.value):s.value,l=e??"";a!==l&&(document.activeElement===s&&s.type!=="range"&&(n&&e===t||r&&s.value.trim()===l)||(s.value=l))}},Jc=["ctrl","shift","alt","meta"],Qc={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,e)=>Jc.some(t=>s[`${t}Key`]&&!e.includes(t))},eu=(s,e)=>{const t=s._withMods||(s._withMods={}),n=e.join(".");return t[n]||(t[n]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=Qc[e[o]];if(a&&a(r,e))return}return s(r,...i)})},tu=Ye({patchProp:Zc},Pc);let pi;function nu(){return pi||(pi=sc(tu))}const su=(...s)=>{const e=nu().createApp(...s),{mount:t}=e;return e.mount=n=>{const r=iu(n);if(!r)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,ru(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ru(s){if(s instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&s instanceof MathMLElement)return"mathml"}function iu(s){return $e(s)?document.querySelector(s):s}var ou=!1;/*!
 * pinia v2.2.1
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Mo;const Rs=s=>Mo=s,zo=Symbol();function nr(s){return s&&typeof s=="object"&&Object.prototype.toString.call(s)==="[object Object]"&&typeof s.toJSON!="function"}var xn;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(xn||(xn={}));function au(){const s=zi(!0),e=s.run(()=>to({}));let t=[],n=[];const r=_r({install(i){Rs(r),r._a=i,i.provide(zo,r),i.config.globalProperties.$pinia=r,n.forEach(o=>t.push(o)),n=[]},use(i){return!this._a&&!ou?n.push(i):t.push(i),this},_p:t,_a:null,_e:s,_s:new Map,state:e});return r}const jo=()=>{};function mi(s,e,t,n=jo){s.push(e);const r=()=>{const i=s.indexOf(e);i>-1&&(s.splice(i,1),n())};return!t&&ji()&&Ha(r),r}function ln(s,...e){s.slice().forEach(t=>{t(...e)})}const lu=s=>s(),gi=Symbol(),Bs=Symbol();function sr(s,e){s instanceof Map&&e instanceof Map?e.forEach((t,n)=>s.set(n,t)):s instanceof Set&&e instanceof Set&&e.forEach(s.add,s);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],r=s[t];nr(r)&&nr(n)&&s.hasOwnProperty(t)&&!He(n)&&!Jt(n)?s[t]=sr(r,n):s[t]=n}return s}const cu=Symbol();function uu(s){return!nr(s)||!s.hasOwnProperty(cu)}const{assign:Nt}=Object;function hu(s){return!!(He(s)&&s.effect)}function du(s,e,t,n){const{state:r,actions:i,getters:o}=e,a=t.state.value[s];let l;function u(){a||(t.state.value[s]=r?r():{});const f=gl(t.state.value[s]);return Nt(f,i,Object.keys(o||{}).reduce((h,m)=>(h[m]=_r(St(()=>{Rs(t);const d=t._s.get(s);return o[m].call(d,d)})),h),{}))}return l=Bo(s,u,e,t,n,!0),l}function Bo(s,e,t={},n,r,i){let o;const a=Nt({actions:{}},t),l={deep:!0};let u,f,h=[],m=[],d;const b=n.state.value[s];!i&&!b&&(n.state.value[s]={}),to({});let p;function T(M){let P;u=f=!1,typeof M=="function"?(M(n.state.value[s]),P={type:xn.patchFunction,storeId:s,events:d}):(sr(n.state.value[s],M),P={type:xn.patchObject,payload:M,storeId:s,events:d});const H=p=Symbol();ro().then(()=>{p===H&&(u=!0)}),f=!0,ln(h,P,n.state.value[s])}const _=i?function(){const{state:P}=t,H=P?P():{};this.$patch(X=>{Nt(X,H)})}:jo;function g(){o.stop(),h=[],m=[],n._s.delete(s)}const y=(M,P="")=>{if(gi in M)return M[Bs]=P,M;const H=function(){Rs(n);const X=Array.from(arguments),I=[],G=[];function S(K){I.push(K)}function V(K){G.push(K)}ln(m,{args:X,name:H[Bs],store:w,after:S,onError:V});let se;try{se=M.apply(this&&this.$id===s?this:w,X)}catch(K){throw ln(G,K),K}return se instanceof Promise?se.then(K=>(ln(I,K),K)).catch(K=>(ln(G,K),Promise.reject(K))):(ln(I,se),se)};return H[gi]=!0,H[Bs]=P,H},k={_p:n,$id:s,$onAction:mi.bind(null,m),$patch:T,$reset:_,$subscribe(M,P={}){const H=mi(h,M,P.detached,()=>X()),X=o.run(()=>Xn(()=>n.state.value[s],I=>{(P.flush==="sync"?f:u)&&M({storeId:s,type:xn.direct,events:d},I)},Nt({},l,P)));return H},$dispose:g},w=bs(k);n._s.set(s,w);const F=(n._a&&n._a.runWithContext||lu)(()=>n._e.run(()=>(o=zi()).run(()=>e({action:y}))));for(const M in F){const P=F[M];if(He(P)&&!hu(P)||Jt(P))i||(b&&uu(P)&&(He(P)?P.value=b[M]:sr(P,b[M])),n.state.value[s][M]=P);else if(typeof P=="function"){const H=y(P,M);F[M]=H,a.actions[M]=P}}return Nt(w,F),Nt(we(w),F),Object.defineProperty(w,"$state",{get:()=>n.state.value[s],set:M=>{T(P=>{Nt(P,M)})}}),n._p.forEach(M=>{Nt(w,o.run(()=>M({store:w,app:n._a,pinia:n,options:a})))}),b&&i&&t.hydrate&&t.hydrate(w.$state,b),u=!0,f=!0,w}function fu(s,e,t){let n,r;const i=typeof e=="function";typeof s=="string"?(n=s,r=i?t:e):(r=s,n=s.id);function o(a,l){const u=ql();return a=a||(u?Cn(zo,null):null),a&&Rs(a),a=Mo,a._s.has(n)||(i?Bo(n,e,r,a):du(n,r,a)),a._s.get(n)}return o.$id=n,o}var un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cr(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function pu(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var r=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return s[n]}})}),t}var Uo={},rr=function(s,e){return rr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},rr(s,e)};function $o(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");rr(s,e);function t(){this.constructor=s}s.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var as=function(){return as=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},as.apply(this,arguments)};function Ho(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(s);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(s,n[r])&&(t[n[r]]=s[n[r]]);return t}function Go(s,e,t,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(i=(r<3?o(i):r>3?o(e,t,i):o(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function Ko(s,e){return function(t,n){e(t,n,s)}}function mu(s,e,t,n,r,i){function o(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var a=n.kind,l=a==="getter"?"get":a==="setter"?"set":"value",u=!e&&s?n.static?s:s.prototype:null,f=e||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),h,m=!1,d=t.length-1;d>=0;d--){var b={};for(var p in n)b[p]=p==="access"?{}:n[p];for(var p in n.access)b.access[p]=n.access[p];b.addInitializer=function(_){if(m)throw new TypeError("Cannot add initializers after decoration has completed");i.push(o(_||null))};var T=(0,t[d])(a==="accessor"?{get:f.get,set:f.set}:f[l],b);if(a==="accessor"){if(T===void 0)continue;if(T===null||typeof T!="object")throw new TypeError("Object expected");(h=o(T.get))&&(f.get=h),(h=o(T.set))&&(f.set=h),(h=o(T.init))&&r.unshift(h)}else(h=o(T))&&(a==="field"?r.unshift(h):f[l]=h)}u&&Object.defineProperty(u,n.name,f),m=!0}function gu(s,e,t){for(var n=arguments.length>2,r=0;r<e.length;r++)t=n?e[r].call(s,t):e[r].call(s);return n?t:void 0}function _u(s){return typeof s=="symbol"?s:"".concat(s)}function bu(s,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(s,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Wo(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)}function Vo(s,e,t,n){function r(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function a(f){try{u(n.next(f))}catch(h){o(h)}}function l(f){try{u(n.throw(f))}catch(h){o(h)}}function u(f){f.done?i(f.value):r(f.value).then(a,l)}u((n=n.apply(s,e||[])).next())})}function qo(s,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(f){return l([u,f])}}function l(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(t=0)),t;)try{if(n=1,r&&(i=u[0]&2?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,r=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){t.label=u[1];break}if(u[0]===6&&t.label<i[1]){t.label=i[1],i=u;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(u);break}i[2]&&t.ops.pop(),t.trys.pop();continue}u=e.call(s,t)}catch(f){u=[6,f],r=0}finally{n=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var xs=Object.create?function(s,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,n,r)}:function(s,e,t,n){n===void 0&&(n=t),s[n]=e[t]};function Zo(s,e){for(var t in s)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&xs(e,s,t)}function ls(s){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&s[e],n=0;if(t)return t.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&n>=s.length&&(s=void 0),{value:s&&s[n++],done:!s}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Rr(s,e){var t=typeof Symbol=="function"&&s[Symbol.iterator];if(!t)return s;var n=t.call(s),r,i=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return i}function Yo(){for(var s=[],e=0;e<arguments.length;e++)s=s.concat(Rr(arguments[e]));return s}function Xo(){for(var s=0,e=0,t=arguments.length;e<t;e++)s+=arguments[e].length;for(var n=Array(s),r=0,e=0;e<t;e++)for(var i=arguments[e],o=0,a=i.length;o<a;o++,r++)n[r]=i[o];return n}function Jo(s,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,i;n<r;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return s.concat(i||Array.prototype.slice.call(e))}function gn(s){return this instanceof gn?(this.v=s,this):new gn(s)}function Qo(s,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(s,e||[]),r,i=[];return r={},a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(d){return function(b){return Promise.resolve(b).then(d,h)}}function a(d,b){n[d]&&(r[d]=function(p){return new Promise(function(T,_){i.push([d,p,T,_])>1||l(d,p)})},b&&(r[d]=b(r[d])))}function l(d,b){try{u(n[d](b))}catch(p){m(i[0][3],p)}}function u(d){d.value instanceof gn?Promise.resolve(d.value.v).then(f,h):m(i[0][2],d)}function f(d){l("next",d)}function h(d){l("throw",d)}function m(d,b){d(b),i.shift(),i.length&&l(i[0][0],i[0][1])}}function ea(s){var e,t;return e={},n("next"),n("throw",function(r){throw r}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(r,i){e[r]=s[r]?function(o){return(t=!t)?{value:gn(s[r](o)),done:!1}:i?i(o):o}:i}}function ta(s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=s[Symbol.asyncIterator],t;return e?e.call(s):(s=typeof ls=="function"?ls(s):s[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(i){t[i]=s[i]&&function(o){return new Promise(function(a,l){o=s[i](o),r(a,l,o.done,o.value)})}}function r(i,o,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},o)}}function na(s,e){return Object.defineProperty?Object.defineProperty(s,"raw",{value:e}):s.raw=e,s}var Su=Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e};function sa(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&xs(e,s,t);return Su(e,s),e}function ra(s){return s&&s.__esModule?s:{default:s}}function ia(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)}function oa(s,e,t,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?s!==e||!r:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(s,t):r?r.value=t:e.set(s,t),t}function aa(s,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof s=="function"?e===s:s.has(e)}function la(s,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var n,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=e[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=e[Symbol.dispose],t&&(r=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");r&&(n=function(){try{r.call(this)}catch(i){return Promise.reject(i)}}),s.stack.push({value:e,dispose:n,async:t})}else t&&s.stack.push({async:!0});return e}var Tu=typeof SuppressedError=="function"?SuppressedError:function(s,e,t){var n=new Error(t);return n.name="SuppressedError",n.error=s,n.suppressed=e,n};function ca(s){function e(n){s.error=s.hasError?new Tu(n,s.error,"An error was suppressed during disposal."):n,s.hasError=!0}function t(){for(;s.stack.length;){var n=s.stack.pop();try{var r=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(r).then(t,function(i){return e(i),t()})}catch(i){e(i)}}if(s.hasError)throw s.error}return t()}const yu={__extends:$o,__assign:as,__rest:Ho,__decorate:Go,__param:Ko,__metadata:Wo,__awaiter:Vo,__generator:qo,__createBinding:xs,__exportStar:Zo,__values:ls,__read:Rr,__spread:Yo,__spreadArrays:Xo,__spreadArray:Jo,__await:gn,__asyncGenerator:Qo,__asyncDelegator:ea,__asyncValues:ta,__makeTemplateObject:na,__importStar:sa,__importDefault:ra,__classPrivateFieldGet:ia,__classPrivateFieldSet:oa,__classPrivateFieldIn:aa,__addDisposableResource:la,__disposeResources:ca},vu=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:la,get __assign(){return as},__asyncDelegator:ea,__asyncGenerator:Qo,__asyncValues:ta,__await:gn,__awaiter:Vo,__classPrivateFieldGet:ia,__classPrivateFieldIn:aa,__classPrivateFieldSet:oa,__createBinding:xs,__decorate:Go,__disposeResources:ca,__esDecorate:mu,__exportStar:Zo,__extends:$o,__generator:qo,__importDefault:ra,__importStar:sa,__makeTemplateObject:na,__metadata:Wo,__param:Ko,__propKey:_u,__read:Rr,__rest:Ho,__runInitializers:gu,__setFunctionName:bu,__spread:Yo,__spreadArray:Jo,__spreadArrays:Xo,__values:ls,default:yu},Symbol.toStringTag,{value:"Module"})),Eu=pu(vu);var Mt={};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.isDate=Mt.isComparable=Mt.isIterable=void 0;Mt.isIterable=s=>!(s==null||s[Symbol.iterator]==null);Mt.isComparable=s=>{const e=Object.prototype.toString,t=s;return t.compare!=null&&e.call(t.compare).endsWith("Function]")};Mt.isDate=s=>Object.prototype.toString.call(s).endsWith("Date]");var Us={},_i;function wu(){return _i||(_i=1,Object.defineProperty(Us,"__esModule",{value:!0})),Us}(function(s){Object.defineProperty(s,"__esModule",{value:!0});const e=Eu,t=Mt,a={number:(f,h)=>f-h,string:(f,h)=>f.localeCompare(h),Date:(f,h)=>f.getTime()-h.getTime(),bigInt:(f,h)=>Number(f-h),none:()=>0},l=f=>{if(typeof f=="number")return a.number;if(typeof f=="string")return a.string;if(typeof f=="bigint")return a.bigInt;if(t.isDate(f))return a.Date;if(t.isComparable(f))return(h,m)=>h.compare(m);throw new Error("Cannot sort keys in this map. You have to specify compareFn if the type of key in this map is not number, string, or Date.")};class u extends Map{constructor(h,m){super(),this.specifiedCompareFn=!1,this.isCompareFn=d=>typeof d=="function",this.compareFn=a.none,this.sortedKeys=[],t.isIterable(h)&&this._constructor(h,m),this.isCompareFn(h)&&this._constructor(null,h),h==null&&this._constructor(null,m)}get comparator(){return this.compareFn}compare(h,m){return Math.sign(this.compareFn(h,m))}_constructor(h,m){if(this.compareFn=m??a.none,this.specifiedCompareFn=m!=null,h!=null)for(const d of h)this.set(...d)}static fromMap(h,m){const d=new u(m);return d.setAll(h),d}duplicate(){return u.fromMap(this,this.compareFn)}toMap(){const h=new Map,m=Array.from(super.entries());return m.sort((d,b)=>this.compareFn(d[0],b[0])),m.forEach(([d,b])=>{h.set(d,b)}),h}reverseKeys(){return[...this.sortedKeys].reverse().values()}get(h){const m=this.sortedKeys.find(d=>this.comparator(d,h)===0);if(m!=null)return super.get(m)}set(h,m){this.sortedKeys.length===0&&!this.specifiedCompareFn&&(this.compareFn=l(h),this.specifiedCompareFn=!0);const d=this.sortedKeys.find(b=>this.compareFn(b,h)===0);return d==null?(this.sortedKeys.push(h),super.set(h,m)):super.set(d,m),this.sortedKeys.sort(this.compareFn),this}setAll(h){return h.forEach((m,d)=>{this.set(d,m)}),this}delete(h){return super.delete(h)?(this.sortedKeys=this.sortedKeys.filter(m=>this.compare(m,h)!==0),!0):!1}clear(){super.clear(),this.sortedKeys=[]}keys(){return this.sortedKeys.values()}values(){return this.sortedKeys.map(h=>super.get(h)).values()}entries(){return this.toMap().entries()}firstEntry(){const h=this.firstKey();if(h==null)return;const m=this.get(h);return m===void 0?void 0:[h,m]}firstKey(){return this.sortedKeys[0]}lastEntry(){const h=this.lastKey();if(h==null)return;const m=this.get(h);return m===void 0?void 0:[h,m]}lastKey(){return[...this.sortedKeys].reverse()[0]}shiftEntry(){const h=this.firstEntry();if(h!=null)return this.delete(h[0]),h}popEntry(){const h=this.lastEntry();if(h!=null)return this.delete(h[0]),h}floorEntry(h){const m=this.floorKey(h);if(m!=null){const d=this.get(m);return d===void 0?void 0:[m,d]}}floorKey(h){return this.sortedKeys.filter(d=>this.compare(d,h)<=0).reverse()[0]}ceilingEntry(h){const m=this.ceilingKey(h);if(m!=null){const d=this.get(m);return d===void 0?void 0:[m,d]}}ceilingKey(h){return this.sortedKeys.filter(d=>this.compare(d,h)>=0)[0]}lowerEntry(h){const m=this.lowerKey(h);if(m!=null){const d=this.get(m);return d===void 0?void 0:[m,d]}}lowerKey(h){return this.sortedKeys.filter(d=>this.compare(d,h)<0).reverse()[0]}higherEntry(h){const m=this.higherKey(h);if(m!=null){const d=this.get(m);return d===void 0?void 0:[m,d]}}higherKey(h){return this.sortedKeys.filter(d=>this.compare(d,h)>0)[0]}splitLower(h,m=!0){const d=Array.from(this.entries()).filter(b=>{const p=this.compare(b[0],h)<0;return m?p||this.compare(b[0],h)===0:p});return new u(d,this.compareFn)}splitHigher(h,m=!0){const d=Array.from(this.entries()).filter(b=>{const p=this.compare(b[0],h)>0;return m?p||this.compare(b[0],h)===0:p});return new u(d,this.compareFn)}forEach(h,m){Array.from(this.entries()).forEach(([d,b])=>{h(b,d,this)},m)}}s.default=u,e.__exportStar(wu(),s)})(Uo);const ft=Cr(Uo);class zt{constructor(e=1/0){L(this,"storage",[]);this.capacity=e}push(e){if(this.size()===this.capacity)throw Error("Stack has reached max capacity, you cannot add more items");this.storage.push(e)}pop(){return this.storage.pop()}get(e){return this.storage[e]}peek(){return this.storage[this.size()-1]}size(){return this.storage.length}empty(){return this.storage.length==0}clear(){this.storage=[]}}class ge{constructor(e){L(this,"items");e!=null?this.items=new Array(e):this.items=new Array}size(){return this.items.length}set(e,t){this.items[e]=t}setItems(e){this.items=e}add(e){this.items.push(e)}addAll(e){this.items.concat(e.items)}get(e){return this.items[e]}remove(e){const t=this.items.indexOf(e);return t==-1?!1:(this.items.splice(t,1),!0)}removeByIndex(e){const t=this.items[e];return this.items.splice(e,1),t}contains(e){return this.items.includes(e)}indexOf(e){return this.items.indexOf(e)}toArray(){return this.items}clear(){this.items.splice(0,this.items.length)}toString(){return`[${this.items.toString()}]`}toJSON(){return{values:this.items}}[Symbol.iterator](){return this.items.values()}}var ef;class Te{constructor(e){L(this,"_elements");L(this,ef,"OrderedIntegerSet");e===void 0?this._elements=[]:e instanceof Te?this._elements=[...e._elements]:this._elements=[e]}static fromArray(e){const t=new Te;return t.addAllArray(e),t}clone(){return new Te(this)}get size(){return this._elements.length}isEmpty(){return this._elements.length===0}add(e){for(let t=0;t<this._elements.length;t++){if(this._elements[t]==e)return!1;if(this._elements[t]>e)return this._elements.splice(t,0,e),!0}return this._elements.push(e),!0}first(){return this._elements.length==0?-1:this._elements[0]}contains(e){return this._elements.includes(e)}has(e){return this._elements.includes(e)}delete(e){for(let t=0;t<this._elements.length;t++)if(this._elements[t]===e)return this._elements.splice(t,1),!0;return!1}clear(){this._elements.length=0}addAll(e){let t=this._elements.length;if(this._elements[this._elements.length-1]<e._elements[0])return this._elements.push(...e._elements),t!=this._elements.length;let n=0,r=0,i=[];for(;n<this._elements.length||r<e._elements.length;){if(n==this._elements.length){for(;r<e._elements.length;)i.push(e._elements[r++]);break}if(r==e._elements.length){for(;n<this._elements.length;)i.push(this._elements[n++]);break}this._elements[n]==e._elements[r]?(i.push(this._elements[n]),n++,r++):this._elements[n]<e._elements[r]?i.push(this._elements[n++]):i.push(e._elements[r++])}return this._elements=i,t!=this._elements.length}addAllArray(e){const t=this._elements.length;return e.forEach(n=>this.add(n)),t!=this._elements.length}intersection(e,t=!0){const n=this._elements.length,r=[];for(const i of e._elements)this.contains(i)&&r.push(i);return t?(this._elements=r,n!=this._elements.length):Te.fromArray(r)}list(){return this._elements}length(){return this._elements.length}entries(){return this._elements.entries()}keys(){return this._elements.keys()}values(){return this._elements.values()}equals(e){const t=e._elements,n=this._elements;return n.length!==t.length?!1:n.every((r,i)=>r===t[i])}[(ef=Symbol.toStringTag,Symbol.iterator)](){return this._elements.values()}toJSON(){return{values:this._elements}}toString(){return`(${this._elements.toString()})`}}class st{constructor(e,t){L(this,"_value");L(this,"_parent");L(this,"_children");this._value=e===void 0?null:e,this._parent=t===void 0?null:t,this._children=[]}add(e){return e.parent=this,this._children.push(e),e}get value(){return this._value}get parent(){return this._parent}get children(){return this._children}set value(e){this._value=e}set parent(e){this._parent=e}set children(e){this._children=e}toJSON(){return{value:this.value,children:this.children}}}class pe extends Error{constructor(t,n){super(t);L(this,"_position");n==null?this._position=-1:this._position=n,Object.setPrototypeOf(this,pe.prototype)}get position(){return this._position}set position(t){this._position=t}toString(){return this.message+", em "+this._position}}class Kt{constructor(){L(this,"errorList");this.errorList=new ge}static get Instance(){return this._instance||(this._instance=new this)}static get errorList(){return this.errorList}add(e){this.errorList.add(e)}}L(Kt,"_instance");class Ne extends pe{constructor(e,t){t==null?super(e):super(e,t)}}class Be extends pe{constructor(e,t){t==null?super(e):super(e,t)}}class Q extends pe{constructor(e,t){t==null?super(e):super(e,t)}}class _n extends Error{constructor(e){super(e)}}class Ce{constructor(e,t,n){L(this,"_id");L(this,"_lexeme");L(this,"_position");this._id=e,this._lexeme=t,this._position=n}get id(){return this._id}get lexeme(){return this._lexeme}get position(){return this._position}toString(){return this._id+"("+this._lexeme+")"}}class bt{static translateString(e){let t="";for(let n=0;n<e.length;n++){let r=e.charAt(n);switch(r){case'"':t+="&quot;";break;case"&":t+="&amp;";break;case"<":t+="&lt;";break;case">":t+="&gt;";break;default:t+=r}}return t}}class tn{constructor(e,t){L(this,"_fa");L(this,"_input","");L(this,"_position",0);L(this,"_sensitive",!0);this._fa=e,this._sensitive=t}analyse(e){let t=0;for(let n=0;n<e.length;n++)if(t=this._fa.nextState(e.charAt(n),t),t<=0)return-1;return this._fa.tokenForState(t)}setInput(e){this._input=e,this._position=0}nextToken(){if(!this.hasInput())return null;const e=this._position;let t=0,n=0,r=-1,i=-1,o=-1,a=-1;for(;this.hasInput()&&(n=t,t=this._fa.nextState(this.nextChar(),t),!(t<0));)this._fa.tokenForState(t)>=0&&(r=t,i=this._position),this._fa.isContext(t)&&(o=t,a=this._position);if(r<0||r!=t&&this._fa.tokenForState(n)==-2)throw new Ne(this._fa.getError(n),e);o!=-1&&this._fa.getOrigin(r)==o&&(i=a),this._position=i;let l=this._fa.tokenForState(r);if(l==0)return this.nextToken();{const u=this._input.substring(e,i);return l=this.lookupToken(l,u),new Ce(l,u,e)}}lookupToken(e,t){let n=this._fa.getSpecialCasesIndexes()[e][0],r=this._fa.getSpecialCasesIndexes()[e][1]-1;for(this._sensitive||(t=t.toUpperCase());n<=r;){const i=Math.floor((n+r)/2),o=this.compareValues(this._fa.specialCases[i].key,t);if(o==0)return this._fa.specialCases[i].value;o<0?n=i+1:r=i-1}return e}hasInput(){return this._position<this._input.length}nextChar(){return this.hasInput()?this._input.charAt(this._position++):String.fromCharCode(-1)}compareValues(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=e.charCodeAt(r),o=t.charCodeAt(r);if(i!=o)return i-o}return e.length-t.length}}class bi{constructor(e,t){L(this,"key");L(this,"value");this.key=e,this.value=t}toString(){return"["+this.key+"->"+this.value+"]"}}class ku{constructor(e,t,n,r,i,o,a,l){L(this,"_transitions");L(this,"_finals");L(this,"_context");L(this,"_alphabet");L(this,"_tokenNames");L(this,"_errors",[]);L(this,"_hasContext",!1);L(this,"_specialCasesIndexes");L(this,"_specialCases");this._alphabet=e,this._transitions=t,this._finals=n,this._context=o,this._specialCasesIndexes=r,this._specialCases=i,this._tokenNames=a;for(const u of o)if(u[0]==1){this._hasContext=!0;break}this.buildErrors(),this.checkSpecialCases(l)}checkSpecialCases(e){const t=new tn(this,e);for(let n=0;n<this._specialCasesIndexes.length;n++){const r=this._specialCasesIndexes[n];for(let i=r[0];i<r[1];i++)if(t.analyse(this._specialCases[i].key)!=n)throw new Be('O valor "'+this._specialCases[i].key+`" não é válido como caso especial de '`+this._tokenNames.get(n-2)+"', na definição de '"+this._tokenNames.get(this._specialCases[i].value-2)+"'")}}nextState(e,t){const n=this._transitions.get(t).get(e);return n??-1}tokenForState(e){return e<0||e>=this._finals.length?-1:this._finals[e]}finalStatesFromState(e){const t=new Set;t.add(e);let n=!0;for(;n;){n=!1;for(const i of t){for(const o of this._alphabet.list()){const a=String.fromCodePoint(o),l=this.nextState(a,i);if(l!=-1&&!t.has(l)){t.add(l),n=!0;break}}if(n)break}}const r=new Set;for(const i of t)this.tokenForState(i)>=0&&r.add(i);return r}tokensFromState(e){const t=this.finalStatesFromState(e),n=new Set;for(const r of t){const i=this.tokenForState(r);i>=0&&n.add(i)}return n}buildErrors(){this._errors=[],this._errors[0]="Caractere não esperado";for(let e=1;e<this._transitions.size();e++)if(this.tokenForState(e)>=0)this._errors[e]="";else{const t=this.tokensFromState(e);let n="Erro identificando ";for(const r of t)r>0?n+=this._tokenNames.get(r-2):n+="<ignorar>",n+=" ou ";n=n.substring(0,n.length-4),this._errors[e]=n.toString()}}get transitions(){return this._transitions}get tokens(){return this._tokenNames}get specialCases(){return this._specialCases}get errors(){return this._errors}getError(e){const t=this._errors[e];if(t!=null)return t;throw Error("Sem erros")}getSpecialCasesIndexes(){return this._specialCasesIndexes}isContext(e){return this._context[e][0]==1}getOrigin(e){return this._context[e][1]}hasContext(){return this._hasContext}translateString(e){let t="";for(let n=0;n<e.length;n++){const r=e.charAt(n);switch(r){case'"':t+="&quot;";break;case"&":t+="&amp;";break;case"<":t+="&lt;";break;case">":t+="&gt;";break;default:t+=r}}return t}asHTML(){let e="";e+='<HTML><HEAD><TITLE> Tabela de Transições </TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',e+='<TR align=center><TD rowspan="2" bgcolor=black><FONT color=white><B>ESTADO</B></FONT></TD><TD rowspan="2" bgcolor=black><FONT color=white><B>TOKEN<BR>RETORNADO</B></FONT></TD><TD colspan="'+this._alphabet.size+'" bgcolor=black><FONT color=white><B>ENTRADA</B></FONT></TD></TR><TR align=center>';for(const t of this._alphabet.list()){const n=this.escapeSpecialCharacters(String.fromCodePoint(t));e+="<TD bgcolor=#99FF66 nowrap><B>"+n+"</B></TD>"}e+="</TR>";for(let t=0;t<this._transitions.size();t++){e+="<TR align=center><TD bgcolor=#99FF66><B>"+t+"</B></TD>";const n=this._finals[t];let r=null;if(n>0){r==null&&(r="#FFFFCC");let o=bt.translateString(this._tokenNames.get(n-2));this.getOrigin(t)>=0&&(o+=" / "+this.getOrigin(t)),e+="<TD bgcolor="+r+" nowrap>"+o+"</TD>"}else n==0?(r==null&&(r="#99CCFF"),e+="<TD bgcolor="+r+"><B>:</B></TD>"):n==-2?e+="<TD bgcolor=#FF0000>?</TD>":(r==null&&(r="#FFCC99"),e+="<TD bgcolor="+r+">?</TD>");const i=this._transitions.get(t);for(const o of this._alphabet.list()){e+="<TD width=40 bgcolor=#F5F5F5>";const a=i.get(String.fromCodePoint(o));a!=null&&a>=0?e+=a:e+="-",e+="</TD>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e}escapeSpecialCharacters(e){return e.replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\s/g,"' '")}}const ce=class ce{constructor(){L(this,"scannerName","Lexico");L(this,"parserName","Sintatico");L(this,"semanticName","Semantico");L(this,"pkgName","");L(this,"generateScanner",!0);L(this,"generateParser",!0);L(this,"language",ce.LANG_JAVA);L(this,"parser",ce.PARSER_SLR);L(this,"scannerCaseSensitive",!0);L(this,"scannerTable",ce.SCANNER_TABLE_FULL);L(this,"input",ce.INPUT_STRING)}toString(){let e="";switch(e+="GenerateScanner = "+this.generateScanner,e+=`
GenerateParser = `+this.generateParser,e+=`
Language = `,this.language){case ce.LANG_CPP:e+="C++";break;case ce.LANG_JAVA:e+="Java";break;case ce.LANG_DELPHI:e+="Delphi";break}if(e+=`
ScannerName = `+this.scannerName,this.generateParser&&(e+=`
ParserName = `+this.parserName,e+=`
SemanticName = `+this.semanticName),this.pkgName.length>0&&(e+=`
Package = `+this.pkgName),this.generateScanner){switch(e+=`
ScannerCaseSensitive = `+this.scannerCaseSensitive,e+=`
ScannerTable = `,this.scannerTable){case ce.SCANNER_TABLE_FULL:e+="Full";break;case ce.SCANNER_TABLE_COMPACT:e+="Compact";break;case ce.SCANNER_TABLE_HARDCODE:e+="Hardcode";break}switch(e+=`
Input = `,this.input){case ce.INPUT_STREAM:e+="Stream";break;case ce.INPUT_STRING:e+="String";break}}if(this.generateParser)switch(e+=`
Parser = `,this.parser){case ce.PARSER_LR:e+="LR";break;case ce.PARSER_LALR:e+="LALR";break;case ce.PARSER_SLR:e+="SLR";break;case ce.PARSER_LL:e+="LL";break;case ce.PARSER_REC_DESC:e+="RD";break}return e}constructorFromString(e){let t=new ce;if(e===void 0)return t;const n=e.split(`
`);for(const r of n){const[i,o]=r.split("=");t.setOption(i.trim(),o.trim())}return t}setOption(e,t){if(e.toUpperCase()==="GenerateScanner".toUpperCase())this.generateScanner=/true/i.test(t);else if(e.toUpperCase()==="GenerateParser".toUpperCase())this.generateParser=/true/i.test(t);else if(e.toUpperCase()==="Language".toUpperCase())if(t.toUpperCase()==="C++".toUpperCase())this.language=ce.LANG_CPP;else if(t.toUpperCase()==="Java".toUpperCase())this.language=ce.LANG_JAVA;else if(t.toUpperCase()==="Delphi".toUpperCase())this.language=ce.LANG_DELPHI;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="ScannerName".toUpperCase())this.scannerName=t;else if(e.toUpperCase()==="ParserName".toUpperCase())this.parserName=t;else if(e.toUpperCase()==="SemanticName".toUpperCase())this.semanticName=t;else if(e.toUpperCase()==="Package".toUpperCase())this.pkgName=t;else if(e.toUpperCase()==="ScannerCaseSensitive".toUpperCase())this.scannerCaseSensitive=/true/i.test(t);else if(e.toUpperCase()=="ScannerTable".toUpperCase())if(t.toUpperCase()==="Full".toUpperCase())this.scannerTable=ce.SCANNER_TABLE_FULL;else if(t.toUpperCase()==="Compact".toUpperCase())this.scannerTable=ce.SCANNER_TABLE_COMPACT;else if(t.toUpperCase()==="Hardcode".toUpperCase())this.scannerTable=ce.SCANNER_TABLE_HARDCODE;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="Input".toUpperCase())if(t.toUpperCase()==="Stream".toUpperCase())this.input=ce.INPUT_STREAM;else if(t.toUpperCase()==="String".toUpperCase())this.input=ce.INPUT_STRING;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="Parser".toUpperCase())if(t.toUpperCase()==="LR".toUpperCase())this.parser=ce.PARSER_LR;else if(t.toUpperCase()==="LALR".toUpperCase())this.parser=ce.PARSER_LALR;else if(t.toUpperCase()==="SLR".toUpperCase())this.parser=ce.PARSER_SLR;else if(t.toUpperCase()==="LL".toUpperCase())this.parser=ce.PARSER_LL;else if(t.toUpperCase()==="RD".toUpperCase())this.parser=ce.PARSER_REC_DESC;else throw new Error("Erro processando arquivo");else throw new Error("Erro processando arquivo")}};L(ce,"LANG_JAVA",0),L(ce,"LANG_CPP",1),L(ce,"LANG_DELPHI",2),L(ce,"PARSER_LR",0),L(ce,"PARSER_LALR",1),L(ce,"PARSER_SLR",2),L(ce,"PARSER_LL",3),L(ce,"PARSER_REC_DESC",4),L(ce,"SCANNER_TABLE_FULL",0),L(ce,"SCANNER_TABLE_COMPACT",1),L(ce,"SCANNER_TABLE_HARDCODE",2),L(ce,"INPUT_STREAM",0),L(ce,"INPUT_STRING",1);let Z=ce;class mt{constructor(e,t,n){L(this,"lhs");L(this,"rhs");L(this,"grammar");this.grammar=e,this.lhs=t,this.rhs=n===void 0?[]:n}clone(){return new mt(null,this.lhs,[...this.rhs])}get_lhs(){return this.lhs}clear_rhs(){this.rhs=[]}set_lhs(e){this.lhs=e}get_rhs(){return this.rhs}set_rhs(e,t){const n=this.rhs[e];return this.rhs[e]=t,n}add_rhs(e){return this.rhs.push(e),e}firstSymbol(){if(this.grammar==null)return-1;for(let e=0;e<this.rhs.length;e++)if(!this.grammar.isSemanticAction(this.rhs[e]))return this.rhs[e];return 0}setGrammar(e){this.grammar=e}getGrammar(){return this.grammar}toString(){if(this.grammar==null)return"error";const e=[];if(e.push(this.grammar.symbols[this.lhs]+" ::="),this.rhs.length===0)e.push(" "+Ut.EPSILON_STR);else for(let t=0;t<this.rhs.length;t++)this.grammar.isSemanticAction(this.rhs[t])?e.push(" #"+(this.rhs[t]-this.grammar.FIRST_SEMANTIC_ACTION())):e.push(" "+this.grammar.symbols[this.rhs[t]]);return e.join("")}equals(e){if(this.lhs!==e.lhs)return!1;if(this.rhs.length!==e.rhs.length)return!1;for(let t=0;t<this.rhs.length;t++)if(this.rhs[t]!==e.rhs[t])return!1;return!0}static compareTo(e,t){if(e===null)return-1;if(e.lhs!==t.lhs)return e.lhs-t.lhs;{if(e.grammar===null)return-1;const n=e.grammar.isEpsilon(e.rhs),r=e.grammar.isEpsilon(t.rhs);if(n&&r)return 0;if(n)return 1;if(r)return-1;for(let i=0;i<e.rhs.length&&i<t.rhs.length;i++)if(e.rhs[i]!==t.rhs[i])return e.rhs[i]-t.rhs[i];return t.rhs.length-e.rhs.length}}}const be=class be{constructor(e,t,n,r){L(this,"_symbols",[]);L(this,"FIRST_NON_TERMINAL",0);L(this,"SEMANTIC_ACTION_COUNT",0);L(this,"_startSymbol",0);L(this,"firstSet",[]);L(this,"followSet",[]);L(this,"normalLR",!1);L(this,"_productions",new ge);const i=[...e],o=[...t],a=new ge;n.toArray().forEach(u=>a.add(u.clone()));const l=r;this.setSymbols(i,o,l),this.setProductions(a),this.fillFirstSet(),this.fillFollowSet()}FIRST_SEMANTIC_ACTION(){return this._symbols.length}LAST_SEMANTIC_ACTION(){return this.FIRST_SEMANTIC_ACTION()+this.SEMANTIC_ACTION_COUNT}setSymbols(e,t,n){this._symbols=[],this.FIRST_NON_TERMINAL=e.length+2,this._symbols[be.EPSILON]=be.EPSILON_STR,this._symbols[be.DOLLAR]="$";for(let r=0,i=be.FIRST_TERMINAL;r<e.length;r++,i++)this._symbols[i]=e[r];for(let r=0,i=this.FIRST_NON_TERMINAL;r<t.length;r++,i++)this._symbols[i]=t[r];this._startSymbol=n}setProductions(e){e.toArray().forEach(n=>this._productions.add(n));let t=0;for(let n=0;n<this._productions.size();n++){this._productions.get(n).setGrammar(this);for(let r=0;r<this._productions.get(n).get_rhs().length;r++)this._productions.get(n).get_rhs()[r]>t&&(t=this._productions.get(n).get_rhs()[r])}this.SEMANTIC_ACTION_COUNT=t-this.FIRST_SEMANTIC_ACTION()}isTerminal(e){return e<this.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=this.FIRST_NON_TERMINAL&&e<this.FIRST_SEMANTIC_ACTION()}isSemanticAction(e){return e>=this.FIRST_SEMANTIC_ACTION()}get productions(){return this._productions}get symbols(){return this._symbols}get terminals(){return this.symbols.slice(2,this.FIRST_NON_TERMINAL)}get nonTerminals(){return this.symbols.slice(this.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION())}get startSymbol(){return this._startSymbol}asNormalLR(){if(this.normalLR)return this;const e=this.terminals,t=2+this.SEMANTIC_ACTION_COUNT,n=this.nonTerminals,r=[...n,...new Array(t)],i=new ge(0);i.setItems(this._productions.toArray());for(let l=0;l<this.SEMANTIC_ACTION_COUNT+1;l++)r[n.length+l]="<#"+l+">",i.add(new mt(null,this.FIRST_SEMANTIC_ACTION()+l,[]));r[r.length-1]="<-START->";const o=new mt(null,this.FIRST_SEMANTIC_ACTION()+t-1,[this.startSymbol]);i.add(o);const a=new be(e,r,i,this.FIRST_SEMANTIC_ACTION()+t-1);return a.normalLR=!0,a}createProduction(e,t){if(t===void 0)return new mt(this,e,[]);const n=new mt(this,e,t);for(let r=0;r<this._productions.size();r++)if(this._productions.get(r).equals(n))return null;return n}isEpsilon(e,t){t===void 0&&(t=0);for(let n=t;n<e.length;n++)if(!this.isSemanticAction(e[n]))return!1;return!0}markEpsilon(){const e=new Te;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);this.isEpsilon(r.get_rhs())&&e.add(r.get_lhs())}for(let n=this.FIRST_SEMANTIC_ACTION();n<=this.LAST_SEMANTIC_ACTION();n++)e.add(n);let t=!0;for(;t;){t=!1;let n;for(let r=0;r<this._productions.size();r++){const i=this._productions.get(r);n=!0;for(let o=0;o<i.get_rhs().length;o++)n=n&&e.has(i.get_rhs()[o]);n&&!e.has(i.get_lhs())&&(t=!0,e.add(i.get_lhs()))}}return e}first(e,t){if(!Array.isArray(e))return this.isSemanticAction(e)?be.EMPTY_SET:this.firstSet[e];t===void 0&&(t=0);const n=new Te;if(e.length-t==1&&e[t]==be.DOLLAR&&n.add(be.DOLLAR),this.isEpsilon(e,t))n.add(be.EPSILON);else{const r=e.length;for(;this.isSemanticAction(e[t]);)t++;let i=this.first(e[t]).clone();i.delete(be.EPSILON),n.addAll(i);let o=t;for(;o<r-1&&this.first(e[o]).has(be.EPSILON);)o++,i=this.first(e[o]).clone(),i.delete(be.EPSILON),n.addAll(i);o==r-1&&this.first(e[o]).has(be.EPSILON)&&n.add(be.EPSILON)}return n}fillFirstSet(){const e=this.markEpsilon();this.firstSet=new Array;for(let n=0;n<this._symbols.length;n++)this.firstSet[n]=new Te;for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)e.has(n)&&this.firstSet[n].add(be.EPSILON);for(let n=be.FIRST_TERMINAL;n<this.FIRST_NON_TERMINAL;n++){this.firstSet[n].add(n);for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++){let i=!1;for(let o=0;o<this._productions.size();o++){const a=this._productions.get(o);if(a.get_lhs()==r&&!this.isEpsilon(a.get_rhs())&&a.firstSymbol()==n){i=!0;break}}i&&this.firstSet[r].add(n)}}let t;do{t=!1;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n),i=this.firstSet[r.get_lhs()].clone(),o=this.first(r.get_rhs());this.firstSet[r.get_lhs()].addAll(o),t||i.equals(this.first(r.get_lhs()))||(t=!0)}}while(t)}fillFollowSet(){this.followSet=new Array;for(let t=0;t<this._symbols.length;t++)this.followSet[t]=new Te;this.followSet[this._startSymbol].add(be.DOLLAR);let e;do{e=!1;for(let t=0;t<this._productions.size();t++){const n=this._productions.get(t);for(let r=0;r<n.get_rhs().length;r++)if(this.isNonTerminal(n.get_rhs()[r])){const i=this.first(n.get_rhs(),r+1),o=i.has(be.EPSILON);if(n.get_rhs().length>r+1){i.delete(be.EPSILON);const a=this.followSet[n.get_rhs()[r]].clone();this.followSet[n.get_rhs()[r]].addAll(i),!e&&!this.followSet[n.get_rhs()[r]].equals(a)&&(e=!0)}if(o){const a=this.followSet[n.get_rhs()[r]].clone();this.followSet[n.get_rhs()[r]].addAll(this.followSet[n.get_lhs()]),!e&&!this.followSet[n.get_rhs()[r]].equals(a)&&(e=!0)}}}}while(e)}stringFirstFollow(){let e="";for(let t=this.FIRST_NON_TERMINAL;t<this.firstSet.length;t++){let n="";n+=`FIRST( ${this.symbols[t]} ) = { `;for(let r=0;r<this.firstSet[t].size;r++)this.firstSet[t].list()[r]&&(n+=`${this.symbols[r]} `);n+="}",e=+n+`
`}for(let t=this.FIRST_NON_TERMINAL;t<this.followSet.length;t++){let n="";n+=`FOLLOW(${this.symbols[t]}) = { `;for(let r=0;r<this.followSet[t].size;r++)this.followSet[t].list()[r]&&(n+=this.symbols[r]+" ");n+="}",e+=n+`
`}return e}ffAsHTML(){let e="";e+='<HTML><HEAD><TITLE>First &amp; Follow</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',e+="<TR align=center><TD bgcolor=black><FONT color=white><B>SÍMBOLO</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FIRST</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FOLLOW</B></FONT></TD></TR>";for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++){e+="<TR align=center>",e+=`<TD nowrap bgcolor=#F5F5F5><B> ${bt.translateString(this.symbols[t])} </B></TD>`;let n="  ";this.firstSet[t].list().forEach(r=>n+=this.symbols[r]+", "),n=n.slice(0,-2),e+=`<TD nowrap bgcolor=#F5F5F5>${bt.translateString(n)}</TD>`,n="  ",this.followSet[t].list().forEach(r=>n+=this.symbols[r]+", "),n=n.slice(0,-2),e+=`<TD nowrap bgcolor=#F5F5F5>${bt.translateString(n)}</TD>`,e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e}removeImproductiveSymbols(){const e=this.getProductiveSymbols();this.updateSymbols(e)}removeUselessSymbols(){this.removeImproductiveSymbols(),this.removeUnreachableSymbols()}removeRepeatedProductions(){}productionsFor(e){const t=new Te;for(let n=0;n<this.productions.size();n++)this.productions.get(n).get_lhs()==e&&t.add(n);return t}transformToFindRecursion(e){const t=new ge;e.toArray().forEach(n=>t.add(n));for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)for(let r=this.FIRST_NON_TERMINAL;r<n;r++)for(let i=0;i<t.size();i++){const o=t.get(i);if(o.get_lhs()==n&&o.firstSymbol()==r){t.toArray().splice(i,1),i--;const a=[];for(let l=0;l<o.get_rhs().length&&this.isSemanticAction(o.get_rhs()[l]);l++)a.push(o.get_rhs()[l]);for(let l=0;l<t.size();l++){const u=t.get(l);if(u.get_lhs()==r){const f=new Array(u.get_rhs().length+o.get_rhs().length-1);let h=0;for(;h<a.length;h++)f[h]=a[h];let m=h;for(h=0;h<u.get_rhs().length;h++)f[h+m]=u.get_rhs()[h];for(m=m+h-(a.length+1),h=a.length+1;h<o.get_rhs().length;h++)f[h+m]=o.get_rhs()[h];const d=this.createProduction(o.get_lhs(),f);d!=null&&t.add(d)}}}}return t}removeRecursion(){this._productions=this.transformToFindRecursion(this._productions),this.removeDirectRecursion()}removeDirectRecursion(){for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++){let t=this.productionsFor(e);const n=this.productionsFor(e);let r=-1;const i=t.list();for(let o=0;o<i.length;o++){const a=i[o];this._productions.get(a).get_lhs()!=this._productions.get(a).firstSymbol()&&i.splice(o,1)}if(t=new Te,t.addAllArray(i),t.size>0){r=this.createSymbol(this.addTail(this._symbols[e]));for(const o of n){const a=this._productions.get(o);t.list()[o]?(a.get_rhs().splice(0,1),a.get_rhs().push(r),a.set_lhs(r)):a.get_rhs().push(r)}}if(r!=-1){const o=this.createProduction(r);o!=null&&this.productions.add(o)}}this.fillFirstSet(),this.fillFollowSet(),this.sort()}createSymbol(e){for(const n of this._productions){const r=n.get_rhs();for(let i=0;i<r.length;i++)this.isSemanticAction(r[i])&&r.push(i,r[i]+1)}let t=new Array(this._symbols.length+1);return t=[...this._symbols],this._symbols=t,this._symbols[this._symbols.length-1]=e,this._symbols.length-1}derives(e,t){if(e==t)return!0;const n=new Te;n.add(t);for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)for(const i of n)if(this.derivesDirectly(r,i)&&!n.list()[r]){n.add(r),r=-1;continue}return n.list()[e]!=0}derivesDirectly(e,t){const n=this.markEpsilon();for(let r=0;r<this._productions.size();r++){const i=this._productions.get(r);if(i.get_lhs()==e)if(i.get_rhs().length==1){if(i.get_rhs()[0]==t)return!0}else{const o=i.get_rhs();for(let a=0;a<o.length;a++)if(o[a]==t){let l=!0;for(let u=0;u<a;u++)n.list()[o[u]]||(l=!1);for(let u=a+1;u<o.length;u++)n.list()[o[u]]||(l=!1);if(l)return!0}}}return!1}removeUnitaryProductions(){const e=new ge;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);(r.get_rhs().length!=1||r.get_rhs()[0]!=r.get_lhs())&&e.add(r)}const t=[];for(let n=this.FIRST_NON_TERMINAL;n<t.length;n++){t[n]=new Te;for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)this.derives(n,r)&&t[n].add(r)}this._productions=new ge;for(let n=0;n<e.size();n++){const r=e.get(n);if(r.get_rhs().length!=1||!this.isNonTerminal(r.get_rhs()[0])){for(let i=this.FIRST_NON_TERMINAL;i<t.length;i++)if(t[i].list()[r.get_lhs()]){const o=this.createProduction(i,r.get_rhs());o!=null&&this._productions.add(o)}}}this.sort()}removeEpsilon(){const e=this.markEpsilon(),t=new ge;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);if(!this.isEpsilon(r.get_rhs())){let i=!0;for(let o=0;o<r.get_rhs().length;o++)i=i&&e.list()[r.get_rhs()[o]]!=0;i||t.add(r)}}for(let n=0;n<t.size();n++){const r=t.get(n);if(!this.isEpsilon(r.get_rhs())){let i=0;for(;i<r.get_rhs().length;){for(;i<r.get_rhs().length&&!(!this.isSemanticAction(r.get_rhs()[i])&&e.list()[r.get_rhs()[i]]);i++);if(i<r.get_rhs().length){const o=this.derivationAt(r,i);o!=null&&!t.contains(o)&&t.add(o),i++}}}}if(e.list()[this._startSymbol]){const n=this.createSymbol(this.addTail(this._symbols[this._startSymbol]));let r=this.createProduction(n,new Array(this._startSymbol));r!=null&&t.add(r),r=this.createProduction(n),r!=null&&t.add(r),this._startSymbol=n,this.fillFirstSet(),this.fillFollowSet()}this._productions=t,this.sort()}derivationAt(e,t){let n=new Array;for(let i=0;i<this._productions.size();i++)if(this._productions.get(i).get_lhs()==e.get_rhs()[t]&&this.isEpsilon(this._productions.get(i).get_rhs())){n=this._productions.get(i).get_rhs();break}const r=new Array;for(let i=0;i<t;i++)r.push(e.get_rhs()[i]);for(let i=0;i<n.length;i++)r.push(n[i]);for(let i=t+1;i<e.get_rhs().length;i++)r.push(e.get_rhs()[i]);return this.createProduction(e.get_lhs(),r)}addTail(e){e=e.substring(0,e.length-1)+"_T>";for(let t=0;t<this._symbols.length;t++)this._symbols[t]!=null&&this._symbols[t]==e&&(e=e.substring(0,e.length-1)+"_T>",t=0);return e}sort(){for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++){const n=this._symbols[t].substring(0,this._symbols[t].length-1)+"_T>";let r=t+1;for(;r<this.FIRST_SEMANTIC_ACTION()&&this._symbols[r]!=n;r++);if(r<this.FIRST_SEMANTIC_ACTION()){const i=t+1,o=r;i!=o&&this.moveSymbol(o,i)}}this.moveSymbol(this._startSymbol,this.FIRST_NON_TERMINAL);const e=this._productions.toArray().sort(mt.compareTo);this._productions.clear(),e.forEach(t=>this._productions.add(t))}moveSymbol(e,t){const n=this._symbols[e];for(let r=e;r>t;r--)this._symbols[r]=this._symbols[r-1];this._symbols[t]=n,this._startSymbol==e?this._startSymbol=t:this._startSymbol>=t&&this._startSymbol<e&&this._startSymbol++;for(const r of this._productions){r.get_lhs()==e?r.set_lhs(t):r.get_lhs()>=t&&r.get_lhs()<e&&r.set_lhs(r.get_lhs()+1);const i=r.get_rhs();for(let o=0;o<i.length;o++)i[o]==e?i.push(o,t):i[o]>=t&&i[o]<e&&i.push(o,i[o]+1)}}isLL(){return this.isFactored()&&!this.hasLeftRecursion()&&this.passThirdCondition()}hasLeftRecursion(){const e=this.transformToFindRecursion(this._productions);for(let t=0;t<e.size();t++)if(e.get(t).get_lhs()==e.get(t).firstSymbol())return!0;return!1}getLeftRecursiveSimbol(){const e=this.transformToFindRecursion(this._productions);for(let t=0;t<e.size();t++)if(e.get(t).get_lhs()==e.get(t).firstSymbol())return e.get(t).get_lhs();return-1}getNonFactoratedProductions(){const e=new Te;for(let t=0;t<this._productions.size();t++){const n=this._productions.get(t);for(let r=t+1;r<this.productions.size();r++){const i=this._productions.get(r);if(n.get_lhs()==i.get_lhs()){const o=this.first(n.get_rhs());o.intersection(this.first(i.get_rhs())),o.isEmpty()||(e.add(t),e.add(r))}}if(e.size>0)break}return e}isFactored(){for(let e=0;e<this._productions.size();e++){const t=this._productions.get(e);for(let n=e+1;n<this._productions.size();n++){const r=this.productions.get(n);if(t.get_lhs()==r.get_lhs()){const i=this.first(t.get_rhs());if(i.intersection(this.first(r.get_rhs())),!i.isEmpty())return!1}}}return!0}passThirdCondition(){const e=this.markEpsilon();for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++)if(e.has(t)){const n=new Te(this.firstSet[t]);if(n.intersection(this.followSet[t]),!n.isEmpty())return!1}return!0}getProductiveSymbols(){const e=new Te;for(let n=be.FIRST_TERMINAL;n<this.FIRST_NON_TERMINAL;n++)e.add(n);for(let n=this.FIRST_SEMANTIC_ACTION();n<=this.LAST_SEMANTIC_ACTION();n++)e.add(n);e.add(be.EPSILON);let t;do{t=!1;const n=new Te;for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)if(!e.has(r))for(let i=0;i<this._productions.size();i++){const o=this._productions.get(i);if(o.get_lhs()==r){let a=!0;for(let l=0;l<o.get_rhs().length;l++)a=a&&e.has(o.get_rhs()[l]);a&&(n.add(r),t=!0)}}e.addAll(n)}while(t);return e}removeUnreachableSymbols(){const e=this.getReachableSymbols();this.updateSymbols(e)}getReachableSymbols(){const e=new Te;e.add(this._startSymbol);let t;do{t=!1;const n=new Te;for(let r=0;r<this._symbols.length;r++)if(!e.has(r))for(let i=0;i<this.productions.size();i++){const o=this._productions.get(i);if(e.has(o.get_lhs())){for(let a=0;a<o.get_rhs().length;a++)if(o.get_rhs()[a]==r){n.add(r),t=!0;break}}}e.addAll(n)}while(t);return e}uselessSymbolsHTML(){const e=this.clone();try{e.removeUselessSymbols()}catch{}const t=e.symbols,n=new Te;for(let o=2;o<this._symbols.length;o++)for(let a=0;a<t.length;a++)if(t[a]==this._symbols[o]){n.add(o);break}let r="";r+='<HTML><HEAD><TITLE>Símbolos inúteis</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif">';let i=0;for(let o=2;o<this._symbols.length;o++)n.has(o)||(r+=this._symbols[o]+"<br>",i++);return i==0&&(r+="Não há símbolos inúteis"),r+="</TABLE></FONT></BODY></HTML>",r}setToStr(e){let t="{ ";for(let n=0;n<e.size;n++)e.list()[n]&&(t+='"'+this._symbols[n]+'" ');return t+="}",t}factorate(){if(this.hasLeftRecursion())throw Error("new LeftRecursionException();");let e=!0;for(;e;){e=!1;for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++)e=e||this.factorateLeft(t)}}factorateLeft(e){let t=!1;const n=this.productionsFor(e);let r=new Te;const i=this.conflict(n,r);if(!r.isEmpty()){t=!0;for(let f=0;f<this._productions.size();f++){const h=this._productions.get(f);if(h.get_lhs()==e&&this.first(h.get_rhs()).list()[i]&&h.firstSymbol()!=i){const m=this.leftMostDerive(h);this._productions.toArray().splice(f,1),m.toArray().forEach(d=>this._productions.add(d)),f--,this.fillFirstSet(),this.fillFollowSet()}}r=new Te;for(let f=0;f<this._productions.size();f++){const h=this._productions.get(f);h.get_lhs()==e&&h.firstSymbol()==i&&r.add(f)}const o=this.createSymbol(this.addTail(this._symbols[e])),a=this.extractPrefix(r);for(const f of r.list()){const h=this._productions.get(f);h.set_lhs(o),h.get_rhs().length>a.length?h.get_rhs().splice(0,a.length):h.clear_rhs()}const l=new Array;l.push(...a),l.push(o);const u=this.createProduction(e,l);u!=null&&this._productions.add(u),this.fillFirstSet(),this.fillFollowSet(),this.sort()}return t}leftMostDerive(e){if(this.isTerminal(e.firstSymbol()))return new ge;{const t=new ge,n=e.firstSymbol(),r=new Array;for(let i=0;i<e.get_rhs().length&&this.isSemanticAction(e.get_rhs()[i]);i++)r.push(e.get_rhs()[i]);for(const i of this.productionsFor(n).list()){const o=this.productions.get(i),a=new Array;for(let u=0;u<r.length;u++)a.push(r[u]);for(let u=0;u<o.get_rhs().length;u++)a.push(o.get_rhs()[u]);for(let u=r.length+1;u<e.get_rhs().length;u++)a.push(e.get_rhs()[u]);const l=this.createProduction(e.get_lhs(),a);l!=null&&!t.contains(l)&&t.add(l)}return t}}extractPrefix(e){const t=new Array;let n,r=0;do{n=!0;let i=0;const o=this._productions.get(i);if(o.get_rhs().length>r){const a=o.get_rhs()[r];for(;i>e.size;i++){const l=this.productions.get(i);(l.get_rhs().length<=r||l.get_rhs()[r]!=a)&&(n=!1)}n&&(t.push(o.get_rhs()[r]),r++)}else n=!1}while(n);return t}conflict(e,t){const n=new Array(this._symbols.length);for(let o=0;o<n.length;o++)n[o]=0;for(const o of e){const a=this._productions.get(o);for(const l of this.first(a.get_rhs()))n[l]++}n[be.EPSILON]=0,n[be.DOLLAR]=0;let r=0,i=0;for(let o=0;o<n.length;o++)n[o]>r&&(r=n[o],i=o);if(r>1)for(const o of e)this.first(this._productions.get(o).get_rhs()).list()[i]&&t.add(o);return i}toString(){let e="",t="",n=!0;for(let r=0;r<this.productions.size();r++){const i=this._productions.get(r);if(this._symbols[i.get_lhs()]!=t)n||(e+=`;

`),n=!1,t=this._symbols[i.get_lhs()],e+=t+" ::=";else{e+=`
`;for(let o=0;o<t.length;o++)e+=" ";e+="   |"}if(i.get_rhs().length==0)e+=" "+be.EPSILON_STR;else for(let o=0;o<i.get_rhs().length;o++)if(e+=" ",this.isSemanticAction(i.get_rhs()[o])){const a=i.get_rhs()[o]-this.FIRST_SEMANTIC_ACTION();e+="#"+a}else{const a=this._symbols[i.get_rhs()[o]];e+=a}}return e+=`;
`,e}clone(){try{const e=structuredClone(this),t=new Array(this.FIRST_NON_TERMINAL-2),n=new Array(this.FIRST_SEMANTIC_ACTION()-this.FIRST_NON_TERMINAL);for(let i=0;i<t.length;i++)t[i]=this._symbols[i+2].toString();for(let i=0;i<n.length;i++)n[i]=this._symbols[i+this.FIRST_NON_TERMINAL].toString();const r=new ge;for(let i=0;i<this._productions.size();i++){const o=new Array(this._productions.get(i).get_rhs().length);for(let a=0;a<o.length;a++)o[a]=this._productions.get(i).get_rhs()[a];r.add(new mt(null,this._productions.get(i).get_lhs(),o))}return e.setSymbols(t,n,this._startSymbol),e.setProductions(r),e.fillFirstSet(),e.fillFollowSet(),e}catch{throw new Error("Internal Error")}}removeSymbol(e){this._symbols.splice(e,1),this._startSymbol>e&&this._startSymbol--,this.FIRST_NON_TERMINAL>e&&this.FIRST_NON_TERMINAL--;for(let t=0;t<this._productions.size();t++){const n=this.productions.get(t);if(n.get_lhs()==e){this.productions.toArray().splice(t,1);continue}else n.get_lhs()>e&&n.set_lhs(n.get_lhs()-1);for(let r=0;r<n.get_rhs().length;r++){if(n.get_rhs()[r]==e){this.productions.toArray().splice(t,1);break}n.get_rhs()[r]>e&&n.set_rhs(r,n.get_rhs()[r]-1)}}}updateSymbols(e){e.add(be.EPSILON),e.add(be.DOLLAR);let t=0;for(let n=0;n<this._symbols.length;n++)e.list()[n]||(this.removeSymbol(n-t),t++);this.fillFirstSet(),this.fillFollowSet()}};L(be,"EPSILON",0),L(be,"DOLLAR",1),L(be,"FIRST_TERMINAL",be.EPSILON+2),L(be,"EPSILON_STR","î"),L(be,"EMPTY_SET",new Te(be.EPSILON));let Ut=be;const xe=class xe{constructor(e,t){L(this,"parameter");L(this,"type");this.type=e,this.parameter=t}getType(){return this.type}getParameter(){return this.parameter}static createShift(e){return new xe(xe.SHIFT,e)}static createReduce(e){return new xe(xe.REDUCE,e)}static createAction(e){return new xe(xe.ACTION,e)}static createAccept(){return new xe(xe.ACCEPT,0)}static createGoTo(e){return new xe(xe.GOTO,e)}static createError(){return new xe(xe.ERROR,0)}toString(){switch(this.type){case xe.SHIFT:return"SHIFT("+this.parameter+")";case xe.REDUCE:return"REDUCE("+this.parameter+")";case xe.ACTION:return"SEM.ACT("+this.parameter+")";case xe.ACCEPT:return"ACCEPT";case xe.GOTO:return""+this.parameter;case xe.ERROR:return"-";default:return"???"}}equals(e){try{let t=e,n=this.type==t.type&&this.parameter==t.parameter;return n===void 0?!1:n}catch{return!1}}hashCode(){let e=43;return e=e*this.parameter+17,e=e*this.type+17,e}};L(xe,"SHIFT",0),L(xe,"REDUCE",1),L(xe,"ACTION",2),L(xe,"ACCEPT",3),L(xe,"GOTO",4),L(xe,"ERROR",5),L(xe,"CONSTANTS",["SHIFT ","REDUCE","ACTION","ACCEPT","GO_TO ","ERROR "]);let Le=xe;class ua{constructor(){L(this,"conflictList",new ge)}}class Au extends ua{constructor(t,n){super();L(this,"_conflict");L(this,"_state");L(this,"_conflictListModel");this._conflict=t===void 0?[]:t,this._state=n===void 0?-1:n,this._conflictListModel=new Array}resolve(t,n){let r;n==0?r="$":r=t.terminals[n-1];let i="";i+="- O estado no topo da pilha é: "+this._state+`
`,i+="- O símbolo da entrada é: "+r+`
`,i+=`
Qual ação a ser executada:`,this._conflictListModel=[];for(let l=0;l<this._conflict.length;l++){let u;switch(this._conflict[l].getType()){case Le.REDUCE:u="Reduzir, pela produção "+this._conflict[l].getParameter();break;case Le.ACTION:u="Executar ação semântica "+this._conflict[l].getParameter();break;case Le.SHIFT:u='Empilhar "'+r+'"';break;default:u=this._conflict[l].toString();break}i+=`
Opção `+(l+1)+": "+u,this._conflictListModel.push({label:u,command:l})}i+=`

OBS: Se cancelar ou digitar opção inválida,
a opção 1 será escolhida como padrão.`;let o=prompt(i,"1");o==null&&(o="1");let a=Number(o);return isNaN(a)||a<0||a>this._conflict.length?a=0:a--,alert("Teste: "+a+"  teste:"+this._conflict.length),this._conflictListModel[a].command}showModal(t,n,r,i,o){const a=document.getElementById("myModal"),l=document.getElementById("confirmBtn"),u=document.getElementById("cancelBtn");a.style.display="block",l.textContent=n,u.textContent=r,l.onclick=function(){a.style.display="none",i&&i()},u.onclick=function(){a.style.display="none",o&&o()}}showDialog(t,n){const r=document.createElement("dialog");r.style.padding="20px",r.innerHTML=`<p>${t}<p>`,n.forEach(i=>{const o=document.createElement("button");o.textContent=i.label,o.onclick=()=>{r.close(),document.body.removeChild(r),i.command},r.appendChild(o),r.appendChild(document.createElement("br"))}),r.addEventListener("close",()=>{document.body.removeChild(r)}),document.body.appendChild(r),r.showModal()}setup(t,n){this._conflict=t,this._state=n}}class Et{constructor(e,t,n){L(this,"_production");L(this,"_position");L(this,"_lookahead");L(this,"_g");this._production=e,this._position=t,this._lookahead=n===void 0?0:n,this._g=e.getGrammar()}get position(){return this._position}get lookahead(){return this._lookahead}get production(){return this._production}equals(e){try{return e.production.equals(this._production)&&e.position==this._position&&this._lookahead==e.lookahead}catch{return!1}}toString(){var t,n;let e="";if(this._g==null)throw new Q("Grammar to string is null");e+=this._g.symbols[this._production.get_lhs()]+" ::= ";for(let r=0;r<this._production.get_rhs().length&&r<this._position;r++){const i=this._production.get_rhs()[r];this._g.isSemanticAction(i)?e+="#"+(i-this._g.FIRST_SEMANTIC_ACTION())+" ":e+=this._g.symbols[i]+" "}e+="o ";for(let r=this._position;r<this._production.get_rhs().length;r++){const i=this._production.get_rhs()[r];this._g.isSemanticAction(i)?e+="#"+(i-this._g.FIRST_SEMANTIC_ACTION())+" ":e+=((t=this._g)==null?void 0:t.symbols[i])+" "}return this._lookahead!=0&&(e+=", ",e+=(n=this._g)==null?void 0:n.symbols[this._lookahead]),e.toString()}clone(){return new Et(this._production,this._position,this._lookahead)}compareTo(e){let t=mt.compareTo(this._production,e.production);return t!=0?t:(t=this._position-e.position,t!=0?t:this._lookahead-e.lookahead)}}class ha{constructor(e){L(this,"g");L(this,"itemList");L(this,"semanticStart");L(this,"firstSementicAction");this.semanticStart=e.FIRST_SEMANTIC_ACTION(),this.firstSementicAction=e.FIRST_SEMANTIC_ACTION(),this.g=e.asNormalLR(),this.itemList=this.computeItems()}getErrors(e){const t=new ge;for(let n=0;n<e.length;n++){const r=new Te;for(let l=1;l<this.g.FIRST_NON_TERMINAL;l++)e[n][l-1].getType()!=Le.ERROR&&r.add(l);let i="";const o=r.size;let a=0;for(const l of r.list())l==1?i+="fim de sentença":i+=this.g.symbols[l],o-a==2?i+=" ou ":o-a>2&&(i+=", "),a++;t.add(i.toString())}return t}get grammar(){return this.g}get firstSemanticAction(){return this.firstSementicAction}buildIntTable(){const e=this.buildTable(),t=[];for(let n=0;n<e.length;n++){t[n]=[];for(let r=0;r<e[n].length;r++)t[n][r]=[],t[n][r][0]=e[n][r].getType(),t[n][r][1]=e[n][r].getParameter()}return t}resolveConflicts(e){const t=[],n=Le.createError();for(let r=0;r<e.length;r++){t[r]=[];for(let i=0;i<e[0].length;i++)switch(e[r][i].size){case 0:t[r][i]=n;break;case 1:t[r][i]=e[r][i].values().next().value;break;default:t[r][i]=this.solve(e[r][i],r,i);break}}return t}solve(e,t,n){const r=[];let i=0;for(const a of e)r[i]=a,i++;let o=!0;for(let a=1;a<r.length&&(o=o&&r[a-1].equals(r[a]),!!o);a++);if(o)return r[0];{const a=new Au;return a.setup(r,t),r[a.resolve(this.g,n)]}}tableAsHTML(){let e="";e+='<HTML><HEAD><TITLE>Tabela SLR(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const t=this.buildTable();e+="<TR>",e+="<TD  align=center rowspan=2 bgcolor=black nowrap><FONT color=white><B>ESTADO</B></FONT></TD>",e+="<TD  align=center colspan="+(this.g.FIRST_NON_TERMINAL-1)+" bgcolor=black nowrap><FONT color=white><B>AÇÃO</B></FONT></TD>",e+="<TD  align=center colspan="+(this.g.FIRST_SEMANTIC_ACTION()-this.g.FIRST_NON_TERMINAL)+" bgcolor=black nowrap><FONT color=white><B>DESVIO</B></FONT></TD>",e+="</TR>",e+="<TR>";for(let n=0;n<t[0].length-1;n++)e+="<TD  align=center bgcolor=black nowrap><FONT color=white><B>"+bt.translateString(this.g.symbols[n+1])+"</B></FONT></TD>";e+="</TR>";for(let n=0;n<t.length;n++){const r=t[n];e+="<TR>",e+="<TD bgcolor=black align=right nowrap><FONT color=white><B>"+n+"</B></FONT></TD>";for(let i=0;i<r.length-1;i++){const o=r[i];let a="";o!=null&&(a=o.toString());const l=i+1<this.g.FIRST_NON_TERMINAL?"#F5F5F5":"#E6E6E6";e+="<TD bgcolor="+l+" align=center nowrap>"+a+"</TD>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e.toString()}itemsAsHTML(){let e="";e+='<HTML><HEAD><TITLE>Itens SLR(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const t=this.itemList;e+="<TR>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Estado</B></FONT></TD>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Itens</B></FONT></TD>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Desvio</B></FONT></TD>",e+="</TR>";for(let n=0;n<t.size();n++){const r=n%2==0?"#F5F5F5":"#E6E6E6",i=t.get(n);e+="<TR>",e+="<TD bgcolor="+r+" align=right rowspan="+i.size()+">"+n+"</TD>",e+="<TD bgcolor="+r+" nowrap>"+bt.translateString(i.get(0).toString())+"</TD>";let o=i.get(0),a=o.production;if(a.get_rhs().length>o.position){const l=a.get_rhs()[o.position],u=this.goTo(i,l),f=t.indexOf(u);e+="<TD bgcolor="+r+" align=right>"+f+"</TD>"}else e+="<TD bgcolor="+r+" align=right>&nbsp</TD>";e+="</TR>";for(let l=1;l<i.size();l++){if(e+="<TR>",e+="<TD bgcolor="+r+" nowrap>"+bt.translateString(i.get(l).toString())+"</TD>",o=i.get(l),a=o.production,a.get_rhs().length>o.position){const u=a.get_rhs()[o.position],f=this.goTo(i,u),h=this.getIndexFromList(t,f);e+="<TD bgcolor="+r+" align=right>"+h+"</TD>"}else e+="<TD bgcolor="+r+" align=right>&nbsp</TD>";e+="</TR>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e.toString()}getIndexFromList(e,t){const n=e.toArray();for(let r=0;r<n.length;r++){const o=n[r].toString(),a=t.toString();if(o===a)return r}return console.log(t),-1}}class Cu extends ha{constructor(e){super(e)}closure(e){const t=new ge;t.setItems(e.toArray());for(let n=0;n<t.size();n++){const r=t.get(n),i=r.production;if(r.position<i.get_rhs().length){const o=i.get_rhs()[r.position];if(this.g.isNonTerminal(o)){const a=this.g.productionsFor(o);for(const l of a.list()){const u=new Et(this.g.productions.get(l),0);this.contains(t,u)||t.add(u)}}}}return t}contains(e,t){for(const n of e)if(t.equals(n))return!0;return!1}goTo(e,t){const n=new ge;for(const r of e.toArray()){const i=r.production;r.position<i.get_rhs().length&&i.get_rhs()[r.position]==t&&n.add(new Et(r.production,r.position+1))}return this.closure(n)}computeItems(){const e=new ge,n=this.g.productionsFor(this.g.startSymbol).first();e.add(new Et(this.g.productions.get(n),0));const r=new ge;r.add(this.closure(e));let i=!0;for(;i;)e:{i=!1;for(const o of r.toArray())for(let a=0;a<o.size();a++){const l=o.get(a),u=l.production;if(u.get_rhs().length>l.position){const f=this.goTo(o,u.get_rhs()[l.position]);if(f.size()!=0&&!this.containsList(r,f)){r.add(f),i=!0;break e}}}}return r}containsList(e,t){const n=t.toArray();for(const r of e){const i=r.toArray();if(i.length!==n.length)continue;let o=!0;for(let a=0;a<i.length;a++){const l=i[a],u=n[a];if(!l.equals(u)){o=!1;break}}if(o)return!0}return!1}buildTable(){const e=[];for(let n=0;n<this.itemList.size();n++){e[n]=[];for(let r=0;r<this.g.symbols.length-1;r++)e[n][r]=new Map}for(let n=0;n<e.length;n++){const r=this.itemList.get(n);for(let i=0;i<r.size();i++){const o=r.get(i),a=o.production,l=a.get_rhs();if(l.length>o.position){const u=l[o.position],f=this.goTo(r,u);if(this.g.isTerminal(u)){const h=Le.createShift(this.indexOfListLRItem(this.itemList,f));e[n][u-1].set(h.hashCode(),h)}else{const h=Le.createGoTo(this.indexOfListLRItem(this.itemList,f));e[n][u-1].set(h.hashCode(),h)}}else{const u=a.get_lhs();if(u==this.g.startSymbol){const f=Le.createAccept();e[n][0].set(f.hashCode(),f)}else{const f=this.g.followSet[u];for(const h of f.list()){let m;u<this.semanticStart?m=Le.createReduce(this.g.productions.indexOf(a)):m=Le.createAction(u-this.semanticStart),e[n][h-1].set(m.hashCode(),m)}}}}}const t=e.map(n=>n.map(r=>new Set(r.values())));return this.resolveConflicts(t)}indexOfListLRItem(e,t){const n=t.toArray();for(let r=0;r<e.size();r++){const i=e.get(r).toArray();if(i.length!==n.length)continue;let o=!0;for(let a=0;a<i.length;a++){const l=i[a],u=n[a];if(!l.equals(u)){o=!1;break}}if(o)return r}return-1}}class da extends ha{constructor(e){super(e)}closure(e){let t=!1;const n=e.toArray();do e:{t=!1;for(const r of e){const i=r.production;if(r.position<i.get_rhs().length){const o=i.get_rhs()[r.position];if(this.g.isNonTerminal(o)){const a=this.g.productionsFor(o);for(const l of a.list()){const u=this.g.productions.get(l),f=[];for(let m=r.position+1;m<i.get_rhs().length;m++)f.push(i.get_rhs()[m]);f.push(r.lookahead);const h=this.g.first(f);for(const m of h.list()){const d=new Et(u,0,m);if(!this.contains(n,d)){n.push(d),t=!0;break e}}}}}}}while(t);return e.setItems(n),e}goTo(e,t){const n=[];for(const i of e.toArray()){const o=i.production;i.position<o.get_rhs().length&&o.get_rhs()[i.position]==t&&n.push(new Et(i.production,i.position+1,i.lookahead))}const r=new ge;return r.setItems(n),this.closure(r)}computeItems(){const e=new ge,n=this.g.productionsFor(this.g.startSymbol).list()[0];e.add(new Et(this.g.productions.get(n),0,Ut.DOLLAR));const r=new ge;r.add(this.closure(e));let i=!0;for(;i;)e:{i=!1;for(const o of r.toArray())for(let a=0;a<o.size();a++){const l=o.get(a),u=l.production;if(u.get_rhs().length>l.position){const f=this.goTo(o,u.get_rhs()[l.position]);if(f.size()!=0&&!this.containsList(r,f)){r.add(f),i=!0;break e}}}}return r}contains(e,t){for(const n of e){const r=n.toString(),i=t.toString();if(r===i)return!0}return!1}containsList(e,t){for(const n of e){const r=n.toString(),i=t.toString();if(r===i)return!0}return!1}buildTable(){const e=[];for(let n=0;n<this.itemList.size();n++){e[n]=[];for(let r=0;r<this.g.symbols.length-1;r++)e[n][r]=new Map}for(let n=0;n<e.length;n++){const r=this.itemList.get(n);for(let i=0;i<r.size();i++){const o=r.get(i),a=o.production,l=a.get_rhs();if(l.length>o.position){const u=l[o.position],f=this.goTo(r,u);if(this.g.isTerminal(u)){const h=Le.createShift(this.indexOfListLRItem(this.itemList,f));e[n][u-1].set(h.hashCode(),h)}else{const h=Le.createGoTo(this.indexOfListLRItem(this.itemList,f));e[n][u-1].set(h.hashCode(),h)}}else{const u=a.get_lhs();if(u==this.g.startSymbol){const f=Le.createAccept();e[n][0].set(f.hashCode(),f)}else{const f=o.lookahead;let h;u<this.semanticStart?h=Le.createReduce(this.g.productions.indexOf(a)):h=Le.createAction(u-this.semanticStart),e[n][f-1].set(h.hashCode(),h)}}}}const t=e.map(n=>n.map(r=>new Set(r.values())));return this.resolveConflicts(t)}indexOfListLRItem(e,t){let n=0;for(const r of e){const i=r.toString(),o=t.toString();if(i===o)return n;n++}return-1}}class Ru extends da{constructor(t){super(t);L(this,"compress",!1)}core(t){const n=new Set;for(let r=0;r<t.length;r++){const i=t[r],o=new Et(i.production,i.position);[...n].some(a=>a.toString()===o.toString())||n.add(o)}return n}computeItems(){const t=super.computeItems();for(let n=0;n<t.size();n++){const r=t.get(n),i=this.core(r.toArray());for(let o=n+1;o<t.size();o++){const a=t.get(o),l=this.core(a.toArray());if(this.equals(i,l)){for(let u=0;u<a.size();u++){const f=a.get(u);r.contains(f)||r.add(f)}t.removeByIndex(o),o--}}}return this.compress=!0,t}goTo(t,n){const r=super.goTo(t,n);if(this.compress){const i=this.core(r.toArray());for(let o=0;o<this.itemList.size();o++){const a=this.itemList.get(o);if(this.equals(i,this.core(a.toArray())))return a}}return r}equals(t,n){if(t.size!==n.size)return!1;for(const r of t){let i=!1;for(const o of n)if(r.equals(o)){i=!0;break}if(!i)return!1}return!0}}class Ns{LRGeneratorFactory(){}static createGenerator(e,t){switch(t){case Z.PARSER_SLR:return new Cu(e);case Z.PARSER_LR:return new da(e);case Z.PARSER_LALR:return new Ru(e);default:return null}}}var fa={exports:{}};(function(s){(function(e){{var t=s.exports=e();t.HashMap=t}})(function(){function e(i){switch(this.clear(),arguments.length){case 0:break;case 1:{"length"in i?n(this,Array.prototype.concat.apply([],i)):this.copy(i);break}default:n(this,arguments);break}}var t=e.prototype={constructor:e,get:function(i){var o=this._data[this.hash(i)];return o&&o[1]},set:function(i,o){var a=this.hash(i);a in this._data||this.size++,this._data[a]=[i,o]},multi:function(){n(this,arguments)},copy:function(i){for(var o in i._data)o in this._data||this.size++,this._data[o]=i._data[o]},has:function(i){return this.hash(i)in this._data},search:function(i){for(var o in this._data)if(this._data[o][1]===i)return this._data[o][0];return null},delete:function(i){var o=this.hash(i);o in this._data&&(this.size--,delete this._data[o])},type:function(i){var o=Object.prototype.toString.call(i),a=o.slice(8,-1).toLowerCase();return!i&&(a==="domwindow"||a==="window")?i+"":a},keys:function(){var i=[];return this.forEach(function(o,a){i.push(a)}),i},values:function(){var i=[];return this.forEach(function(o){i.push(o)}),i},entries:function(){var i=[];return this.forEach(function(o,a){i.push([a,o])}),i},count:function(){return this.size},clear:function(){this._data={},this.size=0},clone:function(){return new e(this)},hash:function(i){switch(this.type(i)){case"undefined":case"null":case"boolean":case"number":case"regexp":return i+"";case"date":return"♣"+i.getTime();case"string":return"♠"+i;case"array":for(var o=[],a=0;a<i.length;a++)o[a]=this.hash(i[a]);return"♥"+o.join("⁞");default:return i.hasOwnProperty("_hmuid_")||(i._hmuid_=++e.uid,r(i,"_hmuid_")),"♦"+i._hmuid_}},forEach:function(i,o){for(var a in this._data){var l=this._data[a];i.call(o||this,l[1],l[0])}}};e.uid=0,typeof Symbol<"u"&&typeof Symbol.iterator<"u"&&(t[Symbol.iterator]=function(){var i=this.entries(),o=0;return{next:function(){if(o===i.length)return{done:!0};var a=i[o++];return{value:{key:a[0],value:a[1]},done:!1}}}}),["set","multi","copy","delete","clear","forEach"].forEach(function(i){var o=t[i];t[i]=function(){return o.apply(this,arguments),this}}),e.prototype.remove=e.prototype.delete;function n(i,o){for(var a=0;a<o.length;a+=2)i.set(o[a],o[a+1])}function r(i,o){Object.defineProperty&&Object.defineProperty(i,o,{enumerable:!1})}return e})})(fa);var xu=fa.exports;const $s=Cr(xu),Wn=1,xr=2,cs=3,us=4,Nr=5,Nu=6,Iu=7,Lu=8,Ou=9,Pu=10,Fu=11,Du=12,Mu=13,lt=14;let zu=class{constructor(e){L(this,"_in","");L(this,"_pos",0);L(this,"_quote",!1);e==null?this.setInput(""):this.setInput(e)}setInput(e){this._in=e,this._pos=0}get position(){return this._pos}nextToken(){let e=this._pos;for(;this.hasMoreChars();){e=this._pos;let t=this.nextChar();if(this._quote)if(t=='"'){if(this.hasMoreChars()){if(t=this.nextChar(),t=='"')return new Ce(lt,'"',this._pos-2);this._pos--}this._quote=!1;continue}else return this.createToken(lt,""+t);switch(t){case" ":case`
`:case"\r":case"	":continue;case'"':this._quote=!0;continue;case"|":return this.createToken(xr,"|");case"*":return this.createToken(cs,"*");case"+":return this.createToken(us,"+");case"?":return this.createToken(Nr,"?");case"(":return this.createToken(Nu,"(");case")":return this.createToken(Iu,")");case"[":return this.createToken(Lu,"[");case"]":return this.createToken(Ou,"]");case"^":return this.createToken(Fu,"^");case".":return this.createToken(Pu,".");case"-":return this.createToken(Du,"-");case"\\":return this.processesAdvChar();case"{":return this.processesDefinition();default:return this.createToken(lt,""+t)}}if(this._quote)throw new Ne(`Era esperado '"'`,e);return null}processesAdvChar(){return new Ce(lt,""+this.getSpecialChar(),this._pos-1)}createToken(e,t){return new Ce(e,t,this._pos-1)}getSpecialChar(){let e=this._pos;if(!this.hasMoreChars)throw new Ne("Era esperado um Caracter Especial",e);let t=this.nextChar();if(t==null)return null;switch(t){case"b":return"\b";case"n":return`
`;case"f":return"\f";case"r":return"\r";case"e":return String.fromCharCode(27);case"t":return"	";case"	":return"	";case"s":return" ";case" ":return" ";case'"':return'"';case"\\":return"\\";case"|":return"|";case"*":return"*";case"+":return"+";case"?":return"?";case"(":return"(";case")":return")";case"{":return"{";case"}":return"}";case"[":return"[";case"]":return"]";case".":return".";case"^":return"^";case"-":return"-";default:if(this.isNumber(t))return this.getCharByCode(t);throw new Ne("Caracter especial inválido: '"+t+"'",this._pos)}}getCharByCode(e){let t=this._pos-1,n=this.nextChar();if(n==null)return null;if(this.hasMoreChars()&&this.isNumber(n)){let o=this.nextChar();if(o==null)return null;this.hasMoreChars()&&!this.isNumber(o)&&this._pos--}else this._pos--;let i=this._in.substring(t,this._pos).charCodeAt(0);if(i>255)throw new Ne("Valor decimal inválido (>255)",t);return String.fromCharCode(i)}processesDefinition(){let e="",t=this._pos,n="{";for(;this.hasMoreChars();){if(n=this.nextChar(),n==null)return null;if(n=="}")break;if(n!="_"&&!this.isLetterOrDigit(n))throw new Ne("Caracter inválido em uma definição: '"+n+"'",this._pos-1);e+=n}if(n!="}"&&!this.hasMoreChars())throw new Ne("Fim de expressão inesperado",this._pos);return new Ce(Mu,e.toString(),t)}hasMoreChars(){return this._pos<this._in.length}nextChar(){return this.hasMoreChars()?this._in.charAt(this._pos++):null}isLetterOrDigit(e){return e.toLowerCase()!=e.toUpperCase()||this.isNumber(e)}isNumber(e){return typeof e!="string"||e.trim()===""?!1:!Number.isNaN(Number(e))}};class Si{constructor(){L(this,"position",-1);L(this,"nullable",!1);L(this,"first",new Te);L(this,"last",new Te)}}class ke{constructor(e,t,n){L(this,"_left");L(this,"_right");L(this,"_id",0);L(this,"_value","");L(this,"_backtrack",!0);L(this,"_context",-1);L(this,"_end",-1);L(this,"_alphabet",new Te);L(this,"_metaData",new Si);this._id=e,this._left=t,this._right=n,t!=null&&this.alphabet.addAll(t.alphabet),n!=null&&this.alphabet.addAll(n.alphabet)}deepestLeft(){let e=this;for(;;){let t=e.left;if(t==null&&(t=e.right),t==null)break;e=t}return e}static createUnionNode(e,t){let n=new ke(xr,e,t);return n.value="|",n}static createConcatNode(e,t){let n=new ke(-1,e,t);return n.value="&",n}static createContextNode(e,t){let n=t.deepestLeft();if(n==null)return null;n.context=0;let r=new ke(-1,e,t);return r.value="&",r}static createClosureNode(e){let t=new ke(cs,e,null);return t.value="*",t}static createClosureObNode(e){let t=new ke(us,e,null);return t.value="+",t}static createOptionalNode(e){let t=new ke(Nr,e,null);return t.value="?",t}static createIntervalNode(e,t){let n=new ke(lt,null,null);for(let i=e.charCodeAt(0);i<=t.charCodeAt(0);i++)n.alphabet.add(i);let r="[";for(let i of n.alphabet)r+=String.fromCharCode(i);return r+="]",n.value=r,n}static createComplementNode(e){let t=new ke(lt,null,null);e.alphabet.has("	".charCodeAt(0))||t.alphabet.add("	".charCodeAt(0)),e.alphabet.has(`
`.charCodeAt(0))||t.alphabet.add(`
`.charCodeAt(0)),e.alphabet.has("\r".charCodeAt(0))||t.alphabet.add("\r".charCodeAt(0)),e.alphabet.has(" ".charCodeAt(0))||t.alphabet.add(" ".charCodeAt(0));for(let r=32;r<=126;r++)e.alphabet.has(r)||t.alphabet.add(r);for(let r=161;r<=255;r++)e.alphabet.has(r)||t.alphabet.add(r);let n="[";for(let r of t.alphabet)n+=String.fromCharCode(r);return n+="]",t.value=n,t}static createCharNode(e){let t=new ke(lt,null,null);return t.value=e,t.alphabet.add(e.charCodeAt(0)),t}static createAllNode(){let e=new ke(lt,null,null);e.alphabet.add("	".charCodeAt(0));for(let n=32;n<=126;n++)e.alphabet.add(n);for(let n=161;n<=255;n++)e.alphabet.add(n);let t="[";return e.alphabet.list().forEach(n=>{t+=String.fromCharCode(n)}),t+="]",e.value=t,e}static createEndNode(e,t){let n=new ke(lt,null,null);return n.end=e,n.backtrack=t,n.value="#"+n.end,n}clone(){let e=structuredClone(this);return e.alphabet=new Te(this._alphabet),e.metaData=new Si,e.backtrack=!0,e.context=-1,e.end=-1,this._left!=null&&(e.left=this._left.clone()),this._right!=null&&(e.right=this._right.clone()),e}get left(){return this._left}set left(e){this._left=e}get right(){return this._right}set right(e){this._right=e}get id(){return this._id}set id(e){this._id=e}get value(){return this._value}set value(e){this._value=e}doBacktrack(){return this._backtrack}set backtrack(e){this._backtrack=e}get backtrack(){return this._backtrack}get context(){return this._context}set context(e){this._context=e}get end(){return this._end}set end(e){this._end=e}get alphabet(){return this._alphabet}set alphabet(e){this._alphabet=e}get metaData(){return this._metaData}set metaData(e){this._metaData=e}toString(){return String(0)}toStringLevel(e){var n,r;let t="";for(let i=0;i<e-2;i++)t+=" ";return e>2&&(t+="\\-"),t+=`value
`,this._left!=null&&(t+=String((n=this._left)==null?void 0:n.toStringLevel(e+2))),this._right!=null&&(t+=String((r=this._right)==null?void 0:r.toStringLevel(e+2))),t}}class pa{constructor(e){L(this,"_definitions",new $s);L(this,"_expressions",new $s);L(this,"_specialCases",new $s);L(this,"_root",null);L(this,"_alphabet",new Te);L(this,"_lastPosition",-1);L(this,"_tokenList",new ge);L(this,"_sensitive",!0);L(this,"_contextCount",0);L(this,"_next",[new Te]);L(this,"_nodes",[]);this._sensitive=e}addDefinition(e,t){if(this._definitions.has(e))throw new Be("Definição repetida: "+e);this._definitions.set(e,t),this._alphabet.addAll(t.alphabet)}getDefinitionById(e){return this._definitions.get(e)}addExpression(e,t,n){var a;this._alphabet.addAll(t.alphabet),this._tokenList.contains(e)||this._tokenList.add(e);let r=this._tokenList.indexOf(e),i=ke.createEndNode(r+2,n);t=ke.createConcatNode(t,i);let o=(a=t.left)==null?void 0:a.right;o!=null&&(o=o.deepestLeft(),o!=null&&o.context>=0&&(this._contextCount++,o.context=this._contextCount,i.context=this._contextCount)),this._expressions.set(e,t),this._root==null?this._root=t:this._root=ke.createUnionNode(this._root,t)}addIgnore(e,t){this._alphabet.addAll(e.alphabet);let n=ke.createEndNode(0,t);e=ke.createConcatNode(e,n),this._root==null?this._root=e:this._root=ke.createUnionNode(this._root,e)}addSpecialCase(e,t,n){if(this._sensitive||(n=n.toLocaleUpperCase()),!this._expressions.has(t))throw new Be("Token '"+t+"' não definido");let r=this._tokenList.indexOf(t)+2;if(this._tokenList.contains(e))throw new Be("Token '"+e+"' já definido");let i=this._tokenList.size()+2,o=this._specialCases.get(r);if(o==null)o=new ft,this._specialCases.set(r,o);else if(o.get(n)!=null)throw new Be("Já houve a definição de um caso especial de '"+t+`' com o valor"`+n+'"');o.set(n,i),this._tokenList.add(e)}generateAutomata(){let e=new ge,t=new ft,n=new ft,r=new ft,i=new ft,o=new ft;if(this._root==null)throw new Be("A Especificação Léxica deve conter a definição de pelo menos um Token");this.computeNext(),e.add(this._root.metaData.first);for(let a=0;a<e.size();a++){let l=e.get(a);for(let u of this._alphabet){let f=String.fromCharCode(u),h=new Te;for(let b of l){let p=this._nodes[b];if(p.end>=0){let T=a;if(!i.has(T)&&(i.set(T,p.end),o.set(T,p.backtrack),p.context>0&&!t.has(T))){let _=n.get(p.context);_!=null?t.set(T,_):t.set(T,0)}}p.context>=0&&(n.has(p.context)||n.set(p.context,a)),p.alphabet.has(f.charCodeAt(0))&&h.addAll(this._next[b])}let m=-1;h.isEmpty()||(m=this.getPositionStates(e,h),m==-1&&(e.add(h),m=e.size()-1));let d=a;if(r.has(d)||r.set(d,new ft),m!=-1){let b=r.get(d);if(b==null)return null;b.set(f,m)}}}return this.makeAtomata(e,r,i,o,t)}makeAtomata(e,t,n,r,i){let o=new ge;for(let d of t)o.add(d[1]);let a=new Array;a.length=e.size();for(let d=0;d<a.length;d++){let b=n.get(d);b!=null?a[d]=b:a[d]=-1}for(let d=0;d<a.length;d++){let b=r.get(d);b!=null&&b==!1&&this.computPrecedersOf(d,o).forEach(T=>{a[T]<0&&(a[T]=-2)})}let l=[],u=Array(this._tokenList.size()+2).fill(void 0);for(let d=0;d<u.length;d++){let b=this._specialCases.get(d),p=l.length;if(b!=null){const _=new Map([...b.entries()].sort());for(const[g,y]of _.entries())l.push(new bi(g,y))}let T=l.length;u[d]=[p,T]}let f=new Array;const h=Object.assign({},l);f=Object.setPrototypeOf(h,bi.prototype);let m=Array.from({length:e.size()},()=>Array.from({length:2}));for(let d=0;d<m.length;d++)m[d][0]=0,m[d][1]=-1;for(const[d,b]of i.entries())m[b][0]=1,m[d][1]=b;return new ku(this._alphabet,o,a,u,f,m,this._tokenList,this._sensitive)}getPositionStates(e,t){let n=0;for(let r of e){let i=r.list(),o=t.list();if(i.length===o.length&&i.every((l,u)=>l===o[u]))return n;n++}return-1}computPrecedersOf(e,t){let n=new Set;n.add(e);let r;do{r=!1;for(const i of n)e:for(let o=0;o<t.size();o++)for(const a of t.get(o).values())if(n.has(a)&&a==i&&!n.has(o)){n.add(o),r=!0;break e}}while(r);return n}computeNext(){this.computeMetaData(this._root),this._next=new Array(this._lastPosition+1),this._nodes=new Array(this._lastPosition+1);for(let e=0;e<this._lastPosition+1;e++)this._next[e]=new Te;this.computeNextNode(this._root)}computeNextNode(e){if(e===null)throw Error("error");let t;switch(e.id){case-1:if(t=e.left,t!=null)for(let n of t.metaData.last){if(e.right==null)throw new Error("Node direita vazio");this._next[n].addAll(e.right.metaData.first)}break;case cs:case us:if(e.left==null)throw new Error("Node direita vazio");for(let n of e.left.metaData.last)this._next[n].addAll(e.left.metaData.first);break;case lt:this._nodes[e.metaData.position]=e;break}e.left!=null&&this.computeNextNode(e.left),e.right!=null&&this.computeNextNode(e.right)}computeMetaData(e){if(e==null)return;e.left!=null&&this.computeMetaData(e.left),e.right!=null&&this.computeMetaData(e.right);let t=e.metaData,n=e.left,r=e.right;switch(e.id){case lt:this._lastPosition++,t.position=this._lastPosition,t.nullable=!1,t.first.add(this._lastPosition),t.last.add(this._lastPosition);break;case Nr:case cs:t.nullable=!0,n!=null&&(n.metaData.first.list().forEach(i=>t.first.add(i)),n.metaData.last.list().forEach(i=>t.last.add(i)));break;case us:t.nullable=!1,n!=null&&(n.metaData.first.list().forEach(i=>t.first.add(i)),n.metaData.last.list().forEach(i=>t.last.add(i)));break;case xr:if(n==null||r==null)return;t.nullable=n.metaData.nullable||r.metaData.nullable,n.metaData.first.list().forEach(i=>t.first.add(i)),r.metaData.first.list().forEach(i=>t.first.add(i)),n.metaData.last.list().forEach(i=>t.last.add(i)),r.metaData.last.list().forEach(i=>t.last.add(i));break;case-1:if(n==null||r==null)return;t.nullable=n.metaData.nullable&&r.metaData.nullable,n.metaData.first.list().forEach(i=>t.first.add(i)),n.metaData.nullable&&r.metaData.first.list().forEach(i=>t.first.add(i)),r.metaData.last.list().forEach(i=>t.last.add(i)),r.metaData.nullable&&n.metaData.last.list().forEach(i=>t.last.add(i));break}}}let ju=class{constructor(e){L(this,"_exp_simp1",new zt);L(this,"_termo1",new zt);L(this,"_fator",new zt);L(this,"_gen");L(this,"_token",null);this._gen=e}executeAction(e,t){this._token=t;try{switch(e){case 0:break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break;case 6:this.action6();break;case 7:this.action7();break;case 8:this.action8();break;case 9:this.action9();break;case 10:this.action10();break;case 11:this.action11();break;case 12:this.action12();break;case 13:this.action13();break;case 14:this.action14();break;case 15:this.action15();break}}catch(n){if(n instanceof Be)throw new Be(n.message)}}get root(){return this._exp_simp1.pop()}action1(){let e=this._termo1.pop();e!=null&&this._exp_simp1.push(e)}action2(){let e=this._exp_simp1.pop(),t=this._termo1.pop();if(e==null||t==null)return;let n=ke.createUnionNode(e,t);n!=null&&this._exp_simp1.push(n)}action3(){let e=this._exp_simp1.pop(),t=this._exp_simp1.pop();if(t==null||e==null)return;let n=ke.createContextNode(t,e);n!=null&&this._exp_simp1.push(n)}action4(){if(this._fator==null)return;let e=this._fator.pop();e!=null&&this._termo1.push(e)}action5(){let e=this._termo1.pop(),t=this._fator.pop();e==null||t==null||this._termo1.push(ke.createConcatNode(e,t))}action6(){let e=this._fator.pop();e!=null&&this._fator.push(ke.createClosureNode(e))}action7(){let e=this._fator.pop();e!=null&&this._fator.push(ke.createClosureObNode(e))}action8(){let e=this._fator.pop();e!=null&&this._fator.push(ke.createOptionalNode(e))}action9(){let e=this._exp_simp1.pop();e!=null&&this._fator.push(e)}action10(){this._fator.push(ke.createAllNode())}action11(){if(this._token==null)return;let e=this._gen.getDefinitionById(this._token.lexeme);if(e==null)throw new Be("Definição não declarada: "+this._token.lexeme,this._token.position);const t=Object.assign({},e);this._fator.push(Object.setPrototypeOf(t,ke.prototype))}action12(){this._token!=null&&this._fator.push(ke.createCharNode(this._token.lexeme.charAt(0)))}action13(){let e=this._fator.pop();e!=null&&this._fator.push(ke.createComplementNode(e))}action14(){let e=this._fator.pop(),t=this._fator.pop();if(t==null||e==null)return;let n=ke.createUnionNode(t,e);n!=null&&this._fator.push(n)}action15(){if(this._token==null)return;let e=this._fator.pop(),t=ke.createCharNode(this._token.lexeme.charAt(0));if(e==null||t==null)return;let n=String.fromCharCode(e.alphabet.list()[0]),r=String.fromCharCode(t.alphabet.list()[0]);if(n>=r)throw new Be("Intervalo inválido",this._token.position);this._fator.push(ke.createIntervalNode(n,r))}};const Xe=["","Era esperado fim de linha",'Era esperado "|"','Era esperado "*"','Era esperado "+"','Era esperado "?"','Era esperado "("','Era esperado ")"','Era esperado "["','Era esperado "]"','Era esperado "."','Era esperado "^"','Era esperado "-"',"Era esperada uma definição","Era esperado um caractere","Era esperada uma expressão regular","Era esperada uma expressão regular","Era esperado ), |, ^ ou o fim da expressão","Era esperada uma expressão","Era esperada uma expressão","Contexto inválido","Termo inválido","Operador inválido","Fator inválido","Era esperado ^ ou um caractere","Classe de caracteres inválida","Item inválido: era esperado um caractere","Era esperado -, ], ou um caractere"];class ma{constructor(){L(this,"_currentToken",null);L(this,"_previousToken",null);L(this,"_scanner",null);L(this,"_semanticAnalyser",null)}parse(e,t){if(this._scanner=new zu(e),this._semanticAnalyser=new ju(t),this._currentToken=this._scanner.nextToken(),this._currentToken==null&&(this._currentToken=new Ce(Wn,"$",0)),this.reg_exp_ctxt(),this._currentToken.id!=Wn)throw new Q(Xe[Wn],this._currentToken.position);return this._semanticAnalyser.root}match(e){if(this._currentToken==null)throw new pe("Atributo durante comparação do REParser.");if(this._scanner==null)throw new pe("Scanner é nulo.");if(this._currentToken.id==e){if(this._previousToken=this._currentToken,this._currentToken=this._scanner.nextToken(),this._currentToken==null){let t=0;this._previousToken!=null&&(t=this._previousToken.position+this._previousToken.lexeme.length),this._currentToken=new Ce(Wn,"$",t)}}else throw new Q(Xe[e],this._currentToken.position)}reg_exp_ctxt(){if(this._currentToken==null)throw new pe("Atributo Nulo durante reg_exp_ctxt do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.reg_exp(),this.context();break;default:throw new Q(Xe[15],this._currentToken.position)}}reg_exp(){if(this._currentToken==null)throw new pe("Atributo Nulo durante reg_exp do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.exp(),this._semanticAnalyser.executeAction(1,this._previousToken),this.reg_exp_c();break;default:throw new Q(Xe[16],this._currentToken.position)}}reg_exp_c(){if(this._currentToken==null)throw new pe("Atributo Nulo durante reg_exp_c do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 7:case 11:break;case 2:this.match(2),this.exp(),this._semanticAnalyser.executeAction(2,this._previousToken),this.reg_exp_c();break;default:throw new Q(Xe[17],this._currentToken.position)}}exp(){if(this._currentToken==null)throw new pe("Atributo Nulo durante exp do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(4,this._previousToken),this.exp_c();break;default:throw new Q(Xe[18],this._currentToken.position)}}exp_c(){if(this._currentToken==null)throw new pe("Atributo Nulo durante exp_c do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 7:case 11:break;case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(5,this._previousToken),this.exp_c();break;default:throw new Q(Xe[19],this._currentToken.position)}}context(){if(this._currentToken==null)throw new pe("Atributo Nulo durante context do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:break;case 11:this.match(11),this.reg_exp(),this._semanticAnalyser.executeAction(3,this._previousToken);break;default:throw new Q(Xe[20],this._currentToken.position)}}term(){if(this._currentToken==null)throw new pe("Atributo Nulo durante term do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.factor(),this.op();break;default:throw new Q(Xe[21],this._currentToken.position)}}op(){if(this._currentToken==null)throw new pe("Atributo Nulo durante op do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 6:case 7:case 8:case 10:case 11:case 13:case 14:break;case 3:this.match(3),this._semanticAnalyser.executeAction(6,this._previousToken);break;case 4:this.match(4),this._semanticAnalyser.executeAction(7,this._previousToken);break;case 5:this.match(5),this._semanticAnalyser.executeAction(8,this._previousToken);break;default:throw new Q(Xe[22],this._currentToken.position)}}factor(){if(this._currentToken==null)throw new pe("Atributo Nulo durante factor do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:this.match(6),this.reg_exp(),this.match(7),this._semanticAnalyser.executeAction(9,this._previousToken);break;case 8:this.match(8),this.end_class();break;case 10:this.match(10),this._semanticAnalyser.executeAction(10,this._previousToken);break;case 13:this.match(13),this._semanticAnalyser.executeAction(11,this._previousToken);break;case 14:this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken);break;default:throw new Q(Xe[23],this._currentToken.position)}}end_class(){if(this._currentToken==null)throw new pe("Atributo Nulo durante end_class do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 11:this.match(11),this.item(),this.class_c(),this.match(9),this._semanticAnalyser.executeAction(13,this._previousToken);break;case 14:this.item(),this.class_c(),this.match(9);break;default:throw new Q(Xe[24],this._currentToken.position)}}class_c(){if(this._currentToken==null)throw new pe("Atributo Nulo durante class_c do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:break;case 14:this.item(),this.class_c(),this._semanticAnalyser.executeAction(14,this._previousToken);break;default:throw new Q(Xe[25],this._currentToken.position)}}item(){if(this._currentToken==null)throw new pe("Atributo Nulo durante item do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 14:this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken),this.end_interval();break;default:throw new Q(Xe[26],this._currentToken.position)}}end_interval(){if(this._currentToken==null)throw new pe("Atributo Nulo durante end_interval do REParser.");if(this._semanticAnalyser==null)throw new pe("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:case 14:break;case 12:this.match(12),this.match(14),this._semanticAnalyser.executeAction(15,this._previousToken);break;default:throw new Q(Xe[27],this._currentToken.position)}}}var ga=(s=>(s[s.DEFINITION=0]="DEFINITION",s[s.TOKEN=1]="TOKEN",s[s.NON_TERMINAL=2]="NON_TERMINAL",s[s.GRAMMAR=3]="GRAMMAR",s))(ga||{});const hs=class hs extends Error{constructor(t,n,r){super(r.message);L(this,"_mode");L(this,"_index");L(this,"_cause");this._cause=r,this._index=n,this._mode=t,Object.setPrototypeOf(this,hs.prototype)}};L(hs,"Mode",ga);let Fe=hs;class Bu{constructor(e,t){L(this,"_lexeme");L(this,"_base");this._lexeme=e,this._base=t}get lexeme(){return this._lexeme}get base(){return this._base}}class _a{constructor(){L(this,"_expressionFor",new Map);L(this,"_specialCasesValues",new Map);L(this,"_definitions",new ge);L(this,"_tokens",new ge);L(this,"_specialCases",new ge);L(this,"_ignore","")}addDefinition(e,t){this._definitions.add(e),this._expressionFor.set(e,t)}addToken(e,t){this._tokens.add(e),this._expressionFor.set(e,t)}clear(){this._definitions.clear,this._tokens.clear,this._specialCases.clear,this._expressionFor.clear,this._specialCasesValues.clear}expressionFor(e){return this._expressionFor.get(e)}get tokens(){return this._tokens}get definitions(){return this._definitions}get specialCases(){return this._specialCases}get ignore(){return this._ignore}addIgnore(e){this._ignore.length>0?this._ignore=this.ignore+"|"+e:this._ignore=e}addSpecialCase(e,t,n){this._specialCases.add(e),this._specialCasesValues.set(e,new Bu(t,n))}getSpecialCaseValue(e){return this._specialCasesValues.get(e)}getFA(e){let t=new ma,n=new pa(e),r=-1;try{for(r=0;r<this._definitions.size();r++){let i=this.expressionFor(this._definitions.get(r));if(i==null)throw new pe("Expressão de Definições vazia.");let o=t.parse(i,n);if(o==null)throw new pe("Erro no Parse do Automata Finito.");n.addDefinition(this._definitions.get(r),o)}}catch(i){throw new Fe(Fe.Mode.DEFINITION,r,i)}try{for(r=0;r<this._tokens.size();r++){let i=this.expressionFor(this._tokens.get(r));if(i==null)throw new pe("Expressão de Token vazia.");let o=t.parse(i,n);if(o==null)throw new pe("Erro no Parse do Automata Finito.");n.addExpression(this._tokens.get(r),o,!0)}}catch(i){throw new Fe(Fe.Mode.TOKEN,r,i)}try{for(r=0;r<this._specialCases.size();r++){let i=this._specialCases.get(r),o=this._specialCasesValues.get(i);if(o==null)throw new pe("Valor do Caso Especial vazio.");n.addSpecialCase(i,o.base,o.lexeme)}}catch(i){throw new Fe(Fe.Mode.TOKEN,r,i)}try{if(this._ignore.length>0){let i=t.parse(this._ignore,n);if(i==null)throw new pe("Nó ignorado vazio.");n.addIgnore(i,!0)}}catch(i){throw new Fe(Fe.Mode.TOKEN,this._tokens.size(),i)}try{let i=n.generateAutomata();if(i==null)throw new pe("Erro ao criar Autômato Finito.");return i}catch(i){throw new Fe(Fe.Mode.TOKEN,this._tokens.size(),i)}}}class fe{}L(fe,"EPSILON",0),L(fe,"DOLLAR",1),L(fe,"DERIVES",2),L(fe,"PIPE",3),L(fe,"SEMICOLON",4),L(fe,"TERM",5),L(fe,"NON_TERM",6),L(fe,"ACTION",7),L(fe,"START_SYMBOL",8),L(fe,"FIRST_NON_TERMINAL",8),L(fe,"FIRST_SEMANTIC_ACTION",17),L(fe,"LAST_SEMANTIC_ACTION",22),L(fe,"TABLE",[[-1,-1,-1,-1,-1,0,-1],[2,-2,-2,-2,-2,1,-2],[-3,-3,-3,-3,-3,3,-3],[-4,-4,4,5,-4,-4,-4],[-5,-5,-5,-1,6,7,8],[-6,-6,10,10,9,9,9],[-7,-7,-7,-7,11,0,-7],[-8,-8,-8,-8,-8,12,-8],[-9,-9,-9,-9,-9,-9,13]]),L(fe,"PRODUCTIONS",[[10,9],[8],[0],[15,17,2,12,18,11,4],[3,12,18,11],[0],[14,19,13],[15,19,13],[16,20,13],[12],[0],[5,21],[6,21],[7,22]]),L(fe,"EXPECTED_MESSAGE",["î","$","::=","|",";","um símbolo terminal","um símbolo não-terminal","uma ação semântica"]),L(fe,"PARSER_ERROR",["Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal","Era esperado '|' ou ';'","Era esperado um Terminal, um Não-Terminal, ou uma Ação Semântica","Construção inválida","Era esperado um Terminal","Era esperado um Não-Terminal","Era esperado uma Ação Semântica"]);class Ti{constructor(e){L(this,"symbols");L(this,"actionCount",0);L(this,"lhs");L(this,"rhs");L(this,"productions");L(this,"token");this.symbols=e,this.lhs=0,this.rhs=[],this.productions=new ge,this.token=new Ce(-1,"ERROR",-1)}getPoductions(){return this.productions}executeAction(e,t){switch(this.token=t,e){case 0:this.action0();break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break}}action0(){const e=this.symbols.get(this.token.lexeme);if(e===void 0)throw new Be("Lexema não pode ser nulo");this.lhs=e}action1(){const e=new mt(null,this.lhs);for(let t=0;t<this.rhs.length;t++)e.add_rhs(this.rhs[t]);this.productions.add(e),this.rhs=[]}action2(){const e=this.symbols.get(this.token.lexeme);if(e===void 0)throw new Be("Lexema não pode ser nulo");const t=e;t!=fe.EPSILON&&this.rhs.push(t)}action3(){const e=Number(this.token.lexeme);this.rhs.push(this.symbols.size+e+1)}action4(){if(!this.symbols.has(this.token.lexeme))throw new Be("Símbolo "+this.token.lexeme+" não declarado",this.token.position)}action5(){const e=Number(this.token.lexeme);this.actionCount<e&&(this.actionCount=e)}}class Hs{constructor(e){L(this,"input");L(this,"pos");L(this,"returnComents",!1);L(this,"endPosition");e==null?(this.input="",this.pos=-1,this.endPosition=-1):(this.input=e,this.pos=0,this.endPosition=e.length)}setReturnComents(e){this.returnComents=e}setInput(e){this.input=e,this.pos=0,this.endPosition=e.length}nextToken(){for(;this.hasMoreChars();){let e=this.pos,t=this.nextChar();switch(t){case" ":case`
`:case"\r":case"	":continue;case":":return this.analyseDerives();case"|":return new Ce(fe.PIPE,"|",e);case";":return new Ce(fe.SEMICOLON,";",e);case"#":return this.analyseAction();case"<":return this.analyseNonTerminal();case"_":case'"':return this.analyseTerminal(t);case"/":{let n=this.analyseComent();if(this.returnComents)return n;continue}default:if(this.isLetter(t))return this.analyseTerminal(t);throw new Ne("Caracter Inválido: '"+t+"'",e)}}return null}isLetter(e){return/^[a-zA-Zî]+$/.test(e)}analyseComent(){let e=this.pos-1;if(!this.hasMoreChars())throw new Ne("Caracter Inválido: '/'",e);let t=this.nextChar();if(t!="/")throw this.pushChar(),new Ne("Caracter Inválido: '/'",e);let n="//";for(;this.hasMoreChars();){if(t=this.nextChar(),t==`
`){this.pushChar();break}n+=t}return new Ce(-1,n.toString(),e)}analyseDerives(){let e=this.pos-1;if(this.input.length-e>=3){let t=this.nextChar();if(t==":"&&(t=this.nextChar(),t=="="))return new Ce(fe.DERIVES,"::=",e)}throw new Ne("Símbolo Inválido",e)}getPosition(){return this.pos}setPosition(e){this.pos=e}setEnd(e){this.endPosition=e}setRange(e,t){this.setPosition(e),this.setEnd(t)}analyseTerminal(e){let t=this.pos-1,n="";if(n+=e,e=='"'){let r=!1;for(;this.hasMoreChars();)if(e=this.nextChar(),n+=e,e=='"')if(this.hasMoreChars())if(e=this.nextChar(),e=='"')n+=e;else{this.pushChar(),r=!0;break}else r=!0;else if(e==`
`)throw new Ne("Terminal inválido",t);if(n.length==0||!r)throw new Ne("Terminal inválido",t)}else for(;this.hasMoreChars();){if(e=this.nextChar(),e!="_"&&!this.isLetterOrDigit(e)){this.pushChar();break}n+=e}return new Ce(fe.TERM,n.toString(),t)}isLetterOrDigit(e){return/^[a-zA-Z0-9]$/.test(e)}analyseNonTerminal(){let e=this.pos-1,t="",n="<";for(;this.hasMoreChars()&&(n=this.nextChar(),n!=">");){if(!this.isLetterOrDigit(n)&&n!="_")throw new Ne("Não-Terminal inválido",e);t+=n}if(t.length==0||n!=">")throw new Ne("Não-Terminal inválido",e);return new Ce(fe.NON_TERM,"<"+t+">",e)}analyseAction(){let e=this.pos-1,t="";for(;this.hasMoreChars();){let n=this.nextChar();if(!this.isDigit(n)){this.pushChar();break}t+=n}if(t.length==0)throw new Ne("Ação Semântica inválida",e);return new Ce(fe.ACTION,t.toString(),e)}isDigit(e){return!isNaN(Number(e))&&!isNaN(parseInt(e))}hasMoreChars(){return this.pos<this.endPosition}nextChar(){return this.hasMoreChars()?this.input.charAt(this.pos++):String.fromCharCode(-1)}pushChar(){this.pos--}}class Mn{constructor(){L(this,"stack",[]);L(this,"currentToken",null);L(this,"previousToken",new Ce(-1,"ERROR",-1));L(this,"scanner",new Hs);L(this,"semanticAnalyser",new Ti(new Map))}parse(e,t,n){let r=new ft;r.set(Ut.EPSILON_STR,0);let i=2,o=new Hs,a=0,l=new Set;try{for(let h=0;h<e.size();h++){let m=e.get(h);if(m==`
`){a++,e.removeByIndex(h),h--;continue}o.setInput(m);let d=o.nextToken();if(d==null)e.removeByIndex(h),h--;else{if(d.id!=fe.TERM)throw new Be("Era esperada a declaração de um terminal",d.position);let b=d.lexeme;if(l.has(b))throw new Be("Terminal repetido : "+b,d.position);if(l.add(b),e.set(h,b),r.set(b,i),i++,(d=o.nextToken())!=null)throw new Be("Cada linha deve conter a declaração de apenas um símbolo terminal",d.position)}}if(e.size()==0)throw new Be("Conjunto de Terminais não pode ser vazio",0)}catch(h){throw new Fe(Fe.Mode.TOKEN,a,h)}a=0,l=new Set;try{for(let h=0;h<t.size();h++){let m=t.get(h);if(m==`
`){a++,t.removeByIndex(h),h--;continue}o.setInput(m);let d=o.nextToken();if(d==null)t.removeByIndex(h),h--;else{if(d.id!=fe.NON_TERM)throw new Be("Era esperada a declaração de um não-terminal",d.position);let b=d.lexeme;if(l.has(b))throw new Be("Não-terminal repetido : "+b,d.position);if(l.add(b),t.set(h,b),r.set(b,i),i++,(d=o.nextToken())!=null)throw new Be("Cada linha deve conter a declaração de apenas um símbolo não-terminal",d.position)}}if(t.size()==0)throw new Be("Conjunto de Não-Terminais não pode ser vazio",0)}catch(h){throw new Fe(Fe.Mode.NON_TERMINAL,a,h)}try{this.parseByMap(n,r)}catch(h){throw new Fe(Fe.Mode.GRAMMAR,-1,h)}let u=this.semanticAnalyser.getPoductions(),f=2+e.size();return new Ut(e.toArray(),t.toArray(),u,f)}parseByMap(e,t){for(this.scanner=new Hs(e),this.semanticAnalyser=new Ti(t),this.stack.push(fe.DOLLAR),this.stack.push(fe.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););}step(){let e=this.stack.pop();if(e===void 0)return!1;let t;if(this.currentToken==null?t=fe.DOLLAR:t=this.currentToken.id,e==fe.EPSILON)return!1;if(this.isTerminal(e)){if(e==t)return this.stack.length==0?!0:(this.previousToken=this.currentToken,this.currentToken=this.scanner.nextToken(),!1);throw new Q("Era esperado "+fe.EXPECTED_MESSAGE[e],this.scanner.getPosition())}else if(this.isNonTerminal(e)){let n=fe.TABLE[e-fe.FIRST_NON_TERMINAL][t-1];if(n>=0){let r=fe.PRODUCTIONS[n];if(r===void 0)throw new Q("Produção não definida");for(let i=r.length-1;i>=0;i--)this.stack.push(r[i]);return!1}else throw new Q(fe.PARSER_ERROR[e-fe.FIRST_NON_TERMINAL],this.scanner.getPosition())}else if(this.isSemanticAction(e)){if(this.previousToken===null)throw new Ne("Token anterior é Nulo");return this.semanticAnalyser.executeAction(e-fe.FIRST_SEMANTIC_ACTION,this.previousToken),!1}else return!1}isTerminal(e){return e>=0&&e<fe.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=fe.FIRST_NON_TERMINAL&&e<fe.FIRST_SEMANTIC_ACTION}isSemanticAction(e){return e>=fe.FIRST_SEMANTIC_ACTION&&e<=fe.LAST_SEMANTIC_ACTION}}const Ue=class Ue{constructor(){L(this,"_text","");L(this,"_pos",0);L(this,"_endPos",0);L(this,"_regularMode",!1);L(this,"_specialCaseMode",!1)}set text(e){this._text=e,this.setRange(0,this._text.length),this._regularMode=!1,this._specialCaseMode=!1}setRange(e,t){this._pos=e,this._endPos=t}nextToken(){if(!this.hasMoreChars)return null;if(this._regularMode)return this._specialCaseMode?(this._regularMode=!1,this._specialCaseMode=!1,this.nextToken()):this.parseRE();for(;this.hasMoreChars();){let e=this._pos,t=this.nextChar();if(t==null)return null;switch(t){case`
`:case"\r":this._specialCaseMode=!1,this._regularMode=!1;case" ":continue;case"	":continue;case":":return this._regularMode=!0,new Ce(Ue.COLON,":",e);case"=":return this._specialCaseMode=!0,new Ce(Ue.EQUALS,"=",e);case'"':return this.getString();case"/":return this.getComment();default:return this.isLetter(t)?this.getId():this.getError()}}return null}parseRE(){let e=this._pos;for(this._regularMode=!1;this.hasMoreChars();){let n=this.nextChar();if(n==null)return null;if(n==`
`){this._pos--;break}else if(n=="/"&&this.hasMoreChars()){if(this.nextChar()=="/")return this._pos-=2,this._regularMode=!1,new Ce(Ue.RE,this._text.substring(e,this._pos),e);this._pos--}}let t=this._text.substring(e,this._pos);return new Ce(Ue.RE,t,e)}getString(){let e=this._pos-1;for(;this.hasMoreChars();){let t=this.nextChar();if(t==`
`)break;if(t=='"')if(this.hasMoreChars()){if(this.nextChar()!='"')return this._pos--,new Ce(Ue.STR,this._text.substring(e,this._pos),e)}else return new Ce(Ue.STR,this._text.substring(e,this._pos),e)}return new Ce(Ue.ERROR,this.text.substring(e,this._pos),e)}getId(){let e=this._pos-1;for(;this.hasMoreChars();){let t=this.nextChar();if(t==null)return null;if(!this.isLetterOrDigit(t)&&t!="_"){this._pos--;break}}return new Ce(Ue.ID,this._text.substring(e,this._pos),e)}getError(){let e=this._pos-1;for(;this.hasMoreChars();)if(` 	
\r`.indexOf(this.nextChar())==-1){this._pos--;break}return new Ce(Ue.ERROR,this._text.substring(e,this._pos),e)}getComment(){let e=this._pos-1;if(this.hasMoreChars()){if(this.nextChar()=="/"){for(;this.hasMoreChars();)if(this.nextChar()==`
`){this._pos--;break}return new Ce(Ue.COMMENT,this._text.substring(e,this._pos),e)}this._pos--}return new Ce(Ue.ERROR,this._text.substring(e,this._pos),e)}isLetter(e){return e.toLowerCase()!=e.toUpperCase()}isLetterOrDigit(e){return e.toLowerCase()!=e.toUpperCase()||this.isNumber(e)}isNumber(e){return typeof e!="string"||e.trim()===""?!1:!Number.isNaN(Number(e))}hasMoreChars(){return this._pos<this._endPos}nextChar(){return this.hasMoreChars()?this._text.charAt(this._pos++):String.fromCharCode(-1)}};L(Ue,"ID",0),L(Ue,"STR",1),L(Ue,"RE",2),L(Ue,"COLON",3),L(Ue,"EQUALS",4),L(Ue,"COMMENT",5),L(Ue,"ERROR",6);let Ge=Ue;class sn{constructor(){L(this,"scanner",new Ge);L(this,"pos",0);L(this,"gen",null)}parseFA(e,t,n){this.gen=new pa(n);try{this.parseDefs(e)}catch(r){Kt.Instance.add(r)}this.parseTokens(t);try{let r=this.gen.generateAutomata();if(r==null)throw new pe("Automato gerado é nulo");return r}catch(r){throw console.log(r),new Fe(Fe.Mode.TOKEN,0,r)}}parseDefs(e){if(this.gen==null)return;let t=e.split(/(\n)/g);for(let n of t)if(n!=`
`){this.scanner.text=n;try{let r=this.nextToken();if(this.pos=0,r!=null&&r.id==Ge.ID){let i=r.lexeme;if(this.pos=r.position+i.length,r=this.nextToken(),r!=null&&r.id==Ge.COLON)if(this.pos=r.position+1,r=this.nextToken(),r!=null&&r.id==Ge.RE){let o=r.lexeme;try{let a=this.parseRE(o);if(a==null)return;this.gen.addDefinition(i,a)}catch(a){let l=a;throw l.position=l.position+this.pos,l}}else throw new Q("Era esperado uma Expressão Regular",this.pos);else throw new Q("Era esperado ':'",this.pos)}else{if(r==null)continue;throw new Q("Era esperado um identificador",this.pos)}}catch(r){throw new Fe(Fe.Mode.DEFINITION,0,r)}}}parseTokens(e){let t=0,n=e.split(/(\n)/g);for(let r of n){if(r===`
`){t++;continue}this.scanner.text=r;try{let i=this.nextToken();if(this.pos=0,i!=null)switch(this.pos=i.position+i.lexeme.length,i.id){case Ge.COLON:this.parseIgnore();break;case Ge.ID:case Ge.STR:this.parseId(i);break;default:throw new Q("Era esperado um identificador",0)}}catch(i){throw new Fe(Fe.Mode.TOKEN,t,i)}}}parseIgnore(){let e=this.nextToken();if(e!=null&&e.id==Ge.RE){let t=e.lexeme;try{if(this.gen==null)throw new pe("Gerador de Autômatos Finitos não inicializado!");if(t.charAt(0)=="!"){let n=this.parseRE(t.substring(1));n!=null&&this.gen.addIgnore(n,!1)}else{let n=this.parseRE(t);n!=null&&this.gen.addIgnore(n,!0)}}catch(n){let r=n;throw r.position=r.position+e.position,r}}else throw new Q("Era esperado uma Expressão Regular",this.pos)}parseId(e){if(e==null)return;let t=e.lexeme;if(e=this.nextToken(),e==null)try{if(this.gen==null)return;let n=this.parseRE(t);if(n==null)return;this.gen.addExpression(t,n,!0)}catch(n){let r=n;throw r.position=r.position,r}else switch(this.pos=e.position+e.lexeme.length,e.id){case Ge.COLON:this.parseIdEnd(t);break;case Ge.EQUALS:this.parseSpecialCase(t);break;default:throw this.pos=e.position,new Q("Era esperado ':' ou '='",this.pos)}}parseIdEnd(e){let t=this.nextToken();if(t==null||t.id!=Ge.RE)throw new Q("Era esperado uma Expressão Regular",this.pos);let n=t.lexeme;try{if(this.gen==null)return;if(n.charAt(0)=="!"){let r=this.parseRE(n.substring(1));r!=null&&this.gen.addExpression(e,r,!1)}else{let r=this.parseRE(n);r!=null&&this.gen.addExpression(e,r,!0)}}catch(r){let i=r;throw i.position=i.position+t.position,i}}parseSpecialCase(e){let t=this.nextToken();if(t!=null&&t.id==Ge.ID){let n=t.lexeme;if(this.pos=t.position+e.length,t=this.nextToken(),t!=null&&t.id==Ge.COLON)if(this.pos=t.position+1,t=this.nextToken(),t!=null&&t.id==Ge.STR){let r=t.lexeme;r=r.substring(1,r.length-1);try{if(this.gen==null)return;this.gen.addSpecialCase(e,n,r)}catch(i){let o=i;throw o.position=o.position+t.position,o}if(t=this.nextToken(),t!=null)throw new Q("Só é permitido uma definição por linha",t.position)}else throw new Q("Era esperado uma Expressão Regular",this.pos);else throw new Q("Era esperado ':'",this.pos)}else throw new Q("Era esperado um Identificador",this.pos)}nextToken(){let e=this.scanner.nextToken();if(e!=null){if(e.id==Ge.COMMENT)e=this.nextToken();else if(e.id==Ge.ERROR)throw new Ne("Token inválido",e.position)}return e}parseRE(e){let t=new ma;if(this.gen!=null)return t.parse(e,this.gen)}}const ds=class ds{constructor(e){L(this,"stack",new zt);L(this,"scanner",null);L(this,"currentToken",null);L(this,"previousToken",null);L(this,"table");L(this,"productions");L(this,"semanticStart");L(this,"symbols");L(this,"nodeStack",new zt);L(this,"errors");this.table=e.buildTable(),this.semanticStart=e.firstSemanticAction;const t=e.grammar.productions;this.productions=[],this.symbols=e.grammar.symbols;for(let n=0;n<t.size();n++)this.productions[n]=[],this.productions[n][0]=t.get(n).get_lhs(),this.productions[n][1]=t.get(n).get_rhs().length;this.errors=e.getErrors(this.table)}parse(e,t){this.scanner=e,this.nodeStack.clear(),this.stack.clear(),this.stack.push(0),this.currentToken=e.nextToken();try{for(;!this.step(););const n=this.nodeStack.pop();if(n===void 0)throw new Q("Node is Null");t.add(n)}catch(n){for(let r=0;r<this.nodeStack.size();r++){const i=this.nodeStack.get(r);if(i===void 0)throw new Q("Node is Null");t.add(i)}t.add(new st(n.message)),console.log(n)}return t}step(){const e=this.stack.peek();if(this.currentToken==null){let r=0;this.previousToken!=null&&(r=this.previousToken.position+this.previousToken.lexeme.length),this.currentToken=new Ce(ds.DOLLAR,"$",r)}const t=this.currentToken.id;if(e===void 0)throw new Q("State is undefined");const n=this.table[e][t-1];switch(n.getType()){case Le.SHIFT:if(this.stack.push(n.getParameter()),this.nodeStack.push(new st(this.symbols[this.currentToken.id])),this.previousToken=this.currentToken,this.scanner===null)throw new Q("Scanner is Null");return this.currentToken=this.scanner.nextToken(),!1;case Le.REDUCE:const r=this.productions[n.getParameter()],i=new zt;for(let u=0;u<r[1];u++){this.stack.pop();const f=this.nodeStack.pop();if(f===void 0)throw new Q("Node is Null");i.push(f)}const o=this.stack.peek();if(o===void 0)throw new Q("Old State is Null");this.stack.push(this.table[o][r[0]-1].getParameter());const a=new st(this.symbols[r[0]]);for(;i.size()>0;){const u=i.pop();if(u===void 0)throw new Q("Pivot is Null");a.add(u)}return this.nodeStack.push(a),!1;case Le.ACTION:const l=this.semanticStart+n.getParameter()-1;return this.stack.push(this.table[e][l].getParameter()),this.nodeStack.push(new st("#"+n.getParameter())),!1;case Le.ACCEPT:return!0;case Le.ERROR:throw new Q("Era esperado: "+this.errors.get(e),this.currentToken.position)}return!1}};L(ds,"DOLLAR",1);let ir=ds;class Uu{constructor(){L(this,"lrTable",null)}generate(e,t,n){const r=new Map;return r.set("Token.java",this.generateToken(n)),r.set("Constants.java",this.generateConstants(e,t,n)),e!==null&&r.set("ScannerConstants.java",this.generateScannerConstants(e,n)),t!==null&&r.set("ParserConstants.java",this.generateParserConstants(t,n)),r.set("AnalysisError.java",this.generateAnalysisError(n)),r.set("LexicalError.java",this.generateLexicalError(n)),r.set("SyntacticError.java",this.generateSyntacticError(n)),r.set("SemanticError.java",this.generateSemanticError(n)),r}generateToken(e){const t=[],n=e.pkgName;return n&&n!==""&&t.push(`package ${n};

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

`),t.push(`public class SyntaticError extends AnalysisError
{
    public SyntaticError(String msg, int position)
	 {
        super(msg, position);
    }

    public SyntaticError(String msg)
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
`)}generateConstants(e,t,n){const r=[],i=n.pkgName;i&&i!==""&&r.push(`package ${i};
`);let o=null;if(e===null?o="ParserConstants":t===null?o="ScannerConstants":o="ScannerConstants, ParserConstants",e===null)throw new Ne("Automato Finito é nulo");if(t===null)throw new Q("Gramatica é nulo");return r.push("public interface Constants extends "+o+`
{
    int EPSILON  = 0;
    int DOLLAR   = 1;

`+this.constList(e,t)+`
}
`),r.join(`
`)}generateScannerConstants(e,t){const n=[],r=t.pkgName;if(r&&r!==""&&n.push(`package ${r};

`),n.push(`public interface ScannerConstants
{
`),e==null)throw new Ne("Automato Finito é nulo.");return n.push(this.genLexTables(e,t)),n.push(`}
`),n.join(`
`)}generateParserConstants(e,t){const n=[],r=t.pkgName;if(r&&r!==""&&n.push(`package ${r};
`),n.push(`public interface ParserConstants
{`),e===null)throw new Q("Gramatica é nulo");const i=this.genSyntTables(e,t);if(i===null)throw new Q("Tabela Sintatica é nula");return n.push(i),n.push("}"),n.join(`
`)}genLexTables(e,t){let n;switch(t.scannerTable){case Z.SCANNER_TABLE_FULL:n=this.lex_table(e);break;case Z.SCANNER_TABLE_COMPACT:n=this.lex_table_compress(e);break;case Z.SCANNER_TABLE_HARDCODE:n="";break;default:n="";break}return n+`
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
`);const n=e.transitions.size();for(let r=0;r<n;r++){t.push('        "');const i=e.getError(r);for(let o=0;o<i.length;o++)i.charAt(o)=='"'?t.push('\\"'):t.push(i.charAt(o));t.push(`",
`)}return t.pop(),t.push('"'),t.push(`
    };
`),t.join("")}genSyntTables(e,t){switch(t.parser){case Z.PARSER_REC_DESC:case Z.PARSER_LL:return this.genLLSyntTables(e,t.parser);case Z.PARSER_SLR:case Z.PARSER_LALR:case Z.PARSER_LR:return this.genLRSyntTables(e,Z.PARSER_SLR);default:return null}}genLRSyntTables(e,t){const n=Ns.createGenerator(e,t);if(n==null)throw new Q("Gerador de Tabela é nulo.");this.lrTable=n.buildIntTable();const r=[];return r.push("    int FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

    int SHIFT  = 0;
    int REDUCE = 1;
    int ACTION = 2;
    int ACCEPT = 3;
    int GO_TO  = 4;
    int ERROR  = 5;
`),r.push(`
`),r.push(this.emitLRTable(e)),r.push(`
`),r.push(this.emitProductionsForLR(e)),r.push(`
`),r.push(this.emitErrorTableLR()),r.join("")}emitProductionsForLR(e){const t=[],n=e.productions;t.push(`    int[][] PRODUCTIONS =
`),t.push(`    {
`);for(let r=0;r<n.size();r++)t.push("        { "),t.push(n.get(r).get_lhs().toString()),t.push(", "),t.push(n.get(r).get_rhs().length.toString()),t.push(` },
`);return t.pop(),t.push(" }"),t.push(`
    };
`),t.join("")}emitLRTable(e){const t=[];if(this.lrTable===null)throw new Q("Tabela LR está nula.");const n=this.lrTable;t.push(`    int[][][] PARSER_TABLE =
`),t.push(`    {
`);let r=n.length;e.productions.size()>r&&(r=e.productions.size()),r=(""+r).length;for(let i=0;i<n.length;i++){t.push("        {");for(let o=0;o<n[i].length;o++){t.push(" {"),t.push(Le.CONSTANTS[n[i][o][0]]),t.push(", ");const a=""+n[i][o][1];for(let l=a.length;l<r;l++)t.push(" ");t.push(a),t.push("},")}t.pop(),t.push("}"),t.push(` },
`)}return t.pop(),t.push(" }"),t.push(`
    };
`),t.join("")}genLLSyntTables(e,t){const n=[];if(t==Z.PARSER_LL){const r=e.startSymbol,i=e.FIRST_NON_TERMINAL,o=e.symbols.length,a="    int START_SYMBOL = "+r+`;

    int FIRST_NON_TERMINAL    = `+i+`;
    int FIRST_SEMANTIC_ACTION = `+o+`;
`;return n.push(a),n.push(`
`),n.push(`
`),n.push(this.emitProductionsForLL(e)),n.push(`
`),n.join("")}else return t==Z.PARSER_REC_DESC,null}constList(e,t){const n=[];let r=[];if(e!=null)r=e.tokens.toArray();else if(t!=null)r=t.terminals;else throw new Error("Erro Interno");for(let i=0;i<r.length;i++){const o=r[i];o.charAt(0)=='"'?n.push("    int t_TOKEN_"+(i+2)+" = "+(i+2)+"; //"+o+`
`):n.push("    int t_"+o+" = "+(i+2)+`;
`)}return n.join("")}lex_table_compress(e){const t=[],n=e.transitions,r=new Array(n.size()+1).fill(-1);let i=0;for(let a=0;a<n.size();a++)r[a]=i,i+=n.get(a).size;r[r.length-1]=i;const o=new Array(i).fill(0).map(()=>new Array(2).fill(0));i=0;for(let a=0;a<n.size();a++)for(const[l,u]of n.get(a).entries())o[i][0]=l.charCodeAt(0),o[i][1]=u,i++;t.push(`    int[] SCANNER_TABLE_INDEXES = 
`),t.push(`    {
`);for(let a=0;a<r.length;a++)t.push("        "),t.push(r[a].toString()),t.push(`,
`);t.pop(),t.push(`
    };

`),t.push(`    int[][] SCANNER_TABLE = 
`),t.push(`    {
`);for(let a=0;a<o.length;a++)t.push("        {"),t.push(o[a][0].toString()),t.push(", "),t.push(o[a][1].toString()),t.push(`},
`);return t.pop(),t.push("}"),t.push(`
    };
`),t.join("")}lex_table(e){const t=[];t.push(`    int[][] SCANNER_TABLE = 
`),t.push(`    {
`);const n=e.transitions.size();let r=n.toString().length;r==1&&(r=2);for(let i=0;i<n;i++){t.push("        { ");for(let o=0;o<256;o++){const a=e.nextState(String.fromCharCode(o),i).toString();for(let l=a.length;l<r;l++)t.push(" ");t.push(a),t.push(", ")}t.pop(),t.push(` },
`)}return t.pop(),t.push(" }"),t.push(`
    };
`),t.join("")}token_state(e){const t=[];t.push("    int[] TOKEN_STATE = {");const n=e.transitions.size();let r=n.toString().length;r==1&&(r=2);for(let i=0;i<n;i++){const a=e.tokenForState(i).toString();for(let l=a.length;l<r;l++)t.push(" ");t.push(a),t.push(", ")}return t.pop(),t.push(` };
`),t.join("")}special_cases(e){const t=e.getSpecialCasesIndexes(),n=e.specialCases,r=[];let i=n.length;r.push(`    int[] SPECIAL_CASES_INDEXES =
        { `),i=t.length;for(let o=0;o<i;o++)r.push(t[o][0].toString()),r.push(", ");r.push(t[i-1][1].toString()),r.push(` };

`),r.push(`    String[] SPECIAL_CASES_KEYS =
        {  `),i=n.length;for(let o=0;o<i;o++)r.push('"'),r.push(n[o].key),r.push('", ');r.pop(),r.push('"'),r.push(` };

`),r.push(`    int[] SPECIAL_CASES_VALUES =
        {  `),i=n.length;for(let o=0;o<i;o++)r.push(n[o].value.toString()),r.push(", ");return r.pop(),r.push(` };
`),r.join("")}emitProductionsForLL(e){const t=e.productions,n=new Array(t.size()).fill([]);let r=0;for(let o=0;o<t.size();o++){const a=t.get(o).get_rhs();if(a.length>0){n[o]=[];for(let l=0;l<a.length;l++)n[o][l]=a[l].toString(),n[o][l].length>r&&(r=n[o][l].length)}else n[o]=new Array(1),n[o][0]="0"}const i=[];i.push(`    int[][] PRODUCTIONS = 
`),i.push(`    {
`);for(let o=0;o<n.length;o++){i.push("        {");for(let a=0;a<n[o].length;a++){i.push(" ");for(let l=n[o][a].length;l<r;l++)i.push(" ");i.push(n[o][a]),i.push(",")}i.pop(),i.push(` },
`)}return i.pop(),i.push(` }
`),i.push(`
    };
`),i.join("")}emitErrorTableLR(){if(this.lrTable==null)throw new Q("Tabela LR está nula.");const e=this.lrTable.length,t=[];t.push(`    String[] PARSER_ERROR =
    {
`);for(let n=0;n<e;n++)t.push('        "Erro estado '+n),t.push(`",
`);return t.pop(),t.push('"'),t.push(`
    };
`),t.join("")}emitErrorTableLL(e){const t=e.symbols,n=[];n.push(`    String[] PARSER_ERROR =
    {
        "",
        "Era esperado fim de programa",
`);for(let r=2;r<e.FIRST_NON_TERMINAL;r++){n.push('        "Era esperado ');for(let i=0;i<t[r].length;i++)switch(t[r].charAt(i)){case'"':n.push('\\"');break;case"\\":n.push("\\\\");break;default:n.push(t[r].charAt(i))}n.push(`",
`)}for(let r=e.FIRST_NON_TERMINAL;r<t.length;r++)n.push('        "'+t[r]+" inválido");return n.push(`",
`),n.pop(),n.push('"'),n.push(`
    };
`),n.join("")}}class $u{constructor(){L(this,"sensitive",!0);L(this,"lookup",!0)}generate(e,t){const n=new Map,r=t.scannerName;let i;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,i=this.buildScanner(e,t)):i=this.buildEmptyScanner(t),n.set(r+".java",i),n}buildEmptyScanner(e){const t=[],n=e.pkgName;t.push(this.emitPackage(n));const r="public class "+e.scannerName+` implements Constants
{
    public Token nextToken() throws LexicalError
    {
        return null;
    }
}
`;return t.push(r),t.toString()}buildScanner(e,t){let n,r,i;t.input==Z.INPUT_STREAM?(n="java.io.Reader",r=`StringBuffer bfr = new StringBuffer();
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
`,i='this(new java.io.StringReader(""));'):t.input==Z.INPUT_STRING?(n="String",r="this.input = input;",i='this("");'):(n="",r="",i="");const o=t.pkgName;return this.emitPackage(o)+"public class "+t.scannerName+` implements Constants
{
    private int position;
    private String input;

    public `+t.scannerName+`()
    {
        `+i+`
    }

    public `+t.scannerName+"("+n+` input)
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
`}auxFuncions(e,t){let n;switch(t.scannerTable){case Z.SCANNER_TABLE_FULL:n=`    private int nextState(char c, int state)
    {
        int next = SCANNER_TABLE[state][c];
        return next;
    }
`;break;case Z.SCANNER_TABLE_COMPACT:n=`    private int nextState(char c, int state)
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
`;break;case Z.SCANNER_TABLE_HARDCODE:{const r=e.transitions,i=[];for(let o=0;o<r.size();o++){const a=r.get(o);if(a.size!=0){i.push("            case "+o+`:
                switch (c)
                {
`);for(const[l,u]of a.entries()){const f=l,h=u;i.push("                    case "+f+": return "+h+`;
`)}i.push(`                    default: return -1;
                }
`)}}n=`    private int nextState(char c, int state)
    {
        switch (state)
        {
`+i.toString()+`            default: return -1;
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
`}}class Hu{constructor(e){L(this,"input",new ft);L(this,"lhs");this.lhs=e}}class Ir{constructor(e){L(this,"_grammar");L(this,"_llTable");L(this,"_symbols");L(this,"_functions",new Map);this._grammar=e,this._llTable=[],this._symbols=e.symbols;for(let t=0;t<this._symbols.length;t++)this._symbols[t].charAt(0)=="<"&&(this._symbols[t]=this._symbols[t].substring(1,this._symbols[t].length-1));this.build()}getSymbols(e){return this._symbols[e]}getStart(){return this._symbols[this._grammar.startSymbol]}build(){const e=this._grammar.productions.toArray();for(let t=0;t<this._llTable.length;t++){const n=t+this._grammar.FIRST_NON_TERMINAL,r=new Hu(n);this._functions.set(this._symbols[n],r);for(let i=0;i<this._llTable[0].length;i++){const o=this._llTable[t][i];if(o>=0){const a=i+1,u=e[o].get_rhs();r.input.set(a,u)}}}return this._functions}}class Gu{generate(e,t){const n=new Map;if(e!=null){const r=t.parserName;let i;switch(t.parser){case Z.PARSER_REC_DESC:i=this.buildRecursiveDecendantParser(e,t);break;case Z.PARSER_LL:i=this.buildLLParser(e,t);break;case Z.PARSER_SLR:case Z.PARSER_LALR:case Z.PARSER_LR:i=this.buildLRParser(e,t);break;default:i=null}if(i===null)throw new Q("String do Parser é nulo.");n.set(r+".java",i),n.set(t.semanticName+".java",this.generateSemanticAnalyser(t))}return n}buildRecursiveDecendantParser(e,t){const n=[],r=t.pkgName;return n.push(this.emitPackage(r)),n.push(this.emitRecursiveDecendantClass(e,t)),n.join("'")}buildLLParser(e,t){const n=[],r=t.pkgName;return n.push(this.emitPackage(r)),n.push(this.emitImports()),n.push(this.emitLLClass(e,t)),n.join("")}buildLRParser(e,t){const n=[],r=t.pkgName;return n.push(this.emitPackage(r)),n.push(this.emitImports()),n.push(this.emitLRClass(e,t)),n.join("")}emitPackage(e){return e!=null&&e!==""?"package "+e+`;
`:""}emitImports(){return`import java.util.Stack;

`}emitLRClass(e,t){const n=[],r=t.parserName;n.push("public class "),n.push(r),n.push(` implements Constants
{
`);const i=t.scannerName,o=t.semanticName,a=`    private Stack stack = new Stack();
    private Token currentToken;
    private Token previousToken;
    private `+i+` scanner;
    private `+o+` semanticAnalyser;

`;return n.push(a),n.push("    public void parse("+i+" scanner, "+o+` semanticAnalyser) throws LexicalError, SyntaticError, SemanticError
    {
        this.scanner = scanner;
        this.semanticAnalyser = semanticAnalyser;

        stack.clear();
        stack.push(new Integer(0));

        currentToken = scanner.nextToken();

        while ( ! step() )
            ;
    }

    private boolean step() throws LexicalError, SyntaticError, SemanticError
    {
        if (currentToken == null)
        {
            int pos = 0;
            if (previousToken != null)
                pos = previousToken.getPosition()+previousToken.getLexeme().length();

            currentToken = new Token(DOLLAR, "$", pos);
        }

        int token = currentToken.getId();
        int state = ((Integer)stack.peek()).intValue();

        int[] cmd = PARSER_TABLE[state][token-1];

        switch (cmd[0])
        {
            case SHIFT:
                stack.push(new Integer(cmd[1]));
                previousToken = currentToken;
                currentToken = scanner.nextToken();
                return false;

            case REDUCE:
                int[] prod = PRODUCTIONS[cmd[1]];

                for (int i=0; i<prod[1]; i++)
                    stack.pop();

                int oldState = ((Integer)stack.peek()).intValue();
                stack.push(new Integer(PARSER_TABLE[oldState][prod[0]-1][1]));
                return false;

            case ACTION:
                int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;
                stack.push(new Integer(PARSER_TABLE[state][action][1]));
                semanticAnalyser.executeAction(cmd[1], previousToken);
                return false;

            case ACCEPT:
                return true;

            case ERROR:
                throw new SyntaticError(PARSER_ERROR[state], currentToken.getPosition());
        }
        return false;
    }

`),n.push(`}
`),n.join("")}emitLLClass(e,t){const n=[],r=t.parserName;n.push("public class "),n.push(r),n.push(` implements Constants
{
`);const i=t.scannerName,o=t.semanticName,a=`    private Stack stack = new Stack();
    private Token currentToken;
    private Token previousToken;
    private `+i+` scanner;
    private `+o+` semanticAnalyser;

`;return n.push(a),n.push(this.emitLLFunctions(t)),n.push(`}
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
`}emitDriver(e){const t=e.scannerName,n=e.semanticName;return"    public void parse("+t+" scanner, "+n+` semanticAnalyser) throws LexicalError, SyntaticError, SemanticError
    {
        this.scanner = scanner;
        this.semanticAnalyser = semanticAnalyser;

        stack.clear();
        stack.push(new Integer(DOLLAR));
        stack.push(new Integer(START_SYMBOL));

        currentToken = scanner.nextToken();

        while ( ! step() )
            ;
    }
`}emitStep(){return`    private boolean step() throws LexicalError, SyntaticError, SemanticError
    {
        if (currentToken == null)
        {
            int pos = 0;
            if (previousToken != null)
                pos = previousToken.getPosition()+previousToken.getLexeme().length();

            currentToken = new Token(DOLLAR, "$", pos);
        }

        int x = ((Integer)stack.pop()).intValue();
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
                throw new SyntaticError(PARSER_ERROR[x], currentToken.getPosition());
            }
        }
        else if (isNonTerminal(x))
        {
            if (pushProduction(x, a))
                return false;
            else
                throw new SyntaticError(PARSER_ERROR[x], currentToken.getPosition());
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
                stack.push(new Integer(production[i]));
            }
            return true;
        }
        else
            return false;
    }
`}emitRecursiveDecendantClass(e,t){const n=new Ir(e),r=[],i=t.parserName;r.push("public class "),r.push(i),r.push(` implements Constants
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

        `+n.getStart()+`();

        if (currentToken.getId() != DOLLAR)
            throw new SyntaticError(PARSER_ERROR[DOLLAR], currentToken.getPosition());
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
            throw new SyntaticError(PARSER_ERROR[token], currentToken.getPosition());
    }

`);const u=n.build();for(let f=e.FIRST_NON_TERMINAL;f<e.FIRST_SEMANTIC_ACTION();f++){const h=n.getSymbols(f),m=u.get(h);if(r.push("    private void "+h+`() throws AnalysisError
    {
        switch (currentToken.getId())
        {
`),m==null)throw new _n("Gramática não é LL.");const d=Array.from(m.input.keys());for(let b=0;b<d.length;b++){const p=m.input.get(d[b]);let T=d[b];r.push("            case "+T+": // "+n.getSymbols(T)+`
`);for(let _=b+1;_<d.length;_++)m.input.get(d[_])===p&&(T=d[_],r.push("            case "+T+": // "+n.getSymbols(T)+`
`),d.slice(_,_),_--);if(p===void 0)throw new _n("Gramática não é LL.");p.length==0&&r.push(`                // EPSILON
`);for(let _=0;_<p.length;_++){const g=p[_];e.isTerminal(g)?r.push("                match("+g+"); // "+n.getSymbols(g)+`
`):e.isNonTerminal(g)?r.push("                "+n.getSymbols(g)+`();
`):r.push("                semanticAnalyser.executeAction("+(g-e.FIRST_SEMANTIC_ACTION())+`, previousToken);
`)}r.push(`                break;
`)}r.push(`            default:
                throw new SyntaticError(PARSER_ERROR[`+m.lhs+`], currentToken.getPosition());
        }
    }

`)}return r.push(`}
`),r.join("")}generateSemanticAnalyser(e){const t=[],n=e.pkgName;n!=null&&n!==""&&t.push("package "+n+`;
`);const r="public class "+e.semanticName+` implements Constants
{
    public void executeAction(int action, Token token)	throws SemanticError
    {
        System.out.println("Ação #"+action+", Token: "+token);
    }	
}
`;return t.push(r),t.join("")}}class Ku extends ua{constructor(){super(...arguments);L(this,"conflict",null);L(this,"stackTop",null)}resolve(t,n){return 1}setup(t,n){this.conflict=t,this.stackTop=n}}class Lr{constructor(e){L(this,"g");if(!e.isFactored())throw new _n("Gramática não Fatorada");if(e.hasLeftRecursion())throw new _n("Gramática possui Recursão à Esquerda");this.g=e}getGrammar(){return this.g}lookahead(e){if(this.g==null)throw new Q("Gramatica é nula");const t=this.g.first(e.get_rhs());return t.contains(0)&&(t.delete(0),t.addAll(this.g.followSet[e.get_lhs()])),t}generateTable(){if(this.g==null)throw new Q("Gramatica é nula");const e=this.g.symbols,t=[];for(let r=0;r<e.length-this.g.FIRST_NON_TERMINAL;r++){t[r]=[];for(let i=0;i<this.g.FIRST_NON_TERMINAL-1;i++)t[r][i]=new Te}for(let r=0;r<this.g.productions.size();r++){const i=this.g.productions.get(r),o=this.lookahead(i);for(let a=1;a<this.g.FIRST_NON_TERMINAL;a++)o.contains(a)&&t[i.get_lhs()-this.g.FIRST_NON_TERMINAL][a-1].add(r)}const n=new Ku;return this.resolveConflicts(t,n)}resolveConflicts(e,t){if(this.g==null)throw new Q("Gramatica é nula");const n=[];for(let r=0;r<e.length;r++){n[r]=[];for(let i=0;i<e[r].length;i++)switch(e[r][i].size){case 0:n[r][i]=-1;break;case 1:n[r][i]=e[r][i].first();break;default:t.setup(e[r][i],r),n[r][i]=t.resolve(this.g,i);break}}return n}tableAsHTML(){if(this.g==null)throw new Q("Gramatica é nula");const e=this.generateTable();let t="";t+='<HTML><HEAD><TITLE>Tabela de Análise LL(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',t+="<TR align=center><TD bgcolor=black><FONT color=white><B>&nbsp;</B></FONT></TD><TD bgcolor=black><FONT color=white><B>$</B></FONT></TD>";for(let n=Ut.FIRST_TERMINAL;n<this.g.FIRST_NON_TERMINAL;n++)t+="<TD nowrap bgcolor=black><FONT color=white><B>"+bt.translateString(this.g.symbols[n])+"</B></FONT></TD>";t+="</TR>";for(let n=0;n<e.length;n++){t+="<TR align=center><TD nowrap bgcolor=black><FONT color=white><B>"+bt.translateString(this.g.symbols[n+this.g.FIRST_NON_TERMINAL])+"</B></FONT></TD>";for(let r=0;r<e[n].length;r++){const i=e[n][r];i>=0?t+="<TD width=40 bgcolor=#F5F5F5>"+i+"</TD>":t+="<TD width=40 bgcolor=#F5F5F5>-</TD>"}t+="</TR>"}t+="</TABLE>",t+="<BR></FONT><CODE><TABLE border=0>";for(let n=0;n<this.g.productions.size();n++)t+="<TR>",t+="<TD align=right nowrap>"+n+"&nbsp;-&nbsp;</TD>",t+="<TD>"+bt.translateString(this.g.productions.get(n).toString())+"</TD>",t+="</TR>";return t+="</TABLE></CODE></BODY></HTML>",t.toString()}}class Wu{constructor(){L(this,"lrTable",null)}generate(e,t,n){const r=new Map;if(e===null||t===null)throw new Error("FiniteAutomata and Grammar must not be null");return r.set("Token.h",this.generateToken(n)),r.set("Constants.h",this.generateConstantsH(e,t,n)),r.set("Constants.cpp",this.generateConstantsCpp(e,t,n)),r.set("AnalysisError.h",this.generateAnalysisError(n)),r.set("LexicalError.h",this.generateLexicalError(n)),r.set("SyntaticError.h",this.generateSyntaticError(n)),r.set("SemanticError.h",this.generateSemanticError(n)),r}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

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
`}generateSyntaticError(e){return`#ifndef SYNTATIC_ERROR_H
#define SYNTATIC_ERROR_H

#include "AnalysisError.h"

#include <string>

`+this.openNamespace(e)+`class SyntaticError : public AnalysisError
{
public:

    SyntaticError(const std::string &msg, int position = -1)
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
`}generateConstantsH(e,t,n){return`#ifndef CONSTANTS_H
#define CONSTANTS_H

`+this.openNamespace(n)+`enum TokenId 
{
    EPSILON  = 0,
    DOLLAR   = 1,
`+this.constList(e,t)+`};

`+this.lexDecls(e,n)+this.syntDecls(t,n)+this.closeNamespace(n)+`#endif
`}constList(e,t){let n="",r=null;if(e!=null)r=e.tokens.toArray();else if(t!=null)r=t.terminals;else throw new Error("Erro Interno");for(let i=0;i<r.length;i++){const o=r[i];o.charAt(0)=='"'?n+="    t_TOKEN_"+(i+2)+" = "+(i+2)+", //"+o+`
`:n+="    t_"+o+" = "+(i+2)+`,
`}return n=n.slice(0,-2),n+=`
`,n.toString()}lexDecls(e,t){return e==null?"":"const int STATES_COUNT = "+e.transitions.size()+`;
`+(t.scannerTable==Z.SCANNER_TABLE_HARDCODE?"":`
extern int SCANNER_TABLE[STATES_COUNT][256];
`)+`
extern int TOKEN_STATE[STATES_COUNT];

`+(e.hasContext()?`extern int SCANNER_CONTEXT[STATES_COUNT][2];

`:"")+(e.specialCases.length>0?"extern int SPECIAL_CASES_INDEXES["+(e.getSpecialCasesIndexes().length+1)+`];

extern const char *SPECIAL_CASES_KEYS[`+e.specialCases.length+`];

extern int SPECIAL_CASES_VALUES[`+e.specialCases.length+`];

`:"")+`extern const char *SCANNER_ERROR[STATES_COUNT];

`}syntDecls(e,t){if(e==null)return"";switch(t.parser){case Z.PARSER_REC_DESC:{const n=e.FIRST_SEMANTIC_ACTION()-e.FIRST_NON_TERMINAL;return"extern const char *PARSER_ERROR["+(e.FIRST_NON_TERMINAL+n)+`];

`}case Z.PARSER_LL:{let n=0;for(let i=0;i<e.productions.size();i++){const o=e.productions.get(i).get_rhs().length;o>n&&(n=o)}const r=e.FIRST_SEMANTIC_ACTION()-e.FIRST_NON_TERMINAL;return"const int START_SYMBOL = "+e.startSymbol+`;

const int FIRST_NON_TERMINAL    = `+e.FIRST_NON_TERMINAL+`;
const int FIRST_SEMANTIC_ACTION = `+e.FIRST_SEMANTIC_ACTION()+`;

extern int PARSER_TABLE[`+r+"]["+(e.FIRST_NON_TERMINAL-1)+`];

extern int PRODUCTIONS[`+e.productions.size()+"]["+(n+1)+`];

extern const char *PARSER_ERROR[`+(e.FIRST_NON_TERMINAL+r)+`];

`}default:{const n=Ns.createGenerator(e,Z.PARSER_SLR);if(n==null)throw new Q("Gerador de Tabela é nulo.");return this.lrTable=n.buildIntTable(),"const int FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

const int SHIFT  = 0;
const int REDUCE = 1;
const int ACTION = 2;
const int ACCEPT = 3;
const int GO_TO  = 4;
const int ERROR  = 5;

extern const int PARSER_TABLE[`+this.lrTable.length+"]["+this.lrTable[0].length+`][2];

extern const int PRODUCTIONS[`+e.productions.size()+`][2];

extern const char *PARSER_ERROR[`+this.lrTable.length+`];

`}}}generateConstantsCpp(e,t,n){return`#include "Constants.h"

`+this.openNamespace(n)+this.lexTables(e,n)+this.syntTables(t,n)+this.closeNamespace(n)}lexTables(e,t){if(e==null)return"";let n,r,i="";i+=this.scannerTable(e,t)+`
`,i+="int TOKEN_STATE[STATES_COUNT] = {",n=e.transitions.size(),r=n.toString().length,r==1&&(r=2);for(let o=0;o<n;o++){const l=e.tokenForState(o).toString();for(let u=l.length;u<r;u++)i+=" ";i+=l+", "}i=i.slice(0,-2),i+=` };

`,i+=this.context(e),i+=this.specialCases(e),i+=`const char *SCANNER_ERROR[STATES_COUNT] =
{
`,n=e.transitions.size();for(let o=0;o<n;o++){i+='        "';const a=e.getError(o);for(let l=0;l<a.length;l++)a.charAt(l)=='"'?i+='\\"':i+=a.charAt(l);i+=`",
`}return i=i.slice(0,-2),i+=`
};

`,i.toString()}context(e){if(!e.hasContext())return"";let t="";t+=`int SCANNER_CONTEXT[STATES_COUNT][2] =
{
`;for(let n=0;n<e.transitions.size();n++)t+="    {",t+=e.isContext(n)?"1":"0",t+=", ",t+=e.getOrigin(n),t+=`},
`;return t=t.slice(0,-2),t+=`
};

`,t.toString()}scannerTable(e,t){if(t.scannerTable==Z.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`int SCANNER_TABLE[STATES_COUNT][256] = 
`,n+=`{
`;const r=e.transitions.size();let i=r.toString().length;i==1&&(i=2);for(let o=0;o<r;o++){n+="    { ";for(let a=0;a<256;a++){const l=e.nextState(String.fromCharCode(a),o).toString();for(let u=l.length;u<i;u++)n+=" ";n+=l+", ",a==200&&(n+=`
      `)}n=n.slice(0,-2),n+=` },
`}return n=n.slice(0,-2),n+=`
};
`,n.toString()}specialCases(e){if(e.specialCases.length>0){const t=e.getSpecialCasesIndexes(),n=e.specialCases;let r="",i=n.length;r+="int SPECIAL_CASES_INDEXES["+(t.length+1)+`] =
    { `,i=t.length;for(let o=0;o<i;o++)r+=t[o][0]+", ";r+=t[i-1][1],r=r.slice(0,-2),r+=` };

`,i=n.length,r+="const char *SPECIAL_CASES_KEYS["+i+`] =
    { `,i=n.length;for(let o=0;o<i;o++)r+='"'+n[o].key+'", ';r=r.slice(0,-2),r+=` };

`,r+="int SPECIAL_CASES_VALUES["+i+`] =
    { `;for(let o=0;o<i;o++)r+=n[o].value+", ";return r=r.slice(0,-2),r+=` };

`,r.toString()}else return""}syntTables(e,t){if(e==null)return"";switch(t.parser){case Z.PARSER_REC_DESC:return this.syntErrorsLL(e);case Z.PARSER_LL:return this.syntTransTable(new Lr(e))+this.productionsLL(e)+this.syntErrorsLL(e);default:return this.syntTransTable(e)+this.productionsLR(e)+this.syntErrorsLR()}}productionsLR(e){let t="";const n=e.productions.toArray();t+="const int PRODUCTIONS["+n.length+`][2] =
`,t+=`{
`;for(let r=0;r<n.length;r++)t+="    { ",t+=n[r].get_lhs(),t+=", ",t+=n[r].get_rhs().length,t+=` },
`;return t=t.slice(0,-2),t+=`
};
`,t.toString()}syntTransTable(e){return e instanceof Ut?this.syntTransTableGrammar(e):this.syntTransTableLL(e)}syntTransTableGrammar(e){if(this.lrTable===null)throw new Q("Tabela LR está nula.");let t="";t+="const int PARSER_TABLE["+this.lrTable.length+"]["+this.lrTable[0].length+`][2] =
`,t+=`{
`;let n=this.lrTable.length;e.productions.size()>n&&(n=e.productions.size()),n=(""+n).length;for(let r=0;r<this.lrTable.length;r++){t+="    {";for(let i=0;i<this.lrTable[r].length;i++){t+=" {",t+=Le.CONSTANTS[this.lrTable[r][i][0]],t+=", ";const o=""+this.lrTable[r][i][1];for(let a=o.length;a<n;a++)t+=" ";t+=o+"},"}t=t.slice(0,-1),t+=` },
`}return t=t.slice(0,-2),t+=`
};
`,t.toString()}syntTransTableLL(e){const t=e.generateTable(),n=[];let r=0;for(let o=0;o<n.length;o++){n[o]=[];for(let a=0;a<n[o].length;a++){const l=t[o][a].toString();n[o][a]=l,l.length>r&&(r=l.length)}}let i="";i+("int PARSER_TABLE["+n.length+"]["+n[0].length+`] =
`),i+"";for(let o=0;o<n.length;o++){i+"";for(let a=0;a<n[o].length;a++){i+"";for(let l=n[o][a].length;l<r;l++)i+"";i+n[o][a]+""}i=i.slice(0,-1)}return i=i.slice(0,-2),i.toString()}productionsLL(e){const t=e.productions.toArray(),n=[];let r=0,i=0;for(let a=0;a<t.length;a++){const l=t[a].get_rhs();if(l.length>i&&(i=l.length),l.length>0){n[a]=[],n[a][0]=l.length.toString();for(let u=0;u<l.length;u++)n[a][u+1]=l[u].toString(),n[a][u+1].length>r&&(r=n[a][u+1].length)}else n[a]=[],n[a][0]="1",n[a][1]="0"}let o="";o+("int PRODUCTIONS["+t.length+"]["+(i+1)+`] = 
`),o+"";for(let a=0;a<n.length;a++){o+"";for(let l=0;l<n[a].length;l++){o+"";for(let u=n[a][l].length;u<r;u++)o+"";o+n[a][l]+""}for(let l=n[a].length;l<=i;l++){o+"";for(let u=1;u<r;u++)o+"";o+""}o=o.slice(0,-1)}return o=o.slice(0,-2),o.toString()}syntErrorsLL(e){const t=e.symbols;let n="";n+="const char *PARSER_ERROR["+e.FIRST_SEMANTIC_ACTION()+`] =
{
    "",
    "Era esperado fim de programa",
`;for(let r=2;r<e.FIRST_NON_TERMINAL;r++){n+='    "Era esperado ';for(let i=0;i<t[r].length;i++)switch(t[r].charAt(i)){case'"':n+='\\"';break;case"\\":n+="\\\\";break;default:n+=t[r].charAt(i)}n+=`",
`}for(let r=e.FIRST_NON_TERMINAL;r<t.length;r++)n+='    "'+t[r]+` inválido",
`;return n=n.slice(0,-2),n+=`
};

`,n.toString()}syntErrorsLR(){if(this.lrTable===null)throw new Q("Tabela LR está nula.");let e="";e+="const char *PARSER_ERROR["+this.lrTable.length+`] =
{
`;for(let t=0;t<this.lrTable.length;t++)e+='    "Erro estado '+t+`",
`;return e=e.slice(0,-2),e+=`
};

`,e.toString()}}class Vu{constructor(){L(this,"sensitive",!0);L(this,"lookup",!0)}generate(e,t){const n=new Map,r=t.scannerName;let i,o;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,i=this.buildScannerH(e,t),o=this.buildScannerCpp(e,t)):(i=this.buildEmptyScannerH(t),o=this.buildEmptyScannerCpp(t)),n.set(r+".h",i),n.set(r+".cpp",o),n}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

`:""}closeNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"} //namespace "+t+`

`:""}buildScannerH(e,t){let n="";const r=t.scannerName;let i,o,a;t.input==Z.INPUT_STREAM?(i="std::istream &",o=`#include <iostream>
`,a="    "+r+"("+i+`input) { setInput(input); }
    `+r+`() : input(""), position(0) { }
`):t.input==Z.INPUT_STRING?(i="const char *",o="",a="    "+r+"("+i+`input = "") { setInput(input); }
`):(i=null,o=null,a=null),n+="#ifndef "+r.toUpperCase()+`_H
`,n+="#define "+r.toUpperCase()+`_H
`,n+=`
#include "Token.h"
#include "LexicalError.h"

#include <string>
`+o+`
`,n+=this.openNamespace(t);const l="class "+r+`
{
public:
`+a+`
    void setInput(`+i+`input);
    void setPosition(unsigned pos) { position = pos; }
    Token *nextToken() throw (LexicalError);

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

`;return n+=l,n+=this.closeNamespace(t),n+=`#endif
`,n.toString()}buildScannerCpp(e,t){let n="";const r=t.scannerName;n+='#include "'+r+`.h"

`,this.sensitive||(n+=`#include <cctype>

`),n+=this.openNamespace(t);let i,o;t.input==Z.INPUT_STREAM?(i="std::istream &",o=`    std::istreambuf_iterator<char> in(input);
    std::istreambuf_iterator<char> eof;

    this->input.assign(in, eof);

`):t.input==Z.INPUT_STRING?(i="const char *",o=`    this->input = input;
`):(i=null,o=null);const a="void "+r+"::setInput("+i+`input)
{
`+o+`    setPosition(0);
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

int `+r+`::nextState(unsigned char c, int state) const
{
`+this.nextStateImpl(e,t)+`}

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

`:"");return n+=a,n+=this.closeNamespace(t),n.toString()}nextStateImpl(e,t){switch(t.scannerTable){case Z.SCANNER_TABLE_FULL:case Z.SCANNER_TABLE_COMPACT:return`    int next = SCANNER_TABLE[state][c];
    return next;
`;case Z.SCANNER_TABLE_HARDCODE:{const n=e.transitions;let r="";for(let i=0;i<n.size();i++){const o=n.get(i);if(o.size!=0){r+="        case "+i+`:
            switch (c)
            {
`;for(const[a,l]of o.entries()){const u=a,f=l;r+=`                case ${u.charCodeAt(0)}: return ${f};
`}r+=`                default: return -1;
            }
`}}return`    switch (state)
    {
`+r.toString()+`        default: return -1;
    }
`}default:return""}}buildEmptyScannerH(e){let t="";const n=e.scannerName;t+="#ifndef "+n.toUpperCase()+`_H
`,t+="#define "+n.toUpperCase()+`_H
`,t+=`
#include "Token.h"
#include "LexicalError.h"

`,t+=this.openNamespace(e);const r="class "+n+`
{
public:

    Token *nextToken() throw (LexicalError);

};

`;return t+=r,t+=this.closeNamespace(e),t+=`#endif
`,t.toString()}buildEmptyScannerCpp(e){let t="";const n=e.scannerName;t+='#include "'+n+`.h"

`,t+=this.openNamespace(e);const r="Token *"+n+`::nextToken()
{
    return 0;
}

`;return t+=r,t+=this.closeNamespace(e),t.toString()}}class qu{constructor(){L(this,"rd")}generate(e,t){const n=new Map;if(e!=null){const r=t.parserName;n.set(r+".h",this.parserH(e,t)),n.set(r+".cpp",this.parserCpp(e,t)),n.set(t.semanticName+".cpp",this.semanticAnalyserCpp(t)),n.set(t.semanticName+".h",this.semanticAnalyserH(t))}return n}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

`:""}closeNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"} //namespace "+t+`

`:""}semanticAnalyserH(e){const t=e.semanticName;return"#ifndef "+t.toUpperCase()+`_H
#define `+t.toUpperCase()+`_H

#include "Token.h"
#include "SemanticError.h"

`+this.openNamespace(e)+"class "+t+`
{
public:
    void executeAction(int action, const Token *token)
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

`+this.closeNamespace(e)}parserH(e,t){const n=t.scannerName,r=t.parserName,i=t.semanticName,o=t.parser,a=o==Z.PARSER_REC_DESC;let l="";if(a){this.rd=new Ir(e);let f="";f+="    void match(int token) throw (AnalysisError);";for(let h=e.FIRST_NON_TERMINAL;h<e.FIRST_SEMANTIC_ACTION();h++)f+="    void "+this.rd.getSymbols(h)+`() throw (AnalysisError);
`;l=f.toString()}return"#ifndef "+r+`_H
#define `+r+`_H

#include "Constants.h"
#include "Token.h"
#include "`+n+`.h"
#include "`+i+`.h"
#include "SyntaticError.h"

`+(a?"":`#include <stack>

`)+this.openNamespace(t)+"class "+r+`
{
public:
    `+r+`() : previousToken(0), currentToken(0) { }

    ~`+r+`()
    {
        if (previousToken != 0 && previousToken != currentToken) delete previousToken;
        if (currentToken != 0)  delete currentToken;
    }

    void parse(`+n+" *scanner, "+i+` *semanticAnalyser);

private:
`+(a?"":`    std::stack<int> stack;
`)+`    Token *currentToken;
    Token *previousToken;
    `+n+` *scanner;
    `+i+` *semanticAnalyser;

`+(a?l:`    bool step()
`+(o==Z.PARSER_LL?`    bool pushProduction(int topStack, int tokenInput);

    static bool isTerminal(int x) { return x < FIRST_NON_TERMINAL; }
    static bool isNonTerminal(int x) { return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION; }
    static bool isSemanticAction(int x) { return x >= FIRST_SEMANTIC_ACTION; }
`:""))+`};

`+this.closeNamespace(t)+`#endif
`}parserCpp(e,t){switch(t.parser){case Z.PARSER_REC_DESC:return this.parserCppRecursiveDescendant(e,t);case Z.PARSER_LL:return this.parserCppLL(e,t);default:return this.parserCppLR(e,t)}}parserCppRecursiveDescendant(e,t){if(this.rd==null)throw new Q("RecursiveDescendent é nulo.");const n=t.scannerName,r=t.parserName,i=t.semanticName,o='#include "'+r+`.h"

`+this.openNamespace(t)+"void "+r+"::parse("+n+" *scanner, "+i+` *semanticAnalyser);
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

    `+this.rd.getStart()+`();

    if (currentToken->getId() != DOLLAR)
        throw SyntaticError(PARSER_ERROR[DOLLAR], currentToken->getPosition());
}

void `+r+`::match(int token) throw (AnalysisError)
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
        throw SyntaticError(PARSER_ERROR[token], currentToken->getPosition());
}
`;let a="";const l=this.rd.build();for(let f=e.FIRST_NON_TERMINAL;f<e.FIRST_SEMANTIC_ACTION();f++){const h=this.rd.getSymbols(f),m=l.get(h);if(m==null)throw new Q("FunctionCustom é nulo");a+=`
void `+r+"::"+h+`()
{
    switch (currentToken->getId())
    {
`;const d=Object.keys(m.input).map(Number);for(let b=0;b<d.length;b++){const p=m.input.get(d[b]);let T=d[b];a+="        case "+T+": // "+this.rd.getSymbols(T)+`
`;for(let _=b+1;_<d.length;_++){const g=m.input.get(d[_]);if(p==null||g==null)throw new Q("rhs é nulo");p.sort().toString()==g.sort().toString()&&(T=d[_],a+="        case "+T+": // "+this.rd.getSymbols(T)+`
`,d.splice(_,1),_--)}if((p==null?void 0:p.length)==0&&(a+=`            // EPSILON
`),p==null)throw new Q("rhs é nulo");for(let _=0;_<p.length;_++){const g=p[_];e.isTerminal(g)?a+="            match("+g+"); // "+this.rd.getSymbols(g)+`
`:e.isNonTerminal(g)?a+="            "+this.rd.getSymbols(g)+`();
`:a+="            semanticAnalyser->executeAction("+(g-e.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}a+=`            break;
`}a+=`        default:
            throw SyntaticError(PARSER_ERROR[`+m.lhs+`], currentToken->getPosition());
    }
}
`}const u=`
`+this.closeNamespace(t);return o+a.toString()+u}parserCppLL(e,t){const n=t.scannerName,r=t.parserName,i=t.semanticName;return'#include "'+r+`.h"

`+this.openNamespace(t)+"void "+r+"::parse("+n+" *scanner, "+i+` *semanticAnalyser);
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
            throw SyntaticError(PARSER_ERROR[x], currentToken->getPosition());
        }
    }
    else if (isNonTerminal(x))
    {
        if (pushProduction(x, a))
            return false;
        else
            throw SyntaticError(PARSER_ERROR[x], currentToken->getPosition());
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

`+this.closeNamespace(t)}parserCppLR(e,t){const n=t.scannerName,r=t.parserName,i=t.semanticName;return'#include "'+r+`.h"

`+this.openNamespace(t)+"void "+r+"::parse("+n+" *scanner, "+i+` *semanticAnalyser)
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
    if (currentToken == 0) //Fim de Sentensa
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
            throw SyntaticError(PARSER_ERROR[state], currentToken->getPosition());
    }
    return false;
}

`+this.closeNamespace(t)}}class Zu{constructor(){L(this,"lrTable",null)}generate(e,t,n){if(e===null||t===null)throw new Error("FiniteAutomata and Grammar must not be null");const r=new Map;return r.set("UToken.pas",this.generateToken()),r.set("UConstants.pas",this.generateConstants(e,t,n)),r.set("UAnalysisError.pas",this.generateAnalysisError()),r.set("ULexicalError.pas",this.generateLexicalError()),r.set("USyntaticError.pas",this.generateSyntaticError()),r.set("USemanticError.pas",this.generateSemanticError()),r}generateToken(){return`unit UToken;

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
`}generateSyntaticError(){return`unit USyntaticError;

interface

uses UAnalysisError;

type
    ESyntaticError = class(EAnalysisError)
    public
        constructor create(message:string; position:integer); overload;
        constructor create(message:string); overload;
    end;

implementation

constructor ESyntaticError.create(message:string; position:integer);
begin
    inherited create(message, position);
end;

constructor ESyntaticError.Create(message:string);
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
`}generateConstants(e,t,n){return`unit UConstants;

interface

const

`+this.constants(e,t)+this.lexTables(e,n)+this.syntTables(t,n)+`implementation

end.
`}constants(e,t){let n="",r=null;if(e!=null)r=e.tokens.toArray();else if(t!=null)r=t.terminals;else throw new Error("Erro Interno");n+=`    EPSILON = 0;
    DOLLAR  = 1;

`;for(let i=0;i<r.length;i++){const o=r[i];o.charAt(0)=='"'?n+="    t_TOKEN_"+(i+2)+" = "+(i+2)+"; //"+o+`
`:n+="    t_"+o+" = "+(i+2)+`;
`}return n+=`
`,n.toString()}lexTables(e,t){return e==null?"":"    STATES_COUNT = "+e.transitions.size()+`;

`+this.mainLex(e,t)+this.context(e)+(e.specialCases.length>0?this.lookup(e):"")+this.scanner_error(e)}context(e){if(!e.hasContext())return"";let t="";t+=`    SCANNER_CONTEXT : array[0..STATES_COUNT-1][0..1] of integer =
    (
`;for(let n=0;n<e.transitions.size();n++)t+="        (",t+=e.isContext(n)?"1":"0",t+=", ",t+=e.getOrigin(n),t+=`),
`;return t=t.slice(0,-2),t+=`
    );
`,t.toString()}scanner_error(e){let t="";t+=`    SCANNER_ERROR : array[0..STATES_COUNT-1] of string =
    (
`;const n=e.transitions.size();for(let r=0;r<n;r++){t+="        '";const i=e.getError(r);for(let o=0;o<i.length;o++)i.charAt(o)=="'"?t+="''":t+=i.charAt(o);t+=`',
`}return t=t.slice(0,-2),t+=`
    );
`,t.toString()}mainLex(e,t){let n="",r;n+=this.scannerTable(e,t),n+=`    TOKEN_STATE : array[0..STATES_COUNT-1] of integer =
        ( `;const i=e.transitions.size();r=i.toString().length,r==1&&(r=2);for(let o=0;o<i;o++){const l=e.tokenForState(o).toString();for(let u=l.length;u<r;u++)n+=" ";n+=l+", "}return n=n.slice(0,-2),n+=` );

`,n.toString()}scannerTable(e,t){if(t.scannerTable==Z.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`    SCANNER_TABLE : array[0..STATES_COUNT-1, char] of integer =
    ( 
`;const r=e.transitions.size();let i=r.toString().length;i==1&&(i=2);for(let o=0;o<r;o++){n+="        ( ";for(let a=0;a<256;a++){const l=e.nextState(String.fromCharCode(a),o).toString();for(let u=l.length;u<i;u++)n+=" ";n+=l+", ",a==200&&(n+=`
          `)}n=n.slice(0,-2),n+=` ),
`}return n=n.slice(0,-2),n+=`
    );

`,n.toString()}lookup(e){let t="";const n=e.getSpecialCasesIndexes();t+="    SPECIAL_CASES_INDEXES : array[0.."+n.length+`] of integer =
        ( `;let r=n.length;for(let o=0;o<n.length;o++)t+=n[o][0],t+=", ";t+=n[r-1][1],t+=` );

`;const i=e.specialCases;r=i.length,t+="    SPECIAL_CASES_KEYS : array[0.."+(r-1)+`] of string =
        (  `;for(let o=0;o<r;o++)t+="'",t+=i[o].key,t+="', ";t=t.slice(0,-2),t+=` );

`,t+="    SPECIAL_CASES_VALUES : array[0.."+(r-1)+`] of integer =
        (  `;for(let o=0;o<r;o++)t+=i[o].value,t+=", ";return t=t.slice(0,-2),t+=` );

`,t.toString()}syntTables(e,t){if(e==null)return"";switch(t.parser){case Z.PARSER_REC_DESC:return this.errorLL(e);case Z.PARSER_LL:return"    START_SYMBOL = "+e.startSymbol+`;

    FIRST_NON_TERMINAL    = `+e.FIRST_NON_TERMINAL+`;
    FIRST_SEMANTIC_ACTION = `+e.FIRST_SEMANTIC_ACTION()+`;

`+this.transTablesLL(new Lr(e))+this.prodsLL(e)+this.errorLL(e);case Z.PARSER_SLR:case Z.PARSER_LALR:case Z.PARSER_LR:return"    FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

    SHIFT  = 0;
    REDUCE = 1;
    ACTION = 2;
    ACCEPT = 3;
    GO_TO  = 4;
    ERROR  = 5;

`+this.transTablesLR(e)+`
`+this.prodsLR(e)+`
`+this.errorLR();default:return""}}transTablesLR(e){const t=Ns.createGenerator(e,Z.PARSER_SLR);if(t==null)throw new Q("Gerador de Tabela é nulo.");this.lrTable=t.buildIntTable();let n="";n+="    PARSER_TABLE : array[0.."+(this.lrTable.length-1)+", 0.."+(this.lrTable[0].length-1)+`, 0..1] of integer =
`,n+=`    (
`;let r=this.lrTable.length;e.productions.size()>r&&(r=e.productions.size()),r=(""+r).length;for(let i=0;i<this.lrTable.length;i++){n+="        (";for(let o=0;o<this.lrTable[i].length;o++){n+=" (",n+=Le.CONSTANTS[this.lrTable[i][o][0]],n+=", ";const a=""+this.lrTable[i][o][1];for(let l=a.length;l<r;l++)n+=" ";n+=a+"),"}n=n.slice(0,-1),n+=` ),
`}return n=n.slice(0,-2),n+=`
    );
`,n.toString()}prodsLR(e){let t="";const n=e.productions.toArray();t+="    PRODUCTIONS : array[0.."+(n.length-1)+`, 0..1] of Integer =
`,t+=`    (
`;for(let r=0;r<n.length;r++)t+="        ( ",t+=n[r].get_lhs(),t+=", ",t+=n[r].get_rhs().length,t+=` ),
`;return t=t.slice(0,-2),t+=`
    );
`,t.toString()}transTablesLL(e){const t=e.generateTable(),n=[];let r=0;for(let o=0;o<t.length;o++)for(let a=0;a<n[o].length;a++){const l=t[o][a].toString();n[o][a]=l,l.length>r&&(r=l.length)}let i="";i+="    PARSER_TABLE : array[0.."+(n.length-1)+", 0.."+(n[0].length-1)+`] of integer =
`,i+=`    (
`;for(let o=0;o<n.length;o++){i+="        (";for(let a=0;a<n[o].length;a++){i+=" ";for(let l=n[o][a].length;l<r;l++)i+=" ";i+=n[o][a]+","}i=i.slice(0,-1),i+=` ),
`}return i=i.slice(0,-2),i+=`
    );

`,i.toString()}prodsLL(e){const t=e.productions.toArray(),n=[];let r=0,i=0;for(let a=0;a<t.length;a++){const l=t[a].get_rhs();if(l.length>i&&(i=l.length),l.length>0){n[a]=[],n[a][0]=l.length.toString();for(let u=0;u<l.length+1;u++)n[a][u+1]=l[u].toString(),n[a][u+1].length>r&&(r=n[a][u+1].length)}else n[a]=new Array(2),n[a][0]="1",n[a][1]="0"}let o="";o+="    PRODUCTIONS : array[0.."+(t.length-1)+", 0.."+i+`] of integer =
`,o+=`    (
`;for(let a=0;a<n.length;a++){o+="        (";for(let l=0;l<n[a].length;l++){o+=" ";for(let u=n[a][l].length;u<r;u++)o+=" ";o+=n[a][l]+","}for(let l=n[a].length;l<=i;l++){o+=" ";for(let u=1;u<r;u++)o+=" ";o+="0,"}o=o.slice(0,-1),o+=` ),
`}return o=o.slice(0,-2),o+=`
    );

`,o.toString()}errorLL(e){const t=e.symbols;let n="";n+="    PARSER_ERROR : array [0.."+(e.symbols.length-1)+`] of string =
    (
        '',
        'Era esperado fim de programa',
`;for(let r=2;r<e.FIRST_NON_TERMINAL;r++){n+="        'Era esperado ";for(let i=0;i<t[r].length;i++)switch(t[r].charAt(i)){case"'":n+="''";break;default:n+=t[r].charAt(i)}n+=`',
`}for(let r=e.FIRST_NON_TERMINAL;r<t.length;r++)n+="        '"+t[r]+` inválido',
`;return n=n.slice(0,-2),n+=`
    );

`,n.toString()}errorLR(){if(this.lrTable===null)throw new Q("Tabela LR está nula.");let e="";e+="    PARSER_ERROR : array [0.."+(this.lrTable.length-1)+`] of string =
    (
`;for(let t=0;t<this.lrTable.length;t++)e+="        'Erro estado "+t+`',
`;return e=e.slice(0,-2),e+=`
    );

`,e.toString()}}class Yu{constructor(){L(this,"sensitive",!0);L(this,"lookup",!0)}generate(e,t){const n=new Map,r=t.scannerName;let i;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,i=this.buildScanner(e,t)):i=this.buildEmptyScanner(t),n.set("U"+r+".pas",i),n}buildScanner(e,t){const n=t.scannerName;let r,i,o,a;return t.input==Z.INPUT_STREAM?(r="TStream",i=`var
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
`,o="setInput(nil);",a=", classes"):t.input==Z.INPUT_STRING?(r="string",i=`begin
    self.input := input;
    setPosition(1);
    setEnd(Length(input));
end;
`,o="setInput('');",a=""):(r="",i="",o="",a=""),"unit U"+n+`;

interface

uses UToken, ULexicalError, UConstants`+a+`, SysUtils;

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
    `+o+`
end;

constructor T`+n+".create(input : "+r+`);
begin
    setInput(input);
end;

procedure T`+n+".setInput(input : "+r+`);
`+i+`
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
`}nextStateImpl(e,t){switch(t.scannerTable){case Z.SCANNER_TABLE_FULL:case Z.SCANNER_TABLE_COMPACT:return`    result := SCANNER_TABLE[state][c];
`;case Z.SCANNER_TABLE_HARDCODE:{const n=e.transitions,r=[];for(let i=0;i<n.size();i++){const o=n.get(i);if(o.size!=0){r.push("        "+i+`: case integer(c) of
`);for(const[a,l]of o.entries()){const u=a,f=l;r.push("            "+u.charCodeAt(0)+": result := "+f+`;
`)}r.push(`            else result := -1;
        end;
`)}}return`    case state of
`+r.toString()+`        else result := -1;
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
`}}class Xu{generate(e,t){const n=new Map;if(e!=null){const r=t.parserName;let i;switch(t.parser){case Z.PARSER_REC_DESC:i=this.buildRecursiveDescendantParser(e,t);break;case Z.PARSER_LL:i=this.buildLLParser(e,t);break;case Z.PARSER_SLR:case Z.PARSER_LALR:case Z.PARSER_LR:i=this.buildLRParser(e,t);break;default:i=null}if(i===null)throw new Q("String do Parser é nulo.");n.set("U"+r+".pas",i),n.set("U"+t.semanticName+".pas",this.generateSemanticAnalyser(t))}return n}buildRecursiveDescendantParser(e,t){const n=t.parserName,r=t.scannerName,i=t.semanticName,o=new Ir(e),a=o.build();let l="";for(let h=e.FIRST_NON_TERMINAL;h<e.FIRST_SEMANTIC_ACTION();h++)l+="        procedure "+o.getSymbols(h)+`;
`;const u=l;l="";for(let h=e.FIRST_NON_TERMINAL;h<e.FIRST_SEMANTIC_ACTION();h++){const m=o.getSymbols(h),d=a.get(m);if(l+=`
procedure T`+n+"."+m+`;
begin
    case currentToken.getId of
`,d==null)throw new _n("Gramática não é LL.");const b=Array.from(d.input.keys());for(let p=0;p<b.length;p++){const T=d.input.get(b[p]);let _=b[p];l+="        "+_+" (* "+o.getSymbols(_)+" *)";for(let g=p+1;g<b.length;g++)d.input.get(b[g])===T&&(_=b[g],l+=`,
        `+_+" (* "+o.getSymbols(_)+" *)",b.slice(g,g),g--);if(T===void 0)throw new _n("Gramática não é LL.");l+=` : 
        begin
`,T.length==0&&(l+=`            // EPSILON
`);for(let g=0;g<T.length;g++){const y=T[g];e.isTerminal(y)?l+="            match("+y+"); // "+o.getSymbols(y)+`
`:e.isNonTerminal(y)?l+="            "+o.getSymbols(y)+`;
`:l+="            semanticAnalyser.executeAction("+(y-e.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}l+=`        end;
`}l+=`        else
            raise ESyntaticError.create(PARSER_ERROR[`+d.lhs+`], currentToken.getPosition());
    end;
end;
`}const f=l;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+r+", U"+i+`, USyntaticError, UAnalysisError;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+r+"; semanticAnalyser : T"+i+`); //raises EAnaliserError

    private
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+r+`;
        semanticAnalyser : T`+i+`;

        procedure match(token : integer);

`+u+`    end;

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

procedure T`+n+".parse(scanner : T"+r+"; semanticAnalyser : T"+i+`);
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
        raise ESyntaticError.create(PARSER_ERROR[DOLLAR], currentToken.getPosition);
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
        raise ESyntaticError.create(PARSER_ERROR[token], currentToken.getPosition);
end;
`+f+`
end.
`}buildLLParser(e,t){const n=t.parserName,r=t.scannerName,i=t.semanticName;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+r+", U"+i+`, USyntaticError, UAnalysisError, classes;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+r+"; semanticAnalyser : T"+i+`); //raises EAnaliserError

    private
        stack : TList;
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+r+`;
        semanticAnalyser : T`+i+`;

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

procedure T`+n+".parse(scanner : T"+r+"; semanticAnalyser : T"+i+`);
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
            raise ESyntaticError.create(PARSER_ERROR[x], currentToken.getPosition);
    end
    else if isNonTerminal(x) then
    begin
        if pushProduction(x, a) then
            result := false
        else
            raise ESyntaticError.create(PARSER_ERROR[x], currentToken.getPosition);
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
`}buildLRParser(e,t){const n=t.parserName,r=t.scannerName,i=t.semanticName;return"unit U"+n+`;

interface

uses UConstants, UToken, U`+r+", U"+i+`, USyntaticError, UAnalysisError, classes;

type
    T`+n+` = class
    public
        constructor create;
        destructor destroy; override;

        procedure parse(scanner : T`+r+"; semanticAnalyser : T"+i+`); //raises EAnaliserError

    private
        stack : TList;
        currentToken : TToken;
        previousToken : TToken;
        scanner : T`+r+`;
        semanticAnalyser : T`+i+`;

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

procedure T`+n+".parse(scanner : T"+r+"; semanticAnalyser : T"+i+`);
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
            raise ESyntaticError.create(PARSER_ERROR[state], currentToken.getPosition);
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
`}}const Ot=class Ot{constructor(e){L(this,"FIRST_NON_TERMINAL");L(this,"FIRST_SEMANTIC_ACTION");L(this,"LAST_SEMANTIC_ACTION");L(this,"START_SYMBOL",0);L(this,"grammar");L(this,"scanner",null);L(this,"table");L(this,"productions");L(this,"stack",new zt);L(this,"currentToken",null);L(this,"symb");L(this,"node",new st);L(this,"nodeCount",new zt);this.grammar=e.getGrammar()||(()=>{throw new Error("Grammar is undefined")})(),this.table=e.generateTable(),this.FIRST_NON_TERMINAL=this.grammar.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION=this.grammar.FIRST_SEMANTIC_ACTION(),this.LAST_SEMANTIC_ACTION=this.grammar.LAST_SEMANTIC_ACTION(),this.START_SYMBOL=this.grammar.startSymbol;const t=this.grammar.productions;this.productions=[];for(let n=0;n<t.size();n++){const r=t.get(n).get_rhs();if(r.length>0){this.productions[n]=[];for(let i=0;i<r.length;i++)this.productions[n][i]=r[i]}else this.productions[n]=[0]}this.symb=this.grammar.symbols}step(){this.currentToken==null&&(this.currentToken=new Ce(Ot.DOLLAR,"$",0));const e=this.stack.pop(),t=this.currentToken.id;if(e==null)throw new Q("Stack is not initialized");if(e==Ot.EPSILON){this.node.add(new st("EPSILON"));let n=this.nodeCount.pop();for(;n==1;){const r=this.node.parent;if(r===null)throw new Q("Null parent");if(this.node=r,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}return this.nodeCount.push(n-1),!1}else if(this.isTerminal(e)){this.node.add(new st(this.symb[t]));let n=this.nodeCount.pop();for(;n==1;){const r=this.node.parent;if(r===null)throw new Q("Null parent");if(this.node=r,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}if(this.nodeCount.push(n-1),e==t){if(this.stack.empty())return!0;if(this.scanner==null)throw new Q("Scanner is NULL");return this.currentToken=this.scanner.nextToken(),!1}else throw this.node.add(new st("ERRO SINTÁTICO: Era esperado "+this.symb[e])),new Q("Era esperado "+this.symb[e],this.currentToken.position)}else if(this.isNonTerminal(e)){const n=this.table[e-this.FIRST_NON_TERMINAL][t-1];if(n!=-1){const r=this.productions[n];for(let o=r.length-1;o>=0;o--)this.stack.push(r[o]);const i=new st(this.symb[e]);return this.node.add(i),this.node=i,this.nodeCount.push(r.length),!1}else throw this.node.add(new st("ERRO SINTÁTICO: "+this.symb[t]+" inesperado")),new Q(this.symb[t]+" inesperado",this.currentToken.position)}else if(this.isSemanticAction(e)){this.node.add(new st("#"+(e-this.FIRST_SEMANTIC_ACTION)));let n=this.nodeCount.pop();for(;n==1;){const r=this.node.parent;if(r===null)throw new Q("Null parent");if(this.node=r,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}return this.nodeCount.push(n-1),!1}else return!1}parse(e,t){for(this.scanner=e,this.node=t,this.nodeCount.clear(),this.stack.clear(),this.stack.push(Ot.DOLLAR),this.stack.push(this.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););return t}isTerminal(e){return e>=0&&e<this.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=this.FIRST_NON_TERMINAL&&e<this.FIRST_SEMANTIC_ACTION}isSemanticAction(e){return e>=this.FIRST_SEMANTIC_ACTION&&e<=this.LAST_SEMANTIC_ACTION}};L(Ot,"EPSILON",0),L(Ot,"DOLLAR",1),L(Ot,"FIRST_TERMINAL",2);let or=Ot;function rn(s,e){const t=s.split(`
`).filter(Boolean),n=new Map;for(let r of t){r=r.trim();const i=r.split(":").filter(Boolean);n.set("{"+i[0].trim()+"}",i[1].trim())}for(const[r,i]of n.entries()){const o=new RegExp(r,"g");e=e.replace(o,i)}return e}function Ju(s,e,t){try{t=rn(e,t),e=""}catch{throw new Ne("Definições com problemas - Verificar Definições")}const n=!0;Kt.Instance;const i=new sn().parseFA(e,t,n),o=new ge;{const m=i.tokens;for(let d=0;d<m.size();d++)o.add(m.get(d))}const a=o;for(;a.remove(`
`););function l(m){try{const d=new _a;for(let b=0;b<u.size();b++){const p=u.get(b);d.addToken(p,p)}return d.addIgnore("[\\ \\n\\r\\t]"),d.getFA(m)}catch(d){return console.log(d),null}}const u=a;let f;if(i!=null)f=new tn(i,n);else{const m=l(n);if(m==null)throw Error("Finite Automata from Lexical Data is NULL");f=new tn(m,n)}f.setInput(s);const h=new Map;try{let m=f.nextToken();for(;m!=null;){const d=u.get(m.id-2);h.set(m,d),m=f.nextToken()}}catch(m){const d=new Ce(-1,m.message,m.position);h.set(d,"ERRO LÉXICO"),console.log(m)}return h}function Qu(s,e){try{e=rn(s,e),s=""}catch{throw new Ne("Definições com problemas - Verificar Definições")}const t=!0;return new sn().parseFA(s,e,t).asHTML()}function eh(s,e,t,n,r,i,o){try{t=rn(e,t),e=""}catch{throw new Ne("Definições com problemas - Verificar Definições")}const a=r.split(`
`),l=new Set;a.forEach(F=>{const M=F.match(/^[^:]+(?=\s*::=)/);M&&l.add(M[0].trim())});const u=Array.from(l),f=u.indexOf(n.trim());if(f==-1)throw new Q("Símbolo inicial da Gramática não encontrado.");const h=u.splice(f,1)[0];u.splice(0,0,h);let m=!0;const d=!0;Kt.Instance;const p=new sn().parseFA(e,t,d);let T;if(m||T==null){m=!1;const F=new ge;{const H=p.tokens;for(let X=0;X<H.size();X++)F.add(H.get(X)),F.add(`
`)}const M=u,P=new ge;M.forEach(H=>P.add(H)),T=new Mn().parse(F,P,r)}else T=void 0;const _=p.tokens.toArray();if(T===void 0)throw new Q("Grammar is Undefined");let g=null,y=null,k=null,w=null;switch(i){case Z.PARSER_REC_DESC:case Z.PARSER_LL:[y,o,w]=Or(p,T,_,o,d);break;case Z.PARSER_SLR:case Z.PARSER_LALR:case Z.PARSER_LR:[g,o,k]=Pr(p,T,_,o,d);break}if(k===null&&w===null)throw new Q("Erro na criação do Parser Sintático");let N=new st("Derivação");if(o===null)throw new Q("Finite Automata Simulator is Null");return o.setInput(s),y!=null?N=y.parse(o,N):g!=null&&(N=g.parse(o,N)),N}function th(s,e,t,n,r,i){try{e=rn(s,e),s=""}catch{throw new Ne("Definições com problemas - Verificar Definições")}const o=n.split(`
`),a=new Set;o.forEach(w=>{const N=w.match(/^[^:]+(?=\s*::=)/);N&&a.add(N[0].trim())});const l=Array.from(a),u=l.indexOf(t.trim());if(u==-1)throw new Q("Símbolo inicial da Gramática não encontrado.");const f=l.splice(u,1)[0];l.splice(0,0,f);let h=!0;const m=!0;Kt.Instance;const b=new sn().parseFA(s,e,m);let p;if(h||p==null){h=!1;const w=new ge;{const M=b.tokens;for(let P=0;P<M.size();P++)w.add(M.get(P)),w.add(`
`)}const N=l,F=new ge;N.forEach(M=>F.add(M)),p=new Mn().parse(w,F,n)}else p=void 0;const T=b.tokens.toArray();if(p===void 0)throw new Q("Grammar is Undefined");let _=null,g=null,y=null,k=null;switch(r){case Z.PARSER_REC_DESC:case Z.PARSER_LL:[g,i,k]=Or(b,p,T,i,m);break;case Z.PARSER_SLR:case Z.PARSER_LALR:case Z.PARSER_LR:[_,i,y]=Pr(b,p,T,i,m);break}if(y!==null)return y.tableAsHTML();if(k!==null)return k.tableAsHTML();throw new Q("Erro na criação do Parser Sintático")}function nh(s,e,t,n,r,i){try{e=rn(s,e),s=""}catch{throw new Ne("Definições com problemas - Verificar Definições")}const o=n.split(`
`),a=new Set;o.forEach(w=>{const N=w.match(/^[^:]+(?=\s*::=)/);N&&a.add(N[0].trim())});const l=Array.from(a),u=l.indexOf(t.trim());if(u==-1)throw new Q("Símbolo inicial da Gramática não encontrado.");const f=l.splice(u,1)[0];l.splice(0,0,f);let h=!0;const m=!0;Kt.Instance;const b=new sn().parseFA(s,e,m);let p;if(h||p==null){h=!1;const w=new ge;{const M=b.tokens;for(let P=0;P<M.size();P++)w.add(M.get(P)),w.add(`
`)}const N=l,F=new ge;N.forEach(M=>F.add(M)),p=new Mn().parse(w,F,n)}else p=void 0;const T=b.tokens.toArray();if(p===void 0)throw new Q("Grammar is Undefined");let _=null,g=null,y=null,k=null;switch(r){case Z.PARSER_REC_DESC:case Z.PARSER_LL:[g,i,k]=Or(b,p,T,i,m);break;case Z.PARSER_SLR:case Z.PARSER_LALR:case Z.PARSER_LR:[_,i,y]=Pr(b,p,T,i,m);break}if(y===null&&k===null)throw new Q("Erro na criação do Parser Sintático");return y!=null?y.itemsAsHTML():k!=null?k.tableAsHTML():"ERROR"}function sh(s,e,t,n,r,i){try{e=rn(s,e),s=""}catch{throw new Ne("Definições com problemas - Verificar Definições")}const o=n.split(`
`),a=new Set;o.forEach(T=>{const _=T.match(/^[^:]+(?=\s*::=)/);_&&a.add(_[0].trim())});const l=Array.from(a),u=l.indexOf(t.trim());if(u==-1)throw new Q("Símbolo inicial da Gramática não encontrado.");const f=l.splice(u,1)[0];l.splice(0,0,f);let h=!0;const m=!0;Kt.Instance;const b=new sn().parseFA(s,e,m);let p;if(h||p==null){h=!1;const T=new ge;{const y=b.tokens;for(let k=0;k<y.size();k++)T.add(y.get(k)),T.add(`
`)}const _=l,g=new ge;_.forEach(y=>g.add(y)),p=new Mn().parse(T,g,n)}else p=void 0;if(b.tokens.toArray(),p===void 0)throw new Q("Grammar is Undefined");return p.ffAsHTML()}function rh(s,e){const t=e.split(`
`),n=new Set;t.forEach(o=>{const a=o.match(/^[^:]+(?=\s*::=)/);a&&n.add(a[0].trim())});const r=Array.from(n),i=r.indexOf(s.trim());if(i!=-1){const o=r.splice(i,1)[0];r.splice(0,0,o)}else r.splice(0,0,s);return r.join(`
`)}function ih(s,e,t,n,r){try{e=rn(s,e),s=""}catch{throw new Ne("Definições com problemas - Verificar Definições")}const i=n.split(`
`),o=new Set;i.forEach(T=>{const _=T.match(/^[^:]+(?=\s*::=)/);_&&o.add(_[0].trim())});const a=Array.from(o),l=a.indexOf(t.trim());if(l==-1)throw new Q("Símbolo inicial da Gramática não encontrado.");const u=a.splice(l,1)[0];a.splice(0,0,u);let f=!0;const h=!0;Kt.Instance;const d=new sn().parseFA(s,e,h);let b;if(f||b==null){f=!1;const T=new ge;{const y=d.tokens;for(let k=0;k<y.size();k++)T.add(y.get(k)),T.add(`
`)}const _=a,g=new ge;_.forEach(y=>g.add(y)),b=new Mn().parse(T,g,n)}else b=void 0;if(d.tokens.toArray(),b===void 0)throw new Q("Grammar is Undefined");const p=new ft;switch(alert(r.language),r.language){case Z.LANG_JAVA:p.setAll(new Uu().generate(d,b,r)),p.setAll(new $u().generate(d,r)),p.setAll(new Gu().generate(b,r));break;case Z.LANG_CPP:p.setAll(new Wu().generate(d,b,r)),p.setAll(new Vu().generate(d,r)),p.setAll(new qu().generate(b,r));break;case Z.LANG_DELPHI:p.setAll(new Zu().generate(d,b,r)),p.setAll(new Yu().generate(d,r)),p.setAll(new Xu().generate(b,r));break}return p}function Or(s,e,t,n,r){s!=null?n=new tn(s,r):n=new tn(ba(t,r),r);let i,o;if(e!=null){if(o=new Lr(e),o===null)throw new Q("Parser is Null");i=new or(o)}else throw new Q("Grammar is Null");return[i,n,o]}function Pr(s,e,t,n,r){s!=null?n=new tn(s,r):n=new tn(ba(t,r),r);let i,o;if(e!=null){if(o=Ns.createGenerator(e,Z.PARSER_SLR),o===null)throw new Q("Parser is Null");i=new ir(o)}else throw new Q("Grammar is Null");return[i,n,o]}function ba(s,e){try{const t=new _a;for(let n=0;n<s.length;n++){const r=s[n];t.addToken(r,r)}return t.addIgnore("[\\ \\n\\r\\t]"),t.getFA(e)}catch(t){throw t}}const on=fu("projetos",{state:()=>({listaProjetos:[{id:0,fileName:"untitled.gals",options:"",regularDefinitions:"",tokens:"",nonTerminals:"",grammar:"",textSimulator:"",consoleExit:"",optionsGals:new Z}],selecionado:0,layout:{token:33.3333,simulacao:33.3333,saidaSimulacao:33.3333,gramatica:50}}),getters:{totalProjetos:s=>s.listaProjetos.length},actions:{changeSelected(s){this.selecionado=s},deleteProject(s){const e=this.selecionado;this.selecionado=-1,this.listaProjetos.splice(s,1);for(let t=0;t<this.listaProjetos.length;t++)this.listaProjetos[t].id=t;this.totalProjetos==0||this.selecionado==-1?this.selecionado=-1:this.selecionado=e-1},addProject(s){this.listaProjetos.push(s)},selectLastProject(){this.selecionado=this.listaProjetos.length-1}}});function Vn(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Sa={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,r,i){function o(u,f){if(!r[u]){if(!n[u]){var h=typeof Vn=="function"&&Vn;if(!f&&h)return h(u,!0);if(a)return a(u,!0);var m=new Error("Cannot find module '"+u+"'");throw m.code="MODULE_NOT_FOUND",m}var d=r[u]={exports:{}};n[u][0].call(d.exports,function(b){var p=n[u][1][b];return o(p||b)},d,d.exports,t,n,r,i)}return r[u].exports}for(var a=typeof Vn=="function"&&Vn,l=0;l<i.length;l++)o(i[l]);return o}({1:[function(t,n,r){var i=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var u,f,h,m,d,b,p,T=[],_=0,g=l.length,y=g,k=i.getTypeOf(l)!=="string";_<l.length;)y=g-_,h=k?(u=l[_++],f=_<g?l[_++]:0,_<g?l[_++]:0):(u=l.charCodeAt(_++),f=_<g?l.charCodeAt(_++):0,_<g?l.charCodeAt(_++):0),m=u>>2,d=(3&u)<<4|f>>4,b=1<y?(15&f)<<2|h>>6:64,p=2<y?63&h:64,T.push(a.charAt(m)+a.charAt(d)+a.charAt(b)+a.charAt(p));return T.join("")},r.decode=function(l){var u,f,h,m,d,b,p=0,T=0,_="data:";if(l.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var g,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&y--,l.charAt(l.length-2)===a.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(g=o.uint8array?new Uint8Array(0|y):new Array(0|y);p<l.length;)u=a.indexOf(l.charAt(p++))<<2|(m=a.indexOf(l.charAt(p++)))>>4,f=(15&m)<<4|(d=a.indexOf(l.charAt(p++)))>>2,h=(3&d)<<6|(b=a.indexOf(l.charAt(p++))),g[T++]=u,d!==64&&(g[T++]=f),b!==64&&(g[T++]=h);return g}},{"./support":30,"./utils":32}],2:[function(t,n,r){var i=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function u(f,h,m,d,b){this.compressedSize=f,this.uncompressedSize=h,this.crc32=m,this.compression=d,this.compressedContent=b}u.prototype={getContentWorker:function(){var f=new o(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return f.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new o(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(f,h,m){return f.pipe(new a).pipe(new l("uncompressedSize")).pipe(h.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},n.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,r){var i=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,r){var i=t("./utils"),o=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?i.getTypeOf(a)!=="string"?function(u,f,h,m){var d=o,b=m+h;u^=-1;for(var p=m;p<b;p++)u=u>>>8^d[255&(u^f[p])];return-1^u}(0|l,a,a.length,0):function(u,f,h,m){var d=o,b=m+h;u^=-1;for(var p=m;p<b;p++)u=u>>>8^d[255&(u^f.charCodeAt(p))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(t,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,n,r){var i=null;i=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:i}},{lie:37}],7:[function(t,n,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),l=t("./stream/GenericWorker"),u=i?"uint8array":"array";function f(h,m){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(f,l),f.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,h.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(m){h.push({data:m,meta:h.meta})}},r.compressWorker=function(h){return new f("Deflate",h)},r.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,r){function i(d,b){var p,T="";for(p=0;p<b;p++)T+=String.fromCharCode(255&d),d>>>=8;return T}function o(d,b,p,T,_,g){var y,k,w=d.file,N=d.compression,F=g!==u.utf8encode,M=a.transformTo("string",g(w.name)),P=a.transformTo("string",u.utf8encode(w.name)),H=w.comment,X=a.transformTo("string",g(H)),I=a.transformTo("string",u.utf8encode(H)),G=P.length!==w.name.length,S=I.length!==H.length,V="",se="",K="",ee=w.dir,q=w.date,oe={crc32:0,compressedSize:0,uncompressedSize:0};b&&!p||(oe.crc32=d.crc32,oe.compressedSize=d.compressedSize,oe.uncompressedSize=d.uncompressedSize);var U=0;b&&(U|=8),F||!G&&!S||(U|=2048);var j=0,ae=0;ee&&(j|=16),_==="UNIX"?(ae=798,j|=function(J,ve){var Ie=J;return J||(Ie=ve?16893:33204),(65535&Ie)<<16}(w.unixPermissions,ee)):(ae=20,j|=function(J){return 63&(J||0)}(w.dosPermissions)),y=q.getUTCHours(),y<<=6,y|=q.getUTCMinutes(),y<<=5,y|=q.getUTCSeconds()/2,k=q.getUTCFullYear()-1980,k<<=4,k|=q.getUTCMonth()+1,k<<=5,k|=q.getUTCDate(),G&&(se=i(1,1)+i(f(M),4)+P,V+="up"+i(se.length,2)+se),S&&(K=i(1,1)+i(f(X),4)+I,V+="uc"+i(K.length,2)+K);var ne="";return ne+=`
\0`,ne+=i(U,2),ne+=N.magic,ne+=i(y,2),ne+=i(k,2),ne+=i(oe.crc32,4),ne+=i(oe.compressedSize,4),ne+=i(oe.uncompressedSize,4),ne+=i(M.length,2),ne+=i(V.length,2),{fileRecord:h.LOCAL_FILE_HEADER+ne+M+V,dirRecord:h.CENTRAL_FILE_HEADER+i(ae,2)+ne+i(X.length,2)+"\0\0\0\0"+i(j,4)+i(T,4)+M+V+X}}var a=t("../utils"),l=t("../stream/GenericWorker"),u=t("../utf8"),f=t("../crc32"),h=t("../signature");function m(d,b,p,T){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=p,this.encodeFileName=T,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(d){var b=d.meta.percent||0,p=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:p?(b+100*(p-T-1))/p:100}}))},m.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var b=this.streamFiles&&!d.file.dir;if(b){var p=o(d,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(d){this.accumulate=!1;var b=this.streamFiles&&!d.file.dir,p=o(d,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),b)this.push({data:function(T){return h.DATA_DESCRIPTOR+i(T.crc32,4)+i(T.compressedSize,4)+i(T.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var d=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var p=this.bytesWritten-d,T=function(_,g,y,k,w){var N=a.transformTo("string",w(k));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(_,2)+i(_,2)+i(g,4)+i(y,4)+i(N.length,2)+N}(this.dirRecords.length,p,d,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(d){this._sources.push(d);var b=this;return d.on("data",function(p){b.processChunk(p)}),d.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),d.on("error",function(p){b.error(p)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(d){var b=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var p=0;p<b.length;p++)try{b[p].error(d)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,b=0;b<d.length;b++)d[b].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,r){var i=t("../compressions"),o=t("./ZipFileWorker");r.generateWorker=function(a,l,u){var f=new o(l.streamFiles,u,l.platform,l.encodeFileName),h=0;try{a.forEach(function(m,d){h++;var b=function(g,y){var k=g||y,w=i[k];if(!w)throw new Error(k+" is not a valid compression method !");return w}(d.options.compression,l.compression),p=d.options.compressionOptions||l.compressionOptions||{},T=d.dir,_=d.date;d._compressWorker(b,p).withStreamInfo("file",{name:m,dir:T,date:_,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(f)}),f.entriesCount=h}catch(m){f.error(m)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,r){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new i;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(i.prototype=t("./object")).loadAsync=t("./load"),i.support=t("./support"),i.defaults=t("./defaults"),i.version="3.10.1",i.loadAsync=function(o,a){return new i().loadAsync(o,a)},i.external=t("./external"),n.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,r){var i=t("./utils"),o=t("./external"),a=t("./utf8"),l=t("./zipEntries"),u=t("./stream/Crc32Probe"),f=t("./nodejsUtils");function h(m){return new o.Promise(function(d,b){var p=m.decompressed.getContentWorker().pipe(new u);p.on("error",function(T){b(T)}).on("end",function(){p.streamInfo.crc32!==m.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(m,d){var b=this;return d=i.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),f.isNode&&f.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",m,!0,d.optimizedBinaryString,d.base64).then(function(p){var T=new l(d);return T.load(p),T}).then(function(p){var T=[o.Promise.resolve(p)],_=p.files;if(d.checkCRC32)for(var g=0;g<_.length;g++)T.push(h(_[g]));return o.Promise.all(T)}).then(function(p){for(var T=p.shift(),_=T.files,g=0;g<_.length;g++){var y=_[g],k=y.fileNameStr,w=i.resolve(y.fileNameStr);b.file(w,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:d.createFolders}),y.dir||(b.file(w).unsafeOriginalName=k)}return T.zipComment.length&&(b.comment=T.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,r){var i=t("../utils"),o=t("../stream/GenericWorker");function a(l,u){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}i.inherits(a,o),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(f){u.push({data:f,meta:{percent:0}})}).on("error",function(f){u.isPaused?this.generatedError=f:u.error(f)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,r){var i=t("readable-stream").Readable;function o(a,l,u){i.call(this,l),this._helper=a;var f=this;a.on("data",function(h,m){f.push(h)||f._helper.pause(),u&&u(m)}).on("error",function(h){f.emit("error",h)}).on("end",function(){f.push(null)})}t("../utils").inherits(o,i),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(i,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(i,o);if(typeof i=="number")throw new Error('The "data" argument must not be a number');return new Buffer(i,o)},allocBuffer:function(i){if(Buffer.alloc)return Buffer.alloc(i);var o=new Buffer(i);return o.fill(0),o},isBuffer:function(i){return Buffer.isBuffer(i)},isStream:function(i){return i&&typeof i.on=="function"&&typeof i.pause=="function"&&typeof i.resume=="function"}}},{}],15:[function(t,n,r){function i(w,N,F){var M,P=a.getTypeOf(N),H=a.extend(F||{},f);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(w=_(w)),H.createFolders&&(M=T(w))&&g.call(this,M,!0);var X=P==="string"&&H.binary===!1&&H.base64===!1;F&&F.binary!==void 0||(H.binary=!X),(N instanceof h&&N.uncompressedSize===0||H.dir||!N||N.length===0)&&(H.base64=!1,H.binary=!0,N="",H.compression="STORE",P="string");var I=null;I=N instanceof h||N instanceof l?N:b.isNode&&b.isStream(N)?new p(w,N):a.prepareContent(w,N,H.binary,H.optimizedBinaryString,H.base64);var G=new m(w,I,H);this.files[w]=G}var o=t("./utf8"),a=t("./utils"),l=t("./stream/GenericWorker"),u=t("./stream/StreamHelper"),f=t("./defaults"),h=t("./compressedObject"),m=t("./zipObject"),d=t("./generate"),b=t("./nodejsUtils"),p=t("./nodejs/NodejsStreamInputAdapter"),T=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var N=w.lastIndexOf("/");return 0<N?w.substring(0,N):""},_=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},g=function(w,N){return N=N!==void 0?N:f.createFolders,w=_(w),this.files[w]||i.call(this,w,null,{dir:!0,createFolders:N}),this.files[w]};function y(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var k={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var N,F,M;for(N in this.files)M=this.files[N],(F=N.slice(this.root.length,N.length))&&N.slice(0,this.root.length)===this.root&&w(F,M)},filter:function(w){var N=[];return this.forEach(function(F,M){w(F,M)&&N.push(M)}),N},file:function(w,N,F){if(arguments.length!==1)return w=this.root+w,i.call(this,w,N,F),this;if(y(w)){var M=w;return this.filter(function(H,X){return!X.dir&&M.test(H)})}var P=this.files[this.root+w];return P&&!P.dir?P:null},folder:function(w){if(!w)return this;if(y(w))return this.filter(function(P,H){return H.dir&&w.test(P)});var N=this.root+w,F=g.call(this,N),M=this.clone();return M.root=F.name,M},remove:function(w){w=this.root+w;var N=this.files[w];if(N||(w.slice(-1)!=="/"&&(w+="/"),N=this.files[w]),N&&!N.dir)delete this.files[w];else for(var F=this.filter(function(P,H){return H.name.slice(0,w.length)===w}),M=0;M<F.length;M++)delete this.files[F[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var N,F={};try{if((F=a.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=F.type.toLowerCase(),F.compression=F.compression.toUpperCase(),F.type==="binarystring"&&(F.type="string"),!F.type)throw new Error("No output type specified.");a.checkSupport(F.type),F.platform!=="darwin"&&F.platform!=="freebsd"&&F.platform!=="linux"&&F.platform!=="sunos"||(F.platform="UNIX"),F.platform==="win32"&&(F.platform="DOS");var M=F.comment||this.comment||"";N=d.generateWorker(this,F,M)}catch(P){(N=new l("error")).error(P)}return new u(N,F.type||"string",F.mimeType)},generateAsync:function(w,N){return this.generateInternalStream(w).accumulate(N)},generateNodeStream:function(w,N){return(w=w||{}).type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(N)}};n.exports=k},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,r){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,r){var i=t("./DataReader");function o(a){i.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}t("../utils").inherits(o,i),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),f=a.charCodeAt(2),h=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===u&&this.data[m+2]===f&&this.data[m+3]===h)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),f=a.charCodeAt(2),h=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&u===m[1]&&f===m[2]&&h===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,n,r){var i=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return i.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(t,n,r){var i=t("./Uint8ArrayReader");function o(a){i.call(this,a)}t("../utils").inherits(o,i),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,r){var i=t("./DataReader");function o(a){i.call(this,a)}t("../utils").inherits(o,i),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,n,r){var i=t("./ArrayReader");function o(a){i.call(this,a)}t("../utils").inherits(o,i),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,r){var i=t("../utils"),o=t("../support"),a=t("./ArrayReader"),l=t("./StringReader"),u=t("./NodeBufferReader"),f=t("./Uint8ArrayReader");n.exports=function(h){var m=i.getTypeOf(h);return i.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new u(h):o.uint8array?new f(i.transformTo("uint8array",h)):new a(i.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,r){var i=t("./GenericWorker"),o=t("../utils");function a(l){i.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,i),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,r){var i=t("./GenericWorker"),o=t("../crc32");function a(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,i),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,r){var i=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}i.inherits(a,o),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,r){var i=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){u.dataIsReady=!0,u.data=f,u.max=f&&f.length||0,u.type=i.getTypeOf(f),u.isPaused||u._tickAndRepeat()},function(f){u.error(f)})}i.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,r){function i(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=i},{}],29:[function(t,n,r){var i=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),l=t("../base64"),u=t("../support"),f=t("../external"),h=null;if(u.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(b,p){return new f.Promise(function(T,_){var g=[],y=b._internalType,k=b._outputType,w=b._mimeType;b.on("data",function(N,F){g.push(N),p&&p(F)}).on("error",function(N){g=[],_(N)}).on("end",function(){try{var N=function(F,M,P){switch(F){case"blob":return i.newBlob(i.transformTo("arraybuffer",M),P);case"base64":return l.encode(M);default:return i.transformTo(F,M)}}(k,function(F,M){var P,H=0,X=null,I=0;for(P=0;P<M.length;P++)I+=M[P].length;switch(F){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(X=new Uint8Array(I),P=0;P<M.length;P++)X.set(M[P],H),H+=M[P].length;return X;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+F+"'")}}(y,g),w);T(N)}catch(F){_(F)}g=[]}).resume()})}function d(b,p,T){var _=p;switch(p){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=p,this._mimeType=T,i.checkSupport(_),this._worker=b.pipe(new o(_)),b.lock()}catch(g){this._worker=new a("error"),this._worker.error(g)}}d.prototype={accumulate:function(b){return m(this,b)},on:function(b,p){var T=this;return b==="data"?this._worker.on(b,function(_){p.call(T,_.data,_.meta)}):this._worker.on(b,function(){i.delay(p,arguments,T)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(i.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},b)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=new Blob([i],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(i),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,r){for(var i=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),l=t("./stream/GenericWorker"),u=new Array(256),f=0;f<256;f++)u[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;u[254]=u[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(b){var p,T,_,g,y,k=b.length,w=0;for(g=0;g<k;g++)(64512&(T=b.charCodeAt(g)))==55296&&g+1<k&&(64512&(_=b.charCodeAt(g+1)))==56320&&(T=65536+(T-55296<<10)+(_-56320),g++),w+=T<128?1:T<2048?2:T<65536?3:4;for(p=o.uint8array?new Uint8Array(w):new Array(w),g=y=0;y<w;g++)(64512&(T=b.charCodeAt(g)))==55296&&g+1<k&&(64512&(_=b.charCodeAt(g+1)))==56320&&(T=65536+(T-55296<<10)+(_-56320),g++),T<128?p[y++]=T:(T<2048?p[y++]=192|T>>>6:(T<65536?p[y++]=224|T>>>12:(p[y++]=240|T>>>18,p[y++]=128|T>>>12&63),p[y++]=128|T>>>6&63),p[y++]=128|63&T);return p}(d)},r.utf8decode=function(d){return o.nodebuffer?i.transformTo("nodebuffer",d).toString("utf-8"):function(b){var p,T,_,g,y=b.length,k=new Array(2*y);for(p=T=0;p<y;)if((_=b[p++])<128)k[T++]=_;else if(4<(g=u[_]))k[T++]=65533,p+=g-1;else{for(_&=g===2?31:g===3?15:7;1<g&&p<y;)_=_<<6|63&b[p++],g--;1<g?k[T++]=65533:_<65536?k[T++]=_:(_-=65536,k[T++]=55296|_>>10&1023,k[T++]=56320|1023&_)}return k.length!==T&&(k.subarray?k=k.subarray(0,T):k.length=T),i.applyFromCharCode(k)}(d=i.transformTo(o.uint8array?"uint8array":"array",d))},i.inherits(h,l),h.prototype.processChunk=function(d){var b=i.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var p=b;(b=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),b.set(p,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var T=function(g,y){var k;for((y=y||g.length)>g.length&&(y=g.length),k=y-1;0<=k&&(192&g[k])==128;)k--;return k<0||k===0?y:k+u[g[k]]>y?k:y}(b),_=b;T!==b.length&&(o.uint8array?(_=b.subarray(0,T),this.leftOver=b.subarray(T,b.length)):(_=b.slice(0,T),this.leftOver=b.slice(T,b.length))),this.push({data:r.utf8decode(_),meta:d.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=h,i.inherits(m,l),m.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,r){var i=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),l=t("./external");function u(p){return p}function f(p,T){for(var _=0;_<p.length;++_)T[_]=255&p.charCodeAt(_);return T}t("setimmediate"),r.newBlob=function(p,T){r.checkSupport("blob");try{return new Blob([p],{type:T})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(p),_.getBlob(T)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(p,T,_){var g=[],y=0,k=p.length;if(k<=_)return String.fromCharCode.apply(null,p);for(;y<k;)T==="array"||T==="nodebuffer"?g.push(String.fromCharCode.apply(null,p.slice(y,Math.min(y+_,k)))):g.push(String.fromCharCode.apply(null,p.subarray(y,Math.min(y+_,k)))),y+=_;return g.join("")},stringifyByChar:function(p){for(var T="",_=0;_<p.length;_++)T+=String.fromCharCode(p[_]);return T},applyCanBeUsed:{uint8array:function(){try{return i.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return i.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(p){var T=65536,_=r.getTypeOf(p),g=!0;if(_==="uint8array"?g=h.applyCanBeUsed.uint8array:_==="nodebuffer"&&(g=h.applyCanBeUsed.nodebuffer),g)for(;1<T;)try{return h.stringifyByChunk(p,_,T)}catch{T=Math.floor(T/2)}return h.stringifyByChar(p)}function d(p,T){for(var _=0;_<p.length;_++)T[_]=p[_];return T}r.applyFromCharCode=m;var b={};b.string={string:u,array:function(p){return f(p,new Array(p.length))},arraybuffer:function(p){return b.string.uint8array(p).buffer},uint8array:function(p){return f(p,new Uint8Array(p.length))},nodebuffer:function(p){return f(p,a.allocBuffer(p.length))}},b.array={string:m,array:u,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(p)}},b.arraybuffer={string:function(p){return m(new Uint8Array(p))},array:function(p){return d(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:u,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(new Uint8Array(p))}},b.uint8array={string:m,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:u,nodebuffer:function(p){return a.newBufferFrom(p)}},b.nodebuffer={string:m,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return b.nodebuffer.uint8array(p).buffer},uint8array:function(p){return d(p,new Uint8Array(p.length))},nodebuffer:u},r.transformTo=function(p,T){if(T=T||"",!p)return T;r.checkSupport(p);var _=r.getTypeOf(T);return b[_][p](T)},r.resolve=function(p){for(var T=p.split("/"),_=[],g=0;g<T.length;g++){var y=T[g];y==="."||y===""&&g!==0&&g!==T.length-1||(y===".."?_.pop():_.push(y))}return _.join("/")},r.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":i.nodebuffer&&a.isBuffer(p)?"nodebuffer":i.uint8array&&p instanceof Uint8Array?"uint8array":i.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(p){if(!i[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(p){var T,_,g="";for(_=0;_<(p||"").length;_++)g+="\\x"+((T=p.charCodeAt(_))<16?"0":"")+T.toString(16).toUpperCase();return g},r.delay=function(p,T,_){setImmediate(function(){p.apply(_||null,T||[])})},r.inherits=function(p,T){function _(){}_.prototype=T.prototype,p.prototype=new _},r.extend=function(){var p,T,_={};for(p=0;p<arguments.length;p++)for(T in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],T)&&_[T]===void 0&&(_[T]=arguments[p][T]);return _},r.prepareContent=function(p,T,_,g,y){return l.Promise.resolve(T).then(function(k){return i.blob&&(k instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(k))!==-1)&&typeof FileReader<"u"?new l.Promise(function(w,N){var F=new FileReader;F.onload=function(M){w(M.target.result)},F.onerror=function(M){N(M.target.error)},F.readAsArrayBuffer(k)}):k}).then(function(k){var w=r.getTypeOf(k);return w?(w==="arraybuffer"?k=r.transformTo("uint8array",k):w==="string"&&(y?k=o.decode(k):_&&g!==!0&&(k=function(N){return f(N,i.uint8array?new Uint8Array(N.length):new Array(N.length))}(k))),k):l.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,r){var i=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),l=t("./zipEntry"),u=t("./support");function f(h){this.files=[],this.loadOptions=h}f.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(h)+")")}},isSignature:function(h,m){var d=this.reader.index;this.reader.setIndex(h);var b=this.reader.readString(4)===m;return this.reader.setIndex(d),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),m=u.uint8array?"uint8array":"array",d=o.transformTo(m,h);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,m,d,b=this.zip64EndOfCentralSize-44;0<b;)h=this.reader.readInt(2),m=this.reader.readInt(4),d=this.reader.readData(m),this.zip64ExtensibleData[h]={id:h,length:m,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,m;for(h=0;h<this.files.length;h++)m=this.files[h],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var m=h;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var b=m-d;if(0<b)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(h){this.reader=i(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,r){var i=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),l=t("./crc32"),u=t("./utf8"),f=t("./compressions"),h=t("./support");function m(d,b){this.options=d,this.loadOptions=b}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var b,p;if(d.skip(22),this.fileNameLength=d.readInt(2),p=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=function(T){for(var _ in f)if(Object.prototype.hasOwnProperty.call(f,_)&&f[_].magic===T)return f[_];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,b,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var b=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(b),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=i(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var b,p,T,_=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<_;)b=d.readInt(2),p=d.readInt(2),T=d.readData(p),this.extraFields[b]={id:b,length:p,value:T};d.setIndex(_)},handleUTF8:function(){var d=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var p=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var T=this.findExtraFieldUnicodeComment();if(T!==null)this.fileCommentStr=T;else{var _=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var b=i(d.value);return b.readInt(1)!==1||l(this.fileName)!==b.readInt(4)?null:u.utf8decode(b.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var b=i(d.value);return b.readInt(1)!==1||l(this.fileComment)!==b.readInt(4)?null:u.utf8decode(b.readData(d.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,r){function i(b,p,T){this.name=b,this.dir=T.dir,this.date=T.date,this.comment=T.comment,this.unixPermissions=T.unixPermissions,this.dosPermissions=T.dosPermissions,this._data=p,this._dataBinary=T.binary,this.options={compression:T.compression,compressionOptions:T.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),l=t("./utf8"),u=t("./compressedObject"),f=t("./stream/GenericWorker");i.prototype={internalStream:function(b){var p=null,T="string";try{if(!b)throw new Error("No output type specified.");var _=(T=b.toLowerCase())==="string"||T==="text";T!=="binarystring"&&T!=="text"||(T="string"),p=this._decompressWorker();var g=!this._dataBinary;g&&!_&&(p=p.pipe(new l.Utf8EncodeWorker)),!g&&_&&(p=p.pipe(new l.Utf8DecodeWorker))}catch(y){(p=new f("error")).error(y)}return new o(p,T,"")},async:function(b,p){return this.internalStream(b).accumulate(p)},nodeStream:function(b,p){return this.internalStream(b||"nodebuffer").toNodejsStream(p)},_compressWorker:function(b,p){if(this._data instanceof u&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var T=this._decompressWorker();return this._dataBinary||(T=T.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(T,b,p)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof f?this._data:new a(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<h.length;d++)i.prototype[h[d]]=m;n.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,r){(function(i){var o,a,l=i.MutationObserver||i.WebKitMutationObserver;if(l){var u=0,f=new l(b),h=i.document.createTextNode("");f.observe(h,{characterData:!0}),o=function(){h.data=u=++u%2}}else if(i.setImmediate||i.MessageChannel===void 0)o="document"in i&&"onreadystatechange"in i.document.createElement("script")?function(){var p=i.document.createElement("script");p.onreadystatechange=function(){b(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},i.document.documentElement.appendChild(p)}:function(){setTimeout(b,0)};else{var m=new i.MessageChannel;m.port1.onmessage=b,o=function(){m.port2.postMessage(0)}}var d=[];function b(){var p,T;a=!0;for(var _=d.length;_;){for(T=d,d=[],p=-1;++p<_;)T[p]();_=d.length}a=!1}n.exports=function(p){d.push(p)!==1||a||o()}}).call(this,typeof un<"u"?un:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,r){var i=t("immediate");function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],f=["PENDING"];function h(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,_!==o&&p(this,_)}function m(_,g,y){this.promise=_,typeof g=="function"&&(this.onFulfilled=g,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function d(_,g,y){i(function(){var k;try{k=g(y)}catch(w){return a.reject(_,w)}k===_?a.reject(_,new TypeError("Cannot resolve promise with itself")):a.resolve(_,k)})}function b(_){var g=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof g=="function")return function(){g.apply(_,arguments)}}function p(_,g){var y=!1;function k(F){y||(y=!0,a.reject(_,F))}function w(F){y||(y=!0,a.resolve(_,F))}var N=T(function(){g(w,k)});N.status==="error"&&k(N.value)}function T(_,g){var y={};try{y.value=_(g),y.status="success"}catch(k){y.status="error",y.value=k}return y}(n.exports=h).prototype.finally=function(_){if(typeof _!="function")return this;var g=this.constructor;return this.then(function(y){return g.resolve(_()).then(function(){return y})},function(y){return g.resolve(_()).then(function(){throw y})})},h.prototype.catch=function(_){return this.then(null,_)},h.prototype.then=function(_,g){if(typeof _!="function"&&this.state===u||typeof g!="function"&&this.state===l)return this;var y=new this.constructor(o);return this.state!==f?d(y,this.state===u?_:g,this.outcome):this.queue.push(new m(y,_,g)),y},m.prototype.callFulfilled=function(_){a.resolve(this.promise,_)},m.prototype.otherCallFulfilled=function(_){d(this.promise,this.onFulfilled,_)},m.prototype.callRejected=function(_){a.reject(this.promise,_)},m.prototype.otherCallRejected=function(_){d(this.promise,this.onRejected,_)},a.resolve=function(_,g){var y=T(b,g);if(y.status==="error")return a.reject(_,y.value);var k=y.value;if(k)p(_,k);else{_.state=u,_.outcome=g;for(var w=-1,N=_.queue.length;++w<N;)_.queue[w].callFulfilled(g)}return _},a.reject=function(_,g){_.state=l,_.outcome=g;for(var y=-1,k=_.queue.length;++y<k;)_.queue[y].callRejected(g);return _},h.resolve=function(_){return _ instanceof this?_:a.resolve(new this(o),_)},h.reject=function(_){var g=new this(o);return a.reject(g,_)},h.all=function(_){var g=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=_.length,k=!1;if(!y)return this.resolve([]);for(var w=new Array(y),N=0,F=-1,M=new this(o);++F<y;)P(_[F],F);return M;function P(H,X){g.resolve(H).then(function(I){w[X]=I,++N!==y||k||(k=!0,a.resolve(M,w))},function(I){k||(k=!0,a.reject(M,I))})}},h.race=function(_){var g=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=_.length,k=!1;if(!y)return this.resolve([]);for(var w=-1,N=new this(o);++w<y;)F=_[w],g.resolve(F).then(function(M){k||(k=!0,a.resolve(N,M))},function(M){k||(k=!0,a.reject(N,M))});var F;return N}},{immediate:36}],38:[function(t,n,r){var i={};(0,t("./lib/utils/common").assign)(i,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,r){var i=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/messages"),u=t("./zlib/zstream"),f=Object.prototype.toString,h=0,m=-1,d=0,b=8;function p(_){if(!(this instanceof p))return new p(_);this.options=o.assign({level:m,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},_||{});var g=this.options;g.raw&&0<g.windowBits?g.windowBits=-g.windowBits:g.gzip&&0<g.windowBits&&g.windowBits<16&&(g.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var y=i.deflateInit2(this.strm,g.level,g.method,g.windowBits,g.memLevel,g.strategy);if(y!==h)throw new Error(l[y]);if(g.header&&i.deflateSetHeader(this.strm,g.header),g.dictionary){var k;if(k=typeof g.dictionary=="string"?a.string2buf(g.dictionary):f.call(g.dictionary)==="[object ArrayBuffer]"?new Uint8Array(g.dictionary):g.dictionary,(y=i.deflateSetDictionary(this.strm,k))!==h)throw new Error(l[y]);this._dict_set=!0}}function T(_,g){var y=new p(g);if(y.push(_,!0),y.err)throw y.msg||l[y.err];return y.result}p.prototype.push=function(_,g){var y,k,w=this.strm,N=this.options.chunkSize;if(this.ended)return!1;k=g===~~g?g:g===!0?4:0,typeof _=="string"?w.input=a.string2buf(_):f.call(_)==="[object ArrayBuffer]"?w.input=new Uint8Array(_):w.input=_,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new o.Buf8(N),w.next_out=0,w.avail_out=N),(y=i.deflate(w,k))!==1&&y!==h)return this.onEnd(y),!(this.ended=!0);w.avail_out!==0&&(w.avail_in!==0||k!==4&&k!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(w.output,w.next_out))):this.onData(o.shrinkBuf(w.output,w.next_out)))}while((0<w.avail_in||w.avail_out===0)&&y!==1);return k===4?(y=i.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===h):k!==2||(this.onEnd(h),!(w.avail_out=0))},p.prototype.onData=function(_){this.chunks.push(_)},p.prototype.onEnd=function(_){_===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Deflate=p,r.deflate=T,r.deflateRaw=function(_,g){return(g=g||{}).raw=!0,T(_,g)},r.gzip=function(_,g){return(g=g||{}).gzip=!0,T(_,g)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,r){var i=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/constants"),u=t("./zlib/messages"),f=t("./zlib/zstream"),h=t("./zlib/gzheader"),m=Object.prototype.toString;function d(p){if(!(this instanceof d))return new d(p);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},p||{});var T=this.options;T.raw&&0<=T.windowBits&&T.windowBits<16&&(T.windowBits=-T.windowBits,T.windowBits===0&&(T.windowBits=-15)),!(0<=T.windowBits&&T.windowBits<16)||p&&p.windowBits||(T.windowBits+=32),15<T.windowBits&&T.windowBits<48&&!(15&T.windowBits)&&(T.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var _=i.inflateInit2(this.strm,T.windowBits);if(_!==l.Z_OK)throw new Error(u[_]);this.header=new h,i.inflateGetHeader(this.strm,this.header)}function b(p,T){var _=new d(T);if(_.push(p,!0),_.err)throw _.msg||u[_.err];return _.result}d.prototype.push=function(p,T){var _,g,y,k,w,N,F=this.strm,M=this.options.chunkSize,P=this.options.dictionary,H=!1;if(this.ended)return!1;g=T===~~T?T:T===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof p=="string"?F.input=a.binstring2buf(p):m.call(p)==="[object ArrayBuffer]"?F.input=new Uint8Array(p):F.input=p,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new o.Buf8(M),F.next_out=0,F.avail_out=M),(_=i.inflate(F,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&P&&(N=typeof P=="string"?a.string2buf(P):m.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,_=i.inflateSetDictionary(this.strm,N)),_===l.Z_BUF_ERROR&&H===!0&&(_=l.Z_OK,H=!1),_!==l.Z_STREAM_END&&_!==l.Z_OK)return this.onEnd(_),!(this.ended=!0);F.next_out&&(F.avail_out!==0&&_!==l.Z_STREAM_END&&(F.avail_in!==0||g!==l.Z_FINISH&&g!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=a.utf8border(F.output,F.next_out),k=F.next_out-y,w=a.buf2string(F.output,y),F.next_out=k,F.avail_out=M-k,k&&o.arraySet(F.output,F.output,y,k,0),this.onData(w)):this.onData(o.shrinkBuf(F.output,F.next_out)))),F.avail_in===0&&F.avail_out===0&&(H=!0)}while((0<F.avail_in||F.avail_out===0)&&_!==l.Z_STREAM_END);return _===l.Z_STREAM_END&&(g=l.Z_FINISH),g===l.Z_FINISH?(_=i.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===l.Z_OK):g!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(F.avail_out=0))},d.prototype.onData=function(p){this.chunks.push(p)},d.prototype.onEnd=function(p){p===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},r.Inflate=d,r.inflate=b,r.inflateRaw=function(p,T){return(T=T||{}).raw=!0,b(p,T)},r.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var f=u.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var h in f)f.hasOwnProperty(h)&&(l[h]=f[h])}}return l},r.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var o={arraySet:function(l,u,f,h,m){if(u.subarray&&l.subarray)l.set(u.subarray(f,f+h),m);else for(var d=0;d<h;d++)l[m+d]=u[f+d]},flattenChunks:function(l){var u,f,h,m,d,b;for(u=h=0,f=l.length;u<f;u++)h+=l[u].length;for(b=new Uint8Array(h),u=m=0,f=l.length;u<f;u++)d=l[u],b.set(d,m),m+=d.length;return b}},a={arraySet:function(l,u,f,h,m){for(var d=0;d<h;d++)l[m+d]=u[f+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(i)},{}],42:[function(t,n,r){var i=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new i.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function f(h,m){if(m<65537&&(h.subarray&&a||!h.subarray&&o))return String.fromCharCode.apply(null,i.shrinkBuf(h,m));for(var d="",b=0;b<m;b++)d+=String.fromCharCode(h[b]);return d}l[254]=l[254]=1,r.string2buf=function(h){var m,d,b,p,T,_=h.length,g=0;for(p=0;p<_;p++)(64512&(d=h.charCodeAt(p)))==55296&&p+1<_&&(64512&(b=h.charCodeAt(p+1)))==56320&&(d=65536+(d-55296<<10)+(b-56320),p++),g+=d<128?1:d<2048?2:d<65536?3:4;for(m=new i.Buf8(g),p=T=0;T<g;p++)(64512&(d=h.charCodeAt(p)))==55296&&p+1<_&&(64512&(b=h.charCodeAt(p+1)))==56320&&(d=65536+(d-55296<<10)+(b-56320),p++),d<128?m[T++]=d:(d<2048?m[T++]=192|d>>>6:(d<65536?m[T++]=224|d>>>12:(m[T++]=240|d>>>18,m[T++]=128|d>>>12&63),m[T++]=128|d>>>6&63),m[T++]=128|63&d);return m},r.buf2binstring=function(h){return f(h,h.length)},r.binstring2buf=function(h){for(var m=new i.Buf8(h.length),d=0,b=m.length;d<b;d++)m[d]=h.charCodeAt(d);return m},r.buf2string=function(h,m){var d,b,p,T,_=m||h.length,g=new Array(2*_);for(d=b=0;d<_;)if((p=h[d++])<128)g[b++]=p;else if(4<(T=l[p]))g[b++]=65533,d+=T-1;else{for(p&=T===2?31:T===3?15:7;1<T&&d<_;)p=p<<6|63&h[d++],T--;1<T?g[b++]=65533:p<65536?g[b++]=p:(p-=65536,g[b++]=55296|p>>10&1023,g[b++]=56320|1023&p)}return f(g,b)},r.utf8border=function(h,m){var d;for((m=m||h.length)>h.length&&(m=h.length),d=m-1;0<=d&&(192&h[d])==128;)d--;return d<0||d===0?m:d+l[h[d]]>m?d:m}},{"./common":41}],43:[function(t,n,r){n.exports=function(i,o,a,l){for(var u=65535&i|0,f=i>>>16&65535|0,h=0;a!==0;){for(a-=h=2e3<a?2e3:a;f=f+(u=u+o[l++]|0)|0,--h;);u%=65521,f%=65521}return u|f<<16|0}},{}],44:[function(t,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,r){var i=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,u){var f=i,h=u+l;o^=-1;for(var m=u;m<h;m++)o=o>>>8^f[255&(o^a[m])];return-1^o}},{}],46:[function(t,n,r){var i,o=t("../utils/common"),a=t("./trees"),l=t("./adler32"),u=t("./crc32"),f=t("./messages"),h=0,m=4,d=0,b=-2,p=-1,T=4,_=2,g=8,y=9,k=286,w=30,N=19,F=2*k+1,M=15,P=3,H=258,X=H+P+1,I=42,G=113,S=1,V=2,se=3,K=4;function ee(c,R){return c.msg=f[R],R}function q(c){return(c<<1)-(4<c?9:0)}function oe(c){for(var R=c.length;0<=--R;)c[R]=0}function U(c){var R=c.state,O=R.pending;O>c.avail_out&&(O=c.avail_out),O!==0&&(o.arraySet(c.output,R.pending_buf,R.pending_out,O,c.next_out),c.next_out+=O,R.pending_out+=O,c.total_out+=O,c.avail_out-=O,R.pending-=O,R.pending===0&&(R.pending_out=0))}function j(c,R){a._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,R),c.block_start=c.strstart,U(c.strm)}function ae(c,R){c.pending_buf[c.pending++]=R}function ne(c,R){c.pending_buf[c.pending++]=R>>>8&255,c.pending_buf[c.pending++]=255&R}function J(c,R){var O,E,v=c.max_chain_length,A=c.strstart,D=c.prev_length,z=c.nice_match,C=c.strstart>c.w_size-X?c.strstart-(c.w_size-X):0,B=c.window,W=c.w_mask,$=c.prev,Y=c.strstart+H,re=B[A+D-1],ie=B[A+D];c.prev_length>=c.good_match&&(v>>=2),z>c.lookahead&&(z=c.lookahead);do if(B[(O=R)+D]===ie&&B[O+D-1]===re&&B[O]===B[A]&&B[++O]===B[A+1]){A+=2,O++;do;while(B[++A]===B[++O]&&B[++A]===B[++O]&&B[++A]===B[++O]&&B[++A]===B[++O]&&B[++A]===B[++O]&&B[++A]===B[++O]&&B[++A]===B[++O]&&B[++A]===B[++O]&&A<Y);if(E=H-(Y-A),A=Y-H,D<E){if(c.match_start=R,z<=(D=E))break;re=B[A+D-1],ie=B[A+D]}}while((R=$[R&W])>C&&--v!=0);return D<=c.lookahead?D:c.lookahead}function ve(c){var R,O,E,v,A,D,z,C,B,W,$=c.w_size;do{if(v=c.window_size-c.lookahead-c.strstart,c.strstart>=$+($-X)){for(o.arraySet(c.window,c.window,$,$,0),c.match_start-=$,c.strstart-=$,c.block_start-=$,R=O=c.hash_size;E=c.head[--R],c.head[R]=$<=E?E-$:0,--O;);for(R=O=$;E=c.prev[--R],c.prev[R]=$<=E?E-$:0,--O;);v+=$}if(c.strm.avail_in===0)break;if(D=c.strm,z=c.window,C=c.strstart+c.lookahead,B=v,W=void 0,W=D.avail_in,B<W&&(W=B),O=W===0?0:(D.avail_in-=W,o.arraySet(z,D.input,D.next_in,W,C),D.state.wrap===1?D.adler=l(D.adler,z,W,C):D.state.wrap===2&&(D.adler=u(D.adler,z,W,C)),D.next_in+=W,D.total_in+=W,W),c.lookahead+=O,c.lookahead+c.insert>=P)for(A=c.strstart-c.insert,c.ins_h=c.window[A],c.ins_h=(c.ins_h<<c.hash_shift^c.window[A+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[A+P-1])&c.hash_mask,c.prev[A&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=A,A++,c.insert--,!(c.lookahead+c.insert<P)););}while(c.lookahead<X&&c.strm.avail_in!==0)}function Ie(c,R){for(var O,E;;){if(c.lookahead<X){if(ve(c),c.lookahead<X&&R===h)return S;if(c.lookahead===0)break}if(O=0,c.lookahead>=P&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+P-1])&c.hash_mask,O=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),O!==0&&c.strstart-O<=c.w_size-X&&(c.match_length=J(c,O)),c.match_length>=P)if(E=a._tr_tally(c,c.strstart-c.match_start,c.match_length-P),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=P){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+P-1])&c.hash_mask,O=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else E=a._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(E&&(j(c,!1),c.strm.avail_out===0))return S}return c.insert=c.strstart<P-1?c.strstart:P-1,R===m?(j(c,!0),c.strm.avail_out===0?se:K):c.last_lit&&(j(c,!1),c.strm.avail_out===0)?S:V}function de(c,R){for(var O,E,v;;){if(c.lookahead<X){if(ve(c),c.lookahead<X&&R===h)return S;if(c.lookahead===0)break}if(O=0,c.lookahead>=P&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+P-1])&c.hash_mask,O=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=P-1,O!==0&&c.prev_length<c.max_lazy_match&&c.strstart-O<=c.w_size-X&&(c.match_length=J(c,O),c.match_length<=5&&(c.strategy===1||c.match_length===P&&4096<c.strstart-c.match_start)&&(c.match_length=P-1)),c.prev_length>=P&&c.match_length<=c.prev_length){for(v=c.strstart+c.lookahead-P,E=a._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-P),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=v&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+P-1])&c.hash_mask,O=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=P-1,c.strstart++,E&&(j(c,!1),c.strm.avail_out===0))return S}else if(c.match_available){if((E=a._tr_tally(c,0,c.window[c.strstart-1]))&&j(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return S}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(E=a._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<P-1?c.strstart:P-1,R===m?(j(c,!0),c.strm.avail_out===0?se:K):c.last_lit&&(j(c,!1),c.strm.avail_out===0)?S:V}function _e(c,R,O,E,v){this.good_length=c,this.max_lazy=R,this.nice_length=O,this.max_chain=E,this.func=v}function Re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*F),this.dyn_dtree=new o.Buf16(2*(2*w+1)),this.bl_tree=new o.Buf16(2*(2*N+1)),oe(this.dyn_ltree),oe(this.dyn_dtree),oe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(M+1),this.heap=new o.Buf16(2*k+1),oe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*k+1),oe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ae(c){var R;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=_,(R=c.state).pending=0,R.pending_out=0,R.wrap<0&&(R.wrap=-R.wrap),R.status=R.wrap?I:G,c.adler=R.wrap===2?0:1,R.last_flush=h,a._tr_init(R),d):ee(c,b)}function Ve(c){var R=Ae(c);return R===d&&function(O){O.window_size=2*O.w_size,oe(O.head),O.max_lazy_match=i[O.level].max_lazy,O.good_match=i[O.level].good_length,O.nice_match=i[O.level].nice_length,O.max_chain_length=i[O.level].max_chain,O.strstart=0,O.block_start=0,O.lookahead=0,O.insert=0,O.match_length=O.prev_length=P-1,O.match_available=0,O.ins_h=0}(c.state),R}function x(c,R,O,E,v,A){if(!c)return b;var D=1;if(R===p&&(R=6),E<0?(D=0,E=-E):15<E&&(D=2,E-=16),v<1||y<v||O!==g||E<8||15<E||R<0||9<R||A<0||T<A)return ee(c,b);E===8&&(E=9);var z=new Re;return(c.state=z).strm=c,z.wrap=D,z.gzhead=null,z.w_bits=E,z.w_size=1<<z.w_bits,z.w_mask=z.w_size-1,z.hash_bits=v+7,z.hash_size=1<<z.hash_bits,z.hash_mask=z.hash_size-1,z.hash_shift=~~((z.hash_bits+P-1)/P),z.window=new o.Buf8(2*z.w_size),z.head=new o.Buf16(z.hash_size),z.prev=new o.Buf16(z.w_size),z.lit_bufsize=1<<v+6,z.pending_buf_size=4*z.lit_bufsize,z.pending_buf=new o.Buf8(z.pending_buf_size),z.d_buf=1*z.lit_bufsize,z.l_buf=3*z.lit_bufsize,z.level=R,z.strategy=A,z.method=O,Ve(c)}i=[new _e(0,0,0,0,function(c,R){var O=65535;for(O>c.pending_buf_size-5&&(O=c.pending_buf_size-5);;){if(c.lookahead<=1){if(ve(c),c.lookahead===0&&R===h)return S;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var E=c.block_start+O;if((c.strstart===0||c.strstart>=E)&&(c.lookahead=c.strstart-E,c.strstart=E,j(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-X&&(j(c,!1),c.strm.avail_out===0))return S}return c.insert=0,R===m?(j(c,!0),c.strm.avail_out===0?se:K):(c.strstart>c.block_start&&(j(c,!1),c.strm.avail_out),S)}),new _e(4,4,8,4,Ie),new _e(4,5,16,8,Ie),new _e(4,6,32,32,Ie),new _e(4,4,16,16,de),new _e(8,16,32,32,de),new _e(8,16,128,128,de),new _e(8,32,128,256,de),new _e(32,128,258,1024,de),new _e(32,258,258,4096,de)],r.deflateInit=function(c,R){return x(c,R,g,15,8,0)},r.deflateInit2=x,r.deflateReset=Ve,r.deflateResetKeep=Ae,r.deflateSetHeader=function(c,R){return c&&c.state?c.state.wrap!==2?b:(c.state.gzhead=R,d):b},r.deflate=function(c,R){var O,E,v,A;if(!c||!c.state||5<R||R<0)return c?ee(c,b):b;if(E=c.state,!c.output||!c.input&&c.avail_in!==0||E.status===666&&R!==m)return ee(c,c.avail_out===0?-5:b);if(E.strm=c,O=E.last_flush,E.last_flush=R,E.status===I)if(E.wrap===2)c.adler=0,ae(E,31),ae(E,139),ae(E,8),E.gzhead?(ae(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),ae(E,255&E.gzhead.time),ae(E,E.gzhead.time>>8&255),ae(E,E.gzhead.time>>16&255),ae(E,E.gzhead.time>>24&255),ae(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ae(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(ae(E,255&E.gzhead.extra.length),ae(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(c.adler=u(c.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(ae(E,0),ae(E,0),ae(E,0),ae(E,0),ae(E,0),ae(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ae(E,3),E.status=G);else{var D=g+(E.w_bits-8<<4)<<8;D|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(D|=32),D+=31-D%31,E.status=G,ne(E,D),E.strstart!==0&&(ne(E,c.adler>>>16),ne(E,65535&c.adler)),c.adler=1}if(E.status===69)if(E.gzhead.extra){for(v=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>v&&(c.adler=u(c.adler,E.pending_buf,E.pending-v,v)),U(c),v=E.pending,E.pending!==E.pending_buf_size));)ae(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>v&&(c.adler=u(c.adler,E.pending_buf,E.pending-v,v)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){v=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>v&&(c.adler=u(c.adler,E.pending_buf,E.pending-v,v)),U(c),v=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,ae(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>v&&(c.adler=u(c.adler,E.pending_buf,E.pending-v,v)),A===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){v=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>v&&(c.adler=u(c.adler,E.pending_buf,E.pending-v,v)),U(c),v=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,ae(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>v&&(c.adler=u(c.adler,E.pending_buf,E.pending-v,v)),A===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&U(c),E.pending+2<=E.pending_buf_size&&(ae(E,255&c.adler),ae(E,c.adler>>8&255),c.adler=0,E.status=G)):E.status=G),E.pending!==0){if(U(c),c.avail_out===0)return E.last_flush=-1,d}else if(c.avail_in===0&&q(R)<=q(O)&&R!==m)return ee(c,-5);if(E.status===666&&c.avail_in!==0)return ee(c,-5);if(c.avail_in!==0||E.lookahead!==0||R!==h&&E.status!==666){var z=E.strategy===2?function(C,B){for(var W;;){if(C.lookahead===0&&(ve(C),C.lookahead===0)){if(B===h)return S;break}if(C.match_length=0,W=a._tr_tally(C,0,C.window[C.strstart]),C.lookahead--,C.strstart++,W&&(j(C,!1),C.strm.avail_out===0))return S}return C.insert=0,B===m?(j(C,!0),C.strm.avail_out===0?se:K):C.last_lit&&(j(C,!1),C.strm.avail_out===0)?S:V}(E,R):E.strategy===3?function(C,B){for(var W,$,Y,re,ie=C.window;;){if(C.lookahead<=H){if(ve(C),C.lookahead<=H&&B===h)return S;if(C.lookahead===0)break}if(C.match_length=0,C.lookahead>=P&&0<C.strstart&&($=ie[Y=C.strstart-1])===ie[++Y]&&$===ie[++Y]&&$===ie[++Y]){re=C.strstart+H;do;while($===ie[++Y]&&$===ie[++Y]&&$===ie[++Y]&&$===ie[++Y]&&$===ie[++Y]&&$===ie[++Y]&&$===ie[++Y]&&$===ie[++Y]&&Y<re);C.match_length=H-(re-Y),C.match_length>C.lookahead&&(C.match_length=C.lookahead)}if(C.match_length>=P?(W=a._tr_tally(C,1,C.match_length-P),C.lookahead-=C.match_length,C.strstart+=C.match_length,C.match_length=0):(W=a._tr_tally(C,0,C.window[C.strstart]),C.lookahead--,C.strstart++),W&&(j(C,!1),C.strm.avail_out===0))return S}return C.insert=0,B===m?(j(C,!0),C.strm.avail_out===0?se:K):C.last_lit&&(j(C,!1),C.strm.avail_out===0)?S:V}(E,R):i[E.level].func(E,R);if(z!==se&&z!==K||(E.status=666),z===S||z===se)return c.avail_out===0&&(E.last_flush=-1),d;if(z===V&&(R===1?a._tr_align(E):R!==5&&(a._tr_stored_block(E,0,0,!1),R===3&&(oe(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),U(c),c.avail_out===0))return E.last_flush=-1,d}return R!==m?d:E.wrap<=0?1:(E.wrap===2?(ae(E,255&c.adler),ae(E,c.adler>>8&255),ae(E,c.adler>>16&255),ae(E,c.adler>>24&255),ae(E,255&c.total_in),ae(E,c.total_in>>8&255),ae(E,c.total_in>>16&255),ae(E,c.total_in>>24&255)):(ne(E,c.adler>>>16),ne(E,65535&c.adler)),U(c),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?d:1)},r.deflateEnd=function(c){var R;return c&&c.state?(R=c.state.status)!==I&&R!==69&&R!==73&&R!==91&&R!==103&&R!==G&&R!==666?ee(c,b):(c.state=null,R===G?ee(c,-3):d):b},r.deflateSetDictionary=function(c,R){var O,E,v,A,D,z,C,B,W=R.length;if(!c||!c.state||(A=(O=c.state).wrap)===2||A===1&&O.status!==I||O.lookahead)return b;for(A===1&&(c.adler=l(c.adler,R,W,0)),O.wrap=0,W>=O.w_size&&(A===0&&(oe(O.head),O.strstart=0,O.block_start=0,O.insert=0),B=new o.Buf8(O.w_size),o.arraySet(B,R,W-O.w_size,O.w_size,0),R=B,W=O.w_size),D=c.avail_in,z=c.next_in,C=c.input,c.avail_in=W,c.next_in=0,c.input=R,ve(O);O.lookahead>=P;){for(E=O.strstart,v=O.lookahead-(P-1);O.ins_h=(O.ins_h<<O.hash_shift^O.window[E+P-1])&O.hash_mask,O.prev[E&O.w_mask]=O.head[O.ins_h],O.head[O.ins_h]=E,E++,--v;);O.strstart=E,O.lookahead=P-1,ve(O)}return O.strstart+=O.lookahead,O.block_start=O.strstart,O.insert=O.lookahead,O.lookahead=0,O.match_length=O.prev_length=P-1,O.match_available=0,c.next_in=z,c.input=C,c.avail_in=D,O.wrap=A,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,r){n.exports=function(i,o){var a,l,u,f,h,m,d,b,p,T,_,g,y,k,w,N,F,M,P,H,X,I,G,S,V;a=i.state,l=i.next_in,S=i.input,u=l+(i.avail_in-5),f=i.next_out,V=i.output,h=f-(o-i.avail_out),m=f+(i.avail_out-257),d=a.dmax,b=a.wsize,p=a.whave,T=a.wnext,_=a.window,g=a.hold,y=a.bits,k=a.lencode,w=a.distcode,N=(1<<a.lenbits)-1,F=(1<<a.distbits)-1;e:do{y<15&&(g+=S[l++]<<y,y+=8,g+=S[l++]<<y,y+=8),M=k[g&N];t:for(;;){if(g>>>=P=M>>>24,y-=P,(P=M>>>16&255)===0)V[f++]=65535&M;else{if(!(16&P)){if(!(64&P)){M=k[(65535&M)+(g&(1<<P)-1)];continue t}if(32&P){a.mode=12;break e}i.msg="invalid literal/length code",a.mode=30;break e}H=65535&M,(P&=15)&&(y<P&&(g+=S[l++]<<y,y+=8),H+=g&(1<<P)-1,g>>>=P,y-=P),y<15&&(g+=S[l++]<<y,y+=8,g+=S[l++]<<y,y+=8),M=w[g&F];n:for(;;){if(g>>>=P=M>>>24,y-=P,!(16&(P=M>>>16&255))){if(!(64&P)){M=w[(65535&M)+(g&(1<<P)-1)];continue n}i.msg="invalid distance code",a.mode=30;break e}if(X=65535&M,y<(P&=15)&&(g+=S[l++]<<y,(y+=8)<P&&(g+=S[l++]<<y,y+=8)),d<(X+=g&(1<<P)-1)){i.msg="invalid distance too far back",a.mode=30;break e}if(g>>>=P,y-=P,(P=f-h)<X){if(p<(P=X-P)&&a.sane){i.msg="invalid distance too far back",a.mode=30;break e}if(G=_,(I=0)===T){if(I+=b-P,P<H){for(H-=P;V[f++]=_[I++],--P;);I=f-X,G=V}}else if(T<P){if(I+=b+T-P,(P-=T)<H){for(H-=P;V[f++]=_[I++],--P;);if(I=0,T<H){for(H-=P=T;V[f++]=_[I++],--P;);I=f-X,G=V}}}else if(I+=T-P,P<H){for(H-=P;V[f++]=_[I++],--P;);I=f-X,G=V}for(;2<H;)V[f++]=G[I++],V[f++]=G[I++],V[f++]=G[I++],H-=3;H&&(V[f++]=G[I++],1<H&&(V[f++]=G[I++]))}else{for(I=f-X;V[f++]=V[I++],V[f++]=V[I++],V[f++]=V[I++],2<(H-=3););H&&(V[f++]=V[I++],1<H&&(V[f++]=V[I++]))}break}}break}}while(l<u&&f<m);l-=H=y>>3,g&=(1<<(y-=H<<3))-1,i.next_in=l,i.next_out=f,i.avail_in=l<u?u-l+5:5-(l-u),i.avail_out=f<m?m-f+257:257-(f-m),a.hold=g,a.bits=y}},{}],49:[function(t,n,r){var i=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),l=t("./inffast"),u=t("./inftrees"),f=1,h=2,m=0,d=-2,b=1,p=852,T=592;function _(I){return(I>>>24&255)+(I>>>8&65280)+((65280&I)<<8)+((255&I)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(I){var G;return I&&I.state?(G=I.state,I.total_in=I.total_out=G.total=0,I.msg="",G.wrap&&(I.adler=1&G.wrap),G.mode=b,G.last=0,G.havedict=0,G.dmax=32768,G.head=null,G.hold=0,G.bits=0,G.lencode=G.lendyn=new i.Buf32(p),G.distcode=G.distdyn=new i.Buf32(T),G.sane=1,G.back=-1,m):d}function k(I){var G;return I&&I.state?((G=I.state).wsize=0,G.whave=0,G.wnext=0,y(I)):d}function w(I,G){var S,V;return I&&I.state?(V=I.state,G<0?(S=0,G=-G):(S=1+(G>>4),G<48&&(G&=15)),G&&(G<8||15<G)?d:(V.window!==null&&V.wbits!==G&&(V.window=null),V.wrap=S,V.wbits=G,k(I))):d}function N(I,G){var S,V;return I?(V=new g,(I.state=V).window=null,(S=w(I,G))!==m&&(I.state=null),S):d}var F,M,P=!0;function H(I){if(P){var G;for(F=new i.Buf32(512),M=new i.Buf32(32),G=0;G<144;)I.lens[G++]=8;for(;G<256;)I.lens[G++]=9;for(;G<280;)I.lens[G++]=7;for(;G<288;)I.lens[G++]=8;for(u(f,I.lens,0,288,F,0,I.work,{bits:9}),G=0;G<32;)I.lens[G++]=5;u(h,I.lens,0,32,M,0,I.work,{bits:5}),P=!1}I.lencode=F,I.lenbits=9,I.distcode=M,I.distbits=5}function X(I,G,S,V){var se,K=I.state;return K.window===null&&(K.wsize=1<<K.wbits,K.wnext=0,K.whave=0,K.window=new i.Buf8(K.wsize)),V>=K.wsize?(i.arraySet(K.window,G,S-K.wsize,K.wsize,0),K.wnext=0,K.whave=K.wsize):(V<(se=K.wsize-K.wnext)&&(se=V),i.arraySet(K.window,G,S-V,se,K.wnext),(V-=se)?(i.arraySet(K.window,G,S-V,V,0),K.wnext=V,K.whave=K.wsize):(K.wnext+=se,K.wnext===K.wsize&&(K.wnext=0),K.whave<K.wsize&&(K.whave+=se))),0}r.inflateReset=k,r.inflateReset2=w,r.inflateResetKeep=y,r.inflateInit=function(I){return N(I,15)},r.inflateInit2=N,r.inflate=function(I,G){var S,V,se,K,ee,q,oe,U,j,ae,ne,J,ve,Ie,de,_e,Re,Ae,Ve,x,c,R,O,E,v=0,A=new i.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!I||!I.state||!I.output||!I.input&&I.avail_in!==0)return d;(S=I.state).mode===12&&(S.mode=13),ee=I.next_out,se=I.output,oe=I.avail_out,K=I.next_in,V=I.input,q=I.avail_in,U=S.hold,j=S.bits,ae=q,ne=oe,R=m;e:for(;;)switch(S.mode){case b:if(S.wrap===0){S.mode=13;break}for(;j<16;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(2&S.wrap&&U===35615){A[S.check=0]=255&U,A[1]=U>>>8&255,S.check=a(S.check,A,2,0),j=U=0,S.mode=2;break}if(S.flags=0,S.head&&(S.head.done=!1),!(1&S.wrap)||(((255&U)<<8)+(U>>8))%31){I.msg="incorrect header check",S.mode=30;break}if((15&U)!=8){I.msg="unknown compression method",S.mode=30;break}if(j-=4,c=8+(15&(U>>>=4)),S.wbits===0)S.wbits=c;else if(c>S.wbits){I.msg="invalid window size",S.mode=30;break}S.dmax=1<<c,I.adler=S.check=1,S.mode=512&U?10:12,j=U=0;break;case 2:for(;j<16;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(S.flags=U,(255&S.flags)!=8){I.msg="unknown compression method",S.mode=30;break}if(57344&S.flags){I.msg="unknown header flags set",S.mode=30;break}S.head&&(S.head.text=U>>8&1),512&S.flags&&(A[0]=255&U,A[1]=U>>>8&255,S.check=a(S.check,A,2,0)),j=U=0,S.mode=3;case 3:for(;j<32;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}S.head&&(S.head.time=U),512&S.flags&&(A[0]=255&U,A[1]=U>>>8&255,A[2]=U>>>16&255,A[3]=U>>>24&255,S.check=a(S.check,A,4,0)),j=U=0,S.mode=4;case 4:for(;j<16;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}S.head&&(S.head.xflags=255&U,S.head.os=U>>8),512&S.flags&&(A[0]=255&U,A[1]=U>>>8&255,S.check=a(S.check,A,2,0)),j=U=0,S.mode=5;case 5:if(1024&S.flags){for(;j<16;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}S.length=U,S.head&&(S.head.extra_len=U),512&S.flags&&(A[0]=255&U,A[1]=U>>>8&255,S.check=a(S.check,A,2,0)),j=U=0}else S.head&&(S.head.extra=null);S.mode=6;case 6:if(1024&S.flags&&(q<(J=S.length)&&(J=q),J&&(S.head&&(c=S.head.extra_len-S.length,S.head.extra||(S.head.extra=new Array(S.head.extra_len)),i.arraySet(S.head.extra,V,K,J,c)),512&S.flags&&(S.check=a(S.check,V,J,K)),q-=J,K+=J,S.length-=J),S.length))break e;S.length=0,S.mode=7;case 7:if(2048&S.flags){if(q===0)break e;for(J=0;c=V[K+J++],S.head&&c&&S.length<65536&&(S.head.name+=String.fromCharCode(c)),c&&J<q;);if(512&S.flags&&(S.check=a(S.check,V,J,K)),q-=J,K+=J,c)break e}else S.head&&(S.head.name=null);S.length=0,S.mode=8;case 8:if(4096&S.flags){if(q===0)break e;for(J=0;c=V[K+J++],S.head&&c&&S.length<65536&&(S.head.comment+=String.fromCharCode(c)),c&&J<q;);if(512&S.flags&&(S.check=a(S.check,V,J,K)),q-=J,K+=J,c)break e}else S.head&&(S.head.comment=null);S.mode=9;case 9:if(512&S.flags){for(;j<16;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(U!==(65535&S.check)){I.msg="header crc mismatch",S.mode=30;break}j=U=0}S.head&&(S.head.hcrc=S.flags>>9&1,S.head.done=!0),I.adler=S.check=0,S.mode=12;break;case 10:for(;j<32;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}I.adler=S.check=_(U),j=U=0,S.mode=11;case 11:if(S.havedict===0)return I.next_out=ee,I.avail_out=oe,I.next_in=K,I.avail_in=q,S.hold=U,S.bits=j,2;I.adler=S.check=1,S.mode=12;case 12:if(G===5||G===6)break e;case 13:if(S.last){U>>>=7&j,j-=7&j,S.mode=27;break}for(;j<3;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}switch(S.last=1&U,j-=1,3&(U>>>=1)){case 0:S.mode=14;break;case 1:if(H(S),S.mode=20,G!==6)break;U>>>=2,j-=2;break e;case 2:S.mode=17;break;case 3:I.msg="invalid block type",S.mode=30}U>>>=2,j-=2;break;case 14:for(U>>>=7&j,j-=7&j;j<32;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if((65535&U)!=(U>>>16^65535)){I.msg="invalid stored block lengths",S.mode=30;break}if(S.length=65535&U,j=U=0,S.mode=15,G===6)break e;case 15:S.mode=16;case 16:if(J=S.length){if(q<J&&(J=q),oe<J&&(J=oe),J===0)break e;i.arraySet(se,V,K,J,ee),q-=J,K+=J,oe-=J,ee+=J,S.length-=J;break}S.mode=12;break;case 17:for(;j<14;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(S.nlen=257+(31&U),U>>>=5,j-=5,S.ndist=1+(31&U),U>>>=5,j-=5,S.ncode=4+(15&U),U>>>=4,j-=4,286<S.nlen||30<S.ndist){I.msg="too many length or distance symbols",S.mode=30;break}S.have=0,S.mode=18;case 18:for(;S.have<S.ncode;){for(;j<3;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}S.lens[D[S.have++]]=7&U,U>>>=3,j-=3}for(;S.have<19;)S.lens[D[S.have++]]=0;if(S.lencode=S.lendyn,S.lenbits=7,O={bits:S.lenbits},R=u(0,S.lens,0,19,S.lencode,0,S.work,O),S.lenbits=O.bits,R){I.msg="invalid code lengths set",S.mode=30;break}S.have=0,S.mode=19;case 19:for(;S.have<S.nlen+S.ndist;){for(;_e=(v=S.lencode[U&(1<<S.lenbits)-1])>>>16&255,Re=65535&v,!((de=v>>>24)<=j);){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(Re<16)U>>>=de,j-=de,S.lens[S.have++]=Re;else{if(Re===16){for(E=de+2;j<E;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(U>>>=de,j-=de,S.have===0){I.msg="invalid bit length repeat",S.mode=30;break}c=S.lens[S.have-1],J=3+(3&U),U>>>=2,j-=2}else if(Re===17){for(E=de+3;j<E;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}j-=de,c=0,J=3+(7&(U>>>=de)),U>>>=3,j-=3}else{for(E=de+7;j<E;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}j-=de,c=0,J=11+(127&(U>>>=de)),U>>>=7,j-=7}if(S.have+J>S.nlen+S.ndist){I.msg="invalid bit length repeat",S.mode=30;break}for(;J--;)S.lens[S.have++]=c}}if(S.mode===30)break;if(S.lens[256]===0){I.msg="invalid code -- missing end-of-block",S.mode=30;break}if(S.lenbits=9,O={bits:S.lenbits},R=u(f,S.lens,0,S.nlen,S.lencode,0,S.work,O),S.lenbits=O.bits,R){I.msg="invalid literal/lengths set",S.mode=30;break}if(S.distbits=6,S.distcode=S.distdyn,O={bits:S.distbits},R=u(h,S.lens,S.nlen,S.ndist,S.distcode,0,S.work,O),S.distbits=O.bits,R){I.msg="invalid distances set",S.mode=30;break}if(S.mode=20,G===6)break e;case 20:S.mode=21;case 21:if(6<=q&&258<=oe){I.next_out=ee,I.avail_out=oe,I.next_in=K,I.avail_in=q,S.hold=U,S.bits=j,l(I,ne),ee=I.next_out,se=I.output,oe=I.avail_out,K=I.next_in,V=I.input,q=I.avail_in,U=S.hold,j=S.bits,S.mode===12&&(S.back=-1);break}for(S.back=0;_e=(v=S.lencode[U&(1<<S.lenbits)-1])>>>16&255,Re=65535&v,!((de=v>>>24)<=j);){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(_e&&!(240&_e)){for(Ae=de,Ve=_e,x=Re;_e=(v=S.lencode[x+((U&(1<<Ae+Ve)-1)>>Ae)])>>>16&255,Re=65535&v,!(Ae+(de=v>>>24)<=j);){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}U>>>=Ae,j-=Ae,S.back+=Ae}if(U>>>=de,j-=de,S.back+=de,S.length=Re,_e===0){S.mode=26;break}if(32&_e){S.back=-1,S.mode=12;break}if(64&_e){I.msg="invalid literal/length code",S.mode=30;break}S.extra=15&_e,S.mode=22;case 22:if(S.extra){for(E=S.extra;j<E;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}S.length+=U&(1<<S.extra)-1,U>>>=S.extra,j-=S.extra,S.back+=S.extra}S.was=S.length,S.mode=23;case 23:for(;_e=(v=S.distcode[U&(1<<S.distbits)-1])>>>16&255,Re=65535&v,!((de=v>>>24)<=j);){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(!(240&_e)){for(Ae=de,Ve=_e,x=Re;_e=(v=S.distcode[x+((U&(1<<Ae+Ve)-1)>>Ae)])>>>16&255,Re=65535&v,!(Ae+(de=v>>>24)<=j);){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}U>>>=Ae,j-=Ae,S.back+=Ae}if(U>>>=de,j-=de,S.back+=de,64&_e){I.msg="invalid distance code",S.mode=30;break}S.offset=Re,S.extra=15&_e,S.mode=24;case 24:if(S.extra){for(E=S.extra;j<E;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}S.offset+=U&(1<<S.extra)-1,U>>>=S.extra,j-=S.extra,S.back+=S.extra}if(S.offset>S.dmax){I.msg="invalid distance too far back",S.mode=30;break}S.mode=25;case 25:if(oe===0)break e;if(J=ne-oe,S.offset>J){if((J=S.offset-J)>S.whave&&S.sane){I.msg="invalid distance too far back",S.mode=30;break}ve=J>S.wnext?(J-=S.wnext,S.wsize-J):S.wnext-J,J>S.length&&(J=S.length),Ie=S.window}else Ie=se,ve=ee-S.offset,J=S.length;for(oe<J&&(J=oe),oe-=J,S.length-=J;se[ee++]=Ie[ve++],--J;);S.length===0&&(S.mode=21);break;case 26:if(oe===0)break e;se[ee++]=S.length,oe--,S.mode=21;break;case 27:if(S.wrap){for(;j<32;){if(q===0)break e;q--,U|=V[K++]<<j,j+=8}if(ne-=oe,I.total_out+=ne,S.total+=ne,ne&&(I.adler=S.check=S.flags?a(S.check,se,ne,ee-ne):o(S.check,se,ne,ee-ne)),ne=oe,(S.flags?U:_(U))!==S.check){I.msg="incorrect data check",S.mode=30;break}j=U=0}S.mode=28;case 28:if(S.wrap&&S.flags){for(;j<32;){if(q===0)break e;q--,U+=V[K++]<<j,j+=8}if(U!==(4294967295&S.total)){I.msg="incorrect length check",S.mode=30;break}j=U=0}S.mode=29;case 29:R=1;break e;case 30:R=-3;break e;case 31:return-4;case 32:default:return d}return I.next_out=ee,I.avail_out=oe,I.next_in=K,I.avail_in=q,S.hold=U,S.bits=j,(S.wsize||ne!==I.avail_out&&S.mode<30&&(S.mode<27||G!==4))&&X(I,I.output,I.next_out,ne-I.avail_out)?(S.mode=31,-4):(ae-=I.avail_in,ne-=I.avail_out,I.total_in+=ae,I.total_out+=ne,S.total+=ne,S.wrap&&ne&&(I.adler=S.check=S.flags?a(S.check,se,ne,I.next_out-ne):o(S.check,se,ne,I.next_out-ne)),I.data_type=S.bits+(S.last?64:0)+(S.mode===12?128:0)+(S.mode===20||S.mode===15?256:0),(ae==0&&ne===0||G===4)&&R===m&&(R=-5),R)},r.inflateEnd=function(I){if(!I||!I.state)return d;var G=I.state;return G.window&&(G.window=null),I.state=null,m},r.inflateGetHeader=function(I,G){var S;return I&&I.state&&2&(S=I.state).wrap?((S.head=G).done=!1,m):d},r.inflateSetDictionary=function(I,G){var S,V=G.length;return I&&I.state?(S=I.state).wrap!==0&&S.mode!==11?d:S.mode===11&&o(1,G,V,0)!==S.check?-3:X(I,G,V,V)?(S.mode=31,-4):(S.havedict=1,m):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,r){var i=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(f,h,m,d,b,p,T,_){var g,y,k,w,N,F,M,P,H,X=_.bits,I=0,G=0,S=0,V=0,se=0,K=0,ee=0,q=0,oe=0,U=0,j=null,ae=0,ne=new i.Buf16(16),J=new i.Buf16(16),ve=null,Ie=0;for(I=0;I<=15;I++)ne[I]=0;for(G=0;G<d;G++)ne[h[m+G]]++;for(se=X,V=15;1<=V&&ne[V]===0;V--);if(V<se&&(se=V),V===0)return b[p++]=20971520,b[p++]=20971520,_.bits=1,0;for(S=1;S<V&&ne[S]===0;S++);for(se<S&&(se=S),I=q=1;I<=15;I++)if(q<<=1,(q-=ne[I])<0)return-1;if(0<q&&(f===0||V!==1))return-1;for(J[1]=0,I=1;I<15;I++)J[I+1]=J[I]+ne[I];for(G=0;G<d;G++)h[m+G]!==0&&(T[J[h[m+G]]++]=G);if(F=f===0?(j=ve=T,19):f===1?(j=o,ae-=257,ve=a,Ie-=257,256):(j=l,ve=u,-1),I=S,N=p,ee=G=U=0,k=-1,w=(oe=1<<(K=se))-1,f===1&&852<oe||f===2&&592<oe)return 1;for(;;){for(M=I-ee,H=T[G]<F?(P=0,T[G]):T[G]>F?(P=ve[Ie+T[G]],j[ae+T[G]]):(P=96,0),g=1<<I-ee,S=y=1<<K;b[N+(U>>ee)+(y-=g)]=M<<24|P<<16|H|0,y!==0;);for(g=1<<I-1;U&g;)g>>=1;if(g!==0?(U&=g-1,U+=g):U=0,G++,--ne[I]==0){if(I===V)break;I=h[m+T[G]]}if(se<I&&(U&w)!==k){for(ee===0&&(ee=se),N+=S,q=1<<(K=I-ee);K+ee<V&&!((q-=ne[K+ee])<=0);)K++,q<<=1;if(oe+=1<<K,f===1&&852<oe||f===2&&592<oe)return 1;b[k=U&w]=se<<24|K<<16|N-p|0}}return U!==0&&(b[N+U]=I-ee<<24|64<<16|0),_.bits=se,0}},{"../utils/common":41}],51:[function(t,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,r){var i=t("../utils/common"),o=0,a=1;function l(v){for(var A=v.length;0<=--A;)v[A]=0}var u=0,f=29,h=256,m=h+1+f,d=30,b=19,p=2*m+1,T=15,_=16,g=7,y=256,k=16,w=17,N=18,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(m+2));l(X);var I=new Array(2*d);l(I);var G=new Array(512);l(G);var S=new Array(256);l(S);var V=new Array(f);l(V);var se,K,ee,q=new Array(d);function oe(v,A,D,z,C){this.static_tree=v,this.extra_bits=A,this.extra_base=D,this.elems=z,this.max_length=C,this.has_stree=v&&v.length}function U(v,A){this.dyn_tree=v,this.max_code=0,this.stat_desc=A}function j(v){return v<256?G[v]:G[256+(v>>>7)]}function ae(v,A){v.pending_buf[v.pending++]=255&A,v.pending_buf[v.pending++]=A>>>8&255}function ne(v,A,D){v.bi_valid>_-D?(v.bi_buf|=A<<v.bi_valid&65535,ae(v,v.bi_buf),v.bi_buf=A>>_-v.bi_valid,v.bi_valid+=D-_):(v.bi_buf|=A<<v.bi_valid&65535,v.bi_valid+=D)}function J(v,A,D){ne(v,D[2*A],D[2*A+1])}function ve(v,A){for(var D=0;D|=1&v,v>>>=1,D<<=1,0<--A;);return D>>>1}function Ie(v,A,D){var z,C,B=new Array(T+1),W=0;for(z=1;z<=T;z++)B[z]=W=W+D[z-1]<<1;for(C=0;C<=A;C++){var $=v[2*C+1];$!==0&&(v[2*C]=ve(B[$]++,$))}}function de(v){var A;for(A=0;A<m;A++)v.dyn_ltree[2*A]=0;for(A=0;A<d;A++)v.dyn_dtree[2*A]=0;for(A=0;A<b;A++)v.bl_tree[2*A]=0;v.dyn_ltree[2*y]=1,v.opt_len=v.static_len=0,v.last_lit=v.matches=0}function _e(v){8<v.bi_valid?ae(v,v.bi_buf):0<v.bi_valid&&(v.pending_buf[v.pending++]=v.bi_buf),v.bi_buf=0,v.bi_valid=0}function Re(v,A,D,z){var C=2*A,B=2*D;return v[C]<v[B]||v[C]===v[B]&&z[A]<=z[D]}function Ae(v,A,D){for(var z=v.heap[D],C=D<<1;C<=v.heap_len&&(C<v.heap_len&&Re(A,v.heap[C+1],v.heap[C],v.depth)&&C++,!Re(A,z,v.heap[C],v.depth));)v.heap[D]=v.heap[C],D=C,C<<=1;v.heap[D]=z}function Ve(v,A,D){var z,C,B,W,$=0;if(v.last_lit!==0)for(;z=v.pending_buf[v.d_buf+2*$]<<8|v.pending_buf[v.d_buf+2*$+1],C=v.pending_buf[v.l_buf+$],$++,z===0?J(v,C,A):(J(v,(B=S[C])+h+1,A),(W=F[B])!==0&&ne(v,C-=V[B],W),J(v,B=j(--z),D),(W=M[B])!==0&&ne(v,z-=q[B],W)),$<v.last_lit;);J(v,y,A)}function x(v,A){var D,z,C,B=A.dyn_tree,W=A.stat_desc.static_tree,$=A.stat_desc.has_stree,Y=A.stat_desc.elems,re=-1;for(v.heap_len=0,v.heap_max=p,D=0;D<Y;D++)B[2*D]!==0?(v.heap[++v.heap_len]=re=D,v.depth[D]=0):B[2*D+1]=0;for(;v.heap_len<2;)B[2*(C=v.heap[++v.heap_len]=re<2?++re:0)]=1,v.depth[C]=0,v.opt_len--,$&&(v.static_len-=W[2*C+1]);for(A.max_code=re,D=v.heap_len>>1;1<=D;D--)Ae(v,B,D);for(C=Y;D=v.heap[1],v.heap[1]=v.heap[v.heap_len--],Ae(v,B,1),z=v.heap[1],v.heap[--v.heap_max]=D,v.heap[--v.heap_max]=z,B[2*C]=B[2*D]+B[2*z],v.depth[C]=(v.depth[D]>=v.depth[z]?v.depth[D]:v.depth[z])+1,B[2*D+1]=B[2*z+1]=C,v.heap[1]=C++,Ae(v,B,1),2<=v.heap_len;);v.heap[--v.heap_max]=v.heap[1],function(ie,ue){var Oe,je,ot,Pe,ht,an,ze=ue.dyn_tree,tt=ue.max_code,zn=ue.stat_desc.static_tree,Ca=ue.stat_desc.has_stree,Ra=ue.stat_desc.extra_bits,Fr=ue.stat_desc.extra_base,Sn=ue.stat_desc.max_length,jn=0;for(Pe=0;Pe<=T;Pe++)ie.bl_count[Pe]=0;for(ze[2*ie.heap[ie.heap_max]+1]=0,Oe=ie.heap_max+1;Oe<p;Oe++)Sn<(Pe=ze[2*ze[2*(je=ie.heap[Oe])+1]+1]+1)&&(Pe=Sn,jn++),ze[2*je+1]=Pe,tt<je||(ie.bl_count[Pe]++,ht=0,Fr<=je&&(ht=Ra[je-Fr]),an=ze[2*je],ie.opt_len+=an*(Pe+ht),Ca&&(ie.static_len+=an*(zn[2*je+1]+ht)));if(jn!==0){do{for(Pe=Sn-1;ie.bl_count[Pe]===0;)Pe--;ie.bl_count[Pe]--,ie.bl_count[Pe+1]+=2,ie.bl_count[Sn]--,jn-=2}while(0<jn);for(Pe=Sn;Pe!==0;Pe--)for(je=ie.bl_count[Pe];je!==0;)tt<(ot=ie.heap[--Oe])||(ze[2*ot+1]!==Pe&&(ie.opt_len+=(Pe-ze[2*ot+1])*ze[2*ot],ze[2*ot+1]=Pe),je--)}}(v,A),Ie(B,re,v.bl_count)}function c(v,A,D){var z,C,B=-1,W=A[1],$=0,Y=7,re=4;for(W===0&&(Y=138,re=3),A[2*(D+1)+1]=65535,z=0;z<=D;z++)C=W,W=A[2*(z+1)+1],++$<Y&&C===W||($<re?v.bl_tree[2*C]+=$:C!==0?(C!==B&&v.bl_tree[2*C]++,v.bl_tree[2*k]++):$<=10?v.bl_tree[2*w]++:v.bl_tree[2*N]++,B=C,re=($=0)===W?(Y=138,3):C===W?(Y=6,3):(Y=7,4))}function R(v,A,D){var z,C,B=-1,W=A[1],$=0,Y=7,re=4;for(W===0&&(Y=138,re=3),z=0;z<=D;z++)if(C=W,W=A[2*(z+1)+1],!(++$<Y&&C===W)){if($<re)for(;J(v,C,v.bl_tree),--$!=0;);else C!==0?(C!==B&&(J(v,C,v.bl_tree),$--),J(v,k,v.bl_tree),ne(v,$-3,2)):$<=10?(J(v,w,v.bl_tree),ne(v,$-3,3)):(J(v,N,v.bl_tree),ne(v,$-11,7));B=C,re=($=0)===W?(Y=138,3):C===W?(Y=6,3):(Y=7,4)}}l(q);var O=!1;function E(v,A,D,z){ne(v,(u<<1)+(z?1:0),3),function(C,B,W,$){_e(C),$&&(ae(C,W),ae(C,~W)),i.arraySet(C.pending_buf,C.window,B,W,C.pending),C.pending+=W}(v,A,D,!0)}r._tr_init=function(v){O||(function(){var A,D,z,C,B,W=new Array(T+1);for(C=z=0;C<f-1;C++)for(V[C]=z,A=0;A<1<<F[C];A++)S[z++]=C;for(S[z-1]=C,C=B=0;C<16;C++)for(q[C]=B,A=0;A<1<<M[C];A++)G[B++]=C;for(B>>=7;C<d;C++)for(q[C]=B<<7,A=0;A<1<<M[C]-7;A++)G[256+B++]=C;for(D=0;D<=T;D++)W[D]=0;for(A=0;A<=143;)X[2*A+1]=8,A++,W[8]++;for(;A<=255;)X[2*A+1]=9,A++,W[9]++;for(;A<=279;)X[2*A+1]=7,A++,W[7]++;for(;A<=287;)X[2*A+1]=8,A++,W[8]++;for(Ie(X,m+1,W),A=0;A<d;A++)I[2*A+1]=5,I[2*A]=ve(A,5);se=new oe(X,F,h+1,m,T),K=new oe(I,M,0,d,T),ee=new oe(new Array(0),P,0,b,g)}(),O=!0),v.l_desc=new U(v.dyn_ltree,se),v.d_desc=new U(v.dyn_dtree,K),v.bl_desc=new U(v.bl_tree,ee),v.bi_buf=0,v.bi_valid=0,de(v)},r._tr_stored_block=E,r._tr_flush_block=function(v,A,D,z){var C,B,W=0;0<v.level?(v.strm.data_type===2&&(v.strm.data_type=function($){var Y,re=4093624447;for(Y=0;Y<=31;Y++,re>>>=1)if(1&re&&$.dyn_ltree[2*Y]!==0)return o;if($.dyn_ltree[18]!==0||$.dyn_ltree[20]!==0||$.dyn_ltree[26]!==0)return a;for(Y=32;Y<h;Y++)if($.dyn_ltree[2*Y]!==0)return a;return o}(v)),x(v,v.l_desc),x(v,v.d_desc),W=function($){var Y;for(c($,$.dyn_ltree,$.l_desc.max_code),c($,$.dyn_dtree,$.d_desc.max_code),x($,$.bl_desc),Y=b-1;3<=Y&&$.bl_tree[2*H[Y]+1]===0;Y--);return $.opt_len+=3*(Y+1)+5+5+4,Y}(v),C=v.opt_len+3+7>>>3,(B=v.static_len+3+7>>>3)<=C&&(C=B)):C=B=D+5,D+4<=C&&A!==-1?E(v,A,D,z):v.strategy===4||B===C?(ne(v,2+(z?1:0),3),Ve(v,X,I)):(ne(v,4+(z?1:0),3),function($,Y,re,ie){var ue;for(ne($,Y-257,5),ne($,re-1,5),ne($,ie-4,4),ue=0;ue<ie;ue++)ne($,$.bl_tree[2*H[ue]+1],3);R($,$.dyn_ltree,Y-1),R($,$.dyn_dtree,re-1)}(v,v.l_desc.max_code+1,v.d_desc.max_code+1,W+1),Ve(v,v.dyn_ltree,v.dyn_dtree)),de(v),z&&_e(v)},r._tr_tally=function(v,A,D){return v.pending_buf[v.d_buf+2*v.last_lit]=A>>>8&255,v.pending_buf[v.d_buf+2*v.last_lit+1]=255&A,v.pending_buf[v.l_buf+v.last_lit]=255&D,v.last_lit++,A===0?v.dyn_ltree[2*D]++:(v.matches++,A--,v.dyn_ltree[2*(S[D]+h+1)]++,v.dyn_dtree[2*j(A)]++),v.last_lit===v.lit_bufsize-1},r._tr_align=function(v){ne(v,2,3),J(v,y,X),function(A){A.bi_valid===16?(ae(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):8<=A.bi_valid&&(A.pending_buf[A.pending++]=255&A.bi_buf,A.bi_buf>>=8,A.bi_valid-=8)}(v)}},{"../utils/common":41}],53:[function(t,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,r){(function(i){(function(o,a){if(!o.setImmediate){var l,u,f,h,m=1,d={},b=!1,p=o.document,T=Object.getPrototypeOf&&Object.getPrototypeOf(o);T=T&&T.setTimeout?T:o,l={}.toString.call(o.process)==="[object process]"?function(k){process.nextTick(function(){g(k)})}:function(){if(o.postMessage&&!o.importScripts){var k=!0,w=o.onmessage;return o.onmessage=function(){k=!1},o.postMessage("","*"),o.onmessage=w,k}}()?(h="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",y,!1):o.attachEvent("onmessage",y),function(k){o.postMessage(h+k,"*")}):o.MessageChannel?((f=new MessageChannel).port1.onmessage=function(k){g(k.data)},function(k){f.port2.postMessage(k)}):p&&"onreadystatechange"in p.createElement("script")?(u=p.documentElement,function(k){var w=p.createElement("script");w.onreadystatechange=function(){g(k),w.onreadystatechange=null,u.removeChild(w),w=null},u.appendChild(w)}):function(k){setTimeout(g,0,k)},T.setImmediate=function(k){typeof k!="function"&&(k=new Function(""+k));for(var w=new Array(arguments.length-1),N=0;N<w.length;N++)w[N]=arguments[N+1];var F={callback:k,args:w};return d[m]=F,l(m),m++},T.clearImmediate=_}function _(k){delete d[k]}function g(k){if(b)setTimeout(g,0,k);else{var w=d[k];if(w){b=!0;try{(function(N){var F=N.callback,M=N.args;switch(M.length){case 0:F();break;case 1:F(M[0]);break;case 2:F(M[0],M[1]);break;case 3:F(M[0],M[1],M[2]);break;default:F.apply(a,M)}})(w)}finally{_(k),b=!1}}}}function y(k){k.source===o&&typeof k.data=="string"&&k.data.indexOf(h)===0&&g(+k.data.slice(h.length))}})(typeof self>"u"?i===void 0?this:i:self)}).call(this,typeof un<"u"?un:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Sa);var oh=Sa.exports;const ah=Cr(oh),lh=wt({name:"BarraSuperior",components:{},setup(){const s=on(),e=St(()=>s.layout);return{store:s,layout:e}},methods:{gerarCodigo(){const s=this.store.selecionado;if(s==-1)return;const e=this.store.listaProjetos[s],t=e.optionsGals;let n="";switch(t.input=Z.INPUT_STRING,t.language){case Z.LANG_CPP:n="C++";break;case Z.LANG_JAVA:n="Java";break;case Z.LANG_DELPHI:n="Delphi";break}alert(t.toString());let r=null;try{r=ih(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,t)}catch(i){console.log(i)}if(r!=null)try{const i=new ah;for(const[o,a]of r.entries())i.file(o,a);i.generateAsync({type:"blob"}).then(o=>{const a=document.createElement("a"),l=URL.createObjectURL(o);a.href=l,a.download=e.fileName.slice(0,-5)+" - "+n+".zip",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(l)}),alert("Arquivos Gerados!")}catch(i){console.error(i),alert("Ocorreu um erro!")}},mudaLayout(s){switch(s){case 0:this.layout.token=33.33333,this.layout.simulacao=33.33333,this.layout.saidaSimulacao=33.33333,this.layout.gramatica=0;break;case 1:this.layout.token=0,this.layout.simulacao=50,this.layout.saidaSimulacao=50,this.layout.gramatica=50;break;case 2:this.layout.token=33.33333,this.layout.simulacao=33.33333,this.layout.saidaSimulacao=33.33333,this.layout.gramatica=50;break;case 3:this.layout.token=0,this.layout.simulacao=50,this.layout.saidaSimulacao=50,this.layout.gramatica=0;break}}}});const Wt=(s,e)=>{const t=s.__vccOpts||s;for(const[n,r]of e)t[n]=r;return t},Ta=s=>(ys("data-v-3e2bdabb"),s=s(),vs(),s),ch={class:"barra__superior"},uh=Ta(()=>te("span",{class:"logo"},"WEB",-1)),hh={class:"dropdown"},dh=Ta(()=>te("button",{class:"dropbtn"},"Layout",-1)),fh={class:"dropdown-content"};function ph(s,e,t,n,r,i){return Se(),Ee("div",ch,[uh,te("button",{class:"botao__gerar__codigo",onClick:e[0]||(e[0]=(...o)=>s.gerarCodigo&&s.gerarCodigo(...o))},"Gerar Código"),te("div",hh,[dh,te("div",fh,[te("a",{onClick:e[1]||(e[1]=o=>s.mudaLayout(0))},"Léxico"),te("a",{onClick:e[2]||(e[2]=o=>s.mudaLayout(1))},"Sintático"),te("a",{onClick:e[3]||(e[3]=o=>s.mudaLayout(2))},"Léxico e Sintático"),te("a",{onClick:e[4]||(e[4]=o=>s.mudaLayout(3))},"Simulador")])])])}const mh=Wt(lh,[["render",ph],["__scopeId","data-v-3e2bdabb"]]);function Nn(){return Nn=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s},Nn.apply(this,arguments)}var gh=13,_h=9,bh=8,Sh=89,qn=90,Th=77,yi=57,vi=219,Ei=222,wi=192,yh=27,ki=100,vh=3e3,Eh=typeof window<"u"&&navigator&&/Win/i.test(navigator.platform),Gs=typeof window<"u"&&navigator&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),wh=wt({props:{lineNumbers:{type:Boolean,default:!1},autoStyleLineNumbers:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},modelValue:{type:String,default:""},highlight:{type:Function,required:!0},tabSize:{type:Number,default:2},insertSpaces:{type:Boolean,default:!0},ignoreTabKey:{type:Boolean,default:!1},placeholder:{type:String,default:""}},data:function(){return{capture:!0,history:{stack:[],offset:-1},lineNumbersHeight:"20px",codeData:""}},watch:{modelValue:{immediate:!0,handler:function(e){e?this.codeData=e:this.codeData=""}},content:{immediate:!0,handler:function(){var e=this;this.lineNumbers&&this.$nextTick(function(){e.setLineNumbersHeight()})}},lineNumbers:function(){var e=this;this.$nextTick(function(){e.styleLineNumbers(),e.setLineNumbersHeight()})}},computed:{isEmpty:function(){return this.codeData.length===0},content:function(){var e=this.highlight(this.codeData)+"<br />";return e},lineNumbersCount:function(){var e=this.codeData.split(/\r\n|\n/).length;return e}},mounted:function(){this._recordCurrentState(),this.styleLineNumbers()},methods:{setLineNumbersHeight:function(){this.lineNumbersHeight=getComputedStyle(this.$refs.pre).height},styleLineNumbers:function(){if(!(!this.lineNumbers||!this.autoStyleLineNumbers)){var e=this.$refs.pre,t=this.$el.querySelector(".prism-editor__line-numbers"),n=window.getComputedStyle(e);this.$nextTick(function(){var r="border-top-left-radius",i="border-bottom-left-radius";if(t){t.style[r]=n[r],t.style[i]=n[i],e.style[r]="0",e.style[i]="0";var o=["background-color","margin-top","padding-top","font-family","font-size","line-height"];o.forEach(function(a){t.style[a]=n[a]}),t.style["margin-bottom"]="-"+n["padding-top"]}})}},_recordCurrentState:function(){var e=this.$refs.textarea;if(e){var t=e.value,n=e.selectionStart,r=e.selectionEnd;this._recordChange({value:t,selectionStart:n,selectionEnd:r})}},_getLines:function(e,t){return e.substring(0,t).split(`
`)},_applyEdits:function(e){var t=this.$refs.textarea,n=this.history.stack[this.history.offset];n&&t&&(this.history.stack[this.history.offset]=Nn({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),this._recordChange(e),this._updateInput(e)},_recordChange:function(e,t){t===void 0&&(t=!1);var n=this.history,r=n.stack,i=n.offset;if(r.length&&i>-1){this.history.stack=r.slice(0,i+1);var o=this.history.stack.length;if(o>ki){var a=o-ki;this.history.stack=r.slice(a,o),this.history.offset=Math.max(this.history.offset-a,0)}}var l=Date.now();if(t){var u=this.history.stack[this.history.offset];if(u&&l-u.timestamp<vh){var f,h,m=/[^a-z0-9]([a-z0-9]+)$/i,d=(f=this._getLines(u.value,u.selectionStart).pop())===null||f===void 0?void 0:f.match(m),b=(h=this._getLines(e.value,e.selectionStart).pop())===null||h===void 0?void 0:h.match(m);if(d&&b&&b[1].startsWith(d[1])){this.history.stack[this.history.offset]=Nn({},e,{timestamp:l});return}}}this.history.stack.push(Nn({},e,{timestamp:l})),this.history.offset++},_updateInput:function(e){var t=this.$refs.textarea;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,this.$emit("update:modelValue",e.value))},handleChange:function(e){var t=e.target,n=t.value,r=t.selectionStart,i=t.selectionEnd;this._recordChange({value:n,selectionStart:r,selectionEnd:i},!0),this.$emit("update:modelValue",n)},_undoEdit:function(){var e=this.history,t=e.stack,n=e.offset,r=t[n-1];r&&(this._updateInput(r),this.history.offset=Math.max(n-1,0))},_redoEdit:function(){var e=this.history,t=e.stack,n=e.offset,r=t[n+1];r&&(this._updateInput(r),this.history.offset=Math.min(n+1,t.length-1))},handleKeyDown:function(e){var t=this.tabSize,n=this.insertSpaces,r=this.ignoreTabKey;if(this.$emit("keydown",e),!e.defaultPrevented){e.keyCode===yh&&(e.target.blur(),this.$emit("blur",e));var i=e.target,o=i.value,a=i.selectionStart,l=i.selectionEnd,u=(n?" ":"	").repeat(t);if(e.keyCode===_h&&!r&&this.capture)if(e.preventDefault(),e.shiftKey){var f=this._getLines(o,a),h=f.length-1,m=this._getLines(o,l).length-1,d=o.split(`
`).map(function(I,G){return G>=h&&G<=m&&I.startsWith(u)?I.substring(u.length):I}).join(`
`);if(o!==d){var b=f[h];this._applyEdits({value:d,selectionStart:b.startsWith(u)?a-u.length:a,selectionEnd:l-(o.length-d.length)})}}else if(a!==l){var p=this._getLines(o,a),T=p.length-1,_=this._getLines(o,l).length-1,g=p[T];this._applyEdits({value:o.split(`
`).map(function(I,G){return G>=T&&G<=_?u+I:I}).join(`
`),selectionStart:/\S/.test(g)?a+u.length:a,selectionEnd:l+u.length*(_-T+1)})}else{var y=a+u.length;this._applyEdits({value:o.substring(0,a)+u+o.substring(l),selectionStart:y,selectionEnd:y})}else if(e.keyCode===bh){var k=a!==l,w=o.substring(0,a);if(w.endsWith(u)&&!k){e.preventDefault();var N=a-u.length;this._applyEdits({value:o.substring(0,a-u.length)+o.substring(l),selectionStart:N,selectionEnd:N})}}else if(e.keyCode===gh){if(a===l){var F=this._getLines(o,a).pop(),M=F==null?void 0:F.match(/^\s+/);if(M&&M[0]){e.preventDefault();var P=`
`+M[0],H=a+P.length;this._applyEdits({value:o.substring(0,a)+P+o.substring(l),selectionStart:H,selectionEnd:H})}}}else if(e.keyCode===yi||e.keyCode===vi||e.keyCode===Ei||e.keyCode===wi){var X;e.keyCode===yi&&e.shiftKey?X=["(",")"]:e.keyCode===vi?e.shiftKey?X=["{","}"]:X=["[","]"]:e.keyCode===Ei?e.shiftKey?X=['"','"']:X=["'","'"]:e.keyCode===wi&&!e.shiftKey&&(X=["`","`"]),a!==l&&X&&(e.preventDefault(),this._applyEdits({value:o.substring(0,a)+X[0]+o.substring(a,l)+X[1]+o.substring(l),selectionStart:a,selectionEnd:l+2}))}else(Gs?e.metaKey&&e.keyCode===qn:e.ctrlKey&&e.keyCode===qn)&&!e.shiftKey&&!e.altKey?(e.preventDefault(),this._undoEdit()):(Gs?e.metaKey&&e.keyCode===qn&&e.shiftKey:Eh?e.ctrlKey&&e.keyCode===Sh:e.ctrlKey&&e.keyCode===qn&&e.shiftKey)&&!e.altKey?(e.preventDefault(),this._redoEdit()):e.keyCode===Th&&e.ctrlKey&&(!Gs||e.shiftKey)&&(e.preventDefault(),this.capture=!this.capture)}}},render:function(){var e=this,t=xt("div",{class:"prism-editor__line-width-calc",style:"height: 0px; visibility: hidden; pointer-events: none;"},"999"),n=xt("div",{class:"prism-editor__line-numbers",style:{"min-height":this.lineNumbersHeight},"aria-hidden":"true"},[t,Array.from(Array(this.lineNumbersCount).keys()).map(function(a,l){return xt("div",{class:"prism-editor__line-number token comment"},""+ ++l)})]),r=xt("textarea",{ref:"textarea",onInput:this.handleChange,onKeydown:this.handleKeyDown,onClick:function(l){e.$emit("click",l)},onKeyup:function(l){e.$emit("keyup",l)},onFocus:function(l){e.$emit("focus",l)},onBlur:function(l){e.$emit("blur",l)},class:{"prism-editor__textarea":!0,"prism-editor__textarea--empty":this.isEmpty},spellCheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off","data-gramm":"false",placeholder:this.placeholder,"data-testid":"textarea",readonly:this.readonly,value:this.codeData}),i=xt("pre",{ref:"pre",class:"prism-editor__editor","data-testid":"preview",innerHTML:this.content}),o=xt("div",{class:"prism-editor__container"},[r,i]);return xt("div",{class:"prism-editor-wrapper"},[this.lineNumbers&&n,o])}});var ya={exports:{}};(function(s){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function g(y){return y instanceof l?new l(y.type,g(y.content),y.alias):Array.isArray(y)?y.map(g):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++i}),g.__id},clone:function g(y,k){k=k||{};var w,N;switch(a.util.type(y)){case"Object":if(N=a.util.objId(y),k[N])return k[N];w={},k[N]=w;for(var F in y)y.hasOwnProperty(F)&&(w[F]=g(y[F],k));return w;case"Array":return N=a.util.objId(y),k[N]?k[N]:(w=[],k[N]=w,y.forEach(function(M,P){w[P]=g(M,k)}),w);default:return y}},getLanguage:function(g){for(;g;){var y=r.exec(g.className);if(y)return y[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,y){g.className=g.className.replace(RegExp(r,"gi"),""),g.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(w){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(g){var y=document.getElementsByTagName("script");for(var k in y)if(y[k].src==g)return y[k]}return null}},isActive:function(g,y,k){for(var w="no-"+y;g;){var N=g.classList;if(N.contains(y))return!0;if(N.contains(w))return!1;g=g.parentElement}return!!k}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(g,y){var k=a.util.clone(a.languages[g]);for(var w in y)k[w]=y[w];return k},insertBefore:function(g,y,k,w){w=w||a.languages;var N=w[g],F={};for(var M in N)if(N.hasOwnProperty(M)){if(M==y)for(var P in k)k.hasOwnProperty(P)&&(F[P]=k[P]);k.hasOwnProperty(M)||(F[M]=N[M])}var H=w[g];return w[g]=F,a.languages.DFS(a.languages,function(X,I){I===H&&X!=g&&(this[X]=F)}),F},DFS:function g(y,k,w,N){N=N||{};var F=a.util.objId;for(var M in y)if(y.hasOwnProperty(M)){k.call(y,M,y[M],w||M);var P=y[M],H=a.util.type(P);H==="Object"&&!N[F(P)]?(N[F(P)]=!0,g(P,k,null,N)):H==="Array"&&!N[F(P)]&&(N[F(P)]=!0,g(P,k,M,N))}}},plugins:{},highlightAll:function(g,y){a.highlightAllUnder(document,g,y)},highlightAllUnder:function(g,y,k){var w={callback:k,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),a.hooks.run("before-all-elements-highlight",w);for(var N=0,F;F=w.elements[N++];)a.highlightElement(F,y===!0,w.callback)},highlightElement:function(g,y,k){var w=a.util.getLanguage(g),N=a.languages[w];a.util.setLanguage(g,w);var F=g.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(F,w);var M=g.textContent,P={element:g,language:w,grammar:N,code:M};function H(I){P.highlightedCode=I,a.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,a.hooks.run("after-highlight",P),a.hooks.run("complete",P),k&&k.call(P.element)}if(a.hooks.run("before-sanity-check",P),F=P.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!P.code){a.hooks.run("complete",P),k&&k.call(P.element);return}if(a.hooks.run("before-highlight",P),!P.grammar){H(a.util.encode(P.code));return}if(y&&n.Worker){var X=new Worker(a.filename);X.onmessage=function(I){H(I.data)},X.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else H(a.highlight(P.code,P.grammar,P.language))},highlight:function(g,y,k){var w={code:g,grammar:y,language:k};if(a.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=a.tokenize(w.code,w.grammar),a.hooks.run("after-tokenize",w),l.stringify(a.util.encode(w.tokens),w.language)},tokenize:function(g,y){var k=y.rest;if(k){for(var w in k)y[w]=k[w];delete y.rest}var N=new h;return m(N,N.head,g),f(g,N,y,N.head,0),b(N)},hooks:{all:{},add:function(g,y){var k=a.hooks.all;k[g]=k[g]||[],k[g].push(y)},run:function(g,y){var k=a.hooks.all[g];if(!(!k||!k.length))for(var w=0,N;N=k[w++];)N(y)}},Token:l};n.Prism=a;function l(g,y,k,w){this.type=g,this.content=y,this.alias=k,this.length=(w||"").length|0}l.stringify=function g(y,k){if(typeof y=="string")return y;if(Array.isArray(y)){var w="";return y.forEach(function(H){w+=g(H,k)}),w}var N={type:y.type,content:g(y.content,k),tag:"span",classes:["token",y.type],attributes:{},language:k},F=y.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(N.classes,F):N.classes.push(F)),a.hooks.run("wrap",N);var M="";for(var P in N.attributes)M+=" "+P+'="'+(N.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+N.tag+' class="'+N.classes.join(" ")+'"'+M+">"+N.content+"</"+N.tag+">"};function u(g,y,k,w){g.lastIndex=y;var N=g.exec(k);if(N&&w&&N[1]){var F=N[1].length;N.index+=F,N[0]=N[0].slice(F)}return N}function f(g,y,k,w,N,F){for(var M in k)if(!(!k.hasOwnProperty(M)||!k[M])){var P=k[M];P=Array.isArray(P)?P:[P];for(var H=0;H<P.length;++H){if(F&&F.cause==M+","+H)return;var X=P[H],I=X.inside,G=!!X.lookbehind,S=!!X.greedy,V=X.alias;if(S&&!X.pattern.global){var se=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,se+"g")}for(var K=X.pattern||X,ee=w.next,q=N;ee!==y.tail&&!(F&&q>=F.reach);q+=ee.value.length,ee=ee.next){var oe=ee.value;if(y.length>g.length)return;if(!(oe instanceof l)){var U=1,j;if(S){if(j=u(K,q,g,G),!j||j.index>=g.length)break;var ve=j.index,ae=j.index+j[0].length,ne=q;for(ne+=ee.value.length;ve>=ne;)ee=ee.next,ne+=ee.value.length;if(ne-=ee.value.length,q=ne,ee.value instanceof l)continue;for(var J=ee;J!==y.tail&&(ne<ae||typeof J.value=="string");J=J.next)U++,ne+=J.value.length;U--,oe=g.slice(q,ne),j.index-=q}else if(j=u(K,0,oe,G),!j)continue;var ve=j.index,Ie=j[0],de=oe.slice(0,ve),_e=oe.slice(ve+Ie.length),Re=q+oe.length;F&&Re>F.reach&&(F.reach=Re);var Ae=ee.prev;de&&(Ae=m(y,Ae,de),q+=de.length),d(y,Ae,U);var Ve=new l(M,I?a.tokenize(Ie,I):Ie,V,Ie);if(ee=m(y,Ae,Ve),_e&&m(y,ee,_e),U>1){var x={cause:M+","+H,reach:Re};f(g,y,k,ee.prev,q,x),F&&x.reach>F.reach&&(F.reach=x.reach)}}}}}}function h(){var g={value:null,prev:null,next:null},y={value:null,prev:g,next:null};g.next=y,this.head=g,this.tail=y,this.length=0}function m(g,y,k){var w=y.next,N={value:k,prev:y,next:w};return y.next=N,w.prev=N,g.length++,N}function d(g,y,k){for(var w=y.next,N=0;N<k&&w!==g.tail;N++)w=w.next;y.next=w,w.prev=y,g.length-=N}function b(g){for(var y=[],k=g.head.next;k!==g.tail;)y.push(k.value),k=k.next;return y}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(g){var y=JSON.parse(g.data),k=y.language,w=y.code,N=y.immediateClose;n.postMessage(a.highlight(w,a.languages[k],k)),N&&n.close()},!1)),a;var p=a.util.currentScript();p&&(a.filename=p.src,p.hasAttribute("data-manual")&&(a.manual=!0));function T(){a.manual||a.highlightAll()}if(!a.manual){var _=document.readyState;_==="loading"||_==="interactive"&&p&&p.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return a}(e);s.exports&&(s.exports=t),typeof un<"u"&&(un.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var i=n.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading…",r=function(p,T){return"✖ Error "+p+" while fetching file: "+T},i="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",u="loaded",f="failed",h="pre[data-src]:not(["+a+'="'+u+'"]):not(['+a+'="'+l+'"])';function m(p,T,_){var g=new XMLHttpRequest;g.open("GET",p,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?T(g.responseText):g.status>=400?_(r(g.status,g.statusText)):_(i))},g.send(null)}function d(p){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(p||"");if(T){var _=Number(T[1]),g=T[2],y=T[3];return g?y?[_,Number(y)]:[_,void 0]:[_,_]}}t.hooks.add("before-highlightall",function(p){p.selector+=", "+h}),t.hooks.add("before-sanity-check",function(p){var T=p.element;if(T.matches(h)){p.code="",T.setAttribute(a,l);var _=T.appendChild(document.createElement("CODE"));_.textContent=n;var g=T.getAttribute("data-src"),y=p.language;if(y==="none"){var k=(/\.(\w+)$/.exec(g)||[,"none"])[1];y=o[k]||k}t.util.setLanguage(_,y),t.util.setLanguage(T,y);var w=t.plugins.autoloader;w&&w.loadLanguages(y),m(g,function(N){T.setAttribute(a,u);var F=d(T.getAttribute("data-range"));if(F){var M=N.split(/\r\n?|\n/g),P=F[0],H=F[1]==null?M.length:F[1];P<0&&(P+=M.length),P=Math.max(0,Math.min(P-1,M.length)),H<0&&(H+=M.length),H=Math.max(0,Math.min(H,M.length)),N=M.slice(P,H).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(P+1))}_.textContent=N,t.highlightElement(_)},function(N){T.setAttribute(a,f),_.textContent=N})}}),t.plugins.fileHighlight={highlight:function(T){for(var _=(T||document).querySelectorAll(h),g=0,y;y=_[g++];)t.highlightElement(y)}};var b=!1;t.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ya);var Ct=ya.exports;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.bnf={string:{pattern:/"[^\r\n"]*"|'[^\r\n']*'/},definition:{pattern:/<[^<>\r\n\t]+>(?=\s*::=)/,alias:["rule","keyword"],inside:{punctuation:/^<|>$/}},rule:{pattern:/<[^<>\r\n\t]+>/,inside:{punctuation:/^<|>$/}},operator:/::=|[|()[\]{}*+?]|\.{3}/};Prism.languages.rbnf=Prism.languages.bnf;(function(s){var e=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+t.source+"(?:[ 	]+"+e.source+")?|"+e.source+"(?:[ 	]+"+t.source+")?)",r=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function o(a,l){l=(l||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return a});return RegExp(u,l)}s.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+r+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:o(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:o(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:o(i),lookbehind:!0,greedy:!0},number:{pattern:o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:e,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},s.languages.yml=s.languages.yaml})(Prism);const kh=wt({name:"AreaCodigo",props:{titulo:String},data(){return{texto:"Area de Texto para teste",tabSize:2}},components:{PrismEditor:wh},setup(){const s=on(),e=St(()=>s.selecionado),t=St(()=>s.listaProjetos);return{store:s,projetos:t,selecionado:e}},watch:{selecionado(){const s=document.getElementById("textoDefinicoesRegulares"),e=document.getElementById("textoTokens"),t=document.getElementById("textoNaoTerminais"),n=document.getElementById("textoGramatica"),r=document.getElementById("textoSaida"),i=document.getElementById("textoSimulador");this.selecionado!=-1&&(s!=null&&(s.value=this.projetos[this.selecionado].regularDefinitions),e!=null&&(e.value=this.projetos[this.selecionado].tokens),t!=null&&(t.value=this.projetos[this.selecionado].nonTerminals),n!=null&&(n.value=this.projetos[this.selecionado].grammar),r!=null&&(r.value=this.projetos[this.selecionado].consoleExit),i!=null&&(i.value=this.projetos[this.selecionado].textSimulator))}},methods:{highlighterPrismBNF(s){return Ct.highlight(s,Ct.languages.bnf,"bnf")},highlighterGrammarGALS(s){return Ct.highlight(s,Ct.languages.gals_bnf={comment:/\/\/.*/,string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},"semantic-action":{pattern:/#\d+/,alias:"symbol"},"non-terminal":{pattern:/<[^<>\r\n\t]+>/,alias:["bold","keyword"],inside:{punctuation:/^<|>$/}},operator:/::=|\||;/,epsilon:{pattern:/î/,alias:"class-name"}},"gals_bnf")},highlighterOrignalTokensGALS(s){return Ct.highlight(s,Ct.languages.gals={comment:/\/\/.*/,sc_token:{pattern:/\b[a-zA-Z]\w*[ \t]*(=[ \t]*[a-zA-Z]\w*[ \t]*:)/g,lookbehind:!0,inside:{important:/(:)/}},token:{pattern:/(^[a-zA-Z]\w*[ \t]*:)([^\r\n]|:)+/gm,lookbehind:!0,alias:"regex"},error:{pattern:/^(?:[0-9])/m,alias:"number"},ignore:{pattern:/^(:!?)([^\r\n]|:)+/m,lookbehind:!0,alias:"class-name"},operator:/(?:(:|!|=))/,string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0}},"gals")},highlighterNewTokensGALS(s){return Ct.highlight(s,Ct.languages.gals={comment:/\/\/.*/,escaped:{pattern:/\\.{1,3}/,alias:["constant"]},token:{pattern:/^[a-zA-Z_]\w*(?:[ \t]*):/gm,alias:"variable"},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/[0-9]/,operator:/[|()[\]{}*+?<>]/,assign:{pattern:/:|=|!/,alias:["important"]},punctuation:/,|;|-|\//},"gals")},highlighterNone(s){return s},focusEditor(s){var e,t;(t=(e=document.getElementById(s))==null?void 0:e.getElementsByClassName("prism-editor__textarea")[0])==null||t.focus()}}});const Ah={class:"caixa__titulo"},Ch={key:0,class:"caixa__interna"},Rh=["disabled"],xh=["disabled"],Nh={key:3,class:"caixa__interna"},Ih=["disabled"],Lh={key:5,class:"caixa__interna"};function Oh(s,e,t,n,r,i){const o=at("prism-editor");return Se(),Ee("div",{class:yt([s.titulo==="Simbolo inicial"?"caixa__input":"caixa"])},[te("p",Ah,_t(s.titulo),1),s.projetos[s.selecionado]==null?(Se(),Ee("div",Ch,[s.titulo==="Simbolo inicial"?(Se(),Ee("input",{key:0,name:"textoCodigoVazio",class:"input__codigo",disabled:s.selecionado==-1},null,8,Rh)):(Se(),Ee("textarea",{key:1,name:"textoCodigoVazio",class:"texto__codigo",disabled:s.selecionado==-1},null,8,xh))])):s.titulo=="Definições Regulares"?(Se(),Ee("div",{key:1,class:"caixa__interna",onClick:e[1]||(e[1]=a=>s.focusEditor("textoDefinicoesRegulares"))},[me(o,{id:"textoDefinicoesRegulares",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",modelValue:s.projetos[s.selecionado].regularDefinitions,"onUpdate:modelValue":e[0]||(e[0]=a=>s.projetos[s.selecionado].regularDefinitions=a),highlight:s.highlighterOrignalTokensGALS,disabled:s.selecionado==-1,"line-numbers":!0},null,8,["modelValue","highlight","disabled"])])):s.titulo=="Tokens"?(Se(),Ee("div",{key:2,class:"caixa__interna",onClick:e[3]||(e[3]=a=>s.focusEditor("textoTokens"))},[me(o,{id:"textoTokens",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",modelValue:s.projetos[s.selecionado].tokens,"onUpdate:modelValue":e[2]||(e[2]=a=>s.projetos[s.selecionado].tokens=a),disabled:s.selecionado==-1,highlight:s.highlighterOrignalTokensGALS,"line-numbers":!0},null,8,["modelValue","disabled","highlight"])])):s.titulo=="Simbolo inicial"?(Se(),Ee("div",Nh,[wn(te("input",{id:"textoNaoTerminais",type:"text",name:"textoCodigo",class:"input__codigo",spellcheck:"false","onUpdate:modelValue":e[4]||(e[4]=a=>s.projetos[s.selecionado].nonTerminals=a),pattern:"<[a-zA-Z_0-9]+>",disabled:s.selecionado==-1},null,8,Ih),[[fi,s.projetos[s.selecionado].nonTerminals]])])):s.titulo=="Gramática"?(Se(),Ee("div",{key:4,class:"caixa__interna",onClick:e[6]||(e[6]=a=>s.focusEditor("textoGramatica"))},[me(o,{id:"textoGramatica",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",modelValue:s.projetos[s.selecionado].grammar,"onUpdate:modelValue":e[5]||(e[5]=a=>s.projetos[s.selecionado].grammar=a),disabled:s.selecionado==-1,highlight:s.highlighterGrammarGALS,"line-numbers":!0},null,8,["modelValue","disabled","highlight"])])):s.titulo=="Saída"?(Se(),Ee("div",Lh,[wn(te("textarea",{id:"textoSaida",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",disabled:"","onUpdate:modelValue":e[7]||(e[7]=a=>s.projetos[s.selecionado].consoleExit=a)},null,512),[[fi,s.projetos[s.selecionado].consoleExit]])])):s.titulo=="Simulação"?(Se(),Ee("div",{key:6,class:"caixa__interna",onClick:e[9]||(e[9]=a=>s.focusEditor("textoSimulacao"))},[me(o,{id:"textoSimulacao",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",modelValue:s.projetos[s.selecionado].textSimulator,"onUpdate:modelValue":e[8]||(e[8]=a=>s.projetos[s.selecionado].textSimulator=a),disabled:s.selecionado==-1,highlight:s.highlighterNone,"line-numbers":!0},null,8,["modelValue","disabled","highlight"])])):Fn("",!0)],2)}const va=Wt(kh,[["render",Oh],["__scopeId","data-v-4fb9d801"]]),Ph=wt({name:"TreeBrowser",components:{},props:{node:Object,isFinal:{type:Boolean,default:!0},isRoot:{type:Boolean,default:!0}},data(){return{isOpen:!0}},computed:{isFolder(){return this.node==null?!1:this.node.children&&this.node.children.length}}});const Fh={class:"tree"},Dh=["open"],Mh={key:1};function zh(s,e,t,n,r,i){var a,l,u;const o=at("TreeBrowser",!0);return Se(),Ee("div",Fh,[te("ul",null,[te("li",{class:yt({not__final:!s.isFinal,root:s.isRoot})},[s.isFolder?(Se(),Ee("details",{key:0,open:s.isRoot},[te("summary",{style:bn({fontWeight:s.isFolder?"bold":"normal",color:s.isFolder?"green":"black"})},_t((a=s.node)==null?void 0:a.value),5),(Se(!0),Ee(qe,null,yr((l=s.node)==null?void 0:l.children,(f,h)=>{var m;return Se(),wr(o,{key:f.value==null?"":f.value,node:f,"is-final":h==((m=s.node)==null?void 0:m.children.length)-1,"is-root":!1},null,8,["node","is-final"])}),128))],8,Dh)):(Se(),Ee("div",Mh,[te("li",null,_t((u=s.node)==null?void 0:u.value),1)]))],2)])])}const jh=Wt(Ph,[["render",zh],["__scopeId","data-v-189a0511"]]),Bh=wt({name:"SimuladorJanela",components:{TreeBrowser:jh},data(){return{resultadoLexico:new Map,resultadoSintatico:new st,tipoSimulacao:"Lexico"}},setup(){return{store:on()}},methods:{simularLexico(){this.tipoSimulacao="Lexico";const s=this.store.selecionado;if(s==-1)return;const e=this.store.listaProjetos[s];try{this.resultadoLexico=Ju(e.textSimulator,e.regularDefinitions,e.tokens),e.consoleExit="Simulação Concluida"}catch(t){console.log(t),e.consoleExit="Erro Léxico: "+t.message}},simularSintatico(){this.tipoSimulacao="Sintático";const s=this.store.selecionado;if(s==-1)return;const e=this.store.listaProjetos[s];try{const t=eh(e.textSimulator,e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,e.optionsGals.parser,null);this.resultadoSintatico=t,e.consoleExit="Simulação Concluida"}catch(t){console.log(t),e.consoleExit="Erro Léxico: "+t.message}},tokenSelect(s,e){var n;const t=(n=document.getElementById("textoSimulacao"))==null?void 0:n.getElementsByTagName("textarea")[0];t==null||t.setSelectionRange(e,e+s.length),t==null||t.focus()}}});const Ea=s=>(ys("data-v-4f7d4b6a"),s=s(),vs(),s),Uh={class:"contentor__simulacao"},$h={class:"container__saida__simulacao"},Hh=Ea(()=>te("p",{class:"caixa__titulo"},"Saída da Simulação",-1)),Gh={key:0,class:"saida__simulacao"},Kh=Ea(()=>te("thead",null,[te("tr",null,[te("th",null,"Token"),te("th",null,"Lexeme"),te("th",null,"Posição")])],-1)),Wh=["onClick"],Vh={key:1,class:"saida__simulacao"},qh={class:"container__botao__simular"};function Zh(s,e,t,n,r,i){const o=at("TreeBrowser");return Se(),Ee("div",Uh,[te("div",$h,[Hh,s.tipoSimulacao==="Lexico"?(Se(),Ee("div",Gh,[te("table",null,[Kh,te("tbody",null,[(Se(!0),Ee(qe,null,yr(s.resultadoLexico,(a,l)=>(Se(),Ee("tr",{key:l,onClick:u=>s.tokenSelect(a[0].lexeme,a[0].position)},[te("td",null,_t(a[1]),1),te("td",null,_t(a[0].lexeme),1),te("td",null,_t(a[0].position),1)],8,Wh))),128))])])])):Fn("",!0),s.tipoSimulacao==="Sintático"?(Se(),Ee("div",Vh,[te("div",null,[me(o,{node:s.resultadoSintatico.toJSON()},null,8,["node"])])])):Fn("",!0),te("div",qh,[te("button",{class:"botao__simular",onClick:e[0]||(e[0]=(...a)=>s.simularLexico&&s.simularLexico(...a))},"Simular Lexico"),te("button",{class:"botao__simular",onClick:e[1]||(e[1]=(...a)=>s.simularSintatico&&s.simularSintatico(...a))},"Simular Sintático")])])])}const Yh=Wt(Bh,[["render",Zh],["__scopeId","data-v-4f7d4b6a"]]),Xh="modulepreload",Jh=function(s){return"/Web-GALS/"+s},Ai={},Qh=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Jh(i),i in Ai)return;Ai[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Xh,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ci={download(s,e,t){const n=new Blob([s],{type:t});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n,e);else{let r=document.createElement("a"),i=URL.createObjectURL(n);r.href=i,r.download=e,document.body.appendChild(r),r.click(),setTimeout(function(){document.body.removeChild(r),window.URL.revokeObjectURL(i)},0)}}},ed=wt({name:"ModalConfiguracoes",components:{},props:{options:Z},data(){return{activeTab:"Geral",namespace:!0}},setup(){const s=on(),e=St(()=>s.selecionado),t=St(()=>s.listaProjetos);return{store:s,projetos:t,selecionado:e}},methods:{fecharModal(){const s=document.getElementById("modal__configuracoes");s!=null&&(s.style.display="none")},changeTab(s){let e=document.getElementsByClassName("tablinks");for(let t=0;t<e.length;t++)e[t].className=e[t].className.replace(" active","");s==="Geral"?e[0].className+=" active":s==="Léxico"?e[1].className+=" active":s==="Sintático"&&(e[2].className+=" active"),this.activeTab=s},enviarForms(s){if(s==null)return;let e=new Z;const t=s.target;t!=null&&(e.setOption("GenerateScanner",t.gerar.value==="1"||t.gerar.value==="3"?"true":"false"),e.setOption("GenerateParser",t.gerar.value==="2"||t.gerar.value==="3"?"true":"false"),e.setOption("Language",t.linguagem.value),e.setOption("ScannerName",t.nomeLexico.value),e.setOption("ParserName",t.nomeSintatico.value),e.setOption("SemanticName",t.nomeSemantico.value),e.setOption("Package",t.nameNamespace.value),e.setOption("ScannerCaseSensitive",t.sensibilidade.checked),e.setOption("ScannerTable",t.automato.value),e.setOption("Input",t.tipoEntrada.value),e.setOption("Parser",t.parser.value),this.projetos[this.selecionado].optionsGals=e,this.projetos[this.selecionado].options=e.toString(),this.fecharModal())},preencherModal(){const s=this.$refs.form,e=this.projetos[this.selecionado].optionsGals;alert(e.toString()),e.generateScanner&&e.generateParser?s.gerar.value="3":e.generateParser?s.gerar.value="2":e.generateScanner&&(s.gerar.value="1"),Z.LANG_CPP==e.language?s.linguagem.value="C++":Z.LANG_JAVA==e.language?s.linguagem.value="Java":Z.LANG_DELPHI==e.language&&(s.linguagem.value="Delphi"),s.nomeLexico.value=e.scannerName,s.nomeSintatico.value=e.parserName,s.nomeSemantico.value=e.semanticName,s.nameNamespace.value=e.pkgName,s.sensibilidade.checked=e.scannerCaseSensitive,Z.INPUT_STREAM==e.input?s.tipoEntrada.value="Stream":Z.INPUT_STRING==e.input&&(s.tipoEntrada.value="String"),Z.SCANNER_TABLE_FULL==e.scannerTable?s.automato.value="Full":Z.SCANNER_TABLE_COMPACT==e.scannerTable?s.automato.value="Compact":Z.SCANNER_TABLE_HARDCODE==e.scannerTable&&(s.automato.value="Hardcode"),Z.PARSER_LR==e.parser?s.parser.value="LR":Z.PARSER_LALR==e.parser?s.parser.value="LALR":Z.PARSER_SLR==e.parser?s.parser.value="SLR":Z.PARSER_LL==e.parser?s.parser.value="LL":Z.PARSER_REC_DESC==e.parser&&(s.parser.value="RD")}}});const wa=s=>(ys("data-v-08234abb"),s=s(),vs(),s),td={class:"modal__configuracoes",id:"modal__configuracoes"},nd=wa(()=>te("h2",null,"Configurações",-1)),sd={class:"modal__configuracoes__inner",id:"modal__configuracoes__inner"},rd={class:"tab"},id={id:"Geral",class:"tabcontent"},od=kr('<fieldset id="gerar" data-v-08234abb><legend data-v-08234abb>Gerar</legend><div data-v-08234abb><input type="radio" id="gerarLexico" name="gerar" value="1" checked data-v-08234abb><label for="gerarLexico" data-v-08234abb>Analisador Léxico</label></div><div data-v-08234abb><input type="radio" id="gerarSintatico" name="gerar" value="2" data-v-08234abb><label for="gerarSintatico" data-v-08234abb>Analisador Sintático</label></div><div data-v-08234abb><input type="radio" id="gerarLexicoSintatico" name="gerar" value="3" data-v-08234abb><label for="gerarLexicoSintatico" data-v-08234abb>Analisador Léxico e Sintático</label></div></fieldset><fieldset data-v-08234abb><legend data-v-08234abb>Linguagem</legend><div data-v-08234abb><input type="radio" id="linguagemJava" name="linguagem" value="Java" checked data-v-08234abb><label for="linguagemJava" data-v-08234abb>Java</label></div><div data-v-08234abb><input type="radio" id="linguagemC++" name="linguagem" value="C++" data-v-08234abb><label for="linguagemC++" data-v-08234abb>C++</label></div><div data-v-08234abb><input type="radio" id="linguagemDelphi" name="linguagem" value="Delphi" data-v-08234abb><label for="linguagemDelphi" data-v-08234abb>Delphi</label></div></fieldset><fieldset data-v-08234abb><legend data-v-08234abb>Classes</legend><table data-v-08234abb><tr data-v-08234abb><td data-v-08234abb><label for="arquivoLexico" data-v-08234abb>Analisador Léxico</label></td><td data-v-08234abb><input type="input" id="arquivoLexico" name="nomeLexico" value="Lexico" checked data-v-08234abb></td></tr><tr data-v-08234abb><td data-v-08234abb><label for="arquivoSintatico" data-v-08234abb>Analisador Sintático</label></td><td data-v-08234abb><input type="input" id="arquivoSintatico" name="nomeSintatico" value="Sintatico" data-v-08234abb></td></tr><tr data-v-08234abb><td data-v-08234abb><label for="arquivoSemantico" data-v-08234abb>Analisador Semantico</label></td><td data-v-08234abb><input type="input" id="arquivoSemantico" name="nomeSemantico" value="Semantico" data-v-08234abb></td></tr><tr data-v-08234abb><td data-v-08234abb><label for="arquivoNamespace" data-v-08234abb>Package / Namespace</label></td><td data-v-08234abb><input type="input" id="arquivoNamespace" name="nameNamespace" value="" data-v-08234abb></td></tr></table></fieldset>',3),ad=[od],ld={id:"Léxico",class:"tabcontent"},cd=kr('<fieldset data-v-08234abb><legend data-v-08234abb>Forma de Entrada</legend><div data-v-08234abb><input type="radio" id="formaEntradaStream" name="tipoEntrada" value="Stream" checked data-v-08234abb><label for="formaEntradaStream" data-v-08234abb>Stream</label></div><div data-v-08234abb><input type="radio" id="formaEntradaString" name="tipoEntrada" value="String" data-v-08234abb><label for="formaEntradaString" data-v-08234abb>String</label></div></fieldset><fieldset data-v-08234abb><legend data-v-08234abb>Implementação do Autômato</legend><div data-v-08234abb><input type="radio" id="automatoCompleto" name="automato" value="Full" checked data-v-08234abb><label for="automatoCompleto" data-v-08234abb>Tabela Completa</label></div><div data-v-08234abb><input type="radio" id="automatoCompactado" name="automato" value="Compact" data-v-08234abb><label for="automatoCompactado" data-v-08234abb>Tabela Compactada (Só para Java)</label></div><div data-v-08234abb><input type="radio" id="automatoEspecifico" name="automato" value="Hardcode" data-v-08234abb><label for="automatoEspecifico" data-v-08234abb>Específica (Código)</label></div></fieldset><div data-v-08234abb><input type="checkbox" id="sensibilidade" name="sensibilidade" data-v-08234abb><label for="sensibilidade" data-v-08234abb>Diferenciar maiúscula/minúscula em casos especiais</label></div>',3),ud=[cd],hd={id:"Sintático",class:"tabcontent"},dd=kr('<fieldset data-v-08234abb><legend data-v-08234abb>Classe do Analisador Sintático</legend><fieldset data-v-08234abb><legend data-v-08234abb>Descendentes</legend><div data-v-08234abb><input type="radio" id="sintaticoLLRec" name="parser" value="RD" data-v-08234abb><label for="sintaticoLLRec" data-v-08234abb>Descendente Recursivo</label></div><div data-v-08234abb><input type="radio" id="sintaticoLLPred" name="parser" value="LL" data-v-08234abb><label for="sintaticoLLPred" data-v-08234abb>LL(1)</label></div></fieldset><fieldset data-v-08234abb><legend data-v-08234abb>Ascendentes</legend><div data-v-08234abb><input type="radio" id="sintaticoSLR" name="parser" value="SLR" data-v-08234abb><label for="sintaticoSLR" data-v-08234abb>SLR(1)</label></div><div data-v-08234abb><input type="radio" id="sintaticoLALR" name="parser" value="LALR" data-v-08234abb><label for="sintaticoLALR" data-v-08234abb>LALR(1)</label></div><div data-v-08234abb><input type="radio" id="sintaticoLRCanonico" name="parser" value="LR" data-v-08234abb><label for="sintaticoLRCanonico" data-v-08234abb>LR(1)</label></div></fieldset></fieldset>',1),fd=[dd],pd=wa(()=>te("button",{class:"btn_aplicarConfiguracoes"},"Aplicar",-1));function md(s,e,t,n,r,i){return Se(),Ee("div",td,[nd,te("div",sd,[te("span",{id:"close",onClick:e[0]||(e[0]=(...o)=>s.fecharModal&&s.fecharModal(...o))}),te("div",rd,[te("button",{class:"tablinks active",onClick:e[1]||(e[1]=o=>s.changeTab("Geral"))},"Geral"),te("button",{class:"tablinks",onClick:e[2]||(e[2]=o=>s.changeTab("Léxico"))},"Léxico"),te("button",{class:"tablinks",onClick:e[3]||(e[3]=o=>s.changeTab("Sintático"))},"Sintático")]),te("form",{id:"formOptions",onSubmit:e[4]||(e[4]=eu((...o)=>s.enviarForms&&s.enviarForms(...o),["prevent"])),ref:"form"},[wn(te("div",id,ad,512),[[Ds,s.activeTab=="Geral"]]),wn(te("div",ld,ud,512),[[Ds,s.activeTab=="Léxico"]]),wn(te("div",hd,fd,512),[[Ds,s.activeTab=="Sintático"]]),pd],544)])])}const gd=Wt(ed,[["render",md],["__scopeId","data-v-08234abb"]]),_d=wt({name:"BarraEsquerda",components:{AreaCodigo:va,ModalConfiguracoes:gd},data(){return{paginaAberta:"Projetos",estiloDisplayConteudo:"flex"}},setup(){const s=on(),e=St(()=>s.selecionado),t=St(()=>s.listaProjetos);return{store:s,projetos:t,selecionado:e}},methods:{abrirProjetos(){this.colapsaConteudo("Projetos"),this.paginaAberta="Projetos"},abrirOpcoes(){if(this.selecionado===-1){alert("Nenhum projeto selecionado!");return}const s=document.getElementById("modal__configuracoes"),e=this.$refs.ModalConfiguracoesRef;s==null||e==null||e&&e.enviarForms&&(e.preencherModal(),s.style.display="flex")},abrirDocumentacao(){this.colapsaConteudo("Documentação"),this.paginaAberta="Documentação"},getLinkDocumentacaoHTML(){let s;return s="files/help.html",s},abrirArquivo(){const s=document.getElementById("file");if(s==null||s.files==null)return;const e=s.files[0],t=this.store,n=new FileReader;Qh(()=>import("./index-browser-3c22f7b5.js").then(r=>r.i),[]).then(({default:r})=>{r(e).then(i=>{i.encoding==null?n.readAsText(e,"ISO-8859-4"):n.readAsText(e,i.encoding.toString()),n.onload=function(){const o=n.result.split(/#Options\n|\n#RegularDefinitions\n|\n#Tokens\n|\n#NonTerminals\n|\n#Grammar\n/),a={id:t.totalProjetos,fileName:e.name,options:o[1]==null?"":o[1],regularDefinitions:o[2]==null?"":o[2],tokens:o[3]==null?"":o[3],nonTerminals:o[4]==null?"":o[4].split(`
`).filter(l=>!l.startsWith("//"))[0].trim(),grammar:o[5]==null?"":o[5],textSimulator:"",consoleExit:"",optionsGals:o[1]==null?new Z:new Z().constructorFromString(o[1]==null?"":o[1])};t.addProject(a),t.selectLastProject()},s.value=""})}).catch(r=>{console.error("Error importing DetectFileEncodingAndLanguage:",r)})},abrirModalNovoArquivo(){const s=document.getElementById("modal__arquivo");s!=null&&(s.style.display="flex");const e=document.getElementById("nomeProjeto");e!=null&&(e.value="")},salvarArquivo(){if(this.selecionado==-1)alert("Nenhum projeto selecionado!");else{const s=this.projetos[this.selecionado].options,e=this.projetos[this.selecionado].optionsGals,t=this.projetos[this.selecionado].regularDefinitions,n=this.projetos[this.selecionado].tokens,r=this.projetos[this.selecionado].nonTerminals,i=this.projetos[this.selecionado].grammar;let o="";o+=`#Options
`+(s==null?"":e.toString())+`
`,o+=`#RegularDefinitions
`+(t??"")+`
`,o+=`#Tokens
`+(n??"")+`
`,o+=`#NonTerminals
`+(r==null?"":rh(r,i))+`
`,o+=`#Grammar
`+(i??""),Ci.download(o,this.projetos[this.selecionado].fileName,".gals")}},abrirInformacoes(){this.colapsaConteudo("Informações"),this.paginaAberta="Informações"},colapsaConteudo(s){this.paginaAberta==s?this.estiloDisplayConteudo=this.estiloDisplayConteudo=="flex"?"none":"flex":this.estiloDisplayConteudo="flex"},mostrarTabelaLexico(){const s=this.store.selecionado,e=this.store.listaProjetos[s],t=Qu(e.regularDefinitions,e.tokens),n=window.open();n&&(n.document.write(t),n.document.close()),e.consoleExit="Tabela criada com Sucesso!"},mostrarTabelaSintatico(){const s=this.store.selecionado,e=this.store.listaProjetos[s],t=th(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,Z.PARSER_SLR,null);Ci.download(t,this.projetos[this.selecionado].fileName,".html");const n=window.open();n&&(n.document.write(t),n.document.close()),e.consoleExit="Tabela criada com Sucesso!"},mostrarTabelaConjuntoSintatico(){const s=this.store.selecionado,e=this.store.listaProjetos[s],t=nh(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,Z.PARSER_SLR,null),n=window.open();n&&(n.document.write(t),n.document.close()),e.consoleExit="Tabela criada com Sucesso!"},mostrarTabelaFirstFollowSintatico(){const s=this.store.selecionado,e=this.store.listaProjetos[s],t=sh(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,Z.PARSER_SLR),n=window.open();n&&(n.document.write(t),n.document.close()),e.consoleExit="Tabela criada com Sucesso!"}}});const bd={class:"barra__esquerda"},Sd={class:"selecao__botoes"},Td={name:"file",type:"file",id:"file",ref:"myFiles",accept:".gals"},yd={key:0,class:"abaProjetos"},vd={class:"lista__projetos"},Ed=["onClick"],wd=["onClick"],kd={class:"codigo__definicao__regulares"},Ad={key:1},Cd={key:0},Rd={key:2},xd={key:3},Nd={class:"container__links"},Id=["href"];function Ld(s,e,t,n,r,i){const o=at("ModalConfiguracoes"),a=at("AreaCodigo");return Se(),Ee(qe,null,[me(o,{ref:"ModalConfiguracoesRef"},null,512),te("div",bd,[te("div",Sd,[te("button",{class:yt(["botao projetos",s.paginaAberta=="Projetos"?"selecionado":"nao_selecionado"]),onClick:e[0]||(e[0]=(...l)=>s.abrirProjetos&&s.abrirProjetos(...l))},null,2),te("button",{class:"botao novo__projeto",onClick:e[1]||(e[1]=(...l)=>s.abrirModalNovoArquivo&&s.abrirModalNovoArquivo(...l))}),te("label",{class:"botao__input",onChange:e[2]||(e[2]=(...l)=>s.abrirArquivo&&s.abrirArquivo(...l))},[te("input",Td,null,512),Oo(" Custom Upload ")],32),te("button",{class:"botao salvar",onClick:e[3]||(e[3]=(...l)=>s.salvarArquivo&&s.salvarArquivo(...l))}),te("button",{class:yt(["botao documentacao",s.paginaAberta=="Documentação"?"selecionado":"nao_selecionado"]),onClick:e[4]||(e[4]=(...l)=>s.abrirDocumentacao&&s.abrirDocumentacao(...l))},null,2),te("button",{class:"botao opcao",onClick:e[5]||(e[5]=(...l)=>s.abrirOpcoes&&s.abrirOpcoes(...l))}),te("button",{class:yt(["botao informacoes",s.paginaAberta=="Informações"?"selecionado":"nao_selecionado"]),onClick:e[6]||(e[6]=(...l)=>s.abrirInformacoes&&s.abrirInformacoes(...l))},null,2)]),te("div",{class:"conteudo",style:bn({display:s.estiloDisplayConteudo})},[te("h2",null,_t(s.paginaAberta),1),s.paginaAberta=="Projetos"?(Se(),Ee("div",yd,[te("div",vd,[(Se(!0),Ee(qe,null,yr(s.projetos,l=>(Se(),Ee("div",{key:l.id,class:"projeto__acaoes"},[te("button",{onClick:u=>s.store.changeSelected(l.id),class:yt(["botao__mudar__projeto",s.selecionado==l.id?"selecionado__projeto":""])},_t(l.fileName),11,Ed),te("button",{onClick:u=>s.store.deleteProject(l.id),class:"botao__excluir__projeto"}," X ",8,wd)]))),128))]),te("div",kd,[me(a,{titulo:"Definições Regulares"})]),me(a,{titulo:"Simbolo inicial"})])):s.paginaAberta=="Opções"?(Se(),Ee("div",Ad,[s.store.totalProjetos>0?(Se(),Ee("div",Cd,[te("p",null,_t(s.projetos[s.selecionado].options),1)])):Fn("",!0)])):s.paginaAberta=="Documentação"?(Se(),Ee("div",Rd,[te("button",{class:"btn",onClick:e[7]||(e[7]=(...l)=>s.mostrarTabelaLexico&&s.mostrarTabelaLexico(...l))},"Tabela de Análise Léxica"),te("button",{class:"btn",onClick:e[8]||(e[8]=(...l)=>s.mostrarTabelaSintatico&&s.mostrarTabelaSintatico(...l))},"Tabela de Análise Sintática"),te("button",{class:"btn",onClick:e[9]||(e[9]=(...l)=>s.mostrarTabelaConjuntoSintatico&&s.mostrarTabelaConjuntoSintatico(...l))},"Conjunto de itens"),te("button",{class:"btn",onClick:e[10]||(e[10]=(...l)=>s.mostrarTabelaFirstFollowSintatico&&s.mostrarTabelaFirstFollowSintatico(...l))},"First & Follow")])):s.paginaAberta=="Informações"?(Se(),Ee("div",xd,[te("div",Nd,[te("a",{class:"link",href:s.getLinkDocumentacaoHTML(),target:"_blank"},"DOCUMENTAÇÃO",8,Id)])])):Fn("",!0)],4)])],64)}const Od=Wt(_d,[["render",Ld],["__scopeId","data-v-84738113"]]),Pd=wt({name:"ModalNovoArquivo",components:{},setup(){return{store:on()}},methods:{fecharModal(){const s=document.getElementById("modal__arquivo");s!=null&&(s.style.display="none")},adicionarProjeto(){const s=document.getElementById("nomeProjeto");if(s!=null){let e=s.value.trim()+".gals";const t={id:this.store.totalProjetos,fileName:e,options:"",regularDefinitions:"",tokens:"",nonTerminals:"",grammar:"",textSimulator:"",consoleExit:"",optionsGals:new Z};this.store.addProject(t),this.store.selectLastProject(),this.fecharModal()}}}});const ka=s=>(ys("data-v-1b55268b"),s=s(),vs(),s),Fd={class:"modal__arquivo",id:"modal__arquivo"},Dd=ka(()=>te("h2",null,"Novo Projeto",-1)),Md={class:"modal__arquivo__inner",id:"modal__arquivo__inner"},zd=ka(()=>te("input",{type:"text",id:"nomeProjeto"},null,-1));function jd(s,e,t,n,r,i){return Se(),Ee("div",Fd,[Dd,te("div",Md,[te("span",{id:"close",onClick:e[0]||(e[0]=(...o)=>s.fecharModal&&s.fecharModal(...o))}),zd,te("button",{onClick:e[1]||(e[1]=(...o)=>s.adicionarProjeto&&s.adicionarProjeto(...o))},"Criar")])])}const Bd=Wt(Pd,[["render",jd],["__scopeId","data-v-1b55268b"]]),Ud={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((s,e)=>(s[e.id]=e)&&s,{})}},methods:{updatePaneComponents(){this.panes.forEach(s=>{s.update&&s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(s,e){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove(s){this.touch.mouseDown&&(s.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(s)),this.$emit("resize",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(s=>({min:s.min,max:s.max,size:s.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(s,e){"ontouchstart"in window&&(s.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===e?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(s,e),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=e,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[e])},onSplitterDblClick(s,e){let t=0;this.panes=this.panes.map((n,r)=>(n.size=r===e?n.max:n.min,r!==e&&(t+=n.min),n)),this.panes[e].size-=t,this.$emit("pane-maximize",this.panes[e]),this.$emit("resized",this.panes.map(n=>({min:n.min,max:n.max,size:n.size})))},onPaneClick(s,e){this.$emit("pane-click",this.indexedPanes[e])},getCurrentMouseDrag(s){const e=this.container.getBoundingClientRect(),{clientX:t,clientY:n}="ontouchstart"in window&&s.touches?s.touches[0]:s;return{x:t-e.left,y:n-e.top}},getCurrentDragPercentage(s){s=s[this.horizontal?"y":"x"];const e=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(s=e-s),s*100/e},calculatePanesSize(s){const e=this.touch.activeSplitter;let t={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0};const n=0+(this.pushOtherPanes?0:t.prevPanesSize),r=100-(this.pushOtherPanes?0:t.nextPanesSize),i=Math.max(Math.min(this.getCurrentDragPercentage(s),r),n);let o=[e,e+1],a=this.panes[o[0]]||null,l=this.panes[o[1]]||null;const u=a.max<100&&i>=a.max+t.prevPanesSize,f=l.max<100&&i<=100-(l.max+this.sumNextPanesSize(e+1));if(u||f){u?(a.size=a.max,l.size=Math.max(100-a.max-t.prevPanesSize-t.nextPanesSize,0)):(a.size=Math.max(100-l.max-t.prevPanesSize-this.sumNextPanesSize(e+1),0),l.size=l.max);return}if(this.pushOtherPanes){const h=this.doPushOtherPanes(t,i);if(!h)return;({sums:t,panesToResize:o}=h),a=this.panes[o[0]]||null,l=this.panes[o[1]]||null}a!==null&&(a.size=Math.min(Math.max(i-t.prevPanesSize-t.prevReachedMinPanes,a.min),a.max)),l!==null&&(l.size=Math.min(Math.max(100-i-t.nextPanesSize-t.nextReachedMinPanes,l.min),l.max))},doPushOtherPanes(s,e){const t=this.touch.activeSplitter,n=[t,t+1];return e<s.prevPanesSize+this.panes[n[0]].min&&(n[0]=this.findPrevExpandedPane(t).index,s.prevReachedMinPanes=0,n[0]<t&&this.panes.forEach((r,i)=>{i>n[0]&&i<=t&&(r.size=r.min,s.prevReachedMinPanes+=r.min)}),s.prevPanesSize=this.sumPrevPanesSize(n[0]),n[0]===void 0)?(s.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((r,i)=>{i>0&&i<=t&&(r.size=r.min,s.prevReachedMinPanes+=r.min)}),this.panes[n[1]].size=100-s.prevReachedMinPanes-this.panes[0].min-s.prevPanesSize-s.nextPanesSize,null):e>100-s.nextPanesSize-this.panes[n[1]].min&&(n[1]=this.findNextExpandedPane(t).index,s.nextReachedMinPanes=0,n[1]>t+1&&this.panes.forEach((r,i)=>{i>t&&i<n[1]&&(r.size=r.min,s.nextReachedMinPanes+=r.min)}),s.nextPanesSize=this.sumNextPanesSize(n[1]-1),n[1]===void 0)?(s.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((r,i)=>{i<this.panesCount-1&&i>=t+1&&(r.size=r.min,s.nextReachedMinPanes+=r.min)}),this.panes[n[0]].size=100-s.prevPanesSize-s.nextReachedMinPanes-this.panes[this.panesCount-1].min-s.nextPanesSize,null):{sums:s,panesToResize:n}},sumPrevPanesSize(s){return this.panes.reduce((e,t,n)=>e+(n<s?t.size:0),0)},sumNextPanesSize(s){return this.panes.reduce((e,t,n)=>e+(n>s+1?t.size:0),0)},findPrevExpandedPane(s){return[...this.panes].reverse().find(e=>e.index<s&&e.size>e.min)||{}},findNextExpandedPane(s){return this.panes.find(e=>e.index>s+1&&e.size>e.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(s=>{const e=s.classList.contains("splitpanes__pane"),t=s.classList.contains("splitpanes__splitter");!e&&!t&&(s.parentNode.removeChild(s),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},addSplitter(s,e,t=!1){const n=s-1,r=document.createElement("div");r.classList.add("splitpanes__splitter"),t||(r.onmousedown=i=>this.onMouseDown(i,n),typeof window<"u"&&"ontouchstart"in window&&(r.ontouchstart=i=>this.onMouseDown(i,n)),r.onclick=i=>this.onSplitterClick(i,n+1)),this.dblClickSplitter&&(r.ondblclick=i=>this.onSplitterDblClick(i,n+1)),e.parentNode.insertBefore(r,e)},removeSplitter(s){s.onmousedown=void 0,s.onclick=void 0,s.ondblclick=void 0,s.parentNode.removeChild(s)},redoSplitters(){const s=Array.from(this.container.children);s.forEach(t=>{t.className.includes("splitpanes__splitter")&&this.removeSplitter(t)});let e=0;s.forEach(t=>{t.className.includes("splitpanes__pane")&&(!e&&this.firstSplitter?this.addSplitter(e,t,!0):e&&this.addSplitter(e,t),e++)})},requestUpdate({target:s,...e}){const t=this.indexedPanes[s._.uid];Object.entries(e).forEach(([n,r])=>t[n]=r)},onPaneAdd(s){let e=-1;Array.from(s.$el.parentNode.children).some(r=>(r.className.includes("splitpanes__pane")&&e++,r===s.$el));const t=parseFloat(s.minSize),n=parseFloat(s.maxSize);this.panes.splice(e,0,{id:s._.uid,index:e,min:isNaN(t)?0:t,max:isNaN(n)?100:n,size:s.size===null?null:parseFloat(s.size),givenSize:s.size,update:s.update}),this.panes.forEach((r,i)=>r.index=i),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[e]}),this.$emit("pane-add",{index:e,panes:this.panes.map(r=>({min:r.min,max:r.max,size:r.size}))})})},onPaneRemove(s){const e=this.panes.findIndex(n=>n.id===s._.uid),t=this.panes.splice(e,1)[0];this.panes.forEach((n,r)=>n.index=r),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...t,index:e}}),this.$emit("pane-remove",{removed:t,panes:this.panes.map(n=>({min:n.min,max:n.max,size:n.size}))})})},resetPaneSizes(s={}){!s.addedPane&&!s.removedPane?this.initialPanesSizing():this.panes.some(e=>e.givenSize!==null||e.min||e.max<100)?this.equalizeAfterAddOrRemove(s):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size})))},equalize(){const s=100/this.panesCount;let e=0;const t=[],n=[];this.panes.forEach(r=>{r.size=Math.max(Math.min(s,r.max),r.min),e-=r.size,r.size>=r.max&&t.push(r.id),r.size<=r.min&&n.push(r.id)}),e>.1&&this.readjustSizes(e,t,n)},initialPanesSizing(){let s=100;const e=[],t=[];let n=0;this.panes.forEach(i=>{s-=i.size,i.size!==null&&n++,i.size>=i.max&&e.push(i.id),i.size<=i.min&&t.push(i.id)});let r=100;s>.1&&(this.panes.forEach(i=>{i.size===null&&(i.size=Math.max(Math.min(s/(this.panesCount-n),i.max),i.min)),r-=i.size}),r>.1&&this.readjustSizes(s,e,t))},equalizeAfterAddOrRemove({addedPane:s,removedPane:e}={}){let t=100/this.panesCount,n=0;const r=[],i=[];s&&s.givenSize!==null&&(t=(100-s.givenSize)/(this.panesCount-1)),this.panes.forEach(o=>{n-=o.size,o.size>=o.max&&r.push(o.id),o.size<=o.min&&i.push(o.id)}),!(Math.abs(n)<.1)&&(this.panes.forEach(o=>{s&&s.givenSize!==null&&s.id===o.id||(o.size=Math.max(Math.min(t,o.max),o.min)),n-=o.size,o.size>=o.max&&r.push(o.id),o.size<=o.min&&i.push(o.id)}),n>.1&&this.readjustSizes(n,r,i))},readjustSizes(s,e,t){let n;s>0?n=s/(this.panesCount-e.length):n=s/(this.panesCount-t.length),this.panes.forEach((r,i)=>{if(s>0&&!e.includes(r.id)){const o=Math.max(Math.min(r.size+n,r.max),r.min),a=o-r.size;s-=a,r.size=o}else if(!t.includes(r.id)){const o=Math.max(Math.min(r.size+n,r.max),r.min),a=o-r.size;s-=a,r.size=o}r.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[r.id].size}%`})}),Math.abs(s)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(s){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((e,t)=>{e.ondblclick=s?n=>this.onSplitterDblClick(n,t):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return xt("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},$d=(s,e)=>{const t=s.__vccOpts||s;for(const[n,r]of e)t[n]=r;return t},Hd={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(s){this.style=s}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(s){this.requestUpdate({target:this,size:s})},minSizeNumber(s){this.requestUpdate({target:this,min:s})},maxSizeNumber(s){this.requestUpdate({target:this,max:s})}}};function Gd(s,e,t,n,r,i){return Se(),Ee("div",{class:"splitpanes__pane",onClick:e[0]||(e[0]=o=>i.onPaneClick(o,s._.uid)),style:bn(s.style)},[zl(s.$slots,"default")],4)}const Kd=$d(Hd,[["render",Gd]]);const Wd=wt({name:"GalsWeb",components:{BarraSuperior:mh,AreaCodigo:va,Splitpanes:Ud,Pane:Kd,SimuladorJanela:Yh,BarraEsquerda:Od,ModalNovoArquivo:Bd},setup(){const s=on();return{layout:St(()=>s.layout)}},methods:{resizeLayout(s){this.layout.token=s[0].size,this.layout.simulacao=s[1].size,this.layout.saidaSimulacao=s[2].size}}});const Vd={class:"contentor__geral"},qd={class:"contentor__esquerda"},Zd={class:"contentor__centro"},Yd={class:"contentor__centro__superior"},Xd={class:"contentor__centro__inferior"};function Jd(s,e,t,n,r,i){const o=at("ModalNovoArquivo"),a=at("BarraSuperior"),l=at("BarraEsquerda"),u=at("AreaCodigo"),f=at("pane"),h=at("SimuladorJanela"),m=at("splitpanes");return Se(),Ee(qe,null,[me(o),me(a),te("div",Vd,[te("div",qd,[me(l)]),te("div",Zd,[te("div",Yd,[me(m,{horizontal:"",id:"splitpanesHorizontal",onResize:e[1]||(e[1]=d=>s.layout.gramatica=d[1].size)},{default:Rt(()=>[me(f,{size:100-s.layout.gramatica},{default:Rt(()=>[me(m,{vertival:"",onResize:e[0]||(e[0]=d=>s.resizeLayout(d))},{default:Rt(()=>[me(f,{size:s.layout.token},{default:Rt(()=>[me(u,{titulo:"Tokens"})]),_:1},8,["size"]),me(f,{size:s.layout.simulacao},{default:Rt(()=>[me(u,{titulo:"Simulação"})]),_:1},8,["size"]),me(f,{size:s.layout.saidaSimulacao},{default:Rt(()=>[me(h)]),_:1},8,["size"])]),_:1})]),_:1},8,["size"]),me(f,{size:s.layout.gramatica},{default:Rt(()=>[me(u,{titulo:"Gramática"})]),_:1},8,["size"])]),_:1})]),te("div",Xd,[me(u,{titulo:"Saída"})])])])],64)}const Qd=Wt(Wd,[["render",Jd]]),Aa=su(Qd);Aa.use(au());Aa.mount("#app");export{Cr as g};
