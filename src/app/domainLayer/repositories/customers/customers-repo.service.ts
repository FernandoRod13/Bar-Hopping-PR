import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Customer } from './../../structures/Customer';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { UserFactory } from '../../factories/userFactory';

@Injectable()

export class CustomersRepoService {

  private customerCollection: AngularFirestoreCollection<Customer>;

  constructor(private db: AngularFirestore, private auth: AuthenticationService, private afAuth: AngularFireAuth,
    private factory: UserFactory) {
    this.customerCollection = db.collection('users');
  }


  /**This function will authenticate a customer, login */
  authCustomer(customerEmail: string, customerPassword: string): void {

  }

  /**This function will add a new user to firebase authentication using an email and password. */
  createNewCustomer(customerData: Customer, password: string) {
    console.log("Customer Data: ");
    console.log(customerData);

    this.afAuth.auth.createUserWithEmailAndPassword(customerData.email, password)
      .then(user => {

        this.addCustomerToCollection(user.uid, customerData);

      }).catch(error => {
        console.log(error);
      });
  }

  addCustomerToCollection(customerID: string, customerData: Customer) {
    this.customerCollection.doc(customerID).set(this.parseCustomerToJSON(customerData));

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
    return this.db.collection('users', ref => ref.where('userType', '==', 'Customer')).snapshotChanges().map(item => {
      return item.map(data => {
        return this.factory.composeCustomer(data.payload.doc);
      });
    });
  }
  /**This function will return an observable object of a specific customer. */
  getSpecificCustomer(customerID: string): Observable<Customer> {
    return this.customerCollection.doc(customerID).snapshotChanges().map(data => {
      if (data.payload.data() == undefined) {
        console.log("Hay error");
        throw new Error('is an employee');
      }
      return this.factory.composeCustomer(data.payload.data());
    });
  }

  itsCustomer(customerID: string): Observable<boolean> {
    return this.customerCollection.doc(customerID).snapshotChanges().map(data => {
      if (data.payload.data() == null) {
        //Ist not a customer
        return false;
      }
      if (data.payload.data().userType === 'Customer') {
        return true;
      }
      else {
       //Ist not a customer
        return false;
      }
    })
    ;
    
  }






  // Methods to export from object to JSON 
  parseCustomerToJSON(customerData: Customer): any {

    var customer = {
      name: customerData.name,
      email: customerData.email,
      userType: customerData.userType
    };

    return customer;

  }

}
