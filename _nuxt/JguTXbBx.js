import{_ as c}from"./01YMx847.js";import{d as m,m as i,Q as u,aI as h,aX as l,aJ as d,b as g,B as p,E as r,G as f}from"./BQ-N0u34.js";const w=m({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?c:"img",t=e,o=u(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=h(l(i().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return d(a,t.src)}return t.src});return(s,a)=>(g(),p(f(r(n)),{src:r(o),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{w as default};
