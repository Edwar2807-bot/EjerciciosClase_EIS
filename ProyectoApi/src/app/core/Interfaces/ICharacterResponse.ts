import { Character } from './ICharacter';
import { ApiInfo } from './IApiInfo';

export interface CharactersResponse 
{ 
  info: ApiInfo; 
  results: Character[]; 
}