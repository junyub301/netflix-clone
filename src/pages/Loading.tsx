import styled from "styled-components";
export default function Loading() {
    return (
        <LoadingWrap>
            <LoadingContainer role='img' aria-label='Loading'>
                <Title>Loading...</Title>
            </LoadingContainer>
        </LoadingWrap>
    );
}

const LoadingWrap = styled.div`
    width: 100vw;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: white;
    font-size: 18px;
    margin-top: 10px;
`;
