
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA10mTFtxzILH7m9k9haSNfn0dgnQ3-x6g",
  authDomain: "auth-d1b17.firebaseapp.com",
  projectId: "auth-d1b17",
  storageBucket: "auth-d1b17.appspot.com",
  messagingSenderId: "107822051125",
  appId: "1:107822051125:web:36be7bd6eefc316bff267c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);