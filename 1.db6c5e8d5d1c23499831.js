(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2MiI":function(e,t,n){"use strict";n.d(t,"a",function(){return T});var s=n("mrSG"),r=n("fXoL"),i=n("TEn/"),o=n("ofXK"),a=n("tyNb");function l(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-item",1),r.Vb("click",function(){return r.fc(e),r.Zb().close()}),r.kc(1),r.Mb()}if(2&e){const e=t.$implicit;r.cc("routerLink",e.url),r.xb(1),r.lc(e.title)}}let c=(()=>{class e{constructor(e){this.popoverController=e}ngOnInit(){}close(){this.popoverController.dismiss()}}return e.\u0275fac=function(t){return new(t||e)(r.Hb(i.O))},e.\u0275cmp=r.Bb({type:e,selectors:[["app-submenu-popover"]],inputs:{children:"children"},decls:2,vars:1,consts:[[3,"routerLink","click",4,"ngFor","ngForOf"],[3,"routerLink","click"]],template:function(e,t){1&e&&(r.Nb(0,"ion-list"),r.ic(1,l,2,2,"ion-item",0),r.Mb()),2&e&&(r.xb(1),r.cc("ngForOf",t.children))},directives:[i.w,o.h,i.u,i.P,a.h],styles:["[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{background:var(--ion-color-tertiary)}[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px}"]}),e})();var u=n("2uYB"),h=n("OFbc");function d(e,t){1&e&&r.Jb(0)}function p(e,t){if(1&e&&(r.Nb(0,"ion-toolbar",3),r.Nb(1,"ion-row",4),r.Nb(2,"ion-col",5),r.ic(3,d,1,0,"ng-container",6),r.Mb(),r.Mb(),r.Mb()),2&e){const e=r.Zb(),t=r.ec(3);r.cc("color",e.headerColor),r.xb(3),r.cc("ngTemplateOutlet",t)}}function b(e,t){1&e&&r.Jb(0)}function f(e,t){if(1&e&&(r.Lb(0),r.ic(1,b,1,0,"ng-container",6),r.Kb()),2&e){r.Zb();const e=r.ec(3);r.xb(1),r.cc("ngTemplateOutlet",e)}}function m(e,t){1&e&&(r.Nb(0,"ion-fab-button",25),r.Ib(1,"svg-icon",26),r.Mb())}function g(e,t){1&e&&(r.Nb(0,"ion-fab-button",27),r.Ib(1,"svg-icon",28),r.Mb())}function v(e,t){1&e&&(r.Nb(0,"ion-fab-button",29),r.Ib(1,"svg-icon",30),r.Mb())}function y(e,t){if(1&e&&(r.Nb(0,"ion-buttons",9),r.Nb(1,"ion-fab",10),r.Nb(2,"ion-fab-button",11),r.Ib(3,"ion-icon",12),r.Mb(),r.Nb(4,"ion-fab-list",13),r.Nb(5,"ion-fab-button",14),r.Ib(6,"svg-icon",15),r.Mb(),r.Nb(7,"ion-fab-button",16),r.Ib(8,"svg-icon",17),r.Mb(),r.Nb(9,"ion-fab-button",18),r.Ib(10,"svg-icon",19),r.Mb(),r.ic(11,m,2,0,"ion-fab-button",20),r.ic(12,g,2,0,"ion-fab-button",21),r.ic(13,v,2,0,"ion-fab-button",22),r.Nb(14,"ion-fab-button",23),r.Ib(15,"svg-icon",24),r.Mb(),r.Mb(),r.Mb(),r.Ib(16,"ion-menu-button"),r.Mb()),2&e){const e=r.Zb(2);r.xb(11),r.cc("ngIf",e.viewportWidth>330),r.xb(1),r.cc("ngIf",e.viewportWidth>370),r.xb(1),r.cc("ngIf",e.viewportWidth>400)}}function w(e,t){1&e&&(r.Nb(0,"ion-col"),r.ac(1),r.Mb())}function C(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-row"),r.Nb(1,"ion-button",34),r.Vb("click",function(){r.fc(e);const t=r.Zb().$implicit;return r.Zb(3).goTo(t.url)}),r.Nb(2,"span"),r.kc(3),r.Mb(),r.Mb(),r.Mb()}if(2&e){const e=r.Zb().$implicit;r.xb(3),r.lc(e.title)}}function k(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-row"),r.Nb(1,"ion-button",35),r.Vb("click",function(t){r.fc(e);const n=r.Zb().$implicit;return r.Zb(3).openSubmenu(n,t)}),r.Nb(2,"span"),r.kc(3),r.Mb(),r.Mb(),r.Mb()}if(2&e){const e=r.Zb().$implicit;r.xb(3),r.lc(e.title)}}function O(e,t){if(1&e&&(r.Nb(0,"ion-col"),r.ic(1,C,4,1,"ion-row",1),r.ic(2,k,4,1,"ion-row",1),r.Mb()),2&e){const e=t.$implicit;r.xb(1),r.cc("ngIf",e.url),r.xb(1),r.cc("ngIf",(null==e.children?null:e.children.length)>0)}}function M(e,t){if(1&e&&(r.Nb(0,"ion-buttons",31),r.Nb(1,"ion-row",32),r.ic(2,w,2,0,"ion-col",1),r.ic(3,O,3,2,"ion-col",33),r.Mb(),r.Mb()),2&e){const e=r.Zb(2);r.xb(2),r.cc("ngIf",e.printable),r.xb(1),r.cc("ngForOf",e.nav.navigation)}}function P(e,t){if(1&e&&(r.Nb(0,"ion-toolbar",3),r.ic(1,y,17,3,"ion-buttons",7),r.ic(2,M,4,2,"ion-buttons",8),r.Mb()),2&e){const e=r.Zb();r.cc("color",e.headerColor),r.xb(1),r.cc("ngIf",e.viewportWidth<=768),r.xb(1),r.cc("ngIf",e.viewportWidth>768)}}const x=[[["ion-button"]]],N=["ion-button"];let T=(()=>{class e{constructor(e,t,n){this.router=e,this.nav=t,this.popoverController=n,this.viewportWidth=window.innerWidth}ngOnInit(){this.headerColor=this.color}goTo(e){this.router.navigate([e])}openSubmenu(e,t){return Object(s.a)(this,void 0,void 0,function*(){const n=yield this.popoverController.create({component:c,cssClass:"submenu-popover",event:t,translucent:!0,showBackdrop:!1,componentProps:{children:e.children}});return yield n.present()})}}return e.\u0275fac=function(t){return new(t||e)(r.Hb(a.g),r.Hb(u.a),r.Hb(i.O))},e.\u0275cmp=r.Bb({type:e,selectors:[["app-header"]],inputs:{color:"color",useContainer:"useContainer",printable:"printable"},ngContentSelectors:N,decls:4,vars:2,consts:[[3,"color",4,"ngIf"],[4,"ngIf"],["headerBody",""],[3,"color"],[1,"ion-align-items-center","ion-justify-content-center"],["size","11",1,"ion-no-padding"],[4,"ngTemplateOutlet"],["slot","end",4,"ngIf"],["collapse","true","slot","end",4,"ngIf"],["slot","end"],["vertical","center","horizontal","start"],["closeIcon","close-outline"],["name","chatbubble-ellipses-outline"],["side","start"],["href","mailto:natalie.lukaniuk@gmail.com","target","_blank"],["src","/assets/svg/mail.svg"],["href","https://t.me/Natalie_Lukaniuk","target","_blank"],["src","/assets/svg/telegram-ion.svg"],["href","viber://chat?number=380950500317","target","_blank"],["src","/assets/svg/viber.svg"],["href","https://join.skype.com/invite/KtKYnDhfcz6A","target","_blank",4,"ngIf"],["href","https://www.linkedin.com/in/natalie-lukaniuk-4158ba31/","target","_blank",4,"ngIf"],["href","https://github.com/NatalieLukaniuk","target","_blank",4,"ngIf"],["href","tel:+380950500317","target","_blank"],["src","/assets/svg/call.svg"],["href","https://join.skype.com/invite/KtKYnDhfcz6A","target","_blank"],["src","/assets/svg/skype.svg"],["href","https://www.linkedin.com/in/natalie-lukaniuk-4158ba31/","target","_blank"],["src","/assets/svg/linkedin.svg"],["href","https://github.com/NatalieLukaniuk","target","_blank"],["src","/assets/svg/github.svg"],["collapse","true","slot","end"],[1,"ion-align-items-end"],[4,"ngFor","ngForOf"],["fill","clear","routerDirection","forward","routerLinkActive","active-button",3,"click"],["fill","clear",3,"click"]],template:function(e,t){1&e&&(r.bc(x),r.ic(0,p,4,2,"ion-toolbar",0),r.ic(1,f,2,1,"ng-container",1),r.ic(2,P,3,3,"ng-template",null,2,r.jc)),2&e&&(r.cc("ngIf",t.useContainer),r.xb(1),r.cc("ngIf",!t.useContainer))},directives:[o.i,i.K,i.C,i.k,o.l,i.e,i.m,i.n,i.r,i.o,h.b,i.z,o.h,i.d,a.i],styles:['[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding-top:.5rem}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]{left:-105%}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--box-shadow:none;--background:transparent;--color:var(--ion-color-secondary-contrast);--background-activated:none}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%]{height:auto;width:1.6rem}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-list[_ngcontent-%COMP%]{margin-right:2.6rem}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-list[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{margin:.3vw}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{align-self:flex-start;font-size:1.5rem}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background-hover:none;--ripple-color:transparent}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";width:0;height:1px;background:var(--ion-color-primary);position:absolute;left:0;right:100%;bottom:0;transition:all .3s ease-in-out}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{right:100%;width:100%}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.active-button[_ngcontent-%COMP%]{--background:var(--ion-color-light)}@media (min-width:900px){[_nghost-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:1rem}}']}),e})()},IpX9:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n("fXoL");let r=(()=>{class e{constructor(){this.fontWeights=[{name:"Common weight name",value:"Value"},{name:"Thin (Hairline)",value:"100"},{name:"Extra Light (Ultra Light)",value:"200"},{name:"Light",value:"300"},{name:"Normal (Regular)",value:"400"},{name:"Medium",value:"500"},{name:"Semi Bold (Demi Bold)",value:"600"},{name:"Bold",value:"700"},{name:"Extra Bold (Ultra Bold)",value:"800"},{name:"Black (Heavy)",value:"900"}],this.cssSelectors={selectors:[{name:"Selector",value:"Explanation"},{name:"div > p",value:"all p tags, one level deep in div"},{name:"div + p",value:"p tags immediately after div"},{name:"div ~ p",value:"p tags preceded by div"},{name:"#idname *",value:"all elements inside #idname"}],pseudoSelectors:[{name:"Selector",value:"Explanation"},{name:"a:link",value:"link in normal state"},{name:"a:active",value:"link in clicked state"},{name:"a:visited",value:"visited link"},{name:"input:checked",value:"checked inputs"},{name:"input:disabled",value:"disabled inputs"},{name:"input:enabled",value:"enabled inputs"},{name:"input:focus",value:"input has focus"},{name:"input:in-range",value:"value in range"},{name:"input:out-of-range",value:"input value out of range"},{name:"input:valid",value:"input with valid value"},{name:"input:invalid",value:"input with invalid value"},{name:"input:optional",value:"no required attribute"},{name:"input:required",value:"input with requred attribute"},{name:"input:read-only",value:"with readonly attribute"},{name:"input:read-write",value:"no readonly attrib."},{name:"div:empty",value:"element with no children"},{name:"p::first-letter",value:"first letter in p"},{name:"p::first-line",value:"first line in p"},{name:"p:lang(en)",value:"p with en language attribute"},{name:":not(span)",value:"element that's not a span"},{name:"p:nth-child(3n+1)",value:"nth-child (an + b) formula"},{name:"p:nth-last-child(2)",value:"second child from behind"},{name:"p:nth-of-type(2)",value:"second p of its parent"},{name:"p:nth-last-of-type(2)",value:"...from behind"},{name:"p:only-of-type",value:"unique of its parent"},{name:"p:only-child",value:"only child of its parent"},{name:":root",value:"documents root element"},{name:"::selection",value:"portion selected by user"},{name:":target",value:"highlight active anchor"}],attributeSelectors:[{name:"Selector",value:"Explanation"},{name:"a[target]",value:"links with a target attribute"},{name:'a[target="_blank"]',value:"links which open in new tab"},{name:'[title~="chair"]',value:"title element containing a word"},{name:'[class^="chair"]',value:"class starts with chair"},{name:'[class|="chair"]',value:"class starts with the chair word"},{name:'[class*="chair"]',value:"class contains chair"},{name:'[class$="chair"]',value:"class ends with chair"},{name:'input[type="button"]',value:"specified input type"}]},this.domEvents={mouseEvents:[{name:"Event",value:"Explanation"},{name:"onclick",value:"The event occurs when the user clicks on an element"},{name:"oncontextmenu",value:"The event occurs when the user right-clicks on an element to open a context menu"},{name:"ondblclick",value:"The event occurs when the user double-clicks on an element"},{name:"onmousedown",value:"The event occurs when the user presses a mouse button over an element"},{name:"onmouseenter",value:"The event occurs when the pointer is moved onto an element"},{name:"onmouseleave",value:"The event occurs when the pointer is moved out of an element"},{name:"onmousemove",value:"The event occurs when the pointer is moving while it is over an element"},{name:"onmouseout",value:"The event occurs when a user moves the mouse pointer out of an element, or out of one of its children"},{name:"onmouseover",value:"The event occurs when the pointer is moved onto an element, or onto one of its children"},{name:"onmouseup",value:"The event occurs when a user releases a mouse button over an element"}]},this.usefulLinks={hacks:{cssAndHtml:[{title:"Responsive video embed",url:"http://odinokun.com/2020-03-26-kak-vstavit-adaptivnoe-video-na-sajt.html",lang:"ru"},{title:"Responsive text based on image size",url:"https://dev.to/afif/responsive-text-based-on-image-size-36n9",lang:"en"},{title:"HTML vs Body: How to Set Width and Height for Full Page Size",url:"https://www.freecodecamp.org/news/html-page-width-height/",lang:"en"}],js:[{title:"",url:"",lang:""}]},inspiration:{individualElements:[{title:"About Us Pop-Out Effect",url:"https://codepen.io/ainalem/details/QWGNzYm"},{title:"Animated tabbar",url:"https://codepen.io/aaroniker/details/rNMmZvq"},{title:"Credit Card Form - VueJs",url:"https://codepen.io/JavaScriptJunkie/details/YzzNGeR"},{title:"Rolling Radio Buttons",url:"https://codepen.io/jkantner/details/MWjrxPz"}],websites:[]},playgrounds:[{title:"",url:""}]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},OFbc:function(e,t,n){"use strict";n.d(t,"a",function(){return k}),n.d(t,"b",function(){return C});var s=n("fXoL"),r=n("ofXK"),i=n("LRne"),o=n("HDdC");function a(e,t){return new o.a(t?n=>t.schedule(l,0,{error:e,subscriber:n}):t=>t.error(e))}function l({error:e,subscriber:t}){t.error(e)}var c=n("lJxs"),u=n("vkgz"),h=n("JIr8"),d=n("nYR2"),p=n("w1tV"),b=n("tk/3");const f=["*"];class m{}let g=(()=>{class e extends m{constructor(e){super(),this.http=e}getSvg(e){return this.http.get(e,{responseType:"text"})}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(b.a))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})();const v=new s.r("SERVER_URL");let y=(()=>{class e{constructor(e,t,n,s){this.loader=e,this.platformId=t,this.serverUrl=n,this._document=s,this.iconsByUrl=new Map,this.iconsLoadingByUrl=new Map,this.document=this._document}addSvg(e,t){if(!this.iconsByUrl.has(e)){const n=this.document.createElement("DIV");n.innerHTML=t;const s=n.querySelector("svg");this.iconsByUrl.set(e,s)}}loadSvg(e,t=e){if(this.serverUrl&&null===e.match(/^(http(s)?):/)&&(t=e=this.serverUrl+e),this.iconsByUrl.has(t))return Object(i.a)(this.iconsByUrl.get(t));if(this.iconsLoadingByUrl.has(t))return this.iconsLoadingByUrl.get(t);const n=this.loader.getSvg(e).pipe(Object(c.a)(e=>{const t=this.document.createElement("DIV");return t.innerHTML=e,t.querySelector("svg")}),Object(u.a)(e=>this.iconsByUrl.set(t,e)),Object(h.a)(e=>(console.error(e),a(e))),Object(d.a)(()=>this.iconsLoadingByUrl.delete(t)),Object(p.a)());return this.iconsLoadingByUrl.set(t,n),n}getSvgByName(e){return this.iconsByUrl.has(e)?Object(i.a)(this.iconsByUrl.get(e)):this.iconsLoadingByUrl.has(e)?this.iconsLoadingByUrl.get(e):a(`No svg with name '${e}' has been loaded`)}unloadSvg(e){this.iconsByUrl.has(e)&&this.iconsByUrl.delete(e)}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(m),s.Rb(s.C),s.Rb(v,8),s.Rb(r.c,8))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})();const w={provide:y,deps:[[new s.B,new s.J,y],m,[s.C],[new s.B,v],[new s.B,r.c]],useFactory:function(e,t,n,s,r){return e||new y(t,n,s,r)}};let C=(()=>{class e{constructor(e,t,n,s,r){this.element=e,this.differs=t,this.renderer=n,this.iconReg=s,this.cdr=r,this.stretch=!1,this.applyClass=!1,this.applyCss=!1,this.loaded=!1}set svgStyle(e){this._svgStyle=e,!this.differ&&e&&(this.differ=this.differs.find(e).create())}ngOnInit(){this.init()}ngOnDestroy(){this.destroy()}ngOnChanges(e){const t=this.element.nativeElement.firstChild;(e.src||e.name)&&(this.loaded&&this.destroy(),this.init()),e.stretch&&this.stylize(),e.applyClass&&(this.applyClass?this.setClass(t,null,this.klass):this.setClass(t,this.klass,null)),e.svgClass&&this.setClass(t,e.svgClass.previousValue,e.svgClass.currentValue),e.klass&&(this.setClass(this.element.nativeElement,e.klass.previousValue,e.klass.currentValue),this.setClass(t,e.klass.previousValue,this.applyClass?e.klass.currentValue:null)),e.viewBox&&(this.loaded&&this.destroy(),this.init()),e.applyCss&&(console.warn("applyCss deprecated since 9.1.0, will be removed in 10.0.0"),console.warn("use applyClass instead")),e.svgAriaLabel&&this.doAria(e.svgAriaLabel.currentValue)}ngDoCheck(){if(this.svg&&this.differ){const e=this.differ.diff(this._svgStyle);e&&this.applyChanges(e)}}init(){this.name?this.icnSub=this.iconReg.getSvgByName(this.name).subscribe(this.initSvg.bind(this)):this.src?this.icnSub=this.iconReg.loadSvg(this.src).subscribe(this.initSvg.bind(this)):(this.element.nativeElement.innerHTML="",this.cdr.markForCheck())}initSvg(e){this.loaded||(this.setSvg(e),this.resetDiffer())}destroy(){this.svg=void 0,this.differ=void 0,this.loaded=!1,this.icnSub&&this.icnSub.unsubscribe()}resetDiffer(){this._svgStyle&&!this.differ&&(this.differ=this.differs.find(this._svgStyle).create())}setSvg(e){if(!this.loaded&&e){this.svg=e;const t=e.cloneNode(!0),n=this.element.nativeElement;if(n.innerHTML="",this.renderer.appendChild(n,t),this.loaded=!0,this.copyNgContentAttribute(n,t),this.klass&&this.applyClass&&this.setClass(n.firstChild,null,this.klass),this.svgClass&&this.setClass(n.firstChild,null,this.svgClass),this.viewBox)if("auto"===this.viewBox){const e=t.getAttribute("width"),n=t.getAttribute("height");n&&e&&(this.renderer.setAttribute(t,"viewBox",`0 0 ${e} ${n}`),this.renderer.removeAttribute(t,"width"),this.renderer.removeAttribute(t,"height"))}else""!==this.viewBox&&(this.renderer.setAttribute(t,"viewBox",this.viewBox),this.renderer.removeAttribute(t,"width"),this.renderer.removeAttribute(t,"height"));this.stylize(),void 0===this.svgAriaLabel&&n.firstChild.hasAttribute("aria-label")||this.doAria(this.svgAriaLabel||""),this.cdr.markForCheck()}}copyNgContentAttribute(e,t){const n=e.attributes,s=n.length;for(let r=0;r<s;r+=1){const e=n.item(r);if(e.name.startsWith("_ngcontent")){this.setNgContentAttribute(t,e.name);break}}}setNgContentAttribute(e,t){this.renderer.setAttribute(e,t,"");const n=e.childNodes.length;for(let s=0;s<n;s+=1){const n=e.childNodes[s];n instanceof Element&&this.setNgContentAttribute(n,t)}}stylize(){if(this.svg){const e=this.element.nativeElement.firstChild;!0===this.stretch?this.renderer.setAttribute(e,"preserveAspectRatio","none"):!1===this.stretch&&this.renderer.removeAttribute(e,"preserveAspectRatio")}}applyChanges(e){e.forEachRemovedItem(e=>this.setStyle(e.key,null)),e.forEachAddedItem(e=>this.setStyle(e.key,e.currentValue)),e.forEachChangedItem(e=>this.setStyle(e.key,e.currentValue))}setStyle(e,t){const[n,s]=e.split("."),r=this.element.nativeElement.firstChild;null!==(t=null!==t&&s?`${t}${s}`:t)?this.renderer.setStyle(r,n,t):this.renderer.removeStyle(r,n)}setClass(e,t,n){if(e){if(t){const n=Array.isArray(t)?t:t.split(" ");for(const t of n)this.renderer.removeClass(e,t)}if(n){const t=Array.isArray(n)?n:n.split(" ");for(const n of t)this.renderer.addClass(e,n)}}}doAria(e){const t=this.element.nativeElement.firstChild;t&&(""===e?(this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.removeAttribute(t,"aria-label")):(this.renderer.removeAttribute(t,"aria-hidden"),this.renderer.setAttribute(t,"aria-label",e)))}}return e.\u0275fac=function(t){return new(t||e)(s.Hb(s.m),s.Hb(s.u),s.Hb(s.E),s.Hb(y),s.Hb(s.i))},e.\u0275cmp=s.Bb({type:e,selectors:[["svg-icon"]],inputs:{stretch:"stretch",applyClass:"applyClass",applyCss:"applyCss",svgStyle:"svgStyle",src:"src",name:"name",svgClass:"svgClass",klass:["class","klass"],viewBox:"viewBox",svgAriaLabel:"svgAriaLabel"},features:[s.vb],ngContentSelectors:f,decls:1,vars:0,template:function(e,t){1&e&&(s.bc(),s.ac(0))},encapsulation:2}),e})(),k=(()=>{class e{static forRoot(t={}){return{ngModule:e,providers:[w,t.loader||{provide:m,useClass:g}]}}}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(t){return new(t||e)},imports:[[r.b]]}),e})()},kyOO:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n("fXoL");let r=(()=>{class e{constructor(){this.lang=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},mrSG:function(e,t,n){"use strict";function s(e,t,n,s){return new(n||(n=Promise))(function(r,i){function o(e){try{l(s.next(e))}catch(t){i(t)}}function a(e){try{l(s.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,a)}l((s=s.apply(e,t||[])).next())})}n.d(t,"a",function(){return s})},"tk/3":function(e,t,n){"use strict";n.d(t,"a",function(){return x}),n.d(t,"b",function(){return F});var s=n("fXoL"),r=n("LRne"),i=n("HDdC"),o=n("bOdf"),a=n("pLZG"),l=n("lJxs"),c=n("ofXK");class u{}class h{}class d{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const n=e.slice(0,t),s=n.toLowerCase(),r=e.slice(t+1).trim();this.maybeSetNormalizedName(n,s),this.headers.has(s)?this.headers.get(s).push(r):this.headers.set(s,[r])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let n=e[t];const s=t.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(this.headers.set(s,n),this.maybeSetNormalizedName(t,s))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof d?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new d;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof d?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);const s=("a"===e.op?this.headers.get(t):void 0)||[];s.push(...n),this.headers.set(t,s);break;case"d":const r=e.value;if(r){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===r.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class p{encodeKey(e){return b(e)}encodeValue(e){return b(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function b(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class f{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new p,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const n=new Map;return e.length>0&&e.split("&").forEach(e=>{const s=e.indexOf("="),[r,i]=-1==s?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,s)),t.decodeValue(e.slice(s+1))],o=n.get(r)||[];o.push(i),n.set(r,o)}),n}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const n=e.fromObject[t];this.map.set(t,Array.isArray(n)?n:[n])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new f({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat([e]),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(e.value),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const n=t.indexOf(e.value);-1!==n&&t.splice(n,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}function m(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function g(e){return"undefined"!=typeof Blob&&e instanceof Blob}function v(e){return"undefined"!=typeof FormData&&e instanceof FormData}class y{constructor(e,t,n,s){let r;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==n?n:null,r=s):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.params&&(this.params=r.params)),this.headers||(this.headers=new d),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const n=t.indexOf("?");this.urlWithParams=t+(-1===n?"?":n<t.length-1?"&":"")+e}}else this.params=new f,this.urlWithParams=t}serializeBody(){return null===this.body?null:m(this.body)||g(this.body)||v(this.body)||"string"==typeof this.body?this.body:this.body instanceof f?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||v(this.body)?null:g(this.body)?this.body.type||null:m(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof f?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(e={}){const t=e.method||this.method,n=e.url||this.url,s=e.responseType||this.responseType,r=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,o=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let a=e.headers||this.headers,l=e.params||this.params;return void 0!==e.setHeaders&&(a=Object.keys(e.setHeaders).reduce((t,n)=>t.set(n,e.setHeaders[n]),a)),e.setParams&&(l=Object.keys(e.setParams).reduce((t,n)=>t.set(n,e.setParams[n]),l)),new y(t,n,r,{params:l,headers:a,reportProgress:o,responseType:s,withCredentials:i})}}var w=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({});class C{constructor(e,t=200,n="OK"){this.headers=e.headers||new d,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class k extends C{constructor(e={}){super(e),this.type=w.ResponseHeader}clone(e={}){return new k({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class O extends C{constructor(e={}){super(e),this.type=w.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new O({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class M extends C{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function P(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let x=(()=>{class e{constructor(e){this.handler=e}request(e,t,n={}){let s;if(e instanceof y)s=e;else{let r=void 0;r=n.headers instanceof d?n.headers:new d(n.headers);let i=void 0;n.params&&(i=n.params instanceof f?n.params:new f({fromObject:n.params})),s=new y(e,t,void 0!==n.body?n.body:null,{headers:r,params:i,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const i=Object(r.a)(s).pipe(Object(o.a)(e=>this.handler.handle(e)));if(e instanceof y||"events"===n.observe)return i;const c=i.pipe(Object(a.a)(e=>e instanceof O));switch(n.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return c.pipe(Object(l.a)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return c.pipe(Object(l.a)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return c.pipe(Object(l.a)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return c.pipe(Object(l.a)(e=>e.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new f).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,n={}){return this.request("PATCH",e,P(n,t))}post(e,t,n={}){return this.request("POST",e,P(n,t))}put(e,t,n={}){return this.request("PUT",e,P(n,t))}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(u))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})();class N{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const T=new s.r("HTTP_INTERCEPTORS");let _=(()=>{class e{intercept(e,t){return t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})();const E=/^\)\]\}',?\n/;class S{}let A=(()=>{class e{constructor(){}build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})(),R=(()=>{class e{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new i.a(t=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((e,t)=>n.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&n.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();n.responseType="json"!==t?t:"text"}const s=e.serializeBody();let r=null;const i=()=>{if(null!==r)return r;const t=1223===n.status?204:n.status,s=n.statusText||"OK",i=new d(n.getAllResponseHeaders()),o=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(n)||e.url;return r=new k({headers:i,status:t,statusText:s,url:o}),r},o=()=>{let{headers:s,status:r,statusText:o,url:a}=i(),l=null;204!==r&&(l=void 0===n.response?n.responseText:n.response),0===r&&(r=l?200:0);let c=r>=200&&r<300;if("json"===e.responseType&&"string"==typeof l){const e=l;l=l.replace(E,"");try{l=""!==l?JSON.parse(l):null}catch(u){l=e,c&&(c=!1,l={error:u,text:l})}}c?(t.next(new O({body:l,headers:s,status:r,statusText:o,url:a||void 0})),t.complete()):t.error(new M({error:l,headers:s,status:r,statusText:o,url:a||void 0}))},a=e=>{const{url:s}=i(),r=new M({error:e,status:n.status||0,statusText:n.statusText||"Unknown Error",url:s||void 0});t.error(r)};let l=!1;const c=s=>{l||(t.next(i()),l=!0);let r={type:w.DownloadProgress,loaded:s.loaded};s.lengthComputable&&(r.total=s.total),"text"===e.responseType&&n.responseText&&(r.partialText=n.responseText),t.next(r)},u=e=>{let n={type:w.UploadProgress,loaded:e.loaded};e.lengthComputable&&(n.total=e.total),t.next(n)};return n.addEventListener("load",o),n.addEventListener("error",a),e.reportProgress&&(n.addEventListener("progress",c),null!==s&&n.upload&&n.upload.addEventListener("progress",u)),n.send(s),t.next({type:w.Sent}),()=>{n.removeEventListener("error",a),n.removeEventListener("load",o),e.reportProgress&&(n.removeEventListener("progress",c),null!==s&&n.upload&&n.upload.removeEventListener("progress",u)),n.readyState!==n.DONE&&n.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(S))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})();const L=new s.r("XSRF_COOKIE_NAME"),I=new s.r("XSRF_HEADER_NAME");class B{}let j=(()=>{class e{constructor(e,t,n){this.doc=e,this.platform=t,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(c.s)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(c.c),s.Rb(s.C),s.Rb(L))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})(),z=(()=>{class e{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);const s=this.tokenService.getToken();return null===s||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,s)})),t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(B),s.Rb(I))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})(),U=(()=>{class e{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(T,[]);this.chain=e.reduceRight((e,t)=>new N(e,t),this.backend)}return this.chain.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(h),s.Rb(s.s))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac}),e})(),H=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:z,useClass:_}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:L,useValue:t.cookieName}:[],t.headerName?{provide:I,useValue:t.headerName}:[]]}}}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(t){return new(t||e)},providers:[z,{provide:T,useExisting:z,multi:!0},{provide:B,useClass:j},{provide:L,useValue:"XSRF-TOKEN"},{provide:I,useValue:"X-XSRF-TOKEN"}]}),e})(),F=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(t){return new(t||e)},providers:[x,{provide:u,useClass:U},R,{provide:h,useExisting:R},A,{provide:S,useExisting:A}],imports:[[H.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e})()},x0yz:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var s=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),o=n("IpX9"),a=n("tyNb"),l=n("tk/3"),c=n("OFbc"),u=n("kyOO"),h=n("fXoL");let d=(()=>{class e{}return e.\u0275mod=h.Fb({type:e}),e.\u0275inj=h.Eb({factory:function(t){return new(t||e)},providers:[o.a,u.a],imports:[[s.b,r.a,i.L,a.j,l.b,c.a.forRoot()]]}),e})()}}]);