import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPopupService {

  showLogin: boolean = true;

  toggleLogin() {
    this.showLogin = !this.showLogin;
    console.log(this.showLogin);
  }

  constructor() { }
}
