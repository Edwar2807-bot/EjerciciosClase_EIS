import { Routes } from '@angular/router';
import { CharactersListComponent } from './features/characters/characters-list/characters-list';

export const routes: Routes = [
  { path: '',
    component: CharactersListComponent
  },
  { path: '**',
    redirectTo: ''
  }
];