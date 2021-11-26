import React, { useEffect, useRef, useState } from "react";
import { dbService, storageService } from "fbase";
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore"
import Nweet from 'components/Nweet';
import { getDownloadURL, ref, uploadString } from '@firebase/storage';
//import { v4 } from 'uuid';
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
    console.log(userObj);
    const [nweets, setNweets] = useState([]);

    console.log(nweets);
    useEffect(() => {
        const q = query(
            collection(dbService, "nweets"),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArr);
        });
    }, []);

   
    return (
        <div className="container">           
             <NweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};
export default Home;