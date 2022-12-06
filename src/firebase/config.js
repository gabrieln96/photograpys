import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCma2LHjyZPGoelTblV9mKy-_FD4iX58GE",
  authDomain: "photograpys.firebaseapp.com",
  projectId: "photograpys",
  storageBucket: "photograpys.appspot.com",
  messagingSenderId: "448107579466",
  appId: "1:448107579466:web:d9268c8c695d68d68d7eb3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };