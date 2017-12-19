import { Component, OnInit } from '@angular/core';
import { EmployeesRepoService } from '../../../domainLayer/repositories/employees/employees-repo.service';
import { Employee } from '../../../domainLayer/structures/Employee';
import { Address } from '../../../domainLayer/structures/Address';
import { AuthenticationService } from './../../../domainLayer/services/authentication/authentication.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  
  constructor(private auth: AuthenticationService, private EmployeeRepo: EmployeesRepoService) { }

  ngOnInit() {
  }
  onCreateAccount(form: any) {
    if (form.valid) {
        const address = new Address(form.value.city, form.value.line1, form.value.line2, form.value.state, form.value.zip);
        const startDay = new Date();
        const employee = new Employee("", form.value.name, form.value.phone, form.value.email
        , form.value.role, startDay  ,address);

        this.EmployeeRepo.createNewEmployee(employee,"Barhopping1");
        console.log("Insert Succefull");
        
    } else {
      console.log('empty fields');
    }
  }




}
