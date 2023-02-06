import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@phlex/auth';

@Component({
  selector: 'phlex-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export default class WelcomeComponent {
  public readonly user$ = inject(AuthService).user$;
}
