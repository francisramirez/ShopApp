import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustumerComponent } from '../custumer/custumer.component';
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [CustumerComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class SalesModule { }
