export class SaffronModalButton {
  id!: string;
  title!: string;
  /**
   * SaffronButtonTypes
   */
  buttonType!: string | null | undefined;
  disabled?: boolean;
  action?: () => void;
  htmlId?: string;
}
