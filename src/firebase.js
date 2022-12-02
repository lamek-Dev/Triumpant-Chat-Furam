// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1k97TCsX3vLNTumeI0Ba91MMrOICR7kc",
  authDomain: "chat-forum-41ecb.firebaseapp.com",
  projectId: "chat-forum-41ecb",
  storageBucket: "chat-forum-41ecb.appspot.com",
  messagingSenderId: "174937456984",
  appId: "1:174937456984:web:b314871dcb4fbeadaf252d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
