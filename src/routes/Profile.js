import { updateProfile } from '@firebase/auth';
import { collection, getDocs, orderBy, query, where } from '@firebase/firestore';
import { authService, dbService } from 'fbase';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default ({ userObj , refreshUser}) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
    };
    // const getMyNweets = async () => {
    //     const q = query(
    //         collection(dbService, "nweets"),
    //         where("creatorId", "==", userObj.uid),
    //         orderBy("createAt"),

    //     );
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // };
    // useEffect(() => {
    //     getMyNweets();
    // }, [userObj])
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };


    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     if (userObj.displayName !== newDisplayName) {
    //         await updateProfile(userObj, { displayName: newDisplayName });
    //         refreshUser();
    //     }
    // };

    const onSubmit = async (event) => {
        event.preventDefault();
        await updateProfile(await authService.currentUser, {
            displayName: newDisplayName,
        });
        refreshUser();
    };


    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    placeholder="Display name"
                    value={newDisplayName}
                />
                <input type="submit" value="Update Profile" />
            </form>


            <button onClick={onLogOutClick} >
                <Link to="/" >Log Out</Link>

            </button>
        </>
    )
};