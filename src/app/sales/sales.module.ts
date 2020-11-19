import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustumerComponent } from '../custumer/custumer.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CustomerDialogComponent } from "../custumer/custumerdialog.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CustumerComponent,CustomerDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule
  ]
})
export class SalesModule { }
