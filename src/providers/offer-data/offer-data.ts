import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import Parse from "parse";
import {Offer} from "../../entities/offer";

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

  async getOffers() {

    Parse.initialize("RhgXYxP8GV1xL3d1Om8AbnLghm7aGI8ljIFbNIBu", "PKlHvUIxEOOCpHwzspNzqE9Ci3Fh5BQIJnMR73cG");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    let offers = [];
    let Offer2 = Parse.Object.extend("Offer");
    let query = new Parse.Query(Offer2);
    query.include("business");
    let results = await query.find();
    for(let i = 0; i < results.length; i++) {
      let offerObject = results[i];
      let offer = await Offer.fromParseObject(offerObject);
      offers.push(offer);
    }
    console.log(offers);
    return offers;
    // query.find().then(function(results) {
    //   console.log(offers);
    // });



    // return new Promise(resolve => {
    //   this.http.get('assets/data/ofertas.json').subscribe(data => {
    //     resolve(data);
    //   }, err => {
    //     console.log(err);
    //   });
    // });

    // return this.http.get('assets/data/ofertas.json');
    // return new Promise(resolve => {
    //   this.http.get('assets/data/ofertas.json').map(this.processData, this);
    // });
  }


}
