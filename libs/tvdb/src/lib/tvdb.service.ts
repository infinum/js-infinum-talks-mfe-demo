import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({ providedIn: 'root' })
export class TVDBService {
  private readonly http = inject(HttpClient);

  public fetchAll(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>('/api/movies');
  }

  public fetchOne(id: string): Observable<Movie> {
    return this.http.get<Movie>(`/api/movies/${id}`);
  }
}
