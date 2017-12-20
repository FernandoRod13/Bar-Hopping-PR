import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Customer } from './../../structures/Customer';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {

  user: any;
  
  constructor(private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {
    if(user) this.user = user;
    })
    
    // this.afAuth.auth.onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     var displayName = user.displayName;
    //     var email = user.email;
    //     var emailVerified = user.emailVerified;
    //     var photoURL = user.photoURL;
    //     var isAnonymous = user.isAnonymous;
    //     var uid = user.uid;
    //     var providerData = user.providerData;
    //     // ...
    //   } else {
    //     // User is signed out.
    //     // ...
    //   }
    // }
   }
 
  loginUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user);

    }).catch(error => {
      console.log(error);
    });
  }

  getUserInfo(){
    var user = firebase.auth().currentUser;
    if (user) {
      return user;
      // User is signed in.
    } else {
      return null;
      // No user is signed in.
    }
    
  }
   
  
}
