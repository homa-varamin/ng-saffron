import { SdcButtonTypes } from '../../models/models.module';

export class SdcModalButton {
  id!: string;
  title!: string;
  buttonType!: SdcButtonTypes;
  disabled?: boolean;
  action?: () => void;
  htmlId?: string;
}
