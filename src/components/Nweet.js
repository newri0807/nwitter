import { dbService } from 'fbase';
import React from "react";
import { doc, deleteDoc, updateDoc } from "@firebase/firestore";
import { useState } from 'react/cjs/react.development';


const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            // delete 부분
            await deleteDoc(NweetTextRef);
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
        <div>
            {editing ? (
                <>
                    {isOwner && (
                        <>
                            <form onSubmit={onSubmit}>
                                <input
                                    type="text"
                                    placeholder="Edit your nweet"
                                    value={newNweet}
                                    required
                                    onChange={onChange}
                                />
                                <input type="submit" value="Update Nweet" />
                            </form>
                            <button onClick={toggleEditing}>Cancel</button>
                        </>
                    )

                    }
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Nweet</button>
                            <button onClick={toggleEditing}>Edit Nweet</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default Nweet;