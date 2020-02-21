import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';


const routes: Routes = [

    //paginas
    { path: '', redirectTo: '/tareas', pathMatch: 'full' },
    { path: 'tareas',  component: TareasComponent},
    { path: 'detalle/:idtarea',  component: DetalleComponent},
    { path: 'formulario',  component: FormularioComponent},
    { path: '**', redirectTo: '/tareas'}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
