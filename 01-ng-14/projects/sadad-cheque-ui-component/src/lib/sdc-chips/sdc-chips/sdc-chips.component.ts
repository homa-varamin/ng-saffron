import { Component, Input } from '@angular/core';
import { SdcChipsModel } from './models/sdc-chips.model';

@Component({
  selector: 'sdc-chips',
  templateUrl: './sdc-chips.component.html',
  styleUrls: ['./sdc-chips.component.scss'],
})
export class SdcChipsComponent {
  @Input()
  chipList: SdcChipsModel[] = [
    { id: 1, title: 'شماره حساب' },
    { id: 2, title: 'شناسه ملی' },
    { id: 3, title: 'کد شعبه' },
    { id: 4, title: 'نوع حساب' },
    { id: 5, title: 'کد درخواست' },
  ];
}
