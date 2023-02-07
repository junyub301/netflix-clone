import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BaseScreen from "./pages/BaseScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useRecoilState } from "recoil";
import { userState } from "./store/user";
import Profile from "./pages/Profile";
import styled from "styled-components";
import Nav from "./components/common/Nav";
import Detail from "./pages/Detail";
import Movie from "./pages/Movie";
import Browse from "./pages/Browse";

function App() {
    const [user, setUser] = useRecoilState(userState);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (!userAuth) {
                setUser(null);
            }
        });

        return unsubscribe;
    }, [user]);
    return (
        <AppWrap className='App'>
            <BrowserRouter>
                {user ? (
                    <BaseScreen />
                ) : (
                    <>
                        <Nav />
                        <Routes>
                            <Route path='/browse' element={<Browse />}>
                                <Route path='movie' element={<Movie />} />
                            </Route>
                            <Route path='/profile' element={<Profile />} />
                            <Route path='/detail/:id' element={<Detail />} />
                        </Routes>
                    </>
                )}
            </BrowserRouter>
        </AppWrap>
    );
}

export default App;

const AppWrap = styled.div`
    background-color: black;
`;
