import { Component, OnInit } from '@angular/core';
import { LoginPopupService } from '../../service/login-popup.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService, public loginPopupService: LoginPopupService) {}

}