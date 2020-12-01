import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
@Injectable({
  providedIn:'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userData= this.loginService.userData;

     if (userData) {

      req = req.clone({
              setHeaders:{
                Authorization:`Bearer ${userData.token}`
              }
          });
     }
     return next.handle(req);
  }

}
