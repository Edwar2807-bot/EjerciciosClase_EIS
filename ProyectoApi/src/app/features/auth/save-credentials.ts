import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthLocalService } from '../../core/services/auth-local.service';

@Component({
  selector: 'app-save-credentials',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <div class="container py-5 d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4" style="max-width:420px;width:100%;">
      <h4 class="mb-3 fw-bold">Guardar credenciales</h4>
      <p class="text-secondary small">Esto sobrescribe el usuario/clave en tu navegador.</p>

      <form (ngSubmit)="save()">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input class="form-control bg-dark text-light border-secondary" [(ngModel)]="username" name="username" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Clave</label>
          <input type="password" class="form-control bg-dark text-light border-secondary" [(ngModel)]="password" name="password" required>
        </div>

        <button class="btn btn-portal w-100" type="submit">Guardar</button>
      </form>

      <div class="mt-3 small">
        <a routerLink="/auth/login" class="link-light">Ir a Login</a>
      </div>

      <div *ngIf="ok" class="alert alert-success mt-3 py-2 small">Credenciales guardadas ✅</div>
    </div>
  </div>
  `
})
export class SaveCredentialsComponent {
  username = '';
  password = '';
  ok = false;

  constructor(private auth: AuthLocalService){}

  save(){
    this.auth.saveCredentials({ username: this.username.trim(), password: this.password });
    this.ok = true;
  }
}
