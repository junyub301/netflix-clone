import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { homeApi, movieApi, tvApi } from "../api/request";
import Home, { HomeContent } from "./Home";
import Movie, { MovieContents } from "./Movie";
import TV, { TvContents } from "./TV";

export default function Browse() {
    const location = useLocation();
    const [homeContents, setHomeContents] = useState<HomeContent>();
    const [movieContents, setMovieContents] = useState<MovieContents>();
    const [tvContents, setTvContents] = useState<TvContents>();

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
    const getTVContents = async () => {
        const {
            data: { results: topRate },
        } = await tvApi.fetchTopRate();
        const {
            data: { results: nowPlaying },
        } = await tvApi.fetchNowPlaying();
        const {
            data: { results: popular },
        } = await tvApi.fetchPopular();
        const {
            data: { results: mysteryTvs },
        } = await tvApi.fetchMysteryMovies();
        const {
            data: { results: comedyTvs },
        } = await tvApi.fetchComedyMovies();
        const {
            data: { results: aniTvs },
        } = await tvApi.fetchAniMovies();
        const {
            data: { results: romanceTvs },
        } = await tvApi.fetchRomanceMovies();
        const {
            data: { results: documentaries },
        } = await tvApi.fetchDocumentaries();
        setTvContents({
            topRate,
            nowPlaying,
            popular,
            mysteryTvs,
            comedyTvs,
            aniTvs,
            romanceTvs,
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
        if (location.pathname === "/browse/tv") {
            getTVContents();
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
            {tvContents !== undefined && location.pathname === "/browse/tv" && (
                <TV contents={tvContents} />
            )}
        </BrowseWrap>
    );
}

const BrowseWrap = styled.div``;
