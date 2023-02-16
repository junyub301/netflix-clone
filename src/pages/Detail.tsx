import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi, tvApi } from "../api/request";
import Banner from "../components/common/Banner";
import Casts from "../components/detail/cast/Casts";
import Videos from "../components/detail/video/Videos";
import { MovieDetail, TvDetail } from "../types";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Poster from "../components/browse/Poster";
import Loading from "./Loading";

export default function Detail() {
    const { id } = useParams();
    const { pathname } = useLocation();
    const [content, setContent] = useState<MovieDetail & TvDetail>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        async function getDetailContent() {
            if (pathname.includes("movie")) {
                try {
                    setIsLoading(true);

                    const { data } = await movieApi.fetchDetailMovie(+id!);
                    setContent(data);
                } catch (e) {
                    console.log(e);
                } finally {
                    setIsLoading(false);
                }
            } else {
                try {
                    setIsLoading(true);
                    const { data } = await tvApi.fetchDetailTv(+id!);
                    setContent(data);
                } catch (e) {
                    console.log(e);
                } finally {
                    setIsLoading(false);
                }
            }
        }
        getDetailContent();
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <DetailWrap>
            {isLoading ? (
                <Loading />
            ) : (
                content && (
                    <>
                        <Banner movieInfo={content} />
                        <div className='detail__content'>
                            <div className='content__info'>
                                <h2>
                                    {content.name ||
                                        content.original_name ||
                                        content.title ||
                                        content.original_title}
                                </h2>
                                <div>
                                    <div className='info__row'>
                                        <h3 className='info__title'>평점: </h3>
                                        <div className='info__value'>
                                            {content.vote_average.toFixed(2)}
                                        </div>
                                    </div>
                                    <div className='info__row'>
                                        <h3 className='info__title'>장르: </h3>
                                        <div className='info__value'>
                                            {content.genres.map((genre) => (
                                                <span key={genre.id}>
                                                    {genre.name}{" "}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='info__title'>키워드</h3>
                                        <div className='info__value'>
                                            <div className='keywords'>
                                                {content.keywords.keywords
                                                    ? content.keywords.keywords?.map(
                                                          (keyword) => (
                                                              <span
                                                                  className='keyword'
                                                                  key={
                                                                      keyword.id
                                                                  }
                                                              >
                                                                  #
                                                                  {keyword.name}
                                                              </span>
                                                          )
                                                      )
                                                    : content.keywords.results?.map(
                                                          (keyword) => (
                                                              <span
                                                                  className='keyword'
                                                                  key={
                                                                      keyword.id
                                                                  }
                                                              >
                                                                  #
                                                                  {keyword.name}
                                                              </span>
                                                          )
                                                      )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {content.videos.results.length > 0 && (
                                <div className='detail__video'>
                                    <h2>트레일러</h2>
                                    <Videos
                                        key={content.id}
                                        videos={content.videos.results}
                                    />
                                </div>
                            )}
                            <div className='detail__casts'>
                                <h2>배우</h2>
                                <Casts
                                    casts={content.credits.cast.slice(0, 6)}
                                />
                            </div>
                            {content.recommendations.results.length > 0 && (
                                <div className='content__recommendations'>
                                    <h2>추천 콘텐츠</h2>
                                    <Swiper
                                        modules={[Navigation]}
                                        spaceBetween={20}
                                        slidesPerView={6}
                                        navigation={true}
                                    >
                                        {content.recommendations.results.map(
                                            (value) => (
                                                <SwiperSlide key={value.id}>
                                                    <Poster
                                                        backdrop_path={
                                                            value.backdrop_path!
                                                        }
                                                        id={value.id}
                                                        poster_path={
                                                            value.poster_path!
                                                        }
                                                        vote_average={
                                                            value.vote_average!
                                                        }
                                                        isLargeRow
                                                        media_type={
                                                            value.media_type
                                                        }
                                                        title={value.name}
                                                    />
                                                </SwiperSlide>
                                            )
                                        )}
                                    </Swiper>
                                </div>
                            )}
                        </div>
                    </>
                )
            )}
        </DetailWrap>
    );
}

const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    .detail__content {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        h2 {
            color: white;
            margin-bottom: 10px;
        }
        .content__info {
            .info__ {
                &title {
                    color: #8d8b8b;
                }
                &value {
                    color: white;
                    .keywords {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 5px;
                        margin-top: 5px;
                        .keyword {
                            cursor: pointer;
                            background-color: unset;
                            border-radius: 4px;
                            border: 1px solid #d3800c;
                            color: #d3800c;
                            padding: 10px 15px;
                            &:hover {
                                background-color: #d3800c;
                                color: white;
                            }
                        }
                    }
                }
                &row {
                    margin-bottom: 10px;
                    column-gap: 5px;
                    display: flex;
                    margin-top: auto;
                }
            }
        }
        .content__recommendations {
            width: 100%;
            color: white;
            height: 150px;
            .swiper-button- {
                &next,
                &prev {
                    height: 100%;
                    top: 13px;
                    z-index: 3;
                }
                &disabled {
                    opacity: 0;
                }
            }
        }
    }
`;
