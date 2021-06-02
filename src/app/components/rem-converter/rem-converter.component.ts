import {Component, Input, OnInit} from '@angular/core';
import {ConverterService} from '../../services/converter.service';

@Component({
  selector: 'app-rem-converter-component',
  templateUrl: './rem-converter.component.html',
  styleUrls: ['./rem-converter.component.scss'],
})
export class RemConverterComponent implements OnInit {
  intViewportWidth = window.innerWidth;
@Input() color: string;
  constructor(public converter: ConverterService) { }

  ngOnInit() {}

  calculate(){
    this.converter.calculateRems();
    this.converter.calculateVW();
    this.converter.calculateVH();
  }
}
