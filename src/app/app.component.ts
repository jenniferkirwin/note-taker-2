import { Component } from '@angular/core';
import { LoginPopupService } from './service/login-popup.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'note-taker-two';

  constructor(public loginPopupService: LoginPopupService, public authService: AuthService) { }
}
