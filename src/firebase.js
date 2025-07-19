
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuclkSN9g84gUj7MqEn2AWoxPa5BOXUD8",
  authDomain: "firecode-2aa39.firebaseapp.com",
  projectId: "firecode-2aa39",
  storageBucket: "firecode-2aa39.firebasestorage.app",
  messagingSenderId: "861492134135",
  appId: "1:861492134135:web:d8f361e4b109bc7cf6d3f2",
  measurementId: "G-YD6E0DZ3ZJ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };