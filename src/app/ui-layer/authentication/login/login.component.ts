import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../domainLayer/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { EmployeesRepoService } from '../../../domainLayer/repositories/employees/employees-repo.service'
import { CustomersRepoService } from '../../../domainLayer/repositories/customers/customers-repo.service'
import { isUndefined } from 'util';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private shortPassword: boolean;
  private wrongPassword: boolean;
  private employeeData: any;




  constructor(private auth: AuthenticationService, private router: Router,
    location: Location, private customerRepo: CustomersRepoService) {
    this.shortPassword = false;
    this.wrongPassword = false;

  }

  ngOnInit() {
  }

  onShowRegister() {
    this.router.navigate(['/create-account']);
  }

  onLogin(form: any) {
    let employee: any;
    if (form.valid) {
      if (form.value.password.length > 7) {


        this.auth.loginUser(form.value.email, form.value.password).then(response => {
          if (response == 0) {
            this.wrongPassword = true;
          }
          else {

            this.customerRepo.itsCustomer(response.uid).subscribe(
              response => {

                if (response) {
                  this.router.navigate(['/home']);
                  console.log("Ist Customer");
                }
                else {
                  this.router.navigate(['/login-employee']);
                  console.log("Its employeeee");
                }
              });
          }
        });
      }
      else {
        this.shortPassword = true;
      }
      
    }
    else {
      console.log('empty fields');
    }
  }
} 