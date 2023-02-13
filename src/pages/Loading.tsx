import styled from "styled-components";

export default function Loading() {
    return <LoadingWrap>Loading</LoadingWrap>;
}

const LoadingWrap = styled.div`
    color: white;
    height: 100vh;
    width: 100%;
    text-align: center;
    justify-content: center;
`;
