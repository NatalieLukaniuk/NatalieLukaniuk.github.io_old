import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem-converter',
  templateUrl: './rem-converter.page.html',
  styleUrls: ['./rem-converter.page.scss'],
})
export class RemConverterPage implements OnInit {
  defaultPxSize = 18;
  pixels: number;
  rems: number;
  decimalDigits = 2;
  color = 'secondary';
  constructor() { }

  ngOnInit() {}
  recalculateRems(){
    const remsValue = this.pixels / this.defaultPxSize;
    this.rems = +remsValue.toFixed(this.decimalDigits);
  }
}
