import {DateTime} from "ionic-angular";
import {Business} from "./business";

export class Offer {
  public objectId: string;
  public updatedAt: DateTime;
  public createdAt: DateTime;
  public shortDescription: string;
  public description: string;
  public startDate: DateTime;
  public endDate: DateTime;
  public amount: number;
  public allowedPerUser: number;
  public consumed: number;
  public realPrice: number;
  public offerPrice: number;
  public discountPercent: number;

  // relations
  public business: any;

  constructor() {

  }

  static async fromParseObject(offerObject: any) {
    let offer = new Offer();
    offer.objectId = offerObject.id;
    offer.updatedAt = offerObject.get("updatedAt");
    offer.createdAt = offerObject.get("createdAt");
    offer.shortDescription = offerObject.get("shortDescription");
    offer.description = offerObject.get("description");
    offer.startDate = offerObject.get("startDate");
    offer.endDate = offerObject.get("endDate");
    offer.amount = offerObject.get("amount");
    offer.allowedPerUser = offerObject.get("allowedPerUser");
    offer.consumed = offerObject.get("consumed");
    offer.realPrice = offerObject.get("realPrice");
    offer.offerPrice = offerObject.get("offerPrice");
    offer.discountPercent = offerObject.get("discountPercent");

    let businessRelation = offerObject.get("business");
    let queryBusiness = businessRelation.query();

    let businessObject = await queryBusiness.first();
    console.log("ahora fue que devolvio el businessObject");
    offer.business = await Business.fromParseObject(businessObject);
    // queryBusiness.first().then(function(business) {
    //   console.log("ya voy");
    //   this.business = new Business(business);
    // })
    return offer;
  }
}
