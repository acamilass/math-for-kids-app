import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SuccessDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class ComponentsModule { }
