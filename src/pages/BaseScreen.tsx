import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Login from "./Login";

export default function BaseScreen() {
    const [signIn, setSignIn] = useState<boolean>(false);

    return (
        <BaseWrap>
            <div className='login__background'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt='netflix_log'
                />
                <Button
                    onClick={() => setSignIn(true)}
                    className='login__btn'
                    value='로그인'
                >
                    로그인
                </Button>

                <div className='login__gradient'></div>
            </div>
            <div className='login__body'>
                {signIn ? (
                    <Login />
                ) : (
                    <>
                        <h1>영화와 시리즈를 무제한으로.</h1>
                        <h2>
                            다양한 디바이스에서 시청하세요. 언제든 해지하실 수
                            있습니다.
                        </h2>
                        <h3>
                            시청할 준비가 되셨나요? 멤버십을 등록하거나
                            재시작하려면 이메일 주소를 입력하세요.
                        </h3>
                        <div className='login__input'>
                            <form>
                                <input type='email' placeholder='이메일 주소' />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className='login__getStarted'
                                >
                                    시작하기
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </BaseWrap>
    );
}

const BaseWrap = styled.div`
    position: relative;
    height: 100%;
    background: url(https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2108183d-fee2-43b6-9232-8cf942f0af4b/KR-ko-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg)
        center no-repeat;
    .login__background {
        .login__logo {
            position: fixed;
            left: 0;
            width: 150px;
            object-fit: contain;
            top: 20px;
            padding-left: 20px;
        }
        .login__btn {
            position: fixed;
            right: 20px;
            top: 20px;
            padding: 10px 20px;
            font-weight: 800;
        }
        .login__gradient {
            width: 100%;
            z-index: 1;
            height: 100vh;
            background: rgba(0, 0, 0, 0.4);
            background-image: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.8) 0,
                rgba(0, 0, 0, 0) 60%,
                rgba(0, 0, 0, 0.8) 100%
            );
        }
    }
    .login__body {
        position: absolute;
        top: 20vh;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        z-index: 1;
        color: #fff;
        padding: 20px;
        left: 0;
        right: 0;
        h1 {
            font-size: 3.125rem;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 2rem;
            font-weight: 400;
            margin-bottom: 30px;
        }
        h3 {
            font-size: 1.3rem;
            font-weight: 400;
        }
        .login__input {
            margin: 20px;
            input {
                padding: 10px;
                outline-width: 0;
                height: 30px;
                width: 30%;
                border: none;
                max-width: 680px;
            }
            .login__getStarted {
                padding: 16px 20px;
                font-size: 1rem;
                color: #fff;
                background-color: #e50914;
                border: none;
                font-weight: 600;
                cursor: pointer;
            }
        }
    }
`;
