import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosComponent } from './paginas/libros/libros.component';
import { TareasComponent } from './paginas/tareas/tareas.component';




const routes: Routes = [

    //paginas
    { path: 'libros',  component: LibrosComponent},
    { path: 'tareas',  component: TareasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
