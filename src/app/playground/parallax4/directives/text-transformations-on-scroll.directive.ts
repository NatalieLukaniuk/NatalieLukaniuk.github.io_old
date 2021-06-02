import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appTextTransformationsOnScroll]'
})
export class TextTransformationsOnScrollDirective {
@HostListener('scroll') function(){
  const title = document.getElementById('title2');
  const textComingFromRight = document.getElementById('text-from-right');
  const textComingFromLeft = document.getElementById('text-from-left');
  const textFlipsBackwards = document.getElementById('text-flips-backwards');
  const fadingOut = document.getElementById('opacity');
  const contentPosition = title.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 3;
  if (contentPosition < screenPosition) {
    textFlipsBackwards.style.transform = 'rotateX(0)';
    fadingOut.style.opacity = '1';
  }

}
  constructor() { }

}
