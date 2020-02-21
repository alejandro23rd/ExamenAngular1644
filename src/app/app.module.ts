import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './general/footer/footer.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NoticiasComponent,
    DetalleComponent,
    FormularioComponent

  ],
  imports: [
    BrowserModule,        //modulo para el navegador
    HttpClientModule,     // Modulo para llamadas por HTTP
    FormsModule,          // Modulo para usar Formularios con bananaInABox
    ReactiveFormsModule,  // Modulo para usar Formularios reactivos
    AppRoutingModule      //Modulo para routear a otras paginas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
