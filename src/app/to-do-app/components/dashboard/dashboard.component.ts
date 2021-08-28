import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
@Input()
categories: string[];

@Input()
currentTab: string;

@Input()
modal: boolean;

@Output() tabChanged = new EventEmitter<any>();

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

    changeTab(newCurrentTab: string){
      if (this.currentTab !== newCurrentTab){
          this.tabChanged.emit(newCurrentTab);
      }
      if (this.modal){
          this.modalController.dismiss(newCurrentTab);
      }
    }
}
