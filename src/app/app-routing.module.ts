import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosComponent } from './paginas/libros/libros.component';




const routes: Routes = [

    //pagina inicio
    { path: 'libros',  component: LibrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
