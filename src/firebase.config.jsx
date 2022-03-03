import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp({
  apiKey: "AIzaSyC2TPtb2L8g22S2G00AXKWIByFXBJy4AmE",
  authDomain: "project-alta.firebaseapp.com",
  projectId: "project-alta",
});
var db = firebase.firestore();
export default db;