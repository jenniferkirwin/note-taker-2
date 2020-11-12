import { Component, OnInit } from '@angular/core';
import { LoginPopupService } from '../../service/login-popup.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public loginPopupService: LoginPopupService) { }

  ngOnInit(): void {
  }

}
