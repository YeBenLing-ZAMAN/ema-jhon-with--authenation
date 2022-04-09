// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFlTStwsmyBRkv_FEHoVmW9jSmfWZc-qc",
  authDomain: "simple-emn-jhon-react-project.firebaseapp.com",
  projectId: "simple-emn-jhon-react-project",
  storageBucket: "simple-emn-jhon-react-project.appspot.com",
  messagingSenderId: "905876214846",
  appId: "1:905876214846:web:e1238806c403f3f3bbed6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;