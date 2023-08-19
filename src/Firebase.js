import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATli_yVMU4lhKTArfWm8p1MXZCoH3PyWA",
    authDomain: "portfoliocontact-win.firebaseapp.com",
    projectId: "portfoliocontact-win",
    storageBucket: "portfoliocontact-win.appspot.com",
    messagingSenderId: "75385349076",
    appId: "1:75385349076:web:66bb7b05d392da1fc16c41",
    measurementId: "G-WSMB4SJ6NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
