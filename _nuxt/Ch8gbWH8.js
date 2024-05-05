import{b as O,c as S,e as M,a0 as j,k as H,aA as L,a1 as k,r as D,o as R,$ as V,a5 as Z,a3 as C,F as U,d as I,m as B,g,w as x,E as _,j as K,t as W,I as G,ax as q}from"./BQ-N0u34.js";import{c as X}from"./BnEwnAMF.js";function Y(e,t){return O(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})])}const z="data-n-ids",J="-";function Ae(e){var o,i,a,s,p,u;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const t=H(),n=L();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");t._id||(t._id=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(o=n._nuxtIdIndex)[e]||(o[e]=0);const r=e+J+n._nuxtIdIndex[e]++;if(t.payload.serverRendered&&t.isHydrating&&!j(X,!1)){const h=((i=n.vnode.el)==null?void 0:i.nodeType)===8&&((s=(a=n.vnode.el)==null?void 0:a.nextElementSibling)!=null&&s.getAttribute)?(p=n.vnode.el)==null?void 0:p.nextElementSibling:n.vnode.el,c=JSON.parse(((u=h==null?void 0:h.getAttribute)==null?void 0:u.call(h,z))||"{}");if(c[r])return c[r]}return e+"_"+t._id++}let $=Symbol("headlessui.useid"),Q=0;function Ne(){return j($,()=>`${++Q}`)()}function Oe(e){k($,e)}function v(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function E(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}var ee=Object.defineProperty,te=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t,n)=>(te(e,typeof t!="symbol"?t+"":t,n),n);let ne=class{constructor(){A(this,"current",this.detect()),A(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},re=new ne;function oe(e){if(re.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=v(e);if(t)return t.ownerDocument}return document}let y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ie=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ie||{}),ae=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ae||{}),se=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(se||{});function ue(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(y)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var le=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(le||{});function je(e,t=0){var n;return e===((n=oe(e))==null?void 0:n.body)?!1:E(t,{0(){return e.matches(y)},1(){let r=e;for(;r!==null;){if(r.matches(y))return!0;r=r.parentElement}return!1}})}var ce=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ce||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let de=["textarea","input"].join(",");function fe(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,de))!=null?n:!1}function pe(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),i=t(r);if(o===null||i===null)return 0;let a=o.compareDocumentPosition(i);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ie(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var i;let a=(i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?i:document,s=Array.isArray(e)?n?pe(e):e:ue(e);o.length>0&&s.length>1&&(s=s.filter(l=>!o.includes(l))),r=r??a.activeElement;let p=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(r))-1;if(t&4)return Math.max(0,s.indexOf(r))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=t&32?{preventScroll:!0}:{},c=0,m=s.length,f;do{if(c>=m||c+m<=0)return 0;let l=u+c;if(t&16)l=(l+m)%m;else{if(l<0)return 3;if(l>=m)return 1}f=s[l],f==null||f.focus(h),c+=p}while(f!==a.activeElement);return t&6&&fe(f)&&f.select(),2}function N(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function $e(e,t){let n=D(N(e.value.type,e.value.as));return R(()=>{n.value=N(e.value.type,e.value.as)}),V(()=>{var r;n.value||v(t)&&v(t)instanceof HTMLButtonElement&&!((r=v(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var he=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(he||{}),me=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(me||{});function ve({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var i;let a=T(r,n),s=Object.assign(o,{props:a});if(e||t&2&&a.static)return w(s);if(t&1){let p=(i=a.unmount)==null||i?0:1;return E(p,{0(){return null},1(){return w({...o,props:{...a,hidden:!0,style:{display:"none"}}})}})}return w(s)}function w({props:e,attrs:t,slots:n,slot:r,name:o}){var i,a;let{as:s,...p}=be(e,["unmount","static"]),u=(i=n.default)==null?void 0:i.call(n,r),h={};if(r){let c=!1,m=[];for(let[f,l]of Object.entries(r))typeof l=="boolean"&&(c=!0),l===!0&&m.push(f);c&&(h["data-headlessui-state"]=m.join(" "))}if(s==="template"){if(u=P(u??[]),Object.keys(p).length>0||Object.keys(t).length>0){let[c,...m]=u??[];if(!ge(c)||m.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(t)).map(d=>d.trim()).filter((d,b,F)=>F.indexOf(d)===b).sort((d,b)=>d.localeCompare(b)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let f=T((a=c.props)!=null?a:{},p,h),l=Z(c,f,!0);for(let d in f)d.startsWith("on")&&(l.props||(l.props={}),l.props[d]=f[d]);return l}return Array.isArray(u)&&u.length===1?u[0]:u}return C(s,Object.assign({},p,h),{default:()=>u})}function P(e){return e.flatMap(t=>t.type===U?P(t.children):[t])}function T(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let a=n[r];for(let s of a){if(o instanceof Event&&o.defaultPrevented)return;s(o,...i)}}});return t}function Pe(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function be(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function ge(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var we=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(we||{});let Te=I({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var r;let{features:o,...i}=e,a={"aria-hidden":(o&2)===2?!0:(r=i["aria-hidden"])!=null?r:void 0,hidden:(o&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return ve({ourProps:a,theirProps:i,slot:{},attrs:n,slots:t,name:"Hidden"})}}});var ye=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ye||{});function Fe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}const Ee={class:"flex gap-4 sm:gap-2"},Me=I({__name:"MeetingButton",setup(e){const t=B().public.meetingLink;return(n,r)=>{const o=G,i=q;return O(),S("div",Ee,[g(i,null,{default:x(()=>[g(o,{class:"font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200",to:_(t)},{default:x(()=>[K(W(n.$t("home.hero.meeting"))+" ",1),g(_(Y),{class:"size-5 text-white/80"})]),_:1},8,["to"])]),_:1})])}}});export{ve as A,Pe as E,Ne as I,he as N,pe as O,Ie as P,be as T,Me as _,we as a,ye as b,re as c,Ae as d,ae as e,Te as f,ie as g,le as h,oe as i,Oe as l,v as o,$e as s,Fe as t,E as u,je as w};