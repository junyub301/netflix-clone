import styled from "styled-components";
import { Movie, Trend, TV } from "../../types";
import Poster from "./Poster";

type RowPropsTypes = Movie | TV | Trend;

interface RowProps<T extends RowPropsTypes> {
    title: string;
    isLargeRow?: boolean;
    type?: string;
    contents: T[];
}
export default function Row<T extends RowPropsTypes>({
    title,
    contents,
    type,
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
                                media_type={
                                    (contents as Trend).media_type || type
                                }
                                title={
                                    (contents as Movie).title ||
                                    (contents as TV).name
                                }
                                isLargeRow={isLargeRow}
                            />
                        )
                )}
            </div>
        </RowWrap>
    );
}

const RowWrap = styled.div`
    color: white;
    margin-left: 20px;
    .row__posters {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        gap: 20px;
        /* white-space: nowrap; */
        overflow-y: hidden;
        overflow-x: scroll;
        padding: 20px;
        &::-webkit-scrollbar {
            display: none;
        }

        div {
            width: 220px;
            /* display: inline-block; */
        }
    }
`;
