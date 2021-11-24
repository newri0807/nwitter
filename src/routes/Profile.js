import { collection, getDocs, orderBy, query, where } from '@firebase/firestore';
import { authService, dbService } from 'fbase';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

export default ({ userObj }) => {
    const onLogOutClick = () => {
        authService.signOut();
        //history.pushState("/");
    };
    const getMyNweets = async () => {
        const q = query(
            collection(dbService, "nweets"),
            where("creatorId", "==", userObj.uid),
            orderBy("createAt"),

        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    };
    useEffect(() => {
        getMyNweets();
    }, [userObj])

    return (
        <>
            <button onClick={onLogOutClick} >
                <Link to="/" >Log Out</Link>

            </button>
        </>
    )
};