import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeesRepoService } from './../../../../domainLayer/repositories/employees/employees-repo.service';
import { UserFactory } from './../../../../domainLayer/factories/userFactory';
import { Observable } from 'rxjs/observable';
import { Employee } from '../../../../domainLayer/structures/Employee';
import { Address } from '../../../../domainLayer/structures/Address';
@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit, OnDestroy {
  private employeesRef: any;
  public employees: Employee[];
  public addingEmployee: boolean;
  public employee: Employee;
  public updatingData: boolean;
  constructor( private repo: EmployeesRepoService, private factory: UserFactory) { }

  ngOnInit() {
    this.addingEmployee = false;
    this.updatingData = false;
    this.employee = null;
    this.employeesRef = this.repo.getAllEmployees().subscribe(list => {
      this.employees = list;
    });

  } 

  ngOnDestroy() {
    this.employeesRef.unsubscribe();
  }
  onEditEmployee(employee: Employee) {
    this.updatingData = true;
    this.employee = employee;
    this.onAddEmployee();
  }

  onCreateNewEmployee() {
    this.updatingData = false;
    this.employee = this.factory.composeEmptyEmployeee();
    this.onAddEmployee();
  }

  onAddEmployee() {
    this.addingEmployee = !this.addingEmployee;
  }

  onRemoveEmployee(employee: Employee) {
    this.repo.removeEmployee(employee);
  }

  onSubmitForm(form: any) {
    if (this.updatingData) {
      if (form.valid) {
        this.repo.editEmployeeInformation(this.employee);
        this.employee = null;
        this.updatingData = false;
        this.addingEmployee = false;
        console.log('update Succefull');
    } else {
      console.log('empty fields');
    }
    }else {
      if (form.valid) {
        this.repo.addNewEmployee(this.employee);
        this.employee = null;
        this.updatingData = false;
        this.addingEmployee = false;
        console.log('Insert Succefull');
    } else {
      console.log('empty fields');
    }

    }
  }

}
