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

  public shortPassword: boolean;
  public wrongPassword: boolean;

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
    if (form.valid) {
      if (form.value.password.length > 7) {
        
        this.auth.loginUser(form.value.email, form.value.password).then(response => {
          const redirect = this.auth.url;
          
          if (response.code == "auth/wrong-password") {
            this.wrongPassword = true;
          } else {
            if (redirect) {
              this.router.navigate([redirect]);
            }
            this.customerRepo.itsCustomer(response.uid).subscribe(resp => {
              if (resp) {
                this.router.navigate(['/dashboard']);
              } else {
                this.router.navigate(['/login-employee']);
              }
            });
          }
        });
      } else {
        this.shortPassword = true;
      }
    } else {
      console.log('empty fields');
    }
  }
} 