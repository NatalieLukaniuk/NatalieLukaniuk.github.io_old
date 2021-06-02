import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.scss'],
})
export class CheatsheetComponent implements OnInit {
@Input() data: Array<any>;
  constructor() { }

  ngOnInit() {}

}
