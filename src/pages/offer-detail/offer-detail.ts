import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfferDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-detail',
  templateUrl: 'offer-detail.html',
})
export class OfferDetailPage {

  offer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offer = this.navParams.data.offer2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferDetailPage');
  }

  // ionViewWillEnter() {
  //   console.log("pas por ");
  //   this.offer = this.navParams.data.offer2;
  // }

}
