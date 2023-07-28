import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQUmLePEwfr2B5IODcC7R4fKVFjZytdXs",
  authDomain: "app-diario-4ba8f.firebaseapp.com",
  databaseURL: "https://app-diario-4ba8f-default-rtdb.firebaseio.com",
  projectId: "app-diario-4ba8f",
  storageBucket: "app-diario-4ba8f.appspot.com",
  messagingSenderId: "30498955239",
  appId: "1:30498955239:web:47934e76e9407592b56742"
};

const appFirebase = firebase.initializeApp(firebaseConfig);

export default appFirebase;