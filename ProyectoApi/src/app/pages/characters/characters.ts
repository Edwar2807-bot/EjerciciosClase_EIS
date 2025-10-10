import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../core/services/rick-and-morty.service';
import { FormsModule } from '@angular/forms';
import { Character } from '../../core/Interfaces/ICharacter';
import { CharactersResponse } from '../../core/Interfaces/ICharacterResponse';
import { FavoritesService } from '../../core/services/favorites.service';
import { AuthLocalService } from '../../core/services/auth-local.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './characters.html',
  styleUrls: ['./characters.css']
})

//Componente para mostrar y filtrar la lista de personajes
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  loading = false;
  errorMsg = '';
  page = 1;
  pages = 1;

  // filtros
  qName = '';
  qStatus: 'all' | 'Alive' | 'Dead' | 'unknown' = 'all';

  // modal
  selected: Character | null = null;

  //Inyecta los servicios necesarios
  constructor(
    private api: RickAndMortyService,
    private favoritesService: FavoritesService,
    private authService: AuthLocalService
  ) { }

  ngOnInit(): void {
    this.fetch(true);
  }

  // Verifica si el usuario está logueado
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Verifica si un personaje está en favoritos
  isFavorite(character: Character): boolean {
    return this.favoritesService.isFavorite(character.id);
  }

  // Alterna el estado de favorito de un personaje
  toggleFavorite(event: Event, character: Character): void {
    event.stopPropagation(); // Evita que se abra el modal
    
    if (this.isFavorite(character)) {
      this.favoritesService.removeFromFavorites(character.id);
    } else {
      this.favoritesService.addToFavorites(character);
    }
  }

  applyFilters() {
    this.page = 1;
    this.fetch(true);
  }

  loadMore() {
    if (this.page < this.pages) {
      this.page++;
      this.fetch(false);
    }
  }

  private fetch(reset: boolean) {
    this.loading = true;
    this.errorMsg = '';
    this.api.getCharacters({ page: this.page, name: this.qName, status: this.qStatus })
      .subscribe({
        next: (res: CharactersResponse) => {
          this.pages = res.info.pages ?? 1;
          this.characters = reset ? res.results : [...this.characters, ...res.results]; //spread operator
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.characters = reset ? [] : this.characters;
          this.errorMsg = err?.error?.error || 'No se encontraron resultados.';
        }
      });
  }

  openModal(c: Character) {
    this.selected = c;
  }

  closeModal() { this.selected = null; }
}
