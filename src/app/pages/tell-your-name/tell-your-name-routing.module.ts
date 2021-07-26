import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TellYourNameComponent } from './tell-your-name.component';

const routes: Routes = [
  {
    path: '',
    component: TellYourNameComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TellYourNameRoutingModule { }
