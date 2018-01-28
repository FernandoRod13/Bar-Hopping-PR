import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../domainLayer/services/authentication/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;
  constructor( private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getUserInfo().subscribe( data => {
      this.user = data;
    });

  }
  public logout() {
    this.auth.logout();
  }

}
