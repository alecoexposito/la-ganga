import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  offers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    this.storage.get("offers").then(result => {
      this.offers = result;
      console.log(result);
    });
  }

  testButton() {
    let alert = this.alertCtrl.create({
      title: 'Test',
      message: JSON.stringify(this.offers),
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
