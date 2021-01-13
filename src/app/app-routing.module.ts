import { LandingComponent } from './core/landing/landing.component';
import { MyLeadsComponent } from './my-leads/my-leads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myleads', component: MyLeadsComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
