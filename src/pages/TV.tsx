import Row from "../components/browse/Row";
import Banner from "../components/common/Banner";
import { TV as TvType } from "../types";

interface TvProps {
    contents?: TvContents;
}

export interface TvContents {
    topRate: TvType[];
    nowPlaying: TvType[];
    popular: TvType[];
    mysteryTvs: TvType[];
    comedyTvs: TvType[];
    aniTvs: TvType[];
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
                contents={contents.nowPlaying}
            />
            <Row<TvType> title='인기 콘텐츠' contents={contents.popular} />
            <Row<TvType> title='미스테리' contents={contents.mysteryTvs} />
            <Row<TvType> title='코미디' contents={contents.comedyTvs} />
            <Row<TvType> title='애니' contents={contents.aniTvs} />
            <Row<TvType> title='로맨스' contents={contents.romanceTvs} />
            <Row<TvType> title='다큐' contents={contents.documentaries} />
        </>
    ) : (
        <></>
    );
}
