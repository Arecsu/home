import{S as P,o as S,a as k,s as y,b as A,c as g,g as O,U as o,d as w,e as D,f as E,h as L,i as M,j as T,k as K,t as U,l as p,m as q,n as B,p as C,u as F,q as W,r as Y}from"./render.CQdo2hdn.js";function b(s,v=null,_){if(typeof s!="object"||s===null||P in s)return s;const c=L(s);if(c!==S&&c!==k)return s;var r=new Map,l=M(s),u=y(0);l&&r.set("length",y(s.length));var f;return new Proxy(s,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&A();var a=r.get(e);return a===void 0?(a=y(t.value),r.set(e,a)):g(a,b(t.value,f)),!0},deleteProperty(n,e){var t=r.get(e);if(t===void 0)e in n&&r.set(e,y(o));else{if(l&&typeof e=="string"){var a=r.get("length"),i=Number(e);Number.isInteger(i)&&i<a.v&&g(a,i)}g(t,o),j(u)}return!0},get(n,e,t){if(e===P)return s;var a=r.get(e),i=e in n;if(a===void 0&&(!i||O(n,e)?.writable)&&(a=y(b(i?n[e]:o,f)),r.set(e,a)),a!==void 0){var d=w(a);return d===o?void 0:d}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var a=r.get(e);a&&(t.value=w(a))}else if(t===void 0){var i=r.get(e),d=i?.v;if(i!==void 0&&d!==o)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(n,e){if(e===P)return!0;var t=r.get(e),a=t!==void 0&&t.v!==o||Reflect.has(n,e);if(t!==void 0||D!==null&&(!a||O(n,e)?.writable)){t===void 0&&(t=y(a?b(n[e],f):o),r.set(e,t));var i=w(t);if(i===o)return!1}return a},set(n,e,t,a){var i=r.get(e),d=e in n;if(l&&e==="length")for(var h=t;h<i.v;h+=1){var m=r.get(h+"");m!==void 0?g(m,o):h in n&&(m=y(o),r.set(h+"",m))}i===void 0?(!d||O(n,e)?.writable)&&(i=y(void 0),g(i,b(t,f)),r.set(e,i)):(d=i.v!==o,g(i,b(t,f)));var N=Reflect.getOwnPropertyDescriptor(n,e);if(N?.set&&N.set.call(a,t),!d){if(l&&typeof e=="string"){var R=r.get("length"),x=Number(e);Number.isInteger(x)&&x>=R.v&&g(R,x+1)}j(u)}return!0},ownKeys(n){w(u);var e=Reflect.ownKeys(n).filter(i=>{var d=r.get(i);return d===void 0||d.v!==o});for(var[t,a]of r)a.v!==o&&!(t in n)&&e.push(t);return e},setPrototypeOf(){E()}})}function j(s,v=1){g(s,s.v+v)}function $(s){return(v,..._)=>{var c=s(..._),r;if(q)r=B,C();else{var l=c.render().trim(),u=T(l);r=p(u),v.before(r)}const f=c.setup?.(r);K(r,r),typeof f=="function"&&U(f)}}const I=new WeakMap,G=s=>async(v,_,c,{client:r})=>{if(!s.hasAttribute("ssr"))return;let l,u,f={};for(const[e,t]of Object.entries(c))u??={},e==="default"?(u.default=!0,l=$(()=>({render:()=>`<astro-slot>${t}</astro-slot>`}))):u[e]=$(()=>({render:()=>`<astro-slot name="${e}">${t}</astro-slot>`})),e==="default"?f.children=$(()=>({render:()=>`<astro-slot>${t}</astro-slot>`})):f[e]=$(()=>({render:()=>`<astro-slot name="${e}">${t}</astro-slot>`}));const n={..._,children:l,$$slots:u,...f};if(I.has(s))I.get(s).setProps(n);else{const e=Z(v,s,n,r!=="only");I.set(s,e),s.addEventListener("astro:unmount",()=>e.destroy(),{once:!0})}};function Z(s,v,_,c){let r=b(_);const u=(c?W:Y)(s,{target:v,props:r});return{setProps(f){Object.assign(r,f);for(const n in r)n in f||delete r[n]},destroy(){F(u)}}}export{G as default};