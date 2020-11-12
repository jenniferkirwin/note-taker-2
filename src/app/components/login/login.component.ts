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

  NewUserForm:FormGroup;

  ngOnInit(): void {

    this.NewUserForm = new FormGroup({
      'newUserEmail': new FormControl(
        null,
        [
          Validators.required,
          Validators.email
        ]),
      'newUserPassword': new FormControl(
        null,
        [
          Validators.required
        ])
    });

    this.NewUserForm.setValue({
      'newUserEmail':'',
      'newUserPassword':''
    });
  
  };



  retrieveErrors() {

    let errors = this.NewUserForm.get('newUserEmail').errors;

    if (errors.required) {
      return 'This can not be blank!'
    }

    else if (errors.email) {
      return 'Enter a valid email!'
    }

  };

  onSubmit() {
    const {newUserEmail, newUserPassword} = this.NewUserForm.value
    this.authService.createUser(newUserEmail, newUserPassword)
  }

}