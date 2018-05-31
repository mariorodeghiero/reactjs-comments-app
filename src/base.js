import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABLGZaL-HSL9QPSOpmP9RdqFNdf8a12FI",
  authDomain: "reactjs-9528e.firebaseapp.com",
  databaseURL: "https://reactjs-9528e.firebaseio.com",
  projectId: "reactjs-9528e",
  storageBucket: "reactjs-9528e.appspot.com",
  messagingSenderId: "238075480275"
});

const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export const providers = {
  facebook: new firebase.auth.FacebookAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider()
};

export const auth = firebaseApp.auth();
export default base;
