import { ApiInfo } from "./IApiInfo";
import { Locations } from "./ILocations";

export interface LocationResponse {
    info: ApiInfo; 
    results: Locations[]; 
}