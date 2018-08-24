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
    MiscPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    MiscPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OfferDataProvider
  ]
})
export class AppModule {}
