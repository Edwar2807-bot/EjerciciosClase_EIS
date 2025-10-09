import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharactersResponse } from '../Interfaces/ICharacterResponse';

@Injectable({ providedIn: 'root' }) //ajusta para que sea disponible en toda la app
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
