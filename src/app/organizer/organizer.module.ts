import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizerPageRoutingModule } from './organizer-routing.module';

import { OrganizerPage } from './organizer.page';
import {TasksComponent} from './components/tasks/tasks.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {SelectorComponent} from './components/selector/selector.component';
import {DateService} from './services/date.service';
import { MomentPipe } from './pipes/moment.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizerPageRoutingModule
  ],
  declarations: [OrganizerPage, TasksComponent, CalendarComponent, SelectorComponent, MomentPipe],
    providers: [DateService],
})
export class OrganizerPageModule {}
