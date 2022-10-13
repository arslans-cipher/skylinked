// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAEoHDzxFdWVzdpYDa6VGlkUZloH8aIVYA",
  authDomain: "skylinked-7481c.firebaseapp.com",
  projectId: "skylinked-7481c",
  storageBucket: "skylinked-7481c.appspot.com",
  messagingSenderId: "593776624297",
  appId: "1:593776624297:web:e3d39452e928df1f2a9fb8",
  measurementId: "G-PC6TG5WF38"
}; 

// const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseApp = initializeApp(firebaseConfig)
// const db = firebaseApp.firestore()
const db = getFirestore(firebaseApp)
// const auth = firebase.auth()
const auth = getAuth(firebaseApp);

export { db, auth }
