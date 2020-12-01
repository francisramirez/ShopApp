import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
   templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit {

    email:string;
    password:string
    constructor(private loginService: LoginService, private router: Router){

    }
  ngOnInit(): void {

  }
  login(){
    this.loginService.login(this. email,this.password).subscribe(response => {
      if (response.success) {
           this.router.navigate(['/']);
          }
    })
  }

}
