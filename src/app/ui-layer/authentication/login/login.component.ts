import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../domainLayer/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(form: any) {
    if (form.valid) {
      if (form.value.password.length > 7) {
        this.auth.loginUser(form.value.email, form.value.password);
      }else {
        console.log('short password');
      }
    } else {
      console.log('empty fields');
    }
  }
}
