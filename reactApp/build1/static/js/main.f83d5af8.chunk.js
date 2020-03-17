(this["webpackJsonpreact-start-app"]=this["webpackJsonpreact-start-app"]||[]).push([[0],{32:function(e,a,t){e.exports=t(77)},37:function(e,a,t){},38:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(28),l=t.n(o),s=(t(37),t(1)),c=(t(38),t(85)),i=function(e){return{isPink:{width:"100%",backgroundColor:"#f2F2f2",backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat"},isDark:{width:"100%",backgroundColor:"#000",backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}},m=t(2),u=t.n(m),d=t(3),p=function(e,a){switch(a.type){case"FETCH_SUCCESS":return{loading:!1,fetchError:"",next:a.payload.pagination.next,prev:a.payload.pagination.prev,posts:a.payload.posts};case"FETCH_SEARCH_SUCCESS":return{loading:!1,fetchError:"",posts:a.payload.posts};case"FETCH_ERROR":return{loading:!1,fetchError:"Wrong, login first",posts:[]};case"UPDATE_ERROR":return{loading:!1,fetchError:"Something went wrong"};default:return e}},f=t(4),E=t.n(f),h=t(6),v=function(e,a){switch(a.type){case"NEW_MESSAGE":return Object(h.a)({},e,{msg:a.payload});case"CLEAR_MESSAGE":return Object(h.a)({},e,{msg:""});case"FETCH_USER_SUCCESS":return Object(h.a)({},e,{user:a.payload});case"FETCH_USER_ERROR":return Object(h.a)({},e,{user:{role:"user",_id:0,fname:"",lname:"",email:"",username:"",createdAt:""}});default:return e}},g=Object(n.createContext)(),b=function(e){var a=e.children,t=function(e){p({type:"NEW_MESSAGE",payload:e}),setTimeout((function(){p({type:"CLEAR_MESSAGE",payload:""})}),8e3)};function o(){return l.apply(this,arguments)}function l(){return(l=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/user/whoisloggedin",e.next=3,E.a.get("/user/whoisloggedin").then((function(e){!0===e.data.isAuthenticated&&p({type:"FETCH_USER_SUCCESS",payload:e.data.data})})).catch((function(e){p({type:"FETCH_USER_ERROR",payload:{role:"user",_id:0,fname:"",lname:"",email:"",username:"",createdAt:""}})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var c=Object(n.useReducer)(v,{msg:"",user:{role:"user",_id:0,fname:"",lname:"",email:"",username:"",createdAt:""}}),i=Object(s.a)(c,2),m=i[0],p=i[1];return r.a.useEffect((function(){t("Wellcome"),o()}),[]),r.a.createElement(g.Provider,{value:{state:m,flashMessage:t,whoIsLogged:o,clearUserSession:function(){p({type:"FETCH_USER_ERROR",payload:{}})}}},a)},w=Object(n.createContext)(),N=function(e){var a=e.children,t=r.a.useState(!1),o=Object(s.a)(t,2),l=o[0],c=o[1],i=r.a.useContext(g);function m(e,a){return f.apply(this,arguments)}function f(){return(f=Object(d.a)(u.a.mark((function e(a,t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t||4,r="/v1/api?page=".concat(a||1,"&limit=").concat(n),e.next=5,E.a.get(r).then((function(e){O({type:"FETCH_SUCCESS",payload:e.data})})).catch((function(e){e.response?i.flashMessage(e.response.data.message):e.request,O({type:"FETCH_ERROR"})}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/searchinfo",e.next=3,E.a.post("/searchinfo",{search:a}).then((function(e){O({type:"FETCH_SEARCH_SUCCESS",payload:e.data})})).catch((function(e){console.log(e),O({type:"FETCH_ERROR"})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/infopost",e.next=3,E.a.post("/infopost",a).then((function(e){m(),i.flashMessage(e.data.message)})).catch((function(e){e.response?(m(),i.flashMessage(e.response.data.message)):e.request}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(d.a)(u.a.mark((function e(a,t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/updatepost",n={id:a,updatePost:t},e.next=4,E.a.post("/updatepost",n).then((function(e){m(),i.flashMessage(e.data.message)})).catch((function(e){e.response?(console.log("no update"),m(),i.flashMessage(e.response.data.message)):e.request}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(d.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/deletepost/".concat(a),e.next=3,E.a.post(t).then((function(e){m(),i.flashMessage(e.data.message)})).catch((function(e){e.response?(m(),i.flashMessage(e.response.data.message)):e.request}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=Object(n.useReducer)(p,{loading:!0,fetchError:"",next:{},prev:{},posts:[]}),C=Object(s.a)(S,2),y=C[0],O=C[1];r.a.useEffect((function(){m()}),[]);return r.a.createElement(w.Provider,{value:{state:y,deletePost:function(e){!function(e){N.apply(this,arguments)}(e)},updatePost:function(e,a){!function(e,a){b.apply(this,arguments)}(e,a)},addPost:function(e){!function(e){v.apply(this,arguments)}(e)},searchPosts:function(e){!function(e){h.apply(this,arguments)}(e)},fetchData:m,isDark:l,darkMode:function(){c(!l)}}},a," ")};function S(e){var a=r.a.useState(17),t=Object(s.a)(a,2),n=t[0],o=t[1],l=e.open,c=e.openDrawer,i=e.openModalSignUp,m=e.openModalLogin,p=r.a.useContext(g),f=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"/user/logout",E.a.get("/user/logout").then((function(e){200===e.status&&(p.clearUserSession(),p.flashMessage("\ud83d\udc4c Logout success."))})).catch((function(e){if(e.response){console.log(e.response.data);[].push(e.response.data)}else e.request}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Navigation"),r.a.createElement("nav",{className:l?"info-nav show-nav":"info-nav"},r.a.createElement("div",{className:"info-profile-div"},r.a.createElement("img",{onClick:function(){var e=Math.floor(99*Math.random());o(e)},src:"https://randomuser.me/portraits/men/".concat(n,".jpg"),alt:"info-img-profile",className:"info-img-profile"})),r.a.createElement("ul",{className:"profile-ul"},r.a.createElement("li",{className:"profile-li"},r.a.createElement("a",{href:"/"}," Home ")),0!==p.state.user._id&&void 0!==p.state.user.fname?r.a.createElement("li",{className:"profile-li"},r.a.createElement("span",{onClick:function(){c(),f()}}," LogOut ")):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"profile-li"},r.a.createElement("span",{onClick:function(){c(),i()}}," SignUp ")),r.a.createElement("li",{className:"profile-li"},r.a.createElement("span",{onClick:function(){c(),m()}}," LogIn "))))),r.a.createElement("img",{onClick:c,className:l?"img-show show-btn":"img-show",src:"img/hamburger-menu.svg",alt:"img-show"}))}var C=r.a.memo(Object(c.a)(i)((function(e){var a=e.openModalFunc,t=e.openModalSignUp,n=e.openModalLogin,o=r.a.useState(!1),l=Object(s.a)(o,2),c=l[0],i=l[1],m=r.a.useState(""),u=Object(s.a)(m,2),d=u[0],p=u[1],f=r.a.useContext(w),E=r.a.useContext(g),h=f.searchPosts;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{open:c,openDrawer:function(){i(!c)},openModalSignUp:t,openModalLogin:n}),r.a.createElement("div",{className:"content-stcky"},r.a.createElement("div",{className:"sticky"},r.a.createElement("header",{className:c?"info-header back-white-color":"info-header"},r.a.createElement("div",{className:"contentHeader"},r.a.createElement("div",{className:"switch"},r.a.createElement("input",{id:"switch-1",type:"checkbox",onClick:f.darkMode,className:"switchInput"}),r.a.createElement("label",{htmlFor:"switch-1",className:"switchLabel"})),r.a.createElement("h1",{className:c?"info-title dark-color":"info-title"}," ","Info Tech Blog.it"),r.a.createElement("div",{className:"info-subtitle"},r.a.createElement("div",null,0!==E.state.user._id&&void 0!==E.state.user.fname?"Ciao ".concat(E.state.user.fname):"Usefull information about tech. Stay informed \ud83e\udd13!")))),r.a.createElement("div",{className:"info-search"},r.a.createElement("div",{className:"info-home"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"img/home.png",className:"btn-home",alt:"home"}))),r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),h(d),p("")}},r.a.createElement("input",{type:"text",name:"search",className:"search-input",id:"search-input",value:d,onChange:function(e){return p(e.target.value)},placeholder:"Search"}),r.a.createElement("input",{type:"submit",id:"search-submit",className:"search-submit"}))),r.a.createElement("button",{onClick:function(){return a()},className:"info-btn-add"},"+"),r.a.createElement("div",{className:"info-msg"},"undefined"!=typeof E.state.msg?E.state.msg:""))))}))),y=t(8),O=t.n(y),k=t(9),x=t.n(k);function j(e){var a=r.a.useContext(w),t=e.openModal,n=e.openModalFunc,o=r.a.useState(""),l=Object(s.a)(o,2),c=l[0],i=l[1],m=r.a.useState(""),u=Object(s.a)(m,2),d=u[0],p=u[1],f=r.a.useState("low"),E=Object(s.a)(f,2),h=E[0],v=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t?"info-modal-window info-modal-window-show":"info-modal-window"},r.a.createElement("div",{className:"info-modal-windows-up"},r.a.createElement("button",{onClick:function(){return n()},className:"info-modal-close"},"X"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={title:c,text:d,importance:h};a.addPost(t),i(""),p(""),v("low"),n()},className:"info-modal-form"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",value:c,onChange:function(e){return i(e.target.value)},className:"info-modal-input-title",placeholder:"Title",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Post Info"),r.a.createElement(O.a,{editor:x.a,data:"",onInit:function(e){},required:!0,onChange:function(e,a){var t=a.getData();p(t)},config:{ckfinder:{uploadUrl:"/uploads"}}})),r.a.createElement("div",{className:"info-modal-select"},r.a.createElement("label",{htmlFor:"select-importance"},"Importance"),r.a.createElement("select",{name:"importance",value:h,required:!0,onChange:function(e){return v(e.target.value)},className:"select-importance"},r.a.createElement("option",{value:"low"},"Low"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"high"},"High"))),r.a.createElement("div",{className:"info-modal-submit"},r.a.createElement("button",{type:"submit",className:"info-btn-modal-submit"},"Insert")))))))}function F(){return r.a.createElement("div",{className:"info-loader"})}function M(e){var a=r.a.useContext(w),t=r.a.useContext(g),n=e.id,o=e.title,l=e.importance,c=e.createdAt,i=e.text,m=e.user,u=r.a.useState(!1),d=Object(s.a)(u,2),p=d[0],f=d[1],E=r.a.useState(!1),h=Object(s.a)(E,2),v=h[0],b=h[1],N=r.a.useState(),S=Object(s.a)(N,2),C=S[0],y=S[1];r.a.useEffect((function(){}),[]);return r.a.createElement("div",null,r.a.createElement("div",{key:n,className:"content"},r.a.createElement("div",{className:"info-card"},r.a.createElement("div",{className:"info-card-title"}," ",o," "),r.a.createElement("div",{className:"info-card-owner"},r.a.createElement("b",null,"Owner"),": ","".concat(m.fname," ").concat(m.lname)," "),r.a.createElement("div",{className:"low"===l?"info-card-importance low":"high"===l?"info-card-importance high":"medium"===l?"info-card-importance  medium":null},r.a.createElement("b",null,"Relevance: ")," ",l),r.a.createElement("div",{className:"info-card-time"},r.a.createElement("b",null,"Date: "),new Date(c).toLocaleDateString("it-IT",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"})),r.a.createElement(O.a,{editor:x.a,data:i,disabled:!v,onInit:function(e){},onChange:function(e,a){var t=a.getData();y(t)},config:{ckfinder:{uploadUrl:"/uploads"}}}),"Not Found"===o?"":r.a.createElement("div",{className:"info-card-btns"},p?r.a.createElement("div",{className:"confirm-del info-btn-del-".concat(n)},r.a.createElement("button",{onClick:function(){return a.deletePost("".concat(n))},className:"btn-del"},"Confirm")):r.a.createElement("div",{className:"confirm-del"},t.state.user.email===m.email||"admin"===t.state.user.role?r.a.createElement("button",{onClick:function(){return function(e){if(!window.confirm("Are you sure?"))return alert("Be aware.");f(!p)}("".concat(n))},className:"btn-del btn-del-btn-".concat(n)}," Delete"):null),t.state.user.email===m.email||"admin"===t.state.user.role?r.a.createElement("div",{className:"info-edit"},r.a.createElement("button",{onClick:function(){return"".concat(n),void b(!v)},className:"edit-btn"},"Edit"),v?r.a.createElement("button",{onClick:function(){return function(e,t){a.updatePost(e,t),b(!v)}("".concat(n),{dataUpdate:C})},className:"edit-btn-update"},"Update"):""):null))))}var R=r.a.memo((function(){var e=r.a.useContext(w),a=e.state.posts.map((function(e){return r.a.createElement(M,{key:e._id,id:e._id,user:e.user,title:e.title,importance:e.importance,createdAt:e.createdAt,text:e.text})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"sec-1"},r.a.createElement("div",{className:"content alignCenter"},e.state.fetchError?e.state.fetchError:null,e.state.loading?r.a.createElement(F,null):a,r.a.createElement("div",{className:"info-navigation"},r.a.createElement("div",{className:"info-prev"},void 0!==e.state.prev&&r.a.createElement("button",{onClick:function(){return a=e.state.prev.page,t=e.state.prev.limit,window.scrollTo({top:0,behavior:"smooth"}),void e.fetchData(a,t);var a,t},className:"btn-prev"},"Previous")),r.a.createElement("div",{className:"info-next"},void 0!==e.state.next&&r.a.createElement("button",{onClick:function(){return a=e.state.next.page,t=e.state.next.limit,window.scrollTo({top:0,behavior:"smooth"}),void e.fetchData(a,t);var a,t},className:"btn-next"},"Next"))))),r.a.createElement("div",{className:"made-with-love"},"Made with big",r.a.createElement("i",{className:"i-love"}," \u2665 ")," by",r.a.createElement("a",{className:"a-love",target:"_blank",href:"mailto:alessandro.carta@gmail.com"}," @alex Paper")))}));var _=Object(c.a)(i)((function(e){var a=r.a.useContext(w),t=e.classes;return r.a.createElement("div",{className:a.isDark?t.isDark:t.isPink},e.children)}));t(75);var U=r.a.memo((function(e){var a,t=r.a.useContext(g),n=e.openSignUp,o=e.openModalSignUp,l=r.a.useState(""),c=Object(s.a)(l,2),i=c[0],m=c[1],p=r.a.useState(""),f=Object(s.a)(p,2),h=f[0],v=f[1],b=r.a.useState(""),w=Object(s.a)(b,2),N=w[0],S=w[1],C=r.a.useState(""),y=Object(s.a)(C,2),O=y[0],k=y[1],x=r.a.useState(""),j=Object(s.a)(x,2),F=j[0],M=j[1],R=r.a.useState("user"),_=Object(s.a)(R,2),U=_[0],D=_[1],P=r.a.useState({success:!1,data:[{}]}),A=Object(s.a)(P,2),L=A[0],T=A[1];function H(){return(H=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/user/register",e.next=3,E.a.post("/user/register",a).then((function(e){o(),t.flashMessage("\ud83d\udc4c Signup success."),T({success:!0,data:[{}]})})).catch((function(e){if(e.response){var a=e.response.data;T(a)}else e.request}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return void 0!==L.data&&(a=L.data.map((function(e){return void 0!==e.fname?e.fname:void 0!==e.lname?e.lname:void 0!==e.email?e.email:void 0!==e.password?e.password:void 0!==e.role?e.role:void 0}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n?"info-modal-window info-modal-window-show":"info-modal-window"},r.a.createElement("div",{className:"info-modal-windows-up"},r.a.createElement("button",{onClick:function(){return o()},className:"info-modal-close"},"X"),r.a.createElement("div",{className:"signup-messages"},!1===L.success?r.a.createElement("div",{className:"errorDiv"}," ",a.join(" \ud83d\udeb8 ")," "):null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),T({success:!0,data:[{}]}),function(e){H.apply(this,arguments)}({fname:i,lname:h,email:N,password:O,pswConfirm:F,role:U}),m(""),v(""),S(""),k(""),M("")},className:"info-modal-form"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"fname"}),r.a.createElement("input",{type:"text",name:"fname",value:i,onChange:function(e){return m(e.target.value)},className:"info-modal-input-title",placeholder:"First Name"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"lname"}),r.a.createElement("input",{type:"text",name:"lname",value:h,onChange:function(e){return v(e.target.value)},className:"info-modal-input-title",placeholder:"Last Name"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"}),r.a.createElement("input",{type:"email",name:"email",value:N,onChange:function(e){return S(e.target.value)},className:"info-modal-input-title",placeholder:"Email"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"psw"}),r.a.createElement("input",{type:"password",name:"psw",value:O,onChange:function(e){return k(e.target.value)},className:"info-modal-input-title",placeholder:"Password"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"psw"}),r.a.createElement("input",{type:"password",name:"confirm",value:F,onChange:function(e){return M(e.target.value)},className:"info-modal-input-title",placeholder:"Confirm"})),r.a.createElement("div",{className:"info-modal-select"},r.a.createElement("label",{htmlFor:"select-importance"},"Role"),r.a.createElement("select",{name:"importance",value:U,onChange:function(e){return D(e.target.value)},className:"select-importance"},r.a.createElement("option",{value:"user"},"User"),r.a.createElement("option",{value:"publisher"},"Publisher"))),r.a.createElement("div",{className:"info-modal-submit"},r.a.createElement("button",{type:"submit",className:"info-btn-modal-submit"},"Insert"))))))}));t(76);var D=r.a.memo((function(e){var a=r.a.useContext(g),t=e.openLogin,n=e.openModalLogin,o=r.a.useState(""),l=Object(s.a)(o,2),c=l[0],i=l[1],m=r.a.useState(""),p=Object(s.a)(m,2),f=p[0],h=p[1],v=r.a.useState({message:"Fill fields"}),b=Object(s.a)(v,2),w=b[0],N=b[1],S=r.a.useState({message:""}),C=Object(s.a)(S,2),y=C[0],O=C[1];function k(){return(k=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/user/login",e.next=3,E.a.post("/user/login",t).then((function(e){N({message:""}),O({message:""}),n(),a.flashMessage("\ud83d\udc4c Login success."),a.whoIsLogged()})).catch((function(e){e.response?401===e.response.status&&N({message:"\ud83e\udd7a Invalid Credentials."}):e.request;var a=JSON.parse(e.config.data);0===a.username.length&&N({message:"\ud83d\udeb8 Insert Email."}),0===a.password.length&&O({message:"\ud83d\udeb8 Insert Password."})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t?"info-modal-window info-modal-window-show":"info-modal-window"},r.a.createElement("div",{className:"info-modal-windows-up"},r.a.createElement("button",{onClick:function(){return n()},className:"info-modal-close"},"X"),r.a.createElement("div",{className:"login-messages"},w.message?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"errorDiv"}," ",w.message," ")):null,y.message?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"errorDiv"},"  ",y.message," ")):null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N({message:""}),O({message:""}),function(e){k.apply(this,arguments)}({username:c,password:f}),i(""),h("")},className:"info-modal-form"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"}),r.a.createElement("input",{type:"email",name:"email",value:c,onChange:function(e){return i(e.target.value)},className:"info-modal-input-title",placeholder:"Email"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"psw"}),r.a.createElement("input",{type:"password",name:"psw",value:f,onChange:function(e){return h(e.target.value)},className:"info-modal-input-title",placeholder:"Password"})),r.a.createElement("div",{className:"info-modal-submit"},r.a.createElement("button",{type:"submit",className:"info-btn-modal-submit"},"Insert"))))))}));var P=function(){var e=r.a.useState(!1),a=Object(s.a)(e,2),t=a[0],n=a[1],o=r.a.useState(!1),l=Object(s.a)(o,2),c=l[0],i=l[1],m=r.a.useState(!1),u=Object(s.a)(m,2),d=u[0],p=u[1],f=function(){n(!t)},E=function(){i(!c)},h=function(){p(!d)};return r.a.createElement(b,null,r.a.createElement(N,null,r.a.createElement(_,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,{openModalFunc:f,openModalSignUp:E,openModalLogin:h}),r.a.createElement(j,{openModal:t,openModalFunc:f}),r.a.createElement(U,{openSignUp:c,openModalSignUp:E}),r.a.createElement(D,{openLogin:d,openModalLogin:h}),r.a.createElement(R,null)))))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f83d5af8.chunk.js.map