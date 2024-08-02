import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_nO1BVcyrDu0r3ILMT7aZNKb3MFOJA9A",
  authDomain: "padel-co-f410e.firebaseapp.com",
  projectId: "padel-co-f410e",
  storageBucket: "padel-co-f410e.appspot.com",
  messagingSenderId: "494914963855",
  appId: "1:494914963855:web:26a935de55a87fcb7da3fa",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
