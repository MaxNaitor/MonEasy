import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoRegistrazioneComponent } from './accesso-registrazione/accesso-registrazione.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'registrazione', component: AccessoRegistrazioneComponent},
  {path: 'accesso', component: AccessoRegistrazioneComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
