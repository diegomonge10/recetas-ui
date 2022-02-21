import { Routes } from '@angular/router';


import { RecetaListComponent } from './receta/receta-list/receta-list.component';


export const HomeRoutes: Routes = [  
  {
    path: 'receta',
    component: RecetaListComponent
  }
];
