import axios from "./axios";

export const homeApi = {
    fetchTrending: () => axios.get("/trending/all/week"),
    fetchTopMovies: () => axios.get("/movie/top_rated"),
    fetchTopTV: () => axios.get("/tv/top_rated"),
    fetchDiscoverTv: () => axios.get("/discover/tv"),
};

export const movieApi = {
    fetchTopRate: () => axios.get("/movie/top_rated"),
    fetchNowPlaying: () => axios.get("/movie/now_playing"),
    fetchPopular: () => axios.get("/movie/popular"),
    fetchActionMovies: () =>
        axios.get("/discover/movie", { params: { with_genres: 28 } }),
    fetchComedyMovies: () =>
        axios.get("/discover/movie", { params: { with_genres: 35 } }),
    fetchHorrorMovies: () =>
        axios.get("/discover/movie", { params: { with_genres: 27 } }),
    fetchRomanceMovies: () =>
        axios.get("/discover/movie", { params: { with_genres: 10749 } }),
    fetchDocumentaries: () =>
        axios.get("/discover/movie", { params: { with_genres: 99 } }),
    fetchDetailMovie: (id: number) =>
        axios.get(`/movie/${id}`, {
            params: {
                append_to_response: "videos,credits,keywords,recommendations",
            },
        }),
};

export const tvApi = {
    fetchTopRate: () => axios.get("/tv/top_rated"),
    fetchNowPlaying: () => axios.get("/tv/on_the_air"),
    fetchPopular: () => axios.get("/tv/popular"),
    fetchActionMovies: () =>
        axios.get("/discover/tv", { params: { with_genres: 28 } }),
    fetchComedyMovies: () =>
        axios.get("/discover/tv", { params: { with_genres: 35 } }),
    fetchHorrorMovies: () =>
        axios.get("/discover/tv", { params: { with_genres: 27 } }),
    fetchRomanceMovies: () =>
        axios.get("/discover/tv", { params: { with_genres: 10749 } }),
    fetchDocumentaries: () =>
        axios.get("/discover/tv", { params: { with_genres: 99 } }),
    fetchDetailTv: (id: number) =>
        axios.get(`/tv/${id}`, {
            params: {
                append_to_response: "videos,credits,keywords,recommendations",
            },
        }),
};

const requests = {
    fetchTrending: `/trending/all/week`,
    fetchNetflixOriginals: `/discover/tv`,
    fetchTopRate: `/movie/top_rated`,
    fetchActionMovies: `/discover/movie?with_genres=28`,
    fetchComedyMovies: `/discover/movie?with_genres=35`,
    fetchHorrorMovies: `/discover/movie?with_genres=27`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749`,
    fetchDocumentaries: `/discover/movie?with_genres=99`,
};

export default requests;
