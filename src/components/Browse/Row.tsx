import styled from "styled-components";
import { Movie, Trend, TV } from "../../types";
import Poster from "./Poster";

type RowPropsTypes = Movie | TV | Trend;

interface RowProps<T extends RowPropsTypes> {
    title: string;
    isLargeRow?: boolean;
    contents: T[];
}
export default function Row<T extends RowPropsTypes>({
    title,
    contents,
    isLargeRow = false,
}: RowProps<T>) {
    return (
        <RowWrap>
            <h2>{title}</h2>
            <div className='row__posters'>
                {contents?.map(
                    (contents) =>
                        ((isLargeRow && contents.poster_path) ||
                            (!isLargeRow && contents.backdrop_path)) && (
                            <Poster
                                key={contents.id}
                                id={contents.id!}
                                backdrop_path={contents?.backdrop_path!}
                                poster_path={contents?.poster_path!}
                                name={(contents as TV).name}
                                media_type={(contents as Trend).media_type}
                                title={(contents as Movie).title}
                                isLargeRow={isLargeRow}
                            />
                        )
                )}
            </div>
        </RowWrap>
    );
}
{
    /* <img
                                className={`row__poster ${
                                    isLargeRow && "row__posterLarge"
                                }`}
                                key={movie.id}
                                src={`${imgBasicUrl}${
                                    isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                alt={
                                    (movie as TV).name || (movie as Movie).title
                                }
                            /> */
}

const RowWrap = styled.div`
    color: white;
    margin-left: 20px;
    .row__posters {
        display: flex;
        overflow-y: hidden;
        overflow-x: scroll;
        padding: 20px;
        &::-webkit-scrollbar {
            display: none;
        }
        /* .row__poster {
            max-height: 100px;
            object-fit: contain;
            margin-right: 10px;
            width: 100%;
            transition: transform 450ms;

            &:hover {
                transform: scale(1.1);
                opacity: 1;
            }

            &.row__posterLarge {
                max-height: 250px;
            }
        } */
    }
`;
