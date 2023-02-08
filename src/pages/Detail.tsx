import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi, tvApi } from "../api/request";
import Banner from "../components/common/Banner";
import Videos from "../components/Videos";
import { MovieDetail, TvDetail } from "../types";

export default function Detail() {
    const { id } = useParams();
    const { pathname } = useLocation();
    const [content, setContent] = useState<MovieDetail | TvDetail>();
    useEffect(() => {
        async function getDetailContent() {
            if (pathname.includes("movie")) {
                const { data } = await movieApi.fetchDetailMovie(+id!);
                setContent(data as MovieDetail);
            } else {
                const { data } = await tvApi.fetchDetailTv(+id!);
                setContent(data as TvDetail);
            }
        }
        getDetailContent();
    }, [id]);
    return (
        <DetailWrap>
            {content && (
                <>
                    <Banner movieInfo={content} />
                    <div>
                        {content.videos.results.map((val) => (
                            <Videos key={val.id} id={val.key} />
                        ))}
                    </div>
                </>
            )}
        </DetailWrap>
    );
}

const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
