import { Component, OnInit } from '@angular/core';
import { EmployeesRepoService } from './repositories/employees/employees-repo.service';
import { Employee } from './domainLayer/structures/Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private employeeService: EmployeesRepoService) { }
  ngOnInit() {
    const emp = new Employee('some', 'fernando', '1234', 'fernan.rod.dj@hormail.com', 'software lead', new Date(), null);
    this.employeeService.addNewEmployee(emp);
  }
}
