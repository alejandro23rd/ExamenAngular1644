import { Observable } from 'rxjs';
import { Tarea } from '../model/tarea';

export interface ITareasService {


    listar(): Observable<Array<Tarea>>;

    /**
     * Crear nueva tarea
     * @param tarea a dar de alta, sin id
     * @return un Observable con la tarea dada de alta, e ID actualizado
     */
    crear(tarea: Tarea ): Observable<Tarea>;

}