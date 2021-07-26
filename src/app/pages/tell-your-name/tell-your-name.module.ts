import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TellYourNameComponent } from './tell-your-name.component';
import { TellYourNameRoutingModule } from './tell-your-name-routing.module';

@NgModule({
  declarations: [
    TellYourNameComponent
  ],
  imports: [
    CommonModule,
    TellYourNameRoutingModule
  ]
})
export class TellYourNameModule { }
