(this.webpackJsonptakehomechallenge=this.webpackJsonptakehomechallenge||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),o=n.n(r),i=(n(19),n(2)),s=(n(20),n(1));var l=function(e){var t=e.poster,n=e.title,c=e.type;return Object(s.jsxs)("div",{className:"movie-card",children:[Object(s.jsx)("img",{className:"movie-card__poster",src:t,alt:n}),Object(s.jsx)("div",{className:"movie-card__title",children:n}),Object(s.jsx)("div",{className:"movie-card__type",children:c})]})};var u,j,b,d,h=function(e){var t=e.videos;return 0===t.length?Object(s.jsx)("div",{children:"No Movies"}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Movie List"}),Object(s.jsx)("div",{className:"flex",children:t.map((function(e){return Object(s.jsx)(l,{poster:e.Poster,title:e.Title,type:e.Type},e.imdbID)}))})]})},p=n(3),O=n(5),v=n(4),x=n.n(v),f=n(7),m="http://www.omdbapi.com/?apikey=".concat("e54dfc28","&"),g=function(){var e=Object(f.a)(x.a.mark((function e(t,n){var c,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(m,"s=").concat(t),n&&(c+="&type=".concat(n)),e.next=4,fetch(c);case 4:return a=e.sent,e.next=7,a.json();case 7:if("True"!==(r=e.sent).Response){e.next=10;break}return e.abrupt("return",[r.Search,r.totalResults]);case 10:return e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();O.b.button(u||(u=Object(p.a)(["\n    background-color: green;\n    color: white;\n    font-weight: bold;\n    border: 2px solid black;\n    height:100px;\n    border-radius: 10px;\n\n    ",";\n    ",";\n\n"])),(function(e){return e.primary&&Object(O.a)(j||(j=Object(p.a)(["\n          background: tomato;\n          color: white;\n          border: 2px solid tomato;\n        "])))}),(function(e){return e.secondary&&Object(O.a)(b||(b=Object(p.a)(["\n          background: #ccc;\n          color: palevioletred;\n        "])))})),O.b.div(d||(d=Object(p.a)(["\n    border: 2px dashed black;\n    background-color: gold;\n"])));var k=function(e){var t=e.updateVideos,n=e.updateTotal,a=Object(c.useState)(""),r=Object(i.a)(a,2),o=r[0],l=r[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),b=j[0],d=j[1];return Object(s.jsx)("div",{className:"movie__search-container",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(o,b).then((function(e){var c=Object(i.a)(e,2),a=c[0],r=c[1];t(a),n(r)})).finally((function(){}))},children:[Object(s.jsx)("input",{type:"text",placeholder:"Enter Movie...",onChange:function(e){l(e.target.value)},value:o,className:"searchInput"}),Object(s.jsxs)("select",{className:"movie__search-select",onChange:function(e){d(e.target.value)},value:b,children:[Object(s.jsx)("option",{value:"",children:"Type"}),Object(s.jsx)("option",{value:"movie",children:"Movie"}),Object(s.jsx)("option",{value:"series",children:"Series"})]}),Object(s.jsx)("button",{type:"submit",children:"Enter"})]})})};n(27);var y=function(e){var t,n=e.totalVideos,a=Object(c.useState)(1),r=Object(i.a)(a,2),o=r[0],l=r[1];return Math.ceil(n/10),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Page ",o," of ",(t=n,Math.ceil(t/10))]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{disabled:1==o,onClick:function(){o>1&&l(o-1),console.log("clicked prev")},children:"\xab"}),Object(s.jsx)("button",{onClick:function(){l(o+1)},children:"\xbb"})]})]})};var S=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),o=Object(i.a)(r,2),l=(o[0],o[1],Object(c.useState)(!0)),u=Object(i.a)(l,2),j=(u[0],u[1],Object(c.useState)([])),b=Object(i.a)(j,2),d=b[0],p=b[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"My App "}),Object(s.jsx)(k,{updateVideos:function(e){p(e)},updateTotal:function(e){a(e)}}),d&&Object(s.jsx)(h,{videos:d}),Object(s.jsx)(y,{totalVideos:n})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),w()}},[[28,1,2]]]);
//# sourceMappingURL=main.c9484d15.chunk.js.map