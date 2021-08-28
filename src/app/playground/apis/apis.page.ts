import { Component, OnInit } from '@angular/core';
import {CurrencyConverterService} from './services/currency-converter.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.page.html',
  styleUrls: ['./apis.page.scss'],
})
export class ApisPage implements OnInit {
    color = 'tertiary';
    response: any;
    rateUah: number;
    lastUpdate: any;

    date: any;
  constructor(private currencyConverterService: CurrencyConverterService) { }

  ngOnInit() {
      this.currencyConverterService
          .getExchangeRates()
          .subscribe(data => {
              console.log(data);
              this.response = data;
              this.rateUah = this.response.conversion_rates.UAH;
              this.lastUpdate = this.response.time_last_update_utc;
              console.log(this.rateUah, this.lastUpdate);
          });
      this.date = Date.parse('2012-01-26T13:51:50.417-07:00');
  }

}
