interface INoticia {

    id: number;
    titulo: string;
    imagen: string;
    fecha: string;
    textoCorto: string;
    textoLargo: string;

}

export class Noticia implements INoticia {

    id: number;
    titulo: string;
    imagen: string;
    fecha: string;
    textoCorto: string;
    textoLargo: string;

    constructor() {
        this.id = 0;
        this.titulo = '';
        this.imagen = '';
        this.fecha = '';
        this.textoCorto = '';
        this.textoLargo = '';
    }

}