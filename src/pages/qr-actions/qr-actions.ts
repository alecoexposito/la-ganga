import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";



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

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {

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

  showClientQR() {

  }

  scanQR() {
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            alert("escanee algo");
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad QrActionsPage');
  }

}
