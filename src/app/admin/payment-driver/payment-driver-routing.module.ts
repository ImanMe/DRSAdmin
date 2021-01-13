import { OtherPaymentSettingsComponent } from './other-payment-settings/other-payment-settings.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { LendersComponent } from './lenders/lenders.component';
import { DealerFeesComponent } from './dealer-fees/dealer-fees.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: GeneralSettingsComponent },
    { path: 'generalsettings', component: GeneralSettingsComponent },
    { path: 'fees', component: DealerFeesComponent },
    { path: 'lenders', component: LendersComponent },
    { path: 'otherpaymentsettings', component: OtherPaymentSettingsComponent },
    { path: 'paymentoptions', component: PaymentOptionsComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PaymentDriverRoutingModule { }
