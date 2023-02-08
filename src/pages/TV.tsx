import Banner from "../components/common/Banner";
import Row from "../components/Row";
import { TV as TvType } from "../types";

interface TvProps {
    contents?: TvContents;
}

export interface TvContents {
    topRate: TvType[];
    nowPlaying: TvType[];
    popular: TvType[];
    actionTvs: TvType[];
    comedyTvs: TvType[];
    horrorTvs: TvType[];
    romanceTvs: TvType[];
    documentaries: TvType[];
}
export default function TV({ contents }: TvProps) {
    return contents !== undefined ? (
        <>
            <Banner movieInfo={contents.topRate[0]} />
            <Row<TvType>
                title='TOP 20 드라마'
                isLargeRow
                contents={contents.topRate}
            />
            <Row<TvType>
                title='상영중인 드라마'
                isLargeRow
                contents={contents.nowPlaying}
            />
            <Row<TvType>
                title='인기 콘텐츠'
                isLargeRow
                contents={contents.popular}
            />
            <Row<TvType>
                title='액션'
                isLargeRow
                contents={contents.actionTvs}
            />
            <Row<TvType>
                title='코미디'
                isLargeRow
                contents={contents.comedyTvs}
            />
            <Row<TvType>
                title='호러'
                isLargeRow
                contents={contents.horrorTvs}
            />
            <Row<TvType>
                title='로맨스'
                isLargeRow
                contents={contents.romanceTvs}
            />
            <Row<TvType>
                title='다큐'
                isLargeRow
                contents={contents.documentaries}
            />
        </>
    ) : (
        <></>
    );
}
