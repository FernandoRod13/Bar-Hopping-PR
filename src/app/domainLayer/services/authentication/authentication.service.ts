import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Customer } from './../../structures/Customer';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {

  user: any;

  constructor(private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });

  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(function(firebaseUser) {
      
        return firebaseUser
    })
    .catch(function(error) {

      
        return 0
    });
    }

  getUserInfo() {
    const user = firebase.auth().currentUser;
    if (user) {
      return user;
      // User is signed in.
    } else {
      return null;
      // No user is signed in.
    }
  }
}
