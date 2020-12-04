import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {FormBuilder, Validators } from "@angular/forms";


@Component({
   templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })
  constructor(
              private loginService: LoginService,
              private router: Router,
              private formBuilder: FormBuilder){

    }
  ngOnInit(): void {


  }
  login(){

    this.loginService.login(this.loginForm.value).subscribe(response => {

      if (response.success) {
           this.router.navigate(['/']);
          }

    })
  }

}
