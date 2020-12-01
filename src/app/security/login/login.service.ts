import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from 'src/app/models/response';
import { UserAuth } from 'src/app/models/userAuth';
import { map } from "rxjs/operators";

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
   providedIn:'root'
})

export class LoginService {
  urlService:string='https://localhost:44378/api/Security/Login';
  private userSubjet:BehaviorSubject<UserAuth>

  public get userData() : UserAuth {
  return this.userSubjet.value;
 }
  constructor(private httpClient: HttpClient) {
       const userAuth: UserAuth=  JSON.parse(localStorage.getItem('user'));
       this.userSubjet= new BehaviorSubject<UserAuth>(userAuth);
  }
  login(email:string, password:string): Observable<Response>{
       const loginModel={
         email:email,
         password:password
       }
      return this.httpClient.post<Response>(this.urlService,loginModel,httpOptions).pipe(
        map(result => {

            if (result.success) {
              const userAuth: UserAuth= result.data;
              localStorage.setItem('user',JSON.stringify(userAuth));
              this.userSubjet.next(userAuth);
            }
            return result;
        })
      );
  }
  logout(){
     localStorage.removeItem('user');
     this.userSubjet.next(null);
  }
}
