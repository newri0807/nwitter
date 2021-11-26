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
   // const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
   //const [attachment, setAttachment] = useState("");

    console.log(nweets);
    // const getNweets = async () => {
    //     const q = query(collection(dbService, "nweets"));
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         const nweetObj = {
    //             ...doc.data(),
    //             id: doc.id,

    //         }
    //         setNweets(prev => [nweetObj, ...prev]);
    //     });
    // };

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

    // const onFileChange = (event) => {
    //     console.log(event.target.files);
    //     const {
    //         target: { files },
    //     } = event;

    //     //[FileReader API]
    //     const theFile = files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = (finishedEvent) => {
    //         console.log(finishedEvent);
    //         const {
    //             currentTarget: { result },
    //         } = finishedEvent;
    //         setAttachment(result);
    //     };
    //     reader.readAsDataURL(theFile);
    // };

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     // await addDoc(collection(dbService, "nweets"), {
    //     //     text: nweet,
    //     //     createdAt: Date.now(),
    //     //     creatorId: userObj.uid,
    //     // });
    //     // setNweet("");


    //     // const fileRef = ref(storageService, `${userObj.uid}/${v4()}`); // 1. 이미지 폴더 생성
    //     // const response = await uploadString(fileRef, attachment, "data_url"); // 2. 폴더에 이미지 넣는 작업
    //     // console.log(await response.ref.getDownloadURL());


    //     let attachmentUrl = "";
    //     if (attachment !== "") {
    //         //파일 경로 참조 만들기
    //         const fileRef = ref(storageService, `${userObj.uid}/${v4()}`);
    //         //storage 참조 경로로 파일 업로드 하기
    //         const uploadFile = await uploadString(fileRef, attachment, "data_url");
    //         console.log(uploadFile);
    //         //storage에 있는 파일 URL로 다운로드 받기
    //         attachmentUrl = await getDownloadURL(uploadFile.ref);
    //     }

    //     //트윗할때, 메시지와 사진도 같이 firestore에 생성
    //     const nweetPosting = {
    //         text: nweet,
    //         createdAt: Date.now(),
    //         creatorId: userObj.uid,
    //         attachmentUrl,
    //     };
    //     await addDoc(collection(dbService, "nweets"), nweetPosting);
    //     setNweet("");
    //     setAttachment("");


    // };




    // const onChange = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setNweet(value);
    // };

    // // clear 버튼 클릭시 사진, 파일 네임 초기화
    // const fileInput = useRef();
    // const onClearAttachment = () => {
    //     setAttachment("");
    //     fileInput.current.value = null;
    // }




    // console.log(userObj);
    return (
        <div>
            {/* <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="file" accept="image/*" onChange={onFileChange} ref={fileInput} />
                <input type="submit" value="Nweet" />
                {attachment && (
                    <div>
                        <img src={attachment} width="50px" height="50px" />
                        <button onClick={onClearAttachment}>Clear</button>
                    </div>
                )}
            </form> */}
             <NweetFactory userObj={userObj} />
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};
export default Home;