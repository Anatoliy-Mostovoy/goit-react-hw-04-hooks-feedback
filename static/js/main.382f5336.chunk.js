(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(e,t,n){e.exports={TitleList:"Statistics_TitleList__3uONo",List:"Statistics_List__abnWb"}},function(e,t,n){e.exports={buttonContainer:"FeedbackOption_buttonContainer__2sEy5",button:"FeedbackOption_button__Hw3Ac"}},,function(e,t,n){e.exports={container:"App_container__2zcql"}},function(e,t,n){e.exports={mainTitle:"Section_mainTitle__3Q38V"}},function(e,t,n){e.exports={message:"Notification_message__20Ujb"}},,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),o=n(2),r=n(7),b=n.n(r),u=n(8),j=n.n(u),l=n(0),d=function(e){var t=e.title,n=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:j.a.mainTitle,children:t}),n]})},O=n(4),f=n.n(O),x=function(e){return Object(l.jsx)("ul",{className:f.a.List,children:Object.keys(e).map((function(t){return Object(l.jsx)("li",{className:f.a.TitleList,children:Object(l.jsxs)("p",{children:[t,":"," ",Object(l.jsxs)("span",{children:[e[t],"positivePercentage"===t&&"%"]})]})},t)}))})},h=n(5),p=n.n(h),m=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:p.a.buttonContainer,children:t.map((function(e){return Object(l.jsx)("button",{type:"button",className:p.a.button,onClick:n,children:e},e)}))})})},_=n(9),g=n.n(_),k=function(e){var t=e.message;return Object(l.jsx)("p",{className:g.a.message,children:t})},v=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(o.a)(s,2),r=i[0],u=i[1],j=Object(c.useState)(0),O=Object(o.a)(j,2),f=O[0],h=O[1],p=Object(c.useState)("false"),_=Object(o.a)(p,2),g=_[0],v=_[1];return Object(l.jsxs)("div",{className:b.a.container,children:[Object(l.jsx)(d,{title:"Please leave feedback",children:Object(l.jsx)(m,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(v(!0),e.target.textContent.toLowerCase()){case"good":a((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":h((function(e){return e+1}))}}})}),Object(l.jsx)(d,{title:"Statistics",children:g?Object(l.jsx)(x,{good:n,neutral:r,bad:f,total:function(e,t,n){return e+t+n}(n,r,f),positivePercentage:function(e,t,n){var c=e+t+n;return(0===c?0:e/c*100).toFixed()}(n,r,f)}):Object(l.jsx)(k,{message:">> No feedback given <<"})})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.382f5336.chunk.js.map