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
    if ( this.tituloNuevo.trim().length > 2 && this.tituloNuevo.length < 10 )
    {
      if ( this.textoCortoNuevo.trim().length > 2 && this.textoCortoNuevo.length < 15 )
      {
        if ( this.textoLargoNuevo.trim().length > 3 && this.textoLargoNuevo.length < 20 )
        {

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
        }
        else {
    
            this.mensaje = 'La descripcion debe estar entre 3 y 20 caracteres';
            this.showMensaje = true;
        }//validacion descripcion
      }
      else {
  
          this.mensaje = 'El subtitulo debe estar entre 2 y 15 caracteres';
          this.showMensaje = true;
      }  //validacion subtitulo
    }
    else {

        this.mensaje = 'El titulo debe estar entre 2 y 10 caracteres';
        this.showMensaje = true;
    } //validacion titulo
  }// nuevaNoticia
}//FormularioComponent
