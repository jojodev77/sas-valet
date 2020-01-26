import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


/** component */
import { ModalComponent } from '../components/modal/modal.component';



/** models */
import { ModalAlertData, AlertType } from '../models/modal.models';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openInfoModalsFailled(message: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: new ModalAlertData({
        title: 'Votre opération',
        content: message,
        closeButtonLabel: 'Close',
        alertType: AlertType.INFO
      })
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('After Close Modal', result);
    });
  }

  openInfoModalsConnect() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: ''
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
