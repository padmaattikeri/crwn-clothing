import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCj98_BbPD6iOB-7aQQF_Ut_WsJpZShiKw",
    authDomain: "crwn-db-42bdb.firebaseapp.com",
    projectId: "crwn-db-42bdb",
    storageBucket: "crwn-db-42bdb.appspot.com",
    messagingSenderId: "874580588257",
    appId: "1:874580588257:web:27c303a750bf145d8f69a0",
    measurementId: "G-4FRBYCW3W2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;