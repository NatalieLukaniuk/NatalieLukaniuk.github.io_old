import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const CURRENCY_CONVERTER_API = 'https://v6.exchangerate-api.com/v6/ed07472ca7d66829aac908c7/latest/USD';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any>{
      console.log('getExchangeRates');
      return this.http
          .get(CURRENCY_CONVERTER_API, {});
}
}
