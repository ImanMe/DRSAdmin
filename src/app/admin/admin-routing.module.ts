import { TradeDriverComponent } from './trade-driver/trade-driver.component';
import { PaymentDriverComponent } from './payment-driver/payment-driver.component';
import { FinanceDriverComponent } from './finance-driver/finance-driver.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: FinanceDriverComponent },
    { path: 'financedriver', component: FinanceDriverComponent },
    { path: 'paymentdriver', component: PaymentDriverComponent },
    { path: 'tradedriver', component: TradeDriverComponent },
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
export class AdminRoutingModule { }
