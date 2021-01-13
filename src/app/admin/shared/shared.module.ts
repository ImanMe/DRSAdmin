import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveCloseButtonGroupComponent } from './save-close-button-group/save-close-button-group.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [SaveCloseButtonGroupComponent, PageHeaderComponent],
  exports: [SaveCloseButtonGroupComponent, PageHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
