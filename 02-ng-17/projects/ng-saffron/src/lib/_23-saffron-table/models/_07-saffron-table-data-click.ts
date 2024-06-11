import { SaffronTableColumn } from './_06-saffron-table-column';

export class SaffronTableDataClick<T> {
  column!: SaffronTableColumn;
  rowIndex!: number;
  row!: T;
}
