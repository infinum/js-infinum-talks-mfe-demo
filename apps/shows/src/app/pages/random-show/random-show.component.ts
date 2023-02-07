import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TVDBService } from '@phlex/tvdb';

@Component({
  selector: 'pshows-random-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-show.component.html',
  styleUrls: ['./random-show.component.scss'],
})
export default class RandomShowComponent {
  private readonly tvdb = inject(TVDBService);
  public readonly show$ = this.tvdb.fetchRandomShow();
}
