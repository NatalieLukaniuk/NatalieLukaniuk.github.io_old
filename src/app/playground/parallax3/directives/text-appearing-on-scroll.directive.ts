import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appTextAppearingOnScroll]'
})
export class TextAppearingOnScrollDirective {
  @HostListener('scroll') function(){
    // const appearingContentArray = document.querySelectorAll('.fade-in-content');

    const marker = document.getElementById('marker');
    const firstBlock = document.getElementById('first-block');
    const secondBlock = document.getElementById('second-block');
    const thirdBlock = document.getElementById('third-block');
    const avatar = document.getElementById('avatar');
    const hiddenHeaderArray = document.querySelectorAll('.hidden-header');
    const screenPosition = marker.getBoundingClientRect().top;
    const frameworksArray = document.querySelectorAll('.frameworks-img');
    const fourthBlockArray = document.querySelectorAll('.fourth-block');
    const fifthBlock = document.getElementById('fifth-block');
    // console.log(hiddenHeaderArray);

    hiddenHeaderArray.forEach(hideElement => {
      if (screenPosition < -50) {
        hideElement.classList.add('hide');
      }
    });

    if (screenPosition < -100 && screenPosition > -650) {
        firstBlock.classList.add('move-right');
      } else {
      firstBlock.classList.remove('move-right');
    }

    if (screenPosition < -100 && screenPosition > -300) {
      secondBlock.classList.add('move-right');
      secondBlock.classList.remove('move-left');
      avatar.classList.add('move-left');
    } else if (screenPosition > -130){
      secondBlock.classList.remove('move-right');
      avatar.classList.remove('move-left');
    } else if (screenPosition < -300){
      secondBlock.classList.add('move-left');
      avatar.classList.remove('move-left');
    }

    if (screenPosition < -400 && screenPosition > -650) {
      thirdBlock.classList.add('move-right');
    } else {
      thirdBlock.classList.remove('move-right');
    }

    frameworksArray.forEach(img => {
      if (screenPosition < -400 && screenPosition > -650){
        img.classList.add('show');
      } else {
        img.classList.remove('show');
      }
    });

    fourthBlockArray.forEach(element => {
      if (screenPosition < -700 && screenPosition > -900) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });

    if (screenPosition < -900) {
      fifthBlock.style.opacity = '1';
      fifthBlock.style.transform = 'translateY(-50vh)';
    }

    // appearingContentArray.forEach(appearingContent => {
    //   const contentPosition = appearingContent.getBoundingClientRect().top;
    //   if (contentPosition < (window.innerHeight / 2.5)){
    //     appearingContent.classList.add('active');
    //   } else {
    //     appearingContent.classList.remove('active');
    //   }});
  }

  constructor() { }

}
