import{d as c,m as b,r,Q as d,b as f,c as p,e as a,n as l,E as s,t as g}from"./BQ-N0u34.js";const m={class:"relative flex size-3"},C=c({__name:"Availability",props:{background:{type:Boolean,default:!1}},setup(i){const n=b().public,u=r(n.available),o=r([{status:"available",message:"Available for hire",color:"bg-green-600/80",bgColor:"bg-green-500/80",textColor:"text-green-500/80"},{status:"unavailable",message:"Not available for hire",color:"bg-red-500",bgColor:"bg-red-400",textColor:"text-red-400"}]),e=d(()=>o.value.find(t=>t.status===u.value)||o.value[0]);return(t,v)=>(f(),p("div",{class:l(["flex items-center rounded-full",{"border border-white/10 bg-zinc-900/80 px-5 py-2 backdrop-blur-3xl":i.background}])},[a("span",m,[a("span",{class:l(["absolute inline-flex size-full animate-ping rounded-full opacity-75",s(e).color])},null,2),a("span",{class:l(["relative inline-flex size-3 scale-90 rounded-full",s(e).bgColor])},null,2)]),a("span",{class:l(["ml-2 text-sm font-medium",s(e).textColor])},g(t.$t("availability."+s(e).status)),3)],2))}});export{C as _};
