import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQ06K7Rd5fcpBFJExQ11QuBP-9lX0aV3Q",
  authDomain: "react-app-curso-db077.firebaseapp.com",
  projectId: "react-app-curso-db077",
  storageBucket: "react-app-curso-db077.appspot.com",
  messagingSenderId: "584805944913",
  appId: "1:584805944913:web:8f0c6e5b0ee22166a73270"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export{
  db,
  googleAuthProvider,
  auth
}