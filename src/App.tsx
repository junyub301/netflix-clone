import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import BaseScreen from "./pages/BaseScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
    const user = null;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                console.log(userAuth);
            } else {
            }
        });

        return unsubscribe;
    }, []);
    return (
        <div className='App'>
            <BrowserRouter>
                {!user ? (
                    <BaseScreen />
                ) : (
                    <Routes>
                        <Route path='/' element={<HomeScreen />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
