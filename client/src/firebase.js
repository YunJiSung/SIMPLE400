import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBWrA-t4pw99l5x-MMqcI3uld2_kWf7BNk",
    authDomain: "react-blog-1b1ba.firebaseapp.com",
    projectId: "react-blog-1b1ba",
    storageBucket: "react-blog-1b1ba.appspot.com",
    messagingSenderId: "190958496742",
    appId: "1:190958496742:web:3355ea7d7d9be57a0ac427"
};


firebase.initializeApp(firebaseConfig);

export default firebase;
