import styled from "styled-components";

export default function Cast({
    profile_path,
    name,
}: {
    profile_path: string;
    name: string;
}) {
    return (
        <>
            <Actor bg={profile_path}></Actor>
            <span>{name}</span>
        </>
    );
}

const Actor = styled.div<{ bg: string }>`
    border-radius: 50%;
    width: 120px;
    height: 120px;
    background-image: ${({ bg }) =>
        `url(https://image.tmdb.org/t/p/original${bg})`};
    background-size: cover;
    background-position: center;
`;
