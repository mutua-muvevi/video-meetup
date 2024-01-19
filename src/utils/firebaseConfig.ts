import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBiBiYwxF9N879REOYKX2HPNOeCOW1f0HE",
  authDomain: "video-meeting-224a5.firebaseapp.com",
  projectId: "video-meeting-224a5",
  storageBucket: "video-meeting-224a5.appspot.com",
  messagingSenderId: "616865446634",
  appId: "1:616865446634:web:64b8d93e8b1ec70ae6b593",
  measurementId: "G-6YB1VKTRHK"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
