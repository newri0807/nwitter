(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(41),s=n.n(r),i=n(11),o=n(44),u=n(26),j=n(29),l=n(45),b=(Object(o.a)({apiKey:"AIzaSyClAoj9lijdRL7qPk5PnEgVRyAaunvDBGA",authDomain:"nwitter-9fb6c.firebaseapp.com",databaseURL:"https://nwitter-9fb6c-default-rtdb.firebaseio.com",projectId:"nwitter-9fb6c",storageBucket:"nwitter-9fb6c.appspot.com",messagingSenderId:"211654136733",appId:"1:211654136733:web:2d9eb81df03a3c96fc1574"}),Object(u.d)()),O=Object(j.b)(),d=Object(l.a)(),p=n(28),f=n(12),m=n(0),x=n.n(m),h=n(2),g=n(6),v=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],j=s[1],l=Object(c.useState)(!0),O=Object(i.a)(l,2),d=O[0],p=O[1],f=Object(c.useState)(""),m=Object(i.a)(f,2),v=m[0],y=m[1],w=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&j(c)},N=function(){var e=Object(h.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,Object(u.c)(b,n,o);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,Object(u.e)(b,n,o);case 10:c=e.sent;case 11:console.log(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:N,className:"container",children:[Object(g.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:w,className:"authInput"}),Object(g.jsx)("input",{className:"authInput authSubmit",type:"submit",value:d?"Create Account":"Sign In"}),v&&Object(g.jsx)("span",{className:"authError",children:v})]}),Object(g.jsx)("span",{onClick:function(){return p((function(e){return!e}))},className:"authSwitch",children:d?"Sign In":"Create Account"})]})},y=n(23),w=n(32),N=function(){var e=function(){var e=Object(h.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new u.b:"github"===n&&(c=new u.a),e.next=4,Object(u.f)(b,c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(y.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)(v,{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(g.jsx)(y.a,{icon:w.b})]}),Object(g.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(g.jsx)(y.a,{icon:w.a})]})]})]})},S=n(46),k=n(20),C=n(42),I=n(24),F=n(27),A=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(C.useState)(!1),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(C.useState)(t.text),u=Object(i.a)(o,2),j=u[0],l=u[1],b=Object(k.d)(O,"nweets","".concat(t.id)),p=function(){var e=Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=8;break}return e.next=4,Object(k.c)(b);case 4:return e.next=6,Object(k.c)(Object(k.d)(Object(k.e)(),"nweets/".concat(t.id)));case 6:return e.next=8,Object(I.a)(Object(I.d)(d,t.attachmentUrl));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){return s((function(e){return!e}))},m=function(){var e=Object(h.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Object(k.i)(Object(k.d)(O,"nweets/".concat(t.id)),{text:j});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:r?Object(g.jsx)(g.Fragment,{children:n&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:m,className:"container nweetEdit",children:[Object(g.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:j,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;l(t)},className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(g.jsx)("span",{onClick:f,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl}),n&&Object(g.jsxs)("div",{className:"nweet__actions",children:[Object(g.jsx)("span",{onClick:p,children:Object(g.jsx)(y.a,{icon:F.d})}),Object(g.jsx)("span",{onClick:f,children:Object(g.jsx)(y.a,{icon:F.a})})]})]})})},_=n(60),B=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),j=u[0],l=u[1],b=function(){var e=Object(h.a)(x.a.mark((function e(n){var c,a,i,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),c="",""===j){e.next=13;break}return a=Object(I.d)(d,"".concat(t.uid,"/").concat(Object(_.a)())),e.next=8,Object(I.e)(a,j,"data_url");case 8:return i=e.sent,console.log(i),e.next=12,Object(I.b)(i.ref);case 12:c=e.sent;case 13:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.next=16,Object(k.a)(Object(k.b)(O,"nweets"),o);case 16:s(""),l("");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:b,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(y.a,{icon:F.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){console.log(e.target.files);var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){console.log(e);var t=e.currentTarget.result;l(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return l("")},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(y.a,{icon:F.c})]})]})]})},U=function(e){var t=e.userObj;console.log(t);var n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return console.log(r),Object(c.useEffect)((function(){var e=Object(j.e)(Object(j.a)(O,"nweets"),Object(j.d)("createdAt","desc"));Object(j.c)(e,(function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(B,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(A,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},D=function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsx)(p.b,{to:"/",style:{marginRight:10},children:Object(g.jsx)(y.a,{icon:w.c,color:"#04AAFF",size:"2x"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)(p.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(y.a,{icon:F.e,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},E=n(34),L=function(e){var t=e.userObj,n=e.refreshUser,a=Object(c.useState)(t.displayName),r=Object(i.a)(a,2),s=r[0],o=r[1],u=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.t0=E.g,e.next=4,b.currentUser;case 4:return e.t1=e.sent,e.t2={displayName:s},e.next=8,(0,e.t0)(e.t1,e.t2);case 8:n();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:u,className:"profileForm",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){b.signOut()},children:Object(g.jsx)(p.b,{to:"/",children:"Log Out"})})]})},P=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return console.log(c),Object(g.jsxs)(p.a,{children:[n&&Object(g.jsx)(D,{userObj:c}),Object(g.jsx)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:Object(g.jsx)(f.c,{children:n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f.a,{exact:!0,path:"/",element:Object(g.jsx)(U,{userObj:c}),children:" "}),Object(g.jsx)(f.a,{exact:!0,path:"/profile",element:Object(g.jsx)(L,{userObj:c,refreshUser:t}),children:" "})]}):Object(g.jsx)(f.a,{exact:!0,path:"/",element:Object(g.jsx)(N,{}),children:" "})})})]})};var R=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),o=(s[0],s[1],Object(c.useState)(null)),u=Object(i.a)(o,2),j=u[0],l=u[1];return Object(c.useEffect)((function(){b.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),a(!0)}))}),[]),Object(g.jsxs)(g.Fragment,{children:[n?Object(g.jsx)(P,{refreshUser:function(){var e=b.currentUser;l({displayName:e.displayName,uid:e.uid})},isLoggedIn:Boolean(j),userObj:j}):"Initailizing...",Object(g.jsxs)("footer",{children:["\xa9  ",(new Date).getFullYear()," Nwitter"]})]})};n(57);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.37be344f.chunk.js.map