import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetsDoMathModule } from './pages/lets-do-math/lets-do-math.module';
import { TellYourNameModule } from './pages/tell-your-name/tell-your-name.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TellYourNameModule,
    LetsDoMathModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
