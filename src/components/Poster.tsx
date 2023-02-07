import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Movie, TV } from "../types";
import { cls } from "../utils";

interface PosterProps {
    isLargeRow?: boolean;
    movie: TV | Movie;
}

function Poster({ isLargeRow = false, movie }: PosterProps) {
    const imgBasicUrl = "https://image.tmdb.org/t/p/original";
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/detail/${movie.id}`);
    };
    return (
        <PostWrap
            onClick={onClick}
            className={cls("row__poster", isLargeRow ? "row__posterLarge" : "")}
            src={`${imgBasicUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={(movie as TV).name || (movie as Movie).title}
        />
    );
}

export default Poster;

const PostWrap = styled.img`
    cursor: pointer;
    max-height: 100px;
    margin-right: 10px;
    padding: 10px;
    transition: transform 450ms;
    width: 100%;
    object-fit: contain;

    &:hover {
        transform: scale(1.1);
        opacity: 1;
        z-index: 5;
    }
    &.row__posterLarge {
        max-height: 250px;
    }
`;
