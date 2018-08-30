import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage) {
    this.storage.get("testingKey").then((name) => {
      console.log(name);
    });
    this.storage.get("testingKeyArray").then((testArray) => {
      console.log(testArray);
    });
    // toastCtrl.create({
    //   message: 'valor de testing guardado: ' + this.storage.get("testingKey"),
    //   duration: 5000
    // }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
