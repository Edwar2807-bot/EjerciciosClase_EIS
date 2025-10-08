import { Component, OnInit } from '@angular/core';
import { RickAndMortyService, Character, CharactersResponse } from '../../../core/services/rick-and-morty.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.html',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  styleUrls: ['./characters-list.css']
})
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

  constructor(private api: RickAndMortyService) {}

  ngOnInit(): void {
    this.fetch(true);
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
          this.characters = reset ? res.results : [...this.characters, ...res.results];
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.characters = reset ? [] : this.characters;
          this.errorMsg = err?.error?.error || 'No se encontraron resultados.';
        }
      });
  }

  openModal(c: Character) { this.selected = c; }
  closeModal() { this.selected = null; }
}
