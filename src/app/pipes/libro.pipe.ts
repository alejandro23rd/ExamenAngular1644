import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libroFiltro'
})
export class LibroPipe implements PipeTransform {

  transform(libros: any, checkDigital: boolean, busqueda: string): any {
    
    let resultado = libros;

    console.debug('checkDigital', checkDigital);
    console.debug('busqueda', busqueda);
    
    // filtrar recetas sin gluten
    if ( checkDigital ) {
        resultado = resultado.filter( (el) => el.checkDigital );
    }

    // filtrar por nombre receta o nombre cocinero o ingredientes
    if ( busqueda && '' !== busqueda) {

      busqueda = busqueda.toLowerCase();
    
      resultado = resultado.filter( (el) => {
          const categorias = el.categorias.reduce( (c, p) => c + p , '');
          const encontrar = (el.titulo + el.autor + categorias ).toLowerCase();
          return encontrar.includes(busqueda);
      });
    
    }
    
    return resultado;

  }

}
