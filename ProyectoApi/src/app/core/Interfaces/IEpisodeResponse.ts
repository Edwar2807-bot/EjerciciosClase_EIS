import { ApiInfo } from './IApiInfo';
import { Episode } from './IEpisodes';

export interface EpisodeResponse 
{ 
  info: ApiInfo; 
  results: Episode[]; 
}