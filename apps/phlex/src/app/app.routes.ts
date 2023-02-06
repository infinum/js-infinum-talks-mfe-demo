import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
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
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
