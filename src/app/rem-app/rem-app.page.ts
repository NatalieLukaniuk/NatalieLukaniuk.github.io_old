import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rem-app',
  templateUrl: './rem-app.page.html',
  styleUrls: ['./rem-app.page.scss'],
})
export class RemAppPage implements OnInit {

  pixels = [];
  rem = [];
  defaultPxSize = 18;
  pxInitial = 12;
  pxEnd = 40;
  decimalDigits = 2;
  valuesGenerated = false;
  color = 'tertiary';
  intViewportWidth = window.innerWidth;
  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  generateRems(){
    let i = this.pxInitial;
    while (i <= this.pxEnd){
      this.pixels.push(i);
      i++;
    }
    let rems;
    let roundedRem;
    this.rem.splice(0);
    for (let i = 0; i < this.pixels.length; i++){
      rems = this.pixels[i] / this.defaultPxSize;
      roundedRem = rems.toFixed(this.decimalDigits);
      this.rem.push(roundedRem);
    }
    this.valuesGenerated = true;
  }
  recalculate(){
    this.pixels.splice(0);
    this.rem.splice(0);
    this.generateRems();
  }

  goEnterValues(){
    this.pixels.splice(0);
    this.rem.splice(0);
    this.valuesGenerated = false;
  }

}
