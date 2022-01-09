import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  mobileView = new BehaviorSubject<boolean>(false);
constructor() { }

}
