import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import requests from "../api/request";
import { TV } from "../types";
import Button from "./common/Button";

export default function Banner() {
    const [movie, setMovie] = useState<TV>({});

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request?.data?.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    const truncate = (string: string, n: number) => {
        return string?.length > n ? string.substring(0, n - 1) + "..." : string;
    };
    return (
        <BannerWrap bgImg={movie?.backdrop_path}>
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie.name || movie.original_name}
                </h1>
                <div className='banner__buttons'>
                    <Button
                        value='Play'
                        className='banner__button'
                        color='gray'
                    />
                    {/* <button className='banner__button'>Play</button> */}
                    <Button
                        className='banner__button'
                        color='gray'
                        value='My List'
                    />
                </div>
                <h1 className='banner__description'>
                    {truncate(movie?.overview!, 150)}
                </h1>
            </div>
            <div className='banner--fadeBottom' />
        </BannerWrap>
    );
}

const BannerWrap = styled.header<{ bgImg?: string }>`
    position: relative;
    height: 448px;
    color: white;
    object-fit: contain;
    background-size: cover;

    background-image: ${(props) =>
        props.bgImg
            ? `url(https://image.tmdb.org/t/p/original${props.bgImg})`
            : `url(https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg)`};
    background-position: center center;
    .banner__contents {
        margin-left: 30px;
        padding-top: 140px;
        height: 190px;
        .banner {
            &__title {
                font-size: 3rem;
                font-weight: 800;
                padding-bottom: 0.3rem;
            }
            &__buttons {
                .banner__button {
                    font-weight: 700;
                    border-radius: 0.2vw;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    margin-right: 1rem;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;

                    &:hover {
                        color: #000;
                        background-color: #e6e6e6;
                        transition: all 0.2s;
                    }
                }
            }
            &__description {
                width: 45rem;
                line-height: 1.3;
                padding-top: 1rem;
                font-size: 0.8rem;
                max-width: 360px;
                height: 80px;
            }
        }
    }

    .banner--fadeBottom {
        height: 7.4rem;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0.61),
            #111
        );
    }
`;
