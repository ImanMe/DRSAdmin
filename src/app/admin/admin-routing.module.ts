import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            { path: 'paymentdriver', loadChildren: () => import('../admin/payment-driver/payment-driver.module').then(mod => mod.PaymentDriverModule) },
            { path: 'financedriver', loadChildren: () => import('../admin/finance-driver/finance-driver.module').then(mod => mod.FinanceDriverModule) },
            { path: 'tradedriver', loadChildren: () => import('../admin/trade-driver/trade-driver.module').then(mod => mod.TradeDriverModule) }
        ]
    },
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
