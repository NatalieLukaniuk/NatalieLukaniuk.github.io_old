(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"dX+u":function(t,n,e){"use strict";e.r(n),e.d(n,"Parallax4PageModule",function(){return p});var o=e("ofXK"),r=e("3Pt+"),i=e("TEn/"),a=e("tyNb"),c=e("fXoL");let s=(()=>{class t{constructor(){}rotate(t){const n=this.card.querySelector(".card-item");n.style.transform="rotateX("+-(t.offsetY-n.offsetHeight/2)/10+"deg) rotateY("+(t.offsetX-n.offsetWidth/2)/10+"deg)"}stopRotate(){this.card.querySelector(".card-item").style.transform="rotate(0)"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=c.Cb({type:t,selectors:[["","appRotateCards",""]],hostBindings:function(t,n){1&t&&c.Vb("mousemove",function(t){return n.rotate(t)})("mouseout",function(){return n.stopRotate()})},inputs:{card:"card"}}),t})();function d(t,n){1&t&&(c.Nb(0,"h1"),c.ic(1,"This sample is not suited for mobile devices"),c.Mb())}const g=[{path:"",component:(()=>{class t{constructor(){this.intViewportWidth=window.innerWidth}ngOnInit(){this.card1=document.getElementById("card1"),this.card2=document.getElementById("card2"),this.card3=document.getElementById("card3")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Bb({type:t,selectors:[["app-parallax4"]],decls:12,vars:4,consts:[[1,"paintings-gallery","ion-align-items-center","ion-justify-content-around"],[4,"ngIf"],["id","card1","appRotateCards","",3,"card"],[1,"card-item"],["src","assets/images/playground/starry_night_full.jpg"],["id","card2","appRotateCards","",3,"card"],["src","assets/images/playground/The-Persistence-of-Memory-1931-Salvador-Dali.jpg"],["id","card3","appRotateCards","",3,"card"],["src","assets/images/playground/The-Scream-Edvard-Munch.jpg"]],template:function(t,n){1&t&&(c.Nb(0,"ion-content"),c.Nb(1,"ion-row",0),c.gc(2,d,2,0,"h1",1),c.Nb(3,"ion-row",2),c.Nb(4,"ion-row",3),c.Ib(5,"img",4),c.Mb(),c.Mb(),c.Nb(6,"ion-row",5),c.Nb(7,"ion-row",3),c.Ib(8,"img",6),c.Mb(),c.Mb(),c.Nb(9,"ion-row",7),c.Nb(10,"ion-row",3),c.Ib(11,"img",8),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&t&&(c.xb(2),c.ac("ngIf",n.intViewportWidth<800),c.xb(1),c.ac("card",n.card1),c.xb(3),c.ac("card",n.card2),c.xb(3),c.ac("card",n.card3))},directives:[i.k,i.y,o.i,s],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .paintings-gallery[_ngcontent-%COMP%]{background:#007f9b;min-height:100vh}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .paintings-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:1.5rem;text-align:center}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .paintings-gallery[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%]{perspective:1000px;transform-style:preserve-3d}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .paintings-gallery[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%]{transition:transform .2s}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .paintings-gallery[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%] > ion-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:58vw;max-height:300px;width:auto}"]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[a.j.forChild(g)],a.j]}),t})(),p=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[o.b,r.a,i.H,l]]}),t})()}}]);