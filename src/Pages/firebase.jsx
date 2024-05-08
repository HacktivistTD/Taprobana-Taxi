// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLWXlqvv4jNG0hbn3jkHuUuHx3JLX1cA4",
  authDomain: "taxi-login-c314f.firebaseapp.com",
  projectId: "taxi-login-c314f",
  storageBucket: "taxi-login-c314f.appspot.com",
  messagingSenderId: "356189611098",
  appId: "1:356189611098:web:705a0bce67bebebb2fe463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;