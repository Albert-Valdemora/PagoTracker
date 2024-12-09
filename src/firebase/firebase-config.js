import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD4y5LrJB3PdDLgG7l5TSvh3XntgKtwwLI",
  authDomain: "pago-tracker.firebaseapp.com",
  projectId: "pago-tracker",
  storageBucket: "pago-tracker.firebasestorage.app",
  messagingSenderId: "1094182766029",
  appId: "1:1094182766029:web:4c443bc4707f227d38b084"
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