import type {MediaType} from "@enum/MediaType";
import type {Status} from "@enum/Status";

import type {Character} from "./Character";
import type {Date} from "./Date";
import type {Episode} from "./Episode";
import type {Recommendation} from "./Recommendation";
import type {Title} from "./Title";
import type {Trailer} from "./Trailer";

export interface Anime {
    interfaceType: "Anime";
    id: number,
    title: Title
    startDate: Date,
    releaseDate: number,
    isAdult: boolean,
    image: string,
    cover: string,
    trailer: Trailer
    popularity: number,
    description: string,
    status: Status,
    totalEpisodes: number,
    episodes: Episode[],
    episodeTitle?: string,
    episodeNumber?: number,
    rating: number,
    duration: number,
    genres: string[],
    season: string,
    subOrDub: string,
    type: MediaType,
    studios: string[],
    characters: Character[],
    countryOfOrigin: string,
    recommendations: Recommendation[],
}

export function hasAllAnimeProperties(object: any): object is Anime {
    return "id" in object
        && "title" in object
        && "startDate" in object
        && "releaseDate" in object
        && "isAdult" in object
        && "image" in object
        && "cover" in object
        && "trailer" in object
        && "popularity" in object
        && "description" in object
        && "status" in object
        && "totalEpisodes" in object
        && "episodes" in object
        && "rating" in object
        && "duration" in object
        && "genres" in object
        && "season" in object
        && "subOrDub" in object
        && "type" in object
        && "studios" in object
        && "countryOfOrigin" in object
        && "recommendations" in object;
}