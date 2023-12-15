import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh2Aqv0sdB2QdxTQAQBtlVj-8ahZlHoVg",
  authDomain: "errandwave.firebaseapp.com",
  projectId: "errandwave",
  storageBucket: "errandwave.appspot.com",
  messagingSenderId: "958069861371",
  appId: "1:958069861371:web:691a7e17ddbe02c1f3f95e",
  measurementId: "G-RQB9B6VELL",
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
