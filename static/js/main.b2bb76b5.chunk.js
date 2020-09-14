(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/logo.146e2926.svg"},6:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/man-laptop-v1.3cdf7897.svg"},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),s=a.n(i),l=(a(40),a(6),a(5)),o=function(e){return r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{src:a(41),alt:"logo"}),r.a.createElement("ul",null,r.a.createElement(l.b,{exact:!0,to:"/",activeClassName:"activeLink"},"About me"),r.a.createElement(l.b,{to:"/relationships",activeClassName:"activeLink"},"Relationships"),r.a.createElement(l.b,{to:"/requirments",activeClassName:"activeLink"},"Requirments"),r.a.createElement(l.b,{to:"/users",activeClassName:"activeLink"},"Users"),r.a.createElement(l.b,{to:"/signUp",activeClassName:"activeLink"},"Sign Up")))},c=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"textBlock"},r.a.createElement("h1",null,"Test assignment for Frontend Developer position"),r.a.createElement("span",null,"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository."),r.a.createElement("span",null,"Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens")),r.a.createElement("a",{className:"button",href:"/signUpNow"},"Sign up now")))},u=a(29),m=a(30),p=a(34),d=a(32),h=a(13),E=function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null)))},g=function(e){var t=e.isFetching,a=e.name,n=e.email,i=e.phone,s=e.position,l=e.photo;return t?r.a.createElement(E,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"userCard"},r.a.createElement("img",{src:l,alt:"user_photo"}),r.a.createElement("h2",null,a),r.a.createElement("p",null,s),r.a.createElement("p",{className:"tooltip"},n,r.a.createElement("p",{className:"tooltiptext"},n)),r.a.createElement("p",null,i)))},v=function(e){var t=e.users.map((function(t){return r.a.createElement(g,{isFetching:e.isFetching,name:t.name,email:t.email,phone:t.phone,position:t.position,photo:t.photo})}));return r.a.createElement("div",{className:"users"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"textBlock"},r.a.createElement("h1",null,"Our cheerful users"),r.a.createElement("p",null,"Attention! Sorting users by registration date")),r.a.createElement("div",{className:"usersList"},t),r.a.createElement("button",{onClick:function(){e.updateNextUrl()}},"Show more")))},f=a(18),b=a.n(f),y="ADD_USER",N="UPDATE_URL",w="USER_IS_FETCHING",k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.userFetching(!0),b.a.get(e.props.url).then((function(t){e.props.userFetching(!1),t.data.users.map((function(t){return e.props.addUser(t.id,t.name,t.email,t.phone,t.position,t.position_id,t.registration_timestamp,t.photo)}))}))},e.updateNextUrl=function(){e.props.userFetching(!0),b.a.get(e.props.url).then((function(t){e.props.userFetching(!1),e.props.updateNextUrl(t.data.links.next_url),t.data.users.map((function(t){return e.props.addUser(t.id,t.name,t.email,t.phone,t.position,t.position_id,t.registration_timestamp,t.photo)}))}))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{updateNextUrl:this.updateNextUrl,users:this.props.users,url:this.props.url,isFetching:this.props.isFetching}))}}]),a}(r.a.Component),F=Object(h.b)((function(e){return{users:e.users.users,url:e.users.url,isFetching:e.users.isFetching}}),{addUser:function(e,t,a,n,r,i,s,l){return{newUser:{id:e,name:t,email:a,phone:n,position:r,position_id:i,registration_timestamp:s,photo:l},type:y}},updateNextUrl:function(e){return{url:e,type:N}},userFetching:function(e){return{isFetching:e,type:w}}})(k),U=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"acquaintion"},r.a.createElement("h1",null,"Let's get acquainted"),r.a.createElement("img",{src:a(64),alt:"man with laptop"}),r.a.createElement("div",{className:"textBlock"},r.a.createElement("h2",null,"I am cool frontend developer"),r.a.createElement("p",null,"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),r.a.createElement("p",null,"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3."),r.a.createElement("a",{className:"flatButton",href:"/flatBtn"},"Sign up now"))))},j=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"abz.agency special for the test task"))};var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(c,null),r.a.createElement(U,null),r.a.createElement(F,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(10),O=a(33),C=a(7),_={users:[],url:"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",isFetching:!0},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(C.a)(Object(C.a)({},e),{},{users:[].concat(Object(O.a)(e.users),[t.newUser])});case N:return Object(C.a)(Object(C.a)({},e),{},{url:t.url});case w:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});default:return e}},B=Object(x.b)({users:L}),D=Object(x.c)(B);s.a.render(r.a.createElement(l.a,null,r.a.createElement(h.a,{store:D},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b2bb76b5.chunk.js.map