import { MyLeadsModule } from './my-leads/my-leads.module';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    AdminModule,
    MyLeadsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
