import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthLocalService } from '../../core/services/auth-local.service';

@Component({
  selector: 'app-login-simple',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <div class="container py-5 d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4" style="max-width:400px;width:100%;">
      <div class="text-center mb-3">
        <h4 class="fw-bold">Login</h4>
        <p class="small text-secondary">Valida contra credenciales guardadas en este navegador.</p>
      </div>

      <form (ngSubmit)="submit()">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input class="form-control bg-dark text-light border-secondary" [(ngModel)]="username" name="username" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Clave</label>
          <input type="password" class="form-control bg-dark text-light border-secondary" [(ngModel)]="password" name="password" required>
        </div>

        <button class="btn btn-portal w-100" [disabled]="loading" type="submit">
          {{ loading ? 'Validando…' : 'Ingresar' }}
        </button>
      </form>

      <div class="d-flex justify-content-between mt-3 small">
        <a routerLink="/auth/save" class="link-light">Guardar/Editar credenciales</a>
        <a (click)="fillDemo()" class="link-light" role="button">Rellenar demo</a>
      </div>

      <div *ngIf="error" class="alert alert-danger mt-3 py-2 small">{{ error }}</div>
    </div>
  </div>
  `
})
export class LoginSimpleComponent {
  username = '';
  password = '';
  loading = false;
  error = '';

  constructor(private auth: AuthLocalService, private router: Router) {}

  submit() {
    this.error = '';
    this.loading = true;

    // pequeña simulación de latencia
    setTimeout(() => {
      const ok = this.auth.login(this.username.trim(), this.password);
      this.loading = false;
      if (ok) {
        this.auth.startSession(this.username.trim());
        this.router.navigateByUrl('/'); // ir a home
      } else {
        this.error = 'Usuario o clave inválidos (o no guardados).';
      }
    }, 350);
  }

  fillDemo() {
    const saved = this.auth.getCredentials();
    if (saved) {
      this.username = saved.username;
      this.password = saved.password;
    } else {
      this.username = 'demo';
      this.password = '123456';
    }
  }
}
