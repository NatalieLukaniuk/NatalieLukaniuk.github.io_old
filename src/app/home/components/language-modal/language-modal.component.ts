import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../services/language.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.scss'],
})
export class LanguageModalComponent implements OnInit {

  constructor(public lang: LanguageService,
              public modalController: ModalController) { }

  ngOnInit() {}
  setLanguage(language) {
    switch (language) {
      case 'english': this.lang.lang = 'eng';
                      break;
      case 'ukrainian': this.lang.lang = 'ukr';
                        break;
    }
    this.closeModal();
    // console.log(this.lang.lang);
}
  closeModal(){
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
