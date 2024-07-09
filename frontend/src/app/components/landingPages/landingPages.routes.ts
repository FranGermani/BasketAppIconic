import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const LandingPagesRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { title: 'Homepage' }
  }
];
