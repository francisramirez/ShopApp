import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { CustumerModel } from './models/custumerModel';
import { CustumerResponse } from './models/custumerResponse';

@Component({
  selector: 'app-custumer',
  templateUrl: './custumer.component.html',
  styleUrls: ['./custumer.component.css']
})
export class CustumerComponent implements OnInit {

  private custReponse:CustumerResponse;
  custumerList:CustumerModel[];

  constructor(private custService: CustomerService) { }

  ngOnInit(): void {
     this.getCustumers();
  }

  getCustumers():void{
    this.custService.getCustomers().subscribe(result => {
      this.custumerList = result.data;
      console.log(this.custumerList);
     });
  }
}
