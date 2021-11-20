import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { addCommentService } from '../services/addCommentService'
import Toast from 'react-native-toast-message'

import { addPostService } from '../services/addPostService'
import { listPostsService } from '../services/listPostsService'

type PostProps = {
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

type PostResponse = {
  id?: string
  nickname: string | undefined
  email: string | undefined
  imageUrl: string
  comments: Array<{
    nickname: string | undefined
    comment: string | undefined
  }>
}

type PostProviderProps = {
  children: ReactNode
}

type PostContextProps = {
  posts: PostResponse[]
  loading: boolean
  addPost: (data: PostProps) => Promise<void>
  addComment: (postId: string, comment: string) => Promise<void>
}

export const PostContext = createContext({} as PostContextProps)

export const PostProvider = ({ children }: PostProviderProps) => {
  const { user } = useAuth()
  const [posts, setPosts] = useState<PostResponse[]>([])
  const [loading, setLoading] = useState(false)

  const loadData = async () => {
    setLoading(true)
    const postsResult = await listPostsService()
    setPosts(postsResult as PostResponse[])
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const addPost = async (data: PostProps) => {
    try {
      setLoading(true)
      await addPostService(data)
      Toast.show({
        type: 'success',
        text1: 'Post criado com sucesso'
      })
      loadData()
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Oooooops',
        text2: 'Algo deu errado'
      })
    } finally {
      setLoading(false)
    }
  }

  const addComment = async (comment: string, postId: string | undefined) => {
    await addCommentService({
      data: {
        nickname: user?.name,
        comment
      },
      postId
    })
    loadData()
  }

  return (
    <PostContext.Provider value={{
      posts,
      loading,
      addPost,
      addComment
    }}>
      { children }
    </PostContext.Provider>
  )
}
