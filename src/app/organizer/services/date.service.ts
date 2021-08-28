import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());
  constructor() { }

  changeMonth(step: number){
    const value = this.date.value.add(step, 'month');
    this.date.next(value);
  }
}
