import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.scss'],
})
export class LoadListComponent implements OnInit {
    @Input()
    lists: any;
    listsArray: any;
  constructor(public popover: PopoverController) { }

  ngOnInit() {
      this.listsArray = Object.entries(this.lists);
  }
    handleSubmit(value){
      this.popover.dismiss(value.selected);
    }
}
