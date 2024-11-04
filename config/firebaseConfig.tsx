// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "kidstories-bdcfe.firebaseapp.com",
  projectId: "kidstories-bdcfe",
  storageBucket: "kidstories-bdcfe.firebasestorage.app",
  messagingSenderId: "760992382588",
  appId: "1:760992382588:web:4a9eee2e19f50861d6d3f9",
  measurementId: "G-LMY3YFT0T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)