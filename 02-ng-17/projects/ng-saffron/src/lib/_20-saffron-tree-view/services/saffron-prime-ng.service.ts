import { Injectable } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class SaffronPrimeNgService {
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true; // enable ripple for buttons
  }
}
