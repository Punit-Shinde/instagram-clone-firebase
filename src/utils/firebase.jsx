import firebase from "firebase";

const firebase = firebase.initializeApp({
  apiKey: "AIzaSyApEsaaxM_omjNgF9ohwlPz80kSVuVrjGU",
  authDomain: "instagram-clone-10a70.firebaseapp.com",
  projectId: "instagram-clone-10a70",
  storageBucket: "instagram-clone-10a70.appspot.com",
  messagingSenderId: "528245409125",
  appId: "1:528245409125:web:5ba6bf61ed644494768d8c",
  measurementId: "G-VERE5Y539J",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
