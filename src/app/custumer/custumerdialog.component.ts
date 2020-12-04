import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from './customer.service';
import { CustumerModel } from './models/custumerModel';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
   selector:'app-customerdialog',
   templateUrl:'./custumerdialog.component.html',
   styleUrls:['./custumerdialog.component.css']
})

export class CustomerDialogComponent {

   public custumerForm= this.formBuilder.group({
     custumerId:[0],
     companyname:['',Validators.required],
     contactname:['',Validators.required],
     contacttitle:['',Validators.required],
     address:['',Validators.required],
     email:['',Validators.required],
     city:['',Validators.required],
     region:[''],
     postalcode:['',Validators.required],
     country:['',Validators.required],
     phone:['',Validators.required],
     fax:['',Validators.required]
   });

  constructor(
    private custService: CustomerService,
    private formBuilder:FormBuilder,
    public dialogRef:MatDialogRef<CustomerDialogComponent>,
    public snackBar: MatSnackBar,
     @Inject(MAT_DIALOG_DATA) public cust: CustumerModel) {

      console.log(cust);

      if (cust !== null) {

            this.custumerForm.get('companyname').setValue(cust.companyname);
            this.custumerForm.get('contactname').setValue(cust.contactname);
            this.custumerForm.get('country').setValue(cust.country);
            this.custumerForm.get('custumerId').setValue(cust.custumerId);
            this.custumerForm.get('email').setValue(cust.email);
            this.custumerForm.get('fax').setValue(cust.fax);
            this.custumerForm.get('phone').setValue(cust.phone);
            this.custumerForm.get('postalcode').setValue(cust.postalcode);
            this.custumerForm.get('region').setValue(cust.region);
            this.custumerForm.get('address').setValue(cust.address);
            this.custumerForm.get('city').setValue(cust.city);
            this.custumerForm.get('contacttitle').setValue(cust.contacttitle);

       }
  }
  closeDialog(){
    this.dialogRef.close();
    this.custumerForm.setValue(null);

  }
  saveCustumer(){

    if (this.custumerForm.get('custumerId').value === 0) {

        this.custService.addCustomer(this.custumerForm.value).subscribe(result => {

          if (result.success) {
                this.closeDialog();
                this.snackBar.open(result.message,'',{duration:2000});
               }
        });
      }
      else{
        alert('entre');
        this.editCustumer();
      }
  }
  editCustumer(){
      this.custService.modifyCustomer(this.custumerForm.value).subscribe(result => {
        if (result.success) {
              this.closeDialog();
              this.snackBar.open(result.message,'',{duration:2000});
             }
      });

  }
}

