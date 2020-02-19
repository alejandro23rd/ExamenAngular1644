import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './general/footer/footer.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { LibrosComponent } from './paginas/libros/libros.component';
import { LibroPipe } from './pipes/libro.pipe';
import { TareasComponent } from './paginas/tareas/tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LibrosComponent,
    LibroPipe,
    TareasComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Modulo para llamadas por HTTP
    FormsModule,      // Modulo para usar Formularios con bananaInABox
    ReactiveFormsModule, // Modulo para usar Formularios reactivos
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
