// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-native-expo-e4a4e.firebaseapp.com",
  projectId: "react-native-expo-e4a4e",
  storageBucket: "react-native-expo-e4a4e.firebasestorage.app",
  messagingSenderId: "229792852709",
  appId: "1:229792852709:web:2fb783b6b0c9a5ef64c20c",
  measurementId: "G-Z8C6RJX3GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);