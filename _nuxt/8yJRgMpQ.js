import{_ as ut}from"./D9fe3iX8.js";import{aC as Ct,r as ye,o as kt,$ as jt,aD as Ge,l as $t,a6 as Bt,a7 as Qe,d as Tt,aa as Mt,ab as Je,Q as Lt,ac as Rt,b as J,c as ne,C as Ze,j as Pe,n as oe,g as St,w as _e,e as Ce,f as ke,t as et,F as Wt,H as Ht,B as Nt,aj as tt,T as Vt}from"./BQ-N0u34.js";const Ft={wrapper:"relative inline-flex",container:"z-20 group",width:"max-w-xs",background:"bg-white dark:bg-gray-900",color:"text-gray-900 dark:text-white",shadow:"shadow",rounded:"rounded",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5",middot:"mx-1 text-gray-700 dark:text-gray-200",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...Ct,base:"[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2"}};function T(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function G(e){var t=T(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=T(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Te(e){if(typeof ShadowRoot>"u")return!1;var t=T(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var K=Math.max,we=Math.min,Z=Math.round;function $e(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function lt(){return!/^((?!chrome|android).)*safari/i.test($e())}function _(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),n=1,s=1;t&&M(e)&&(n=e.offsetWidth>0&&Z(a.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Z(a.height)/e.offsetHeight||1);var f=G(e)?T(e):window,o=f.visualViewport,i=!lt()&&r,l=(a.left+(i&&o?o.offsetLeft:0))/n,u=(a.top+(i&&o?o.offsetTop:0))/s,m=a.width/n,h=a.height/s;return{width:m,height:h,top:u,right:l+m,bottom:u+h,left:l,x:l,y:u}}function Me(e){var t=T(e),r=t.pageXOffset,a=t.pageYOffset;return{scrollLeft:r,scrollTop:a}}function zt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function qt(e){return e===T(e)||!M(e)?Me(e):zt(e)}function N(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){return((G(e)?e.ownerDocument:e.document)||window.document).documentElement}function Le(e){return _(z(e)).left+Me(e).scrollLeft}function V(e){return T(e).getComputedStyle(e)}function Re(e){var t=V(e),r=t.overflow,a=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+a)}function Ut(e){var t=e.getBoundingClientRect(),r=Z(t.width)/e.offsetWidth||1,a=Z(t.height)/e.offsetHeight||1;return r!==1||a!==1}function Xt(e,t,r){r===void 0&&(r=!1);var a=M(t),n=M(t)&&Ut(t),s=z(t),f=_(e,n,r),o={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(a||!a&&!r)&&((N(t)!=="body"||Re(s))&&(o=qt(t)),M(t)?(i=_(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):s&&(i.x=Le(s))),{x:f.left+o.scrollLeft-i.x,y:f.top+o.scrollTop-i.y,width:f.width,height:f.height}}function Se(e){var t=_(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function xe(e){return N(e)==="html"?e:e.assignedSlot||e.parentNode||(Te(e)?e.host:null)||z(e)}function pt(e){return["html","body","#document"].indexOf(N(e))>=0?e.ownerDocument.body:M(e)&&Re(e)?e:pt(xe(e))}function se(e,t){var r;t===void 0&&(t=[]);var a=pt(e),n=a===((r=e.ownerDocument)==null?void 0:r.body),s=T(a),f=n?[s].concat(s.visualViewport||[],Re(a)?a:[]):a,o=t.concat(f);return n?o:o.concat(se(xe(f)))}function It(e){return["table","td","th"].indexOf(N(e))>=0}function rt(e){return!M(e)||V(e).position==="fixed"?null:e.offsetParent}function Yt(e){var t=/firefox/i.test($e()),r=/Trident/i.test($e());if(r&&M(e)){var a=V(e);if(a.position==="fixed")return null}var n=xe(e);for(Te(n)&&(n=n.host);M(n)&&["html","body"].indexOf(N(n))<0;){var s=V(n);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return n;n=n.parentNode}return null}function le(e){for(var t=T(e),r=rt(e);r&&It(r)&&V(r).position==="static";)r=rt(r);return r&&(N(r)==="html"||N(r)==="body"&&V(r).position==="static")?t:r||Yt(e)||t}var $="top",S="bottom",W="right",B="left",We="auto",pe=[$,S,W,B],ee="start",ue="end",Kt="clippingParents",ct="viewport",ie="popper",Gt="reference",at=pe.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+ue])},[]),vt=[].concat(pe,[We]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+ue])},[]),Qt="beforeRead",Jt="read",Zt="afterRead",_t="beforeMain",er="main",tr="afterMain",rr="beforeWrite",ar="write",nr="afterWrite",or=[Qt,Jt,Zt,_t,er,tr,rr,ar,nr];function ir(e){var t=new Map,r=new Set,a=[];e.forEach(function(s){t.set(s.name,s)});function n(s){r.add(s.name);var f=[].concat(s.requires||[],s.requiresIfExists||[]);f.forEach(function(o){if(!r.has(o)){var i=t.get(o);i&&n(i)}}),a.push(s)}return e.forEach(function(s){r.has(s.name)||n(s)}),a}function sr(e){var t=ir(e);return or.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}function fr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function ur(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}function lr(e,t){var r=T(e),a=z(e),n=r.visualViewport,s=a.clientWidth,f=a.clientHeight,o=0,i=0;if(n){s=n.width,f=n.height;var l=lt();(l||!l&&t==="fixed")&&(o=n.offsetLeft,i=n.offsetTop)}return{width:s,height:f,x:o+Le(e),y:i}}function pr(e){var t,r=z(e),a=Me(e),n=(t=e.ownerDocument)==null?void 0:t.body,s=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),f=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),o=-a.scrollLeft+Le(e),i=-a.scrollTop;return V(n||r).direction==="rtl"&&(o+=K(r.clientWidth,n?n.clientWidth:0)-s),{width:s,height:f,x:o,y:i}}function dt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Te(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function Be(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function cr(e,t){var r=_(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function nt(e,t,r){return t===ct?Be(lr(e,r)):G(t)?cr(t,r):Be(pr(z(e)))}function vr(e){var t=se(xe(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,a=r&&M(e)?le(e):e;return G(a)?t.filter(function(n){return G(n)&&dt(n,a)&&N(n)!=="body"}):[]}function dr(e,t,r,a){var n=t==="clippingParents"?vr(e):[].concat(t),s=[].concat(n,[r]),f=s[0],o=s.reduce(function(i,l){var u=nt(e,l,a);return i.top=K(u.top,i.top),i.right=we(u.right,i.right),i.bottom=we(u.bottom,i.bottom),i.left=K(u.left,i.left),i},nt(e,f,a));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function H(e){return e.split("-")[0]}function te(e){return e.split("-")[1]}function He(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function mt(e){var t=e.reference,r=e.element,a=e.placement,n=a?H(a):null,s=a?te(a):null,f=t.x+t.width/2-r.width/2,o=t.y+t.height/2-r.height/2,i;switch(n){case $:i={x:f,y:t.y-r.height};break;case S:i={x:f,y:t.y+t.height};break;case W:i={x:t.x+t.width,y:o};break;case B:i={x:t.x-r.width,y:o};break;default:i={x:t.x,y:t.y}}var l=n?He(n):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case ee:i[l]=i[l]-(t[u]/2-r[u]/2);break;case ue:i[l]=i[l]+(t[u]/2-r[u]/2);break}}return i}function ht(){return{top:0,right:0,bottom:0,left:0}}function gt(e){return Object.assign({},ht(),e)}function yt(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}function Ne(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=a===void 0?e.placement:a,s=r.strategy,f=s===void 0?e.strategy:s,o=r.boundary,i=o===void 0?Kt:o,l=r.rootBoundary,u=l===void 0?ct:l,m=r.elementContext,h=m===void 0?ie:m,p=r.altBoundary,g=p===void 0?!1:p,d=r.padding,v=d===void 0?0:d,y=gt(typeof v!="number"?v:yt(v,pe)),x=h===ie?Gt:ie,A=e.rects.popper,c=e.elements[g?x:h],b=dr(G(c)?c:c.contextElement||z(e.elements.popper),i,u,f),w=_(e.elements.reference),O=mt({reference:w,element:A,strategy:"absolute",placement:n}),P=Be(Object.assign({},A,O)),D=h===ie?P:w,E={top:b.top-D.top+y.top,bottom:D.bottom-b.bottom+y.bottom,left:b.left-D.left+y.left,right:D.right-b.right+y.right},C=e.modifiersData.offset;if(h===ie&&C){var L=C[n];Object.keys(E).forEach(function(k){var q=[W,S].indexOf(k)>=0?1:-1,U=[$,S].indexOf(k)>=0?"y":"x";E[k]+=L[U]*q})}return E}var ot={placement:"bottom",modifiers:[],strategy:"absolute"};function it(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function mr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,a=r===void 0?[]:r,n=t.defaultOptions,s=n===void 0?ot:n;return function(o,i,l){l===void 0&&(l=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},ot,s),modifiersData:{},elements:{reference:o,popper:i},attributes:{},styles:{}},m=[],h=!1,p={state:u,setOptions:function(y){var x=typeof y=="function"?y(u.options):y;d(),u.options=Object.assign({},s,u.options,x),u.scrollParents={reference:G(o)?se(o):o.contextElement?se(o.contextElement):[],popper:se(i)};var A=sr(ur([].concat(a,u.options.modifiers)));return u.orderedModifiers=A.filter(function(c){return c.enabled}),g(),p.update()},forceUpdate:function(){if(!h){var y=u.elements,x=y.reference,A=y.popper;if(it(x,A)){u.rects={reference:Xt(x,le(A),u.options.strategy==="fixed"),popper:Se(A)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var c=0;c<u.orderedModifiers.length;c++){if(u.reset===!0){u.reset=!1,c=-1;continue}var b=u.orderedModifiers[c],w=b.fn,O=b.options,P=O===void 0?{}:O,D=b.name;typeof w=="function"&&(u=w({state:u,options:P,name:D,instance:p})||u)}}}},update:fr(function(){return new Promise(function(v){p.forceUpdate(),v(u)})}),destroy:function(){d(),h=!0}};if(!it(o,i))return p;p.setOptions(l).then(function(v){!h&&l.onFirstUpdate&&l.onFirstUpdate(v)});function g(){u.orderedModifiers.forEach(function(v){var y=v.name,x=v.options,A=x===void 0?{}:x,c=v.effect;if(typeof c=="function"){var b=c({state:u,name:y,instance:p,options:A}),w=function(){};m.push(b||w)}})}function d(){m.forEach(function(v){return v()}),m=[]}return p}}var ge={passive:!0};function hr(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,s=n===void 0?!0:n,f=a.resize,o=f===void 0?!0:f,i=T(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",r.update,ge)}),o&&i.addEventListener("resize",r.update,ge),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",r.update,ge)}),o&&i.removeEventListener("resize",r.update,ge)}}const bt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:hr,data:{}};function gr(e){var t=e.state,r=e.name;t.modifiersData[r]=mt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const yr={name:"popperOffsets",enabled:!0,phase:"read",fn:gr,data:{}};var br={top:"auto",right:"auto",bottom:"auto",left:"auto"};function wr(e,t){var r=e.x,a=e.y,n=t.devicePixelRatio||1;return{x:Z(r*n)/n||0,y:Z(a*n)/n||0}}function st(e){var t,r=e.popper,a=e.popperRect,n=e.placement,s=e.variation,f=e.offsets,o=e.position,i=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,m=e.isFixed,h=f.x,p=h===void 0?0:h,g=f.y,d=g===void 0?0:g,v=typeof u=="function"?u({x:p,y:d}):{x:p,y:d};p=v.x,d=v.y;var y=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),A=B,c=$,b=window;if(l){var w=le(r),O="clientHeight",P="clientWidth";if(w===T(r)&&(w=z(r),V(w).position!=="static"&&o==="absolute"&&(O="scrollHeight",P="scrollWidth")),w=w,n===$||(n===B||n===W)&&s===ue){c=S;var D=m&&w===b&&b.visualViewport?b.visualViewport.height:w[O];d-=D-a.height,d*=i?1:-1}if(n===B||(n===$||n===S)&&s===ue){A=W;var E=m&&w===b&&b.visualViewport?b.visualViewport.width:w[P];p-=E-a.width,p*=i?1:-1}}var C=Object.assign({position:o},l&&br),L=u===!0?wr({x:p,y:d},T(r)):{x:p,y:d};if(p=L.x,d=L.y,i){var k;return Object.assign({},C,(k={},k[c]=x?"0":"",k[A]=y?"0":"",k.transform=(b.devicePixelRatio||1)<=1?"translate("+p+"px, "+d+"px)":"translate3d("+p+"px, "+d+"px, 0)",k))}return Object.assign({},C,(t={},t[c]=x?d+"px":"",t[A]=y?p+"px":"",t.transform="",t))}function xr(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=a===void 0?!0:a,s=r.adaptive,f=s===void 0?!0:s,o=r.roundOffsets,i=o===void 0?!0:o,l={placement:H(t.placement),variation:te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,st(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,st(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const wt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:xr,data:{}};function Or(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},s=t.elements[r];!M(s)||!N(s)||(Object.assign(s.style,a),Object.keys(n).forEach(function(f){var o=n[f];o===!1?s.removeAttribute(f):s.setAttribute(f,o===!0?"":o)}))})}function Ar(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],s=t.attributes[a]||{},f=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]),o=f.reduce(function(i,l){return i[l]="",i},{});!M(n)||!N(n)||(Object.assign(n.style,o),Object.keys(s).forEach(function(i){n.removeAttribute(i)}))})}}const Er={name:"applyStyles",enabled:!0,phase:"write",fn:Or,effect:Ar,requires:["computeStyles"]};var Dr=[bt,yr,wt,Er],Pr={left:"right",right:"left",bottom:"top",top:"bottom"};function be(e){return e.replace(/left|right|bottom|top/g,function(t){return Pr[t]})}var Cr={start:"end",end:"start"};function ft(e){return e.replace(/start|end/g,function(t){return Cr[t]})}function kr(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=r.boundary,s=r.rootBoundary,f=r.padding,o=r.flipVariations,i=r.allowedAutoPlacements,l=i===void 0?vt:i,u=te(a),m=u?o?at:at.filter(function(g){return te(g)===u}):pe,h=m.filter(function(g){return l.indexOf(g)>=0});h.length===0&&(h=m);var p=h.reduce(function(g,d){return g[d]=Ne(e,{placement:d,boundary:n,rootBoundary:s,padding:f})[H(d)],g},{});return Object.keys(p).sort(function(g,d){return p[g]-p[d]})}function jr(e){if(H(e)===We)return[];var t=be(e);return[ft(e),t,ft(t)]}function $r(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,s=n===void 0?!0:n,f=r.altAxis,o=f===void 0?!0:f,i=r.fallbackPlacements,l=r.padding,u=r.boundary,m=r.rootBoundary,h=r.altBoundary,p=r.flipVariations,g=p===void 0?!0:p,d=r.allowedAutoPlacements,v=t.options.placement,y=H(v),x=y===v,A=i||(x||!g?[be(v)]:jr(v)),c=[v].concat(A).reduce(function(Q,F){return Q.concat(H(F)===We?kr(t,{placement:F,boundary:u,rootBoundary:m,padding:l,flipVariations:g,allowedAutoPlacements:d}):F)},[]),b=t.rects.reference,w=t.rects.popper,O=new Map,P=!0,D=c[0],E=0;E<c.length;E++){var C=c[E],L=H(C),k=te(C)===ee,q=[$,S].indexOf(L)>=0,U=q?"width":"height",j=Ne(t,{placement:C,boundary:u,rootBoundary:m,altBoundary:h,padding:l}),R=q?k?W:B:k?S:$;b[U]>w[U]&&(R=be(R));var ce=be(R),X=[];if(s&&X.push(j[L]<=0),o&&X.push(j[R]<=0,j[ce]<=0),X.every(function(Q){return Q})){D=C,P=!1;break}O.set(C,X)}if(P)for(var ve=g?3:1,Oe=function(F){var ae=c.find(function(me){var I=O.get(me);if(I)return I.slice(0,F).every(function(Ae){return Ae})});if(ae)return D=ae,"break"},re=ve;re>0;re--){var de=Oe(re);if(de==="break")break}t.placement!==D&&(t.modifiersData[a]._skip=!0,t.placement=D,t.reset=!0)}}const Br={name:"flip",enabled:!0,phase:"main",fn:$r,requiresIfExists:["offset"],data:{_skip:!1}};function Tr(e,t,r){var a=H(e),n=[B,$].indexOf(a)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=s[0],o=s[1];return f=f||0,o=(o||0)*n,[B,W].indexOf(a)>=0?{x:o,y:f}:{x:f,y:o}}function Mr(e){var t=e.state,r=e.options,a=e.name,n=r.offset,s=n===void 0?[0,0]:n,f=vt.reduce(function(u,m){return u[m]=Tr(m,t.rects,s),u},{}),o=f[t.placement],i=o.x,l=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=l),t.modifiersData[a]=f}const Lr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Mr};function Rr(e){return e==="x"?"y":"x"}function fe(e,t,r){return K(e,we(t,r))}function Sr(e,t,r){var a=fe(e,t,r);return a>r?r:a}function Wr(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,s=n===void 0?!0:n,f=r.altAxis,o=f===void 0?!1:f,i=r.boundary,l=r.rootBoundary,u=r.altBoundary,m=r.padding,h=r.tether,p=h===void 0?!0:h,g=r.tetherOffset,d=g===void 0?0:g,v=Ne(t,{boundary:i,rootBoundary:l,padding:m,altBoundary:u}),y=H(t.placement),x=te(t.placement),A=!x,c=He(y),b=Rr(c),w=t.modifiersData.popperOffsets,O=t.rects.reference,P=t.rects.popper,D=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,E=typeof D=="number"?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(w){if(s){var k,q=c==="y"?$:B,U=c==="y"?S:W,j=c==="y"?"height":"width",R=w[c],ce=R+v[q],X=R-v[U],ve=p?-P[j]/2:0,Oe=x===ee?O[j]:P[j],re=x===ee?-P[j]:-O[j],de=t.elements.arrow,Q=p&&de?Se(de):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ht(),ae=F[q],me=F[U],I=fe(0,O[j],Q[j]),Ae=A?O[j]/2-ve-I-ae-E.mainAxis:Oe-I-ae-E.mainAxis,xt=A?-O[j]/2+ve+I+me+E.mainAxis:re+I+me+E.mainAxis,Ee=t.elements.arrow&&le(t.elements.arrow),Ot=Ee?c==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,Ve=(k=C==null?void 0:C[c])!=null?k:0,At=R+Ae-Ve-Ot,Et=R+xt-Ve,Fe=fe(p?we(ce,At):ce,R,p?K(X,Et):X);w[c]=Fe,L[c]=Fe-R}if(o){var ze,Dt=c==="x"?$:B,Pt=c==="x"?S:W,Y=w[b],he=b==="y"?"height":"width",qe=Y+v[Dt],Ue=Y-v[Pt],De=[$,B].indexOf(y)!==-1,Xe=(ze=C==null?void 0:C[b])!=null?ze:0,Ie=De?qe:Y-O[he]-P[he]-Xe+E.altAxis,Ye=De?Y+O[he]+P[he]-Xe-E.altAxis:Ue,Ke=p&&De?Sr(Ie,Y,Ye):fe(p?Ie:qe,Y,p?Ye:Ue);w[b]=Ke,L[b]=Ke-Y}t.modifiersData[a]=L}}const Hr={name:"preventOverflow",enabled:!0,phase:"main",fn:Wr,requiresIfExists:["offset"]};var Nr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,gt(typeof t!="number"?t:yt(t,pe))};function Vr(e){var t,r=e.state,a=e.name,n=e.options,s=r.elements.arrow,f=r.modifiersData.popperOffsets,o=H(r.placement),i=He(o),l=[B,W].indexOf(o)>=0,u=l?"height":"width";if(!(!s||!f)){var m=Nr(n.padding,r),h=Se(s),p=i==="y"?$:B,g=i==="y"?S:W,d=r.rects.reference[u]+r.rects.reference[i]-f[i]-r.rects.popper[u],v=f[i]-r.rects.reference[i],y=le(s),x=y?i==="y"?y.clientHeight||0:y.clientWidth||0:0,A=d/2-v/2,c=m[p],b=x-h[u]-m[g],w=x/2-h[u]/2+A,O=fe(c,w,b),P=i;r.modifiersData[a]=(t={},t[P]=O,t.centerOffset=O-w,t)}}function Fr(e){var t=e.state,r=e.options,a=r.element,n=a===void 0?"[data-popper-arrow]":a;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||dt(t.elements.popper,n)&&(t.elements.arrow=n))}const zr={name:"arrow",enabled:!0,phase:"main",fn:Vr,effect:Fr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},qr=mr({defaultModifiers:[...Dr,Lr,Br,Hr,wt,bt,zr]});function Ur({locked:e=!1,overflowPadding:t=8,offsetDistance:r=8,offsetSkid:a=0,gpuAcceleration:n=!0,adaptive:s=!0,scroll:f=!0,resize:o=!0,arrow:i=!1,placement:l,strategy:u},m){const h=ye(null),p=ye(null),g=ye(null);return kt(()=>{jt(d=>{if(!p.value||!h.value&&!(m!=null&&m.value))return;const v=Ge(p),y=Ge(h);if(!(v instanceof HTMLElement)||!y)return;const x={modifiers:[{name:"flip",enabled:!e},{name:"preventOverflow",options:{padding:t}},{name:"offset",options:{offset:[a,r]}},{name:"computeStyles",options:{adaptive:s,gpuAcceleration:n}},{name:"eventListeners",options:{scroll:f,resize:o}},{name:"arrow",enabled:i}]};l&&(x.placement=l),u&&(x.strategy=u),g.value=qr(y,v,x),d(g.value.destroy)})}),[h,p,g]}const je=Bt(Qe.ui.strategy,Qe.ui.tooltip,Ft),Xr=Tt({components:{UKbd:ut},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>je.default.openDelay},closeDelay:{type:Number,default:()=>je.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:r}=Mt("tooltip",Je(e,"ui"),je,Je(e,"class")),a=Lt(()=>Rt({},e.popper,t.value.popper)),[n,s]=Ur(a.value),f=ye(!1);let o=null,i=null;function l(){i&&(clearTimeout(i),i=null),!f.value&&(o=o||setTimeout(()=>{f.value=!0,o=null},e.openDelay))}function u(){o&&(clearTimeout(o),o=null),f.value&&(i=i||setTimeout(()=>{f.value=!1,i=null},e.closeDelay))}return{ui:t,attrs:r,popper:a,trigger:n,container:s,open:f,onMouseEnter:l,onMouseLeave:u}}});function Ir(e,t,r,a,n,s){const f=ut;return J(),ne("div",tt({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:t[0]||(t[0]=(...o)=>e.onMouseEnter&&e.onMouseEnter(...o)),onMouseleave:t[1]||(t[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[Ze(e.$slots,"default",{open:e.open},()=>[Pe(" Hover ")]),e.open&&!e.prevent?(J(),ne("div",{key:0,ref:"container",class:oe([e.ui.container,e.ui.width])},[St(Vt,tt({appear:""},e.ui.transition),{default:_e(()=>{var o;return[Ce("div",null,[e.popper.arrow?(J(),ne("div",{key:0,"data-popper-arrow":"",class:oe(Object.values(e.ui.arrow))},null,2)):ke("",!0),Ce("div",{class:oe([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[Ze(e.$slots,"text",{},()=>[Pe(et(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(J(),ne("span",{key:0,class:oe(e.ui.shortcuts)},[Ce("span",{class:oe(e.ui.middot)},"·",2),(J(!0),ne(Wt,null,Ht(e.shortcuts,i=>(J(),Nt(f,{key:i,size:"xs"},{default:_e(()=>[Pe(et(i),1)]),_:2},1024))),128))],2)):ke("",!0)],2)])]}),_:3},16)],2)):ke("",!0)],16)}const Gr=$t(Xr,[["render",Ir]]);export{Gr as _,Ur as u};
