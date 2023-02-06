import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { STORAGE } from '@phlex/util';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './user';

const STORAGE_KEY = 'infinum-mfe-demo:user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly storage = inject(STORAGE);

  private readonly _user$ = new BehaviorSubject<null | User>(
    this.getInitialUser()
  );
  public readonly user$ = this._user$.asObservable();

  public logIn(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/login', { email, password }).pipe(
      tap((user) => {
        this.storage.setItem(STORAGE_KEY, JSON.stringify(user));
        this._user$.next(user);
      })
    );
  }

  public logOut() {
    this.storage.removeItem(STORAGE_KEY);
    this._user$.next(null);
  }

  private getInitialUser(): User | null {
    try {
      return JSON.parse(this.storage.getItem(STORAGE_KEY) ?? 'null');
    } catch {
      return null;
    }
  }
}
