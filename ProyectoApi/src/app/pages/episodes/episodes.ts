import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../core/services/rick-and-morty.service';
import { Episode } from '../../core/Interfaces/IEpisodes';
import { FormsModule } from '@angular/forms';

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

  private fetch(reset: boolean) {
    this.loading = true;
    this.errorMsg = '';
    this.api.getEpisodes({ page: this.page, name: this.qName })
      .subscribe({
        next: (res) => {
          this.pages = res.info.pages ?? 1;
          this.episodes = reset ? res.results : [...this.episodes, ...res.results];
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
