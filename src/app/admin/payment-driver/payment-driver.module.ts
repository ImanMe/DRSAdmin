import { SharedModule } from './../shared/shared.module';
import { PaymentDriverRoutingModule } from './payment-driver-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDriverComponent } from './payment-driver.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { LendersComponent } from './lenders/lenders.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { OtherPaymentSettingsComponent } from './other-payment-settings/other-payment-settings.component';
import { DealerFeesComponent } from './dealer-fees/dealer-fees.component';
import { PageElementsComponent } from './general-settings/page-elements/page-elements.component';
import { FinanceDriverButtonsComponent } from './general-settings/finance-driver-buttons/finance-driver-buttons.component';
import { LowestPaymentWidgetComponent } from './general-settings/lowest-payment-widget/lowest-payment-widget.component';

@NgModule({
  declarations: [PaymentDriverComponent, GeneralSettingsComponent, LendersComponent, PaymentOptionsComponent, OtherPaymentSettingsComponent, DealerFeesComponent, PageElementsComponent, FinanceDriverButtonsComponent, LowestPaymentWidgetComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PaymentDriverRoutingModule
  ]
})

export class PaymentDriverModule { }
