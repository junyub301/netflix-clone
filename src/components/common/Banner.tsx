import { useEffect, useState } from "react";
import styled from "styled-components";
import { homeApi } from "../../api/request";
import Button from "./Button";

interface BannerProps {
    movieInfo?: any;
}

export default function Banner({ movieInfo }: BannerProps) {
    const [movie, setMovie] = useState<any>({});

    useEffect(() => {
        async function fetchData() {
            const {
                data: { results },
            } = await homeApi.fetchDiscoverTv();

            setMovie(results[Math.floor(Math.random() * results.length - 1)]);
        }
        if (!movieInfo) {
            fetchData();
        } else {
            setMovie(movieInfo);
        }
    }, [movieInfo?.id]);

    const truncate = (string: string, n: number) => {
        return string?.length > n ? string.substring(0, n - 1) + "..." : string;
    };
    return (
        <BannerWrap bgImg={movie?.backdrop_path}>
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.name ||
                        movie?.original_name ||
                        movie?.title ||
                        movie?.original_title}
                </h1>
                <div className='banner__buttons'>
                    <Button
                        value='Play'
                        className='banner__button'
                        color='gray'
                    >
                        Play
                    </Button>
                    <Button
                        className='banner__button'
                        color='gray'
                        value='My List'
                    >
                        My List
                    </Button>
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
    padding-top: 100px;
    margin-bottom: 3rem;

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
        height: 9.9rem;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0.61),
            #111
        );
    }
`;
