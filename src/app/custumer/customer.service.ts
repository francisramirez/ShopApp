import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustumerResponse } from './models/custumerResponse';
import { CustumerModel } from './models/custumerModel';
import { CustumerRemoveModel } from "./models/custumerRemoveModel";

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService  {
  private baseUrl:string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl='https://localhost:44378/api/customer';
  }
  getCustomers(): Observable<CustumerResponse>{
      let url =this.baseUrl;
      return this.httpClient.get<CustumerResponse>(url);
  }
  addCustomer(custModel:CustumerModel):Observable<CustumerResponse>{
      let url = this.baseUrl;
      return this.httpClient.post<CustumerResponse>(url,custModel,httpOptions);
  }
  modifyCustomer(custModel:CustumerModel):Observable<CustumerResponse>{
    let url = this.baseUrl;
    return this.httpClient.put<CustumerResponse>(url,custModel,httpOptions);
  }
  removeCustumer(custModel:CustumerRemoveModel): Observable<CustumerResponse>{
    let url = this.baseUrl + "/update";
    return this.httpClient.put<CustumerResponse>(url,custModel,httpOptions);
  }
}
