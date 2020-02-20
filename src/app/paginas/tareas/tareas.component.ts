import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  tituloNuevo: string;
  modoEdicion: boolean;

  // mensajes
  mensaje: string;
  showMensaje: boolean;


  constructor( private servicioTarea: TareasService ) {
    console.trace('TareasComponent constructor');
    this.tareas = []; // incializar el array
    this.tituloNuevo = '';
    this.modoEdicion = false;

    // mensaje
    this.mensaje = '';
    this.showMensaje = false;

  }// constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');

    this.cargarTareas();

  }// ngOnInit


  nuevaTarea(): void {
    console.debug('click nueva tarea %s', this.tituloNuevo );

    // comprobar longitud > 1
    if ( this.tituloNuevo.trim().length > 1 && this.tituloNuevo.length > 1 ) {

        // crear objeto Tarea
        const tNueva = new Tarea();
        tNueva.titulo = this.tituloNuevo;
        console.debug(tNueva);

        this.servicioTarea.crear(tNueva).subscribe( data => {
          console.debug('Nueva Tarea creada en json-server %o', data);
          this.tituloNuevo = '';
          this.cargarTareas();
          this.mensaje = 'Tarea Creada con Exito!!!';
          this.showMensaje = true;
        });

    } else {

        this.mensaje = 'Por favor escribe uan tarea mas larga';
        this.showMensaje = true;
    }

  }// nuevaTarea


  /**
   * Llama al Servicio para cargar todas las tareas
   * Nos va  servir para refrescar la lista
   */
  private cargarTareas(): void {
    console.trace('cargarTareas');

    // llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe(
      datos => {
        console.debug('esto se ejecuta de forma asincrona');
        this.tareas = datos;
      },
      error => {
        console.warn('Servico Rest no funciona %o', error);
        this.mensaje = 'Servicio Rest No Funciona, posiblemente no lo hayas arrancado!!!';
        this.showMensaje = true;
      });

  }// cargarTareas


}// TareasComponent