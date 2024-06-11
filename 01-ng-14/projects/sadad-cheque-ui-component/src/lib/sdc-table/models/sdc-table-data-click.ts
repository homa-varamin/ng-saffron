import { SdcTableColumn } from './sdc-table-column';

export class SdcTableDataClick<T> {
  column!: SdcTableColumn;
  rowIndex!: number;
  row!: T;
}
