// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBU8JwoNwdiUv4kSxYhAgDyT1G0CClgjsY',
  authDomain: 'unicornweather-f5af6.firebaseapp.com',
  projectId: 'unicornweather-f5af6',
  storageBucket: 'unicornweather-f5af6.appspot.com',
  messagingSenderId: '374155808570',
  appId: '1:374155808570:web:fa2d7a47b871d2905d4a03',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}
export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}
