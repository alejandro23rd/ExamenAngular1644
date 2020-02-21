import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  tituloNuevo: string;
  autorNuevo: string;

    // mensajes
    mensaje: string;
    showMensaje: boolean;

  constructor(private servicioTarea: TareasService) {
    this.tituloNuevo = '';
    this.autorNuevo = '';

        // mensaje
        this.mensaje = '';
        this.showMensaje = false;
  }

  ngOnInit() {

  }

  nuevaTarea(): void {
    console.debug('click nueva tarea %s', this.tituloNuevo );
    console.debug('click nueva tarea %s', this.autorNuevo );

    // comprobar longitud > 1
    if ( this.tituloNuevo.trim().length > 1 && this.autorNuevo.length > 1 ) {

        // crear objeto Tarea
        const tNueva = new Tarea();
        tNueva.titulo = this.tituloNuevo;
        tNueva.autor = this.autorNuevo;
        console.debug(tNueva);

        this.servicioTarea.crear(tNueva).subscribe( data => {
          console.debug('Nueva Tarea creada en json-server %o', data);
          this.tituloNuevo = '';
          this.autorNuevo = '';
          this.mensaje = 'Tarea Creada con Exito!!!';
          this.showMensaje = true;
        });

    } else {

        this.mensaje = 'Por favor escribe uan tarea mas larga';
        this.showMensaje = true;
    }

  }// nuevaTarea

}
