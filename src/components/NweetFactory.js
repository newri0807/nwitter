import React, { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { storageService, dbService } from "fbase";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { addDoc, collection } from "@firebase/firestore";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");



//   const onSubmit = async (event) => {
//     event.preventDefault();
//     let attachmentUrl = "";
//     if (attachment !== "") {
//       const attachmentRef = storageService
//         .ref()
//         .child(`${userObj.uid}/${uuidv4()}`);
//       const response = await attachmentRef.putString(attachment, "data_url");
//       attachmentUrl = await response.ref.getDownloadURL();
//     }
//     const nweetObj = {
//       text: nweet,
//       createdAt: Date.now(),
//       creatorId: userObj.uid,
//       attachmentUrl,
//     };
//     await dbService.collection("nweets").add(nweetObj);
//     setNweet("");
//     setAttachment("");
//   };


   const onSubmit = async (event) => {
        event.preventDefault();
        // await addDoc(collection(dbService, "nweets"), {
        //     text: nweet,
        //     createdAt: Date.now(),
        //     creatorId: userObj.uid,
        // });
        // setNweet("");


        // const fileRef = ref(storageService, `${userObj.uid}/${v4()}`); // 1. 이미지 폴더 생성
        // const response = await uploadString(fileRef, attachment, "data_url"); // 2. 폴더에 이미지 넣는 작업
        // console.log(await response.ref.getDownloadURL());


        let attachmentUrl = "";
        if (attachment !== "") {
            //파일 경로 참조 만들기
            const fileRef = ref(storageService, `${userObj.uid}/${v4()}`);
            //storage 참조 경로로 파일 업로드 하기
            const uploadFile = await uploadString(fileRef, attachment, "data_url");
            console.log(uploadFile);
            //storage에 있는 파일 URL로 다운로드 받기
            attachmentUrl = await getDownloadURL(uploadFile.ref);
        }

        //트윗할때, 메시지와 사진도 같이 firestore에 생성
        const nweetPosting = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        };
        await addDoc(collection(dbService, "nweets"), nweetPosting);
        setNweet("");
        setAttachment("");


    };

  
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };




//   const onFileChange = (event) => {
//     const {
//       target: { files },
//     } = event;
//     const theFile = files[0];
//     const reader = new FileReader();
//     reader.onloadend = (finishedEvent) => {
//       const {
//         currentTarget: { result },
//       } = finishedEvent;
//       setAttachment(result);
//     };
//     reader.readAsDataURL(theFile);
//   };


const onFileChange = (event) => {
        console.log(event.target.files);
        const {
            target: { files },
        } = event;

        //[FileReader API]
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            console.log(finishedEvent);
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };


  const onClearAttachment = () => setAttachment(null);





  return (
    <form onSubmit={onSubmit}>
      <input
        value={nweet}
        onChange={onChange}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Nweet" />
      {attachment && (
        <div>
          <img src={attachment} width="50px" height="50px" />
          <button onClick={onClearAttachment}>Clear</button>
        </div>
      )}
    </form>
  );
};
export default NweetFactory;