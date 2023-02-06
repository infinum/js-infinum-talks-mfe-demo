import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AuthService } from '@phlex/auth';
import { TVDBService } from '@phlex/tvdb';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'pmovies-movies-list',
  standalone: true,
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  imports: [CommonModule, MovieCardComponent, RouterModule, MatButtonModule],
})
export default class MoviesListComponent {
  public readonly user$ = inject(AuthService).user$;
  public readonly movies$ = inject(TVDBService).fetchAll();
}
