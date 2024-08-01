// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1Qo8KoDZqtEH42Zc31UMJgWMuw1uBbbk",
    authDomain: "buisness-category.firebaseapp.com",
    projectId: "buisness-category",
    storageBucket: "buisness-category.appspot.com",
    messagingSenderId: "460217300648",
    appId: "1:460217300648:web:6ed55daf431f2b4190349d",
    measurementId: "G-DVW80BL00S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);