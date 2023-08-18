import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqRzCPWbdXNtmge_TX9qw_Tm4XAke0Nhk",
  authDomain: "fir-todo-8bd59.firebaseapp.com",
  projectId: "fir-todo-8bd59",
  storageBucket: "fir-todo-8bd59.appspot.com",
  messagingSenderId: "66267405030",
  appId: "1:66267405030:web:e76bc3a95fc1b6ede8f927"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);