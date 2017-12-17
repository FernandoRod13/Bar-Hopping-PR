import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../../domainLayer/services//authentication/authentication.service';
import { Customer } from './../../domainLayer/structures/Customer';
@Injectable()

export class CustomersRepoService {

  private customerCollection: AngularFirestoreCollection<Customer>;

  constructor(private db: AngularFirestore, private auth: AuthenticationService,) {
    this.customerCollection = db.collection('customers');
  }

   /**This function will authenticate a customer, login */
  authCustomer(customerEmail: string, customerPassword: string): void {
 
  }

  /**This function will add a new customer to the database. */
  addNewCustomer(customerData: Customer): void {

  }
  /** This function will send an email to the customer. */
  sendEmailVerification(customerData: Customer, subject: string, body: string): void {

  }
  /**This function will edit information in the database related to a specific customer. */
  editCustomerInfo(customerID: string, customerData: any): void {

  }
  /**This function will return the history of purchases of a customer. */
  getHistoryOfCustomer(customerID: string): Observable<any> {
    return null;
  }
  /**This function will return the upcoming trips of a customer. */
  getUpcomingTrips(customerID: string): Observable<any> {
    return null;
  }
  /**This function will remove a customer form the database. */
  removeCustomer(customerID: string): void {

  }
  /**This function will return an observable collection of all our customers. */
  getAllCustomers(): Observable<Customer[]> {
    return null;
  }
  /**This function will return an observable object of a specific customer. */
  getSpecificCustomer(customerID: string): Observable<Customer> {
    return null;
  }

}
