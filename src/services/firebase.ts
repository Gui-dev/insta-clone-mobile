import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

import { firebaseConfig } from './../config/firebase'

const firebaseApp = initializeApp(firebaseConfig)
const database = getDatabase(firebaseApp)
const firebaseStorage = getStorage(firebaseApp)

export {
  firebaseApp,
  database,
  firebaseStorage
}
