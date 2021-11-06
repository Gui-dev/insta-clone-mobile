import firebase from 'firebase/app'

import 'firebase/database'

import { firebaseConfig } from './../config/firebase'

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export {
  firebase,
  database
}
