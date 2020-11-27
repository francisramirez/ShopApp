import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './customer.service';
import { CustumerModel } from './models/custumerModel';
import { CustumerResponse } from './models/custumerResponse';
import { CustomerDialogComponent  } from "./custumerdialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteDialogComponent } from '../common/delete/deletedialog.component';
import { CustumerRemoveModel } from './models/custumerRemoveModel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custumer',
  templateUrl: './custumer.component.html',
  styleUrls: ['./custumer.component.css']
})
export class CustumerComponent implements OnInit  {

  private custReponse:CustumerResponse;
  custumerList:CustumerModel[];
  fields:string[]=['custId','companyname','contactname','contacttitle','phone','fax','actions'];
  dataSource = null;

  constructor(private custService: CustomerService,
              private custDialog: MatDialog,
              private snackBar: MatSnackBar ) { }

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  ngOnInit(): void {
     this.getCustumers();
  }
  getCustumers():void{
    this.custService.getCustomers().subscribe(result => {
      this.custumerList = result.data;
      this.dataSource= new MatTableDataSource<CustumerModel>(this.custumerList);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator= this.paginator;
     });
  }
  openAdd(){
    const dialogRef  = this.custDialog.open(CustomerDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
       this.getCustumers();
    });
  }
  openEdit(custEditModel:CustumerModel){

    const dialogRef = this.custDialog.open(CustomerDialogComponent,{
      data:custEditModel
    });

      dialogRef.afterClosed().subscribe(result =>
      {
        this.getCustumers();
      });
  }
  onFilter(event:Event){
      const filter = (event.target as HTMLInputElement).value;
      this.dataSource.filter=filter.trim().toLocaleLowerCase();
  }
  delete(custDeleteModel:CustumerModel){

    const dialogRef = this.custDialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

          this.custService.removeCustumer(custDeleteModel.custumerId).subscribe(resultDelete => {

            if (resultDelete.success) {

                 this.snackBar.open(resultDelete.message,'',{
                    duration: 2000
                 })
                 this.getCustumers();
            }
          });
       }
    });
  }
}
