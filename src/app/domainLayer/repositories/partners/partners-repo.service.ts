import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Partner } from './../../structures/Partner';
import { Address } from './../../structures/Address';
import { PartnerFactory } from './../../factories//partnerFactory';
import { AuthenticationService } from './../../services//authentication/authentication.service';
import { Promise } from 'q';
@Injectable()

export class PartnersRepoService {

  private partnersCollection: AngularFirestoreCollection<Partner>;

  constructor(private db: AngularFirestore, private auth: AuthenticationService, private factory: PartnerFactory) {
    this.partnersCollection = db.collection('partners');
  }
  /**This function will add a new partner to the database. */
  addNewPartner(partnerData: Partner): void {
    this.partnersCollection.add(this.parsePartnerToJSON(partnerData));


  }

  /**This function will edit information in the database related to a specific partner. */
  editPartnerInfo(partnerData: Partner): void {
     this.partnersCollection.doc(partnerData.pId).update(this.parsePartnerToJSON(partnerData));
  }

  /**This function will add editing right to a user for a specific partner. */
  addPartnerEditor(partnerID: string, userID: string): void {
    // TODO
  }
  /**This function will remove a partner form the database. */
  removePartner(partner: Partner): void {
    this.partnersCollection.doc(partner.pId).ref.delete();
  }
  /**This function will return an observable collection of all our partners. */
  getAllPartners(): Observable<Partner[]> {
    return this.partnersCollection.snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.createPartner(data.payload.doc);
      });
    });
  }

  // getPartnerByPhoneNumber(phoneNumber: string): Observable<Partner[]> {
  //   return this.db.collection('partners', ref => ref.where('phone', '==', phoneNumber)).snapshotChanges().map( item => {
  //     return item.map( data => {
  //       return this.factory.createPartner(item.payload);
  //     });
  //   });
  // }

  /**This function will return an observable object of a specific partner. */
  getSpecificPartner(partnerID: string): Observable<Partner> {
    return this.partnersCollection.doc(partnerID).snapshotChanges().map( item => {
      return this.factory.createPartner(item.payload);
    });
  }

  parsePartnerToJSON(partnerData: Partner): any {
    const partner = {
        address: this.parseAddressToJSON(partnerData.address),
        name: partnerData.name,
        phone: partnerData.phone,
        manager: partnerData.manager,
        type: partnerData.type,
        description: partnerData.description,
        image: partnerData.image,
        announcement: partnerData.announcement,
    };
    return partner;
}

parseAddressToJSON(addressData: Address): any {
  var address = {
      city: addressData.city,
      line1: addressData.line1,
      line2: addressData.line2,
      state: addressData.state,
      zip: addressData.zip    
  };
  return address;
  }


}
