import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appRotateCards]'
})
export class RotateCardsDirective {
  @Input() card;
  @HostListener('mousemove', ['$event']) rotate($event){
    const cardItem = this.card.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + - ($event.offsetY - halfHeight) / 20 + 'deg) rotateY(' + ($event.offsetX - halfWidth) / 20 + 'deg)';
  }
@HostListener('mouseout') stopRotate(){
  const cardItem = this.card.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}
  constructor() { }

}
