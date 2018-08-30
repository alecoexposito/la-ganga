import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {FidelizationPage} from "../fidelization/fidelization";
import {NotificationsPage} from "../notifications/notifications";
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the MiscPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misc',
  templateUrl: 'misc.html',
})
export class MiscPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiscPage');
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);

  }

  goToNotifications() {
    this.navCtrl.push(NotificationsPage);
  }

  goToFidelization() {
    this.navCtrl.push(FidelizationPage);
  }
}
