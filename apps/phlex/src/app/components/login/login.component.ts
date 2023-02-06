import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '@phlex/auth';
import { catchError, finalize, throwError } from 'rxjs';

@Component({
  selector: 'phlex-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  public readonly form = createLoginForm();
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.form.disable();

    const { email, password } = this.form.getRawValue();

    this.authService
      .logIn(email, password)
      .pipe(
        catchError((e) => {
          if (e instanceof HttpErrorResponse) {
            alert(e.message);
          }

          return throwError(() => e);
        }),
        finalize(() => {
          this.form.enable();
        })
      )
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}

function createLoginForm() {
  const fb = inject(FormBuilder).nonNullable;

  return fb.group({
    email: fb.control('', [Validators.required, Validators.email]),
    password: fb.control('', [Validators.required]),
  });
}
