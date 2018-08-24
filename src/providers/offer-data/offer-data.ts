import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the OfferDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfferDataProvider {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello OfferDataProvider Provider');
  }

  getOffers() {
    return new Promise(resolve => {
      this.http.get('assets/data/ofertas.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

    // return this.http.get('assets/data/ofertas.json');
    // return new Promise(resolve => {
    //   this.http.get('assets/data/ofertas.json').map(this.processData, this);
    // });
  }


}
