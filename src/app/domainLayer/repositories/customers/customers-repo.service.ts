import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Customer } from './../../structures/Customer';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CustomersRepoService {

  private customerCollection: AngularFirestoreCollection<Customer>;

  constructor(private db: AngularFirestore, private auth: AuthenticationService, private afAuth: AngularFireAuth) {
    this.customerCollection = db.collection('customers');
  }


   /**This function will authenticate a customer, login */
  authCustomer(customerEmail: string, customerPassword: string): void {
 
  }

  /**This function will add a new user to firebase authentication using an email and password. */
  createNewCustomer(customerData: Customer, password: string) {
    
        this.afAuth.auth.createUserWithEmailAndPassword(customerData.email, password)
          .then(user => {

            this.addCustomerToCollection(user.uid,customerData);
                
        }).catch(error => {
          console.log(error) 
        });
      }

  addCustomerToCollection(customerID: string, customerData: Customer) {
    this.customerCollection.doc(customerID).set(customerData.parseToJSON());

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
