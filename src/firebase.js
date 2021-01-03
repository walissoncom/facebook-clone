import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDnCGc1hwA81lXIw8Pz2RM4KPm_CE2sujE",
    authDomain: "facebook-clone-7b808.firebaseapp.com",
    projectId: "facebook-clone-7b808",
    storageBucket: "facebook-clone-7b808.appspot.com",
    messagingSenderId: "444851344521",
    appId: "1:444851344521:web:3c6953da21974a1e172258"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;