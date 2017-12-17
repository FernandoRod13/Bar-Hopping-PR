import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Employee } from './../../domainLayer/structures/Employee';
import { AuthenticationService } from './../../domainLayer/services//authentication/authentication.service';
import { EmployeeFactory } from './../../domainLayer/factories//employeeFactory';
@Injectable()
export class EmployeesRepoService {


  private employeesCollection: AngularFirestoreCollection<Employee>;
  
  constructor(private db: AngularFirestore, private auth: AuthenticationService, private factory: EmployeeFactory) {
    this.employeesCollection = db.collection('employees');
  }
  /**This function will add a new employee to the database. This function will triger a cloud fucntion to notify employee of credentials. */
  addNewEmployee(employeeData: Employee): void {
    this.auth.createNewUser(employeeData.email, 'BarHopping1');
  }
  /**This function will update data related to a specific employee already in the database. */
  editEmployeeInformation(employeeData: Employee): void {
    this.employeesCollection.doc(employeeData.eId).update(employeeData.exportData());
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
