import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/ICharacter';
import { AuthLocalService } from './auth-local.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'user.favorites';

  constructor(private authService: AuthLocalService) {}

  // Obtener los favoritos del usuario actual
  getFavorites(): Character[] {
    const user = this.authService.currentUser();
    if (!user) return [];
    
    const storageKey = `${this.STORAGE_KEY}.${user}`;
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  // Añadir un personaje a favoritos
  addToFavorites(character: Character): void {
    const user = this.authService.currentUser();
    if (!user) return;

    const favorites = this.getFavorites();
    if (!favorites.some(c => c.id === character.id)) {
      favorites.push(character);
      const storageKey = `${this.STORAGE_KEY}.${user}`;
      localStorage.setItem(storageKey, JSON.stringify(favorites));
    }
  }

  // Remover un personaje de favoritos
  removeFromFavorites(characterId: number): void {
    const user = this.authService.currentUser();
    if (!user) return;

    const favorites = this.getFavorites();
    const updated = favorites.filter(c => c.id !== characterId);
    const storageKey = `${this.STORAGE_KEY}.${user}`;
    localStorage.setItem(storageKey, JSON.stringify(updated));
  }

  // Verificar si un personaje está en favoritos
  isFavorite(characterId: number): boolean {
    const favorites = this.getFavorites();
    return favorites.some(c => c.id === characterId);
  }
}