import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
    const [show, setShow] = useState<boolean>(false);
    const navigate = useNavigate();
    const trasitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", trasitionNavBar);
        return () => window.removeEventListener("scroll", trasitionNavBar);
    }, []);
    return (
        <NavWrap className={show ? "nav__black" : undefined}>
            <div className='nav__contents'>
                <div className='nav__link'>
                    <img
                        onClick={() => navigate("/")}
                        className='nav__logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                        alt='netflix_log'
                    />
                    <LinkButton to='/browse'>홈</LinkButton>
                    <LinkButton to='/browse/movie'>영화</LinkButton>
                    <LinkButton to='/browse/tv'>TV</LinkButton>
                </div>
                <div>
                    <img
                        onClick={() => navigate("/profile")}
                        className='nav__avatar'
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                        alt='netflix_avatar'
                    />
                </div>
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
        .nav__link {
            position: fixed;
            left: 0;
            display: flex;
            width: 30%;
            justify-content: space-around;
            top: 10px;
            .nav__logo {
                width: 80px;
                object-fit: contain;
                padding-left: 20px;
                cursor: pointer;
            }
        }
        .nav__avatar {
            cursor: pointer;
            position: fixed;
            right: 20px;
            width: 30px;
        }
    }
`;

const LinkButton = styled(Link)`
    color: white;
    font-size: 1.3rem;
    padding: 10px;
    text-decoration: none;
    transition: color 0.4s;
    &:hover {
        color: #b3b3b3;
    }
`;
