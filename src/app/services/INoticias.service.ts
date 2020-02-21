import { Observable } from 'rxjs';
import { Noticia } from '../model/noticia';

export interface INoticiasService {


    listar(): Observable<Array<Noticia>>;

    /**
     * Crear nueva noticia
     * @param noticia a dar de alta, sin id
     * @return un Observable con la noticia dada de alta, e ID actualizado
     */
    crear(noticia: Noticia ): Observable<Noticia>;

}