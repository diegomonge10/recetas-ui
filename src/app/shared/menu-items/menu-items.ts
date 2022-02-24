import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Estadísticas', type: 'link', icon: 'av_timer' },
  { state: 'receta', type: 'link', name: 'Recetas', icon: 'view_comfy' },
  { state: 'valoracion', type: 'link', name: 'Valoración', icon: 'vertical_align_center' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
