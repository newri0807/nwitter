
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: "AIzaSyClAoj9lijdRL7qPk5PnEgVRyAaunvDBGA",
    // authDomain: "nwitter-9fb6c.firebaseapp.com",
    // projectId: "nwitter-9fb6c",
    // storageBucket: "nwitter-9fb6c.appspot.com",
    // messagingSenderId: "211654136733",
    // appId: "1:211654136733:web:2d9eb81df03a3c96fc1574"

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_DATABASE_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,

};


const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
