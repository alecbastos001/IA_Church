(this.webpackJsonpia_church=this.webpackJsonpia_church||[]).push([[0],{12:function(e,c,r){},14:function(e,c,r){"use strict";r.r(c);var t=r(1),a=r.n(t),n=r(3),o=r.n(n),s=(r(12),r(0));var i=()=>{const[e,c]=Object(t.useState)(!1),[r,a]=Object(t.useState)(null),n=Object(t.useRef)(null),o=Object(t.useRef)([]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Gravador de \xc1udio"}),e?Object(s.jsx)("button",{onClick:()=>{n.current&&(n.current.stop(),c(!1))},children:"Parar Grava\xe7\xe3o"}):Object(s.jsx)("button",{onClick:async()=>{try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),r=new MediaRecorder(e);n.current=r,r.start(),c(!0),r.ondataavailable=e=>{o.current.push(e.data)},r.onstop=()=>{const e=new Blob(o.current,{type:"audio/wav"}),c=URL.createObjectURL(e);a(c),o.current=[]}}catch(e){console.error("Erro ao acessar o microfone: ",e)}},children:"Iniciar Grava\xe7\xe3o"}),r&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Grava\xe7\xe3o:"}),Object(s.jsx)("audio",{src:r,controls:!0}),Object(s.jsx)("a",{href:r,download:"gravacao.wav",children:"Baixar \xc1udio"})]})]})};var d=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"IA Church - Grava\xe7\xe3o de \xc1udio"}),Object(s.jsx)(i,{})]})};o.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e33bab87.chunk.js.map