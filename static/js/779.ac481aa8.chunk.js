"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{197:function(n,e,r){r.d(e,{$8:function(){return i},$x:function(){return s},Xf:function(){return f},hT:function(){return c},o1:function(){return p}});var t=r(5861),u=r(7757),a=r.n(u),o=r(5294);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGM3YjAyN2Y1Y2RlYmQ5NzdkNGEyY2IzZWNkZGMzZCIsInN1YiI6IjY1NTAxODRmNDFhNTYxMzM2ODg3YzZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrMpWrA6-nEWZDnkSaCWEpkpue369ZAoTOFfIlhHrjo",o.Z.defaults.params={language:"en-US"};var c=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3555:function(n,e,r){r.d(e,{k:function(){return a}});var t,u=r(168),a=r(5867).ZP.div(t||(t=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"])))},9779:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,u,a,o,c=r(5861),i=r(9439),s=r(7757),p=r.n(s),f=r(7689),l=r(2791),h=r(8881),d=r(5218),v=r(197),m=r(3555),x=r(168),Z=r(5867),g=Z.ZP.div(t||(t=(0,x.Z)(["\n  ul {\n    padding-top: ",";\n  }\n\n  li {\n    margin-bottom: ",";\n    border: 1px solid ",";\n    padding: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)})),w=Z.ZP.p(u||(u=(0,x.Z)(["\n  font-weight: bold;\n  margin-bottom: ",";\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.accent})),b=Z.ZP.p(a||(a=(0,x.Z)(["\n  margin: 0;\n  font-size: 14px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textColor})),y=Z.ZP.p(o||(o=(0,x.Z)(["\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textColor})),k=r(184),j=function(){var n=(0,l.useState)([]),e=(0,i.Z)(n,2),r=e[0],t=e[1],u=(0,l.useState)(!1),a=(0,i.Z)(u,2),o=a[0],s=a[1],x=(0,l.useState)(!1),Z=(0,i.Z)(x,2),j=Z[0],I=Z[1],N=(0,f.UO)().movieId;return(0,l.useEffect)((function(){function n(){return(n=(0,c.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),I(!1),n.next=5,(0,v.Xf)(N);case 5:e=n.sent,d.ZP.success("Movies found successfully!"),e.results&&e.results.length>0?t(e.results):t([]),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),I(!0);case 13:return n.prev=13,s(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}N&&function(){n.apply(this,arguments)}()}),[N]),(0,k.jsxs)(g,{children:[(0,k.jsx)("ul",{children:r.length>0?r.map((function(n){return(0,k.jsxs)("li",{children:[(0,k.jsx)(w,{children:n.author}),(0,k.jsx)(b,{children:n.content})]},n.id)})):(0,k.jsx)(y,{children:"We don't have any reviews for this movie."})}),o&&(0,k.jsx)(m.k,{children:(0,k.jsx)(h.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})}),j&&(0,k.jsx)("span",{children:"Whoops... Error! Please, reload this page!"}),(0,k.jsx)(d.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=779.ac481aa8.chunk.js.map