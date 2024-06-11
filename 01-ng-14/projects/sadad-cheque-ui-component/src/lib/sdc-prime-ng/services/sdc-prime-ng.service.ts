import { Injectable } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Injectable()
export class SdcPrimeNgService {
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true; // enable ripple for buttons
  }
}
