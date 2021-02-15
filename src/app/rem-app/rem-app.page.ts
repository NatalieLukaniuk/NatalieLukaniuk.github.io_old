import {Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rem-app',
  templateUrl: './rem-app.page.html',
  styleUrls: ['./rem-app.page.scss'],
})
export class RemAppPage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  pixels = [];
  rem = [];
  defaultPxSize = 18;
  pxInitial = 12;
  pxEnd = 40;
  decimalDigits = 2;
  color = 'secondary';
  intViewportWidth = window.innerWidth;
  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  generateRems(slides){
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
    slides.slideTo(1);
    console.log('hi');
  }

  goBack(){
    this.slides.slideTo(0);
  }

}
