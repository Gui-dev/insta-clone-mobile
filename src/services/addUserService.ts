import { ref, set } from 'firebase/database'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { database, firebaseAuth } from './firebase'

type UserProps = {
  name: string
  nickname: string
  email: string
  password: string
}

export const addUserService = async (data: UserProps): Promise<UserProps> => {
  try {
    const { user } = await createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)

    const postRef = ref(database, `users/${user.uid}`)
    await set(postRef, {
      name: data.name,
      nickname: data.nickname,
      email: data.email
    })

    return data
  } catch (error) {
    throw new Error('Erro ao criar post')
  }
}
