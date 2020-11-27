import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustumerComponent } from '../custumer/custumer.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CustomerDialogComponent } from "../custumer/custumerdialog.component";

@NgModule({
  declarations: [CustumerComponent,CustomerDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class SalesModule { }
