import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  defaultPxSize = 18;
  pixels: number;
  rems: number;
  decimalDigits = 2;
  mockupWidth = 1920;
  mockupHeight = 1080;
  vw: number;
  vh: number;
  constructor() { }

  calculateRems(){
    const remsValue = this.pixels / this.defaultPxSize;
    this.rems = +remsValue.toFixed(this.decimalDigits);
  }
  calculateVW(){
    const vw = this.pixels / this.mockupWidth * 100;
    this.vw = +vw.toFixed(this.decimalDigits);
  }
  calculateVH(){
    const vh = this.pixels / this.mockupHeight * 100;
    this.vh = +vh.toFixed(this.decimalDigits);
  }
}
