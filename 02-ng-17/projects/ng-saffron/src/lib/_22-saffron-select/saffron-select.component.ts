import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatOption } from '@angular/material/core';
import {
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
} from '@angular/material/select';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import { SaffronSelectAllValue } from './models/saffron-select.model';
import { CommonModule } from '@angular/common';
import {
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { SaffronInputErrorComponent } from '../_29-saffron-input-error/saffron-input-error.component';
import { SaffronInputLabelComponent } from '../_30-saffron-input-label/saffron-input-label.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'saffron-select',
  templateUrl: './saffron-select.component.html',
  styleUrls: ['./saffron-select.component.scss'],
  providers: [],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatOption,
    MatIcon,
    MatSelectTrigger,
    MatLabel,
    MatError,
    MatTooltip,
    MatFormFieldModule,
    MatSelectModule,
    SaffronInputErrorComponent,
    SaffronInputLabelComponent,
    MatCheckboxModule,
  ],
})
export class SaffronSelectComponent<T> implements OnChanges {
  @Input() formGroup!: FormGroup;
  @Input() controlName = '';

  @Input() placeholder!: string;
  @Input() Items!: any[];
  @Input() valueField: string = '';
  @Input() labelField: string = '';
  @Input('tooltip') tooltip: string = '';
  @Input('isMultiple') isMultiple: boolean = false;
  @Input() selectAll: boolean = true;
  @Input('position') position: TooltipPosition = 'above';

  @Output() selectionChange = new EventEmitter<MatSelectChange>();

  defaultText = 'گزینه مورد نظر را انتخاب نمایید';
  selectAllText = 'انتخاب همه';
  selectTriggerTitle: string = '';

  control!: AbstractControl;
  customOptionClass = 'customOptionClass';

  @ViewChild('select')
  select!: MatSelect;

  @ViewChild('selectAllOption')
  selectAllOption!: MatOption;

  allSelected = false;
  allTitles: string = 'همه موارد';
  SaffronSelectAllValue = SaffronSelectAllValue;

  constructor(private chRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setControl(changes);
  }

  private setControl(changes: SimpleChanges) {
    if (changes['formGroup'] || changes['controlName']) {
      this.control = this.formGroup.controls[this.controlName];
      this.checkAllValues();
    }

    if (changes['selectAll']) {
      this.checkAllValues();
    }
  }

  checkAllValues() {
    if (!this.isMultiple || !this.selectAll) {
      return;
    }

    const all = this.Items.map((x) => x[this.valueField] as string);
    if (all.length > 0) {
      this.control.setValue([...all, SaffronSelectAllValue]);
      this.allSelected = true;
    }
  }

  getAllValues() {
    return (this.control.value as string) ?? [];
  }

  OptionChanged(event: any) {
    this.selectionChange.emit(event);
  }

  getValue(item: any) {
    return this.valueField ? item[this.valueField] : item;
  }

  getLabel(item: any) {
    return this.labelField ? item[this.labelField] : item;
  }

  itemSelect() {
    setTimeout(() => {
      this.checkSelectAll();
    }, 0);
  }

  checkSelectAll() {
    const values = (this.control.value as string[]) || [];
    const itemsValues = this.Items.map((x) => x[this.valueField]);
    const filterdValues = values.filter((x) => itemsValues.includes(x));

    this.allSelected = this.Items.length === filterdValues.length;
    if (this.allSelected) {
      this.selectAllOption.select();
    } else {
      this.selectAllOption.deselect();
    }
  }

  toggleAllSelection() {
    const selectedCount = this.getSelectedCount();

    if (selectedCount !== this.Items.length) {
      this.select.options.forEach((item: MatOption) => item.select());
      this.allSelected = true;
    } else {
      this.allSelected = false;
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }

  getSelectedCount() {
    return ((this.control.value as string[]) || []).length;
  }
}
