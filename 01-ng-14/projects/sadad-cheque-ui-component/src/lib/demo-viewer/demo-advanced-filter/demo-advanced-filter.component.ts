import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdvancedFilterModel, SdcDataType } from '../../models/models.module';
import { DemoAdvancedFilterConfigs } from './models/demo-advanced-filter.configs';

@Component({
  selector: 'demo-advanced-filter',
  templateUrl: './demo-advanced-filter.component.html',
  styleUrls: ['./demo-advanced-filter.component.scss'],
  providers: [DemoAdvancedFilterConfigs],
})
export class DemoAdvancedFilterComponent implements OnInit {
  formGroup!: FormGroup;
  primaryFilters: AdvancedFilterModel[] = [];
  secondryFilters: AdvancedFilterModel[] = [];

  constructor(private configs: DemoAdvancedFilterConfigs) {
    this.primaryFilters = configs.primaryFilters;
    this.secondryFilters = configs.secondryFilters;
  }

  ngOnInit(): void {
    this.formGroup = this.configs.formGroup;
  }

  searched() {}
}
