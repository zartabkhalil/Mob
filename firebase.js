import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCy7fAL0kJMYTZYwk6WR8loyWd0dw1tUPg",
  authDomain: "mobile-85c59.firebaseapp.com",
  projectId: "mobile-85c59",
  storageBucket: "mobile-85c59.appspot.com",
  messagingSenderId: "910456844847",
  appId: "1:910456844847:web:a7714645b7681ea4d98cda",
  measurementId: "G-R6TJ4LC6BB"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
