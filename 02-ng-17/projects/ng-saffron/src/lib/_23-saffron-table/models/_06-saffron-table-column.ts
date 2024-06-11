import { SaffronActionColumnData } from './_02-saffron-action-column-data';

export class SaffronTableColumn {
  field!: string;
  title!: string;
  columnType!: number;
  actionColumnData?: SaffronActionColumnData[];
  sortable?: boolean;
  filterable?: boolean;
  isDataClickable?: boolean;
  width?: string;
}
