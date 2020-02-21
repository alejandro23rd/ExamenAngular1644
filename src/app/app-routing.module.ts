import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';


const routes: Routes = [

    //paginas
    { path: 'tareas',  component: TareasComponent},
    { path: 'detalle/:idtarea',  component: DetalleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
