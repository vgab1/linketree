import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGSwbVbYy7LbhNPkGcKeHNvp3LrRO5efs",
  authDomain: "linketree-a56e6.firebaseapp.com",
  projectId: "linketree-a56e6",
  storageBucket: "linketree-a56e6.firebasestorage.app",
  messagingSenderId: "132742690528",
  appId: "1:132742690528:web:f5d8d03b9f2113b29ec285",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
