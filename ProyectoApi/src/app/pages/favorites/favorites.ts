import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FavoritesService } from '../../core/services/favorites.service';
import { AuthLocalService } from '../../core/services/auth-local.service';
import { Character } from '../../core/Interfaces/ICharacter';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class Favorites implements OnInit {
  favorites: Character[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private authService: AuthLocalService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      return;
    }
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(character: Character) {
    this.favoritesService.removeFromFavorites(character.id);
    this.loadFavorites();
  }
}
