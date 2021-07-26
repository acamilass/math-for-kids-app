import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetsDoMathComponent } from './lets-do-math.component';

const routes: Routes = [
  {
    path: '',
    component: LetsDoMathComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetsDoMathRoutingModule { }
