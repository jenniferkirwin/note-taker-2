import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginPopupService } from '../../service/login-popup.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService, public loginPopupService: LoginPopupService) {}

  newUser;

  ngOnInit(): void {
    this.newUser = new FormGroup({

      newUserEmail: new FormControl("", Validators.minLength(2))

      // name: new FormControl(this.hero.name, [
      //   Validators.required,
      //   Validators.minLength(4),
      //   forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      // ]),
      // alterEgo: new FormControl(this.hero.alterEgo),
      // power: new FormControl(this.hero.power, Validators.required)
    });
  
  }
  
  // get name() { return this.heroForm.get('name'); }
  
  // get power() { return this.heroForm.get('power'); }

}