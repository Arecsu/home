let f;const k=()=>{const e=f.querySelector(".email"),t=f.querySelector(".copy-email");navigator.clipboard.writeText(e.dataset.emailDecoded),t.disabled=!0,t.querySelector(".copy-text").style.visibility="hidden",t.querySelector(".copied-text").style.visibility="visible",setTimeout(()=>{t.disabled=!1,t.querySelector(".copy-text").style.visibility="visible",t.querySelector(".copied-text").style.visibility="hidden"},500)};document.addEventListener("astro:page-load",()=>{f=document.querySelector(".email-dialog"),f.init=()=>{f.querySelector(".copy-email").addEventListener("click",k);const e=f.querySelector(".email"),t=f.querySelector(".send-mail");e.dataset.emailDecoded||(e.dataset.emailDecoded=atob(atob(e.dataset.email.toString())),e.textContent=e.dataset.emailDecoded),t.href="mailto:"+e.dataset.emailDecoded,f.showModal()},f.addEventListener("click",e=>{e.target===f&&(f.close(),f.querySelector(".copy-email").removeEventListener("click",k))})});document.addEventListener("astro:before-preparation",()=>{f.querySelector(".copy-email").removeEventListener("click",k)});const g="data-astro-transition-persist";function Z(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ee(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function te(e){for(const t of Array.from(document.head.children)){const n=re(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ne(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${g}]`)){const o=n.getAttribute(g),r=e.querySelector(`[${g}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ie(n)&&!se(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const oe=()=>{const e=document.activeElement;if(e?.closest(`[${g}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>D({activeElement:e,start:t,end:n})}return()=>D({activeElement:e})}else return()=>D({activeElement:null})},D=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},re=(e,t)=>{const n=e.getAttribute(g),o=n&&t.head.querySelector(`[${g}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ie=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},se=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),ae=e=>{Z(e),ee(e),te(e);const t=oe();ne(e.body,document.body),t()},ce="astro:before-preparation",le="astro:after-preparation",ue="astro:before-swap",de="astro:after-swap",fe=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,u,a,l,d,c){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class me extends U{formData;loader;constructor(t,n,o,r,s,u,a,l,d,c){super(ce,{cancelable:!0},t,n,o,r,s,u,a,l),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class he extends U{direction;viewTransition;swap;constructor(t,n){super(ue,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>ae(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function pe(e,t,n,o,r,s,u,a,l){const d=new me(e,t,n,o,r,s,window.document,u,a,l);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(fe(le),d.navigationType!=="traverse"&&I({scrollX,scrollY}))),d}function ye(e,t){const n=new he(e,t);return document.dispatchEvent(n),n.swap(),n}const be=history.pushState.bind(history),E=history.replaceState.bind(history),I=e=>{history.state&&(history.scrollRestoration="manual",E({...history.state,...e},""))},q=!!document.startViewTransition,M=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),B=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let m,b,S;const V=e=>document.dispatchEvent(new Event(e)),W=()=>V("astro:page-load"),we=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},H="data-astro-transition-persist",O="data-astro-transition",x="data-astro-transition-fallback";let C,v=0;history.state?(v=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):M()&&(E({index:v,scrollX,scrollY},""),history.scrollRestoration="manual");async function ge(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ve(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const K=(e,t,n,o,r)=>{const s=B(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;E({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else be({...n.state,index:++v,scrollX:0,scrollY:0},"",e.href);if(document.title=u,S=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(E(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Te(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${H}="${n.getAttribute(H)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function F(e,t,n,o,r){async function s(l){function d(p){const h=p.effect;return!h||!(h instanceof KeyframeEffect)||!h.target?!1:window.getComputedStyle(h.target,h.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(x,l);const y=document.getAnimations().filter(p=>!c.includes(p)&&!d(p));return Promise.allSettled(y.map(p=>p.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const u=document.title,a=ye(e,n.viewTransition);K(a.to,a.from,t,u,o),V(de),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Ee(){return m?.controller.abort(),m={controller:new AbortController}}async function G(e,t,n,o,r){const s=Ee();if(!M()||location.origin!==n.origin){s===m&&(m=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&I({scrollX,scrollY}),B(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){K(n,t,o,document.title,r),s===m&&(m=void 0);return}const a=await pe(t,n,e,u,o.sourceElement,o.info,s.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){s===m&&(m=void 0),a.signal.aborted||(location.href=n.href);return}async function l(i){const y=i.to.href,p={signal:i.signal};if(i.formData){p.method="POST";const w=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");p.body=w?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const h=await ge(y,p);if(h===null){i.preventDefault();return}if(h.redirected){const w=new URL(h.redirected);if(w.origin!==i.to.origin){i.preventDefault();return}i.to=w}if(C??=new DOMParser,i.newDocument=C.parseFromString(h.html,h.mediaType),i.newDocument.querySelectorAll("noscript").forEach(w=>w.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const R=Te(i.newDocument);R.length&&!i.signal.aborted&&await Promise.all(R)}async function d(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}const c=await d();if(a.signal.aborted){s===m&&(m=void 0);return}if(document.documentElement.setAttribute(O,a.direction),q)c.viewTransition=document.startViewTransition(async()=>await F(a,o,c,r));else{const i=(async()=>{await Promise.resolve(),await F(a,o,c,r,j())})();c.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(y=>c.viewTransitionFinished=y),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(x)}}}c.viewTransition.updateCallbackDone.finally(async()=>{await ve(),W(),we()}),c.viewTransition.finished.finally(()=>{c.viewTransition=void 0,c===b&&(b=void 0),s===m&&(m=void 0),document.documentElement.removeAttribute(O),document.documentElement.removeAttribute(x)});try{await c.viewTransition.updateCallbackDone}catch(i){const y=i;console.log("[astro]",y.name,y.message,y.stack)}}async function X(e,t){await G("forward",S,new URL(e,location.href),t??{})}function Ae(e){if(!M()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>v?"forward":"back";v=n,G(o,S,new URL(location.href),{},t)}const Y=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&I({scrollX,scrollY})};{if(q||j()!=="none")if(S=new URL(location.href),addEventListener("popstate",Ae),addEventListener("load",W),"onscrollend"in window)addEventListener("scrollend",Y);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,Y();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const z=new Set,A=new WeakSet;let P,J,_=!1;function Se(e){_||(_=!0,P??=e?.prefetchAll,J??=e?.defaultStrategy??"hover",Le(),Re(),De(),xe())}function Le(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{T(t.target,"tap")&&L(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Re(){let e;document.body.addEventListener("focusin",o=>{T(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const o of document.getElementsByTagName("a"))A.has(o)||T(o,"hover")&&(A.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{L(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function De(){let e;N(()=>{for(const t of document.getElementsByTagName("a"))A.has(t)||T(t,"viewport")&&(A.add(t),e??=ke(),e.observe(t))})}function ke(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),L(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function xe(){N(()=>{for(const e of document.getElementsByTagName("a"))T(e,"load")&&L(e.href)})}function L(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(Pe(e,n))if(z.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function Pe(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!z.has(e)}catch{}return!1}function T(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||P)&&Q()?!0:n==null&&P||n===""?t===J:n===t}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function N(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ie(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function $(e){return e.dataset.astroReload!==void 0}(q||Ie()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;$(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),X(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||$(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const l=o?.getAttribute("formmethod")??u??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(l==="get"){const c=new URLSearchParams(r),i=new URL(a);i.search=c.toString(),a=i.toString()}else d.formData=r;e.preventDefault(),X(a,d)}),Se({prefetchAll:!0}));
