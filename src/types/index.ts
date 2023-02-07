interface Content {
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    vote_average?: number;
    vote_count?: number;
}

export interface TV extends Content {
    first_air_date?: string;
    name?: string;
    origin_country?: string[];
    original_name?: string;
}

export interface Movie extends Content {
    adult?: boolean;
    media_type?: string;
    original_title?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
}

export interface Trend extends Content {
    adult: boolean;
    title: string;
    original_title: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
}

interface MovieDetail {
    adult: boolean;
    backdrop_path?: string;
    belongs_to_collection?: unknown;
    budget: number;
    genres: { id: number; name: string }[];
    homepage?: string;
    id: number;
    imdb_id?: string;
    original_language: string;
    original_title: string;
    overview?: string;
    popularity: number;
    poster_path?: string;
    production_companies: {
        name: string;
        id: number;
        logo_path?: string;
        origincontry: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
        release_date: string;
        revenue: number;
        runtime: number;
    }[];
    spoken_languages: { iso_639_1: string; name: string }[];
    status: string;
    tagline?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
