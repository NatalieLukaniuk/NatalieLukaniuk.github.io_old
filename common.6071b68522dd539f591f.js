(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,n,e){"use strict";e.d(n,"a",function(){return c});var i=e("A36C"),o=e("iWo5"),r=e("qULd");const c=(t,n)=>{let e,c;const s=(t,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&n(r)?r!==e&&(l(),a(r,o)):l()},a=(t,n)=>{e=t,c||(c=e);const o=e;Object(i.f)(()=>o.classList.add("ion-activated")),n()},l=(t=!1)=>{if(!e)return;const n=e;Object(i.f)(()=>n.classList.remove("ion-activated")),t&&c!==e&&e.click(),e=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,r.a),onMove:t=>s(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),c=void 0}})}},"74mu":function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return s});const i=(t,n)=>null!==n.closest(t),o=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},n):n,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,n,e,i)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const o=document.querySelector("ion-router");if(o)return null!=n&&n.preventDefault(),o.push(t,e,i)}return!1}},LmEr:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var i=e("fXoL"),o=e("ofXK"),r=e("TEn/"),c=e("OFbc");function s(t,n){1&t&&(i.Nb(0,"p"),i.kc(1,"Powered by Natalie Lukaniuk"),i.Mb())}function a(t,n){1&t&&(i.Nb(0,"p"),i.kc(1,"copyright \xa9 2021 all rights reserved"),i.Mb())}function l(t,n){1&t&&(i.Nb(0,"ion-row"),i.Nb(1,"p"),i.kc(2,"2021 \xa9 Natalie Lukaniuk"),i.Mb(),i.Mb())}let u=(()=>{class t{constructor(){this.intViewportWidth=window.innerWidth}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["app-footer"]],decls:11,vars:3,consts:[[4,"ngIf"],[1,"ion-nowrap"],["fill","clear","href","mailto:natalie.lukaniuk@gmail.com","target","_blank"],["name","mail-outline"],["fill","clear","href","https://www.facebook.com/natalia.lukaniuk/","target","_blank"],["name","logo-facebook"],["fill","clear","href","https://t.me/Redhead_nata","target","_blank"],["src","/assets/svg/telegram.svg",2,"margin-top","3px"]],template:function(t,n){1&t&&(i.Nb(0,"footer"),i.ic(1,s,2,0,"p",0),i.ic(2,a,2,0,"p",0),i.Nb(3,"ion-row",1),i.Nb(4,"ion-button",2),i.Ib(5,"ion-icon",3),i.Mb(),i.Nb(6,"ion-button",4),i.Ib(7,"ion-icon",5),i.Mb(),i.Nb(8,"ion-button",6),i.Ib(9,"svg-icon",7),i.Mb(),i.Mb(),i.ic(10,l,3,0,"ion-row",0),i.Mb()),2&t&&(i.xb(1),i.cc("ngIf",n.intViewportWidth>660),i.xb(1),i.cc("ngIf",n.intViewportWidth>660),i.xb(8),i.cc("ngIf",n.intViewportWidth<=660))},directives:[o.i,r.y,r.d,r.n,c.b],styles:["[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{z-index:10;background:var(--ion-color-tertiary);display:flex;height:4rem;justify-content:center;width:100%;align-items:center}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.6rem;margin:0 1.5rem}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start:0.5rem;--padding-end:0.5rem;height:2rem}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:24px;height:24px}@media (max-width:660px){[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{flex-direction:column}}"]}),t})()},ZaV5:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});const i=async(t,n,e,i,o)=>{if(t)return t.attachViewToDom(n,e,o,i);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return i&&i.forEach(t=>r.classList.add(t)),o&&Object.assign(r,o),n.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},o=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},h3R7:function(t,n,e){"use strict";e.d(n,"a",function(){return i});const i={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const i=t*n/e-t+"ms",o=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const i=n/e,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},qULd:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return s});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},c=()=>{i.selectionChanged()},s=()=>{i.selectionEnd()},a=t=>{i.impact(t)}}}]);