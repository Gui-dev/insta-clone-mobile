import React from 'react'
import { FlatList } from 'react-native'

import { Author } from './Author'
import { Comments } from './Comments'
import { AddComment } from './AddComment'
import { Container, Content, Image } from './style'

type User = {
  email: string
  name: string
}

type CommentsProps = {
  nickname: string
  comments: Array<string>
}

type Posts = {
  id: string
  imageUrl: string;
  user: User,
  comments: CommentsProps[]
}

type PostProps = {
  posts: Posts[]
}

export const Post = ({ posts }: PostProps) => {
  return (
    <Container>
      <FlatList
        data={posts}
        keyExtractor={ item => `${item.id}` }
        renderItem={({ item: post }) => {
          return (
            <Content key={ String(post.id) }>
              <Image source={
                { uri: post.imageUrl }
              }/>
              <Author user={ post.user }/>
              <Comments comments={ post.comments }/>
              <AddComment />
            </Content>
          )
        }}
      />
    </Container>
  )
}
