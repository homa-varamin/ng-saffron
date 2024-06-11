import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { InputErrorComponent } from './input-error/input-error.component';
import { InputLabelComponent } from './input-label/input-label.component';

@NgModule({
  declarations: [InputLabelComponent, InputErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [InputLabelComponent, InputErrorComponent],
  providers: [],
})
export class SharedComponentsModule {}
