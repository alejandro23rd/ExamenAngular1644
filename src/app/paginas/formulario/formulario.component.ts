import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  tituloNuevo: string;
  fechaNueva: string;
  imagenNueva: string;
  textoCortoNuevo: string;
  textoLargoNuevo: string;


  // mensajes
  mensaje: string;
  showMensaje: boolean;

  constructor(private servicioNoticia: NoticiasService) {

    this.tituloNuevo = '';
    this.imagenNueva = '';
    this.fechaNueva = '';
    this.textoCortoNuevo = '';
    this.textoLargoNuevo = '';

    // mensaje
    this.mensaje = '';
    this.showMensaje = false;
  }

  ngOnInit() {

  }

  nuevaNoticia(): void {
    console.debug('click nueva noticia %s', this.tituloNuevo );
    console.debug('click nueva noticia %s', this.imagenNueva );
    console.debug('click nueva noticia %s', this.fechaNueva );
    console.debug('click nueva noticia %s', this.textoCortoNuevo );
    console.debug('click nueva noticia %s', this.textoLargoNuevo );

    // comprobar longitud > 1
    if ( this.tituloNuevo.trim().length > 1 && this.textoLargoNuevo.length > 1 ) {

        // crear objeto Tarea
        const nNueva = new Noticia();
        nNueva.titulo = this.tituloNuevo;
        nNueva.imagen = this.imagenNueva;
        nNueva.fecha = this.fechaNueva;
        nNueva.textoCorto = this.textoCortoNuevo;
        nNueva.textoLargo = this.textoLargoNuevo;

        console.debug(nNueva);

        this.servicioNoticia.crear(nNueva).subscribe( data => {
          console.debug('Nueva Noticia creada en json-server %o', data);
          this.tituloNuevo = '';
          this.imagenNueva = '';
          this.fechaNueva = '';
          this.textoCortoNuevo = '';
          this.textoLargoNuevo = '';
          this.mensaje = 'Noticia Creada con Exito!!!';
          this.showMensaje = true;
        });

    } else {

        this.mensaje = 'Por favor escribe una noticia mas larga';
        this.showMensaje = true;
    }
  }// nuevaNoticia
}//FormularioComponent
