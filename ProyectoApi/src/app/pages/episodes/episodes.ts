import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../core/services/rick-and-morty.service';
import { Episode } from '../../core/Interfaces/IEpisodes';
import { FormsModule } from '@angular/forms';
import { Character } from '../../core/Interfaces/ICharacter';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './episodes.html',
  styleUrls: ['./episodes.css']
})
export class Episodes implements OnInit {
  episodes: Episode[] = [];
  loading = false;
  errorMsg = '';
  page = 1;
  pages = 1;
  qName = '';

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

  //Función para extraer el ID del personaje desde la URL
  getCharacterId(url: string): number {
    const match = url.match(/\/(\d+)$/); // Captura el número al final de la URL
    return match ? parseInt(match[1], 10) : 0;
  }

  private fetch(reset: boolean) {
    this.loading = true;
    this.errorMsg = '';
    this.api.getEpisodes({ page: this.page, name: this.qName })
      .subscribe({
        next: (res) => {
          this.pages = res.info.pages ?? 1;
          const episodes = reset ? res.results : [...this.episodes, ...res.results];
          
          // Para cada episodio, obtener los personajes
          episodes.forEach(episode => {
            episode.charactersData = [];
            if (episode.characters && episode.characters.length > 0) {
              episode.characters.forEach(characterUrl => {
                const characterId = this.getCharacterId(characterUrl);
                if (characterId) {
                  this.api.getCharacterbyId(characterId).subscribe({
                    next: (character: any) => {
                      if (!episode.charactersData) episode.charactersData = [];
                      episode.charactersData.push(character);
                    }
                  });
                }
              });
            }
          });
          
          this.episodes = episodes;
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.episodes = reset ? [] : this.episodes;
          this.errorMsg = err?.error?.error || 'No se encontraron episodios.';
        }
      });
  }
}
