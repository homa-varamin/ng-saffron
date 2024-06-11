import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { SaffronConfirmDialogComponent } from '../saffron-confirm-dialog.component';

@Injectable()
export class SaffronConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  confirmDialog(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog
      .open(SaffronConfirmDialogComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
}

export interface ConfirmDialogData {
  title?: string;
  message?: string;
  confirmCaption?: string;
  cancelCaption?: string;
  acceptButonColor?: string;
}
