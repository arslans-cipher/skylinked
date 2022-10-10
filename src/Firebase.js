// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEoHDzxFdWVzdpYDa6VGlkUZloH8aIVYA",
  authDomain: "skylinked-7481c.firebaseapp.com",
  projectId: "skylinked-7481c",
  storageBucket: "skylinked-7481c.appspot.com",
  messagingSenderId: "593776624297",
  appId: "1:593776624297:web:e3d39452e928df1f2a9fb8",
  measurementId: "G-PC6TG5WF38"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
export default firebase