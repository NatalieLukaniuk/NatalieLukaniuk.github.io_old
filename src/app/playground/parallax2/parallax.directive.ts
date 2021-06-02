import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
@Input() parallaxContainer: HTMLElement;
  el: ElementRef;
  @HostListener('scroll') function(){
    const offset = this.el.nativeElement.scrollTop;
    this.parallaxContainer.style.backgroundPositionY = offset * 0.7 + 'px';
  }
  constructor(el: ElementRef) {
    this.el = el;
  }

}
