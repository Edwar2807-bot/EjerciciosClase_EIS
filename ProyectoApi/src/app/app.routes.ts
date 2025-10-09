import { Routes } from '@angular/router';
import { CharactersListComponent } from './pages/characters/characters';
import { Episodes } from './pages/episodes/episodes';
import { Locations } from './pages/locations/locations';
import { Favorites } from './pages/favorites/favorites';
import { AuthLocalService } from './core/services/auth-local.service';
import { LoginSimpleComponent } from './features/auth/login-simple';
import { SaveCredentialsComponent } from './features/auth/save-credentials';

export const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent
  },
  {
    path: 'auth/login',
    component: LoginSimpleComponent
  },
  {
    path: 'auth/save',
    component: SaveCredentialsComponent 
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
    path: 'favorites',
    component: Favorites
  },
  {
    path: '**',
    redirectTo: ''
  }
];