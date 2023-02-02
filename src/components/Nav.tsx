import React from "react";
import styled from "styled-components";

export default function Nav() {
    return (
        <NavWrap className='nav__black'>
            <div className='nav__contents'>
                <img
                    className='nav__logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='netflix_log'
                />
                <img
                    className='nav__avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='netflix_avatar'
                />
            </div>
        </NavWrap>
    );
}

const NavWrap = styled.div`
    position: fixed;
    top: 0;
    padding: 20px;
    width: 100%;
    height: 30px;
    z-index: 1;

    /* Animations */
    transition-timing-function: ease-in;
    transition: all 0.5s;

    &.nav__black {
        background-color: black;
    }
    .nav__contents {
        display: flex;
        justify-content: space-between;
        .nav__logo {
            position: fixed;
            left: 0;
            top: 10px;
            width: 80px;
            object-fit: contain;
            padding-left: 20px;
            cursor: pointer;
        }
        .nav__avatar {
            cursor: pointer;
            position: fixed;
            right: 20px;
            width: 30px;
        }
    }
`;
