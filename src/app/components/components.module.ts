import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alerts/alert/alert.component';
import { AlertService } from './alerts/alert-message.service';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AlertComponent
  ],
  providers: [
    AlertService
  ]
})
export class ComponentsModule { }
