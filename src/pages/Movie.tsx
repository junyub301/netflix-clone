import Banner from "../components/common/Banner";
import Row from "../components/Row";
import { Movie as MovieType } from "../types";

interface MovieProps {
    contents?: MovieContents;
}

export interface MovieContents {
    topRate: MovieType[];
    nowPlaying: MovieType[];
    popular: MovieType[];
    actionMovies: MovieType[];
    comedyMovies: MovieType[];
    horrorMovies: MovieType[];
    romanceMovies: MovieType[];
    documentaries: MovieType[];
}
export default function Movie({ contents }: MovieProps) {
    return contents !== undefined ? (
        <>
            <Banner movieInfo={contents.topRate[0]} />
            <Row title='TOP 20 영화' isLargeRow contents={contents.topRate} />
            <Row
                title='상영중인영화'
                isLargeRow
                contents={contents.nowPlaying}
            />
            <Row title='인기 콘텐츠' isLargeRow contents={contents.popular} />
            <Row title='액션' isLargeRow contents={contents.actionMovies} />
            <Row title='코미디' isLargeRow contents={contents.comedyMovies} />
            <Row title='호러' isLargeRow contents={contents.horrorMovies} />
            <Row title='로맨스' isLargeRow contents={contents.romanceMovies} />
            <Row title='다큐' isLargeRow contents={contents.documentaries} />
        </>
    ) : (
        <></>
    );
}
