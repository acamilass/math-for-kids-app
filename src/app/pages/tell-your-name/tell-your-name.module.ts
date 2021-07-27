import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TellYourNameComponent } from './tell-your-name.component';
import { TellYourNameRoutingModule } from './tell-your-name-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    TellYourNameComponent
  ],
  imports: [
    CommonModule,
    TellYourNameRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class TellYourNameModule { }
