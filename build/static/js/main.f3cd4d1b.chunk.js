(this.webpackJsonpia_church=this.webpackJsonpia_church||[]).push([[0],{12:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),o=a(3),i=a.n(o),r=(a(12),a(0));var s=function(){const[t,e]=Object(n.useState)("");return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Legendas Autom\xe1ticas para Igreja"}),Object(r.jsx)("button",{onClick:()=>{navigator.mediaDevices.getUserMedia({audio:!0}).then((t=>{const a=new MediaRecorder(t);a.start(),a.ondataavailable=function(t){const a=t.data,n=new FormData;n.append("audio",a,"audio.wav"),fetch("http://localhost:3001/upload-audio",{method:"POST",body:n}).then((t=>t.json())).then((t=>{e(t.transcript)}))},setTimeout((()=>{a.stop()}),5e3)}))},children:"Iniciar Grava\xe7\xe3o"}),Object(r.jsxs)("p",{children:["Transcri\xe7\xe3o: ",t]})]})};i.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s,{})}))}},[[14,1,2]]]);
//# sourceMappingURL=main.f3cd4d1b.chunk.js.map