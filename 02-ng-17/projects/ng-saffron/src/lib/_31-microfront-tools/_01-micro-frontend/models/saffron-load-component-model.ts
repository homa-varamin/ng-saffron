import { ChangeDetectorRef, Injector, ViewContainerRef } from '@angular/core';

export class SaffronLoadComponentModel {
  remoteEntry!: string;
  remoteName!: string;
  exposedModule!: string;
  componentName!: string;
  injector!: Injector;
  chRef!: ChangeDetectorRef;
  componentContainerRef!: ViewContainerRef;
}
