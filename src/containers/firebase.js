import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqXjqPjpKECsjOydh7lT_hY42uOlcn1hM",
  authDomain: "recipe-search-20bd2.firebaseapp.com",
  projectId: "recipe-search-20bd2",
  storageBucket: "recipe-search-20bd2.appspot.com",
  messagingSenderId: "304703199841",
  appId: "1:304703199841:web:47a0981c253dc0de0ea820",
  measurementId: "G-T3H02J3SQY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};