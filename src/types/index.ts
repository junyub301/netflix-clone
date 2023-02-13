interface Content {
    backdrop_path: string;
    genre_ids: number[];
    id?: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface TV extends Content {
    media_type: "tv";
    first_air_date?: string;
    name?: string;
    origin_country?: string[];
    original_name?: string;
}

export interface Movie extends Content {
    media_type: "movie";
    adult?: boolean;
    original_title?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
}

export interface Trend extends Content {
    adult: boolean;
    title: string;
    media_type: string;
    original_title: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
}

interface Detail {
    adult: boolean;
    backdrop_path: string;
    credits: { cast: Cast[]; crew: Crew[] };
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    keywords: {
        keywords?: { id: string; name: string }[];
        results?: { id: string; name: string }[];
    };

    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
        release_date?: string;
        revenue?: number;
        runtime?: number;
    }[];
    spoken_languages: {
        english_name?: string;
        iso_639_1: string;
        name: string;
    }[];

    status: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    videos: { results: Video[] };
    recommendations: { results: Recommendation[] };
}

export interface MovieDetail extends Detail {
    belongs_to_collection?: unknown;
    budget: number;
    imdb_id?: string;
    original_title: string;
    title: string;
    video: boolean;
}

export interface TvDetail extends Detail {
    created_by: {
        id: number;
        credit_id: string;
        name: string;
        gender: number;
        profile_path: string;
    }[];
    episode_run_time: number[];
    first_air_date: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: {
        air_date: string;
        episode_number: number;
        id: number;
        name: string;
        overview: string;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
        vote_average: number;
        vote_count: number;
    };
    name: string;
    next_episode_to_air: {
        air_date: string;
        episode_number: number;
        id: number;
        name: string;
        overview: string;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: null;
        vote_average: number;
        vote_count: number;
    };
    networks: {
        id: number;
        name: string;
        logo_path: string;
        origin_country: string;
    }[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_name: string;
    seasons: {
        air_date: string;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string;
        season_number: number;
    }[];

    type: string;
}

export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id?: number;
    character?: string;
    credit_id: string;
    order?: number;
}
export interface Crew extends Cast {
    department: "Production";
    job: "Casting";
}

export interface Video {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: false;
    published_at: string;
    id: string;
}

interface Recommendation {
    poster_path?: string;
    backdrop_path?: string;
    id: number;
    title?: string;
    original_title?: string;
    name?: string;
    original_name?: string;
    vote_average?: number;
    [key: string]: any;
}
