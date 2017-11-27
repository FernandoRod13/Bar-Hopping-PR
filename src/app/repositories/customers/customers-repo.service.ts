import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class CustomersRepoService {

  
  constructor(db: AngularFirestore) { }

   /**This function will authenticate a customer, login */
  authCustomer(customerEmail: string, customerPassword: string): void {
    
      }

  /**This function will add a new customer to the database. */
  addNewCustomer(customerData: any): void {

  }
  /** This function will send an email to the customer*/
  sendEmailVerification(customerData: any, subject: string, body: string): void {

  }
  /**This function will edit information in the database related to a specific customer. */
  editCustomerInfo(customerID: string, customerData: any): void {

  }
  
  /**This function will return the history of purchases of a customer. */
  getHistoryOfCustomer(customerID: string): Observable<any> {
    
    return null
      }
  
  /**This function will return the upcoming trips of a customer. */
  getUpcomingTrips(customerID: string): Observable<any> {
    
    return null
      }
  /**This function will remove a customer form the database. */
  removeCustomer(customerID: string): void {

  }
  /**This function will return an observable collection of all our customers. */
  getAllCustomers(): Observable<any> {
    return null;
  }
  /**This function will return an observable object of a specific customer. */
  getSpecificCustomer(customerID: string): Observable<any> {
    return null;
  }

}
