import React from "react";
import Row from "../components/browse/Row";
import Banner from "../components/common/Banner";
import { Movie, Trend, TV } from "../types";

interface HomeProps {
    contents: HomeContent;
}

export interface HomeContent {
    topMovies: Movie[];
    topTv: TV[];
    trendContents: Trend[];
}

export default function Home({
    contents: { topMovies, topTv, trendContents },
}: HomeProps) {
    return (
        <>
            <Banner movieInfo={trendContents[0]} />
            <Row<Trend>
                title='지금 뜨는 콘텐츠'
                isLargeRow
                contents={trendContents}
            />
            <Row<Movie> title='인기 영화' contents={topMovies} type='movie' />
            <Row<TV> title='인기 TV' contents={topTv} type='tv' />
        </>
    );
}
