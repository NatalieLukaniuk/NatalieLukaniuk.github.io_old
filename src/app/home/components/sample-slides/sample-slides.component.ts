import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../../../services/language.service';


@Component({
  selector: 'app-sample-slides',
  templateUrl: './sample-slides.component.html',
  styleUrls: ['./sample-slides.component.scss'],
})
export class SampleSlidesComponent implements OnInit {

  constructor(private readonly router: Router,
              public lang: LanguageService) { }

  ngOnInit() {}
  goTo(page){
    switch (page) {
      case 'rem-generator': this.router.navigate(['rem-app']);
                            break;
      case 'converter': this.router.navigate(['converter']);
                        break;
      case 'to-do-list': this.router.navigate(['to-do-list-app']);
                         break;
      case 'playground': this.router.navigate(['playground']);
                         break;
      case 'cheetsheats': this.router.navigate(['useful-information']);
                          break;
    }
  }
}
