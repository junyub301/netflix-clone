import styled from "styled-components";
import { Cast as CastType } from "../../../types";
import Cast from "./Cast";

export default function Casts({ casts }: { casts: CastType[] }) {
    return (
        <CastWrap>
            {casts.map((cast) => (
                <div key={cast.id} className='cast__info'>
                    <Cast profile_path={cast.profile_path} name={cast.name} />
                </div>
            ))}
        </CastWrap>
    );
}

const CastWrap = styled.div`
    display: flex;
    color: white;
    justify-content: space-between;
    .cast__info {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: 500;
        row-gap: 3px;
    }
`;
