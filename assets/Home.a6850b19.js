import{_ as d,g as v,u as k,h as _,b as e,o,c as a,d as c,w as F,i as r,t as l,j as g,N as x,F as I,k as L,r as b,a as h,l as y}from"./app.63ebbcf3.js";const A={key:0,class:"home-hero"},B={key:0,class:"figure"},C=["src","alt"],N={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=v({setup(m){const{site:s,frontmatter:t}=k(),i=_(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return n||u||$||H&&T}),p=_(()=>t.value.heroText||s.value.title),f=_(()=>t.value.tagline||s.value.description);return(n,u)=>e(i)?(o(),a("header",A,[e(t).heroImage?(o(),a("figure",B,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,C)])):r("v-if",!0),e(p)?(o(),a("h1",N,l(e(p)),1)):r("v-if",!0),e(f)?(o(),a("p",w,l(e(f)),1)):r("v-if",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("v-if",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var j=d(V,[["__scopeId","data-v-370f18c0"]]);const D={key:0,class:"home-features"},S={class:"wrapper"},E={class:"container"},q={class:"features"},z={key:0,class:"title"},G={key:1,class:"details"},J=v({setup(m){const{frontmatter:s}=k(),t=_(()=>s.value.features&&s.value.features.length>0),i=_(()=>s.value.features?s.value.features:[]);return(p,f)=>e(t)?(o(),a("div",D,[c("div",S,[c("div",E,[c("div",q,[(o(!0),a(I,null,L(e(i),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",z,l(n.title),1)):r("v-if",!0),n.details?(o(),a("p",G,l(n.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var K=d(J,[["__scopeId","data-v-e39c13e0"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=v({setup(m){const{frontmatter:s}=k();return(t,i)=>e(s).footer?(o(),a("footer",M,[c("div",O,[c("p",P,l(e(s).footer),1)])])):r("v-if",!0)}});var R=d(Q,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=v({setup(m){return(s,t)=>{const i=b("Content");return o(),a("main",U,[h(j),y(s.$slots,"hero",{},void 0,!0),h(K),c("div",W,[h(i)]),y(s.$slots,"features",{},void 0,!0),h(R),y(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(X,[["__scopeId","data-v-10122c92"]]);export{Z as default};