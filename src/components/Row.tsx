import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import { Movie, TV } from "../types";

interface RowProps {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}
export default function Row({ title, fetchUrl, isLargeRow = false }: RowProps) {
    const [movies, setMovies] = useState<TV[] | Movie[]>([]);
    const imgBasicUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(fetchUrl);
            setMovies(data?.results);
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <RowWrap>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies?.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
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
        display: flex;
        overflow-y: hidden;
        overflow-x: scroll;
        padding: 20px;
        &::-webkit-scrollbar {
            display: none;
        }
        .row__poster {
            max-height: 100px;
            object-fit: contain;
            margin-right: 10px;
            width: 100%;
            transition: transform 450ms;

            &:hover {
                transform: scale(1.08);
                opacity: 1;
            }

            &.row__posterLarge {
                max-height: 250px;
            }
        }
    }
`;
