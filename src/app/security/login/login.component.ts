import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
   templateUrl:'./login.component.html'
})

export class LoginComponent {

    email:string;
    password:string
    constructor(private loginService: LoginService){

    }
  login(){
         alert('Entre');
    this.loginService.login(this. email,this.password).subscribe(response => {
         alert(response.message);
         console.log(response);
    })
  }

}
