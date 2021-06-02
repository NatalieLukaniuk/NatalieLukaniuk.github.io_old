import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageModalComponent} from './components/language-modal/language-modal.component';
import {ModalController} from '@ionic/angular';
import {LanguageService} from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
color = 'tertiary';
  intViewportWidth = window.innerWidth;
  arrow: HTMLElement;
  header: HTMLElement;
  greeting: HTMLElement;
  languageSelected = false;

  constructor(private readonly router: Router,
              public modalController: ModalController,
              public lang: LanguageService) {}

  ngOnInit() {
    this.arrow = document.getElementById('arrow-icon');
    this.header = document.getElementById('header');
    this.greeting = document.getElementById('greeting');
    this.presentModal();
  }
  showArrow(){
    setTimeout (() => {
      this.arrow.classList.add('visible');
    }, 5500);
  }
  showHeader(){
    setTimeout(() => {
      this.header.classList.add('visible');
    }, 6000);
  }
  goAboutMe(){
    console.log('click');
    this.router.navigate(['about-me']);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: LanguageModalComponent,
      cssClass: 'language-modal'
    });
    modal.onDidDismiss().then((data) => {
      this.languageSelected = true;
      this.showHeader();
      this.showArrow();
      this.greeting.classList.add('show');
      if (this.lang.lang === 'eng'){
        this.greeting.classList.add('eng');
      } else if (this.lang.lang === 'ukr'){
        this.greeting.classList.add('ukr');
      }
    });
    return await modal.present();
  }
}
