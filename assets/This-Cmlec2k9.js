import{r as m,j as e,b as j,c as b,d as w,e as N,f as n}from"./index-iNPh1e4b.js";import{S as T,U as k}from"./useRef-DDVpg85v.js";import{T as I,a as C}from"./Tag-zu4t8hEI.js";function P({contents:r}){const[s,t]=m.useState(!1);return e.jsx("div",{className:"fixed right-10",children:e.jsxs("div",{className:"flex gap-4 ",children:[s&&e.jsx("ul",{className:" flex flex-col gap-1 rounded-lg bg-[#00000040] px-6 py-4 text-white transition ease-in-out hover:bg-[#000000F0]",children:r.map((l,a)=>e.jsxs("li",{className:"cursor-pointer hover:underline",onClick:()=>T(l.ref),children:[a+1,". ",l.headerText]}))}),e.jsx("div",{onClick:()=>t(!s),className:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#00000040] p-2 text-base text-white opacity-50 transition ease-in-out hover:opacity-100 lg:h-16 lg:w-16 lg:p-4 lg:text-3xl",children:s?e.jsx(e.Fragment,{children:e.jsx(j,{})}):e.jsx(b,{})})]})})}function v(r){const{Images:s=!1}=r,[t,l]=m.useState(0),[a,d]=m.useState(0),g=()=>{if(s){if(t-1<0)return;t-1>=2&&t-1<s.length-3&&d(a-1),l(t-1)}},p=()=>{if(s){if(t+1>s.length-1)return;t+1>2&&t+1<s.length-2&&d(a+1),l(t+1)}},i=(x,f)=>{const h=Math.abs(x-f);let c="";switch(h){case 0:c="text-base text-white";break;case 1:c="text-sm text-[#00000040]";break;case 2:case 3:case 4:c="text-xs text-[#00000040]";break;default:c="hidden";break}return c},o=x=>!(s&&x>s.length-1);return e.jsxs("article",{className:"flex w-full flex-col gap-8",children:[e.jsxs("figure",{className:"flex items-center justify-around gap-6",children:[e.jsx(w,{onClick:g,className:"cursor-pointer text-3xl text-white lg:text-5xl"}),s&&e.jsx("div",{className:"rounded-xl bg-[#111]",children:e.jsx("img",{className:"block h-auto max-h-[512px] w-auto rounded-xl object-cover object-center",src:`${s[t].src}`,alt:`${s[t].alt}`,title:`${s[t].alt}`})}),e.jsx(N,{onClick:p,className:"cursor-pointer text-3xl text-white lg:text-5xl"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[o(0)&&e.jsx(n,{className:`${i(a+0,t)}`}),o(1)&&e.jsx(n,{className:`${i(a+1,t)}`}),o(2)&&e.jsx(n,{className:`${i(a+2,t)}`}),o(3)&&e.jsx(n,{className:`${i(a+3,t)}`}),o(4)&&e.jsx(n,{className:`${i(a+4,t)}`})]})]})}function q({title:r,contents:s}){return e.jsxs("article",{className:"flex w-full flex-col gap-8 px-14 py-6 text-white",children:[e.jsx("h1",{className:"text-center text-2xl font-bold lg:text-4xl",children:r}),s.map(t=>e.jsxs("section",{ref:t.ref,className:"flex w-full flex-col items-center gap-6",children:[e.jsx("h2",{className:"w-full text-start text-2xl font-semibold",children:t.headerText}),t.tags&&e.jsx(I,{listOfTag:t.tags}),t.paragraphText&&e.jsx("p",{className:"w-full",children:t.paragraphText}),t.images&&e.jsx(v,{Images:t.images}),t.afterText&&e.jsx("p",{className:"w-full",children:t.afterText})]}))]})}const D="/Portfolio/assets/Desktop%20-%201-DHhGCKqF.png",y="/Portfolio/assets/Desktop%20-%202-DavAIA1r.png",S="/Portfolio/assets/Desktop%20-%2016-DarV1nKC.png",$="/Portfolio/assets/Desktop%20-%2015-DkF2D3km.png",F={src:D,alt:"Home Page"},A={src:y,alt:"Module Page"},H={src:S,alt:"Content Page"},L={src:$,alt:"Quiz Page"};function u({headerText:r,paragraphText:s,afterText:t,tags:l,images:a}){return{headerText:r,paragraphText:s,afterText:t,ref:k(),tags:l,images:a}}function E(){const r=[u({headerText:"Project overview",paragraphText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustotempore autem qui commodi, doloremque quod beatae iste dolores, utquos maxime libero error, accusamus enim. Adipisci hic aut laborumcorporis?",images:[F,A,H,L]}),u({headerText:"Framework & Language",tags:["TypeScript","React.js"]}),u({headerText:"Results",paragraphText:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, numquam qui animi nisi mollitia esse architecto corrupti inventore cumque veritatis quae! Voluptatum similique quis necessitatibus dolores! Officia nisi dolore praesentium?"})],s=C("This");return e.jsxs(e.Fragment,{children:[e.jsx(P,{contents:r}),e.jsx(q,{title:s.title,contents:r})]})}export{E as Component};