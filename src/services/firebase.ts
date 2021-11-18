import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from './../config/firebase'

const firebaseApp = initializeApp(firebaseConfig)
const database = getDatabase(firebaseApp)
const firebaseStorage = getStorage(firebaseApp)
const firebaseAuth = getAuth(firebaseApp)

export {
  firebaseApp,
  database,
  firebaseStorage,
  firebaseAuth
}
