import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from '../../content.service';

@Component({
  selector: 'app-opening-container',
  templateUrl: './opening-container.component.html',
  styleUrls: ['./opening-container.component.scss'],
})
export class OpeningContainerComponent implements OnInit {
@Input() topic: string;
 source: any;
  constructor(public content: ContentService) {}

  ngOnInit() {
      this.detectContentSource(this.topic);
  }

  detectContentSource(key){
      switch (key){
          case 'techStack': this.source = this.content.data.techStack;
                            break;
          case 'softSkills': this.source = this.content.data.softSkills;
                             break;
      }
      return this.source;
  }
}
