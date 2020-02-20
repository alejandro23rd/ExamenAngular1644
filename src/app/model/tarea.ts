interface ITarea {

    id: number;
    titulo: string;
    autor: string;

}

export class Tarea implements ITarea {

    id: number;
    titulo: string;
    autor: string;

    constructor() {
        this.id = 0;
        this.titulo = '';
        this.autor = '';
    }

}