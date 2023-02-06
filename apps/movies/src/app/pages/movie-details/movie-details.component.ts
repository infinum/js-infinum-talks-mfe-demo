import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVDBService } from '@phlex/tvdb';
import { switchMap } from 'rxjs';

@Component({
  selector: 'pmovies-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export default class MovieDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly tvdb = inject(TVDBService);

  public readonly movie$ = this.route.paramMap.pipe(
    switchMap((paramMap) => {
      return this.tvdb.fetchOne(paramMap.get('id') ?? '');
    })
  );
}
