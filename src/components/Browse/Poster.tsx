import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cls } from "../../utils";

interface PosterProps {
    isLargeRow?: boolean;
    poster_path: string;
    backdrop_path: string;
    media_type?: string;
    title?: string;
    id: number;
}

function Poster({
    isLargeRow = false,
    poster_path,
    backdrop_path,
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
        <PosterWrap
            className={cls("row__poster", isLargeRow ? "row__posterLarge" : "")}
            onClick={onClick}
            bg={
                isLargeRow
                    ? `${imgBasicUrl}${poster_path}`
                    : `${imgBasicUrl}${backdrop_path}`
            }
        >
            <div className='poster__info'></div>
        </PosterWrap>
    );
}

export default Poster;

const PosterWrap = styled.div<{ bg: string }>`
    position: relative;
    height: 100px;
    background: ${({ bg }) => `url(${bg})`} no-repeat center center;
    background-size: contain;
    transition: transform 450ms;
    cursor: pointer;

    &.row__posterLarge {
        height: 250px;
    }
    .poster__info {
        opacity: 0;
    }
`;
