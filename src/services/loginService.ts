import { AuthError, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { get, ref } from 'firebase/database'

import { database, firebaseAuth } from './firebase'

type loginServiceProps = {
  email: string
  password: string
}

type LoginResponse = {
  name: string
  nickname: string
  email: string
}

export const loginService = async (data: loginServiceProps): Promise<LoginResponse> => {
  try {
    const { user } = await signInWithEmailAndPassword(firebaseAuth, data.email, data.password)

    const userRef = ref(database, `users/${user.uid}`)
    const result = await get(userRef)
    const response = result.val()

    const userData = {
      name: response.name,
      nickname: response.nickname,
      email: response.email
    }

    return userData
  } catch (error) {
    const err = error as AuthError

    switch (err.code) {
      case 'auth/user-not-found':
        throw new Error('User not found')
      case 'auth/wrong-password':
        throw new Error('User or password invalid')
      default:
        throw new Error('Ooops, algo deu errado, tente novamente')
    }
  }
}

export const logoutService = async (): Promise<void> => {
  await signOut(firebaseAuth)
}
