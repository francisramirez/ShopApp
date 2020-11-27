import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/response';

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
  constructor(private httpClient: HttpClient) {

  }
  login(email:string, password:string): Observable<Response>{
       const loginModel={
         email:email,
         password:password
       }
      return this.httpClient.post<Response>(this.urlService,loginModel,httpOptions);
  }
}
