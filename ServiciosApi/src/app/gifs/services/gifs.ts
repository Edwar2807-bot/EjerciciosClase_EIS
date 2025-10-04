import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Gif, GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mappers/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class Gifs {
  

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(): void {
    this.http.get<GiphyResponse>(`${environment.baseUrl}/gifs/trending?`, {
      params: {
        api_key: environment.apiKey,
        limit: 40
      }
    }).subscribe(resp => {
      console.log(resp.data[0].images.original.url);
      const gifs = GifMapper.mapGiphyItemstoGifArray(resp.data);
      this.trendingGifs.set(gifs);
      console.log(gifs);
    });
  }
}