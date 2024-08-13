var Zo=Object.defineProperty;var Vo=(s,e,t)=>e in s?Zo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var R=(s,e,t)=>(Vo(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function rr(s,e){const t=Object.create(null),n=s.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Pe={},on=[],lt=()=>{},Yo=()=>!1,Xo=/^on[^a-z]/,hs=s=>Xo.test(s),ir=s=>s.startsWith("onUpdate:"),Ge=Object.assign,or=(s,e)=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)},Jo=Object.prototype.hasOwnProperty,Ee=(s,e)=>Jo.call(s,e),ce=Array.isArray,an=s=>ds(s)==="[object Map]",wi=s=>ds(s)==="[object Set]",fe=s=>typeof s=="function",$e=s=>typeof s=="string",ar=s=>typeof s=="symbol",ze=s=>s!==null&&typeof s=="object",ki=s=>ze(s)&&fe(s.then)&&fe(s.catch),Ai=Object.prototype.toString,ds=s=>Ai.call(s),Qo=s=>ds(s).slice(8,-1),Ci=s=>ds(s)==="[object Object]",lr=s=>$e(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Yn=rr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fs=s=>{const e=Object.create(null);return t=>e[t]||(e[t]=s(t))},ea=/-(\w)/g,gt=fs(s=>s.replace(ea,(e,t)=>t?t.toUpperCase():"")),ta=/\B([A-Z])/g,fn=fs(s=>s.replace(ta,"-$1").toLowerCase()),ps=fs(s=>s.charAt(0).toUpperCase()+s.slice(1)),Rs=fs(s=>s?`on${ps(s)}`:""),Nn=(s,e)=>!Object.is(s,e),Xn=(s,e)=>{for(let t=0;t<s.length;t++)s[t](e)},ts=(s,e,t)=>{Object.defineProperty(s,e,{configurable:!0,enumerable:!1,value:t})},Bs=s=>{const e=parseFloat(s);return isNaN(e)?s:e};let Or;const js=()=>Or||(Or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pn(s){if(ce(s)){const e={};for(let t=0;t<s.length;t++){const n=s[t],r=$e(n)?ia(n):pn(n);if(r)for(const i in r)e[i]=r[i]}return e}else{if($e(s))return s;if(ze(s))return s}}const na=/;(?![^(]*\))/g,sa=/:([^]+)/,ra=/\/\*[^]*?\*\//g;function ia(s){const e={};return s.replace(ra,"").split(na).forEach(t=>{if(t){const n=t.split(sa);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Tt(s){let e="";if($e(s))e=s;else if(ce(s))for(let t=0;t<s.length;t++){const n=Tt(s[t]);n&&(e+=n+" ")}else if(ze(s))for(const t in s)s[t]&&(e+=t+" ");return e.trim()}const oa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aa=rr(oa);function xi(s){return!!s||s===""}const St=s=>$e(s)?s:s==null?"":ce(s)||ze(s)&&(s.toString===Ai||!fe(s.toString))?JSON.stringify(s,Ri,2):String(s),Ri=(s,e)=>e&&e.__v_isRef?Ri(s,e.value):an(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:wi(e)?{[`Set(${e.size})`]:[...e.values()]}:ze(e)&&!ce(e)&&!Ci(e)?String(e):e;let nt;class Ni{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=nt;try{return nt=this,e()}finally{nt=t}}}on(){nt=this}off(){nt=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ii(s){return new Ni(s)}function la(s,e=nt){e&&e.active&&e.effects.push(s)}function Li(){return nt}function ca(s){nt&&nt.cleanups.push(s)}const cr=s=>{const e=new Set(s);return e.w=0,e.n=0,e},Oi=s=>(s.w&Mt)>0,Pi=s=>(s.n&Mt)>0,ua=({deps:s})=>{if(s.length)for(let e=0;e<s.length;e++)s[e].w|=Mt},ha=s=>{const{deps:e}=s;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Oi(r)&&!Pi(r)?r.delete(s):e[t++]=r,r.w&=~Mt,r.n&=~Mt}e.length=t}},ns=new WeakMap;let vn=0,Mt=1;const Us=30;let it;const Vt=Symbol(""),$s=Symbol("");class ur{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,la(this,n)}run(){if(!this.active)return this.fn();let e=it,t=Ot;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=it,it=this,Ot=!0,Mt=1<<++vn,vn<=Us?ua(this):Pr(this),this.fn()}finally{vn<=Us&&ha(this),Mt=1<<--vn,it=this.parent,Ot=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(Pr(this),this.onStop&&this.onStop(),this.active=!1)}}function Pr(s){const{deps:e}=s;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(s);e.length=0}}let Ot=!0;const Fi=[];function mn(){Fi.push(Ot),Ot=!1}function gn(){const s=Fi.pop();Ot=s===void 0?!0:s}function tt(s,e,t){if(Ot&&it){let n=ns.get(s);n||ns.set(s,n=new Map);let r=n.get(t);r||n.set(t,r=cr()),Di(r)}}function Di(s,e){let t=!1;vn<=Us?Pi(s)||(s.n|=Mt,t=!Oi(s)):t=!s.has(it),t&&(s.add(it),it.deps.push(s))}function yt(s,e,t,n,r,i){const o=ns.get(s);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ce(s)){const l=Number(n);o.forEach((c,p)=>{(p==="length"||p>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ce(s)?lr(t)&&a.push(o.get("length")):(a.push(o.get(Vt)),an(s)&&a.push(o.get($s)));break;case"delete":ce(s)||(a.push(o.get(Vt)),an(s)&&a.push(o.get($s)));break;case"set":an(s)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&Hs(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Hs(cr(l))}}function Hs(s,e){const t=ce(s)?s:[...s];for(const n of t)n.computed&&Fr(n);for(const n of t)n.computed||Fr(n)}function Fr(s,e){(s!==it||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}function da(s,e){var t;return(t=ns.get(s))==null?void 0:t.get(e)}const fa=rr("__proto__,__v_isRef,__isVue"),zi=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(ar)),pa=hr(),ma=hr(!1,!0),ga=hr(!0),Dr=_a();function _a(){const s={};return["includes","indexOf","lastIndexOf"].forEach(e=>{s[e]=function(...t){const n=we(this);for(let i=0,o=this.length;i<o;i++)tt(n,"get",i+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(we)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{s[e]=function(...t){mn();const n=we(this)[e].apply(this,t);return gn(),n}}),s}function ba(s){const e=we(this);return tt(e,"has",s),e.hasOwnProperty(s)}function hr(s=!1,e=!1){return function(n,r,i){if(r==="__v_isReactive")return!s;if(r==="__v_isReadonly")return s;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(s?e?Pa:$i:e?Ui:ji).get(n))return n;const o=ce(n);if(!s){if(o&&Ee(Dr,r))return Reflect.get(Dr,r,i);if(r==="hasOwnProperty")return ba}const a=Reflect.get(n,r,i);return(ar(r)?zi.has(r):fa(r))||(s||tt(n,"get",r),e)?a:Be(a)?o&&lr(r)?a:a.value:ze(a)?s?Hi(a):gs(a):a}}const Ta=Mi(),Sa=Mi(!0);function Mi(s=!1){return function(t,n,r,i){let o=t[n];if(cn(o)&&Be(o)&&!Be(r))return!1;if(!s&&(!ss(r)&&!cn(r)&&(o=we(o),r=we(r)),!ce(t)&&Be(o)&&!Be(r)))return o.value=r,!0;const a=ce(t)&&lr(n)?Number(n)<t.length:Ee(t,n),l=Reflect.set(t,n,r,i);return t===we(i)&&(a?Nn(r,o)&&yt(t,"set",n,r):yt(t,"add",n,r)),l}}function va(s,e){const t=Ee(s,e);s[e];const n=Reflect.deleteProperty(s,e);return n&&t&&yt(s,"delete",e,void 0),n}function ya(s,e){const t=Reflect.has(s,e);return(!ar(e)||!zi.has(e))&&tt(s,"has",e),t}function Ea(s){return tt(s,"iterate",ce(s)?"length":Vt),Reflect.ownKeys(s)}const Bi={get:pa,set:Ta,deleteProperty:va,has:ya,ownKeys:Ea},wa={get:ga,set(s,e){return!0},deleteProperty(s,e){return!0}},ka=Ge({},Bi,{get:ma,set:Sa}),dr=s=>s,ms=s=>Reflect.getPrototypeOf(s);function Un(s,e,t=!1,n=!1){s=s.__v_raw;const r=we(s),i=we(e);t||(e!==i&&tt(r,"get",e),tt(r,"get",i));const{has:o}=ms(r),a=n?dr:t?mr:In;if(o.call(r,e))return a(s.get(e));if(o.call(r,i))return a(s.get(i));s!==r&&s.get(e)}function $n(s,e=!1){const t=this.__v_raw,n=we(t),r=we(s);return e||(s!==r&&tt(n,"has",s),tt(n,"has",r)),s===r?t.has(s):t.has(s)||t.has(r)}function Hn(s,e=!1){return s=s.__v_raw,!e&&tt(we(s),"iterate",Vt),Reflect.get(s,"size",s)}function zr(s){s=we(s);const e=we(this);return ms(e).has.call(e,s)||(e.add(s),yt(e,"add",s,s)),this}function Mr(s,e){e=we(e);const t=we(this),{has:n,get:r}=ms(t);let i=n.call(t,s);i||(s=we(s),i=n.call(t,s));const o=r.call(t,s);return t.set(s,e),i?Nn(e,o)&&yt(t,"set",s,e):yt(t,"add",s,e),this}function Br(s){const e=we(this),{has:t,get:n}=ms(e);let r=t.call(e,s);r||(s=we(s),r=t.call(e,s)),n&&n.call(e,s);const i=e.delete(s);return r&&yt(e,"delete",s,void 0),i}function jr(){const s=we(this),e=s.size!==0,t=s.clear();return e&&yt(s,"clear",void 0,void 0),t}function Kn(s,e){return function(n,r){const i=this,o=i.__v_raw,a=we(o),l=e?dr:s?mr:In;return!s&&tt(a,"iterate",Vt),o.forEach((c,p)=>n.call(r,l(c),l(p),i))}}function Gn(s,e,t){return function(...n){const r=this.__v_raw,i=we(r),o=an(i),a=s==="entries"||s===Symbol.iterator&&o,l=s==="keys"&&o,c=r[s](...n),p=t?dr:e?mr:In;return!e&&tt(i,"iterate",l?$s:Vt),{next(){const{value:h,done:m}=c.next();return m?{value:h,done:m}:{value:a?[p(h[0]),p(h[1])]:p(h),done:m}},[Symbol.iterator](){return this}}}}function At(s){return function(...e){return s==="delete"?!1:this}}function Aa(){const s={get(i){return Un(this,i)},get size(){return Hn(this)},has:$n,add:zr,set:Mr,delete:Br,clear:jr,forEach:Kn(!1,!1)},e={get(i){return Un(this,i,!1,!0)},get size(){return Hn(this)},has:$n,add:zr,set:Mr,delete:Br,clear:jr,forEach:Kn(!1,!0)},t={get(i){return Un(this,i,!0)},get size(){return Hn(this,!0)},has(i){return $n.call(this,i,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Kn(!0,!1)},n={get(i){return Un(this,i,!0,!0)},get size(){return Hn(this,!0)},has(i){return $n.call(this,i,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=Gn(i,!1,!1),t[i]=Gn(i,!0,!1),e[i]=Gn(i,!1,!0),n[i]=Gn(i,!0,!0)}),[s,t,e,n]}const[Ca,xa,Ra,Na]=Aa();function fr(s,e){const t=e?s?Na:Ra:s?xa:Ca;return(n,r,i)=>r==="__v_isReactive"?!s:r==="__v_isReadonly"?s:r==="__v_raw"?n:Reflect.get(Ee(t,r)&&r in n?t:n,r,i)}const Ia={get:fr(!1,!1)},La={get:fr(!1,!0)},Oa={get:fr(!0,!1)},ji=new WeakMap,Ui=new WeakMap,$i=new WeakMap,Pa=new WeakMap;function Fa(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Da(s){return s.__v_skip||!Object.isExtensible(s)?0:Fa(Qo(s))}function gs(s){return cn(s)?s:pr(s,!1,Bi,Ia,ji)}function za(s){return pr(s,!1,ka,La,Ui)}function Hi(s){return pr(s,!0,wa,Oa,$i)}function pr(s,e,t,n,r){if(!ze(s)||s.__v_raw&&!(e&&s.__v_isReactive))return s;const i=r.get(s);if(i)return i;const o=Da(s);if(o===0)return s;const a=new Proxy(s,o===2?n:t);return r.set(s,a),a}function Pt(s){return cn(s)?Pt(s.__v_raw):!!(s&&s.__v_isReactive)}function cn(s){return!!(s&&s.__v_isReadonly)}function ss(s){return!!(s&&s.__v_isShallow)}function Ki(s){return Pt(s)||cn(s)}function we(s){const e=s&&s.__v_raw;return e?we(e):s}function _s(s){return ts(s,"__v_skip",!0),s}const In=s=>ze(s)?gs(s):s,mr=s=>ze(s)?Hi(s):s;function Gi(s){Ot&&it&&(s=we(s),Di(s.dep||(s.dep=cr())))}function Wi(s,e){s=we(s);const t=s.dep;t&&Hs(t)}function Be(s){return!!(s&&s.__v_isRef===!0)}function qi(s){return Ma(s,!1)}function Ma(s,e){return Be(s)?s:new Ba(s,e)}class Ba{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:we(e),this._value=t?e:In(e)}get value(){return Gi(this),this._value}set value(e){const t=this.__v_isShallow||ss(e)||cn(e);e=t?e:we(e),Nn(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:In(e),Wi(this))}}function ja(s){return Be(s)?s.value:s}const Ua={get:(s,e,t)=>ja(Reflect.get(s,e,t)),set:(s,e,t,n)=>{const r=s[e];return Be(r)&&!Be(t)?(r.value=t,!0):Reflect.set(s,e,t,n)}};function Zi(s){return Pt(s)?s:new Proxy(s,Ua)}function $a(s){const e=ce(s)?new Array(s.length):{};for(const t in s)e[t]=Ka(s,t);return e}class Ha{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return da(we(this._object),this._key)}}function Ka(s,e,t){const n=s[e];return Be(n)?n:new Ha(s,e,t)}class Ga{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ur(e,()=>{this._dirty||(this._dirty=!0,Wi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=we(this);return Gi(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Wa(s,e,t=!1){let n,r;const i=fe(s);return i?(n=s,r=lt):(n=s.get,r=s.set),new Ga(n,r,i||!r,t)}function Ft(s,e,t,n){let r;try{r=n?s(...n):s()}catch(i){bs(i,e,t)}return r}function ct(s,e,t,n){if(fe(s)){const i=Ft(s,e,t,n);return i&&ki(i)&&i.catch(o=>{bs(o,e,t)}),i}const r=[];for(let i=0;i<s.length;i++)r.push(ct(s[i],e,t,n));return r}function bs(s,e,t,n=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=t;for(;i;){const c=i.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](s,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ft(l,null,10,[s,o,a]);return}}qa(s,t,r,n)}function qa(s,e,t,n=!0){console.error(s)}let Ln=!1,Ks=!1;const Xe=[];let pt=0;const ln=[];let bt=null,Wt=0;const Vi=Promise.resolve();let gr=null;function Yi(s){const e=gr||Vi;return s?e.then(this?s.bind(this):s):e}function Za(s){let e=pt+1,t=Xe.length;for(;e<t;){const n=e+t>>>1;On(Xe[n])<s?e=n+1:t=n}return e}function _r(s){(!Xe.length||!Xe.includes(s,Ln&&s.allowRecurse?pt+1:pt))&&(s.id==null?Xe.push(s):Xe.splice(Za(s.id),0,s),Xi())}function Xi(){!Ln&&!Ks&&(Ks=!0,gr=Vi.then(Qi))}function Va(s){const e=Xe.indexOf(s);e>pt&&Xe.splice(e,1)}function Ya(s){ce(s)?ln.push(...s):(!bt||!bt.includes(s,s.allowRecurse?Wt+1:Wt))&&ln.push(s),Xi()}function Ur(s,e=Ln?pt+1:0){for(;e<Xe.length;e++){const t=Xe[e];t&&t.pre&&(Xe.splice(e,1),e--,t())}}function Ji(s){if(ln.length){const e=[...new Set(ln)];if(ln.length=0,bt){bt.push(...e);return}for(bt=e,bt.sort((t,n)=>On(t)-On(n)),Wt=0;Wt<bt.length;Wt++)bt[Wt]();bt=null,Wt=0}}const On=s=>s.id==null?1/0:s.id,Xa=(s,e)=>{const t=On(s)-On(e);if(t===0){if(s.pre&&!e.pre)return-1;if(e.pre&&!s.pre)return 1}return t};function Qi(s){Ks=!1,Ln=!0,Xe.sort(Xa);const e=lt;try{for(pt=0;pt<Xe.length;pt++){const t=Xe[pt];t&&t.active!==!1&&Ft(t,null,14)}}finally{pt=0,Xe.length=0,Ji(),Ln=!1,gr=null,(Xe.length||ln.length)&&Qi()}}function Ja(s,e,...t){if(s.isUnmounted)return;const n=s.vnode.props||Pe;let r=t;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in n){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:m}=n[p]||Pe;m&&(r=t.map(d=>$e(d)?d.trim():d)),h&&(r=t.map(Bs))}let a,l=n[a=Rs(e)]||n[a=Rs(gt(e))];!l&&i&&(l=n[a=Rs(fn(e))]),l&&ct(l,s,6,r);const c=n[a+"Once"];if(c){if(!s.emitted)s.emitted={};else if(s.emitted[a])return;s.emitted[a]=!0,ct(c,s,6,r)}}function eo(s,e,t=!1){const n=e.emitsCache,r=n.get(s);if(r!==void 0)return r;const i=s.emits;let o={},a=!1;if(!fe(s)){const l=c=>{const p=eo(c,e,!0);p&&(a=!0,Ge(o,p))};!t&&e.mixins.length&&e.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!i&&!a?(ze(s)&&n.set(s,null),null):(ce(i)?i.forEach(l=>o[l]=null):Ge(o,i),ze(s)&&n.set(s,o),o)}function Ts(s,e){return!s||!hs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(s,e[0].toLowerCase()+e.slice(1))||Ee(s,fn(e))||Ee(s,e))}let Ve=null,Ss=null;function rs(s){const e=Ve;return Ve=s,Ss=s&&s.type.__scopeId||null,e}function vs(s){Ss=s}function ys(){Ss=null}function xt(s,e=Ve,t){if(!e||s._n)return s;const n=(...r)=>{n._d&&Jr(-1);const i=rs(e);let o;try{o=s(...r)}finally{rs(i),n._d&&Jr(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ns(s){const{type:e,vnode:t,proxy:n,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:p,renderCache:h,data:m,setupState:d,ctx:T,inheritAttrs:f}=s;let S,b;const g=rs(s);try{if(t.shapeFlag&4){const w=r||n;S=dt(p.call(w,w,h,i,d,m,T)),b=l}else{const w=e;S=dt(w.length>1?w(i,{attrs:l,slots:a,emit:c}):w(i,null)),b=e.props?l:Qa(l)}}catch(w){Cn.length=0,bs(w,s,1),S=ge(Bt)}let v=S;if(b&&f!==!1){const w=Object.keys(b),{shapeFlag:k}=v;w.length&&k&7&&(o&&w.some(ir)&&(b=el(b,o)),v=un(v,b))}return t.dirs&&(v=un(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),S=v,rs(g),S}const Qa=s=>{let e;for(const t in s)(t==="class"||t==="style"||hs(t))&&((e||(e={}))[t]=s[t]);return e},el=(s,e)=>{const t={};for(const n in s)(!ir(n)||!(n.slice(9)in e))&&(t[n]=s[n]);return t};function tl(s,e,t){const{props:n,children:r,component:i}=s,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?$r(n,o,c):!!o;if(l&8){const p=e.dynamicProps;for(let h=0;h<p.length;h++){const m=p[h];if(o[m]!==n[m]&&!Ts(c,m))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?$r(n,o,c):!0:!!o;return!1}function $r(s,e,t){const n=Object.keys(e);if(n.length!==Object.keys(s).length)return!0;for(let r=0;r<n.length;r++){const i=n[r];if(e[i]!==s[i]&&!Ts(t,i))return!0}return!1}function nl({vnode:s,parent:e},t){for(;e&&e.subTree===s;)(s=e.vnode).el=t,e=e.parent}const sl=s=>s.__isSuspense;function rl(s,e){e&&e.pendingBranch?ce(s)?e.effects.push(...s):e.effects.push(s):Ya(s)}const Wn={};function Jn(s,e,t){return to(s,e,t)}function to(s,e,{immediate:t,deep:n,flush:r,onTrack:i,onTrigger:o}=Pe){var a;const l=Li()===((a=Ke)==null?void 0:a.scope)?Ke:null;let c,p=!1,h=!1;if(Be(s)?(c=()=>s.value,p=ss(s)):Pt(s)?(c=()=>s,n=!0):ce(s)?(h=!0,p=s.some(w=>Pt(w)||ss(w)),c=()=>s.map(w=>{if(Be(w))return w.value;if(Pt(w))return Zt(w);if(fe(w))return Ft(w,l,2)})):fe(s)?e?c=()=>Ft(s,l,2):c=()=>{if(!(l&&l.isUnmounted))return m&&m(),ct(s,l,3,[d])}:c=lt,e&&n){const w=c;c=()=>Zt(w())}let m,d=w=>{m=g.onStop=()=>{Ft(w,l,4)}},T;if(zn)if(d=lt,e?t&&ct(e,l,3,[c(),h?[]:void 0,d]):c(),r==="sync"){const w=ec();T=w.__watcherHandles||(w.__watcherHandles=[])}else return lt;let f=h?new Array(s.length).fill(Wn):Wn;const S=()=>{if(g.active)if(e){const w=g.run();(n||p||(h?w.some((k,O)=>Nn(k,f[O])):Nn(w,f)))&&(m&&m(),ct(e,l,3,[w,f===Wn?void 0:h&&f[0]===Wn?[]:f,d]),f=w)}else g.run()};S.allowRecurse=!!e;let b;r==="sync"?b=S:r==="post"?b=()=>et(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),b=()=>_r(S));const g=new ur(c,b);e?t?S():f=g.run():r==="post"?et(g.run.bind(g),l&&l.suspense):g.run();const v=()=>{g.stop(),l&&l.scope&&or(l.scope.effects,g)};return T&&T.push(v),v}function il(s,e,t){const n=this.proxy,r=$e(s)?s.includes(".")?no(n,s):()=>n[s]:s.bind(n,n);let i;fe(e)?i=e:(i=e.handler,t=e);const o=Ke;hn(this);const a=to(r,i.bind(n),t);return o?hn(o):Yt(),a}function no(s,e){const t=e.split(".");return()=>{let n=s;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Zt(s,e){if(!ze(s)||s.__v_skip||(e=e||new Set,e.has(s)))return s;if(e.add(s),Be(s))Zt(s.value,e);else if(ce(s))for(let t=0;t<s.length;t++)Zt(s[t],e);else if(wi(s)||an(s))s.forEach(t=>{Zt(t,e)});else if(Ci(s))for(const t in s)Zt(s[t],e);return s}function En(s,e){const t=Ve;if(t===null)return s;const n=As(t)||t.proxy,r=s.dirs||(s.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Pe]=e[i];o&&(fe(o)&&(o={mounted:o,updated:o}),o.deep&&Zt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return s}function Kt(s,e,t,n){const r=s.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[n];l&&(mn(),ct(l,t,8,[s.el,a,s,e]),gn())}}function Et(s,e){return fe(s)?(()=>Ge({name:s.name},e,{setup:s}))():s}const wn=s=>!!s.type.__asyncLoader,so=s=>s.type.__isKeepAlive;function ol(s,e){ro(s,"a",e)}function al(s,e){ro(s,"da",e)}function ro(s,e,t=Ke){const n=s.__wdc||(s.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return s()});if(Es(e,n,t),t){let r=t.parent;for(;r&&r.parent;)so(r.parent.vnode)&&ll(n,e,t,r),r=r.parent}}function ll(s,e,t,n){const r=Es(e,s,n,!0);io(()=>{or(n[e],r)},t)}function Es(s,e,t=Ke,n=!1){if(t){const r=t[s]||(t[s]=[]),i=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;mn(),hn(t);const a=ct(e,t,s,o);return Yt(),gn(),a});return n?r.unshift(i):r.push(i),i}}const wt=s=>(e,t=Ke)=>(!zn||s==="sp")&&Es(s,(...n)=>e(...n),t),cl=wt("bm"),ul=wt("m"),hl=wt("bu"),dl=wt("u"),fl=wt("bum"),io=wt("um"),pl=wt("sp"),ml=wt("rtg"),gl=wt("rtc");function _l(s,e=Ke){Es("ec",s,e)}const oo="components";function rt(s,e){return Tl(oo,s,!0,e)||s}const bl=Symbol.for("v-ndc");function Tl(s,e,t=!0,n=!1){const r=Ve||Ke;if(r){const i=r.type;if(s===oo){const a=Xl(i,!1);if(a&&(a===e||a===gt(e)||a===ps(gt(e))))return i}const o=Hr(r[s]||i[s],e)||Hr(r.appContext[s],e);return!o&&n?i:o}}function Hr(s,e){return s&&(s[e]||s[gt(e)]||s[ps(gt(e))])}function br(s,e,t,n){let r;const i=t&&t[n];if(ce(s)||$e(s)){r=new Array(s.length);for(let o=0,a=s.length;o<a;o++)r[o]=e(s[o],o,void 0,i&&i[o])}else if(typeof s=="number"){r=new Array(s);for(let o=0;o<s;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ze(s))if(s[Symbol.iterator])r=Array.from(s,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(s);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(s[c],c,a,i&&i[a])}}else r=[];return t&&(t[n]=r),r}function Sl(s,e,t={},n,r){if(Ve.isCE||Ve.parent&&wn(Ve.parent)&&Ve.parent.isCE)return e!=="default"&&(t.name=e),ge("slot",t,n&&n());let i=s[e];i&&i._c&&(i._d=!1),Se();const o=i&&ao(i(t)),a=vr(Ye,{key:t.key||o&&o.key||`_${e}`},o||(n?n():[]),o&&s._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ao(s){return s.some(e=>os(e)?!(e.type===Bt||e.type===Ye&&!ao(e.children)):!0)?s:null}const Gs=s=>s?So(s)?As(s)||s.proxy:Gs(s.parent):null,kn=Ge(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Gs(s.parent),$root:s=>Gs(s.root),$emit:s=>s.emit,$options:s=>Tr(s),$forceUpdate:s=>s.f||(s.f=()=>_r(s.update)),$nextTick:s=>s.n||(s.n=Yi.bind(s.proxy)),$watch:s=>il.bind(s)}),Is=(s,e)=>s!==Pe&&!s.__isScriptSetup&&Ee(s,e),vl={get({_:s},e){const{ctx:t,setupState:n,data:r,props:i,accessCache:o,type:a,appContext:l}=s;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(Is(n,e))return o[e]=1,n[e];if(r!==Pe&&Ee(r,e))return o[e]=2,r[e];if((c=s.propsOptions[0])&&Ee(c,e))return o[e]=3,i[e];if(t!==Pe&&Ee(t,e))return o[e]=4,t[e];Ws&&(o[e]=0)}}const p=kn[e];let h,m;if(p)return e==="$attrs"&&tt(s,"get",e),p(s);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Pe&&Ee(t,e))return o[e]=4,t[e];if(m=l.config.globalProperties,Ee(m,e))return m[e]},set({_:s},e,t){const{data:n,setupState:r,ctx:i}=s;return Is(r,e)?(r[e]=t,!0):n!==Pe&&Ee(n,e)?(n[e]=t,!0):Ee(s.props,e)||e[0]==="$"&&e.slice(1)in s?!1:(i[e]=t,!0)},has({_:{data:s,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:i}},o){let a;return!!t[o]||s!==Pe&&Ee(s,o)||Is(e,o)||(a=i[0])&&Ee(a,o)||Ee(n,o)||Ee(kn,o)||Ee(r.config.globalProperties,o)},defineProperty(s,e,t){return t.get!=null?s._.accessCache[e]=0:Ee(t,"value")&&this.set(s,e,t.value,null),Reflect.defineProperty(s,e,t)}};function Kr(s){return ce(s)?s.reduce((e,t)=>(e[t]=null,e),{}):s}let Ws=!0;function yl(s){const e=Tr(s),t=s.proxy,n=s.ctx;Ws=!1,e.beforeCreate&&Gr(e.beforeCreate,s,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:p,beforeMount:h,mounted:m,beforeUpdate:d,updated:T,activated:f,deactivated:S,beforeDestroy:b,beforeUnmount:g,destroyed:v,unmounted:w,render:k,renderTracked:O,renderTriggered:F,errorCaptured:B,serverPrefetch:I,expose:H,inheritAttrs:X,components:x,directives:K,filters:_}=e;if(c&&El(c,n,null),o)for(const Z in o){const te=o[Z];fe(te)&&(n[Z]=te.bind(t))}if(r){const Z=r.call(t,t);ze(Z)&&(s.data=gs(Z))}if(Ws=!0,i)for(const Z in i){const te=i[Z],V=fe(te)?te.bind(t,t):fe(te.get)?te.get.bind(t,t):lt,oe=!fe(te)&&fe(te.set)?te.set.bind(t):lt,U=_t({get:V,set:oe});Object.defineProperty(n,Z,{enumerable:!0,configurable:!0,get:()=>U.value,set:j=>U.value=j})}if(a)for(const Z in a)lo(a[Z],n,t,Z);if(l){const Z=fe(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(te=>{Rl(te,Z[te])})}p&&Gr(p,s,"c");function re(Z,te){ce(te)?te.forEach(V=>Z(V.bind(t))):te&&Z(te.bind(t))}if(re(cl,h),re(ul,m),re(hl,d),re(dl,T),re(ol,f),re(al,S),re(_l,B),re(gl,O),re(ml,F),re(fl,g),re(io,w),re(pl,I),ce(H))if(H.length){const Z=s.exposed||(s.exposed={});H.forEach(te=>{Object.defineProperty(Z,te,{get:()=>t[te],set:V=>t[te]=V})})}else s.exposed||(s.exposed={});k&&s.render===lt&&(s.render=k),X!=null&&(s.inheritAttrs=X),x&&(s.components=x),K&&(s.directives=K)}function El(s,e,t=lt){ce(s)&&(s=qs(s));for(const n in s){const r=s[n];let i;ze(r)?"default"in r?i=An(r.from||n,r.default,!0):i=An(r.from||n):i=An(r),Be(i)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[n]=i}}function Gr(s,e,t){ct(ce(s)?s.map(n=>n.bind(e.proxy)):s.bind(e.proxy),e,t)}function lo(s,e,t,n){const r=n.includes(".")?no(t,n):()=>t[n];if($e(s)){const i=e[s];fe(i)&&Jn(r,i)}else if(fe(s))Jn(r,s.bind(t));else if(ze(s))if(ce(s))s.forEach(i=>lo(i,e,t,n));else{const i=fe(s.handler)?s.handler.bind(t):e[s.handler];fe(i)&&Jn(r,i,s)}}function Tr(s){const e=s.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=s.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>is(l,c,o,!0)),is(l,e,o)),ze(e)&&i.set(e,l),l}function is(s,e,t,n=!1){const{mixins:r,extends:i}=e;i&&is(s,i,t,!0),r&&r.forEach(o=>is(s,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=wl[o]||t&&t[o];s[o]=a?a(s[o],e[o]):e[o]}return s}const wl={data:Wr,props:qr,emits:qr,methods:yn,computed:yn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:yn,directives:yn,watch:Al,provide:Wr,inject:kl};function Wr(s,e){return e?s?function(){return Ge(fe(s)?s.call(this,this):s,fe(e)?e.call(this,this):e)}:e:s}function kl(s,e){return yn(qs(s),qs(e))}function qs(s){if(ce(s)){const e={};for(let t=0;t<s.length;t++)e[s[t]]=s[t];return e}return s}function Qe(s,e){return s?[...new Set([].concat(s,e))]:e}function yn(s,e){return s?Ge(Object.create(null),s,e):e}function qr(s,e){return s?ce(s)&&ce(e)?[...new Set([...s,...e])]:Ge(Object.create(null),Kr(s),Kr(e??{})):e}function Al(s,e){if(!s)return e;if(!e)return s;const t=Ge(Object.create(null),s);for(const n in e)t[n]=Qe(s[n],e[n]);return t}function co(){return{app:null,config:{isNativeTag:Yo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cl=0;function xl(s,e){return function(n,r=null){fe(n)||(n=Ge({},n)),r!=null&&!ze(r)&&(r=null);const i=co(),o=new Set;let a=!1;const l=i.app={_uid:Cl++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:tc,get config(){return i.config},set config(c){},use(c,...p){return o.has(c)||(c&&fe(c.install)?(o.add(c),c.install(l,...p)):fe(c)&&(o.add(c),c(l,...p))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,p){return p?(i.components[c]=p,l):i.components[c]},directive(c,p){return p?(i.directives[c]=p,l):i.directives[c]},mount(c,p,h){if(!a){const m=ge(n,r);return m.appContext=i,p&&e?e(m,c):s(m,c,h),a=!0,l._container=c,c.__vue_app__=l,As(m.component)||m.component.proxy}},unmount(){a&&(s(null,l._container),delete l._container.__vue_app__)},provide(c,p){return i.provides[c]=p,l},runWithContext(c){Pn=l;try{return c()}finally{Pn=null}}};return l}}let Pn=null;function Rl(s,e){if(Ke){let t=Ke.provides;const n=Ke.parent&&Ke.parent.provides;n===t&&(t=Ke.provides=Object.create(n)),t[s]=e}}function An(s,e,t=!1){const n=Ke||Ve;if(n||Pn){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Pn._context.provides;if(r&&s in r)return r[s];if(arguments.length>1)return t&&fe(e)?e.call(n&&n.proxy):e}}function Nl(){return!!(Ke||Ve||Pn)}function Il(s,e,t,n=!1){const r={},i={};ts(i,ks,1),s.propsDefaults=Object.create(null),uo(s,e,r,i);for(const o in s.propsOptions[0])o in r||(r[o]=void 0);t?s.props=n?r:za(r):s.type.props?s.props=r:s.props=i,s.attrs=i}function Ll(s,e,t,n){const{props:r,attrs:i,vnode:{patchFlag:o}}=s,a=we(r),[l]=s.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const p=s.vnode.dynamicProps;for(let h=0;h<p.length;h++){let m=p[h];if(Ts(s.emitsOptions,m))continue;const d=e[m];if(l)if(Ee(i,m))d!==i[m]&&(i[m]=d,c=!0);else{const T=gt(m);r[T]=Zs(l,a,T,d,s,!1)}else d!==i[m]&&(i[m]=d,c=!0)}}}else{uo(s,e,r,i)&&(c=!0);let p;for(const h in a)(!e||!Ee(e,h)&&((p=fn(h))===h||!Ee(e,p)))&&(l?t&&(t[h]!==void 0||t[p]!==void 0)&&(r[h]=Zs(l,a,h,void 0,s,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Ee(e,h))&&(delete i[h],c=!0)}c&&yt(s,"set","$attrs")}function uo(s,e,t,n){const[r,i]=s.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yn(l))continue;const c=e[l];let p;r&&Ee(r,p=gt(l))?!i||!i.includes(p)?t[p]=c:(a||(a={}))[p]=c:Ts(s.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(i){const l=we(t),c=a||Pe;for(let p=0;p<i.length;p++){const h=i[p];t[h]=Zs(r,l,h,c[h],s,!Ee(c,h))}}return o}function Zs(s,e,t,n,r,i){const o=s[t];if(o!=null){const a=Ee(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(hn(r),n=c[t]=l.call(null,e),Yt())}else n=l}o[0]&&(i&&!a?n=!1:o[1]&&(n===""||n===fn(t))&&(n=!0))}return n}function ho(s,e,t=!1){const n=e.propsCache,r=n.get(s);if(r)return r;const i=s.props,o={},a=[];let l=!1;if(!fe(s)){const p=h=>{l=!0;const[m,d]=ho(h,e,!0);Ge(o,m),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}if(!i&&!l)return ze(s)&&n.set(s,on),on;if(ce(i))for(let p=0;p<i.length;p++){const h=gt(i[p]);Zr(h)&&(o[h]=Pe)}else if(i)for(const p in i){const h=gt(p);if(Zr(h)){const m=i[p],d=o[h]=ce(m)||fe(m)?{type:m}:Ge({},m);if(d){const T=Xr(Boolean,d.type),f=Xr(String,d.type);d[0]=T>-1,d[1]=f<0||T<f,(T>-1||Ee(d,"default"))&&a.push(h)}}}const c=[o,a];return ze(s)&&n.set(s,c),c}function Zr(s){return s[0]!=="$"}function Vr(s){const e=s&&s.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:s===null?"null":""}function Yr(s,e){return Vr(s)===Vr(e)}function Xr(s,e){return ce(e)?e.findIndex(t=>Yr(t,s)):fe(e)&&Yr(e,s)?0:-1}const fo=s=>s[0]==="_"||s==="$stable",Sr=s=>ce(s)?s.map(dt):[dt(s)],Ol=(s,e,t)=>{if(e._n)return e;const n=xt((...r)=>Sr(e(...r)),t);return n._c=!1,n},po=(s,e,t)=>{const n=s._ctx;for(const r in s){if(fo(r))continue;const i=s[r];if(fe(i))e[r]=Ol(r,i,n);else if(i!=null){const o=Sr(i);e[r]=()=>o}}},mo=(s,e)=>{const t=Sr(e);s.slots.default=()=>t},Pl=(s,e)=>{if(s.vnode.shapeFlag&32){const t=e._;t?(s.slots=we(e),ts(e,"_",t)):po(e,s.slots={})}else s.slots={},e&&mo(s,e);ts(s.slots,ks,1)},Fl=(s,e,t)=>{const{vnode:n,slots:r}=s;let i=!0,o=Pe;if(n.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:(Ge(r,e),!t&&a===1&&delete r._):(i=!e.$stable,po(e,r)),o=e}else e&&(mo(s,e),o={default:1});if(i)for(const a in r)!fo(a)&&!(a in o)&&delete r[a]};function Vs(s,e,t,n,r=!1){if(ce(s)){s.forEach((m,d)=>Vs(m,e&&(ce(e)?e[d]:e),t,n,r));return}if(wn(n)&&!r)return;const i=n.shapeFlag&4?As(n.component)||n.component.proxy:n.el,o=r?null:i,{i:a,r:l}=s,c=e&&e.r,p=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&($e(c)?(p[c]=null,Ee(h,c)&&(h[c]=null)):Be(c)&&(c.value=null)),fe(l))Ft(l,a,12,[o,p]);else{const m=$e(l),d=Be(l);if(m||d){const T=()=>{if(s.f){const f=m?Ee(h,l)?h[l]:p[l]:l.value;r?ce(f)&&or(f,i):ce(f)?f.includes(i)||f.push(i):m?(p[l]=[i],Ee(h,l)&&(h[l]=p[l])):(l.value=[i],s.k&&(p[s.k]=l.value))}else m?(p[l]=o,Ee(h,l)&&(h[l]=o)):d&&(l.value=o,s.k&&(p[s.k]=o))};o?(T.id=-1,et(T,t)):T()}}}const et=rl;function Dl(s){return zl(s)}function zl(s,e){const t=js();t.__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:p,parentNode:h,nextSibling:m,setScopeId:d=lt,insertStaticContent:T}=s,f=(N,D,u,L=null,C=null,E=null,y=!1,A=null,M=!!D.dynamicChildren)=>{if(N===D)return;N&&!Tn(N,D)&&(L=Le(N),j(N,C,E,!0),N=null),D.patchFlag===-2&&(M=!1,D.dynamicChildren=null);const{type:z,ref:P,shapeFlag:$}=D;switch(z){case ws:S(N,D,u,L);break;case Bt:b(N,D,u,L);break;case Qn:N==null&&g(D,u,L,y);break;case Ye:x(N,D,u,L,C,E,y,A,M);break;default:$&1?k(N,D,u,L,C,E,y,A,M):$&6?K(N,D,u,L,C,E,y,A,M):($&64||$&128)&&z.process(N,D,u,L,C,E,y,A,M,pe)}P!=null&&C&&Vs(P,N&&N.ref,E,D||N,!D)},S=(N,D,u,L)=>{if(N==null)n(D.el=a(D.children),u,L);else{const C=D.el=N.el;D.children!==N.children&&c(C,D.children)}},b=(N,D,u,L)=>{N==null?n(D.el=l(D.children||""),u,L):D.el=N.el},g=(N,D,u,L)=>{[N.el,N.anchor]=T(N.children,D,u,L,N.el,N.anchor)},v=({el:N,anchor:D},u,L)=>{let C;for(;N&&N!==D;)C=m(N),n(N,u,L),N=C;n(D,u,L)},w=({el:N,anchor:D})=>{let u;for(;N&&N!==D;)u=m(N),r(N),N=u;r(D)},k=(N,D,u,L,C,E,y,A,M)=>{y=y||D.type==="svg",N==null?O(D,u,L,C,E,y,A,M):I(N,D,C,E,y,A,M)},O=(N,D,u,L,C,E,y,A)=>{let M,z;const{type:P,props:$,shapeFlag:W,transition:G,dirs:J}=N;if(M=N.el=o(N.type,E,$&&$.is,$),W&8?p(M,N.children):W&16&&B(N.children,M,null,L,C,E&&P!=="foreignObject",y,A),J&&Kt(N,null,L,"created"),F(M,N,N.scopeId,y,L),$){for(const ie in $)ie!=="value"&&!Yn(ie)&&i(M,ie,null,$[ie],E,N.children,L,C,be);"value"in $&&i(M,"value",null,$.value),(z=$.onVnodeBeforeMount)&&ut(z,L,N)}J&&Kt(N,null,L,"beforeMount");const le=(!C||C&&!C.pendingBranch)&&G&&!G.persisted;le&&G.beforeEnter(M),n(M,D,u),((z=$&&$.onVnodeMounted)||le||J)&&et(()=>{z&&ut(z,L,N),le&&G.enter(M),J&&Kt(N,null,L,"mounted")},C)},F=(N,D,u,L,C)=>{if(u&&d(N,u),L)for(let E=0;E<L.length;E++)d(N,L[E]);if(C){let E=C.subTree;if(D===E){const y=C.vnode;F(N,y,y.scopeId,y.slotScopeIds,C.parent)}}},B=(N,D,u,L,C,E,y,A,M=0)=>{for(let z=M;z<N.length;z++){const P=N[z]=A?It(N[z]):dt(N[z]);f(null,P,D,u,L,C,E,y,A)}},I=(N,D,u,L,C,E,y)=>{const A=D.el=N.el;let{patchFlag:M,dynamicChildren:z,dirs:P}=D;M|=N.patchFlag&16;const $=N.props||Pe,W=D.props||Pe;let G;u&&Gt(u,!1),(G=W.onVnodeBeforeUpdate)&&ut(G,u,D,N),P&&Kt(D,N,u,"beforeUpdate"),u&&Gt(u,!0);const J=C&&D.type!=="foreignObject";if(z?H(N.dynamicChildren,z,A,u,L,J,E):y||te(N,D,A,null,u,L,J,E,!1),M>0){if(M&16)X(A,D,$,W,u,L,C);else if(M&2&&$.class!==W.class&&i(A,"class",null,W.class,C),M&4&&i(A,"style",$.style,W.style,C),M&8){const le=D.dynamicProps;for(let ie=0;ie<le.length;ie++){const ve=le[ie],We=$[ve],qe=W[ve];(qe!==We||ve==="value")&&i(A,ve,We,qe,C,N.children,u,L,be)}}M&1&&N.children!==D.children&&p(A,D.children)}else!y&&z==null&&X(A,D,$,W,u,L,C);((G=W.onVnodeUpdated)||P)&&et(()=>{G&&ut(G,u,D,N),P&&Kt(D,N,u,"updated")},L)},H=(N,D,u,L,C,E,y)=>{for(let A=0;A<D.length;A++){const M=N[A],z=D[A],P=M.el&&(M.type===Ye||!Tn(M,z)||M.shapeFlag&70)?h(M.el):u;f(M,z,P,null,L,C,E,y,!0)}},X=(N,D,u,L,C,E,y)=>{if(u!==L){if(u!==Pe)for(const A in u)!Yn(A)&&!(A in L)&&i(N,A,u[A],null,y,D.children,C,E,be);for(const A in L){if(Yn(A))continue;const M=L[A],z=u[A];M!==z&&A!=="value"&&i(N,A,z,M,y,D.children,C,E,be)}"value"in L&&i(N,"value",u.value,L.value)}},x=(N,D,u,L,C,E,y,A,M)=>{const z=D.el=N?N.el:a(""),P=D.anchor=N?N.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:G}=D;G&&(A=A?A.concat(G):G),N==null?(n(z,u,L),n(P,u,L),B(D.children,u,P,C,E,y,A,M)):$>0&&$&64&&W&&N.dynamicChildren?(H(N.dynamicChildren,W,u,C,E,y,A),(D.key!=null||C&&D===C.subTree)&&go(N,D,!0)):te(N,D,u,P,C,E,y,A,M)},K=(N,D,u,L,C,E,y,A,M)=>{D.slotScopeIds=A,N==null?D.shapeFlag&512?C.ctx.activate(D,u,L,y,M):_(D,u,L,C,E,y,M):q(N,D,M)},_=(N,D,u,L,C,E,y)=>{const A=N.component=Wl(N,L,C);if(so(N)&&(A.ctx.renderer=pe),ql(A),A.asyncDep){if(C&&C.registerDep(A,re),!N.el){const M=A.subTree=ge(Bt);b(null,M,D,u)}return}re(A,N,D,u,C,E,y)},q=(N,D,u)=>{const L=D.component=N.component;if(tl(N,D,u))if(L.asyncDep&&!L.asyncResolved){Z(L,D,u);return}else L.next=D,Va(L.update),L.update();else D.el=N.el,L.vnode=D},re=(N,D,u,L,C,E,y)=>{const A=()=>{if(N.isMounted){let{next:P,bu:$,u:W,parent:G,vnode:J}=N,le=P,ie;Gt(N,!1),P?(P.el=J.el,Z(N,P,y)):P=J,$&&Xn($),(ie=P.props&&P.props.onVnodeBeforeUpdate)&&ut(ie,G,P,J),Gt(N,!0);const ve=Ns(N),We=N.subTree;N.subTree=ve,f(We,ve,h(We.el),Le(We),N,C,E),P.el=ve.el,le===null&&nl(N,ve.el),W&&et(W,C),(ie=P.props&&P.props.onVnodeUpdated)&&et(()=>ut(ie,G,P,J),C)}else{let P;const{el:$,props:W}=D,{bm:G,m:J,parent:le}=N,ie=wn(D);if(Gt(N,!1),G&&Xn(G),!ie&&(P=W&&W.onVnodeBeforeMount)&&ut(P,le,D),Gt(N,!0),$&&Ce){const ve=()=>{N.subTree=Ns(N),Ce($,N.subTree,N,C,null)};ie?D.type.__asyncLoader().then(()=>!N.isUnmounted&&ve()):ve()}else{const ve=N.subTree=Ns(N);f(null,ve,u,L,N,C,E),D.el=ve.el}if(J&&et(J,C),!ie&&(P=W&&W.onVnodeMounted)){const ve=D;et(()=>ut(P,le,ve),C)}(D.shapeFlag&256||le&&wn(le.vnode)&&le.vnode.shapeFlag&256)&&N.a&&et(N.a,C),N.isMounted=!0,D=u=L=null}},M=N.effect=new ur(A,()=>_r(z),N.scope),z=N.update=()=>M.run();z.id=N.uid,Gt(N,!0),z()},Z=(N,D,u)=>{D.component=N;const L=N.vnode.props;N.vnode=D,N.next=null,Ll(N,D.props,L,u),Fl(N,D.children,u),mn(),Ur(),gn()},te=(N,D,u,L,C,E,y,A,M=!1)=>{const z=N&&N.children,P=N?N.shapeFlag:0,$=D.children,{patchFlag:W,shapeFlag:G}=D;if(W>0){if(W&128){oe(z,$,u,L,C,E,y,A,M);return}else if(W&256){V(z,$,u,L,C,E,y,A,M);return}}G&8?(P&16&&be(z,C,E),$!==z&&p(u,$)):P&16?G&16?oe(z,$,u,L,C,E,y,A,M):be(z,C,E,!0):(P&8&&p(u,""),G&16&&B($,u,L,C,E,y,A,M))},V=(N,D,u,L,C,E,y,A,M)=>{N=N||on,D=D||on;const z=N.length,P=D.length,$=Math.min(z,P);let W;for(W=0;W<$;W++){const G=D[W]=M?It(D[W]):dt(D[W]);f(N[W],G,u,null,C,E,y,A,M)}z>P?be(N,C,E,!0,!1,$):B(D,u,L,C,E,y,A,M,$)},oe=(N,D,u,L,C,E,y,A,M)=>{let z=0;const P=D.length;let $=N.length-1,W=P-1;for(;z<=$&&z<=W;){const G=N[z],J=D[z]=M?It(D[z]):dt(D[z]);if(Tn(G,J))f(G,J,u,null,C,E,y,A,M);else break;z++}for(;z<=$&&z<=W;){const G=N[$],J=D[W]=M?It(D[W]):dt(D[W]);if(Tn(G,J))f(G,J,u,null,C,E,y,A,M);else break;$--,W--}if(z>$){if(z<=W){const G=W+1,J=G<P?D[G].el:L;for(;z<=W;)f(null,D[z]=M?It(D[z]):dt(D[z]),u,J,C,E,y,A,M),z++}}else if(z>W)for(;z<=$;)j(N[z],C,E,!0),z++;else{const G=z,J=z,le=new Map;for(z=J;z<=W;z++){const Ze=D[z]=M?It(D[z]):dt(D[z]);Ze.key!=null&&le.set(Ze.key,z)}let ie,ve=0;const We=W-J+1;let qe=!1,kt=0;const Re=new Array(We);for(z=0;z<We;z++)Re[z]=0;for(z=G;z<=$;z++){const Ze=N[z];if(ve>=We){j(Ze,C,E,!0);continue}let je;if(Ze.key!=null)je=le.get(Ze.key);else for(ie=J;ie<=W;ie++)if(Re[ie-J]===0&&Tn(Ze,D[ie])){je=ie;break}je===void 0?j(Ze,C,E,!0):(Re[je-J]=z+1,je>=kt?kt=je:qe=!0,f(Ze,D[je],u,null,C,E,y,A,M),ve++)}const Ht=qe?Ml(Re):on;for(ie=Ht.length-1,z=We-1;z>=0;z--){const Ze=J+z,je=D[Ze],_n=Ze+1<P?D[Ze+1].el:L;Re[z]===0?f(null,je,u,_n,C,E,y,A,M):qe&&(ie<0||z!==Ht[ie]?U(je,u,_n,2):ie--)}}},U=(N,D,u,L,C=null)=>{const{el:E,type:y,transition:A,children:M,shapeFlag:z}=N;if(z&6){U(N.component.subTree,D,u,L);return}if(z&128){N.suspense.move(D,u,L);return}if(z&64){y.move(N,D,u,pe);return}if(y===Ye){n(E,D,u);for(let $=0;$<M.length;$++)U(M[$],D,u,L);n(N.anchor,D,u);return}if(y===Qn){v(N,D,u);return}if(L!==2&&z&1&&A)if(L===0)A.beforeEnter(E),n(E,D,u),et(()=>A.enter(E),C);else{const{leave:$,delayLeave:W,afterLeave:G}=A,J=()=>n(E,D,u),le=()=>{$(E,()=>{J(),G&&G()})};W?W(E,J,le):le()}else n(E,D,u)},j=(N,D,u,L=!1,C=!1)=>{const{type:E,props:y,ref:A,children:M,dynamicChildren:z,shapeFlag:P,patchFlag:$,dirs:W}=N;if(A!=null&&Vs(A,null,u,N,!0),P&256){D.ctx.deactivate(N);return}const G=P&1&&W,J=!wn(N);let le;if(J&&(le=y&&y.onVnodeBeforeUnmount)&&ut(le,D,N),P&6)Q(N.component,u,L);else{if(P&128){N.suspense.unmount(u,L);return}G&&Kt(N,null,D,"beforeUnmount"),P&64?N.type.remove(N,D,u,C,pe,L):z&&(E!==Ye||$>0&&$&64)?be(z,D,u,!1,!0):(E===Ye&&$&384||!C&&P&16)&&be(M,D,u),L&&ae(N)}(J&&(le=y&&y.onVnodeUnmounted)||G)&&et(()=>{le&&ut(le,D,N),G&&Kt(N,null,D,"unmounted")},u)},ae=N=>{const{type:D,el:u,anchor:L,transition:C}=N;if(D===Ye){se(u,L);return}if(D===Qn){w(N);return}const E=()=>{r(u),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(N.shapeFlag&1&&C&&!C.persisted){const{leave:y,delayLeave:A}=C,M=()=>y(u,E);A?A(N.el,E,M):M()}else E()},se=(N,D)=>{let u;for(;N!==D;)u=m(N),r(N),N=u;r(D)},Q=(N,D,u)=>{const{bum:L,scope:C,update:E,subTree:y,um:A}=N;L&&Xn(L),C.stop(),E&&(E.active=!1,j(y,N,D,u)),A&&et(A,D),et(()=>{N.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&N.asyncDep&&!N.asyncResolved&&N.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},be=(N,D,u,L=!1,C=!1,E=0)=>{for(let y=E;y<N.length;y++)j(N[y],D,u,L,C)},Le=N=>N.shapeFlag&6?Le(N.component.subTree):N.shapeFlag&128?N.suspense.next():m(N.anchor||N.el),he=(N,D,u)=>{N==null?D._vnode&&j(D._vnode,null,null,!0):f(D._vnode||null,N,D,null,null,null,u),Ur(),Ji(),D._vnode=N},pe={p:f,um:j,m:U,r:ae,mt:_,mc:B,pc:te,pbc:H,n:Le,o:s};let Oe,Ce;return e&&([Oe,Ce]=e(pe)),{render:he,hydrate:Oe,createApp:xl(he,Oe)}}function Gt({effect:s,update:e},t){s.allowRecurse=e.allowRecurse=t}function go(s,e,t=!1){const n=s.children,r=e.children;if(ce(n)&&ce(r))for(let i=0;i<n.length;i++){const o=n[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=It(r[i]),a.el=o.el),t||go(o,a)),a.type===ws&&(a.el=o.el)}}function Ml(s){const e=s.slice(),t=[0];let n,r,i,o,a;const l=s.length;for(n=0;n<l;n++){const c=s[n];if(c!==0){if(r=t[t.length-1],s[r]<c){e[n]=r,t.push(n);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,s[t[a]]<c?i=a+1:o=a;c<s[t[i]]&&(i>0&&(e[n]=t[i-1]),t[i]=n)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}const Bl=s=>s.__isTeleport,Ye=Symbol.for("v-fgt"),ws=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Qn=Symbol.for("v-stc"),Cn=[];let at=null;function Se(s=!1){Cn.push(at=s?null:[])}function jl(){Cn.pop(),at=Cn[Cn.length-1]||null}let Fn=1;function Jr(s){Fn+=s}function _o(s){return s.dynamicChildren=Fn>0?at||on:null,jl(),Fn>0&&at&&at.push(s),s}function ke(s,e,t,n,r,i){return _o(ne(s,e,t,n,r,i,!0))}function vr(s,e,t,n,r){return _o(ge(s,e,t,n,r,!0))}function os(s){return s?s.__v_isVNode===!0:!1}function Tn(s,e){return s.type===e.type&&s.key===e.key}const ks="__vInternal",bo=({key:s})=>s??null,es=({ref:s,ref_key:e,ref_for:t})=>(typeof s=="number"&&(s=""+s),s!=null?$e(s)||Be(s)||fe(s)?{i:Ve,r:s,k:e,f:!!t}:s:null);function ne(s,e=null,t=null,n=0,r=null,i=s===Ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:e,key:e&&bo(e),ref:e&&es(e),scopeId:Ss,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ve};return a?(Er(l,t),i&128&&s.normalize(l)):t&&(l.shapeFlag|=$e(t)?8:16),Fn>0&&!o&&at&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&at.push(l),l}const ge=Ul;function Ul(s,e=null,t=null,n=0,r=null,i=!1){if((!s||s===bl)&&(s=Bt),os(s)){const a=un(s,e,!0);return t&&Er(a,t),Fn>0&&!i&&at&&(a.shapeFlag&6?at[at.indexOf(s)]=a:at.push(a)),a.patchFlag|=-2,a}if(Jl(s)&&(s=s.__vccOpts),e){e=$l(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=Tt(a)),ze(l)&&(Ki(l)&&!ce(l)&&(l=Ge({},l)),e.style=pn(l))}const o=$e(s)?1:sl(s)?128:Bl(s)?64:ze(s)?4:fe(s)?2:0;return ne(s,e,t,n,r,o,i,!0)}function $l(s){return s?Ki(s)||ks in s?Ge({},s):s:null}function un(s,e,t=!1){const{props:n,ref:r,patchFlag:i,children:o}=s,a=e?Hl(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:a,key:a&&bo(a),ref:e&&e.ref?t&&r?ce(r)?r.concat(es(e)):[r,es(e)]:es(e):r,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:o,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:e&&s.type!==Ye?i===-1?16:i|16:i,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&un(s.ssContent),ssFallback:s.ssFallback&&un(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function To(s=" ",e=0){return ge(ws,null,s,e)}function yr(s,e){const t=ge(Qn,null,s);return t.staticCount=e,t}function Dn(s="",e=!1){return e?(Se(),vr(Bt,null,s)):ge(Bt,null,s)}function dt(s){return s==null||typeof s=="boolean"?ge(Bt):ce(s)?ge(Ye,null,s.slice()):typeof s=="object"?It(s):ge(ws,null,String(s))}function It(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:un(s)}function Er(s,e){let t=0;const{shapeFlag:n}=s;if(e==null)e=null;else if(ce(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Er(s,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ks in e)?e._ctx=Ve:r===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,s.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Ve},t=32):(e=String(e),n&64?(t=16,e=[To(e)]):t=8);s.children=e,s.shapeFlag|=t}function Hl(...s){const e={};for(let t=0;t<s.length;t++){const n=s[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Tt([e.class,n.class]));else if(r==="style")e.style=pn([e.style,n.style]);else if(hs(r)){const i=e[r],o=n[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=n[r])}return e}function ut(s,e,t,n=null){ct(s,e,7,[t,n])}const Kl=co();let Gl=0;function Wl(s,e,t){const n=s.type,r=(e?e.appContext:s.appContext)||Kl,i={uid:Gl++,vnode:s,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ni(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ho(n,r),emitsOptions:eo(n,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:n.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ja.bind(null,i),s.ce&&s.ce(i),i}let Ke=null,wr,tn,Qr="__VUE_INSTANCE_SETTERS__";(tn=js()[Qr])||(tn=js()[Qr]=[]),tn.push(s=>Ke=s),wr=s=>{tn.length>1?tn.forEach(e=>e(s)):tn[0](s)};const hn=s=>{wr(s),s.scope.on()},Yt=()=>{Ke&&Ke.scope.off(),wr(null)};function So(s){return s.vnode.shapeFlag&4}let zn=!1;function ql(s,e=!1){zn=e;const{props:t,children:n}=s.vnode,r=So(s);Il(s,t,r,e),Pl(s,n);const i=r?Zl(s,e):void 0;return zn=!1,i}function Zl(s,e){const t=s.type;s.accessCache=Object.create(null),s.proxy=_s(new Proxy(s.ctx,vl));const{setup:n}=t;if(n){const r=s.setupContext=n.length>1?Yl(s):null;hn(s),mn();const i=Ft(n,s,0,[s.props,r]);if(gn(),Yt(),ki(i)){if(i.then(Yt,Yt),e)return i.then(o=>{ei(s,o,e)}).catch(o=>{bs(o,s,0)});s.asyncDep=i}else ei(s,i,e)}else vo(s,e)}function ei(s,e,t){fe(e)?s.type.__ssrInlineRender?s.ssrRender=e:s.render=e:ze(e)&&(s.setupState=Zi(e)),vo(s,t)}let ti;function vo(s,e,t){const n=s.type;if(!s.render){if(!e&&ti&&!n.render){const r=n.template||Tr(s).template;if(r){const{isCustomElement:i,compilerOptions:o}=s.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ge(Ge({isCustomElement:i,delimiters:a},o),l);n.render=ti(r,c)}}s.render=n.render||lt}hn(s),mn(),yl(s),gn(),Yt()}function Vl(s){return s.attrsProxy||(s.attrsProxy=new Proxy(s.attrs,{get(e,t){return tt(s,"get","$attrs"),e[t]}}))}function Yl(s){const e=t=>{s.exposed=t||{}};return{get attrs(){return Vl(s)},slots:s.slots,emit:s.emit,expose:e}}function As(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Zi(_s(s.exposed)),{get(e,t){if(t in e)return e[t];if(t in kn)return kn[t](s)},has(e,t){return t in e||t in kn}}))}function Xl(s,e=!0){return fe(s)?s.displayName||s.name:s.name||e&&s.__name}function Jl(s){return fe(s)&&"__vccOpts"in s}const _t=(s,e)=>Wa(s,e,zn);function Rt(s,e,t){const n=arguments.length;return n===2?ze(e)&&!ce(e)?os(e)?ge(s,null,[e]):ge(s,e):ge(s,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&os(t)&&(t=[t]),ge(s,e,t))}const Ql=Symbol.for("v-scx"),ec=()=>An(Ql),tc="3.3.4",nc="http://www.w3.org/2000/svg",qt=typeof document<"u"?document:null,ni=qt&&qt.createElement("template"),sc={insert:(s,e,t)=>{e.insertBefore(s,t||null)},remove:s=>{const e=s.parentNode;e&&e.removeChild(s)},createElement:(s,e,t,n)=>{const r=e?qt.createElementNS(nc,s):qt.createElement(s,t?{is:t}:void 0);return s==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:s=>qt.createTextNode(s),createComment:s=>qt.createComment(s),setText:(s,e)=>{s.nodeValue=e},setElementText:(s,e)=>{s.textContent=e},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>qt.querySelector(s),setScopeId(s,e){s.setAttribute(e,"")},insertStaticContent(s,e,t,n,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{ni.innerHTML=n?`<svg>${s}</svg>`:s;const a=ni.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function rc(s,e,t){const n=s._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?s.removeAttribute("class"):t?s.setAttribute("class",e):s.className=e}function ic(s,e,t){const n=s.style,r=$e(t);if(t&&!r){if(e&&!$e(e))for(const i in e)t[i]==null&&Ys(n,i,"");for(const i in t)Ys(n,i,t[i])}else{const i=n.display;r?e!==t&&(n.cssText=t):e&&s.removeAttribute("style"),"_vod"in s&&(n.display=i)}}const si=/\s*!important$/;function Ys(s,e,t){if(ce(t))t.forEach(n=>Ys(s,e,n));else if(t==null&&(t=""),e.startsWith("--"))s.setProperty(e,t);else{const n=oc(s,e);si.test(t)?s.setProperty(fn(n),t.replace(si,""),"important"):s[n]=t}}const ri=["Webkit","Moz","ms"],Ls={};function oc(s,e){const t=Ls[e];if(t)return t;let n=gt(e);if(n!=="filter"&&n in s)return Ls[e]=n;n=ps(n);for(let r=0;r<ri.length;r++){const i=ri[r]+n;if(i in s)return Ls[e]=i}return e}const ii="http://www.w3.org/1999/xlink";function ac(s,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?s.removeAttributeNS(ii,e.slice(6,e.length)):s.setAttributeNS(ii,e,t);else{const i=aa(e);t==null||i&&!xi(t)?s.removeAttribute(e):s.setAttribute(e,i?"":t)}}function lc(s,e,t,n,r,i,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,i),s[e]=t??"";return}const a=s.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){s._value=t;const c=a==="OPTION"?s.getAttribute("value"):s.value,p=t??"";c!==p&&(s.value=p),t==null&&s.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof s[e];c==="boolean"?t=xi(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{s[e]=t}catch{}l&&s.removeAttribute(e)}function sn(s,e,t,n){s.addEventListener(e,t,n)}function cc(s,e,t,n){s.removeEventListener(e,t,n)}function uc(s,e,t,n,r=null){const i=s._vei||(s._vei={}),o=i[e];if(n&&o)o.value=n;else{const[a,l]=hc(e);if(n){const c=i[e]=pc(n,r);sn(s,a,c,l)}else o&&(cc(s,a,o,l),i[e]=void 0)}}const oi=/(?:Once|Passive|Capture)$/;function hc(s){let e;if(oi.test(s)){e={};let n;for(;n=s.match(oi);)s=s.slice(0,s.length-n[0].length),e[n[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):fn(s.slice(2)),e]}let Os=0;const dc=Promise.resolve(),fc=()=>Os||(dc.then(()=>Os=0),Os=Date.now());function pc(s,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ct(mc(n,t.value),e,5,[n])};return t.value=s,t.attached=fc(),t}function mc(s,e){if(ce(e)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const ai=/^on[a-z]/,gc=(s,e,t,n,r=!1,i,o,a,l)=>{e==="class"?rc(s,n,r):e==="style"?ic(s,t,n):hs(e)?ir(e)||uc(s,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_c(s,e,n,r))?lc(s,e,n,i,o,a,l):(e==="true-value"?s._trueValue=n:e==="false-value"&&(s._falseValue=n),ac(s,e,n,r))};function _c(s,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in s&&ai.test(e)&&fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&s.tagName==="INPUT"||e==="type"&&s.tagName==="TEXTAREA"||ai.test(e)&&$e(t)?!1:e in s}const li=s=>{const e=s.props["onUpdate:modelValue"]||!1;return ce(e)?t=>Xn(e,t):e};function bc(s){s.target.composing=!0}function ci(s){const e=s.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ui={created(s,{modifiers:{lazy:e,trim:t,number:n}},r){s._assign=li(r);const i=n||r.props&&r.props.type==="number";sn(s,e?"change":"input",o=>{if(o.target.composing)return;let a=s.value;t&&(a=a.trim()),i&&(a=Bs(a)),s._assign(a)}),t&&sn(s,"change",()=>{s.value=s.value.trim()}),e||(sn(s,"compositionstart",bc),sn(s,"compositionend",ci),sn(s,"change",ci))},mounted(s,{value:e}){s.value=e??""},beforeUpdate(s,{value:e,modifiers:{lazy:t,trim:n,number:r}},i){if(s._assign=li(i),s.composing||document.activeElement===s&&s.type!=="range"&&(t||n&&s.value.trim()===e||(r||s.type==="number")&&Bs(s.value)===e))return;const o=e??"";s.value!==o&&(s.value=o)}},Tc=["ctrl","shift","alt","meta"],Sc={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,e)=>Tc.some(t=>s[`${t}Key`]&&!e.includes(t))},vc=(s,e)=>(t,...n)=>{for(let r=0;r<e.length;r++){const i=Sc[e[r]];if(i&&i(t,e))return}return s(t,...n)},Ps={beforeMount(s,{value:e},{transition:t}){s._vod=s.style.display==="none"?"":s.style.display,t&&e?t.beforeEnter(s):Sn(s,e)},mounted(s,{value:e},{transition:t}){t&&e&&t.enter(s)},updated(s,{value:e,oldValue:t},{transition:n}){!e!=!t&&(n?e?(n.beforeEnter(s),Sn(s,!0),n.enter(s)):n.leave(s,()=>{Sn(s,!1)}):Sn(s,e))},beforeUnmount(s,{value:e}){Sn(s,e)}};function Sn(s,e){s.style.display=e?s._vod:"none"}const yc=Ge({patchProp:gc},sc);let hi;function Ec(){return hi||(hi=Dl(yc))}const wc=(...s)=>{const e=Ec().createApp(...s),{mount:t}=e;return e.mount=n=>{const r=kc(n);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function kc(s){return $e(s)?document.querySelector(s):s}var Ac=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let yo;const Cs=s=>yo=s,Eo=Symbol();function Xs(s){return s&&typeof s=="object"&&Object.prototype.toString.call(s)==="[object Object]"&&typeof s.toJSON!="function"}var xn;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(xn||(xn={}));function Cc(){const s=Ii(!0),e=s.run(()=>qi({}));let t=[],n=[];const r=_s({install(i){Cs(r),r._a=i,i.provide(Eo,r),i.config.globalProperties.$pinia=r,n.forEach(o=>t.push(o)),n=[]},use(i){return!this._a&&!Ac?n.push(i):t.push(i),this},_p:t,_a:null,_e:s,_s:new Map,state:e});return r}const wo=()=>{};function di(s,e,t,n=wo){s.push(e);const r=()=>{const i=s.indexOf(e);i>-1&&(s.splice(i,1),n())};return!t&&Li()&&ca(r),r}function nn(s,...e){s.slice().forEach(t=>{t(...e)})}const xc=s=>s();function Js(s,e){s instanceof Map&&e instanceof Map&&e.forEach((t,n)=>s.set(n,t)),s instanceof Set&&e instanceof Set&&e.forEach(s.add,s);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],r=s[t];Xs(r)&&Xs(n)&&s.hasOwnProperty(t)&&!Be(n)&&!Pt(n)?s[t]=Js(r,n):s[t]=n}return s}const Rc=Symbol();function Nc(s){return!Xs(s)||!s.hasOwnProperty(Rc)}const{assign:Nt}=Object;function Ic(s){return!!(Be(s)&&s.effect)}function Lc(s,e,t,n){const{state:r,actions:i,getters:o}=e,a=t.state.value[s];let l;function c(){a||(t.state.value[s]=r?r():{});const p=$a(t.state.value[s]);return Nt(p,i,Object.keys(o||{}).reduce((h,m)=>(h[m]=_s(_t(()=>{Cs(t);const d=t._s.get(s);return o[m].call(d,d)})),h),{}))}return l=ko(s,c,e,t,n,!0),l}function ko(s,e,t={},n,r,i){let o;const a=Nt({actions:{}},t),l={deep:!0};let c,p,h=[],m=[],d;const T=n.state.value[s];!i&&!T&&(n.state.value[s]={}),qi({});let f;function S(B){let I;c=p=!1,typeof B=="function"?(B(n.state.value[s]),I={type:xn.patchFunction,storeId:s,events:d}):(Js(n.state.value[s],B),I={type:xn.patchObject,payload:B,storeId:s,events:d});const H=f=Symbol();Yi().then(()=>{f===H&&(c=!0)}),p=!0,nn(h,I,n.state.value[s])}const b=i?function(){const{state:I}=t,H=I?I():{};this.$patch(X=>{Nt(X,H)})}:wo;function g(){o.stop(),h=[],m=[],n._s.delete(s)}function v(B,I){return function(){Cs(n);const H=Array.from(arguments),X=[],x=[];function K(re){X.push(re)}function _(re){x.push(re)}nn(m,{args:H,name:B,store:k,after:K,onError:_});let q;try{q=I.apply(this&&this.$id===s?this:k,H)}catch(re){throw nn(x,re),re}return q instanceof Promise?q.then(re=>(nn(X,re),re)).catch(re=>(nn(x,re),Promise.reject(re))):(nn(X,q),q)}}const w={_p:n,$id:s,$onAction:di.bind(null,m),$patch:S,$reset:b,$subscribe(B,I={}){const H=di(h,B,I.detached,()=>X()),X=o.run(()=>Jn(()=>n.state.value[s],x=>{(I.flush==="sync"?p:c)&&B({storeId:s,type:xn.direct,events:d},x)},Nt({},l,I)));return H},$dispose:g},k=gs(w);n._s.set(s,k);const O=n._a&&n._a.runWithContext||xc,F=n._e.run(()=>(o=Ii(),O(()=>o.run(e))));for(const B in F){const I=F[B];if(Be(I)&&!Ic(I)||Pt(I))i||(T&&Nc(I)&&(Be(I)?I.value=T[B]:Js(I,T[B])),n.state.value[s][B]=I);else if(typeof I=="function"){const H=v(B,I);F[B]=H,a.actions[B]=I}}return Nt(k,F),Nt(we(k),F),Object.defineProperty(k,"$state",{get:()=>n.state.value[s],set:B=>{S(I=>{Nt(I,B)})}}),n._p.forEach(B=>{Nt(k,o.run(()=>B({store:k,app:n._a,pinia:n,options:a})))}),T&&i&&t.hydrate&&t.hydrate(k.$state,T),c=!0,p=!0,k}function Oc(s,e,t){let n,r;const i=typeof e=="function";typeof s=="string"?(n=s,r=i?t:e):(r=s,n=s.id);function o(a,l){const c=Nl();return a=a||(c?An(Eo,null):null),a&&Cs(a),a=yo,a._s.has(n)||(i?ko(n,e,r,a):Lc(n,r,a)),a._s.get(n)}return o.$id=n,o}var rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kr(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Pc(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var r=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return s[n]}})}),t}var Ao={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qs=function(s,e){return Qs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},Qs(s,e)};function Fc(s,e){Qs(s,e);function t(){this.constructor=s}s.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var er=function(){return er=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},er.apply(this,arguments)};function Dc(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(s);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(s,n[r])&&(t[n[r]]=s[n[r]]);return t}function zc(s,e,t,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(i=(r<3?o(i):r>3?o(e,t,i):o(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}function Mc(s,e){return function(t,n){e(t,n,s)}}function Bc(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)}function jc(s,e,t,n){function r(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function a(p){try{c(n.next(p))}catch(h){o(h)}}function l(p){try{c(n.throw(p))}catch(h){o(h)}}function c(p){p.done?i(p.value):r(p.value).then(a,l)}c((n=n.apply(s,e||[])).next())})}function Uc(s,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(p){return l([c,p])}}function l(c){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){t.label=c[1];break}if(c[0]===6&&t.label<i[1]){t.label=i[1],i=c;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(c);break}i[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(s,t)}catch(p){c=[6,p],r=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function $c(s,e,t,n){n===void 0&&(n=t),s[n]=e[t]}function Hc(s,e){for(var t in s)t!=="default"&&!e.hasOwnProperty(t)&&(e[t]=s[t])}function tr(s){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&s[e],n=0;if(t)return t.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&n>=s.length&&(s=void 0),{value:s&&s[n++],done:!s}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Co(s,e){var t=typeof Symbol=="function"&&s[Symbol.iterator];if(!t)return s;var n=t.call(s),r,i=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return i}function Kc(){for(var s=[],e=0;e<arguments.length;e++)s=s.concat(Co(arguments[e]));return s}function Gc(){for(var s=0,e=0,t=arguments.length;e<t;e++)s+=arguments[e].length;for(var n=Array(s),r=0,e=0;e<t;e++)for(var i=arguments[e],o=0,a=i.length;o<a;o++,r++)n[r]=i[o];return n}function Mn(s){return this instanceof Mn?(this.v=s,this):new Mn(s)}function Wc(s,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(s,e||[]),r,i=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(m){n[m]&&(r[m]=function(d){return new Promise(function(T,f){i.push([m,d,T,f])>1||a(m,d)})})}function a(m,d){try{l(n[m](d))}catch(T){h(i[0][3],T)}}function l(m){m.value instanceof Mn?Promise.resolve(m.value.v).then(c,p):h(i[0][2],m)}function c(m){a("next",m)}function p(m){a("throw",m)}function h(m,d){m(d),i.shift(),i.length&&a(i[0][0],i[0][1])}}function qc(s){var e,t;return e={},n("next"),n("throw",function(r){throw r}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(r,i){e[r]=s[r]?function(o){return(t=!t)?{value:Mn(s[r](o)),done:r==="return"}:i?i(o):o}:i}}function Zc(s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=s[Symbol.asyncIterator],t;return e?e.call(s):(s=typeof tr=="function"?tr(s):s[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(i){t[i]=s[i]&&function(o){return new Promise(function(a,l){o=s[i](o),r(a,l,o.done,o.value)})}}function r(i,o,a,l){Promise.resolve(l).then(function(c){i({value:c,done:a})},o)}}function Vc(s,e){return Object.defineProperty?Object.defineProperty(s,"raw",{value:e}):s.raw=e,s}function Yc(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)Object.hasOwnProperty.call(s,t)&&(e[t]=s[t]);return e.default=s,e}function Xc(s){return s&&s.__esModule?s:{default:s}}function Jc(s,e){if(!e.has(s))throw new TypeError("attempted to get private field on non-instance");return e.get(s)}function Qc(s,e,t){if(!e.has(s))throw new TypeError("attempted to set private field on non-instance");return e.set(s,t),t}const eu=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return er},__asyncDelegator:qc,__asyncGenerator:Wc,__asyncValues:Zc,__await:Mn,__awaiter:jc,__classPrivateFieldGet:Jc,__classPrivateFieldSet:Qc,__createBinding:$c,__decorate:zc,__exportStar:Hc,__extends:Fc,__generator:Uc,__importDefault:Xc,__importStar:Yc,__makeTemplateObject:Vc,__metadata:Bc,__param:Mc,__read:Co,__rest:Dc,__spread:Kc,__spreadArrays:Gc,__values:tr},Symbol.toStringTag,{value:"Module"})),tu=Pc(eu);var Dt={};Object.defineProperty(Dt,"__esModule",{value:!0});Dt.isDate=Dt.isComparable=Dt.isIterable=void 0;Dt.isIterable=s=>!(s==null||s[Symbol.iterator]==null);Dt.isComparable=s=>{const e=Object.prototype.toString,t=s;return t.compare!=null&&e.call(t.compare).endsWith("Function]")};Dt.isDate=s=>Object.prototype.toString.call(s).endsWith("Date]");var Fs={},fi;function nu(){return fi||(fi=1,Object.defineProperty(Fs,"__esModule",{value:!0})),Fs}(function(s){Object.defineProperty(s,"__esModule",{value:!0});const e=tu,t=Dt,a={number:(p,h)=>p-h,string:(p,h)=>p.localeCompare(h),Date:(p,h)=>p.getTime()-h.getTime(),bigInt:(p,h)=>Number(p-h),none:()=>0},l=p=>{if(typeof p=="number")return a.number;if(typeof p=="string")return a.string;if(typeof p=="bigint")return a.bigInt;if(t.isDate(p))return a.Date;if(t.isComparable(p))return(h,m)=>h.compare(m);throw new Error("Cannot sort keys in this map. You have to specify compareFn if the type of key in this map is not number, string, or Date.")};class c extends Map{constructor(h,m){super(),this.specifiedCompareFn=!1,this.isCompareFn=d=>typeof d=="function",this.compareFn=a.none,this.sortedKeys=[],t.isIterable(h)&&this._constructor(h,m),this.isCompareFn(h)&&this._constructor(null,h),h==null&&this._constructor(null,m)}get comparator(){return this.compareFn}compare(h,m){return Math.sign(this.compareFn(h,m))}_constructor(h,m){if(this.compareFn=m??a.none,this.specifiedCompareFn=m!=null,h!=null)for(const d of h)this.set(...d)}static fromMap(h,m){const d=new c(m);return d.setAll(h),d}duplicate(){return c.fromMap(this,this.compareFn)}toMap(){const h=new Map,m=Array.from(super.entries());return m.sort((d,T)=>this.compareFn(d[0],T[0])),m.forEach(([d,T])=>{h.set(d,T)}),h}reverseKeys(){return[...this.sortedKeys].reverse().values()}get(h){const m=this.sortedKeys.find(d=>this.comparator(d,h)===0);if(m!=null)return super.get(m)}set(h,m){this.sortedKeys.length===0&&!this.specifiedCompareFn&&(this.compareFn=l(h),this.specifiedCompareFn=!0);const d=this.sortedKeys.find(T=>this.compareFn(T,h)===0);return d==null?(this.sortedKeys.push(h),super.set(h,m)):super.set(d,m),this.sortedKeys.sort(this.compareFn),this}setAll(h){return h.forEach((m,d)=>{this.set(d,m)}),this}delete(h){return super.delete(h)?(this.sortedKeys=this.sortedKeys.filter(m=>this.compare(m,h)!==0),!0):!1}clear(){super.clear(),this.sortedKeys=[]}keys(){return this.sortedKeys.values()}values(){return this.sortedKeys.map(h=>super.get(h)).values()}entries(){return this.toMap().entries()}firstEntry(){const h=this.firstKey();if(h==null)return;const m=this.get(h);return m===void 0?void 0:[h,m]}firstKey(){return this.sortedKeys[0]}lastEntry(){const h=this.lastKey();if(h==null)return;const m=this.get(h);return m===void 0?void 0:[h,m]}lastKey(){return[...this.sortedKeys].reverse()[0]}shiftEntry(){const h=this.firstEntry();if(h!=null)return this.delete(h[0]),h}popEntry(){const h=this.lastEntry();if(h!=null)return this.delete(h[0]),h}floorEntry(h){const m=this.floorKey(h);if(m!=null){const d=this.get(m);return d===void 0?void 0:[m,d]}}floorKey(h){return this.sortedKeys.filter(d=>this.compare(d,h)<=0).reverse()[0]}ceilingEntry(h){const m=this.ceilingKey(h);if(m!=null){const d=this.get(m);return d===void 0?void 0:[m,d]}}ceilingKey(h){return this.sortedKeys.filter(d=>this.compare(d,h)>=0)[0]}lowerEntry(h){const m=this.lowerKey(h);if(m!=null){const d=this.get(m);return d===void 0?void 0:[m,d]}}lowerKey(h){return this.sortedKeys.filter(d=>this.compare(d,h)<0).reverse()[0]}higherEntry(h){const m=this.higherKey(h);if(m!=null){const d=this.get(m);return d===void 0?void 0:[m,d]}}higherKey(h){return this.sortedKeys.filter(d=>this.compare(d,h)>0)[0]}splitLower(h,m=!0){const d=Array.from(this.entries()).filter(T=>{const f=this.compare(T[0],h)<0;return m?f||this.compare(T[0],h)===0:f});return new c(d,this.compareFn)}splitHigher(h,m=!0){const d=Array.from(this.entries()).filter(T=>{const f=this.compare(T[0],h)>0;return m?f||this.compare(T[0],h)===0:f});return new c(d,this.compareFn)}forEach(h,m){Array.from(this.entries()).forEach(([d,T])=>{h(T,d,this)},m)}}s.default=c,e.__exportStar(nu(),s)})(Ao);const ht=kr(Ao);class zt{constructor(e=1/0){R(this,"storage",[]);this.capacity=e}push(e){if(this.size()===this.capacity)throw Error("Stack has reached max capacity, you cannot add more items");this.storage.push(e)}pop(){return this.storage.pop()}get(e){return this.storage[e]}peek(){return this.storage[this.size()-1]}size(){return this.storage.length}empty(){return this.storage.length==0}clear(){this.storage=[]}}class _e{constructor(e){R(this,"items");e!=null?this.items=new Array(e):this.items=new Array}size(){return this.items.length}set(e,t){this.items[e]=t}setItems(e){this.items=e}add(e){this.items.push(e)}addAll(e){this.items.concat(e.items)}get(e){return this.items[e]}remove(e){const t=this.items.indexOf(e);return t==-1?!1:(this.items.splice(t,1),!0)}removeByIndex(e){const t=this.items[e];return this.items.splice(e,1),t}contains(e){return this.items.includes(e)}indexOf(e){return this.items.indexOf(e)}toArray(){return this.items}clear(){this.items.splice(0,this.items.length)}toString(){return`[${this.items.toString()}]`}toJSON(){return{values:this.items}}[Symbol.iterator](){return this.items.values()}}var Id;class ye{constructor(e){R(this,"_elements");R(this,Id,"OrderedIntegerSet");e===void 0?this._elements=[]:e instanceof ye?this._elements=[...e._elements]:this._elements=[e]}static fromArray(e){const t=new ye;return t.addAllArray(e),t}clone(){return new ye(this)}get size(){return this._elements.length}isEmpty(){return this._elements.length===0}add(e){for(let t=0;t<this._elements.length;t++){if(this._elements[t]==e)return!1;if(this._elements[t]>e)return this._elements.splice(t,0,e),!0}return this._elements.push(e),!0}first(){return this._elements.length==0?-1:this._elements[0]}contains(e){return this._elements.includes(e)}has(e){return this._elements.includes(e)}delete(e){for(let t=0;t<this._elements.length;t++)if(this._elements[t]===e)return this._elements.splice(t,1),!0;return!1}clear(){this._elements.length=0}addAll(e){let t=this._elements.length;if(this._elements[this._elements.length-1]<e._elements[0])return this._elements.push(...e._elements),t!=this._elements.length;let n=0,r=0,i=[];for(;n<this._elements.length||r<e._elements.length;){if(n==this._elements.length){for(;r<e._elements.length;)i.push(e._elements[r++]);break}if(r==e._elements.length){for(;n<this._elements.length;)i.push(this._elements[n++]);break}this._elements[n]==e._elements[r]?(i.push(this._elements[n]),n++,r++):this._elements[n]<e._elements[r]?i.push(this._elements[n++]):i.push(e._elements[r++])}return this._elements=i,t!=this._elements.length}addAllArray(e){const t=this._elements.length;return e.forEach(n=>this.add(n)),t!=this._elements.length}intersection(e,t=!0){const n=this._elements.length,r=[];for(const i of e._elements)this.contains(i)&&r.push(i);return t?(this._elements=r,n!=this._elements.length):ye.fromArray(r)}list(){return this._elements}length(){return this._elements.length}entries(){return this._elements.entries()}keys(){return this._elements.keys()}values(){return this._elements.values()}equals(e){const t=e._elements,n=this._elements;return n.length!==t.length?!1:n.every((r,i)=>r===t[i])}[(Id=Symbol.toStringTag,Symbol.iterator)](){return this._elements.values()}toJSON(){return{values:this._elements}}toString(){return`(${this._elements.toString()})`}}class st{constructor(e,t){R(this,"_value");R(this,"_parent");R(this,"_children");this._value=e===void 0?null:e,this._parent=t===void 0?null:t,this._children=[]}add(e){return e.parent=this,this._children.push(e),e}get value(){return this._value}get parent(){return this._parent}get children(){return this._children}set value(e){this._value=e}set parent(e){this._parent=e}set children(e){this._children=e}toJSON(){return{value:this.value,children:this.children}}}class me extends Error{constructor(t,n){super(t);R(this,"_position");n==null?this._position=-1:this._position=n,Object.setPrototypeOf(this,me.prototype)}get position(){return this._position}set position(t){this._position=t}toString(){return this.message+", em "+this._position}}class Ut{constructor(){R(this,"errorList");this.errorList=new _e}static get Instance(){return this._instance||(this._instance=new this)}static get errorList(){return this.errorList}add(e){this.errorList.add(e)}}R(Ut,"_instance");class Ie extends me{constructor(e,t){t==null?super(e):super(e,t)}}class Me extends me{constructor(e,t){t==null?super(e):super(e,t)}}class ee extends me{constructor(e,t){t==null?super(e):super(e,t)}}class dn extends Error{constructor(e){super(e)}}class xe{constructor(e,t,n){R(this,"_id");R(this,"_lexeme");R(this,"_position");this._id=e,this._lexeme=t,this._position=n}get id(){return this._id}get lexeme(){return this._lexeme}get position(){return this._position}toString(){return this._id+"("+this._lexeme+")"}}class mt{static translateString(e){let t="";for(let n=0;n<e.length;n++){let r=e.charAt(n);switch(r){case'"':t+="&quot;";break;case"&":t+="&amp;";break;case"<":t+="&lt;";break;case">":t+="&gt;";break;default:t+=r}}return t}}class Xt{constructor(e,t){R(this,"_fa");R(this,"_input","");R(this,"_position",0);R(this,"_sensitive",!0);this._fa=e,this._sensitive=t}analyse(e){let t=0;for(let n=0;n<e.length;n++)if(t=this._fa.nextState(e.charAt(n),t),t<=0)return-1;return this._fa.tokenForState(t)}setInput(e){this._input=e,this._position=0}nextToken(){if(!this.hasInput())return null;const e=this._position;let t=0,n=0,r=-1,i=-1,o=-1,a=-1;for(;this.hasInput()&&(n=t,t=this._fa.nextState(this.nextChar(),t),!(t<0));)this._fa.tokenForState(t)>=0&&(r=t,i=this._position),this._fa.isContext(t)&&(o=t,a=this._position);if(r<0||r!=t&&this._fa.tokenForState(n)==-2)throw new Ie(this._fa.getError(n),e);o!=-1&&this._fa.getOrigin(r)==o&&(i=a),this._position=i;let l=this._fa.tokenForState(r);if(l==0)return this.nextToken();{const c=this._input.substring(e,i);return l=this.lookupToken(l,c),new xe(l,c,e)}}lookupToken(e,t){let n=this._fa.getSpecialCasesIndexes()[e][0],r=this._fa.getSpecialCasesIndexes()[e][1]-1;for(this._sensitive||(t=t.toUpperCase());n<=r;){const i=Math.floor((n+r)/2),o=this.compareValues(this._fa.specialCases[i].key,t);if(o==0)return this._fa.specialCases[i].value;o<0?n=i+1:r=i-1}return e}hasInput(){return this._position<this._input.length}nextChar(){return this.hasInput()?this._input.charAt(this._position++):String.fromCharCode(-1)}compareValues(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=e.charCodeAt(r),o=t.charCodeAt(r);if(i!=o)return i-o}return e.length-t.length}}class pi{constructor(e,t){R(this,"key");R(this,"value");this.key=e,this.value=t}toString(){return"["+this.key+"->"+this.value+"]"}}class su{constructor(e,t,n,r,i,o,a,l){R(this,"_transitions");R(this,"_finals");R(this,"_context");R(this,"_alphabet");R(this,"_tokenNames");R(this,"_errors",[]);R(this,"_hasContext",!1);R(this,"_specialCasesIndexes");R(this,"_specialCases");this._alphabet=e,this._transitions=t,this._finals=n,this._context=o,this._specialCasesIndexes=r,this._specialCases=i,this._tokenNames=a;for(const c of o)if(c[0]==1){this._hasContext=!0;break}this.buildErrors(),this.checkSpecialCases(l)}checkSpecialCases(e){const t=new Xt(this,e);for(let n=0;n<this._specialCasesIndexes.length;n++){const r=this._specialCasesIndexes[n];for(let i=r[0];i<r[1];i++)if(t.analyse(this._specialCases[i].key)!=n)throw new Me('O valor "'+this._specialCases[i].key+`" não é válido como caso especial de '`+this._tokenNames.get(n-2)+"', na definição de '"+this._tokenNames.get(this._specialCases[i].value-2)+"'")}}nextState(e,t){const n=this._transitions.get(t).get(e);return n??-1}tokenForState(e){return e<0||e>=this._finals.length?-1:this._finals[e]}finalStatesFromState(e){const t=new Set;t.add(e);let n=!0;for(;n;){n=!1;for(const i of t){for(const o of this._alphabet.list()){const a=String.fromCodePoint(o),l=this.nextState(a,i);if(l!=-1&&!t.has(l)){t.add(l),n=!0;break}}if(n)break}}const r=new Set;for(const i of t)this.tokenForState(i)>=0&&r.add(i);return r}tokensFromState(e){const t=this.finalStatesFromState(e),n=new Set;for(const r of t){const i=this.tokenForState(r);i>=0&&n.add(i)}return n}buildErrors(){this._errors=[],this._errors[0]="Caractere não esperado";for(let e=1;e<this._transitions.size();e++)if(this.tokenForState(e)>=0)this._errors[e]="";else{const t=this.tokensFromState(e);let n="Erro identificando ";for(const r of t)r>0?n+=this._tokenNames.get(r-2):n+="<ignorar>",n+=" ou ";n=n.substring(0,n.length-4),this._errors[e]=n.toString()}}get transitions(){return this._transitions}get tokens(){return this._tokenNames}get specialCases(){return this._specialCases}get errors(){return this._errors}getError(e){const t=this._errors[e];if(t!=null)return t;throw Error("Sem erros")}getSpecialCasesIndexes(){return this._specialCasesIndexes}isContext(e){return this._context[e][0]==1}getOrigin(e){return this._context[e][1]}hasContext(){return this._hasContext}translateString(e){let t="";for(let n=0;n<e.length;n++){const r=e.charAt(n);switch(r){case'"':t+="&quot;";break;case"&":t+="&amp;";break;case"<":t+="&lt;";break;case">":t+="&gt;";break;default:t+=r}}return t}asHTML(){let e="";e+='<HTML><HEAD><TITLE> Tabela de Transições </TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',e+='<TR align=center><TD rowspan="2" bgcolor=black><FONT color=white><B>ESTADO</B></FONT></TD><TD rowspan="2" bgcolor=black><FONT color=white><B>TOKEN<BR>RETORNADO</B></FONT></TD><TD colspan="'+this._alphabet.size+'" bgcolor=black><FONT color=white><B>ENTRADA</B></FONT></TD></TR><TR align=center>';for(const t of this._alphabet.list()){const n=this.escapeSpecialCharacters(String.fromCodePoint(t));e+="<TD bgcolor=#99FF66 nowrap><B>"+n+"</B></TD>"}e+="</TR>";for(let t=0;t<this._transitions.size();t++){e+="<TR align=center><TD bgcolor=#99FF66><B>"+t+"</B></TD>";const n=this._finals[t];let r=null;if(n>0){r==null&&(r="#FFFFCC");let o=mt.translateString(this._tokenNames.get(n-2));this.getOrigin(t)>=0&&(o+=" / "+this.getOrigin(t)),e+="<TD bgcolor="+r+" nowrap>"+o+"</TD>"}else n==0?(r==null&&(r="#99CCFF"),e+="<TD bgcolor="+r+"><B>:</B></TD>"):n==-2?e+="<TD bgcolor=#FF0000>?</TD>":(r==null&&(r="#FFCC99"),e+="<TD bgcolor="+r+">?</TD>");const i=this._transitions.get(t);for(const o of this._alphabet.list()){e+="<TD width=40 bgcolor=#F5F5F5>";const a=i.get(String.fromCodePoint(o));a!=null&&a>=0?e+=a:e+="-",e+="</TD>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e}escapeSpecialCharacters(e){return e.replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\s/g,"' '")}}const ue=class ue{constructor(){R(this,"scannerName","Lexico");R(this,"parserName","Sintatico");R(this,"semanticName","Semantico");R(this,"pkgName","");R(this,"generateScanner",!0);R(this,"generateParser",!0);R(this,"language",ue.LANG_JAVA);R(this,"parser",ue.PARSER_SLR);R(this,"scannerCaseSensitive",!0);R(this,"scannerTable",ue.SCANNER_TABLE_FULL);R(this,"input",ue.INPUT_STRING)}toString(){let e="";switch(e+="GenerateScanner = "+this.generateScanner,e+=`
GenerateParser = `+this.generateParser,e+=`
Language = `,this.language){case ue.LANG_CPP:e+="C++";break;case ue.LANG_JAVA:e+="Java";break;case ue.LANG_DELPHI:e+="Delphi";break}if(e+=`
ScannerName = `+this.scannerName,this.generateParser&&(e+=`
ParserName = `+this.parserName,e+=`
SemanticName = `+this.semanticName),this.pkgName.length>0&&(e+=`
Package = `+this.pkgName),this.generateScanner){switch(e+=`
ScannerCaseSensitive = `+this.scannerCaseSensitive,e+=`
ScannerTable = `,this.scannerTable){case ue.SCANNER_TABLE_FULL:e+="Full";break;case ue.SCANNER_TABLE_COMPACT:e+="Compact";break;case ue.SCANNER_TABLE_HARDCODE:e+="Hardcode";break}switch(e+=`
Input = `,this.input){case ue.INPUT_STREAM:e+="Stream";break;case ue.INPUT_STRING:e+="String";break}}if(this.generateParser)switch(e+=`
Parser = `,this.parser){case ue.PARSER_LR:e+="LR";break;case ue.PARSER_LALR:e+="LALR";break;case ue.PARSER_SLR:e+="SLR";break;case ue.PARSER_LL:e+="LL";break;case ue.PARSER_REC_DESC:e+="RD";break}return e}constructorFromString(e){let t=new ue;if(e===void 0)return t;const n=e.split(`
`);for(const r of n){const[i,o]=r.split("=");t.setOption(i.trim(),o.trim())}return t}setOption(e,t){if(e.toUpperCase()==="GenerateScanner".toUpperCase())this.generateScanner=/true/i.test(t);else if(e.toUpperCase()==="GenerateParser".toUpperCase())this.generateParser=/true/i.test(t);else if(e.toUpperCase()==="Language".toUpperCase())if(t.toUpperCase()==="C++".toUpperCase())this.language=ue.LANG_CPP;else if(t.toUpperCase()==="Java".toUpperCase())this.language=ue.LANG_JAVA;else if(t.toUpperCase()==="Delphi".toUpperCase())this.language=ue.LANG_DELPHI;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="ScannerName".toUpperCase())this.scannerName=t;else if(e.toUpperCase()==="ParserName".toUpperCase())this.parserName=t;else if(e.toUpperCase()==="SemanticName".toUpperCase())this.semanticName=t;else if(e.toUpperCase()==="Package".toUpperCase())this.pkgName=t;else if(e.toUpperCase()==="ScannerCaseSensitive".toUpperCase())this.scannerCaseSensitive=/true/i.test(t);else if(e.toUpperCase()=="ScannerTable".toUpperCase())if(t.toUpperCase()==="Full".toUpperCase())this.scannerTable=ue.SCANNER_TABLE_FULL;else if(t.toUpperCase()==="Compact".toUpperCase())this.scannerTable=ue.SCANNER_TABLE_COMPACT;else if(t.toUpperCase()==="Hardcode".toUpperCase())this.scannerTable=ue.SCANNER_TABLE_HARDCODE;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="Input".toUpperCase())if(t.toUpperCase()==="Stream".toUpperCase())this.input=ue.INPUT_STREAM;else if(t.toUpperCase()==="String".toUpperCase())this.input=ue.INPUT_STRING;else throw new Error("Erro processando arquivo");else if(e.toUpperCase()==="Parser".toUpperCase())if(t.toUpperCase()==="LR".toUpperCase())this.parser=ue.PARSER_LR;else if(t.toUpperCase()==="LALR".toUpperCase())this.parser=ue.PARSER_LALR;else if(t.toUpperCase()==="SLR".toUpperCase())this.parser=ue.PARSER_SLR;else if(t.toUpperCase()==="LL".toUpperCase())this.parser=ue.PARSER_LL;else if(t.toUpperCase()==="RD".toUpperCase())this.parser=ue.PARSER_REC_DESC;else throw new Error("Erro processando arquivo");else throw new Error("Erro processando arquivo")}};R(ue,"LANG_JAVA",0),R(ue,"LANG_CPP",1),R(ue,"LANG_DELPHI",2),R(ue,"PARSER_LR",0),R(ue,"PARSER_LALR",1),R(ue,"PARSER_SLR",2),R(ue,"PARSER_LL",3),R(ue,"PARSER_REC_DESC",4),R(ue,"SCANNER_TABLE_FULL",0),R(ue,"SCANNER_TABLE_COMPACT",1),R(ue,"SCANNER_TABLE_HARDCODE",2),R(ue,"INPUT_STREAM",0),R(ue,"INPUT_STRING",1);let Y=ue;class ft{constructor(e,t,n){R(this,"lhs");R(this,"rhs");R(this,"grammar");this.grammar=e,this.lhs=t,this.rhs=n===void 0?[]:n}clone(){return new ft(null,this.lhs,[...this.rhs])}get_lhs(){return this.lhs}clear_rhs(){this.rhs=[]}set_lhs(e){this.lhs=e}get_rhs(){return this.rhs}set_rhs(e,t){const n=this.rhs[e];return this.rhs[e]=t,n}add_rhs(e){return this.rhs.push(e),e}firstSymbol(){if(this.grammar==null)return-1;for(let e=0;e<this.rhs.length;e++)if(!this.grammar.isSemanticAction(this.rhs[e]))return this.rhs[e];return 0}setGrammar(e){this.grammar=e}getGrammar(){return this.grammar}toString(){if(this.grammar==null)return"error";const e=[];if(e.push(this.grammar.symbols[this.lhs]+" ::="),this.rhs.length===0)e.push(" "+jt.EPSILON_STR);else for(let t=0;t<this.rhs.length;t++)this.grammar.isSemanticAction(this.rhs[t])?e.push(" #"+(this.rhs[t]-this.grammar.FIRST_SEMANTIC_ACTION())):e.push(" "+this.grammar.symbols[this.rhs[t]]);return e.join("")}equals(e){if(this.lhs!==e.lhs)return!1;if(this.rhs.length!==e.rhs.length)return!1;for(let t=0;t<this.rhs.length;t++)if(this.rhs[t]!==e.rhs[t])return!1;return!0}static compareTo(e,t){if(e===null)return-1;if(e.lhs!==t.lhs)return e.lhs-t.lhs;{if(e.grammar===null)return-1;const n=e.grammar.isEpsilon(e.rhs),r=e.grammar.isEpsilon(t.rhs);if(n&&r)return 0;if(n)return 1;if(r)return-1;for(let i=0;i<e.rhs.length&&i<t.rhs.length;i++)if(e.rhs[i]!==t.rhs[i])return e.rhs[i]-t.rhs[i];return t.rhs.length-e.rhs.length}}}const Te=class Te{constructor(e,t,n,r){R(this,"_symbols",[]);R(this,"FIRST_NON_TERMINAL",0);R(this,"SEMANTIC_ACTION_COUNT",0);R(this,"_startSymbol",0);R(this,"firstSet",[]);R(this,"followSet",[]);R(this,"normalLR",!1);R(this,"_productions",new _e);const i=[...e],o=[...t],a=new _e;n.toArray().forEach(c=>a.add(c.clone()));const l=r;this.setSymbols(i,o,l),this.setProductions(a),this.fillFirstSet(),this.fillFollowSet()}FIRST_SEMANTIC_ACTION(){return this._symbols.length}LAST_SEMANTIC_ACTION(){return this.FIRST_SEMANTIC_ACTION()+this.SEMANTIC_ACTION_COUNT}setSymbols(e,t,n){this._symbols=[],this.FIRST_NON_TERMINAL=e.length+2,this._symbols[Te.EPSILON]=Te.EPSILON_STR,this._symbols[Te.DOLLAR]="$";for(let r=0,i=Te.FIRST_TERMINAL;r<e.length;r++,i++)this._symbols[i]=e[r];for(let r=0,i=this.FIRST_NON_TERMINAL;r<t.length;r++,i++)this._symbols[i]=t[r];this._startSymbol=n}setProductions(e){e.toArray().forEach(n=>this._productions.add(n));let t=0;for(let n=0;n<this._productions.size();n++){this._productions.get(n).setGrammar(this);for(let r=0;r<this._productions.get(n).get_rhs().length;r++)this._productions.get(n).get_rhs()[r]>t&&(t=this._productions.get(n).get_rhs()[r])}this.SEMANTIC_ACTION_COUNT=t-this.FIRST_SEMANTIC_ACTION()}isTerminal(e){return e<this.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=this.FIRST_NON_TERMINAL&&e<this.FIRST_SEMANTIC_ACTION()}isSemanticAction(e){return e>=this.FIRST_SEMANTIC_ACTION()}get productions(){return this._productions}get symbols(){return this._symbols}get terminals(){return this.symbols.slice(2,this.FIRST_NON_TERMINAL)}get nonTerminals(){return this.symbols.slice(this.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION())}get startSymbol(){return this._startSymbol}asNormalLR(){if(this.normalLR)return this;const e=this.terminals,t=2+this.SEMANTIC_ACTION_COUNT,n=this.nonTerminals,r=[...n,...new Array(t)],i=new _e(0);i.setItems(this._productions.toArray());for(let l=0;l<this.SEMANTIC_ACTION_COUNT+1;l++)r[n.length+l]="<#"+l+">",i.add(new ft(null,this.FIRST_SEMANTIC_ACTION()+l,[]));r[r.length-1]="<-START->";const o=new ft(null,this.FIRST_SEMANTIC_ACTION()+t-1,[this.startSymbol]);i.add(o);const a=new Te(e,r,i,this.FIRST_SEMANTIC_ACTION()+t-1);return a.normalLR=!0,a}createProduction(e,t){if(t===void 0)return new ft(this,e,[]);const n=new ft(this,e,t);for(let r=0;r<this._productions.size();r++)if(this._productions.get(r).equals(n))return null;return n}isEpsilon(e,t){t===void 0&&(t=0);for(let n=t;n<e.length;n++)if(!this.isSemanticAction(e[n]))return!1;return!0}markEpsilon(){const e=new ye;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);this.isEpsilon(r.get_rhs())&&e.add(r.get_lhs())}for(let n=this.FIRST_SEMANTIC_ACTION();n<=this.LAST_SEMANTIC_ACTION();n++)e.add(n);let t=!0;for(;t;){t=!1;let n;for(let r=0;r<this._productions.size();r++){const i=this._productions.get(r);n=!0;for(let o=0;o<i.get_rhs().length;o++)n=n&&e.has(i.get_rhs()[o]);n&&!e.has(i.get_lhs())&&(t=!0,e.add(i.get_lhs()))}}return e}first(e,t){if(!Array.isArray(e))return this.isSemanticAction(e)?Te.EMPTY_SET:this.firstSet[e];t===void 0&&(t=0);const n=new ye;if(e.length-t==1&&e[t]==Te.DOLLAR&&n.add(Te.DOLLAR),this.isEpsilon(e,t))n.add(Te.EPSILON);else{const r=e.length;for(;this.isSemanticAction(e[t]);)t++;let i=this.first(e[t]).clone();i.delete(Te.EPSILON),n.addAll(i);let o=t;for(;o<r-1&&this.first(e[o]).has(Te.EPSILON);)o++,i=this.first(e[o]).clone(),i.delete(Te.EPSILON),n.addAll(i);o==r-1&&this.first(e[o]).has(Te.EPSILON)&&n.add(Te.EPSILON)}return n}fillFirstSet(){const e=this.markEpsilon();this.firstSet=new Array;for(let n=0;n<this._symbols.length;n++)this.firstSet[n]=new ye;for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)e.has(n)&&this.firstSet[n].add(Te.EPSILON);for(let n=Te.FIRST_TERMINAL;n<this.FIRST_NON_TERMINAL;n++){this.firstSet[n].add(n);for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++){let i=!1;for(let o=0;o<this._productions.size();o++){const a=this._productions.get(o);if(a.get_lhs()==r&&!this.isEpsilon(a.get_rhs())&&a.firstSymbol()==n){i=!0;break}}i&&this.firstSet[r].add(n)}}let t;do{t=!1;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n),i=this.firstSet[r.get_lhs()].clone(),o=this.first(r.get_rhs());this.firstSet[r.get_lhs()].addAll(o),t||i.equals(this.first(r.get_lhs()))||(t=!0)}}while(t)}fillFollowSet(){this.followSet=new Array;for(let t=0;t<this._symbols.length;t++)this.followSet[t]=new ye;this.followSet[this._startSymbol].add(Te.DOLLAR);let e;do{e=!1;for(let t=0;t<this._productions.size();t++){const n=this._productions.get(t);for(let r=0;r<n.get_rhs().length;r++)if(this.isNonTerminal(n.get_rhs()[r])){const i=this.first(n.get_rhs(),r+1),o=i.has(Te.EPSILON);if(n.get_rhs().length>r+1){i.delete(Te.EPSILON);const a=this.followSet[n.get_rhs()[r]].clone();this.followSet[n.get_rhs()[r]].addAll(i),!e&&!this.followSet[n.get_rhs()[r]].equals(a)&&(e=!0)}if(o){const a=this.followSet[n.get_rhs()[r]].clone();this.followSet[n.get_rhs()[r]].addAll(this.followSet[n.get_lhs()]),!e&&!this.followSet[n.get_rhs()[r]].equals(a)&&(e=!0)}}}}while(e)}stringFirstFollow(){let e="";for(let t=this.FIRST_NON_TERMINAL;t<this.firstSet.length;t++){let n="";n+=`FIRST( ${this.symbols[t]} ) = { `;for(let r=0;r<this.firstSet[t].size;r++)this.firstSet[t].list()[r]&&(n+=`${this.symbols[r]} `);n+="}",e=+n+`
`}for(let t=this.FIRST_NON_TERMINAL;t<this.followSet.length;t++){let n="";n+=`FOLLOW(${this.symbols[t]}) = { `;for(let r=0;r<this.followSet[t].size;r++)this.followSet[t].list()[r]&&(n+=this.symbols[r]+" ");n+="}",e+=n+`
`}return e}ffAsHTML(){let e="";e+='<HTML><HEAD><TITLE>First &amp; Follow</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',e+="<TR align=center><TD bgcolor=black><FONT color=white><B>SÍMBOLO</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FIRST</B></FONT></TD><TD bgcolor=black><FONT color=white><B>FOLLOW</B></FONT></TD></TR>";for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++){e+="<TR align=center>",e+=`<TD nowrap bgcolor=#F5F5F5><B> ${mt.translateString(this.symbols[t])} </B></TD>`;let n="  ";this.firstSet[t].list().forEach(r=>n+=this.symbols[r]+", "),n=n.slice(0,-2),e+=`<TD nowrap bgcolor=#F5F5F5>${mt.translateString(n)}</TD>`,n="  ",this.followSet[t].list().forEach(r=>n+=this.symbols[r]+", "),n=n.slice(0,-2),e+=`<TD nowrap bgcolor=#F5F5F5>${mt.translateString(n)}</TD>`,e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e}removeImproductiveSymbols(){const e=this.getProductiveSymbols();this.updateSymbols(e)}removeUselessSymbols(){this.removeImproductiveSymbols(),this.removeUnreachableSymbols()}removeRepeatedProductions(){}productionsFor(e){const t=new ye;for(let n=0;n<this.productions.size();n++)this.productions.get(n).get_lhs()==e&&t.add(n);return t}transformToFindRecursion(e){const t=new _e;e.toArray().forEach(n=>t.add(n));for(let n=this.FIRST_NON_TERMINAL;n<this.FIRST_SEMANTIC_ACTION();n++)for(let r=this.FIRST_NON_TERMINAL;r<n;r++)for(let i=0;i<t.size();i++){const o=t.get(i);if(o.get_lhs()==n&&o.firstSymbol()==r){t.toArray().splice(i,1),i--;const a=[];for(let l=0;l<o.get_rhs().length&&this.isSemanticAction(o.get_rhs()[l]);l++)a.push(o.get_rhs()[l]);for(let l=0;l<t.size();l++){const c=t.get(l);if(c.get_lhs()==r){const p=new Array(c.get_rhs().length+o.get_rhs().length-1);let h=0;for(;h<a.length;h++)p[h]=a[h];let m=h;for(h=0;h<c.get_rhs().length;h++)p[h+m]=c.get_rhs()[h];for(m=m+h-(a.length+1),h=a.length+1;h<o.get_rhs().length;h++)p[h+m]=o.get_rhs()[h];const d=this.createProduction(o.get_lhs(),p);d!=null&&t.add(d)}}}}return t}removeRecursion(){this._productions=this.transformToFindRecursion(this._productions),this.removeDirectRecursion()}removeDirectRecursion(){for(let e=this.FIRST_NON_TERMINAL;e<this.FIRST_SEMANTIC_ACTION();e++){let t=this.productionsFor(e);const n=this.productionsFor(e);let r=-1;const i=t.list();for(let o=0;o<i.length;o++){const a=i[o];this._productions.get(a).get_lhs()!=this._productions.get(a).firstSymbol()&&i.splice(o,1)}if(t=new ye,t.addAllArray(i),t.size>0){r=this.createSymbol(this.addTail(this._symbols[e]));for(const o of n){const a=this._productions.get(o);t.list()[o]?(a.get_rhs().splice(0,1),a.get_rhs().push(r),a.set_lhs(r)):a.get_rhs().push(r)}}if(r!=-1){const o=this.createProduction(r);o!=null&&this.productions.add(o)}}this.fillFirstSet(),this.fillFollowSet(),this.sort()}createSymbol(e){for(const n of this._productions){const r=n.get_rhs();for(let i=0;i<r.length;i++)this.isSemanticAction(r[i])&&r.push(i,r[i]+1)}let t=new Array(this._symbols.length+1);return t=[...this._symbols],this._symbols=t,this._symbols[this._symbols.length-1]=e,this._symbols.length-1}derives(e,t){if(e==t)return!0;const n=new ye;n.add(t);for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)for(const i of n)if(this.derivesDirectly(r,i)&&!n.list()[r]){n.add(r),r=-1;continue}return n.list()[e]!=0}derivesDirectly(e,t){const n=this.markEpsilon();for(let r=0;r<this._productions.size();r++){const i=this._productions.get(r);if(i.get_lhs()==e)if(i.get_rhs().length==1){if(i.get_rhs()[0]==t)return!0}else{const o=i.get_rhs();for(let a=0;a<o.length;a++)if(o[a]==t){let l=!0;for(let c=0;c<a;c++)n.list()[o[c]]||(l=!1);for(let c=a+1;c<o.length;c++)n.list()[o[c]]||(l=!1);if(l)return!0}}}return!1}removeUnitaryProductions(){const e=new _e;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);(r.get_rhs().length!=1||r.get_rhs()[0]!=r.get_lhs())&&e.add(r)}const t=[];for(let n=this.FIRST_NON_TERMINAL;n<t.length;n++){t[n]=new ye;for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)this.derives(n,r)&&t[n].add(r)}this._productions=new _e;for(let n=0;n<e.size();n++){const r=e.get(n);if(r.get_rhs().length!=1||!this.isNonTerminal(r.get_rhs()[0])){for(let i=this.FIRST_NON_TERMINAL;i<t.length;i++)if(t[i].list()[r.get_lhs()]){const o=this.createProduction(i,r.get_rhs());o!=null&&this._productions.add(o)}}}this.sort()}removeEpsilon(){const e=this.markEpsilon(),t=new _e;for(let n=0;n<this._productions.size();n++){const r=this._productions.get(n);if(!this.isEpsilon(r.get_rhs())){let i=!0;for(let o=0;o<r.get_rhs().length;o++)i=i&&e.list()[r.get_rhs()[o]]!=0;i||t.add(r)}}for(let n=0;n<t.size();n++){const r=t.get(n);if(!this.isEpsilon(r.get_rhs())){let i=0;for(;i<r.get_rhs().length;){for(;i<r.get_rhs().length&&!(!this.isSemanticAction(r.get_rhs()[i])&&e.list()[r.get_rhs()[i]]);i++);if(i<r.get_rhs().length){const o=this.derivationAt(r,i);o!=null&&!t.contains(o)&&t.add(o),i++}}}}if(e.list()[this._startSymbol]){const n=this.createSymbol(this.addTail(this._symbols[this._startSymbol]));let r=this.createProduction(n,new Array(this._startSymbol));r!=null&&t.add(r),r=this.createProduction(n),r!=null&&t.add(r),this._startSymbol=n,this.fillFirstSet(),this.fillFollowSet()}this._productions=t,this.sort()}derivationAt(e,t){let n=new Array;for(let i=0;i<this._productions.size();i++)if(this._productions.get(i).get_lhs()==e.get_rhs()[t]&&this.isEpsilon(this._productions.get(i).get_rhs())){n=this._productions.get(i).get_rhs();break}const r=new Array;for(let i=0;i<t;i++)r.push(e.get_rhs()[i]);for(let i=0;i<n.length;i++)r.push(n[i]);for(let i=t+1;i<e.get_rhs().length;i++)r.push(e.get_rhs()[i]);return this.createProduction(e.get_lhs(),r)}addTail(e){e=e.substring(0,e.length-1)+"_T>";for(let t=0;t<this._symbols.length;t++)this._symbols[t]!=null&&this._symbols[t]==e&&(e=e.substring(0,e.length-1)+"_T>",t=0);return e}sort(){for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++){const n=this._symbols[t].substring(0,this._symbols[t].length-1)+"_T>";let r=t+1;for(;r<this.FIRST_SEMANTIC_ACTION()&&this._symbols[r]!=n;r++);if(r<this.FIRST_SEMANTIC_ACTION()){const i=t+1,o=r;i!=o&&this.moveSymbol(o,i)}}this.moveSymbol(this._startSymbol,this.FIRST_NON_TERMINAL);const e=this._productions.toArray().sort(ft.compareTo);this._productions.clear(),e.forEach(t=>this._productions.add(t))}moveSymbol(e,t){const n=this._symbols[e];for(let r=e;r>t;r--)this._symbols[r]=this._symbols[r-1];this._symbols[t]=n,this._startSymbol==e?this._startSymbol=t:this._startSymbol>=t&&this._startSymbol<e&&this._startSymbol++;for(const r of this._productions){r.get_lhs()==e?r.set_lhs(t):r.get_lhs()>=t&&r.get_lhs()<e&&r.set_lhs(r.get_lhs()+1);const i=r.get_rhs();for(let o=0;o<i.length;o++)i[o]==e?i.push(o,t):i[o]>=t&&i[o]<e&&i.push(o,i[o]+1)}}isLL(){return this.isFactored()&&!this.hasLeftRecursion()&&this.passThirdCondition()}hasLeftRecursion(){const e=this.transformToFindRecursion(this._productions);for(let t=0;t<e.size();t++)if(e.get(t).get_lhs()==e.get(t).firstSymbol())return!0;return!1}getLeftRecursiveSimbol(){const e=this.transformToFindRecursion(this._productions);for(let t=0;t<e.size();t++)if(e.get(t).get_lhs()==e.get(t).firstSymbol())return e.get(t).get_lhs();return-1}getNonFactoratedProductions(){const e=new ye;for(let t=0;t<this._productions.size();t++){const n=this._productions.get(t);for(let r=t+1;r<this.productions.size();r++){const i=this._productions.get(r);if(n.get_lhs()==i.get_lhs()){const o=this.first(n.get_rhs());o.intersection(this.first(i.get_rhs())),o.isEmpty()||(e.add(t),e.add(r))}}if(e.size>0)break}return e}isFactored(){for(let e=0;e<this._productions.size();e++){const t=this._productions.get(e);for(let n=e+1;n<this._productions.size();n++){const r=this.productions.get(n);if(t.get_lhs()==r.get_lhs()){const i=this.first(t.get_rhs());if(i.intersection(this.first(r.get_rhs())),!i.isEmpty())return!1}}}return!0}passThirdCondition(){const e=this.markEpsilon();for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++)if(e.has(t)){const n=new ye(this.firstSet[t]);if(n.intersection(this.followSet[t]),!n.isEmpty())return!1}return!0}getProductiveSymbols(){const e=new ye;for(let n=Te.FIRST_TERMINAL;n<this.FIRST_NON_TERMINAL;n++)e.add(n);for(let n=this.FIRST_SEMANTIC_ACTION();n<=this.LAST_SEMANTIC_ACTION();n++)e.add(n);e.add(Te.EPSILON);let t;do{t=!1;const n=new ye;for(let r=this.FIRST_NON_TERMINAL;r<this.FIRST_SEMANTIC_ACTION();r++)if(!e.has(r))for(let i=0;i<this._productions.size();i++){const o=this._productions.get(i);if(o.get_lhs()==r){let a=!0;for(let l=0;l<o.get_rhs().length;l++)a=a&&e.has(o.get_rhs()[l]);a&&(n.add(r),t=!0)}}e.addAll(n)}while(t);return e}removeUnreachableSymbols(){const e=this.getReachableSymbols();this.updateSymbols(e)}getReachableSymbols(){const e=new ye;e.add(this._startSymbol);let t;do{t=!1;const n=new ye;for(let r=0;r<this._symbols.length;r++)if(!e.has(r))for(let i=0;i<this.productions.size();i++){const o=this._productions.get(i);if(e.has(o.get_lhs())){for(let a=0;a<o.get_rhs().length;a++)if(o.get_rhs()[a]==r){n.add(r),t=!0;break}}}e.addAll(n)}while(t);return e}uselessSymbolsHTML(){const e=this.clone();try{e.removeUselessSymbols()}catch{}const t=e.symbols,n=new ye;for(let o=2;o<this._symbols.length;o++)for(let a=0;a<t.length;a++)if(t[a]==this._symbols[o]){n.add(o);break}let r="";r+='<HTML><HEAD><TITLE>Símbolos inúteis</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif">';let i=0;for(let o=2;o<this._symbols.length;o++)n.has(o)||(r+=this._symbols[o]+"<br>",i++);return i==0&&(r+="Não há símbolos inúteis"),r+="</TABLE></FONT></BODY></HTML>",r}setToStr(e){let t="{ ";for(let n=0;n<e.size;n++)e.list()[n]&&(t+='"'+this._symbols[n]+'" ');return t+="}",t}factorate(){if(this.hasLeftRecursion())throw Error("new LeftRecursionException();");let e=!0;for(;e;){e=!1;for(let t=this.FIRST_NON_TERMINAL;t<this.FIRST_SEMANTIC_ACTION();t++)e=e||this.factorateLeft(t)}}factorateLeft(e){let t=!1;const n=this.productionsFor(e);let r=new ye;const i=this.conflict(n,r);if(!r.isEmpty()){t=!0;for(let p=0;p<this._productions.size();p++){const h=this._productions.get(p);if(h.get_lhs()==e&&this.first(h.get_rhs()).list()[i]&&h.firstSymbol()!=i){const m=this.leftMostDerive(h);this._productions.toArray().splice(p,1),m.toArray().forEach(d=>this._productions.add(d)),p--,this.fillFirstSet(),this.fillFollowSet()}}r=new ye;for(let p=0;p<this._productions.size();p++){const h=this._productions.get(p);h.get_lhs()==e&&h.firstSymbol()==i&&r.add(p)}const o=this.createSymbol(this.addTail(this._symbols[e])),a=this.extractPrefix(r);for(const p of r.list()){const h=this._productions.get(p);h.set_lhs(o),h.get_rhs().length>a.length?h.get_rhs().splice(0,a.length):h.clear_rhs()}const l=new Array;l.push(...a),l.push(o);const c=this.createProduction(e,l);c!=null&&this._productions.add(c),this.fillFirstSet(),this.fillFollowSet(),this.sort()}return t}leftMostDerive(e){if(this.isTerminal(e.firstSymbol()))return new _e;{const t=new _e,n=e.firstSymbol(),r=new Array;for(let i=0;i<e.get_rhs().length&&this.isSemanticAction(e.get_rhs()[i]);i++)r.push(e.get_rhs()[i]);for(const i of this.productionsFor(n).list()){const o=this.productions.get(i),a=new Array;for(let c=0;c<r.length;c++)a.push(r[c]);for(let c=0;c<o.get_rhs().length;c++)a.push(o.get_rhs()[c]);for(let c=r.length+1;c<e.get_rhs().length;c++)a.push(e.get_rhs()[c]);const l=this.createProduction(e.get_lhs(),a);l!=null&&!t.contains(l)&&t.add(l)}return t}}extractPrefix(e){const t=new Array;let n,r=0;do{n=!0;let i=0;const o=this._productions.get(i);if(o.get_rhs().length>r){const a=o.get_rhs()[r];for(;i>e.size;i++){const l=this.productions.get(i);(l.get_rhs().length<=r||l.get_rhs()[r]!=a)&&(n=!1)}n&&(t.push(o.get_rhs()[r]),r++)}else n=!1}while(n);return t}conflict(e,t){const n=new Array(this._symbols.length);for(let o=0;o<n.length;o++)n[o]=0;for(const o of e){const a=this._productions.get(o);for(const l of this.first(a.get_rhs()))n[l]++}n[Te.EPSILON]=0,n[Te.DOLLAR]=0;let r=0,i=0;for(let o=0;o<n.length;o++)n[o]>r&&(r=n[o],i=o);if(r>1)for(const o of e)this.first(this._productions.get(o).get_rhs()).list()[i]&&t.add(o);return i}toString(){let e="",t="",n=!0;for(let r=0;r<this.productions.size();r++){const i=this._productions.get(r);if(this._symbols[i.get_lhs()]!=t)n||(e+=`;

`),n=!1,t=this._symbols[i.get_lhs()],e+=t+" ::=";else{e+=`
`;for(let o=0;o<t.length;o++)e+=" ";e+="   |"}if(i.get_rhs().length==0)e+=" "+Te.EPSILON_STR;else for(let o=0;o<i.get_rhs().length;o++)if(e+=" ",this.isSemanticAction(i.get_rhs()[o])){const a=i.get_rhs()[o]-this.FIRST_SEMANTIC_ACTION();e+="#"+a}else{const a=this._symbols[i.get_rhs()[o]];e+=a}}return e+=`;
`,e}clone(){try{const e=structuredClone(this),t=new Array(this.FIRST_NON_TERMINAL-2),n=new Array(this.FIRST_SEMANTIC_ACTION()-this.FIRST_NON_TERMINAL);for(let i=0;i<t.length;i++)t[i]=this._symbols[i+2].toString();for(let i=0;i<n.length;i++)n[i]=this._symbols[i+this.FIRST_NON_TERMINAL].toString();const r=new _e;for(let i=0;i<this._productions.size();i++){const o=new Array(this._productions.get(i).get_rhs().length);for(let a=0;a<o.length;a++)o[a]=this._productions.get(i).get_rhs()[a];r.add(new ft(null,this._productions.get(i).get_lhs(),o))}return e.setSymbols(t,n,this._startSymbol),e.setProductions(r),e.fillFirstSet(),e.fillFollowSet(),e}catch{throw new Error("Internal Error")}}removeSymbol(e){this._symbols.splice(e,1),this._startSymbol>e&&this._startSymbol--,this.FIRST_NON_TERMINAL>e&&this.FIRST_NON_TERMINAL--;for(let t=0;t<this._productions.size();t++){const n=this.productions.get(t);if(n.get_lhs()==e){this.productions.toArray().splice(t,1);continue}else n.get_lhs()>e&&n.set_lhs(n.get_lhs()-1);for(let r=0;r<n.get_rhs().length;r++){if(n.get_rhs()[r]==e){this.productions.toArray().splice(t,1);break}n.get_rhs()[r]>e&&n.set_rhs(r,n.get_rhs()[r]-1)}}}updateSymbols(e){e.add(Te.EPSILON),e.add(Te.DOLLAR);let t=0;for(let n=0;n<this._symbols.length;n++)e.list()[n]||(this.removeSymbol(n-t),t++);this.fillFirstSet(),this.fillFollowSet()}};R(Te,"EPSILON",0),R(Te,"DOLLAR",1),R(Te,"FIRST_TERMINAL",Te.EPSILON+2),R(Te,"EPSILON_STR","î"),R(Te,"EMPTY_SET",new ye(Te.EPSILON));let jt=Te;const Ne=class Ne{constructor(e,t){R(this,"parameter");R(this,"type");this.type=e,this.parameter=t}getType(){return this.type}getParameter(){return this.parameter}static createShift(e){return new Ne(Ne.SHIFT,e)}static createReduce(e){return new Ne(Ne.REDUCE,e)}static createAction(e){return new Ne(Ne.ACTION,e)}static createAccept(){return new Ne(Ne.ACCEPT,0)}static createGoTo(e){return new Ne(Ne.GOTO,e)}static createError(){return new Ne(Ne.ERROR,0)}toString(){switch(this.type){case Ne.SHIFT:return"SHIFT("+this.parameter+")";case Ne.REDUCE:return"REDUCE("+this.parameter+")";case Ne.ACTION:return"SEM.ACT("+this.parameter+")";case Ne.ACCEPT:return"ACCEPT";case Ne.GOTO:return""+this.parameter;case Ne.ERROR:return"-";default:return"???"}}equals(e){try{let t=e,n=this.type==t.type&&this.parameter==t.parameter;return n===void 0?!1:n}catch{return!1}}hashCode(){let e=43;return e=e*this.parameter+17,e=e*this.type+17,e}};R(Ne,"SHIFT",0),R(Ne,"REDUCE",1),R(Ne,"ACTION",2),R(Ne,"ACCEPT",3),R(Ne,"GOTO",4),R(Ne,"ERROR",5),R(Ne,"CONSTANTS",["SHIFT ","REDUCE","ACTION","ACCEPT","GO_TO ","ERROR "]);let Fe=Ne;class xo{constructor(){R(this,"conflictList",new _e)}}class ru extends xo{constructor(t,n){super();R(this,"_conflict");R(this,"_state");R(this,"_conflictListModel");this._conflict=t===void 0?[]:t,this._state=n===void 0?-1:n,this._conflictListModel=new Array}resolve(t,n){let r;n==0?r="$":r=t.terminals[n-1];let i="";i+="- O estado no topo da pilha é: "+this._state+`
`,i+="- O símbolo da entrada é: "+r+`
`,i+=`
Qual ação a ser executada:`,this._conflictListModel=[];for(let l=0;l<this._conflict.length;l++){let c;switch(this._conflict[l].getType()){case Fe.REDUCE:c="Reduzir, pela produção "+this._conflict[l].getParameter();break;case Fe.ACTION:c="Executar ação semântica "+this._conflict[l].getParameter();break;case Fe.SHIFT:c='Empilhar "'+r+'"';break;default:c=this._conflict[l].toString();break}i+=`
Opção `+(l+1)+": "+c,this._conflictListModel.push({label:c,command:l})}i+=`

OBS: Se cancelar ou digitar opção inválida,
a opção 1 será escolhida como padrão.`;let o=prompt(i,"1");o==null&&(o="1");let a=Number(o);return isNaN(a)||a<0||a>this._conflict.length?a=0:a--,alert("Teste: "+a+"  teste:"+this._conflict.length),this._conflictListModel[a].command}showModal(t,n,r,i,o){const a=document.getElementById("myModal"),l=document.getElementById("confirmBtn"),c=document.getElementById("cancelBtn");a.style.display="block",l.textContent=n,c.textContent=r,l.onclick=function(){a.style.display="none",i&&i()},c.onclick=function(){a.style.display="none",o&&o()}}showDialog(t,n){const r=document.createElement("dialog");r.style.padding="20px",r.innerHTML=`<p>${t}<p>`,n.forEach(i=>{const o=document.createElement("button");o.textContent=i.label,o.onclick=()=>{r.close(),document.body.removeChild(r),i.command},r.appendChild(o),r.appendChild(document.createElement("br"))}),r.addEventListener("close",()=>{document.body.removeChild(r)}),document.body.appendChild(r),r.showModal()}setup(t,n){this._conflict=t,this._state=n}}class vt{constructor(e,t,n){R(this,"_production");R(this,"_position");R(this,"_lookahead");R(this,"_g");this._production=e,this._position=t,this._lookahead=n===void 0?0:n,this._g=e.getGrammar()}get position(){return this._position}get lookahead(){return this._lookahead}get production(){return this._production}equals(e){try{return e.production.equals(this._production)&&e.position==this._position&&this._lookahead==e.lookahead}catch{return!1}}toString(){var t,n;let e="";if(this._g==null)throw new ee("Grammar to string is null");e+=this._g.symbols[this._production.get_lhs()]+" ::= ";for(let r=0;r<this._production.get_rhs().length&&r<this._position;r++){const i=this._production.get_rhs()[r];this._g.isSemanticAction(i)?e+="#"+(i-this._g.FIRST_SEMANTIC_ACTION())+" ":e+=this._g.symbols[i]+" "}e+="o ";for(let r=this._position;r<this._production.get_rhs().length;r++){const i=this._production.get_rhs()[r];this._g.isSemanticAction(i)?e+="#"+(i-this._g.FIRST_SEMANTIC_ACTION())+" ":e+=((t=this._g)==null?void 0:t.symbols[i])+" "}return this._lookahead!=0&&(e+=", ",e+=(n=this._g)==null?void 0:n.symbols[this._lookahead]),e.toString()}clone(){return new vt(this._production,this._position,this._lookahead)}compareTo(e){let t=ft.compareTo(this._production,e.production);return t!=0?t:(t=this._position-e.position,t!=0?t:this._lookahead-e.lookahead)}}class Ro{constructor(e){R(this,"g");R(this,"itemList");R(this,"semanticStart");R(this,"firstSementicAction");this.semanticStart=e.FIRST_SEMANTIC_ACTION(),this.firstSementicAction=e.FIRST_SEMANTIC_ACTION(),this.g=e.asNormalLR(),this.itemList=this.computeItems()}getErrors(e){const t=new _e;for(let n=0;n<e.length;n++){const r=new ye;for(let l=1;l<this.g.FIRST_NON_TERMINAL;l++)e[n][l-1].getType()!=Fe.ERROR&&r.add(l);let i="";const o=r.size;let a=0;for(const l of r.list())l==1?i+="fim de sentença":i+=this.g.symbols[l],o-a==2?i+=" ou ":o-a>2&&(i+=", "),a++;t.add(i.toString())}return t}get grammar(){return this.g}get firstSemanticAction(){return this.firstSementicAction}buildIntTable(){const e=this.buildTable(),t=[];for(let n=0;n<e.length;n++){t[n]=[];for(let r=0;r<e[n].length;r++)t[n][r]=[],t[n][r][0]=e[n][r].getType(),t[n][r][1]=e[n][r].getParameter()}return t}resolveConflicts(e){const t=[],n=Fe.createError();for(let r=0;r<e.length;r++){t[r]=[];for(let i=0;i<e[0].length;i++)switch(e[r][i].size){case 0:t[r][i]=n;break;case 1:t[r][i]=e[r][i].values().next().value;break;default:t[r][i]=this.solve(e[r][i],r,i);break}}return t}solve(e,t,n){const r=[];let i=0;for(const a of e)r[i]=a,i++;let o=!0;for(let a=1;a<r.length&&(o=o&&r[a-1].equals(r[a]),!!o);a++);if(o)return r[0];{const a=new ru;return a.setup(r,t),r[a.resolve(this.g,n)]}}tableAsHTML(){let e="";e+='<HTML><HEAD><TITLE>Tabela SLR(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const t=this.buildTable();e+="<TR>",e+="<TD  align=center rowspan=2 bgcolor=black nowrap><FONT color=white><B>ESTADO</B></FONT></TD>",e+="<TD  align=center colspan="+(this.g.FIRST_NON_TERMINAL-1)+" bgcolor=black nowrap><FONT color=white><B>AÇÃO</B></FONT></TD>",e+="<TD  align=center colspan="+(this.g.FIRST_SEMANTIC_ACTION()-this.g.FIRST_NON_TERMINAL)+" bgcolor=black nowrap><FONT color=white><B>DESVIO</B></FONT></TD>",e+="</TR>",e+="<TR>";for(let n=0;n<t[0].length-1;n++)e+="<TD  align=center bgcolor=black nowrap><FONT color=white><B>"+mt.translateString(this.g.symbols[n+1])+"</B></FONT></TD>";e+="</TR>";for(let n=0;n<t.length;n++){const r=t[n];e+="<TR>",e+="<TD bgcolor=black align=right nowrap><FONT color=white><B>"+n+"</B></FONT></TD>";for(let i=0;i<r.length-1;i++){const o=r[i];let a="";o!=null&&(a=o.toString());const l=i+1<this.g.FIRST_NON_TERMINAL?"#F5F5F5":"#E6E6E6";e+="<TD bgcolor="+l+" align=center nowrap>"+a+"</TD>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e.toString()}itemsAsHTML(){let e="";e+='<HTML><HEAD><TITLE>Itens SLR(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>';const t=this.itemList;e+="<TR>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Estado</B></FONT></TD>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Itens</B></FONT></TD>",e+="<TD  align=center bgcolor=black><FONT color=white><B>Desvio</B></FONT></TD>",e+="</TR>";for(let n=0;n<t.size();n++){const r=n%2==0?"#F5F5F5":"#E6E6E6",i=t.get(n);e+="<TR>",e+="<TD bgcolor="+r+" align=right rowspan="+i.size()+">"+n+"</TD>",e+="<TD bgcolor="+r+" nowrap>"+mt.translateString(i.get(0).toString())+"</TD>";let o=i.get(0),a=o.production;if(a.get_rhs().length>o.position){const l=a.get_rhs()[o.position],c=this.goTo(i,l),p=t.indexOf(c);e+="<TD bgcolor="+r+" align=right>"+p+"</TD>"}else e+="<TD bgcolor="+r+" align=right>&nbsp</TD>";e+="</TR>";for(let l=1;l<i.size();l++){if(e+="<TR>",e+="<TD bgcolor="+r+" nowrap>"+mt.translateString(i.get(l).toString())+"</TD>",o=i.get(l),a=o.production,a.get_rhs().length>o.position){const c=a.get_rhs()[o.position],p=this.goTo(i,c),h=this.getIndexFromList(t,p);e+="<TD bgcolor="+r+" align=right>"+h+"</TD>"}else e+="<TD bgcolor="+r+" align=right>&nbsp</TD>";e+="</TR>"}e+="</TR>"}return e+="</TABLE></FONT></BODY></HTML>",e.toString()}getIndexFromList(e,t){const n=e.toArray();for(let r=0;r<n.length;r++){const o=n[r].toString(),a=t.toString();if(o===a)return r}return console.log(t),-1}}class iu extends Ro{constructor(e){super(e)}closure(e){const t=new _e;t.setItems(e.toArray());for(let n=0;n<t.size();n++){const r=t.get(n),i=r.production;if(r.position<i.get_rhs().length){const o=i.get_rhs()[r.position];if(this.g.isNonTerminal(o)){const a=this.g.productionsFor(o);for(const l of a.list()){const c=new vt(this.g.productions.get(l),0);this.contains(t,c)||t.add(c)}}}}return t}contains(e,t){for(const n of e)if(t.equals(n))return!0;return!1}goTo(e,t){const n=new _e;for(const r of e.toArray()){const i=r.production;r.position<i.get_rhs().length&&i.get_rhs()[r.position]==t&&n.add(new vt(r.production,r.position+1))}return this.closure(n)}computeItems(){const e=new _e,n=this.g.productionsFor(this.g.startSymbol).first();e.add(new vt(this.g.productions.get(n),0));const r=new _e;r.add(this.closure(e));let i=!0;for(;i;)e:{i=!1;for(const o of r.toArray())for(let a=0;a<o.size();a++){const l=o.get(a),c=l.production;if(c.get_rhs().length>l.position){const p=this.goTo(o,c.get_rhs()[l.position]);if(p.size()!=0&&!this.containsList(r,p)){r.add(p),i=!0;break e}}}}return r}containsList(e,t){const n=t.toArray();for(const r of e){const i=r.toArray();if(i.length!==n.length)continue;let o=!0;for(let a=0;a<i.length;a++){const l=i[a],c=n[a];if(!l.equals(c)){o=!1;break}}if(o)return!0}return!1}buildTable(){const e=[];for(let n=0;n<this.itemList.size();n++){e[n]=[];for(let r=0;r<this.g.symbols.length-1;r++)e[n][r]=new Map}for(let n=0;n<e.length;n++){const r=this.itemList.get(n);for(let i=0;i<r.size();i++){const o=r.get(i),a=o.production,l=a.get_rhs();if(l.length>o.position){const c=l[o.position],p=this.goTo(r,c);if(this.g.isTerminal(c)){const h=Fe.createShift(this.indexOfListLRItem(this.itemList,p));e[n][c-1].set(h.hashCode(),h)}else{const h=Fe.createGoTo(this.indexOfListLRItem(this.itemList,p));e[n][c-1].set(h.hashCode(),h)}}else{const c=a.get_lhs();if(c==this.g.startSymbol){const p=Fe.createAccept();e[n][0].set(p.hashCode(),p)}else{const p=this.g.followSet[c];for(const h of p.list()){let m;c<this.semanticStart?m=Fe.createReduce(this.g.productions.indexOf(a)):m=Fe.createAction(c-this.semanticStart),e[n][h-1].set(m.hashCode(),m)}}}}}const t=e.map(n=>n.map(r=>new Set(r.values())));return this.resolveConflicts(t)}indexOfListLRItem(e,t){const n=t.toArray();for(let r=0;r<e.size();r++){const i=e.get(r).toArray();if(i.length!==n.length)continue;let o=!0;for(let a=0;a<i.length;a++){const l=i[a],c=n[a];if(!l.equals(c)){o=!1;break}}if(o)return r}return-1}}class No extends Ro{constructor(e){super(e)}closure(e){let t=!1;const n=e.toArray();do e:{t=!1;for(const r of e){const i=r.production;if(r.position<i.get_rhs().length){const o=i.get_rhs()[r.position];if(this.g.isNonTerminal(o)){const a=this.g.productionsFor(o);for(const l of a.list()){const c=this.g.productions.get(l),p=[];for(let m=r.position+1;m<i.get_rhs().length;m++)p.push(i.get_rhs()[m]);p.push(r.lookahead);const h=this.g.first(p);for(const m of h.list()){const d=new vt(c,0,m);if(!this.contains(n,d)){n.push(d),t=!0;break e}}}}}}}while(t);return e.setItems(n),e}goTo(e,t){const n=[];for(const i of e.toArray()){const o=i.production;i.position<o.get_rhs().length&&o.get_rhs()[i.position]==t&&n.push(new vt(i.production,i.position+1,i.lookahead))}const r=new _e;return r.setItems(n),this.closure(r)}computeItems(){const e=new _e,n=this.g.productionsFor(this.g.startSymbol).list()[0];e.add(new vt(this.g.productions.get(n),0,jt.DOLLAR));const r=new _e;r.add(this.closure(e));let i=!0;for(;i;)e:{i=!1;for(const o of r.toArray())for(let a=0;a<o.size();a++){const l=o.get(a),c=l.production;if(c.get_rhs().length>l.position){const p=this.goTo(o,c.get_rhs()[l.position]);if(p.size()!=0&&!this.containsList(r,p)){r.add(p),i=!0;break e}}}}return r}contains(e,t){for(const n of e){const r=n.toString(),i=t.toString();if(r===i)return!0}return!1}containsList(e,t){for(const n of e){const r=n.toString(),i=t.toString();if(r===i)return!0}return!1}buildTable(){const e=[];for(let n=0;n<this.itemList.size();n++){e[n]=[];for(let r=0;r<this.g.symbols.length-1;r++)e[n][r]=new Map}for(let n=0;n<e.length;n++){const r=this.itemList.get(n);for(let i=0;i<r.size();i++){const o=r.get(i),a=o.production,l=a.get_rhs();if(l.length>o.position){const c=l[o.position],p=this.goTo(r,c);if(this.g.isTerminal(c)){const h=Fe.createShift(this.indexOfListLRItem(this.itemList,p));e[n][c-1].set(h.hashCode(),h)}else{const h=Fe.createGoTo(this.indexOfListLRItem(this.itemList,p));e[n][c-1].set(h.hashCode(),h)}}else{const c=a.get_lhs();if(c==this.g.startSymbol){const p=Fe.createAccept();e[n][0].set(p.hashCode(),p)}else{const p=o.lookahead;let h;c<this.semanticStart?h=Fe.createReduce(this.g.productions.indexOf(a)):h=Fe.createAction(c-this.semanticStart),e[n][p-1].set(h.hashCode(),h)}}}}const t=e.map(n=>n.map(r=>new Set(r.values())));return this.resolveConflicts(t)}indexOfListLRItem(e,t){let n=0;for(const r of e){const i=r.toString(),o=t.toString();if(i===o)return n;n++}return-1}}class ou extends No{constructor(t){super(t);R(this,"compress",!1)}core(t){const n=new Set;for(let r=0;r<t.length;r++){const i=t[r],o=new vt(i.production,i.position);[...n].some(a=>a.toString()===o.toString())||n.add(o)}return n}computeItems(){const t=super.computeItems();for(let n=0;n<t.size();n++){const r=t.get(n),i=this.core(r.toArray());for(let o=n+1;o<t.size();o++){const a=t.get(o),l=this.core(a.toArray());if(this.equals(i,l)){for(let c=0;c<a.size();c++){const p=a.get(c);r.contains(p)||r.add(p)}t.removeByIndex(o),o--}}}return this.compress=!0,t}goTo(t,n){const r=super.goTo(t,n);if(this.compress){const i=this.core(r.toArray());for(let o=0;o<this.itemList.size();o++){const a=this.itemList.get(o);if(this.equals(i,this.core(a.toArray())))return a}}return r}equals(t,n){if(t.size!==n.size)return!1;for(const r of t){let i=!1;for(const o of n)if(r.equals(o)){i=!0;break}if(!i)return!1}return!0}}class xs{LRGeneratorFactory(){}static createGenerator(e,t){switch(t){case Y.PARSER_SLR:return new iu(e);case Y.PARSER_LR:return new No(e);case Y.PARSER_LALR:return new ou(e);default:return null}}}var Io={exports:{}};(function(s){(function(e){{var t=s.exports=e();t.HashMap=t}})(function(){function e(i){switch(this.clear(),arguments.length){case 0:break;case 1:{"length"in i?n(this,Array.prototype.concat.apply([],i)):this.copy(i);break}default:n(this,arguments);break}}var t=e.prototype={constructor:e,get:function(i){var o=this._data[this.hash(i)];return o&&o[1]},set:function(i,o){var a=this.hash(i);a in this._data||this.size++,this._data[a]=[i,o]},multi:function(){n(this,arguments)},copy:function(i){for(var o in i._data)o in this._data||this.size++,this._data[o]=i._data[o]},has:function(i){return this.hash(i)in this._data},search:function(i){for(var o in this._data)if(this._data[o][1]===i)return this._data[o][0];return null},delete:function(i){var o=this.hash(i);o in this._data&&(this.size--,delete this._data[o])},type:function(i){var o=Object.prototype.toString.call(i),a=o.slice(8,-1).toLowerCase();return!i&&(a==="domwindow"||a==="window")?i+"":a},keys:function(){var i=[];return this.forEach(function(o,a){i.push(a)}),i},values:function(){var i=[];return this.forEach(function(o){i.push(o)}),i},entries:function(){var i=[];return this.forEach(function(o,a){i.push([a,o])}),i},count:function(){return this.size},clear:function(){this._data={},this.size=0},clone:function(){return new e(this)},hash:function(i){switch(this.type(i)){case"undefined":case"null":case"boolean":case"number":case"regexp":return i+"";case"date":return"♣"+i.getTime();case"string":return"♠"+i;case"array":for(var o=[],a=0;a<i.length;a++)o[a]=this.hash(i[a]);return"♥"+o.join("⁞");default:return i.hasOwnProperty("_hmuid_")||(i._hmuid_=++e.uid,r(i,"_hmuid_")),"♦"+i._hmuid_}},forEach:function(i,o){for(var a in this._data){var l=this._data[a];i.call(o||this,l[1],l[0])}}};e.uid=0,typeof Symbol<"u"&&typeof Symbol.iterator<"u"&&(t[Symbol.iterator]=function(){var i=this.entries(),o=0;return{next:function(){if(o===i.length)return{done:!0};var a=i[o++];return{value:{key:a[0],value:a[1]},done:!1}}}}),["set","multi","copy","delete","clear","forEach"].forEach(function(i){var o=t[i];t[i]=function(){return o.apply(this,arguments),this}}),e.prototype.remove=e.prototype.delete;function n(i,o){for(var a=0;a<o.length;a+=2)i.set(o[a],o[a+1])}function r(i,o){Object.defineProperty&&Object.defineProperty(i,o,{enumerable:!1})}return e})})(Io);var au=Io.exports;const Ds=kr(au),qn=1,Ar=2,as=3,ls=4,Cr=5,lu=6,cu=7,uu=8,hu=9,du=10,fu=11,pu=12,mu=13,ot=14;let gu=class{constructor(e){R(this,"_in","");R(this,"_pos",0);R(this,"_quote",!1);e==null?this.setInput(""):this.setInput(e)}setInput(e){this._in=e,this._pos=0}get position(){return this._pos}nextToken(){let e=this._pos;for(;this.hasMoreChars();){e=this._pos;let t=this.nextChar();if(this._quote)if(t=='"'){if(this.hasMoreChars()){if(t=this.nextChar(),t=='"')return new xe(ot,'"',this._pos-2);this._pos--}this._quote=!1;continue}else return this.createToken(ot,""+t);switch(t){case" ":case`
`:case"\r":case"	":continue;case'"':this._quote=!0;continue;case"|":return this.createToken(Ar,"|");case"*":return this.createToken(as,"*");case"+":return this.createToken(ls,"+");case"?":return this.createToken(Cr,"?");case"(":return this.createToken(lu,"(");case")":return this.createToken(cu,")");case"[":return this.createToken(uu,"[");case"]":return this.createToken(hu,"]");case"^":return this.createToken(fu,"^");case".":return this.createToken(du,".");case"-":return this.createToken(pu,"-");case"\\":return this.processesAdvChar();case"{":return this.processesDefinition();default:return this.createToken(ot,""+t)}}if(this._quote)throw new Ie(`Era esperado '"'`,e);return null}processesAdvChar(){return new xe(ot,""+this.getSpecialChar(),this._pos-1)}createToken(e,t){return new xe(e,t,this._pos-1)}getSpecialChar(){let e=this._pos;if(!this.hasMoreChars)throw new Ie("Era esperado um Caracter Especial",e);let t=this.nextChar();if(t==null)return null;switch(t){case"b":return"\b";case"n":return`
`;case"f":return"\f";case"r":return"\r";case"e":return String.fromCharCode(27);case"t":return"	";case"	":return"	";case"s":return" ";case" ":return" ";case'"':return'"';case"\\":return"\\";case"|":return"|";case"*":return"*";case"+":return"+";case"?":return"?";case"(":return"(";case")":return")";case"{":return"{";case"}":return"}";case"[":return"[";case"]":return"]";case".":return".";case"^":return"^";case"-":return"-";default:if(this.isNumber(t))return this.getCharByCode(t);throw new Ie("Caracter especial inválido: '"+t+"'",this._pos)}}getCharByCode(e){let t=this._pos-1,n=this.nextChar();if(n==null)return null;if(this.hasMoreChars()&&this.isNumber(n)){let o=this.nextChar();if(o==null)return null;this.hasMoreChars()&&!this.isNumber(o)&&this._pos--}else this._pos--;let i=this._in.substring(t,this._pos).charCodeAt(0);if(i>255)throw new Ie("Valor decimal inválido (>255)",t);return String.fromCharCode(i)}processesDefinition(){let e="",t=this._pos,n="{";for(;this.hasMoreChars();){if(n=this.nextChar(),n==null)return null;if(n=="}")break;if(n!="_"&&!this.isLetterOrDigit(n))throw new Ie("Caracter inválido em uma definição: '"+n+"'",this._pos-1);e+=n}if(n!="}"&&!this.hasMoreChars())throw new Ie("Fim de expressão inesperado",this._pos);return new xe(mu,e.toString(),t)}hasMoreChars(){return this._pos<this._in.length}nextChar(){return this.hasMoreChars()?this._in.charAt(this._pos++):null}isLetterOrDigit(e){return e.toLowerCase()!=e.toUpperCase()||this.isNumber(e)}isNumber(e){return typeof e!="string"||e.trim()===""?!1:!Number.isNaN(Number(e))}};class mi{constructor(){R(this,"position",-1);R(this,"nullable",!1);R(this,"first",new ye);R(this,"last",new ye)}}class Ae{constructor(e,t,n){R(this,"_left");R(this,"_right");R(this,"_id",0);R(this,"_value","");R(this,"_backtrack",!0);R(this,"_context",-1);R(this,"_end",-1);R(this,"_alphabet",new ye);R(this,"_metaData",new mi);this._id=e,this._left=t,this._right=n,t!=null&&this.alphabet.addAll(t.alphabet),n!=null&&this.alphabet.addAll(n.alphabet)}deepestLeft(){let e=this;for(;;){let t=e.left;if(t==null&&(t=e.right),t==null)break;e=t}return e}static createUnionNode(e,t){let n=new Ae(Ar,e,t);return n.value="|",n}static createConcatNode(e,t){let n=new Ae(-1,e,t);return n.value="&",n}static createContextNode(e,t){let n=t.deepestLeft();if(n==null)return null;n.context=0;let r=new Ae(-1,e,t);return r.value="&",r}static createClosureNode(e){let t=new Ae(as,e,null);return t.value="*",t}static createClosureObNode(e){let t=new Ae(ls,e,null);return t.value="+",t}static createOptionalNode(e){let t=new Ae(Cr,e,null);return t.value="?",t}static createIntervalNode(e,t){let n=new Ae(ot,null,null);for(let i=e.charCodeAt(0);i<=t.charCodeAt(0);i++)n.alphabet.add(i);let r="[";for(let i of n.alphabet)r+=String.fromCharCode(i);return r+="]",n.value=r,n}static createComplementNode(e){let t=new Ae(ot,null,null);e.alphabet.has("	".charCodeAt(0))||t.alphabet.add("	".charCodeAt(0)),e.alphabet.has(`
`.charCodeAt(0))||t.alphabet.add(`
`.charCodeAt(0)),e.alphabet.has("\r".charCodeAt(0))||t.alphabet.add("\r".charCodeAt(0)),e.alphabet.has(" ".charCodeAt(0))||t.alphabet.add(" ".charCodeAt(0));for(let r=32;r<=126;r++)e.alphabet.has(r)||t.alphabet.add(r);for(let r=161;r<=255;r++)e.alphabet.has(r)||t.alphabet.add(r);let n="[";for(let r of t.alphabet)n+=String.fromCharCode(r);return n+="]",t.value=n,t}static createCharNode(e){let t=new Ae(ot,null,null);return t.value=e,t.alphabet.add(e.charCodeAt(0)),t}static createAllNode(){let e=new Ae(ot,null,null);e.alphabet.add("	".charCodeAt(0));for(let n=32;n<=126;n++)e.alphabet.add(n);for(let n=161;n<=255;n++)e.alphabet.add(n);let t="[";return e.alphabet.list().forEach(n=>{t+=String.fromCharCode(n)}),t+="]",e.value=t,e}static createEndNode(e,t){let n=new Ae(ot,null,null);return n.end=e,n.backtrack=t,n.value="#"+n.end,n}clone(){let e=structuredClone(this);return e.alphabet=new ye(this._alphabet),e.metaData=new mi,e.backtrack=!0,e.context=-1,e.end=-1,this._left!=null&&(e.left=this._left.clone()),this._right!=null&&(e.right=this._right.clone()),e}get left(){return this._left}set left(e){this._left=e}get right(){return this._right}set right(e){this._right=e}get id(){return this._id}set id(e){this._id=e}get value(){return this._value}set value(e){this._value=e}doBacktrack(){return this._backtrack}set backtrack(e){this._backtrack=e}get backtrack(){return this._backtrack}get context(){return this._context}set context(e){this._context=e}get end(){return this._end}set end(e){this._end=e}get alphabet(){return this._alphabet}set alphabet(e){this._alphabet=e}get metaData(){return this._metaData}set metaData(e){this._metaData=e}toString(){return String(0)}toStringLevel(e){var n,r;let t="";for(let i=0;i<e-2;i++)t+=" ";return e>2&&(t+="\\-"),t+=`value
`,this._left!=null&&(t+=String((n=this._left)==null?void 0:n.toStringLevel(e+2))),this._right!=null&&(t+=String((r=this._right)==null?void 0:r.toStringLevel(e+2))),t}}class Lo{constructor(e){R(this,"_definitions",new Ds);R(this,"_expressions",new Ds);R(this,"_specialCases",new Ds);R(this,"_root",null);R(this,"_alphabet",new ye);R(this,"_lastPosition",-1);R(this,"_tokenList",new _e);R(this,"_sensitive",!0);R(this,"_contextCount",0);R(this,"_next",[new ye]);R(this,"_nodes",[]);this._sensitive=e}addDefinition(e,t){if(this._definitions.has(e))throw new Me("Definição repetida: "+e);this._definitions.set(e,t),this._alphabet.addAll(t.alphabet)}getDefinitionById(e){return this._definitions.get(e)}addExpression(e,t,n){var a;this._alphabet.addAll(t.alphabet),this._tokenList.contains(e)||this._tokenList.add(e);let r=this._tokenList.indexOf(e),i=Ae.createEndNode(r+2,n);t=Ae.createConcatNode(t,i);let o=(a=t.left)==null?void 0:a.right;o!=null&&(o=o.deepestLeft(),o!=null&&o.context>=0&&(this._contextCount++,o.context=this._contextCount,i.context=this._contextCount)),this._expressions.set(e,t),this._root==null?this._root=t:this._root=Ae.createUnionNode(this._root,t)}addIgnore(e,t){this._alphabet.addAll(e.alphabet);let n=Ae.createEndNode(0,t);e=Ae.createConcatNode(e,n),this._root==null?this._root=e:this._root=Ae.createUnionNode(this._root,e)}addSpecialCase(e,t,n){if(this._sensitive||(n=n.toLocaleUpperCase()),!this._expressions.has(t))throw new Me("Token '"+t+"' não definido");let r=this._tokenList.indexOf(t)+2;if(this._tokenList.contains(e))throw new Me("Token '"+e+"' já definido");let i=this._tokenList.size()+2,o=this._specialCases.get(r);if(o==null)o=new ht,this._specialCases.set(r,o);else if(o.get(n)!=null)throw new Me("Já houve a definição de um caso especial de '"+t+`' com o valor"`+n+'"');o.set(n,i),this._tokenList.add(e)}generateAutomata(){let e=new _e,t=new ht,n=new ht,r=new ht,i=new ht,o=new ht;if(this._root==null)throw new Me("A Especificação Léxica deve conter a definição de pelo menos um Token");this.computeNext(),e.add(this._root.metaData.first);for(let a=0;a<e.size();a++){let l=e.get(a);for(let c of this._alphabet){let p=String.fromCharCode(c),h=new ye;for(let T of l){let f=this._nodes[T];if(f.end>=0){let S=a;if(!i.has(S)&&(i.set(S,f.end),o.set(S,f.backtrack),f.context>0&&!t.has(S))){let b=n.get(f.context);b!=null?t.set(S,b):t.set(S,0)}}f.context>=0&&(n.has(f.context)||n.set(f.context,a)),f.alphabet.has(p.charCodeAt(0))&&h.addAll(this._next[T])}let m=-1;h.isEmpty()||(m=this.getPositionStates(e,h),m==-1&&(e.add(h),m=e.size()-1));let d=a;if(r.has(d)||r.set(d,new ht),m!=-1){let T=r.get(d);if(T==null)return null;T.set(p,m)}}}return this.makeAtomata(e,r,i,o,t)}makeAtomata(e,t,n,r,i){let o=new _e;for(let d of t)o.add(d[1]);let a=new Array;a.length=e.size();for(let d=0;d<a.length;d++){let T=n.get(d);T!=null?a[d]=T:a[d]=-1}for(let d=0;d<a.length;d++){let T=r.get(d);T!=null&&T==!1&&this.computPrecedersOf(d,o).forEach(S=>{a[S]<0&&(a[S]=-2)})}let l=[],c=Array(this._tokenList.size()+2).fill(void 0);for(let d=0;d<c.length;d++){let T=this._specialCases.get(d),f=l.length;if(T!=null){const b=new Map([...T.entries()].sort());for(const[g,v]of b.entries())l.push(new pi(g,v))}let S=l.length;c[d]=[f,S]}let p=new Array;const h=Object.assign({},l);p=Object.setPrototypeOf(h,pi.prototype);let m=Array.from({length:e.size()},()=>Array.from({length:2}));for(let d=0;d<m.length;d++)m[d][0]=0,m[d][1]=-1;for(const[d,T]of i.entries())m[T][0]=1,m[d][1]=T;return new su(this._alphabet,o,a,c,p,m,this._tokenList,this._sensitive)}getPositionStates(e,t){let n=0;for(let r of e){let i=r.list(),o=t.list();if(i.length===o.length&&i.every((l,c)=>l===o[c]))return n;n++}return-1}computPrecedersOf(e,t){let n=new Set;n.add(e);let r;do{r=!1;for(const i of n)e:for(let o=0;o<t.size();o++)for(const a of t.get(o).values())if(n.has(a)&&a==i&&!n.has(o)){n.add(o),r=!0;break e}}while(r);return n}computeNext(){this.computeMetaData(this._root),this._next=new Array(this._lastPosition+1),this._nodes=new Array(this._lastPosition+1);for(let e=0;e<this._lastPosition+1;e++)this._next[e]=new ye;this.computeNextNode(this._root)}computeNextNode(e){if(e===null)throw Error("error");let t;switch(e.id){case-1:if(t=e.left,t!=null)for(let n of t.metaData.last){if(e.right==null)throw new Error("Node direita vazio");this._next[n].addAll(e.right.metaData.first)}break;case as:case ls:if(e.left==null)throw new Error("Node direita vazio");for(let n of e.left.metaData.last)this._next[n].addAll(e.left.metaData.first);break;case ot:this._nodes[e.metaData.position]=e;break}e.left!=null&&this.computeNextNode(e.left),e.right!=null&&this.computeNextNode(e.right)}computeMetaData(e){if(e==null)return;e.left!=null&&this.computeMetaData(e.left),e.right!=null&&this.computeMetaData(e.right);let t=e.metaData,n=e.left,r=e.right;switch(e.id){case ot:this._lastPosition++,t.position=this._lastPosition,t.nullable=!1,t.first.add(this._lastPosition),t.last.add(this._lastPosition);break;case Cr:case as:t.nullable=!0,n!=null&&(n.metaData.first.list().forEach(i=>t.first.add(i)),n.metaData.last.list().forEach(i=>t.last.add(i)));break;case ls:t.nullable=!1,n!=null&&(n.metaData.first.list().forEach(i=>t.first.add(i)),n.metaData.last.list().forEach(i=>t.last.add(i)));break;case Ar:if(n==null||r==null)return;t.nullable=n.metaData.nullable||r.metaData.nullable,n.metaData.first.list().forEach(i=>t.first.add(i)),r.metaData.first.list().forEach(i=>t.first.add(i)),n.metaData.last.list().forEach(i=>t.last.add(i)),r.metaData.last.list().forEach(i=>t.last.add(i));break;case-1:if(n==null||r==null)return;t.nullable=n.metaData.nullable&&r.metaData.nullable,n.metaData.first.list().forEach(i=>t.first.add(i)),n.metaData.nullable&&r.metaData.first.list().forEach(i=>t.first.add(i)),r.metaData.last.list().forEach(i=>t.last.add(i)),r.metaData.nullable&&n.metaData.last.list().forEach(i=>t.last.add(i));break}}}let _u=class{constructor(e){R(this,"_exp_simp1",new zt);R(this,"_termo1",new zt);R(this,"_fator",new zt);R(this,"_gen");R(this,"_token",null);this._gen=e}executeAction(e,t){this._token=t;try{switch(e){case 0:break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break;case 6:this.action6();break;case 7:this.action7();break;case 8:this.action8();break;case 9:this.action9();break;case 10:this.action10();break;case 11:this.action11();break;case 12:this.action12();break;case 13:this.action13();break;case 14:this.action14();break;case 15:this.action15();break}}catch(n){if(n instanceof Me)throw new Me(n.message)}}get root(){return this._exp_simp1.pop()}action1(){let e=this._termo1.pop();e!=null&&this._exp_simp1.push(e)}action2(){let e=this._exp_simp1.pop(),t=this._termo1.pop();if(e==null||t==null)return;let n=Ae.createUnionNode(e,t);n!=null&&this._exp_simp1.push(n)}action3(){let e=this._exp_simp1.pop(),t=this._exp_simp1.pop();if(t==null||e==null)return;let n=Ae.createContextNode(t,e);n!=null&&this._exp_simp1.push(n)}action4(){if(this._fator==null)return;let e=this._fator.pop();e!=null&&this._termo1.push(e)}action5(){let e=this._termo1.pop(),t=this._fator.pop();e==null||t==null||this._termo1.push(Ae.createConcatNode(e,t))}action6(){let e=this._fator.pop();e!=null&&this._fator.push(Ae.createClosureNode(e))}action7(){let e=this._fator.pop();e!=null&&this._fator.push(Ae.createClosureObNode(e))}action8(){let e=this._fator.pop();e!=null&&this._fator.push(Ae.createOptionalNode(e))}action9(){let e=this._exp_simp1.pop();e!=null&&this._fator.push(e)}action10(){this._fator.push(Ae.createAllNode())}action11(){if(this._token==null)return;let e=this._gen.getDefinitionById(this._token.lexeme);if(e==null)throw new Me("Definição não declarada: "+this._token.lexeme,this._token.position);const t=Object.assign({},e);this._fator.push(Object.setPrototypeOf(t,Ae.prototype))}action12(){this._token!=null&&this._fator.push(Ae.createCharNode(this._token.lexeme.charAt(0)))}action13(){let e=this._fator.pop();e!=null&&this._fator.push(Ae.createComplementNode(e))}action14(){let e=this._fator.pop(),t=this._fator.pop();if(t==null||e==null)return;let n=Ae.createUnionNode(t,e);n!=null&&this._fator.push(n)}action15(){if(this._token==null)return;let e=this._fator.pop(),t=Ae.createCharNode(this._token.lexeme.charAt(0));if(e==null||t==null)return;let n=String.fromCharCode(e.alphabet.list()[0]),r=String.fromCharCode(t.alphabet.list()[0]);if(n>=r)throw new Me("Intervalo inválido",this._token.position);this._fator.push(Ae.createIntervalNode(n,r))}};const Je=["","Era esperado fim de linha",'Era esperado "|"','Era esperado "*"','Era esperado "+"','Era esperado "?"','Era esperado "("','Era esperado ")"','Era esperado "["','Era esperado "]"','Era esperado "."','Era esperado "^"','Era esperado "-"',"Era esperada uma definição","Era esperado um caractere","Era esperada uma expressão regular","Era esperada uma expressão regular","Era esperado ), |, ^ ou o fim da expressão","Era esperada uma expressão","Era esperada uma expressão","Contexto inválido","Termo inválido","Operador inválido","Fator inválido","Era esperado ^ ou um caractere","Classe de caracteres inválida","Item inválido: era esperado um caractere","Era esperado -, ], ou um caractere"];class Oo{constructor(){R(this,"_currentToken",null);R(this,"_previousToken",null);R(this,"_scanner",null);R(this,"_semanticAnalyser",null)}parse(e,t){if(this._scanner=new gu(e),this._semanticAnalyser=new _u(t),this._currentToken=this._scanner.nextToken(),this._currentToken==null&&(this._currentToken=new xe(qn,"$",0)),this.reg_exp_ctxt(),this._currentToken.id!=qn)throw new ee(Je[qn],this._currentToken.position);return this._semanticAnalyser.root}match(e){if(this._currentToken==null)throw new me("Atributo durante comparação do REParser.");if(this._scanner==null)throw new me("Scanner é nulo.");if(this._currentToken.id==e){if(this._previousToken=this._currentToken,this._currentToken=this._scanner.nextToken(),this._currentToken==null){let t=0;this._previousToken!=null&&(t=this._previousToken.position+this._previousToken.lexeme.length),this._currentToken=new xe(qn,"$",t)}}else throw new ee(Je[e],this._currentToken.position)}reg_exp_ctxt(){if(this._currentToken==null)throw new me("Atributo Nulo durante reg_exp_ctxt do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.reg_exp(),this.context();break;default:throw new ee(Je[15],this._currentToken.position)}}reg_exp(){if(this._currentToken==null)throw new me("Atributo Nulo durante reg_exp do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.exp(),this._semanticAnalyser.executeAction(1,this._previousToken),this.reg_exp_c();break;default:throw new ee(Je[16],this._currentToken.position)}}reg_exp_c(){if(this._currentToken==null)throw new me("Atributo Nulo durante reg_exp_c do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 7:case 11:break;case 2:this.match(2),this.exp(),this._semanticAnalyser.executeAction(2,this._previousToken),this.reg_exp_c();break;default:throw new ee(Je[17],this._currentToken.position)}}exp(){if(this._currentToken==null)throw new me("Atributo Nulo durante exp do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(4,this._previousToken),this.exp_c();break;default:throw new ee(Je[18],this._currentToken.position)}}exp_c(){if(this._currentToken==null)throw new me("Atributo Nulo durante exp_c do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 7:case 11:break;case 6:case 8:case 10:case 13:case 14:this.term(),this._semanticAnalyser.executeAction(5,this._previousToken),this.exp_c();break;default:throw new ee(Je[19],this._currentToken.position)}}context(){if(this._currentToken==null)throw new me("Atributo Nulo durante context do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:break;case 11:this.match(11),this.reg_exp(),this._semanticAnalyser.executeAction(3,this._previousToken);break;default:throw new ee(Je[20],this._currentToken.position)}}term(){if(this._currentToken==null)throw new me("Atributo Nulo durante term do REParser.");switch(this._currentToken.id){case 6:case 8:case 10:case 13:case 14:this.factor(),this.op();break;default:throw new ee(Je[21],this._currentToken.position)}}op(){if(this._currentToken==null)throw new me("Atributo Nulo durante op do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 1:case 2:case 6:case 7:case 8:case 10:case 11:case 13:case 14:break;case 3:this.match(3),this._semanticAnalyser.executeAction(6,this._previousToken);break;case 4:this.match(4),this._semanticAnalyser.executeAction(7,this._previousToken);break;case 5:this.match(5),this._semanticAnalyser.executeAction(8,this._previousToken);break;default:throw new ee(Je[22],this._currentToken.position)}}factor(){if(this._currentToken==null)throw new me("Atributo Nulo durante factor do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 6:this.match(6),this.reg_exp(),this.match(7),this._semanticAnalyser.executeAction(9,this._previousToken);break;case 8:this.match(8),this.end_class();break;case 10:this.match(10),this._semanticAnalyser.executeAction(10,this._previousToken);break;case 13:this.match(13),this._semanticAnalyser.executeAction(11,this._previousToken);break;case 14:this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken);break;default:throw new ee(Je[23],this._currentToken.position)}}end_class(){if(this._currentToken==null)throw new me("Atributo Nulo durante end_class do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 11:this.match(11),this.item(),this.class_c(),this.match(9),this._semanticAnalyser.executeAction(13,this._previousToken);break;case 14:this.item(),this.class_c(),this.match(9);break;default:throw new ee(Je[24],this._currentToken.position)}}class_c(){if(this._currentToken==null)throw new me("Atributo Nulo durante class_c do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:break;case 14:this.item(),this.class_c(),this._semanticAnalyser.executeAction(14,this._previousToken);break;default:throw new ee(Je[25],this._currentToken.position)}}item(){if(this._currentToken==null)throw new me("Atributo Nulo durante item do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 14:this.match(14),this._semanticAnalyser.executeAction(12,this._previousToken),this.end_interval();break;default:throw new ee(Je[26],this._currentToken.position)}}end_interval(){if(this._currentToken==null)throw new me("Atributo Nulo durante end_interval do REParser.");if(this._semanticAnalyser==null)throw new me("Analisador Semântico é nulo.");switch(this._currentToken.id){case 9:case 14:break;case 12:this.match(12),this.match(14),this._semanticAnalyser.executeAction(15,this._previousToken);break;default:throw new ee(Je[27],this._currentToken.position)}}}var Po=(s=>(s[s.DEFINITION=0]="DEFINITION",s[s.TOKEN=1]="TOKEN",s[s.NON_TERMINAL=2]="NON_TERMINAL",s[s.GRAMMAR=3]="GRAMMAR",s))(Po||{});const cs=class cs extends Error{constructor(t,n,r){super(r.message);R(this,"_mode");R(this,"_index");R(this,"_cause");this._cause=r,this._index=n,this._mode=t,Object.setPrototypeOf(this,cs.prototype)}};R(cs,"Mode",Po);let De=cs;class bu{constructor(e,t){R(this,"_lexeme");R(this,"_base");this._lexeme=e,this._base=t}get lexeme(){return this._lexeme}get base(){return this._base}}class Fo{constructor(){R(this,"_expressionFor",new Map);R(this,"_specialCasesValues",new Map);R(this,"_definitions",new _e);R(this,"_tokens",new _e);R(this,"_specialCases",new _e);R(this,"_ignore","")}addDefinition(e,t){this._definitions.add(e),this._expressionFor.set(e,t)}addToken(e,t){this._tokens.add(e),this._expressionFor.set(e,t)}clear(){this._definitions.clear,this._tokens.clear,this._specialCases.clear,this._expressionFor.clear,this._specialCasesValues.clear}expressionFor(e){return this._expressionFor.get(e)}get tokens(){return this._tokens}get definitions(){return this._definitions}get specialCases(){return this._specialCases}get ignore(){return this._ignore}addIgnore(e){this._ignore.length>0?this._ignore=this.ignore+"|"+e:this._ignore=e}addSpecialCase(e,t,n){this._specialCases.add(e),this._specialCasesValues.set(e,new bu(t,n))}getSpecialCaseValue(e){return this._specialCasesValues.get(e)}getFA(e){let t=new Oo,n=new Lo(e),r=-1;try{for(r=0;r<this._definitions.size();r++){let i=this.expressionFor(this._definitions.get(r));if(i==null)throw new me("Expressão de Definições vazia.");let o=t.parse(i,n);if(o==null)throw new me("Erro no Parse do Automata Finito.");n.addDefinition(this._definitions.get(r),o)}}catch(i){throw new De(De.Mode.DEFINITION,r,i)}try{for(r=0;r<this._tokens.size();r++){let i=this.expressionFor(this._tokens.get(r));if(i==null)throw new me("Expressão de Token vazia.");let o=t.parse(i,n);if(o==null)throw new me("Erro no Parse do Automata Finito.");n.addExpression(this._tokens.get(r),o,!0)}}catch(i){throw new De(De.Mode.TOKEN,r,i)}try{for(r=0;r<this._specialCases.size();r++){let i=this._specialCases.get(r),o=this._specialCasesValues.get(i);if(o==null)throw new me("Valor do Caso Especial vazio.");n.addSpecialCase(i,o.base,o.lexeme)}}catch(i){throw new De(De.Mode.TOKEN,r,i)}try{if(this._ignore.length>0){let i=t.parse(this._ignore,n);if(i==null)throw new me("Nó ignorado vazio.");n.addIgnore(i,!0)}}catch(i){throw new De(De.Mode.TOKEN,this._tokens.size(),i)}try{let i=n.generateAutomata();if(i==null)throw new me("Erro ao criar Autômato Finito.");return i}catch(i){throw new De(De.Mode.TOKEN,this._tokens.size(),i)}}}class de{}R(de,"EPSILON",0),R(de,"DOLLAR",1),R(de,"DERIVES",2),R(de,"PIPE",3),R(de,"SEMICOLON",4),R(de,"TERM",5),R(de,"NON_TERM",6),R(de,"ACTION",7),R(de,"START_SYMBOL",8),R(de,"FIRST_NON_TERMINAL",8),R(de,"FIRST_SEMANTIC_ACTION",17),R(de,"LAST_SEMANTIC_ACTION",22),R(de,"TABLE",[[-1,-1,-1,-1,-1,0,-1],[2,-2,-2,-2,-2,1,-2],[-3,-3,-3,-3,-3,3,-3],[-4,-4,4,5,-4,-4,-4],[-5,-5,-5,-1,6,7,8],[-6,-6,10,10,9,9,9],[-7,-7,-7,-7,11,0,-7],[-8,-8,-8,-8,-8,12,-8],[-9,-9,-9,-9,-9,-9,13]]),R(de,"PRODUCTIONS",[[10,9],[8],[0],[15,17,2,12,18,11,4],[3,12,18,11],[0],[14,19,13],[15,19,13],[16,20,13],[12],[0],[5,21],[6,21],[7,22]]),R(de,"EXPECTED_MESSAGE",["î","$","::=","|",";","um símbolo terminal","um símbolo não-terminal","uma ação semântica"]),R(de,"PARSER_ERROR",["Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal (Início de produção)","Era esperado um Não-Terminal","Era esperado '|' ou ';'","Era esperado um Terminal, um Não-Terminal, ou uma Ação Semântica","Construção inválida","Era esperado um Terminal","Era esperado um Não-Terminal","Era esperado uma Ação Semântica"]);class gi{constructor(e){R(this,"symbols");R(this,"actionCount",0);R(this,"lhs");R(this,"rhs");R(this,"productions");R(this,"token");this.symbols=e,this.lhs=0,this.rhs=[],this.productions=new _e,this.token=new xe(-1,"ERROR",-1)}getPoductions(){return this.productions}executeAction(e,t){switch(this.token=t,e){case 0:this.action0();break;case 1:this.action1();break;case 2:this.action2();break;case 3:this.action3();break;case 4:this.action4();break;case 5:this.action5();break}}action0(){const e=this.symbols.get(this.token.lexeme);if(e===void 0)throw new Me("Lexema não pode ser nulo");this.lhs=e}action1(){const e=new ft(null,this.lhs);for(let t=0;t<this.rhs.length;t++)e.add_rhs(this.rhs[t]);this.productions.add(e),this.rhs=[]}action2(){const e=this.symbols.get(this.token.lexeme);if(e===void 0)throw new Me("Lexema não pode ser nulo");const t=e;t!=de.EPSILON&&this.rhs.push(t)}action3(){const e=Number(this.token.lexeme);this.rhs.push(this.symbols.size+e+1)}action4(){if(!this.symbols.has(this.token.lexeme))throw new Me("Símbolo "+this.token.lexeme+" não declarado",this.token.position)}action5(){const e=Number(this.token.lexeme);this.actionCount<e&&(this.actionCount=e)}}class zs{constructor(e){R(this,"input");R(this,"pos");R(this,"returnComents",!1);R(this,"endPosition");e==null?(this.input="",this.pos=-1,this.endPosition=-1):(this.input=e,this.pos=0,this.endPosition=e.length)}setReturnComents(e){this.returnComents=e}setInput(e){this.input=e,this.pos=0,this.endPosition=e.length}nextToken(){for(;this.hasMoreChars();){let e=this.pos,t=this.nextChar();switch(t){case" ":case`
`:case"\r":case"	":continue;case":":return this.analyseDerives();case"|":return new xe(de.PIPE,"|",e);case";":return new xe(de.SEMICOLON,";",e);case"#":return this.analyseAction();case"<":return this.analyseNonTerminal();case"_":case'"':return this.analyseTerminal(t);case"/":{let n=this.analyseComent();if(this.returnComents)return n;continue}default:if(this.isLetter(t))return this.analyseTerminal(t);throw new Ie("Caracter Inválido: '"+t+"'",e)}}return null}isLetter(e){return/^[a-zA-Zî]+$/.test(e)}analyseComent(){let e=this.pos-1;if(!this.hasMoreChars())throw new Ie("Caracter Inválido: '/'",e);let t=this.nextChar();if(t!="/")throw this.pushChar(),new Ie("Caracter Inválido: '/'",e);let n="//";for(;this.hasMoreChars();){if(t=this.nextChar(),t==`
`){this.pushChar();break}n+=t}return new xe(-1,n.toString(),e)}analyseDerives(){let e=this.pos-1;if(this.input.length-e>=3){let t=this.nextChar();if(t==":"&&(t=this.nextChar(),t=="="))return new xe(de.DERIVES,"::=",e)}throw new Ie("Símbolo Inválido",e)}getPosition(){return this.pos}setPosition(e){this.pos=e}setEnd(e){this.endPosition=e}setRange(e,t){this.setPosition(e),this.setEnd(t)}analyseTerminal(e){let t=this.pos-1,n="";if(n+=e,e=='"'){let r=!1;for(;this.hasMoreChars();)if(e=this.nextChar(),n+=e,e=='"')if(this.hasMoreChars())if(e=this.nextChar(),e=='"')n+=e;else{this.pushChar(),r=!0;break}else r=!0;else if(e==`
`)throw new Ie("Terminal inválido",t);if(n.length==0||!r)throw new Ie("Terminal inválido",t)}else for(;this.hasMoreChars();){if(e=this.nextChar(),e!="_"&&!this.isLetterOrDigit(e)){this.pushChar();break}n+=e}return new xe(de.TERM,n.toString(),t)}isLetterOrDigit(e){return/^[a-zA-Z0-9]$/.test(e)}analyseNonTerminal(){let e=this.pos-1,t="",n="<";for(;this.hasMoreChars()&&(n=this.nextChar(),n!=">");){if(!this.isLetterOrDigit(n)&&n!="_")throw new Ie("Não-Terminal inválido",e);t+=n}if(t.length==0||n!=">")throw new Ie("Não-Terminal inválido",e);return new xe(de.NON_TERM,"<"+t+">",e)}analyseAction(){let e=this.pos-1,t="";for(;this.hasMoreChars();){let n=this.nextChar();if(!this.isDigit(n)){this.pushChar();break}t+=n}if(t.length==0)throw new Ie("Ação Semântica inválida",e);return new xe(de.ACTION,t.toString(),e)}isDigit(e){return!isNaN(Number(e))&&!isNaN(parseInt(e))}hasMoreChars(){return this.pos<this.endPosition}nextChar(){return this.hasMoreChars()?this.input.charAt(this.pos++):String.fromCharCode(-1)}pushChar(){this.pos--}}class Bn{constructor(){R(this,"stack",[]);R(this,"currentToken",null);R(this,"previousToken",new xe(-1,"ERROR",-1));R(this,"scanner",new zs);R(this,"semanticAnalyser",new gi(new Map))}parse(e,t,n){let r=new ht;r.set(jt.EPSILON_STR,0);let i=2,o=new zs,a=0,l=new Set;try{for(let h=0;h<e.size();h++){let m=e.get(h);if(m==`
`){a++,e.removeByIndex(h),h--;continue}o.setInput(m);let d=o.nextToken();if(d==null)e.removeByIndex(h),h--;else{if(d.id!=de.TERM)throw new Me("Era esperada a declaração de um terminal",d.position);let T=d.lexeme;if(l.has(T))throw new Me("Terminal repetido : "+T,d.position);if(l.add(T),e.set(h,T),r.set(T,i),i++,(d=o.nextToken())!=null)throw new Me("Cada linha deve conter a declaração de apenas um símbolo terminal",d.position)}}if(e.size()==0)throw new Me("Conjunto de Terminais não pode ser vazio",0)}catch(h){throw new De(De.Mode.TOKEN,a,h)}a=0,l=new Set;try{for(let h=0;h<t.size();h++){let m=t.get(h);if(m==`
`){a++,t.removeByIndex(h),h--;continue}o.setInput(m);let d=o.nextToken();if(d==null)t.removeByIndex(h),h--;else{if(d.id!=de.NON_TERM)throw new Me("Era esperada a declaração de um não-terminal",d.position);let T=d.lexeme;if(l.has(T))throw new Me("Não-terminal repetido : "+T,d.position);if(l.add(T),t.set(h,T),r.set(T,i),i++,(d=o.nextToken())!=null)throw new Me("Cada linha deve conter a declaração de apenas um símbolo não-terminal",d.position)}}if(t.size()==0)throw new Me("Conjunto de Não-Terminais não pode ser vazio",0)}catch(h){throw new De(De.Mode.NON_TERMINAL,a,h)}try{this.parseByMap(n,r)}catch(h){throw new De(De.Mode.GRAMMAR,-1,h)}let c=this.semanticAnalyser.getPoductions(),p=2+e.size();return new jt(e.toArray(),t.toArray(),c,p)}parseByMap(e,t){for(this.scanner=new zs(e),this.semanticAnalyser=new gi(t),this.stack.push(de.DOLLAR),this.stack.push(de.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););}step(){let e=this.stack.pop();if(e===void 0)return!1;let t;if(this.currentToken==null?t=de.DOLLAR:t=this.currentToken.id,e==de.EPSILON)return!1;if(this.isTerminal(e)){if(e==t)return this.stack.length==0?!0:(this.previousToken=this.currentToken,this.currentToken=this.scanner.nextToken(),!1);throw new ee("Era esperado "+de.EXPECTED_MESSAGE[e],this.scanner.getPosition())}else if(this.isNonTerminal(e)){let n=de.TABLE[e-de.FIRST_NON_TERMINAL][t-1];if(n>=0){let r=de.PRODUCTIONS[n];if(r===void 0)throw new ee("Produção não definida");for(let i=r.length-1;i>=0;i--)this.stack.push(r[i]);return!1}else throw new ee(de.PARSER_ERROR[e-de.FIRST_NON_TERMINAL],this.scanner.getPosition())}else if(this.isSemanticAction(e)){if(this.previousToken===null)throw new Ie("Token anterior é Nulo");return this.semanticAnalyser.executeAction(e-de.FIRST_SEMANTIC_ACTION,this.previousToken),!1}else return!1}isTerminal(e){return e>=0&&e<de.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=de.FIRST_NON_TERMINAL&&e<de.FIRST_SEMANTIC_ACTION}isSemanticAction(e){return e>=de.FIRST_SEMANTIC_ACTION&&e<=de.LAST_SEMANTIC_ACTION}}const Ue=class Ue{constructor(){R(this,"_text","");R(this,"_pos",0);R(this,"_endPos",0);R(this,"_regularMode",!1);R(this,"_specialCaseMode",!1)}set text(e){this._text=e,this.setRange(0,this._text.length),this._regularMode=!1,this._specialCaseMode=!1}setRange(e,t){this._pos=e,this._endPos=t}nextToken(){if(!this.hasMoreChars)return null;if(this._regularMode)return this._specialCaseMode?(this._regularMode=!1,this._specialCaseMode=!1,this.nextToken()):this.parseRE();for(;this.hasMoreChars();){let e=this._pos,t=this.nextChar();if(t==null)return null;switch(t){case`
`:case"\r":this._specialCaseMode=!1,this._regularMode=!1;case" ":continue;case"	":continue;case":":return this._regularMode=!0,new xe(Ue.COLON,":",e);case"=":return this._specialCaseMode=!0,new xe(Ue.EQUALS,"=",e);case'"':return this.getString();case"/":return this.getComment();default:return this.isLetter(t)?this.getId():this.getError()}}return null}parseRE(){let e=this._pos;for(this._regularMode=!1;this.hasMoreChars();){let n=this.nextChar();if(n==null)return null;if(n==`
`){this._pos--;break}else if(n=="/"&&this.hasMoreChars()){if(this.nextChar()=="/")return this._pos-=2,this._regularMode=!1,new xe(Ue.RE,this._text.substring(e,this._pos),e);this._pos--}}let t=this._text.substring(e,this._pos);return new xe(Ue.RE,t,e)}getString(){let e=this._pos-1;for(;this.hasMoreChars();){let t=this.nextChar();if(t==`
`)break;if(t=='"')if(this.hasMoreChars()){if(this.nextChar()!='"')return this._pos--,new xe(Ue.STR,this._text.substring(e,this._pos),e)}else return new xe(Ue.STR,this._text.substring(e,this._pos),e)}return new xe(Ue.ERROR,this.text.substring(e,this._pos),e)}getId(){let e=this._pos-1;for(;this.hasMoreChars();){let t=this.nextChar();if(t==null)return null;if(!this.isLetterOrDigit(t)&&t!="_"){this._pos--;break}}return new xe(Ue.ID,this._text.substring(e,this._pos),e)}getError(){let e=this._pos-1;for(;this.hasMoreChars();)if(` 	
\r`.indexOf(this.nextChar())==-1){this._pos--;break}return new xe(Ue.ERROR,this._text.substring(e,this._pos),e)}getComment(){let e=this._pos-1;if(this.hasMoreChars()){if(this.nextChar()=="/"){for(;this.hasMoreChars();)if(this.nextChar()==`
`){this._pos--;break}return new xe(Ue.COMMENT,this._text.substring(e,this._pos),e)}this._pos--}return new xe(Ue.ERROR,this._text.substring(e,this._pos),e)}isLetter(e){return e.toLowerCase()!=e.toUpperCase()}isLetterOrDigit(e){return e.toLowerCase()!=e.toUpperCase()||this.isNumber(e)}isNumber(e){return typeof e!="string"||e.trim()===""?!1:!Number.isNaN(Number(e))}hasMoreChars(){return this._pos<this._endPos}nextChar(){return this.hasMoreChars()?this._text.charAt(this._pos++):String.fromCharCode(-1)}};R(Ue,"ID",0),R(Ue,"STR",1),R(Ue,"RE",2),R(Ue,"COLON",3),R(Ue,"EQUALS",4),R(Ue,"COMMENT",5),R(Ue,"ERROR",6);let He=Ue;class Jt{constructor(){R(this,"scanner",new He);R(this,"pos",0);R(this,"gen",null)}parseFA(e,t,n){this.gen=new Lo(n);try{this.parseDefs(e)}catch(r){Ut.Instance.add(r)}this.parseTokens(t);try{let r=this.gen.generateAutomata();if(r==null)throw new me("Automato gerado é nulo");return r}catch(r){throw console.log(r),new De(De.Mode.TOKEN,0,r)}}parseDefs(e){if(this.gen==null)return;let t=e.split(/(\n)/g);for(let n of t)if(n!=`
`){this.scanner.text=n;try{let r=this.nextToken();if(this.pos=0,r!=null&&r.id==He.ID){let i=r.lexeme;if(this.pos=r.position+i.length,r=this.nextToken(),r!=null&&r.id==He.COLON)if(this.pos=r.position+1,r=this.nextToken(),r!=null&&r.id==He.RE){let o=r.lexeme;try{let a=this.parseRE(o);if(a==null)return;this.gen.addDefinition(i,a)}catch(a){let l=a;throw l.position=l.position+this.pos,l}}else throw new ee("Era esperado uma Expressão Regular",this.pos);else throw new ee("Era esperado ':'",this.pos)}else{if(r==null)continue;throw new ee("Era esperado um identificador",this.pos)}}catch(r){throw new De(De.Mode.DEFINITION,0,r)}}}parseTokens(e){let t=0,n=e.split(/(\n)/g);for(let r of n){if(r===`
`){t++;continue}this.scanner.text=r;try{let i=this.nextToken();if(this.pos=0,i!=null)switch(this.pos=i.position+i.lexeme.length,i.id){case He.COLON:this.parseIgnore();break;case He.ID:case He.STR:this.parseId(i);break;default:throw new ee("Era esperado um identificador",0)}}catch(i){throw new De(De.Mode.TOKEN,t,i)}}}parseIgnore(){let e=this.nextToken();if(e!=null&&e.id==He.RE){let t=e.lexeme;try{if(this.gen==null)throw new me("Gerador de Autômatos Finitos não inicializado!");if(t.charAt(0)=="!"){let n=this.parseRE(t.substring(1));n!=null&&this.gen.addIgnore(n,!1)}else{let n=this.parseRE(t);n!=null&&this.gen.addIgnore(n,!0)}}catch(n){let r=n;throw r.position=r.position+e.position,r}}else throw new ee("Era esperado uma Expressão Regular",this.pos)}parseId(e){if(e==null)return;let t=e.lexeme;if(e=this.nextToken(),e==null)try{if(this.gen==null)return;let n=this.parseRE(t);if(n==null)return;this.gen.addExpression(t,n,!0)}catch(n){let r=n;throw r.position=r.position,r}else switch(this.pos=e.position+e.lexeme.length,e.id){case He.COLON:this.parseIdEnd(t);break;case He.EQUALS:this.parseSpecialCase(t);break;default:throw this.pos=e.position,new ee("Era esperado ':' ou '='",this.pos)}}parseIdEnd(e){let t=this.nextToken();if(t==null||t.id!=He.RE)throw new ee("Era esperado uma Expressão Regular",this.pos);let n=t.lexeme;try{if(this.gen==null)return;if(n.charAt(0)=="!"){let r=this.parseRE(n.substring(1));r!=null&&this.gen.addExpression(e,r,!1)}else{let r=this.parseRE(n);r!=null&&this.gen.addExpression(e,r,!0)}}catch(r){let i=r;throw i.position=i.position+t.position,i}}parseSpecialCase(e){let t=this.nextToken();if(t!=null&&t.id==He.ID){let n=t.lexeme;if(this.pos=t.position+e.length,t=this.nextToken(),t!=null&&t.id==He.COLON)if(this.pos=t.position+1,t=this.nextToken(),t!=null&&t.id==He.STR){let r=t.lexeme;r=r.substring(1,r.length-1);try{if(this.gen==null)return;this.gen.addSpecialCase(e,n,r)}catch(i){let o=i;throw o.position=o.position+t.position,o}if(t=this.nextToken(),t!=null)throw new ee("Só é permitido uma definição por linha",t.position)}else throw new ee("Era esperado uma Expressão Regular",this.pos);else throw new ee("Era esperado ':'",this.pos)}else throw new ee("Era esperado um Identificador",this.pos)}nextToken(){let e=this.scanner.nextToken();if(e!=null){if(e.id==He.COMMENT)e=this.nextToken();else if(e.id==He.ERROR)throw new Ie("Token inválido",e.position)}return e}parseRE(e){let t=new Oo;if(this.gen!=null)return t.parse(e,this.gen)}}const us=class us{constructor(e){R(this,"stack",new zt);R(this,"scanner",null);R(this,"currentToken",null);R(this,"previousToken",null);R(this,"table");R(this,"productions");R(this,"semanticStart");R(this,"symbols");R(this,"nodeStack",new zt);R(this,"errors");this.table=e.buildTable(),this.semanticStart=e.firstSemanticAction;const t=e.grammar.productions;this.productions=[],this.symbols=e.grammar.symbols;for(let n=0;n<t.size();n++)this.productions[n]=[],this.productions[n][0]=t.get(n).get_lhs(),this.productions[n][1]=t.get(n).get_rhs().length;this.errors=e.getErrors(this.table)}parse(e,t){this.scanner=e,this.nodeStack.clear(),this.stack.clear(),this.stack.push(0),this.currentToken=e.nextToken();try{for(;!this.step(););const n=this.nodeStack.pop();if(n===void 0)throw new ee("Node is Null");t.add(n)}catch(n){for(let r=0;r<this.nodeStack.size();r++){const i=this.nodeStack.get(r);if(i===void 0)throw new ee("Node is Null");t.add(i)}t.add(new st(n.message)),console.log(n)}return t}step(){const e=this.stack.peek();if(this.currentToken==null){let r=0;this.previousToken!=null&&(r=this.previousToken.position+this.previousToken.lexeme.length),this.currentToken=new xe(us.DOLLAR,"$",r)}const t=this.currentToken.id;if(e===void 0)throw new ee("State is undefined");const n=this.table[e][t-1];switch(n.getType()){case Fe.SHIFT:if(this.stack.push(n.getParameter()),this.nodeStack.push(new st(this.symbols[this.currentToken.id])),this.previousToken=this.currentToken,this.scanner===null)throw new ee("Scanner is Null");return this.currentToken=this.scanner.nextToken(),!1;case Fe.REDUCE:const r=this.productions[n.getParameter()],i=new zt;for(let c=0;c<r[1];c++){this.stack.pop();const p=this.nodeStack.pop();if(p===void 0)throw new ee("Node is Null");i.push(p)}const o=this.stack.peek();if(o===void 0)throw new ee("Old State is Null");this.stack.push(this.table[o][r[0]-1].getParameter());const a=new st(this.symbols[r[0]]);for(;i.size()>0;){const c=i.pop();if(c===void 0)throw new ee("Pivot is Null");a.add(c)}return this.nodeStack.push(a),!1;case Fe.ACTION:const l=this.semanticStart+n.getParameter()-1;return this.stack.push(this.table[e][l].getParameter()),this.nodeStack.push(new st("#"+n.getParameter())),!1;case Fe.ACCEPT:return!0;case Fe.ERROR:throw new ee("Era esperado: "+this.errors.get(e),this.currentToken.position)}return!1}};R(us,"DOLLAR",1);let nr=us;class Tu{constructor(){R(this,"lrTable",null)}generate(e,t,n){const r=new Map;return r.set("Token.java",this.generateToken(n)),r.set("Constants.java",this.generateConstants(e,t,n)),e!==null&&r.set("ScannerConstants.java",this.generateScannerConstants(e,n)),t!==null&&r.set("ParserConstants.java",this.generateParserConstants(t,n)),r.set("AnalysisError.java",this.generateAnalysisError(n)),r.set("LexicalError.java",this.generateLexicalError(n)),r.set("SyntacticError.java",this.generateSyntacticError(n)),r.set("SemanticError.java",this.generateSemanticError(n)),r}generateToken(e){const t=[],n=e.pkgName;return n&&n!==""&&t.push(`package ${n};

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
`);let o=null;if(e===null?o="ParserConstants":t===null?o="ScannerConstants":o="ScannerConstants, ParserConstants",e===null)throw new Ie("Automato Finito é nulo");if(t===null)throw new ee("Gramatica é nulo");return r.push("public interface Constants extends "+o+`
{
    int EPSILON  = 0;
    int DOLLAR   = 1;

`+this.constList(e,t)+`
}
`),r.join(`
`)}generateScannerConstants(e,t){const n=[],r=t.pkgName;if(r&&r!==""&&n.push(`package ${r};

`),n.push(`public interface ScannerConstants
{
`),e==null)throw new Ie("Automato Finito é nulo.");return n.push(this.genLexTables(e,t)),n.push(`}
`),n.join(`
`)}generateParserConstants(e,t){const n=[],r=t.pkgName;if(r&&r!==""&&n.push(`package ${r};
`),n.push(`public interface ParserConstants
{`),e===null)throw new ee("Gramatica é nulo");const i=this.genSyntTables(e,t);if(i===null)throw new ee("Tabela Sintatica é nula");return n.push(i),n.push("}"),n.join(`
`)}genLexTables(e,t){let n;switch(t.scannerTable){case Y.SCANNER_TABLE_FULL:n=this.lex_table(e);break;case Y.SCANNER_TABLE_COMPACT:n=this.lex_table_compress(e);break;case Y.SCANNER_TABLE_HARDCODE:n="";break;default:n="";break}return n+`
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
`),t.join("")}genSyntTables(e,t){switch(t.parser){case Y.PARSER_REC_DESC:case Y.PARSER_LL:return this.genLLSyntTables(e,t.parser);case Y.PARSER_SLR:case Y.PARSER_LALR:case Y.PARSER_LR:return this.genLRSyntTables(e,Y.PARSER_SLR);default:return null}}genLRSyntTables(e,t){const n=xs.createGenerator(e,t);if(n==null)throw new ee("Gerador de Tabela é nulo.");this.lrTable=n.buildIntTable();const r=[];return r.push("    int FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

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
`),t.join("")}emitLRTable(e){const t=[];if(this.lrTable===null)throw new ee("Tabela LR está nula.");const n=this.lrTable;t.push(`    int[][][] PARSER_TABLE =
`),t.push(`    {
`);let r=n.length;e.productions.size()>r&&(r=e.productions.size()),r=(""+r).length;for(let i=0;i<n.length;i++){t.push("        {");for(let o=0;o<n[i].length;o++){t.push(" {"),t.push(Fe.CONSTANTS[n[i][o][0]]),t.push(", ");const a=""+n[i][o][1];for(let l=a.length;l<r;l++)t.push(" ");t.push(a),t.push("},")}t.pop(),t.push("}"),t.push(` },
`)}return t.pop(),t.push(" }"),t.push(`
    };
`),t.join("")}genLLSyntTables(e,t){const n=[];if(t==Y.PARSER_LL){const r=e.startSymbol,i=e.FIRST_NON_TERMINAL,o=e.symbols.length,a="    int START_SYMBOL = "+r+`;

    int FIRST_NON_TERMINAL    = `+i+`;
    int FIRST_SEMANTIC_ACTION = `+o+`;
`;return n.push(a),n.push(`
`),n.push(`
`),n.push(this.emitProductionsForLL(e)),n.push(`
`),n.join("")}else return t==Y.PARSER_REC_DESC,null}constList(e,t){const n=[];let r=[];if(e!=null)r=e.tokens.toArray();else if(t!=null)r=t.terminals;else throw new Error("Erro Interno");for(let i=0;i<r.length;i++){const o=r[i];o.charAt(0)=='"'?n.push("    int t_TOKEN_"+(i+2)+" = "+(i+2)+"; //"+o+`
`):n.push("    int t_"+o+" = "+(i+2)+`;
`)}return n.join("")}lex_table_compress(e){const t=[],n=e.transitions,r=new Array(n.size()+1).fill(-1);let i=0;for(let a=0;a<n.size();a++)r[a]=i,i+=n.get(a).size;r[r.length-1]=i;const o=new Array(i).fill(0).map(()=>new Array(2).fill(0));i=0;for(let a=0;a<n.size();a++)for(const[l,c]of n.get(a).entries())o[i][0]=l.charCodeAt(0),o[i][1]=c,i++;t.push(`    int[] SCANNER_TABLE_INDEXES = 
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
`),i.join("")}emitErrorTableLR(){if(this.lrTable==null)throw new ee("Tabela LR está nula.");const e=this.lrTable.length,t=[];t.push(`    String[] PARSER_ERROR =
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
`),n.join("")}}class Su{constructor(){R(this,"sensitive",!0);R(this,"lookup",!0)}generate(e,t){const n=new Map,r=t.scannerName;let i;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,i=this.buildScanner(e,t)):i=this.buildEmptyScanner(t),n.set(r+".java",i),n}buildEmptyScanner(e){const t=[],n=e.pkgName;t.push(this.emitPackage(n));const r="public class "+e.scannerName+` implements Constants
{
    public Token nextToken() throws LexicalError
    {
        return null;
    }
}
`;return t.push(r),t.toString()}buildScanner(e,t){let n,r,i;t.input==Y.INPUT_STREAM?(n="java.io.Reader",r=`StringBuffer bfr = new StringBuffer();
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
`,i='this(new java.io.StringReader(""));'):t.input==Y.INPUT_STRING?(n="String",r="this.input = input;",i='this("");'):(n="",r="",i="");const o=t.pkgName;return this.emitPackage(o)+"public class "+t.scannerName+` implements Constants
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
`}auxFuncions(e,t){let n;switch(t.scannerTable){case Y.SCANNER_TABLE_FULL:n=`    private int nextState(char c, int state)
    {
        int next = SCANNER_TABLE[state][c];
        return next;
    }
`;break;case Y.SCANNER_TABLE_COMPACT:n=`    private int nextState(char c, int state)
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
`;break;case Y.SCANNER_TABLE_HARDCODE:{const r=e.transitions,i=[];for(let o=0;o<r.size();o++){const a=r.get(o);if(a.size!=0){i.push("            case "+o+`:
                switch (c)
                {
`);for(const[l,c]of a.entries()){const p=l,h=c;i.push("                    case "+p+": return "+h+`;
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
`}}class vu{constructor(e){R(this,"input",new ht);R(this,"lhs");this.lhs=e}}class xr{constructor(e){R(this,"_grammar");R(this,"_llTable");R(this,"_symbols");R(this,"_functions",new Map);this._grammar=e,this._llTable=[],this._symbols=e.symbols;for(let t=0;t<this._symbols.length;t++)this._symbols[t].charAt(0)=="<"&&(this._symbols[t]=this._symbols[t].substring(1,this._symbols[t].length-1));this.build()}getSymbols(e){return this._symbols[e]}getStart(){return this._symbols[this._grammar.startSymbol]}build(){const e=this._grammar.productions.toArray();for(let t=0;t<this._llTable.length;t++){const n=t+this._grammar.FIRST_NON_TERMINAL,r=new vu(n);this._functions.set(this._symbols[n],r);for(let i=0;i<this._llTable[0].length;i++){const o=this._llTable[t][i];if(o>=0){const a=i+1,c=e[o].get_rhs();r.input.set(a,c)}}}return this._functions}}class yu{generate(e,t){const n=new Map;if(e!=null){const r=t.parserName;let i;switch(t.parser){case Y.PARSER_REC_DESC:i=this.buildRecursiveDecendantParser(e,t);break;case Y.PARSER_LL:i=this.buildLLParser(e,t);break;case Y.PARSER_SLR:case Y.PARSER_LALR:case Y.PARSER_LR:i=this.buildLRParser(e,t);break;default:i=null}if(i===null)throw new ee("String do Parser é nulo.");n.set(r+".java",i),n.set(t.semanticName+".java",this.generateSemanticAnalyser(t))}return n}buildRecursiveDecendantParser(e,t){const n=[],r=t.pkgName;return n.push(this.emitPackage(r)),n.push(this.emitRecursiveDecendantClass(e,t)),n.join("'")}buildLLParser(e,t){const n=[],r=t.pkgName;return n.push(this.emitPackage(r)),n.push(this.emitImports()),n.push(this.emitLLClass(e,t)),n.join("")}buildLRParser(e,t){const n=[],r=t.pkgName;return n.push(this.emitPackage(r)),n.push(this.emitImports()),n.push(this.emitLRClass(e,t)),n.join("")}emitPackage(e){return e!=null&&e!==""?"package "+e+`;
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
`}emitRecursiveDecendantClass(e,t){const n=new xr(e),r=[],i=t.parserName;r.push("public class "),r.push(i),r.push(` implements Constants
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

`);const c=n.build();for(let p=e.FIRST_NON_TERMINAL;p<e.FIRST_SEMANTIC_ACTION();p++){const h=n.getSymbols(p),m=c.get(h);if(r.push("    private void "+h+`() throws AnalysisError
    {
        switch (currentToken.getId())
        {
`),m==null)throw new dn("Gramática não é LL.");const d=Array.from(m.input.keys());for(let T=0;T<d.length;T++){const f=m.input.get(d[T]);let S=d[T];r.push("            case "+S+": // "+n.getSymbols(S)+`
`);for(let b=T+1;b<d.length;b++)m.input.get(d[b])===f&&(S=d[b],r.push("            case "+S+": // "+n.getSymbols(S)+`
`),d.slice(b,b),b--);if(f===void 0)throw new dn("Gramática não é LL.");f.length==0&&r.push(`                // EPSILON
`);for(let b=0;b<f.length;b++){const g=f[b];e.isTerminal(g)?r.push("                match("+g+"); // "+n.getSymbols(g)+`
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
`;return t.push(r),t.join("")}}class Eu extends xo{constructor(){super(...arguments);R(this,"conflict",null);R(this,"stackTop",null)}resolve(t,n){return 1}setup(t,n){this.conflict=t,this.stackTop=n}}class Rr{constructor(e){R(this,"g");if(!e.isFactored())throw new dn("Gramática não Fatorada");if(e.hasLeftRecursion())throw new dn("Gramática possui Recursão à Esquerda");this.g=e}getGrammar(){return this.g}lookahead(e){if(this.g==null)throw new ee("Gramatica é nula");const t=this.g.first(e.get_rhs());return t.contains(0)&&(t.delete(0),t.addAll(this.g.followSet[e.get_lhs()])),t}generateTable(){if(this.g==null)throw new ee("Gramatica é nula");const e=this.g.symbols,t=[];for(let r=0;r<e.length-this.g.FIRST_NON_TERMINAL;r++){t[r]=[];for(let i=0;i<this.g.FIRST_NON_TERMINAL-1;i++)t[r][i]=new ye}for(let r=0;r<this.g.productions.size();r++){const i=this.g.productions.get(r),o=this.lookahead(i);for(let a=1;a<this.g.FIRST_NON_TERMINAL;a++)o.contains(a)&&t[i.get_lhs()-this.g.FIRST_NON_TERMINAL][a-1].add(r)}const n=new Eu;return this.resolveConflicts(t,n)}resolveConflicts(e,t){if(this.g==null)throw new ee("Gramatica é nula");const n=[];for(let r=0;r<e.length;r++){n[r]=[];for(let i=0;i<e[r].length;i++)switch(e[r][i].size){case 0:n[r][i]=-1;break;case 1:n[r][i]=e[r][i].first();break;default:t.setup(e[r][i],r),n[r][i]=t.resolve(this.g,i);break}}return n}tableAsHTML(){if(this.g==null)throw new ee("Gramatica é nula");const e=this.generateTable();let t="";t+='<HTML><HEAD><TITLE>Tabela de Análise LL(1)</TITLE></HEAD><BODY><FONT face="Verdana, Arial, Helvetica, sans-serif"><TABLE border=1 cellspacing=0>',t+="<TR align=center><TD bgcolor=black><FONT color=white><B>&nbsp;</B></FONT></TD><TD bgcolor=black><FONT color=white><B>$</B></FONT></TD>";for(let n=jt.FIRST_TERMINAL;n<this.g.FIRST_NON_TERMINAL;n++)t+="<TD nowrap bgcolor=black><FONT color=white><B>"+mt.translateString(this.g.symbols[n])+"</B></FONT></TD>";t+="</TR>";for(let n=0;n<e.length;n++){t+="<TR align=center><TD nowrap bgcolor=black><FONT color=white><B>"+mt.translateString(this.g.symbols[n+this.g.FIRST_NON_TERMINAL])+"</B></FONT></TD>";for(let r=0;r<e[n].length;r++){const i=e[n][r];i>=0?t+="<TD width=40 bgcolor=#F5F5F5>"+i+"</TD>":t+="<TD width=40 bgcolor=#F5F5F5>-</TD>"}t+="</TR>"}t+="</TABLE>",t+="<BR></FONT><CODE><TABLE border=0>";for(let n=0;n<this.g.productions.size();n++)t+="<TR>",t+="<TD align=right nowrap>"+n+"&nbsp;-&nbsp;</TD>",t+="<TD>"+mt.translateString(this.g.productions.get(n).toString())+"</TD>",t+="</TR>";return t+="</TABLE></CODE></BODY></HTML>",t.toString()}}class wu{constructor(){R(this,"lrTable",null)}generate(e,t,n){const r=new Map;if(e===null||t===null)throw new Error("FiniteAutomata and Grammar must not be null");return r.set("Token.h",this.generateToken(n)),r.set("Constants.h",this.generateConstantsH(e,t,n)),r.set("Constants.cpp",this.generateConstantsCpp(e,t,n)),r.set("AnalysisError.h",this.generateAnalysisError(n)),r.set("LexicalError.h",this.generateLexicalError(n)),r.set("SyntaticError.h",this.generateSyntaticError(n)),r.set("SemanticError.h",this.generateSemanticError(n)),r}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

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
`+(t.scannerTable==Y.SCANNER_TABLE_HARDCODE?"":`
extern int SCANNER_TABLE[STATES_COUNT][256];
`)+`
extern int TOKEN_STATE[STATES_COUNT];

`+(e.hasContext()?`extern int SCANNER_CONTEXT[STATES_COUNT][2];

`:"")+(e.specialCases.length>0?"extern int SPECIAL_CASES_INDEXES["+(e.getSpecialCasesIndexes().length+1)+`];

extern const char *SPECIAL_CASES_KEYS[`+e.specialCases.length+`];

extern int SPECIAL_CASES_VALUES[`+e.specialCases.length+`];

`:"")+`extern const char *SCANNER_ERROR[STATES_COUNT];

`}syntDecls(e,t){if(e==null)return"";switch(t.parser){case Y.PARSER_REC_DESC:{const n=e.FIRST_SEMANTIC_ACTION()-e.FIRST_NON_TERMINAL;return"extern const char *PARSER_ERROR["+(e.FIRST_NON_TERMINAL+n)+`];

`}case Y.PARSER_LL:{let n=0;for(let i=0;i<e.productions.size();i++){const o=e.productions.get(i).get_rhs().length;o>n&&(n=o)}const r=e.FIRST_SEMANTIC_ACTION()-e.FIRST_NON_TERMINAL;return"const int START_SYMBOL = "+e.startSymbol+`;

const int FIRST_NON_TERMINAL    = `+e.FIRST_NON_TERMINAL+`;
const int FIRST_SEMANTIC_ACTION = `+e.FIRST_SEMANTIC_ACTION()+`;

extern int PARSER_TABLE[`+r+"]["+(e.FIRST_NON_TERMINAL-1)+`];

extern int PRODUCTIONS[`+e.productions.size()+"]["+(n+1)+`];

extern const char *PARSER_ERROR[`+(e.FIRST_NON_TERMINAL+r)+`];

`}default:{const n=xs.createGenerator(e,Y.PARSER_SLR);if(n==null)throw new ee("Gerador de Tabela é nulo.");return this.lrTable=n.buildIntTable(),"const int FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

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
`,i+="int TOKEN_STATE[STATES_COUNT] = {",n=e.transitions.size(),r=n.toString().length,r==1&&(r=2);for(let o=0;o<n;o++){const l=e.tokenForState(o).toString();for(let c=l.length;c<r;c++)i+=" ";i+=l+", "}i=i.slice(0,-2),i+=` };

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

`,t.toString()}scannerTable(e,t){if(t.scannerTable==Y.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`int SCANNER_TABLE[STATES_COUNT][256] = 
`,n+=`{
`;const r=e.transitions.size();let i=r.toString().length;i==1&&(i=2);for(let o=0;o<r;o++){n+="    { ";for(let a=0;a<256;a++){const l=e.nextState(String.fromCharCode(a),o).toString();for(let c=l.length;c<i;c++)n+=" ";n+=l+", ",a==200&&(n+=`
      `)}n=n.slice(0,-2),n+=` },
`}return n=n.slice(0,-2),n+=`
};
`,n.toString()}specialCases(e){if(e.specialCases.length>0){const t=e.getSpecialCasesIndexes(),n=e.specialCases;let r="",i=n.length;r+="int SPECIAL_CASES_INDEXES["+(t.length+1)+`] =
    { `,i=t.length;for(let o=0;o<i;o++)r+=t[o][0]+", ";r+=t[i-1][1],r=r.slice(0,-2),r+=` };

`,i=n.length,r+="const char *SPECIAL_CASES_KEYS["+i+`] =
    { `,i=n.length;for(let o=0;o<i;o++)r+='"'+n[o].key+'", ';r=r.slice(0,-2),r+=` };

`,r+="int SPECIAL_CASES_VALUES["+i+`] =
    { `;for(let o=0;o<i;o++)r+=n[o].value+", ";return r=r.slice(0,-2),r+=` };

`,r.toString()}else return""}syntTables(e,t){if(e==null)return"";switch(t.parser){case Y.PARSER_REC_DESC:return this.syntErrorsLL(e);case Y.PARSER_LL:return this.syntTransTable(new Rr(e))+this.productionsLL(e)+this.syntErrorsLL(e);default:return this.syntTransTable(e)+this.productionsLR(e)+this.syntErrorsLR()}}productionsLR(e){let t="";const n=e.productions.toArray();t+="const int PRODUCTIONS["+n.length+`][2] =
`,t+=`{
`;for(let r=0;r<n.length;r++)t+="    { ",t+=n[r].get_lhs(),t+=", ",t+=n[r].get_rhs().length,t+=` },
`;return t=t.slice(0,-2),t+=`
};
`,t.toString()}syntTransTable(e){return e instanceof jt?this.syntTransTableGrammar(e):this.syntTransTableLL(e)}syntTransTableGrammar(e){if(this.lrTable===null)throw new ee("Tabela LR está nula.");let t="";t+="const int PARSER_TABLE["+this.lrTable.length+"]["+this.lrTable[0].length+`][2] =
`,t+=`{
`;let n=this.lrTable.length;e.productions.size()>n&&(n=e.productions.size()),n=(""+n).length;for(let r=0;r<this.lrTable.length;r++){t+="    {";for(let i=0;i<this.lrTable[r].length;i++){t+=" {",t+=Fe.CONSTANTS[this.lrTable[r][i][0]],t+=", ";const o=""+this.lrTable[r][i][1];for(let a=o.length;a<n;a++)t+=" ";t+=o+"},"}t=t.slice(0,-1),t+=` },
`}return t=t.slice(0,-2),t+=`
};
`,t.toString()}syntTransTableLL(e){const t=e.generateTable(),n=[];let r=0;for(let o=0;o<n.length;o++){n[o]=[];for(let a=0;a<n[o].length;a++){const l=t[o][a].toString();n[o][a]=l,l.length>r&&(r=l.length)}}let i="";i+("int PARSER_TABLE["+n.length+"]["+n[0].length+`] =
`),i+"";for(let o=0;o<n.length;o++){i+"";for(let a=0;a<n[o].length;a++){i+"";for(let l=n[o][a].length;l<r;l++)i+"";i+n[o][a]+""}i=i.slice(0,-1)}return i=i.slice(0,-2),i.toString()}productionsLL(e){const t=e.productions.toArray(),n=[];let r=0,i=0;for(let a=0;a<t.length;a++){const l=t[a].get_rhs();if(l.length>i&&(i=l.length),l.length>0){n[a]=[],n[a][0]=l.length.toString();for(let c=0;c<l.length;c++)n[a][c+1]=l[c].toString(),n[a][c+1].length>r&&(r=n[a][c+1].length)}else n[a]=[],n[a][0]="1",n[a][1]="0"}let o="";o+("int PRODUCTIONS["+t.length+"]["+(i+1)+`] = 
`),o+"";for(let a=0;a<n.length;a++){o+"";for(let l=0;l<n[a].length;l++){o+"";for(let c=n[a][l].length;c<r;c++)o+"";o+n[a][l]+""}for(let l=n[a].length;l<=i;l++){o+"";for(let c=1;c<r;c++)o+"";o+""}o=o.slice(0,-1)}return o=o.slice(0,-2),o.toString()}syntErrorsLL(e){const t=e.symbols;let n="";n+="const char *PARSER_ERROR["+e.FIRST_SEMANTIC_ACTION()+`] =
{
    "",
    "Era esperado fim de programa",
`;for(let r=2;r<e.FIRST_NON_TERMINAL;r++){n+='    "Era esperado ';for(let i=0;i<t[r].length;i++)switch(t[r].charAt(i)){case'"':n+='\\"';break;case"\\":n+="\\\\";break;default:n+=t[r].charAt(i)}n+=`",
`}for(let r=e.FIRST_NON_TERMINAL;r<t.length;r++)n+='    "'+t[r]+` inválido",
`;return n=n.slice(0,-2),n+=`
};

`,n.toString()}syntErrorsLR(){if(this.lrTable===null)throw new ee("Tabela LR está nula.");let e="";e+="const char *PARSER_ERROR["+this.lrTable.length+`] =
{
`;for(let t=0;t<this.lrTable.length;t++)e+='    "Erro estado '+t+`",
`;return e=e.slice(0,-2),e+=`
};

`,e.toString()}}class ku{constructor(){R(this,"sensitive",!0);R(this,"lookup",!0)}generate(e,t){const n=new Map,r=t.scannerName;let i,o;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,i=this.buildScannerH(e,t),o=this.buildScannerCpp(e,t)):(i=this.buildEmptyScannerH(t),o=this.buildEmptyScannerCpp(t)),n.set(r+".h",i),n.set(r+".cpp",o),n}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

`:""}closeNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"} //namespace "+t+`

`:""}buildScannerH(e,t){let n="";const r=t.scannerName;let i,o,a;t.input==Y.INPUT_STREAM?(i="std::istream &",o=`#include <iostream>
`,a="    "+r+"("+i+`input) { setInput(input); }
    `+r+`() : input(""), position(0) { }
`):t.input==Y.INPUT_STRING?(i="const char *",o="",a="    "+r+"("+i+`input = "") { setInput(input); }
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

`),n+=this.openNamespace(t);let i,o;t.input==Y.INPUT_STREAM?(i="std::istream &",o=`    std::istreambuf_iterator<char> in(input);
    std::istreambuf_iterator<char> eof;

    this->input.assign(in, eof);

`):t.input==Y.INPUT_STRING?(i="const char *",o=`    this->input = input;
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

`:"");return n+=a,n+=this.closeNamespace(t),n.toString()}nextStateImpl(e,t){switch(t.scannerTable){case Y.SCANNER_TABLE_FULL:case Y.SCANNER_TABLE_COMPACT:return`    int next = SCANNER_TABLE[state][c];
    return next;
`;case Y.SCANNER_TABLE_HARDCODE:{const n=e.transitions;let r="";for(let i=0;i<n.size();i++){const o=n.get(i);if(o.size!=0){r+="        case "+i+`:
            switch (c)
            {
`;for(const[a,l]of o.entries()){const c=a,p=l;r+=`                case ${c.charCodeAt(0)}: return ${p};
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

`;return t+=r,t+=this.closeNamespace(e),t.toString()}}class Au{constructor(){R(this,"rd")}generate(e,t){const n=new Map;if(e!=null){const r=t.parserName;n.set(r+".h",this.parserH(e,t)),n.set(r+".cpp",this.parserCpp(e,t)),n.set(t.semanticName+".cpp",this.semanticAnalyserCpp(t)),n.set(t.semanticName+".h",this.semanticAnalyserH(t))}return n}openNamespace(e){const t=e.pkgName;return t!=null&&t!==""?"namespace "+t+` {

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

`+this.closeNamespace(e)}parserH(e,t){const n=t.scannerName,r=t.parserName,i=t.semanticName,o=t.parser,a=o==Y.PARSER_REC_DESC;let l="";if(a){this.rd=new xr(e);let p="";p+="    void match(int token) throw (AnalysisError);";for(let h=e.FIRST_NON_TERMINAL;h<e.FIRST_SEMANTIC_ACTION();h++)p+="    void "+this.rd.getSymbols(h)+`() throw (AnalysisError);
`;l=p.toString()}return"#ifndef "+r+`_H
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
`+(o==Y.PARSER_LL?`    bool pushProduction(int topStack, int tokenInput);

    static bool isTerminal(int x) { return x < FIRST_NON_TERMINAL; }
    static bool isNonTerminal(int x) { return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION; }
    static bool isSemanticAction(int x) { return x >= FIRST_SEMANTIC_ACTION; }
`:""))+`};

`+this.closeNamespace(t)+`#endif
`}parserCpp(e,t){switch(t.parser){case Y.PARSER_REC_DESC:return this.parserCppRecursiveDescendant(e,t);case Y.PARSER_LL:return this.parserCppLL(e,t);default:return this.parserCppLR(e,t)}}parserCppRecursiveDescendant(e,t){if(this.rd==null)throw new ee("RecursiveDescendent é nulo.");const n=t.scannerName,r=t.parserName,i=t.semanticName,o='#include "'+r+`.h"

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
`;let a="";const l=this.rd.build();for(let p=e.FIRST_NON_TERMINAL;p<e.FIRST_SEMANTIC_ACTION();p++){const h=this.rd.getSymbols(p),m=l.get(h);if(m==null)throw new ee("FunctionCustom é nulo");a+=`
void `+r+"::"+h+`()
{
    switch (currentToken->getId())
    {
`;const d=Object.keys(m.input).map(Number);for(let T=0;T<d.length;T++){const f=m.input.get(d[T]);let S=d[T];a+="        case "+S+": // "+this.rd.getSymbols(S)+`
`;for(let b=T+1;b<d.length;b++){const g=m.input.get(d[b]);if(f==null||g==null)throw new ee("rhs é nulo");f.sort().toString()==g.sort().toString()&&(S=d[b],a+="        case "+S+": // "+this.rd.getSymbols(S)+`
`,d.splice(b,1),b--)}if((f==null?void 0:f.length)==0&&(a+=`            // EPSILON
`),f==null)throw new ee("rhs é nulo");for(let b=0;b<f.length;b++){const g=f[b];e.isTerminal(g)?a+="            match("+g+"); // "+this.rd.getSymbols(g)+`
`:e.isNonTerminal(g)?a+="            "+this.rd.getSymbols(g)+`();
`:a+="            semanticAnalyser->executeAction("+(g-e.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}a+=`            break;
`}a+=`        default:
            throw SyntaticError(PARSER_ERROR[`+m.lhs+`], currentToken->getPosition());
    }
}
`}const c=`
`+this.closeNamespace(t);return o+a.toString()+c}parserCppLL(e,t){const n=t.scannerName,r=t.parserName,i=t.semanticName;return'#include "'+r+`.h"

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

`+this.closeNamespace(t)}}class Cu{constructor(){R(this,"lrTable",null)}generate(e,t,n){if(e===null||t===null)throw new Error("FiniteAutomata and Grammar must not be null");const r=new Map;return r.set("UToken.pas",this.generateToken()),r.set("UConstants.pas",this.generateConstants(e,t,n)),r.set("UAnalysisError.pas",this.generateAnalysisError()),r.set("ULexicalError.pas",this.generateLexicalError()),r.set("USyntaticError.pas",this.generateSyntaticError()),r.set("USemanticError.pas",this.generateSemanticError()),r}generateToken(){return`unit UToken;

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
        ( `;const i=e.transitions.size();r=i.toString().length,r==1&&(r=2);for(let o=0;o<i;o++){const l=e.tokenForState(o).toString();for(let c=l.length;c<r;c++)n+=" ";n+=l+", "}return n=n.slice(0,-2),n+=` );

`,n.toString()}scannerTable(e,t){if(t.scannerTable==Y.SCANNER_TABLE_HARDCODE)return"";let n="";n+=`    SCANNER_TABLE : array[0..STATES_COUNT-1, char] of integer =
    ( 
`;const r=e.transitions.size();let i=r.toString().length;i==1&&(i=2);for(let o=0;o<r;o++){n+="        ( ";for(let a=0;a<256;a++){const l=e.nextState(String.fromCharCode(a),o).toString();for(let c=l.length;c<i;c++)n+=" ";n+=l+", ",a==200&&(n+=`
          `)}n=n.slice(0,-2),n+=` ),
`}return n=n.slice(0,-2),n+=`
    );

`,n.toString()}lookup(e){let t="";const n=e.getSpecialCasesIndexes();t+="    SPECIAL_CASES_INDEXES : array[0.."+n.length+`] of integer =
        ( `;let r=n.length;for(let o=0;o<n.length;o++)t+=n[o][0],t+=", ";t+=n[r-1][1],t+=` );

`;const i=e.specialCases;r=i.length,t+="    SPECIAL_CASES_KEYS : array[0.."+(r-1)+`] of string =
        (  `;for(let o=0;o<r;o++)t+="'",t+=i[o].key,t+="', ";t=t.slice(0,-2),t+=` );

`,t+="    SPECIAL_CASES_VALUES : array[0.."+(r-1)+`] of integer =
        (  `;for(let o=0;o<r;o++)t+=i[o].value,t+=", ";return t=t.slice(0,-2),t+=` );

`,t.toString()}syntTables(e,t){if(e==null)return"";switch(t.parser){case Y.PARSER_REC_DESC:return this.errorLL(e);case Y.PARSER_LL:return"    START_SYMBOL = "+e.startSymbol+`;

    FIRST_NON_TERMINAL    = `+e.FIRST_NON_TERMINAL+`;
    FIRST_SEMANTIC_ACTION = `+e.FIRST_SEMANTIC_ACTION()+`;

`+this.transTablesLL(new Rr(e))+this.prodsLL(e)+this.errorLL(e);case Y.PARSER_SLR:case Y.PARSER_LALR:case Y.PARSER_LR:return"    FIRST_SEMANTIC_ACTION = "+e.FIRST_SEMANTIC_ACTION()+`;

    SHIFT  = 0;
    REDUCE = 1;
    ACTION = 2;
    ACCEPT = 3;
    GO_TO  = 4;
    ERROR  = 5;

`+this.transTablesLR(e)+`
`+this.prodsLR(e)+`
`+this.errorLR();default:return""}}transTablesLR(e){const t=xs.createGenerator(e,Y.PARSER_SLR);if(t==null)throw new ee("Gerador de Tabela é nulo.");this.lrTable=t.buildIntTable();let n="";n+="    PARSER_TABLE : array[0.."+(this.lrTable.length-1)+", 0.."+(this.lrTable[0].length-1)+`, 0..1] of integer =
`,n+=`    (
`;let r=this.lrTable.length;e.productions.size()>r&&(r=e.productions.size()),r=(""+r).length;for(let i=0;i<this.lrTable.length;i++){n+="        (";for(let o=0;o<this.lrTable[i].length;o++){n+=" (",n+=Fe.CONSTANTS[this.lrTable[i][o][0]],n+=", ";const a=""+this.lrTable[i][o][1];for(let l=a.length;l<r;l++)n+=" ";n+=a+"),"}n=n.slice(0,-1),n+=` ),
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

`,i.toString()}prodsLL(e){const t=e.productions.toArray(),n=[];let r=0,i=0;for(let a=0;a<t.length;a++){const l=t[a].get_rhs();if(l.length>i&&(i=l.length),l.length>0){n[a]=[],n[a][0]=l.length.toString();for(let c=0;c<l.length+1;c++)n[a][c+1]=l[c].toString(),n[a][c+1].length>r&&(r=n[a][c+1].length)}else n[a]=new Array(2),n[a][0]="1",n[a][1]="0"}let o="";o+="    PRODUCTIONS : array[0.."+(t.length-1)+", 0.."+i+`] of integer =
`,o+=`    (
`;for(let a=0;a<n.length;a++){o+="        (";for(let l=0;l<n[a].length;l++){o+=" ";for(let c=n[a][l].length;c<r;c++)o+=" ";o+=n[a][l]+","}for(let l=n[a].length;l<=i;l++){o+=" ";for(let c=1;c<r;c++)o+=" ";o+="0,"}o=o.slice(0,-1),o+=` ),
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

`,n.toString()}errorLR(){if(this.lrTable===null)throw new ee("Tabela LR está nula.");let e="";e+="    PARSER_ERROR : array [0.."+(this.lrTable.length-1)+`] of string =
    (
`;for(let t=0;t<this.lrTable.length;t++)e+="        'Erro estado "+t+`',
`;return e=e.slice(0,-2),e+=`
    );

`,e.toString()}}class xu{constructor(){R(this,"sensitive",!0);R(this,"lookup",!0)}generate(e,t){const n=new Map,r=t.scannerName;let i;return e!=null?(this.sensitive=t.scannerCaseSensitive,this.lookup=e.specialCases.length>0,i=this.buildScanner(e,t)):i=this.buildEmptyScanner(t),n.set("U"+r+".pas",i),n}buildScanner(e,t){const n=t.scannerName;let r,i,o,a;return t.input==Y.INPUT_STREAM?(r="TStream",i=`var
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
`,o="setInput(nil);",a=", classes"):t.input==Y.INPUT_STRING?(r="string",i=`begin
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
`}nextStateImpl(e,t){switch(t.scannerTable){case Y.SCANNER_TABLE_FULL:case Y.SCANNER_TABLE_COMPACT:return`    result := SCANNER_TABLE[state][c];
`;case Y.SCANNER_TABLE_HARDCODE:{const n=e.transitions,r=[];for(let i=0;i<n.size();i++){const o=n.get(i);if(o.size!=0){r.push("        "+i+`: case integer(c) of
`);for(const[a,l]of o.entries()){const c=a,p=l;r.push("            "+c.charCodeAt(0)+": result := "+p+`;
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
`}}class Ru{generate(e,t){const n=new Map;if(e!=null){const r=t.parserName;let i;switch(t.parser){case Y.PARSER_REC_DESC:i=this.buildRecursiveDescendantParser(e,t);break;case Y.PARSER_LL:i=this.buildLLParser(e,t);break;case Y.PARSER_SLR:case Y.PARSER_LALR:case Y.PARSER_LR:i=this.buildLRParser(e,t);break;default:i=null}if(i===null)throw new ee("String do Parser é nulo.");n.set("U"+r+".pas",i),n.set("U"+t.semanticName+".pas",this.generateSemanticAnalyser(t))}return n}buildRecursiveDescendantParser(e,t){const n=t.parserName,r=t.scannerName,i=t.semanticName,o=new xr(e),a=o.build();let l="";for(let h=e.FIRST_NON_TERMINAL;h<e.FIRST_SEMANTIC_ACTION();h++)l+="        procedure "+o.getSymbols(h)+`;
`;const c=l;l="";for(let h=e.FIRST_NON_TERMINAL;h<e.FIRST_SEMANTIC_ACTION();h++){const m=o.getSymbols(h),d=a.get(m);if(l+=`
procedure T`+n+"."+m+`;
begin
    case currentToken.getId of
`,d==null)throw new dn("Gramática não é LL.");const T=Array.from(d.input.keys());for(let f=0;f<T.length;f++){const S=d.input.get(T[f]);let b=T[f];l+="        "+b+" (* "+o.getSymbols(b)+" *)";for(let g=f+1;g<T.length;g++)d.input.get(T[g])===S&&(b=T[g],l+=`,
        `+b+" (* "+o.getSymbols(b)+" *)",T.slice(g,g),g--);if(S===void 0)throw new dn("Gramática não é LL.");l+=` : 
        begin
`,S.length==0&&(l+=`            // EPSILON
`);for(let g=0;g<S.length;g++){const v=S[g];e.isTerminal(v)?l+="            match("+v+"); // "+o.getSymbols(v)+`
`:e.isNonTerminal(v)?l+="            "+o.getSymbols(v)+`;
`:l+="            semanticAnalyser.executeAction("+(v-e.FIRST_SEMANTIC_ACTION())+`, previousToken);
`}l+=`        end;
`}l+=`        else
            raise ESyntaticError.create(PARSER_ERROR[`+d.lhs+`], currentToken.getPosition());
    end;
end;
`}const p=l;return"unit U"+n+`;

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

`+c+`    end;

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
`+p+`
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
`}}const Lt=class Lt{constructor(e){R(this,"FIRST_NON_TERMINAL");R(this,"FIRST_SEMANTIC_ACTION");R(this,"LAST_SEMANTIC_ACTION");R(this,"START_SYMBOL",0);R(this,"grammar");R(this,"scanner",null);R(this,"table");R(this,"productions");R(this,"stack",new zt);R(this,"currentToken",null);R(this,"symb");R(this,"node",new st);R(this,"nodeCount",new zt);this.grammar=e.getGrammar()||(()=>{throw new Error("Grammar is undefined")})(),this.table=e.generateTable(),this.FIRST_NON_TERMINAL=this.grammar.FIRST_NON_TERMINAL,this.FIRST_SEMANTIC_ACTION=this.grammar.FIRST_SEMANTIC_ACTION(),this.LAST_SEMANTIC_ACTION=this.grammar.LAST_SEMANTIC_ACTION(),this.START_SYMBOL=this.grammar.startSymbol;const t=this.grammar.productions;this.productions=[];for(let n=0;n<t.size();n++){const r=t.get(n).get_rhs();if(r.length>0){this.productions[n]=[];for(let i=0;i<r.length;i++)this.productions[n][i]=r[i]}else this.productions[n]=[0]}this.symb=this.grammar.symbols}step(){this.currentToken==null&&(this.currentToken=new xe(Lt.DOLLAR,"$",0));const e=this.stack.pop(),t=this.currentToken.id;if(e==null)throw new ee("Stack is not initialized");if(e==Lt.EPSILON){this.node.add(new st("EPSILON"));let n=this.nodeCount.pop();for(;n==1;){const r=this.node.parent;if(r===null)throw new ee("Null parent");if(this.node=r,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}return this.nodeCount.push(n-1),!1}else if(this.isTerminal(e)){this.node.add(new st(this.symb[t]));let n=this.nodeCount.pop();for(;n==1;){const r=this.node.parent;if(r===null)throw new ee("Null parent");if(this.node=r,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}if(this.nodeCount.push(n-1),e==t){if(this.stack.empty())return!0;if(this.scanner==null)throw new ee("Scanner is NULL");return this.currentToken=this.scanner.nextToken(),!1}else throw this.node.add(new st("ERRO SINTÁTICO: Era esperado "+this.symb[e])),new ee("Era esperado "+this.symb[e],this.currentToken.position)}else if(this.isNonTerminal(e)){const n=this.table[e-this.FIRST_NON_TERMINAL][t-1];if(n!=-1){const r=this.productions[n];for(let o=r.length-1;o>=0;o--)this.stack.push(r[o]);const i=new st(this.symb[e]);return this.node.add(i),this.node=i,this.nodeCount.push(r.length),!1}else throw this.node.add(new st("ERRO SINTÁTICO: "+this.symb[t]+" inesperado")),new ee(this.symb[t]+" inesperado",this.currentToken.position)}else if(this.isSemanticAction(e)){this.node.add(new st("#"+(e-this.FIRST_SEMANTIC_ACTION)));let n=this.nodeCount.pop();for(;n==1;){const r=this.node.parent;if(r===null)throw new ee("Null parent");if(this.node=r,this.nodeCount.size()>0)n=this.nodeCount.pop();else break}return this.nodeCount.push(n-1),!1}else return!1}parse(e,t){for(this.scanner=e,this.node=t,this.nodeCount.clear(),this.stack.clear(),this.stack.push(Lt.DOLLAR),this.stack.push(this.START_SYMBOL),this.currentToken=this.scanner.nextToken();!this.step(););return t}isTerminal(e){return e>=0&&e<this.FIRST_NON_TERMINAL}isNonTerminal(e){return e>=this.FIRST_NON_TERMINAL&&e<this.FIRST_SEMANTIC_ACTION}isSemanticAction(e){return e>=this.FIRST_SEMANTIC_ACTION&&e<=this.LAST_SEMANTIC_ACTION}};R(Lt,"EPSILON",0),R(Lt,"DOLLAR",1),R(Lt,"FIRST_TERMINAL",2);let sr=Lt;function Qt(s,e){const t=s.split(`
`).filter(Boolean),n=new Map;for(let r of t){r=r.trim();const i=r.split(":").filter(Boolean);n.set("{"+i[0].trim()+"}",i[1].trim())}for(const[r,i]of n.entries()){const o=new RegExp(r,"g");e=e.replace(o,i)}return e}function Nu(s,e,t){try{t=Qt(e,t),e=""}catch{throw new Ie("Definições com problemas - Verificar Definições")}const n=!0;Ut.Instance;const i=new Jt().parseFA(e,t,n),o=new _e;{const m=i.tokens;for(let d=0;d<m.size();d++)o.add(m.get(d))}const a=o;for(;a.remove(`
`););function l(m){try{const d=new Fo;for(let T=0;T<c.size();T++){const f=c.get(T);d.addToken(f,f)}return d.addIgnore("[\\ \\n\\r\\t]"),d.getFA(m)}catch(d){return console.log(d),null}}const c=a;let p;if(i!=null)p=new Xt(i,n);else{const m=l(n);if(m==null)throw Error("Finite Automata from Lexical Data is NULL");p=new Xt(m,n)}p.setInput(s);const h=new Map;try{let m=p.nextToken();for(;m!=null;){const d=c.get(m.id-2);h.set(m,d),m=p.nextToken()}}catch(m){const d=new xe(-1,m.message,m.position);h.set(d,"ERRO LÉXICO"),console.log(m)}return h}function Iu(s,e){try{e=Qt(s,e),s=""}catch{throw new Ie("Definições com problemas - Verificar Definições")}const t=!0;return new Jt().parseFA(s,e,t).asHTML()}function Lu(s,e,t,n,r,i,o){try{t=Qt(e,t),e=""}catch{throw new Ie("Definições com problemas - Verificar Definições")}const a=r.split(`
`),l=new Set;a.forEach(F=>{const B=F.match(/^[^:]+(?=\s*::=)/);B&&l.add(B[0].trim())});const c=Array.from(l),p=c.indexOf(n.trim());if(p==-1)throw new ee("Símbolo inicial da Gramática não encontrado.");const h=c.splice(p,1)[0];c.splice(0,0,h);let m=!0;const d=!0;Ut.Instance;const f=new Jt().parseFA(e,t,d);let S;if(m||S==null){m=!1;const F=new _e;{const H=f.tokens;for(let X=0;X<H.size();X++)F.add(H.get(X)),F.add(`
`)}const B=c,I=new _e;B.forEach(H=>I.add(H)),S=new Bn().parse(F,I,r)}else S=void 0;const b=f.tokens.toArray();if(S===void 0)throw new ee("Grammar is Undefined");let g=null,v=null,w=null,k=null;switch(i){case Y.PARSER_REC_DESC:case Y.PARSER_LL:[v,o,k]=Nr(f,S,b,o,d);break;case Y.PARSER_SLR:case Y.PARSER_LALR:case Y.PARSER_LR:[g,o,w]=Ir(f,S,b,o,d);break}if(w===null&&k===null)throw new ee("Erro na criação do Parser Sintático");let O=new st("Derivação");if(o===null)throw new ee("Finite Automata Simulator is Null");return o.setInput(s),v!=null?O=v.parse(o,O):g!=null&&(O=g.parse(o,O)),O}function Ou(s,e,t,n,r,i){try{e=Qt(s,e),s=""}catch{throw new Ie("Definições com problemas - Verificar Definições")}const o=n.split(`
`),a=new Set;o.forEach(k=>{const O=k.match(/^[^:]+(?=\s*::=)/);O&&a.add(O[0].trim())});const l=Array.from(a),c=l.indexOf(t.trim());if(c==-1)throw new ee("Símbolo inicial da Gramática não encontrado.");const p=l.splice(c,1)[0];l.splice(0,0,p);let h=!0;const m=!0;Ut.Instance;const T=new Jt().parseFA(s,e,m);let f;if(h||f==null){h=!1;const k=new _e;{const B=T.tokens;for(let I=0;I<B.size();I++)k.add(B.get(I)),k.add(`
`)}const O=l,F=new _e;O.forEach(B=>F.add(B)),f=new Bn().parse(k,F,n)}else f=void 0;const S=T.tokens.toArray();if(f===void 0)throw new ee("Grammar is Undefined");let b=null,g=null,v=null,w=null;switch(r){case Y.PARSER_REC_DESC:case Y.PARSER_LL:[g,i,w]=Nr(T,f,S,i,m);break;case Y.PARSER_SLR:case Y.PARSER_LALR:case Y.PARSER_LR:[b,i,v]=Ir(T,f,S,i,m);break}if(v!==null)return v.tableAsHTML();if(w!==null)return w.tableAsHTML();throw new ee("Erro na criação do Parser Sintático")}function Pu(s,e,t,n,r,i){try{e=Qt(s,e),s=""}catch{throw new Ie("Definições com problemas - Verificar Definições")}const o=n.split(`
`),a=new Set;o.forEach(k=>{const O=k.match(/^[^:]+(?=\s*::=)/);O&&a.add(O[0].trim())});const l=Array.from(a),c=l.indexOf(t.trim());if(c==-1)throw new ee("Símbolo inicial da Gramática não encontrado.");const p=l.splice(c,1)[0];l.splice(0,0,p);let h=!0;const m=!0;Ut.Instance;const T=new Jt().parseFA(s,e,m);let f;if(h||f==null){h=!1;const k=new _e;{const B=T.tokens;for(let I=0;I<B.size();I++)k.add(B.get(I)),k.add(`
`)}const O=l,F=new _e;O.forEach(B=>F.add(B)),f=new Bn().parse(k,F,n)}else f=void 0;const S=T.tokens.toArray();if(f===void 0)throw new ee("Grammar is Undefined");let b=null,g=null,v=null,w=null;switch(r){case Y.PARSER_REC_DESC:case Y.PARSER_LL:[g,i,w]=Nr(T,f,S,i,m);break;case Y.PARSER_SLR:case Y.PARSER_LALR:case Y.PARSER_LR:[b,i,v]=Ir(T,f,S,i,m);break}if(v===null&&w===null)throw new ee("Erro na criação do Parser Sintático");return v!=null?v.itemsAsHTML():w!=null?w.tableAsHTML():"ERROR"}function Fu(s,e,t,n,r,i){try{e=Qt(s,e),s=""}catch{throw new Ie("Definições com problemas - Verificar Definições")}const o=n.split(`
`),a=new Set;o.forEach(S=>{const b=S.match(/^[^:]+(?=\s*::=)/);b&&a.add(b[0].trim())});const l=Array.from(a),c=l.indexOf(t.trim());if(c==-1)throw new ee("Símbolo inicial da Gramática não encontrado.");const p=l.splice(c,1)[0];l.splice(0,0,p);let h=!0;const m=!0;Ut.Instance;const T=new Jt().parseFA(s,e,m);let f;if(h||f==null){h=!1;const S=new _e;{const v=T.tokens;for(let w=0;w<v.size();w++)S.add(v.get(w)),S.add(`
`)}const b=l,g=new _e;b.forEach(v=>g.add(v)),f=new Bn().parse(S,g,n)}else f=void 0;if(T.tokens.toArray(),f===void 0)throw new ee("Grammar is Undefined");return f.ffAsHTML()}function Du(s,e){const t=e.split(`
`),n=new Set;t.forEach(o=>{const a=o.match(/^[^:]+(?=\s*::=)/);a&&n.add(a[0].trim())});const r=Array.from(n),i=r.indexOf(s.trim());if(i!=-1){const o=r.splice(i,1)[0];r.splice(0,0,o)}else r.splice(0,0,s);return r.join(`
`)}function zu(s,e,t,n,r){try{e=Qt(s,e),s=""}catch{throw new Ie("Definições com problemas - Verificar Definições")}const i=n.split(`
`),o=new Set;i.forEach(S=>{const b=S.match(/^[^:]+(?=\s*::=)/);b&&o.add(b[0].trim())});const a=Array.from(o),l=a.indexOf(t.trim());if(l==-1)throw new ee("Símbolo inicial da Gramática não encontrado.");const c=a.splice(l,1)[0];a.splice(0,0,c);let p=!0;const h=!0;Ut.Instance;const d=new Jt().parseFA(s,e,h);let T;if(p||T==null){p=!1;const S=new _e;{const v=d.tokens;for(let w=0;w<v.size();w++)S.add(v.get(w)),S.add(`
`)}const b=a,g=new _e;b.forEach(v=>g.add(v)),T=new Bn().parse(S,g,n)}else T=void 0;if(d.tokens.toArray(),T===void 0)throw new ee("Grammar is Undefined");const f=new ht;switch(alert(r.language),r.language){case Y.LANG_JAVA:f.setAll(new Tu().generate(d,T,r)),f.setAll(new Su().generate(d,r)),f.setAll(new yu().generate(T,r));break;case Y.LANG_CPP:f.setAll(new wu().generate(d,T,r)),f.setAll(new ku().generate(d,r)),f.setAll(new Au().generate(T,r));break;case Y.LANG_DELPHI:f.setAll(new Cu().generate(d,T,r)),f.setAll(new xu().generate(d,r)),f.setAll(new Ru().generate(T,r));break}return f}function Nr(s,e,t,n,r){s!=null?n=new Xt(s,r):n=new Xt(Do(t,r),r);let i,o;if(e!=null){if(o=new Rr(e),o===null)throw new ee("Parser is Null");i=new sr(o)}else throw new ee("Grammar is Null");return[i,n,o]}function Ir(s,e,t,n,r){s!=null?n=new Xt(s,r):n=new Xt(Do(t,r),r);let i,o;if(e!=null){if(o=xs.createGenerator(e,Y.PARSER_SLR),o===null)throw new ee("Parser is Null");i=new nr(o)}else throw new ee("Grammar is Null");return[i,n,o]}function Do(s,e){try{const t=new Fo;for(let n=0;n<s.length;n++){const r=s[n];t.addToken(r,r)}return t.addIgnore("[\\ \\n\\r\\t]"),t.getFA(e)}catch(t){throw t}}const en=Oc("projetos",{state:()=>({listaProjetos:[{id:0,fileName:"untitled.gals",options:"",regularDefinitions:"",tokens:"",nonTerminals:"",grammar:"",textSimulator:"",consoleExit:"",optionsGals:new Y}],selecionado:0,layout:{token:33.3333,simulacao:33.3333,saidaSimulacao:33.3333,gramatica:50}}),getters:{totalProjetos:s=>s.listaProjetos.length},actions:{changeSelected(s){this.selecionado=s},deleteProject(s){const e=this.selecionado;this.selecionado=-1,this.listaProjetos.splice(s,1);for(let t=0;t<this.listaProjetos.length;t++)this.listaProjetos[t].id=t;this.totalProjetos==0||this.selecionado==-1?this.selecionado=-1:this.selecionado=e-1},addProject(s){this.listaProjetos.push(s)},selectLastProject(){this.selecionado=this.listaProjetos.length-1}}});function Zn(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var zo={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,r,i){function o(c,p){if(!r[c]){if(!n[c]){var h=typeof Zn=="function"&&Zn;if(!p&&h)return h(c,!0);if(a)return a(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var d=r[c]={exports:{}};n[c][0].call(d.exports,function(T){var f=n[c][1][T];return o(f||T)},d,d.exports,t,n,r,i)}return r[c].exports}for(var a=typeof Zn=="function"&&Zn,l=0;l<i.length;l++)o(i[l]);return o}({1:[function(t,n,r){var i=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,p,h,m,d,T,f,S=[],b=0,g=l.length,v=g,w=i.getTypeOf(l)!=="string";b<l.length;)v=g-b,h=w?(c=l[b++],p=b<g?l[b++]:0,b<g?l[b++]:0):(c=l.charCodeAt(b++),p=b<g?l.charCodeAt(b++):0,b<g?l.charCodeAt(b++):0),m=c>>2,d=(3&c)<<4|p>>4,T=1<v?(15&p)<<2|h>>6:64,f=2<v?63&h:64,S.push(a.charAt(m)+a.charAt(d)+a.charAt(T)+a.charAt(f));return S.join("")},r.decode=function(l){var c,p,h,m,d,T,f=0,S=0,b="data:";if(l.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var g,v=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&v--,l.charAt(l.length-2)===a.charAt(64)&&v--,v%1!=0)throw new Error("Invalid base64 input, bad content length.");for(g=o.uint8array?new Uint8Array(0|v):new Array(0|v);f<l.length;)c=a.indexOf(l.charAt(f++))<<2|(m=a.indexOf(l.charAt(f++)))>>4,p=(15&m)<<4|(d=a.indexOf(l.charAt(f++)))>>2,h=(3&d)<<6|(T=a.indexOf(l.charAt(f++))),g[S++]=c,d!==64&&(g[S++]=p),T!==64&&(g[S++]=h);return g}},{"./support":30,"./utils":32}],2:[function(t,n,r){var i=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(p,h,m,d,T){this.compressedSize=p,this.uncompressedSize=h,this.crc32=m,this.compression=d,this.compressedContent=T}c.prototype={getContentWorker:function(){var p=new o(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return p.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new o(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(p,h,m){return p.pipe(new a).pipe(new l("uncompressedSize")).pipe(h.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,r){var i=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,r){var i=t("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var p=0;p<8;p++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?i.getTypeOf(a)!=="string"?function(c,p,h,m){var d=o,T=m+h;c^=-1;for(var f=m;f<T;f++)c=c>>>8^d[255&(c^p[f])];return-1^c}(0|l,a,a.length,0):function(c,p,h,m){var d=o,T=m+h;c^=-1;for(var f=m;f<T;f++)c=c>>>8^d[255&(c^p.charCodeAt(f))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(t,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,n,r){var i=null;i=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:i}},{lie:37}],7:[function(t,n,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),l=t("./stream/GenericWorker"),c=i?"uint8array":"array";function p(h,m){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(p,l),p.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,h.data),!1)},p.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(m){h.push({data:m,meta:h.meta})}},r.compressWorker=function(h){return new p("Deflate",h)},r.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,r){function i(d,T){var f,S="";for(f=0;f<T;f++)S+=String.fromCharCode(255&d),d>>>=8;return S}function o(d,T,f,S,b,g){var v,w,k=d.file,O=d.compression,F=g!==c.utf8encode,B=a.transformTo("string",g(k.name)),I=a.transformTo("string",c.utf8encode(k.name)),H=k.comment,X=a.transformTo("string",g(H)),x=a.transformTo("string",c.utf8encode(H)),K=I.length!==k.name.length,_=x.length!==H.length,q="",re="",Z="",te=k.dir,V=k.date,oe={crc32:0,compressedSize:0,uncompressedSize:0};T&&!f||(oe.crc32=d.crc32,oe.compressedSize=d.compressedSize,oe.uncompressedSize=d.uncompressedSize);var U=0;T&&(U|=8),F||!K&&!_||(U|=2048);var j=0,ae=0;te&&(j|=16),b==="UNIX"?(ae=798,j|=function(Q,be){var Le=Q;return Q||(Le=be?16893:33204),(65535&Le)<<16}(k.unixPermissions,te)):(ae=20,j|=function(Q){return 63&(Q||0)}(k.dosPermissions)),v=V.getUTCHours(),v<<=6,v|=V.getUTCMinutes(),v<<=5,v|=V.getUTCSeconds()/2,w=V.getUTCFullYear()-1980,w<<=4,w|=V.getUTCMonth()+1,w<<=5,w|=V.getUTCDate(),K&&(re=i(1,1)+i(p(B),4)+I,q+="up"+i(re.length,2)+re),_&&(Z=i(1,1)+i(p(X),4)+x,q+="uc"+i(Z.length,2)+Z);var se="";return se+=`
\0`,se+=i(U,2),se+=O.magic,se+=i(v,2),se+=i(w,2),se+=i(oe.crc32,4),se+=i(oe.compressedSize,4),se+=i(oe.uncompressedSize,4),se+=i(B.length,2),se+=i(q.length,2),{fileRecord:h.LOCAL_FILE_HEADER+se+B+q,dirRecord:h.CENTRAL_FILE_HEADER+i(ae,2)+se+i(X.length,2)+"\0\0\0\0"+i(j,4)+i(S,4)+B+q+X}}var a=t("../utils"),l=t("../stream/GenericWorker"),c=t("../utf8"),p=t("../crc32"),h=t("../signature");function m(d,T,f,S){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=T,this.zipPlatform=f,this.encodeFileName=S,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(d){var T=d.meta.percent||0,f=this.entriesCount,S=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:f?(T+100*(f-S-1))/f:100}}))},m.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var T=this.streamFiles&&!d.file.dir;if(T){var f=o(d,T,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(d){this.accumulate=!1;var T=this.streamFiles&&!d.file.dir,f=o(d,T,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),T)this.push({data:function(S){return h.DATA_DESCRIPTOR+i(S.crc32,4)+i(S.compressedSize,4)+i(S.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var d=this.bytesWritten,T=0;T<this.dirRecords.length;T++)this.push({data:this.dirRecords[T],meta:{percent:100}});var f=this.bytesWritten-d,S=function(b,g,v,w,k){var O=a.transformTo("string",k(w));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(b,2)+i(b,2)+i(g,4)+i(v,4)+i(O.length,2)+O}(this.dirRecords.length,f,d,this.zipComment,this.encodeFileName);this.push({data:S,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(d){this._sources.push(d);var T=this;return d.on("data",function(f){T.processChunk(f)}),d.on("end",function(){T.closedSource(T.previous.streamInfo),T._sources.length?T.prepareNextSource():T.end()}),d.on("error",function(f){T.error(f)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(d){var T=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var f=0;f<T.length;f++)try{T[f].error(d)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,T=0;T<d.length;T++)d[T].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,r){var i=t("../compressions"),o=t("./ZipFileWorker");r.generateWorker=function(a,l,c){var p=new o(l.streamFiles,c,l.platform,l.encodeFileName),h=0;try{a.forEach(function(m,d){h++;var T=function(g,v){var w=g||v,k=i[w];if(!k)throw new Error(w+" is not a valid compression method !");return k}(d.options.compression,l.compression),f=d.options.compressionOptions||l.compressionOptions||{},S=d.dir,b=d.date;d._compressWorker(T,f).withStreamInfo("file",{name:m,dir:S,date:b,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(p)}),p.entriesCount=h}catch(m){p.error(m)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,r){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new i;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(i.prototype=t("./object")).loadAsync=t("./load"),i.support=t("./support"),i.defaults=t("./defaults"),i.version="3.10.1",i.loadAsync=function(o,a){return new i().loadAsync(o,a)},i.external=t("./external"),n.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,r){var i=t("./utils"),o=t("./external"),a=t("./utf8"),l=t("./zipEntries"),c=t("./stream/Crc32Probe"),p=t("./nodejsUtils");function h(m){return new o.Promise(function(d,T){var f=m.decompressed.getContentWorker().pipe(new c);f.on("error",function(S){T(S)}).on("end",function(){f.streamInfo.crc32!==m.decompressed.crc32?T(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(m,d){var T=this;return d=i.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),p.isNode&&p.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",m,!0,d.optimizedBinaryString,d.base64).then(function(f){var S=new l(d);return S.load(f),S}).then(function(f){var S=[o.Promise.resolve(f)],b=f.files;if(d.checkCRC32)for(var g=0;g<b.length;g++)S.push(h(b[g]));return o.Promise.all(S)}).then(function(f){for(var S=f.shift(),b=S.files,g=0;g<b.length;g++){var v=b[g],w=v.fileNameStr,k=i.resolve(v.fileNameStr);T.file(k,v.decompressed,{binary:!0,optimizedBinaryString:!0,date:v.date,dir:v.dir,comment:v.fileCommentStr.length?v.fileCommentStr:null,unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions,createFolders:d.createFolders}),v.dir||(T.file(k).unsafeOriginalName=w)}return S.zipComment.length&&(T.comment=S.zipComment),T})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,r){var i=t("../utils"),o=t("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}i.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(p){c.push({data:p,meta:{percent:0}})}).on("error",function(p){c.isPaused?this.generatedError=p:c.error(p)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,r){var i=t("readable-stream").Readable;function o(a,l,c){i.call(this,l),this._helper=a;var p=this;a.on("data",function(h,m){p.push(h)||p._helper.pause(),c&&c(m)}).on("error",function(h){p.emit("error",h)}).on("end",function(){p.push(null)})}t("../utils").inherits(o,i),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(i,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(i,o);if(typeof i=="number")throw new Error('The "data" argument must not be a number');return new Buffer(i,o)},allocBuffer:function(i){if(Buffer.alloc)return Buffer.alloc(i);var o=new Buffer(i);return o.fill(0),o},isBuffer:function(i){return Buffer.isBuffer(i)},isStream:function(i){return i&&typeof i.on=="function"&&typeof i.pause=="function"&&typeof i.resume=="function"}}},{}],15:[function(t,n,r){function i(k,O,F){var B,I=a.getTypeOf(O),H=a.extend(F||{},p);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(k=b(k)),H.createFolders&&(B=S(k))&&g.call(this,B,!0);var X=I==="string"&&H.binary===!1&&H.base64===!1;F&&F.binary!==void 0||(H.binary=!X),(O instanceof h&&O.uncompressedSize===0||H.dir||!O||O.length===0)&&(H.base64=!1,H.binary=!0,O="",H.compression="STORE",I="string");var x=null;x=O instanceof h||O instanceof l?O:T.isNode&&T.isStream(O)?new f(k,O):a.prepareContent(k,O,H.binary,H.optimizedBinaryString,H.base64);var K=new m(k,x,H);this.files[k]=K}var o=t("./utf8"),a=t("./utils"),l=t("./stream/GenericWorker"),c=t("./stream/StreamHelper"),p=t("./defaults"),h=t("./compressedObject"),m=t("./zipObject"),d=t("./generate"),T=t("./nodejsUtils"),f=t("./nodejs/NodejsStreamInputAdapter"),S=function(k){k.slice(-1)==="/"&&(k=k.substring(0,k.length-1));var O=k.lastIndexOf("/");return 0<O?k.substring(0,O):""},b=function(k){return k.slice(-1)!=="/"&&(k+="/"),k},g=function(k,O){return O=O!==void 0?O:p.createFolders,k=b(k),this.files[k]||i.call(this,k,null,{dir:!0,createFolders:O}),this.files[k]};function v(k){return Object.prototype.toString.call(k)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(k){var O,F,B;for(O in this.files)B=this.files[O],(F=O.slice(this.root.length,O.length))&&O.slice(0,this.root.length)===this.root&&k(F,B)},filter:function(k){var O=[];return this.forEach(function(F,B){k(F,B)&&O.push(B)}),O},file:function(k,O,F){if(arguments.length!==1)return k=this.root+k,i.call(this,k,O,F),this;if(v(k)){var B=k;return this.filter(function(H,X){return!X.dir&&B.test(H)})}var I=this.files[this.root+k];return I&&!I.dir?I:null},folder:function(k){if(!k)return this;if(v(k))return this.filter(function(I,H){return H.dir&&k.test(I)});var O=this.root+k,F=g.call(this,O),B=this.clone();return B.root=F.name,B},remove:function(k){k=this.root+k;var O=this.files[k];if(O||(k.slice(-1)!=="/"&&(k+="/"),O=this.files[k]),O&&!O.dir)delete this.files[k];else for(var F=this.filter(function(I,H){return H.name.slice(0,k.length)===k}),B=0;B<F.length;B++)delete this.files[F[B].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(k){var O,F={};try{if((F=a.extend(k||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=F.type.toLowerCase(),F.compression=F.compression.toUpperCase(),F.type==="binarystring"&&(F.type="string"),!F.type)throw new Error("No output type specified.");a.checkSupport(F.type),F.platform!=="darwin"&&F.platform!=="freebsd"&&F.platform!=="linux"&&F.platform!=="sunos"||(F.platform="UNIX"),F.platform==="win32"&&(F.platform="DOS");var B=F.comment||this.comment||"";O=d.generateWorker(this,F,B)}catch(I){(O=new l("error")).error(I)}return new c(O,F.type||"string",F.mimeType)},generateAsync:function(k,O){return this.generateInternalStream(k).accumulate(O)},generateNodeStream:function(k,O){return(k=k||{}).type||(k.type="nodebuffer"),this.generateInternalStream(k).toNodejsStream(O)}};n.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,r){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,r){var i=t("./DataReader");function o(a){i.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}t("../utils").inherits(o,i),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),p=a.charCodeAt(2),h=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===p&&this.data[m+3]===h)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),p=a.charCodeAt(2),h=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&p===m[2]&&h===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,n,r){var i=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return i.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(t,n,r){var i=t("./Uint8ArrayReader");function o(a){i.call(this,a)}t("../utils").inherits(o,i),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,r){var i=t("./DataReader");function o(a){i.call(this,a)}t("../utils").inherits(o,i),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,n,r){var i=t("./ArrayReader");function o(a){i.call(this,a)}t("../utils").inherits(o,i),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,r){var i=t("../utils"),o=t("../support"),a=t("./ArrayReader"),l=t("./StringReader"),c=t("./NodeBufferReader"),p=t("./Uint8ArrayReader");n.exports=function(h){var m=i.getTypeOf(h);return i.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new c(h):o.uint8array?new p(i.transformTo("uint8array",h)):new a(i.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,r){var i=t("./GenericWorker"),o=t("../utils");function a(l){i.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,i),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,r){var i=t("./GenericWorker"),o=t("../crc32");function a(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,i),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,r){var i=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}i.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,r){var i=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){c.dataIsReady=!0,c.data=p,c.max=p&&p.length||0,c.type=i.getTypeOf(p),c.isPaused||c._tickAndRepeat()},function(p){c.error(p)})}i.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,r){function i(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=i},{}],29:[function(t,n,r){var i=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),l=t("../base64"),c=t("../support"),p=t("../external"),h=null;if(c.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(T,f){return new p.Promise(function(S,b){var g=[],v=T._internalType,w=T._outputType,k=T._mimeType;T.on("data",function(O,F){g.push(O),f&&f(F)}).on("error",function(O){g=[],b(O)}).on("end",function(){try{var O=function(F,B,I){switch(F){case"blob":return i.newBlob(i.transformTo("arraybuffer",B),I);case"base64":return l.encode(B);default:return i.transformTo(F,B)}}(w,function(F,B){var I,H=0,X=null,x=0;for(I=0;I<B.length;I++)x+=B[I].length;switch(F){case"string":return B.join("");case"array":return Array.prototype.concat.apply([],B);case"uint8array":for(X=new Uint8Array(x),I=0;I<B.length;I++)X.set(B[I],H),H+=B[I].length;return X;case"nodebuffer":return Buffer.concat(B);default:throw new Error("concat : unsupported type '"+F+"'")}}(v,g),k);S(O)}catch(F){b(F)}g=[]}).resume()})}function d(T,f,S){var b=f;switch(f){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=f,this._mimeType=S,i.checkSupport(b),this._worker=T.pipe(new o(b)),T.lock()}catch(g){this._worker=new a("error"),this._worker.error(g)}}d.prototype={accumulate:function(T){return m(this,T)},on:function(T,f){var S=this;return T==="data"?this._worker.on(T,function(b){f.call(S,b.data,b.meta)}):this._worker.on(T,function(){i.delay(f,arguments,S)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(T){if(i.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},T)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=new Blob([i],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(i),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,r){for(var i=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),l=t("./stream/GenericWorker"),c=new Array(256),p=0;p<256;p++)c[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;c[254]=c[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(T){var f,S,b,g,v,w=T.length,k=0;for(g=0;g<w;g++)(64512&(S=T.charCodeAt(g)))==55296&&g+1<w&&(64512&(b=T.charCodeAt(g+1)))==56320&&(S=65536+(S-55296<<10)+(b-56320),g++),k+=S<128?1:S<2048?2:S<65536?3:4;for(f=o.uint8array?new Uint8Array(k):new Array(k),g=v=0;v<k;g++)(64512&(S=T.charCodeAt(g)))==55296&&g+1<w&&(64512&(b=T.charCodeAt(g+1)))==56320&&(S=65536+(S-55296<<10)+(b-56320),g++),S<128?f[v++]=S:(S<2048?f[v++]=192|S>>>6:(S<65536?f[v++]=224|S>>>12:(f[v++]=240|S>>>18,f[v++]=128|S>>>12&63),f[v++]=128|S>>>6&63),f[v++]=128|63&S);return f}(d)},r.utf8decode=function(d){return o.nodebuffer?i.transformTo("nodebuffer",d).toString("utf-8"):function(T){var f,S,b,g,v=T.length,w=new Array(2*v);for(f=S=0;f<v;)if((b=T[f++])<128)w[S++]=b;else if(4<(g=c[b]))w[S++]=65533,f+=g-1;else{for(b&=g===2?31:g===3?15:7;1<g&&f<v;)b=b<<6|63&T[f++],g--;1<g?w[S++]=65533:b<65536?w[S++]=b:(b-=65536,w[S++]=55296|b>>10&1023,w[S++]=56320|1023&b)}return w.length!==S&&(w.subarray?w=w.subarray(0,S):w.length=S),i.applyFromCharCode(w)}(d=i.transformTo(o.uint8array?"uint8array":"array",d))},i.inherits(h,l),h.prototype.processChunk=function(d){var T=i.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var f=T;(T=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),T.set(f,this.leftOver.length)}else T=this.leftOver.concat(T);this.leftOver=null}var S=function(g,v){var w;for((v=v||g.length)>g.length&&(v=g.length),w=v-1;0<=w&&(192&g[w])==128;)w--;return w<0||w===0?v:w+c[g[w]]>v?w:v}(T),b=T;S!==T.length&&(o.uint8array?(b=T.subarray(0,S),this.leftOver=T.subarray(S,T.length)):(b=T.slice(0,S),this.leftOver=T.slice(S,T.length))),this.push({data:r.utf8decode(b),meta:d.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=h,i.inherits(m,l),m.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,r){var i=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),l=t("./external");function c(f){return f}function p(f,S){for(var b=0;b<f.length;++b)S[b]=255&f.charCodeAt(b);return S}t("setimmediate"),r.newBlob=function(f,S){r.checkSupport("blob");try{return new Blob([f],{type:S})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(f),b.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(f,S,b){var g=[],v=0,w=f.length;if(w<=b)return String.fromCharCode.apply(null,f);for(;v<w;)S==="array"||S==="nodebuffer"?g.push(String.fromCharCode.apply(null,f.slice(v,Math.min(v+b,w)))):g.push(String.fromCharCode.apply(null,f.subarray(v,Math.min(v+b,w)))),v+=b;return g.join("")},stringifyByChar:function(f){for(var S="",b=0;b<f.length;b++)S+=String.fromCharCode(f[b]);return S},applyCanBeUsed:{uint8array:function(){try{return i.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return i.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(f){var S=65536,b=r.getTypeOf(f),g=!0;if(b==="uint8array"?g=h.applyCanBeUsed.uint8array:b==="nodebuffer"&&(g=h.applyCanBeUsed.nodebuffer),g)for(;1<S;)try{return h.stringifyByChunk(f,b,S)}catch{S=Math.floor(S/2)}return h.stringifyByChar(f)}function d(f,S){for(var b=0;b<f.length;b++)S[b]=f[b];return S}r.applyFromCharCode=m;var T={};T.string={string:c,array:function(f){return p(f,new Array(f.length))},arraybuffer:function(f){return T.string.uint8array(f).buffer},uint8array:function(f){return p(f,new Uint8Array(f.length))},nodebuffer:function(f){return p(f,a.allocBuffer(f.length))}},T.array={string:m,array:c,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return a.newBufferFrom(f)}},T.arraybuffer={string:function(f){return m(new Uint8Array(f))},array:function(f){return d(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:c,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return a.newBufferFrom(new Uint8Array(f))}},T.uint8array={string:m,array:function(f){return d(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:c,nodebuffer:function(f){return a.newBufferFrom(f)}},T.nodebuffer={string:m,array:function(f){return d(f,new Array(f.length))},arraybuffer:function(f){return T.nodebuffer.uint8array(f).buffer},uint8array:function(f){return d(f,new Uint8Array(f.length))},nodebuffer:c},r.transformTo=function(f,S){if(S=S||"",!f)return S;r.checkSupport(f);var b=r.getTypeOf(S);return T[b][f](S)},r.resolve=function(f){for(var S=f.split("/"),b=[],g=0;g<S.length;g++){var v=S[g];v==="."||v===""&&g!==0&&g!==S.length-1||(v===".."?b.pop():b.push(v))}return b.join("/")},r.getTypeOf=function(f){return typeof f=="string"?"string":Object.prototype.toString.call(f)==="[object Array]"?"array":i.nodebuffer&&a.isBuffer(f)?"nodebuffer":i.uint8array&&f instanceof Uint8Array?"uint8array":i.arraybuffer&&f instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(f){if(!i[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(f){var S,b,g="";for(b=0;b<(f||"").length;b++)g+="\\x"+((S=f.charCodeAt(b))<16?"0":"")+S.toString(16).toUpperCase();return g},r.delay=function(f,S,b){setImmediate(function(){f.apply(b||null,S||[])})},r.inherits=function(f,S){function b(){}b.prototype=S.prototype,f.prototype=new b},r.extend=function(){var f,S,b={};for(f=0;f<arguments.length;f++)for(S in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],S)&&b[S]===void 0&&(b[S]=arguments[f][S]);return b},r.prepareContent=function(f,S,b,g,v){return l.Promise.resolve(S).then(function(w){return i.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new l.Promise(function(k,O){var F=new FileReader;F.onload=function(B){k(B.target.result)},F.onerror=function(B){O(B.target.error)},F.readAsArrayBuffer(w)}):w}).then(function(w){var k=r.getTypeOf(w);return k?(k==="arraybuffer"?w=r.transformTo("uint8array",w):k==="string"&&(v?w=o.decode(w):b&&g!==!0&&(w=function(O){return p(O,i.uint8array?new Uint8Array(O.length):new Array(O.length))}(w))),w):l.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,r){var i=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),l=t("./zipEntry"),c=t("./support");function p(h){this.files=[],this.loadOptions=h}p.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(h)+")")}},isSignature:function(h,m){var d=this.reader.index;this.reader.setIndex(h);var T=this.reader.readString(4)===m;return this.reader.setIndex(d),T},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",d=o.transformTo(m,h);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,m,d,T=this.zip64EndOfCentralSize-44;0<T;)h=this.reader.readInt(2),m=this.reader.readInt(4),d=this.reader.readData(m),this.zip64ExtensibleData[h]={id:h,length:m,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,m;for(h=0;h<this.files.length;h++)m=this.files[h],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var m=h;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var T=m-d;if(0<T)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=T);else if(T<0)throw new Error("Corrupted zip: missing "+Math.abs(T)+" bytes.")},prepareReader:function(h){this.reader=i(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,r){var i=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),l=t("./crc32"),c=t("./utf8"),p=t("./compressions"),h=t("./support");function m(d,T){this.options=d,this.loadOptions=T}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var T,f;if(d.skip(22),this.fileNameLength=d.readInt(2),f=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((T=function(S){for(var b in p)if(Object.prototype.hasOwnProperty.call(p,b)&&p[b].magic===S)return p[b];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,T,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var T=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(T),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=i(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var T,f,S,b=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<b;)T=d.readInt(2),f=d.readInt(2),S=d.readData(f),this.extraFields[T]={id:T,length:f,value:S};d.setIndex(b)},handleUTF8:function(){var d=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var T=this.findExtraFieldUnicodePath();if(T!==null)this.fileNameStr=T;else{var f=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var S=this.findExtraFieldUnicodeComment();if(S!==null)this.fileCommentStr=S;else{var b=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var T=i(d.value);return T.readInt(1)!==1||l(this.fileName)!==T.readInt(4)?null:c.utf8decode(T.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var T=i(d.value);return T.readInt(1)!==1||l(this.fileComment)!==T.readInt(4)?null:c.utf8decode(T.readData(d.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,r){function i(T,f,S){this.name=T,this.dir=S.dir,this.date=S.date,this.comment=S.comment,this.unixPermissions=S.unixPermissions,this.dosPermissions=S.dosPermissions,this._data=f,this._dataBinary=S.binary,this.options={compression:S.compression,compressionOptions:S.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),l=t("./utf8"),c=t("./compressedObject"),p=t("./stream/GenericWorker");i.prototype={internalStream:function(T){var f=null,S="string";try{if(!T)throw new Error("No output type specified.");var b=(S=T.toLowerCase())==="string"||S==="text";S!=="binarystring"&&S!=="text"||(S="string"),f=this._decompressWorker();var g=!this._dataBinary;g&&!b&&(f=f.pipe(new l.Utf8EncodeWorker)),!g&&b&&(f=f.pipe(new l.Utf8DecodeWorker))}catch(v){(f=new p("error")).error(v)}return new o(f,S,"")},async:function(T,f){return this.internalStream(T).accumulate(f)},nodeStream:function(T,f){return this.internalStream(T||"nodebuffer").toNodejsStream(f)},_compressWorker:function(T,f){if(this._data instanceof c&&this._data.compression.magic===T.magic)return this._data.getCompressedWorker();var S=this._decompressWorker();return this._dataBinary||(S=S.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(S,T,f)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof p?this._data:new a(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<h.length;d++)i.prototype[h[d]]=m;n.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,r){(function(i){var o,a,l=i.MutationObserver||i.WebKitMutationObserver;if(l){var c=0,p=new l(T),h=i.document.createTextNode("");p.observe(h,{characterData:!0}),o=function(){h.data=c=++c%2}}else if(i.setImmediate||i.MessageChannel===void 0)o="document"in i&&"onreadystatechange"in i.document.createElement("script")?function(){var f=i.document.createElement("script");f.onreadystatechange=function(){T(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},i.document.documentElement.appendChild(f)}:function(){setTimeout(T,0)};else{var m=new i.MessageChannel;m.port1.onmessage=T,o=function(){m.port2.postMessage(0)}}var d=[];function T(){var f,S;a=!0;for(var b=d.length;b;){for(S=d,d=[],f=-1;++f<b;)S[f]();b=d.length}a=!1}n.exports=function(f){d.push(f)!==1||a||o()}}).call(this,typeof rn<"u"?rn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,r){var i=t("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],p=["PENDING"];function h(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,b!==o&&f(this,b)}function m(b,g,v){this.promise=b,typeof g=="function"&&(this.onFulfilled=g,this.callFulfilled=this.otherCallFulfilled),typeof v=="function"&&(this.onRejected=v,this.callRejected=this.otherCallRejected)}function d(b,g,v){i(function(){var w;try{w=g(v)}catch(k){return a.reject(b,k)}w===b?a.reject(b,new TypeError("Cannot resolve promise with itself")):a.resolve(b,w)})}function T(b){var g=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof g=="function")return function(){g.apply(b,arguments)}}function f(b,g){var v=!1;function w(F){v||(v=!0,a.reject(b,F))}function k(F){v||(v=!0,a.resolve(b,F))}var O=S(function(){g(k,w)});O.status==="error"&&w(O.value)}function S(b,g){var v={};try{v.value=b(g),v.status="success"}catch(w){v.status="error",v.value=w}return v}(n.exports=h).prototype.finally=function(b){if(typeof b!="function")return this;var g=this.constructor;return this.then(function(v){return g.resolve(b()).then(function(){return v})},function(v){return g.resolve(b()).then(function(){throw v})})},h.prototype.catch=function(b){return this.then(null,b)},h.prototype.then=function(b,g){if(typeof b!="function"&&this.state===c||typeof g!="function"&&this.state===l)return this;var v=new this.constructor(o);return this.state!==p?d(v,this.state===c?b:g,this.outcome):this.queue.push(new m(v,b,g)),v},m.prototype.callFulfilled=function(b){a.resolve(this.promise,b)},m.prototype.otherCallFulfilled=function(b){d(this.promise,this.onFulfilled,b)},m.prototype.callRejected=function(b){a.reject(this.promise,b)},m.prototype.otherCallRejected=function(b){d(this.promise,this.onRejected,b)},a.resolve=function(b,g){var v=S(T,g);if(v.status==="error")return a.reject(b,v.value);var w=v.value;if(w)f(b,w);else{b.state=c,b.outcome=g;for(var k=-1,O=b.queue.length;++k<O;)b.queue[k].callFulfilled(g)}return b},a.reject=function(b,g){b.state=l,b.outcome=g;for(var v=-1,w=b.queue.length;++v<w;)b.queue[v].callRejected(g);return b},h.resolve=function(b){return b instanceof this?b:a.resolve(new this(o),b)},h.reject=function(b){var g=new this(o);return a.reject(g,b)},h.all=function(b){var g=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=b.length,w=!1;if(!v)return this.resolve([]);for(var k=new Array(v),O=0,F=-1,B=new this(o);++F<v;)I(b[F],F);return B;function I(H,X){g.resolve(H).then(function(x){k[X]=x,++O!==v||w||(w=!0,a.resolve(B,k))},function(x){w||(w=!0,a.reject(B,x))})}},h.race=function(b){var g=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=b.length,w=!1;if(!v)return this.resolve([]);for(var k=-1,O=new this(o);++k<v;)F=b[k],g.resolve(F).then(function(B){w||(w=!0,a.resolve(O,B))},function(B){w||(w=!0,a.reject(O,B))});var F;return O}},{immediate:36}],38:[function(t,n,r){var i={};(0,t("./lib/utils/common").assign)(i,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,r){var i=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/messages"),c=t("./zlib/zstream"),p=Object.prototype.toString,h=0,m=-1,d=0,T=8;function f(b){if(!(this instanceof f))return new f(b);this.options=o.assign({level:m,method:T,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},b||{});var g=this.options;g.raw&&0<g.windowBits?g.windowBits=-g.windowBits:g.gzip&&0<g.windowBits&&g.windowBits<16&&(g.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var v=i.deflateInit2(this.strm,g.level,g.method,g.windowBits,g.memLevel,g.strategy);if(v!==h)throw new Error(l[v]);if(g.header&&i.deflateSetHeader(this.strm,g.header),g.dictionary){var w;if(w=typeof g.dictionary=="string"?a.string2buf(g.dictionary):p.call(g.dictionary)==="[object ArrayBuffer]"?new Uint8Array(g.dictionary):g.dictionary,(v=i.deflateSetDictionary(this.strm,w))!==h)throw new Error(l[v]);this._dict_set=!0}}function S(b,g){var v=new f(g);if(v.push(b,!0),v.err)throw v.msg||l[v.err];return v.result}f.prototype.push=function(b,g){var v,w,k=this.strm,O=this.options.chunkSize;if(this.ended)return!1;w=g===~~g?g:g===!0?4:0,typeof b=="string"?k.input=a.string2buf(b):p.call(b)==="[object ArrayBuffer]"?k.input=new Uint8Array(b):k.input=b,k.next_in=0,k.avail_in=k.input.length;do{if(k.avail_out===0&&(k.output=new o.Buf8(O),k.next_out=0,k.avail_out=O),(v=i.deflate(k,w))!==1&&v!==h)return this.onEnd(v),!(this.ended=!0);k.avail_out!==0&&(k.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(k.output,k.next_out))):this.onData(o.shrinkBuf(k.output,k.next_out)))}while((0<k.avail_in||k.avail_out===0)&&v!==1);return w===4?(v=i.deflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===h):w!==2||(this.onEnd(h),!(k.avail_out=0))},f.prototype.onData=function(b){this.chunks.push(b)},f.prototype.onEnd=function(b){b===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},r.Deflate=f,r.deflate=S,r.deflateRaw=function(b,g){return(g=g||{}).raw=!0,S(b,g)},r.gzip=function(b,g){return(g=g||{}).gzip=!0,S(b,g)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,r){var i=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/constants"),c=t("./zlib/messages"),p=t("./zlib/zstream"),h=t("./zlib/gzheader"),m=Object.prototype.toString;function d(f){if(!(this instanceof d))return new d(f);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},f||{});var S=this.options;S.raw&&0<=S.windowBits&&S.windowBits<16&&(S.windowBits=-S.windowBits,S.windowBits===0&&(S.windowBits=-15)),!(0<=S.windowBits&&S.windowBits<16)||f&&f.windowBits||(S.windowBits+=32),15<S.windowBits&&S.windowBits<48&&!(15&S.windowBits)&&(S.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var b=i.inflateInit2(this.strm,S.windowBits);if(b!==l.Z_OK)throw new Error(c[b]);this.header=new h,i.inflateGetHeader(this.strm,this.header)}function T(f,S){var b=new d(S);if(b.push(f,!0),b.err)throw b.msg||c[b.err];return b.result}d.prototype.push=function(f,S){var b,g,v,w,k,O,F=this.strm,B=this.options.chunkSize,I=this.options.dictionary,H=!1;if(this.ended)return!1;g=S===~~S?S:S===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof f=="string"?F.input=a.binstring2buf(f):m.call(f)==="[object ArrayBuffer]"?F.input=new Uint8Array(f):F.input=f,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new o.Buf8(B),F.next_out=0,F.avail_out=B),(b=i.inflate(F,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&I&&(O=typeof I=="string"?a.string2buf(I):m.call(I)==="[object ArrayBuffer]"?new Uint8Array(I):I,b=i.inflateSetDictionary(this.strm,O)),b===l.Z_BUF_ERROR&&H===!0&&(b=l.Z_OK,H=!1),b!==l.Z_STREAM_END&&b!==l.Z_OK)return this.onEnd(b),!(this.ended=!0);F.next_out&&(F.avail_out!==0&&b!==l.Z_STREAM_END&&(F.avail_in!==0||g!==l.Z_FINISH&&g!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(v=a.utf8border(F.output,F.next_out),w=F.next_out-v,k=a.buf2string(F.output,v),F.next_out=w,F.avail_out=B-w,w&&o.arraySet(F.output,F.output,v,w,0),this.onData(k)):this.onData(o.shrinkBuf(F.output,F.next_out)))),F.avail_in===0&&F.avail_out===0&&(H=!0)}while((0<F.avail_in||F.avail_out===0)&&b!==l.Z_STREAM_END);return b===l.Z_STREAM_END&&(g=l.Z_FINISH),g===l.Z_FINISH?(b=i.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===l.Z_OK):g!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(F.avail_out=0))},d.prototype.onData=function(f){this.chunks.push(f)},d.prototype.onEnd=function(f){f===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},r.Inflate=d,r.inflate=T,r.inflateRaw=function(f,S){return(S=S||{}).raw=!0,T(f,S)},r.ungzip=T},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var p=c.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var h in p)p.hasOwnProperty(h)&&(l[h]=p[h])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,p,h,m){if(c.subarray&&l.subarray)l.set(c.subarray(p,p+h),m);else for(var d=0;d<h;d++)l[m+d]=c[p+d]},flattenChunks:function(l){var c,p,h,m,d,T;for(c=h=0,p=l.length;c<p;c++)h+=l[c].length;for(T=new Uint8Array(h),c=m=0,p=l.length;c<p;c++)d=l[c],T.set(d,m),m+=d.length;return T}},a={arraySet:function(l,c,p,h,m){for(var d=0;d<h;d++)l[m+d]=c[p+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(i)},{}],42:[function(t,n,r){var i=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new i.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function p(h,m){if(m<65537&&(h.subarray&&a||!h.subarray&&o))return String.fromCharCode.apply(null,i.shrinkBuf(h,m));for(var d="",T=0;T<m;T++)d+=String.fromCharCode(h[T]);return d}l[254]=l[254]=1,r.string2buf=function(h){var m,d,T,f,S,b=h.length,g=0;for(f=0;f<b;f++)(64512&(d=h.charCodeAt(f)))==55296&&f+1<b&&(64512&(T=h.charCodeAt(f+1)))==56320&&(d=65536+(d-55296<<10)+(T-56320),f++),g+=d<128?1:d<2048?2:d<65536?3:4;for(m=new i.Buf8(g),f=S=0;S<g;f++)(64512&(d=h.charCodeAt(f)))==55296&&f+1<b&&(64512&(T=h.charCodeAt(f+1)))==56320&&(d=65536+(d-55296<<10)+(T-56320),f++),d<128?m[S++]=d:(d<2048?m[S++]=192|d>>>6:(d<65536?m[S++]=224|d>>>12:(m[S++]=240|d>>>18,m[S++]=128|d>>>12&63),m[S++]=128|d>>>6&63),m[S++]=128|63&d);return m},r.buf2binstring=function(h){return p(h,h.length)},r.binstring2buf=function(h){for(var m=new i.Buf8(h.length),d=0,T=m.length;d<T;d++)m[d]=h.charCodeAt(d);return m},r.buf2string=function(h,m){var d,T,f,S,b=m||h.length,g=new Array(2*b);for(d=T=0;d<b;)if((f=h[d++])<128)g[T++]=f;else if(4<(S=l[f]))g[T++]=65533,d+=S-1;else{for(f&=S===2?31:S===3?15:7;1<S&&d<b;)f=f<<6|63&h[d++],S--;1<S?g[T++]=65533:f<65536?g[T++]=f:(f-=65536,g[T++]=55296|f>>10&1023,g[T++]=56320|1023&f)}return p(g,T)},r.utf8border=function(h,m){var d;for((m=m||h.length)>h.length&&(m=h.length),d=m-1;0<=d&&(192&h[d])==128;)d--;return d<0||d===0?m:d+l[h[d]]>m?d:m}},{"./common":41}],43:[function(t,n,r){n.exports=function(i,o,a,l){for(var c=65535&i|0,p=i>>>16&65535|0,h=0;a!==0;){for(a-=h=2e3<a?2e3:a;p=p+(c=c+o[l++]|0)|0,--h;);c%=65521,p%=65521}return c|p<<16|0}},{}],44:[function(t,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,r){var i=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var p=i,h=c+l;o^=-1;for(var m=c;m<h;m++)o=o>>>8^p[255&(o^a[m])];return-1^o}},{}],46:[function(t,n,r){var i,o=t("../utils/common"),a=t("./trees"),l=t("./adler32"),c=t("./crc32"),p=t("./messages"),h=0,m=4,d=0,T=-2,f=-1,S=4,b=2,g=8,v=9,w=286,k=30,O=19,F=2*w+1,B=15,I=3,H=258,X=H+I+1,x=42,K=113,_=1,q=2,re=3,Z=4;function te(u,L){return u.msg=p[L],L}function V(u){return(u<<1)-(4<u?9:0)}function oe(u){for(var L=u.length;0<=--L;)u[L]=0}function U(u){var L=u.state,C=L.pending;C>u.avail_out&&(C=u.avail_out),C!==0&&(o.arraySet(u.output,L.pending_buf,L.pending_out,C,u.next_out),u.next_out+=C,L.pending_out+=C,u.total_out+=C,u.avail_out-=C,L.pending-=C,L.pending===0&&(L.pending_out=0))}function j(u,L){a._tr_flush_block(u,0<=u.block_start?u.block_start:-1,u.strstart-u.block_start,L),u.block_start=u.strstart,U(u.strm)}function ae(u,L){u.pending_buf[u.pending++]=L}function se(u,L){u.pending_buf[u.pending++]=L>>>8&255,u.pending_buf[u.pending++]=255&L}function Q(u,L){var C,E,y=u.max_chain_length,A=u.strstart,M=u.prev_length,z=u.nice_match,P=u.strstart>u.w_size-X?u.strstart-(u.w_size-X):0,$=u.window,W=u.w_mask,G=u.prev,J=u.strstart+H,le=$[A+M-1],ie=$[A+M];u.prev_length>=u.good_match&&(y>>=2),z>u.lookahead&&(z=u.lookahead);do if($[(C=L)+M]===ie&&$[C+M-1]===le&&$[C]===$[A]&&$[++C]===$[A+1]){A+=2,C++;do;while($[++A]===$[++C]&&$[++A]===$[++C]&&$[++A]===$[++C]&&$[++A]===$[++C]&&$[++A]===$[++C]&&$[++A]===$[++C]&&$[++A]===$[++C]&&$[++A]===$[++C]&&A<J);if(E=H-(J-A),A=J-H,M<E){if(u.match_start=L,z<=(M=E))break;le=$[A+M-1],ie=$[A+M]}}while((L=G[L&W])>P&&--y!=0);return M<=u.lookahead?M:u.lookahead}function be(u){var L,C,E,y,A,M,z,P,$,W,G=u.w_size;do{if(y=u.window_size-u.lookahead-u.strstart,u.strstart>=G+(G-X)){for(o.arraySet(u.window,u.window,G,G,0),u.match_start-=G,u.strstart-=G,u.block_start-=G,L=C=u.hash_size;E=u.head[--L],u.head[L]=G<=E?E-G:0,--C;);for(L=C=G;E=u.prev[--L],u.prev[L]=G<=E?E-G:0,--C;);y+=G}if(u.strm.avail_in===0)break;if(M=u.strm,z=u.window,P=u.strstart+u.lookahead,$=y,W=void 0,W=M.avail_in,$<W&&(W=$),C=W===0?0:(M.avail_in-=W,o.arraySet(z,M.input,M.next_in,W,P),M.state.wrap===1?M.adler=l(M.adler,z,W,P):M.state.wrap===2&&(M.adler=c(M.adler,z,W,P)),M.next_in+=W,M.total_in+=W,W),u.lookahead+=C,u.lookahead+u.insert>=I)for(A=u.strstart-u.insert,u.ins_h=u.window[A],u.ins_h=(u.ins_h<<u.hash_shift^u.window[A+1])&u.hash_mask;u.insert&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[A+I-1])&u.hash_mask,u.prev[A&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=A,A++,u.insert--,!(u.lookahead+u.insert<I)););}while(u.lookahead<X&&u.strm.avail_in!==0)}function Le(u,L){for(var C,E;;){if(u.lookahead<X){if(be(u),u.lookahead<X&&L===h)return _;if(u.lookahead===0)break}if(C=0,u.lookahead>=I&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+I-1])&u.hash_mask,C=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),C!==0&&u.strstart-C<=u.w_size-X&&(u.match_length=Q(u,C)),u.match_length>=I)if(E=a._tr_tally(u,u.strstart-u.match_start,u.match_length-I),u.lookahead-=u.match_length,u.match_length<=u.max_lazy_match&&u.lookahead>=I){for(u.match_length--;u.strstart++,u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+I-1])&u.hash_mask,C=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart,--u.match_length!=0;);u.strstart++}else u.strstart+=u.match_length,u.match_length=0,u.ins_h=u.window[u.strstart],u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+1])&u.hash_mask;else E=a._tr_tally(u,0,u.window[u.strstart]),u.lookahead--,u.strstart++;if(E&&(j(u,!1),u.strm.avail_out===0))return _}return u.insert=u.strstart<I-1?u.strstart:I-1,L===m?(j(u,!0),u.strm.avail_out===0?re:Z):u.last_lit&&(j(u,!1),u.strm.avail_out===0)?_:q}function he(u,L){for(var C,E,y;;){if(u.lookahead<X){if(be(u),u.lookahead<X&&L===h)return _;if(u.lookahead===0)break}if(C=0,u.lookahead>=I&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+I-1])&u.hash_mask,C=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),u.prev_length=u.match_length,u.prev_match=u.match_start,u.match_length=I-1,C!==0&&u.prev_length<u.max_lazy_match&&u.strstart-C<=u.w_size-X&&(u.match_length=Q(u,C),u.match_length<=5&&(u.strategy===1||u.match_length===I&&4096<u.strstart-u.match_start)&&(u.match_length=I-1)),u.prev_length>=I&&u.match_length<=u.prev_length){for(y=u.strstart+u.lookahead-I,E=a._tr_tally(u,u.strstart-1-u.prev_match,u.prev_length-I),u.lookahead-=u.prev_length-1,u.prev_length-=2;++u.strstart<=y&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+I-1])&u.hash_mask,C=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),--u.prev_length!=0;);if(u.match_available=0,u.match_length=I-1,u.strstart++,E&&(j(u,!1),u.strm.avail_out===0))return _}else if(u.match_available){if((E=a._tr_tally(u,0,u.window[u.strstart-1]))&&j(u,!1),u.strstart++,u.lookahead--,u.strm.avail_out===0)return _}else u.match_available=1,u.strstart++,u.lookahead--}return u.match_available&&(E=a._tr_tally(u,0,u.window[u.strstart-1]),u.match_available=0),u.insert=u.strstart<I-1?u.strstart:I-1,L===m?(j(u,!0),u.strm.avail_out===0?re:Z):u.last_lit&&(j(u,!1),u.strm.avail_out===0)?_:q}function pe(u,L,C,E,y){this.good_length=u,this.max_lazy=L,this.nice_length=C,this.max_chain=E,this.func=y}function Oe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*F),this.dyn_dtree=new o.Buf16(2*(2*k+1)),this.bl_tree=new o.Buf16(2*(2*O+1)),oe(this.dyn_ltree),oe(this.dyn_dtree),oe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(B+1),this.heap=new o.Buf16(2*w+1),oe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*w+1),oe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ce(u){var L;return u&&u.state?(u.total_in=u.total_out=0,u.data_type=b,(L=u.state).pending=0,L.pending_out=0,L.wrap<0&&(L.wrap=-L.wrap),L.status=L.wrap?x:K,u.adler=L.wrap===2?0:1,L.last_flush=h,a._tr_init(L),d):te(u,T)}function N(u){var L=Ce(u);return L===d&&function(C){C.window_size=2*C.w_size,oe(C.head),C.max_lazy_match=i[C.level].max_lazy,C.good_match=i[C.level].good_length,C.nice_match=i[C.level].nice_length,C.max_chain_length=i[C.level].max_chain,C.strstart=0,C.block_start=0,C.lookahead=0,C.insert=0,C.match_length=C.prev_length=I-1,C.match_available=0,C.ins_h=0}(u.state),L}function D(u,L,C,E,y,A){if(!u)return T;var M=1;if(L===f&&(L=6),E<0?(M=0,E=-E):15<E&&(M=2,E-=16),y<1||v<y||C!==g||E<8||15<E||L<0||9<L||A<0||S<A)return te(u,T);E===8&&(E=9);var z=new Oe;return(u.state=z).strm=u,z.wrap=M,z.gzhead=null,z.w_bits=E,z.w_size=1<<z.w_bits,z.w_mask=z.w_size-1,z.hash_bits=y+7,z.hash_size=1<<z.hash_bits,z.hash_mask=z.hash_size-1,z.hash_shift=~~((z.hash_bits+I-1)/I),z.window=new o.Buf8(2*z.w_size),z.head=new o.Buf16(z.hash_size),z.prev=new o.Buf16(z.w_size),z.lit_bufsize=1<<y+6,z.pending_buf_size=4*z.lit_bufsize,z.pending_buf=new o.Buf8(z.pending_buf_size),z.d_buf=1*z.lit_bufsize,z.l_buf=3*z.lit_bufsize,z.level=L,z.strategy=A,z.method=C,N(u)}i=[new pe(0,0,0,0,function(u,L){var C=65535;for(C>u.pending_buf_size-5&&(C=u.pending_buf_size-5);;){if(u.lookahead<=1){if(be(u),u.lookahead===0&&L===h)return _;if(u.lookahead===0)break}u.strstart+=u.lookahead,u.lookahead=0;var E=u.block_start+C;if((u.strstart===0||u.strstart>=E)&&(u.lookahead=u.strstart-E,u.strstart=E,j(u,!1),u.strm.avail_out===0)||u.strstart-u.block_start>=u.w_size-X&&(j(u,!1),u.strm.avail_out===0))return _}return u.insert=0,L===m?(j(u,!0),u.strm.avail_out===0?re:Z):(u.strstart>u.block_start&&(j(u,!1),u.strm.avail_out),_)}),new pe(4,4,8,4,Le),new pe(4,5,16,8,Le),new pe(4,6,32,32,Le),new pe(4,4,16,16,he),new pe(8,16,32,32,he),new pe(8,16,128,128,he),new pe(8,32,128,256,he),new pe(32,128,258,1024,he),new pe(32,258,258,4096,he)],r.deflateInit=function(u,L){return D(u,L,g,15,8,0)},r.deflateInit2=D,r.deflateReset=N,r.deflateResetKeep=Ce,r.deflateSetHeader=function(u,L){return u&&u.state?u.state.wrap!==2?T:(u.state.gzhead=L,d):T},r.deflate=function(u,L){var C,E,y,A;if(!u||!u.state||5<L||L<0)return u?te(u,T):T;if(E=u.state,!u.output||!u.input&&u.avail_in!==0||E.status===666&&L!==m)return te(u,u.avail_out===0?-5:T);if(E.strm=u,C=E.last_flush,E.last_flush=L,E.status===x)if(E.wrap===2)u.adler=0,ae(E,31),ae(E,139),ae(E,8),E.gzhead?(ae(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),ae(E,255&E.gzhead.time),ae(E,E.gzhead.time>>8&255),ae(E,E.gzhead.time>>16&255),ae(E,E.gzhead.time>>24&255),ae(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ae(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(ae(E,255&E.gzhead.extra.length),ae(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(u.adler=c(u.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(ae(E,0),ae(E,0),ae(E,0),ae(E,0),ae(E,0),ae(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ae(E,3),E.status=K);else{var M=g+(E.w_bits-8<<4)<<8;M|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(M|=32),M+=31-M%31,E.status=K,se(E,M),E.strstart!==0&&(se(E,u.adler>>>16),se(E,65535&u.adler)),u.adler=1}if(E.status===69)if(E.gzhead.extra){for(y=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>y&&(u.adler=c(u.adler,E.pending_buf,E.pending-y,y)),U(u),y=E.pending,E.pending!==E.pending_buf_size));)ae(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>y&&(u.adler=c(u.adler,E.pending_buf,E.pending-y,y)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){y=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>y&&(u.adler=c(u.adler,E.pending_buf,E.pending-y,y)),U(u),y=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,ae(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>y&&(u.adler=c(u.adler,E.pending_buf,E.pending-y,y)),A===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){y=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>y&&(u.adler=c(u.adler,E.pending_buf,E.pending-y,y)),U(u),y=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,ae(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>y&&(u.adler=c(u.adler,E.pending_buf,E.pending-y,y)),A===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&U(u),E.pending+2<=E.pending_buf_size&&(ae(E,255&u.adler),ae(E,u.adler>>8&255),u.adler=0,E.status=K)):E.status=K),E.pending!==0){if(U(u),u.avail_out===0)return E.last_flush=-1,d}else if(u.avail_in===0&&V(L)<=V(C)&&L!==m)return te(u,-5);if(E.status===666&&u.avail_in!==0)return te(u,-5);if(u.avail_in!==0||E.lookahead!==0||L!==h&&E.status!==666){var z=E.strategy===2?function(P,$){for(var W;;){if(P.lookahead===0&&(be(P),P.lookahead===0)){if($===h)return _;break}if(P.match_length=0,W=a._tr_tally(P,0,P.window[P.strstart]),P.lookahead--,P.strstart++,W&&(j(P,!1),P.strm.avail_out===0))return _}return P.insert=0,$===m?(j(P,!0),P.strm.avail_out===0?re:Z):P.last_lit&&(j(P,!1),P.strm.avail_out===0)?_:q}(E,L):E.strategy===3?function(P,$){for(var W,G,J,le,ie=P.window;;){if(P.lookahead<=H){if(be(P),P.lookahead<=H&&$===h)return _;if(P.lookahead===0)break}if(P.match_length=0,P.lookahead>=I&&0<P.strstart&&(G=ie[J=P.strstart-1])===ie[++J]&&G===ie[++J]&&G===ie[++J]){le=P.strstart+H;do;while(G===ie[++J]&&G===ie[++J]&&G===ie[++J]&&G===ie[++J]&&G===ie[++J]&&G===ie[++J]&&G===ie[++J]&&G===ie[++J]&&J<le);P.match_length=H-(le-J),P.match_length>P.lookahead&&(P.match_length=P.lookahead)}if(P.match_length>=I?(W=a._tr_tally(P,1,P.match_length-I),P.lookahead-=P.match_length,P.strstart+=P.match_length,P.match_length=0):(W=a._tr_tally(P,0,P.window[P.strstart]),P.lookahead--,P.strstart++),W&&(j(P,!1),P.strm.avail_out===0))return _}return P.insert=0,$===m?(j(P,!0),P.strm.avail_out===0?re:Z):P.last_lit&&(j(P,!1),P.strm.avail_out===0)?_:q}(E,L):i[E.level].func(E,L);if(z!==re&&z!==Z||(E.status=666),z===_||z===re)return u.avail_out===0&&(E.last_flush=-1),d;if(z===q&&(L===1?a._tr_align(E):L!==5&&(a._tr_stored_block(E,0,0,!1),L===3&&(oe(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),U(u),u.avail_out===0))return E.last_flush=-1,d}return L!==m?d:E.wrap<=0?1:(E.wrap===2?(ae(E,255&u.adler),ae(E,u.adler>>8&255),ae(E,u.adler>>16&255),ae(E,u.adler>>24&255),ae(E,255&u.total_in),ae(E,u.total_in>>8&255),ae(E,u.total_in>>16&255),ae(E,u.total_in>>24&255)):(se(E,u.adler>>>16),se(E,65535&u.adler)),U(u),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?d:1)},r.deflateEnd=function(u){var L;return u&&u.state?(L=u.state.status)!==x&&L!==69&&L!==73&&L!==91&&L!==103&&L!==K&&L!==666?te(u,T):(u.state=null,L===K?te(u,-3):d):T},r.deflateSetDictionary=function(u,L){var C,E,y,A,M,z,P,$,W=L.length;if(!u||!u.state||(A=(C=u.state).wrap)===2||A===1&&C.status!==x||C.lookahead)return T;for(A===1&&(u.adler=l(u.adler,L,W,0)),C.wrap=0,W>=C.w_size&&(A===0&&(oe(C.head),C.strstart=0,C.block_start=0,C.insert=0),$=new o.Buf8(C.w_size),o.arraySet($,L,W-C.w_size,C.w_size,0),L=$,W=C.w_size),M=u.avail_in,z=u.next_in,P=u.input,u.avail_in=W,u.next_in=0,u.input=L,be(C);C.lookahead>=I;){for(E=C.strstart,y=C.lookahead-(I-1);C.ins_h=(C.ins_h<<C.hash_shift^C.window[E+I-1])&C.hash_mask,C.prev[E&C.w_mask]=C.head[C.ins_h],C.head[C.ins_h]=E,E++,--y;);C.strstart=E,C.lookahead=I-1,be(C)}return C.strstart+=C.lookahead,C.block_start=C.strstart,C.insert=C.lookahead,C.lookahead=0,C.match_length=C.prev_length=I-1,C.match_available=0,u.next_in=z,u.input=P,u.avail_in=M,C.wrap=A,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,r){n.exports=function(i,o){var a,l,c,p,h,m,d,T,f,S,b,g,v,w,k,O,F,B,I,H,X,x,K,_,q;a=i.state,l=i.next_in,_=i.input,c=l+(i.avail_in-5),p=i.next_out,q=i.output,h=p-(o-i.avail_out),m=p+(i.avail_out-257),d=a.dmax,T=a.wsize,f=a.whave,S=a.wnext,b=a.window,g=a.hold,v=a.bits,w=a.lencode,k=a.distcode,O=(1<<a.lenbits)-1,F=(1<<a.distbits)-1;e:do{v<15&&(g+=_[l++]<<v,v+=8,g+=_[l++]<<v,v+=8),B=w[g&O];t:for(;;){if(g>>>=I=B>>>24,v-=I,(I=B>>>16&255)===0)q[p++]=65535&B;else{if(!(16&I)){if(!(64&I)){B=w[(65535&B)+(g&(1<<I)-1)];continue t}if(32&I){a.mode=12;break e}i.msg="invalid literal/length code",a.mode=30;break e}H=65535&B,(I&=15)&&(v<I&&(g+=_[l++]<<v,v+=8),H+=g&(1<<I)-1,g>>>=I,v-=I),v<15&&(g+=_[l++]<<v,v+=8,g+=_[l++]<<v,v+=8),B=k[g&F];n:for(;;){if(g>>>=I=B>>>24,v-=I,!(16&(I=B>>>16&255))){if(!(64&I)){B=k[(65535&B)+(g&(1<<I)-1)];continue n}i.msg="invalid distance code",a.mode=30;break e}if(X=65535&B,v<(I&=15)&&(g+=_[l++]<<v,(v+=8)<I&&(g+=_[l++]<<v,v+=8)),d<(X+=g&(1<<I)-1)){i.msg="invalid distance too far back",a.mode=30;break e}if(g>>>=I,v-=I,(I=p-h)<X){if(f<(I=X-I)&&a.sane){i.msg="invalid distance too far back",a.mode=30;break e}if(K=b,(x=0)===S){if(x+=T-I,I<H){for(H-=I;q[p++]=b[x++],--I;);x=p-X,K=q}}else if(S<I){if(x+=T+S-I,(I-=S)<H){for(H-=I;q[p++]=b[x++],--I;);if(x=0,S<H){for(H-=I=S;q[p++]=b[x++],--I;);x=p-X,K=q}}}else if(x+=S-I,I<H){for(H-=I;q[p++]=b[x++],--I;);x=p-X,K=q}for(;2<H;)q[p++]=K[x++],q[p++]=K[x++],q[p++]=K[x++],H-=3;H&&(q[p++]=K[x++],1<H&&(q[p++]=K[x++]))}else{for(x=p-X;q[p++]=q[x++],q[p++]=q[x++],q[p++]=q[x++],2<(H-=3););H&&(q[p++]=q[x++],1<H&&(q[p++]=q[x++]))}break}}break}}while(l<c&&p<m);l-=H=v>>3,g&=(1<<(v-=H<<3))-1,i.next_in=l,i.next_out=p,i.avail_in=l<c?c-l+5:5-(l-c),i.avail_out=p<m?m-p+257:257-(p-m),a.hold=g,a.bits=v}},{}],49:[function(t,n,r){var i=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),l=t("./inffast"),c=t("./inftrees"),p=1,h=2,m=0,d=-2,T=1,f=852,S=592;function b(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function v(x){var K;return x&&x.state?(K=x.state,x.total_in=x.total_out=K.total=0,x.msg="",K.wrap&&(x.adler=1&K.wrap),K.mode=T,K.last=0,K.havedict=0,K.dmax=32768,K.head=null,K.hold=0,K.bits=0,K.lencode=K.lendyn=new i.Buf32(f),K.distcode=K.distdyn=new i.Buf32(S),K.sane=1,K.back=-1,m):d}function w(x){var K;return x&&x.state?((K=x.state).wsize=0,K.whave=0,K.wnext=0,v(x)):d}function k(x,K){var _,q;return x&&x.state?(q=x.state,K<0?(_=0,K=-K):(_=1+(K>>4),K<48&&(K&=15)),K&&(K<8||15<K)?d:(q.window!==null&&q.wbits!==K&&(q.window=null),q.wrap=_,q.wbits=K,w(x))):d}function O(x,K){var _,q;return x?(q=new g,(x.state=q).window=null,(_=k(x,K))!==m&&(x.state=null),_):d}var F,B,I=!0;function H(x){if(I){var K;for(F=new i.Buf32(512),B=new i.Buf32(32),K=0;K<144;)x.lens[K++]=8;for(;K<256;)x.lens[K++]=9;for(;K<280;)x.lens[K++]=7;for(;K<288;)x.lens[K++]=8;for(c(p,x.lens,0,288,F,0,x.work,{bits:9}),K=0;K<32;)x.lens[K++]=5;c(h,x.lens,0,32,B,0,x.work,{bits:5}),I=!1}x.lencode=F,x.lenbits=9,x.distcode=B,x.distbits=5}function X(x,K,_,q){var re,Z=x.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new i.Buf8(Z.wsize)),q>=Z.wsize?(i.arraySet(Z.window,K,_-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(q<(re=Z.wsize-Z.wnext)&&(re=q),i.arraySet(Z.window,K,_-q,re,Z.wnext),(q-=re)?(i.arraySet(Z.window,K,_-q,q,0),Z.wnext=q,Z.whave=Z.wsize):(Z.wnext+=re,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=re))),0}r.inflateReset=w,r.inflateReset2=k,r.inflateResetKeep=v,r.inflateInit=function(x){return O(x,15)},r.inflateInit2=O,r.inflate=function(x,K){var _,q,re,Z,te,V,oe,U,j,ae,se,Q,be,Le,he,pe,Oe,Ce,N,D,u,L,C,E,y=0,A=new i.Buf8(4),M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return d;(_=x.state).mode===12&&(_.mode=13),te=x.next_out,re=x.output,oe=x.avail_out,Z=x.next_in,q=x.input,V=x.avail_in,U=_.hold,j=_.bits,ae=V,se=oe,L=m;e:for(;;)switch(_.mode){case T:if(_.wrap===0){_.mode=13;break}for(;j<16;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(2&_.wrap&&U===35615){A[_.check=0]=255&U,A[1]=U>>>8&255,_.check=a(_.check,A,2,0),j=U=0,_.mode=2;break}if(_.flags=0,_.head&&(_.head.done=!1),!(1&_.wrap)||(((255&U)<<8)+(U>>8))%31){x.msg="incorrect header check",_.mode=30;break}if((15&U)!=8){x.msg="unknown compression method",_.mode=30;break}if(j-=4,u=8+(15&(U>>>=4)),_.wbits===0)_.wbits=u;else if(u>_.wbits){x.msg="invalid window size",_.mode=30;break}_.dmax=1<<u,x.adler=_.check=1,_.mode=512&U?10:12,j=U=0;break;case 2:for(;j<16;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(_.flags=U,(255&_.flags)!=8){x.msg="unknown compression method",_.mode=30;break}if(57344&_.flags){x.msg="unknown header flags set",_.mode=30;break}_.head&&(_.head.text=U>>8&1),512&_.flags&&(A[0]=255&U,A[1]=U>>>8&255,_.check=a(_.check,A,2,0)),j=U=0,_.mode=3;case 3:for(;j<32;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}_.head&&(_.head.time=U),512&_.flags&&(A[0]=255&U,A[1]=U>>>8&255,A[2]=U>>>16&255,A[3]=U>>>24&255,_.check=a(_.check,A,4,0)),j=U=0,_.mode=4;case 4:for(;j<16;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}_.head&&(_.head.xflags=255&U,_.head.os=U>>8),512&_.flags&&(A[0]=255&U,A[1]=U>>>8&255,_.check=a(_.check,A,2,0)),j=U=0,_.mode=5;case 5:if(1024&_.flags){for(;j<16;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}_.length=U,_.head&&(_.head.extra_len=U),512&_.flags&&(A[0]=255&U,A[1]=U>>>8&255,_.check=a(_.check,A,2,0)),j=U=0}else _.head&&(_.head.extra=null);_.mode=6;case 6:if(1024&_.flags&&(V<(Q=_.length)&&(Q=V),Q&&(_.head&&(u=_.head.extra_len-_.length,_.head.extra||(_.head.extra=new Array(_.head.extra_len)),i.arraySet(_.head.extra,q,Z,Q,u)),512&_.flags&&(_.check=a(_.check,q,Q,Z)),V-=Q,Z+=Q,_.length-=Q),_.length))break e;_.length=0,_.mode=7;case 7:if(2048&_.flags){if(V===0)break e;for(Q=0;u=q[Z+Q++],_.head&&u&&_.length<65536&&(_.head.name+=String.fromCharCode(u)),u&&Q<V;);if(512&_.flags&&(_.check=a(_.check,q,Q,Z)),V-=Q,Z+=Q,u)break e}else _.head&&(_.head.name=null);_.length=0,_.mode=8;case 8:if(4096&_.flags){if(V===0)break e;for(Q=0;u=q[Z+Q++],_.head&&u&&_.length<65536&&(_.head.comment+=String.fromCharCode(u)),u&&Q<V;);if(512&_.flags&&(_.check=a(_.check,q,Q,Z)),V-=Q,Z+=Q,u)break e}else _.head&&(_.head.comment=null);_.mode=9;case 9:if(512&_.flags){for(;j<16;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(U!==(65535&_.check)){x.msg="header crc mismatch",_.mode=30;break}j=U=0}_.head&&(_.head.hcrc=_.flags>>9&1,_.head.done=!0),x.adler=_.check=0,_.mode=12;break;case 10:for(;j<32;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}x.adler=_.check=b(U),j=U=0,_.mode=11;case 11:if(_.havedict===0)return x.next_out=te,x.avail_out=oe,x.next_in=Z,x.avail_in=V,_.hold=U,_.bits=j,2;x.adler=_.check=1,_.mode=12;case 12:if(K===5||K===6)break e;case 13:if(_.last){U>>>=7&j,j-=7&j,_.mode=27;break}for(;j<3;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}switch(_.last=1&U,j-=1,3&(U>>>=1)){case 0:_.mode=14;break;case 1:if(H(_),_.mode=20,K!==6)break;U>>>=2,j-=2;break e;case 2:_.mode=17;break;case 3:x.msg="invalid block type",_.mode=30}U>>>=2,j-=2;break;case 14:for(U>>>=7&j,j-=7&j;j<32;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if((65535&U)!=(U>>>16^65535)){x.msg="invalid stored block lengths",_.mode=30;break}if(_.length=65535&U,j=U=0,_.mode=15,K===6)break e;case 15:_.mode=16;case 16:if(Q=_.length){if(V<Q&&(Q=V),oe<Q&&(Q=oe),Q===0)break e;i.arraySet(re,q,Z,Q,te),V-=Q,Z+=Q,oe-=Q,te+=Q,_.length-=Q;break}_.mode=12;break;case 17:for(;j<14;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(_.nlen=257+(31&U),U>>>=5,j-=5,_.ndist=1+(31&U),U>>>=5,j-=5,_.ncode=4+(15&U),U>>>=4,j-=4,286<_.nlen||30<_.ndist){x.msg="too many length or distance symbols",_.mode=30;break}_.have=0,_.mode=18;case 18:for(;_.have<_.ncode;){for(;j<3;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}_.lens[M[_.have++]]=7&U,U>>>=3,j-=3}for(;_.have<19;)_.lens[M[_.have++]]=0;if(_.lencode=_.lendyn,_.lenbits=7,C={bits:_.lenbits},L=c(0,_.lens,0,19,_.lencode,0,_.work,C),_.lenbits=C.bits,L){x.msg="invalid code lengths set",_.mode=30;break}_.have=0,_.mode=19;case 19:for(;_.have<_.nlen+_.ndist;){for(;pe=(y=_.lencode[U&(1<<_.lenbits)-1])>>>16&255,Oe=65535&y,!((he=y>>>24)<=j);){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(Oe<16)U>>>=he,j-=he,_.lens[_.have++]=Oe;else{if(Oe===16){for(E=he+2;j<E;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(U>>>=he,j-=he,_.have===0){x.msg="invalid bit length repeat",_.mode=30;break}u=_.lens[_.have-1],Q=3+(3&U),U>>>=2,j-=2}else if(Oe===17){for(E=he+3;j<E;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}j-=he,u=0,Q=3+(7&(U>>>=he)),U>>>=3,j-=3}else{for(E=he+7;j<E;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}j-=he,u=0,Q=11+(127&(U>>>=he)),U>>>=7,j-=7}if(_.have+Q>_.nlen+_.ndist){x.msg="invalid bit length repeat",_.mode=30;break}for(;Q--;)_.lens[_.have++]=u}}if(_.mode===30)break;if(_.lens[256]===0){x.msg="invalid code -- missing end-of-block",_.mode=30;break}if(_.lenbits=9,C={bits:_.lenbits},L=c(p,_.lens,0,_.nlen,_.lencode,0,_.work,C),_.lenbits=C.bits,L){x.msg="invalid literal/lengths set",_.mode=30;break}if(_.distbits=6,_.distcode=_.distdyn,C={bits:_.distbits},L=c(h,_.lens,_.nlen,_.ndist,_.distcode,0,_.work,C),_.distbits=C.bits,L){x.msg="invalid distances set",_.mode=30;break}if(_.mode=20,K===6)break e;case 20:_.mode=21;case 21:if(6<=V&&258<=oe){x.next_out=te,x.avail_out=oe,x.next_in=Z,x.avail_in=V,_.hold=U,_.bits=j,l(x,se),te=x.next_out,re=x.output,oe=x.avail_out,Z=x.next_in,q=x.input,V=x.avail_in,U=_.hold,j=_.bits,_.mode===12&&(_.back=-1);break}for(_.back=0;pe=(y=_.lencode[U&(1<<_.lenbits)-1])>>>16&255,Oe=65535&y,!((he=y>>>24)<=j);){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(pe&&!(240&pe)){for(Ce=he,N=pe,D=Oe;pe=(y=_.lencode[D+((U&(1<<Ce+N)-1)>>Ce)])>>>16&255,Oe=65535&y,!(Ce+(he=y>>>24)<=j);){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}U>>>=Ce,j-=Ce,_.back+=Ce}if(U>>>=he,j-=he,_.back+=he,_.length=Oe,pe===0){_.mode=26;break}if(32&pe){_.back=-1,_.mode=12;break}if(64&pe){x.msg="invalid literal/length code",_.mode=30;break}_.extra=15&pe,_.mode=22;case 22:if(_.extra){for(E=_.extra;j<E;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}_.length+=U&(1<<_.extra)-1,U>>>=_.extra,j-=_.extra,_.back+=_.extra}_.was=_.length,_.mode=23;case 23:for(;pe=(y=_.distcode[U&(1<<_.distbits)-1])>>>16&255,Oe=65535&y,!((he=y>>>24)<=j);){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(!(240&pe)){for(Ce=he,N=pe,D=Oe;pe=(y=_.distcode[D+((U&(1<<Ce+N)-1)>>Ce)])>>>16&255,Oe=65535&y,!(Ce+(he=y>>>24)<=j);){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}U>>>=Ce,j-=Ce,_.back+=Ce}if(U>>>=he,j-=he,_.back+=he,64&pe){x.msg="invalid distance code",_.mode=30;break}_.offset=Oe,_.extra=15&pe,_.mode=24;case 24:if(_.extra){for(E=_.extra;j<E;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}_.offset+=U&(1<<_.extra)-1,U>>>=_.extra,j-=_.extra,_.back+=_.extra}if(_.offset>_.dmax){x.msg="invalid distance too far back",_.mode=30;break}_.mode=25;case 25:if(oe===0)break e;if(Q=se-oe,_.offset>Q){if((Q=_.offset-Q)>_.whave&&_.sane){x.msg="invalid distance too far back",_.mode=30;break}be=Q>_.wnext?(Q-=_.wnext,_.wsize-Q):_.wnext-Q,Q>_.length&&(Q=_.length),Le=_.window}else Le=re,be=te-_.offset,Q=_.length;for(oe<Q&&(Q=oe),oe-=Q,_.length-=Q;re[te++]=Le[be++],--Q;);_.length===0&&(_.mode=21);break;case 26:if(oe===0)break e;re[te++]=_.length,oe--,_.mode=21;break;case 27:if(_.wrap){for(;j<32;){if(V===0)break e;V--,U|=q[Z++]<<j,j+=8}if(se-=oe,x.total_out+=se,_.total+=se,se&&(x.adler=_.check=_.flags?a(_.check,re,se,te-se):o(_.check,re,se,te-se)),se=oe,(_.flags?U:b(U))!==_.check){x.msg="incorrect data check",_.mode=30;break}j=U=0}_.mode=28;case 28:if(_.wrap&&_.flags){for(;j<32;){if(V===0)break e;V--,U+=q[Z++]<<j,j+=8}if(U!==(4294967295&_.total)){x.msg="incorrect length check",_.mode=30;break}j=U=0}_.mode=29;case 29:L=1;break e;case 30:L=-3;break e;case 31:return-4;case 32:default:return d}return x.next_out=te,x.avail_out=oe,x.next_in=Z,x.avail_in=V,_.hold=U,_.bits=j,(_.wsize||se!==x.avail_out&&_.mode<30&&(_.mode<27||K!==4))&&X(x,x.output,x.next_out,se-x.avail_out)?(_.mode=31,-4):(ae-=x.avail_in,se-=x.avail_out,x.total_in+=ae,x.total_out+=se,_.total+=se,_.wrap&&se&&(x.adler=_.check=_.flags?a(_.check,re,se,x.next_out-se):o(_.check,re,se,x.next_out-se)),x.data_type=_.bits+(_.last?64:0)+(_.mode===12?128:0)+(_.mode===20||_.mode===15?256:0),(ae==0&&se===0||K===4)&&L===m&&(L=-5),L)},r.inflateEnd=function(x){if(!x||!x.state)return d;var K=x.state;return K.window&&(K.window=null),x.state=null,m},r.inflateGetHeader=function(x,K){var _;return x&&x.state&&2&(_=x.state).wrap?((_.head=K).done=!1,m):d},r.inflateSetDictionary=function(x,K){var _,q=K.length;return x&&x.state?(_=x.state).wrap!==0&&_.mode!==11?d:_.mode===11&&o(1,K,q,0)!==_.check?-3:X(x,K,q,q)?(_.mode=31,-4):(_.havedict=1,m):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,r){var i=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(p,h,m,d,T,f,S,b){var g,v,w,k,O,F,B,I,H,X=b.bits,x=0,K=0,_=0,q=0,re=0,Z=0,te=0,V=0,oe=0,U=0,j=null,ae=0,se=new i.Buf16(16),Q=new i.Buf16(16),be=null,Le=0;for(x=0;x<=15;x++)se[x]=0;for(K=0;K<d;K++)se[h[m+K]]++;for(re=X,q=15;1<=q&&se[q]===0;q--);if(q<re&&(re=q),q===0)return T[f++]=20971520,T[f++]=20971520,b.bits=1,0;for(_=1;_<q&&se[_]===0;_++);for(re<_&&(re=_),x=V=1;x<=15;x++)if(V<<=1,(V-=se[x])<0)return-1;if(0<V&&(p===0||q!==1))return-1;for(Q[1]=0,x=1;x<15;x++)Q[x+1]=Q[x]+se[x];for(K=0;K<d;K++)h[m+K]!==0&&(S[Q[h[m+K]]++]=K);if(F=p===0?(j=be=S,19):p===1?(j=o,ae-=257,be=a,Le-=257,256):(j=l,be=c,-1),x=_,O=f,te=K=U=0,w=-1,k=(oe=1<<(Z=re))-1,p===1&&852<oe||p===2&&592<oe)return 1;for(;;){for(B=x-te,H=S[K]<F?(I=0,S[K]):S[K]>F?(I=be[Le+S[K]],j[ae+S[K]]):(I=96,0),g=1<<x-te,_=v=1<<Z;T[O+(U>>te)+(v-=g)]=B<<24|I<<16|H|0,v!==0;);for(g=1<<x-1;U&g;)g>>=1;if(g!==0?(U&=g-1,U+=g):U=0,K++,--se[x]==0){if(x===q)break;x=h[m+S[K]]}if(re<x&&(U&k)!==w){for(te===0&&(te=re),O+=_,V=1<<(Z=x-te);Z+te<q&&!((V-=se[Z+te])<=0);)Z++,V<<=1;if(oe+=1<<Z,p===1&&852<oe||p===2&&592<oe)return 1;T[w=U&k]=re<<24|Z<<16|O-f|0}}return U!==0&&(T[O+U]=x-te<<24|64<<16|0),b.bits=re,0}},{"../utils/common":41}],51:[function(t,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,r){var i=t("../utils/common"),o=0,a=1;function l(y){for(var A=y.length;0<=--A;)y[A]=0}var c=0,p=29,h=256,m=h+1+p,d=30,T=19,f=2*m+1,S=15,b=16,g=7,v=256,w=16,k=17,O=18,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],B=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(m+2));l(X);var x=new Array(2*d);l(x);var K=new Array(512);l(K);var _=new Array(256);l(_);var q=new Array(p);l(q);var re,Z,te,V=new Array(d);function oe(y,A,M,z,P){this.static_tree=y,this.extra_bits=A,this.extra_base=M,this.elems=z,this.max_length=P,this.has_stree=y&&y.length}function U(y,A){this.dyn_tree=y,this.max_code=0,this.stat_desc=A}function j(y){return y<256?K[y]:K[256+(y>>>7)]}function ae(y,A){y.pending_buf[y.pending++]=255&A,y.pending_buf[y.pending++]=A>>>8&255}function se(y,A,M){y.bi_valid>b-M?(y.bi_buf|=A<<y.bi_valid&65535,ae(y,y.bi_buf),y.bi_buf=A>>b-y.bi_valid,y.bi_valid+=M-b):(y.bi_buf|=A<<y.bi_valid&65535,y.bi_valid+=M)}function Q(y,A,M){se(y,M[2*A],M[2*A+1])}function be(y,A){for(var M=0;M|=1&y,y>>>=1,M<<=1,0<--A;);return M>>>1}function Le(y,A,M){var z,P,$=new Array(S+1),W=0;for(z=1;z<=S;z++)$[z]=W=W+M[z-1]<<1;for(P=0;P<=A;P++){var G=y[2*P+1];G!==0&&(y[2*P]=be($[G]++,G))}}function he(y){var A;for(A=0;A<m;A++)y.dyn_ltree[2*A]=0;for(A=0;A<d;A++)y.dyn_dtree[2*A]=0;for(A=0;A<T;A++)y.bl_tree[2*A]=0;y.dyn_ltree[2*v]=1,y.opt_len=y.static_len=0,y.last_lit=y.matches=0}function pe(y){8<y.bi_valid?ae(y,y.bi_buf):0<y.bi_valid&&(y.pending_buf[y.pending++]=y.bi_buf),y.bi_buf=0,y.bi_valid=0}function Oe(y,A,M,z){var P=2*A,$=2*M;return y[P]<y[$]||y[P]===y[$]&&z[A]<=z[M]}function Ce(y,A,M){for(var z=y.heap[M],P=M<<1;P<=y.heap_len&&(P<y.heap_len&&Oe(A,y.heap[P+1],y.heap[P],y.depth)&&P++,!Oe(A,z,y.heap[P],y.depth));)y.heap[M]=y.heap[P],M=P,P<<=1;y.heap[M]=z}function N(y,A,M){var z,P,$,W,G=0;if(y.last_lit!==0)for(;z=y.pending_buf[y.d_buf+2*G]<<8|y.pending_buf[y.d_buf+2*G+1],P=y.pending_buf[y.l_buf+G],G++,z===0?Q(y,P,A):(Q(y,($=_[P])+h+1,A),(W=F[$])!==0&&se(y,P-=q[$],W),Q(y,$=j(--z),M),(W=B[$])!==0&&se(y,z-=V[$],W)),G<y.last_lit;);Q(y,v,A)}function D(y,A){var M,z,P,$=A.dyn_tree,W=A.stat_desc.static_tree,G=A.stat_desc.has_stree,J=A.stat_desc.elems,le=-1;for(y.heap_len=0,y.heap_max=f,M=0;M<J;M++)$[2*M]!==0?(y.heap[++y.heap_len]=le=M,y.depth[M]=0):$[2*M+1]=0;for(;y.heap_len<2;)$[2*(P=y.heap[++y.heap_len]=le<2?++le:0)]=1,y.depth[P]=0,y.opt_len--,G&&(y.static_len-=W[2*P+1]);for(A.max_code=le,M=y.heap_len>>1;1<=M;M--)Ce(y,$,M);for(P=J;M=y.heap[1],y.heap[1]=y.heap[y.heap_len--],Ce(y,$,1),z=y.heap[1],y.heap[--y.heap_max]=M,y.heap[--y.heap_max]=z,$[2*P]=$[2*M]+$[2*z],y.depth[P]=(y.depth[M]>=y.depth[z]?y.depth[M]:y.depth[z])+1,$[2*M+1]=$[2*z+1]=P,y.heap[1]=P++,Ce(y,$,1),2<=y.heap_len;);y.heap[--y.heap_max]=y.heap[1],function(ie,ve){var We,qe,kt,Re,Ht,Ze,je=ve.dyn_tree,_n=ve.max_code,Go=ve.stat_desc.static_tree,Wo=ve.stat_desc.has_stree,qo=ve.stat_desc.extra_bits,Lr=ve.stat_desc.extra_base,bn=ve.stat_desc.max_length,jn=0;for(Re=0;Re<=S;Re++)ie.bl_count[Re]=0;for(je[2*ie.heap[ie.heap_max]+1]=0,We=ie.heap_max+1;We<f;We++)bn<(Re=je[2*je[2*(qe=ie.heap[We])+1]+1]+1)&&(Re=bn,jn++),je[2*qe+1]=Re,_n<qe||(ie.bl_count[Re]++,Ht=0,Lr<=qe&&(Ht=qo[qe-Lr]),Ze=je[2*qe],ie.opt_len+=Ze*(Re+Ht),Wo&&(ie.static_len+=Ze*(Go[2*qe+1]+Ht)));if(jn!==0){do{for(Re=bn-1;ie.bl_count[Re]===0;)Re--;ie.bl_count[Re]--,ie.bl_count[Re+1]+=2,ie.bl_count[bn]--,jn-=2}while(0<jn);for(Re=bn;Re!==0;Re--)for(qe=ie.bl_count[Re];qe!==0;)_n<(kt=ie.heap[--We])||(je[2*kt+1]!==Re&&(ie.opt_len+=(Re-je[2*kt+1])*je[2*kt],je[2*kt+1]=Re),qe--)}}(y,A),Le($,le,y.bl_count)}function u(y,A,M){var z,P,$=-1,W=A[1],G=0,J=7,le=4;for(W===0&&(J=138,le=3),A[2*(M+1)+1]=65535,z=0;z<=M;z++)P=W,W=A[2*(z+1)+1],++G<J&&P===W||(G<le?y.bl_tree[2*P]+=G:P!==0?(P!==$&&y.bl_tree[2*P]++,y.bl_tree[2*w]++):G<=10?y.bl_tree[2*k]++:y.bl_tree[2*O]++,$=P,le=(G=0)===W?(J=138,3):P===W?(J=6,3):(J=7,4))}function L(y,A,M){var z,P,$=-1,W=A[1],G=0,J=7,le=4;for(W===0&&(J=138,le=3),z=0;z<=M;z++)if(P=W,W=A[2*(z+1)+1],!(++G<J&&P===W)){if(G<le)for(;Q(y,P,y.bl_tree),--G!=0;);else P!==0?(P!==$&&(Q(y,P,y.bl_tree),G--),Q(y,w,y.bl_tree),se(y,G-3,2)):G<=10?(Q(y,k,y.bl_tree),se(y,G-3,3)):(Q(y,O,y.bl_tree),se(y,G-11,7));$=P,le=(G=0)===W?(J=138,3):P===W?(J=6,3):(J=7,4)}}l(V);var C=!1;function E(y,A,M,z){se(y,(c<<1)+(z?1:0),3),function(P,$,W,G){pe(P),G&&(ae(P,W),ae(P,~W)),i.arraySet(P.pending_buf,P.window,$,W,P.pending),P.pending+=W}(y,A,M,!0)}r._tr_init=function(y){C||(function(){var A,M,z,P,$,W=new Array(S+1);for(P=z=0;P<p-1;P++)for(q[P]=z,A=0;A<1<<F[P];A++)_[z++]=P;for(_[z-1]=P,P=$=0;P<16;P++)for(V[P]=$,A=0;A<1<<B[P];A++)K[$++]=P;for($>>=7;P<d;P++)for(V[P]=$<<7,A=0;A<1<<B[P]-7;A++)K[256+$++]=P;for(M=0;M<=S;M++)W[M]=0;for(A=0;A<=143;)X[2*A+1]=8,A++,W[8]++;for(;A<=255;)X[2*A+1]=9,A++,W[9]++;for(;A<=279;)X[2*A+1]=7,A++,W[7]++;for(;A<=287;)X[2*A+1]=8,A++,W[8]++;for(Le(X,m+1,W),A=0;A<d;A++)x[2*A+1]=5,x[2*A]=be(A,5);re=new oe(X,F,h+1,m,S),Z=new oe(x,B,0,d,S),te=new oe(new Array(0),I,0,T,g)}(),C=!0),y.l_desc=new U(y.dyn_ltree,re),y.d_desc=new U(y.dyn_dtree,Z),y.bl_desc=new U(y.bl_tree,te),y.bi_buf=0,y.bi_valid=0,he(y)},r._tr_stored_block=E,r._tr_flush_block=function(y,A,M,z){var P,$,W=0;0<y.level?(y.strm.data_type===2&&(y.strm.data_type=function(G){var J,le=4093624447;for(J=0;J<=31;J++,le>>>=1)if(1&le&&G.dyn_ltree[2*J]!==0)return o;if(G.dyn_ltree[18]!==0||G.dyn_ltree[20]!==0||G.dyn_ltree[26]!==0)return a;for(J=32;J<h;J++)if(G.dyn_ltree[2*J]!==0)return a;return o}(y)),D(y,y.l_desc),D(y,y.d_desc),W=function(G){var J;for(u(G,G.dyn_ltree,G.l_desc.max_code),u(G,G.dyn_dtree,G.d_desc.max_code),D(G,G.bl_desc),J=T-1;3<=J&&G.bl_tree[2*H[J]+1]===0;J--);return G.opt_len+=3*(J+1)+5+5+4,J}(y),P=y.opt_len+3+7>>>3,($=y.static_len+3+7>>>3)<=P&&(P=$)):P=$=M+5,M+4<=P&&A!==-1?E(y,A,M,z):y.strategy===4||$===P?(se(y,2+(z?1:0),3),N(y,X,x)):(se(y,4+(z?1:0),3),function(G,J,le,ie){var ve;for(se(G,J-257,5),se(G,le-1,5),se(G,ie-4,4),ve=0;ve<ie;ve++)se(G,G.bl_tree[2*H[ve]+1],3);L(G,G.dyn_ltree,J-1),L(G,G.dyn_dtree,le-1)}(y,y.l_desc.max_code+1,y.d_desc.max_code+1,W+1),N(y,y.dyn_ltree,y.dyn_dtree)),he(y),z&&pe(y)},r._tr_tally=function(y,A,M){return y.pending_buf[y.d_buf+2*y.last_lit]=A>>>8&255,y.pending_buf[y.d_buf+2*y.last_lit+1]=255&A,y.pending_buf[y.l_buf+y.last_lit]=255&M,y.last_lit++,A===0?y.dyn_ltree[2*M]++:(y.matches++,A--,y.dyn_ltree[2*(_[M]+h+1)]++,y.dyn_dtree[2*j(A)]++),y.last_lit===y.lit_bufsize-1},r._tr_align=function(y){se(y,2,3),Q(y,v,X),function(A){A.bi_valid===16?(ae(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):8<=A.bi_valid&&(A.pending_buf[A.pending++]=255&A.bi_buf,A.bi_buf>>=8,A.bi_valid-=8)}(y)}},{"../utils/common":41}],53:[function(t,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,r){(function(i){(function(o,a){if(!o.setImmediate){var l,c,p,h,m=1,d={},T=!1,f=o.document,S=Object.getPrototypeOf&&Object.getPrototypeOf(o);S=S&&S.setTimeout?S:o,l={}.toString.call(o.process)==="[object process]"?function(w){process.nextTick(function(){g(w)})}:function(){if(o.postMessage&&!o.importScripts){var w=!0,k=o.onmessage;return o.onmessage=function(){w=!1},o.postMessage("","*"),o.onmessage=k,w}}()?(h="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",v,!1):o.attachEvent("onmessage",v),function(w){o.postMessage(h+w,"*")}):o.MessageChannel?((p=new MessageChannel).port1.onmessage=function(w){g(w.data)},function(w){p.port2.postMessage(w)}):f&&"onreadystatechange"in f.createElement("script")?(c=f.documentElement,function(w){var k=f.createElement("script");k.onreadystatechange=function(){g(w),k.onreadystatechange=null,c.removeChild(k),k=null},c.appendChild(k)}):function(w){setTimeout(g,0,w)},S.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var k=new Array(arguments.length-1),O=0;O<k.length;O++)k[O]=arguments[O+1];var F={callback:w,args:k};return d[m]=F,l(m),m++},S.clearImmediate=b}function b(w){delete d[w]}function g(w){if(T)setTimeout(g,0,w);else{var k=d[w];if(k){T=!0;try{(function(O){var F=O.callback,B=O.args;switch(B.length){case 0:F();break;case 1:F(B[0]);break;case 2:F(B[0],B[1]);break;case 3:F(B[0],B[1],B[2]);break;default:F.apply(a,B)}})(k)}finally{b(w),T=!1}}}}function v(w){w.source===o&&typeof w.data=="string"&&w.data.indexOf(h)===0&&g(+w.data.slice(h.length))}})(typeof self>"u"?i===void 0?this:i:self)}).call(this,typeof rn<"u"?rn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(zo);var Mu=zo.exports;const Bu=kr(Mu),ju=Et({name:"BarraSuperior",components:{},setup(){const s=en(),e=_t(()=>s.layout);return{store:s,layout:e}},methods:{gerarCodigo(){const s=this.store.selecionado;if(s==-1)return;const e=this.store.listaProjetos[s],t=e.optionsGals;let n="";switch(t.input=Y.INPUT_STRING,t.language){case Y.LANG_CPP:n="C++";break;case Y.LANG_JAVA:n="Java";break;case Y.LANG_DELPHI:n="Delphi";break}alert(t.toString());let r=null;try{r=zu(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,t)}catch(i){console.log(i)}if(r!=null)try{const i=new Bu;for(const[o,a]of r.entries())i.file(o,a);i.generateAsync({type:"blob"}).then(o=>{const a=document.createElement("a"),l=URL.createObjectURL(o);a.href=l,a.download=e.fileName.slice(0,-5)+" - "+n+".zip",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(l)}),alert("Arquivos Gerados!")}catch(i){console.error(i),alert("Ocorreu um erro!")}},mudaLayout(s){switch(s){case 0:this.layout.token=33.33333,this.layout.simulacao=33.33333,this.layout.saidaSimulacao=33.33333,this.layout.gramatica=0;break;case 1:this.layout.token=0,this.layout.simulacao=50,this.layout.saidaSimulacao=50,this.layout.gramatica=50;break;case 2:this.layout.token=33.33333,this.layout.simulacao=33.33333,this.layout.saidaSimulacao=33.33333,this.layout.gramatica=50;break;case 3:this.layout.token=0,this.layout.simulacao=50,this.layout.saidaSimulacao=50,this.layout.gramatica=0;break}}}});const $t=(s,e)=>{const t=s.__vccOpts||s;for(const[n,r]of e)t[n]=r;return t},Mo=s=>(vs("data-v-3e2bdabb"),s=s(),ys(),s),Uu={class:"barra__superior"},$u=Mo(()=>ne("span",{class:"logo"},"WEB",-1)),Hu={class:"dropdown"},Ku=Mo(()=>ne("button",{class:"dropbtn"},"Layout",-1)),Gu={class:"dropdown-content"};function Wu(s,e,t,n,r,i){return Se(),ke("div",Uu,[$u,ne("button",{class:"botao__gerar__codigo",onClick:e[0]||(e[0]=(...o)=>s.gerarCodigo&&s.gerarCodigo(...o))},"Gerar Código"),ne("div",Hu,[Ku,ne("div",Gu,[ne("a",{onClick:e[1]||(e[1]=o=>s.mudaLayout(0))},"Léxico"),ne("a",{onClick:e[2]||(e[2]=o=>s.mudaLayout(1))},"Sintático"),ne("a",{onClick:e[3]||(e[3]=o=>s.mudaLayout(2))},"Léxico e Sintático"),ne("a",{onClick:e[4]||(e[4]=o=>s.mudaLayout(3))},"Simulador")])])])}const qu=$t(ju,[["render",Wu],["__scopeId","data-v-3e2bdabb"]]);function Rn(){return Rn=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s},Rn.apply(this,arguments)}var Zu=13,Vu=9,Yu=8,Xu=89,Vn=90,Ju=77,_i=57,bi=219,Ti=222,Si=192,Qu=27,vi=100,eh=3e3,th=typeof window<"u"&&navigator&&/Win/i.test(navigator.platform),Ms=typeof window<"u"&&navigator&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),nh=Et({props:{lineNumbers:{type:Boolean,default:!1},autoStyleLineNumbers:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},modelValue:{type:String,default:""},highlight:{type:Function,required:!0},tabSize:{type:Number,default:2},insertSpaces:{type:Boolean,default:!0},ignoreTabKey:{type:Boolean,default:!1},placeholder:{type:String,default:""}},data:function(){return{capture:!0,history:{stack:[],offset:-1},lineNumbersHeight:"20px",codeData:""}},watch:{modelValue:{immediate:!0,handler:function(e){e?this.codeData=e:this.codeData=""}},content:{immediate:!0,handler:function(){var e=this;this.lineNumbers&&this.$nextTick(function(){e.setLineNumbersHeight()})}},lineNumbers:function(){var e=this;this.$nextTick(function(){e.styleLineNumbers(),e.setLineNumbersHeight()})}},computed:{isEmpty:function(){return this.codeData.length===0},content:function(){var e=this.highlight(this.codeData)+"<br />";return e},lineNumbersCount:function(){var e=this.codeData.split(/\r\n|\n/).length;return e}},mounted:function(){this._recordCurrentState(),this.styleLineNumbers()},methods:{setLineNumbersHeight:function(){this.lineNumbersHeight=getComputedStyle(this.$refs.pre).height},styleLineNumbers:function(){if(!(!this.lineNumbers||!this.autoStyleLineNumbers)){var e=this.$refs.pre,t=this.$el.querySelector(".prism-editor__line-numbers"),n=window.getComputedStyle(e);this.$nextTick(function(){var r="border-top-left-radius",i="border-bottom-left-radius";if(t){t.style[r]=n[r],t.style[i]=n[i],e.style[r]="0",e.style[i]="0";var o=["background-color","margin-top","padding-top","font-family","font-size","line-height"];o.forEach(function(a){t.style[a]=n[a]}),t.style["margin-bottom"]="-"+n["padding-top"]}})}},_recordCurrentState:function(){var e=this.$refs.textarea;if(e){var t=e.value,n=e.selectionStart,r=e.selectionEnd;this._recordChange({value:t,selectionStart:n,selectionEnd:r})}},_getLines:function(e,t){return e.substring(0,t).split(`
`)},_applyEdits:function(e){var t=this.$refs.textarea,n=this.history.stack[this.history.offset];n&&t&&(this.history.stack[this.history.offset]=Rn({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),this._recordChange(e),this._updateInput(e)},_recordChange:function(e,t){t===void 0&&(t=!1);var n=this.history,r=n.stack,i=n.offset;if(r.length&&i>-1){this.history.stack=r.slice(0,i+1);var o=this.history.stack.length;if(o>vi){var a=o-vi;this.history.stack=r.slice(a,o),this.history.offset=Math.max(this.history.offset-a,0)}}var l=Date.now();if(t){var c=this.history.stack[this.history.offset];if(c&&l-c.timestamp<eh){var p,h,m=/[^a-z0-9]([a-z0-9]+)$/i,d=(p=this._getLines(c.value,c.selectionStart).pop())===null||p===void 0?void 0:p.match(m),T=(h=this._getLines(e.value,e.selectionStart).pop())===null||h===void 0?void 0:h.match(m);if(d&&T&&T[1].startsWith(d[1])){this.history.stack[this.history.offset]=Rn({},e,{timestamp:l});return}}}this.history.stack.push(Rn({},e,{timestamp:l})),this.history.offset++},_updateInput:function(e){var t=this.$refs.textarea;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,this.$emit("update:modelValue",e.value))},handleChange:function(e){var t=e.target,n=t.value,r=t.selectionStart,i=t.selectionEnd;this._recordChange({value:n,selectionStart:r,selectionEnd:i},!0),this.$emit("update:modelValue",n)},_undoEdit:function(){var e=this.history,t=e.stack,n=e.offset,r=t[n-1];r&&(this._updateInput(r),this.history.offset=Math.max(n-1,0))},_redoEdit:function(){var e=this.history,t=e.stack,n=e.offset,r=t[n+1];r&&(this._updateInput(r),this.history.offset=Math.min(n+1,t.length-1))},handleKeyDown:function(e){var t=this.tabSize,n=this.insertSpaces,r=this.ignoreTabKey;if(this.$emit("keydown",e),!e.defaultPrevented){e.keyCode===Qu&&(e.target.blur(),this.$emit("blur",e));var i=e.target,o=i.value,a=i.selectionStart,l=i.selectionEnd,c=(n?" ":"	").repeat(t);if(e.keyCode===Vu&&!r&&this.capture)if(e.preventDefault(),e.shiftKey){var p=this._getLines(o,a),h=p.length-1,m=this._getLines(o,l).length-1,d=o.split(`
`).map(function(x,K){return K>=h&&K<=m&&x.startsWith(c)?x.substring(c.length):x}).join(`
`);if(o!==d){var T=p[h];this._applyEdits({value:d,selectionStart:T.startsWith(c)?a-c.length:a,selectionEnd:l-(o.length-d.length)})}}else if(a!==l){var f=this._getLines(o,a),S=f.length-1,b=this._getLines(o,l).length-1,g=f[S];this._applyEdits({value:o.split(`
`).map(function(x,K){return K>=S&&K<=b?c+x:x}).join(`
`),selectionStart:/\S/.test(g)?a+c.length:a,selectionEnd:l+c.length*(b-S+1)})}else{var v=a+c.length;this._applyEdits({value:o.substring(0,a)+c+o.substring(l),selectionStart:v,selectionEnd:v})}else if(e.keyCode===Yu){var w=a!==l,k=o.substring(0,a);if(k.endsWith(c)&&!w){e.preventDefault();var O=a-c.length;this._applyEdits({value:o.substring(0,a-c.length)+o.substring(l),selectionStart:O,selectionEnd:O})}}else if(e.keyCode===Zu){if(a===l){var F=this._getLines(o,a).pop(),B=F==null?void 0:F.match(/^\s+/);if(B&&B[0]){e.preventDefault();var I=`
`+B[0],H=a+I.length;this._applyEdits({value:o.substring(0,a)+I+o.substring(l),selectionStart:H,selectionEnd:H})}}}else if(e.keyCode===_i||e.keyCode===bi||e.keyCode===Ti||e.keyCode===Si){var X;e.keyCode===_i&&e.shiftKey?X=["(",")"]:e.keyCode===bi?e.shiftKey?X=["{","}"]:X=["[","]"]:e.keyCode===Ti?e.shiftKey?X=['"','"']:X=["'","'"]:e.keyCode===Si&&!e.shiftKey&&(X=["`","`"]),a!==l&&X&&(e.preventDefault(),this._applyEdits({value:o.substring(0,a)+X[0]+o.substring(a,l)+X[1]+o.substring(l),selectionStart:a,selectionEnd:l+2}))}else(Ms?e.metaKey&&e.keyCode===Vn:e.ctrlKey&&e.keyCode===Vn)&&!e.shiftKey&&!e.altKey?(e.preventDefault(),this._undoEdit()):(Ms?e.metaKey&&e.keyCode===Vn&&e.shiftKey:th?e.ctrlKey&&e.keyCode===Xu:e.ctrlKey&&e.keyCode===Vn&&e.shiftKey)&&!e.altKey?(e.preventDefault(),this._redoEdit()):e.keyCode===Ju&&e.ctrlKey&&(!Ms||e.shiftKey)&&(e.preventDefault(),this.capture=!this.capture)}}},render:function(){var e=this,t=Rt("div",{class:"prism-editor__line-width-calc",style:"height: 0px; visibility: hidden; pointer-events: none;"},"999"),n=Rt("div",{class:"prism-editor__line-numbers",style:{"min-height":this.lineNumbersHeight},"aria-hidden":"true"},[t,Array.from(Array(this.lineNumbersCount).keys()).map(function(a,l){return Rt("div",{class:"prism-editor__line-number token comment"},""+ ++l)})]),r=Rt("textarea",{ref:"textarea",onInput:this.handleChange,onKeydown:this.handleKeyDown,onClick:function(l){e.$emit("click",l)},onKeyup:function(l){e.$emit("keyup",l)},onFocus:function(l){e.$emit("focus",l)},onBlur:function(l){e.$emit("blur",l)},class:{"prism-editor__textarea":!0,"prism-editor__textarea--empty":this.isEmpty},spellCheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off","data-gramm":"false",placeholder:this.placeholder,"data-testid":"textarea",readonly:this.readonly,value:this.codeData}),i=Rt("pre",{ref:"pre",class:"prism-editor__editor","data-testid":"preview",innerHTML:this.content}),o=Rt("div",{class:"prism-editor__container"},[r,i]);return Rt("div",{class:"prism-editor-wrapper"},[this.lineNumbers&&n,o])}});var Bo={exports:{}};(function(s){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function g(v){return v instanceof l?new l(v.type,g(v.content),v.alias):Array.isArray(v)?v.map(g):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++i}),g.__id},clone:function g(v,w){w=w||{};var k,O;switch(a.util.type(v)){case"Object":if(O=a.util.objId(v),w[O])return w[O];k={},w[O]=k;for(var F in v)v.hasOwnProperty(F)&&(k[F]=g(v[F],w));return k;case"Array":return O=a.util.objId(v),w[O]?w[O]:(k=[],w[O]=k,v.forEach(function(B,I){k[I]=g(B,w)}),k);default:return v}},getLanguage:function(g){for(;g;){var v=r.exec(g.className);if(v)return v[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,v){g.className=g.className.replace(RegExp(r,"gi"),""),g.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(k){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(g){var v=document.getElementsByTagName("script");for(var w in v)if(v[w].src==g)return v[w]}return null}},isActive:function(g,v,w){for(var k="no-"+v;g;){var O=g.classList;if(O.contains(v))return!0;if(O.contains(k))return!1;g=g.parentElement}return!!w}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(g,v){var w=a.util.clone(a.languages[g]);for(var k in v)w[k]=v[k];return w},insertBefore:function(g,v,w,k){k=k||a.languages;var O=k[g],F={};for(var B in O)if(O.hasOwnProperty(B)){if(B==v)for(var I in w)w.hasOwnProperty(I)&&(F[I]=w[I]);w.hasOwnProperty(B)||(F[B]=O[B])}var H=k[g];return k[g]=F,a.languages.DFS(a.languages,function(X,x){x===H&&X!=g&&(this[X]=F)}),F},DFS:function g(v,w,k,O){O=O||{};var F=a.util.objId;for(var B in v)if(v.hasOwnProperty(B)){w.call(v,B,v[B],k||B);var I=v[B],H=a.util.type(I);H==="Object"&&!O[F(I)]?(O[F(I)]=!0,g(I,w,null,O)):H==="Array"&&!O[F(I)]&&(O[F(I)]=!0,g(I,w,B,O))}}},plugins:{},highlightAll:function(g,v){a.highlightAllUnder(document,g,v)},highlightAllUnder:function(g,v,w){var k={callback:w,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),a.hooks.run("before-all-elements-highlight",k);for(var O=0,F;F=k.elements[O++];)a.highlightElement(F,v===!0,k.callback)},highlightElement:function(g,v,w){var k=a.util.getLanguage(g),O=a.languages[k];a.util.setLanguage(g,k);var F=g.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(F,k);var B=g.textContent,I={element:g,language:k,grammar:O,code:B};function H(x){I.highlightedCode=x,a.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,a.hooks.run("after-highlight",I),a.hooks.run("complete",I),w&&w.call(I.element)}if(a.hooks.run("before-sanity-check",I),F=I.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!I.code){a.hooks.run("complete",I),w&&w.call(I.element);return}if(a.hooks.run("before-highlight",I),!I.grammar){H(a.util.encode(I.code));return}if(v&&n.Worker){var X=new Worker(a.filename);X.onmessage=function(x){H(x.data)},X.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else H(a.highlight(I.code,I.grammar,I.language))},highlight:function(g,v,w){var k={code:g,grammar:v,language:w};if(a.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=a.tokenize(k.code,k.grammar),a.hooks.run("after-tokenize",k),l.stringify(a.util.encode(k.tokens),k.language)},tokenize:function(g,v){var w=v.rest;if(w){for(var k in w)v[k]=w[k];delete v.rest}var O=new h;return m(O,O.head,g),p(g,O,v,O.head,0),T(O)},hooks:{all:{},add:function(g,v){var w=a.hooks.all;w[g]=w[g]||[],w[g].push(v)},run:function(g,v){var w=a.hooks.all[g];if(!(!w||!w.length))for(var k=0,O;O=w[k++];)O(v)}},Token:l};n.Prism=a;function l(g,v,w,k){this.type=g,this.content=v,this.alias=w,this.length=(k||"").length|0}l.stringify=function g(v,w){if(typeof v=="string")return v;if(Array.isArray(v)){var k="";return v.forEach(function(H){k+=g(H,w)}),k}var O={type:v.type,content:g(v.content,w),tag:"span",classes:["token",v.type],attributes:{},language:w},F=v.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(O.classes,F):O.classes.push(F)),a.hooks.run("wrap",O);var B="";for(var I in O.attributes)B+=" "+I+'="'+(O.attributes[I]||"").replace(/"/g,"&quot;")+'"';return"<"+O.tag+' class="'+O.classes.join(" ")+'"'+B+">"+O.content+"</"+O.tag+">"};function c(g,v,w,k){g.lastIndex=v;var O=g.exec(w);if(O&&k&&O[1]){var F=O[1].length;O.index+=F,O[0]=O[0].slice(F)}return O}function p(g,v,w,k,O,F){for(var B in w)if(!(!w.hasOwnProperty(B)||!w[B])){var I=w[B];I=Array.isArray(I)?I:[I];for(var H=0;H<I.length;++H){if(F&&F.cause==B+","+H)return;var X=I[H],x=X.inside,K=!!X.lookbehind,_=!!X.greedy,q=X.alias;if(_&&!X.pattern.global){var re=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,re+"g")}for(var Z=X.pattern||X,te=k.next,V=O;te!==v.tail&&!(F&&V>=F.reach);V+=te.value.length,te=te.next){var oe=te.value;if(v.length>g.length)return;if(!(oe instanceof l)){var U=1,j;if(_){if(j=c(Z,V,g,K),!j||j.index>=g.length)break;var be=j.index,ae=j.index+j[0].length,se=V;for(se+=te.value.length;be>=se;)te=te.next,se+=te.value.length;if(se-=te.value.length,V=se,te.value instanceof l)continue;for(var Q=te;Q!==v.tail&&(se<ae||typeof Q.value=="string");Q=Q.next)U++,se+=Q.value.length;U--,oe=g.slice(V,se),j.index-=V}else if(j=c(Z,0,oe,K),!j)continue;var be=j.index,Le=j[0],he=oe.slice(0,be),pe=oe.slice(be+Le.length),Oe=V+oe.length;F&&Oe>F.reach&&(F.reach=Oe);var Ce=te.prev;he&&(Ce=m(v,Ce,he),V+=he.length),d(v,Ce,U);var N=new l(B,x?a.tokenize(Le,x):Le,q,Le);if(te=m(v,Ce,N),pe&&m(v,te,pe),U>1){var D={cause:B+","+H,reach:Oe};p(g,v,w,te.prev,V,D),F&&D.reach>F.reach&&(F.reach=D.reach)}}}}}}function h(){var g={value:null,prev:null,next:null},v={value:null,prev:g,next:null};g.next=v,this.head=g,this.tail=v,this.length=0}function m(g,v,w){var k=v.next,O={value:w,prev:v,next:k};return v.next=O,k.prev=O,g.length++,O}function d(g,v,w){for(var k=v.next,O=0;O<w&&k!==g.tail;O++)k=k.next;v.next=k,k.prev=v,g.length-=O}function T(g){for(var v=[],w=g.head.next;w!==g.tail;)v.push(w.value),w=w.next;return v}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(g){var v=JSON.parse(g.data),w=v.language,k=v.code,O=v.immediateClose;n.postMessage(a.highlight(k,a.languages[w],w)),O&&n.close()},!1)),a;var f=a.util.currentScript();f&&(a.filename=f.src,f.hasAttribute("data-manual")&&(a.manual=!0));function S(){a.manual||a.highlightAll()}if(!a.manual){var b=document.readyState;b==="loading"||b==="interactive"&&f&&f.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return a}(e);s.exports&&(s.exports=t),typeof rn<"u"&&(rn.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var i=n.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading…",r=function(f,S){return"✖ Error "+f+" while fetching file: "+S},i="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",p="failed",h="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function m(f,S,b){var g=new XMLHttpRequest;g.open("GET",f,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?S(g.responseText):g.status>=400?b(r(g.status,g.statusText)):b(i))},g.send(null)}function d(f){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f||"");if(S){var b=Number(S[1]),g=S[2],v=S[3];return g?v?[b,Number(v)]:[b,void 0]:[b,b]}}t.hooks.add("before-highlightall",function(f){f.selector+=", "+h}),t.hooks.add("before-sanity-check",function(f){var S=f.element;if(S.matches(h)){f.code="",S.setAttribute(a,l);var b=S.appendChild(document.createElement("CODE"));b.textContent=n;var g=S.getAttribute("data-src"),v=f.language;if(v==="none"){var w=(/\.(\w+)$/.exec(g)||[,"none"])[1];v=o[w]||w}t.util.setLanguage(b,v),t.util.setLanguage(S,v);var k=t.plugins.autoloader;k&&k.loadLanguages(v),m(g,function(O){S.setAttribute(a,c);var F=d(S.getAttribute("data-range"));if(F){var B=O.split(/\r\n?|\n/g),I=F[0],H=F[1]==null?B.length:F[1];I<0&&(I+=B.length),I=Math.max(0,Math.min(I-1,B.length)),H<0&&(H+=B.length),H=Math.max(0,Math.min(H,B.length)),O=B.slice(I,H).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(I+1))}b.textContent=O,t.highlightElement(b)},function(O){S.setAttribute(a,p),b.textContent=O})}}),t.plugins.fileHighlight={highlight:function(S){for(var b=(S||document).querySelectorAll(h),g=0,v;v=b[g++];)t.highlightElement(v)}};var T=!1;t.fileHighlight=function(){T||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),T=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Bo);var Ct=Bo.exports;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.bnf={string:{pattern:/"[^\r\n"]*"|'[^\r\n']*'/},definition:{pattern:/<[^<>\r\n\t]+>(?=\s*::=)/,alias:["rule","keyword"],inside:{punctuation:/^<|>$/}},rule:{pattern:/<[^<>\r\n\t]+>/,inside:{punctuation:/^<|>$/}},operator:/::=|[|()[\]{}*+?]|\.{3}/};Prism.languages.rbnf=Prism.languages.bnf;(function(s){var e=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+t.source+"(?:[ 	]+"+e.source+")?|"+e.source+"(?:[ 	]+"+t.source+")?)",r=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function o(a,l){l=(l||"").replace(/m/g,"")+"m";var c=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return a});return RegExp(c,l)}s.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+r+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:o(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:o(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:o(i),lookbehind:!0,greedy:!0},number:{pattern:o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:e,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},s.languages.yml=s.languages.yaml})(Prism);const sh=Et({name:"AreaCodigo",props:{titulo:String},data(){return{texto:"Area de Texto para teste",tabSize:2}},components:{PrismEditor:nh},setup(){const s=en(),e=_t(()=>s.selecionado),t=_t(()=>s.listaProjetos);return{store:s,projetos:t,selecionado:e}},watch:{selecionado(){const s=document.getElementById("textoDefinicoesRegulares"),e=document.getElementById("textoTokens"),t=document.getElementById("textoNaoTerminais"),n=document.getElementById("textoGramatica"),r=document.getElementById("textoSaida"),i=document.getElementById("textoSimulador");this.selecionado!=-1&&(s!=null&&(s.value=this.projetos[this.selecionado].regularDefinitions),e!=null&&(e.value=this.projetos[this.selecionado].tokens),t!=null&&(t.value=this.projetos[this.selecionado].nonTerminals),n!=null&&(n.value=this.projetos[this.selecionado].grammar),r!=null&&(r.value=this.projetos[this.selecionado].consoleExit),i!=null&&(i.value=this.projetos[this.selecionado].textSimulator))}},methods:{highlighterPrismBNF(s){return Ct.highlight(s,Ct.languages.bnf,"bnf")},highlighterGrammarGALS(s){return Ct.highlight(s,Ct.languages.gals_bnf={comment:/\/\/.*/,string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},"semantic-action":{pattern:/#\d+/,alias:"symbol"},"non-terminal":{pattern:/<[^<>\r\n\t]+>/,alias:["bold","keyword"],inside:{punctuation:/^<|>$/}},operator:/::=|\||;/,epsilon:{pattern:/î/,alias:"class-name"}},"gals_bnf")},highlighterOrignalTokensGALS(s){return Ct.highlight(s,Ct.languages.gals={comment:/\/\/.*/,sc_token:{pattern:/\b[a-zA-Z]\w*[ \t]*(=[ \t]*[a-zA-Z]\w*[ \t]*:)/g,lookbehind:!0,inside:{important:/(:)/}},token:{pattern:/(^[a-zA-Z]\w*[ \t]*:)([^\r\n]|:)+/gm,lookbehind:!0,alias:"regex"},error:{pattern:/^(?:[0-9])/m,alias:"number"},ignore:{pattern:/^(:!?)([^\r\n]|:)+/m,lookbehind:!0,alias:"class-name"},operator:/(?:(:|!|=))/,string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0}},"gals")},highlighterNewTokensGALS(s){return Ct.highlight(s,Ct.languages.gals={comment:/\/\/.*/,escaped:{pattern:/\\.{1,3}/,alias:["constant"]},token:{pattern:/^[a-zA-Z_]\w*(?:[ \t]*):/gm,alias:"variable"},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/[0-9]/,operator:/[|()[\]{}*+?<>]/,assign:{pattern:/:|=|!/,alias:["important"]},punctuation:/,|;|-|\//},"gals")},highlighterNone(s){return s},focusEditor(s){var e,t;(t=(e=document.getElementById(s))==null?void 0:e.getElementsByClassName("prism-editor__textarea")[0])==null||t.focus()}}});const rh={class:"caixa__titulo"},ih={key:0,class:"caixa__interna"},oh=["disabled"],ah=["disabled"],lh={key:3,class:"caixa__interna__input"},ch=["disabled"],uh={key:5,class:"caixa__interna"};function hh(s,e,t,n,r,i){const o=rt("prism-editor");return Se(),ke("div",{class:Tt([s.titulo==="Simbolo inicial"?"caixa__input":"caixa"])},[ne("p",rh,St(s.titulo),1),s.projetos[s.selecionado]==null?(Se(),ke("div",ih,[s.titulo==="Simbolo inicial"?(Se(),ke("input",{key:0,name:"textoCodigoVazio",class:"input__codigo",disabled:s.selecionado==-1},null,8,oh)):(Se(),ke("textarea",{key:1,name:"textoCodigoVazio",class:"texto__codigo",disabled:s.selecionado==-1},null,8,ah))])):s.titulo=="Definições Regulares"?(Se(),ke("div",{key:1,class:"caixa__interna",onClick:e[1]||(e[1]=a=>s.focusEditor("textoDefinicoesRegulares"))},[ge(o,{id:"textoDefinicoesRegulares",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",modelValue:s.projetos[s.selecionado].regularDefinitions,"onUpdate:modelValue":e[0]||(e[0]=a=>s.projetos[s.selecionado].regularDefinitions=a),highlight:s.highlighterOrignalTokensGALS,disabled:s.selecionado==-1,"line-numbers":!0},null,8,["modelValue","highlight","disabled"])])):s.titulo=="Tokens"?(Se(),ke("div",{key:2,class:"caixa__interna",onClick:e[3]||(e[3]=a=>s.focusEditor("textoTokens"))},[ge(o,{id:"textoTokens",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",modelValue:s.projetos[s.selecionado].tokens,"onUpdate:modelValue":e[2]||(e[2]=a=>s.projetos[s.selecionado].tokens=a),disabled:s.selecionado==-1,highlight:s.highlighterOrignalTokensGALS,"line-numbers":!0},null,8,["modelValue","disabled","highlight"])])):s.titulo=="Simbolo inicial"?(Se(),ke("div",lh,[En(ne("input",{id:"textoNaoTerminais",type:"text",name:"textoCodigo",class:"input__codigo",spellcheck:"false","onUpdate:modelValue":e[4]||(e[4]=a=>s.projetos[s.selecionado].nonTerminals=a),pattern:"<[a-zA-Z_0-9]+>",disabled:s.selecionado==-1},null,8,ch),[[ui,s.projetos[s.selecionado].nonTerminals]])])):s.titulo=="Gramática"?(Se(),ke("div",{key:4,class:"caixa__interna",onClick:e[6]||(e[6]=a=>s.focusEditor("textoGramatica"))},[ge(o,{id:"textoGramatica",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",modelValue:s.projetos[s.selecionado].grammar,"onUpdate:modelValue":e[5]||(e[5]=a=>s.projetos[s.selecionado].grammar=a),disabled:s.selecionado==-1,highlight:s.highlighterGrammarGALS,"line-numbers":!0},null,8,["modelValue","disabled","highlight"])])):s.titulo=="Saída"?(Se(),ke("div",uh,[En(ne("textarea",{id:"textoSaida",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",disabled:"","onUpdate:modelValue":e[7]||(e[7]=a=>s.projetos[s.selecionado].consoleExit=a)},null,512),[[ui,s.projetos[s.selecionado].consoleExit]])])):s.titulo=="Simulação"?(Se(),ke("div",{key:6,class:"caixa__interna",onClick:e[9]||(e[9]=a=>s.focusEditor("textoSimulacao"))},[ge(o,{id:"textoSimulacao",name:"textoCodigo",rows:"4",cols:"50",class:"texto__codigo",spellcheck:"false",modelValue:s.projetos[s.selecionado].textSimulator,"onUpdate:modelValue":e[8]||(e[8]=a=>s.projetos[s.selecionado].textSimulator=a),disabled:s.selecionado==-1,highlight:s.highlighterNone,"line-numbers":!0},null,8,["modelValue","disabled","highlight"])])):Dn("",!0)],2)}const jo=$t(sh,[["render",hh],["__scopeId","data-v-9229c37f"]]),dh=Et({name:"TreeBrowser",components:{},props:{node:Object,isFinal:{type:Boolean,default:!0},isRoot:{type:Boolean,default:!0}},data(){return{isOpen:!0}},computed:{isFolder(){return this.node==null?!1:this.node.children&&this.node.children.length}}});const fh={class:"tree"},ph=["open"],mh={key:1};function gh(s,e,t,n,r,i){var a,l,c;const o=rt("TreeBrowser",!0);return Se(),ke("div",fh,[ne("ul",null,[ne("li",{class:Tt({not__final:!s.isFinal,root:s.isRoot})},[s.isFolder?(Se(),ke("details",{key:0,open:s.isRoot},[ne("summary",{style:pn({fontWeight:s.isFolder?"bold":"normal",color:s.isFolder?"green":"black"})},St((a=s.node)==null?void 0:a.value),5),(Se(!0),ke(Ye,null,br((l=s.node)==null?void 0:l.children,(p,h)=>{var m;return Se(),vr(o,{key:p.value==null?"":p.value,node:p,"is-final":h==((m=s.node)==null?void 0:m.children.length)-1,"is-root":!1},null,8,["node","is-final"])}),128))],8,ph)):(Se(),ke("div",mh,[ne("li",null,St((c=s.node)==null?void 0:c.value),1)]))],2)])])}const _h=$t(dh,[["render",gh],["__scopeId","data-v-189a0511"]]),bh=Et({name:"SimuladorJanela",components:{TreeBrowser:_h},data(){return{resultadoLexico:new Map,resultadoSintatico:new st,tipoSimulacao:"Lexico"}},setup(){return{store:en()}},methods:{simularLexico(){this.tipoSimulacao="Lexico";const s=this.store.selecionado;if(s==-1)return;const e=this.store.listaProjetos[s];try{this.resultadoLexico=Nu(e.textSimulator,e.regularDefinitions,e.tokens),e.consoleExit="Simulação Concluida"}catch(t){console.log(t),e.consoleExit="Erro Léxico: "+t.message}},simularSintatico(){this.tipoSimulacao="Sintático";const s=this.store.selecionado;if(s==-1)return;const e=this.store.listaProjetos[s];try{const t=Lu(e.textSimulator,e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,e.optionsGals.parser,null);this.resultadoSintatico=t,e.consoleExit="Simulação Concluida"}catch(t){console.log(t),e.consoleExit="Erro Léxico: "+t.message}}}});const Uo=s=>(vs("data-v-cfacf83f"),s=s(),ys(),s),Th={class:"contentor__simulacao"},Sh={class:"container__saida__simulacao"},vh=Uo(()=>ne("p",{class:"caixa__titulo"},"Saída da Simulação",-1)),yh={key:0,class:"saida__simulacao"},Eh=Uo(()=>ne("thead",null,[ne("tr",null,[ne("th",null,"Token"),ne("th",null,"Lexeme"),ne("th",null,"Posição")])],-1)),wh={key:1,class:"saida__simulacao"},kh={class:"container__botao__simular"};function Ah(s,e,t,n,r,i){const o=rt("TreeBrowser");return Se(),ke("div",Th,[ne("div",Sh,[vh,s.tipoSimulacao==="Lexico"?(Se(),ke("div",yh,[ne("table",null,[Eh,ne("tbody",null,[(Se(!0),ke(Ye,null,br(s.resultadoLexico,(a,l)=>(Se(),ke("tr",{key:l},[ne("td",null,St(a[1]),1),ne("td",null,St(a[0].lexeme),1),ne("td",null,St(a[0].position),1)]))),128))])])])):Dn("",!0),s.tipoSimulacao==="Sintático"?(Se(),ke("div",wh,[ne("div",null,[ge(o,{node:s.resultadoSintatico.toJSON()},null,8,["node"])])])):Dn("",!0),ne("div",kh,[ne("button",{class:"botao__simular",onClick:e[0]||(e[0]=(...a)=>s.simularLexico&&s.simularLexico(...a))},"Simular Lexico"),ne("button",{class:"botao__simular",onClick:e[1]||(e[1]=(...a)=>s.simularSintatico&&s.simularSintatico(...a))},"Simular Sintático")])])])}const Ch=$t(bh,[["render",Ah],["__scopeId","data-v-cfacf83f"]]),xh="modulepreload",Rh=function(s){return"/Web-GALS/"+s},yi={},Nh=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Rh(i),i in yi)return;yi[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let p=r.length-1;p>=0;p--){const h=r[p];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":xh,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((p,h)=>{c.addEventListener("load",p),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ei={download(s,e,t){const n=new Blob([s],{type:t});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n,e);else{let r=document.createElement("a"),i=URL.createObjectURL(n);r.href=i,r.download=e,document.body.appendChild(r),r.click(),setTimeout(function(){document.body.removeChild(r),window.URL.revokeObjectURL(i)},0)}}},Ih=Et({name:"ModalConfiguracoes",components:{},props:{options:Y},data(){return{activeTab:"Geral",namespace:!0}},setup(){const s=en(),e=_t(()=>s.selecionado),t=_t(()=>s.listaProjetos);return{store:s,projetos:t,selecionado:e}},methods:{fecharModal(){const s=document.getElementById("modal__configuracoes");s!=null&&(s.style.display="none")},changeTab(s){let e=document.getElementsByClassName("tablinks");for(let t=0;t<e.length;t++)e[t].className=e[t].className.replace(" active","");s==="Geral"?e[0].className+=" active":s==="Léxico"?e[1].className+=" active":s==="Sintático"&&(e[2].className+=" active"),this.activeTab=s},enviarForms(s){if(s==null)return;let e=new Y;const t=s.target;t!=null&&(e.setOption("GenerateScanner",t.gerar.value==="1"||t.gerar.value==="3"?"true":"false"),e.setOption("GenerateParser",t.gerar.value==="2"||t.gerar.value==="3"?"true":"false"),e.setOption("Language",t.linguagem.value),e.setOption("ScannerName",t.nomeLexico.value),e.setOption("ParserName",t.nomeSintatico.value),e.setOption("SemanticName",t.nomeSemantico.value),e.setOption("Package",t.nameNamespace.value),e.setOption("ScannerCaseSensitive",t.sensibilidade.checked),e.setOption("ScannerTable",t.automato.value),e.setOption("Input",t.tipoEntrada.value),e.setOption("Parser",t.parser.value),this.projetos[this.selecionado].optionsGals=e,this.projetos[this.selecionado].options=e.toString(),this.fecharModal())},preencherModal(){const s=this.$refs.form,e=this.projetos[this.selecionado].optionsGals;alert(e.toString()),e.generateScanner&&e.generateParser?s.gerar.value="3":e.generateParser?s.gerar.value="2":e.generateScanner&&(s.gerar.value="1"),Y.LANG_CPP==e.language?s.linguagem.value="C++":Y.LANG_JAVA==e.language?s.linguagem.value="Java":Y.LANG_DELPHI==e.language&&(s.linguagem.value="Delphi"),s.nomeLexico.value=e.scannerName,s.nomeSintatico.value=e.parserName,s.nomeSemantico.value=e.semanticName,s.nameNamespace.value=e.pkgName,s.sensibilidade.checked=e.scannerCaseSensitive,Y.INPUT_STREAM==e.input?s.tipoEntrada.value="Stream":Y.INPUT_STRING==e.input&&(s.tipoEntrada.value="String"),Y.SCANNER_TABLE_FULL==e.scannerTable?s.automato.value="Full":Y.SCANNER_TABLE_COMPACT==e.scannerTable?s.automato.value="Compact":Y.SCANNER_TABLE_HARDCODE==e.scannerTable&&(s.automato.value="Hardcode"),Y.PARSER_LR==e.parser?s.parser.value="LR":Y.PARSER_LALR==e.parser?s.parser.value="LALR":Y.PARSER_SLR==e.parser?s.parser.value="SLR":Y.PARSER_LL==e.parser?s.parser.value="LL":Y.PARSER_REC_DESC==e.parser&&(s.parser.value="RD")}}});const $o=s=>(vs("data-v-08234abb"),s=s(),ys(),s),Lh={class:"modal__configuracoes",id:"modal__configuracoes"},Oh=$o(()=>ne("h2",null,"Configurações",-1)),Ph={class:"modal__configuracoes__inner",id:"modal__configuracoes__inner"},Fh={class:"tab"},Dh={id:"Geral",class:"tabcontent"},zh=yr('<fieldset id="gerar" data-v-08234abb><legend data-v-08234abb>Gerar</legend><div data-v-08234abb><input type="radio" id="gerarLexico" name="gerar" value="1" checked data-v-08234abb><label for="gerarLexico" data-v-08234abb>Analisador Léxico</label></div><div data-v-08234abb><input type="radio" id="gerarSintatico" name="gerar" value="2" data-v-08234abb><label for="gerarSintatico" data-v-08234abb>Analisador Sintático</label></div><div data-v-08234abb><input type="radio" id="gerarLexicoSintatico" name="gerar" value="3" data-v-08234abb><label for="gerarLexicoSintatico" data-v-08234abb>Analisador Léxico e Sintático</label></div></fieldset><fieldset data-v-08234abb><legend data-v-08234abb>Linguagem</legend><div data-v-08234abb><input type="radio" id="linguagemJava" name="linguagem" value="Java" checked data-v-08234abb><label for="linguagemJava" data-v-08234abb>Java</label></div><div data-v-08234abb><input type="radio" id="linguagemC++" name="linguagem" value="C++" data-v-08234abb><label for="linguagemC++" data-v-08234abb>C++</label></div><div data-v-08234abb><input type="radio" id="linguagemDelphi" name="linguagem" value="Delphi" data-v-08234abb><label for="linguagemDelphi" data-v-08234abb>Delphi</label></div></fieldset><fieldset data-v-08234abb><legend data-v-08234abb>Classes</legend><table data-v-08234abb><tr data-v-08234abb><td data-v-08234abb><label for="arquivoLexico" data-v-08234abb>Analisador Léxico</label></td><td data-v-08234abb><input type="input" id="arquivoLexico" name="nomeLexico" value="Lexico" checked data-v-08234abb></td></tr><tr data-v-08234abb><td data-v-08234abb><label for="arquivoSintatico" data-v-08234abb>Analisador Sintático</label></td><td data-v-08234abb><input type="input" id="arquivoSintatico" name="nomeSintatico" value="Sintatico" data-v-08234abb></td></tr><tr data-v-08234abb><td data-v-08234abb><label for="arquivoSemantico" data-v-08234abb>Analisador Semantico</label></td><td data-v-08234abb><input type="input" id="arquivoSemantico" name="nomeSemantico" value="Semantico" data-v-08234abb></td></tr><tr data-v-08234abb><td data-v-08234abb><label for="arquivoNamespace" data-v-08234abb>Package / Namespace</label></td><td data-v-08234abb><input type="input" id="arquivoNamespace" name="nameNamespace" value="" data-v-08234abb></td></tr></table></fieldset>',3),Mh=[zh],Bh={id:"Léxico",class:"tabcontent"},jh=yr('<fieldset data-v-08234abb><legend data-v-08234abb>Forma de Entrada</legend><div data-v-08234abb><input type="radio" id="formaEntradaStream" name="tipoEntrada" value="Stream" checked data-v-08234abb><label for="formaEntradaStream" data-v-08234abb>Stream</label></div><div data-v-08234abb><input type="radio" id="formaEntradaString" name="tipoEntrada" value="String" data-v-08234abb><label for="formaEntradaString" data-v-08234abb>String</label></div></fieldset><fieldset data-v-08234abb><legend data-v-08234abb>Implementação do Autômato</legend><div data-v-08234abb><input type="radio" id="automatoCompleto" name="automato" value="Full" checked data-v-08234abb><label for="automatoCompleto" data-v-08234abb>Tabela Completa</label></div><div data-v-08234abb><input type="radio" id="automatoCompactado" name="automato" value="Compact" data-v-08234abb><label for="automatoCompactado" data-v-08234abb>Tabela Compactada (Só para Java)</label></div><div data-v-08234abb><input type="radio" id="automatoEspecifico" name="automato" value="Hardcode" data-v-08234abb><label for="automatoEspecifico" data-v-08234abb>Específica (Código)</label></div></fieldset><div data-v-08234abb><input type="checkbox" id="sensibilidade" name="sensibilidade" data-v-08234abb><label for="sensibilidade" data-v-08234abb>Diferenciar maiúscula/minúscula em casos especiais</label></div>',3),Uh=[jh],$h={id:"Sintático",class:"tabcontent"},Hh=yr('<fieldset data-v-08234abb><legend data-v-08234abb>Classe do Analisador Sintático</legend><fieldset data-v-08234abb><legend data-v-08234abb>Descendentes</legend><div data-v-08234abb><input type="radio" id="sintaticoLLRec" name="parser" value="RD" data-v-08234abb><label for="sintaticoLLRec" data-v-08234abb>Descendente Recursivo</label></div><div data-v-08234abb><input type="radio" id="sintaticoLLPred" name="parser" value="LL" data-v-08234abb><label for="sintaticoLLPred" data-v-08234abb>LL(1)</label></div></fieldset><fieldset data-v-08234abb><legend data-v-08234abb>Ascendentes</legend><div data-v-08234abb><input type="radio" id="sintaticoSLR" name="parser" value="SLR" data-v-08234abb><label for="sintaticoSLR" data-v-08234abb>SLR(1)</label></div><div data-v-08234abb><input type="radio" id="sintaticoLALR" name="parser" value="LALR" data-v-08234abb><label for="sintaticoLALR" data-v-08234abb>LALR(1)</label></div><div data-v-08234abb><input type="radio" id="sintaticoLRCanonico" name="parser" value="LR" data-v-08234abb><label for="sintaticoLRCanonico" data-v-08234abb>LR(1)</label></div></fieldset></fieldset>',1),Kh=[Hh],Gh=$o(()=>ne("button",{class:"btn_aplicarConfiguracoes"},"Aplicar",-1));function Wh(s,e,t,n,r,i){return Se(),ke("div",Lh,[Oh,ne("div",Ph,[ne("span",{id:"close",onClick:e[0]||(e[0]=(...o)=>s.fecharModal&&s.fecharModal(...o))}),ne("div",Fh,[ne("button",{class:"tablinks active",onClick:e[1]||(e[1]=o=>s.changeTab("Geral"))},"Geral"),ne("button",{class:"tablinks",onClick:e[2]||(e[2]=o=>s.changeTab("Léxico"))},"Léxico"),ne("button",{class:"tablinks",onClick:e[3]||(e[3]=o=>s.changeTab("Sintático"))},"Sintático")]),ne("form",{id:"formOptions",onSubmit:e[4]||(e[4]=vc((...o)=>s.enviarForms&&s.enviarForms(...o),["prevent"])),ref:"form"},[En(ne("div",Dh,Mh,512),[[Ps,s.activeTab=="Geral"]]),En(ne("div",Bh,Uh,512),[[Ps,s.activeTab=="Léxico"]]),En(ne("div",$h,Kh,512),[[Ps,s.activeTab=="Sintático"]]),Gh],544)])])}const qh=$t(Ih,[["render",Wh],["__scopeId","data-v-08234abb"]]),Zh=Et({name:"BarraEsquerda",components:{AreaCodigo:jo,ModalConfiguracoes:qh},data(){return{paginaAberta:"Projetos",estiloDisplayConteudo:"flex"}},setup(){const s=en(),e=_t(()=>s.selecionado),t=_t(()=>s.listaProjetos);return{store:s,projetos:t,selecionado:e}},methods:{abrirProjetos(){this.colapsaConteudo("Projetos"),this.paginaAberta="Projetos"},abrirOpcoes(){if(this.selecionado===-1){alert("Nenhum projeto selecionado!");return}const s=document.getElementById("modal__configuracoes"),e=this.$refs.ModalConfiguracoesRef;s==null||e==null||e&&e.enviarForms&&(e.preencherModal(),s.style.display="flex")},abrirDocumentacao(){this.colapsaConteudo("Documentação"),this.paginaAberta="Documentação"},getLinkDocumentacaoHTML(){let s;return s="files/help.html",s},abrirArquivo(){const s=document.getElementById("file");if(s==null||s.files==null)return;const e=s.files[0],t=this.store,n=new FileReader;Nh(()=>import("./index-browser-ee41908b.js").then(r=>r.i),[]).then(({default:r})=>{r(e).then(i=>{i.encoding==null?n.readAsText(e,"ISO-8859-4"):n.readAsText(e,i.encoding.toString()),n.onload=function(){const o=n.result.split(/#Options\n|\n#RegularDefinitions\n|\n#Tokens\n|\n#NonTerminals\n|\n#Grammar\n/),a={id:t.totalProjetos,fileName:e.name,options:o[1]==null?"":o[1],regularDefinitions:o[2]==null?"":o[2],tokens:o[3]==null?"":o[3],nonTerminals:o[4]==null?"":o[4].split(`
`).filter(l=>!l.startsWith("//"))[0].trim(),grammar:o[5]==null?"":o[5],textSimulator:"",consoleExit:"",optionsGals:o[1]==null?new Y:new Y().constructorFromString(o[1]==null?"":o[1])};t.addProject(a),t.selectLastProject()},s.value=""})}).catch(r=>{console.error("Error importing DetectFileEncodingAndLanguage:",r)})},abrirModalNovoArquivo(){const s=document.getElementById("modal__arquivo");s!=null&&(s.style.display="flex");const e=document.getElementById("nomeProjeto");e!=null&&(e.value="")},salvarArquivo(){if(this.selecionado==-1)alert("Nenhum projeto selecionado!");else{const s=this.projetos[this.selecionado].options,e=this.projetos[this.selecionado].optionsGals,t=this.projetos[this.selecionado].regularDefinitions,n=this.projetos[this.selecionado].tokens,r=this.projetos[this.selecionado].nonTerminals,i=this.projetos[this.selecionado].grammar;let o="";o+=`#Options
`+(s==null?"":e.toString())+`
`,o+=`#RegularDefinitions
`+(t??"")+`
`,o+=`#Tokens
`+(n??"")+`
`,o+=`#NonTerminals
`+(r==null?"":Du(r,i))+`
`,o+=`#Grammar
`+(i??""),Ei.download(o,this.projetos[this.selecionado].fileName,".gals")}},abrirInformacoes(){this.colapsaConteudo("Informações"),this.paginaAberta="Informações"},colapsaConteudo(s){this.paginaAberta==s?this.estiloDisplayConteudo=this.estiloDisplayConteudo=="flex"?"none":"flex":this.estiloDisplayConteudo="flex"},mostrarTabelaLexico(){const s=this.store.selecionado,e=this.store.listaProjetos[s],t=Iu(e.regularDefinitions,e.tokens),n=window.open();n&&(n.document.write(t),n.document.close()),e.consoleExit="Tabela criada com Sucesso!"},mostrarTabelaSintatico(){const s=this.store.selecionado,e=this.store.listaProjetos[s],t=Ou(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,Y.PARSER_SLR,null);Ei.download(t,this.projetos[this.selecionado].fileName,".html");const n=window.open();n&&(n.document.write(t),n.document.close()),e.consoleExit="Tabela criada com Sucesso!"},mostrarTabelaConjuntoSintatico(){const s=this.store.selecionado,e=this.store.listaProjetos[s],t=Pu(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,Y.PARSER_SLR,null),n=window.open();n&&(n.document.write(t),n.document.close()),e.consoleExit="Tabela criada com Sucesso!"},mostrarTabelaFirstFollowSintatico(){const s=this.store.selecionado,e=this.store.listaProjetos[s],t=Fu(e.regularDefinitions,e.tokens,e.nonTerminals,e.grammar,Y.PARSER_SLR),n=window.open();n&&(n.document.write(t),n.document.close()),e.consoleExit="Tabela criada com Sucesso!"}}});const Vh={class:"barra__esquerda"},Yh={class:"selecao__botoes"},Xh={name:"file",type:"file",id:"file",ref:"myFiles",accept:".gals"},Jh={key:0,class:"abaProjetos"},Qh={class:"lista__projetos"},ed=["onClick"],td=["onClick"],nd={class:"codigo__definicao__regulares"},sd={key:1},rd={key:0},id={key:2},od={key:3},ad={class:"container__links"},ld=["href"];function cd(s,e,t,n,r,i){const o=rt("ModalConfiguracoes"),a=rt("AreaCodigo");return Se(),ke(Ye,null,[ge(o,{ref:"ModalConfiguracoesRef"},null,512),ne("div",Vh,[ne("div",Yh,[ne("button",{class:Tt(["botao projetos",s.paginaAberta=="Projetos"?"selecionado":"nao_selecionado"]),onClick:e[0]||(e[0]=(...l)=>s.abrirProjetos&&s.abrirProjetos(...l))},null,2),ne("button",{class:"botao novo__projeto",onClick:e[1]||(e[1]=(...l)=>s.abrirModalNovoArquivo&&s.abrirModalNovoArquivo(...l))}),ne("label",{class:"botao__input",onChange:e[2]||(e[2]=(...l)=>s.abrirArquivo&&s.abrirArquivo(...l))},[ne("input",Xh,null,512),To(" Custom Upload ")],32),ne("button",{class:"botao salvar",onClick:e[3]||(e[3]=(...l)=>s.salvarArquivo&&s.salvarArquivo(...l))}),ne("button",{class:Tt(["botao documentacao",s.paginaAberta=="Documentação"?"selecionado":"nao_selecionado"]),onClick:e[4]||(e[4]=(...l)=>s.abrirDocumentacao&&s.abrirDocumentacao(...l))},null,2),ne("button",{class:"botao opcao",onClick:e[5]||(e[5]=(...l)=>s.abrirOpcoes&&s.abrirOpcoes(...l))}),ne("button",{class:Tt(["botao informacoes",s.paginaAberta=="Informações"?"selecionado":"nao_selecionado"]),onClick:e[6]||(e[6]=(...l)=>s.abrirInformacoes&&s.abrirInformacoes(...l))},null,2)]),ne("div",{class:"conteudo",style:pn({display:s.estiloDisplayConteudo})},[ne("h2",null,St(s.paginaAberta),1),s.paginaAberta=="Projetos"?(Se(),ke("div",Jh,[ne("div",Qh,[(Se(!0),ke(Ye,null,br(s.projetos,l=>(Se(),ke("div",{key:l.id,class:"projeto__acaoes"},[ne("button",{onClick:c=>s.store.changeSelected(l.id),class:Tt(["botao__mudar__projeto",s.selecionado==l.id?"selecionado__projeto":""])},St(l.fileName),11,ed),ne("button",{onClick:c=>s.store.deleteProject(l.id),class:"botao__excluir__projeto"}," X ",8,td)]))),128))]),ne("div",nd,[ge(a,{titulo:"Definições Regulares"})]),ge(a,{titulo:"Simbolo inicial"})])):s.paginaAberta=="Opções"?(Se(),ke("div",sd,[s.store.totalProjetos>0?(Se(),ke("div",rd,[ne("p",null,St(s.projetos[s.selecionado].options),1)])):Dn("",!0)])):s.paginaAberta=="Documentação"?(Se(),ke("div",id,[ne("button",{class:"btn",onClick:e[7]||(e[7]=(...l)=>s.mostrarTabelaLexico&&s.mostrarTabelaLexico(...l))},"Tabela de Análise Léxica"),ne("button",{class:"btn",onClick:e[8]||(e[8]=(...l)=>s.mostrarTabelaSintatico&&s.mostrarTabelaSintatico(...l))},"Tabela de Análise Sintática"),ne("button",{class:"btn",onClick:e[9]||(e[9]=(...l)=>s.mostrarTabelaConjuntoSintatico&&s.mostrarTabelaConjuntoSintatico(...l))},"Conjunto de itens"),ne("button",{class:"btn",onClick:e[10]||(e[10]=(...l)=>s.mostrarTabelaFirstFollowSintatico&&s.mostrarTabelaFirstFollowSintatico(...l))},"First & Follow")])):s.paginaAberta=="Informações"?(Se(),ke("div",od,[ne("div",ad,[ne("a",{class:"link",href:s.getLinkDocumentacaoHTML(),target:"_blank"},"DOCUMENTAÇÃO",8,ld)])])):Dn("",!0)],4)])],64)}const ud=$t(Zh,[["render",cd],["__scopeId","data-v-84738113"]]),hd=Et({name:"ModalNovoArquivo",components:{},setup(){return{store:en()}},methods:{fecharModal(){const s=document.getElementById("modal__arquivo");s!=null&&(s.style.display="none")},adicionarProjeto(){const s=document.getElementById("nomeProjeto");if(s!=null){let e=s.value.trim()+".gals";const t={id:this.store.totalProjetos,fileName:e,options:"",regularDefinitions:"",tokens:"",nonTerminals:"",grammar:"",textSimulator:"",consoleExit:"",optionsGals:new Y};this.store.addProject(t),this.store.selectLastProject(),this.fecharModal()}}}});const Ho=s=>(vs("data-v-1b55268b"),s=s(),ys(),s),dd={class:"modal__arquivo",id:"modal__arquivo"},fd=Ho(()=>ne("h2",null,"Novo Projeto",-1)),pd={class:"modal__arquivo__inner",id:"modal__arquivo__inner"},md=Ho(()=>ne("input",{type:"text",id:"nomeProjeto"},null,-1));function gd(s,e,t,n,r,i){return Se(),ke("div",dd,[fd,ne("div",pd,[ne("span",{id:"close",onClick:e[0]||(e[0]=(...o)=>s.fecharModal&&s.fecharModal(...o))}),md,ne("button",{onClick:e[1]||(e[1]=(...o)=>s.adicionarProjeto&&s.adicionarProjeto(...o))},"Criar")])])}const _d=$t(hd,[["render",gd],["__scopeId","data-v-1b55268b"]]),bd={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((s,e)=>(s[e.id]=e)&&s,{})}},methods:{updatePaneComponents(){this.panes.forEach(s=>{s.update&&s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(s,e){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove(s){this.touch.mouseDown&&(s.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(s)),this.$emit("resize",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(s=>({min:s.min,max:s.max,size:s.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(s,e){"ontouchstart"in window&&(s.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===e?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(s,e),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=e,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[e])},onSplitterDblClick(s,e){let t=0;this.panes=this.panes.map((n,r)=>(n.size=r===e?n.max:n.min,r!==e&&(t+=n.min),n)),this.panes[e].size-=t,this.$emit("pane-maximize",this.panes[e]),this.$emit("resized",this.panes.map(n=>({min:n.min,max:n.max,size:n.size})))},onPaneClick(s,e){this.$emit("pane-click",this.indexedPanes[e])},getCurrentMouseDrag(s){const e=this.container.getBoundingClientRect(),{clientX:t,clientY:n}="ontouchstart"in window&&s.touches?s.touches[0]:s;return{x:t-e.left,y:n-e.top}},getCurrentDragPercentage(s){s=s[this.horizontal?"y":"x"];const e=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(s=e-s),s*100/e},calculatePanesSize(s){const e=this.touch.activeSplitter;let t={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0};const n=0+(this.pushOtherPanes?0:t.prevPanesSize),r=100-(this.pushOtherPanes?0:t.nextPanesSize),i=Math.max(Math.min(this.getCurrentDragPercentage(s),r),n);let o=[e,e+1],a=this.panes[o[0]]||null,l=this.panes[o[1]]||null;const c=a.max<100&&i>=a.max+t.prevPanesSize,p=l.max<100&&i<=100-(l.max+this.sumNextPanesSize(e+1));if(c||p){c?(a.size=a.max,l.size=Math.max(100-a.max-t.prevPanesSize-t.nextPanesSize,0)):(a.size=Math.max(100-l.max-t.prevPanesSize-this.sumNextPanesSize(e+1),0),l.size=l.max);return}if(this.pushOtherPanes){const h=this.doPushOtherPanes(t,i);if(!h)return;({sums:t,panesToResize:o}=h),a=this.panes[o[0]]||null,l=this.panes[o[1]]||null}a!==null&&(a.size=Math.min(Math.max(i-t.prevPanesSize-t.prevReachedMinPanes,a.min),a.max)),l!==null&&(l.size=Math.min(Math.max(100-i-t.nextPanesSize-t.nextReachedMinPanes,l.min),l.max))},doPushOtherPanes(s,e){const t=this.touch.activeSplitter,n=[t,t+1];return e<s.prevPanesSize+this.panes[n[0]].min&&(n[0]=this.findPrevExpandedPane(t).index,s.prevReachedMinPanes=0,n[0]<t&&this.panes.forEach((r,i)=>{i>n[0]&&i<=t&&(r.size=r.min,s.prevReachedMinPanes+=r.min)}),s.prevPanesSize=this.sumPrevPanesSize(n[0]),n[0]===void 0)?(s.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((r,i)=>{i>0&&i<=t&&(r.size=r.min,s.prevReachedMinPanes+=r.min)}),this.panes[n[1]].size=100-s.prevReachedMinPanes-this.panes[0].min-s.prevPanesSize-s.nextPanesSize,null):e>100-s.nextPanesSize-this.panes[n[1]].min&&(n[1]=this.findNextExpandedPane(t).index,s.nextReachedMinPanes=0,n[1]>t+1&&this.panes.forEach((r,i)=>{i>t&&i<n[1]&&(r.size=r.min,s.nextReachedMinPanes+=r.min)}),s.nextPanesSize=this.sumNextPanesSize(n[1]-1),n[1]===void 0)?(s.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((r,i)=>{i<this.panesCount-1&&i>=t+1&&(r.size=r.min,s.nextReachedMinPanes+=r.min)}),this.panes[n[0]].size=100-s.prevPanesSize-s.nextReachedMinPanes-this.panes[this.panesCount-1].min-s.nextPanesSize,null):{sums:s,panesToResize:n}},sumPrevPanesSize(s){return this.panes.reduce((e,t,n)=>e+(n<s?t.size:0),0)},sumNextPanesSize(s){return this.panes.reduce((e,t,n)=>e+(n>s+1?t.size:0),0)},findPrevExpandedPane(s){return[...this.panes].reverse().find(e=>e.index<s&&e.size>e.min)||{}},findNextExpandedPane(s){return this.panes.find(e=>e.index>s+1&&e.size>e.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(s=>{const e=s.classList.contains("splitpanes__pane"),t=s.classList.contains("splitpanes__splitter");!e&&!t&&(s.parentNode.removeChild(s),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},addSplitter(s,e,t=!1){const n=s-1,r=document.createElement("div");r.classList.add("splitpanes__splitter"),t||(r.onmousedown=i=>this.onMouseDown(i,n),typeof window<"u"&&"ontouchstart"in window&&(r.ontouchstart=i=>this.onMouseDown(i,n)),r.onclick=i=>this.onSplitterClick(i,n+1)),this.dblClickSplitter&&(r.ondblclick=i=>this.onSplitterDblClick(i,n+1)),e.parentNode.insertBefore(r,e)},removeSplitter(s){s.onmousedown=void 0,s.onclick=void 0,s.ondblclick=void 0,s.parentNode.removeChild(s)},redoSplitters(){const s=Array.from(this.container.children);s.forEach(t=>{t.className.includes("splitpanes__splitter")&&this.removeSplitter(t)});let e=0;s.forEach(t=>{t.className.includes("splitpanes__pane")&&(!e&&this.firstSplitter?this.addSplitter(e,t,!0):e&&this.addSplitter(e,t),e++)})},requestUpdate({target:s,...e}){const t=this.indexedPanes[s._.uid];Object.entries(e).forEach(([n,r])=>t[n]=r)},onPaneAdd(s){let e=-1;Array.from(s.$el.parentNode.children).some(r=>(r.className.includes("splitpanes__pane")&&e++,r===s.$el));const t=parseFloat(s.minSize),n=parseFloat(s.maxSize);this.panes.splice(e,0,{id:s._.uid,index:e,min:isNaN(t)?0:t,max:isNaN(n)?100:n,size:s.size===null?null:parseFloat(s.size),givenSize:s.size,update:s.update}),this.panes.forEach((r,i)=>r.index=i),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[e]}),this.$emit("pane-add",{index:e,panes:this.panes.map(r=>({min:r.min,max:r.max,size:r.size}))})})},onPaneRemove(s){const e=this.panes.findIndex(n=>n.id===s._.uid),t=this.panes.splice(e,1)[0];this.panes.forEach((n,r)=>n.index=r),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...t,index:e}}),this.$emit("pane-remove",{removed:t,panes:this.panes.map(n=>({min:n.min,max:n.max,size:n.size}))})})},resetPaneSizes(s={}){!s.addedPane&&!s.removedPane?this.initialPanesSizing():this.panes.some(e=>e.givenSize!==null||e.min||e.max<100)?this.equalizeAfterAddOrRemove(s):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size})))},equalize(){const s=100/this.panesCount;let e=0;const t=[],n=[];this.panes.forEach(r=>{r.size=Math.max(Math.min(s,r.max),r.min),e-=r.size,r.size>=r.max&&t.push(r.id),r.size<=r.min&&n.push(r.id)}),e>.1&&this.readjustSizes(e,t,n)},initialPanesSizing(){let s=100;const e=[],t=[];let n=0;this.panes.forEach(i=>{s-=i.size,i.size!==null&&n++,i.size>=i.max&&e.push(i.id),i.size<=i.min&&t.push(i.id)});let r=100;s>.1&&(this.panes.forEach(i=>{i.size===null&&(i.size=Math.max(Math.min(s/(this.panesCount-n),i.max),i.min)),r-=i.size}),r>.1&&this.readjustSizes(s,e,t))},equalizeAfterAddOrRemove({addedPane:s,removedPane:e}={}){let t=100/this.panesCount,n=0;const r=[],i=[];s&&s.givenSize!==null&&(t=(100-s.givenSize)/(this.panesCount-1)),this.panes.forEach(o=>{n-=o.size,o.size>=o.max&&r.push(o.id),o.size<=o.min&&i.push(o.id)}),!(Math.abs(n)<.1)&&(this.panes.forEach(o=>{s&&s.givenSize!==null&&s.id===o.id||(o.size=Math.max(Math.min(t,o.max),o.min)),n-=o.size,o.size>=o.max&&r.push(o.id),o.size<=o.min&&i.push(o.id)}),n>.1&&this.readjustSizes(n,r,i))},readjustSizes(s,e,t){let n;s>0?n=s/(this.panesCount-e.length):n=s/(this.panesCount-t.length),this.panes.forEach((r,i)=>{if(s>0&&!e.includes(r.id)){const o=Math.max(Math.min(r.size+n,r.max),r.min),a=o-r.size;s-=a,r.size=o}else if(!t.includes(r.id)){const o=Math.max(Math.min(r.size+n,r.max),r.min),a=o-r.size;s-=a,r.size=o}r.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[r.id].size}%`})}),Math.abs(s)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(s){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((e,t)=>{e.ondblclick=s?n=>this.onSplitterDblClick(n,t):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return Rt("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},Td=(s,e)=>{const t=s.__vccOpts||s;for(const[n,r]of e)t[n]=r;return t},Sd={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(s){this.style=s}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(s){this.requestUpdate({target:this,size:s})},minSizeNumber(s){this.requestUpdate({target:this,min:s})},maxSizeNumber(s){this.requestUpdate({target:this,max:s})}}};function vd(s,e,t,n,r,i){return Se(),ke("div",{class:"splitpanes__pane",onClick:e[0]||(e[0]=o=>i.onPaneClick(o,s._.uid)),style:pn(s.style)},[Sl(s.$slots,"default")],4)}const yd=Td(Sd,[["render",vd]]);const Ed=Et({name:"GalsWeb",components:{BarraSuperior:qu,AreaCodigo:jo,Splitpanes:bd,Pane:yd,SimuladorJanela:Ch,BarraEsquerda:ud,ModalNovoArquivo:_d},setup(){const s=en();return{layout:_t(()=>s.layout)}},methods:{resizeLayout(s){this.layout.token=s[0].size,this.layout.simulacao=s[1].size,this.layout.saidaSimulacao=s[2].size}}});const wd={class:"contentor__geral"},kd={class:"contentor__esquerda"},Ad={class:"contentor__centro"},Cd={class:"contentor__centro__superior"},xd={class:"contentor__centro__inferior"};function Rd(s,e,t,n,r,i){const o=rt("ModalNovoArquivo"),a=rt("BarraSuperior"),l=rt("BarraEsquerda"),c=rt("AreaCodigo"),p=rt("pane"),h=rt("SimuladorJanela"),m=rt("splitpanes");return Se(),ke(Ye,null,[ge(o),ge(a),ne("div",wd,[ne("div",kd,[ge(l)]),ne("div",Ad,[ne("div",Cd,[ge(m,{horizontal:"",id:"splitpanesHorizontal",onResize:e[1]||(e[1]=d=>s.layout.gramatica=d[1].size)},{default:xt(()=>[ge(p,{size:100-s.layout.gramatica},{default:xt(()=>[ge(m,{vertival:"",onResize:e[0]||(e[0]=d=>s.resizeLayout(d))},{default:xt(()=>[ge(p,{size:s.layout.token},{default:xt(()=>[ge(c,{titulo:"Tokens"})]),_:1},8,["size"]),ge(p,{size:s.layout.simulacao},{default:xt(()=>[ge(c,{titulo:"Simulação"})]),_:1},8,["size"]),ge(p,{size:s.layout.saidaSimulacao},{default:xt(()=>[ge(h)]),_:1},8,["size"])]),_:1})]),_:1},8,["size"]),ge(p,{size:s.layout.gramatica},{default:xt(()=>[ge(c,{titulo:"Gramática"})]),_:1},8,["size"])]),_:1})]),ne("div",xd,[ge(c,{titulo:"Saída"})])])])],64)}const Nd=$t(Ed,[["render",Rd]]),Ko=wc(Nd);Ko.use(Cc());Ko.mount("#app");export{kr as g};
