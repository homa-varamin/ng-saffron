import { environment } from '../../../../../../../src/environments/environment';
import { SaffronColumnType, SaffronTableColumn } from '../../../_23-saffron-table/saffron-table-public-api';
import { DemoTableModel } from './demo-table-model';

export class DemoTableConfig {
  rows: DemoTableModel[] = [];
  columns: SaffronTableColumn[] = [];

  constructor() {
    this.fillRows();
    this.setColumns();
  }

  private fillRows() {
    this.rows = [];
    Array.from(Array(50).keys()).forEach((x) => {
      this.rows.push({
        position: x + 1,
        myCssIcon: 'mail',
        myImageIcon: environment.APP_BASE_HREF + 'assets/icons/home.svg',
        requestDate: new Date(),
        accountNumber: 90000 + x * 31 * 19 * 3,
        accountType: x % 2 === 0 ? 'حساب نوع یک' : 'حساب نوع دو',
        paperCount: x % 3 === 0 ? 25 : x % 3 === 1 ? 50 : 100,
        office: 8000 + x * 2,
        branchCode: 2000 + x * 6,
        printCenter: 3000 + x * 10,
        customerId: 4000 + x * 19 + x * 6,
        requestEntrance: 'شعبه',
        status: 'درخواست های دسته چک ثبت شده ',
        lastActionDate: new Date(),
        actor: x % 2 === 0 ? 'از طریق بام صاحب حساب' : 'آیوا',
        shamsiDateNumber: 14010930,
      });
    });
  }

  private setColumns() {
    this.columns = [
      {
        field: 'position',
        title: 'ردیف',
        columnType: SaffronColumnType.positionColumn,
        width: '5rem',
      },
      {
        field: 'actions',
        title: 'اقدامات',
        columnType: SaffronColumnType.actionColumn,
        actionColumnData: [
          {
            id: 'edit',
            icon: 'edit_note',
            toolTip: 'ویرایش',
            toolTipPosition: 'right',
          },
          {
            id: 'delete',
            icon: 'delete_outline',
            toolTip: 'حذف',
            toolTipPosition: 'left',
          },
        ],
        width: '10rem',
      },
      {
        field: 'myCssIcon',
        title: 'آیکن',
        columnType: SaffronColumnType.cssIcon,
        sortable: false,
        filterable: false,
        isDataClickable: true,
      },
      {
        field: 'myImageIcon',
        title: 'تصویر',
        columnType: SaffronColumnType.imageIcon,
        sortable: false,
        filterable: false,
        isDataClickable: true,
      },
      {
        field: 'requestDate',
        title: 'تاریخ درخواست',
        columnType: SaffronColumnType.date,
        sortable: true,
        filterable: true,
        width: '20rem',
      },
      {
        field: 'accountNumber',
        title: 'شماره حساب',
        columnType: SaffronColumnType.number,
        sortable: false,
        filterable: false,
        width: '10rem',
      },
      {
        field: 'accountType',
        title: 'نوع حساب',
        columnType: SaffronColumnType.string,
        sortable: true,
        filterable: true,
      },
      {
        field: 'paperCount',
        title: 'تعداد برگ چک',
        columnType: SaffronColumnType.number,
        sortable: true,
        filterable: true,
      },
      {
        field: 'lastActionDate',
        title: 'تاریخ آخرین اقدام',
        columnType: SaffronColumnType.date,
        sortable: true,
      },
      {
        field: 'shamsiDateNumber',
        title: 'تاریخ شمسی عددی',
        columnType: SaffronColumnType.ShamsiDateNumber,
        sortable: true,
        filterable: true,
      },
    ];
  }
}
