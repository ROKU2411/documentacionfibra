import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRORuF7vzc1KXk0YCFDYqF2ZtRaD7seqg",
  authDomain: "portafolio-6f150.firebaseapp.com",
  projectId: "portafolio-6f150",
  storageBucket: "portafolio-6f150.firebasestorage.app",
  messagingSenderId: "855578842972",
  appId: "1:855578842972:web:42c14b7e9d5b6036b5d399",
  measurementId: "G-6K5N1RJN85"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);