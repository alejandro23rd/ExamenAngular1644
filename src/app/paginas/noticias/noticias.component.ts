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
  imagenNueva: string;
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
    this.imagenNueva = '';
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