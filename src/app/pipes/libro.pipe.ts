import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libroFiltro'
})
export class LibroPipe implements PipeTransform {

  transform(libros: any, busqueda: string): any {
    
    //variable
    let resultado = libros;

    console.debug('busqueda', busqueda);

    // filtrar por titulo y isbn
    if ( busqueda && '' !== busqueda) {

      busqueda = busqueda.toLowerCase();
    
      resultado = resultado.filter( (el) => {
          const encontrar = (el.title + el.isbn).toLowerCase();
          return encontrar.includes(busqueda);
      });  
    }
    return resultado;
  }//transform
}
