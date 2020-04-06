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

      export const createUserProfileDocument = async (userAuth, additionalData) => {
          if (!userAuth) return;

          const userRef = firestore.doc(`user/${userAuth.uid}`);

          const snapShot = await userRef.get();
          if (!snapShot.exists){
              const {displayName, email} = userAuth;
              const dateCreated = new Date();

              try{
                  await userRef.set(
                      {
                         displayName,
                         email,
                         dateCreated,
                         ...additionalData
                      }
                  )

              } catch(error){
                  console.log('error creating user', error.message)

              }
          }

         return userRef;
      }

      firebase.initializeApp(config);
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});

      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      export default firebase;