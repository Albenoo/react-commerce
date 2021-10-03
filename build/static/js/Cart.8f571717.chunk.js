(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[0],{41:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));c(1);var n=c(19),a=function(e){n.c.success("".concat(e.title," Product removed from the cart"))}},46:function(e,t,c){e.exports={Cart:"Cart_Cart__1gZf_",CartRow:"Cart_CartRow__R817H",deleteIcon:"Cart_deleteIcon__2fxM1",ActionButtons:"Cart_ActionButtons__ppFpP",CleanCartBtn:"Cart_CleanCartBtn__c9D7J",CheckoutCartBtn:"Cart_CheckoutCartBtn__34Gh2"}},47:function(e,t,c){e.exports={FlexCart:"FlexCart_FlexCart__2mipA",CartInfo:"FlexCart_CartInfo__1J0j1",CartInfoQt:"FlexCart_CartInfoQt__2Y1Do",icon:"FlexCart_icon__1ylSy"}},48:function(e,t,c){e.exports={FlexColumn:"FlexColumn_FlexColumn__23Gye",FlexColumnInfo:"FlexColumn_FlexColumnInfo__3BNru",FlexInfo:"FlexColumn_FlexInfo__2InGK"}},60:function(e,t,c){"use strict";c.r(t);var n=c(23),a=c(8),r=c(1),i=c(12),l=c(3),o=c(49),s=c(46),d=c.n(s),j=c(22),u=c(47),x=c.n(u),C=c(25),h=c(2),b=Object(r.memo)((function(e){var t=e.count;return Object(h.jsxs)("div",{className:x.a.FlexCart,children:[Object(h.jsx)("div",{className:x.a.CartInfo,children:Object(h.jsx)("img",{src:e.image,alt:"product"})}),Object(h.jsxs)("div",{className:x.a.CartInfo,children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("div",{children:e.children})]}),Object(h.jsxs)("div",{className:x.a.CartInfoQt,children:[Object(h.jsx)(j.a,{margin:"5px",onClick:e.increment,bgColor:"var(--lightblue)",textColor:"#000000",padding:"10px","aria-label":"increase",children:Object(h.jsx)(C.b,{})}),Object(h.jsx)("h1",{children:t}),Object(h.jsx)(j.a,{margin:"5px",onClick:e.decrement,bgColor:"var(--lightblue)",textColor:"#000000",padding:"10px","aria-label":"decrease",children:Object(h.jsx)(C.a,{})})]}),Object(h.jsx)("div",{className:x.a.CartInfo,children:Object(h.jsxs)("h1",{children:["\u20ac",e.price]})})]})})),m=c(48),f=c.n(m),O=Object(r.memo)((function(e){return Object(h.jsxs)("div",{className:f.a.FlexColumn,children:[Object(h.jsxs)("div",{className:f.a.FlexColumnInfo,children:[Object(h.jsx)("div",{className:f.a.FlexInfo,children:Object(h.jsx)("h1",{children:"Product Image"})}),Object(h.jsx)("div",{className:f.a.FlexInfo,children:Object(h.jsx)("h1",{children:"Product Name"})}),Object(h.jsx)("div",{className:f.a.FlexInfo,children:Object(h.jsx)("h1",{children:"Product Qty"})}),Object(h.jsx)("div",{className:f.a.FlexInfo,children:Object(h.jsx)("h1",{children:"Product Price"})})]}),e.children]})})),p=c(41);t.default=function(){var e=Object(r.useContext)(i.a),t=e.cartctx,c=e.filtered,s=e.total,u=e.values,x=e.order,C=Object(r.useState)(),m=Object(a.a)(C,2),f=(m[0],m[1]),_=Object(a.a)(u,2),g=(_[0],_[1]),v=Object(a.a)(x,2),F=(v[0],v[1]),I=Object(a.a)(t,2),N=I[0],k=I[1],P=c.filteredCart,B=s.TotalCartPrice,w=Object(l.f)(),A=function(e){var t=P.filter((function(t){return t.id!==e}));k(t)};Object(r.useEffect)((function(){var e=localStorage.getItem("TotalPrice");e&&f(e)})),Object(r.useEffect)((function(){localStorage.setItem("TotalPrice",B)}),[]);return""!=N&&Object(h.jsxs)("div",{className:d.a.Cart,children:[Object(h.jsx)(O,{children:P.map((function(e){return Object(h.jsx)(b,{image:e.image,title:e.title,count:e.count,increment:function(t){return function(e){g(++e.count)}(e)},decrement:function(t){return function(e){e.count>0&&g(--e.count),0!=e.count||A(e.id),1===N.length&&w.push("/")}(e)},price:e.price*e.count,children:Object(h.jsx)(j.a,{"aria-label":"delete",bgColor:"var(--lightblack)",margin:"0 10px",padding:"10px",textColor:"white",onClick:function(t){A(e.id),Object(p.a)(e),P.length<=1?w.push("/"):console.log("Cart updated")},children:Object(h.jsx)(o.a,{})})},e.id)}))}),Object(h.jsxs)("div",{className:d.a.CartRow,children:[Object(h.jsx)("div",{className:d.a.ActionButtons,children:Object(h.jsx)(j.a,{padding:"10px 20px",bgColor:"var(--darkblack)",textColor:"white",radius:"10px",onClick:function(e){k([]),w.push("/")},children:"Clear the Cart"})}),Object(h.jsxs)("div",{className:d.a.ActionButtons,children:[Object(h.jsxs)("h1",{children:["Total Price :",B,"\u20ac"]}),Object(h.jsx)(j.a,{padding:"10px 20px",bgColor:"var(--lightorange)",textColor:"var(--white)",radius:"10px",onClick:function(e){e.preventDefault(),F([].concat(Object(n.a)(P),[{id:P.id,title:P.title,image:P.image,price:P.price,count:P.count}])),w.push("/checkout")},children:"Checkout"})]})]})]})}}}]);
//# sourceMappingURL=Cart.8f571717.chunk.js.map