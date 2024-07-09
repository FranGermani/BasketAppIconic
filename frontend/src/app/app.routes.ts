import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/landingPages/landingPages.routes').then(m => m.LandingPagesRoutes),
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
    path: 'client-panel',
    loadChildren: () => import('./components/client/client.rutes').then(m => m.ClientRoutes),
    data: {
      title: 'Client Panel'
    }
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./components/admin/admin.routes').then(m => m.AdminRoutes),
    data: {
      title: 'Admin Panel'
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
