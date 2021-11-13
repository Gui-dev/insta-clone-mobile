import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

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

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const postsResult = await listPostsService()
      console.log(postsResult)
      // setPosts(postsResult as PostResponse[])
      setLoading(false)
    }

    loadData()
  }, [user?.email])

  const addPost = async (data: PostProps) => {
    try {
      setLoading(true)
      const post = await addPostService(data)
      setPosts([post, ...posts])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const addComment = async (postId: string, comment: string) => {
    console.log('Comment')
    // try {
    //   const result = posts.map(post => {
    //     if (post.id === postId) {
    //       if (post.comments) {
    //         return {
    //           ...post,
    //           comments: [...post.comments, { nickname: post.nickname, comment }]
    //         }
    //       } else {
    //         return {
    //           ...post,
    //           comments: [{ nickname: post.nickname, comment }]
    //         }
    //       }
    //     }
    //     return post
    //   })

    //   setPosts(result)
    // } catch (error) {
    //   console.log(error)
    // }
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
