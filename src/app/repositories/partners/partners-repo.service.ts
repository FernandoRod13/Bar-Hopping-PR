import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class PartnersRepoService {

  constructor(db: AngularFirestore) { }
  /**This function will add a new partner to the database. */
  addNewPartner(partnerData: any): void {

  }
  /**This function will edit information in the database related to a specific partner. */
  editPartnerInfo(partnerID: string, partnerData: any): void {

  }
  /**This function will add editing right to a user for a specific partner. */
  addPartnerEditor(partnerID: string, userID: string): void {

  }
  /**This function will remove a partner form the database. */
  removePartner(partnerID: string): void {

  }
  /**This function will return an observable collection of all our partners. */
  getAllPartners(): Observable<any> {
    return null;
  }
  /**This function will return an observable object of a specific partner. */
  getSpecificPartner(partnerID: string): Observable<any> {
    return null;
  }

}
