import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router:Router,
              private userService: LoginService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     const user = this.userService.userData;
     if (user) {
         return true;
     }
     this.router.navigate(['/login']);
     return true;
  }
}
