import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, public  router:  Router) {}

  // Sets user in local storage
  //   this.afAuth.authState.subscribe(user => {
  //     if (user){
  //       this.user = user;
  //       localStorage.setItem('user', JSON.stringify(this.user));
  //     } else {
  //       localStorage.setItem('user', null);
  //     }
  //   })

  //  }

  //  async login(email: string, password: string) {
  //   var result = await auth.auth().signInWithEmailAndPassword(email, password)
  //   this.router.navigate(['admin/list']);
  // }

  // async register(email: string, password: string) {
  //   var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //   this.sendEmailVerification();
  // }

  login(email: string, password: string) {
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
