import { useState } from "react";
import styled from "styled-components";
import { Video as VideoType } from "../../../types";
import Video from "./Video";

export default function Videos({ videos }: { videos: VideoType[] }) {
    const [showRest, setShowRest] = useState<boolean>(false);
    const onClick = () => {
        setShowRest((pre) => !pre);
    };
    return (
        <VideoWrap show={showRest}>
            <div className='video__content'>
                {videos.map((video) => (
                    <Video key={video.id} id={video.key} />
                ))}
            </div>
            {videos.length > 3 && (
                <div className='btn__aria'>
                    <button onClick={onClick}>{showRest ? "△" : "▽"}</button>
                </div>
            )}
        </VideoWrap>
    );
}

const VideoWrap = styled.div<{ show: boolean }>`
    .video__content {
        display: grid;
        row-gap: 20px;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        overflow-y: hidden;
        ${({ show }) => (show ? null : `height:18rem; `)};
    }
    transition: all 0.3ms;
    .btn__aria {
        position: relative;
        border-bottom: 2px solid #404040;
        box-shadow: none;
        display: flex;
        height: 6em;
        justify-content: center;
        width: 100%;
        margin-top: -6em;
        button {
            position: absolute;
            width: 50px;
            height: 50px;
            bottom: -23px;
            border-radius: 50%;
            left: 50%;
            border: 2px solid hsla(0, 0%, 100%, 0.5);
            background-color: rgba(42, 42, 42, 0.6);
            color: white;
            z-index: 3;
            cursor: pointer;
            &:hover {
                background-color: #545454;
                border-color: white;
            }
        }
    }
`;
