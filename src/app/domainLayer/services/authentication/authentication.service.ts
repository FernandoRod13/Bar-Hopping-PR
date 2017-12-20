import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Customer } from './../../structures/Customer';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {

  

  constructor(private afAuth: AngularFireAuth) {
   }
 

  loginUser(email: string, password: string): Promise<void> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user);
    }).catch(error => {
      console.log(error);
    });
  }
}
