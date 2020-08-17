import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPopupService } from './login-popup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, public  router:  Router, public loginPopupService: LoginPopupService) {}

  userEmail: string = null;

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log('Login Successful');
      // localStorage.setItem('email', JSON.stringify(result.user.email));
      this.userEmail = result.user.email;
      this.loginPopupService.toggleLogin();
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  createUser(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log('User Creation Successful');
      this.userEmail = result.user.email;
      this.loginPopupService.toggleLogin();
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  logout() {
    this.auth.signOut()
    .then(() => {
      console.log('Logout Successful');
      // localStorage.removeItem('email');
      this.userEmail = null;
    })
    .catch((error) => {
      console.log(error)
    });
  }

  verifyLogin() {

  }

  getUID() {
    this.auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
  }
}
