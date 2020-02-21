import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: number;
  tareas: Array<Tarea>;
  tareaSeleccionada: Tarea;

  // mensajes
  mensaje: string;
  showMensaje: boolean;



  constructor(private route: ActivatedRoute, private servicioTarea: TareasService)
  {
    this.id = 0;
    this.tareas = [];
    this.tareaSeleccionada = undefined;

    // mensaje
    this.mensaje = '';
    this.showMensaje = false;
  }

  ngOnInit() {

    
    this.route.params.subscribe(parametros =>{
      console.trace(parametros['idtarea']);
      return this.id = parametros['idtarea'];

    },error => {
      console.warn('No coje el id adecuado %o', error);
      this.mensaje = 'Que No coje el id adecuado!!!';
      this.showMensaje = true;
    });

    this.cargarTareas();
    this.seleccionarTarea(this.id);
  }

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

  seleccionarTarea(id: number){
    this.tareaSeleccionada = this.tareas.find(el =>{
      return el.id === id;
    })
  }

}
