import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../service/api.service"
import { User } from '../models/actors/user';
import { Administrator } from '../models/actors/administrator';
import { ApiResponse } from '../models/system/api-response';
import { Seller } from '../models/actors/seller';
import { Buyer } from '../models/actors/buyer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  loginPayload: User;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.apiService.login(this.loginPayload).subscribe((user: User) => {
      if (isAdministrator(user)) {
        alert("Succesfully logged admin");
      } else if (isBuyer(user)) {
        this.router.navigate(['home-buyer'], user)
      } else if (isSeller(user)) {
        alert("Succesfully logged buyer");
      }
    },
      error => this.invalidLogin = true
    );
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}

function isAdministrator(user: User): user is Administrator {
  return (user as Administrator).deals !== undefined;
}

function isSeller(user: User): user is Seller {
  return (user as Seller).asks !== undefined;
}

function isBuyer(user: User): user is Buyer {
  return (user as Buyer).bets !== undefined;
}