import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { Show } from './show';

@Injectable({ providedIn: 'root' })
export class TVDBService {
  private readonly http = inject(HttpClient);

  public fetchAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>('/api/movies');
  }

  public fetchOneMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`/api/movies/${id}`);
  }

  public fetchRandomShow(): Observable<Show> {
    return this.http.get<Show>('/api/shows/random');
  }
}
