import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

export default function HomeScreen() {
    return (
        <HomeWrap>
            <Nav />
            <Banner />
        </HomeWrap>
    );
}

const HomeWrap = styled.div``;
