import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/homepage/homepage.component').then(m => m.HomepageComponent),
    data: {
      title: 'Homepage'
    }
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.rutes').then(m => m.AuthRoutes),
    data: {
      title: 'Auth'
    }
  },
  {
    path: 'index',
    loadComponent: () => import('./components/configurador/configurador.component').then(m => m.ConfiguradorComponent),
    data: {
      title: 'Hola Mundo'
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
