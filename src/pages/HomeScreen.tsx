import React from "react";
import styled from "styled-components";
import requests from "../api/request";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";

export default function HomeScreen() {
    return (
        <HomeWrap>
            <Nav />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRate} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
        </HomeWrap>
    );
}

const HomeWrap = styled.div``;
