(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(46),r=n.n(s),i=n(12),o=n(15),l=n(126),d=(n(146),n(14)),j=(n(147),n(28)),u=n(20),m=n(30),h=n(29),p=(n(148),n(127)),b=n.n(p),O=n(128),_=n.n(O),x=n(32),g="ADD_TO_BASKET",v="REMOVE_FROM_BASKET",f="SET_USER",y="LOG_OUT_USER",N="INTERVAL",k="EMPTY_BASKET",S=function(){return{type:y}},C=n(92),w=C.a.initializeApp({apiKey:"AIzaSyDC9Y7B-7NmTmS1WSEpi0t1leDlI3DD_Bo",authDomain:"challange-d6c64.firebaseapp.com",projectId:"challange-d6c64",storageBucket:"challange-d6c64.appspot.com",messagingSenderId:"58498485353",appId:"1:58498485353:web:4d681c3d2612dd151126f8",measurementId:"G-KCNG9QB914"}).firestore(),I=C.a.auth(),A=n(3),B=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).logOut=function(){I.signOut(),e.props.user||e.clearIntervalMe()},e.clearIntervalMe=function(){clearInterval(e.props.interval)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.user,t=!e&&"/login";return Object(A.jsxs)("div",{className:"header",children:[Object(A.jsx)(x.a,{to:"/",children:Object(A.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(A.jsxs)("div",{className:"header__search",children:[Object(A.jsx)("input",{className:"header__searchInput",type:"text"}),Object(A.jsx)(b.a,{className:"header__searchIcon"})]}),Object(A.jsxs)("div",{className:"header__nav",children:[Object(A.jsx)(x.a,{to:t,children:Object(A.jsxs)("div",{className:"header__option",onClick:this.logOut,children:[Object(A.jsx)("span",{className:"header__optionLineOne",children:e?null===e||void 0===e?void 0:e.email:"Hello Guest"}),Object(A.jsx)("span",{className:"header__optionLineTwo",children:e?"Sign out":"Sign In"})]})}),Object(A.jsx)(x.a,{to:"/orders",children:Object(A.jsxs)("div",{className:"header__option",children:[Object(A.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(A.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(A.jsxs)("div",{className:"header__option",children:[Object(A.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(A.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(A.jsxs)("div",{className:"header__optionBasket",children:[Object(A.jsxs)(x.a,{to:"/checkout",onClick:this.clearIntervalMe,children:[" ",Object(A.jsx)(_.a,{})]}),Object(A.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:this.props.numberOfItem})]})]})]})}}]),n}(c.a.Component),E=Object(i.b)((function(e){var t;return{numberOfItem:null===(t=e.basket)||void 0===t?void 0:t.length,user:e.user,interval:e.interval}}),{logOutUser:S})(B),T=(n(156),n(157),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).item={id:e.props.id,title:e.props.title,image:e.props.image,price:e.props.price,rating:e.props.rating},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.image,c=t.price,s=t.rating;return Object(A.jsxs)("div",{className:"product",children:[Object(A.jsxs)("div",{className:"product__infor",children:[Object(A.jsx)("p",{children:n}),Object(A.jsxs)("p",{className:"product__price",children:[Object(A.jsx)("small",{children:"$"}),Object(A.jsx)("strong",{children:c})]}),Object(A.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(A.jsx)("p",{children:"\u2b50"},t)}))})]}),Object(A.jsx)("img",{src:a,alt:""}),Object(A.jsx)("button",{onClick:function(){e.props.addToBasket(e.item)},children:"Add to Basket"})]})}}]),n}(c.a.Component)),P=Object(i.b)(null,{addToBasket:function(e){return{type:g,payload:e}}})(T);var D=Object(i.b)(null,{interval:function(e){return{type:N,payload:e}}})((function(e){var t=1;return Object(a.useEffect)((function(){var n=setInterval((function(){document.querySelector("#radio".concat(t)).checked=!0,t>3?t=1:t++}),3e3);e.interval(n)}),[]),Object(A.jsx)("div",{className:"home",children:Object(A.jsxs)("div",{className:"home__container",children:[Object(A.jsxs)("div",{className:"home__image_container",children:[Object(A.jsx)("input",{type:"radio",name:"radio-btn",id:"radio1"}),Object(A.jsx)("input",{type:"radio",name:"radio-btn",id:"radio2"}),Object(A.jsx)("input",{type:"radio",name:"radio-btn",id:"radio3"}),Object(A.jsx)("input",{type:"radio",name:"radio-btn",id:"radio4"}),Object(A.jsxs)("div",{className:"navigation__btn",children:[Object(A.jsx)("label",{onClick:function(){return t=1},htmlFor:"radio1",className:"manual__btn"}),Object(A.jsx)("label",{onClick:function(){return t=2},htmlFor:"radio2",className:"manual__btn"}),Object(A.jsx)("label",{onClick:function(){return t=3},htmlFor:"radio3",className:"manual__btn"}),Object(A.jsx)("label",{onClick:function(){return t=4},htmlFor:"radio4",className:"manual__btn"})]}),Object(A.jsx)("img",{className:"home__image slide first",src:"https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(A.jsx)("img",{className:"home__image slide",src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",alt:""}),Object(A.jsx)("img",{className:"home__image slide",src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",alt:""}),Object(A.jsx)("img",{className:"home__image slide",src:"https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""})]}),Object(A.jsxs)("div",{className:"home__row",children:[Object(A.jsx)(P,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),Object(A.jsx)(P,{id:"49538094",title:"Henwood kMix Stand Mixer fro Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"})]}),Object(A.jsxs)("div",{className:"home__row",children:[Object(A.jsx)(P,{id:"4903850",title:"Samsung LC49RG90SSuXen 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(A.jsx)(P,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with ALexa, Charcoal Fabric",price:98.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(A.jsx)(P,{id:"3254354345",title:"New Apple Ipad Pro(12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(A.jsx)("div",{className:"home__row",children:Object(A.jsx)(P,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED GAming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})})),z=(n(158),n(159),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.image,a=t.title,c=t.price,s=t.rating,r=t.hideButton;return Object(A.jsxs)("div",{className:"checkoutProduct",children:[Object(A.jsx)("img",{className:"checkoutProduct__image",src:n,alt:""}),Object(A.jsxs)("div",{className:"checkoutProduct__infor ",children:[Object(A.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(A.jsxs)("p",{className:"checkoutProduct__price",children:[Object(A.jsx)("small",{children:"$"}),Object(A.jsx)("strong",{children:c})]}),Object(A.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(A.jsx)("p",{children:"\u2b50"},t)}))}),!r&&Object(A.jsx)("button",{onClick:function(){e.props.removeFromBasket(e.props.number)},children:"Remove from Basket"})]})]})}}]),n}(c.a.Component)),G=Object(i.b)(null,{removeFromBasket:function(e){return{type:v,payload:e}}})(z),L=(n(160),n(47)),F=n.n(L),M=n(21),U=Object(M.a)();var H=Object(i.b)((function(e){return{basket:e.basket}}))((function(e){var t,n,a=e.basket.length,c=null===(t=e.basket)||void 0===t||null===(n=t.map((function(e){return e.price})))||void 0===n?void 0:n.reduce((function(e,t){return e+t}),0);return Object(A.jsxs)("div",{className:"subtotal",children:[Object(A.jsx)(F.a,{renderText:function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("p",{children:["Subtotal (",a," items): ",Object(A.jsx)("strong",{children:e})]}),Object(A.jsxs)("small",{className:"subtotal__gift",children:[Object(A.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:c,displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(A.jsx)("button",{onClick:function(){U.push("/payment")},children:"Proceed to Checkout"})]})})),R=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderCheckoutProduct",value:function(e){return e.map((function(e,t){var n=e.id,a=e.rating,c=e.title,s=e.image,r=e.price;return Object(A.jsx)(G,{number:t,id:n,title:c,rating:a,image:s,price:r},t)}))}},{key:"render",value:function(){var e;return Object(A.jsxs)("div",{className:"checkout",children:[Object(A.jsxs)("div",{className:"checkout__left",children:[Object(A.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(A.jsxs)("div",{className:"checkout__header",children:[Object(A.jsxs)("h3",{children:["Hello, ",null===(e=this.props.user)||void 0===e?void 0:e.email]}),Object(A.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),this.renderCheckoutProduct(this.props.basket)]})]}),Object(A.jsx)("div",{className:"checkout__right",children:Object(A.jsx)(H,{})})]})}}]),n}(c.a.Component),X=Object(i.b)((function(e){return{basket:e.basket,user:e.user}}))(R),Y=n(50),K=(n(162),n(296)),V=n(295),W=n(129),q=n.n(W),Q=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).renderInput=function(e){var t=e.input,n=e.label,a=e.type;return Object(A.jsxs)(c.a.Fragment,{children:[Object(A.jsx)("h5",{children:n}),Object(A.jsx)("input",Object(Y.a)(Object(Y.a)({},t),{},{autoComplete:"off",type:a}))]})},e.onSubmit=function(t){I.signInWithEmailAndPassword(e.props.email,e.props.password).then((function(e){U.push("/")})).catch((function(e){return alert(e.message)}))},e.register=function(t){t.preventDefault(),I.createUserWithEmailAndPassword(e.props.email,e.props.password).then((function(e){e&&U.push("/")})).catch((function(e){return alert(e.message)}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"login",children:[Object(A.jsx)(x.a,{to:"/",children:Object(A.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(A.jsxs)("div",{className:"login__container",children:[Object(A.jsx)("h1",{children:"Sign-in"}),Object(A.jsxs)("form",{onSubmit:this.props.handleSubmit(this.onSubmit),children:[Object(A.jsx)(K.a,{type:"text",label:"E-mail",name:"email",component:this.renderInput}),Object(A.jsx)(K.a,{type:"password",label:"Password",name:"password",component:this.renderInput}),Object(A.jsx)("button",{type:"submit",className:"login__signInButton",children:"Sign In"})]}),Object(A.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ds Notices."}),Object(A.jsx)("button",{onClick:this.register,className:"login__registerButton",children:"Create your Amazon account"})]})]})}}]),n}(c.a.Component),$=Object(V.a)({form:"signIn"})(Q),Z=Object(i.b)((function(e){if(q.a.isEmpty(e.form))return{email:"",password:""};if(!e.form.signIn.hasOwnProperty("values"))return{email:"",password:""};var t=e.form.signIn.values;return{email:t.email,password:t.password}}))($),J=n(60),ee=n.n(J),te=n(91),ne=n(33),ae=n(132),ce=n.n(ae).a.create({baseURL:"http://localhost:5001/challange-d6c64/us-central1/api"}),se=(n(279),n(43));var re=Object(i.b)((function(e){return{user:e.user,basket:e.basket}}),{emptyBasket:function(){return{type:k}}})((function(e){var t,n=e.user,c=e.basket,s=e.emptyBasket,r=Object(se.useStripe)(),i=Object(se.useElements)(),o=Object(a.useState)(!1),l=Object(ne.a)(o,2),d=l[0],j=l[1],u=Object(a.useState)(""),m=Object(ne.a)(u,2),h=m[0],p=m[1],b=Object(a.useState)(null),O=Object(ne.a)(b,2),_=O[0],g=O[1],v=Object(a.useState)(!0),f=Object(ne.a)(v,2),y=f[0],N=f[1],k=Object(a.useState)(!0),S=Object(ne.a)(k,2),C=S[0],I=S[1],B=null===c||void 0===c||null===(t=c.map((function(e){return e.price})))||void 0===t?void 0:t.reduce((function(e,t){return e+t}),0);Object(a.useEffect)((function(){(function(){var e=Object(te.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce({method:"post",url:"/payments/create?total=".concat(100*B)});case 2:t=e.sent,I(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var E=function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),e.next=4,r.confirmCardPayment(C,{payment_method:{card:i.getElement(se.CardElement)}}).then((function(e){var t=e.paymentIntent;w.collection("users").doc(null===n||void 0===n?void 0:n.uid).collection("orders").doc(t.id).set({basket:c,amount:t.amount,created:t.created}),j(!0),g(null),p(!1),s(),U.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)("div",{className:"payment",children:Object(A.jsxs)("div",{className:"payment__container",children:[Object(A.jsxs)("h1",{children:["Checkout(",Object(A.jsxs)(x.a,{to:"checkout",children:[null===c||void 0===c?void 0:c.length," item"]}),")"]}),Object(A.jsxs)("div",{className:"payment__section",children:[Object(A.jsx)("div",{className:"payment__title",children:Object(A.jsx)("h3",{children:"Delivery Address"})}),Object(A.jsxs)("div",{className:"payment__address",children:[Object(A.jsx)("p",{children:null===n||void 0===n?void 0:n.email}),Object(A.jsx)("p",{children:"41 Mac Dinh Chi Street"}),Object(A.jsx)("p",{children:"Dong Hoi, Quang Binh"})]})]}),Object(A.jsxs)("div",{className:"payment__section",children:[Object(A.jsx)("div",{className:"payment__title",children:Object(A.jsx)("h3",{children:"Review items and delivery"})}),Object(A.jsx)("div",{className:"payment__items",children:c.map((function(e,t){var n=e.id,a=e.rating,c=e.title,s=e.image,r=e.price;return Object(A.jsx)(G,{number:t,id:n,rating:a,title:c,image:s,price:r},t)}))})]}),Object(A.jsxs)("div",{className:"payment__section",children:[Object(A.jsx)("div",{className:"payment__title",children:Object(A.jsx)("h3",{children:"Payment Method"})}),Object(A.jsx)("div",{className:"payment__details",children:Object(A.jsxs)("form",{onSubmit:E,children:[Object(A.jsx)(se.CardElement,{onChange:function(e){N(e.empty),g(e.error?e.error.message:"")}}),Object(A.jsxs)("div",{className:"payment__priceContent",children:[Object(A.jsx)(F.a,{renderText:function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("h3",{children:["Order Total: ",e," "]})})},decimalScale:2,value:B,displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(A.jsxs)("button",{disabled:h||y||d||!n,children:[" ",Object(A.jsx)("span",{children:h?Object(A.jsx)("p",{children:"Processing"}):"Buy Now"})]}),!n&&Object(A.jsx)("small",{children:"Your have to Sign In"})]}),_&&Object(A.jsx)("div",{children:_})]})})]})]})})})),ie=(n(280),n(281),n(133)),oe=n.n(ie);var le=function(e){var t,n=e.order;return Object(A.jsxs)("div",{className:"order",children:[Object(A.jsx)("h2",{children:"Order"}),Object(A.jsx)("p",{children:oe.a.unix(n.data.created).format("MMMM Do YYYY, h:mma")}),Object(A.jsx)("p",{className:"order_id",children:Object(A.jsx)("small",{children:n.id})}),null===(t=n.data.basket)||void 0===t?void 0:t.map((function(e,t){return Object(A.jsx)(G,{number:t,id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0},t)})),Object(A.jsx)(F.a,{renderText:function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})})},decimalScale:2,value:n.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var de=Object(i.b)((function(e){return{basket:e.asket,user:e.user}}))((function(e){e.basket;var t=e.user,n=Object(a.useState)([]),c=Object(ne.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){t?w.collection("users").doc(null===t||void 0===t?void 0:t.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):r([])}),[t]),Object(A.jsxs)("div",{className:"orders",children:[Object(A.jsx)("h1",{children:"Your orders123"}),Object(A.jsx)("div",{className:"orders_order",children:null===s||void 0===s?void 0:s.map((function(e){return Object(A.jsx)(le,{order:e})}))})]})})),je=n(134),ue=Object(je.a)("pk_test_51IqC7DFQNN1otKrQyy8H29NVpzwsZcFDQCBdwPjS1K1RwpzAih4V1ojied5mUGRFH8XzmiGktGi1j2NVbARi2sIr00X5MxlDcQ");var me=Object(i.b)(null,{setUser:function(e){return{type:f,payload:e}},logOutUser:S})((function(e){var t=e.setUser,n=e.logOutUser;return Object(a.useEffect)((function(){I.onAuthStateChanged((function(e){e?t(e):n()}))}),[]),Object(A.jsx)(d.b,{history:U,children:Object(A.jsx)("div",{className:"App",children:Object(A.jsxs)(d.c,{children:[Object(A.jsxs)(d.a,{path:"/orders",children:[Object(A.jsx)(E,{}),Object(A.jsx)(de,{})]}),Object(A.jsx)(d.a,{path:"/login",children:Object(A.jsx)(Z,{})}),Object(A.jsxs)(d.a,{path:"/checkout",children:[Object(A.jsx)(E,{}),Object(A.jsx)(X,{})]}),Object(A.jsxs)(d.a,{path:"/payment",children:[Object(A.jsx)(E,{}),Object(A.jsx)(se.Elements,{stripe:ue,children:Object(A.jsx)(re,{})})]}),Object(A.jsxs)(d.a,{path:"/",children:[Object(A.jsx)(E,{}),Object(A.jsx)(D,{})]})]})})})})),he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,298)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},pe=n(297),be=n(42),Oe=Object(o.c)({basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return[].concat(Object(be.a)(e),[t.payload]);case v:return Object(be.a)(e).filter((function(e,n){return n!==t.payload}));case k:return[];default:return e}},form:pe.a,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;case y:return null;default:return e}},interval:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.payload;default:return e}}}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,xe=Object(o.e)(Oe,_e(Object(o.a)(l.a)));r.a.render(Object(A.jsx)(i.a,{store:xe,children:Object(A.jsx)(me,{})}),document.getElementById("root")),he()}},[[283,1,2]]]);
//# sourceMappingURL=main.3ab734d3.chunk.js.map