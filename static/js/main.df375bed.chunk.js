(this.webpackJsonpAuth=this.webpackJsonpAuth||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(22),s=n.n(o),i=(n(31),n(25)),r=n(4),u=(n(32),n.p,n(2)),l=n(8),p=n(0);var d=function(e){var t=e.email,n=e.onSignOut;return Object(p.jsxs)("header",{className:"header root__section",children:[Object(p.jsx)("div",{className:"logo__text",children:"MESTO"}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/Auth/sign-in",children:Object(p.jsx)(l.b,{to:"/Auth/sign-up",className:"header__text",children:"Registrieren"})}),Object(p.jsx)(u.b,{path:"/Auth/sign-up",children:Object(p.jsx)(l.b,{to:"/Auth/sign-in",className:"header__text",children:"Login"})}),Object(p.jsx)(u.b,{path:"/Auth/",children:Object(p.jsxs)("div",{className:"header__elements",children:[Object(p.jsx)("div",{className:"header__text",children:t}),Object(p.jsx)("div",{className:"header__signout",onClick:n,children:"Logout"})]})})]})]})},j=n.p+"static/media/avataricon.ae1a976d.svg",h=c.a.createContext({});var b=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,o=e.onCardDelete,s=c.a.useContext(h),i=t.owner._id===s._id,r="card__vector-delete ".concat(i?"card__vector-delete_type_activ":""),u=t.likes.some((function(e){return e._id===s._id})),l="card__vector-like ".concat(u?"card__vector_active":"");return Object(p.jsxs)("article",{className:"card",id:t._id,children:[Object(p.jsx)("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(p.jsxs)("div",{className:"card__text",children:[Object(p.jsx)("h2",{className:"card__title",children:t.name}),Object(p.jsxs)("div",{className:"card__like-group",children:[Object(p.jsx)("button",{type:"button",className:l,onClick:function(){a(t)}}),Object(p.jsx)("label",{className:"card__amount-like",children:t.likes.length})]})]}),Object(p.jsx)("button",{type:"button",className:r,onClick:function(){o(t)}})]})};var m=function(){return Object(p.jsx)("footer",{className:"footer root__section",children:Object(p.jsxs)("p",{className:"footer__copyright",children:[" \xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var f=function(e){var t=c.a.useContext(h);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile root__section",children:[Object(p.jsxs)("div",{className:"profile__avatar-info",children:[Object(p.jsxs)("div",{className:"profile__change-avatar",children:[Object(p.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(p.jsx)("img",{onClick:e.onEditAvatar,className:"profile__edit-icon",src:j,alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__info-name",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(p.jsx)("p",{className:"profile__job",children:t.about})]})]}),Object(p.jsx)("button",{type:"button",onClick:e.onAddPlace,className:"profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(p.jsx)("section",{className:"cards root__section",id:"cards",children:e.cards.map((function(t,n){return Object(p.jsx)(b,{onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t,onCardClick:e.onCardClick},t._id)}))})]}),Object(p.jsx)(m,{})]})},_=n(11),O=n(12),g=n(9),v=n(17),x=n(16),N=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).changeEmail=function(e){a.setState({email:e.target.value})},a.changePassword=function(e){a.setState({password:e.target.value})},a.state={email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a.changeEmail=a.changeEmail.bind(Object(g.a)(a)),a.changePassword=a.changePassword.bind(Object(g.a)(a)),a}return Object(O.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.email&&this.state.password&&this.props.onLogin(this.state.password,this.state.email)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"login__title",children:"Login"}),Object(p.jsxs)("form",{className:"login__form",onSubmit:this.handleSubmit,children:[Object(p.jsx)("input",{className:"login__input",type:"email",value:this.state.email,onChange:this.changeEmail,required:!0,id:"Email",name:"Email",placeholder:"test@gmx.de"}),Object(p.jsx)("input",{className:"login__input",type:"password",value:this.state.password,onChange:this.changePassword,required:!0,id:"password",name:"password",placeholder:"1234"}),Object(p.jsx)("div",{className:"login__button-container",children:Object(p.jsx)("button",{type:"submit",className:"login__link",children:"Login"})})]})]})}}]),n}(c.a.Component),k=Object(u.h)(N),C=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).changeEmail=function(e){a.setState({email:e.target.value})},a.changePassword=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onRegister(a.state.password,a.state.email)},a.state={email:"",password:""},a.changeEmail=a.changeEmail.bind(Object(g.a)(a)),a.changePassword=a.changePassword.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a}return Object(O.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"login__title",children:"Registrieren"}),Object(p.jsxs)("form",{className:"login__form",onSubmit:this.handleSubmit,children:[Object(p.jsx)("input",{className:"login__input",type:"email",value:this.state.email,onChange:this.changeEmail,required:!0,id:"Email",name:"Email",placeholder:"Email"}),Object(p.jsx)("input",{className:"login__input",type:"password",value:this.state.password,onChange:this.changePassword,required:!0,id:"password",name:"password",placeholder:"Password"}),Object(p.jsx)("div",{className:"login__button-container",children:Object(p.jsx)("button",{type:"submit",className:"login__link",children:"Registrieren"})}),Object(p.jsx)(l.b,{to:"sign-in",className:"login__submit",children:"Schon registriert? LOGIN"})]})]})}}]),n}(c.a.Component),y=Object(u.h)(C);var A=function(e){var t=e.isOpen,n=e.onClose,a=e.text,c=e.logo;return Object(p.jsx)("div",{className:"popup  ".concat(t?"popup_opened":""),children:Object(p.jsx)("div",{className:"popup__container",children:Object(p.jsx)("div",{className:"popup__form",children:Object(p.jsxs)("fieldset",{className:"popup__form-set",children:[Object(p.jsx)("button",{type:"button",onClick:n,className:"popup__close",children:Object(p.jsx)("div",{className:"popup__close-icon"})}),Object(p.jsxs)("div",{className:"popup__form-registered",children:[Object(p.jsx)("img",{className:"popup__logo",src:c,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(p.jsx)("div",{className:"popup__registered",children:a})]})]})})})})},S=n(26),w=n(24),E=["component"],L=function(e){var t=e.component,n=Object(w.a)(e,E);return Object(p.jsx)(u.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(S.a)({},n)):Object(p.jsx)(u.a,{to:"./sign-in"})}})},D="https://auth.nomoreparties.co",U=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},P=n.p+"static/media/Union2.7c6a020b.svg";var R=function(e){return Object(p.jsx)("div",{className:"popup popup_type_img ".concat(e.card.link?"popup_opened":""),children:Object(p.jsxs)("div",{id:"imagePopup",className:"popup__img",children:[Object(p.jsx)("button",{type:"button",className:"popup__close popup__close_type_img",onClick:e.onClose,children:Object(p.jsx)("div",{className:"popup__close-icon"})}),Object(p.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(p.jsx)("label",{type:"text",className:"popup__name",name:"nameInputImage",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,children:e.card.name})]})})},F=new(function(){function e(t){Object(_.a)(this,e),this._token=t.token,this._url=t.url}return Object(O.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:{authorization:this._token}}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-25",token:"e2f184c2-a2b5-47dc-b13c-5faef2aabe75"});var I=function(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsx)("div",{className:"popup__container popup__container-".concat(e.name),children:Object(p.jsx)("form",{className:"popup__form popup__form-".concat(e.name),onSubmit:e.onSubmit,children:Object(p.jsxs)("fieldset",{className:"popup__form-set",children:[Object(p.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close popup__close_type_".concat(e.name),children:Object(p.jsx)("div",{className:"popup__close-icon"})}),Object(p.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(p.jsxs)("button",{type:"submit",className:"popup__button popup__button_type_".concat(e.name),children:[" ",e.buttonText," "]})]})})})})};var T=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,o=c.a.useContext(h),s=c.a.useState(""),i=Object(r.a)(s,2),u=i[0],l=i[1],d=c.a.useState(""),j=Object(r.a)(d,2),b=j[0],m=j[1];return c.a.useEffect((function(){l(o.name),m(o.about)}),[o,t]),Object(p.jsx)(I,{name:"edit",title:"Profil bearbeiten",isOpen:t,onClose:n,buttonText:"Speichern",onSubmit:function(e){e.preventDefault(),a({name:u,about:b})},children:Object(p.jsxs)("div",{className:"form__container",children:[Object(p.jsx)("input",{type:"text",value:u||"",onChange:function(e){l(e.target.value)},className:"popup__input popup__input_type_name",id:"name",name:"nameInput",placeholder:"Name",required:!0}),Object(p.jsx)("span",{className:"popup__input-error name-error"}),Object(p.jsx)("input",{type:"text",value:b||"",onChange:function(e){m(e.target.value)},className:"popup__input popup__input_type_job",id:"job",name:"jobInput",placeholder:"About",required:!0}),Object(p.jsx)("span",{className:"popup__input-error job-error"})]})})};var H=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=c.a.useRef();return c.a.useEffect((function(){o.current.value=""}),[t]),Object(p.jsx)(I,{name:"avatar",title:"Avatar \xe4ndern",isOpen:t,onClose:n,buttonText:"Speichern",onSubmit:function(e){e.preventDefault(),a({avatar:o.current.value})},children:Object(p.jsxs)("div",{className:"form__container",children:[Object(p.jsx)("input",{type:"url",ref:o,className:"popup__input popup__input_type_text",id:"avatar",name:"avatar",placeholder:"https://somewebsite.com/someimage.jpg",required:!0}),Object(p.jsx)("span",{className:"popup__input-error avatar-error"})]})})};var W=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,o=c.a.useState(""),s=Object(r.a)(o,2),i=s[0],u=s[1],l=c.a.useState(""),d=Object(r.a)(l,2),j=d[0],h=d[1];return c.a.useEffect((function(){u(""),h("")}),[t]),Object(p.jsx)(I,{name:"add",title:"New Card",isOpen:t,onClose:n,buttonText:"NEW",onSubmit:function(e){e.preventDefault(),a({name:i,link:j})},children:Object(p.jsxs)("div",{className:"form__container",children:[Object(p.jsx)("input",{value:i,onChange:function(e){u(e.target.value)},type:"text",className:"popup__input popup__input_type_text",id:"add",name:"name",placeholder:"Name",required:!0}),Object(p.jsx)("span",{className:"popup__input-error add-error"}),Object(p.jsx)("input",{value:j,onChange:function(e){h(e.target.value)},type:"url",className:"popup__input popup__input_type_link",id:"url",name:"link",placeholder:"Url",required:!0}),Object(p.jsx)("span",{className:"popup__input-error url-error"})]})})};var J=Object(u.h)((function(){var e=Object(u.g)(),t=c.a.useState(!1),n=Object(r.a)(t,2),a=n[0],o=n[1],s=c.a.useState(!1),l=Object(r.a)(s,2),j=l[0],b=l[1],m=c.a.useState(!1),_=Object(r.a)(m,2),O=_[0],g=_[1],v=c.a.useState(!1),x=Object(r.a)(v,2),N=x[0],C=x[1],S=c.a.useState({}),w=Object(r.a)(S,2),E=w[0],I=w[1],J=c.a.useState({}),Y=Object(r.a)(J,2),Z=Y[0],B=Y[1],M=c.a.useState([]),z=Object(r.a)(M,2),Q=z[0],q=z[1],G=c.a.useState(!1),V=Object(r.a)(G,2),K=V[0],X=V[1],$=c.a.useState(""),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(""),ce=Object(r.a)(ae,2),oe=ce[0],se=ce[1],ie=c.a.useState(""),re=Object(r.a)(ie,2),ue=re[0],le=re[1];function pe(e){C(e)}function de(){g(!1),o(!1),b(!1),I({})}c.a.useEffect((function(){F.getUserInfo().then((function(e){B(e)})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){var e=function(e){"Escape"===e.key&&de()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),c.a.useEffect((function(){var e=function(e){e.target.classList.contains("popup")&&de()};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),c.a.useEffect((function(){F.getInitialCards().then((function(e){q(e)})).catch((function(e){return console.log(e)}))}),[]);var je=function(){var t=localStorage.getItem("jwt");t&&function(e){return fetch("".concat(D,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return U(e)}))}(t).then((function(t){t&&(he(t.data.email),X(!0),e.push("/"))})).catch((function(e){console.log(e)}))};function he(e){ne(e)}return c.a.useEffect((function(){je()}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(h.Provider,{value:Z,children:[Object(p.jsxs)("div",{className:"root",children:[Object(p.jsx)(d,{email:te,onSignOut:function(){localStorage.removeItem("jwt"),he(""),e.push("/sign-in")}}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/Auth/sign-in",children:Object(p.jsx)(k,{onLogin:function(t,n){(function(e,t){return fetch("".concat(D,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return U(e)}))})(t,n).then((function(a){a.token&&(localStorage.setItem("jwt",a.token),he(n),n="",t="",X(!0),e.push("/"))})).catch((function(e){console.log("hallo"),se("Login leider nicht erfolgreich."),le(P),pe(!0)}))}})}),Object(p.jsx)(u.b,{path:"/Auth/sign-up",children:Object(p.jsx)(y,{onRegister:function(e,t){(function(e,t){return fetch("".concat(D,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return U(e)}))})(e,t).then((function(e){e&&(se("Erfolgreich registriert!"),le("data:image/png;base64,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"),pe(!0))})).catch((function(e){se("Oops, etwas ist schief gelaufen."),le(P),pe(!0)}))}})}),Object(p.jsx)(L,{path:"/",loggedIn:K,component:f,cards:Q,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Z._id}));F.changeLikeCardStatus(e._id,!t).then((function(t){q((function(n){return Q.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){F.deleteCard(e._id).then((function(){var t=Q.filter((function(t){return t._id!==e._id}));q(t)})).catch((function(e){console.log(e)}))},onCardClick:function(e){I(e)},onEditAvatar:function(){g(!0)},onEditProfile:function(){o(!0)},onAddPlace:function(){b(!0)}})]})]}),Object(p.jsx)(T,{isOpen:a,onClose:de,onUpdateUser:function(e){F.setUserInfo(e.name,e.about).then((function(e){B(e),de()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(H,{isOpen:O,onClose:de,onUpdateAvatar:function(e){F.setUserAvatar(e.avatar).then((function(e){var t=Object.assign({},Z);t.avatar=e.avatar,B(t),de()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(W,{isOpen:j,onClose:de,onAddPlace:function(e){F.addCard(e.name,e.link).then((function(e){q([e].concat(Object(i.a)(Q))),de()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(R,{card:E,onClose:de}),Object(p.jsx)(A,{isOpen:N,onClose:function(){C(!1),e.push("/sign-in")},text:oe,logo:ue})]})})})),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(p.jsx)(l.a,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),Y()}},[[42,1,2]]]);
//# sourceMappingURL=main.df375bed.chunk.js.map