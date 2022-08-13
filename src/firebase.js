import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3LE00Fm4W5aUCGVOdluXmyG8FHcGHgaA",
    authDomain: "challenge-113d7.firebaseapp.com",
    projectId: "challenge-113d7",
    storageBucket: "challenge-113d7.appspot.com",
    messagingSenderId: "716600883509",
    appId: "1:716600883509:web:ad31c70162efe77403747c",  
    measurementId: "G-65W6VZETPB" 

  };

  const firebaseApp = initializeApp(firebaseConfig);

 const auth = getAuth(firebaseApp);

 export {  auth,firebaseApp };
 //firebase
 