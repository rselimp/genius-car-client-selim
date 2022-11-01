// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAeZidD2G79xVz6Ncwk96ODo_vdlokBcM",
  authDomain: "genius-car-selim.firebaseapp.com",
  projectId: "genius-car-selim",
  storageBucket: "genius-car-selim.appspot.com",
  messagingSenderId: "379786424343",
  appId: "1:379786424343:web:3fcec6cdb47d58e877ac52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;