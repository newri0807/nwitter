import React, { useState } from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from 'components/Navigation';
import Profile from 'routes/Profile';


const AppRouter = ({ isLoggedIn, userObj }) => {

    console.log(userObj);
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation />}
            <Routes>


                {isLoggedIn ? (
                    <>
                        <Route exact path='/' element={<Home userObj={userObj} />} > </Route>
                        <Route exact path='/profile' element={<Profile />}> </Route>
                    </>)

                    : (<Route exact path='/' element={<Auth />}> </Route>)
                }
            </Routes>
        </BrowserRouter >
    );

}

export default AppRouter;


