import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input() bg;
  @Input() moon: HTMLElement;
  @Input() mountain: HTMLElement;
  @Input() road: HTMLElement;
  @Input() text: HTMLElement;
  el: ElementRef;
  @HostListener('scroll') parallax(){
    const value = this.el.nativeElement.scrollTop;
    this.bg.style.top = value * 0.5 + 'px';
    this.moon.style.left = -value * 0.5 + 'px';
    this.mountain.style.top = -value * 0.15 + 'px';
    this.road.style.top = value * 0.15 + 'px';
    this.text.style.top = value * 1 + 'px';
  }
  constructor(el: ElementRef) {
    this.el = el;
  }
}
