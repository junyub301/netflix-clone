import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { homeApi } from "../api/request";
import Banner from "../components/common/Banner";
import Row from "../components/Row";
import { Movie, Trend, TV } from "../types";

export default function Home() {
    const [topMovies, setTopMovies] = useState<Movie[]>([]);
    const [topTv, setTopTv] = useState<TV[]>([]);
    const [trendContents, setTrendContents] = useState<Trend[]>([]);

    useEffect(() => {
        async function getHomeContents() {
            const {
                data: { results: topMovies },
            } = await homeApi.fetchTopMovies();
            const {
                data: { results: topTv },
            } = await homeApi.fetchTopTV();
            const {
                data: { results: tredingContents },
            } = await homeApi.fetchTrending();
            setTopMovies(topMovies);
            setTopTv(topTv);
            setTrendContents(tredingContents);
        }
        getHomeContents();
    }, []);
    return (
        <HomeWrap>
            <Banner />
            <Row title='지금 뜨는 콘텐츠' isLargeRow contents={trendContents} />
            <Row title='인기 영화' isLargeRow contents={topMovies} />
            <Row title='인기 TV' isLargeRow contents={topTv} />
        </HomeWrap>
    );
}

const HomeWrap = styled.div``;
