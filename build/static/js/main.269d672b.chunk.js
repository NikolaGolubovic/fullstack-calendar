(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){e.exports=n(60)},40:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),l=n(7),s=n(12),u=(n(39),n(9)),i={infos:[],errors:[]},m=function(e){return{type:"NEW_ERROR",content:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_INFO":return Object(u.a)(Object(u.a)({},e),{},{infos:e.infos.concat(t.content)});case"NEW_ERROR":return Object(u.a)(Object(u.a)({},e),{},{errors:e.errors.concat(t.content)});case"RESET":return i;default:return e}},d=Object(s.createStore)(f),v=(n(40),n(1)),b=n(3),p=n.n(b),E=n(4),h=n(8),O=n(5),g={background:"#162447",color:"white",secondaryColor:"#e43f5a",borderColor:"#1b1b2f"},j={background:"snow",color:"black",secondaryColor:"maroon",borderColor:"silver"},y=n(10),w=n.n(y),S={register:function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k={login:function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var N=function(e){var t=e.user,n=e.setUser,c=e.setEvents,o=e.theme,s=e.setTheme,u=Object(a.useState)(""),i=Object(v.a)(u,2),f=i[0],d=i[1],b=Object(a.useState)(""),y=Object(v.a)(b,2),w=y[0],N=y[1],x=Object(a.useState)(""),C=Object(v.a)(x,2),T=C[0],_=C[1],D=Object(a.useState)(""),F=Object(v.a)(D,2),M=F[0],I=F[1],A=Object(a.useState)(""),J=Object(v.a)(A,2),P=J[0],R=J[1],U=Object(a.useState)(!1),W=Object(v.a)(U,2),z=W[0],K=W[1],Y=Object(a.useState)(!1),B=Object(v.a)(Y,2),L=B[0],q=B[1],G=Object(a.useState)(O.f),H=Object(v.a)(G,2),Q=H[0],V=H[1],X=Object(l.b)(),Z={display:z?"":"none"},$={display:L?"":"none"},ee=function(){var e=Object(E.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,S.register({username:f,password:w});case 4:n=e.sent,a=JSON.stringify(n),window.localStorage.setItem("loggedUser",a),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(E.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.login({username:M,password:P});case 4:n=e.sent,console.log(n),a=JSON.stringify(n),window.localStorage.setItem("loggedUser",a),window.location.reload(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),X(m(e.t0.response.data.msg));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("nav",{className:"nav"},r.a.createElement("p",null,r.a.createElement("small",null,r.a.createElement(h.a,{className:"font-awesome",icon:Q,onClick:function(){Q===O.f?V(O.c):V(O.f),s(o===j?g:j)}}))),t?r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("p",null,r.a.createElement("small",null,t," ",r.a.createElement(h.a,{className:"font-awesome",icon:O.g}))),r.a.createElement("p",{onClick:function(){c([]),window.localStorage.clear(),n("")}},r.a.createElement("small",null,"Log Out"," ",r.a.createElement(h.a,{className:"font-awesome",icon:O.e})," "))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"register"},r.a.createElement("p",{onClick:function(){K(!z),q(!1)}},r.a.createElement("small",null,"Sign In"," ",r.a.createElement(h.a,{className:"font-awesome",icon:O.g}))),r.a.createElement("form",{className:"signup-form",style:Z,onSubmit:ee},r.a.createElement("label",{htmlFor:""},"Choose Username",r.a.createElement("input",{type:"text",value:f,onChange:function(e){return d(e.target.value)}})),r.a.createElement("label",{htmlFor:""},"Choose Passowrd",r.a.createElement("input",{type:"password",value:w,autoComplete:"off",onChange:function(e){return N(e.target.value)}})),r.a.createElement("label",{htmlFor:""},"Confirm Passowrd",r.a.createElement("input",{type:"password",value:T,autoComplete:"off",onChange:function(e){return _(e.target.value)}})),r.a.createElement("button",null,"Confirm"))),r.a.createElement("div",{className:"login"},r.a.createElement("p",{onClick:function(){q(!L),K(!1)}},r.a.createElement("small",null,"Sign In"," ",r.a.createElement(h.a,{className:"font-awesome",icon:O.d}))),r.a.createElement("form",{className:"login-form",style:$,onSubmit:te},r.a.createElement("label",{htmlFor:""},"Username:",r.a.createElement("input",{type:"text",value:M,onChange:function(e){return I(e.target.value)}})),r.a.createElement("label",{htmlFor:""},"Password:",r.a.createElement("input",{type:"password",value:P,autoComplete:"on",onChange:function(e){return R(e.target.value)}})),r.a.createElement("button",null,"Confirm")))))},x=null,C={setToken:function(e){x="bearer ".concat(e)},getToken:function(){console.log(x)},getEvents:function(){var e=Object(E.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:x}},e.next=3,w.a.get("/api/events",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(E.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,w.a.post("/api/events",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),edit:function(){var e=Object(E.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:x}},e.next=3,w.a.put("".concat("/api/events","/").concat(n),t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(E.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,w.a.delete("".concat("/api/events","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var T=function(e){var t=e.setModalOn,n=e.setEvents,c=e.events,o=e.modalDay,s=e.modalDate,u=e.modalMonth,i=e.modalYear,m=e.editModal,f=e.setEditModal,d=e.editEventText,b=e.editEventTime,g=e.eventKey,j=e.eventId,y=Object(a.useState)(""),w=Object(v.a)(y,2),S=w[0],k=w[1],N=Object(a.useState)(0),x=Object(v.a)(N,2),T=x[0],_=x[1],D=Object(a.useState)(d),F=Object(v.a)(D,2),M=F[0],I=F[1],A=Object(a.useState)(b),J=Object(v.a)(A,2),P=J[0],R=J[1];function U(){return(U=Object(E.a)(p.a.mark((function e(t,a,r,o){var l,s,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={},s=""+t+a+r+o,console.log("createEvent dateKey",s),l[s]=S,l.time=T,e.next=7,C.create({eventMsg:S,eventTime:T,dateKey:s});case 7:u=e.sent,n(c.concat(u.event));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.b)();var W=function(){var e=Object(E.a)(p.a.mark((function e(a,r){var o,l,s,u,i,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!1),f(!1),e.next=4,C.edit({event_msg:M,event_time:P},g);case 4:o=e.sent,l=o.event,s=l.date_key,u=l.event_text,i=l.event_time,m=l.event_id,n(c.map((function(e){return e.date_key===s?{event_text:u,event_time:i,id:m,date_key:s}:e})));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.remove(j);case 3:t(!1),f(!1),n(c.filter((function(e){return e.id!==j}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"modal-container"},m?r.a.createElement("div",{className:"modal-edit-container"},r.a.createElement("button",{onClick:z,className:"delete-event-button"},"Delete"),r.a.createElement("form",{onSubmit:W,className:"modal-edit-form"},r.a.createElement("button",{className:"modal-edit-close-button",onClick:function(){t(!1),f(!1)}},r.a.createElement(h.a,{icon:O.h})),r.a.createElement("label",{htmlFor:""},r.a.createElement("h3",null,"Edit your Event:"),r.a.createElement("input",{type:"text",value:M,onChange:function(e){return I(e.target.value)}})),r.a.createElement("label",{htmlFor:""},r.a.createElement("h3",null,"Edit Time of Event"),r.a.createElement("input",{type:"text",value:P,onChange:function(e){return R(e.target.value)}})),r.a.createElement("button",{className:"confirm-edit"},"Finish Editing"))):r.a.createElement("form",{className:"modal-controller",onSubmit:function(e){e.preventDefault(),function(e,t,n,a){U.apply(this,arguments)}(o,s,u,i),t(!1)}},r.a.createElement("button",{className:"modal-close",onClick:function(){return t(!1)}},r.a.createElement(h.a,{icon:O.h})),r.a.createElement("label",{htmlFor:""},r.a.createElement("h3",null,"Name your Event:"),r.a.createElement("input",{type:"text",onChange:function(e){return k(e.target.value)}})),r.a.createElement("label",{htmlFor:""},r.a.createElement("h3",null,"Time When The Event Starts"),r.a.createElement("input",{type:"text",onChange:function(e){return _(e.target.value)}})),r.a.createElement("button",{className:"btn-create"},"Create")))},_=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],D=["January","February","March","April","May","June","July","August","September","October","November","December"],F=Array.from({length:5},(function(e,t){return(new Date).getFullYear()+t}));var M=function(e){var t=e.events,n=e.setEvents,c=e.user,o=Object(a.useState)((new Date).getMonth()),s=Object(v.a)(o,2),u=s[0],i=s[1],f=Object(a.useState)((new Date).getFullYear()),d=Object(v.a)(f,2),b=d[0],p=d[1],E=Object(a.useState)(0),g=Object(v.a)(E,2),j=g[0],y=g[1],w=Object(a.useState)([]),S=Object(v.a)(w,2),k=S[0],N=S[1],x=Object(a.useState)(!1),C=Object(v.a)(x,2),M=C[0],I=C[1],A=Object(a.useState)(0),J=Object(v.a)(A,2),P=J[0],R=J[1],U=Object(a.useState)(0),W=Object(v.a)(U,2),z=W[0],K=W[1],Y=Object(a.useState)(0),B=Object(v.a)(Y,2),L=B[0],q=B[1],G=Object(a.useState)(0),H=Object(v.a)(G,2),Q=H[0],V=H[1],X=Object(a.useState)(!1),Z=Object(v.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),ne=Object(v.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)(""),oe=Object(v.a)(ce,2),le=oe[0],se=oe[1],ue=Object(a.useState)(""),ie=Object(v.a)(ue,2),me=ie[0],fe=ie[1],de=Object(a.useState)(0),ve=Object(v.a)(de,2),be=ve[0],pe=ve[1],Ee=Object(a.useState)([]),he=Object(v.a)(Ee,2),Oe=he[0],ge=he[1],je=Object(l.b)();function ye(e,t){var n=function(e,t){return 32-new Date(e,t,32).getDate()}(t,e),a=new Date(t,e).getDay(),r=null;r=n+a>35?Array.from({length:42}):Array.from({length:35});for(var c=0,o=a;o<n+a;o++)o-c>6&&(c+=7),r[o]=_[o-c];N(r),y(a)}return Object(a.useEffect)((function(){ye(u,b)}),[u,b]),Object(a.useEffect)((function(){for(var e=[],t=0;t<F.length;t++)for(var n=0;n<D.length;n++)e.push("".concat(F[t]," ").concat(D[n]));var a=(new Date).getMonth();ge(e.slice(a))}),[]),r.a.createElement("div",null,M&&r.a.createElement(T,{events:t,setEvents:n,setModalOn:I,modalDay:P,modalDate:z,modalMonth:L,modalYear:Q,editModal:$,editEventText:ae,editEventTime:le,setEditModal:ee,eventKey:me,eventId:be}),r.a.createElement("div",{className:"calendar-container"},r.a.createElement("div",{className:"controller-and-info-month"},r.a.createElement("div",{onClick:function(){if(0===u)return i(11),void p(b-1);i(u-1)},className:"button-left"},r.a.createElement(h.a,{className:"arrow font-awesome",icon:O.a})," "),D[u]," ",b,r.a.createElement("div",{onClick:function(){if(11===u)return i(0),void p(b+1);i(u+1)},className:"button-right"},r.a.createElement(h.a,{className:"arrow font-awesome",icon:O.b})," ")),r.a.createElement("div",{className:"days-names"},_.map((function(e){return r.a.createElement("div",{className:"day-name",key:e},e)}))),r.a.createElement("div",{className:"dates"},k.length>0&&k.map((function(e,n){var a=""+e+(n+1-j)+u+b;return r.a.createElement("div",{className:"date",key:(n+1).toString()+u+b,onClick:e&&c?function(){I(!0),R(e),K(n+1-j),q(u),V(b)}:function(){je(m("Invalid action, be careful with clicking"))}},r.a.createElement("small",null,e&&n+1-j),t.map((function(e){return e.date_key===a?r.a.createElement("div",{className:"events",key:e.id+a,onClick:function(e){e.stopPropagation()}},r.a.createElement("div",{className:"single-event"},r.a.createElement("small",{onClick:function(){return function(e,t,n,a){I(!0),ee(!0),re(e),se(t),fe(n),pe(a)}(e.event_text,e.event_time,a,e.id)}},e.event_text," ",e.event_time,"h"))):""})))}))),r.a.createElement("label",{className:"label-choose-month"},"Chooose Month",r.a.createElement("select",{name:"",id:"",onChange:function(e){for(var t=e.target.value.split(" "),n=0,a=+t[0],r=0;r<D.length;r++)D[r]===t[1]&&(n=r);p(a),i(n),ye(a,n)},className:"choose-month"},Oe.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))))},I=n(11);var A=function(e){var t,n=e.lightTheme,c=e.nightTheme,o=e.theme,s=Object(l.b)(),i=Object(l.c)((function(e){return e.infos})),m=Object(l.c)((function(e){return e.errors}));Object(a.useEffect)((function(){(i.length>0||m.length>0)&&setTimeout((function(){return s({type:"RESET"})}),2e3)}),[i,m]);var f=(t={border:"solid",borderWidth:1,borderColor:m.length>0?"red":"green",padding:10,color:o===n?n.color:c.color},Object(I.a)(t,"padding",10),Object(I.a)(t,"width","99%"),Object(I.a)(t,"margin","0 auto"),t);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:Object(u.a)(Object(u.a)({},f),{},{display:i.length>0?"":"none"})},i.length>0&&i.map((function(e){return e}))),r.a.createElement("div",{style:Object(u.a)(Object(u.a)({},f),{},{display:m.length>0?"":"none"})},m.length>0&&m.map((function(e){return e}))))};var J=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(g),l=Object(v.a)(o,2),s=l[0],u=l[1],i=Object(a.useState)([]),m=Object(v.a)(i,2),f=m[0],d=m[1];Object(a.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("loggedUser"));e&&(c(e.username),C.setToken(e.token))}),[n]),Object(a.useEffect)((function(){C.getEvents().then((function(e){return d(f.concat(e.events))}))}),[]),Object(a.useEffect)((function(){b(s)}),[s]);var b=function(e){u(e),document.documentElement.style.setProperty("--main-bg-color",e.background),document.documentElement.style.setProperty("--main-color",e.color),document.documentElement.style.setProperty("--secondary-color",e.secondaryColor),document.documentElement.style.setProperty("--border-color",e.borderColor)};return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(N,{user:n,setUser:c,setEvents:d,theme:s,setTheme:u}),r.a.createElement(A,{lightTheme:j,nightTheme:g,theme:s}),r.a.createElement(M,{user:n,events:f,setEvents:d})))};o.a.render(r.a.createElement(l.a,{store:d},r.a.createElement(J,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.269d672b.chunk.js.map