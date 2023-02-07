import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import { environment } from './environments/environment';

import { worker } from '@phlex/mocks';

if (environment.production) {
  enableProdMode();
}

worker.start().then(() => {
  bootstrapApplication(RemoteEntryComponent, {
    providers: [
      importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(
        RouterModule.forRoot(appRoutes, {
          initialNavigation: 'enabledBlocking',
        })
      ),
      importProvidersFrom(HttpClientModule),
    ],
  });
});
