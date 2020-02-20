import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleLibroComponent } from './paginas/detalle-libro/detalle-libro.component';
import { ListadoLibroComponent } from './paginas/listado-libro/listado-libro.component';


const routes: Routes = [

    //paginas
    { path: 'detalle-libro',  component: DetalleLibroComponent},
    { path: 'listado-libro',  component: ListadoLibroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
