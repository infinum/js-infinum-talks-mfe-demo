import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Movie } from '@phlex/tvdb';

@Component({
  selector: 'pmovies-movie-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() public movie: Movie | null = null;
}
