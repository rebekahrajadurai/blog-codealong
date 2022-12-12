import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5MqNpfJCineYPCQLeEw3aIwuP7trhjnA",
  authDomain: "blog-codealong-950ba.firebaseapp.com",
  projectId: "blog-codealong-950ba",
  storageBucket: "blog-codealong-950ba.appspot.com",
  messagingSenderId: "744191449571",
  appId: "1:744191449571:web:6909c583e67683340fe8d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
