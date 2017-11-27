import { Component, OnInit } from '@angular/core';
import { EmployeesRepoService } from './repositories/employees/employees-repo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private employeeService: EmployeesRepoService){}
  ngOnInit() {
    this.employeeService.findEmployeesByPhoneNumber('7876244083').subscribe(employees => {
      console.log(employees);
    });
  }
}
