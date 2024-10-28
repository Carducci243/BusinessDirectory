// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYUnUSS0_GKSdSnG-1sIjdpmIKPBDVjUQ",
  authDomain: "businessdirectory-bfd7c.firebaseapp.com",
  projectId: "businessdirectory-bfd7c",
  storageBucket: "businessdirectory-bfd7c.appspot.com",
  messagingSenderId: "671072664432",
  appId: "1:671072664432:web:f151d7328debebfbf3adb5",
  measurementId: "G-CY2QE3QJZY"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app)