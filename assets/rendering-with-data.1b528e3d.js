import{f as e,o as t,i as a,j as l,K as n,h as i,b as s,g as o,t as d,d as r,c as p,r as g,F as c}from"./app.dc31c3a5.js";const m={};m.render=function(l,n){const i=e("el-skeleton");return t(),a(i,{rows:5,animated:""})};var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m}),f=l({data:()=>({loading:!1,currentDate:n().format("YYYY-MM-DD")})});const h=s("label",{style:{"margin-right":"16px"}},"Switch Loading",-1),y={style:{padding:"14px"}},x={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},b=s("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),_={style:{padding:"14px"}},v=s("span",null,"Delicious hamberger",-1),w={class:"bottom card-header"},j={class:"time"},S=r("operation button");f.render=function(l,n,r,p,g,c){const m=e("el-switch"),u=e("el-skeleton-item"),f=e("el-button"),k=e("el-card"),D=e("el-skeleton"),M=e("el-space");return t(),a(M,{direction:"vertical",alignment:"flex-start"},{default:i((()=>[s("div",null,[h,o(m,{modelValue:l.loading,"onUpdate:modelValue":n[0]||(n[0]=e=>l.loading=e)},null,8,["modelValue"])]),o(D,{style:{width:"240px"},loading:l.loading,animated:"",throttle:500},{template:i((()=>[o(u,{variant:"image",style:{width:"240px",height:"240px"}}),s("div",y,[o(u,{variant:"h3",style:{width:"50%"}}),s("div",x,[o(u,{variant:"text",style:{"margin-right":"16px"}}),o(u,{variant:"text",style:{width:"30%"}})])])])),default:i((()=>[o(k,{"body-style":{padding:"0px",marginBottom:"1px"}},{default:i((()=>[b,s("div",_,[v,s("div",w,[s("span",j,d(l.currentDate),1),o(f,{type:"text",class:"button"},{default:i((()=>[S])),_:1})])])])),_:1})])),_:1},8,["loading"])])),_:1})};var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});const D={};D.render=function(l,n){const i=e("el-skeleton");return t(),a(i)};var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const Y={};Y.render=function(l,n){const i=e("el-skeleton");return t(),a(i,{rows:5})};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const T={},z={style:{padding:"14px"}},U={style:{display:"flex","align-items":"center","justify-items":"space-between"}};T.render=function(l,n){const d=e("el-skeleton-item"),r=e("el-skeleton");return t(),a(r,{style:{width:"240px"}},{template:i((()=>[o(d,{variant:"image",style:{width:"240px",height:"240px"}}),s("div",z,[o(d,{variant:"p",style:{width:"50%"}}),s("div",U,[o(d,{variant:"text",style:{"margin-right":"16px"}}),o(d,{variant:"text",style:{width:"30%"}})])])])),_:1})};var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T}),L=l({data:()=>({loading:!0,currentDate:n().format("YYYY-MM-DD")})});const B=s("label",{style:{"margin-right":"16px"}},"Switch Loading",-1),C={style:{padding:"14px"}},F={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},H=s("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),K={style:{padding:"14px"}},q=s("span",null,"Delicious hamberger",-1),A={class:"bottom card-header"},E={class:"time"},G=r("Operation button");L.render=function(l,n,r,p,g,c){const m=e("el-switch"),u=e("el-skeleton-item"),f=e("el-button"),h=e("el-card"),y=e("el-skeleton"),x=e("el-space");return t(),a(x,{direction:"vertical",alignment:"flex-start"},{default:i((()=>[s("div",null,[B,o(m,{modelValue:l.loading,"onUpdate:modelValue":n[0]||(n[0]=e=>l.loading=e)},null,8,["modelValue"])]),o(y,{style:{width:"240px"},loading:l.loading,animated:""},{template:i((()=>[o(u,{variant:"image",style:{width:"240px",height:"240px"}}),s("div",C,[o(u,{variant:"h3",style:{width:"50%"}}),s("div",F,[o(u,{variant:"text",style:{"margin-right":"16px"}}),o(u,{variant:"text",style:{width:"30%"}})])])])),default:i((()=>[o(h,{"body-style":{padding:"0px",marginBottom:"1px"}},{default:i((()=>[H,s("div",K,[q,s("div",A,[s("span",E,d(l.currentDate),1),o(f,{type:"text",class:"button"},{default:i((()=>[G])),_:1})])])])),_:1})])),_:1},8,["loading"])])),_:1})};var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L}),J=l({data:()=>({loading:!0,currentDate:n().format("YYYY-MM-DD"),lists:[]}),mounted(){this.loading=!1,this.lists=[{imgUrl:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",name:"Deer"},{imgUrl:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",name:"Horse"},{imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",name:"Mountain Lion"}]},methods:{setLoading(){this.loading=!0,setTimeout((()=>this.loading=!1),2e3)}}});const N=r("Click me to reload"),P={style:{padding:"14px"}},Q={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},R=["src"],W={style:{padding:"14px"}},X={class:"bottom card-header"},Z={class:"time"},$=r("Operation button");J.render=function(l,n,r,m,u,f){const h=e("el-button"),y=e("el-skeleton-item"),x=e("el-card"),b=e("el-skeleton"),_=e("el-space");return t(),a(_,{direction:"vertical",alignment:"flex-start"},{default:i((()=>[o(h,{onClick:l.setLoading},{default:i((()=>[N])),_:1},8,["onClick"]),o(b,{style:{width:"240px"},loading:l.loading,animated:"",count:3},{template:i((()=>[o(y,{variant:"image",style:{width:"400px",height:"267px"}}),s("div",P,[o(y,{variant:"h3",style:{width:"50%"}}),s("div",Q,[o(y,{variant:"text",style:{"margin-right":"16px"}}),o(y,{variant:"text",style:{width:"30%"}})])])])),default:i((()=>[(t(!0),p(c,null,g(l.lists,(e=>(t(),a(x,{key:e.name,"body-style":{padding:"0px",marginBottom:"1px"}},{default:i((()=>[s("img",{src:e.imgUrl,class:"image multi-content"},null,8,R),s("div",W,[s("span",null,d(e.name),1),s("div",X,[s("span",Z,d(l.currentDate),1),o(h,{type:"text",class:"button"},{default:i((()=>[$])),_:1})])])])),_:2},1024)))),128))])),_:1},8,["loading"])])),_:1})};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{u as _,k as a,M as b,O as c,V as d,I as e,ee as f};