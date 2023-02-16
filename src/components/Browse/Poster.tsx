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
    vote_average: number;
}

function Poster({
    isLargeRow = false,
    poster_path,
    backdrop_path,
    title,
    media_type,
    vote_average,
    id,
}: PosterProps) {
    const imgBasicUrl = "https://image.tmdb.org/t/p/original";
    const navigate = useNavigate();
    const location = useLocation();
    const onClick = () => {
        if (location.pathname.includes("movie") || media_type === "movie") {
            navigate(`/browse/movie/${id}`);
        } else {
            navigate(`/browse/tv/${id}`);
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
            {!isLargeRow ? (
                <>
                    <div className='poster__background' />
                    <div className='poster__info'>
                        <div>{title}</div>
                        <div>
                            <span>⭐️ </span>
                            <span>{vote_average.toFixed(2)}</span>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div />
                </>
            )}
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
    &:hover {
        transform: scale(1.1);
        z-index: 5;
        .poster__background {
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0.5;
            height: inherit;
        }
        .poster__info {
            position: absolute;
            bottom: 0;
            font-weight: 500;
            text-align: center;
            opacity: 1;
        }
    }
`;
