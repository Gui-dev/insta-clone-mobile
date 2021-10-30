import React, { createContext, ReactNode, useState } from 'react'

type PostProps = {
  nickname: string | undefined
  email: string | undefined
  image: string | undefined
  comments: Array<{
    nickname: string | undefined
    comment: string
  }>
}

type PostProviderProps = {
  children: ReactNode
}

type PostContextProps = {
  loading: boolean
  addPost: (data: PostProps) => Promise<void>
}

export const PostContext = createContext({} as PostContextProps)

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(false)

  const addPost = async (data: PostProps) => {
    try {
      setLoading(true)
      setPosts([...posts, data])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  console.log(posts)

  return (
    <PostContext.Provider value={{
      loading,
      addPost
    }}>
      { children }
    </PostContext.Provider>
  )
}
