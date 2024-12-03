import { SdcRangePickerComponent } from './sdc-rage-picker/sdc-range-picker.component';
import { SdcTooltipComponent } from './sdc-tooltip/sdc-tooltip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SdcTableComponent } from './sdc-table/sdc-table.component';
import { SdcButtonComponent } from './sdc-button/sdc-button.component';
import { SdcInputComponent } from './sdc-input/sdc-input.component';
import { SdcSelectComponent } from './sdc-select/sdc-select.component';
import { SdcTextAreaComponent } from './sdc-text-area/sdc-text-area.component';
import { SdcLoaderComponent } from './sdc-loader/sdc-loader.component';
import { SdcModalComponent } from './sdc-modal/sdc-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SdcDatePickerComponent } from './sdc-date-picker/sdc-date-picker.component';
import { SdcLabelBoxComponent } from './sdc-label-box/sdc-label-box.component';
import { SdcTabViewComponent } from './sdc-tab-view/sdc-tab-view.component';
import { SdcCardViewComponent } from './sdc-card-view/sdc-card-view.component';
import { DigitOnlyDirective } from '../lib/directives/digit-only.directive';
import { DateToPersianPipe } from './pipes/date-to-persian';
import { SearchPipe } from '../lib/pipes/search-pipe';
import { CurrencyFormatPipe } from '../lib/pipes/currency-format-pipe';
import { NumberToPersianPipe } from '../lib/pipes/number-to-persian-pipe';
import { ShamsiDatePipe } from '../lib/pipes/ShamsiDatePipe';
import { ConfirmDialogService } from '../lib/services/confirm-dialog.service';
import { SdcPersianPaginator } from './sdc-table/models/sdc-persian-paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { SharedComponentsModule } from './shared/shared-components.module';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MaterialPersianDateAdapter,
  PERSIAN_DATE_FORMATS,
} from './utils/adapters/material.persian-date.adapter';
import { LoginType1Component } from './sdc-login/sdc-login-type1/sdc-login-type1.component';
import { SdcJsonEditorComponent } from './sdc-json-editor/sdc-json-editor.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { CurrencyMaskInputMode } from './directives/currency/currency-mask.config';
import { NgxCurrencyModule } from './directives/currency/currency-mask.module';
import { SdcTableHeadComponent } from './sdc-table/sdc-table-head-cell/sdc-table-head-cell.component';
import { SdcTableDataCellComponent } from './sdc-table/sdc-table-data-cell/sdc-table-data-cell.component';
import { SdcTableWrapperComponent } from './sdc-table/sdc-table-wrapper/sdc-table-wrapper.component';
import { SdcLoginErrorComponent } from './sdc-login/sdc-login-error/sdc-login-error.component';
import { JalaliToPersianPipe } from './pipes/jalali-to-persian';
import { SdcHeaderDialogComponent } from './sdc-header-dialog/sdc-header-dialog.component';
import { PublicShareService } from './services/public-share-service';
import { PublicService } from './services/public-service';
import { SdcAutoCompleteComponent } from './sdc-auto-complete/sdc-auto-complete.component';
import { SdcAdvancedFilterComponent } from './sdc-advanced-filter/sdc-advanced-filter.component';
import { SdcAdvancedFilterModalComponent } from './sdc-advanced-filter/sdc-advanced-filter-modal/sdc-advanced-filter-modal.component';
import { SdcFormContainerComponent } from './sdc-form-container/sdc-form-container.component';
import { SdcChipsModule } from './sdc-chips/sdc-chips.module';
import { LegacyAutoCompleteComponent } from './sdc-legacy-auto-complete/legacy-auto-complete.component';

// import { Miladi2persianWithTimePipe, MiladiToPersianPipe } from '../sdc-public-api';

export const customCurrencyMaskConfig = {
  align: 'right',
  allowNegative: false,
  allowZero: true,
  decimal: '',
  precision: 0,
  prefix: '',
  suffix: '',
  thousands: ',',
  nullable: true,
  min: null!,
  max: null!,
  inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
  declarations: [
    //--------------------Components----------------------
    SdcTableComponent,
    SdcButtonComponent,
    SdcInputComponent,
    SdcDatePickerComponent,
    SdcSelectComponent,
    SdcTextAreaComponent,
    SdcLoaderComponent,
    SdcModalComponent,
    ConfirmDialogComponent,
    SdcLabelBoxComponent,
    SdcTabViewComponent,
    SdcCardViewComponent,
    LoginType1Component,
    SdcJsonEditorComponent,
    SdcTooltipComponent,
    SdcLoginErrorComponent,
    SdcRangePickerComponent,
    SdcAutoCompleteComponent,
    LegacyAutoCompleteComponent,

    //--------------------Directive----------------------
    DigitOnlyDirective,

    //--------------------Pipes--------------------------
    CurrencyFormatPipe,
    NumberToPersianPipe,
    ShamsiDatePipe,
    SearchPipe,
    SdcTableHeadComponent,
    SdcTableDataCellComponent,
    SdcTableWrapperComponent,
    DateToPersianPipe,
    JalaliToPersianPipe,
    SdcHeaderDialogComponent,
    SdcAdvancedFilterComponent,
    SdcAdvancedFilterModalComponent,
    SdcFormContainerComponent,
    //  MiladiToPersianPipe,
    //  Miladi2persianWithTimePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedComponentsModule,
    NgJsonEditorModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NgJsonEditorModule,
    SdcChipsModule,
  ],
  exports: [
    SdcTableComponent,
    SdcButtonComponent,
    SdcInputComponent,
    SdcDatePickerComponent,
    SdcSelectComponent,
    SdcTextAreaComponent,
    SdcLoaderComponent,
    SdcModalComponent,
    ConfirmDialogComponent,
    SdcLabelBoxComponent,
    SdcTabViewComponent,
    SdcCardViewComponent,
    LoginType1Component,
    SdcJsonEditorComponent,
    SdcTooltipComponent,
    SdcLoginErrorComponent,
    SdcRangePickerComponent,
    SdcHeaderDialogComponent,
    SdcAutoCompleteComponent,
    SdcAdvancedFilterComponent,
    SdcFormContainerComponent,
    LegacyAutoCompleteComponent,

    //--------------------Directive----------------------
    DigitOnlyDirective,

    //--------------------Pipes--------------------------
    CurrencyFormatPipe,
    NumberToPersianPipe,
    ShamsiDatePipe,
    SearchPipe,
    DateToPersianPipe,
    JalaliToPersianPipe,
    // MiladiToPersianPipe,
    // Miladi2persianWithTimePipe,

    //// modules
    SdcChipsModule,
  ],
  providers: [
    ConfirmDialogService,
    PublicShareService,
    PublicService,
    { provide: MatPaginatorIntl, useClass: SdcPersianPaginator },

    //// datepicker adapter
    {
      provide: DateAdapter,
      useClass: MaterialPersianDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    ////
  ],
})
export class SdcComponentsModule {}
