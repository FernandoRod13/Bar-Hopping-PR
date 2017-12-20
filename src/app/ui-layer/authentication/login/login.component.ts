import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../domainLayer/services/authentication/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onShowRegister() {
    this.router.navigate(['/create-account']);
  }

  onLogin(form: any) {
    if (form.valid) {
      if (form.value.password.length > 7) {
        this.auth.loginUser(form.value.email, form.value.password).then(() => {
          this.router.navigate(['/home']);
        });
      }else {
        console.log('short password');
      }
    } else {
      console.log('empty fields');
    }


  }
}
