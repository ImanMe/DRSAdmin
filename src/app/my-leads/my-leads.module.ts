import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLeadsComponent } from './my-leads.component';



@NgModule({
  declarations: [MyLeadsComponent],
  exports: [MyLeadsComponent],
  imports: [
    CommonModule
  ]
})
export class MyLeadsModule { }
