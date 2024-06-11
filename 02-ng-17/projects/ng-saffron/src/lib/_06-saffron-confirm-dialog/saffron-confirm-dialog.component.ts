import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from './services/saffron-confirm-dialog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './saffron-confirm-dialog.component.html',
  styleUrls: ['./saffron-confirm-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
})
export class SaffronConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SaffronConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {}

  ngOnInit(): void {}
}
