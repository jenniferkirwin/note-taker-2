import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPopupService {

  showLogin: boolean = false;

  toggleLogin() {
    this.showLogin = !this.showLogin;
    console.log(this.showLogin);
  }

  constructor() { }
}
