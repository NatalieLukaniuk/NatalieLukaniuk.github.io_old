(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{gx7t:function(e,t,n){"use strict";n.r(t),n.d(t,"ConverterPageModule",function(){return m});var o=n("ofXK"),i=n("3Pt+"),c=n("TEn/"),r=n("tyNb"),a=n("fXoL"),l=n("2MiI");let s=(()=>{class e{constructor(){this.defaultPxSize=18,this.decimalDigits=2,this.mockupWidth=1920,this.mockupHeight=1080}calculateRems(){this.rems=+(this.pixels/this.defaultPxSize).toFixed(this.decimalDigits)}calculateVW(){this.vw=+(this.pixels/this.mockupWidth*100).toFixed(this.decimalDigits)}calculateVH(){this.vh=+(this.pixels/this.mockupHeight*100).toFixed(this.decimalDigits)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function b(e,t){if(1&e&&(a.Nb(0,"ion-row",8),a.Nb(1,"h2"),a.qc(2,"Your values:"),a.Mb(),a.Nb(3,"p"),a.qc(4),a.Mb(),a.Nb(5,"p"),a.qc(6),a.Mb(),a.Nb(7,"p"),a.qc(8),a.Mb(),a.Mb()),2&e){const e=a.Zb();a.xb(4),a.sc("",e.converter.rems,"rem"),a.xb(2),a.sc("",e.converter.vh,"vh"),a.xb(2),a.sc("",e.converter.vw,"vw")}}function u(e,t){if(1&e&&(a.Nb(0,"ion-row",9),a.Nb(1,"h2"),a.qc(2,"Your values:"),a.Mb(),a.Nb(3,"ion-item",3),a.qc(4),a.Mb(),a.Nb(5,"ion-item",3),a.qc(6),a.Mb(),a.Nb(7,"ion-item",3),a.qc(8),a.Mb(),a.Mb()),2&e){const e=a.Zb();a.xb(4),a.sc("",e.converter.rems,"rem"),a.xb(2),a.sc("",e.converter.vh,"vh"),a.xb(2),a.sc("",e.converter.vw,"vw")}}let d=(()=>{class e{constructor(e){this.converter=e,this.intViewportWidth=window.innerWidth}ngOnInit(){}calculate(){this.converter.calculateRems(),this.converter.calculateVW(),this.converter.calculateVH()}}return e.\u0275fac=function(t){return new(t||e)(a.Hb(s))},e.\u0275cmp=a.Bb({type:e,selectors:[["app-rem-converter-component"]],inputs:{color:"color"},decls:24,vars:7,consts:[[1,"ion-justify-content-evenly","wrapper"],["class","converted-data ion-align-items-baseline ion-justify-content-evenly",4,"ngIf"],[1,"initial-data"],[1,"full-width"],["position","stacked",1,"ion-text-wrap"],["placeholder","Pixels value",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["class","converted-data",4,"ngIf"],[1,"converted-data","ion-align-items-baseline","ion-justify-content-evenly"],[1,"converted-data"]],template:function(e,t){1&e&&(a.Nb(0,"ion-row",0),a.oc(1,b,9,3,"ion-row",1),a.Nb(2,"ion-row",2),a.Nb(3,"ion-item",3),a.Nb(4,"ion-label",4),a.qc(5,"Pixels:"),a.Mb(),a.Nb(6,"ion-input",5),a.Vb("ngModelChange",function(e){return t.converter.pixels=e})("ngModelChange",function(){return t.calculate()}),a.Mb(),a.Mb(),a.Nb(7,"ion-item",3),a.Nb(8,"ion-label",4),a.qc(9,"Default pixel size:"),a.Mb(),a.Nb(10,"ion-input",6),a.Vb("ngModelChange",function(e){return t.converter.defaultPxSize=e})("ngModelChange",function(){return t.calculate()}),a.Mb(),a.Mb(),a.Nb(11,"ion-item",3),a.Nb(12,"ion-label",4),a.qc(13,"Mockup's width:"),a.Mb(),a.Nb(14,"ion-input",6),a.Vb("ngModelChange",function(e){return t.converter.mockupWidth=e})("ngModelChange",function(){return t.calculate()}),a.Mb(),a.Mb(),a.Nb(15,"ion-item",3),a.Nb(16,"ion-label",4),a.qc(17,"Mockup's height:"),a.Mb(),a.Nb(18,"ion-input",6),a.Vb("ngModelChange",function(e){return t.converter.mockupHeight=e})("ngModelChange",function(){return t.calculate()}),a.Mb(),a.Mb(),a.Nb(19,"ion-item",3),a.Nb(20,"ion-label",4),a.qc(21,"Digits after the decimal point:"),a.Mb(),a.Nb(22,"ion-input",6),a.Vb("ngModelChange",function(e){return t.converter.decimalDigits=e})("ngModelChange",function(){return t.calculate()}),a.Mb(),a.Mb(),a.Mb(),a.oc(23,u,9,3,"ion-row",7),a.Mb()),2&e&&(a.xb(1),a.gc("ngIf",t.intViewportWidth<=450&&t.converter.pixels),a.xb(5),a.gc("ngModel",t.converter.pixels),a.xb(4),a.gc("ngModel",t.converter.defaultPxSize),a.xb(4),a.gc("ngModel",t.converter.mockupWidth),a.xb(4),a.gc("ngModel",t.converter.mockupHeight),a.xb(4),a.gc("ngModel",t.converter.decimalDigits),a.xb(1),a.gc("ngIf",t.intViewportWidth>450&&t.converter.pixels))},directives:[c.D,o.m,c.u,c.v,c.t,c.S,i.d,i.g],styles:["[_nghost-%COMP%]{width:100%;overflow-y:auto;height:100%}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{max-width:950px;margin:0 auto}[_nghost-%COMP%]   .converted-data[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .converted-data[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .converted-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-user-select:all;user-select:all;font-size:.73rem}@media (min-width:450px){[_nghost-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .initial-data[_ngcontent-%COMP%]{max-width:150px}}@media (max-width:450px){[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .converted-data[_ngcontent-%COMP%]{flex-direction:row;width:100%}}"]}),e})();var g=n("LmEr");const h=[{path:"",component:(()=>{class e{constructor(){this.color="tertiary"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Bb({type:e,selectors:[["app-converter"]],decls:6,vars:3,consts:[["translucent","true","color","tertiary",1,"ion-no-border"],[3,"useContainer","color"],["color","tertiary",3,"fullscreen"]],template:function(e,t){1&e&&(a.Nb(0,"ion-header",0),a.Ib(1,"app-header",1),a.Mb(),a.Nb(2,"ion-content",2),a.Nb(3,"ion-row"),a.Ib(4,"app-rem-converter-component"),a.Mb(),a.Ib(5,"app-footer"),a.Mb()),2&e&&(a.xb(1),a.gc("useContainer",!0)("color",t.color),a.xb(1),a.gc("fullscreen",!0))},directives:[c.q,l.a,c.l,c.D,d,g.a],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%]{padding:1rem;height:calc(100vh - 8.56rem)}@media (min-width:768px){[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%]{height:calc(100vh - 7.56rem)}}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(h)],r.j]}),e})();var M=n("x0yz");let m=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[o.c,i.a,c.M,p,M.a]]}),e})()}}]);