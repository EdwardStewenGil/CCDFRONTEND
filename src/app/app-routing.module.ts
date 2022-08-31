import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EventosComponent } from './eventos/eventos.component';
import { TerminosComponent } from './terminos/terminos.component';
import { CarreraComponent } from './carrera/carrera.component';
import { FutbolComponent } from './futbol/futbol.component';
import { VoleibolComponent } from './voleibol/voleibol.component';



const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'Ciudadela', component: CarreraComponent, },
  { path: 'Futbol', component: FutbolComponent, },
  { path: 'Voleibol', component: VoleibolComponent, },


  { path: 'terminos', component: TerminosComponent, },

  { path: 'eventos', component: EventosComponent, },

  { path: 'admin', component: AdminComponent, },
  { path: '**', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
