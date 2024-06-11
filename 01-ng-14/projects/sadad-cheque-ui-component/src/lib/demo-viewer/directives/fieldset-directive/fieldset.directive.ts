import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFieldset]',
})
export class FieldsetDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.boxShadow =
      'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
    this.elementRef.nativeElement.style.borderColor = '#ebebeb';
    this.elementRef.nativeElement.style.borderStyle = 'solid';
    this.elementRef.nativeElement.style.display = 'flex';
    this.elementRef.nativeElement.style.alignItems = 'center';
    this.elementRef.nativeElement.style.justifyContent = 'center';
    this.elementRef.nativeElement.style.width = '100%';
    this.elementRef.nativeElement.style.maxWidth= '100%';
    this.elementRef.nativeElement.style.margin = '0px 1rem';
    this.elementRef.nativeElement.style.borderRadius = '6px';
    this.elementRef.nativeElement.style.minWidth= '0';
    this.elementRef.nativeElement.style.boxSizing= 'border-box';
  }

  @HostBinding('style.height')
  @Input()
  fieldsetHeight: string = 'max-content';
}
