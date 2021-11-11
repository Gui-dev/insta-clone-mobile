import { ref, push } from 'firebase/database'

import { database } from './../services/firebase'
import { addPhotoService } from './addPhotoService'

type PostProps = {
  id: string
  nickname: string | undefined
  email: string | undefined
  image: {
    uri: string | undefined
  }
  comments: Array<{
    nickname: string | undefined
    comment: string
  }>
}

export const addPostService = async (data: PostProps): Promise<void> => {
  try {
    const imageUri = data.image?.uri
    const photo = await addPhotoService(imageUri)

    const post = {
      nickname: data.nickname,
      email: data.email,
      imageUrl: photo.url,
      comments: data.comments
    }

    const postRef = ref(database, 'posts')
    await push(postRef, post)
  } catch (error) {
    console.log('Error: ', error)
    // throw new Error('Erro ao criar post')
  }
}
