import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.page.html',
  styleUrls: ['./pipes.page.scss'],
})
export class PipesPage implements OnInit {
test: any;
test2 = 20;
test3 = 'Some pipes require at least one parameter';
  constructor() { }

  ngOnInit() {
      this.test = new Date();
  }

  log(what){
      console.log(what);
  }
}
