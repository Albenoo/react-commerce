(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[3],{41:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));c(1);var r=c(19),o=function(e){r.c.success("".concat(e.title," Product removed from the cart"))}},42:function(e,t,c){e.exports={Store:"Store_Store__jItPB"}},43:function(e,t,c){e.exports={FlexProduct:"FlexProduct_FlexProduct__3qeH8",FlexProduct__row:"FlexProduct_FlexProduct__row__34Jfc",FlexProduct__label:"FlexProduct_FlexProduct__label__30YTi",FlexImage:"FlexProduct_FlexImage__2gx6K",FlexLabel:"FlexProduct_FlexLabel__20xMo"}},45:function(e,t,c){e.exports={FlexRow:"FlexRow_FlexRow__3J4UI"}},59:function(e,t,c){"use strict";c.r(t);var r=c(23),o=c(8),a=c(1),l=c(12),i=c(42),n=c.n(i),d=c(43),x=c.n(d),s=c(44),u=c(22),j=c(2),_=function(e){return Object(j.jsxs)("div",{className:x.a.FlexProduct,children:[Object(j.jsxs)("div",{className:x.a.FlexImage,children:[Object(j.jsx)("div",{className:x.a.FlexLabel}),Object(j.jsx)("img",{src:e.image,alt:"Product"})]}),Object(j.jsx)("h1",{children:e.title}),Object(j.jsxs)("div",{className:x.a.FlexProduct__row,children:[Object(j.jsxs)("h4",{children:["From \u20ac",e.price]}),Object(j.jsxs)(u.a,{bgColor:"var(--blue)","aria-label":"add to cart",textColor:"#fff",padding:"10px 20px ",radius:"5px",fontSize:"20px",onClick:e.addToCart,children:[Object(j.jsx)(s.a,{})," "]})]})]})},b=c(45),m=c.n(b),p=Object(a.memo)((function(e){return Object(j.jsx)("div",{className:m.a.FlexRow,children:e.children})})),F=c(41),f=Object(a.memo)((function(){var e=Object(a.useContext)(l.a),t=e.productctx,c=e.cartctx,i=Object(o.a)(t,1)[0],d=Object(o.a)(c,2),x=d[0],s=d[1];return Object(j.jsx)("div",{className:n.a.Store,children:Object(j.jsx)(p,{children:i.map((function(e){return Object(j.jsx)(_,{title:e.title,image:e.image,price:e.price,addToCart:function(t){return function(e){s([].concat(Object(r.a)(x),[{id:e.id,title:e.title,image:e.image,price:e.price,count:e.count,addCount:e.addQty}])),Object(F.a)(e)}(e)}},e.id)}))})})}));t.default=f}}]);
//# sourceMappingURL=Store.e6368e26.chunk.js.map