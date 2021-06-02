import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {CheatsheetsDataService} from '../services/cheatsheets-data.service';

@Component({
  selector: 'app-useful-information',
  templateUrl: './useful-information.page.html',
  styleUrls: ['./useful-information.page.scss'],
})
export class UsefulInformationPage implements OnInit {
color = 'tertiary';
@ViewChild('contentSlides', {static: false}) contentSlides: IonSlides;
buttons = [
  {title: 'font weights cheatsheet', value: 'font-weights'},
  {title: 'dom events: mouse', value: 'mouse-events'},
  {title: 'css selectors', value: 'css-selectors'},
  {title: 'pseudo-selectors', value: 'pseudo-selectors'},
  {title: 'selectors by attribute', value: 'attribute-selectors'},
];
  intViewportWidth = window.innerWidth;
  stuffToDisplay: 'rem-converter';
  selectOptions: any = {
    showBackdrop: false,
    cssClass: 'single-selection-popover',
  };
  constructor(public cheatData: CheatsheetsDataService) { }

  ngOnInit() {
  }
  sheetSelected(ev: any) {
    switch (ev.detail.value) {
      case 'font-weights': this.contentSlides.slideTo(0);
                           break;
      case 'mouse-events': this.contentSlides.slideTo(1);
                           break;
      case 'css-selectors': this.contentSlides.slideTo(3);
                            break;
      case 'pseudo-selectors': this.contentSlides.slideTo(2);
                               break;
      case 'attribute-selectors': this.contentSlides.slideTo(4);
    }
    // this.switcher(ev.detail.value);
  }

  // switcher(value){
  //   switch (value) {
  //     case 'font-weights': this.contentSlides.slideTo(0);
  //                          break;
  //     case 'rem-converter': this.contentSlides.slideTo(1);
  //                           break;
  //     case 'css-selectors': this.contentSlides.slideTo(3);
  //                           break;
  //     case 'pseudo-selectors': this.contentSlides.slideTo(2);
  //                              break;
  //     case 'attribute-selectors': this.contentSlides.slideTo(4);
  //   }
  // }
  // check(ev){
  //   console.log(ev);
  // }
}
