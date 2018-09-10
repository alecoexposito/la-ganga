import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {QrActionsPage} from "../pages/qr-actions/qr-actions";
import { OfferDataProvider } from '../providers/offer-data/offer-data';
import {HttpClientModule} from "@angular/common/http";
import {OfferDetailPage} from "../pages/offer-detail/offer-detail";
import {MapPage} from "../pages/map/map";
import {MiscPage} from "../pages/misc/misc";
import {SettingsPage} from "../pages/settings/settings";
import {ProfilePage} from "../pages/profile/profile";
import {NotificationsPage} from "../pages/notifications/notifications";
import {FidelizationPage} from "../pages/fidelization/fidelization";
import {IonicStorageModule} from "@ionic/storage";
import {Network} from "@ionic-native/network";
import {QRCodeModule} from "angularx-qrcode";
import {QRScanner} from "@ionic-native/qr-scanner";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    QrActionsPage,
    OfferDetailPage,
    MapPage,
    MiscPage,
    SettingsPage,
    ProfilePage,
    NotificationsPage,
    FidelizationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    QrActionsPage,
    OfferDetailPage,
    MapPage,
    MiscPage,
    SettingsPage,
    ProfilePage,
    NotificationsPage,
    FidelizationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OfferDataProvider,
    Network,
    QRScanner
  ]
})
export class AppModule {}
