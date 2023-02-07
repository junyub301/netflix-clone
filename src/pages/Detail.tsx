import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Banner from "../components/common/Banner";

export default function Detail() {
    const { id } = useParams();

    useEffect(() => {
        async function getDetailContent() {}
    }, [id]);
    return (
        <DetailWrap>
            <Banner />
        </DetailWrap>
    );
}

const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
