import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../model/noticia';
import { INoticiasService } from './INoticias.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService implements INoticiasService {

  constructor( private http: HttpClient ) {
    console.trace('NoticiasService constructor');

  }// constructor

  listar(): Observable<any> {

    const url = 'http://localhost:3000/noticias';
    console.debug(`GET ${url}`);

    return this.http.get(url);

  }
  
  crear(noticia: Noticia): Observable<Noticia> {
    const url = `http://localhost:3000/noticias/`;
    console.debug('POST %s noticia %o', url, noticia);
    return this.http.post<Noticia> (url, noticia);

  }

}// TareasService