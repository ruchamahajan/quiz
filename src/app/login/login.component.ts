import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private viewRegister = false;
  private viewLogin = true;

  private loginForm = new FormGroup ({
    userName: new FormControl(''),
    passWord: new FormControl('')
  });

   private registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    registerusername: new FormControl(),
    registerpassword: new FormControl(),
    securtyQuestion: new FormControl(),
    answer: new FormControl()
  });

  constructor(fb: FormBuilder) { }

  ngOnInit() {
  }


  viewLoginForm() {
    this.viewLogin = true;
    this.viewRegister = false;

  }

  viewRegisterForm() {
    this.viewLogin = false;
    this.viewRegister = true;

   }

}
