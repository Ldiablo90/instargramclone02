import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhIl24zXoCRqJZ9LR-ZDFRZ2cIG6YXzCs",
  authDomain: "instagram-clone-02-f555d.firebaseapp.com",
  projectId: "instagram-clone-02-f555d",
  storageBucket: "instagram-clone-02-f555d.appspot.com",
  messagingSenderId: "590619926242",
  appId: "1:590619926242:web:a68faff995ccc6b16848bb",
  measurementId: "G-19BSGY4Y2D"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

export default firebase
