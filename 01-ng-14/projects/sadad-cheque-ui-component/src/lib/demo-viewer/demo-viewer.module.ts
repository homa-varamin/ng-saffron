import { SdcErrorInterceptor } from './../sdc-login/helpers/sdc-error-interceptor';
import { DemoSelect } from './demo-select/demo-select.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoViewerComponent } from './demo-viewer/demo-viewer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoTable } from './demo-table/demo-table.component';
import { DemoButton } from './demo-button/demo-button.component';
import { DemoInput } from './demo-input/demo-input.component';
import { DemoLoader } from './demo-loader/demo-loader.component';
import { DemoModal } from './demo-modal/demo-modal.component';
import { DemoDatePicker } from './demo-date-picker/demo-date-picker.component';
import { DemoTabView } from './demo-tab-view/demo-tab-view.component';
import { DemoCardView } from './demo-card-view/demo-card-view.component';
import { FieldsetDirective } from './directives/fieldset-directive/fieldset.directive';
import { DemoConfirmDialog } from './demo-confirm-dialog/demo-confirm-dialog.component';
import { DemoLableBoxComponent } from './demo-label-box/demo-label-box.component';
import { DemoTextArea } from './demo-text-area/demo-text-area.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SdcComponentsModule } from '../sdc-components.module';
import { DemoLoginForm } from './demo-login-form/demo-login-form.component';
import { DemoLogin } from './demo-login/demo-login.component';
import { DemoTreeViewComponent } from './demo-tree-view/demo-tree-view.component';
import { DemoJsonEditorComponent } from './demo-json-editor/demo-json-editor.component';
import { SdcPrimeNgModule } from '../sdc-prime-ng/sdc-prime-ng.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  SdcJwtInterceptor,
  SdcLoginService,
} from '../sdc-login/sdc-login.module';
//import { fakeBackendProvider } from './demo-fake-backend/demo-fake-backend-Interceptor';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { fakeBackendProvider } from './demo-fake-backend/demo-fake-backend-interceptor';
import { DemoAdvancedFilterComponent } from './demo-advanced-filter/demo-advanced-filter.component';
import { DemoFormContainerComponent } from './demo-form-container/demo-form-container.component';
import { DemoMessageServiceComponent } from './demo-message-service/demo-message-service.component';
import { DemoChipsComponent } from './demo-chips/demo-chips.component';
import { SdcChipsModule } from '../sdc-chips/sdc-chips.module';
@NgModule({
  declarations: [
    // directives
    FieldsetDirective,

    //components
    DemoViewerComponent,
    DemoTable,
    DemoButton,
    DemoInput,
    DemoLoader,
    DemoSelect,
    DemoModal,
    DemoDatePicker,
    DemoTabView,
    DemoCardView,
    DemoConfirmDialog,
    DemoLableBoxComponent,
    DemoTextArea,
    DemoLoginForm,
    DemoLogin,
    DemoTreeViewComponent,
    DemoJsonEditorComponent,
    DemoPipeComponent,
    DemoAdvancedFilterComponent,
    DemoFormContainerComponent,
    DemoMessageServiceComponent,
    DemoChipsComponent
  ],

  exports: [DemoViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SdcComponentsModule,
    SdcPrimeNgModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoViewerComponent,
      },
    ]),
    SdcChipsModule,
  ],
  providers: [
    SdcLoginService,
    { provide: HTTP_INTERCEPTORS, useClass: SdcJwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SdcErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [],
})
export class DemoViewerModule {}
