import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { SdcButtonTypes, SdcModalButton } from '../models/models.module';

@Component({
  selector: 'sdc-modal',
  templateUrl: './sdc-modal.component.html',
  styleUrls: ['./sdc-modal.component.scss'],
})
export class SdcModalComponent implements AfterViewInit, OnChanges {
  @Input() modalTemplate!: TemplateRef<any>;
  @Input() open: boolean = false;
  @Input() hasAccept: boolean = false;
  @Input() hasCancel: boolean = false;
  @Input() disableCancel: boolean = false;
  @Input() disableAccept: boolean = false;
  @Input() acceptTitle: string = 'تایید';
  @Input() cancelTitle: string = 'لغو';
  @Input() config?: MatDialogConfig = { disableClose: true, autoFocus: false };
  @Input() customButtons: SdcModalButton[] = [];
  @Input() showHeaderBorder: boolean = false;
  @Input() showFooterBorder: boolean = false;

  @Output() acceptClicked = new EventEmitter<void>();
  @Output() cancelClicked = new EventEmitter<void>();

  @ViewChild('templateref') public templateref!: TemplateRef<any>;

  public SdcButtonTypes = SdcButtonTypes;
  private dialogRef!: MatDialogRef<any, any>;
  private isViewInited: boolean = false;

  private isOpenChangeCalled: boolean = false;

  constructor(public dialog: MatDialog, public chRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      this.onOpenChange();
    }
  }

  ngAfterViewInit(): void {
    this.isViewInited = true;
    if (this.isOpenChangeCalled) {
      this.onOpenChange();
    }

    this.chRef.detectChanges();
  }

  private onOpenChange() {
    if (!this.isViewInited) {
      this.isOpenChangeCalled = true;
      return;
    }

    if (this.open) {
      this.openDialog();
    } else {
      this.closeDialog();
    }
  }

  private openDialog() {
    this.dialogRef = this.dialog.open(this.templateref, this.config);
  }

  private closeDialog() {
    this.dialogRef?.close();
  }

  customButtonClick(button: SdcModalButton) {
    if (button.action) {
      button.action();
    }
  }
}
