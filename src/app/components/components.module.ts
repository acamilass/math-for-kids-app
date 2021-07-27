import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alerts/alert/alert.component';
import { AlertService } from './alerts/alert-message.service';
import { ChangeThemeComponent } from './change-theme/change-theme.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertComponent,
    ChangeThemeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    ChangeThemeComponent
  ],
  providers: [
    AlertService
  ]
})
export class ComponentsModule { }
