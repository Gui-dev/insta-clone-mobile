import React from 'react'
import { FlatList } from 'react-native'

import { Author } from './Author'
import { Comments } from './Comments'
import { AddComment } from './AddComment'
// import { usePost } from '../../hooks/usePost'

import { Container, Content, Image } from './style'

type PostResponse = {
  nickname: string | undefined
  email: string | undefined
  imageUrl: string
  comments: Array<{
    nickname: string | undefined
    comment: string | undefined
  }>
}

type PostsProps = {
  posts: PostResponse[]
}

export const Post = ({ posts }: PostsProps) => {
  // const { addComment } = usePost()

  const handleAddComment = async (postId: string | undefined, comment: string) => {
    // await addComment(postId, comment)
  }

  return (
    <Container>
      <FlatList
        data={posts}
        keyExtractor={ item => `${item.nickname}-${new Date().getTime()}` }
        renderItem={({ item: post }) => {
          return (
            <Content key={ String(`${post.nickname}-${new Date().getTime()}`) }>
              <Image source={ { uri: post.imageUrl } }/>
              <Author user={ { name: post?.nickname, email: post?.email } }/>
              <Comments comments={ post.comments }/>
              <AddComment postId={ post?.nickname } onComment={ handleAddComment }/>
            </Content>
          )
        }}
      />
    </Container>
  )
}
