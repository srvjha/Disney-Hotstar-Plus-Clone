import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBhGjcHokZCUTMC6JljWO0nbwPJcctQBxg",
    authDomain: "disney-hotstar-clone-86591.firebaseapp.com",
    projectId: "disney-hotstar-clone-86591",
    storageBucket: "disney-hotstar-clone-86591.appspot.com",
    messagingSenderId: "858420234615",
    appId: "1:858420234615:web:7a691d830ac3568752b972",
    measurementId: "G-MFDTHEDN5Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export {auth,provider,storage};
  export default db;
