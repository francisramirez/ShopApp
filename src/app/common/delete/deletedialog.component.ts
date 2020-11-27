import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
   templateUrl:'./deletedialog.component.html'
})

export class DeleteDialogComponent {

  constructor(public dialogRef:MatDialogRef<DeleteDialogComponent>) {
  }
}

