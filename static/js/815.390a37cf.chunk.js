"use strict";(self.webpackChunkadv=self.webpackChunkadv||[]).push([[815],{3780:function(e,t,a){a(2791);var s=a(184);t.Z=function(e){var t=e.InputClassName,a=e.TextType,n=e.NameOfInput,r=e.OnPlaceHolder,i=e.AutoOption,l=e.OnChangingInputs,o=e.ValueOfInput,d=e.AcceptAttr,u=e.RefValue;return(0,s.jsx)("input",{className:t,type:a,name:n,placeholder:r,autoComplete:i,onChange:l,value:o,accept:d,ref:u})}},5815:function(e,t,a){a.r(t);var s=a(9439),n=a(2791),r=a(7689),i=a(1087),l=a(1912),o=(a(2044),a(3780)),d=a(9434),u=a(4493),c=a(184);t.default=function(){var e=(0,d.I0)(),t=(0,r.s0)(),a=(0,n.useState)(""),p=(0,s.Z)(a,2),h=p[0],m=p[1],f=(0,n.useState)(""),x=(0,s.Z)(f,2),g=x[0],v=x[1],j=(0,n.useState)(""),I=(0,s.Z)(j,2),N=I[0],w=I[1];return(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"form-container",children:(0,c.jsxs)("div",{className:"regForm",children:[(0,c.jsx)("h1",{className:"header",children:"Log in"}),(0,c.jsx)("h4",{className:"errDisplayer",children:h}),(0,c.jsxs)("div",{className:"inputdisplayer",children:[(0,c.jsx)("label",{children:"Name "}),(0,c.jsx)(o.Z,{InputClassName:"inputPl",TextType:"text",NameOfInput:"name",OnPlaceHolder:"Abebe kebede",AutoOption:"off",OnChangingInputs:function(e){v(e.target.value)},ValueOfInput:g})]}),(0,c.jsxs)("div",{className:"inputdisplayer",children:[(0,c.jsx)("label",{children:"Password"}),(0,c.jsx)(o.Z,{InputClassName:"inputPl",TextType:"password",NameOfInput:"password",OnPlaceHolder:"**********",required:!0,OnChangingInputs:function(e){w(e.target.value)},ValueOfInput:N})]}),(0,c.jsx)("button",{className:"submit-btn",onClick:function(a){a.preventDefault();var s=new FormData;s.append("name",g),s.append("password",N),g.trim()?N.trim()?l.Z.post("http://localhost:2222/login",s,{withCredentials:!0}).then((function(a){if(void 0==a.data.msg)return sessionStorage.setItem("userId",a.data.id),e((0,u.rk)(a.data.destination)),t("/");m(a.data.msg)})):m("Err: password is empty"):m("Err: name is empty")},children:"Login"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"fortest",children:(0,c.jsx)("p",{style:{color:"white"},children:"Demo - name: admin password: test12"})}),(0,c.jsx)("div",{children:(0,c.jsx)(i.rU,{to:"/formating/password",style:{color:"lightblue"},children:"Forgot password ?"})}),(0,c.jsxs)("p",{style:{color:"white"},children:["If you don't have an account"," ",(0,c.jsx)(i.rU,{to:"/register",style:{color:"lightblue"},children:"Register"})]})]})]})})})}},2044:function(){}}]);
//# sourceMappingURL=815.390a37cf.chunk.js.map