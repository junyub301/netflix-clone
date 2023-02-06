import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { auth } from "../firebase";
import { userState } from "../store/user";

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const setUser = useSetRecoilState(userState);

    const register = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        if (emailRef.current && passwordRef.current) {
            createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            )
                .then((authUser) => {
                    console.log(authUser);
                })
                .catch((error) => alert(error.message));
        }
    };

    const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (emailRef.current && passwordRef.current) {
            signInWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            )
                .then((authUser) => {
                    const {
                        user: { uid, email },
                    } = authUser;
                    setUser({ uid, email: email! });
                })
                .catch((error) => alert(error.message));
        }
    };
    return (
        <LoginWrap>
            <form>
                <h1>로그인</h1>
                <input
                    ref={emailRef}
                    placeholder='이메일 주소 또는 전화번호'
                    type='email'
                />
                <input
                    ref={passwordRef}
                    placeholder='비밀번호'
                    type='password'
                />
                <button type='submit' onClick={signIn}>
                    로그인
                </button>

                <h4>
                    <span className='sign_up__gray'>
                        Netflix 회원이 아닌가요?{" "}
                    </span>
                    <span className='sign_up__link' onClick={register}>
                        지금 가입하세요.
                    </span>
                </h4>
            </form>
        </LoginWrap>
    );
}

const LoginWrap = styled.div`
    max-width: 300px;
    padding: 70px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(0, 0, 0, 0.85);

    h1 {
        text-align: left;
        margin-bottom: 25px;
    }

    form {
        display: grid;
        flex-direction: column;
    }

    input {
        outline-width: 0;
        height: 40px;
        margin-bottom: 14px;
        border-radius: 5px;
        border: none;
        padding: 5px 15px;
    }
    button {
        padding: 16px 20px;
        font-size: 1rem;
        color: #fff;
        border-radius: 5px;
        background-color: #e50914;
        font-weight: 600;
        border: none;
        cursor: pointer;
        margin-top: 20px;
    }
    h4 {
        .sign_up__gray {
            color: gray;
        }
        .sign_up__link {
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
        text-align: left;
        margin-top: 30px;
    }
`;
