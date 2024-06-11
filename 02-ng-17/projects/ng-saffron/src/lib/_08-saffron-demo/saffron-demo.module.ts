import { NgModule } from '@angular/core';
import { DemoViewerComponent } from './demo-viewer/demo-viewer.component';
import { RouterModule } from '@angular/router';
import { DemoButton } from './demo-button/demo-button.component';
import { DemoDatePicker } from './demo-date-picker/demo-date-picker.component';
import { CommonModule } from '@angular/common';
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSlider } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaffronButtonComponent } from '../_03-saffron-button/saffron-button.component';
import { SaffronAdvancedFilterComponent } from '../_01-saffron-advanced-filter/saffron-advanced-filter.component';
import { SaffronAutoCompleteComponent } from '../_02-saffron-auto-complete/saffron-auto-complete.component';
import { SaffronCardViewComponent } from '../_04-saffron-card-view/saffron-card-view.component';
import { SaffronChipsComponent } from '../_05-saffron-chips/saffron-chips.component';
import { SaffronConfirmDialogComponent } from '../_06-saffron-confirm-dialog/saffron-confirm-dialog.component';
import { SaffronDatePickerComponent } from '../_07-saffron-date-picker/saffron-date-picker.component';
import { SaffronFormContainerComponent } from '../_10-saffron-form-container/saffron-form-container.component';
import { DemoAdvancedFilterComponent } from './demo-advanced-filter/demo-advanced-filter.component';
import { DemoChipsComponent } from './demo-chips/demo-chips.component';
import { DemoFormContainerComponent } from './demo-form-container/demo-form-container.component';
import { DemoJsonEditorComponent } from './demo-json-editor/demo-json-editor.component';
import { DemoMessageServiceComponent } from './demo-message-service/demo-message-service.component';
import { DemoTreeViewComponent } from './demo-tree-view/demo-tree-view.component';
import { DemoTable } from './demo-table/demo-table.component';
import { DemoInput } from './demo-input/demo-input.component';
import { DemoSelect } from './demo-select/demo-select.component';
import { DemoModal } from './demo-modal/demo-modal.component';
import { DemoTabView } from './demo-tab-view/demo-tab-view.component';
import { DemoCardView } from './demo-card-view/demo-card-view.component';
import { DemoLableBoxComponent } from './demo-label-box/demo-label-box.component';
import { DemoTextArea } from './demo-text-area/demo-text-area.component';
import { SaffronConfirmDialogService } from '../_06-saffron-confirm-dialog/services/saffron-confirm-dialog.service';
import { SaffronHeaderDialogComponent } from '../_11-saffron-header-dialog/saffron-header-dialog.component';
import { SaffronInputComponent } from '../_12-saffron-input/saffron-input.component';
import { SaffronJsonEditorComponent } from '../_13-saffron-json-editor/saffron-json-editor.component';
import { SaffronLabelBoxComponent } from '../_14-saffron-label-box/saffron-label-box.component';
import { SaffronLoaderComponent } from '../_15-saffron-loader/saffron-loader.component';
import { SaffronLoaderService } from '../_15-saffron-loader/services/saffron-loader.service';
import { SaffronModalComponent } from '../_17-saffron-modal/saffron-modal.component';
import { SaffronPrimeTreeViewComponent } from '../_20-saffron-tree-view/saffron-tree-view.component';
import { SaffronRangePickerComponent } from '../_21-saffron-rage-picker/saffron-range-picker.component';
import { SaffronSelectComponent } from '../_22-saffron-select/saffron-select.component';
import { SaffronTabViewComponent } from '../_24-saffron-tab-view/saffron-tab-view.component';
import { SaffronTextAreaComponent } from '../_25-saffron-text-area/saffron-text-area.component';
import { SaffronTooltipComponent } from '../_26-saffron-tooltip/saffron-tooltip.component';
import { DemoLoginForm } from './demo-login-form/demo-login-form.component';
import { MatDialogContent } from '@angular/material/dialog';
import { DemoConfirmDialog } from './demo-confirm-dialog/demo-confirm-dialog.component';
import { DemoLoader } from './demo-loader/demo-loader.component';
import { SaffronFieldsetDirective } from './directives/fieldset-directive/fieldset.directive';
import { SaffronTableModule } from '../_23-saffron-table/saffron-table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    //components
    DemoTable,
    DemoDatePicker,
    DemoButton,
    DemoInput,
    DemoSelect,
    DemoModal,
    DemoTabView,
    DemoCardView,
    DemoLableBoxComponent,
    DemoTextArea,
    DemoTreeViewComponent,
    DemoJsonEditorComponent,
    DemoAdvancedFilterComponent,
    DemoFormContainerComponent,
    DemoMessageServiceComponent,
    DemoChipsComponent,
    DemoViewerComponent,
    DemoLoginForm,
    DemoConfirmDialog,
    DemoLoader,
  ],

  exports: [DemoViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatDrawerContainer,
    MatDrawer,
    MatNavList,
    MatSlider,
    MatDialogContent,
    MatListItem,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoViewerComponent,
      },
    ]),
    SaffronAdvancedFilterComponent,
    SaffronAutoCompleteComponent,
    SaffronButtonComponent,
    SaffronCardViewComponent,
    SaffronChipsComponent,
    SaffronConfirmDialogComponent,
    SaffronDatePickerComponent,
    SaffronFormContainerComponent,
    SaffronHeaderDialogComponent,
    SaffronInputComponent,
    SaffronJsonEditorComponent,
    SaffronLabelBoxComponent,
    SaffronLoaderComponent,
    SaffronModalComponent,
    SaffronPrimeTreeViewComponent,
    SaffronRangePickerComponent,
    SaffronSelectComponent,
    SaffronTabViewComponent,
    SaffronTextAreaComponent,
    SaffronTooltipComponent,
    SaffronTableModule,

    // directives
    SaffronFieldsetDirective,
  ],
  providers: [SaffronConfirmDialogService, SaffronLoaderService],
})
export class SaffronDemoModule {}
