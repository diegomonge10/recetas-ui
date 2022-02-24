import { Routes } from '@angular/router';


import { RecetaListComponent } from './receta/receta-list/receta-list.component';
import { RecetaDetailComponent} from './receta/receta-detail/receta-detail.component'
import { RecetaValoracionComponent } from './receta/receta-valoracion/receta-valoracion.component'


export const HomeRoutes: Routes = [  
  {
    path: 'receta',
    component: RecetaListComponent
  },
  {
    path: 'detalle',
    component: RecetaDetailComponent
  },
  {
    path: 'valoracion',
    component: RecetaValoracionComponent
  }
];
