// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhIl24zXoCRqJZ9LR-ZDFRZ2cIG6YXzCs",
  authDomain: "instagram-clone-02-f555d.firebaseapp.com",
  projectId: "instagram-clone-02-f555d",
  storageBucket: "instagram-clone-02-f555d.appspot.com",
  messagingSenderId: "590619926242",
  appId: "1:590619926242:web:a68faff995ccc6b16848bb",
  measurementId: "G-19BSGY4Y2D"
};

firebase.apps

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);