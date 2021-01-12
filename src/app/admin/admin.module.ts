import { AdminRoutingModule } from './admin-routing.module';
import { FinanceDriverModule } from './finance-driver/finance-driver.module';
import { TradeDriverModule } from './trade-driver/trade-driver.module';
import { RouterModule } from '@angular/router';
import { PaymentDriverModule } from './payment-driver/payment-driver.module';
import { CoreModule } from '../admin/core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminComponent],
  exports: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    PaymentDriverModule,
    TradeDriverModule,
    FinanceDriverModule
  ]
})
export class AdminModule { }
