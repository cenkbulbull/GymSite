import firebase from "firebase/app"
import "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_FZk6tMPCKXQfK8-TTqSKp6YiyZfEJAk",
  authDomain: "vue-gymsite.firebaseapp.com",
  projectId: "vue-gymsite",
  storageBucket: "vue-gymsite.appspot.com",
  messagingSenderId: "109833196538",
  appId: "1:109833196538:web:b8bf36b2c7449daede0a43",
  measurementId: "G-B4ZVY4FNS7"
};

firebase.initializeApp(firebaseConfig)

const firestoreRef = firebase.firestore()

export {firestoreRef}