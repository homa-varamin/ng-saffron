import { SdcLoaderComponent } from './sdc-loader.component';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SdcLoaderService {
  private spinner!: HTMLElement;
  private targetId?: string = undefined;
  private isInjected: boolean = false;
  private static rootViewContainerRef: ViewContainerRef;

  public setRootViewContainerRef(rootViewContainerRef: ViewContainerRef) {
    if (!SdcLoaderService.rootViewContainerRef) {
      SdcLoaderService.rootViewContainerRef = rootViewContainerRef;
    }
  }

  public open(targetId?: string): void {
    if (!SdcLoaderService.rootViewContainerRef) {
      return;
    }

    this.injectLoaderToDom();
    this.targetId = targetId;

    this.spinner =
      this.spinner ??
      (document.getElementById('spinner-container') as HTMLElement);
    const spinnerParent = this.spinner.parentNode;
    spinnerParent?.removeChild(this.spinner);

    const target = this.getTarget();
    target.appendChild(this.spinner);
    this.spinner.style.display = 'block';
  }

  private injectLoaderToDom(): void {
    if (!this.isInjected) {
      SdcLoaderService.rootViewContainerRef.createComponent(SdcLoaderComponent);
      this.isInjected = true;
    }
  }

  public close(): void {
    if (this.spinner) {
      const target = this.spinner.parentNode;
      this.spinner.style.display = 'none';
      target?.removeChild(this.spinner);
    }
  }

  public showTempLoading(time: number = 500): Promise<void> {
    const promise = new Promise<void>((resolve) => {
      this.open();

      setTimeout(() => {
        this.close();
        resolve();
      }, time);
    });

    return promise;
  }

  private getTarget(): HTMLElement {
    const target = this.targetId
      ? (document.getElementById(this.targetId) as HTMLElement)
      : (document.getElementsByTagName('BODY')[0] as HTMLElement);

    return target;
  }
}
