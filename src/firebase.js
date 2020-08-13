import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD-boFJiNKWUuThg9SiuzLTJ6oAHmgenj8",
  authDomain: "chat-app-2221a.firebaseapp.com",
  databaseURL: "https://chat-app-2221a.firebaseio.com",
  projectId: "chat-app-2221a",
  storageBucket: "chat-app-2221a.appspot.com",
  messagingSenderId: "1068041824610",
  appId: "1:1068041824610:web:c5bfbf59cf9eeba9f2e43b",
  measurementId: "G-DC5GWP6QVJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
