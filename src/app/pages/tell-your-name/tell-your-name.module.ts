import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TellYourNameComponent } from './tell-your-name.component';
import { TellYourNameRoutingModule } from './tell-your-name-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TellYourNameComponent
  ],
  imports: [
    CommonModule,
    TellYourNameRoutingModule,
    FormsModule
  ]
})
export class TellYourNameModule { }
