import{d as m,r as _,c as p,m as x,p as S,v as w,j as t,q as f,s as y,u as M,f as C,T as $,k as a,_ as u,w as L,g as c,t as v,h as b,x as z,y as k,F as T,z as B}from"./_plugin-vue_export-helper.007b8a71.js";const q=m({__name:"GuideModal",props:{aspectRatio:String,clickOutsideToClose:{type:Boolean,default:!1},maxHeight:{type:String,default:"600px"},maxWidth:{type:String,default:"800px"},teleportTo:{type:String,default:null}},emits:["closed","opened"],setup(e,{expose:o,emit:d}){const i=e,s=_(!1),g=p(()=>{const l={"--max-height":i.maxHeight,"--max-width":i.maxWidth};return i.aspectRatio&&(l["--aspect-ratio"]=i.aspectRatio),l});function n(){s.value=!1,d("closed")}function r(){s.value=!0,d("opened")}return o({close:n,open:r}),(l,h)=>(a(),x($,{disabled:!e.teleportTo,to:e.teleportTo},[S(t("div",{class:f(["guide-modal g-flex g-items-center g-justify-center g-p-20 g-inset-0 g-z-[1000]",[e.teleportTo?"g-fixed":"g-absolute"]])},[t("div",{class:"g-absolute g-w-full g-h-full",onClick:h[0]||(h[0]=l0=>e.clickOutsideToClose?n():null)}),t("div",{class:f(["g-relative g-w-full g-max-w-[var(--max-width)] g-max-h-[var(--max-height)] g-aspect-[var(--aspect-ratio)] g-bg-white g-rounded-lg g-shadow-lg",e.aspectRatio?"":"g-h-full"]),style:y(M(g))},[C(l.$slots,"default",{},void 0,!0)],6)],2),[[w,s.value]])],8,["disabled","to"]))}});const n0=u(q,[["__scopeId","data-v-a1d4fdaa"],["__file","GuideModal.vue"]]),G=["id"],V={class:"heading"},F=["id","for"],O=["id"],j=["innerHTML"],H={class:"input ltr"},N={class:"select fullwidth"},R=["id","name","aria-describedby"],A=["value"],D=m({__name:"CraftFieldSelect",props:{fieldAttributes:Object,instructions:String,label:{type:String,required:!0},name:{type:String,required:!0},options:{type:Array,required:!0},placeholder:String,required:{type:Boolean,default:!1},startingValue:{type:String,default:""}},emits:["value-changed"],setup(e,{expose:o,emit:d}){const i=e,s=_(JSON.parse(JSON.stringify(i.startingValue)));function g(n){s.value=n}return L(s,n=>{d("value-changed",n)}),o({setFieldValue:g}),(n,r)=>(a(),c("div",{id:`${e.name}-field`,class:"field"},[t("div",V,[t("label",{id:`${e.name}-label`,class:f(e.required?"required":null),for:e.name},v(e.label),11,F)]),e.instructions?(a(),c("div",{key:0,id:`${e.name}-instructions`,class:"instructions"},[t("p",{innerHTML:e.instructions},null,8,j)],8,O)):b("",!0),t("div",H,[t("div",N,[S(t("select",k({id:e.name,"onUpdate:modelValue":r[0]||(r[0]=l=>s.value=l),name:e.name,"aria-describedby":e.instructions?`${e.name}-instructions`:null},e.fieldAttributes),[(a(!0),c(T,null,B(e.options,l=>(a(),c("option",{key:l.value,value:l.value},v(l.label),9,A))),128))],16,R),[[z,s.value]])])])],8,G))}}),a0=u(D,[["__file","CraftFieldSelect.vue"]]),J={},W={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 99 99"},E=t("path",{d:`M64.3,47.7l-28.4-6.5c-0.5-0.1-0.9,0.3-1.1,0.7L30,63.3c-0.1,0.5,0.3,0.9,0.7,1.1L59,70.8c0.5,0.1,0.9-0.3,1.1-0.7l4.8-21.4
	C65.1,48.2,64.7,47.8,64.3,47.7z M39.5,44.9c1.9,0,3.5,1.6,3.5,3.5c0,1.9-1.6,3.5-3.5,3.5c-1.9,0-3.5-1.6-3.5-3.5
	C36,46.4,37.6,44.9,39.5,44.9z M58.1,68.4l-25.4-5.8l0.8-3.2l7-5l2.6,3.5l11.2-7.1l5.7,9.4L58.1,68.4z`},null,-1),I=t("path",{d:`M60.6,33c0.5-0.4,0.9-1.1,1.1-2.2c0.3-1.1,0.3-1.9,0-2.4s-0.7-0.9-1.2-1.1L60,27.2l-1.3,6.2l0.5,0.1
	C59.7,33.7,60.2,33.5,60.6,33z`},null,-1),P=t("path",{d:`M84.6,18.3l0.2-0.7c0.6-2.5-0.8-4.9-3.1-5.8L82,9.2L53.3,5.3l-17-3.9c-1.5-0.4-3.1,0.1-4.2,1h-0.3v0.3
	c-0.7,0.7-1.2,1.5-1.5,2.5L13,81c-0.6,2.7,1.1,5.4,3.8,6l44.7,10.2c2.6,0.6,5.2-1,5.9-3.6l3,0.4l3.8-28l14.1-46.5L84.6,18.3z
	 M60.9,25.3c0.7,0.1,1.3,0.4,1.9,0.8c0.5,0.4,0.8,0.8,1.1,1.3c0.3,0.5,0.4,1.1,0.4,1.7c0,0.7,0,1.3-0.1,2.2c-0.1,0.8-0.4,1.5-0.7,2
	c-0.3,0.5-0.7,1.1-1.1,1.5c-0.4,0.4-0.9,0.7-1.6,0.7c-0.5,0.1-1.2,0.1-2-0.1l-3-0.5l2.3-10.2L60.9,25.3z M53.9,23.7l2.3,0.5
	l-2.3,10.2L51.6,34L53.9,23.7z M44,28.3l1.5-6.5l2.3,0.5l-1.5,6.2c0,0.3-0.1,0.5-0.1,0.8s0,0.5,0,0.7s0.1,0.4,0.3,0.5
	s0.3,0.3,0.5,0.3s0.4,0,0.5,0c0.1-0.1,0.3-0.1,0.4-0.4c0.1-0.1,0.3-0.4,0.3-0.5c0.1-0.3,0.1-0.5,0.3-0.8l1.5-6.2l2.3,0.5l-1.5,6.5
	c0,0.4-0.1,0.9-0.4,1.3c-0.3,0.4-0.5,0.8-0.9,1.2c-0.4,0.3-0.8,0.5-1.3,0.7c-0.5,0.1-1.1,0.1-1.6,0c-0.7-0.1-1.1-0.4-1.5-0.7
	s-0.7-0.7-0.8-1.1s-0.3-0.9-0.3-1.5C43.8,29.4,43.8,28.8,44,28.3z M35.9,24.9c0.1-0.8,0.4-1.5,0.8-2.2s0.7-1.1,1.2-1.5
	c0.4-0.4,0.9-0.7,1.5-0.8c0.5-0.1,1.1-0.1,1.7,0s1.2,0.4,1.6,0.8c0.4,0.4,0.7,0.7,0.9,1.1l-1.6,1.3c-0.3-0.5-0.7-0.9-1.2-1.1
	c-0.3-0.1-0.7,0-0.9,0c-0.3,0.1-0.5,0.3-0.7,0.5c-0.3,0.3-0.4,0.5-0.5,0.9s-0.3,0.8-0.4,1.2C38,25.9,38,26.3,38,26.7s0,0.8,0.1,1.1
	c0.1,0.3,0.3,0.5,0.4,0.8S39,29,39.4,29c0.4,0.1,0.7,0.1,0.8,0l0.4-1.9l-1.1-0.3l0.4-2l3.1,0.7l-1.2,5.4c-0.4,0.4-0.8,0.5-1.3,0.5
	s-1.1,0-1.7-0.1s-1.2-0.4-1.6-0.8s-0.8-0.8-1.1-1.3c-0.3-0.5-0.4-1.2-0.4-1.9C35.6,26.5,35.6,25.7,35.9,24.9z M67.5,48.1l-5.4,23.8
	c-0.3,1.1-1.3,1.9-2.6,1.6l-30.3-7c-1.1-0.3-1.9-1.3-1.6-2.6l5.4-23.8c0.3-1.1,1.3-1.9,2.6-1.6l30.4,7
	C67.1,45.8,67.9,46.9,67.5,48.1z M71.1,29.6L68.4,29L68,31l2.6,0.5l-0.4,1.9l-2.6-0.5L67.1,35l3,0.7l-0.5,2l-5.2-0.9l2.3-10.2l5,1.1
	L71.1,29.6z`},null,-1),U=[E,I,P];function K(e,o){return a(),c("svg",W,U)}const i0=u(J,[["render",K],["__file","SvgGuide.vue"]]),Q={},X={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),Z=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),e0=[Y,Z];function t0(e,o){return a(),c("svg",X,e0)}const c0=u(Q,[["render",t0],["__file","SvgSettings.vue"]]);export{a0 as C,n0 as G,i0 as S,c0 as a};
