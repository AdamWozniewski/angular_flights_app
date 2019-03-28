import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserInfo } from 'firebase';
import { Credentials } from './../models/Credentials';
import { CdkFixedSizeVirtualScroll } from '@angular/cdk/scrolling';
import { build$ } from 'protractor/built/element';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly authState$ = this.fireAuth.authState;
  private userData: UserInfo;
  constructor(
    private fireAuth: AngularFireAuth,
  ) { }

  login(credentials: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredential => this.userData = userCredential.user);
  }

  get user() {
    return this.userData;
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  isLoggedIn() {
    return !!this.user;
  }

  register(credentials: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredential => this.userData = userCredential.user);
  }
}
