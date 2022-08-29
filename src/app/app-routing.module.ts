import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EventosComponent } from './eventos/eventos.component';
import { TerminosComponent } from './terminos/terminos.component';
import { CarreraComponent } from './carrera/carrera.component';



const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'Ciudadela', component: CarreraComponent,},

  { path: 'terminos', component: TerminosComponent,},

  { path: 'eventos', component: EventosComponent,},

  { path: 'admin', component: AdminComponent,},
  { path: 'login', component: LoginComponent,},
  { path: '**', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
