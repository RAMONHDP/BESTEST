import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  user: User;
  showAlert: boolean;
  showProgress: boolean;
  buttonEnabled: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private firebaseAuth: FirebaseAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.buttonEnabled = this.formLogin.invalid;
  }

  send(): any {
    this.showProgress = true;
    this.firebaseAuth
      .login(this.email.value, this.password.value)
      .subscribe((user) => {
        this.user = user;
        if (user.userSession.isValidUser) {
          //TODO: Saltar al dashboard
          this.showAlert = false;
          this.router.navigate(['dashboard']);
        } else {
          this.showAlert = true;
        }
        this.showProgress = false;
      });
  }

  get email() {
    return this.formLogin.get('email') as FormArray;
  }

  get password() {
    return this.formLogin.get('password') as FormArray;
  }
}
