import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) { }
  /**This function will add a new user to firebase authentication using an email and password. */
  createNewUser(email: string, password: string) {
   this.afAuth.auth.createUserWithEmailAndPassword(email, password).then( user => {
      console.log(user);
   });
  }
}
