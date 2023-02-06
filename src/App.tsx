import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import BaseScreen from "./pages/BaseScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useRecoilState } from "recoil";
import { userState } from "./store/user";
import Profile from "./pages/Profile";
import styled from "styled-components";

function App() {
    const [user, setUser] = useRecoilState(userState);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                //log in
                console.log(userAuth);
            } else {
                //log out
                setUser(null);
            }
        });

        return unsubscribe;
    }, [user]);
    return (
        <AppWrap className='App'>
            <BrowserRouter>
                {!user ? (
                    <BaseScreen />
                ) : (
                    <Routes>
                        <Route path='/' element={<HomeScreen />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                )}
            </BrowserRouter>
        </AppWrap>
    );
}

export default App;

const AppWrap = styled.div`
    background-color: black;
`;
