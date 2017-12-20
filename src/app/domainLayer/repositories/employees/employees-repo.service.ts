import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Employee } from './../../structures/Employee';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { UserFactory } from './../../factories/userFactory';
@Injectable()
export class EmployeesRepoService {


  private employeesCollection: AngularFirestoreCollection<Employee>;

  constructor(private db: AngularFirestore, private auth: AuthenticationService, private factory: UserFactory
  , private afAuth: AngularFireAuth) {
    this.employeesCollection = db.collection('users');
  }

  /**This function will add a new employee to the database. This function will triger a cloud fucntion to notify employee of credentials. */
  addNewEmployee(employeeData: Employee) {
    this.employeesCollection.add(employeeData.parseToJSON());
    console.log('Employee succesfully added to the collection');
  }
  /**This function will update data related to a specific employee already in the database. */
  editEmployeeInformation(employeeData: Employee): void {
    this.employeesCollection.doc(employeeData.eId).update(employeeData.parseToJSON());
  }


  /**This function will asign an employee to a specific trip. This may remove an exisiting trip asignment. */
  assignTripToEmployee(employeeID: string, tripID: string): void {

  }

  /**This function will asign an employee to a specific trip. This may remove an exisiting trip asignment. */
  removeEmployee(employee: Employee): Promise<void> {
    return this.employeesCollection.doc(employee.eId).ref.delete();
  }

  /**This function will return an observable collection of all employees registered in the database. */
  getAllEmployees(): Observable<Employee[]> {
    return this.db.collection('users', ref => ref.where('userType', '==', 'Employee')).snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.composeEmployee(data.payload.doc);
      });
    });
  }
  /**This function will return an observable list employee object which phone number is specified (if any exists). */
  findEmployeesByPhoneNumber(phoneNumber: string): Observable<Employee[]> {
    return this.db.collection('users', ref => ref.where('userType', '==', 'Employee').where('phone', '==', phoneNumber)).snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.composeEmployee(data.payload.doc);
      });
    });
  }
  /**This function will return an observable employee object which email is specified (if any exists). */
  findEmployeeByEmail(email: string): Observable<Employee[]> {
    return this.db.collection('employees', ref => ref.where('userType', '==', 'Employee').where('email', '==', email)).snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.composeEmployee(data.payload.doc);
      });
    });
  }

}
