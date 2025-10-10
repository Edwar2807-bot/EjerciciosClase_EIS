import { Character } from "./ICharacter";

export interface Locations {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    residentsData?: Character[]; // Array para almacenar los datos de los personajes
    url: string;
    created: string;
}

export interface LocationCharacter {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Character[];
}