(this["webpackJsonplabor-cost"]=this["webpackJsonplabor-cost"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(3),r=c(10),s=c.n(r),i=(c(16),c(7)),j=c(26),o=c(27),a=c(28),d=c(29),l=c(30),h=c(24),b=c(31),O=c(1),x=function(e){var t=e.salary,c=e.updateSalary,n=e.valid;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h.a,{htmlFor:"\u6295\u4fdd\u85aa\u8cc7",children:"\u6295\u4fdd\u85aa\u8cc7"}),Object(O.jsx)(b.a,{id:"\u6295\u4fdd\u85aa\u8cc7",placeholder:"\u8acb\u8f38\u5165\u6295\u4fdd\u85aa\u8cc7",value:t,onChange:c,invalid:!n})]})},u=c(25),v=c(11);function f(e,t){return Object(v.find)(t,(function(c){return c<t[t.length-1]?c>=e:c===t[t.length-1]?e>=c:void 0}))}var p=.0517,g=.58,w=[24e3,25200,26400,27600,28800,30300,31800,33300,34800,36300,38200,40100,42e3,43900,45800,48200,50600,53e3,55400,57800,60800,63800,66800,69800,72800,76500,80200,83900,87600,92100,96600,101100,105600,110100,115500,120900,126300,131700,137100,142500,147900,15e4,156400,162800,169200,175600,182e3],y={company:{you:.3,boss:.6,gov:.1}},m=function(e){var t=e.salary,c=Object(n.useState)(0),r=Object(i.a)(c,2),s=r[0],j=r[1],o=Object(O.jsxs)(b.a,{type:"select",onChange:function(e){j(+e.target.value)},children:[Object(O.jsx)("option",{value:0,children:"0"}),Object(O.jsx)("option",{value:1,children:"1"}),Object(O.jsx)("option",{value:2,children:"2"}),Object(O.jsx)("option",{value:3,children:"3\u6216\u4ee5\u4e0a"})]}),a=f(t,w),d=a*p,l=Math.round(d*y.company.you)*(1+s),h=Math.round(d*y.company.boss*(1+g)),x=Math.round(d*y.company.gov*(1+g));return Object(O.jsxs)(u.a,{children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)("th",{colSpan:"2",children:"\u5065\u4fdd"})})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u6295\u4fdd\u7d1a\u8ddd"}),Object(O.jsx)("td",{children:a})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u6276\u990a\u7737\u5c6c"}),Object(O.jsx)("td",{children:o})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u500b\u4eba\u8ca0\u64d4"}),Object(O.jsx)("td",{children:l})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u96c7\u4e3b\u8ca0\u64d4"}),Object(O.jsx)("td",{children:h})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u653f\u5e9c\u8ca0\u64d4"}),Object(O.jsx)("td",{children:x})]})]})]})},k=.115,S=[11100,12540,13500,15840,16500,17280,17880,19047,20008,21009,22e3,23100,24e3,25200,26400,27600,28800,30300,31800,33300,34800,36300,38200,40100,42e3,43900,45800],E={company:{you:.2,boss:.7,gov:.1}},M=function(e){var t=f(e.salary,S),c=t*k,n=Math.round(c*E.company.you),r=Math.round(c*E.company.boss),s=Math.round(c*E.company.gov);return Object(O.jsxs)(u.a,{children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)("th",{colSpan:"2",children:"\u52de\u4fdd+\u5c31\u4fdd (\u672a\u5305\u542b\u8077\u707d\u8cbb\u7387)"})})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u6295\u4fdd\u7d1a\u8ddd"}),Object(O.jsx)("td",{children:t})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u500b\u4eba\u8ca0\u64d4"}),Object(O.jsx)("td",{children:n})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u96c7\u4e3b\u8ca0\u64d4"}),Object(O.jsx)("td",{children:r})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u653f\u5e9c\u8ca0\u64d4"}),Object(O.jsx)("td",{children:s})]})]})]})},N=.06,C=[1500,3e3,4500,6e3,7500,8700,9900,11100,12540,13500,15840,16500,17280,17880,19047,20008,21009,22e3,23100,24e3,25200,26400,27600,28800,30300,31800,33300,34800,36300,38200,40100,42e3,43900,45800,48200,50600,53e3,55400,57800,60800,63800,66800,69800,72800,76500,80200,83900,87600,92100,96600,101100,105600,110100,115500,120900,126300,131700,137100,142500,147900,15e4],F=function(e){var t=f(e.salary,C),c=Math.round(t*N);return Object(O.jsxs)(u.a,{children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)("th",{colSpan:"2",children:"\u52de\u90006%"})})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u6295\u4fdd\u7d1a\u8ddd"}),Object(O.jsx)("td",{children:t})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u96c7\u4e3b\u8ca0\u64d4"}),Object(O.jsx)("td",{children:c})]})]})]})},z=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!0),h=Object(i.a)(s,2),b=h[0],u=h[1],v=Object(n.useState)(0),f=Object(i.a)(v,2),p=f[0],g=f[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(j.a,{color:"light",light:!0,expand:"md",children:Object(O.jsx)(o.a,{children:"\u52de\u4fdd\u5065\u4fdd\u52de\u9000"})}),Object(O.jsxs)(a.a,{children:[Object(O.jsx)(d.a,{children:Object(O.jsx)(l.a,{md:{size:6,offset:3},children:Object(O.jsx)(x,{salary:c,valid:b,updateSalary:function(e){var t=e.target.value,c=+t;r(t),!Number.isNaN(c)&&Number.isFinite(c)?(u(!0),g(c)):u(!1)}})})}),Object(O.jsxs)(d.a,{style:{marginTop:"20px"},children:[Object(O.jsx)(l.a,{md:{size:4},children:Object(O.jsx)(m,{salary:p})}),Object(O.jsx)(l.a,{md:{size:4},children:Object(O.jsx)(M,{salary:p})}),Object(O.jsx)(l.a,{md:{size:4},children:Object(O.jsx)(F,{salary:p})})]}),Object(O.jsx)(d.a,{children:Object(O.jsxs)(l.a,{className:"text-center",md:{size:6,offset:3},children:[Object(O.jsx)("span",{children:"\u5065\u4fdd\u76f8\u95dc\u8cc7\u6599\u81ea 110\u5e741\u67081\u65e5 \u958b\u59cb\u9069\u7528"}),Object(O.jsx)("br",{}),"\u5065\u4fdd\u8cc7\u6599\u4f86\u81ea",Object(O.jsx)("a",{href:"https://www.nhi.gov.tw/Content_List.aspx?n=23E61FA6B5799914&topn=5FE8C9FEAE863B46",children:"\u885b\u798f\u90e8\u5065\u4fdd\u7f72"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"\u52de\u4fdd\u3001\u52de\u9000\u76f8\u95dc\u8cc7\u6599\u81ea 110\u5e741\u67081\u65e5 \u958b\u59cb\u9069\u7528"}),Object(O.jsx)("br",{}),"\u52de\u4fdd\u8cc7\u6599\u4f86\u81ea",Object(O.jsx)("a",{href:"https://www.bli.gov.tw/0011588.html",children:"\u52de\u52d5\u90e8\u52de\u4fdd\u5c40"}),Object(O.jsx)("br",{}),"\u52de\u9000\u8cc7\u6599\u4f86\u81ea",Object(O.jsx)("a",{href:"https://www.bli.gov.tw/0013083.html",children:"\u52de\u52d5\u90e8\u52de\u4fdd\u5c40"}),Object(O.jsx)("br",{})]})})]})]})},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c(22);s.a.render(Object(O.jsx)(z,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/labor-cost",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/labor-cost","/service-worker.js");W?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):B(e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.25ffe301.chunk.js.map