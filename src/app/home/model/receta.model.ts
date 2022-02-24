export class Receta {
    constructor (
        public id?: number,
        public nombre?: string,
        public porciones?: number,
        public valoracion?: string,
        public ingredientes?: Ingrediente[],
        public pasos?: Paso[]
    ) {}
  }


export class Ingrediente {
    constructor (
      public nombre: string,
      public cantidad: number,
      public unidad: string
    ) {}
}

export class Paso {
  constructor (
    public orden: number,
    public descipcioin: string
  ) {}
}
