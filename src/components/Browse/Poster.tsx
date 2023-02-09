import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cls } from "../../utils";

interface PosterProps {
    isLargeRow?: boolean;
    poster_path: string;
    backdrop_path: string;
    media_type?: string;
    name?: string;
    title?: string;
    id: number;
}

function Poster({
    isLargeRow = false,
    poster_path,
    backdrop_path,
    name,
    title,
    media_type,
    id,
}: PosterProps) {
    const imgBasicUrl = "https://image.tmdb.org/t/p/original";
    const navigate = useNavigate();
    const location = useLocation();
    const onClick = () => {
        if (
            location.pathname.includes("movie") ||
            location.pathname.includes("tv")
        ) {
            navigate(`${location.pathname}/${id}`);
        } else {
            let pathName = `${location.pathname}/${media_type}`;
            navigate(`${pathName}/${id}`);
        }
    };
    return (
        <PostWrap
            onClick={onClick}
            className={cls("row__poster", isLargeRow ? "row__posterLarge" : "")}
            src={`${imgBasicUrl}${isLargeRow ? poster_path : backdrop_path}`}
            alt={name || title}
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
