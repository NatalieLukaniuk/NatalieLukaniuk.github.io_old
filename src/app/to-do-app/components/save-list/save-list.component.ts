import {Component, OnInit, ViewChild} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-save-list',
  templateUrl: './save-list.component.html',
  styleUrls: ['./save-list.component.scss'],
})
export class SaveListComponent implements OnInit {
@ViewChild('saveListForm', {static: false})
saveListForm: any;


  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

    saveList(){
      this.popoverController.dismiss(this.saveListForm.value);
    }
}
