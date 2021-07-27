import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetsDoMathComponent } from './lets-do-math.component';
import { LetsDoMathRoutingModule } from './lets-do-math-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    LetsDoMathComponent,
  ],
  imports: [
    CommonModule,
    LetsDoMathRoutingModule,
    ComponentsModule
  ]
})
export class LetsDoMathModule { }
