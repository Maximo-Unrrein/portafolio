import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'about-me',
    loadComponent: () => import('./pages/about-me/about-me.component')
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];
