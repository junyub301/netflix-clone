interface Basic {
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

export interface TV extends Basic {
    first_air_date?: string;
    name?: string;
    origin_country?: string[];
    original_name?: string;
}

export interface Movie extends Basic {
    adult?: boolean;
    media_type?: string;
    original_title?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
}
