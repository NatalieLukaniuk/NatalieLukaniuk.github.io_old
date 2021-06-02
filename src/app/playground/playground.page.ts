import {Component, HostListener, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.page.html',
  styleUrls: ['./playground.page.scss'],
})
export class PlaygroundPage implements OnInit {
  color = 'tertiary';
  intViewportWidth = window.innerWidth;
  constructor(public router: Router) { }

  ngOnInit() {

}
  goSample1(){
    this.router.navigate(['playground/parallax1']);
  }
  goSample2(){
    this.router.navigate(['playground/parallax2']);
  }
  goSample3(){
    this.router.navigate(['playground/parallax4']);
  }
  goSample4(){
    this.router.navigate(['playground/parallax3']);
  }
}
