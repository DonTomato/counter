import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CounterPageComponent } from './counter/counter-page/counter-page.component';
import { PwdPageComponent } from './pwd-page/pwd-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CpBarComponent } from './counter/cp-bar/cp-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterPageComponent,
    PwdPageComponent,
    CpBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
