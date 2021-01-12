import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDriverComponent } from './payment-driver.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { DealerFeesComponent } from './dealer-fees/dealer-fees.component';
import { LendersComponent } from './lenders/lenders.component';
import { OtherPaymentSettingComponent } from './other-payment-setting/other-payment-setting.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';

@NgModule({
  declarations: [PaymentDriverComponent, GeneralSettingsComponent
    , DealerFeesComponent, LendersComponent, OtherPaymentSettingComponent, PaymentOptionsComponent],
  exports: [PaymentDriverComponent],
  imports: [
    CommonModule
  ]
})
export class PaymentDriverModule { }
