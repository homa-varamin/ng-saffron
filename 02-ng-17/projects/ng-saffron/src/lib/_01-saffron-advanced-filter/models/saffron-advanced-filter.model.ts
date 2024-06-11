import { default as jalaliMoment } from 'jalali-moment';

export class SaffronAdvancedFilterModel {
  id!: string;
  title!: string;
  controlName!: string;
  dataType!: number;
  min?: number | jalaliMoment.Moment;
  max?: number | jalaliMoment.Moment;
  maxlength?: number;
  showLength?: boolean;
  showNumberToPersian?: boolean;
}
