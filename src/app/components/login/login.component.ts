import { Component, OnInit } from '@angular/core';
import { LoginPopupService } from '../../service/login-popup.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public auth: AngularFireAuth, public loginPopupService: LoginPopupService) {
  }
  login(email: string, password: string) {
    // this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // this.auth.signInWithEmailAndPassword(email:string, password: string).then()
    this.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user)
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
      console.log('Success')
    })
    .catch((error) => {
      console.log(error)
    });
  }

  test(email: string, password: string) {
    alert(`${email} | ${password}`)
  }

}