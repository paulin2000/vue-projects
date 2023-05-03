// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
/* code from our Firebase console */
const firebaseConfig = {
  apiKey: "AIzaSyA2MChEYDiuO8U4Jqf3pv6MKj__DKoABak",
  authDomain: "vue-blog-c5e4a.firebaseapp.com",
  projectId: "vue-blog-c5e4a",
  storageBucket: "vue-blog-c5e4a.appspot.com",
  messagingSenderId: "727650128301",
  appId: "1:727650128301:web:54b064d58b8e86136e5124",
  measurementId: "G-X9ZZ8E9XB0"
};
// Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();