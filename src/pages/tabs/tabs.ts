import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {QrActionsPage} from "../qr-actions/qr-actions";
import {MapPage} from "../map/map";
import {MiscPage} from "../misc/misc";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = MiscPage;
  tab4Root = QrActionsPage;

  constructor() {

  }
}
