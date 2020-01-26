import { Component, OnInit, Inject } from '@angular/core';


/** models */
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalAlertData, AlertType } from '../../models/modal.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {



  constructor( public dialogRef: MatDialogRef<string>,
               @Inject(MAT_DIALOG_DATA)
    public data: ModalAlertData
) { }

  ngOnInit() {
  }

  getAlertIcon() {
    switch (this.data.alertType) {
      case AlertType.INFO:
        return 'info';
      case AlertType.WARNING:
        return 'warning';
      case AlertType.ERROR:
        return 'error';
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
