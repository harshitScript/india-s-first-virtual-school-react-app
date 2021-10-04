import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxDe5NBOX90FK4vmxhFxedti1ovtRNdUQ",
  authDomain: "ifvs-8e70a.firebaseapp.com",
  databaseURL: "https://ifvs-8e70a-default-rtdb.firebaseio.com",
  projectId: "ifvs-8e70a",
  storageBucket: "gs://ifvs-8e70a.appspot.com",
  messagingSenderId: "1043791937034",
  appId: "1:1043791937034:web:27f5eb6deebf2f8b56a9f3",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// STORAGE ACCESS
export const storage = getStorage(firebaseApp);
