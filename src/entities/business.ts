import {DateTime} from "ionic-angular";

export class Business {
  public objectId: string;
  public updatedAt: DateTime;
  public createdAt: DateTime;
  public name: string;
  public description: string;
  public mainImage: any;
  public logoImage: any;
  public websiteUrl: string;
  public email: string;
  public phone: string;

  // relations
  public business: any;

  constructor() {
  }

  static async fromParseObject(businessObject: any) {
    let business = new Business();
    business.objectId = businessObject.id;
    business.updatedAt = businessObject.get("updatedAt");
    business.createdAt = businessObject.get("createdAt");
    business.description = businessObject.get("description");
    business.mainImage = businessObject.get("mainImage");
    // business.logoImage = businessObject.get("logoImage");
    business.websiteUrl = businessObject.get("websiteUrl");
    business.email = businessObject.get("email");
    business.phone = businessObject.get("phone");
    console.log("del negocio: ", business);

    return business;
  }
}
