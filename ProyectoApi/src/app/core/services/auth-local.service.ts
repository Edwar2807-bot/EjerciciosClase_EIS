import { Injectable } from '@angular/core';

export interface SimpleUser { username: string; password: string; }
const LS_KEY = 'simple.auth.user'; // donde guardamos usuario/clave

@Injectable({ providedIn: 'root' })
export class AuthLocalService {
  saveCredentials(user: SimpleUser) {
    localStorage.setItem(LS_KEY, JSON.stringify(user));
  }

  getCredentials(): SimpleUser | null {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) as SimpleUser : null;
  }

  login(username: string, password: string): boolean {
    const saved = this.getCredentials();
    return !!saved && saved.username === username && saved.password === password;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('simple.auth.session');
  }

  startSession(username: string) {
    sessionStorage.setItem('simple.auth.session', username);
  }

  endSession() {
    sessionStorage.removeItem('simple.auth.session');
  }

  currentUser(): string | null {
    return sessionStorage.getItem('simple.auth.session');
  }
}
