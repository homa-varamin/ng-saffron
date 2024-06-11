import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DemoAdvancedFilterConfigs } from './models/demo-advanced-filter.configs';
import { SaffronAdvancedFilterModel } from '../../_01-saffron-advanced-filter/models/saffron-advanced-filter.model';

@Component({
  selector: 'demo-advanced-filter',
  templateUrl: './demo-advanced-filter.component.html',
  styleUrls: ['./demo-advanced-filter.component.scss'],
  providers: [DemoAdvancedFilterConfigs],
})
export class DemoAdvancedFilterComponent implements OnInit {
  formGroup!: FormGroup;
  primaryFilters: SaffronAdvancedFilterModel[] = [];
  secondryFilters: SaffronAdvancedFilterModel[] = [];

  constructor(private configs: DemoAdvancedFilterConfigs) {
    this.primaryFilters = configs.primaryFilters;
    this.secondryFilters = configs.secondryFilters;
  }

  ngOnInit(): void {
    this.formGroup = this.configs.formGroup;
  }

  searched() {}
}
