import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Partner } from './../../domainLayer/structures/Partner';
import { PartnerFactory } from './../../domainLayer/factories//partnerFactory';
import { AuthenticationService } from './../../domainLayer/services//authentication/authentication.service';
@Injectable()

export class PartnersRepoService {

  private partnersCollection: AngularFirestoreCollection<Partner>;

  constructor(private db: AngularFirestore, private auth: AuthenticationService, private factory: PartnerFactory) {
    this.partnersCollection = db.collection('partners');
  }
  /**This function will add a new partner to the database. */
  addNewPartner(partnerData: Partner): void {
  
  }
  /**This function will edit information in the database related to a specific partner. */
  editPartnerInfo(partnerData: Partner): void {

  }
  /**This function will add editing right to a user for a specific partner. */
  addPartnerEditor(partnerID: string, userID: string): void {

  }
  /**This function will remove a partner form the database. */
  removePartner(partnerID: string): void {

  }
  /**This function will return an observable collection of all our partners. */
  getAllPartners(): Observable<Partner[]> {
    return null;
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

}
