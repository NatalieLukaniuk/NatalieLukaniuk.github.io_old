(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{jidx:function(t,e,n){"use strict";n.r(e),n.d(e,"ToDoListAppPageModule",function(){return S});var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),c=n("mrSG"),a=n("fXoL");let l=(()=>{class t{constructor(){this.lists=[{name:"Today",highPriorityTasks:[{taskName:"refactor html"},{taskName:"refactor css"}],regularPriorityTasks:[{taskName:"add delete button"}],lowPriorityTasks:[{taskName:"add toast"}]},{name:"Long-term",highPriorityTasks:[],lowPriorityTasks:[],regularPriorityTasks:[]},{name:"Can wait",highPriorityTasks:[],lowPriorityTasks:[],regularPriorityTasks:[]}]}deleteTask(t,e,n){switch(n){case"high":this.lists[e].highPriorityTasks.splice(this.lists[e].highPriorityTasks.indexOf(t),1);break;case"default":this.lists[e].regularPriorityTasks.splice(this.lists[e].regularPriorityTasks.indexOf(t),1);break;case"low":this.lists[e].lowPriorityTasks.splice(this.lists[e].lowPriorityTasks.indexOf(t),1)}}clearList(t){this.lists[t].highPriorityTasks.splice(0),this.lists[t].regularPriorityTasks.splice(0),this.lists[t].lowPriorityTasks.splice(0)}addNewTask(t,e,n){for(let i=0;i<e.length;i++)for(let o=0;o<this.lists.length;o++)if(this.lists[o].name===e[i])switch(n){case"high":this.lists[o].highPriorityTasks.push({taskName:t});break;case"default":this.lists[o].regularPriorityTasks.push({taskName:t});break;case"low":this.lists[o].lowPriorityTasks.push({taskName:t})}}deleteList(t){this.lists.splice(t,1)}changeListName(t,e){this.lists[e].name=t}addNewList(t){this.lists.push({name:t,regularPriorityTasks:[],lowPriorityTasks:[],highPriorityTasks:[]})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),b=(()=>{class t{constructor(t,e){this.popoverController=t,this.tasksService=e,this.newListName=""}ngOnInit(){}addNewListName(t){this.tasksService.addNewList(t),this.popoverController.dismiss()}cancel(){this.popoverController.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(s.C),a.Hb(l))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-new-list-popover"]],decls:8,vars:2,consts:[[1,"wrapper"],[1,"full-width"],["placeholder","name for your new list",3,"ngModel","ngModelChange"],[1,"confirmation-block"],["color","success",3,"disabled","click"],["color","danger",3,"click"]],template:function(t,e){1&t&&(a.Nb(0,"ion-row",0),a.Nb(1,"ion-item",1),a.Nb(2,"ion-input",2),a.Vb("ngModelChange",function(t){return e.newListName=t}),a.Mb(),a.Mb(),a.Nb(3,"ion-row",3),a.Nb(4,"ion-button",4),a.Vb("click",function(){return e.addNewListName(e.newListName)}),a.ic(5,"Add"),a.Mb(),a.Nb(6,"ion-button",5),a.Vb("click",function(){return e.cancel()}),a.ic(7,"Cancel"),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.xb(2),a.ac("ngModel",e.newListName),a.xb(2),a.ac("disabled",e.newListName.length<=0))},directives:[s.r,s.k,s.j,s.F,o.d,o.e,s.c],styles:["[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex-direction:column;padding:1rem}"]}),t})(),d=(()=>{class t{constructor(t,e){this.popoverController=t,this.tasksService=e,this.newName=""}ngOnInit(){}changeListName(t){this.tasksService.changeListName(t,this.currentListIndex),this.popoverController.dismiss()}cancel(){this.popoverController.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(s.C),a.Hb(l))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-edit-popover"]],inputs:{currentListIndex:"currentListIndex",color:"color"},decls:10,vars:3,consts:[[1,"wrapper"],[1,"full-width",3,"color"],["position","stacked"],[3,"ngModel","ngModelChange"],[1,"confirmation-block"],["color","success",3,"disabled","click"],["color","danger",3,"click"]],template:function(t,e){1&t&&(a.Nb(0,"ion-row",0),a.Nb(1,"ion-item",1),a.Nb(2,"ion-label",2),a.ic(3,"New name for this list:"),a.Mb(),a.Nb(4,"ion-input",3),a.Vb("ngModelChange",function(t){return e.newName=t}),a.Mb(),a.Mb(),a.Nb(5,"ion-row",4),a.Nb(6,"ion-button",5),a.Vb("click",function(){return e.changeListName(e.newName)}),a.ic(7,"Apply"),a.Mb(),a.Nb(8,"ion-button",6),a.Vb("click",function(){return e.cancel()}),a.ic(9,"Cancel"),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.xb(1),a.ac("color",e.color),a.xb(3),a.ac("ngModel",e.newName),a.xb(2),a.ac("disabled",e.newName.length<=0))},directives:[s.r,s.k,s.l,s.j,s.F,o.d,o.e,s.c],styles:["[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{background:var(--ion-color-tertiary);width:100%;padding:1rem}"]}),t})(),h=(()=>{class t{constructor(t,e,n){this.popoverController=t,this.alertController=e,this.tasksService=n}ngOnInit(){}clearList(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"delete-alert",header:"Do you really want to delete all tasks from this list?",subHeader:"This cannot be undone",buttons:[{text:"Delete",role:"delete",cssClass:"delete-btn",handler:()=>{this.tasksService.clearList(this.currentListIndex)}},{text:"Cancel",role:"cancel",cssClass:"cancel-btn",handler:()=>{this.alertController.dismiss()}}]});yield t.present(),yield this.popoverController.dismiss()})}editListName(){return Object(c.a)(this,void 0,void 0,function*(){yield this.popoverController.dismiss();const t=yield this.popoverController.create({component:d,cssClass:"edit-popover",translucent:!1,componentProps:{currentListIndex:this.currentListIndex,color:this.color}});return yield t.present()})}deleteList(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"delete-alert",header:"Do you really want to delete this list?",subHeader:"This cannot be undone",buttons:[{text:"Delete",role:"delete",cssClass:"delete-btn",handler:()=>{this.tasksService.deleteList(this.currentListIndex)}},{text:"Cancel",role:"cancel",cssClass:"cancel-btn",handler:()=>{this.alertController.dismiss()}}]});yield t.present(),yield this.popoverController.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(s.C),a.Hb(s.a),a.Hb(l))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-list-menu"]],inputs:{currentListIndex:"currentListIndex",color:"color"},decls:10,vars:0,consts:[["lines","none"],[1,"full-width",3,"click"],["name","trash-outline"],["name","create-outline"]],template:function(t,e){1&t&&(a.Nb(0,"ion-list",0),a.Nb(1,"ion-item",1),a.Vb("click",function(){return e.clearList()}),a.Ib(2,"ion-icon",2),a.ic(3," Clear list "),a.Mb(),a.Nb(4,"ion-item",1),a.Vb("click",function(){return e.editListName()}),a.Ib(5,"ion-icon",3),a.ic(6," Edit list name "),a.Mb(),a.Nb(7,"ion-item",1),a.Vb("click",function(){return e.deleteList()}),a.Ib(8,"ion-icon",2),a.ic(9," Remove list "),a.Mb(),a.Mb())},directives:[s.m,s.k,s.i],styles:["[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{background:var(--ion-color-tertiary);padding:1rem}[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var p=n("2MiI");function u(t,e){if(1&t&&(a.Nb(0,"ion-select-option",12),a.ic(1),a.Mb()),2&t){const t=e.$implicit;a.ac("value",t.name),a.xb(1),a.jc(t.name)}}let g=(()=>{class t{constructor(t){this.tasksService=t,this.newTask="",this.selectedList=["Today"],this.selectedPriority="default",this.selectionOptions={showBackdrop:!1,cssClass:"task-add-selection-alert"}}ngOnInit(){console.log(this.tasksService.lists)}onChange(t,e){switch(e){case"list":this.selectedList=t.target.value;break;case"priority":this.selectedPriority=t.target.value}}addNewTask(t,e,n){this.tasksService.addNewTask(t,e,n)}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(l))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-task-add"]],inputs:{color:"color"},decls:23,vars:7,consts:[[1,"task-add-wrapper"],[1,"wrapper","ion-justify-content-evenly","ion-align-items-start"],[1,"full-width"],["position","stacked"],["placeholder","task name goes here","name","newTask",3,"ngModel","ngModelChange"],["multiple","true","cancelText","Cancel","okText","Apply",3,"interfaceOptions","ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["cancelText","Cancel","okText","Apply",3,"value","interfaceOptions","ionChange"],["value","default"],["value","high"],["value","low"],[1,"add-btn","full-width",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(a.Nb(0,"ion-row",0),a.Nb(1,"ion-list",1),a.Nb(2,"ion-item",2),a.Nb(3,"ion-label",3),a.ic(4,"The task to complete"),a.Mb(),a.Nb(5,"ion-input",4),a.Vb("ngModelChange",function(t){return e.newTask=t}),a.Mb(),a.Mb(),a.Nb(6,"ion-item",2),a.Nb(7,"ion-label",3),a.ic(8,"List to add to"),a.Mb(),a.Nb(9,"ion-select",5),a.Vb("ngModelChange",function(t){return e.selectedList=t})("ionChange",function(t){return e.onChange(t,"list")}),a.gc(10,u,2,2,"ion-select-option",6),a.Mb(),a.Mb(),a.Nb(11,"ion-item",2),a.Nb(12,"ion-label",3),a.ic(13,"Change priority"),a.Mb(),a.Nb(14,"ion-select",7),a.Vb("ionChange",function(t){return e.onChange(t,"priority")}),a.Nb(15,"ion-select-option",8),a.ic(16,"Default"),a.Mb(),a.Nb(17,"ion-select-option",9),a.ic(18,"High"),a.Mb(),a.Nb(19,"ion-select-option",10),a.ic(20,"Low"),a.Mb(),a.Mb(),a.Mb(),a.Nb(21,"ion-button",11),a.Vb("click",function(){return e.addNewTask(e.newTask,e.selectedList,e.selectedPriority)}),a.ic(22,"Add"),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.xb(5),a.ac("ngModel",e.newTask),a.xb(4),a.ac("interfaceOptions",e.selectionOptions)("ngModel",e.selectedList),a.xb(1),a.ac("ngForOf",e.tasksService.lists),a.xb(4),a.ac("value",e.selectedPriority)("interfaceOptions",e.selectionOptions),a.xb(7),a.ac("disabled",e.newTask.length<=0))},directives:[s.r,s.m,s.k,s.l,s.j,s.F,o.d,o.e,s.u,s.E,i.h,s.v,s.c],styles:["[_nghost-%COMP%]{--background:transparent;width:100%}[_nghost-%COMP%]   .task-add-wrapper[_ngcontent-%COMP%]{flex-direction:column;padding:0 1rem 2rem}[_nghost-%COMP%]   .task-add-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{background:transparent}"]}),t})();var m=n("LmEr");function M(t,e){1&t&&(a.Nb(0,"h2"),a.ic(1,"Important tasks"),a.Mb())}function k(t,e){if(1&t){const t=a.Ob();a.Nb(0,"ion-item",5),a.Nb(1,"ion-label"),a.ic(2),a.Mb(),a.Nb(3,"ion-button",6),a.Vb("click",function(){a.dc(t);const n=e.$implicit;return a.Xb().deleteTask(n,"high")}),a.Ib(4,"ion-icon",7),a.Mb(),a.Mb()}if(2&t){const t=e.$implicit;a.xb(2),a.jc(t.taskName)}}function C(t,e){1&t&&(a.Nb(0,"h2"),a.ic(1,"Medium priority tasks"),a.Mb())}function f(t,e){if(1&t){const t=a.Ob();a.Nb(0,"ion-item",5),a.Nb(1,"ion-label"),a.ic(2),a.Mb(),a.Nb(3,"ion-button",6),a.Vb("click",function(){a.dc(t);const n=e.$implicit;return a.Xb().deleteTask(n,"default")}),a.Ib(4,"ion-icon",7),a.Mb(),a.Mb()}if(2&t){const t=e.$implicit;a.xb(2),a.jc(t.taskName)}}function w(t,e){1&t&&(a.Nb(0,"h2"),a.ic(1,"Low priority tasks"),a.Mb())}function P(t,e){if(1&t){const t=a.Ob();a.Nb(0,"ion-item",5),a.Nb(1,"ion-label"),a.ic(2),a.Mb(),a.Nb(3,"ion-button",6),a.Vb("click",function(){a.dc(t);const n=e.$implicit;return a.Xb().deleteTask(n,"low")}),a.Ib(4,"ion-icon",7),a.Mb(),a.Mb()}if(2&t){const t=e.$implicit;a.xb(2),a.jc(t.taskName)}}function O(t,e){1&t&&(a.Nb(0,"ion-item",5),a.ic(1," You don't have any tasks in this list yet "),a.Mb())}let v=(()=>{class t{constructor(t,e){this.alertController=t,this.tasksService=e}ngOnInit(){}deleteTask(t,e){return Object(c.a)(this,void 0,void 0,function*(){const n=yield this.alertController.create({cssClass:"delete-alert",header:"Do you really want to delete this task?",subHeader:"This cannot be undone",buttons:[{text:"Delete",role:"delete",cssClass:"delete-btn",handler:()=>{this.tasksService.deleteTask(t,this.i,e)}},{text:"Cancel",role:"cancel",cssClass:"cancel-btn",handler:()=>{this.alertController.dismiss()}}]});yield n.present()})}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(s.a),a.Hb(l))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-list-content"]],inputs:{i:"i"},decls:9,vars:7,consts:[[1,"current-list"],["lines","none",1,"wrapper"],[4,"ngIf"],["class","full-width",4,"ngFor","ngForOf"],["class","full-width",4,"ngIf"],[1,"full-width"],["fill","clear","size","small",1,"remove-btn",3,"click"],["name","trash-outline"]],template:function(t,e){1&t&&(a.Nb(0,"ion-row",0),a.Nb(1,"ion-list",1),a.gc(2,M,2,0,"h2",2),a.gc(3,k,5,1,"ion-item",3),a.gc(4,C,2,0,"h2",2),a.gc(5,f,5,1,"ion-item",3),a.gc(6,w,2,0,"h2",2),a.gc(7,P,5,1,"ion-item",3),a.gc(8,O,2,0,"ion-item",4),a.Mb(),a.Mb()),2&t&&(a.xb(2),a.ac("ngIf",e.tasksService.lists[e.i].highPriorityTasks.length>0),a.xb(1),a.ac("ngForOf",e.tasksService.lists[e.i].highPriorityTasks),a.xb(1),a.ac("ngIf",e.tasksService.lists[e.i].regularPriorityTasks.length>0),a.xb(1),a.ac("ngForOf",e.tasksService.lists[e.i].regularPriorityTasks),a.xb(1),a.ac("ngIf",e.tasksService.lists[e.i].lowPriorityTasks.length>0),a.xb(1),a.ac("ngForOf",e.tasksService.lists[e.i].lowPriorityTasks),a.xb(1),a.ac("ngIf",e.tasksService.lists[e.i].highPriorityTasks.length<1&&e.tasksService.lists[e.i].regularPriorityTasks.length<1&&e.tasksService.lists[e.i].lowPriorityTasks.length<1))},directives:[s.r,s.m,i.i,i.h,s.k,s.l,s.c,s.i],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{background:transparent}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:20px;font-size:1.2rem;text-align:center;font-weight:600;text-transform:capitalize}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:27px;height:20px}[_nghost-%COMP%]   .current-list[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover   .remove-btn[_ngcontent-%COMP%]{display:block}"]}),t})();function y(t,e){if(1&t&&(a.Nb(0,"ion-select-option",15),a.ic(1),a.Mb()),2&t){const t=e.$implicit;a.ac("value",t.name),a.xb(1),a.jc(t.name)}}function N(t,e){if(1&t&&(a.Nb(0,"h1"),a.ic(1),a.Mb()),2&t){const t=a.Xb();a.xb(1),a.kc("Your tasks from ",t.listToDisplay," list")}}function x(t,e){if(1&t){const t=a.Ob();a.Nb(0,"ion-row",16),a.Nb(1,"ion-button",18),a.Vb("click",function(e){a.dc(t);const n=a.Xb().index;return a.Xb().openListMenu(e,n)}),a.Ib(2,"ion-icon",19),a.Mb(),a.Ib(3,"app-list-content",20),a.Mb()}if(2&t){const t=a.Xb().index;a.xb(3),a.ac("i",t)}}function _(t,e){if(1&t&&(a.Nb(0,"ion-row",16),a.gc(1,x,4,1,"ion-row",17),a.Mb()),2&t){const t=e.$implicit;a.xb(1),a.ac("ngSwitchCase",t.name)}}const T=[{path:"",component:(()=>{class t{constructor(t,e){this.popoverController=t,this.tasksService=e,this.color="tertiary",this.listSelectionOptions={showBackdrop:!1,cssClass:"single-selection-popover"}}ngOnInit(){}openCreateNewListPopover(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:b,cssClass:"new-list-popover",event:this.ev,translucent:!0});return yield t.present()})}openListMenu(t,e){return Object(c.a)(this,void 0,void 0,function*(){const n=yield this.popoverController.create({component:h,cssClass:"list-menu-popover",event:t,translucent:!1,showBackdrop:!1,componentProps:{currentListIndex:e,color:this.color}});return yield n.present()})}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(s.C),a.Hb(l))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-to-do-list-app"]],decls:19,vars:10,consts:[["translucent","true","color","tertiary",1,"ion-no-border"],[3,"useContainer","color"],["color","tertiary",3,"fullscreen"],[1,"background-container"],[1,"add-new-task-section","outset"],[3,"color"],[1,"right-pane"],[1,"list-selection-section","ion-justify-content-between"],["interface","popover","placeholder","Select list to display",1,"list-select","outset",3,"ngModel","interfaceOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"add-new-list-btn",3,"click"],["name","add-outline"],[1,"list-display-section",3,"ngSwitch"],[4,"ngIf"],["class","full-width",4,"ngFor","ngForOf"],[3,"value"],[1,"full-width"],["class","full-width",4,"ngSwitchCase"],["fill","clear",1,"list-menu-btn",3,"click"],["name","ellipsis-horizontal-outline"],[3,"i"]],template:function(t,e){1&t&&(a.Nb(0,"ion-header",0),a.Nb(1,"app-header",1),a.ic(2," To-do-list "),a.Mb(),a.Mb(),a.Nb(3,"ion-content",2),a.Nb(4,"main"),a.Nb(5,"ion-row",3),a.Nb(6,"ion-row",4),a.Ib(7,"app-task-add",5),a.Mb(),a.Nb(8,"ion-row",6),a.Nb(9,"ion-row",7),a.Nb(10,"ion-select",8),a.Vb("ngModelChange",function(t){return e.listToDisplay=t}),a.gc(11,y,2,2,"ion-select-option",9),a.Mb(),a.Nb(12,"ion-button",10),a.Vb("click",function(){return e.openCreateNewListPopover()}),a.Ib(13,"ion-icon",11),a.ic(14," New list "),a.Mb(),a.Mb(),a.Nb(15,"ion-row",12),a.gc(16,N,2,1,"h1",13),a.gc(17,_,2,1,"ion-row",14),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Ib(18,"app-footer"),a.Mb()),2&t&&(a.xb(1),a.ac("useContainer",!0)("color",e.color),a.xb(2),a.ac("fullscreen",!0),a.xb(4),a.ac("color",e.color),a.xb(3),a.ac("ngModel",e.listToDisplay)("interfaceOptions",e.listSelectionOptions),a.xb(1),a.ac("ngForOf",e.tasksService.lists),a.xb(4),a.ac("ngSwitch",e.listToDisplay),a.xb(1),a.ac("ngIf",e.listToDisplay),a.xb(1),a.ac("ngForOf",e.tasksService.lists))},directives:[s.h,p.a,s.f,s.r,g,s.u,s.E,o.d,o.e,i.h,s.c,s.i,i.j,i.i,m.a,s.v,i.k,v],styles:["[_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100vh - 8.56rem)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]{justify-content:space-evenly;padding:3vw;width:100%;max-width:1500px;height:100%;overflow-y:auto}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .add-new-task-section[_ngcontent-%COMP%]{height:-webkit-max-content;height:max-content;width:100%;max-width:400px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-selection-section[_ngcontent-%COMP%]{padding:0 1rem 2rem}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-selection-section[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(placeholder){opacity:1;font-size:.8rem}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-selection-section[_ngcontent-%COMP%]   .add-new-list-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px;height:16px;width:16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-display-section[_ngcontent-%COMP%]{padding:0 1rem;position:relative;width:calc(100% + 3vw);flex-direction:column;border:2px solid;max-width:90vw;box-shadow:0 0 5px 4px rgba(173,216,189,.6)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .background-container[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .list-display-section[_ngcontent-%COMP%]   .list-menu-btn[_ngcontent-%COMP%]{position:absolute;right:-8px;top:-6px}@media (min-width:768px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]{height:calc(100vh - 7.56rem)}}"]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(T)],r.j]}),t})();var I=n("x0yz");let S=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},providers:[l],imports:[[i.b,o.a,s.A,L,I.a]]}),t})()}}]);