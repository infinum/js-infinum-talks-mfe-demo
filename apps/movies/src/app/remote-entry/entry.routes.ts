import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../pages/movies-list/movies-list.component'),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('../pages/movie-details/movie-details.component'),
      },
    ],
  },
];
