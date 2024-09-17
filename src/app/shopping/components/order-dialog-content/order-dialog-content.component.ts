import { Component } from '@angular/core';
import {ContactDialogComponent} from "../../../authentication/components/contact-dialog/contact-dialog.component";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-order-dialog-content',
  templateUrl: './order-dialog-content.component.html',
  styleUrls: ['./order-dialog-content.component.css']
})
export class OrderDialogContentComponent {

  constructor( private dialog: MatDialog) {

  }
  openMessageForm(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }




}
