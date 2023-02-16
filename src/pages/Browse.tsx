import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { homeApi, movieApi, tvApi } from "../api/request";
import Home, { HomeContent } from "./Home";
import Loading from "./Loading";
import Movie, { MovieContents } from "./Movie";
import TV, { TvContents } from "./TV";

export default function Browse() {
    const location = useLocation();
    const [homeContents, setHomeContents] = useState<HomeContent>();
    const [movieContents, setMovieContents] = useState<MovieContents>();
    const [tvContents, setTvContents] = useState<TvContents>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getHomeContents = async () => {
        try {
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
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const getMovieContents = async () => {
        try {
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
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    const getTVContents = async () => {
        try {
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
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (location.pathname === "/browse" && !homeContents) {
            setIsLoading(true);
            getHomeContents();
        }
        if (location.pathname === "/browse/movie" && !movieContents) {
            setIsLoading(true);
            getMovieContents();
        }
        if (location.pathname === "/browse/tv" && !tvContents) {
            setIsLoading(true);
            getTVContents();
        }
    }, [location.pathname]);

    function rederComponent() {
        if (homeContents !== undefined && location.pathname === "/browse") {
            return <Home contents={homeContents} />;
        }
        if (
            movieContents !== undefined &&
            location.pathname === "/browse/movie"
        ) {
            return <Movie contents={movieContents} />;
        }
        if (tvContents !== undefined && location.pathname === "/browse/tv") {
            return <TV contents={tvContents} />;
        }
    }

    return (
        <BrowseWrap>
            <Outlet />
            {isLoading ? <Loading /> : rederComponent()}
        </BrowseWrap>
    );
}

const BrowseWrap = styled.div``;
