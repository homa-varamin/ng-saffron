import { Injectable } from '@angular/core';
import {
  AdvancedFilterModel,
  SdcDataType,
} from '../../../models/models.module';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class DemoAdvancedFilterConfigs {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      test1: ['123'],
      test2: ['456'],
      test3: ['789'],
      test4: ['012'],
      test5: ['345'],
      test10: [undefined],
      test11: [undefined],
      test12: [undefined],
      test13: [undefined],
      test14: [undefined],
      test15: [undefined],
      test16: [undefined],
      test17: [undefined],
      test18: [undefined],
      test19: [undefined],
      test20: [undefined],
      test21: [undefined],
      test22: [undefined],
      test23: [undefined],
      test24: [undefined],
      test25: [undefined],
      test26: [undefined],
    });
  }

  primaryFilters: AdvancedFilterModel[] = [
    {
      id: '1',
      title: 'شماره حساب',
      controlName: 'test1',
      dataType: SdcDataType.Text,
    },
    {
      id: '2',
      title: 'شناسه ملی',
      controlName: 'test2',
      dataType: SdcDataType.Text,
    },
    {
      id: '3',
      title: 'کد شعبه',
      controlName: 'test3',
      dataType: SdcDataType.Text,
    },
    {
      id: '4',
      title: 'نوع حساب',
      controlName: 'test4',
      dataType: SdcDataType.Text,
    },
    {
      id: '5',
      title: 'کد درخواست',
      controlName: 'test5',
      dataType: SdcDataType.Text,
    },
  ];

  secondryFilters: AdvancedFilterModel[] = [
    {
      id: '10',
      title: 'ورودی 10',
      controlName: 'test10',
      dataType: SdcDataType.Text,
    },
    {
      id: '11',
      title: 'ورودی 11',
      controlName: 'test11',
      dataType: SdcDataType.Text,
    },
    {
      id: '12',
      title: 'ورودی 12',
      controlName: 'test12',
      dataType: SdcDataType.Text,
    },
    {
      id: '13',
      title: 'ورودی 13',
      controlName: 'test13',
      dataType: SdcDataType.Text,
    },
    {
      id: '14',
      title: 'ورودی 14',
      controlName: 'test14',
      dataType: SdcDataType.Text,
    },
    {
      id: '15',
      title: 'ورودی 15',
      controlName: 'test15',
      dataType: SdcDataType.Text,
    },
    {
      id: '16',
      title: 'ورودی 16',
      controlName: 'test16',
      dataType: SdcDataType.Text,
    },
    {
      id: '17',
      title: 'ورودی 17',
      controlName: 'test17',
      dataType: SdcDataType.Text,
    },
    {
      id: '18',
      title: 'ورودی 18',
      controlName: 'test18',
      dataType: SdcDataType.Text,
    },
    {
      id: '19',
      title: 'ورودی 19',
      controlName: 'test19',
      dataType: SdcDataType.Text,
    },
    {
      id: '20',
      title: 'ورودی 20',
      controlName: 'test20',
      dataType: SdcDataType.Text,
    },
    {
      id: '21',
      title: 'ورودی 21',
      controlName: 'test21',
      dataType: SdcDataType.Text,
    },
    {
      id: '22',
      title: 'ورودی 22',
      controlName: 'test22',
      dataType: SdcDataType.Text,
    },
    {
      id: '23',
      title: 'ورودی 23',
      controlName: 'test23',
      dataType: SdcDataType.Text,
    },
    {
      id: '24',
      title: 'ورودی 24',
      controlName: 'test24',
      dataType: SdcDataType.Text,
    },
    {
      id: '25',
      title: 'ورودی 25',
      controlName: 'test25',
      dataType: SdcDataType.Text,
    },
    {
      id: '26',
      title: 'ورودی 26',
      controlName: 'test26',
      dataType: SdcDataType.Text,
    },
  ];
}
