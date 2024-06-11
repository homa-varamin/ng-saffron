import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SaffronCurrencyMaskDirective} from "./saffron-currency-mask.directive";
import {CURRENCY_MASK_CONFIG, CurrencyMaskConfig} from "./saffron-currency-mask.config";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ SaffronCurrencyMaskDirective ],
  exports: [ SaffronCurrencyMaskDirective ]
})
export class SaffronCurrencyModule {
  static forRoot(config: CurrencyMaskConfig): ModuleWithProviders<SaffronCurrencyModule> {
    return {
      ngModule: SaffronCurrencyModule,
      providers: [{
        provide: CURRENCY_MASK_CONFIG,
        useValue: config,
      }]
    }
  }
}
