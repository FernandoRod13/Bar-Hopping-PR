import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class EmployeesRepoService {

  constructor(db: AngularFirestore) { }
  /**This function will add a new employee to the database. This function will triger a cloud fucntion to notify employee of credentials. */
  addNewEmployee(employeeData: any): void {

  }
  /**This function will update data related to a specific employee already in the database. */
  editEmployeeInformation(employeeID: string, employeeData: any): void {

  }
  /**This function will asign an employee to a specific trip. This may remove an exisiting trip asignment. */
  assignTripToEmployee(employeeID: string, tripID: string): void {

  }
  

}
