import { Provider } from '@angular/core';
import { STORAGE } from './injection-tokens';

export function provideLocalStorage(): Provider {
  return {
    provide: STORAGE,
    useValue: localStorage,
  };
}
