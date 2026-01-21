// Fill this file with your Firebase project's config object.
// Replace the "TODO" values with the values from your Firebase console (web app config).

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCKGqXnzhUsmlaBJ8tycuvD4CSDjEyUoJ4",
  authDomain: "aog-app-50d7a.firebaseapp.com",
  projectId: "aog-app-50d7a",
  storageBucket: "aog-app-50d7a.firebasestorage.app",
  messagingSenderId: "366143756710",
  appId: "1:366143756710:web:fa279b5a2fe0ed1cba1767"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
