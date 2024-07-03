import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AuthRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];
// {
//   path: '',
//   loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
//   data: {
//     title: 'Login Page'
//   }
// },
// {
//   path: 'register',
//   loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
//   data: {
//     title: 'Register Page'
//   }
// }