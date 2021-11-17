import { child, ref, onValue, set } from 'firebase/database'

import { database } from './firebase'

type AddCommentServiceProps = {
  data: {
    nickname: string | undefined
    comment: string
  },
  postId: string | undefined
}

export const addCommentService = async ({ data, postId }: AddCommentServiceProps): Promise<void> => {
  try {
    const postRef = child(ref(database), `posts/${postId}/comments`)
    const updated: any = []

    onValue(postRef, async (snapshot) => {
      const result = snapshot.val()
      updated.push(...result, data)
    })

    await set(postRef, updated)
  } catch {
    throw new Error('Erro ao adicionar comentário')
  }
}
