(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jidx:function(t,e,n){"use strict";n.r(e),n.d(e,"ToDoListAppPageModule",function(){return I});var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb");function c(t,e,n,i){return new(n||(n=Promise))(function(o,s){function r(t){try{l(i.next(t))}catch(e){s(e)}}function c(t){try{l(i.throw(t))}catch(e){s(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,c)}l((i=i.apply(t,e||[])).next())})}var l=n("fXoL");let a=(()=>{class t{constructor(){this.lists=[{name:"Today",highPriorityTasks:[{taskName:"refactor html"},{taskName:"refactor css"}],regularPriorityTasks:[{taskName:"add delete button"}],lowPriorityTasks:[{taskName:"add toast"}]},{name:"Long-term",highPriorityTasks:[],lowPriorityTasks:[],regularPriorityTasks:[]},{name:"Can wait",highPriorityTasks:[],lowPriorityTasks:[],regularPriorityTasks:[]}]}deleteTask(t,e,n){switch(n){case"high":this.lists[e].highPriorityTasks.splice(this.lists[e].highPriorityTasks.indexOf(t),1);break;case"default":this.lists[e].regularPriorityTasks.splice(this.lists[e].regularPriorityTasks.indexOf(t),1);break;case"low":this.lists[e].lowPriorityTasks.splice(this.lists[e].lowPriorityTasks.indexOf(t),1)}}clearList(t){this.lists[t].highPriorityTasks.splice(0),this.lists[t].regularPriorityTasks.splice(0),this.lists[t].lowPriorityTasks.splice(0)}addNewTask(t,e,n){for(let i=0;i<e.length;i++)for(let o=0;o<this.lists.length;o++)if(this.lists[o].name===e[i])switch(n){case"high":this.lists[o].highPriorityTasks.push({taskName:t});break;case"default":this.lists[o].regularPriorityTasks.push({taskName:t});break;case"low":this.lists[o].lowPriorityTasks.push({taskName:t})}}deleteList(t){this.lists.splice(t,1)}changeListName(t,e){this.lists[e].name=t}addNewList(t){this.lists.push({name:t,regularPriorityTasks:[],lowPriorityTasks:[],highPriorityTasks:[]})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,e){this.popoverController=t,this.tasksService=e,this.newListName=""}ngOnInit(){}addNewListName(t){this.tasksService.addNewList(t),this.popoverController.dismiss()}cancel(){this.popoverController.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(s.C),l.Hb(a))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-new-list-popover"]],decls:8,vars:2,consts:[[1,"wrapper"],[1,"full-width"],["placeholder","name for your new list",3,"ngModel","ngModelChange"],[1,"confirmation-block"],["color","success",3,"disabled","click"],["color","danger",3,"click"]],template:function(t,e){1&t&&(l.Nb(0,"ion-row",0),l.Nb(1,"ion-item",1),l.Nb(2,"ion-input",2),l.Vb("ngModelChange",function(t){return e.newListName=t}),l.Mb(),l.Mb(),l.Nb(3,"ion-row",3),l.Nb(4,"ion-button",4),l.Vb("click",function(){return e.addNewListName(e.newListName)}),l.ic(5,"Add"),l.Mb(),l.Nb(6,"ion-button",5),l.Vb("click",function(){return e.cancel()}),l.ic(7,"Cancel"),l.Mb(),l.Mb(),l.Mb()),2&t&&(l.xb(2),l.ac("ngModel",e.newListName),l.xb(2),l.ac("disabled",e.newListName.length<=0))},directives:[s.r,s.k,s.j,s.F,o.d,o.e,s.c],styles:["[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex-direction:column;padding:1rem}"]}),t})(),b=(()=>{class t{constructor(t,e){this.popoverController=t,this.tasksService=e,this.newName=""}ngOnInit(){}changeListName(t){this.tasksService.changeListName(t,this.currentListIndex),this.popoverController.dismiss()}cancel(){this.popoverController.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(s.C),l.Hb(a))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-edit-popover"]],inputs:{currentListIndex:"currentListIndex",color:"color"},decls:10,vars:3,consts:[[1,"wrapper"],[1,"full-width",3,"color"],["position","stacked"],[3,"ngModel","ngModelChange"],[1,"confirmation-block"],["color","success",3,"disabled","click"],["color","danger",3,"click"]],template:function(t,e){1&t&&(l.Nb(0,"ion-row",0),l.Nb(1,"ion-item",1),l.Nb(2,"ion-label",2),l.ic(3,"New name for this list:"),l.Mb(),l.Nb(4,"ion-input",3),l.Vb("ngModelChange",function(t){return e.newName=t}),l.Mb(),l.Mb(),l.Nb(5,"ion-row",4),l.Nb(6,"ion-button",5),l.Vb("click",function(){return e.changeListName(e.newName)}),l.ic(7,"Apply"),l.Mb(),l.Nb(8,"ion-button",6),l.Vb("click",function(){return e.cancel()}),l.ic(9,"Cancel"),l.Mb(),l.Mb(),l.Mb()),2&t&&(l.xb(1),l.ac("color",e.color),l.xb(3),l.ac("ngModel",e.newName),l.xb(2),l.ac("disabled",e.newName.length<=0))},directives:[s.r,s.k,s.l,s.j,s.F,o.d,o.e,s.c],styles:["[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{background:var(--ion-color-tertiary);width:100%;padding:1rem}"]}),t})(),h=(()=>{class t{constructor(t,e,n){this.popoverController=t,this.alertController=e,this.tasksService=n}ngOnInit(){}clearList(){return c(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"delete-alert",header:"Do you really want to delete all tasks from this list?",subHeader:"This cannot be undone",buttons:[{text:"Delete",role:"delete",cssClass:"delete-btn",handler:()=>{this.tasksService.clearList(this.currentListIndex)}},{text:"Cancel",role:"cancel",cssClass:"cancel-btn",handler:()=>{this.alertController.dismiss()}}]});yield t.present(),yield this.popoverController.dismiss()})}editListName(){return c(this,void 0,void 0,function*(){yield this.popoverController.dismiss();const t=yield this.popoverController.create({component:b,cssClass:"edit-popover",translucent:!1,componentProps:{currentListIndex:this.currentListIndex,color:this.color}});return yield t.present()})}deleteList(){return c(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"delete-alert",header:"Do you really want to delete this list?",subHeader:"This cannot be undone",buttons:[{text:"Delete",role:"delete",cssClass:"delete-btn",handler:()=>{this.tasksService.deleteList(this.currentListIndex)}},{text:"Cancel",role:"cancel",cssClass:"cancel-btn",handler:()=>{this.alertController.dismiss()}}]});yield t.present(),yield this.popoverController.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(s.C),l.Hb(s.a),l.Hb(a))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-list-menu"]],inputs:{currentListIndex:"currentListIndex",color:"color"},decls:10,vars:0,consts:[["lines","none"],[1,"full-width",3,"click"],["name","trash-outline"],["name","create-outline"]],template:function(t,e){1&t&&(l.Nb(0,"ion-list",0),l.Nb(1,"ion-item",1),l.Vb("click",function(){return e.clearList()}),l.Ib(2,"ion-icon",2),l.ic(3," Clear list "),l.Mb(),l.Nb(4,"ion-item",1),l.Vb("click",function(){return e.editListName()}),l.Ib(5,"ion-icon",3),l.ic(6," Edit list name "),l.Mb(),l.Nb(7,"ion-item",1),l.Vb("click",function(){return e.deleteList()}),l.Ib(8,"ion-icon",2),l.ic(9," Remove list "),l.Mb(),l.Mb())},directives:[s.m,s.k,s.i],styles:["[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{background:var(--ion-color-tertiary);padding:1rem}[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var u=n("2MiI");function p(t,e){if(1&t&&(l.Nb(0,"ion-select-option",12),l.ic(1),l.Mb()),2&t){const t=e.$implicit;l.ac("value",t.name),l.xb(1),l.jc(t.name)}}let g=(()=>{class t{constructor(t){this.tasksService=t,this.newTask="",this.selectedList=["Today"],this.selectedPriority="default",this.selectionOptions={showBackdrop:!1,cssClass:"task-add-selection-alert"}}ngOnInit(){console.log(this.tasksService.lists)}onChange(t,e){switch(e){case"list":this.selectedList=t.target.value;break;case"priority":this.selectedPriority=t.target.value}}addNewTask(t,e,n){this.tasksService.addNewTask(t,e,n)}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(a))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-task-add"]],inputs:{color:"color"},decls:23,vars:7,consts:[[1,"task-add-wrapper"],[1,"wrapper","ion-justify-content-evenly","ion-align-items-start"],[1,"full-width"],["position","stacked"],["placeholder","task name goes here","name","newTask",3,"ngModel","ngModelChange"],["multiple","true","cancelText","Cancel","okText","Apply",3,"interfaceOptions","ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["cancelText","Cancel","okText","Apply",3,"value","interfaceOptions","ionChange"],["value","default"],["value","high"],["value","low"],[1,"add-btn","full-width",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(l.Nb(0,"ion-row",0),l.Nb(1,"ion-list",1),l.Nb(2,"ion-item",2),l.Nb(3,"ion-label",3),l.ic(4,"The task to complete"),l.Mb(),l.Nb(5,"ion-input",4),l.Vb("ngModelChange",function(t){return e.newTask=t}),l.Mb(),l.Mb(),l.Nb(6,"ion-item",2),l.Nb(7,"ion-label",3),l.ic(8,"List to add to"),l.Mb(),l.Nb(9,"ion-select",5),l.Vb("ngModelChange",function(t){return e.selectedList=t})("ionChange",function(t){return e.onChange(t,"list")}),l.gc(10,p,2,2,"ion-select-option",6),l.Mb(),l.Mb(),l.Nb(11,"ion-item",2),l.Nb(12,"ion-label",3),l.ic(13,"Change priority"),l.Mb(),l.Nb(14,"ion-select",7),l.Vb("ionChange",function(t){return e.onChange(t,"priority")}),l.Nb(15,"ion-select-option",8),l.ic(16,"Default"),l.Mb(),l.Nb(17,"ion-select-option",9),l.ic(18,"High"),l.Mb(),l.Nb(19,"ion-select-option",10),l.ic(20,"Low"),l.Mb(),l.Mb(),l.Mb(),l.Nb(21,"ion-button",11),l.Vb("click",function(){return e.addNewTask(e.newTask,e.selectedList,e.selectedPriority)}),l.ic(22,"Add"),l.Mb(),l.Mb(),l.Mb()),2&t&&(l.xb(5),l.ac("ngModel",e.newTask),l.xb(4),l.ac("interfaceOptions",e.selectionOptions)("ngModel",e.selectedList),l.xb(1),l.ac("ngForOf",e.tasksService.lists),l.xb(4),l.ac("value",e.selectedPriority)("interfaceOptions",e.selectionOptions),l.xb(7),l.ac("disabled",e.newTask.length<=0))},directives:[s.r,s.m,s.k,s.l,s.j,s.F,o.d,o.e,s.u,s.E,i.h,s.v,s.c],styles:["[_nghost-%COMP%]{--background:transparent;width:100%}[_nghost-%COMP%]   .task-add-wrapper[_ngcontent-%COMP%]{flex-direction:column;padding:0 1rem 2rem}[_nghost-%COMP%]   .task-add-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{background:transparent}"]}),t})();function M(t,e){1&t&&(l.Nb(0,"h2"),l.ic(1,"Important tasks"),l.Mb())}function m(t,e){if(1&t){const t=l.Ob();l.Nb(0,"ion-item",5),l.Nb(1,"ion-label"),l.ic(2),l.Mb(),l.Nb(3,"ion-button",6),l.Vb("click",function(){l.dc(t);const n=e.$implicit;return l.Xb().deleteTask(n,"high")}),l.Ib(4,"ion-icon",7),l.Mb(),l.Mb()}if(2&t){const t=e.$implicit;l.xb(2),l.jc(t.taskName)}}function k(t,e){1&t&&(l.Nb(0,"h2"),l.ic(1,"Medium priority tasks"),l.Mb())}function f(t,e){if(1&t){const t=l.Ob();l.Nb(0,"ion-item",5),l.Nb(1,"ion-label"),l.ic(2),l.Mb(),l.Nb(3,"ion-button",6),l.Vb("click",function(){l.dc(t);const n=e.$implicit;return l.Xb().deleteTask(n,"default")}),l.Ib(4,"ion-icon",7),l.Mb(),l.Mb()}if(2&t){const t=e.$implicit;l.xb(2),l.jc(t.taskName)}}function C(t,e){1&t&&(l.Nb(0,"h2"),l.ic(1,"Low priority tasks"),l.Mb())}function w(t,e){if(1&t){const t=l.Ob();l.Nb(0,"ion-item",5),l.Nb(1,"ion-label"),l.ic(2),l.Mb(),l.Nb(3,"ion-button",6),l.Vb("click",function(){l.dc(t);const n=e.$implicit;return l.Xb().deleteTask(n,"low")}),l.Ib(4,"ion-icon",7),l.Mb(),l.Mb()}if(2&t){const t=e.$implicit;l.xb(2),l.jc(t.taskName)}}function P(t,e){1&t&&(l.Nb(0,"ion-item",5),l.ic(1," You don't have any tasks in this list yet "),l.Mb())}let v=(()=>{class t{constructor(t,e){this.alertController=t,this.tasksService=e}ngOnInit(){}deleteTask(t,e){return c(this,void 0,void 0,function*(){const n=yield this.alertController.create({cssClass:"delete-alert",header:"Do you really want to delete this task?",subHeader:"This cannot be undone",buttons:[{text:"Delete",role:"delete",cssClass:"delete-btn",handler:()=>{this.tasksService.deleteTask(t,this.i,e)}},{text:"Cancel",role:"cancel",cssClass:"cancel-btn",handler:()=>{this.alertController.dismiss()}}]});yield n.present()})}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(s.a),l.Hb(a))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-list-content"]],inputs:{i:"i"},decls:9,vars:7,consts:[[1,"current-list"],["lines","none",1,"wrapper"],[4,"ngIf"],["class","full-width",4,"ngFor","ngForOf"],["class","full-width",4,"ngIf"],[1,"full-width"],["fill","clear","size","small",1,"remove-btn",3,"click"],["name","trash-outline"]],template:function(t,e){1&t&&(l.Nb(0,"ion-row",0),l.Nb(1,"ion-list",1),l.gc(2,M,2,0,"h2",2),l.gc(3,m,5,1,"ion-item",3),l.gc(4,k,2,0,"h2",2),l.gc(5,f,5,1,"ion-item",3),l.gc(6,C,2,0,"h2",2),l.gc(7,w,5,1,"ion-item",3),l.gc(8,P,2,0,"ion-item",4),l.Mb(),l.Mb()),2&t&&(l.xb(2),l.ac("ngIf",e.tasksService.lists[e.i].highPriorityTasks.length>0),l.xb(1),l.ac("ngForOf",e.tasksService.lists[e.i].highPriorityTasks),l.xb(1),l.ac("ngIf",e.tasksService.lists[e.i].regularPriorityTasks.length>0),l.xb(1),l.ac("ngForOf",e.tasksService.lists[e.i].regularPriorityTasks),l.xb(1),l.ac("ngIf",e.tasksService.lists[e.i].lowPriorityTasks.length>0),l.xb(1),l.ac("ngForOf",e.tasksService.lists[e.i].lowPriorityTasks),l.xb(1),l.ac("ngIf",e.tasksService.lists[e.i].highPriorityTasks.length<1&&e.tasksService.lists[e.i].regularPriorityTasks.length<1&&e.tasksService.lists[e.i].lowPriorityTasks.length<1))},directives:[s.r,s.m,i.i,i.h,s.k,s.l,s.c,s.i],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{background:transparent}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:20px;font-size:1.2rem;text-align:center;font-weight:600;text-transform:capitalize}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:27px;height:20px}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover   .remove-btn[_ngcontent-%COMP%]{display:block}"]}),t})();function y(t,e){if(1&t&&(l.Nb(0,"ion-select-option",16),l.ic(1),l.Mb()),2&t){const t=e.$implicit;l.ac("value",t.name),l.xb(1),l.jc(t.name)}}function O(t,e){if(1&t&&(l.Nb(0,"h1"),l.ic(1),l.Mb()),2&t){const t=l.Xb();l.xb(1),l.kc("Your tasks from ",t.listToDisplay," list")}}function N(t,e){if(1&t){const t=l.Ob();l.Nb(0,"ion-row",17),l.Nb(1,"ion-button",19),l.Vb("click",function(e){l.dc(t);const n=l.Xb().index;return l.Xb().openListMenu(e,n)}),l.Ib(2,"ion-icon",20),l.Mb(),l.Ib(3,"app-list-content",21),l.Mb()}if(2&t){const t=l.Xb().index;l.xb(3),l.ac("i",t)}}function x(t,e){if(1&t&&(l.Nb(0,"ion-row",17),l.gc(1,N,4,1,"ion-row",18),l.Mb()),2&t){const t=e.$implicit;l.xb(1),l.ac("ngSwitchCase",t.name)}}const _=[{path:"",component:(()=>{class t{constructor(t,e){this.popoverController=t,this.tasksService=e,this.color="tertiary",this.listSelectionOptions={showBackdrop:!1,cssClass:"list-selection-popover"}}ngOnInit(){}openCreateNewListPopover(){return c(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:d,cssClass:"new-list-popover",event:this.ev,translucent:!0});return yield t.present()})}openListMenu(t,e){return c(this,void 0,void 0,function*(){const n=yield this.popoverController.create({component:h,cssClass:"list-menu-popover",event:t,translucent:!1,showBackdrop:!1,componentProps:{currentListIndex:e,color:this.color}});return yield n.present()})}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(s.C),l.Hb(a))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-to-do-list-app"]],decls:21,vars:12,consts:[["translucent","true","color","tertiary",1,"ion-no-border"],[3,"useContainer","color"],["color","tertiary",3,"fullscreen"],["collapse","condense",1,"ion-no-border"],[1,"background-container"],[1,"add-new-task-section"],[3,"color"],[1,"right-pane"],[1,"list-selection-section","ion-justify-content-between"],["interface","popover","placeholder","Select list to display",1,"list-select",3,"ngModel","interfaceOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"add-new-list-btn","hint",3,"click"],["name","add-outline"],[1,"list-display-section",3,"ngSwitch"],[4,"ngIf"],["class","full-width",4,"ngFor","ngForOf"],[3,"value"],[1,"full-width"],["class","full-width",4,"ngSwitchCase"],["fill","clear",1,"list-menu-btn",3,"click"],["name","ellipsis-horizontal-outline"],[3,"i"]],template:function(t,e){1&t&&(l.Nb(0,"ion-header",0),l.Nb(1,"app-header",1),l.ic(2," To-do-list "),l.Mb(),l.Mb(),l.Nb(3,"ion-content",2),l.Nb(4,"ion-header",3),l.Nb(5,"app-header",1),l.ic(6," To-do-list "),l.Mb(),l.Mb(),l.Nb(7,"main"),l.Nb(8,"ion-row",4),l.Nb(9,"ion-row",5),l.Ib(10,"app-task-add",6),l.Mb(),l.Nb(11,"ion-row",7),l.Nb(12,"ion-row",8),l.Nb(13,"ion-select",9),l.Vb("ngModelChange",function(t){return e.listToDisplay=t}),l.gc(14,y,2,2,"ion-select-option",10),l.Mb(),l.Nb(15,"ion-button",11),l.Vb("click",function(){return e.openCreateNewListPopover()}),l.Ib(16,"ion-icon",12),l.ic(17," New list "),l.Mb(),l.Mb(),l.Nb(18,"ion-row",13),l.gc(19,O,2,1,"h1",14),l.gc(20,x,2,1,"ion-row",15),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&t&&(l.xb(1),l.ac("useContainer",!0)("color",e.color),l.xb(2),l.ac("fullscreen",!0),l.xb(2),l.ac("useContainer",!0)("color",e.color),l.xb(5),l.ac("color",e.color),l.xb(3),l.ac("ngModel",e.listToDisplay)("interfaceOptions",e.listSelectionOptions),l.xb(1),l.ac("ngForOf",e.tasksService.lists),l.xb(4),l.ac("ngSwitch",e.listToDisplay),l.xb(1),l.ac("ngIf",e.listToDisplay),l.xb(1),l.ac("ngForOf",e.tasksService.lists))},directives:[s.h,u.a,s.f,s.r,g,s.u,s.E,o.d,o.e,i.h,s.c,s.i,i.j,i.i,s.v,i.k,v],styles:["[_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:90vh}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]{justify-content:space-evenly;min-height:50vh;height:-webkit-max-content;height:max-content;padding:3vw;width:100%;max-width:1500px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .add-new-task-section[_ngcontent-%COMP%]{height:-webkit-max-content;height:max-content;width:100%;max-width:400px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-selection-section[_ngcontent-%COMP%]{padding:0 1rem 2rem}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-selection-section[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(placeholder){opacity:1;font-size:.8rem}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-selection-section[_ngcontent-%COMP%]   .add-new-list-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px;height:16px;width:16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-display-section[_ngcontent-%COMP%]{padding:0 1rem;position:relative;width:calc(100% + 3vw);flex-direction:column;border:2px solid;max-width:90vw}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-display-section[_ngcontent-%COMP%]   .list-menu-btn[_ngcontent-%COMP%]{position:absolute;right:-8px;top:-6px}"]}),t})()}];let T=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(_)],r.i]}),t})();var L=n("x0yz");let I=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(e){return new(e||t)},providers:[a],imports:[[i.b,o.a,s.A,T,L.a]]}),t})()}}]);