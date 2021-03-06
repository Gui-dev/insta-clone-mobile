import { onValue, ref } from 'firebase/database'

import { database } from './firebase'

type PostResponse = {
  id: string
  nickname: string | undefined
  email: string | undefined
  imageUrl: string
  comments: Array<{
    nickname: string | undefined
    comment: string | undefined
  }>
}

export const listPostsService = async (): Promise<PostResponse[]> => {
  const data: PostResponse[] = []
  const databaseRef = ref(database, 'posts')
  onValue(databaseRef, (snapshot) => {
    const result = snapshot.val()
    for (const item in result) {
      data.push({
        id: item,
        nickname: result[item].nickname,
        email: result[item].email,
        imageUrl: result[item].imageUrl,
        comments: result[item].comments
      })
    }
  })

  return data
}
