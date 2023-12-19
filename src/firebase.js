
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCi8S8iJbDsOfV8FP2my9PEX7ab6ipmw6U",
    authDomain: "youtils-209f6.firebaseapp.com",
    databaseURL: "https://youtils-209f6-default-rtdb.firebaseio.com",
    projectId: "youtils-209f6",
    storageBucket: "youtils-209f6.appspot.com",
    messagingSenderId: "891012048528",
    appId: "1:891012048528:web:1a9e7e8b9825c85a1f9a15",
    measurementId: "G-TWYCXFEYX6"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();


  export { app, analytics, auth, provider};