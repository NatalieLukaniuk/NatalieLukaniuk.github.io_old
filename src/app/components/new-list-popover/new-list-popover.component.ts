import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-new-list-popover',
  templateUrl: './new-list-popover.component.html',
  styleUrls: ['./new-list-popover.component.scss'],
})
export class NewListPopoverComponent implements OnInit {
  @Input() lists: Array<any>;
  @Input() popoverIsOn: boolean;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}
  addNewListName(newList){
    this.lists.push({name: newList, tasks: []});

    console.log(this.popoverIsOn);
    this.popoverController.dismiss();
  }
}
