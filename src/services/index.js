
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBpWpWs2lM9X5J9Dew7rirSXEviI0o5N9I",
  authDomain: "backend-ecommerce-621f3.firebaseapp.com",
  projectId: "backend-ecommerce-621f3",
  storageBucket: "backend-ecommerce-621f3.appspot.com",
  messagingSenderId: "1031140359290",
  appId: "1:1031140359290:web:b971ffdb6b7e73ffd04fc3"
};


const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)