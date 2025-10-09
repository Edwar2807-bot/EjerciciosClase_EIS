import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiInfo 
{ 
  count: number;
  pages: number; 
  next: string | null; 
  prev: string | null; 
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
}

export interface CharactersResponse 
{ 
  info: ApiInfo; 
  results: Character[]; 
}

@Injectable({ providedIn: 'root' })
export class RickAndMortyService {
  private base = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(opts: { page?: number; name?: string; status?: string } = {}): Observable<CharactersResponse> {
    let params = new HttpParams();
    if (opts.page) params = params.set('page', String(opts.page));
    if (opts.name) params = params.set('name', opts.name.trim());
    if (opts.status && opts.status !== 'all') params = params.set('status', opts.status);
    return this.http.get<CharactersResponse>(`${this.base}/character`, { params });
  }
}
