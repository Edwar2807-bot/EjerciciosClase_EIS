import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../core/services/rick-and-morty.service';
import { FormsModule } from '@angular/forms';
import { LocationCharacter, Locations } from '../../core/Interfaces/ILocations';
import { LocationResponse } from '../../core/Interfaces/ILocationResponse';
import { Character } from '../../core/Interfaces/ICharacter';


@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './locations.html',
  styleUrls: ['./locations.css']
})

export class LocationsListComponent implements OnInit {
  locations: Locations[] = [];
  locationCharacters: LocationCharacter[] = [];
  loading = false;
  errorMsg = '';
  page = 1;
  pages = 1;

  // filtros
  qName = '';
  qtype: 'all' | 'Planet' | 'Cluster' | 'Microverse' = 'all';

  // modal
  selected: Locations | null = null;

  //Inyecta el servicio para consumir la API
  constructor(private api: RickAndMortyService) { }

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
    this.api.getLocations({ page: this.page, name: this.qName, type: this.qtype })
      .subscribe({
        next: (res: LocationResponse) => {
          this.pages = res.info.pages ?? 1;
          const locations = reset ? res.results : [...this.locations, ...res.results];
          
          // Para cada ubicación, obtener los personajes
          locations.forEach(location => {
            location.residentsData = [];
            if (location.residents && location.residents.length > 0) {
              location.residents.forEach(residentUrl => {
                const characterId = this.getCharacterId(residentUrl);
                if (characterId) {
                  this.api.getCharacterbyId(characterId).subscribe({
                    next: (character: any) => {
                      if (!location.residentsData) location.residentsData = [];
                      location.residentsData.push(character);
                    }
                  });
                }
              });
            }
          });
          
          this.locations = locations;
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.locations = reset ? [] : this.locations;
          this.errorMsg = err?.error?.error || 'No se encontraron resultados.';
        }
      });
  }

  openModal(c: Locations) {
    this.selected = c;
  }

  closeModal() { this.selected = null; }

}

