import{u as w,b as k,F as y,h}from"./FileItem-18a129ce.js";import{d as x,r as b,c6 as F,v as D,aS as I,aW as C,o as E,k as S,c as n,A as V,B as e,Q as z,cf as B,ch as A,q as R}from"./index-1dba0a34.js";import"./functionalCallableComp-c6ea0d31.js";import"./index-595f5599.js";import"./index-972d384a.js";const q=x({__name:"gridView",props:{tabIdx:{},paneIdx:{},id:{},removable:{type:Boolean},allowDragAndDrop:{type:Boolean},files:{},paneKey:{}},setup(p){const o=p,d=b(),{stackViewEl:m}=w().toRefs(),{itemSize:i,gridItems:u,cellWidth:f}=k(),g=F(),s=D(o.files??[]),_=async a=>{const l=B(a);o.allowDragAndDrop&&l&&(s.value=A([...s.value,...l.nodes]))},v=a=>{s.value.splice(a,1)};return I(()=>{d.pageFuncExportMap.set(o.paneKey,{getFiles:()=>C(s.value),setFiles:a=>s.value=a})}),(a,l)=>(E(),S("div",{class:"container",ref_key:"stackViewEl",ref:m,onDrop:_},[n(e(h),{ref:"scroller",class:"file-list",items:s.value.slice(),"item-size":e(i).first,"key-field":"fullpath","item-secondary-size":e(i).second,gridItems:e(u)},{default:V(({item:t,index:r})=>{var c;return[n(y,{idx:r,file:t,"cell-width":e(f),"enable-close-icon":o.removable,onCloseIconClick:K=>v(r),"full-screen-preview-image-url":e(z)(t),"extra-tags":(c=t==null?void 0:t.tags)==null?void 0:c.map(e(g).tagConvert),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","enable-close-icon","onCloseIconClick","full-screen-preview-image-url","extra-tags"])]}),_:1},8,["items","item-size","item-secondary-size","gridItems"])],544))}});const M=R(q,[["__scopeId","data-v-0c31f6b2"]]);export{M as default};
