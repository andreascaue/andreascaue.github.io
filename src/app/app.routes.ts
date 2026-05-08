import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page').then(m => m.HomePage),
    title: 'Andreas Magalhaes — Software Engineering',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page').then(m => m.AboutPage),
    title: 'About — Andreas Magalhaes',
  },
  {
    path: 'articles',
    loadComponent: () => import('./pages/articles/articles-page').then(m => m.ArticlesPage),
    title: 'Writing — Andreas Magalhaes',
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses-page').then(m => m.CoursesPage),
    title: 'Courses — Andreas Magalhaes',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects-page').then(m => m.ProjectsPage),
    title: 'Projects — Andreas Magalhaes',
  },
  { path: '**', redirectTo: '' },
];
