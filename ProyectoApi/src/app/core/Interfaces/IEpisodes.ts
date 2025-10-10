import { Character } from './ICharacter';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  charactersData?: Character[]; // Array para almacenar los datos de los personajes
  url: string;
  created: string;
}