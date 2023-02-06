import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";
import Button from "../components/common/Button";
import Nav from "../components/Nav";
import Plans from "../components/Plans";
import { userState } from "../store/user";

export default function Profile() {
    const user = useRecoilValue(userState);
    const logout = useResetRecoilState(userState);
    return (
        <ProfileWrap>
            <Nav />
            <div className='profile__body'>
                <h1>Edit profile</h1>
                <div className='profile__info'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                        alt='avatar'
                    />
                    <div className='profile__details'>
                        <h2>{user?.email}</h2>
                        <div className='profile__plans'>
                            <h3>Plans</h3>
                            <Plans />
                            <Button
                                onClick={() => logout()}
                                className='profile__logOut'
                                value='로그아웃'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ProfileWrap>
    );
}

const ProfileWrap = styled.div`
    height: 100vh;
    color: white;
    .profile__body {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 8%;
        max-width: 800px;

        h1 {
            font-size: 60px;
            font-weight: 400;
            border-bottom: 1px solid #282c2d;
            margin-bottom: 20px;
        }

        .profile__info {
            display: flex;

            img {
                height: 100px;
            }
        }

        .profile__details {
            color: white;
            margin-left: 25px;
            flex: 1;
            h2 {
                background-color: gray;
                padding: 15px;
                font-size: 15px;
                padding-left: 20px;
            }
            .profile__plans {
                margin-top: 20px;
                h3 {
                    border-bottom: 1px solid #282c2d;
                    padding-bottom: 10px;
                }

                .profile__logOut {
                    padding: 10px 20px;
                    margin-top: 5%;
                    width: 100%;
                }
            }
        }
    }
`;
