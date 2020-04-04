import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

const config = {
    
        apiKey: "AIzaSyD3-rXMrlZ3uzsgfCzAlWRvBbf-e4Fd0vE",
        authDomain: "mandy-db.firebaseapp.com",
        databaseURL: "https://mandy-db.firebaseio.com",
        projectId: "mandy-db",
        storageBucket: "mandy-db.appspot.com",
        messagingSenderId: "655806700362",
        appId: "1:655806700362:web:c6b06e0deaa8b3086b7fb3",
        measurementId: "G-Y896W1K2EL"
      };

      firebase.initializeApp(config);
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});

      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      export default firebase;