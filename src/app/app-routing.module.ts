import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { PwdPageComponent } from './pwd-page/pwd-page.component';


const routes: Routes = [
  { path: '', component: CounterPageComponent },
  { path: 'pwd', component: PwdPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
