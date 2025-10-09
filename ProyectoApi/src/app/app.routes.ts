import { Routes } from '@angular/router';
import { CharactersListComponent } from './pages/characters/characters';
import { Episodes } from './pages/episodes/episodes';
import { Locations } from './pages/locations/locations';

export const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent
  },
  {
    path: 'episodes',
    component: Episodes
  },
  {
    path: 'locations',
    component: Locations
  },
  {
    path: '**',
    redirectTo: ''
  }
];