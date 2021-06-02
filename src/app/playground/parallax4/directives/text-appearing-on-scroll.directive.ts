import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appTextAppearingOnScroll]'
})
export class TextAppearingOnScrollDirective {
@HostListener('scroll') function(){
  const content = document.getElementById('row');
  const title = document.getElementById('title');
  const contentPosition = content.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.4;
  if (contentPosition < screenPosition){
    content.classList.add('active');
    title.style.transform = 'scale(0)';
  } else {
    content.classList.remove('active');
    title.style.transform = 'scale(1)';
  }

}
  constructor() { }

}
