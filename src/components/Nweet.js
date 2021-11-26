import { dbService, storageService } from 'fbase';
import React from "react";
import { doc, deleteDoc, updateDoc, getFirestore } from "@firebase/firestore";
import { useState } from 'react/cjs/react.development';
import { deleteObject, ref } from '@firebase/storage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";


const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            // delete 부분
            await deleteDoc(NweetTextRef);
            await deleteDoc(doc(getFirestore(), `nweets/${nweetObj.id}`));
            await deleteObject(ref(storageService, nweetObj.attachmentUrl));
        }
    };

    const toggleEditing = () => setEditing((prev) => !prev);

    const onSubmit = async (event) => {
        event.preventDefault();
        //작성법1
        await updateDoc(doc(dbService, `nweets/${nweetObj.id}`), {
            text: newNweet,
        });

        //작성법2
        // await updateDoc(NweetTextRef, {
        //     text: newNweet,
        // });


        setEditing(false);
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    };

    return (
        <div className="nweet">
            {editing ? (
                <>
                    {isOwner && (
                        <>
                            <form onSubmit={onSubmit} className="container nweetEdit">
                                <input
                                    type="text"
                                    placeholder="Edit your nweet"
                                    value={newNweet}
                                    required
                                    autoFocus
                                    onChange={onChange}
                                    className="formInput"
                                />
                                <input type="submit" value="Update Nweet" className="formBtn" />
                            </form>
                            <span onClick={toggleEditing} className="formBtn cancelBtn">
                                Cancel
                            </span>
                        </>
                    )

                    }
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {/* {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} width="50px" height="50px" />} */}
                    {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
                    {isOwner && (
                        // <>
                        //     <button onClick={onDeleteClick}>Delete Nweet</button>
                        //     <button onClick={toggleEditing}>Edit Nweet</button>
                        // </>
                            <div className="nweet__actions">
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                                <span onClick={toggleEditing}>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </span>
                            </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Nweet;