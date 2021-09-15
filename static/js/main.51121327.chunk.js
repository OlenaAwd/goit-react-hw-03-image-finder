(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImgGalleryItem:"ImgGalleryItem_ImgGalleryItem__2fqzi",ImgGalleryItemImage:"ImgGalleryItem_ImgGalleryItemImage__3dW6E"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3PKZB",Modal:"Modal_Modal__1SYT-"}},13:function(e,t,a){e.exports={wrap:"Notification_wrap__3RIN-",title:"Notification_title__1t_rm"}},15:function(e,t,a){e.exports={ImgGallery:"ImgGallery_ImgGallery__12Hbw"}},16:function(e,t,a){e.exports={Button:"Button_Button__2saNy",button:"Button_button__quHDk"}},18:function(e,t,a){e.exports={wrap:"Loader_wrap__asSvX"}},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),s=a(14),i=a(3),u=a(4),l=a(6),m=a(5),h=a(7),p=a.n(h),b=a(0),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){return e.setState({value:t.target.value})},e.handleSubmit=function(t){""!==e.state.value&&(t.preventDefault(),e.props.onSubmitForm(e.state.value),e.setState({value:""}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.value;return Object(b.jsx)("header",{className:p.a.searchbar,children:Object(b.jsxs)("form",{className:p.a.searchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:p.a["searchForm-button"],children:Object(b.jsx)("span",{className:p.a["searchForm-button-label"],children:"Search"})}),Object(b.jsx)("input",{value:e,onInput:this.handleChange,className:p.a["searchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),d=a(10),g=a.n(d),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.img,a=e.onSelectImg,n=e.largeImage;return Object(b.jsx)("li",{className:g.a.ImgGalleryItem,onClick:function(){return a(n)},children:Object(b.jsx)("img",{src:t,alt:"",className:g.a.ImgGalleryItemImage})})}}]),a}(n.Component),f=a(15),v=a.n(f),y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.onSelectedImg;return Object(b.jsx)("ul",{className:v.a.ImgGallery,children:t.map((function(e){return Object(b.jsx)(O,{img:e.webformatURL,largeImage:e.largeImageURL,onSelectImg:a},e.id)}))})}}]),a}(n.Component),I=function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("22578440-e1e5ecfa8eecbfc5a41a583d6","&image_type=photo&orientation=horizontal&per_page=12"))},_=a(16),S=a.n(_),x=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.onClick;return Object(b.jsx)("button",{type:"button",className:S.a.Button,onClick:e,children:"Load more"})}}]),a}(n.Component),F=a(17),w=a.n(F),k=a(18),C=a.n(k),N=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:C.a.wrap,children:Object(b.jsx)(w.a,{type:"Circles",color:"#00BFFF",height:80,width:80,timeout:3e3})})}}]),a}(n.Component),M=a(11),B=a(12),G=a.n(B),L=document.querySelector("#modal-root"),E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeByEscape=function(t){"Escape"===t.code&&e.props.onCloseModal()},e.clickByModal=function(t){t.target===t.currentTarget&&e.props.onCloseModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeByEscape),Object(M.a)(L)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeByEscape),Object(M.b)(L)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:G.a.Overlay,onClick:this.props.onCloseModal,children:Object(b.jsx)("div",{className:G.a.Modal,children:Object(b.jsx)("img",{src:this.props.largeImg,alt:this.props.id})})}),L)}}]),a}(n.Component),P=a(13),V=a.n(P),R=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.error;return Object(b.jsx)("div",{className:V.a.wrap,children:Object(b.jsx)("h1",{className:V.a.title,children:e||"Please, enter the correct name for your search"})})}}]),a}(n.Component),q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,images:[],input:"",largeImg:null,status:"idle",error:""},e.resetPageNumber=function(){e.setState({page:1})},e.updatePageNumber=function(){e.setState((function(e){return{page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onSearchValueInput=function(t){e.setState({input:t,status:"pending"}),e.resetPageNumber()},e.onFoundLargeImg=function(t){e.setState({largeImg:t,status:"openModal"})},e.onResetLargeImg=function(){e.setState({largeImg:null,status:"resolved"})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.input,o=n.page,c=t.input,i=t.page,u=t.images;c!==r&&1===o&&I(r,o).then((function(e){return e.json()})).then((function(e){if(0===e.total)return a.setState({status:"rejected"});a.setState({images:e.hits,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})})),i!==o&&1!==o&&I(r,o).then((function(e){return e.json()})).then((function(e){return a.setState((function(){return{images:[].concat(Object(s.a)(u),Object(s.a)(e.hits)),status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})}))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,n=e.largeImg,r=e.error;return"idle"===t?Object(b.jsx)(j,{onSubmitForm:this.onSearchValueInput}):"pending"===t?Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{onSubmitForm:this.onSearchValueInput}),Object(b.jsx)(N,{})]}):"resolved"===t?Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{onSubmitForm:this.onSearchValueInput}),Object(b.jsx)(y,{images:a,onSelectedImg:this.onFoundLargeImg}),Object(b.jsx)(x,{onClick:this.updatePageNumber})]}):"openModal"===t?Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{onSubmitForm:this.onSearchValueInput}),Object(b.jsx)(y,{images:a,onSelectedImg:this.onFoundLargeImg}),Object(b.jsx)(E,{largeImg:n,onCloseModal:this.onResetLargeImg})]}):"rejected"===t?Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{onSubmitForm:this.onSearchValueInput}),Object(b.jsx)(R,{error:r})]}):void 0}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__MmFCP",searchForm:"Searchbar_searchForm__2SwpY","searchForm-button":"Searchbar_searchForm-button__3o6SE","searchForm-button-label":"Searchbar_searchForm-button-label__3XlM5","searchForm-input":"Searchbar_searchForm-input__1xeFc"}}},[[44,1,2]]]);
//# sourceMappingURL=main.51121327.chunk.js.map