import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tell-your-name/tell-your-name.module').then(m => m.TellYourNameModule)
  },
  {
    path: 'continhas',
    loadChildren: () => import('./pages/lets-do-math/lets-do-math.module').then(m => m.LetsDoMathModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
