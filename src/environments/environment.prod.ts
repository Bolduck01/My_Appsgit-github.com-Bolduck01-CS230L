export const environment = {
    production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyATLPyjo9V7rfnDUKdNTSBoVGIs6DnoE9s",
  authDomain: "hbo-app-86135.firebaseapp.com",
  databaseURL: "https://hbo-app-86135-default-rtdb.firebaseio.com",
  projectId: "hbo-app-86135",
  storageBucket: "hbo-app-86135.appspot.com",
  messagingSenderId: "72037158878",
  appId: "1:72037158878:web:3053c7821d12110dc0174f",
  measurementId: "G-6EQSRB61P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);