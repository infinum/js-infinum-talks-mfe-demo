import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AuthService } from '@phlex/auth';
import { TVDBService } from '@phlex/tvdb';
import { CardComponent } from '@phlex/ui';

@Component({
  selector: 'pmovies-movies-list',
  standalone: true,
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  imports: [CommonModule, CardComponent, RouterModule, MatButtonModule],
})
export default class MoviesListComponent {
  public readonly user$ = inject(AuthService).user$;
  public readonly movies$ = inject(TVDBService).fetchAllMovies();
}
