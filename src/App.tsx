import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Nav from "./components/common/Nav";
import { auth } from "./firebase";
import BaseScreen from "./pages/BaseScreen";
import Browse from "./pages/Browse";
import Detail from "./pages/Detail";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import TV from "./pages/TV";
import { userState } from "./store/user";

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
                                <Route path='tv' element={<TV />} />
                                <Route path='movie/:id' element={<Detail />} />
                                <Route path='tv/:id' element={<Detail />} />
                            </Route>
                            <Route path='/profile' element={<Profile />} />
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
