import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Customer } from './../../structures/Customer';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from './../../structures/user';


@Injectable()
export class AuthenticationService {

  public uid: string;
  public authState: firebase.User;
  public url: string;
  constructor(private afAuth: AngularFireAuth, private afDB: AngularFirestore, private router: Router) {
    this.afAuth.authState.subscribe( auth => {
      this.authState = auth;
    });
  }
 
  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
      return firebaseUser
  })
 .catch(function(error) {
      return error
 });
  }

  getUserInfo(): Observable<User> {
    if (this.authState) {
      return this.afDB.collection('users').doc(this.authState.uid).snapshotChanges().map( item => {
        return new User(item.payload.id, item.payload.data().email, item.payload.data().firstName, item.payload.data().lastName);
      });
    }
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/home']);
  }
}
