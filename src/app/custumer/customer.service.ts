import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustumerResponse } from './models/custumerResponse';

@Injectable({
  providedIn: 'root'
})
export class CustomerService  {
  private baseUrl:string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl='https://localhost:44378/api/';
  }
  getCustomers(): Observable<CustumerResponse>{
      let url =this.baseUrl + 'customer';
      return this.httpClient.get<CustumerResponse>(url);
  }
}
