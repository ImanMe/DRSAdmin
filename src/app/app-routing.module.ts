import { LandingComponent } from './core/landing/landing.component';
import { MyLeadsComponent } from './my-leads/my-leads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDriverComponent } from './admin/payment-driver/payment-driver.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myleads', component: MyLeadsComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
