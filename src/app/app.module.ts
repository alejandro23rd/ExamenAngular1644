import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './general/footer/footer.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LibrosComponent } from './paginas/libros/libros.component';
import { Error404Component } from './paginas/error404/error404.component';
import { LibroPipe } from './pipes/libro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    LibrosComponent,
    Error404Component,
    LibroPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
