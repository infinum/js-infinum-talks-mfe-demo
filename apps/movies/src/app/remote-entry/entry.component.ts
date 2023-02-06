import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'pmovies-entry',
  template: `<pmovies-nx-welcome></pmovies-nx-welcome>`,
})
export class RemoteEntryComponent {}
