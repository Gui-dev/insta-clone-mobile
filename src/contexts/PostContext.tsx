import React, { createContext, ReactNode, useState } from 'react'

type PostProps = {
  id: string
  nickname: string | undefined
  email: string | undefined
  imageUrl: string | undefined
  comments: Array<{
    nickname: string | undefined
    comment: string
  }>
}

type PostProviderProps = {
  children: ReactNode
}

type PostContextProps = {
  posts: PostProps[]
  loading: boolean
  addPost: (data: PostProps) => Promise<void>
  addComment: (postId: string, comment: string) => Promise<void>
}

export const PostContext = createContext({} as PostContextProps)

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(false)

  const addPost = async (data: PostProps) => {
    try {
      setLoading(true)
      setPosts([data, ...posts])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const addComment = async (postId: string, comment: string) => {
    try {
      const result = posts.map(post => {
        if (post.id === postId) {
          if (post.comments) {
            return {
              ...post,
              comments: [...post.comments, { nickname: post.nickname, comment }]
            }
          } else {
            return {
              ...post,
              comments: [{ nickname: post.nickname, comment }]
            }
          }
        }
        return post
      })

      setPosts(result)
    } catch (error) {
      console.log(error)
    }
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
