import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @HostListener('scroll') function(){

    const marker = document.getElementById('marker');
    const header = document.getElementById('header');
    const firstBlock = document.getElementById('first-block');
    const secondBlock = document.getElementById('second-block');
    const thirdBlock = document.getElementById('third-block');
    const avatar = document.getElementById('avatar');
    const greeting = document.getElementById('greeting');
    const arrow = document.getElementById('arrow-icon');
    const screenPosition = marker.getBoundingClientRect().top;
    const frameworksArray = document.querySelectorAll('.frameworks-img');
    const fourthBlockArray = document.querySelectorAll('.fourth-block');
    const fifthBlock = document.getElementById('fifth-block');
    const slide1 = document.getElementById('slide-1');
    const slide1btn = document.getElementById('slide-1-btn');
    const slide2 = document.getElementById('slide-2');
    const slide2btn = document.getElementById('slide-2-btn');
    const slide3 = document.getElementById('slide-3');
    const slide3btn = document.getElementById('slide-3-btn');
    const slide4 = document.getElementById('slide-4');
    const slide4btn = document.getElementById('slide-4-btn');
    const slide5 = document.getElementById('slide-5');
    const slide5btn = document.getElementById('slide-5-btn');
    const contacts = document.getElementById('contacts');


    if (screenPosition < -40) {
      greeting.classList.add('hide');
      arrow.classList.add('hide');
      header.classList.add('visible');
    } else {
      greeting.classList.remove('hide');
    }

    if (screenPosition < -200) {
      greeting.classList.add('changed-content');
    }

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

    fourthBlockArray.forEach((element, index) => {
      if (screenPosition < -700 && screenPosition > -900) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });

    if (screenPosition < -700 && screenPosition > -900){
      fifthBlock.classList.add('show');
    } else if (screenPosition > -700) {
      fifthBlock.classList.remove('show', 'transform');
    }

    if (screenPosition < -900 && screenPosition > -1900) {
      console.log(fifthBlock.style.transitionDelay);
      fifthBlock.style.transitionDelay = '0ms';
      fifthBlock.classList.add('transform');
      fifthBlock.classList.remove('hide');
    } else if (screenPosition < -1900){
      fifthBlock.classList.add('hide');
    } else {
      fifthBlock.classList.remove('hide', 'transform');
    }

    if (screenPosition < -900 && screenPosition > -1100) {
      slide1.classList.add('slide-in');
      slide1btn.classList.add('show');
      slide1.classList.remove('slide-out');
      slide1btn.classList.remove('hide');
    } else if (screenPosition < -1100){
      slide1.classList.add('slide-out');
      slide1btn.classList.add('hide');
    } else {
      slide1.classList.remove('slide-in');
      slide1btn.classList.remove('show');
    }

    if (screenPosition < -1100 && screenPosition > -1300) {
      slide2.classList.add('slide-in');
      slide2btn.classList.add('change');
      slide2.classList.remove('slide-out');
      slide2btn.classList.remove('hide');
    } else if (screenPosition < -1300){
      slide2.classList.add('slide-out');
      slide2btn.classList.add('hide');
    } else {
      slide2.classList.remove('slide-in');
      slide2btn.classList.remove('change');
    }

    if (screenPosition < -1300 && screenPosition > -1500) {
      slide3.classList.add('slide-in');
      slide3btn.classList.add('change');
      slide3.classList.remove('slide-out');
      slide3btn.classList.remove('hide');
    } else if (screenPosition < -1500){
      slide3.classList.add('slide-out');
      slide3btn.classList.add('hide');
    } else {
      slide3.classList.remove('slide-in');
      slide3btn.classList.remove('change');
    }

    if (screenPosition < -1500 && screenPosition > -1700) {
      slide4.classList.add('slide-in');
      slide4btn.classList.add('change');
      slide4.classList.remove('slide-out');
      slide4btn.classList.remove('hide');
    } else if (screenPosition < -1700){
      slide4.classList.add('slide-out');
      slide4btn.classList.add('hide');
    } else {
      slide4.classList.remove('slide-in');
      slide4btn.classList.remove('change');
    }

    if (screenPosition < -1700 && screenPosition > -1900) {
      slide5.classList.add('slide-in');
      slide5btn.classList.add('change');
      slide5.classList.remove('slide-out');
      slide5btn.classList.remove('slide-out');
    } else if (screenPosition < -1900){
      slide5.classList.add('slide-out');
      slide5btn.classList.add('slide-out');
    } else {
      slide5.classList.remove('slide-in');
      slide5btn.classList.remove('change');
    }

    if (screenPosition < -1900) {
      contacts.classList.add('show');
    } else {
      contacts.classList.remove('show');
    }
  }

  constructor() { }

}
