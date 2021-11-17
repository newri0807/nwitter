import React, { useState } from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Auth from 'routes/Auth';
import Home from 'routes/Home';


const AppRouter = ({ isLoggedIn }) => {
    return (
        <BrowserRouter>
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path='/' element={<Home />}> </Route>
                    </>)

                    : (<Route exact path='/' element={<Auth />}> </Route>)
                }
            </Routes>
        </BrowserRouter >
    );

}

export default AppRouter;


