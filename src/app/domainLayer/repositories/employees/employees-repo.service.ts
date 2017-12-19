import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Employee } from './../../structures/Employee';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { EmployeeFactory } from './../../factories/employeeFactory';
@Injectable()
export class EmployeesRepoService {


  private employeesCollection: AngularFirestoreCollection<Employee>;
  
  constructor(private db: AngularFirestore, private auth: AuthenticationService, private factory: EmployeeFactory
  ,private afAuth: AngularFireAuth) {
    this.employeesCollection = db.collection('employees');
  }

  /**This function will add a new employee to the database. This function will triger a cloud fucntion to notify employee of credentials. */
  createNewEmployee(employeeData: Employee, password: string): void {
    
    this.afAuth.auth.createUserWithEmailAndPassword(employeeData.email, password)
    .then(user => {

      this.addEmployeeToCollection(user.uid,employeeData);
          
  }).catch(error => {
    console.log(error) 
  });
}

addEmployeeToCollection(employeeID: string, employeeData: Employee) {
this.employeesCollection.doc(employeeID).set(employeeData.parseToJSON());
console.log("Employee succesfully added to the collection");
}
  
  /**This function will update data related to a specific employee already in the database. */
  
  editEmployeeInformation(employeeData: Employee): void {
    this.employeesCollection.doc(employeeData.eId).update(employeeData.parseToJSON());
  }


  /**This function will asign an employee to a specific trip. This may remove an exisiting trip asignment. */
  assignTripToEmployee(employeeID: string, tripID: string): void {

  }
  /**This function will return an observable collection of all employees registered in the database. */
  getAllEmployees(): Observable<Employee[]> {
    return this.employeesCollection.snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.createEmployee(data.payload.doc);
      });
    });
  }
  /**This function will return an observable list employee object which phone number is specified (if any exists). */
  findEmployeesByPhoneNumber(phoneNumber: string): Observable<Employee[]> {
    return this.db.collection('employees', ref => ref.where('phone', '==', phoneNumber)).snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.createEmployee(data.payload.doc);
      });
    });
  }
  /**This function will return an observable employee object which email is specified (if any exists). */
  findEmployeeByEmail(email: string): Observable<Employee[]> {
    return this.db.collection('employees', ref => ref.where('email', '==', email)).snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.createEmployee(data.payload.doc);
      });
    });
  }

}
