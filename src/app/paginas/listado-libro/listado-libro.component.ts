import { Component, OnInit } from '@angular/core';
import { LIBROS } from 'src/app/libros';

@Component({
  selector: 'app-listado-libro',
  templateUrl: './listado-libro.component.html',
  styleUrls: ['./listado-libro.component.scss']
})
export class ListadoLibroComponent implements OnInit {

//variables
libros: Array<any>;
libroSeleccionado: any;
busqueda1: String;
busqueda2: String;

constructor() {
  console.trace('LibrosComponent constructor');
  this.libros = LIBROS;
  this.libroSeleccionado = this.libros[0];
}//constructor

ngOnInit() {
  console.trace('LibrosComponent ngOnInit');
}//ngOnInit

//funcion para seleccionar libro
seleccionarLibro = function (libro) {
  console.log("seleccionarLibro(" + libro.id + " " + libro.title + ")");
  
  this.libroSeleccionado = libro;
}// seleccionarLibro

}
