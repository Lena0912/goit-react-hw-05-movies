"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{197:function(n,e,t){t.d(e,{$8:function(){return s},$x:function(){return u},Xf:function(){return l},hT:function(){return c},o1:function(){return p}});var r=t(5861),o=t(7757),i=t.n(o),a=t(5294);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGM3YjAyN2Y1Y2RlYmQ5NzdkNGEyY2IzZWNkZGMzZCIsInN1YiI6IjY1NTAxODRmNDFhNTYxMzM2ODg3YzZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrMpWrA6-nEWZDnkSaCWEpkpue369ZAoTOFfIlhHrjo",a.Z.defaults.params={language:"en-US"};var c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3555:function(n,e,t){t.d(e,{k:function(){return i}});var r,o=t(168),i=t(5867).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"])))},3174:function(n,e,t){t.d(e,{O:function(){return m}});var r,o,i,a,c=t(7689),s=t(168),u=t(5867),p=t(1087),l=u.ZP.li(r||(r=(0,s.Z)(["\n  width: calc(25% - 32px);\n  margin-bottom: ",";\n  text-align: center;\n  background-color: ",";\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: ",";\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n\n  &:first-child {\n    margin-top: ",";\n  }\n\n  &:hover,\n  &:focus {\n    transform: translateY(-4px);\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);\n  }\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(3)})),h=(0,u.ZP)(p.OL)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n  font-size: 12px;\n  color: ",";\n  font-weight: bold;\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.accent})),f=u.ZP.img(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n"]))),d=u.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  gap: ",";\n  padding-top: ",";\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.spacing(8)})),x=t(184),m=function(n){var e=n.movies,t=(0,c.TH)();return(0,x.jsx)(d,{children:e.map((function(n){return(0,x.jsx)(l,{children:(0,x.jsxs)(h,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,x.jsx)(f,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:100,alt:"poster"}),(0,x.jsx)("h2",{children:n.title})]})},n.id)}))})}},8593:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,o,i,a,c,s,u=t(5861),p=t(9439),l=t(7757),h=t.n(l),f=t(2791),d=t(1087),x=t(8881),m=t(5218),g=t(5705),v=t(6727),Z=t(168),b=t(5867),w=t(1578),y=b.ZP.div(r||(r=(0,Z.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  color: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),j=(0,b.ZP)(g.l0)(o||(o=(0,Z.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: ",";\n  border-radius: ",";\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing(2)})),k=(0,b.ZP)(g.gN)(i||(i=(0,Z.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: ",";\n  padding-right: ",";\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)})),z=b.ZP.button(a||(a=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  position: relative;\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"]))),N=(0,b.ZP)(w.vi$)(c||(c=(0,Z.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 25px;\n  color: ",";\n  opacity: 0.6;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.accent})),P=(0,b.ZP)(g.Bc)(s||(s=(0,Z.Z)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(n){return n.theme.colors.error})),I=t(184),S=v.Ry().shape({searchValue:v.Z_().trim().min(2,"Minimum length - 2 characters").max(20,"Maximum length - 20 characters")}),C=function(n){var e=n.onSubmit;return(0,I.jsx)(y,{children:(0,I.jsx)(g.J9,{initialValues:{searchValue:""},onSubmit:function(n,t){var r=n.searchValue.trim();""!==r&&e(r),t.resetForm()},validationSchema:S,children:(0,I.jsxs)(j,{children:[(0,I.jsx)(z,{type:"submit",children:(0,I.jsx)(N,{})}),(0,I.jsx)("label",{htmlFor:"searchValue"}),(0,I.jsx)(k,{type:"text",name:"searchValue",id:"searchValue",placeholder:"Search movies",autoComplete:"off",autoFocus:!0}),(0,I.jsx)(P,{name:"searchValue",component:"span"})]})})})},V=t(3174),Y=t(3555),J=t(197),O=function(){var n=(0,f.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],o=(0,d.lr)(),i=(0,p.Z)(o,2),a=i[0],c=i[1],s=(0,f.useState)(!1),l=(0,p.Z)(s,2),g=l[0],v=l[1],Z=(0,f.useState)(!1),b=(0,p.Z)(Z,2),w=b[0],y=b[1],j=a.get("query")||"";(0,f.useEffect)((function(){function n(){return(n=(0,u.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),y(!1),n.next=5,(0,J.$8)(j);case 5:(e=n.sent).results.length>0?(m.ZP.success("Movies found successfully!"),r(e.results)):(m.ZP.error("Ooops...Nothing found. Update the search value, please!"),r([])),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),y(!0);case 12:return n.prev=12,v(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}""!==j&&function(){n.apply(this,arguments)}()}),[j]);return(0,I.jsxs)("main",{children:[(0,I.jsx)(C,{onSubmit:function(n){c(""!==n?{query:n}:{})}}),t.length>0&&(0,I.jsx)(V.O,{movies:t}),g&&(0,I.jsx)(Y.k,{children:(0,I.jsx)(x.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})}),w&&(0,I.jsx)("span",{children:"Whoops... Error! Please, reload this page!"}),(0,I.jsx)(m.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=593.8a56ea0d.chunk.js.map