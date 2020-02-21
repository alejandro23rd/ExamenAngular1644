import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: Array<Noticia>;
  tituloNuevo: string;
  fechaNueva: string;
  textoCortoNuevo: string;
  textoLargoNuevo: string;

  // mensajes
  mensaje: string;
  showMensaje: boolean;


  constructor( private servicioNoticia: NoticiasService ) {
    console.trace('NoticiasComponent constructor');
    this.noticias = []; // incializar el array
    this.tituloNuevo = '';
    this.fechaNueva = '';
    this.textoCortoNuevo = '';
    this.textoLargoNuevo = '';

    // mensaje
    this.mensaje = '';
    this.showMensaje = false;

  }// constructor

  ngOnInit() {
    console.trace('NoticiasComponent ngOnInit');

    this.cargarNoticias();

  }// ngOnInit


  nuevaNoticia(): void {
    console.debug('click nueva noticia %s', this.tituloNuevo );
    console.debug('click nueva noticia %s', this.fechaNueva );
    console.debug('click nueva noticia %s', this.textoCortoNuevo );
    console.debug('click nueva noticia %s', this.textoLargoNuevo );

    // comprobar longitud > 1
    if ( this.tituloNuevo.trim().length > 1 && this.textoLargoNuevo.length > 1 ) {

        // crear objeto Tarea
        const nNueva = new Noticia();
        nNueva.titulo = this.tituloNuevo;
        nNueva.fecha = this.fechaNueva;
        nNueva.textoCorto = this.textoCortoNuevo;
        nNueva.textoLargo = this.textoLargoNuevo;
        
        console.debug(nNueva);

        this.servicioNoticia.crear(nNueva).subscribe( data => {
          console.debug('Nueva Noticia creada en json-server %o', data);
          this.tituloNuevo = '';
          this.fechaNueva = '';
          this.textoCortoNuevo = '';
          this.textoLargoNuevo = '';
          
          this.cargarNoticias();
          this.mensaje = 'Noticia Creada con Exito!!!';
          this.showMensaje = true;
        });

    } else {

        this.mensaje = 'Por favor escribe una noticia mas larga';
        this.showMensaje = true;
    }

  }// nuevaNoticia

  private cargarNoticias(): void {
    console.trace('cargarNoticias');

    // llamar al service para obtener tareas
    this.servicioNoticia.listar().subscribe(
      datos => {
        console.debug('esto se ejecuta de forma asincrona');
        this.noticias = datos;
      },
      error => {
        console.warn('Servico Rest no funciona %o', error);
        this.mensaje = 'Servicio Rest No Funciona, posiblemente no lo hayas arrancado!!!';
        this.showMensaje = true;
      });

  }// cargarNoticias


}// NoticiasComponent