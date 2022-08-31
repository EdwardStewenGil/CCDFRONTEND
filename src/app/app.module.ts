import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { EventosComponent } from './eventos/eventos.component';
import { TerminosComponent } from './terminos/terminos.component';
import { CarreraComponent } from './carrera/carrera.component';
import { LugaresComponent } from './lugares/lugares.component';
import { Lugar1Component } from './lugar1/lugar1.component';
import { Lugar2Component } from './lugar2/lugar2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { FutbolComponent } from './futbol/futbol.component';
import { VoleibolComponent } from './voleibol/voleibol.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    EventosComponent,
    TerminosComponent,
    CarreraComponent,
    LugaresComponent,
    Lugar1Component,
    Lugar2Component,
    NavbarComponent,
    ContactoComponent,
    FooterComponent,
    FutbolComponent,
    VoleibolComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
