import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { Error404Component } from './paginas/error404/error404.component';


const routes: Routes = [

    //pagina inicio
    { path: '',  component: InicioComponent},
    
    //resto de paginas
    { path: 'comparador', component: ComparadorComponent },

    //si no encunetra la url, saca la pagina de error 404
    { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
