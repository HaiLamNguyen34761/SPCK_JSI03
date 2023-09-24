
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7tFvxPrrBaNAzuFYKQfh-J9bVTX7bsLk",
  authDomain: "lesson-6-jsi03.firebaseapp.com",
  projectId: "lesson-6-jsi03",
  storageBucket: "lesson-6-jsi03.appspot.com",
  messagingSenderId: "951521090796",
  appId: "1:951521090796:web:8c10d867b7fbe9c6e2d9c9",
  measurementId: "G-EDBMMZN9SC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
