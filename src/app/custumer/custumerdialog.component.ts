import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from './customer.service';
import { CustumerModel } from './models/custumerModel';
import { CustumerRemoveModel } from "./models/custumerRemoveModel";

@Component({
   selector:'app-customerdialog',
   templateUrl:'./custumerdialog.component.html',
   styleUrls:['./custumerdialog.component.css']
})

export class CustomerDialogComponent {
  custumerId:number;
  companyname:string;
  contactname:string;
  contacttitle:string;
  address:string;
  email:string;
  city:string;
  region:string;
  postalcode:string;
  country:string;
  phone:string;
  fax:string;

  constructor(
    public dialogRef:MatDialogRef<CustomerDialogComponent>,
    private custService: CustomerService,
    public snackBar: MatSnackBar,
     @Inject(MAT_DIALOG_DATA) public cust: CustumerModel) {

      if (cust !== null) {

           this.companyname= cust.companyname;
           this.contactname= cust.contactname;
           this.country= cust.country;
           this.custumerId= cust.custumerId;
           this.email= cust.email;
           this.fax=cust.fax;
           this.phone= cust.phone;
           this.postalcode=cust.postalcode;
           this.region=cust.region;
           this.address=cust.address;
           this.city=cust.city;
           this.contacttitle=cust.contacttitle;

       }
  }
  closeDialog(){
    this.dialogRef.close();
  }
  saveCustumer(){

     const custModel: CustumerModel=
     {
       address: this.address,
       city: this.city,
       companyname: this.companyname,
       contactname: this.contactname,
       contacttitle: this.contacttitle,
       country:this.country,
       email:this.email,
       fax:this.fax,
       phone:this.phone,
       postalcode:this.postalcode,
       region:this.region,
       custumerId:null
      };

      this.custService.addCustomer(custModel).subscribe(result => {

        if (result.success) {
              this.closeDialog();
              this.snackBar.open(result.message,'',{duration:2000});
             }
      });

  }
  editCustumer(){

    const custModel: CustumerModel =
     {
       address: this.address,
       city: this.city,
       companyname: this.companyname,
       contactname: this.contactname,
       contacttitle: this.contacttitle,
       country:this.country,
       email:this.email,
       fax:this.fax,
       phone:this.phone,
       postalcode:this.postalcode,
       region:this.region,
       custumerId: this.cust.custumerId
      };

      this.custService.modifyCustomer(custModel).subscribe(result => {
        if (result.success) {
              this.closeDialog();
              this.snackBar.open(result.message,'',{duration:2000});
             }
      });

  }
}

