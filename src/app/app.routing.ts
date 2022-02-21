import { Routes } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'recetas',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./home/home.module').then(m => m.HomeComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
