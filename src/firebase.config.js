import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoZdR01RxD21XLOj7sxkwUe4ptIFp-VAc",
  authDomain: "uzshop-f3e02.firebaseapp.com",
  projectId: "uzshop-f3e02",
  storageBucket: "uzshop-f3e02.appspot.com",
  messagingSenderId: "131849850064",
  appId: "1:131849850064:web:aa4e136315846e728f62d5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
