// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlQCZAROWdo8VGlQYn-5LTXWuXn_VlbMk",
  authDomain: "restaurant-management-sy-2f0c7.firebaseapp.com",
  projectId: "restaurant-management-sy-2f0c7",
  storageBucket: "restaurant-management-sy-2f0c7.appspot.com",
  messagingSenderId: "788632901005",
  appId: "1:788632901005:web:3ff83068a32f5f8d5599c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;