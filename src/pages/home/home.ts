import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {OfferDataProvider} from "../../providers/offer-data/offer-data";
import {OfferDetailPage} from "../offer-detail/offer-detail";
import {Storage} from '@ionic/storage';
import {Network} from "@ionic-native/network";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  result: string;

  categories: string[] = ["Comida", "Tecnología", "Belleza", "Bar", "Construcción", "Artesania", "Joyería", "Ropa", "Locura", "Otra", "Algo", "Algo2", "Algomas", "Comida", "Tecnología", "Belleza", "Bar", "Construcción", "Artesania", "Joyería", "Ropa", "Locura", "Otra", "Algo", "Algo2", "Algomas", "Comida", "Tecnología", "Belleza", "Bar", "Construcción", "Artesania", "Joyería", "Ropa", "Locura", "Otra", "Algo", "Algo2", "Algomas"];

  offers: any;
  offersFull: any;

  constructor(public navCtrl: NavController, public offerData: OfferDataProvider, public platform: Platform, public storage: Storage, private network: Network) {
    this.initializeOffers();
    this.storage.ready().then(() => {
      console.log("storage is ready");
    });


    this.storage.set("testingKey", "testingValue");
    this.storage.set("testingKeyArray", [1, 2, 3, 4, 5]);
    this.storage.set("arrayObjs", [{
      name: 'Lola',
      age: 23
    }, {
      name: 'Rodrigo',
      age: 12
    }]);

    // Parse.initialize("RhgXYxP8GV1xL3d1Om8AbnLghm7aGI8ljIFbNIBu", "PKlHvUIxEOOCpHwzspNzqE9Ci3Fh5BQIJnMR73cG");
    // Parse.serverURL = 'https://parseapi.back4app.com/';
    //
    // let install = new Parse.Installation();
    // install.set("deviceType", this.platform.platforms().toString());
    //
    // install.save(null, {
    //   success: (install) => {
    //     // Execute any logic that should take place after the object is saved.
    //     this.result = 'New object created with objectId: ' + install.id;
    //   },
    //   error: (install, error) => {
    //     // Execute any logic that should take place if the save fails.
    //     // error is a Parse.Error with an error code and message.
    //     this.result = ('Failed to create new object, with error code:' + error.message.toString());
    //   }
    // });

  }

  offerImageClick(offer) {
    this.navCtrl.push(OfferDetailPage, {
      offer2: offer
    })
  }

  getCategories() {
    return this.categories;
  }

  async loadOffersFromServer() {
    console.log("network type: ", this.network.type);
    this.offers = await this.offerData.getOffers();
    this.offersFull = this.offers;
    this.storage.set("offers", this.offers);
  }

  async initializeOffers() {
    if (this.offersFull != undefined) {
      this.offers = this.offersFull;
    } else {
      this.loadOffersFromServer();
    }


    // this.offerData.getOffers()
    //   .then(data => {
    //     console.log("offers full", this.offersFull);
    //     if(this.offersFull != undefined) {
    //       this.offers = this.offersFull;
    //     }else {
    //       if(data.offers != undefined) {
    //         this.offers = data.offers;
    //         this.offersFull = data.offers;
    //       }
    //     }
    //     console.log(this.offers);
    //   });

    // this.offerData.getOffers().subscribe(data => {
    //   console.log("data", data);
    //   this.offers = data;
    // });
  }

  getOffers() {
    return this.offers;
  }

  filterOffers(ev: any) {
    if (this.offers.length == 0)
      return;
    // Reset items back to all of the items
    this.offers = this.offersFull;

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.offers = this.offers.filter((item) => {
        console.log("item", item);
        if (item.business == undefined)
          return true;
        console.log(item);
        let haystack = item.business.name + " " + item.title + " " + item.description;
        if (haystack.toLowerCase().indexOf(val.toLowerCase()) > -1)
          return true;
        else
          return false;
      })
    }

  }
}
