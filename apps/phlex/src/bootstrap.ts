import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideLocalStorage } from '@phlex/util';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

import { worker } from './mocks/browser';

worker.start().then(() => {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
      importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(HttpClientModule),
      provideLocalStorage(),
    ],
  }).catch((err) => console.error(err));
});
