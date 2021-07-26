import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetsDoMathComponent } from './lets-do-math.component';
import { LetsDoMathRoutingModule } from './lets-do-math-routing.module';

@NgModule({
  declarations: [
    LetsDoMathComponent
  ],
  imports: [
    CommonModule,
    LetsDoMathRoutingModule
  ]
})
export class LetsDoMathModule { }
