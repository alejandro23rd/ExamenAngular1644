import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';


const routes: Routes = [

    //paginas
    { path: '', redirectTo: '/noticias', pathMatch: 'full' },
    { path: 'noticias',  component: NoticiasComponent},
    { path: 'detalle/:idnoticia',  component: DetalleComponent},
    { path: 'formulario',  component: FormularioComponent},
    { path: '**', redirectTo: '/noticias'}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
