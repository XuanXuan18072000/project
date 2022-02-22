import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp({
  apiKey: 'AIzaSyCvHWHCbQj6jmtaUrhE5mSByzSfx19bQYwz',
  authDomain: 'project1-48e71.firebaseapp.com',
  projectId: 'project1-48e71'
});
var db = firebase.firestore();
export default db;