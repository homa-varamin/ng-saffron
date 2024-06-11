import { Component, OnInit } from '@angular/core';
import { SaffronCardButton } from '../../_04-saffron-card-view/models/saffron-card-button';

@Component({
  selector: 'demo-form-container',
  templateUrl: './demo-form-container.component.html',
  styleUrls: ['./demo-form-container.component.scss'],
})
export class DemoFormContainerComponent implements OnInit {
  public actionButtons: SaffronCardButton[] = [
    {
      id: 'dis',
      title: 'غیر فعال',
      color: 'primary',
      disabled: true,
      action: () => {
        alert('action clicked');
      },
    },
    {
      id: 'action',
      title: 'انجام عملیات',
      color: 'primary',
      action: () => {
        alert('action clicked');
      },
    },
    {
      id: 'delete',
      title: 'پاک کردن',
      icon: 'delete',
      action: () => {
        alert('action clicked');
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
