import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './../../../domainLayer/services/authentication/authentication.service';
import { User } from './../../../domainLayer/structures/user';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy {
  user: User;
  private userObserver;
  constructor( private auth: AuthenticationService) { }

  ngOnInit() {
    this.userObserver = this.auth.getUserInfo().subscribe( data => {
      this.user = data;
    });

  }

  ngOnDestroy() {
    this.userObserver.unsubscribe();
  }
  public logout() {
    this.auth.logout();
  }

}
