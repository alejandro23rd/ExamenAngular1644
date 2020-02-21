import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: number;
  noticias: Array<Noticia>;
  noticiaSeleccionada: Noticia;

  // mensajes
  mensaje: string;
  showMensaje: boolean;

  constructor(private route: ActivatedRoute, private servicioNoticia: NoticiasService)
  {
    this.id = 0;
    this.noticias = [];
    this.noticiaSeleccionada = undefined;

    // mensaje
    this.mensaje = '';
    this.showMensaje = false;
  }

  ngOnInit() {
    
    this.route.params.subscribe(parametros =>{
      console.trace(parametros['idnoticia']);
      return this.id = +parametros['idnoticia'];

    },error => {
      console.warn('No coje el id adecuado %o', error);
      this.mensaje = 'El id no existe';
      this.showMensaje = true;
    });

    this.cargarNoticias();
  }

  private cargarNoticias(): void {
    console.trace('cargarNoticias');

    // llamar al service para obtener tareas
    this.servicioNoticia.listar().subscribe(
      datos => {
        console.debug('esto se ejecuta de forma asincrona');
        this.noticias = datos;

        this.noticiaSeleccionada = this.noticias.find(el =>{
          console.debug('seleccionando noticia');
          return el.id === this.id;
        });
      },
      error => {
        console.warn('Servico Rest no funciona %o', error);
        this.mensaje = 'Servicio Rest No Funciona, posiblemente no lo hayas arrancado!!!';
        this.showMensaje = true;
      });

  }// cargarNoticias

}
