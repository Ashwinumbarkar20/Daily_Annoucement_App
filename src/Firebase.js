import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbcVrNUDrvok-AoFKuwpvFLPrNj7YZYac",
    authDomain: "annoucement-app.firebaseapp.com",
    projectId: "annoucement-app",
    storageBucket: "annoucement-app.appspot.com",
    messagingSenderId: "575759461437",
    appId: "1:575759461437:web:8d29ed6afc5e610e3fce54"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export default db;  