import { environment } from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import { appRoutes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(RemoteEntryComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })
    ),
  ],
});
