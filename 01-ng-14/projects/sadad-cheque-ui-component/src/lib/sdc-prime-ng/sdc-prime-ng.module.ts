import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdcPrimeTreeViewComponent } from './sdc-prime-tree-view/sdc-prime-tree-view.component';
import { RippleModule } from 'primeng/ripple';
import { TreeModule } from 'primeng/tree';
import { SdcPrimeNgService } from './services/sdc-prime-ng.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    //--------------------Components----------------------
    SdcPrimeTreeViewComponent,
    //--------------------Directive----------------------
    //--------------------Pipes--------------------------
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    TreeModule,
    DialogModule,
  ],
  exports: [SdcPrimeTreeViewComponent, TreeModule, DialogModule, ButtonModule],
  providers: [SdcPrimeNgService],
})
export class SdcPrimeNgModule {}
