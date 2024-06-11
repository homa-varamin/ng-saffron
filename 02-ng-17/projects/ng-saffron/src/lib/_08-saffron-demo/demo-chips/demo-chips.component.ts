import { Component } from '@angular/core';
import { SaffronChipsModel } from '../../_05-saffron-chips/models/saffron-chips.model';

@Component({
  selector: 'demo-chips',
  templateUrl: './demo-chips.component.html',
  styleUrls: ['./demo-chips.component.scss'],
})
export class DemoChipsComponent {
  chipList: SaffronChipsModel[] = [
    { id: 1, title: 'شماره حساب' },
    { id: 2, title: 'شناسه ملی' },
    { id: 3, title: 'کد شعبه' },
    { id: 4, title: 'نوع حساب' },
    { id: 5, title: 'کد درخواست' },
  ];
}
