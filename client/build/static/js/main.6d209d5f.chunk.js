(this["webpackJsonpcool-todo-list"]=this["webpackJsonpcool-todo-list"]||[]).push([[0],{13:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(291),r=a.n(n),c=(a(314),a(317),r.a.initializeApp({apiKey:"AIzaSyDEpXTNZDhoUIaz-IS6I_KHaLJ70fow3tc",authDomain:"todo-app-c854e.firebaseapp.com",databaseURL:"https://todo-app-c854e.firebaseio.com",projectId:"todo-app-c854e",storageBucket:"todo-app-c854e.appspot.com",messagingSenderId:"1053788292617",appId:"1:1053788292617:web:83b1be32d15e070c559ad8"}));console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FIREBASE_APIKEY)},140:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(30),r=function(e,t){return e.find((function(e){return e.projectId===t}))},c=function(e,t){return e.find((function(e){return e.key===t}))},o=function(e){return n.a.find((function(t){return t.key===e}))},l=function(e){var t=[],a=e.split("");return a[0]?(t.push(a[0]),t):null},i=function(){var e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t=[];return function(){for(var a=(new Date).getTime(),n=new Array(8),r=7;r>=0;r--)n[r]=e.charAt(a%64),a=Math.floor(a/64);var c=n.join("");for(r=0;r<12;r++)c+=e.charAt(t[r]);return c}}()},142:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=(e.error,e.success);e.show;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"".concat(a?"success":"")},t))}},281:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));a(14),a(36);var n=a(16),r=a(6),c=a(0),o=a(26),l=a.n(o),i=a(13),s=a(140),u=function(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),o=a[0],u=a[1],d=Object(c.useState)([]),m=Object(r.a)(d,2),f=m[0],p=m[1];return Object(c.useEffect)((function(){var t;t=i.a.auth().currentUser&&null!==i.a.auth().currentUser.uid?i.a.auth().currentUser.uid:"12435";var a=i.a.firestore().collection("tasks").where("userId","==",t);return a=(a=e&&!Object(s.a)(e)?a=a.where("projectId","==",e):"TODAY"===e?a=a.where("date","==",l()().format("DD/MM/YYYY")):"INBOX"===e||0===e?a=a.where("date","==",""):a).onSnapshot((function(t){var a=t.docs.map((function(e){return Object(n.a)({id:e.id},e.data())}));u("NEXT_7"===e?a.filter((function(e){return l()(e.date,"DD-MM-YYYY").diff(l()(),"days")<=7&&!0!==e.archived})):a.filter((function(e){return!0!==e.archived}))),p(a.filter((function(e){return!1!==e.archived})))})),function(){return a()}}),[e]),{tasks:o,archivedTasks:f}},d=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1];return null!==i.a.auth().currentUser&&console.log("user id: "+i.a.auth().currentUser.uid),Object(c.useEffect)((function(){var e;e=i.a.auth().currentUser&&null!==i.a.auth().currentUser.uid?i.a.auth().currentUser.uid:"12435",i.a.firestore().collection("projects").where("userId","==",e).orderBy("projectId").get().then((function(e){var t=e.docs.map((function(e){return Object(n.a)({},e.data(),{docId:e.id})}));JSON.stringify(t)!==JSON.stringify(a)&&o(t)}))}),[a]),{projects:a,setProjects:o}}},288:function(e,t,a){"use strict";var n=a(6),r=a(0),c=a.n(r),o=a(26),l=a.n(o),i=a(13),s=a(43),u=a(62),d=c.a.memo((function(e){var t=e.setProject,a=e.showProjectOverlay,n=e.setShowProjectOverlay,r=Object(u.c)().projects;return r&&a&&c.a.createElement("div",{className:"project-overlay","data-testid":"project-overlay"},c.a.createElement("ul",{className:"project-overlay__list"},r.map((function(e){return c.a.createElement("li",{key:e.projectId,"data-testid":"project-overlay-action"},c.a.createElement("div",{onClick:function(){t(e.projectId),n(!1)},onKeyDown:function(){t(e.projectId),n(!1)},role:"button",tabIndex:0,"aria-label":"Select the task project"}," ",e.name))}))))})),m=c.a.memo((function(e){var t=e.setTaskDate,a=e.showTaskDate,n=e.setShowTaskDate;return a&&c.a.createElement("div",{className:"task-date","data-testid":"task-date-overlay"},c.a.createElement("ul",{className:"task-date__list"},c.a.createElement("li",{className:"task-date__li"},c.a.createElement("div",{onClick:function(){n(!1),t(l()().format("DD/MM/YYYY"))},onKeyDown:function(){n(!1),t(l()().format("DD/MM/YYYY"))},"data-testid":"task-date-overlay",role:"button","aria-label":"Select today as the task date"},c.a.createElement("span",null,c.a.createElement(s.h,null)),c.a.createElement("span",null,"Today"))),c.a.createElement("li",{className:"task-date__li","data-testid":"task-date-tomorrow"},c.a.createElement("div",{onClick:function(){n(!1),t(l()().add(1,"day").format("DD/MM/YYYY"))},onKeyDown:function(){n(!1),t(l()().add(1,"day").format("DD/MM/YYYY"))},role:"button","aria-label":"Select tomorrow as the task date"},c.a.createElement("span",null,c.a.createElement(s.i,null)),c.a.createElement("span",null,"Tomorrow"))),c.a.createElement("li",{className:"task-date__li","data-testid":"task-date-next-week"},c.a.createElement("div",{onClick:function(){n(!1),t(l()().add(7,"days").format("DD/MM/YYYY"))},onKeyDown:function(){n(!1),t(l()().add(7,"days").format("DD/MM/YYYY"))},role:"button","aria-label":"Select next week as the task date"},c.a.createElement("span",null,c.a.createElement(s.g,null)),c.a.createElement("span",null,"Next Week")))))})),f=a(9);t.a=Object(f.b)((function(e){return{loggedIn:e.firebase.auth}}),null)((function(e){var t=e.showAddTaskMain,a=void 0===t||t,o=e.shouldShowMain,f=void 0!==o&&o,p=e.showQuickAddTask,E=e.setShowQuickAddTask,b=e.loggedIn,h=Object(r.useState)(""),v=Object(n.a)(h,2),g=v[0],k=v[1],j=Object(r.useState)(""),O=Object(n.a)(j,2),y=O[0],w=O[1],N=Object(r.useState)(""),S=Object(n.a)(N,2),_=S[0],I=S[1],T=Object(r.useState)(f),D=Object(n.a)(T,2),Y=D[0],M=D[1],C=Object(r.useState)(!1),x=Object(n.a)(C,2),U=x[0],A=x[1],P=Object(r.useState)(!1),F=Object(n.a)(P,2),L=F[0],R=F[1],V=Object(u.d)().selectedProject,W=function(){var e=_||V,t="";return"TODAY"===e?t=l()().format("DD/MM/YYYY"):"NEXT_7"===e&&(t=l()().add(7,"days").format("DD/MM/YYYY")),g&&e&&i.a.firestore().collection("tasks").add({archived:!1,projectId:e,task:g,date:t||y,userId:b.uid}).then((function(){k(""),I(""),M(""),A(!1)}))};return c.a.createElement("div",{className:p?"add-task add-task__overlay":"add-task","data-testid":"add-task-comp"},a&&c.a.createElement("div",{className:"add-task__shallow","data-testid":"show-main-action",onClick:function(){return M(!Y)}},c.a.createElement("span",{className:"add-task__plus"},"+"),c.a.createElement("span",{className:"add-task__text"},"Add Task")),(Y||p)&&c.a.createElement("div",{className:"add-task__main","data-testid":"add-task-main"},p&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{"data-testid":"quick-add-task"},c.a.createElement("h2",{className:"header"},"Quick Add Task"),c.a.createElement("span",{className:"add-task__cancel-x","data-testid":"add-task-quick-cancel","aria-label":"Cancel adding task",onClick:function(){M(!1),A(!1),E(!1)}},"X"))),c.a.createElement(d,{setProject:I,showProjectOverlay:U,setShowProjectOverlay:A}),c.a.createElement(m,{setTaskDate:w,showTaskDate:L,setShowTaskDate:R}),c.a.createElement("input",{className:"add-task__content","data-testid":"add-task-content",type:"text","aria-label":"Enter your task",onChange:function(e){return k(e.target.value)}}),c.a.createElement("button",{type:"button",className:"add-task__submit","data-testid":"add-task",onClick:function(){return p?W()&&E(!1):W()},onKeyDown:function(){return p?W()&&E(!1):W()}},"Add Task"),!p&&c.a.createElement("span",{className:"add-task__cancel","data-testid":"add-task-main-cancel",onClick:function(){M(!1),A(!1)},"aria-label":"Cancel adding a task"},"Cancel"),c.a.createElement("span",{className:"add-task__project","data-testid":"show-project-overlay",onClick:function(){return A(!U)}},c.a.createElement(s.f,null)),c.a.createElement("span",{className:"add-task__date","data-testid":"show-task-date-overlay",onClick:function(){return R(!L)}},c.a.createElement(s.e,null))))}))},3:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"k",(function(){return r})),a.d(t,"j",(function(){return c})),a.d(t,"i",(function(){return o})),a.d(t,"m",(function(){return l})),a.d(t,"n",(function(){return i})),a.d(t,"l",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"g",(function(){return f})),a.d(t,"a",(function(){return p})),a.d(t,"c",(function(){return E})),a.d(t,"b",(function(){return b}));var n="SIGNUP_USER",r="SIGNUP_USER_SUCCESS",c="SIGNUP_USER_FAILURE",o="SIGNUP_USER_END",l="VERIFY_START",i="VERIFY_SUCCESS",s="VERIFY_FAIL",u="SHOW_MODAL",d="HIDE_MODAL",m="LOGIN_MODAL",f="SIGNUP_MODAL",p="CLEAN_UP",E="DELETE_START",b="DELETE_FAIL"},30:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));var n=[{key:"INBOX",name:"Inbox"},{key:"TODAY",name:"Today"},{key:"NEXT_7",name:"Next 7 Days"}],r={username:"Your name",email:"Email",password:"Password",confirmPassword:"Confirm password",terms:"I agree to the Terms of Services and Privacy Policy"},c=[{location:"Google Play",rating:"\u2605\u2605\u2605\u2605\u2605",id:1,comment:"Editor\u2019s Choice\n    4.7 stars, 187K+ reviews"},{location:"App Store",rating:"\u2605\u2605\u2605\u2605\u2605",id:2,comment:"Featured app\n    4.8 stars, 30K+ reviews"},{location:"Verge",rating:"\u2605\u2605\u2605\u2605\u2605",id:3,comment:"The best to-do list app\n    right now"}]},306:function(e,t,a){e.exports=a(515)},514:function(e,t,a){},515:function(e,t,a){"use strict";a.r(t);var n=a(143),r=a.n(n),c=a(0),o=a.n(c),l=a(9),i=a(82),s=a(58),u=a(290),d=a(13),m=a(112),f=a(113),p=a(292),E=a.n(p),b=a(3),h={modalType:null},v=a(16),g={error:null,loading:!1,verifyEmail:{error:null,loading:!1},deleteUser:{loading:!1,error:null}},k=function(e){return Object(v.a)({},e,{loading:!0})},j=function(e){return Object(v.a)({},e,{error:!1})},O=function(e,t){return Object(v.a)({},e,{error:t})},y=function(e){return Object(v.a)({},e,{loading:!1})},w=function(e){return Object(v.a)({},e,{verifyEmail:Object(v.a)({},e.verifyEmail,{loading:!0})})},N=function(e){return Object(v.a)({},e,{verifyEmail:Object(v.a)({},e.verifyEmail,{loading:!1,error:!1})})},S=function(e,t){return Object(v.a)({},e,{verifyEmail:Object(v.a)({},e.verifyEmail,{loading:!1,error:t})})},_=function(e,t){return Object(v.a)({},e,{deleteUser:Object(v.a)({},e.deleteUser,{loading:!1,error:t})})},I=function(e){return Object(v.a)({},e,{error:null,loading:!1,verifyEmail:Object(v.a)({},e.verifyEmail,{loading:!1,error:null}),deleteUser:Object(v.a)({},e.deleteUser,{loading:!1,error:null})})},T=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case b.a:return I(e);case b.h:return k(e);case b.k:return j(e);case b.j:return O(e,n);case b.i:return y(e);case b.m:return w(e);case b.n:return N(e);case b.l:return S(e,n);case b.b:return _(e,n);default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case b.f:a.modalType=t.modalType;break;case b.d:return h;default:return e}return a},firebase:m.firebaseReducer,firestore:f.firestoreReducer}),D=s.d,Y=Object(s.e)(T,D(Object(m.reactReduxFirebase)(d.a,{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0}),Object(f.reduxFirestore)(d.a),Object(s.a)(u.a.withExtraArgument({getFirebase:m.getFirebase,getFirestore:f.getFirestore}),E.a))),M=a(6),C=a(43),x=function(e){var t=e.loggedIn;return o.a.createElement("div",{className:"logo"},t.uid?o.a.createElement("img",{src:"/image/logo.png",alt:"Todoist"}):o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:"/image/home-logo.svg",alt:"Todoist"})))},U=a(288),A=function(e){var t=e.children,a=e.link,n=e.clicked;return o.a.createElement("li",{onClick:n},o.a.createElement("a",{href:a},t))},P=function(e){return{type:b.f,modalType:e}},F=function(){return{type:b.d}},L=a(293),R=a.n(L),V=a(201),W=a.n(V),K=a(294),G=a.n(K),q=a(140),B=Object(l.b)((function(e){return{loggedIn:e.firebase.auth}}),null)((function(e){var t=e.loggedIn,a=Object(c.useState)(!1),n=Object(M.a)(a,2),r=n[0],l=n[1],s=Object(c.useState)({}),u=Object(M.a)(s,2),m=u[0],f=u[1];return console.log(t.uid),Object(c.useEffect)((function(){d.a.firestore().collection("users").doc(t.uid).get().then((function(e){e.exists?f(e.data()):console.log("No such document!")}))}),[]),o.a.createElement("div",{className:"user-profile-menu"},o.a.createElement("div",{className:"user-avatar"},m&&m.userName&&Object(q.d)(m.userName)),o.a.createElement("div",{className:"user-drop-down-icon",onClick:function(){l(!r)}},o.a.createElement(R.a,null)),r&&o.a.createElement("div",{className:"user-profile-menu-panel"},o.a.createElement("div",{className:"menu-item"},o.a.createElement("span",null,"Try Premium"),o.a.createElement(W.a,null)),o.a.createElement("div",{className:"menu-item"},o.a.createElement("span",null,"Settings"),o.a.createElement(W.a,null)),o.a.createElement("hr",null),o.a.createElement("div",{className:"menu-log-out"},o.a.createElement(G.a,null),o.a.createElement(i.b,{to:"/home/logout"},"Log Out"))))})),J=function(e){var t=e.showSideMenu;return o.a.createElement("div",{className:"hamburger",onClick:t})},z=function(e){var t=e.links,a=e.showHeaderSidebar;return o.a.createElement("div",{className:"headerSidebar ".concat(a?"showSide":"")},o.a.createElement("ul",null,t))},H=Object(l.b)(null,(function(e){return{showModal:function(t){return e(P(t))}}}))((function(e){var t,a=e.darkMode,n=e.setDarkMode,r=e.loggedIn,l=e.showModal,i=e.emailVerified,s=Object(c.useState)(!1),u=Object(M.a)(s,2),m=u[0],f=u[1],p=Object(c.useState)(!1),E=Object(M.a)(p,2),h=E[0],v=E[1],g=Object(c.useState)(!1),k=Object(M.a)(g,2),j=k[0],O=k[1],y=function(){O(!j)};return r.uid?(console.log("loggedIn.uid",r),console.log("firebase",d.a),t=o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{"data-testid":"quick-add-task-action",className:"settings__add"},o.a.createElement("button",{"aria-label":"Quick Add Task",onClick:function(){v(!0),f(!0)},onKeyDown:function(){v(!0),f(!0)}},"+")),o.a.createElement("li",{"data-testid":"dark-mode-action",className:"settings__darkmode"},o.a.createElement("button",{"aria-label":"Darkmode on/off",type:"button",onClick:function(){return n(!a)},onKeyDown:function(){return n(!a)}},a?o.a.createElement(C.i,null):o.a.createElement(C.c,null))),o.a.createElement(B,null),o.a.createElement(U.a,{showAddTaskMain:!1,shouldShowMain:m,showQuickAddTask:h,setShowQuickAddTask:v}))):t=o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{link:"/premium"},"Premium"),o.a.createElement(A,{clicked:function(){O(!j),l(b.e)}},"Login"),o.a.createElement(A,{clicked:function(){O(!j),l(b.g)}},"Signup")),r.uid&&!i?null:o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header","data-testid":"header"},o.a.createElement("nav",null,o.a.createElement(x,{loggedIn:r}),o.a.createElement("div",{className:"settings"},o.a.createElement("ul",{className:"".concat(r.uid?"":"linksWrapper")},t),!r.uid&&o.a.createElement(J,{showSideMenu:y}))),o.a.createElement("div",{id:"sidebar",onClick:function(e){return function(e){"sidebar"===e.target.id&&y()}(e)},className:"".concat(j&&"headerSidebarOverlay")},!r.uid&&o.a.createElement(z,{links:t,showHeaderSidebar:j}))))})),X=a(83),Q=a(61),Z=a(14),$=a.n(Z),ee=a(36),te=a(528),ae=a(32),ne=a(37),re=a(30),ce=a(70),oe=a(7),le=a(299),ie=a.n(le),se=function(e){var t=e.label,a=e.field,n=e.form,r=n.touched,c=n.errors,l=Object(oe.a)(e,["label","field","form"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"label",htmlFor:l.id||l.name},t),o.a.createElement("input",Object.assign({className:"input"},a,l)),c[a.name]&&r[a.name]?o.a.createElement("div",{className:"errorInput"},o.a.createElement(ie.a,null),c[a.name]):null)},ue=a(142),de=function(e){console.log(e);return o.a.createElement("div",{className:"auth-modal-overlay"},o.a.createElement("div",{className:"auth-modal-inner"},o.a.createElement("div",{className:"auth-modal-close"},o.a.createElement("h6",null,e.title),o.a.createElement("span",{onClick:function(){e.onClose()}},"X")),e.children))},me=ne.b().shape({userName:ne.d().required("You need a username silly!").min(3,"Too short").max(25,"Too long"),email:ne.d().email("email dosen't work :/").required("You need an email silly!"),password:ne.d().required("You need a password silly!").min(8,"Too short"),confirmPassword:ne.d().oneOf([ne.c("password"),null],"Password doesn't match").required("You need to confirm your password"),acceptedTerms:ne.a().required("Required").oneOf([!0],"You must accept the terms and conditions")}),fe={signUp:ce.d,hideModal:function(){return F()},cleanUp:ce.a},pe=Object(l.b)((function(e){var t=e.auth;return{loading:t.loading,error:t.error}}),fe)((function(e){var t=e.signUp,a=e.loading,n=e.error,r=e.hideModal,l=e.cleanUp;Object(c.useEffect)((function(){return function(){l()}}),[l]);var i=function(){r()};return o.a.createElement(ae.c,{initialValues:{userName:"",email:"",password:"",confirmPassword:"",acceptedTerms:!1},validationSchema:me,onSubmit:function(){var e=Object(ee.a)($.a.mark((function e(a,n){var c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.setSubmitting,e.next=3,t(a);case 3:c(!1),r();case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.isSubmitting,r=e.isValid;return(o.a.createElement(de,{title:"Sign up",onClose:i},o.a.createElement(ae.b,{className:"signUpWrapper"},o.a.createElement(ae.a,{type:"text",label:re.b.username,name:"userName",component:se}),o.a.createElement(ae.a,{type:"email",label:re.b.email,name:"email",component:se}),o.a.createElement(ae.a,{type:"password",label:re.b.password,name:"password",component:se}),o.a.createElement(ae.a,{type:"password",label:re.b.confirmPassword,name:"confirmPassword",component:se}),o.a.createElement("div",{className:"authCheckbox"},o.a.createElement(ae.a,{type:"checkbox",label:re.b.terms,name:"acceptedTerms",component:se})),o.a.createElement("button",{disabled:!r||t,type:"submit"},"Create My Account"),a&&o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(te.a,null)),o.a.createElement("div",null,o.a.createElement(ue.a,{error:!0,show:n},X.NotificationManager.error({error:n}))))))}))})),Ee=a(300),be=a(301),he=a(62),ve=Object(l.b)((function(e){var t=e.firebase;return{loggedIn:t.auth,emailVerified:t.auth.emailVerified}}))((function(e){var t=e.darkModeDefault,a=void 0!==t&&t,n=e.children,r=e.loggedIn,l=e.emailVerified,i=Object(c.useState)(a),s=Object(M.a)(i,2),u=s[0],d=s[1];return o.a.createElement(he.b,null,o.a.createElement(he.a,null,o.a.createElement("main",{"data-testid":"application",className:u?"darkmode":r.uid?void 0:"signedOutHeader"},o.a.createElement(H,{loggedIn:r,emailVerified:l,darkMode:u,setDarkMode:d})," ",o.a.createElement("div",{className:"MainContent"},n)),";"))})),ge=ne.b().shape({email:ne.d().email("email dosen't work :/").required("You need an email silly!"),password:ne.d().required("You need a password silly!").min(8,"Too short")}),ke={signIn:ce.b,hideModal:function(){return F()},cleanUp:ce.a},je={LOGIN_MODAL:Object(l.b)((function(e){var t=e.auth;return{loading:t.loading,error:t.error}}),ke)((function(e){var t=e.signIn,a=e.loading,n=e.error,r=e.hideModal,l=e.cleanUp;Object(c.useEffect)((function(){return function(){l()}}),[l]);var i=function(){r()};return o.a.createElement(ae.c,{initialValues:{email:"",password:""},validationSchema:ge,onSubmit:function(){var e=Object(ee.a)($.a.mark((function e(a,n){var c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.setSubmitting,e.next=3,t(a);case 3:c(!1),r();case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.isSubmitting,r=e.isValid;return o.a.createElement(de,{title:"Sign In",onClose:i},o.a.createElement(ae.b,{className:"signUpWrapper"},o.a.createElement(ae.a,{type:"email",label:re.b.email,name:"email",component:se}),o.a.createElement(ae.a,{type:"password",label:re.b.password,name:"password",component:se}),o.a.createElement("button",{disabled:!r||t,type:"submit"},"Sign in"),a&&o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(te.a,null)),o.a.createElement("div",null,o.a.createElement(ue.a,{error:!0,show:n},X.NotificationManager.error({error:n})))))}))})),SIGNUP_MODAL:pe},Oe=Object(l.b)((function(e){return{modalType:e.modal.modalType}}))((function(e){if(!e.modalType)return null;var t=je[e.modalType];return o.a.createElement(t,null)})),ye=function(e){var t=Object.assign({},e);return console.log("rest.comment",t),o.a.createElement("div",null,o.a.createElement("p",null,t.location),o.a.createElement("div",{className:"rating-wrapper"},o.a.createElement("div",null,t.rating),o.a.createElement("h4",null,t.comment)))},we=function(){return o.a.createElement("div",{className:"review-wrapper"},re.c.map((function(e){return o.a.createElement(ye,Object.assign({key:e.id},e))})))},Ne=a(302),Se=a.n(Ne),_e=Object(l.b)(null,(function(e){return{showModal:function(t){return e(P(t))}}}))((function(e){var t=e.showModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"homeWrapper"},o.a.createElement("section",null,o.a.createElement("div",{className:"heroWrapper"},o.a.createElement("h1",null,"Organize your work"),o.a.createElement("a",{onClick:function(){t(b.g)}},"Get Started")),o.a.createElement("img",{className:"home-hero",src:"/image/download.png",alt:"cartoon cat and rat looking at each other"})),o.a.createElement("section",{className:"reviewSection"},o.a.createElement("div",{className:"reviewBG"}),o.a.createElement(we,null)),o.a.createElement("section",{className:"videoSection"},o.a.createElement("div",{className:"videoContent"},o.a.createElement("p",null,"Todoist has helped",o.a.createElement("br",null),"millions of people complete",o.a.createElement("h1",null,"over 1.5 billion tasks",o.a.createElement("br",null),"in 150+ million projects"))),o.a.createElement("div",{className:"videoWrapper"},o.a.createElement("div",{className:"videoContainer"},o.a.createElement("img",{src:"./image/bg-green.webp",className:"green-bg"}),o.a.createElement("img",{src:"./image/video-thumb.webp",className:"video-thumb"})),o.a.createElement("a",{href:"https://www.youtube.com/channel/UC2cIJ3z3TaHdcBofbroVUEA?view_as=subscriber"},o.a.createElement("div",{className:"arrowForward"},o.a.createElement(Se.a,null)),o.a.createElement("span",null,"Learn more about the Todoist community"))))))})),Ie={logout:ce.c},Te=Object(l.b)(null,Ie)((function(e){var t=e.logout;return Object(c.useEffect)((function(){t()}),[t]),null})),De=function(e){e.price;var t,a=Object(c.useState)(!1),n=Object(M.a)(a,2),r=(n[0],n[1],Object(c.useState)()),l=Object(M.a)(r,2),i=(l[0],l[1],window.Stripe("pk_test_2do6pJchuMIGtZ2cqrLgDjM300sB7DRzbF"));Object(c.useEffect)((function(){fetch("https://todoist-server.herokuapp.com/charge",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(e){t=e.id,console.log(e.id)}))}));return o.a.createElement("div",{className:"homeWrapper"},o.a.createElement("section",null,o.a.createElement("div",{className:"heroWrapper"},o.a.createElement("h1",null,"Join Todoist Gold"),o.a.createElement("a",{onClick:function(e){e.preventDefault(),i.redirectToCheckout({sessionId:t})}},"Let's do this!")),o.a.createElement("img",{className:"home-hero",src:"/image/fish-trophy.png",alt:"cartoon cat and rat looking at each other"})))},Ye=o.a.lazy((function(){return a.e(4).then(a.bind(null,530))})),Me=o.a.lazy((function(){return a.e(3).then(a.bind(null,529))})),Ce=Object(Ee.a)("pk_test_2do6pJchuMIGtZ2cqrLgDjM300sB7DRzbF"),xe=Object(l.b)((function(e){var t=e.firebase;return{loggedIn:t.auth.uid,emailVerified:t.auth.emailVerified}}))((function(e){var t,a=e.loggedIn,n=e.emailVerified;return t=a&&!n?o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(Q.d,null,o.a.createElement(Q.b,{exact:!0,path:"/verify-email",component:Me}),o.a.createElement(Q.a,{to:"/verify-email"}))):a&&n?o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(Q.d,null,o.a.createElement(Q.b,{exact:!0,path:"/home",component:Ye}),o.a.createElement(Q.b,{exact:!0,path:"/home/logout",component:Te}),o.a.createElement(Q.a,{to:"/home"}))):o.a.createElement(Q.d,null,o.a.createElement(Q.b,{exact:!0,path:"/",component:_e}),o.a.createElement(Q.b,{exact:!0,path:"/premium",component:De}),o.a.createElement(Q.b,{exact:!0,path:"/signup",component:pe}),o.a.createElement(Q.a,{to:"/"})),o.a.createElement(ve,null,o.a.createElement(be.Elements,{stripe:Ce},t),o.a.createElement(Oe,null))})),Ue=(a(514),function(){return o.a.createElement("div",{className:"sk-folding-cube"},o.a.createElement("div",{className:"sk-cube1 sk-cube"}),o.a.createElement("div",{className:"sk-cube2 sk-cube"}),o.a.createElement("div",{className:"sk-cube4 sk-cube"}),o.a.createElement("div",{className:"sk-cube3 sk-cube"}))}),Ae=document.getElementById("root");r.a.render(o.a.createElement("div",{className:"loaderWrapper"},o.a.createElement(Ue,null)),Ae),Y.firebaseAuthIsReady.then((function(){r.a.render(o.a.createElement(l.a,{store:Y},o.a.createElement(i.a,null,o.a.createElement(xe,null))),Ae)}))},62:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(281),o=Object(n.createContext)(),l=function(e){var t=e.children,a=Object(c.a)(),n=a.projects,l=a.setProjects;return r.a.createElement(o.Provider,{value:{projects:n,setProjects:l}},t)},i=function(){return Object(n.useContext)(o)},s=a(6),u=Object(n.createContext)(),d=function(e){var t=e.children,a=Object(n.useState)("INBOX"),c=Object(s.a)(a,2),o=c[0],l=c[1];return r.a.createElement(u.Provider,{value:{selectedProject:o,setSelectedProject:l}},t)},m=function(){return Object(n.useContext)(u)};a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return m}))},70:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return d}));var n=a(14),r=a.n(n),c=a(36),o=(a(83),a(3)),l=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a,n,c){var l,i,s,u,d,m;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=c.getFirebase,i=c.getFirestore,s=l(),u=i(),a({type:o.h}),t.prev=4,t.next=7,s.auth().createUserWithEmailAndPassword(e.email,e.password);case 7:return d=t.sent,m=s.auth().currentUser,t.next=11,m.sendEmailVerification();case 11:return t.next=13,u.collection("users").doc(d.user.uid).set({userName:e.userName});case 13:a({type:o.k}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),a({type:o.j,payload:t.t0.message});case 19:a({type:o.i});case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e,a,n){return t.apply(this,arguments)}}()},i=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a,n,c){var l,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=c.getFirebase,i=l(),a({type:o.h}),t.prev=3,t.next=6,i.auth().signInWithEmailAndPassword(e.email,e.password);case 6:a({type:o.k}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),a({type:o.j,payload:t.t0.message});case 12:a({type:o.i});case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e,a,n){return t.apply(this,arguments)}}()},s=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.getFirebase,o=c(),e.prev=2,e.next=5,o.auth().signOut();case 5:console.log("signout fired!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a,n){return e.apply(this,arguments)}}()},u=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,l,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.getFirebase,l=c(),t({type:o.m}),e.prev=3,i=l.auth().currentUser,e.next=7,i.sendEmailVerification();case 7:t({type:o.n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:o.l,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a,n){return e.apply(this,arguments)}}()},d=function(){return{type:o.a}}}},[[306,1,2]]]);
//# sourceMappingURL=main.6d209d5f.chunk.js.map