import{_ as o,d as l,r as d,e as u,o as i,c as a,a as s,n as c,t as r,b as p,w as m,R as f,m as h,F as g,p as v}from"./plugin-vue_export-helper-5771840e.js";const _=l({name:"ComponentListItem",components:{},props:{fieldAttributes:Object,instructions:String,label:{type:String,required:!0},name:{type:String,required:!0},options:{type:Array,required:!0},placeholder:String,required:{type:Boolean,default:!1},startingValue:{type:String,default:""}},emits:["value-changed"],setup:e=>{const t=d({fieldValue:""});return t.fieldValue=JSON.parse(JSON.stringify(e.startingValue)),{...u(t)}},methods:{setFieldValue(e){this.fieldValue=e}},watch:{fieldValue(){this.$emit("value-changed",this.fieldValue)}}}),b=["id"],S={class:"heading"},V=["id","for"],y=["id"],$=["innerHTML"],k={class:"input ltr"},w={class:"select fullwidth"},C=["id","name","aria-describedby"],q=["value"];function B(e,t,N,j,z,A){return i(),a("div",{id:`${e.name}-field`,class:"field"},[s("div",S,[s("label",{id:`${e.name}-label`,class:c(e.required?"required":null),for:e.name},r(e.label),11,V)]),e.instructions?(i(),a("div",{key:0,id:`${e.name}-instructions`,class:"instructions"},[s("p",{innerHTML:e.instructions},null,8,$)],8,y)):p("",!0),s("div",k,[s("div",w,[m(s("select",h({id:e.name,"onUpdate:modelValue":t[0]||(t[0]=n=>e.fieldValue=n),name:e.name,"aria-describedby":e.instructions?`${e.name}-instructions`:null},e.fieldAttributes),[(i(!0),a(g,null,v(e.options,n=>(i(),a("option",{key:n.value,value:n.value},r(n.label),9,q))),128))],16,C),[[f,e.fieldValue]])])])],8,b)}const D=o(_,[["render",B]]),M={},F={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"};function L(e,t){return i(),a("svg",F,t[0]||(t[0]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)]))}const H=o(M,[["render",L]]);export{D as C,H as S};
