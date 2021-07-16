import firebase from 'firebase/app'
import 'firebase/firestore'  //This will import database to our file
import 'firebase/auth'
import 'firebase/analytics'
var firebaseConfig = {
  apiKey: "AIzaSyCGsuoj3-FIxJNU5xvjK3tbaCcQ_A-CeLc",
  authDomain: "living-50fdb.firebaseapp.com",
  projectId: "living-50fdb",
  storageBucket: "living-50fdb.appspot.com",
  messagingSenderId: "411895994095",
  appId: "1:411895994095:web:7e1563c9b2a288bcadad1a",
  measurementId: "G-WF485YDSF5"
};
firebase.initializeApp(firebaseConfig);  //This thing help react project connect to firebase project
firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});
                     
export default firebase;  


