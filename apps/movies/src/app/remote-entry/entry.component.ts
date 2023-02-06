import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'pmovies-entry',
  template: `Movies`,
})
export class RemoteEntryComponent {}
