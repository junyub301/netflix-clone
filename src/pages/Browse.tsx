import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Movie from "./Movie";

export default function Browse() {
    const location = useLocation();

    return (
        <BrowseWrap>
            <Outlet />
            {location.pathname === "/browse" && <Home />}
            {location.pathname === "/browse/movie" && <Movie />}
        </BrowseWrap>
    );
}

const BrowseWrap = styled.div``;
