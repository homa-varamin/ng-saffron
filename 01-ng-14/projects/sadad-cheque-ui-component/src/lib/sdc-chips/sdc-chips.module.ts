import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdcChipsComponent } from './sdc-chips/sdc-chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [SdcChipsComponent],
  imports: [CommonModule, FormsModule, MatChipsModule, MatIconModule],
  exports: [SdcChipsComponent],
})
export class SdcChipsModule {}
