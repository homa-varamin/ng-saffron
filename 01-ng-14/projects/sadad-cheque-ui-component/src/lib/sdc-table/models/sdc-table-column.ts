import { SdcActionColumnData } from './sdc-action-column-data';

export class SdcTableColumn {
  field!: string;
  title!: string;
  columnType!: number;
  actionColumnData?: SdcActionColumnData[];
  sortable?: boolean;
  filterable?: boolean;
  isDataClickable?: boolean;
  width?: string;
}
