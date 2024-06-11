import { NgModule } from '@angular/core';
import { SaffronTableComponent } from './saffron-table.component';
import { SaffronTableWrapperComponent } from './saffron-table-wrapper/saffron-table-wrapper.component';
import { SaffronTableHeadComponent } from './saffron-table-head-cell/saffron-table-head-cell.component';
import { SaffronTableDataCellComponent } from './saffron-table-data-cell/saffron-table-data-cell.component';

@NgModule({
  imports: [
    SaffronTableComponent,
    SaffronTableWrapperComponent,
    SaffronTableHeadComponent,
    SaffronTableDataCellComponent,
  ],
  exports: [
    SaffronTableComponent,
    SaffronTableWrapperComponent,
    SaffronTableHeadComponent,
    SaffronTableDataCellComponent,
  ],
  providers: [],
})
export class SaffronTableModule {}
