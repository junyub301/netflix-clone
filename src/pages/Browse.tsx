import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { homeApi, movieApi } from "../api/request";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Home, { HomeContent } from "./Home";
import Movie, { MovieContents } from "./Movie";

export default function Browse() {
    const location = useLocation();
    const [homeContents, setHomeContents] = useState<HomeContent>();
    const [movieContents, setMovieContents] = useState<MovieContents>();

    const page = useInfiniteScroll();

    const getHomeContents = async () => {
        const {
            data: { results: topMovies },
        } = await homeApi.fetchTopMovies();
        const {
            data: { results: topTv },
        } = await homeApi.fetchTopTV();
        const {
            data: { results: trendContents },
        } = await homeApi.fetchTrending();
        setHomeContents({ topMovies, topTv, trendContents });
    };

    const getMovieContents = async () => {
        const {
            data: { results: topRate },
        } = await movieApi.fetchTopRate();
        const {
            data: { results: nowPlaying },
        } = await movieApi.fetchNowPlaying();
        const {
            data: { results: popular },
        } = await movieApi.fetchPopular();
        const {
            data: { results: actionMovies },
        } = await movieApi.fetchActionMovies();
        const {
            data: { results: comedyMovies },
        } = await movieApi.fetchComedyMovies();
        const {
            data: { results: horrorMovies },
        } = await movieApi.fetchHorrorMovies();
        const {
            data: { results: romanceMovies },
        } = await movieApi.fetchRomanceMovies();
        const {
            data: { results: documentaries },
        } = await movieApi.fetchDocumentaries();
        setMovieContents({
            topRate,
            nowPlaying,
            popular,
            actionMovies,
            comedyMovies,
            horrorMovies,
            romanceMovies,
            documentaries,
        });
    };

    useEffect(() => {
        if (location.pathname === "/browse") {
            getHomeContents();
        }
        if (location.pathname === "/browse/movie") {
            getMovieContents();
        }
    }, [location.pathname]);
    return (
        <BrowseWrap>
            <Outlet />
            {homeContents !== undefined && location.pathname === "/browse" && (
                <Home contents={homeContents} />
            )}
            {movieContents !== undefined &&
                location.pathname === "/browse/movie" && (
                    <Movie contents={movieContents} />
                )}
        </BrowseWrap>
    );
}

const BrowseWrap = styled.div``;
