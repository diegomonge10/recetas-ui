export class Receta {
    constructor (
        public id?: string,
        public nombre?: string,
        public porciones?: string,
        public valoracion?: string,
        public ingredientes?: Ingrediente[]

    ) {}
  }


  export class Ingrediente {
    constructor (
      public nombre: string,
      public cantidad: string
    ) {}
  }
