import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the QrActionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-actions',
  templateUrl: 'qr-actions.html',
})
export class QrActionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // var Offer = Parse.Object.extend("Offer");
    // let myOffer = new Offer();
    // myOffer.set("shortDescription", "test2");
    // myOffer.save(null, {
    //   success: (offer) => {
    //     console.log('Offer created with description: ' + offer.shortDescription);
    //   },
    //   error: (offer, error) => {
    //     console.log('Error: ' + error.message.toString());
    //   }
    // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrActionsPage');
  }

}
