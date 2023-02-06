import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./components/welcome/welcome.component'),
  },
  {
    path: 'shows',
    loadChildren: () =>
      loadRemoteModule('shows', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'movies',
    loadChildren: () =>
      loadRemoteModule('movies', './Routes').then((m) => m.remoteRoutes),
  },
];
