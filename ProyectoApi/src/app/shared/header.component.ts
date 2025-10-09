import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthLocalService } from '../core/services/auth-local.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <div class="ms-auto d-flex align-items-center gap-3">
        <span class="small text-secondary" *ngIf="user">Hola, {{ user }}</span>
        <a class="btn btn-sm btn-outline-light" routerLink="/auth/login" *ngIf="!user">Login</a>
        <a class="btn btn-sm btn-outline-light" routerLink="/auth/save" *ngIf="!user">Register</a>
        <button class="btn btn-sm btn-outline-danger" (click)="logout()" *ngIf="user">Salir</button>
      </div>
    </div>
  </nav>
  `
})
export class HeaderComponent {
  get user() { return this.auth.currentUser(); }
  constructor(private auth: AuthLocalService, private router: Router){}
  logout(){ this.auth.endSession(); this.router.navigateByUrl('/auth/login'); }
}
