import { Component, OnInit } from '@angular/core';
import { LIBROS } from 'src/app/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  //variables
  libros: Array<any>;
  libroSeleccionado: any;
  checkDigital: boolean;
  busqueda: String;

  constructor() {
    console.trace('LibrosComponent constructor');
    this.libros = LIBROS;
    this.libroSeleccionado = this.libros[0];
    this.checkDigital = false;
  }//constructor

  ngOnInit() {
    console.trace('LibrosComponent ngOnInit');
  }//ngOnInit

  seleccionarLibro = function (libro) {
    console.log("seleccionarLibro(" + libro.id + " " + libro.titulo + ")");
    
    this.libroSeleccionado = libro;
    }// seleccionarLibro

}
